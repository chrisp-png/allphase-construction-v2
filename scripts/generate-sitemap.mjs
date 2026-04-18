/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SITEMAP GENERATOR (dist-walker version)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Walks the post-prerender dist/ directory to find every index.html file and
 * emits sitemap.xml from the actual deployed URL universe. This replaces the
 * previous generator which hand-maintained four parallel allowlists
 * (LOCATION_MONEY_PAGES, APPROVED_REPAIR_CITIES, APPROVED_INSPECTION_CITIES,
 * LOCATION_SUB_PAGES) that inevitably drifted out of sync with the prerender
 * script. As of the rewrite, the old generator was producing 129 URLs while
 * the prerender was producing 259 — a 130-URL gap that was entirely due to
 * allowlist rot.
 *
 * Key architectural change: this script now runs AFTER `npm run prerender`
 * in the build chain (see package.json). That ordering is load-bearing —
 * running it before prerender produces an empty sitemap because dist/ doesn't
 * yet contain the prerendered pages.
 *
 * Priority assignment is pattern-based (see PRIORITY_RULES). The rough
 * hierarchy, from highest to lowest:
 *   1.0  = home
 *   0.95 = top-level service pages (/roof-replacement, /roof-repair)
 *   0.9  = city money pages + county hubs + top-level important pages
 *   0.8  = repair/inspection spokes, best-roofers, landmarks, county resources
 *   0.7  = top-5-roofer lists, geo/neighborhood pages, blog articles
 *   0.6  = service-area hubs and everything else
 *
 * Writes both public/sitemap.xml (kept in git for visibility) and
 * dist/sitemap.xml (what Netlify deploys).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CANONICAL_DOMAIN = 'https://allphaseconstructionfl.com';
const DIST_DIR = path.join(__dirname, '../dist');
const APP_TSX = path.join(__dirname, '../src/App.tsx');
const BLOG_INDEX_HTML = path.join(DIST_DIR, 'blog/index.html');
const BLOG_REDIRECTS_TS = path.join(__dirname, '../netlify/edge-functions/blog-redirects.ts');
const PUBLIC_SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const DIST_SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');

// ─── Paths to exclude from sitemap ───────────────────────────────────────────
// These are files that exist in dist/ but should NOT be discoverable by Google.
// Order matters only for readability — all predicates are OR-ed.
const EXCLUDED_PATH_PATTERNS = [
  /^\/404$/,                     // SPA 404 fallback
  /^\/403$/,                     // Auth error page
  /^\/surfer\//,                 // Dev/CMS artifacts (Surfer SEO snapshots)
  /^\/admin/,                    // Admin routes
  /^\/api\//,                    // Any API-shaped route (unlikely but safe)
  /^\/_/,                        // Underscore-prefixed (Netlify convention)
  /^\/draft/,                    // Unpublished drafts
  /^\/preview/,                  // Preview/staging routes
  /^\/qa\//,                     // QA / internal tools
  /^\/calculator$/,              // Redirect-only route, canonical is /roof-cost-calculator
  /^\/sitemap$/,                 // Avoid recursion — sitemap.html lives at /sitemap.html not /sitemap
];

function isExcluded(urlPath) {
  return EXCLUDED_PATH_PATTERNS.some((re) => re.test(urlPath));
}

// ─── Priority + changefreq rules ─────────────────────────────────────────────
// First matching rule wins. Order from most specific to least.
const PRIORITY_RULES = [
  // Home
  { match: (p) => p === '/', priority: 1.0, changefreq: 'weekly' },

  // Top-level primary service pages
  {
    match: (p) =>
      p === '/roof-replacement' ||
      p === '/roof-repair' ||
      p === '/roof-inspection' ||
      p === '/commercial-roofing' ||
      p === '/residential-roofing',
    priority: 0.95,
    changefreq: 'weekly',
  },

  // County hub pages
  {
    match: (p) =>
      p === '/locations/broward-county' || p === '/locations/palm-beach-county',
    priority: 0.9,
    changefreq: 'weekly',
  },

  // Landmark pages: /locations/[city]/[landmark]  (3+ path segments under /locations/)
  {
    match: (p) => /^\/locations\/[^/]+\/[^/]+$/.test(p) && !/\/best-roofers-/.test(p),
    priority: 0.8,
    changefreq: 'monthly',
  },

  // Best-roofers pages: /locations/[city]/best-roofers-[city]
  {
    match: (p) => /^\/locations\/[^/]+\/best-roofers-/.test(p),
    priority: 0.8,
    changefreq: 'monthly',
  },

  // Service-area top-5-roofer programmatic pages:
  //   /locations/deerfield-beach/service-area/[area]/top-5-roofer
  {
    match: (p) => /\/service-area\/.+\/top-5-roofer$/.test(p),
    priority: 0.7,
    changefreq: 'monthly',
  },

  // Service-area hubs: /locations/[city]/service-area
  {
    match: (p) => /^\/locations\/[^/]+\/service-area$/.test(p),
    priority: 0.7,
    changefreq: 'monthly',
  },

  // City money pages: /locations/[city]
  {
    match: (p) => /^\/locations\/[^/]+$/.test(p),
    priority: 0.9,
    changefreq: 'weekly',
  },

  // Repair and inspection city spokes
  {
    match: (p) =>
      /^\/roof-repair\/[^/]+$/.test(p) || /^\/roof-inspection\/[^/]+$/.test(p),
    priority: 0.8,
    changefreq: 'monthly',
  },

  // Blog articles
  {
    match: (p) => p.startsWith('/blog/') && p !== '/blog',
    priority: 0.7,
    changefreq: 'monthly',
  },

  // Blog index
  {
    match: (p) => p === '/blog',
    priority: 0.8,
    changefreq: 'weekly',
  },

  // County-level resource pages (guides, insurance-claim, oceanfront etc.)
  {
    match: (p) =>
      /^\/(broward|palm-beach)-county-/.test(p) ||
      /^\/oceanfront-roof-replacement-palm-beach-county$/.test(p),
    priority: 0.8,
    changefreq: 'monthly',
  },

  // Geo/neighborhood pages (e.g. /wellington-tile-roof-replacement,
  // /kings-point-boca-roofing-contractor, /mizner-park-roofing etc.)
  // Heuristic: hyphenated single-segment path with a city-ish anchor.
  {
    match: (p) => /^\/[a-z]+(-[a-z0-9]+){2,}$/.test(p) && !p.startsWith('/blog/'),
    priority: 0.7,
    changefreq: 'monthly',
  },
];

function priorityFor(urlPath) {
  for (const rule of PRIORITY_RULES) {
    if (rule.match(urlPath)) {
      return { priority: rule.priority, changefreq: rule.changefreq };
    }
  }
  return { priority: 0.6, changefreq: 'monthly' };
}

// ─── Walk dist/ recursively and collect URL paths ────────────────────────────
function collectIndexHtmlPaths(dir, baseDir = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectIndexHtmlPaths(full, baseDir, out);
    } else if (entry.isFile() && entry.name === 'index.html') {
      // dist/foo/bar/index.html -> /foo/bar
      const rel = path.relative(baseDir, full);
      const urlPath = '/' + rel.replace(/\\/g, '/').replace(/\/?index\.html$/, '');
      // Root file (dist/index.html) becomes '/'
      out.push(urlPath === '/' || urlPath === '' ? '/' : urlPath);
    }
  }
  return out;
}

// ─── Parse static SPA routes from App.tsx ────────────────────────────────────
// The SPA's prerender script does not cover every declared React Route (e.g.
// legal pages, geo-neighborhood guide pages, inspection-by-material pages).
// Those routes still render real, indexable content via the SPA shell — they
// just aren't baked to static HTML files. Harvest them from App.tsx so the
// sitemap reflects the full live URL surface, not just the prerendered subset.
//
// We IGNORE parameterized routes (:city, :slug etc.) — those are enumerated
// via data-driven sources (dist walker for prerendered, blog index parsing
// for blog posts).
function collectAppRoutes() {
  if (!fs.existsSync(APP_TSX)) return [];
  const src = fs.readFileSync(APP_TSX, 'utf8');
  const out = [];
  const re = /path="([^"]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const p = m[1];
    if (!p.startsWith('/')) continue;   // Skip relative "*" etc.
    if (p.includes(':')) continue;       // Skip parameterized routes
    if (p === '*') continue;             // Skip catch-all
    out.push(p);
  }
  return out;
}

// ─── Harvest blog post slugs from the prerendered blog index ─────────────────
// /blog is prerendered as a static listing page; its anchor tags are the
// canonical list of every published blog article. Parsing it keeps the
// sitemap's blog coverage in sync with the actual published set without
// needing to reach into Supabase or a data file.
function collectBlogPaths() {
  if (!fs.existsSync(BLOG_INDEX_HTML)) return [];
  const html = fs.readFileSync(BLOG_INDEX_HTML, 'utf8');
  const out = new Set();
  const re = /href="(\/blog\/[a-z0-9][a-z0-9-]*)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    out.add(m[1]);
  }
  return [...out];
}

// ─── Parse the edge function's blog redirect table ───────────────────────────
// Some blog slugs are still listed in blog-content.json / the blog index but
// are actually 301/410 via netlify/edge-functions/blog-redirects.ts. Including
// them in the sitemap sends Google to redirect targets (wasted crawl budget +
// soft-404 risk). This set is the authoritative "do not index" list for blog
// URLs; any sitemap URL appearing here is dropped, even if dist/ contains it.
function collectRedirectedBlogPaths() {
  if (!fs.existsSync(BLOG_REDIRECTS_TS)) return new Set();
  const src = fs.readFileSync(BLOG_REDIRECTS_TS, 'utf8');
  const out = new Set();
  const re = /'(\/blog\/[^']+)'\s*:\s*\{/g;
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return out;
}

// ─── Main ────────────────────────────────────────────────────────────────────
console.log('Generating sitemap.xml from dist/ ...\n');

if (!fs.existsSync(DIST_DIR)) {
  console.error(`FAIL: dist/ directory does not exist at ${DIST_DIR}`);
  console.error('This script must run AFTER `npm run prerender`. Check package.json build order.');
  process.exit(1);
}

const prerenderedPaths = collectIndexHtmlPaths(DIST_DIR);
const appRoutePaths = collectAppRoutes();
const blogPaths = collectBlogPaths();
const redirectedBlogs = collectRedirectedBlogPaths();

console.log(`Prerendered pages in dist/:    ${prerenderedPaths.length}`);
console.log(`Static routes from App.tsx:    ${appRoutePaths.length}`);
console.log(`Blog article links from /blog: ${blogPaths.length}`);
console.log(`Redirected blog URLs (drop):   ${redirectedBlogs.size}`);

// Union all three sources and dedupe
const allPathsSet = new Set();
for (const p of prerenderedPaths) allPathsSet.add(p);
for (const p of appRoutePaths) allPathsSet.add(p);
for (const p of blogPaths) allPathsSet.add(p);

const rawPaths = [...allPathsSet];
const filteredPaths = rawPaths
  .filter((p) => !isExcluded(p))
  .filter((p) => !redirectedBlogs.has(p))
  .sort();

console.log(
  `Union: ${rawPaths.length} unique URLs, ${filteredPaths.length} after exclusions ` +
    `(${rawPaths.length - filteredPaths.length} dropped)\n`
);

// ─── Validation ─────────────────────────────────────────────────────────────
const validationErrors = [];

// No trailing slashes except root
for (const p of filteredPaths) {
  if (p !== '/' && p.endsWith('/')) {
    validationErrors.push(`Trailing slash on: ${p}`);
  }
}

// No duplicates
const seen = new Set();
for (const p of filteredPaths) {
  if (seen.has(p)) {
    validationErrors.push(`Duplicate path: ${p}`);
  }
  seen.add(p);
}

// Must include home
if (!filteredPaths.includes('/')) {
  validationErrors.push('Sitemap missing home URL (/)');
}

// Known legacy alias that must never appear
const forbiddenSlugs = ['light-house-point'];
for (const p of filteredPaths) {
  for (const slug of forbiddenSlugs) {
    if (p.includes(`/${slug}/`) || p.endsWith(`/${slug}`)) {
      validationErrors.push(`Forbidden legacy slug "${slug}" in: ${p}`);
    }
  }
}

if (validationErrors.length > 0) {
  console.error('SITEMAP VALIDATION FAILED:');
  validationErrors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}
console.log('Validation passed: no dupes, no trailing slashes, no forbidden slugs, home present.\n');

// ─── Emit XML ────────────────────────────────────────────────────────────────
// Deliberately MINIMAL format: only <loc>, no <lastmod>/<changefreq>/<priority>.
// Google ignores the latter three for large sites and the project's validator
// (scripts/validate-sitemap.mjs) treats their presence as a hard fail. Priority
// rules are still computed above because they drive the HTML sitemap grouping
// and the diagnostics printout below.
const urlEntries = filteredPaths
  .map((p) => `  <url>\n    <loc>${CANONICAL_DOMAIN}${p}</loc>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

fs.writeFileSync(DIST_SITEMAP_PATH, xml, 'utf8');
fs.writeFileSync(PUBLIC_SITEMAP_PATH, xml, 'utf8');

// ─── Priority distribution report (helpful diagnostics) ──────────────────────
const distribution = {};
for (const p of filteredPaths) {
  const { priority } = priorityFor(p);
  distribution[priority] = (distribution[priority] || 0) + 1;
}

console.log('Sitemap generated successfully.');
console.log(`  Total URLs: ${filteredPaths.length}`);
console.log(`  Written to: dist/sitemap.xml and public/sitemap.xml`);
console.log(`  Domain: ${CANONICAL_DOMAIN}`);
console.log('  Priority distribution:');
Object.keys(distribution)
  .sort((a, b) => Number(b) - Number(a))
  .forEach((pri) => console.log(`    ${pri}: ${distribution[pri]} URLs`));
