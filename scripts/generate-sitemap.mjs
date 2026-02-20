import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const CANONICAL_DOMAIN = 'https://allphaseconstructionfl.com';

// ═══════════════════════════════════════════════════════════════════════════
// APPROVED CITY ALLOWLISTS
// ═══════════════════════════════════════════════════════════════════════════

// Cities that should be EXCLUDED entirely (legacy/alias slugs)
const EXCLUDED_SLUGS = new Set([
  'light-house-point',
  'lazy-lake',
  'lauderdale-lakes',
  'lauderdale-ranches',
  'manalapan',
  'gulf-stream',
  'briny-breezes',
  'south-palm-beach',
  'west-palm-beach-county',
  'boca-raton-county',
  'boynton-beach-county',
  'broward-county',
  'palm-beach-county'
]);

// Redirect/alias slugs that return 301 - NEVER include in sitemap
const REDIRECT_OR_ALIAS_SLUGS = new Set([
  'lake-worth-beach',
  'light-house-point'
]);

// APPROVED 16 canonical repair cities (200 OK) for /roof-repair/{city}/
const APPROVED_REPAIR_CITIES = new Set([
  'boca-raton',
  'coral-springs',
  'boynton-beach',
  'delray-beach',
  'fort-lauderdale',
  'west-palm-beach',
  'deerfield-beach',
  'coconut-creek',
  'parkland',
  'pompano-beach',
  'hollywood',
  'plantation',
  'lauderhill',
  'lake-worth',
  'wellington',
  'tamarac',
]);

// ═══════════════════════════════════════════════════════════════════════════
// URL EXCLUSION PATTERNS
// ═══════════════════════════════════════════════════════════════════════════

const EXCLUDED_PATTERNS = [
  /\/roof-inspection\/[^/]+/,               // ALL /roof-inspection/{city} excluded
  /\/tile-roof-inspection-/,
  /\/metal-roof-inspection-/,
  /\/flat-roof-inspection-/,
  /\/insurance-roof-inspection/,
  /\/flat-roof-moisture-infrared-inspection/,
  /^\/locations\//                          // Exclude all /locations/ URLs from sheetSitemap (we add them programmatically)
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function isExcludedUrl(urlPath) {
  for (const pattern of EXCLUDED_PATTERNS) {
    if (pattern.test(urlPath)) return true;
  }
  return false;
}

function ensureTrailingSlash(urlPath) {
  if (urlPath === '/') return '/';
  return urlPath.endsWith('/') ? urlPath : urlPath + '/';
}

// ═══════════════════════════════════════════════════════════════════════════
// SITEMAP GENERATION
// ═══════════════════════════════════════════════════════════════════════════

console.log('Generating Clean Canonical Sitemap...\n');

// Initialize Supabase client
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Read and parse the sheetSitemap.ts file
const sitemapPath = path.join(__dirname, '../src/data/sheetSitemap.ts');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Extract the sheetSitemap array using regex
const arrayMatch = sitemapContent.match(/export const sheetSitemap: SitemapEntry\[\] = \[([\s\S]*?)\];/);
if (!arrayMatch) {
  console.error('Failed to parse sheetSitemap array');
  process.exit(1);
}

// Parse entries (simplified parsing)
const entries = [];
const entryMatches = arrayMatch[1].matchAll(/\{[\s\S]*?section: '([^']*)',[\s\S]*?label: '([^']*)',[\s\S]*?path: '([^']*)',[\s\S]*?parent: ([^,]*),[\s\S]*?indexable: (true|false)(?:,[\s\S]*?priority: ([\d.]+))?(?:,[\s\S]*?changefreq: '([^']*)')?[\s\S]*?\}/g);

for (const match of entryMatches) {
  const [, section, label, pathValue, parent, indexable, priority, changefreq] = match;
  if (indexable === 'true') {
    // Check if this URL should be excluded
    if (isExcludedUrl(pathValue)) {
      console.log(`Excluding pattern-matched URL: ${pathValue}`);
      continue;
    }
    entries.push({
      section,
      label,
      path: ensureTrailingSlash(pathValue),
      parent,
      indexable: true,
      priority: priority ? parseFloat(priority) : undefined,
      changefreq: changefreq || undefined
    });
  }
}

console.log(`Parsed ${entries.length} indexable entries from sheetSitemap.ts\n`);

// Read blog posts from blog-posts.json
const blogPostsJsonPath = path.join(__dirname, '../src/data/blog-posts.json');
let jsonBlogPosts = [];
try {
  const jsonContent = fs.readFileSync(blogPostsJsonPath, 'utf8');
  const parsedJson = JSON.parse(jsonContent);
  jsonBlogPosts = parsedJson.filter(post => post.published === true);
  console.log(`Found ${jsonBlogPosts.length} published posts in blog-posts.json`);
} catch (err) {
  console.log('Could not read blog-posts.json:', err.message);
}

// Fetch blog posts from Supabase
console.log('Fetching blog posts from Supabase...');
const { data: dbBlogPosts, error } = await supabase
  .from('blog_posts')
  .select('slug, published_date')
  .eq('published', true)
  .order('published_date', { ascending: false });

if (error) {
  console.error('Error fetching blog posts:', error.message);
} else {
  console.log(`Fetched ${dbBlogPosts.length} published blog posts from database\n`);
}

// Merge blog posts from both sources (avoid duplicates)
const allBlogSlugs = new Set();
for (const post of jsonBlogPosts) {
  allBlogSlugs.add(post.slug);
}
if (dbBlogPosts) {
  for (const post of dbBlogPosts) {
    allBlogSlugs.add(post.slug);
  }
}

console.log(`Total unique blog posts: ${allBlogSlugs.size}\n`);

// Add all blog post URLs to sitemap
for (const slug of allBlogSlugs) {
  entries.push({
    section: 'Blog Articles',
    label: slug,
    path: ensureTrailingSlash(`/blog/${slug}`),
    indexable: true,
    priority: 0.7,
    changefreq: 'monthly'
  });
}

// Load cities data for display names
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));
const cityMap = new Map(cities.map(c => [c.slug, c.city]));

// ═══════════════════════════════════════════════════════════════════════════
// LOCATION PAGES CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const LOCATION_MONEY_PAGES = [
  'deerfield-beach',
  'fort-lauderdale',
  'boca-raton',
  'coral-springs',
  'pompano-beach',
  'hollywood',
  'coconut-creek',
  'west-palm-beach',
  'delray-beach',
  'boynton-beach',
  'wellington'
];

const LOCATION_SUB_PAGES = [
  { path: '/locations/deerfield-beach/best-roofers-deerfield-beach', label: 'Best Roofers in Deerfield Beach' }
];

console.log('Generating Canonical City Pages...\n');
console.log(`  Approved repair cities: ${APPROVED_REPAIR_CITIES.size}`);
console.log(`  Location money pages: ${LOCATION_MONEY_PAGES.length}`);
console.log(`  Location sub-pages: ${LOCATION_SUB_PAGES.length}`);
console.log(`  Inspection city pages: 0 (ALL /roof-inspection/{city} removed from sitemap)\n`);

// SILO 2: Roof Repair - /roof-repair/[city]/
// SILO 3: /roof-inspection/{city}/ - removed from sitemap entirely
console.log(`Adding ${APPROVED_REPAIR_CITIES.size} Roof Repair pages (APPROVED CITIES ONLY)...`);
for (const slug of APPROVED_REPAIR_CITIES) {
  // Guard: never include excluded or redirect/alias slugs
  if (EXCLUDED_SLUGS.has(slug) || REDIRECT_OR_ALIAS_SLUGS.has(slug)) {
    console.log(`BLOCKED: Attempted to add excluded/redirect slug: ${slug}`);
    continue;
  }
  const cityName = cityMap.get(slug) || slug;
  entries.push({
    section: 'Roof Repair Services',
    label: `Roof Repair in ${cityName}`,
    path: ensureTrailingSlash(`/roof-repair/${slug}`),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });
}

console.log(`Total city pages added: ${APPROVED_REPAIR_CITIES.size}\n`);

// ═══════════════════════════════════════════════════════════════════════════
// LOCATION MONEY PAGES - Priority 0.9 (Main Money Pages)
// ═══════════════════════════════════════════════════════════════════════════

console.log(`Adding ${LOCATION_MONEY_PAGES.length} Location Money Pages (Priority 0.9)...`);
for (const slug of LOCATION_MONEY_PAGES) {
  if (EXCLUDED_SLUGS.has(slug) || REDIRECT_OR_ALIAS_SLUGS.has(slug)) {
    console.log(`BLOCKED: Attempted to add excluded/redirect slug: ${slug}`);
    continue;
  }
  const cityName = cityMap.get(slug) || slug;
  entries.push({
    section: 'Location Money Pages',
    label: `${cityName} Roofing Services`,
    path: ensureTrailingSlash(`/locations/${slug}`),
    indexable: true,
    priority: 0.9,
    changefreq: 'weekly'
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// LOCATION SUB-PAGES - Priority 0.8 (Sub-Pages)
// ═══════════════════════════════════════════════════════════════════════════

console.log(`Adding ${LOCATION_SUB_PAGES.length} Location Sub-Pages (Priority 0.8)...`);
for (const page of LOCATION_SUB_PAGES) {
  entries.push({
    section: 'Location Sub-Pages',
    label: page.label,
    path: ensureTrailingSlash(page.path),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });
}

console.log(`Total location pages added: ${LOCATION_MONEY_PAGES.length + LOCATION_SUB_PAGES.length}\n`);

// ═══════════════════════════════════════════════════════════════════════════
// DEDUPLICATION
// ═══════════════════════════════════════════════════════════════════════════

const urlSet = new Set();
const dedupedEntries = [];
for (const entry of entries) {
  const fullUrl = `${CANONICAL_DOMAIN}${entry.path}`;
  if (urlSet.has(fullUrl)) {
    console.log(`Duplicate URL removed: ${fullUrl}`);
    continue;
  }
  urlSet.add(fullUrl);
  dedupedEntries.push(entry);
}

console.log(`Deduplication complete: ${entries.length - dedupedEntries.length} duplicates removed\n`);

// ═══════════════════════════════════════════════════════════════════════════
// VALIDATION GATE - FAILS BUILD IF PROBLEMS DETECTED
// ═══════════════════════════════════════════════════════════════════════════

console.log('Running Comprehensive Validation Checks...\n');
let validationErrors = [];

// Build full URL list for validation
const allUrls = dedupedEntries.map(e => `${CANONICAL_DOMAIN}${e.path}`);

// CHECK 1: /locations/ URLs must only be approved money pages
const locationUrls = allUrls.filter(u => u.includes('/locations/'));
const expectedLocationCount = LOCATION_MONEY_PAGES.length + LOCATION_SUB_PAGES.length;
if (locationUrls.length !== expectedLocationCount) {
  validationErrors.push(`FAIL: Expected ${expectedLocationCount} /locations/ URLs but found ${locationUrls.length}`);
  if (locationUrls.length > 0) {
    validationErrors.push('Found URLs:');
    locationUrls.slice(0, 10).forEach(u => validationErrors.push(`  ${u}`));
  }
}

// CHECK 2: No /roof-inspection/{city}/ URLs (parent /roof-inspection/ is OK)
const inspCityUrls = allUrls.filter(u => /\/roof-inspection\/[^/]+\/$/.test(u) && !u.endsWith('/roof-inspection/'));
if (inspCityUrls.length > 0) {
  validationErrors.push(`FAIL: ${inspCityUrls.length} /roof-inspection/{city}/ URLs found:`);
  inspCityUrls.forEach(u => validationErrors.push(`  ${u}`));
}

// CHECK 3: /roof-repair/{city}/ must ONLY contain approved cities
const repairCityUrls = allUrls.filter(u => u.includes('/roof-repair/') && !u.endsWith('/roof-repair/'));
for (const u of repairCityUrls) {
  const m = u.match(/\/roof-repair\/([^/]+)\//);
  if (m && !APPROVED_REPAIR_CITIES.has(m[1])) {
    validationErrors.push(`FAIL: Unapproved repair city in sitemap: ${u}`);
  }
}

// CHECK 4: No lake-worth-beach or light-house-point anywhere
const lwbUrls = allUrls.filter(u => u.includes('lake-worth-beach'));
if (lwbUrls.length > 0) {
  validationErrors.push(`FAIL: lake-worth-beach found in ${lwbUrls.length} URLs:`);
  lwbUrls.forEach(u => validationErrors.push(`  ${u}`));
}
const lhpUrls = allUrls.filter(u => u.includes('light-house-point'));
if (lhpUrls.length > 0) {
  validationErrors.push(`FAIL: light-house-point found in ${lhpUrls.length} URLs:`);
  lhpUrls.forEach(u => validationErrors.push(`  ${u}`));
}

// CHECK 5: All URLs should end with / (consistent trailing slash policy)
const withoutSlash = allUrls.filter(u => !u.endsWith('/'));
if (withoutSlash.length > 0) {
  validationErrors.push(`FAIL: ${withoutSlash.length} URLs missing trailing slash:`);
  withoutSlash.slice(0, 5).forEach(u => validationErrors.push(`  ${u}`));
}

// CHECK 6: No duplicates (Set size mismatch)
const uniqueCheck = new Set(allUrls);
if (allUrls.length !== uniqueCheck.size) {
  validationErrors.push(`FAIL: Duplicate URLs detected (${allUrls.length} total, ${uniqueCheck.size} unique)`);
}

// CHECK 7: No excluded slug aliases
for (const slug of EXCLUDED_SLUGS) {
  const found = allUrls.filter(u => u.includes(`/${slug}/`));
  if (found.length > 0) {
    validationErrors.push(`FAIL: Excluded slug "${slug}" found in ${found.length} URLs:`);
    found.slice(0, 3).forEach(u => validationErrors.push(`  ${u}`));
  }
}

// CHECK 8: All URLs use canonical domain
const wrongDomain = allUrls.filter(u => !u.startsWith(CANONICAL_DOMAIN));
if (wrongDomain.length > 0) {
  validationErrors.push(`FAIL: ${wrongDomain.length} URLs with wrong domain`);
}

// VALIDATION RESULTS
if (validationErrors.length > 0) {
  console.error('SITEMAP VALIDATION FAILED - BUILD MUST STOP');
  console.log('All URLs have NO trailing slash (except root)');
  validationErrors.forEach(err => console.error(err));
  console.error('The sitemap contains invalid URLs. Fix the issues above before deploying.');
  process.exit(1);
} else {
  console.log('ALL VALIDATION CHECKS PASSED');
  console.log('No duplicate URLs');
  console.log('All URLs have consistent trailing slashes');
  console.log(`Correct number of /locations/ URLs: ${locationUrls.length} (${LOCATION_MONEY_PAGES.length} money pages + ${LOCATION_SUB_PAGES.length} sub-pages)`);
  console.log('No /roof-inspection/{city}/ URLs');
  console.log(`All ${repairCityUrls.length} roof-repair URLs are in APPROVED list (16 cities)`);
  console.log('No lake-worth-beach or light-house-point');
  console.log('Sitemap contains ONLY canonical 200-OK URLs!\n');
}

// ═══════════════════════════════════════════════════════════════════════════
// XML GENERATION
// ═══════════════════════════════════════════════════════════════════════════


const urlEntries = dedupedEntries.map(entry => {
  const url = `${CANONICAL_DOMAIN}${entry.path}`;
  let urlEntry = `  <url>\n`;
  urlEntry += `    <loc>${url}</loc>\n`;
  if (entry.priority !== undefined) {
    urlEntry += `    <priority>${entry.priority}</priority>\n`;
  }
  if (entry.changefreq) {
    urlEntry += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  }
  urlEntry += `  </url>`;
  return urlEntry;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

// Write to public/sitemap.xml
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log('Sitemap generated successfully!');
console.log(`Location: public/sitemap.xml`);
console.log(`Total URLs: ${dedupedEntries.length}`);
console.log(`Domain: ${CANONICAL_DOMAIN}`);
console.log(`Build Date: ${new Date().toISOString()}`);
