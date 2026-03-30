import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// File name to slug mapping
const fileToSlugMap = {
  'how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid.md': 'how-to-hire-a-roofer-in-south-florida',
};

function extractMetaComments(markdown) {
  const metaTitleMatch = markdown.match(/<!--\s*Meta Title:\s*(.+?)\s*-->/);
  const metaDescMatch = markdown.match(/<!--\s*Meta Description:\s*(.+?)\s*-->/);

  return {
    metaTitle: metaTitleMatch ? metaTitleMatch[1].trim() : null,
    metaDescription: metaDescMatch ? metaDescMatch[1].trim() : null
  };
}

function stripMetaComments(markdown) {
  return markdown
    .replace(/<!--\s*Meta Title:.*?-->\s*/g, '')
    .replace(/<!--\s*Meta Description:.*?-->\s*/g, '');
}

function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

function extractExcerpt(markdown) {
  // Look for content after TL;DR section or first paragraph
  const tldrMatch = markdown.match(/##\s*TL;DR\s*\n\n(.+?)(?:\n\n|$)/s);
  if (tldrMatch) {
    const text = tldrMatch[1].replace(/\*\*/g, '').substring(0, 200).trim();
    return text + '...';
  }

  // Otherwise get first paragraph after title
  const paragraphMatch = markdown.match(/^#.+?\n\n(.+?)(?:\n\n|$)/s);
  if (paragraphMatch) {
    const text = paragraphMatch[1].replace(/\*\*/g, '').substring(0, 200).trim();
    return text + '...';
  }

  return 'Read the full article to learn more.';
}

function extractFAQs(markdown) {
  const faqSection = markdown.match(/##\s*Frequently Asked Questions.*?\n\n([\s\S]+?)(?=\n##\s+[^#]|\n---|\z)/);
  if (!faqSection) return [];

  const faqs = [];
  const faqText = faqSection[1];

  // Match ### Question followed by content
  const faqMatches = faqText.matchAll(/###\s+(.+?)\n\n([\s\S]+?)(?=\n###|\n##|\z)/g);

  for (const match of faqMatches) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\n+/g, ' ');
    faqs.push({ question, answer });
  }

  return faqs;
}

function extractTags(markdown) {
  const tags = new Set();

  if (markdown.includes('HOA') || markdown.includes('homeowners association')) {
    tags.add('HOA');
  }
  if (markdown.includes('metal roof') || markdown.includes('metal roofing')) {
    tags.add('Metal Roofing');
  }
  if (markdown.includes('tile roof') || markdown.includes('tile roofing')) {
    tags.add('Tile Roofing');
  }
  if (markdown.includes('hurricane') || markdown.includes('HVHZ')) {
    tags.add('Hurricane Protection');
  }
  if (markdown.includes('energy') || markdown.includes('cooling cost')) {
    tags.add('Energy Efficiency');
  }
  if (markdown.includes('insurance')) {
    tags.add('Insurance');
  }
  if (markdown.includes('permit')) {
    tags.add('Permits');
  }
  if (markdown.includes('screen enclosure') || markdown.includes('screen room')) {
    tags.add('Screen Enclosures');
  }
  if (markdown.includes('contractor') || markdown.includes('hiring')) {
    tags.add('Contractor Selection');
  }
  if (markdown.includes('shingle')) {
    tags.add('Shingle Roofing');
  }
  if (markdown.includes('South Florida') || markdown.includes('Broward') || markdown.includes('Palm Beach')) {
    tags.add('South Florida');
  }

  return Array.from(tags);
}

function processMarkdownFile(filename) {
  const blogDir = join(__dirname, '..', 'blog');
  const filePath = join(blogDir, filename);

  let markdown = readFileSync(filePath, 'utf-8');
  const { metaTitle, metaDescription } = extractMetaComments(markdown);

  // Strip meta comments before conversion
  markdown = stripMetaComments(markdown);

  // Convert to HTML
  const html = marked.parse(markdown);

  // Determine slug
  const baseSlug = filename.replace('.md', '');
  const slug = fileToSlugMap[filename] || baseSlug;

  const title = extractTitle(markdown);
  const excerpt = extractExcerpt(markdown);
  const faqs = extractFAQs(markdown);
  const tags = extractTags(markdown);

  return {
    slug,
    title,
    content: html,
    excerpt,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || excerpt,
    faqs,
    tags,
    contentLength: html.length,
    faqCount: faqs.length
  };
}

function main() {
  console.log('🚀 Processing blog markdown files...\n');

  const blogDir = join(__dirname, '..', 'blog');
  const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} markdown files\n`);

  const results = [];

  for (const file of files) {
    const result = processMarkdownFile(file);
    results.push(result);
    console.log(`✅ Processed: ${file}`);
    console.log(`   Slug: ${result.slug}`);
    console.log(`   Content length: ${result.contentLength.toLocaleString()} chars`);
    console.log(`   FAQs: ${result.faqCount}`);
    console.log('');
  }

  // Output SQL statements
  console.log('\n' + '='.repeat(70));
  console.log('SQL UPDATE STATEMENTS (copy these to run via Supabase MCP tool):');
  console.log('='.repeat(70) + '\n');

  for (const result of results) {
    // Escape single quotes for SQL
    const content = result.content.replace(/'/g, "''");

    console.log(`-- Update: ${result.slug}`);
    console.log(`UPDATE blog_posts SET content = '${content}' WHERE slug = '${result.slug}';`);
    console.log('');
  }
}

main();
