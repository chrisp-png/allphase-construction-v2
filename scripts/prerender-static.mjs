import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');

// Load cities data
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

// Load city content data
const cityContentPath = path.join(__dirname, 'city-content.json');
const cityContent = JSON.parse(fs.readFileSync(cityContentPath, 'utf-8'));

// Helper functions for generating default city-templated content
function defaultServiceAreaHtml(cityName) {
  return `
<section id="seo-static-content">
  <h1>${cityName} Roofing Services</h1>
  <p>All Phase Construction USA provides licensed, insured roofing services in ${cityName}, FL, including roof repairs, replacements, inspections, and storm-damage support. We serve residential and commercial properties with code-compliant workmanship.</p>
  <h2>Common Roofing Services in ${cityName}</h2>
  <ul>
    <li>Leak detection and roof repairs</li>
    <li>Shingle, tile, flat, and metal roofing</li>
    <li>Roof inspections and documentation</li>
    <li>Storm damage assessment and mitigation</li>
  </ul>
</section>
`.trim();
}

function defaultRoofRepairHtml(cityName) {
  return `
<section id="seo-static-content">
  <h1>Roof Repair in ${cityName}, FL</h1>
  <p>Need roof repair in ${cityName}? We handle active leaks, storm-related damage, flashing failures, and roof maintenance issues with fast diagnostics and durable repairs.</p>
  <h2>What We Repair in ${cityName}</h2>
  <ul>
    <li>Roof leaks and water intrusion</li>
    <li>Damaged shingles, tiles, and underlayment</li>
    <li>Flashing, vents, and penetrations</li>
    <li>Storm damage and emergency tarping</li>
  </ul>
</section>
`.trim();
}

function injectMetaTags(html, metadata) {
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${metadata.title}</title>`
  );

  // Replace or inject meta description
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${metadata.description}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${metadata.description}" />\n  </head>`
    );
  }

  // Replace or inject canonical
  const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/;
  if (html.match(canonicalRegex)) {
    html = html.replace(
      canonicalRegex,
      `<link rel="canonical" href="${metadata.canonical}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${metadata.canonical}" />\n  </head>`
    );
  }

  // Replace or inject Open Graph tags
  const ogTags = [
    { property: 'og:title', content: metadata.title },
    { property: 'og:description', content: metadata.description },
    { property: 'og:url', content: metadata.canonical }
  ];

  ogTags.forEach(tag => {
    const pattern = new RegExp(`<meta\\s+property="${tag.property}"\\s+content="[^"]*"\\s*\/?>`, 'g');
    if (html.match(pattern)) {
      html = html.replace(pattern, `<meta property="${tag.property}" content="${tag.content}" />`);
    } else {
      html = html.replace(
        '</head>',
        `  <meta property="${tag.property}" content="${tag.content}" />\n  </head>`
      );
    }
  });

  // Replace or inject Twitter Card tags
  const twitterTags = [
    { name: 'twitter:title', content: metadata.title },
    { name: 'twitter:description', content: metadata.description }
  ];

  twitterTags.forEach(tag => {
    const pattern = new RegExp(`<meta\\s+name="${tag.name}"\\s+content="[^"]*"\\s*\/?>`, 'g');
    if (html.match(pattern)) {
      html = html.replace(pattern, `<meta name="${tag.name}" content="${tag.content}" />`);
    } else {
      html = html.replace(
        '</head>',
        `  <meta name="${tag.name}" content="${tag.content}" />\n  </head>`
      );
    }
  });

  return html;
}

function injectCanonicalOnly(html, canonical) {
  // Replace or inject canonical only (for sitemap URLs)
  const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/;
  if (html.match(canonicalRegex)) {
    html = html.replace(
      canonicalRegex,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonical}" />\n  </head>`
    );
  }
  return html;
}

function parseSitemapUrls(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) {
    console.log('⚠️  sitemap.html not found, skipping sitemap URL prerendering');
    return [];
  }

  const sitemapHtml = fs.readFileSync(sitemapPath, 'utf-8');
  const hrefRegex = /href="([^"]+)"/g;
  const urls = new Set();
  let match;

  while ((match = hrefRegex.exec(sitemapHtml)) !== null) {
    let url = match[1];

    // Convert full domain URLs to paths
    if (url.includes('allphaseconstructionfl.com')) {
      url = url.replace(/https?:\/\/allphaseconstructionfl\.com/, '');
    }

    // Only process internal paths
    if (!url.startsWith('/')) {
      continue;
    }

    // Remove query strings and hash fragments
    url = url.split('?')[0].split('#')[0];

    // Remove trailing slash
    url = url.replace(/\/$/, '');

    // Exclude root path
    if (url === '' || url === '/') {
      continue;
    }

    // Exclude paths with file extensions
    if (/\.(js|css|png|jpg|jpeg|gif|svg|webp|xml|txt|ico|map|html)$/i.test(url)) {
      continue;
    }

    urls.add(url);
  }

  return Array.from(urls).sort();
}

async function prerenderStaticPages() {
  console.log('\n🔧 Starting static HTML prerendering...\n');

  // Read the base index.html
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  console.log('✓ Read base index.html');

  // PASS 1: Generate static HTML for city routes
  console.log('\n📍 Pass 1: Generating city pages...\n');
  cities.forEach(city => {
    const route = {
      path: `/locations/${city.parent}/service-area/${city.slug}/`,
      title: `${city.city} Roofing Services | All Phase Construction USA`,
      description: `Professional roofing services in ${city.city}, FL. Licensed, insured roofing contractor specializing in repairs, replacements, and inspections.`,
      canonical: `https://allphaseconstructionfl.com/locations/${city.parent}/service-area/${city.slug}`
    };

    const routePath = route.path.replace(/^\//, '').replace(/\/$/, '');
    const targetDir = path.join(distDir, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory structure
    fs.mkdirSync(targetDir, { recursive: true });

    // Get content for this city (unique or default)
    const injectedContent = (cityContent?.[city.slug]?.serviceAreaHtml && cityContent[city.slug].serviceAreaHtml.trim())
      ? cityContent[city.slug].serviceAreaHtml
      : defaultServiceAreaHtml(city.city);

    // Inject metadata
    let htmlWithMeta = injectMetaTags(baseHtml, route);

    // Inject body content after React root
    htmlWithMeta = htmlWithMeta.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <div id="seo-static">${injectedContent}</div>`
    );

    // Write file
    fs.writeFileSync(targetFile, htmlWithMeta, 'utf-8');

    console.log(`✓ Generated: ${routePath}/index.html`);
    console.log(`  Title: ${route.title}`);
  });

  // PASS 2: Generate static HTML for roof repair city pages
  console.log('\n🔧 Pass 2: Generating roof repair city pages...\n');
  cities.forEach(city => {
    const routePath = `roofing-services/roof-repair/${city.slug}`;
    const targetDir = path.join(distDir, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory structure
    fs.mkdirSync(targetDir, { recursive: true });

    // Prepare metadata for roof repair page
    const roofRepairMeta = {
      title: `Roof Repair in ${city.city}, FL | All Phase Construction USA`,
      description: `Expert roof repair services in ${city.city}, FL. Licensed and insured roofing contractor specializing in leak repairs and storm damage.`,
      canonical: `https://allphaseconstructionfl.com/roofing-services/roof-repair/${city.slug}`
    };

    // Get content for this city (unique or default)
    const injectedContent = (cityContent?.[city.slug]?.roofRepairHtml && cityContent[city.slug].roofRepairHtml.trim())
      ? cityContent[city.slug].roofRepairHtml
      : defaultRoofRepairHtml(city.city);

    // Inject metadata
    let htmlWithMeta = injectMetaTags(baseHtml, roofRepairMeta);

    // Inject body content after React root
    htmlWithMeta = htmlWithMeta.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <div id="seo-static">${injectedContent}</div>`
    );

    // Write file
    fs.writeFileSync(targetFile, htmlWithMeta, 'utf-8');

    console.log(`✓ Generated: ${routePath}/index.html`);
    console.log(`  Title: ${roofRepairMeta.title}`);
  });

  // PASS 3: Generate static HTML for all sitemap URLs
  console.log('\n📄 Pass 3: Generating sitemap pages...\n');
  const sitemapPath = path.join(distDir, 'sitemap.html');
  const sitemapUrls = parseSitemapUrls(sitemapPath);

  if (sitemapUrls.length > 0) {
    console.log(`Found ${sitemapUrls.length} URLs in sitemap\n`);

    let generatedCount = 0;
    let skippedCount = 0;

    sitemapUrls.forEach(url => {
      const routePath = url.replace(/^\//, '');
      const targetDir = path.join(distDir, routePath);
      const targetFile = path.join(targetDir, 'index.html');

      // Skip if already exists (from city generation)
      if (fs.existsSync(targetFile)) {
        skippedCount++;
        return;
      }

      // Create directory structure
      fs.mkdirSync(targetDir, { recursive: true });

      // Inject canonical only
      const canonical = `https://allphaseconstructionfl.com${url}`;
      const htmlWithCanonical = injectCanonicalOnly(baseHtml, canonical);

      // Write file
      fs.writeFileSync(targetFile, htmlWithCanonical, 'utf-8');

      generatedCount++;
      console.log(`✓ Generated: ${routePath}/index.html`);
    });

    console.log(`\n✓ Generated ${generatedCount} new pages`);
    console.log(`✓ Skipped ${skippedCount} existing pages`);
  }

  console.log('\n✅ Static prerendering complete!\n');
}

prerenderStaticPages().catch(err => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
