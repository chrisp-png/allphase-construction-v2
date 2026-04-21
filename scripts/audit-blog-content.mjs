/**
 * Blog content audit — classifies every blog post in the Supabase-backed
 * content pipeline into one of four states:
 *
 *   LIVE      — Supabase row exists with substantive content (>= 500 chars,
 *               not a "See blog/*" placeholder). These render perfectly.
 *   STUB      — Supabase row exists but content is empty, too short, or a
 *               placeholder. These prerender to boilerplate and hydrate to
 *               a thin page — weak SEO, should be filled in or redirected.
 *   MISSING   — Slug is in KNOWN_SUPABASE_SLUGS (the prerender safety list)
 *               but Supabase has no row for it. Currently renders boilerplate
 *               from prerender-static.mjs but has no real content to hydrate.
 *   UNTRACKED — Supabase has a published row but the slug is NOT in
 *               KNOWN_SUPABASE_SLUGS. These will prerender correctly as
 *               long as Supabase is reachable at build time, but will fall
 *               through to the slug stub if Supabase is down.
 *
 * Data sources (priority order):
 *   1. --file=PATH    → read a local cache JSON file
 *   2. --url=URL      → fetch a remote /blog-supabase-cache.json
 *   3. --live         → query Supabase directly (needs VITE_SUPABASE_URL +
 *                       VITE_SUPABASE_ANON_KEY env vars)
 *   4. default        → dist/blog-supabase-cache.json
 *
 * Output:
 *   - Console summary with counts and per-slug status.
 *   - audit-reports/blog-content-audit-YYYY-MM-DD.md  (markdown)
 *   - Suggested edge-function additions for STUB and MISSING slugs, pasted
 *     at the bottom of the report in the exact BLOG_REDIRECTS object shape.
 *
 * Exit codes:
 *   0  — all KNOWN_SUPABASE_SLUGS are LIVE (no action needed)
 *   1  — one or more are STUB/MISSING (action recommended)
 *   2  — script error (cache unreadable, Supabase unreachable, etc.)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Keep this in lock-step with KNOWN_SUPABASE_SLUGS in scripts/prerender-static.mjs.
// If the two lists ever drift, the prerender script becomes the source of truth —
// this audit will flag drift as MISSING.
const KNOWN_SUPABASE_SLUGS = [
  'best-roofing-companies-south-florida',
  'can-a-screen-room-add-to-my-property-value',
  'can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida',
  'certified-vs-licensed-roofer-florida',
  'choosing-between-roof-repair-and-full-replacement',
  'common-roofing-myths-that-homeowners-still-believe',
  'complete-roof-replacement-process-10-steps',
  'do-i-need-a-roof-inspection-after-a-storm',
  'dont-replace-your-roof-restore-it-instead',
  'how-climate-change-is-impacting-roofing-choices-in-coastal-areas',
  'how-solar-impacts-property-taxes-in-florida',
  'how-to-choose-roofing-materials-for-large-scale-projects',
  'how-to-combine-solar-and-a-new-roof-for-maximum-efficiency',
  'how-to-plan-long-term-roofing-budgets-for-your-condo-association',
  'how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home',
  'how-to-protect-roof-decking-from-moisture-damage-during-construction',
  'how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive',
  'metal-roof-vs-shingles-florida-2026',
  'metal-roof-vs-tile-roof-south-florida-hurricanes',
  'metal-roofing-south-florida-what-homeowners-need-to-know',
  'professional-roof-inspection-south-florida',
  'residential-flat-roofs-types-options-and-florida-considerations',
  'roof-pricing-financing-guide',
  'roof-replacement-cost-broward-county-2026',
  'roof-replacement-cost-palm-beach-county-2026',
  'soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa',
  'the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet',
  'the-importance-of-proper-flashing-installation-to-prevent-roof-leaks',
  'the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles',
  'the-pros-and-cons-of-flat-roofs-for-florida-homes',
  'the-role-of-roof-pitch-in-water-drainage-and-design',
  'visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview',
  'what-is-roof-underlayment-and-why-does-it-matter',
  'what-makes-a-roof-hurricane-resistant',
  'what-south-florida-homeowners-get-wrong-about-roof-replacement',
  'whats-the-lifespan-of-a-solar-ready-roof',
  'why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa',
  'wind-mitigation-roof-south-florida',
];

const MIN_CONTENT_CHARS = 500;       // matches prerender-static.mjs hasRealContent gate
const PLACEHOLDER_PREFIX = 'see blog/'; // matches prerender-static.mjs placeholder check

// ─── Arg parsing ────────────────────────────────────────────────────────────

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .filter(arg => arg.startsWith('--'))
    .map(arg => {
      const eq = arg.indexOf('=');
      return eq > -1
        ? [arg.slice(2, eq), arg.slice(eq + 1)]
        : [arg.slice(2), true];
    }),
);

// ─── Data loading ───────────────────────────────────────────────────────────

async function loadFromFile(filePath) {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Cache file not found: ${abs}`);
  }
  const raw = fs.readFileSync(abs, 'utf8');
  return { source: `file:${abs}`, payload: JSON.parse(raw) };
}

async function loadFromUrl(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} fetching ${url}`);
  }
  const payload = await response.json();
  return { source: `url:${url}`, payload };
}

async function loadFromSupabase() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL
    || 'https://vsjebxljdhomgmqbqgdi.supabase.co';
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
  if (!supabaseAnonKey) {
    throw new Error(
      '--live requires VITE_SUPABASE_ANON_KEY env var. Set it or drop the flag.',
    );
  }
  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, slug, title, content, published')
    .eq('published', true);
  if (error) throw error;
  const posts = {};
  for (const row of data || []) {
    if (!row.slug) continue;
    posts[row.slug] = row;
  }
  return {
    source: `supabase:${supabaseUrl}`,
    payload: {
      generatedAt: new Date().toISOString(),
      supabaseReachable: true,
      postCount: Object.keys(posts).length,
      posts,
    },
  };
}

async function loadData() {
  if (args.file) return loadFromFile(args.file);
  if (args.url) return loadFromUrl(args.url);
  if (args.live) return loadFromSupabase();
  return loadFromFile('dist/blog-supabase-cache.json');
}

// ─── Classification ─────────────────────────────────────────────────────────

function classify(row) {
  if (!row) return { status: 'MISSING', reason: 'not in cache' };
  const content = String(row.content || '').trim();
  if (!content) return { status: 'STUB', reason: 'empty content' };
  if (content.toLowerCase().startsWith(PLACEHOLDER_PREFIX)) {
    return {
      status: 'STUB',
      reason: `placeholder content ("${content.slice(0, 40)}…")`,
    };
  }
  if (content.length < MIN_CONTENT_CHARS) {
    return {
      status: 'STUB',
      reason: `content too short (${content.length} < ${MIN_CONTENT_CHARS} chars)`,
    };
  }
  return { status: 'LIVE', reason: `${content.length} chars` };
}

// ─── Reporting ──────────────────────────────────────────────────────────────

function buildReport({ source, payload, rows }) {
  const now = new Date();
  const ymd = now.toISOString().slice(0, 10);

  const byStatus = { LIVE: [], STUB: [], MISSING: [], UNTRACKED: [] };
  for (const row of rows) byStatus[row.status].push(row);

  const lines = [];
  lines.push(`# Blog content audit — ${ymd}`);
  lines.push('');
  lines.push(`Generated: ${now.toISOString()}`);
  lines.push(`Source: \`${source}\``);
  lines.push(`Supabase reachable: \`${payload.supabaseReachable === true}\``);
  lines.push(`Cache generated at: \`${payload.generatedAt || '(unknown)'}\``);
  lines.push(`Cache post count: \`${payload.postCount ?? 0}\``);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Status | Count | Meaning |');
  lines.push('|---|---|---|');
  lines.push(
    `| LIVE | ${byStatus.LIVE.length} | Supabase row ≥ ${MIN_CONTENT_CHARS} chars, renders rich content |`,
  );
  lines.push(
    `| STUB | ${byStatus.STUB.length} | Supabase row present but thin/placeholder — consider filling or redirecting |`,
  );
  lines.push(
    `| MISSING | ${byStatus.MISSING.length} | Known slug absent from Supabase — prerender falls back to boilerplate |`,
  );
  lines.push(
    `| UNTRACKED | ${byStatus.UNTRACKED.length} | Supabase row not in KNOWN_SUPABASE_SLUGS (no safety net if Supabase fails at build) |`,
  );
  lines.push('');

  for (const status of ['STUB', 'MISSING', 'UNTRACKED', 'LIVE']) {
    const bucket = byStatus[status];
    if (!bucket.length) continue;
    lines.push(`## ${status} (${bucket.length})`);
    lines.push('');
    lines.push('| Slug | Length | Reason |');
    lines.push('|---|---|---|');
    for (const row of bucket) {
      lines.push(
        `| \`${row.slug}\` | ${row.contentLength ?? '—'} | ${row.reason} |`,
      );
    }
    lines.push('');
  }

  // Suggested edge-function additions for STUB + MISSING. Default to 301 → /blog
  // because that's the safest fallback (blog hub is always up). The operator
  // should review and retarget to a relevant article where one exists.
  const actionable = [...byStatus.STUB, ...byStatus.MISSING];
  if (actionable.length) {
    lines.push('## Suggested netlify/edge-functions/blog-redirects.ts additions');
    lines.push('');
    lines.push('Review each entry and retarget the `to` field to a relevant');
    lines.push('published article where one exists. Change `status` to 410 for');
    lines.push('slugs with no good redirect target (permanent removal).');
    lines.push('');
    lines.push('```ts');
    lines.push(`  // Blog content audit — ${ymd}`);
    for (const row of actionable) {
      lines.push(
        `  '/blog/${row.slug}': { to: '/blog', status: 301 }, // ${row.status}: ${row.reason}`,
      );
    }
    lines.push('```');
    lines.push('');
  }

  lines.push('## Full row inventory');
  lines.push('');
  lines.push('| Slug | Status | Content length | Title |');
  lines.push('|---|---|---|---|');
  for (const row of rows.sort((a, b) => a.slug.localeCompare(b.slug))) {
    const title = (row.title || '').replace(/\|/g, '\\|').slice(0, 80);
    lines.push(
      `| \`${row.slug}\` | ${row.status} | ${row.contentLength ?? '—'} | ${title} |`,
    );
  }
  lines.push('');

  return { markdown: lines.join('\n'), byStatus };
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  let source, payload;
  try {
    ({ source, payload } = await loadData());
  } catch (err) {
    console.error(`✗ Could not load cache data: ${err.message}`);
    process.exit(2);
  }

  const posts = payload?.posts || {};
  const cacheSlugs = new Set(Object.keys(posts));
  const knownSet = new Set(KNOWN_SUPABASE_SLUGS);

  const rows = [];

  // Classify every KNOWN_SUPABASE_SLUG
  for (const slug of KNOWN_SUPABASE_SLUGS) {
    const row = posts[slug];
    const verdict = classify(row);
    rows.push({
      slug,
      status: verdict.status,
      reason: verdict.reason,
      contentLength: row ? String(row.content || '').length : 0,
      title: row?.title || '',
    });
  }

  // Flag UNTRACKED: Supabase has a row but it's not in our safety list
  for (const slug of cacheSlugs) {
    if (knownSet.has(slug)) continue;
    const row = posts[slug];
    const contentLength = String(row.content || '').length;
    rows.push({
      slug,
      status: 'UNTRACKED',
      reason:
        contentLength >= MIN_CONTENT_CHARS
          ? `live row, ${contentLength} chars — add to KNOWN_SUPABASE_SLUGS`
          : `row too thin, ${contentLength} chars — add to KNOWN_SUPABASE_SLUGS or redirect`,
      contentLength,
      title: row.title || '',
    });
  }

  const { markdown, byStatus } = buildReport({ source, payload, rows });

  const outDir = path.join(ROOT, 'audit-reports');
  fs.mkdirSync(outDir, { recursive: true });
  const ymd = new Date().toISOString().slice(0, 10);
  const outPath = path.join(outDir, `blog-content-audit-${ymd}.md`);
  fs.writeFileSync(outPath, markdown);

  // Console summary
  console.log('');
  console.log('📊 Blog content audit');
  console.log(`   Source:         ${source}`);
  console.log(`   Cache posts:    ${payload?.postCount ?? 0}`);
  console.log(`   Supabase ok:    ${payload?.supabaseReachable === true}`);
  console.log('');
  console.log(`   ✓ LIVE          ${byStatus.LIVE.length}`);
  console.log(`   ⚠ STUB          ${byStatus.STUB.length}`);
  console.log(`   ✗ MISSING       ${byStatus.MISSING.length}`);
  console.log(`   ? UNTRACKED     ${byStatus.UNTRACKED.length}`);
  console.log('');
  console.log(`   📄 Report:      ${path.relative(ROOT, outPath)}`);
  console.log('');

  const dirty = byStatus.STUB.length + byStatus.MISSING.length;
  if (!payload?.supabaseReachable) {
    console.warn(
      '⚠ supabaseReachable=false in the cache — this audit reflects prerender-time state only.',
    );
    console.warn('  Run with --live or against a deploy where Supabase was reachable.');
  }
  process.exit(dirty > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('✗ Unhandled error:', err);
  process.exit(2);
});
