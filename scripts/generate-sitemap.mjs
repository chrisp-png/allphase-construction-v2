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

// Fetch blog posts from Supabase
console.log('Fetching blog posts from Supabase...');
const { data: blogPosts, error } = await supabase
  .from('blog_posts')
  .select('slug, published_date')
  .eq('published', true)
  .order('published_date', { ascending: false });

if (error) {
  console.error('❌ Error fetching blog posts:', error.message);
} else {
  console.log(`✅ Fetched ${blogPosts.length} published blog posts\n`);

  // Add blog posts to entries
  for (const post of blogPosts) {
    entries.push({
      section: 'Blog Articles',
      label: post.slug,
      path: `/blog/${post.slug}`,
      indexable: true,
      priority: 0.7,
      changefreq: 'monthly'
    });
  }
}

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
