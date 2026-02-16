#!/usr/bin/env node

/**
 * Fix all internal links to use trailing slashes
 * Processes all .tsx and .ts files in src directory
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

// Track changes
let totalFiles = 0;
let filesModified = 0;
let linksFixed = 0;

/**
 * Recursively get all .tsx and .ts files
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Check if URL should get trailing slash
 */
function shouldAddTrailingSlash(url) {
  // Don't add trailing slash if:
  // - Already has trailing slash
  // - Is root path "/"
  // - Is external URL (http/https)
  // - Has anchor (#)
  // - Has query params (?)
  // - Is empty or just whitespace

  if (!url || url.trim() === '') return false;
  if (url === '/') return false;
  if (url.endsWith('/')) return false;
  if (url.startsWith('http://') || url.startsWith('https://')) return false;
  if (url.includes('#')) return false;
  if (url.includes('?')) return false;
  if (!url.startsWith('/')) return false; // Only process internal paths

  return true;
}

/**
 * Fix trailing slashes in content
 */
function fixTrailingSlashes(content) {
  let modified = false;
  let fixCount = 0;

  // Pattern 1: to="/path"
  content = content.replace(/to=["']([^"']+)["']/g, (match, url) => {
    if (shouldAddTrailingSlash(url)) {
      fixCount++;
      modified = true;
      const quote = match.includes('"') ? '"' : "'";
      return `to=${quote}${url}/${quote}`;
    }
    return match;
  });

  // Pattern 2: href="/path"
  content = content.replace(/href=["']([^"']+)["']/g, (match, url) => {
    if (shouldAddTrailingSlash(url)) {
      fixCount++;
      modified = true;
      const quote = match.includes('"') ? '"' : "'";
      return `href=${quote}${url}/${quote}`;
    }
    return match;
  });

  // Pattern 3: path: '/path' (route definitions)
  content = content.replace(/path:\s*["']([^"']+)["']/g, (match, url) => {
    if (shouldAddTrailingSlash(url)) {
      fixCount++;
      modified = true;
      const quote = match.includes('"') ? '"' : "'";
      return `path: ${quote}${url}/${quote}`;
    }
    return match;
  });

  return { content, modified, fixCount };
}

/**
 * Process a file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { content: newContent, modified, fixCount } = fixTrailingSlashes(content);

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    filesModified++;
    linksFixed += fixCount;
    console.log(`✅ ${path.relative(srcDir, filePath)}: Fixed ${fixCount} links`);
  }
}

/**
 * Main
 */
function main() {
  console.log('🔍 Scanning for files with missing trailing slashes...\n');

  const files = getAllFiles(srcDir);
  totalFiles = files.length;

  console.log(`📁 Found ${totalFiles} TypeScript files\n`);
  console.log('🔧 Processing files...\n');

  files.forEach(file => {
    processFile(file);
  });

  console.log('\n' + '═'.repeat(60));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(60));
  console.log(`Total files scanned:    ${totalFiles}`);
  console.log(`Files modified:         ${filesModified}`);
  console.log(`Links fixed:            ${linksFixed}`);
  console.log('═'.repeat(60));

  if (filesModified > 0) {
    console.log('\n✅ All internal links now use trailing slashes!');
  } else {
    console.log('\n✅ All links already had trailing slashes!');
  }
}

main();
