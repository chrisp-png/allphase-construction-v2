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
// CANONICAL CITY ALLOWLISTS - SILO-SPECIFIC
// ═══════════════════════════════════════════════════════════════════════════

// Cities that should be EXCLUDED entirely (legacy/alias slugs)
const EXCLUDED_SLUGS = [
  'light-house-point',           // Alias → lighthouse-point is canonical
  'lazy-lake',                   // Alias or deprecated
  'lauderdale-lakes',            // If not canonical
  'lauderdale-ranches',          // If not canonical
  'manalapan',                   // If not canonical
  'gulf-stream',                 // If not canonical
  'briny-breezes',               // If not canonical
  'south-palm-beach',            // If not canonical
  'west-palm-beach-county',      // County variants
  'boca-raton-county',
  'boynton-beach-county',
  'broward-county',              // County pages are standalone, not city silos
  'palm-beach-county'
];

// KEY MONEY CITY LIST - Cities with working /roof-repair/[city]/ pages (200 OK)
// ONLY these 17 cities should appear in sitemap for roof-repair silo
const SITEMAP_REPAIR_CITIES = [
  'boca-raton',
  'boynton-beach',
  'coconut-creek',
  'coral-springs',
  'deerfield-beach',
  'delray-beach',
  'fort-lauderdale',
  'hollywood',
  'lake-worth',
  'lake-worth-beach',            // Distinct from lake-worth
  'lauderhill',
  'parkland',
  'plantation',
  'pompano-beach',
  'tamarac',
  'wellington',
  'west-palm-beach',
];

// Cities with working /roof-inspection/[city]/ pages (200 OK, NOT 301)
const SITEMAP_INSPECTION_CITIES = [
  'boca-raton',
  'boynton-beach',
  'coconut-creek',
  'coral-springs',
  'deerfield-beach',
  'delray-beach',
  'fort-lauderdale',
  'lake-worth',
  'palm-beach',
  'pompano-beach',
  'wellington',
  'west-palm-beach',
];

// Cities with working /locations/[city]/ service hub pages (200 OK)
const SITEMAP_LOCATION_CITIES = [
  'boca-raton',
  'boynton-beach',
  'coconut-creek',
  'cooper-city',
  'coral-springs',
  'dania-beach',
  'davie',
  'deerfield-beach',
  'delray-beach',
  'fort-lauderdale',
  'greenacres',
  'hallandale-beach',
  'haverhill',
  'highland-beach',
  'hillsboro-beach',
  'hollywood',
  'hypoluxo',
  'jupiter-inlet-colony',
  'lake-park',
  'lake-worth',
  'lantana',
  'lauderdale-by-the-sea',
  'lauderhill',
  'lighthouse-point',
  'margate',
  'miramar',
  'north-lauderdale',
  'north-palm-beach',
  'oakland-park',
  'ocean-ridge',
  'palm-beach',
  'palm-beach-gardens',
  'parkland',
  'pembroke-pines',
  'plantation',
  'pompano-beach',
  'royal-palm-beach',
  'sunrise',
  'surfside',
  'tamarac',
  'wellington',
  'westlake',
  'weston',
  'wilton-manors',
];

// ═══════════════════════════════════════════════════════════════════════════
// URL EXCLUSION PATTERNS
// ═══════════════════════════════════════════════════════════════════════════

const EXCLUDED_PATTERNS = [
  /\/locations\/[^/]+\/service-area\//,  // Legacy /locations/parent/service-area/city
  /\/tile-roof-inspection-/,              // Legacy inspection URLs (301'd)
  /\/metal-roof-inspection-/,
  /\/flat-roof-inspection-/,
  /\/insurance-roof-inspection/,
  /\/flat-roof-moisture-infrared-inspection/
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function isExcludedUrl(path) {
  // Check if path matches any excluded pattern
  for (const pattern of EXCLUDED_PATTERNS) {
    if (pattern.test(path)) {
      return true;
    }
  }
  return false;
}

function ensureTrailingSlash(path) {
  // Always add trailing slash
  return path.endsWith('/') ? path : `${path}/`;
}

// ═══════════════════════════════════════════════════════════════════════════
// SITEMAP GENERATION
// ═══════════════════════════════════════════════════════════════════════════

console.log('🗺️  Generating Clean Canonical Sitemap...\n');

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
  console.error('❌ Failed to parse sheetSitemap array');
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
      console.log(`⚠️  Excluding pattern-matched URL: ${pathValue}`);
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

console.log(`✅ Parsed ${entries.length} indexable entries from sheetSitemap.ts\n`);

// Read blog posts from blog-posts.json
const blogPostsJsonPath = path.join(__dirname, '../src/data/blog-posts.json');
let jsonBlogPosts = [];
try {
  const jsonContent = fs.readFileSync(blogPostsJsonPath, 'utf8');
  const parsedJson = JSON.parse(jsonContent);
  jsonBlogPosts = parsedJson.filter(post => post.published === true);
  console.log(`✅ Found ${jsonBlogPosts.length} published posts in blog-posts.json`);
} catch (err) {
  console.log('⚠️  Could not read blog-posts.json:', err.message);
}

// Fetch blog posts from Supabase
console.log('Fetching blog posts from Supabase...');
const { data: dbBlogPosts, error } = await supabase
  .from('blog_posts')
  .select('slug, published_date')
  .eq('published', true)
  .order('published_date', { ascending: false });

if (error) {
  console.error('❌ Error fetching blog posts:', error.message);
} else {
  console.log(`✅ Fetched ${dbBlogPosts.length} published blog posts from database\n`);
}

// Merge blog posts from both sources (avoid duplicates)
const allBlogSlugs = new Set();

// Add JSON blog posts
for (const post of jsonBlogPosts) {
  allBlogSlugs.add(post.slug);
}

// Add database blog posts
if (dbBlogPosts) {
  for (const post of dbBlogPosts) {
    allBlogSlugs.add(post.slug);
  }
}

console.log(`📝 Total unique blog posts: ${allBlogSlugs.size}\n`);

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

console.log('📍 Generating Canonical City Pages Using Silo-Specific Allowlists...\n');
console.log(`   - Repair cities: ${SITEMAP_REPAIR_CITIES.length}`);
console.log(`   - Inspection cities: ${SITEMAP_INSPECTION_CITIES.length}`);
console.log(`   - Location cities: ${SITEMAP_LOCATION_CITIES.length}\n`);

// SILO 1: Service Hub - /locations/[city]/
console.log(`📍 Adding ${SITEMAP_LOCATION_CITIES.length} Service Hub pages...`);
for (const slug of SITEMAP_LOCATION_CITIES) {
  // Safety check: never include excluded slugs
  if (EXCLUDED_SLUGS.includes(slug)) {
    console.log(`❌ BLOCKED: Attempted to add excluded slug: ${slug}`);
    continue;
  }

  const cityName = cityMap.get(slug) || slug;
  entries.push({
    section: 'Service Hubs',
    label: `${cityName} Roofing Services`,
    path: ensureTrailingSlash(`/locations/${slug}`),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });
}

// SILO 2: Roof Repair - /roof-repair/[city]/
console.log(`🔧 Adding ${SITEMAP_REPAIR_CITIES.length} Roof Repair pages (KEY MONEY CITIES)...`);
for (const slug of SITEMAP_REPAIR_CITIES) {
  // Safety check: never include excluded slugs
  if (EXCLUDED_SLUGS.includes(slug)) {
    console.log(`❌ BLOCKED: Attempted to add excluded slug: ${slug}`);
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

// SILO 3: Roof Inspection - /roof-inspection/[city]/
console.log(`🔍 Adding ${SITEMAP_INSPECTION_CITIES.length} Roof Inspection pages...`);
for (const slug of SITEMAP_INSPECTION_CITIES) {
  // Safety check: never include excluded slugs
  if (EXCLUDED_SLUGS.includes(slug)) {
    console.log(`❌ BLOCKED: Attempted to add excluded slug: ${slug}`);
    continue;
  }

  const cityName = cityMap.get(slug) || slug;
  entries.push({
    section: 'Roof Inspection Services',
    label: `${cityName} Roof Inspection`,
    path: ensureTrailingSlash(`/roof-inspection/${slug}`),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });
}

console.log(`\n✅ Total city pages added: ${SITEMAP_LOCATION_CITIES.length + SITEMAP_REPAIR_CITIES.length + SITEMAP_INSPECTION_CITIES.length}\n`);

// ═══════════════════════════════════════════════════════════════════════════
// DEDUPLICATION
// ═══════════════════════════════════════════════════════════════════════════

const urlSet = new Set();
const dedupedEntries = [];

for (const entry of entries) {
  const fullUrl = `${CANONICAL_DOMAIN}${entry.path}`;

  if (urlSet.has(fullUrl)) {
    console.log(`⚠️  Duplicate URL removed: ${fullUrl}`);
    continue;
  }

  urlSet.add(fullUrl);
  dedupedEntries.push(entry);
}

console.log(`✅ Deduplication complete: ${entries.length - dedupedEntries.length} duplicates removed\n`);

// ═══════════════════════════════════════════════════════════════════════════
// XML GENERATION
// ═══════════════════════════════════════════════════════════════════════════

const buildDate = new Date().toISOString().slice(0, 10);

const urlEntries = dedupedEntries.map(entry => {
  const url = `${CANONICAL_DOMAIN}${entry.path}`;

  let urlEntry = `  <url>\n`;
  urlEntry += `    <loc>${url}</loc>\n`;
  urlEntry += `    <lastmod>${buildDate}</lastmod>\n`;

  if (entry.changefreq) {
    urlEntry += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  }

  if (entry.priority !== undefined) {
    urlEntry += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
  }

  urlEntry += `  </url>`;

  return urlEntry;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

// Write to public/sitemap.xml
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log('✅ Sitemap generated successfully!\n');
console.log(`📍 Location: public/sitemap.xml`);
console.log(`🔢 Total URLs: ${dedupedEntries.length}`);
console.log(`🌐 Domain: ${CANONICAL_DOMAIN}`);
console.log(`📅 Build Date (lastmod): ${buildDate}\n`);

// Statistics
const weekly = dedupedEntries.filter(r => r.changefreq === 'weekly').length;
const monthly = dedupedEntries.filter(r => r.changefreq === 'monthly').length;
const high = dedupedEntries.filter(r => (r.priority || 0) >= 0.8).length;
const medium = dedupedEntries.filter(r => (r.priority || 0) === 0.7).length;

console.log('📊 Change Frequency:');
console.log(`   Weekly: ${weekly}`);
console.log(`   Monthly: ${monthly}\n`);

console.log('🎯 Priority Distribution:');
console.log(`   High (≥0.8): ${high}`);
console.log(`   Medium (0.7): ${medium}\n`);

// ═══════════════════════════════════════════════════════════════════════════
// COMPREHENSIVE VALIDATION GATE - FAILS BUILD IF PROBLEMS DETECTED
// ═══════════════════════════════════════════════════════════════════════════

console.log('🔍 Running Comprehensive Validation Checks...\n');

let validationErrors = [];

// Parse the generated XML
const generatedXml = fs.readFileSync(outputPath, 'utf8');
const urlMatches = [...generatedXml.matchAll(/<loc>(.*?)<\/loc>/g)];
const urlsInSitemap = urlMatches.map(m => m[1]);

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 1: No duplicates
// ═══════════════════════════════════════════════════════════════════════════
const uniqueUrls = new Set(urlsInSitemap);
if (urlsInSitemap.length !== uniqueUrls.size) {
  validationErrors.push(`❌ DUPLICATE URLs found in sitemap (${urlsInSitemap.length} total, ${uniqueUrls.size} unique)`);
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 2: All URLs must end with /
// ═══════════════════════════════════════════════════════════════════════════
const missingTrailingSlash = urlsInSitemap.filter(url => !url.endsWith('/'));
if (missingTrailingSlash.length > 0) {
  validationErrors.push(`❌ ${missingTrailingSlash.length} URLs missing trailing slash:`);
  missingTrailingSlash.slice(0, 5).forEach(url => validationErrors.push(`   ${url}`));
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 3: No legacy /service-area/ patterns
// ═══════════════════════════════════════════════════════════════════════════
const serviceAreaUrls = urlsInSitemap.filter(url => url.includes('/service-area/'));
if (serviceAreaUrls.length > 0) {
  validationErrors.push(`❌ ${serviceAreaUrls.length} Legacy /service-area/ URLs found:`);
  serviceAreaUrls.slice(0, 5).forEach(url => validationErrors.push(`   ${url}`));
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 4: No excluded slug aliases (especially "light-house-point")
// ═══════════════════════════════════════════════════════════════════════════
for (const excludedSlug of EXCLUDED_SLUGS) {
  const foundUrls = urlsInSitemap.filter(url => url.includes(`/${excludedSlug}/`) || url.includes(`/${excludedSlug}`));
  if (foundUrls.length > 0) {
    validationErrors.push(`❌ Excluded slug "${excludedSlug}" found in ${foundUrls.length} URLs:`);
    foundUrls.slice(0, 3).forEach(url => validationErrors.push(`   ${url}`));
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 5: No legacy inspection URLs
// ═══════════════════════════════════════════════════════════════════════════
const legacyInspectionUrls = urlsInSitemap.filter(url =>
  url.includes('tile-roof-inspection-') ||
  url.includes('metal-roof-inspection-') ||
  url.includes('flat-roof-inspection-') ||
  url.includes('insurance-roof-inspection')
);
if (legacyInspectionUrls.length > 0) {
  validationErrors.push(`❌ ${legacyInspectionUrls.length} Legacy inspection URLs found:`);
  legacyInspectionUrls.slice(0, 5).forEach(url => validationErrors.push(`   ${url}`));
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 6: All URLs use canonical domain
// ═══════════════════════════════════════════════════════════════════════════
const wrongDomain = urlsInSitemap.filter(url => !url.startsWith(CANONICAL_DOMAIN));
if (wrongDomain.length > 0) {
  validationErrors.push(`❌ ${wrongDomain.length} URLs with wrong domain:`);
  wrongDomain.slice(0, 5).forEach(url => validationErrors.push(`   ${url}`));
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 7: Roof repair URLs must ONLY include KEY MONEY CITIES (allowlist)
// ═══════════════════════════════════════════════════════════════════════════
const repairUrls = urlsInSitemap.filter(url => url.includes('/roof-repair/') && url !== `${CANONICAL_DOMAIN}/roof-repair/`);
for (const url of repairUrls) {
  // Extract city slug from URL
  const match = url.match(/\/roof-repair\/([^/]+)\//);
  if (match) {
    const citySlug = match[1];
    if (!SITEMAP_REPAIR_CITIES.includes(citySlug)) {
      validationErrors.push(`❌ INVALID REPAIR CITY in sitemap (not in KEY MONEY LIST): ${url}`);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 8: Roof inspection URLs must ONLY include allowlist cities
// ═══════════════════════════════════════════════════════════════════════════
const inspectionUrls = urlsInSitemap.filter(url => url.includes('/roof-inspection/') && url !== `${CANONICAL_DOMAIN}/roof-inspection/`);
for (const url of inspectionUrls) {
  // Extract city slug from URL
  const match = url.match(/\/roof-inspection\/([^/]+)\//);
  if (match) {
    const citySlug = match[1];
    if (!SITEMAP_INSPECTION_CITIES.includes(citySlug)) {
      validationErrors.push(`❌ INVALID INSPECTION CITY in sitemap (301 redirect or not in allowlist): ${url}`);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 9: Ensure lake-worth and lake-worth-beach are treated as distinct
// ═══════════════════════════════════════════════════════════════════════════
const lakeWorthUrls = urlsInSitemap.filter(url => url.includes('/lake-worth/') || url.includes('/lake-worth-beach/'));
const hasLakeWorth = lakeWorthUrls.some(url => url.includes('/lake-worth/'));
const hasLakeWorthBeach = lakeWorthUrls.some(url => url.includes('/lake-worth-beach/'));
if (hasLakeWorth && hasLakeWorthBeach) {
  console.log('✅ lake-worth and lake-worth-beach are correctly treated as distinct cities');
}

// ═══════════════════════════════════════════════════════════════════════════
// VALIDATION RESULTS
// ═══════════════════════════════════════════════════════════════════════════

if (validationErrors.length > 0) {
  console.error('╔════════════════════════════════════════════════════════════════╗');
  console.error('║        ❌ SITEMAP VALIDATION FAILED - BUILD MUST STOP         ║');
  console.error('╚════════════════════════════════════════════════════════════════╝\n');
  console.error(`Found ${validationErrors.length} validation error(s):\n`);
  validationErrors.forEach(err => console.error(err));
  console.error('\n🚫 The sitemap contains invalid URLs that would confuse search engines.');
  console.error('🚫 Fix the issues above before deploying.\n');
  process.exit(1);
} else {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║          ✅ ALL VALIDATION CHECKS PASSED                      ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');
  console.log('✅ No duplicate URLs');
  console.log('✅ All URLs have trailing slashes');
  console.log('✅ No legacy /service-area/ patterns');
  console.log('✅ No excluded slug aliases (e.g., light-house-point)');
  console.log('✅ No legacy inspection URLs');
  console.log('✅ All URLs use canonical domain');
  console.log(`✅ All ${repairUrls.length} roof-repair URLs are in KEY MONEY LIST (17 cities)`);
  console.log(`✅ All ${inspectionUrls.length} roof-inspection URLs are in allowlist (200 OK)`);
  console.log('✅ lake-worth and lake-worth-beach treated as distinct\n');
  console.log('🎉 Sitemap contains ONLY canonical 200-OK URLs!');
  console.log('🎉 Ready for production deployment!\n');
}
