/**
 * Generate Hybrid Prerendered Pages for City Routes
 *
 * This script generates hybrid HTML pages that:
 * - Include the full React app shell (same assets as homepage)
 * - Wrap SEO content in #seo-static for crawlers
 * - Hide SEO content when React loads (js-ready class)
 * - Allow React to mount and take over with full header/footer
 *
 * Routes:
 * - /locations/:city/
 * - /roof-repair/:city/
 * - /roof-inspection/:city/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Read city data
const citiesPath = path.resolve(__dirname, './cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

/**
 * Extract bundled CSS and JS filenames from dist/index.html
 */
function getBundledAssets() {
  const mainIndexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(mainIndexPath)) {
    console.error('â dist/index.html not found. Run Vite build first.');
    process.exit(1);
  }

  const content = fs.readFileSync(mainIndexPath, 'utf-8');

  const cssMatch = content.match(/href="(\/assets\/index-[^"]+\.css)"/);
  const jsMatch = content.match(/src="(\/assets\/index-[^"]+\.js)"/);

  if (!cssMatch || !jsMatch) {
    console.error('â Could not find bundled assets in dist/index.html');
    console.error('CSS found:', !!cssMatch, 'JS found:', !!jsMatch);
    process.exit(1);
  }

  return {
    css: cssMatch[1],
    js: jsMatch[1]
  };
}

/**
 * Generate structured data for a city page
 */
function generateStructuredData(cityName, citySlug, pageType) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://allphaseconstructionfl.com/${pageType}/${citySlug}/#business`,
    name: 'All Phase Construction USA',
    alternateName: ['All Phase USA', 'All Phase Roofing'],
    url: `https://allphaseconstructionfl.com/${pageType}/${citySlug}/`,
    telephone: '754-227-5605',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
        addressCountry: 'US'
      }
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Florida State Certified Roofing Contractor - CCC1331464'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Florida State Certified General Contractor - CGC1526236'
      }
    ],
    description: `Professional roofing services in ${cityName}, FL. Dual-licensed contractor providing roof repair, inspection, and replacement.`,
  };

  return JSON.stringify(baseSchema, null, 2);
}

/**
 * Get SEO metadata for a page
 */
function getSEOMetadata(urlPath, cityName = null) {
  const normalizedPath = urlPath.toLowerCase().replace(/\/$/, '');

  if (cityName) {
    if (normalizedPath.includes('/roof-repair/')) {
      return {
        title: `Roof Repair in ${cityName}, FL | Emergency Service Available`,
        description: `Need roof repair in ${cityName}? Emergency leak repair, storm damage, and professional roofing services. Dual-licensed CCC/CGC contractor. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}/`
      };
    }
    if (normalizedPath.includes('/roof-inspection/')) {
      return {
        title: `${cityName} Roof Inspection | 21-Point Professional Assessment`,
        description: `Professional roof inspection in ${cityName}, FL. Free 21-point assessment with photo documentation. Pre-purchase, insurance, storm damage inspections. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}/`
      };
    }
    if (normalizedPath.includes('/locations/')) {
      if (normalizedPath === '/locations/deerfield-beach') {
        return {
          title: `Deerfield Beach Roofing Contractor | All Phase Construction USA HQ`,
          description: `All Phase Construction USA headquarters in Deerfield Beach, FL. Dual-licensed roofing contractor (CCC-1331464 & CGC-1526236). 590 Goolsby Blvd. Call (754) 227-5605 for emergency repairs & inspections.`,
          canonical: `https://allphaseconstructionfl.com${normalizedPath}/`
        };
      }
      return {
        title: `${cityName} Roofing Services | All Phase Construction USA`,
        description: `Professional roofing services in ${cityName}, FL. Dual-licensed CCC/CGC contractor. Roof repair, inspection, replacement. HVHZ certified. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}/`
      };
    }
  }

  // Fallback - FAIL LOUDLY if metadata missing
  // This prevents silent injection of wrong metadata at build time
  throw new Error(
    `â MISSING METADATA FOR ROUTE: ${normalizedPath}\n` +
    `Add explicit metadata to scripts/seo-titles.json or handle this route in getSEOMetadata().\n` +
    `Routes should NOT rely on fallback metadata - every route must be explicitly defined.`
  );
}

/**
 * Generate SEO content for Service Hub (/locations/:city)
 */
function generateServiceHubContent(cityName, citySlug) {
  return `
    <h1>${cityName} Roofing Services | All Phase Construction USA</h1>

    <p>
      <strong>Dispatched from our Deerfield Beach Headquarters.</strong> We serve ${cityName} with comprehensive roofing solutions backed by dual licensing: Florida State Certified Roofing Contractor (CCC-1331464) and General Contractor (CGC-1526236).
    </p>

    <h2>Our ${cityName} Roofing Services</h2>

    <h3>Emergency Roof Repair</h3>
    <p>
      Storm damage? Leak in your ceiling? We provide 24/7 emergency roof repair services throughout ${cityName}. Our rapid-response team can be on-site quickly to assess damage, implement temporary repairs to prevent further water intrusion, and develop a comprehensive repair plan.
    </p>
    <p>
      <a href="/roof-repair/${citySlug}/">Learn more about emergency roof repair in ${cityName} →</a>
    </p>

    <h3>Professional Roof Inspection</h3>
    <p>
      Our comprehensive 21-point roof inspection service provides ${cityName} property owners with detailed documentation of their roof's condition. Whether you're buying a home, filing an insurance claim, or conducting routine maintenance, our certified inspectors deliver thorough assessments with photo documentation.
    </p>
    <p>
      <a href="/roof-inspection/${citySlug}/">Schedule a roof inspection in ${cityName} →</a>
    </p>

    <h3>Complete Roof Replacement</h3>
    <p>
      When repairs are no longer cost-effective, we provide complete roof replacement services in ${cityName}. We work with all major roofing materials including tile, metal, shingle, and flat roofing systems. Our dual licensing means we can handle both the roofing work and any structural modifications needed.
    </p>

    <h2>Why ${cityName} Property Owners Choose Us</h2>

    <h3>Dual-Licensed Contractor</h3>
    <p>
      Unlike roofing-only contractors, our dual licensing (CCC-1331464 roofing + CGC-1526236 general contracting) means we can address structural issues, handle complex repairs, and coordinate all trades if your roofing project requires additional work.
    </p>

    <h3>HVHZ Certified</h3>
    <p>
      ${cityName} falls within Florida's High Velocity Hurricane Zone, requiring specialized installation techniques and materials. Our HVHZ certification ensures your roof meets or exceeds the stringent building codes designed to protect South Florida properties from hurricane-force winds.
    </p>

    <h3>Local Expertise</h3>
    <p>
      Operating from our Deerfield Beach headquarters at 590 Goolsby Blvd, we understand the unique roofing challenges ${cityName} property owners face: salt air corrosion, intense UV exposure, heavy rainfall, and hurricane preparedness. Our solutions are tailored to South Florida's climate.
    </p>

    <h2>Get Started Today</h2>
    <p>
      Ready to schedule a free roof inspection or get an estimate for your ${cityName} roofing project? Call us at <a href="tel:+17542275605">(754) 227-5605</a> or visit our office at 590 Goolsby Blvd, Deerfield Beach, FL 33442.
    </p>`;
}

/**
 * Generate SEO content for Roof Repair page (/roof-repair/:city)
 */
function generateRoofRepairContent(cityName, citySlug) {
  return `
    <h1>Roof Repair in ${cityName}, FL | Emergency Service Available</h1>

    <p>
      <strong>24/7 Emergency Response from Our Deerfield Beach HQ.</strong> When you need fast, reliable roof repair in ${cityName}, All Phase Construction USA responds quickly. We're a dual-licensed contractor (CCC-1331464 & CGC-1526236) equipped to handle any roofing emergency.
    </p>

    <h2>Common ${cityName} Roof Repairs</h2>

    <h3>Storm Damage Repair</h3>
    <p>
      South Florida storms can cause significant roof damage: missing shingles, torn underlayment, punctured membranes, and water intrusion. Our emergency response team assesses storm damage in ${cityName} and implements immediate repairs to prevent further water damage to your property.
    </p>

    <h3>Leak Repair</h3>
    <p>
      A leaking roof requires immediate attention to prevent interior damage, mold growth, and structural deterioration. We use thermal imaging and moisture detection equipment to locate leak sources in ${cityName} properties, then implement permanent repairs using quality materials.
    </p>

    <h3>Flashing Repairs</h3>
    <p>
      Improperly installed or deteriorated flashing around chimneys, vents, skylights, and roof valleys is a common source of leaks. We specialize in flashing repairs and replacement, ensuring watertight seals at all roof penetrations and transitions.
    </p>

    <h2>Our ${cityName} Repair Process</h2>

    <h3>1. Rapid Assessment</h3>
    <p>
      We respond quickly to repair calls in ${cityName}. Our certified inspectors conduct a thorough assessment, documenting all damage with photos and providing you with a detailed repair estimate.
    </p>

    <h3>2. Emergency Tarping</h3>
    <p>
      If needed, we provide emergency tarping services to protect your ${cityName} property from further water damage while permanent repairs are scheduled. Our secure tarping methods withstand South Florida weather.
    </p>

    <h3>3. Permanent Repair</h3>
    <p>
      We use quality materials and proven techniques to execute permanent repairs. Our work comes with warranty coverage and meets all local building codes for ${cityName} roofing work.
    </p>

    <h2>Why Choose Us for ${cityName} Roof Repair?</h2>

    <h3>Dual-Licensed Contractor</h3>
    <p>
      Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contracting) means we can address structural issues discovered during roof repairs. If we find underlying problems, we have the credentials to fix them properly.
    </p>

    <h3>Insurance Claim Support</h3>
    <p>
      We work directly with insurance adjusters on ${cityName} roofing claims. We document damage thoroughly, provide detailed repair estimates, and can assist with the claim process to ensure you receive fair compensation.
    </p>

    <h2>Emergency Roof Repair in ${cityName}</h2>
    <p>
      Don't wait when you have a roofing emergency. Call <a href="tel:+17542275605">(754) 227-5605</a> now for immediate assistance. We provide 24/7 emergency roof repair services throughout ${cityName} and surrounding areas.
    </p>`;
}

/**
 * Generate SEO content for Roof Inspection page (/roof-inspection/:city)
 */
function generateRoofInspectionContent(cityName, citySlug) {
  return `
    <h1>${cityName} Roof Inspection | 21-Point Professional Assessment</h1>

    <p>
      <strong>Comprehensive Roof Inspections from Deerfield Beach HQ.</strong> Our certified inspectors provide detailed 21-point roof assessments for ${cityName} property owners. We're a dual-licensed contractor (CCC-1331464 & CGC-1526236) with expertise in all roofing systems.
    </p>

    <h2>Our 21-Point ${cityName} Roof Inspection</h2>

    <h3>Exterior Inspection</h3>
    <p>
      We thoroughly examine all visible roofing components from ground level and roof access (when safe). Our ${cityName} inspection includes roofing material condition, flashing at chimneys and vents, gutters and downspouts, roof deck condition, penetrations, and soffit and fascia condition.
    </p>

    <h3>Interior Inspection</h3>
    <p>
      From inside your ${cityName} property, we check for signs of water intrusion, ventilation issues, and structural concerns including attic ventilation and insulation, water stains on ceilings and walls, moisture and mold indicators, and roof deck condition from below.
    </p>

    <h3>Photo Documentation</h3>
    <p>
      Every ${cityName} inspection includes comprehensive photo documentation. You receive a detailed report with images showing all findings, making it easy to understand your roof's condition and share information with insurance adjusters or real estate agents.
    </p>

    <h2>Types of ${cityName} Roof Inspections</h2>

    <h3>Pre-Purchase Inspection</h3>
    <p>
      Buying a home in ${cityName}? Our pre-purchase roof inspection reveals the true condition of the roof, estimates remaining useful life, and identifies any needed repairs. This information helps you negotiate or budget for future roofing work.
    </p>

    <h3>Insurance Inspection</h3>
    <p>
      Many ${cityName} insurance companies require roof inspections for policy issuance or renewal. We provide detailed documentation that meets insurer requirements and helps you maintain affordable coverage.
    </p>

    <h3>Storm Damage Assessment</h3>
    <p>
      After severe weather, our inspectors assess storm damage to ${cityName} roofs. We document all damage thoroughly to support your insurance claim and provide repair estimates.
    </p>

    <h3>Routine Maintenance Inspection</h3>
    <p>
      Regular inspections catch small problems before they become expensive repairs. We recommend annual or bi-annual inspections for ${cityName} commercial properties and routine inspections for residential properties every 2-3 years.
    </p>

    <h2>Schedule Your ${cityName} Roof Inspection</h2>
    <p>
      Get peace of mind with a professional roof inspection. Call <a href="tel:+17542275605">(754) 227-5605</a> to schedule your ${cityName} roof inspection today. Most inspections can be scheduled within 48 hours.
    </p>`;
}

/**
 * Create hybrid prerendered HTML page
 */
function createHybridHTMLPage(title, description, canonical, seoContent, cityName, citySlug, pageType, cssPath, jsPath) {
  const structuredData = generateStructuredData(cityName, citySlug, pageType);

  return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonical}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">

    <!-- Structured Data -->
    <script type="application/ld+json">
    ${structuredData}
    </script>

    <!-- Preconnect to Supabase -->
    <link rel="preconnect" href="https://vcqzitallpqgkarklela.supabase.co" crossorigin>

    <!-- Critical CSS for immediate paint -->
    <style>
      :root {
        --header-height: 110px;
      }
      html {
        scroll-behavior: smooth;
        scroll-padding-top: calc(var(--header-height) + env(safe-area-inset-top, 0px) + 16px);
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        max-width: 100%;
        margin: 0;
        padding-top: calc(var(--header-height) + env(safe-area-inset-top, 0px));
      }
      #root {
        overflow-x: hidden;
        max-width: 100%;
      }

      /* SEO content visibility control */
      #seo-static {
        display: block;
      }

      /* Hide SEO content when React is ready */
      html.js-ready #seo-static {
        display: none;
      }
    </style>

    <!-- Load Vite-bundled CSS -->
    <link rel="stylesheet" href="${cssPath}">
</head>
<body>
    <!-- Static navigation for crawlers (hidden from view, visible in source) -->
    <nav style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
      <a href="/">Home</a>
      <a href="/about-us">About</a>
      <a href="/contact">Contact</a>
      <a href="/roof-inspection">Roof Inspection</a>
      <a href="/roof-repair">Roof Repair</a>
      <a href="/blog">Blog</a>
      <a href="/locations/service-areas/">Service Areas</a>
    </nav>

    <!-- SEO Content for Crawlers (visible until React loads) -->
    <div id="seo-static" class="max-w-4xl mx-auto px-4 py-16 prose prose-invert">
      ${seoContent}

      <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;">
        <h3>Contact All Phase Construction USA</h3>
        <p><strong>Phone:</strong> <a href="tel:+17542275605">(754) 227-5605</a></p>
        <p><strong>Email:</strong> <a href="mailto:leads@allphaseusa.com">leads@allphaseusa.com</a></p>
        <p><strong>Address:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
        <p><strong>Licenses:</strong> CCC-1331464 (Roofing) • CGC-1526236 (General Contractor)</p>
        <p><strong>Hours:</strong> 24/7 Emergency Service Available</p>
      </div>
    </div>

    <!-- React Mount Point -->
    <div id="root"></div>

    <!-- Load React App -->
    <script type="module" src="${jsPath}"></script>
</body>
</html>`;
}

/**
 * Generate all hybrid city pages
 */
function generateHybridCityPages() {
  console.log('\nðï¸  Generating Hybrid Prerendered City Pages...\n');

  // Get bundled assets
  const assets = getBundledAssets();
  console.log(`✅ Found bundled CSS: ${assets.css}`);
  console.log(`✅ Found bundled JS:  ${assets.js}\n`);

  let totalPages = 0;

  cities.forEach(({ slug, city }) => {
    const cityName = city;
    const citySlug = slug;

    // Skip county-level entries
    if (citySlug.includes('county')) return;

    // 1. Service Hub - /locations/:city/
    const hubPath = `/locations/${citySlug}`;
    const hubMetadata = getSEOMetadata(hubPath, cityName);
    const hubContent = generateServiceHubContent(cityName, citySlug);
    const hubHTML = createHybridHTMLPage(
      hubMetadata.title,
      hubMetadata.description,
      hubMetadata.canonical,
      hubContent,
      cityName,
      citySlug,
      'locations',
      assets.css,
      assets.js
    );

    const hubDir = path.join(distDir, 'locations', citySlug);
    fs.mkdirSync(hubDir, { recursive: true });
    fs.writeFileSync(path.join(hubDir, 'index.html'), hubHTML);
    console.log(`✅ Generated: dist/locations/${citySlug}/index.html`);
    totalPages++;

    // 2. Roof Repair - /roof-repair/:city/
    const repairPath = `/roof-repair/${citySlug}`;
    const repairMetadata = getSEOMetadata(repairPath, cityName);
    const repairContent = generateRoofRepairContent(cityName, citySlug);
    const repairHTML = createHybridHTMLPage(
      repairMetadata.title,
      repairMetadata.description,
      repairMetadata.canonical,
      repairContent,
      cityName,
      citySlug,
      'roof-repair',
      assets.css,
      assets.js
    );

    const repairDir = path.join(distDir, 'roof-repair', citySlug);
    fs.mkdirSync(repairDir, { recursive: true });
    fs.writeFileSync(path.join(repairDir, 'index.html'), repairHTML);
    console.log(`✅ Generated: dist/roof-repair/${citySlug}/index.html`);
    totalPages++;

    // 3. Roof Inspection - /roof-inspection/:city/
    const inspectionPath = `/roof-inspection/${citySlug}`;
    const inspectionMetadata = getSEOMetadata(inspectionPath, cityName);
    const inspectionContent = generateRoofInspectionContent(cityName, citySlug);
    const inspectionHTML = createHybridHTMLPage(
      inspectionMetadata.title,
      inspectionMetadata.description,
      inspectionMetadata.canonical,
      inspectionContent,
      cityName,
      citySlug,
      'roof-inspection',
      assets.css,
      assets.js
    );

    const inspectionDir = path.join(distDir, 'roof-inspection', citySlug);
    fs.mkdirSync(inspectionDir, { recursive: true });
    fs.writeFileSync(path.join(inspectionDir, 'index.html'), inspectionHTML);
    console.log(`✅ Generated: dist/roof-inspection/${citySlug}/index.html`);
    totalPages++;
  });

  console.log(`\n✅ Hybrid City Pages Complete! Generated ${totalPages} prerendered pages.\n`);
  console.log(`ð Breakdown:`);
  console.log(`   - City Service Hubs: ${totalPages / 3} pages`);
  console.log(`   - City Roof Repairs: ${totalPages / 3} pages`);
  console.log(`   - City Roof Inspections: ${totalPages / 3} pages`);
  console.log(`\n💡 How it works:`);
  console.log(`   ✅ Crawlers see HTML content in #seo-static`);
  console.log(`   ✅ Users see full React app once JS loads`);
  console.log(`   ✅ React mounts normally with full header/footer/nav`);
  console.log(`   ✅ No "business card" look — full branded experience\n`);
}

// Run the generator
generateHybridCityPages();
