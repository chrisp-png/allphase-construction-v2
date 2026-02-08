/**
 * Inject Bundled Assets into Prerendered HTML Files
 *
 * This script extracts the bundled CSS and JS asset links from the main
 * dist/index.html and injects them into all prerendered HTML files in subdirectories.
 *
 * This ensures that prerendered pages (like /locations/deerfield-beach) load with
 * the same bundled assets as the main SPA, providing proper styling and functionality.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Read the main index.html to extract bundled asset links
const mainIndexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(mainIndexPath)) {
  console.error('❌ dist/index.html not found. Run build first.');
  process.exit(1);
}

const mainIndexContent = fs.readFileSync(mainIndexPath, 'utf-8');

// Extract the bundled JS and CSS links using regex
const jsMatch = mainIndexContent.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/);
const vendorMatch = mainIndexContent.match(/<link rel="modulepreload" crossorigin href="(\/assets\/[^"]+\.js)">/);
const cssMatch = mainIndexContent.match(/<link rel="preload" as="style" href="(\/assets\/[^"]+\.css)"[^>]*><link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);

if (!jsMatch || !cssMatch) {
  console.error('❌ Could not extract bundled assets from dist/index.html');
  process.exit(1);
}

const bundledJS = jsMatch[1];
const vendorJS = vendorMatch ? vendorMatch[1] : null;
const bundledCSS = cssMatch[1];

console.log(`✅ Found bundled assets:`);
console.log(`   JS: ${bundledJS}`);
if (vendorJS) console.log(`   Vendor: ${vendorJS}`);
console.log(`   CSS: ${bundledCSS}`);

// Create the replacement HTML to inject
const assetInjection = `    <script type="module" crossorigin src="${bundledJS}"></script>
${vendorJS ? `    <link rel="modulepreload" crossorigin href="${vendorJS}">` : ''}
    <link rel="preload" as="style" href="${bundledCSS}" crossorigin><link rel="stylesheet" crossorigin href="${bundledCSS}" media="print" onload="this.media='all';this.onload=null;"><noscript><link rel="stylesheet" crossorigin href="${bundledCSS}"></noscript>`;

// Function to recursively process HTML files in subdirectories
function processHTMLFiles(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      // Recursively process subdirectories
      processHTMLFiles(fullPath, relativePath);
    } else if (entry.isFile() && entry.name === 'index.html' && basePath !== '') {
      // Skip root index.html, only process subdirectory index.html files
      let content = fs.readFileSync(fullPath, 'utf-8');

      // Check if this file has the old development script tag
      if (content.includes('<script type="module" src="/src/main.tsx"></script>')) {
        // Replace the development script tag with bundled assets
        content = content.replace(
          /<script type="module" src="\/src\/main\.tsx"><\/script>/,
          assetInjection
        );

        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`✅ Injected assets into: ${relativePath}`);
      } else if (!content.includes('/assets/index-')) {
        console.log(`⚠️  Skipped (no dev script found): ${relativePath}`);
      } else {
        console.log(`✅ Already has bundled assets: ${relativePath}`);
      }
    }
  });
}

// Process all subdirectories in dist
console.log('\n🔧 Processing prerendered HTML files...\n');
processHTMLFiles(distDir);

console.log('\n✅ Asset injection complete!\n');
