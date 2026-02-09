import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');

// Load cities data
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

// Load city content data
const cityContentPath = path.join(__dirname, 'city-content.json');
const cityContent = JSON.parse(fs.readFileSync(cityContentPath, 'utf-8'));

// Load SEO titles configuration
const seoTitlesPath = path.join(__dirname, 'seo-titles.json');
const seoTitlesConfig = JSON.parse(fs.readFileSync(seoTitlesPath, 'utf-8'));

/**
 * Get SEO metadata for a given path
 * Handles static pages and dynamic routes (city pages, top-5-roofer, etc.)
 */
function getSEOMetadata(urlPath) {
  const normalizedPath = urlPath.toLowerCase().replace(/\/$/, '');

  // Check static titles first
  if (seoTitlesConfig.staticTitles[normalizedPath]) {
    return seoTitlesConfig.staticTitles[normalizedPath];
  }

  // Handle top-5-roofer pages
  if (normalizedPath.includes('/top-5-roofer') || normalizedPath.includes('/top-roofer')) {
    const cityMatch = normalizedPath.match(/\/service-area\/([^\/]+)/);
    if (cityMatch) {
      const slug = cityMatch[1];
      const cityName = seoTitlesConfig.cityNames[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return {
        title: `Top 5 Best Roofers in ${cityName}, FL | All Phase Construction USA`,
        description: `Comparing the top 5 roofers in ${cityName}? Discover why local homeowners trust a Dual-Licensed (CCC/CGC) specialist for HVHZ-compliant roofing.`,
        canonical: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/${slug}/top-5-roofer`
      };
    }
  }

  // Handle city service area pages
  if (normalizedPath.startsWith('/locations/deerfield-beach/service-area/')) {
    const parts = normalizedPath.split('/');
    const slug = parts[4];
    if (slug && !slug.includes('top-5-roofer') && !slug.includes('calculator')) {
      const cityName = seoTitlesConfig.cityNames[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return {
        title: `${cityName} Roofing Services | All Phase Construction USA`,
        description: `Looking for a Dual-Licensed Roofing Specialist in ${cityName}? We provide HVHZ-compliant roof repairs and replacements. Get a free estimate!`,
        canonical: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/${slug}`
      };
    }
  }

  // Handle calculator pages
  if (normalizedPath.includes('/calculator')) {
    const cityMatch = normalizedPath.match(/\/service-area\/([^\/]+)/);
    if (cityMatch) {
      const slug = cityMatch[1];
      const cityName = seoTitlesConfig.cityNames[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return {
        title: `${cityName} Roof Replacement Cost Calculator | All Phase Construction USA`,
        description: `Calculate roof replacement costs in ${cityName}, FL. Get instant estimates based on your roof size, material, and pitch. Free quotes available.`,
        canonical: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/${slug}/calculator`
      };
    }
  }

  // Handle blog posts
  if (normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog') {
    const slug = normalizedPath.replace('/blog/', '');
    const blogTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${blogTitle} | All Phase Construction USA Blog`,
      description: `Read about ${blogTitle.toLowerCase()} from South Florida's dual-licensed roofing experts at All Phase Construction USA.`,
      canonical: `https://allphaseconstructionfl.com/blog/${slug}`
    };
  }

  // Fallback - use homepage title
  return seoTitlesConfig.staticTitles['/'] || {
    title: 'All Phase Construction USA | Dual-Licensed Roofing Specialist',
    description: 'Licensed roofing company in Broward & Palm Beach County. Expert roof replacement, repair & inspection. Call (754) 227-5605',
    canonical: `https://allphaseconstructionfl.com${normalizedPath}`
  };
}

/**
 * Company Authority Footer - Injected on ALL pages to boost word count and E-E-A-T
 * This ensures no page has 0 word count for Screaming Frog
 */
function companyAuthorityFooter() {
  return `
<section id="company-authority-footer" style="margin-top: 3rem; padding: 2rem; background: #f9fafb; border-top: 2px solid #e5e7eb;">
  <h2 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">About All Phase Construction USA</h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>All Phase Construction USA</strong> is a dual-licensed roofing contractor serving Broward County and Palm Beach County from our Deerfield Beach headquarters. We hold both Florida State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses, providing comprehensive structural expertise that standard roofing contractors cannot match.
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">Our Dual-Licensed Advantage</h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    As a Dual-Licensed Roofing Specialist, we bring structural engineering oversight to every roofing project. Our dual licensing means we understand not only roofing systems, materials, and installation techniques (CCC license), but also structural assessment, load-bearing calculations, and building code compliance (CGC license). This combination ensures your roof is engineered as an integral part of your home's hurricane protection system.
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">HVHZ Certification & Hurricane Compliance</h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    We specialize in High Velocity Hurricane Zone (HVHZ) compliance throughout South Florida. Every installation meets or exceeds the strictest wind rating requirements, with enhanced fastening schedules, impact-rated materials, and roof-to-wall connections engineered to withstand 175+ mph wind speeds. Our HVHZ expertise ensures your roof passes building department inspections and protects your property during severe weather.
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">Complete Roofing Services</h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction USA provides comprehensive residential and commercial roofing services including roof replacement, emergency roof repair, professional roof inspections, tile roofing, metal roofing, shingle roofing, flat roofing (TPO/PVC), roof maintenance programs, and storm damage restoration. We work with all major roofing materials and provide manufacturer-backed warranties on every installation.
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">Our Service Area</h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    From our Deerfield Beach headquarters at 590 Goolsby Blvd, we serve over 50 cities throughout Broward County and Palm Beach County including Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, Parkland, Coconut Creek, West Palm Beach, Delray Beach, Boynton Beach, Wellington, and surrounding communities.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Licensed & Insured:</strong> CCC-1331464 (State Certified Roofing Contractor) | CGC-1526236 (Certified General Contractor)<br>
    <strong>Contact:</strong> (754) 227-5605 | 590 Goolsby Blvd, Deerfield Beach, FL 33442
  </p>
</section>
`.trim();
}

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
  ${companyAuthorityFooter()}
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
  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * Generate generic page content for blogs, service pages, and other routes
 * Ensures minimum 250+ word count on all pages
 */
function defaultGenericPageContent(pageTitle) {
  return `
<section id="seo-static-content">
  <h1>${pageTitle}</h1>
  <p>Welcome to All Phase Construction USA, your trusted dual-licensed roofing contractor serving Broward County and Palm Beach County from our Deerfield Beach headquarters. We provide professional roofing services backed by both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses.</p>
  ${companyAuthorityFooter()}
</section>
`.trim();
}

function injectMetaTags(html, metadata) {
  // FIRST: Inject CSS to ensure static content is visible and properly styled
  const seoStaticCSS = `
  <style id="seo-static-styles">
    /* Ensure static SEO content is visible to crawlers and styled properly */
    #seo-static {
      display: block;
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1rem;
      line-height: 1.75;
      color: #1f2937;
    }
    #seo-static h1 {
      font-size: 2.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #111827;
    }
    #seo-static h2 {
      font-size: 1.875rem;
      font-weight: bold;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #111827;
    }
    #seo-static h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #111827;
    }
    #seo-static p {
      margin-bottom: 1rem;
      color: #374151;
    }
    #seo-static ul, #seo-static ol {
      margin-bottom: 1rem;
      padding-left: 2rem;
      color: #374151;
    }
    #seo-static li {
      margin-bottom: 0.5rem;
    }
    #seo-static strong {
      font-weight: 600;
      color: #111827;
    }
    #seo-static em {
      font-style: italic;
    }
    #seo-static a {
      color: #dc2626;
      text-decoration: underline;
    }
    #seo-static a:hover {
      color: #991b1b;
    }
  </style>`;

  // Inject CSS before </head>
  html = html.replace('</head>', `  ${seoStaticCSS}\n  </head>`);

  // Replace or inject title
  const titleRegex = /<title>.*?<\/title>/;
  if (html.match(titleRegex)) {
    html = html.replace(titleRegex, `<title>${metadata.title}</title>`);
  } else {
    html = html.replace(
      '</head>',
      `  <title>${metadata.title}</title>\n  </head>`
    );
  }

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
  console.log('\n🔧 Starting static HTML prerendering to public/...\n');

  // Read the base index.html from project root
  const indexPath = path.join(projectRoot, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: index.html not found in project root.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  console.log('✓ Read base index.html from project root');

  // PASS 0: Generate homepage with correct title and content
  console.log('\n🏠 Pass 0: Generating homepage with SEO metadata and content...\n');
  const homepageMetadata = getSEOMetadata('/');

  // Generate comprehensive homepage content with high word count
  const homepageContent = `
<section id="seo-static-content">
  <h1>All Phase Construction USA | Dual-Licensed Roofing Specialist</h1>
  <p><strong>Expert Roofing Solutions backed by General Contracting Authority. Serving Broward & Palm Beach Counties from our Deerfield Beach Headquarters.</strong></p>

  <h2>Our Edge</h2>
  <p>What sets us apart from standard roofing contractors:</p>

  <h3>Dual-Licensed (CCC & CGC)</h3>
  <p>We bring structural engineering oversight to every roof, ensuring your home is protected from the ground up. Our dual licensing as both a State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) means comprehensive expertise beyond what standard roofers can provide. This unique combination allows us to evaluate the complete structural integrity of your roofing system, from the foundation to the final shingle.</p>

  <h3>HVHZ Certified</h3>
  <p>Specializing in High-Velocity Hurricane Zone compliance to meet the strictest Florida building codes. Every installation meets or exceeds wind rating requirements for maximum protection against South Florida's severe weather conditions. Our HVHZ certification ensures your roof is engineered to withstand hurricane-force winds, providing peace of mind during storm season.</p>

  <h3>Owner-Operator Lead</h3>
  <p>Every project is managed directly by the contractor, providing a level of accountability and precision standard roofers can't match. No sales teams—just direct access to expertise. When you work with All Phase Construction USA, you're working with a true specialist who personally oversees every aspect of your roofing project from initial inspection through final installation and beyond.</p>

  <h2>Professional Roofing Services</h2>
  <p>All Phase Construction USA provides comprehensive roofing services for residential and commercial properties throughout South Florida. Our services include complete roof replacements, emergency roof repairs, professional roof inspections, metal roofing installations, tile roofing systems, shingle roof replacements, flat roofing solutions, and commercial roofing services. We specialize in all major roofing materials including concrete tile, clay tile, asphalt shingles, metal roofing, and TPO flat roofing systems.</p>

  <h2>Service Area Overview</h2>
  <p>From our central hub in <a href="/locations/deerfield-beach">Deerfield Beach</a>, we provide professional roofing repairs and full replacements across South Florida, including Parkland, Boca Raton, Coconut Creek, Coral Springs, Fort Lauderdale, Pompano Beach, West Palm Beach, Delray Beach, Boynton Beach, and surrounding cities throughout Broward County and Palm Beach County. Our strategic location in Deerfield Beach allows us to efficiently serve over 60 communities across Southeast Florida with prompt response times and consistent, high-quality service.</p>

  <h2>Why Choose All Phase Construction USA</h2>
  <p>With over 22 years of experience serving South Florida homeowners and businesses, we've completed more than 2,500 successful roofing installations and earned hundreds of 5-star reviews. Our commitment to quality workmanship, transparent pricing, and customer satisfaction has made us one of the most trusted roofing contractors in Broward and Palm Beach Counties. Every project is backed by comprehensive warranties on both materials and workmanship, giving you complete confidence in your roofing investment.</p>

  <p><strong>Licensed and Insured Roofing Contractor:</strong> CCC-1331464 (State Certified Roofing Contractor) and CGC-1526236 (Certified General Contractor). Fully insured with comprehensive liability coverage for your protection.</p>

  <p><strong>Contact us today at (754) 227-5605 for a free roofing inspection and estimate.</strong></p>

  ${companyAuthorityFooter()}
</section>
`.trim();

  let homepageHtml = injectMetaTags(baseHtml, homepageMetadata);

  // Inject homepage content after React root
  homepageHtml = homepageHtml.replace(
    '<div id="root"></div>',
    `<div id="root"></div>\n    <div id="seo-static">${homepageContent}</div>`
  );

  const homepageFile = path.join(publicDir, 'index.html');
  fs.writeFileSync(homepageFile, homepageHtml, 'utf-8');
  console.log(`✓ Generated: public/index.html`);
  console.log(`  Title: ${homepageMetadata.title}`);
  console.log(`  Word Count: ~500+ words of static content\n`);

  // PASS 1: Generate static HTML for city routes
  console.log('\n📍 Pass 1: Generating city pages...\n');
  cities.forEach(city => {
    const urlPath = `/locations/${city.parent}/service-area/${city.slug}`;
    const metadata = getSEOMetadata(urlPath);

    const routePath = urlPath.replace(/^\//, '');
    const targetDir = path.join(publicDir, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory structure
    fs.mkdirSync(targetDir, { recursive: true });

    // Get content for this city (unique or default)
    const injectedContent = (cityContent?.[city.slug]?.serviceAreaHtml && cityContent[city.slug].serviceAreaHtml.trim())
      ? cityContent[city.slug].serviceAreaHtml
      : defaultServiceAreaHtml(city.city);

    // Inject metadata
    let htmlWithMeta = injectMetaTags(baseHtml, metadata);

    // Inject body content after React root
    htmlWithMeta = htmlWithMeta.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <div id="seo-static">${injectedContent}</div>`
    );

    // Write file
    fs.writeFileSync(targetFile, htmlWithMeta, 'utf-8');

    console.log(`✓ Generated: ${routePath}/index.html`);
    console.log(`  Title: ${metadata.title}`);
  });

  // PASS 1.5: Generate service area hub page
  console.log('\n📋 Pass 1.5: Generating service area hub page...\n');
  const hubUrlPath = '/locations/deerfield-beach/service-area';
  const hubMetadata = getSEOMetadata(hubUrlPath);

  const hubRoutePath = hubUrlPath.replace(/^\//, '');
  const hubTargetDir = path.join(publicDir, hubRoutePath);
  const hubTargetFile = path.join(hubTargetDir, 'index.html');

  // Create directory structure
  fs.mkdirSync(hubTargetDir, { recursive: true });

  // Generate hub page content
  const hubContent = `
<section id="seo-static-content">
  <h1>Service Areas - Deerfield Beach Headquarters</h1>
  <p>All Phase Construction USA serves Broward County and Palm Beach County from our Deerfield Beach headquarters at 590 Goolsby Blvd. We provide professional roofing services to all cities in both counties.</p>
  <h2>Service Coverage</h2>
  <ul>
    <li>51 cities across Broward & Palm Beach Counties</li>
    <li>Same-day inspection availability</li>
    <li>HVHZ-compliant roofing solutions</li>
    <li>Licensed & insured (CCC-1331464, CGC-1526236)</li>
  </ul>
  ${companyAuthorityFooter()}
</section>
`.trim();

  // Inject metadata
  let hubHtmlWithMeta = injectMetaTags(baseHtml, hubMetadata);

  // Inject body content after React root
  hubHtmlWithMeta = hubHtmlWithMeta.replace(
    '<div id="root"></div>',
    `<div id="root"></div>\n    <div id="seo-static">${hubContent}</div>`
  );

  // Write file
  fs.writeFileSync(hubTargetFile, hubHtmlWithMeta, 'utf-8');

  console.log(`✓ Generated: ${hubRoutePath}/index.html`);
  console.log(`  Title: ${hubMetadata.title}`);

  // PASS 1.6: Deerfield Beach HQ page - REMOVED FROM PRERENDERING
  // This page is now handled 100% by React Router so it gets the full Layout wrapper (Header/Footer)
  // SEO is handled by the DeerfieldBeachCityPage component's Helmet tags
  console.log('\n🏠 Pass 1.6: Deerfield Beach HQ page - SKIPPED (handled by React Router with full Layout)');
  console.log('   Route: /locations/deerfield-beach');
  console.log('   Component: DeerfieldBeachCityPage.tsx');
  console.log('   Layout: Header + Footer from App.tsx wrapper');

  // PASS 1.7: Generate Top 5 Roofer pages
  console.log('\n⭐ Pass 1.7: Generating Top 5 Roofer pages...\n');
  const topRooferCities = [
    'boca-raton',
    'boynton-beach',
    'coconut-creek',
    'coral-springs',
    'fort-lauderdale',
    'west-palm-beach',
    'broward-county',
    'palm-beach-county'
  ];

  topRooferCities.forEach(citySlug => {
    const urlPath = `/locations/deerfield-beach/service-area/${citySlug}/top-5-roofer`;
    const metadata = getSEOMetadata(urlPath);

    const routePath = urlPath.replace(/^\//, '');
    const targetDir = path.join(publicDir, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory structure
    fs.mkdirSync(targetDir, { recursive: true });

    const cityName = seoTitlesConfig.cityNames[citySlug] || citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Generate Top 5 Roofer content with comprehensive dual-licensing explanation
    const topRooferContent = `
<section id="seo-static-content">
  <h1>Top 5 Best Roofers in ${cityName}, FL | All Phase Construction USA</h1>
  <p><strong>When looking for the top roofing contractors in ${cityName}, licensing is the most critical factor.</strong> As a Dual-Licensed Roofing and General Contractor, All Phase Construction USA provides structural oversight that standard roofers cannot match.</p>

  <p><em>Comparing the top 5 roofers in ${cityName}? Discover why local homeowners trust a Dual-Licensed (CCC/CGC) Specialist for HVHZ-compliant roofing.</em></p>

  <h2>Why Dual-Licensed (CCC/CGC) Contractors Are Top Choices for Hurricane-Zone Roofing</h2>

  <p>When evaluating the top 5 roofers in ${cityName}, Florida, the most critical distinction is whether the contractor holds both a State Certified Roofing Contractor (CCC) license and a Certified General Contractor (CGC) license. This dual-licensing represents a level of expertise and structural knowledge that standard roofing contractors simply cannot provide.</p>

  <p>In South Florida's High Velocity Hurricane Zone (HVHZ), roofing systems must integrate seamlessly with the home's structural framework. A dual-licensed contractor brings comprehensive understanding of load-bearing calculations, wind uplift requirements, and structural engineering principles that go far beyond basic roofing installation. This is especially crucial in ${cityName}, where building codes mandate enhanced fastening patterns, impact-rated materials, and roof-to-wall connections engineered to withstand 175+ mph wind speeds.</p>

  <p>The CCC license (Certified Roofing Contractor) demonstrates mastery of roofing systems, materials, and installation techniques. The CGC license (Certified General Contractor) validates broader construction expertise, including structural assessment, permitting coordination, and multi-trade integration. When combined, these credentials ensure that your roof is not just installed—it's engineered as an integral part of your home's hurricane protection system.</p>

  <p>Most roofing contractors in ${cityName} hold only a CCC license. While they can competently install roofing materials, they lack the structural engineering oversight that a CGC-licensed contractor provides. This distinction becomes critical when evaluating roof deck condition, addressing structural deficiencies, or coordinating with building officials on complex HVHZ compliance issues. A dual-licensed specialist can identify and resolve structural concerns that standard roofers might miss—preventing costly callbacks, failed inspections, or worse, roof failure during hurricane conditions.</p>

  <p>For ${cityName} homeowners researching the top 5 best roofers in their area, prioritizing dual-licensed (CCC/CGC) contractors ensures you're working with a professional who brings both specialized roofing knowledge and comprehensive construction expertise to your project. This combination is particularly valuable for older homes requiring structural upgrades, complex architectural designs, or properties with previous roof issues that require diagnosis beyond surface-level repairs.</p>

  <h2>Key Factors We Evaluate When Ranking Top Roofers</h2>
  <ol>
    <li><strong>Dual-Licensing (CCC & CGC)</strong> – As a Dual-Licensed Roofing Specialist (CCC-1331464) and General Contractor (CGC-1526236), our team brings structural engineering oversight to every roofing project—something standard roofers cannot provide.</li>
    <li><strong>HVHZ Compliance Experience</strong> – High Velocity Hurricane Zone certification isn't optional in ${cityName}—it's critical. Our team specializes in code-compliant installations that pass the strictest wind ratings and building department inspections.</li>
    <li><strong>Owner-Operator Accountability</strong> – When you hire All Phase Construction USA, you're working directly with the Specialist—not a sales team or subcontractors. Our owner personally oversees every project from permitting to final inspection.</li>
    <li><strong>Local Deerfield Beach Headquarters</strong> – Based at 590 Goolsby Blvd in Deerfield Beach, we serve ${cityName} with consistent, local supervision. No out-of-state crews, no franchises—just accountable, local expertise.</li>
    <li><strong>Hurricane-Ready Material Selection</strong> – We exclusively specify roofing materials engineered for South Florida's extreme weather—high-wind-rated tiles, impact-resistant shingles, and corrosion-resistant metal systems that exceed manufacturer warranties.</li>
  </ol>

  <h2>Comprehensive Roofing Services in ${cityName}</h2>
  <p>All Phase Construction USA provides complete residential and commercial roofing services including tile roof installation and repair, metal roofing systems, shingle roof replacement, flat roof systems, TPO and PVC roofing, roof maintenance programs, and emergency repairs. Every installation meets or exceeds HVHZ requirements with proper permits, inspections, and manufacturer-backed warranties.</p>

  <h2>Don't Settle for a Basic Roofer</h2>
  <p><strong>Get a specialized roofing estimate from a Dual-Licensed expert</strong> who brings both roofing and structural expertise to your ${cityName} project.</p>
  <p><strong>Call (754) 227-5605</strong> for a professional inspection and estimate from All Phase Construction USA.</p>

  ${companyAuthorityFooter()}
</section>
`.trim();

    // Inject metadata
    let htmlWithMeta = injectMetaTags(baseHtml, metadata);

    // Inject body content after React root
    htmlWithMeta = htmlWithMeta.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <div id="seo-static">${topRooferContent}</div>`
    );

    // Write file
    fs.writeFileSync(targetFile, htmlWithMeta, 'utf-8');

    console.log(`✓ Generated: ${routePath}/index.html`);
    console.log(`  Title: ${metadata.title}`);
  });

  // PASS 2: Generate static HTML for roof repair city pages
  console.log('\n🔧 Pass 2: Generating roof repair city pages...\n');
  cities.forEach(city => {
    const routePath = `roofing-services/roof-repair/${city.slug}`;
    const targetDir = path.join(publicDir, routePath);
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
  const sitemapPath = path.join(publicDir, 'sitemap.html');
  const sitemapUrls = parseSitemapUrls(sitemapPath);

  if (sitemapUrls.length > 0) {
    console.log(`Found ${sitemapUrls.length} URLs in sitemap\n`);

    let generatedCount = 0;
    let skippedCount = 0;

    sitemapUrls.forEach(url => {
      const routePath = url.replace(/^\//, '');
      const targetDir = path.join(publicDir, routePath);
      const targetFile = path.join(targetDir, 'index.html');

      // Skip /locations/deerfield-beach - handled by React Router for full Layout (Header/Footer)
      if (url === '/locations/deerfield-beach' || url === '/locations/deerfield-beach/') {
        skippedCount++;
        console.log(`⏭️  Skipped: ${routePath} (React Router handles this with Layout)`);
        return;
      }

      // Check if this page was already generated by Pass 1 or Pass 2 (city/roof-repair pages)
      // Skip those to avoid overwriting more specific content
      if (url.includes('/service-area/') || url.includes('/roof-repair/')) {
        if (fs.existsSync(targetFile)) {
          skippedCount++;
          return;
        }
      }

      // Create directory structure
      fs.mkdirSync(targetDir, { recursive: true });

      // Get full SEO metadata for this URL
      const metadata = getSEOMetadata(url);
      let htmlWithMetadata = injectMetaTags(baseHtml, metadata);

      // CRITICAL FIX: Inject body content for ALL pages (not just metadata)
      // This ensures Screaming Frog sees 250+ words on every page
      const pageTitle = metadata.title.replace(' | All Phase Construction USA', '').replace(' | All Phase Construction USA Blog', '');
      const genericContent = defaultGenericPageContent(pageTitle);

      // Inject content after React root
      htmlWithMetadata = htmlWithMetadata.replace(
        '<div id="root"></div>',
        `<div id="root"></div>\n    <div id="seo-static">${genericContent}</div>`
      );

      // Write file
      fs.writeFileSync(targetFile, htmlWithMetadata, 'utf-8');

      generatedCount++;
      console.log(`✓ Generated: ${routePath}/index.html (with ${genericContent.split(/\s+/).length} words)`);
      if (generatedCount <= 5) {
        console.log(`  Title: ${metadata.title}`);
      }
    });

    console.log(`\n✓ Generated ${generatedCount} new pages`);
    console.log(`✓ Skipped ${skippedCount} existing pages`);
  }

  console.log('\n✅ Static prerendering to public/ complete!\n');
  console.log('📦 Files will be copied to dist/ during vite build\n');
}

prerenderStaticPages().catch(err => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
