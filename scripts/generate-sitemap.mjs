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
// CANONICAL CITY ALLOWLISTS
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

// Core cities for ALL 3 silos (Service Hub, Repair, Inspection)
const CORE_CITIES = [
  'boca-raton',
  'fort-lauderdale',
  'west-palm-beach',
  'deerfield-beach',
  'coral-springs',
  'delray-beach',
  'boynton-beach',
  'pompano-beach',
  'coconut-creek',
  'cooper-city',
  'davie',
  'dania-beach',
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
  'royal-palm-beach',
  'sunrise',
  'surfside',
  'tamarac',
  'wellington',
  'westlake',
  'weston',
  'wilton-manors'
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

// Load cities data
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

console.log('📍 Generating Canonical City Pages (3-Silo Architecture)...\n');

// Filter to only core canonical cities (exclude counties and legacy slugs)
const canonicalCities = cities.filter(c => {
  // Exclude if it's in the exclusion list
  if (EXCLUDED_SLUGS.includes(c.slug)) {
    return false;
  }

  // Include only if in CORE_CITIES list
  return CORE_CITIES.includes(c.slug);
});

console.log(`✅ Using ${canonicalCities.length} canonical cities (excluded ${cities.length - canonicalCities.length} legacy/county entries)\n`);

// Generate 3-silo pages for each canonical city
for (const { slug, city } of canonicalCities) {
  // SILO 1: Service Hub - /locations/[city]/
  entries.push({
    section: 'Service Hubs',
    label: `${city} Roofing Services`,
    path: ensureTrailingSlash(`/locations/${slug}`),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });

  // SILO 2: Roof Repair - /roof-repair/[city]/
  entries.push({
    section: 'Roof Repair Services',
    label: `Roof Repair in ${city}`,
    path: ensureTrailingSlash(`/roof-repair/${slug}`),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });

  // SILO 3: Roof Inspection - /roof-inspection/[city]/
  entries.push({
    section: 'Roof Inspection Services',
    label: `${city} Roof Inspection`,
    path: ensureTrailingSlash(`/roof-inspection/${slug}`),
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });
}

console.log(`✅ Added ${canonicalCities.length * 3} city pages (3 silos × ${canonicalCities.length} cities)\n`);

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
// VALIDATION
// ═══════════════════════════════════════════════════════════════════════════

console.log('🔍 Running Validation Checks...\n');

let validationErrors = [];

// Parse the generated XML
const generatedXml = fs.readFileSync(outputPath, 'utf8');
const urlMatches = [...generatedXml.matchAll(/<loc>(.*?)<\/loc>/g)];

// Check 1: No duplicates
const urlsInSitemap = urlMatches.map(m => m[1]);
const uniqueUrls = new Set(urlsInSitemap);
if (urlsInSitemap.length !== uniqueUrls.size) {
  validationErrors.push(`❌ DUPLICATE URLs found in sitemap (${urlsInSitemap.length} total, ${uniqueUrls.size} unique)`);
}

// Check 2: No excluded patterns
for (const url of urlsInSitemap) {
  // Check for /locations/*/service-area/*
  if (url.includes('/service-area/')) {
    validationErrors.push(`❌ Legacy pattern found: ${url}`);
  }

  // Check for light-house-point
  if (url.includes('light-house-point')) {
    validationErrors.push(`❌ Legacy slug found: ${url}`);
  }

  // Check for legacy inspection URLs
  if (url.includes('tile-roof-inspection-') ||
      url.includes('metal-roof-inspection-') ||
      url.includes('flat-roof-inspection-') ||
      url.includes('insurance-roof-inspection')) {
    validationErrors.push(`❌ Legacy inspection URL found: ${url}`);
  }

  // Check 3: All URLs must end with /
  if (!url.endsWith('/')) {
    validationErrors.push(`❌ Missing trailing slash: ${url}`);
  }
}

// Check 4: All URLs must start with canonical domain
for (const url of urlsInSitemap) {
  if (!url.startsWith(CANONICAL_DOMAIN)) {
    validationErrors.push(`❌ Invalid domain: ${url}`);
  }
}

// Print validation results
if (validationErrors.length > 0) {
  console.error('❌ VALIDATION FAILED!\n');
  console.error('Errors found:\n');
  validationErrors.forEach(err => console.error(err));
  console.error('\n🚫 Build should fail - sitemap contains invalid URLs');
  process.exit(1);
} else {
  console.log('✅ All validation checks passed!');
  console.log('   ✓ No duplicate URLs');
  console.log('   ✓ No legacy /service-area/ patterns');
  console.log('   ✓ No legacy inspection URLs');
  console.log('   ✓ No "light-house-point" slug');
  console.log('   ✓ All URLs have trailing slashes');
  console.log('   ✓ All URLs use canonical domain\n');
  console.log('🎉 Sitemap is clean and ready for production!\n');
}
