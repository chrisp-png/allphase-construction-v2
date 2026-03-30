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

        // Convert to HTML
        const html = markdownToHtml(cleanedMarkdown);

        // Get slug from filename
        const slug = getSlugFromFilename(file);

        // Store in map
        blogContent[slug] = html;
        totalSize += html.length;

        console.log(`✓ ${file} (${slug}) - ${html.length} bytes`);
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
      ([slug, html]) => html.length < 500
    );
    if (smallEntries.length > 0) {
      console.warn(`\nWarning: ${smallEntries.length} entries have small content:`);
      smallEntries.forEach(([slug, html]) => {
        console.warn(`  - ${slug}: ${html.length} bytes`);
      });
    }
  } catch (error) {
    console.error('Error building blog content:', error);
    process.exit(1);
  }
}

// Run the build
buildBlogContent();
