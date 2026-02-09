/**
 * Generate Pure Static HTML Pages for City Routes
 *
 * This script generates complete, standalone HTML pages for all city routes:
 * - /locations/:city/
 * - /roof-repair/:city/
 * - /roof-inspection/:city/
 *
 * Each page includes:
 * - Full header with navigation
 * - Complete page content (500-700 words)
 * - Full footer with links
 * - License numbers (CCC-1331464, CGC-1526236)
 * - Proper SEO metadata
 * - Structured data (LocalBusiness schema)
 * - Compiled CSS from Vite build
 * - NO React dependency
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

// Read seoTitles for metadata
const seoTitlesPath = path.resolve(__dirname, './seo-titles.json');
const seoTitlesConfig = JSON.parse(fs.readFileSync(seoTitlesPath, 'utf-8'));

/**
 * Extract bundled CSS filename from dist/index.html
 */
function getBundledCSSPath() {
  const mainIndexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(mainIndexPath)) {
    console.error('❌ dist/index.html not found. Run Vite build first.');
    process.exit(1);
  }

  const content = fs.readFileSync(mainIndexPath, 'utf-8');
  const cssMatch = content.match(/href="(\/assets\/index-[^"]+\.css)"/);

  if (!cssMatch) {
    console.error('❌ Could not find bundled CSS in dist/index.html');
    process.exit(1);
  }

  return cssMatch[1];
}

/**
 * Create static HTML header
 */
function createStaticHeader() {
  return `<header class="fixed top-0 left-0 right-0 z-50 bg-black shadow-xl">
    <div class="bg-zinc-900 border-b border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-2 text-xs">
          <div class="flex items-center gap-4 md:gap-6">
            <span class="text-gray-300 font-medium">OPEN 24/7 / 365 DAYS</span>
            <span class="hidden md:inline text-gray-400">
              Dual Licensed Certified Roofing Contractor — CGC-1526236 | CCC-1331464
            </span>
            <span class="hidden sm:inline md:hidden text-gray-400">
              Dual Licensed Contractor
            </span>
          </div>
          <div class="flex items-center gap-3 md:gap-4">
            <a href="https://g.co/kgs/NsFRCBx" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-1 text-white hover:text-red-400 transition-colors font-medium text-xs">
              <span class="hidden sm:inline">4.8 <span class="text-yellow-400">★</span> Google Reviews</span>
              <span class="sm:hidden">4.8<span class="text-yellow-400">★</span> Reviews</span>
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
               target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-1 text-white hover:text-red-400 transition-colors font-medium text-xs">
              <span class="hidden sm:inline">Get Directions</span>
            </a>
            <div class="flex items-center gap-2">
              <span class="text-white font-medium">Call Now:</span>
              <a href="tel:+17542275605" class="text-white hover:text-red-400 transition-colors font-bold text-sm">
                (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center">
          <a href="/" class="flex flex-col">
            <span class="text-white font-bold text-xl sm:text-2xl leading-tight">
              All Phase Construction USA
            </span>
            <span class="text-red-600 font-semibold text-xs sm:text-sm">
              Dual Licensed Roofing Contractor
            </span>
          </a>
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <a href="/" class="text-white hover:text-red-600 transition-colors font-medium text-base">Home</a>
          <a href="/residential-roofing" class="text-white hover:text-red-600 transition-colors font-medium text-base">Residential</a>
          <a href="/commercial-roofing" class="text-white hover:text-red-600 transition-colors font-medium text-base">Commercial</a>
          <a href="/roof-inspection" class="text-white hover:text-red-600 transition-colors font-medium text-base">Inspection</a>
          <a href="/roof-repair" class="text-white hover:text-red-600 transition-colors font-medium text-base">Repair</a>
          <a href="/locations/service-areas/" class="text-white hover:text-red-600 transition-colors font-medium text-base">Service Areas</a>
          <a href="/contact" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
            Get Free Estimate
          </a>
        </nav>
      </div>
    </div>
  </header>`;
}

/**
 * Create static HTML footer
 */
function createStaticFooter() {
  return `<footer class="bg-black border-t border-red-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <div>
          <div class="text-white font-bold text-xl mb-4">All Phase Construction USA</div>
          <p class="text-gray-400 text-sm mb-2">
            Dual-Licensed Roofing Contractor (CCC) with General Contractor (CGC) Certification
          </p>
          <p class="text-gray-400 text-sm mb-4 font-semibold">
            CCC-1331464 • CGC-1526236
          </p>
          <div class="space-y-2 text-gray-400 text-sm mb-6">
            <p>590 Goolsby Blvd</p>
            <p>Deerfield Beach, FL 33442</p>
            <p>
              <a href="tel:+17542275605" class="hover:text-red-600 transition-colors">
                (754) 227-5605
              </a>
            </p>
            <p>
              <a href="mailto:leads@allphaseusa.com" class="hover:text-red-600 transition-colors">
                leads@allphaseusa.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/residential-roofing" class="hover:text-red-600 transition-colors">Residential Roofing</a></li>
            <li><a href="/commercial-roofing" class="hover:text-red-600 transition-colors">Commercial Roofing</a></li>
            <li><a href="/tile-roofing" class="hover:text-red-600 transition-colors">Tile Roofing</a></li>
            <li><a href="/metal-roofing" class="hover:text-red-600 transition-colors">Metal Roofing</a></li>
            <li><a href="/shingle-roofing" class="hover:text-red-600 transition-colors">Shingle Roofing</a></li>
            <li><a href="/flat-roofing" class="hover:text-red-600 transition-colors">Flat Roofing</a></li>
            <li><a href="/roof-inspection" class="hover:text-red-600 transition-colors">Roof Inspection</a></li>
            <li><a href="/roof-repair" class="hover:text-red-600 transition-colors">Roof Repair</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/" class="hover:text-red-600 transition-colors">Home</a></li>
            <li><a href="/about" class="hover:text-red-600 transition-colors">About Us</a></li>
            <li><a href="/projects" class="hover:text-red-600 transition-colors">Our Work</a></li>
            <li><a href="/blog" class="hover:text-red-600 transition-colors">Blog</a></li>
            <li><a href="/contact" class="hover:text-red-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Service Areas</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/locations/deerfield-beach/" class="hover:text-red-600 transition-colors">Deerfield Beach</a></li>
            <li><a href="/locations/boca-raton/" class="hover:text-red-600 transition-colors">Boca Raton</a></li>
            <li><a href="/locations/pompano-beach/" class="hover:text-red-600 transition-colors">Pompano Beach</a></li>
            <li><a href="/locations/fort-lauderdale/" class="hover:text-red-600 transition-colors">Fort Lauderdale</a></li>
            <li><a href="/locations/coral-springs/" class="hover:text-red-600 transition-colors">Coral Springs</a></li>
            <li><a href="/locations/service-areas/" class="hover:text-red-600 transition-colors">View All Areas</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Resources</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/roof-cost-calculator" class="hover:text-red-600 transition-colors">Cost Calculator</a></li>
            <li><a href="/pricing-guide" class="hover:text-red-600 transition-colors">Pricing Guide</a></li>
            <li><a href="/easy-payments" class="hover:text-red-600 transition-colors">Financing Options</a></li>
            <li><a href="/privacy" class="hover:text-red-600 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="hover:text-red-600 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; ${new Date().getFullYear()} All Phase Construction USA. All rights reserved.</p>
        <p class="mt-2">Licensed & Insured • CCC-1331464 • CGC-1526236 • HVHZ Certified</p>
      </div>
    </div>
  </footer>`;
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

  return {
    title: 'All Phase Construction USA | Dual-Licensed Roofing Specialist',
    description: 'Licensed roofing company in Broward & Palm Beach County.',
    canonical: `https://allphaseconstructionfl.com${normalizedPath}/`
  };
}

/**
 * Generate content for Service Hub (/locations/:city)
 */
function generateServiceHubContent(cityName, citySlug) {
  return `
    <div class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <article class="prose prose-lg prose-invert max-w-none">
        <h1 class="text-4xl font-bold text-white mb-6">${cityName} Roofing Services | All Phase Construction USA</h1>

        <p class="text-xl text-gray-300 mb-8">
          <strong>Dispatched from our Deerfield Beach Headquarters.</strong> We serve ${cityName} with comprehensive roofing solutions backed by dual licensing: Florida State Certified Roofing Contractor (CCC-1331464) and General Contractor (CGC-1526236).
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Our ${cityName} Roofing Services</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Emergency Roof Repair</h3>
        <p class="text-gray-300 mb-4">
          Storm damage? Leak in your ceiling? We provide 24/7 emergency roof repair services throughout ${cityName}. Our rapid-response team can be on-site quickly to assess damage, implement temporary repairs to prevent further water intrusion, and develop a comprehensive repair plan.
        </p>
        <p class="text-gray-300 mb-4">
          <a href="/roof-repair/${citySlug}/" class="text-red-400 hover:text-red-300 underline">Learn more about emergency roof repair in ${cityName} →</a>
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Professional Roof Inspection</h3>
        <p class="text-gray-300 mb-4">
          Our comprehensive 21-point roof inspection service provides ${cityName} property owners with detailed documentation of their roof's condition. Whether you're buying a home, filing an insurance claim, or conducting routine maintenance, our certified inspectors deliver thorough assessments with photo documentation.
        </p>
        <p class="text-gray-300 mb-4">
          <a href="/roof-inspection/${citySlug}/" class="text-red-400 hover:text-red-300 underline">Schedule a roof inspection in ${cityName} →</a>
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Complete Roof Replacement</h3>
        <p class="text-gray-300 mb-4">
          When repairs are no longer cost-effective, we provide complete roof replacement services in ${cityName}. We work with all major roofing materials including tile, metal, shingle, and flat roofing systems. Our dual licensing means we can handle both the roofing work and any structural modifications needed.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Why ${cityName} Property Owners Choose Us</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Dual-Licensed Contractor</h3>
        <p class="text-gray-300 mb-4">
          Unlike roofing-only contractors, our dual licensing (CCC-1331464 roofing + CGC-1526236 general contracting) means we can address structural issues, handle complex repairs, and coordinate all trades if your roofing project requires additional work.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">HVHZ Certified</h3>
        <p class="text-gray-300 mb-4">
          ${cityName} falls within Florida's High Velocity Hurricane Zone, requiring specialized installation techniques and materials. Our HVHZ certification ensures your roof meets or exceeds the stringent building codes designed to protect South Florida properties from hurricane-force winds.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Local Expertise</h3>
        <p class="text-gray-300 mb-4">
          Operating from our Deerfield Beach headquarters at 590 Goolsby Blvd, we understand the unique roofing challenges ${cityName} property owners face: salt air corrosion, intense UV exposure, heavy rainfall, and hurricane preparedness. Our solutions are tailored to South Florida's climate.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Service Areas Near ${cityName}</h2>
        <p class="text-gray-300 mb-4">
          In addition to ${cityName}, we serve the entire Broward and Palm Beach County region including:
        </p>
        <ul class="text-gray-300 space-y-2 mb-4">
          <li><a href="/locations/boca-raton/" class="text-red-400 hover:text-red-300 underline">Boca Raton</a></li>
          <li><a href="/locations/pompano-beach/" class="text-red-400 hover:text-red-300 underline">Pompano Beach</a></li>
          <li><a href="/locations/coral-springs/" class="text-red-400 hover:text-red-300 underline">Coral Springs</a></li>
          <li><a href="/locations/fort-lauderdale/" class="text-red-400 hover:text-red-300 underline">Fort Lauderdale</a></li>
          <li><a href="/locations/delray-beach/" class="text-red-400 hover:text-red-300 underline">Delray Beach</a></li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Get Started Today</h2>
        <p class="text-gray-300 mb-4">
          Ready to schedule a free roof inspection or get an estimate for your ${cityName} roofing project? Call us at <a href="tel:+17542275605" class="text-red-400 hover:text-red-300 font-semibold">(754) 227-5605</a> or visit our office at 590 Goolsby Blvd, Deerfield Beach, FL 33442.
        </p>

        <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-8">
          <h3 class="text-2xl font-semibold text-white mb-4">Contact All Phase Construction USA</h3>
          <div class="space-y-3 text-gray-300">
            <p><strong class="text-white">Phone:</strong> <a href="tel:+17542275605" class="text-red-400 hover:text-red-300">(754) 227-5605</a></p>
            <p><strong class="text-white">Email:</strong> <a href="mailto:leads@allphaseusa.com" class="text-red-400 hover:text-red-300">leads@allphaseusa.com</a></p>
            <p><strong class="text-white">Address:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
            <p><strong class="text-white">Licenses:</strong> CCC-1331464 (Roofing) • CGC-1526236 (General Contractor)</p>
            <p><strong class="text-white">Hours:</strong> 24/7 Emergency Service Available</p>
          </div>
        </div>
      </article>
    </div>`;
}

/**
 * Generate content for Roof Repair page (/roof-repair/:city)
 */
function generateRoofRepairContent(cityName, citySlug) {
  return `
    <div class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <article class="prose prose-lg prose-invert max-w-none">
        <h1 class="text-4xl font-bold text-white mb-6">Roof Repair in ${cityName}, FL | Emergency Service Available</h1>

        <p class="text-xl text-gray-300 mb-8">
          <strong>24/7 Emergency Response from Our Deerfield Beach HQ.</strong> When you need fast, reliable roof repair in ${cityName}, All Phase Construction USA responds quickly. We're a dual-licensed contractor (CCC-1331464 & CGC-1526236) equipped to handle any roofing emergency.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Common ${cityName} Roof Repairs</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Storm Damage Repair</h3>
        <p class="text-gray-300 mb-4">
          South Florida storms can cause significant roof damage: missing shingles, torn underlayment, punctured membranes, and water intrusion. Our emergency response team assesses storm damage in ${cityName} and implements immediate repairs to prevent further water damage to your property.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Leak Repair</h3>
        <p class="text-gray-300 mb-4">
          A leaking roof requires immediate attention to prevent interior damage, mold growth, and structural deterioration. We use thermal imaging and moisture detection equipment to locate leak sources in ${cityName} properties, then implement permanent repairs using quality materials.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Flashing Repairs</h3>
        <p class="text-gray-300 mb-4">
          Improperly installed or deteriorated flashing around chimneys, vents, skylights, and roof valleys is a common source of leaks. We specialize in flashing repairs and replacement, ensuring watertight seals at all roof penetrations and transitions.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Our ${cityName} Repair Process</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">1. Rapid Assessment</h3>
        <p class="text-gray-300 mb-4">
          We respond quickly to repair calls in ${cityName}. Our certified inspectors conduct a thorough assessment, documenting all damage with photos and providing you with a detailed repair estimate.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">2. Emergency Tarping</h3>
        <p class="text-gray-300 mb-4">
          If needed, we provide emergency tarping services to protect your ${cityName} property from further water damage while permanent repairs are scheduled. Our secure tarping methods withstand South Florida weather.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">3. Permanent Repair</h3>
        <p class="text-gray-300 mb-4">
          We use quality materials and proven techniques to execute permanent repairs. Our work comes with warranty coverage and meets all local building codes for ${cityName} roofing work.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Why Choose Us for ${cityName} Roof Repair?</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Dual-Licensed Contractor</h3>
        <p class="text-gray-300 mb-4">
          Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contracting) means we can address structural issues discovered during roof repairs. If we find underlying problems, we have the credentials to fix them properly.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Insurance Claim Support</h3>
        <p class="text-gray-300 mb-4">
          We work directly with insurance adjusters on ${cityName} roofing claims. We document damage thoroughly, provide detailed repair estimates, and can assist with the claim process to ensure you receive fair compensation.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Quality Workmanship</h3>
        <p class="text-gray-300 mb-4">
          Every repair we perform in ${cityName} is executed to the same high standards as our new roof installations. We don't cut corners on materials or installation techniques. Your repair comes with warranty coverage for peace of mind.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Related Services in ${cityName}</h2>
        <ul class="text-gray-300 space-y-2 mb-4">
          <li><a href="/locations/${citySlug}/" class="text-red-400 hover:text-red-300 underline">Complete ${cityName} roofing services</a></li>
          <li><a href="/roof-inspection/${citySlug}/" class="text-red-400 hover:text-red-300 underline">${cityName} roof inspections</a></li>
          <li><a href="/residential-roofing" class="text-red-400 hover:text-red-300 underline">Residential roofing</a></li>
          <li><a href="/commercial-roofing" class="text-red-400 hover:text-red-300 underline">Commercial roofing</a></li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Emergency Roof Repair in ${cityName}</h2>
        <p class="text-gray-300 mb-4">
          Don't wait when you have a roofing emergency. Call <a href="tel:+17542275605" class="text-red-400 hover:text-red-300 font-semibold">(754) 227-5605</a> now for immediate assistance. We provide 24/7 emergency roof repair services throughout ${cityName} and surrounding areas.
        </p>

        <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-8">
          <h3 class="text-2xl font-semibold text-white mb-4">Get Emergency Roof Repair Now</h3>
          <div class="space-y-3 text-gray-300">
            <p><strong class="text-white">24/7 Emergency Line:</strong> <a href="tel:+17542275605" class="text-red-400 hover:text-red-300 text-xl font-bold">(754) 227-5605</a></p>
            <p><strong class="text-white">Email:</strong> <a href="mailto:leads@allphaseusa.com" class="text-red-400 hover:text-red-300">leads@allphaseusa.com</a></p>
            <p><strong class="text-white">Office:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
            <p><strong class="text-white">Licenses:</strong> CCC-1331464 (Roofing) • CGC-1526236 (General Contractor)</p>
            <p class="text-sm">Serving ${cityName} with rapid-response emergency roof repair services</p>
          </div>
        </div>
      </article>
    </div>`;
}

/**
 * Generate content for Roof Inspection page (/roof-inspection/:city)
 */
function generateRoofInspectionContent(cityName, citySlug) {
  return `
    <div class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <article class="prose prose-lg prose-invert max-w-none">
        <h1 class="text-4xl font-bold text-white mb-6">${cityName} Roof Inspection | 21-Point Professional Assessment</h1>

        <p class="text-xl text-gray-300 mb-8">
          <strong>Comprehensive Roof Inspections from Deerfield Beach HQ.</strong> Our certified inspectors provide detailed 21-point roof assessments for ${cityName} property owners. We're a dual-licensed contractor (CCC-1331464 & CGC-1526236) with expertise in all roofing systems.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Our 21-Point ${cityName} Roof Inspection</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Exterior Inspection</h3>
        <p class="text-gray-300 mb-4">
          We thoroughly examine all visible roofing components from ground level and roof access (when safe). Our ${cityName} inspection includes:
        </p>
        <ul class="text-gray-300 space-y-2 mb-4">
          <li>Roofing material condition (shingles, tiles, metal, membrane)</li>
          <li>Flashing at chimneys, vents, skylights, and valleys</li>
          <li>Gutters and downspouts</li>
          <li>Roof deck condition and any visible sagging</li>
          <li>Penetrations and roof-mounted equipment</li>
          <li>Soffit, fascia, and trim condition</li>
        </ul>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Interior Inspection</h3>
        <p class="text-gray-300 mb-4">
          From inside your ${cityName} property, we check for signs of water intrusion, ventilation issues, and structural concerns:
        </p>
        <ul class="text-gray-300 space-y-2 mb-4">
          <li>Attic ventilation and insulation</li>
          <li>Water stains on ceilings and walls</li>
          <li>Attic moisture and mold indicators</li>
          <li>Roof deck condition from below</li>
          <li>Proper ventilation system function</li>
        </ul>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Photo Documentation</h3>
        <p class="text-gray-300 mb-4">
          Every ${cityName} inspection includes comprehensive photo documentation. You receive a detailed report with images showing all findings, making it easy to understand your roof's condition and share information with insurance adjusters or real estate agents.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Types of ${cityName} Roof Inspections</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Pre-Purchase Inspection</h3>
        <p class="text-gray-300 mb-4">
          Buying a home in ${cityName}? Our pre-purchase roof inspection reveals the true condition of the roof, estimates remaining useful life, and identifies any needed repairs. This information helps you negotiate or budget for future roofing work.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Insurance Inspection</h3>
        <p class="text-gray-300 mb-4">
          Many ${cityName} insurance companies require roof inspections for policy issuance or renewal. We provide detailed documentation that meets insurer requirements and helps you maintain affordable coverage.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Storm Damage Assessment</h3>
        <p class="text-gray-300 mb-4">
          After severe weather, our inspectors assess storm damage to ${cityName} roofs. We document all damage thoroughly to support your insurance claim and provide repair estimates.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Routine Maintenance Inspection</h3>
        <p class="text-gray-300 mb-4">
          Regular inspections catch small problems before they become expensive repairs. We recommend annual or bi-annual inspections for ${cityName} commercial properties and routine inspections for residential properties every 2-3 years.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Why Choose Our ${cityName} Inspection Service?</h2>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Certified Inspectors</h3>
        <p class="text-gray-300 mb-4">
          Our inspectors are licensed roofing professionals with extensive experience in South Florida roofing systems. We understand the specific challenges ${cityName} properties face: HVHZ requirements, salt air corrosion, UV damage, and hurricane preparedness.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Thermal Imaging Available</h3>
        <p class="text-gray-300 mb-4">
          For flat or low-slope roofs in ${cityName}, we offer thermal imaging inspection to detect trapped moisture in the roofing system. This advanced technology identifies problems invisible to the naked eye.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-6 mb-3">Detailed Reports</h3>
        <p class="text-gray-300 mb-4">
          You receive a comprehensive written report with photos, findings, recommendations, and cost estimates for any needed repairs. Our reports are accepted by insurance companies, real estate agents, and lenders throughout ${cityName}.
        </p>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Related Services in ${cityName}</h2>
        <ul class="text-gray-300 space-y-2 mb-4">
          <li><a href="/locations/${citySlug}/" class="text-red-400 hover:text-red-300 underline">Complete ${cityName} roofing services</a></li>
          <li><a href="/roof-repair/${citySlug}/" class="text-red-400 hover:text-red-300 underline">${cityName} emergency roof repair</a></li>
          <li><a href="/residential-roofing" class="text-red-400 hover:text-red-300 underline">Residential roofing</a></li>
          <li><a href="/commercial-roofing" class="text-red-400 hover:text-red-300 underline">Commercial roofing</a></li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-8 mb-4">Schedule Your ${cityName} Roof Inspection</h2>
        <p class="text-gray-300 mb-4">
          Get peace of mind with a professional roof inspection. Call <a href="tel:+17542275605" class="text-red-400 hover:text-red-300 font-semibold">(754) 227-5605</a> to schedule your ${cityName} roof inspection today. Most inspections can be scheduled within 48 hours.
        </p>

        <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-8">
          <h3 class="text-2xl font-semibold text-white mb-4">Schedule Your Roof Inspection</h3>
          <div class="space-y-3 text-gray-300">
            <p><strong class="text-white">Phone:</strong> <a href="tel:+17542275605" class="text-red-400 hover:text-red-300 text-xl font-bold">(754) 227-5605</a></p>
            <p><strong class="text-white">Email:</strong> <a href="mailto:leads@allphaseusa.com" class="text-red-400 hover:text-red-300">leads@allphaseusa.com</a></p>
            <p><strong class="text-white">Office:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
            <p><strong class="text-white">Licenses:</strong> CCC-1331464 (Roofing) • CGC-1526236 (General Contractor)</p>
            <p class="text-sm">Comprehensive 21-point roof inspections for ${cityName} properties</p>
          </div>
        </div>
      </article>
    </div>`;
}

/**
 * Create complete static HTML page
 */
function createStaticHTMLPage(title, description, canonical, content, cityName, citySlug, pageType, cssPath) {
  const structuredData = generateStructuredData(cityName, citySlug, pageType);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">
    <link rel="stylesheet" href="${cssPath}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

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
</head>
<body class="bg-zinc-950 text-white">
    ${createStaticHeader()}
    <main>
        ${content}
    </main>
    ${createStaticFooter()}
</body>
</html>`;
}

/**
 * Generate all static city pages
 */
function generateStaticCityPages() {
  console.log('\n🏗️  Generating Pure Static HTML City Pages (SSG)...\n');

  // Get bundled CSS path
  const cssPath = getBundledCSSPath();
  console.log(`✅ Found bundled CSS: ${cssPath}\n`);

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
    const hubHTML = createStaticHTMLPage(
      hubMetadata.title,
      hubMetadata.description,
      hubMetadata.canonical,
      hubContent,
      cityName,
      citySlug,
      'locations',
      cssPath
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
    const repairHTML = createStaticHTMLPage(
      repairMetadata.title,
      repairMetadata.description,
      repairMetadata.canonical,
      repairContent,
      cityName,
      citySlug,
      'roof-repair',
      cssPath
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
    const inspectionHTML = createStaticHTMLPage(
      inspectionMetadata.title,
      inspectionMetadata.description,
      inspectionMetadata.canonical,
      inspectionContent,
      cityName,
      citySlug,
      'roof-inspection',
      cssPath
    );

    const inspectionDir = path.join(distDir, 'roof-inspection', citySlug);
    fs.mkdirSync(inspectionDir, { recursive: true });
    fs.writeFileSync(path.join(inspectionDir, 'index.html'), inspectionHTML);
    console.log(`✅ Generated: dist/roof-inspection/${citySlug}/index.html`);
    totalPages++;
  });

  console.log(`\n✅ Static City Pages Complete! Generated ${totalPages} pure HTML pages.\n`);
  console.log(`📊 Breakdown:`);
  console.log(`   - City Service Hubs: ${totalPages / 3} pages`);
  console.log(`   - City Roof Repairs: ${totalPages / 3} pages`);
  console.log(`   - City Roof Inspections: ${totalPages / 3} pages`);
  console.log(`\n💡 These pages load instantly with NO React dependency!`);
  console.log(`   ✅ Full header, content, and footer in static HTML`);
  console.log(`   ✅ Compiled CSS from Vite build`);
  console.log(`   ✅ Perfect for SEO (crawlable immediately)`);
  console.log(`   ✅ Fast user experience (no hydration needed)\n`);
}

// Run the generator
generateStaticCityPages();
