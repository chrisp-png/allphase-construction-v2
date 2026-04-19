#!/usr/bin/env node

/**
 * Build Blog Content Script
 *
 * Reads markdown files from /blog/ directory, converts them to HTML,
 * and outputs a JSON file mapping slugs to HTML content.
 *
 * This enables a fallback system for blog posts with placeholder content in Supabase.
 *
 * Usage:
 *   node scripts/build-blog-content.mjs
 *
 * Output:
 *   public/blog-content.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../blog');
const OUTPUT_FILE = path.join(__dirname, '../public/blog-content.json');

/**
 * Simple markdown to HTML converter
 * Handles basic markdown syntax without external dependencies
 */
function markdownToHtml(markdown) {
  let html = markdown;

  // Escape HTML before processing markdown
  // (but we'll allow certain HTML tags we create)

  // Process headings (h2, h3, h4)
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // Process bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/____(.*?)____/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<em>$1</em>');

  // Process inline code
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');

  // Process links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Process horizontal rules
  html = html.replace(/^---+$/gm, '<hr />');

  // Process tables - simple implementation
  html = processMarkdownTables(html);

  // Process unordered lists
  html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>');
  html = html.replace(/^- (.*?)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> tags in <ul>
  html = html.replace(/(<li>.*?<\/li>)/s, (match) => {
    if (!match.includes('<ul>')) {
      return '<ul>' + match + '</ul>';
    }
    return match;
  });

  // Process ordered lists
  html = html.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');

  // Process paragraphs - split by double newlines
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map((para) => {
      para = para.trim();
      // Don't wrap if it's already a block element
      if (
        para.startsWith('<h') ||
        para.startsWith('<ul>') ||
        para.startsWith('<ol>') ||
        para.startsWith('<table>') ||
        para.startsWith('<pre>') ||
        para.startsWith('<blockquote>') ||
        para.startsWith('<hr') ||
        para.startsWith('<!--') ||
        para.length === 0
      ) {
        return para;
      }
      return `<p>${para}</p>`;
    })
    .join('\n\n');

  // Clean up extra whitespace
  html = html.replace(/\n{3,}/g, '\n\n');

  return html.trim();
}

/**
 * Process markdown tables into HTML
 */
function processMarkdownTables(markdown) {
  const tableRegex = /\n\|(.+)\n\|[-:\| ]+\n((?:\|.+\n?)*)/g;

  return markdown.replace(tableRegex, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').map((h) => h.trim()).filter(Boolean);
    const rows = bodyRows
      .split('\n')
      .filter(Boolean)
      .map((row) => row.split('|').map((cell) => cell.trim()).filter(Boolean));

    let table = '<table>\n<thead>\n<tr>\n';
    headers.forEach((header) => {
      table += `<th>${header}</th>\n`;
    });
    table += '</tr>\n</thead>\n<tbody>\n';

    rows.forEach((row) => {
      table += '<tr>\n';
      row.forEach((cell) => {
        table += `<td>${cell}</td>\n`;
      });
      table += '</tr>\n';
    });

    table += '</tbody>\n</table>';
    return '\n' + table + '\n';
  });
}

/**
 * Remove meta comments from markdown content
 * Meta comments are HTML comments at the top: <!-- Meta Title: ... -->
 */
function stripMetaComments(markdown) {
  // Remove all HTML comment lines from the start of the file
  return markdown.replace(/^<!--\s*Meta\s+\w+:.*?-->\n?/gm, '').trim();
}

/**
 * Convert filename to slug
 * Special case: long roofer filename maps to shorter slug
 */
function getSlugFromFilename(filename) {
  const basename = filename.replace(/\.md$/, '');

  // Special mapping for the long filename
  if (
    basename === 'how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid'
  ) {
    return 'how-to-hire-a-roofer-in-south-florida';
  }

  return basename;
}

/**
 * Extract the first markdown H1 line, returning the title text
 * and the remaining markdown with the first H1 line stripped.
 * The stripped H1 avoids a duplicate <h1> inside blog post content since
 * BlogPostPage already renders post.title in the hero.
 */
function extractLeadingH1(markdown) {
  const lines = markdown.split('\n');
  let title = '';
  let startIdx = 0;

  // Skip leading blank lines
  while (startIdx < lines.length && lines[startIdx].trim() === '') {
    startIdx++;
  }

  const firstLine = lines[startIdx] || '';
  const h1Match = firstLine.match(/^#\s+(.+?)\s*$/);
  if (h1Match) {
    title = h1Match[1].trim();
    // Drop the H1 line itself, plus any immediately following blank lines
    let dropUntil = startIdx + 1;
    while (dropUntil < lines.length && lines[dropUntil].trim() === '') {
      dropUntil++;
    }
    const remaining = [
      ...lines.slice(0, startIdx),
      ...lines.slice(dropUntil),
    ].join('\n');
    return { title, markdown: remaining };
  }

  return { title: '', markdown };
}

/**
 * Main function to build blog content JSON
 */
async function buildBlogContent() {
  try {
    // Ensure blog directory exists
    if (!fs.existsSync(BLOG_DIR)) {
      console.error(`Error: Blog directory not found at ${BLOG_DIR}`);
      process.exit(1);
    }

    // Ensure public directory exists
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Read all markdown files
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

    if (files.length === 0) {
      console.warn('Warning: No markdown files found in blog directory');
    }

    console.log(`Found ${files.length} markdown files to process`);

    const blogContent = {};
    let totalSize = 0;

    // Process each markdown file
    files.forEach((file) => {
      try {
        const filePath = path.join(BLOG_DIR, file);
        const markdown = fs.readFileSync(filePath, 'utf-8');

        // Strip meta comments
        const cleanedMarkdown = stripMetaComments(markdown);

        // Extract the leading H1 as post title, drop it from content to
        // prevent duplicate <h1> on the rendered page (BlogPostPage already
        // renders post.title in its own hero).
        const { title, markdown: bodyMarkdown } = extractLeadingH1(cleanedMarkdown);

        // Convert remaining markdown to HTML
        const html = markdownToHtml(bodyMarkdown);

        // Get slug from filename
        const slug = getSlugFromFilename(file);

        // Store as { title, content } — richer format so BlogPostPage,
        // BlogIndexPage, and prerender-static.mjs can pull a canonical title
        // from the markdown rather than slug-casing it.
        blogContent[slug] = { title, content: html };
        totalSize += html.length;

        console.log(`✓ ${file} (${slug}) - title="${title}" - ${html.length} bytes`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });

    // Write output JSON file
    const jsonOutput = JSON.stringify(blogContent);
    fs.writeFileSync(OUTPUT_FILE, jsonOutput, 'utf-8');

    console.log(`\n✓ Successfully generated ${OUTPUT_FILE}`);
    console.log(`  Total entries: ${Object.keys(blogContent).length}`);
    console.log(`  Total size: ${(totalSize / 1024).toFixed(2)} KB`);
    console.log(`  JSON size: ${(jsonOutput.length / 1024).toFixed(2)} KB`);

    // Verify all entries have substantial content
    const smallEntries = Object.entries(blogContent).filter(
      ([slug, entry]) => (entry.content || '').length < 500
    );
    if (smallEntries.length > 0) {
      console.warn(`\nWarning: ${smallEntries.length} entries have small content:`);
      smallEntries.forEach(([slug, entry]) => {
        console.warn(`  - ${slug}: ${(entry.content || '').length} bytes`);
      });
    }

    // Warn on any entry without a title
    const missingTitles = Object.entries(blogContent).filter(
      ([slug, entry]) => !entry.title
    );
    if (missingTitles.length > 0) {
      console.warn(`\nWarning: ${missingTitles.length} entries have no extracted title:`);
      missingTitles.forEach(([slug]) => console.warn(`  - ${slug}`));
    }
  } catch (error) {
    console.error('Error building blog content:', error);
    process.exit(1);
  }
}

// Run the build
buildBlogContent();
