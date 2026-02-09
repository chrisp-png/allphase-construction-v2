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
    entries.push({
      section,
      label,
      path: pathValue,
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
    path: `/blog/${slug}`,
    indexable: true,
    priority: 0.7,
    changefreq: 'monthly'
  });
}

// Load cities data and generate 3-silo city pages
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

console.log('📍 Generating 3-Silo City Pages URLs...\n');

// Filter out county-level entries
const citiesOnly = cities.filter(c => !c.slug.includes('county'));

// Generate 3-silo pages for each city
for (const { slug, city } of citiesOnly) {
  // SILO 1: Service Hub - /locations/[city]
  entries.push({
    section: 'Service Hubs',
    label: `${city} Roofing Services`,
    path: `/locations/${slug}`,
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });

  // SILO 2: Roof Repair - /roof-repair/[city]
  entries.push({
    section: 'Roof Repair Services',
    label: `Roof Repair in ${city}`,
    path: `/roof-repair/${slug}`,
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });

  // SILO 3: Roof Inspection - /roof-inspection/[city]
  entries.push({
    section: 'Roof Inspection Services',
    label: `${city} Roof Inspection`,
    path: `/roof-inspection/${slug}`,
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly'
  });
}

console.log(`✅ Added ${citiesOnly.length * 3} city pages (3 silos × ${citiesOnly.length} cities)\n`);

// Generate XML
const urlEntries = entries.map(entry => {
  const url = `${CANONICAL_DOMAIN}${entry.path}`;

  let urlEntry = `  <url>\n`;
  urlEntry += `    <loc>${url}</loc>\n`;

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
console.log(`Location: public/sitemap.xml`);
console.log(`Total URLs: ${entries.length}`);
console.log(`Domain: ${CANONICAL_DOMAIN}\n`);

// Statistics
const weekly = entries.filter(r => r.changefreq === 'weekly').length;
const monthly = entries.filter(r => r.changefreq === 'monthly').length;
const high = entries.filter(r => (r.priority || 0) >= 0.8).length;
const medium = entries.filter(r => (r.priority || 0) === 0.7).length;

console.log('Change Frequency:');
console.log(`  Weekly: ${weekly}`);
console.log(`  Monthly: ${monthly}\n`);

console.log('Priority Distribution:');
console.log(`  High (≥0.8): ${high}`);
console.log(`  Medium (0.7): ${medium}\n`);
