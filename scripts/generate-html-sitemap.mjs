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

// Initialize Supabase client (optional - gracefully skip if credentials missing)
let supabase = null;
if (process.env.VITE_SUPABASE_URL && process.env.VITE_SUPABASE_ANON_KEY) {
  supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  );
} else {
  console.warn('⚠️  Supabase credentials not found. Skipping blog post fetch from database.\n');
}

// Read and parse the sheetSitemap.ts file
const sitemapPath = path.join(__dirname, '../src/data/sheetSitemap.ts');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Extract the sheetSitemap array using regex
const arrayMatch = sitemapContent.match(/export const sheetSitemap: SitemapEntry\[\] = \[([\s\S]*?)\];/);

if (!arrayMatch) {
  console.error('❌ Failed to parse sheetSitemap array');
  process.exit(1);
}

// Parse entries
const entries = [];
const entryMatches = arrayMatch[1].matchAll(/\{[\s\S]*?section: '([^']*)',[\s\S]*?label: '([^']*)',[\s\S]*?path: '([^']*)',[\s\S]*?parent: ([^,]*),[\s\S]*?indexable: (true|false)(?:,[\s\S]*?priority: ([\d.]+))?(?:,[\s\S]*?changefreq: '([^']*)')?[\s\S]*?\}/g);

for (const match of entryMatches) {
  const [, section, label, pathValue, parent, indexable] = match;

  if (indexable === 'true') {
    entries.push({
      section,
      label,
      path: pathValue
    });
  }
}

console.log(`📄 Parsed ${entries.length} indexable entries from sheetSitemap.ts`);

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
let dbBlogPosts = null;
if (supabase) {
  console.log('Fetching blog posts from Supabase...');
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, title, published_date')
    .eq('published', true)
    .order('published_date', { ascending: false });

  if (error) {
    console.error('❌ Error fetching blog posts:', error.message);
  } else {
    dbBlogPosts = data;
    console.log(`✅ Fetched ${dbBlogPosts.length} published blog posts from database`);
  }
} else {
  console.log('Skipping Supabase blog post fetch (no credentials).\n');
}

// Merge blog posts from both sources
const blogPostsMap = new Map();

// Add JSON blog posts
for (const post of jsonBlogPosts) {
  blogPostsMap.set(post.slug, post.title || post.slug);
}

// Add database blog posts (they take precedence)
if (dbBlogPosts) {
  for (const post of dbBlogPosts) {
    blogPostsMap.set(post.slug, post.title || post.slug);
  }
}

console.log(`📝 Total unique blog posts: ${blogPostsMap.size}`);

// Group entries by section
const groupedEntries = {};
for (const entry of entries) {
  if (!groupedEntries[entry.section]) {
    groupedEntries[entry.section] = [];
  }
  groupedEntries[entry.section].push(entry);
}

// Generate HTML sections
let sectionsHtml = '';
const sectionOrder = [
  'Home',
  'Roofing Services',
  'Material-Specific Roofing',
  'Roof Inspections',
  'County Pages',
  'Broward County Cities',
  'Palm Beach County Cities',
  'Locations',
  'Best Roofers by City',
  'Learning Center',
  'About & Contact'
];

// Get all sections (in case some are not in sectionOrder)
const allSections = Object.keys(groupedEntries).filter(s => !s.includes('Legacy') && !s.includes('Redirected'));
const orderedSections = [...new Set([...sectionOrder, ...allSections])];

for (const sectionName of orderedSections) {
  const sectionEntries = groupedEntries[sectionName];
  if (!sectionEntries || sectionEntries.length === 0) continue;

  sectionsHtml += `
    <section class="sitemap-section">
      <h2>${sectionName}</h2>
      <ul>`;

  for (const entry of sectionEntries) {
    const url = `${CANONICAL_DOMAIN}${entry.path}`;
    sectionsHtml += `
        <li><a href="${entry.path}">${entry.label}</a></li>`;
  }

  sectionsHtml += `
      </ul>
    </section>`;
}

// Add blog posts section
if (blogPostsMap.size > 0) {
  sectionsHtml += `
    <section class="sitemap-section">
      <h2>Blog Articles</h2>
      <ul>`;

  for (const [slug, title] of blogPostsMap) {
    const path = `/blog/${slug}`;
    sectionsHtml += `
        <li><a href="${path}">${title}</a></li>`;
  }

  sectionsHtml += `
      </ul>
    </section>`;
}

// Generate complete HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap - All Phase Construction</title>
  <meta name="description" content="Complete sitemap of All Phase Construction services, locations, and resources for roofing in Broward and Palm Beach Counties, Florida.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${CANONICAL_DOMAIN}/sitemap.html">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    header {
      border-bottom: 3px solid #dc2626;
      padding-bottom: 20px;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 2.5rem;
      color: #1a1a1a;
      margin-bottom: 10px;
    }
    .subtitle {
      color: #666;
      font-size: 1.1rem;
    }
    .sitemap-section {
      margin-bottom: 40px;
    }
    h2 {
      font-size: 1.75rem;
      color: #dc2626;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #f3f4f6;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 12px;
    }
    li {
      background: #f9fafb;
      border-radius: 4px;
      transition: background 0.2s;
    }
    li:hover {
      background: #f3f4f6;
    }
    a {
      display: block;
      padding: 12px 16px;
      color: #1a1a1a;
      text-decoration: none;
      transition: color 0.2s;
    }
    a:hover {
      color: #dc2626;
    }
    footer {
      margin-top: 60px;
      padding-top: 20px;
      border-top: 2px solid #f3f4f6;
      text-align: center;
      color: #666;
    }
    footer a {
      display: inline;
      padding: 0;
      color: #dc2626;
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .container {
        padding: 20px;
      }
      h1 {
        font-size: 2rem;
      }
      ul {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Sitemap</h1>
      <p class="subtitle">All Phase Construction - Roofing Services in South Florida</p>
    </header>

    <main>
${sectionsHtml}
    </main>

    <footer>
      <p>&copy; ${new Date().getFullYear()} All Phase Construction. Licensed & Insured.</p>
      <p><a href="/">Return to Homepage</a></p>
    </footer>
  </div>
</body>
</html>`;

// Write to public/sitemap.html
const outputPath = path.join(__dirname, '../public/sitemap.html');
fs.writeFileSync(outputPath, html, 'utf8');

const totalLinks = entries.length + blogPostsMap.size;
console.log('\n✅ HTML Sitemap generated successfully!');
console.log(`Location: public/sitemap.html`);
console.log(`Total links: ${totalLinks}`);
console.log(`  - Pages: ${entries.length}`);
console.log(`  - Blog posts: ${blogPostsMap.size}\n`);
