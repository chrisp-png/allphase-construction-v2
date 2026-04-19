/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HTML SITEMAP GENERATOR (dist-walker version)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Generates public/sitemap.html and dist/sitemap.html from the post-prerender
 * dist/ directory. Matches the section grouping users see in the old hand-
 * maintained HTML sitemap but derives the URL list from the actual deployed
 * pages instead of the stale hardcoded allowlists that produced the previous
 * 93-URL output.
 *
 * Runs AFTER the XML sitemap generator (see package.json).
 *
 * Sections and their heuristics — order of precedence is top-down; first
 * match wins so more-specific patterns go first:
 *   - Home
 *   - Top-Level Services
 *   - County Hub Pages
 *   - Landmark Pages (under /locations/[city]/[landmark])
 *   - City Money Pages (/locations/[city])
 *   - Best-Roofers Pages
 *   - Service-Area Hubs and Top-5 pages
 *   - Roof Replacement Spokes (/roof-repair/[city], /roof-inspection/[city])
 *   - County Resources (guides, insurance, oceanfront)
 *   - Geo/Neighborhood Pages (single-segment multi-hyphen)
 *   - Blog Articles
 *   - Other Services (service pages not already grouped)
 *   - Everything Else (catch-all)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const APP_TSX = path.join(__dirname, '../src/App.tsx');
const BLOG_INDEX_HTML = path.join(DIST_DIR, 'blog/index.html');
const BLOG_REDIRECTS_TS = path.join(__dirname, '../netlify/edge-functions/blog-redirects.ts');
const NETLIFY_REDIRECTS = path.join(__dirname, '../public/_redirects');
const PUBLIC_HTML_SITEMAP = path.join(__dirname, '../public/sitemap.html');
const DIST_HTML_SITEMAP = path.join(DIST_DIR, 'sitemap.html');

const EXCLUDED_PATH_PATTERNS = [
  /^\/404$/,
  /^\/403$/,
  /^\/surfer\//,
  /^\/admin/,
  /^\/api\//,
  /^\/_/,
  /^\/draft/,
  /^\/preview/,
  /^\/qa\//,
  /^\/calculator$/,
  /^\/sitemap$/,
];

function isExcluded(p) {
  return EXCLUDED_PATH_PATTERNS.some((re) => re.test(p));
}

function collectIndexHtmlPaths(dir, baseDir = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectIndexHtmlPaths(full, baseDir, out);
    } else if (entry.isFile() && entry.name === 'index.html') {
      const rel = path.relative(baseDir, full);
      const urlPath = '/' + rel.replace(/\\/g, '/').replace(/\/?index\.html$/, '');
      out.push(urlPath === '/' || urlPath === '' ? '/' : urlPath);
    }
  }
  return out;
}

// Parse static SPA routes from App.tsx — see generate-sitemap.mjs for rationale.
function collectAppRoutes() {
  if (!fs.existsSync(APP_TSX)) return [];
  const src = fs.readFileSync(APP_TSX, 'utf8');
  const out = [];
  const re = /path="([^"]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const p = m[1];
    if (!p.startsWith('/')) continue;
    if (p.includes(':')) continue;
    if (p === '*') continue;
    out.push(p);
  }
  return out;
}

// Harvest blog post slugs from the prerendered blog index.
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

// Parse the edge function's blog redirect table — any URL that appears here
// is 301/410'd at request time, so it must NOT appear in the sitemap.
function collectRedirectedBlogPaths() {
  if (!fs.existsSync(BLOG_REDIRECTS_TS)) return new Set();
  const src = fs.readFileSync(BLOG_REDIRECTS_TS, 'utf8');
  const out = new Set();
  const re = /'(\/blog\/[^']+)'\s*:\s*\{/g;
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return out;
}

// Parse public/_redirects to find local-path sources of 3xx rules so users
// don't see HTML-sitemap links that 301 to another page. Mirrors the logic
// in scripts/generate-sitemap.mjs — see that file for the full rationale.
function collectRedirectSources() {
  const forceSet = new Set();
  const softSet = new Set();
  if (!fs.existsSync(NETLIFY_REDIRECTS)) return { forceSet, softSet };
  const lines = fs.readFileSync(NETLIFY_REDIRECTS, 'utf8').split('\n');
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const tokens = line.split(/\s+/);
    if (tokens.length < 3) continue;
    const source = tokens[0];
    const status = tokens[tokens.length - 1];
    if (!source.startsWith('/')) continue;
    if (source.includes('*')) continue;
    const m = status.match(/^(30[0-9])(!?)$/);
    if (!m) continue;
    const isForce = m[2] === '!';
    const canonical = source === '/' ? '/' : source.replace(/\/+$/, '');
    if (isForce) forceSet.add(canonical);
    else softSet.add(canonical);
  }
  return { forceSet, softSet };
}

// Convert a path like /locations/boca-raton/mizner-park to a friendly label
function labelFor(p) {
  if (p === '/') return 'Home';
  const last = p.split('/').filter(Boolean).pop();
  return last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// ─── Section classification ──────────────────────────────────────────────────
const SECTIONS = [
  { name: 'Home', match: (p) => p === '/' },

  {
    name: 'Top-Level Services',
    match: (p) =>
      p === '/roof-replacement' ||
      p === '/roof-repair' ||
      p === '/roof-inspection' ||
      p === '/commercial-roofing' ||
      p === '/residential-roofing' ||
      p === '/tile-roofing' ||
      p === '/metal-roofing' ||
      p === '/shingle-roofing' ||
      p === '/flat-roofing' ||
      p === '/single-ply-roofing' ||
      p === '/roof-maintenance-programs' ||
      p === '/roof-replacement-process',
  },

  {
    name: 'County Hub Pages',
    match: (p) =>
      p === '/locations/broward-county' || p === '/locations/palm-beach-county',
  },

  {
    name: 'Landmark Pages',
    match: (p) => /^\/locations\/[^/]+\/[^/]+$/.test(p) && !/\/best-roofers-/.test(p) && !/\/service-area$/.test(p),
  },

  {
    name: 'Best-Roofers Pages',
    match: (p) => /^\/locations\/[^/]+\/best-roofers-/.test(p),
  },

  {
    name: 'Service-Area Pages',
    match: (p) =>
      /^\/locations\/[^/]+\/service-area$/.test(p) ||
      /\/service-area\/.+\/top-5-roofer$/.test(p),
  },

  {
    name: 'City Money Pages',
    match: (p) => /^\/locations\/[^/]+$/.test(p),
  },

  {
    name: 'Roof Repair Spokes',
    match: (p) => /^\/roof-repair\/[^/]+$/.test(p),
  },

  {
    name: 'Roof Inspection Spokes',
    match: (p) => /^\/roof-inspection\/[^/]+$/.test(p),
  },

  {
    name: 'County Resources',
    match: (p) =>
      /^\/(broward|palm-beach)-county-/.test(p) ||
      /^\/oceanfront-roof-replacement-palm-beach-county$/.test(p) ||
      /^\/florida-roof-insurance-claims-guide$/.test(p),
  },

  {
    name: 'Blog Articles',
    match: (p) => p === '/blog' || p.startsWith('/blog/'),
  },

  {
    name: 'Geo & Neighborhood Pages',
    match: (p) => /^\/[a-z]+(-[a-z0-9]+){2,}$/.test(p),
  },

  {
    name: 'Company & Info',
    match: (p) =>
      p === '/about-us' ||
      p === '/contact' ||
      p === '/our-location' ||
      p === '/reviews' ||
      p === '/projects' ||
      p === '/pricing-guide' ||
      p === '/easy-payments' ||
      p === '/learning-center' ||
      p === '/roofing-services' ||
      p === '/locations' ||
      p === '/locations/service-areas' ||
      p === '/frequently-asked-questions' ||
      p === '/roof-cost-calculator',
  },

  {
    name: 'Legal',
    match: (p) => p === '/privacy' || p === '/terms' || p === '/accessibility',
  },

  // Catch-all
  { name: 'Other Pages', match: () => true },
];

function sectionFor(p) {
  for (const s of SECTIONS) {
    if (s.match(p)) return s.name;
  }
  return 'Other Pages';
}

// ─── Main ────────────────────────────────────────────────────────────────────
console.log('Generating sitemap.html from dist/ ...\n');

if (!fs.existsSync(DIST_DIR)) {
  console.error(`FAIL: dist/ directory does not exist at ${DIST_DIR}`);
  console.error('This script must run AFTER prerender. Check package.json build order.');
  process.exit(1);
}

const prerenderedPaths = collectIndexHtmlPaths(DIST_DIR);
const appRoutePaths = collectAppRoutes();
const blogPaths = collectBlogPaths();
const redirectedBlogs = collectRedirectedBlogPaths();
const { forceSet: forcedRedirectSources, softSet: softRedirectSources } = collectRedirectSources();

const prerenderedSet = new Set(prerenderedPaths);
const allPathsSet = new Set();
for (const p of prerenderedPaths) allPathsSet.add(p);
for (const p of appRoutePaths) allPathsSet.add(p);
for (const p of blogPaths) allPathsSet.add(p);

const paths = [...allPathsSet]
  .filter((p) => !isExcluded(p))
  .filter((p) => !redirectedBlogs.has(p))
  .filter((p) => !forcedRedirectSources.has(p))
  .filter((p) => !(softRedirectSources.has(p) && !prerenderedSet.has(p)))
  .sort();

console.log(`Processing ${paths.length} URLs`);
console.log(`  ${prerenderedPaths.length} prerendered + ${appRoutePaths.length} SPA routes + ${blogPaths.length} blog posts (unioned)`);
console.log(`  ${redirectedBlogs.size} blog URLs dropped (301/410 via edge function)`);
console.log(`  ${forcedRedirectSources.size} force-301 + ${softRedirectSources.size} soft-301 _redirects sources applied`);

// Group by section
const grouped = new Map();
for (const s of SECTIONS) grouped.set(s.name, []);
for (const p of paths) {
  grouped.get(sectionFor(p)).push(p);
}

// Pretty output: only include sections that have URLs
const sectionsHtml = SECTIONS.map((s) => {
  const items = grouped.get(s.name) || [];
  if (items.length === 0) return '';
  const lis = items
    .map(
      (p) =>
        `        <li><a href="${p === '/' ? '/' : p}">${labelFor(p)}</a></li>`
    )
    .join('\n');
  return (
    `    <div class="sitemap-section">\n` +
    `      <h2>${s.name} <span class="count">(${items.length})</span></h2>\n` +
    `      <ul>\n${lis}\n      </ul>\n` +
    `    </div>`
  );
})
  .filter(Boolean)
  .join('\n');

const today = new Date().toISOString().split('T')[0];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap - All Phase Construction</title>
  <meta name="description" content="Complete sitemap of All Phase Construction services, locations, and resources for roofing in Broward and Palm Beach Counties, Florida.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://allphaseconstructionfl.com/sitemap.html">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    header { border-bottom: 3px solid #dc2626; padding-bottom: 20px; margin-bottom: 40px; }
    h1 { font-size: 2.5rem; color: #1a1a1a; margin-bottom: 10px; }
    .subtitle { color: #666; font-size: 1.1rem; }
    .sitemap-section { margin-bottom: 40px; }
    h2 { font-size: 1.5rem; color: #dc2626; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f3f4f6; }
    h2 .count { color: #888; font-weight: 400; font-size: 1rem; margin-left: 8px; }
    ul { list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px; }
    li { background: #f9fafb; border-radius: 4px; transition: background 0.2s; }
    li:hover { background: #fef2f2; }
    a { display: block; padding: 10px 14px; color: #1f2937; text-decoration: none; font-size: 0.95rem; }
    a:hover { color: #dc2626; }
    footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #666; font-size: 0.9rem; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Site Map</h1>
      <p class="subtitle">All Phase Construction USA — ${paths.length} pages, last updated ${today}</p>
    </header>
${sectionsHtml}
    <footer>
      <p>&copy; ${new Date().getFullYear()} All Phase Construction USA. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>
`;

fs.writeFileSync(DIST_HTML_SITEMAP, html, 'utf8');
fs.writeFileSync(PUBLIC_HTML_SITEMAP, html, 'utf8');

console.log(`HTML sitemap generated successfully.`);
console.log(`  Total URLs: ${paths.length}`);
console.log(`  Written to: dist/sitemap.html and public/sitemap.html`);
console.log(`  Sections used:`);
for (const s of SECTIONS) {
  const count = (grouped.get(s.name) || []).length;
  if (count > 0) console.log(`    ${s.name}: ${count}`);
}
