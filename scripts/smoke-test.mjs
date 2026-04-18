#!/usr/bin/env node
/**
 * smoke-test.mjs
 *
 * Hits every URL in a sitemap against a base URL and reports any page that
 * looks broken. Intended to run against Netlify deploy previews before merge
 * and against production right after deploy.
 *
 * Signals we check:
 *   - HTTP status must be 200 (redirects during smoke-test are a regression)
 *   - HTML responses must not match the SPA-shell signature (Content-Length
 *     ≈ bare index.html size with the default brand title). This is the
 *     exact symptom we saw in the 4/18 Screaming Frog crawl.
 *   - Title must not be empty or equal the default placeholder
 *   - Meta description must not be empty
 *
 * Usage:
 *   node scripts/smoke-test.mjs --base https://deploy-preview-58--allphase.netlify.app
 *   node scripts/smoke-test.mjs --base https://allphaseconstructionfl.com --sitemap https://allphaseconstructionfl.com/sitemap.xml
 *   node scripts/smoke-test.mjs --base https://... --urls dist/sitemap.xml --concurrency 15
 *
 * Exit code: 0 when every URL passes, 1 when any URL fails. Designed to run
 * in CI / pre-merge.
 */

import fs from 'node:fs';
import process from 'node:process';

const DEFAULT_BASE = 'https://allphaseconstructionfl.com';
const SPA_SHELL_SIZE = 18504;
const DEFAULT_TITLE = 'Roofing Contractor | Broward & Palm Beach | All Phase USA';
const USER_AGENT = 'AllPhase-SmokeTest/1.0';

function parseArgs(argv) {
  const args = {
    base: DEFAULT_BASE,
    sitemap: null,
    urls: null,
    concurrency: 10,
    timeout: 15000,
    json: false,
    verbose: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--base') args.base = argv[++i].replace(/\/$/, '');
    else if (a === '--sitemap') args.sitemap = argv[++i];
    else if (a === '--urls') args.urls = argv[++i];
    else if (a === '--concurrency') args.concurrency = parseInt(argv[++i], 10) || 10;
    else if (a === '--timeout') args.timeout = parseInt(argv[++i], 10) || 15000;
    else if (a === '--json') args.json = true;
    else if (a === '--verbose' || a === '-v') args.verbose = true;
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/smoke-test.mjs --base <url> [--sitemap <url|path>] [--urls <path>] [--concurrency N] [--json]');
      process.exit(0);
    }
  }
  return args;
}

function parseSitemapXml(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(m => m[1].trim());
}

async function loadSitemap(args) {
  if (args.urls) {
    const text = fs.readFileSync(args.urls, 'utf-8');
    if (args.urls.endsWith('.xml')) return parseSitemapXml(text);
    // one URL per line
    return text.split('\n').map(s => s.trim()).filter(Boolean);
  }
  const url = args.sitemap || `${args.base}/sitemap.xml`;
  if (url.startsWith('http')) {
    console.error(`Fetching sitemap: ${url}`);
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${url}`);
    const xml = await res.text();
    return parseSitemapXml(xml);
  }
  const text = fs.readFileSync(url, 'utf-8');
  return parseSitemapXml(text);
}

function rewriteToBase(url, sourceBase, targetBase) {
  // If the sitemap entry is on the production domain but we're testing a
  // deploy preview, swap the origin so we're actually hitting the preview.
  try {
    const u = new URL(url);
    const prodHost = new URL(sourceBase).host;
    const targetHost = new URL(targetBase).host;
    if (u.host === prodHost && u.host !== targetHost) {
      return `${targetBase}${u.pathname}${u.search}`;
    }
  } catch {
    // leave as-is
  }
  return url;
}

async function checkUrl(url, args) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), args.timeout);
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': USER_AGENT },
      signal: ctrl.signal,
      redirect: 'follow',
    });
    const problems = [];
    const ct = res.headers.get('content-type') || '';
    let bodySize = 0;
    let title = '';
    let description = '';

    if (res.status !== 200) problems.push(`status ${res.status}`);
    if (res.redirected && res.url !== url) {
      problems.push(`redirected to ${res.url}`);
    }

    if (ct.includes('text/html')) {
      const body = await res.text();
      bodySize = Buffer.byteLength(body, 'utf-8');
      if (bodySize === SPA_SHELL_SIZE) {
        problems.push(`SPA-shell size (${bodySize}B) — page not prerendered`);
      }
      const tm = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      title = tm ? tm[1].replace(/\s+/g, ' ').trim() : '';
      const dm = body.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
      description = dm ? dm[1].trim() : '';
      if (!title) problems.push('empty <title>');
      else if (title === DEFAULT_TITLE) problems.push('default brand title (hydration/shell fallback)');
      if (!description) problems.push('empty meta description');
    } else {
      // Non-HTML — body size for reference but no content checks
      const buf = await res.arrayBuffer();
      bodySize = buf.byteLength;
    }

    return {
      url,
      status: res.status,
      contentType: ct,
      size: bodySize,
      title,
      description: description.length > 80 ? description.slice(0, 77) + '...' : description,
      ok: problems.length === 0,
      problems,
    };
  } catch (e) {
    return { url, ok: false, problems: [`error: ${e.message || e}`] };
  } finally {
    clearTimeout(t);
  }
}

async function runPool(items, concurrency, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function next() {
    const i = cursor++;
    if (i >= items.length) return;
    results[i] = await worker(items[i], i);
    return next();
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, next);
  await Promise.all(workers);
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const rawUrls = await loadSitemap(args);
  const urls = rawUrls.map(u => rewriteToBase(u, DEFAULT_BASE, args.base));
  console.error(`Smoke-testing ${urls.length} URLs against ${args.base}  (concurrency=${args.concurrency})`);

  let done = 0;
  const results = await runPool(urls, args.concurrency, async (url) => {
    const r = await checkUrl(url, args);
    done++;
    if (args.verbose || !r.ok) {
      const tag = r.ok ? 'OK ' : 'FAIL';
      console.error(`[${done}/${urls.length}] ${tag}  ${url}${r.problems.length ? '  — ' + r.problems.join('; ') : ''}`);
    } else if (done % 25 === 0) {
      console.error(`[${done}/${urls.length}] ...`);
    }
    return r;
  });

  const failed = results.filter(r => !r.ok);
  const passed = results.length - failed.length;

  const summary = {
    base: args.base,
    total: results.length,
    passed,
    failed: failed.length,
    failures: failed,
  };

  if (args.json) {
    console.log(JSON.stringify(summary, null, 2));
  } else {
    console.log();
    console.log(`=== Smoke-test summary ===`);
    console.log(`Base:   ${args.base}`);
    console.log(`Total:  ${results.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed.length}`);
    if (failed.length) {
      console.log();
      console.log(`=== Failures ===`);
      for (const f of failed) {
        console.log(`  ${f.url}`);
        for (const p of f.problems) console.log(`     • ${p}`);
      }
    }
  }

  process.exit(failed.length > 0 ? 1 : 0);
}

main().catch(err => {
  console.error(err);
  process.exit(2);
});
