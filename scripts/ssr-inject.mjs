#!/usr/bin/env node
/**
 * SSR inject — puts the REAL React page markup into the initial HTML.
 *
 * Runs after scripts/prerender-static.mjs. For every prerendered public page
 * in dist/, it renders the React app server-side (dist-ssr/entry-server.mjs,
 * built by `vite build --config vite.config.ssr.ts`) and replaces the
 * contents of <div id="root"> with that markup, so crawlers that do not run
 * JavaScript (GPTBot, PerplexityBot, ClaudeBot, etc.) see the full body copy:
 * H1, every section, FAQs, links.
 *
 * What it deliberately does NOT touch:
 *   - <head>: title, meta, canonical, OG, and every JSON-LD block stay exactly
 *     as prerender-static.mjs wrote them (verified per page; mismatch = skip).
 *   - Tracking: the window.load-deferred gtag / CallRail scripts after #root
 *     are untouched; the Ads conversion path (PR-188 leadConversion.ts,
 *     PR-205 clickId capture) is client-side code and unchanged.
 *
 * Safety model (additive only — any doubt keeps today's HTML):
 *   - Skips /blog, /lp/ (paid landing pages), /admin, /qa, thank-you pages.
 *   - Per page, the SSR result must have an <h1>, must not be the 404 page,
 *     and must carry at least 80% of the words the current static block has.
 *     Otherwise the page keeps its existing prerendered HTML.
 *   - Any render error or timeout => page skipped, build continues.
 *   - If the SSR bundle is missing the script exits 0 without changes.
 *
 * Client side: pages that were server-rendered get <div id="root" data-ssr="1">
 * and src/main.tsx hydrates them (hydrateRoot) instead of re-mounting, so the
 * page does not flash. Pages without the flag behave exactly as before.
 *
 * Pre-hydration form guard: a tiny inline script blocks native submission of
 * a <form> that React has not hydrated yet (no __reactProps key on the node),
 * so a fast tap on "Submit" can never do a native GET that drops the lead.
 * Once hydrated, the form's own React onSubmit handles everything as before.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const BUNDLE = path.join(ROOT, 'dist-ssr', 'entry-server.mjs');
const STRICT = process.env.SSR_INJECT === 'strict'; // fail build on errors (off by default)

const EXCLUDE_PREFIXES = ['/blog', '/lp/', '/admin', '/qa', '/surfer', '/404'];
const EXCLUDE_CONTAINS = ['thank-you'];
const MIN_WORD_RATIO = 0.8;

const FORM_GUARD = `<script>/* ssr-inject: block native submit of not-yet-hydrated forms */document.addEventListener('submit',function(e){var f=e.target;if(f&&f.tagName==='FORM'&&!Object.keys(f).some(function(k){return k.indexOf('__reactProps')===0})){e.preventDefault();}},true);</script>`;

function words(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

/**
 * React's server renderer HTML-escapes text children, so a component written
 * as <script type="application/ld+json">{JSON.stringify(x)}</script> comes out
 * as {&quot;@context&quot;…} — invalid JSON in raw HTML (browsers don't decode
 * entities inside <script>). The browser-side render sets textContent raw, so
 * decoding here makes the server markup match what React renders on the client
 * (and what Google already sees after JS). Any "<" is re-escaped as < so
 * the JSON can never close the <script> early.
 */
function fixInlineJsonLd(markup) {
  return markup.replace(
    /(<script[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/g,
    (_, open, body, close) => {
      const decoded = body
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/</g, '\\u003c');
      return open + decoded + close;
    }
  );
}

/**
 * Nested <a> inside <a> is invalid HTML: the browser's parser splits it, so
 * the DOM built from server markup can't match React's tree and hydration
 * fails (React #418) and falls back to a full client re-render. Pages with
 * nested anchors keep their static prerender until the component is fixed.
 */
function hasNestedAnchor(markup) {
  let depth = 0;
  for (const m of markup.matchAll(/<a\b[^>]*>|<\/a>/g)) {
    if (m[0] === '</a>') depth = Math.max(0, depth - 1);
    else if (++depth > 1) return true;
  }
  return false;
}

function headOf(html) {
  const i = html.indexOf('</head>');
  return i === -1 ? null : html.slice(0, i);
}

/** Locate <div id="root" ...> and its matching </div>. */
function findRoot(html) {
  const open = html.match(/<div id="root"[^>]*>/);
  if (!open) return null;
  const start = open.index;
  const innerStart = start + open[0].length;
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = innerStart;
  let depth = 1;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].startsWith('</')) depth--;
    else depth++;
    if (depth === 0) {
      return { start, innerStart, innerEnd: m.index, end: m.index + m[0].length };
    }
  }
  return null;
}

function listPages(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name === 'assets') continue;
      out.push(...listPages(path.join(dir, e.name), `${base}/${e.name}`));
    } else if (e.name === 'index.html') {
      out.push({ file: path.join(dir, e.name), url: base || '/' });
    }
  }
  return out;
}

function excluded(url) {
  return (
    EXCLUDE_PREFIXES.some((p) => url === p.replace(/\/$/, '') || url.startsWith(p.endsWith('/') ? p : p + '/') || url === p) ||
    EXCLUDE_CONTAINS.some((c) => url.includes(c))
  );
}

async function main() {
  if (!fs.existsSync(BUNDLE)) {
    console.log('⚠️  ssr-inject: dist-ssr/entry-server.mjs not found — skipping (pages keep static prerender).');
    return;
  }
  const { render } = await import(pathToFileURL(BUNDLE).href);

  const pages = listPages(DIST).filter((p) => !excluded(p.url));
  const stats = { injected: 0, skipped: 0 };
  const skipped = [];
  const t0 = Date.now();

  for (const { file, url } of pages) {
    const html = fs.readFileSync(file, 'utf-8');
    const root = findRoot(html);
    if (!root) { skipped.push([url, 'no #root']); continue; }

    let ssr;
    try {
      ssr = fixInlineJsonLd(await render(url));
    } catch (err) {
      skipped.push([url, `render error: ${String(err && err.message || err).slice(0, 120)}`]);
      continue;
    }

    const h1s = (ssr.match(/<h1[\s>]/g) || []).length;
    const ssrWords = words(ssr);
    const oldWords = words(html.slice(root.innerStart, root.innerEnd));
    if (h1s < 1) { skipped.push([url, 'no <h1> in SSR output']); continue; }
    if (/<h1[^>]*>\s*404\s*<\/h1>/.test(ssr)) { skipped.push([url, 'route renders 404 in React']); continue; }
    if (hasNestedAnchor(ssr)) { skipped.push([url, 'nested <a> in markup (would break hydration) — fix component to enable']); continue; }
    if (ssrWords < oldWords * MIN_WORD_RATIO) {
      skipped.push([url, `SSR ${ssrWords} words < ${MIN_WORD_RATIO * 100}% of static ${oldWords}`]);
      continue;
    }

    const openTag = html.slice(root.start, root.innerStart).replace('<div id="root"', '<div id="root" data-ssr="1"');
    const next =
      html.slice(0, root.start) +
      FORM_GUARD + '\n    ' +
      openTag + ssr + '</div>' +
      html.slice(root.end);

    // Hard guarantee: <head> (meta + JSON-LD) is byte-identical.
    if (headOf(next) !== headOf(html)) { skipped.push([url, 'head changed — refused']); continue; }

    fs.writeFileSync(file, next);
    stats.injected++;
  }
  stats.skipped = skipped.length;

  console.log('\n' + '='.repeat(70));
  console.log(`SSR INJECT: ${stats.injected} pages server-rendered, ${stats.skipped} kept static (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
  for (const [u, why] of skipped) console.log(`   ⏭  ${u} — ${why}`);
  console.log('='.repeat(70) + '\n');
  if (STRICT && skipped.some(([, w]) => w.startsWith('render error'))) process.exit(1);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('⚠️  ssr-inject failed — pages keep static prerender:', err);
    process.exit(STRICT ? 1 : 0);
  });
