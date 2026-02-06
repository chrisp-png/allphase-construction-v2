/**
 * Prerender POC - Puppeteer-based Static HTML Generation
 *
 * This script prerenders specific routes into static HTML files for SEO.
 *
 * Purpose:
 * - Generate static HTML with baked-in meta tags visible in view-source
 * - Solve React Helmet client-side limitation for SEO crawlers
 *
 * IMPORTANT: This runs ONLY in Netlify CI, not in local Bolt environment
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// Routes to prerender (POC: 2 routes only)
const ROUTES_TO_PRERENDER = [
  '/locations/deerfield-beach/service-area/boca-raton',
  '/locations/deerfield-beach/service-area/boynton-beach',
];

/**
 * Simple prerender without Puppeteer for Netlify environment
 * Uses placeholder meta tags that will be replaced by actual content
 */
function simplePrerender() {
  console.log('🚀 Starting POC Prerender (Simple Mode)...\n');

  // Read base index.html
  const indexPath = join(distDir, 'index.html');
  if (!existsSync(indexPath)) {
    console.error('❌ dist/index.html not found. Run build first.');
    process.exit(1);
  }

  const baseHtml = readFileSync(indexPath, 'utf-8');

  // City-specific meta tags for each route
  const cityMetaTags = {
    'boca-raton': {
      title: 'Boca Raton Roofing Contractor | Licensed Roofers | All Phase Construction',
      description: 'Top-rated Boca Raton roofing contractor. Licensed & insured. Tile, metal, flat roof specialists. Hurricane-rated installations. Free estimates. BBB A+ rated.',
    },
    'boynton-beach': {
      title: 'Boynton Beach Roofing Contractor | Licensed Roofers | All Phase Construction',
      description: 'Expert Boynton Beach roofing contractor. Licensed & insured. Residential & commercial roofing. Hurricane-rated systems. Free estimates. BBB A+ rated.',
    },
  };

  ROUTES_TO_PRERENDER.forEach(route => {
    const citySlug = route.split('/').pop();
    const meta = cityMetaTags[citySlug];

    if (!meta) {
      console.warn(`⚠️  No meta tags defined for ${citySlug}, skipping...`);
      return;
    }

    // Replace placeholder meta tags with city-specific ones
    let customHtml = baseHtml;

    // Replace title
    customHtml = customHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${meta.title}</title>`
    );

    // Replace or add description meta tag
    if (customHtml.includes('<meta name="description"')) {
      customHtml = customHtml.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${meta.description}">`
      );
    } else {
      customHtml = customHtml.replace(
        '</head>',
        `  <meta name="description" content="${meta.description}">\n</head>`
      );
    }

    // Create directory structure
    const routeParts = route.split('/').filter(p => p);
    let currentPath = distDir;

    routeParts.forEach(part => {
      currentPath = join(currentPath, part);
      if (!existsSync(currentPath)) {
        mkdirSync(currentPath, { recursive: true });
      }
    });

    // Write prerendered HTML
    const outputPath = join(currentPath, 'index.html');
    writeFileSync(outputPath, customHtml, 'utf-8');

    console.log(`✅ Prerendered: ${route}`);
    console.log(`   → ${outputPath}`);
  });

  console.log(`\n✨ Prerendering complete! Generated ${ROUTES_TO_PRERENDER.length} static HTML files.\n`);
}

/**
 * Main execution
 */
function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║          PRERENDER POC - NETLIFY ONLY EXECUTION            ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  // Check if running in Netlify
  const isNetlify = process.env.NETLIFY === 'true' || process.env.CI === 'true';

  if (!isNetlify) {
    console.log('⚠️  Not running in Netlify CI environment.');
    console.log('   This script is designed for Netlify deployment only.');
    console.log('   Skipping prerender in local environment.\n');
    process.exit(0);
  }

  console.log('✓ Running in Netlify CI environment\n');

  // Verify dist directory exists
  if (!existsSync(distDir)) {
    console.error('❌ dist/ directory not found.');
    console.error('   Run "npm run build" first.\n');
    process.exit(1);
  }

  // Execute simple prerender
  simplePrerender();

  console.log('Routes prerendered:');
  ROUTES_TO_PRERENDER.forEach(route => {
    console.log(`  • ${route}`);
  });

  console.log('\n✅ POC Prerender complete!\n');
  console.log('Next steps:');
  console.log('  1. Deploy to Netlify');
  console.log('  2. Test with: curl -s https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton | grep -i "<title>"');
  console.log('  3. Verify unique city meta tags in view-source\n');
}

// Run main function
main();
