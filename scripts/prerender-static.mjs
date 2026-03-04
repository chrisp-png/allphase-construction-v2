import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'dist'); // Changed from 'public' - prerender to dist for Netlify deployment
const distDir = path.resolve(projectRoot, 'dist');

console.log('🔍 DEBUG: Directory paths:');
console.log('  projectRoot:', projectRoot);
console.log('  publicDir:', publicDir);
console.log('  distDir:', distDir);
console.log('  distDir exists?', fs.existsSync(distDir));

// Load cities data (for roof-repair and roof-inspection pages only)
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

// Load SEO titles configuration (for non-location pages only)
const seoTitlesPath = path.join(__dirname, 'seo-titles.json');
const seoTitlesConfig = JSON.parse(fs.readFileSync(seoTitlesPath, 'utf-8'));

// Load location data (SINGLE SOURCE OF TRUTH for /locations/:slug pages)
const locationsDataPath = path.join(projectRoot, 'src', 'data', 'locations.ts');
const locationsRaw = fs.readFileSync(locationsDataPath, 'utf-8');
// Parse locations array from TypeScript file
const locationsMatch = locationsRaw.match(/export const locations: Location\[\] = \[([\s\S]*?)\];/);
if (!locationsMatch) {
  throw new Error('Could not parse locations from src/data/locations.ts');
}
const locationsArrayText = '[' + locationsMatch[1] + ']';
// Convert TypeScript object notation to JSON-compatible format
const locationsJson = locationsArrayText
  .replace(/\/\/[^\n]*/g, '') // Remove single-line comments
  .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
  .replace(/(\w+):/g, '"$1":') // Quote keys
  .replace(/'/g, '"') // Convert single quotes to double quotes
  .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
const LOCATIONS = JSON.parse(locationsJson);

/**
 * Broward County cities (HVHZ-compliant)
 */
const BROWARD_CITIES = [
  'fort-lauderdale', 'deerfield-beach', 'coral-springs', 'pompano-beach',
  'hollywood', 'coconut-creek', 'wilton-manors', 'davie', 'lauderhill',
  'margate', 'plantation', 'dania-beach', 'cooper-city', 'hallandale-beach',
  'lauderdale-by-the-sea', 'lighthouse-point', 'miramar', 'north-lauderdale',
  'oakland-park', 'pembroke-pines', 'sunrise', 'tamarac', 'weston',
  'parkland'
];

/**
 * Build SEO metadata for a location (matches src/lib/locationSeo.ts logic)
 */
function buildLocationSeo(location) {
  const { slug, city, state } = location;

  // Determine compliance language based on county
  const isBrowardCounty = BROWARD_CITIES.includes(slug);
  const complianceLanguage = isBrowardCounty ? 'HVHZ-compliant' : 'Palm Beach County wind-compliant';

  // Generate defaults from templates
  const defaultTitle = `${city} Roofing Contractor | All Phase Construction USA`;
  const defaultDescription = `All Phase Construction USA is a licensed roofing contractor serving ${city}, ${state}. We provide ${complianceLanguage} metal, tile, and shingle roofing installation, replacement, and repair.`;
  const defaultCanonical = `https://allphaseconstructionfl.com/locations/${slug}`;
  const defaultRobots = 'index, follow';

  // Apply overrides or use defaults
  const title = location.titleOverride || defaultTitle;
  const description = location.descriptionOverride || defaultDescription;
  const canonical = location.canonicalOverride || defaultCanonical;
  const robots = location.robotsOverride || defaultRobots;

  // Open Graph defaults to same as standard meta unless overridden
  const ogTitle = location.ogTitleOverride || title;
  const ogDescription = location.ogDescriptionOverride || description;
  const ogUrl = canonical;

  return {
    title,
    description,
    canonical,
    robots,
    ogTitle,
    ogDescription,
    ogUrl
  };
}

/**
 * Company Authority Footer - 250+ words of E-E-A-T reinforcement
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
    From our Deerfield Beach headquarters at 590 Goolsby Blvd, we serve over 50 cities throughout Broward County and Palm Beach County including <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton</a>, <a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale</a>, <a href="/locations/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs</a>, <a href="/locations/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach</a>, <a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach</a>, and surrounding communities.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Licensed & Insured:</strong> CCC-1331464 (State Certified Roofing Contractor) | CGC-1526236 (Certified General Contractor)<br>
    <strong>Contact:</strong> (754) 227-5605 | 590 Goolsby Blvd, Deerfield Beach, FL 33442
  </p>
</section>
`.trim();
}

/**
 * SPECIAL: Deerfield Beach HQ Authority Page - 800+ words
 * This is the Google Business Profile landing page - must be comprehensive
 */
function generateDeerfieldBeachHQContent() {
  return `
<section id="seo-static-content">
  <h1>Deerfield Beach Roofing Contractor | All Phase Construction USA Headquarters</h1>

  <p><strong>All Phase Construction USA</strong> is a dual-licensed roofing contractor headquartered in Deerfield Beach, Florida. Operating from 590 Goolsby Blvd, Deerfield Beach, FL 33442, we serve residential and commercial properties throughout Broward County and Palm Beach County with comprehensive roofing services backed by both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses.</p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Need Immediate Roofing Help in Deerfield Beach?</h3>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">
      📞 <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/deerfield-beach" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast Deerfield Beach Repair Service</a> – Active leaks, storm damage, emergency tarping available 24/7
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔍 <strong>Free Professional Roof Inspections:</strong> <a href="/roof-inspection/deerfield-beach" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point Deerfield Beach Roof Inspection</a> – Comprehensive assessment with photo documentation
    </p>
  </div>

  <h2>Your Deerfield Beach Headquarters for Expert Roofing</h2>
  <p>All Phase Construction USA has established its primary operations at 590 Goolsby Blvd in Deerfield Beach, strategically positioned to serve all of South Florida. As a locally-owned and operated roofing company, we understand the unique challenges Deerfield Beach properties face including salt air corrosion, hurricane exposure, and intense UV degradation. Our Deerfield Beach headquarters enables same-day inspection availability, rapid emergency response, and consistent oversight of every project throughout Broward and Palm Beach Counties.</p>

  <h2>Why Deerfield Beach Property Owners Choose All Phase Construction USA</h2>
  <p>What sets us apart from standard roofing contractors operating in Deerfield Beach:</p>

  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Dual-Licensed Roofing Authority:</strong> We hold both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses. This dual-licensing provides structural engineering oversight that standard CCC-only contractors cannot match. Our CGC license means we understand building structure, load-bearing requirements, and comprehensive building code compliance – not just roofing materials and installation.</li>
    <li><strong>HVHZ Certified & Hurricane Compliant:</strong> Every Deerfield Beach installation meets High Velocity Hurricane Zone (HVHZ) compliance with 175+ mph wind ratings, enhanced fastening schedules, and reinforced roof-to-wall connections. We specialize in hurricane-resistant roofing systems engineered to protect your property during severe weather events.</li>
    <li><strong>Local Deerfield Beach Presence:</strong> Operating from our Deerfield Beach headquarters at 590 Goolsby Blvd enables rapid response to emergency calls, same-day inspection scheduling, and direct contractor oversight on every project. We're not a remote franchise – we're your local roofing experts.</li>
    <li><strong>Owner-Operator Accountability:</strong> Direct contractor involvement on every Deerfield Beach project ensures quality control, transparent communication, and accountability that large franchise operations and lead-generation companies cannot provide.</li>
  </ul>

  <h2>Comprehensive Roofing Services from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA provides complete residential and commercial roofing solutions throughout Deerfield Beach and surrounding South Florida communities:</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Emergency Roof Repair in Deerfield Beach</h3>
  <p>Active leaks and storm damage require immediate professional attention. Our Deerfield Beach emergency repair team provides 24/7 response for water intrusion, missing shingles, tile displacement, flashing failures, and structural damage. We deploy fully-equipped service vehicles from our Goolsby Blvd headquarters within hours of your call, providing emergency tarping, moisture detection, and permanent repairs that address both symptoms and underlying causes. <a href="/roof-repair/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Get emergency roof repair in Deerfield Beach</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Professional Roof Inspections</h3>
  <p>Our comprehensive 21-point roof inspection protocol evaluates every critical roofing system component from our Deerfield Beach base. We inspect exterior roofing materials (shingles, tiles, membranes), flashing integrity at all penetrations and transitions, valley condition, ridge cap installation, soffit and fascia condition, interior attic ventilation, insulation adequacy, structural decking soundness, and evidence of water intrusion or biological growth. Every Deerfield Beach inspection includes detailed photo documentation, written professional reports, cost estimates for recommended repairs, and lifespan assessments for budget planning. Perfect for pre-purchase evaluations, insurance documentation, storm damage assessment, and proactive maintenance planning. <a href="/roof-inspection/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Schedule a free Deerfield Beach roof inspection</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Roof Replacement & New Construction</h3>
  <p>All Phase Construction USA installs all major roofing systems throughout Deerfield Beach including architectural asphalt shingles, concrete and clay tile roofing, standing seam and corrugated metal roofing, TPO and PVC single-ply membranes, and modified bitumen systems. Every installation includes manufacturer-backed warranties, building department permitting and inspections, HVHZ compliance where required, and comprehensive project documentation. Our dual-licensing (CCC & CGC) enables us to handle complex structural modifications, load-bearing assessments, and integrated building envelope improvements that standard roofing contractors cannot perform.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Commercial Roofing Services</h3>
  <p>We serve Deerfield Beach commercial properties including multi-family buildings, retail centers, office buildings, industrial facilities, and HOA communities with specialized commercial roofing expertise. Our services include flat roof restoration, cool roof coatings, preventative maintenance programs, emergency repairs, and complete roof replacement. Our CGC license provides authority to handle structural modifications, parapet repairs, and comprehensive building envelope projects.</p>

  <h2>Our 21-Point Roof Inspection System</h2>
  <p>Every Deerfield Beach roof inspection follows our comprehensive 21-point assessment protocol:</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Exterior Assessment (7 Points)</h3>
  <ul style="line-height: 1.75;">
    <li>Roofing material condition, remaining lifespan, and weathering patterns</li>
    <li>Missing, damaged, cracked, or loose shingles, tiles, or membrane sections</li>
    <li>Flashing integrity at chimneys, vents, walls, valleys, and eaves</li>
    <li>Valley condition, debris accumulation, and water channeling effectiveness</li>
    <li>Ridge cap installation, ventilation adequacy, and wind damage indicators</li>
    <li>Soffit, fascia, and trim condition including rot, pest damage, or separation</li>
    <li>Gutter and downspout functionality, proper drainage, and water management</li>
  </ul>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Structural Evaluation (4 Points)</h3>
  <ul style="line-height: 1.75;">
    <li>Roof decking condition, structural soundness, and deterioration</li>
    <li>Rafter and truss integrity including deflection, cracking, or movement</li>
    <li>Load-bearing capacity and structural concerns</li>
    <li>Roof-to-wall connections and HVHZ compliance (where applicable)</li>
  </ul>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Interior Inspection (5 Points)</h3>
  <ul style="line-height: 1.75;">
    <li>Attic ventilation adequacy, airflow patterns, and temperature control</li>
    <li>Insulation condition, R-value compliance, and coverage uniformity</li>
    <li>Active or historical water intrusion evidence including staining patterns</li>
    <li>Moisture readings, humidity levels, and condensation concerns</li>
    <li>Mold, mildew, fungal growth, or biological contamination</li>
  </ul>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Penetrations & Accessories (5 Points)</h3>
  <ul style="line-height: 1.75;">
    <li>Chimney flashing, counter-flashing, and cap condition</li>
    <li>Plumbing vent pipe boots, seals, and collar integrity</li>
    <li>Skylight condition, flashing, and seal effectiveness</li>
    <li>HVAC penetrations, equipment supports, and curb flashing</li>
    <li>Satellite dishes, antennas, and auxiliary equipment mounting</li>
  </ul>

  <h2>Service Area from Our Deerfield Beach Location</h2>
  <p>From our centrally-located Deerfield Beach headquarters at 590 Goolsby Blvd, All Phase Construction USA serves over 50 cities throughout Broward County and Palm Beach County. Our strategic Deerfield Beach location enables efficient project coordination, same-day inspection availability, and rapid emergency response throughout South Florida including Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, Parkland, Coconut Creek, West Palm Beach, Delray Beach, Boynton Beach, Wellington, and all surrounding communities.</p>

  <h2>Contact All Phase Construction USA in Deerfield Beach</h2>
  <p><strong>Address:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442<br>
  <strong>Phone:</strong> (754) 227-5605<br>
  <strong>Licenses:</strong> CCC-1331464 (State Certified Roofing Contractor) | CGC-1526236 (Certified General Contractor)</p>

  <p><strong>Call (754) 227-5605</strong> to schedule your free professional roof inspection or to speak with a licensed roofing specialist about your Deerfield Beach roofing project. We provide same-day inspection availability, transparent estimates, and comprehensive project documentation for all residential and commercial roofing services.</p>


<div class="seo-service-links">
  <h2>Roofing Services in Deerfield Beach, FL</h2>
  <ul>
    <li><a href="/roof-repair/deerfield-beach">Roof Repair in Deerfield Beach, FL</a></li>
    <li><a href="/roof-inspection/deerfield-beach">Roof Inspection in Deerfield Beach, FL</a></li>
    <li><a href="/roof-replacement-process">Roof Replacement in Deerfield Beach, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * SPECIAL: Boca Raton Service Hub Override - Premium design with enhanced hierarchy
 */
function generateBocaRatonServiceHubContent() {
  return `
<section id="seo-static-content">
  <!-- SECTION 1: HERO (Dark Background) -->
  <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 4rem 2rem; margin: -2rem -1rem 3rem; border-radius: 0;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h1 style="color: white; font-size: 2.75rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.1;">Roofer in Boca Raton FL</h1>

      <h2 style="color: #e5e7eb; font-size: 1.35rem; font-weight: 400; margin-bottom: 2rem; line-height: 1.4; opacity: 0.95;">
        All Phase Construction USA | Roofing Contractor Serving Boca Raton, Palm Beach, and Broward County
      </h2>

      <p style="max-width: 750px; color: #d1d5db; font-size: 1.1rem; line-height: 1.7; margin-bottom: 2.5rem;">
        If you're searching for a roofer in Boca Raton FL, you want one thing: a roof that passes inspection, survives storms, and does not turn into a "surprise leak" two months later. That's what we build. Our commitment to quality, customer satisfaction, and safety standards sets us apart as a trusted member of the local community.
      </p>

      <!-- Premium CTA Row -->
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; padding: 1.5rem 0; border-top: 1px solid rgba(255,255,255,0.15); border-bottom: 1px solid rgba(255,255,255,0.15);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.9rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Call 24/7:</span>
          <a href="tel:7542275605" style="color: #dc2626; font-size: 1.35rem; font-weight: 700; text-decoration: none;">(754) 227-5605</a>
        </div>
        <div style="width: 1px; height: 30px; background: rgba(255,255,255,0.15);"></div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: #fbbf24; font-size: 1.25rem;">★★★★★</span>
          <span style="color: #e5e7eb; font-weight: 600;">4.8 Google Rating</span>
          <span style="color: #9ca3af;">(137 reviews)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 2: TRUST BLOCK (Light Background Contrast) -->
  <div style="background: #f9fafb; padding: 3.5rem 2rem; margin: 3rem -1rem; border-left: 4px solid #dc2626;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 2rem;">Licensed Florida Roofing Contractor in Boca Raton</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <!-- Benefit Block 1 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">✓</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Fully Licensed & Insured</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Licensed, insured, and bonded for your complete peace of mind</p>
          </div>
        </div>

        <!-- Benefit Block 2 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">★</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">In-House Expert Team</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">All work performed by our trained, professional roofing crew</p>
          </div>
        </div>

        <!-- Benefit Block 3 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">⌂</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Local Boca Raton Expertise</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Years of experience serving Boca Raton homeowners</p>
          </div>
        </div>

        <!-- Benefit Block 4 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">◆</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Consistent Quality</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Reliable workmanship backed by our BBB A+ rating</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 3: COMMUNITY & SERVICE -->
  <div style="max-width: 900px; margin: 3rem auto; padding: 0 1rem;">
    <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">Dedicated to the Boca Raton Community</h2>

    <p style="max-width: 750px; color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 3rem;">
      As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damage—crucial for maintaining the safety and comfort of your home.
    </p>

    <!-- 2-Column Service Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <!-- Left Column -->
      <div style="background: white; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">Emergency Roof Repairs</li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">Storm Damage Response</li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">Roof Leak Detection</li>
          <li style="padding: 0.75rem 0; color: #1f2937; font-weight: 500;">Residential & Commercial Roofing</li>
        </ul>
      </div>

      <!-- Right Column -->
      <div style="background: white; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">Licensed & Insured</li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">Local Boca Raton Expertise</li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">Insurance-Compliant Installations</li>
          <li style="padding: 0.75rem 0; color: #1f2937; font-weight: 500;">High-Quality Craftsmanship</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- SECTION 4: WHY CHOOSE US -->
  <div style="background: white; padding: 4rem 2rem; margin: 3rem -1rem;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 3rem; text-align: center;">Why Boca Raton Homeowners Choose All Phase Construction USA</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem;">
        <!-- Feature 1 -->
        <div style="border-left: 3px solid #dc2626; padding-left: 1.5rem;">
          <h3 style="color: #111827; font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Not a "Random Crew with a Ladder"</h3>
          <p style="color: #4b5563; line-height: 1.7; margin-bottom: 1rem;">
            In Boca Raton, the roof that "looks fine" can still fail the moment wind-driven rain hits a weak transition. That's why we run our jobs like a code-and-inspection system, not a patch-and-pray operation.
          </p>
          <p style="color: #4b5563; line-height: 1.7; margin: 0;">
            Our experienced contractors handle all aspects of roof installation and repair. We plan the build, document the condition, pull permits correctly, and execute with specialized crews by roofing system.
          </p>
        </div>

        <!-- Feature 2 -->
        <div style="border-left: 3px solid #dc2626; padding-left: 1.5rem;">
          <h3 style="color: #111827; font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Built for Permits, Inspections & Hurricane Reality</h3>
          <p style="color: #4b5563; line-height: 1.7; margin-bottom: 1rem;">
            South Florida roofing is not only about materials. It's about details that pass inspection and hold up when storms start pushing water sideways.
          </p>
          <p style="color: #4b5563; line-height: 1.7; margin: 0;">
            Boca Raton weather stresses edges, flashings, valleys, penetrations, and underlayment first. We focus there because that's where roofs usually lose.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 5: THE PROOF STACK (Dark Accent) -->
  <div style="background: #111827; color: white; padding: 4rem 2rem; margin: 3rem -1rem;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 style="color: white; font-size: 2rem; font-weight: 700; margin-bottom: 2.5rem; text-align: center;">The Proof Stack</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2.5rem;">
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="color: #dc2626; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">A+</div>
          <div style="color: #e5e7eb; font-weight: 600;">BBB Rated</div>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="color: #fbbf24; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">4.8★</div>
          <div style="color: #e5e7eb; font-weight: 600;">Google Rating (137 reviews)</div>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="color: #dc2626; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Dual-Licensed</div>
          <div style="color: #e5e7eb; font-weight: 600; font-size: 0.9rem;">CCC-1331464 + CGC-1526236</div>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
        <h3 style="color: white; font-size: 1.3rem; font-weight: 600; margin-bottom: 1.5rem;">Specialized Crews by System</h3>
        <p style="color: #d1d5db; line-height: 1.7; margin-bottom: 1.5rem;">
          Different roof types fail in different ways. We assign the right crew to the right system so installs are cleaner, repairs are tighter, and callbacks drop.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
          <span style="background: rgba(220,38,38,0.2); color: #fca5a5; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">Shingle Crew</span>
          <span style="background: rgba(220,38,38,0.2); color: #fca5a5; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">Tile Crew</span>
          <span style="background: rgba(220,38,38,0.2); color: #fca5a5; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">Metal Crew</span>
          <span style="background: rgba(220,38,38,0.2); color: #fca5a5; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">Flat Roof Crew</span>
        </div>
      </div>
    </div>
  </div>
  <!-- SECTION 6: INSPECTION PROCESS -->
  <div style="max-width: 900px; margin: 4rem auto; padding: 0 1rem;">
    <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">Roofing Company in Boca Raton FL with a "Show-You" Inspection Process</h2>

    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; max-width: 750px; margin-bottom: 3rem;">
      Most roof problems are invisible from the driveway. Our inspection is designed to reduce guesswork and help you make a clean decision.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <!-- What You Get -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-top: 4px solid #dc2626;">
        <h3 style="color: #111827; font-size: 1.3rem; font-weight: 700; margin-bottom: 1.5rem;">What You Get from a Real Roof Inspection:</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">✓</span>
            <span>Photos of key roof areas (edges, penetrations, valleys, transitions)</span>
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">✓</span>
            <span>Clear notes on what is failed vs what is aging</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">✓</span>
            <span>A recommendation that matches the roof's condition and your timeline</span>
          </li>
        </ul>
      </div>

      <!-- Repair vs Replacement -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-top: 4px solid #dc2626;">
        <h3 style="color: #111827; font-size: 1.3rem; font-weight: 700; margin-bottom: 1.5rem;">Repair vs Replacement (How We Decide):</h3>
        <div style="margin-bottom: 1.5rem;">
          <div style="color: #059669; font-weight: 700; margin-bottom: 0.5rem;">✓ Repair When:</div>
          <p style="color: #374151; margin: 0; padding-left: 1.5rem;">The system is stable and failures are isolated</p>
        </div>
        <div>
          <div style="color: #dc2626; font-weight: 700; margin-bottom: 0.5rem;">⚠ Replace When:</div>
          <p style="color: #374151; margin: 0; padding-left: 1.5rem;">The system is at end-of-life or failing in multiple zones</p>
        </div>
      </div>
    </div>
  </div>
  <h2>About All Phase Construction USA</h2>
  <p>All Phase Construction USA is a Florida roofing contractor based in Deerfield Beach, serving Boca Raton and the surrounding region with repairs, replacements, and inspections.</p>
  <p>We operate like a builder, not a sales script. You get direct oversight, clear scope, and a roof system designed for South Florida weather.</p>
  <p><strong>Find us:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
  <!-- SECTION 10: ROOFING CONTRACTOR - WHAT WE DO (Dark Premium Background) -->
  <div style="background: linear-gradient(135deg, #1f1f1f 0%, #0a0a0a 100%); color: white; padding: 4rem 2rem; margin: 4rem -1rem;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 style="color: white; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">Roofing Contractor in Boca Raton FL: What We Do</h2>

      <p style="max-width: 750px; color: #d1d5db; font-size: 1.05rem; line-height: 1.75; margin-bottom: 3.5rem;">
        We deliver roofing services that are permit-ready, inspection-ready, and storm-ready. Our work includes complete roof replacements, targeted repairs, and specialized commercial roofing solutions designed for South Florida conditions.
      </p>

      <h3 style="color: white; font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem;">Our Core Services</h3>

      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✓</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Roof inspections and leak investigations</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✓</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Roof repair (tile, shingle, metal, flat)</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✓</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Full roof replacement and reroofing</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✓</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Storm and hurricane damage assessments</span>
        </li>
        <li style="padding: 1.25rem 0; display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✓</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Preventive maintenance for aging roofs</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- SECTION 11: TYPICAL INSPECTION FINDINGS -->
  <div style="max-width: 900px; margin: 4rem auto; padding: 0 1rem;">
    <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">What We Typically Find During Boca Raton Roof Inspections</h2>

    <p style="max-width: 750px; color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 3rem;">
      Common roofing issues we uncover include:
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <!-- Column 1 -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">•</span>
            <span style="font-size: 1rem; line-height: 1.6;">Cracked or slipped tiles exposing underlayment</span>
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">•</span>
            <span style="font-size: 1rem; line-height: 1.6;">Nail pops and lifted shingles</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">•</span>
            <span style="font-size: 1rem; line-height: 1.6;">Failed pipe boots and vent flashings</span>
          </li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">•</span>
            <span style="font-size: 1rem; line-height: 1.6;">Valley and wall transition leaks</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">•</span>
            <span style="font-size: 1rem; line-height: 1.6;">Flat roof seam and drainage issues</span>
          </li>
        </ul>
      </div>
    </div>

    <p style="max-width: 750px; color: #374151; font-size: 1rem; line-height: 1.75; padding: 1.5rem; background: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
      At the first sign of roof leaks, prompt professional intervention is crucial to prevent further damage and avoid costly repairs. A small leak can be a small fix, or it can be the symptom of a tired system. The inspection tells the truth.
    </p>
  </div>
  <h2>Roof repair in Boca Raton FL</h2>
  <p>If you need roof repair in Boca Raton, speed matters, but correctness matters more. A rushed patch often becomes a repeat leak.</p>
  <p>Maintaining your roof is essential for ongoing protection against harsh weather and storm damage, especially in South Florida. Regular maintenance allows homeowners to rest assured that their roof is in good condition, providing peace of mind and long-term security for your home.</p>
  <h3>Common roof repairs we handle</h3>
  <ul>
    <li>Leak detection and targeted sealing</li>
    <li>Flashing repair at chimneys, walls, and transitions</li>
    <li>Tile replacement and reset work</li>
    <li>Shingle repair, blow-off replacement, and edge reinforcement</li>
    <li>Flat roof repairs (seams, penetrations, drains)</li>
  </ul>
  <p><strong>Semantic triple:</strong><br>
  Wind-driven rain finds weak flashing near roof penetrations.</p>
  <h2>Roof replacement in Boca Raton FL: systems, materials, and wind performance</h2>
  <p>A roof replacement is not "just shingles." In South Florida, the system details matter as much as the surface. Professional installation is crucial to ensure the quality, durability, and energy efficiency of your new roof, providing long-lasting protection for your home.</p>
  <p>When selecting roofing materials, it's important to choose options that offer lasting protection and energy efficiency. Metal roofs are known for their exceptional durability and can enhance the strength of your home, providing value for decades. Tile roofing systems are commonly used in South Florida because they withstand harsh weather conditions, while concrete tiles are a top-rated material in Boca Raton, FL, thanks to their impressive 50+ year lifespan. Asphalt shingles remain one of the more affordable roofing options available, making them a popular choice for many homeowners.</p>
  <h3>Roofing materials we install (match the roof to the building)</h3>
  <table>
    <thead>
      <tr><th>Roofing material</th><th>Best for</th><th>Strengths in Boca Raton</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Architectural shingles</td>
        <td>Budget-to-mid projects</td>
        <td>Fast installs, good value, broad color options</td>
      </tr>
      <tr>
        <td>Tile (clay or concrete)</td>
        <td>Many South FL homes</td>
        <td>Long life, strong curb appeal, great heat performance</td>
      </tr>
      <tr>
        <td>Metal roofing</td>
        <td>Storm-focused owners</td>
        <td>High wind performance, longevity, energy benefits</td>
      </tr>
      <tr>
        <td>Flat roofing systems</td>
        <td>Commercial and modern homes</td>
        <td>Seam control, drainage solutions, durable membranes</td>
      </tr>
    </tbody>
  </table>
  <h3>160 MPH wind-rated shingles (when it fits the roof)</h3>
  <p>If your home is a good match for shingles, we can spec high wind-rated systems designed for severe weather performance. Ask about wind ratings, fastening patterns, and the full system build, not only the brand name.</p>
  <h3>Warranties and certifications</h3>
  <p>Manufacturer certifications can unlock stronger warranty options when the full system is installed to spec. That is one reason certifications matter, beyond the logo.</p>
  <h2>Roof cost in Boca Raton: what drives price</h2>
  <p>Roof pricing in South Florida depends on the roof design and the code requirements, not just square footage. As a leading roofer in Boca Raton FL, we are committed to transparent pricing, ensuring you receive clear and upfront cost information for your roofing project. A professional quote should always be itemized and specify material brands, labor costs, permit fees, and timelines so you know exactly what to expect.</p>
  <h3>Big drivers of roof cost:</h3>
  <ul>
    <li>Roof size and pitch</li>
    <li>Material choice (shingle vs tile vs metal vs flat)</li>
    <li>Tear-off layers and deck condition</li>
    <li>Permits and inspections</li>
    <li>Ventilation upgrades and flashing complexity</li>
    <li>Hurricane-rated enhancements and fastening requirements</li>
  </ul>
  <h3>Realistic Florida price context (ranges, not hype)</h3>
  <p>Industry sources commonly cite Florida roof replacement pricing that varies widely by material and scope, and many calculators show higher statewide averages for full replacements on typical homes.</p>
  <h2>Service areas: Boca Raton plus Palm Beach and Broward County</h2>
  <p>We serve Boca Raton and the surrounding region with the same process: inspect, document, scope, permit, install, and close out clean. Protecting your house with reliable roofing solutions is our priority in every community we serve, ensuring your home and its occupants are safe and secure.</p>
  <h3>Palm Beach County (partial list)</h3>
  <p>Boca Raton, Delray Beach, Boynton Beach, Lake Worth, Wellington, West Palm Beach, Palm Beach Gardens, Jupiter</p>
  <h3>Broward County (partial list)</h3>
  <p>Deerfield Beach, Pompano Beach, Fort Lauderdale, Coral Springs, Coconut Creek, Parkland, Oakland Park, Sunrise, Weston</p>
  <h3>County</h3>
  <table>
    <thead>
      <tr><th>County</th><th>Core cities we serve</th><th>Typical projects</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Palm Beach</td>
        <td>Boca Raton, Delray, Boynton, West Palm</td>
        <td>Tile resets, reroofs, leak repairs</td>
      </tr>
      <tr>
        <td>Broward</td>
        <td>Deerfield, Pompano, Fort Lauderdale, Coral Springs</td>
        <td>Repairs, replacements, commercial systems</td>
      </tr>
    </tbody>
  </table>
  <h2>Florida's "25% rule" and reroof decisions in plain English</h2>
  <p>Homeowners ask this nonstop because it affects repair vs replacement.</p>
  <p>Florida's older "25% rule" language appears in Florida Building Code references, but SB 4-D revised how this is applied for many roofs. In many cases, when 25% or more is repaired, only that portion must be brought up to current code if the existing roof complies with the 2007 Florida Building Code or later.</p>
  <p>Local enforcement can still vary, so we treat this as a permit-and-inspection conversation, not a guess.</p>
  <h2>FAQ</h2>
  <h3>What is the 25% reroofing rule in Florida?</h3>
  <p>It refers to code language about how much of a roof can be repaired or replaced within a 12-month period before additional code compliance may be required. SB 4-D revised application for many roofs, often allowing compliance work to be limited to the repaired portion when conditions are met.</p>
  <h3>What is the average cost for a new roof in Florida?</h3>
  <p>It varies heavily by material and scope. Statewide averages published by remodeling and roofing cost sources commonly show broad ranges, with full replacements on typical homes often landing in the tens of thousands depending on system choice and tear-off needs.</p>
  <h3>How much does a 2,000 sq ft shingle roof cost?</h3>
  <p>"2,000 sq ft" can mean home size, not roof area, so pricing needs a measurement. Many pricing references estimate asphalt systems by cost per square foot or per square (100 sq ft), then adjust for pitch, tear-off, deck work, and code items.</p>
  <h3>What is the hourly rate for a roofer in Florida?</h3>
  <p>Worker pay and contractor billing are different numbers. Wage datasets and salary aggregators often show Florida roofer wages around the low-to-mid $20s per hour on average, but contractor labor billed to a job is typically higher because it includes overhead, insurance, supervision, and warranty risk.</p>
  <h3>Do you handle permits and inspections in Boca Raton?</h3>
  <p>Yes. We manage permits and coordinate inspections as part of a proper reroof process.</p>
  <h3>How fast can you inspect a leak?</h3>
  <p>We prioritize active leaks and storm-related damage. Call and we will schedule the fastest available inspection slot.</p>
  <h2>CTA</h2>
  <p><strong>If you need a roofer in Boca Raton FL, start with an inspection that shows you what is happening and what it costs to fix correctly.</strong></p>
  <p><strong>Call All Phase Construction USA 24/7: (754) 227-5605</strong></p>


<div class="seo-service-links">
  <h2>Roofing Services in Boca Raton, FL</h2>
  <ul>
    <li><a href="/roof-repair/boca-raton">Roof Repair in Boca Raton, FL</a></li>
    <li><a href="/roof-inspection/boca-raton">Roof Inspection in Boca Raton, FL</a></li>
    <li><a href="/roof-replacement-process">Roof Replacement in Boca Raton, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * SILO 1: Service Hub Page - /locations/[city]
 * Broad roofing authority with links to Repair + Inspection spokes
 */
function generateServiceHubContent(cityName, citySlug) {
  return `
<section id="seo-static-content">
  <h1>${cityName} Roofing Services | All Phase Construction USA</h1>

  <p><strong>Dispatched from our Deerfield Beach HQ to provide rapid roofing services in ${cityName}</strong>, All Phase Construction USA delivers comprehensive roofing solutions with dual-licensed expertise (CCC-1331464 & CGC-1526236) and HVHZ certification to every residential and commercial project.</p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Need Immediate Help in ${cityName}?</h3>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">
      📞 <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast ${cityName} Repair Service</a> – Active leaks, storm damage, emergency tarping
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔍 <strong>Professional Roof Inspections:</strong> <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point ${cityName} Roof Inspection</a> – Free estimates, insurance documentation
    </p>
  </div>

  <h2>Why ${cityName} Homeowners Choose All Phase Construction USA</h2>
  <p>We're not just another roofing company serving ${cityName}. Here's what sets us apart:</p>

  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Dual-Licensed Authority:</strong> We hold both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses. This means we bring structural engineering expertise that standard roofers cannot match.</li>
    <li><strong>HVHZ Certified:</strong> Every installation in ${cityName} meets High Velocity Hurricane Zone compliance with 175+ mph wind ratings and enhanced fastening schedules.</li>
    <li><strong>Local Deerfield Beach Headquarters:</strong> Our central South Florida location enables same-day inspection availability and rapid emergency response throughout ${cityName}.</li>
    <li><strong>Owner-Operator Accountability:</strong> Direct contractor involvement on every ${cityName} project ensures precision and quality that large franchise operations cannot match.</li>
  </ul>

  <h2>Complete Roofing Services in ${cityName}</h2>
  <p>All Phase Construction USA provides full-spectrum roofing solutions for ${cityName} properties:</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Emergency Roof Repairs</h3>
  <p>Active leaks require immediate attention. Our ${cityName} emergency repair team provides 24/7 response for storm damage, missing shingles, flashing failures, and water intrusion. <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline;">Get emergency repairs in ${cityName}</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Professional Roof Inspections</h3>
  <p>Our comprehensive 21-point roof inspection covers every critical component including underlayment condition, flashing integrity, ventilation adequacy, and structural soundness. Perfect for pre-purchase evaluations, insurance documentation, and maintenance planning. <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline;">Schedule a ${cityName} roof inspection</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Roof Replacement Systems</h3>
  <p>We install all major roofing systems in ${cityName} including architectural shingles, concrete and clay tile, standing seam metal, and TPO/PVC flat roofing. Every installation includes manufacturer-backed warranties, building code compliance, and HVHZ certification where required.</p>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from 590 Goolsby Blvd in Deerfield Beach, providing consistent, reliable roofing services throughout ${cityName} and surrounding South Florida communities. Our central location enables rapid response times and efficient project coordination across Broward and Palm Beach Counties.</p>

  <h2>Get Started with Your ${cityName} Roofing Project</h2>
  <p><strong>Call (754) 227-5605</strong> to speak with a licensed roofing specialist. We provide free professional inspections, transparent estimates, and detailed project timelines for all ${cityName} roofing services.</p>


<div class="seo-service-links">
  <h2>Roofing Services in ${cityName}, FL</h2>
  <ul>
    <li><a href="/roof-repair/${citySlug}">Roof Repair in ${cityName}, FL</a></li>
    <li><a href="/roof-inspection/${citySlug}">Roof Inspection in ${cityName}, FL</a></li>
    <li><a href="/roof-replacement-process">Roof Replacement in ${cityName}, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * SILO 2: Roof Repair Page - /roof-repair/[city]
 * High-intent repair leads with emergency response focus
 */
function generateRoofRepairContent(cityName, citySlug) {
  return `
<section id="seo-static-content">
  <h1>Roof Repair in ${cityName}, FL | Emergency Response Available</h1>

  <p><strong>Need roof repair in ${cityName}?</strong> All Phase Construction USA provides fast, professional roof repair services throughout ${cityName}, Florida. Serving ${cityName} from our Deerfield Beach headquarters, we handle emergency leaks, storm damage, flashing failures, and all structural roofing issues with dual-licensed expertise (CCC-1331464 & CGC-1526236).</p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Emergency Roof Repair in ${cityName}</h3>
    <p style="margin-bottom: 0.5rem; color: #7f1d1d; font-weight: bold;">📞 Call (754) 227-5605 for Same-Day Emergency Service</p>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">Active leaks, storm damage, missing shingles, and emergency tarping available throughout ${cityName}.</p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      💡 <strong>Not sure if you need a repair?</strong> Start with our <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">professional ${cityName} roof inspection</a> – free estimates included.
    </p>
  </div>

  <h2>Common Roof Repairs We Handle in ${cityName}</h2>
  <p>All Phase Construction USA diagnoses and repairs all roofing system failures throughout ${cityName}:</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Active Leak Detection & Repair</h3>
  <p>Water intrusion requires immediate professional attention. We use advanced moisture detection to locate hidden leaks, trace water paths through the roof assembly, and implement permanent repairs that address both visible symptoms and underlying causes. Our ${cityName} leak repair service includes comprehensive moisture mapping and documentation for insurance claims.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Storm Damage Assessment & Mitigation</h3>
  <p>South Florida storms can cause significant roofing damage. We provide rapid storm damage assessment throughout ${cityName} including missing shingle replacement, tile re-bedding, flashing reconstruction, and emergency tarping to prevent additional water intrusion. Our detailed documentation supports insurance claim submissions.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Flashing Failures & Penetration Repairs</h3>
  <p>Roof penetrations (chimneys, vents, skylights) and transition points (walls, valleys, eaves) require specialized flashing systems. We repair failed flashing installations, upgrade inadequate flashing details, and ensure all penetrations are properly sealed and code-compliant for ${cityName} building requirements.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Tile & Shingle Replacement</h3>
  <p>Individual damaged tiles and shingles can be replaced without full roof replacement. We match existing materials, colors, and profiles to maintain aesthetic continuity while addressing localized damage throughout ${cityName} properties.</p>

  <h2>Why ${cityName} Property Owners Trust Our Repair Service</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Dual-Licensed Expertise:</strong> Our CCC and CGC licenses mean we assess structural integrity alongside surface repairs – critical for identifying hidden damage that standard roofers miss.</li>
    <li><strong>Same-Day Emergency Response:</strong> Our Deerfield Beach headquarters enables rapid deployment to ${cityName} emergency repair calls with fully-equipped service vehicles.</li>
    <li><strong>Insurance Documentation:</strong> We provide detailed photo documentation, moisture readings, and scope-of-work reports that support ${cityName} insurance claim submissions.</li>
    <li><strong>Permanent Solutions:</strong> We address root causes, not just symptoms, ensuring repairs last and preventing recurring problems.</li>
  </ul>

  <h2>The All Phase Construction USA Repair Process</h2>
  <p>Our ${cityName} roof repair service follows a proven diagnostic and repair protocol:</p>
  <ol style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Emergency Response:</strong> We deploy to ${cityName} locations within hours for active leaks and storm damage emergencies.</li>
    <li><strong>Comprehensive Inspection:</strong> Our technicians perform thorough roof inspections to identify all damage – not just obvious problems.</li>
    <li><strong>Detailed Estimate:</strong> We provide transparent pricing with itemized repair scopes and photo documentation.</li>
    <li><strong>Professional Repair:</strong> All work follows manufacturer specifications and building code requirements.</li>
    <li><strong>Quality Verification:</strong> We test all repairs and provide warranty documentation for ${cityName} customers.</li>
  </ol>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from 590 Goolsby Blvd in Deerfield Beach, providing consistent, reliable roof repair services throughout ${cityName} and surrounding Broward and Palm Beach County communities. Our central location enables rapid emergency response and efficient project coordination.</p>

  <h2>Schedule Your ${cityName} Roof Repair</h2>
  <p><strong>Call (754) 227-5605</strong> to speak with a licensed roofing specialist. We provide same-day emergency service and free professional inspections for all ${cityName} roof repair needs.</p>

  <p style="margin-top: 1.5rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
    <strong>Explore More Services:</strong> <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">Complete ${cityName} roofing services</a> | <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline;">Professional ${cityName} roof inspection</a>
  </p>


<div class="seo-service-links">
  <h2>More Roofing Services in ${cityName}, FL</h2>
  <ul>
    <li><a href="/locations/${citySlug}">Roofing Contractor in ${cityName}, FL</a></li>
    <li><a href="/roof-inspection/${citySlug}">Roof Inspection in ${cityName}, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * SILO 3: Roof Inspection Page - /roof-inspection/[city]
 * Top-of-funnel lead capture with 21-point inspection focus
 */
function generateRoofInspectionContent(cityName, citySlug) {
  return `
<section id="seo-static-content">
  <h1>${cityName} Roof Inspection | 21-Point Professional Assessment</h1>

  <p><strong>Professional roof inspection in ${cityName}, Florida.</strong> All Phase Construction USA provides comprehensive 21-point roof inspections throughout ${cityName} for pre-purchase evaluations, insurance documentation, maintenance planning, and storm damage assessment. Serving ${cityName} from our Deerfield Beach headquarters with dual-licensed expertise (CCC-1331464 & CGC-1526236).</p>

  <div style="background: #ecfdf5; border-left: 4px solid #059669; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #065f46; margin-bottom: 0.75rem;">Free ${cityName} Roof Inspection</h3>
    <p style="margin-bottom: 0.5rem; color: #064e3b; font-weight: bold;">📋 Includes: Photo Documentation, Written Report, Cost Estimate</p>
    <p style="margin-bottom: 1rem; color: #064e3b;">Call (754) 227-5605 to schedule your professional ${cityName} roof inspection. Same-day availability throughout Broward and Palm Beach Counties.</p>
    <p style="margin-bottom: 0; color: #064e3b;">
      🔧 <strong>Already know you need repairs?</strong> <a href="/roof-repair/${citySlug}" style="color: #059669; text-decoration: underline; font-weight: bold;">Get fast ${cityName} roof repair service</a>.
    </p>
  </div>

  <h2>Why ${cityName} Property Owners Choose Our Inspection Service</h2>
  <p>All Phase Construction USA's ${cityName} roof inspections go beyond surface-level assessments. Our dual-licensed expertise (CCC & CGC) means we evaluate <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">structural integrity, building code compliance</a>, and long-term performance – not just shingle condition.</p>

  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>21-Point Comprehensive Assessment:</strong> We inspect every critical roof component from underlayment to ventilation systems.</li>
    <li><strong>Dual-Licensed Expertise:</strong> Our CCC and CGC licenses provide structural engineering insight that standard roofing inspectors cannot offer.</li>
    <li><strong>Detailed Photo Documentation:</strong> Every ${cityName} inspection includes comprehensive photo documentation suitable for insurance submissions and real estate transactions.</li>
    <li><strong>Written Professional Reports:</strong> We provide clear, detailed written reports with findings, recommendations, and cost estimates.</li>
    <li><strong>HVHZ Compliance Verification:</strong> We assess High Velocity Hurricane Zone compliance for ${cityName} properties requiring enhanced wind protection.</li>
  </ul>

  <h2>Our 21-Point ${cityName} Roof Inspection Checklist</h2>
  <p>All Phase Construction USA's comprehensive inspection protocol covers every critical roofing system component:</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Exterior Roof Assessment</h3>
  <ul style="line-height: 1.75;">
    <li>Shingle, tile, or membrane condition and remaining lifespan</li>
    <li>Missing, damaged, or loose roofing materials</li>
    <li>Flashing integrity at all penetrations and transitions</li>
    <li>Valley condition and water channeling effectiveness</li>
    <li>Ridge cap installation and ventilation adequacy</li>
    <li>Soffit, fascia, and eave condition</li>
    <li>Gutter and downspout functionality</li>
  </ul>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Structural Assessment</h3>
  <ul style="line-height: 1.75;">
    <li>Decking condition and structural soundness</li>
    <li>Rafter and truss integrity (where accessible)</li>
    <li>Load-bearing capacity and deflection concerns</li>
    <li>Roof-to-wall connection compliance (HVHZ properties)</li>
  </ul>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Interior Inspection</h3>
  <ul style="line-height: 1.75;">
    <li>Attic ventilation adequacy and airflow patterns</li>
    <li>Insulation condition and R-value compliance</li>
    <li>Active or historical water intrusion evidence</li>
    <li>Moisture readings and humidity levels</li>
    <li>Mold, mildew, or biological growth indicators</li>
  </ul>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Penetrations & Accessories</h3>
  <ul style="line-height: 1.75;">
    <li>Chimney flashing and cap condition</li>
    <li>Vent pipe boots and seals</li>
    <li>Skylight integrity and flashing</li>
    <li>HVAC penetrations and supports</li>
    <li>Satellite dish and antenna mounting</li>
  </ul>

  <h2>Common ${cityName} Roof Inspection Scenarios</h2>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Pre-Purchase Home Inspections</h3>
  <p>Buying a ${cityName} property? Our roof inspection provides accurate remaining lifespan estimates, identifies required repairs, and establishes negotiation leverage. We deliver detailed reports within 24 hours to meet <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">real estate closing timelines</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Insurance Documentation</h3>
  <p>Insurance companies require professional roof inspections for policy renewals and claim submissions. Our ${cityName} inspections include comprehensive photo documentation, moisture readings, and detailed condition reports that meet insurance adjuster requirements.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Storm Damage Assessment</h3>
  <p>After severe weather events, our ${cityName} storm damage inspections identify all wind and hail damage including subtle underlayment compromise that untrained observers miss. We provide documentation that supports insurance claim submissions.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Maintenance Planning</h3>
  <p>Proactive maintenance extends roof lifespan and prevents expensive emergency repairs. Our <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline;">annual ${cityName} inspection service</a> identifies minor issues before they become major problems.</p>

  <h2>What You Receive with Your ${cityName} Inspection</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Comprehensive Photo Documentation:</strong> Detailed photos of all roof areas including close-ups of any concerns</li>
    <li><strong>Written Professional Report:</strong> Clear findings with specific recommendations and priority ratings</li>
    <li><strong>Cost Estimates:</strong> Transparent pricing for any recommended repairs or maintenance</li>
    <li><strong>Lifespan Assessment:</strong> Realistic remaining lifespan estimate for budget planning</li>
    <li><strong>Insurance Support:</strong> Documentation formatted for ${cityName} insurance submissions if needed</li>
  </ul>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from <a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">590 Goolsby Blvd in Deerfield Beach</a>, providing professional roof inspection services throughout ${cityName} and surrounding Broward and Palm Beach County communities. Our central location enables same-day inspection availability and rapid report delivery.</p>

  <h2>Schedule Your Free ${cityName} Roof Inspection</h2>
  <p><strong>Call (754) 227-5605</strong> to schedule your professional 21-point roof inspection. We provide same-day availability, detailed photo documentation, and written reports within 24 hours for all ${cityName} properties.</p>

  <p style="margin-top: 1.5rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
    <strong>Explore More Services:</strong> <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">Complete ${cityName} roofing services</a> | <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline;">Emergency ${cityName} roof repairs</a>
  </p>


<div class="seo-service-links">
  <h2>More Roofing Services in ${cityName}, FL</h2>
  <ul>
    <li><a href="/locations/${citySlug}">Roofing Contractor in ${cityName}, FL</a></li>
    <li><a href="/roof-repair/${citySlug}">Roof Repair in ${cityName}, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter()}
</section>
`.trim();
}


/**
 * CUSTOM: Roofing Services Page - /roofing-services
 * Rich prerender content matching RoofingServicesPage.tsx
 */
function generateRoofingServicesContent() {
  return `
    <section id="seo-static-content">
      <h1>Roofing Services | Broward &amp; Palm Beach County</h1>

      <p>All Phase Construction USA is a dual-licensed roofing and general contractor serving Broward and Palm Beach Counties since 2005. With over 2,500 completed projects and certifications from Owens Corning, CertainTeed, and Tamko, we specialize in HVHZ-compliant roofing built to South Florida&rsquo;s 146 mph wind load requirements.</p>

      <h2>Residential Roofing Services</h2>
      <p>Complete roof replacement, repair, and inspection services for South Florida homeowners. Every residential project includes HVHZ-compliant installation, proper permitting, and manufacturer warranty documentation.</p>
      <ul>
        <li><strong><a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">Tile Roofing</a></strong> &mdash; Concrete and clay tile installation and repair with proper foam adhesive application, verified flashing, and HVHZ wind-code compliance.</li>
        <li><strong><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Metal Roofing</a></strong> &mdash; Standing seam and corrugated metal roof systems rated for 150+ mph winds in South Florida.</li>
        <li><strong><a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">Shingle Roofing</a></strong> &mdash; Architectural and impact-resistant shingle installation. Owens Corning Platinum and CertainTeed Master certified contractor.</li>
        <li><strong><a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">Flat Roofing</a></strong> &mdash; Built-up roofing (BUR), TPO, modified bitumen, and single-ply systems for flat and low-slope residential roofs.</li>
        <li><strong><a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Roof Replacement</a></strong> &mdash; Full reroof with HVHZ-compliant materials, manufacturer-backed warranties, and complete permit documentation.</li>
        <li><strong><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Roof Repair</a></strong> &mdash; Emergency and scheduled repairs including leak detection, flashing repair, tile replacement, and storm damage restoration.</li>
      </ul>

      <h2>Commercial Roofing Services</h2>
      <p>All Phase Construction USA holds dual licenses &mdash; General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) &mdash; allowing us to handle structural and roofing work under one contract. We serve commercial buildings, multi-family properties, HOA communities, and condo associations throughout Broward and Palm Beach Counties.</p>
      <ul>
        <li><strong>Flat Roof Systems</strong> &mdash; TPO, EPDM, PVC, and built-up roofing for commercial properties with proper drainage design and seam welding.</li>
        <li><strong>Single-Ply Membrane</strong> &mdash; Energy-efficient single-ply roofing systems engineered for South Florida&rsquo;s UV exposure and wind loads.</li>
        <li><strong>HOA &amp; Condo Associations</strong> &mdash; We work directly with property managers and HOA boards to minimize disruption and keep projects on schedule.</li>
        <li><strong><a href="/roof-maintenance-programs" style="color: #dc2626; text-decoration: underline;">Roof Maintenance Programs</a></strong> &mdash; Preventive maintenance plans for commercial properties. Extend your roof&rsquo;s life and catch problems before they become emergencies.</li>
      </ul>

      <h2>Free Professional Roof Inspections</h2>
      <p>Our licensed inspectors perform comprehensive 21-point roof assessments covering material condition, structural integrity, flashing details, ventilation, and HVHZ compliance. Every inspection includes detailed photo documentation suitable for insurance submissions and real estate transactions.</p>
      <ul>
        <li><strong>HVHZ Compliance Checks</strong> &mdash; Verify your roof meets High Velocity Hurricane Zone requirements for 146+ mph wind loads.</li>
        <li><strong>Insurance Documentation</strong> &mdash; Detailed reports with photos, moisture readings, and condition assessments that meet insurance adjuster requirements.</li>
        <li><strong>Pre-Purchase Evaluations</strong> &mdash; Accurate remaining lifespan estimates and repair cost projections for real estate transactions.</li>
        <li><strong>Storm Damage Assessment</strong> &mdash; Post-storm inspections identifying wind and hail damage including subtle underlayment compromise.</li>
      </ul>
      <p><strong><a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Schedule a free roof inspection</a></strong> or call <strong>(754) 227-5605</strong> to speak with a licensed roofing specialist.</p>

      ${companyAuthorityFooter()}
    </section>
  `.trim();
}

/**
 * Generate default service page content (residential, commercial, metal, tile, etc.)
 */
function defaultServicePageContent(pageTitle) {
  return `
<section id="seo-static-content">
  <h1>${pageTitle}</h1>

  <p><strong>All Phase Construction USA</strong> provides professional ${pageTitle.toLowerCase()} services throughout Broward County and Palm Beach County. As a dual-licensed roofing contractor, we bring both specialized roofing expertise (CCC-1331464) and comprehensive general contracting authority (CGC-1526236) to every project.</p>

  <h2>Why Choose All Phase Construction USA</h2>
  <p>What sets us apart from standard roofing contractors:</p>
  <ul>
    <li><strong>Dual-Licensed (CCC & CGC):</strong> We hold both State Certified Roofing Contractor and Certified General Contractor licenses, providing structural engineering oversight that standard roofers cannot match.</li>
    <li><strong>HVHZ Certified:</strong> Every installation meets High Velocity Hurricane Zone compliance for maximum wind protection and building code requirements.</li>
    <li><strong>Owner-Operator Lead:</strong> Direct contractor involvement on every project ensures accountability and precision standard roofers can't match.</li>
    <li><strong>Local Deerfield Beach Headquarters:</strong> Serving South Florida from 590 Goolsby Blvd with consistent, reliable service and local expertise.</li>
  </ul>

  <h2>Professional Service Throughout South Florida</h2>
  <p>From our centrally located Deerfield Beach headquarters, we serve over 50 cities across Broward and Palm Beach Counties including Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, West Palm Beach, Delray Beach, Boynton Beach, Wellington, Parkland, and all surrounding communities. Our strategic location enables same-day inspection availability and prompt emergency response throughout the region.</p>

  <p><strong>Contact us at (754) 227-5605 for a free professional inspection and estimate.</strong></p>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * Generate homepage content
 */
function homepageContent() {
  return `
<section id="seo-static-content">
  <h1>Roofing Contractor | Broward & Palm Beach | All Phase USA</h1>
  <p><strong>Hurricane-compliant HVHZ roofing installation for Broward and Palm Beach County. Dual-licensed contractor specializing in wind-code compliant roofing systems.</strong></p>

  <h2>Our Edge</h2>
  <p>What sets us apart from standard roofing contractors:</p>
  <ul>
    <li><strong>Dual-Licensed Authority:</strong> Both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses provide structural engineering expertise standard roofers lack.</li>
    <li><strong>HVHZ Specialist:</strong> Every South Florida installation meets High Velocity Hurricane Zone compliance with 175+ mph wind ratings.</li>
    <li><strong>Owner-Operator Accountability:</strong> Direct contractor involvement on every project ensures precision and quality franchise operations cannot match.</li>
    <li><strong>Deerfield Beach Headquarters:</strong> Central location enables same-day inspection availability and rapid emergency response throughout Broward and Palm Beach Counties.</li>
  </ul>

  <h2>Comprehensive Roofing Services</h2>
  <p>All Phase Construction USA provides complete residential and commercial roofing solutions throughout South Florida including emergency roof repairs, professional roof inspections, complete roof replacements, tile roofing, metal roofing, shingle roofing, flat roofing (TPO/PVC), roof maintenance programs, and storm damage restoration.</p>

  <h2>Service Area</h2>
  <p>From our Deerfield Beach headquarters at 590 Goolsby Blvd, we serve over 50 cities across Broward County and Palm Beach County including Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, Parkland, Coconut Creek, West Palm Beach, Delray Beach, Boynton Beach, Wellington, and all surrounding communities.</p>

  <p><strong>Call (754) 227-5605 for a free professional roof inspection and estimate.</strong></p>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * Generate Deerfield Beach Local SEO JSON-LD Schema
 */
function generateDeerfieldBeachSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach#roofingcontractor",
    "name": "All Phase Construction USA",
    "url": "https://allphaseconstructionfl.com/locations/deerfield-beach",
    "telephone": "+1-754-227-5605",
    "priceRange": "$$",
    "foundingDate": "2006",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "590 Goolsby Blvd",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33442",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Deerfield Beach",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      }
    ],
    "hasMap": "https://www.google.com/maps/place/590+Goolsby+Blvd,+Deerfield+Beach,+FL+33442",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.allphaseconstructionfl.com/",
      "https://www.youtube.com/@allphaseconstructionusa5626",
      "https://share.google/GoLG8dytlgHgXVjKK"
    ]
  };
}

/**
 * Load the production-built dist/index.html template
 */
let CLEAN_VITE_TEMPLATE = null;

function loadProductionTemplate() {
  if (CLEAN_VITE_TEMPLATE) return CLEAN_VITE_TEMPLATE;
  const distIndexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(distIndexPath)) {
    throw new Error('❌ dist/index.html not found. Run npm run build first.');
  }
  const template = fs.readFileSync(distIndexPath, 'utf-8');
  if (template.includes('/src/main.tsx')) {
    throw new Error('❌ Dev build detected. Run npm run build first.');
  }
  CLEAN_VITE_TEMPLATE = template;
  console.log('✅ Clean Vite template locked in memory.');
  return CLEAN_VITE_TEMPLATE;
}

/**
 * Create HTML from production template with prerendered content
 * This replaces SEO meta tags but preserves all production script/style tags
 */
function createHTMLTemplate(title, description, canonical, content, jsonLdSchema = null, ogDescription = null) {
  const ogDesc = ogDescription || description;

  // Load the production template
  const productionHTML = loadProductionTemplate();

  // Replace the <title> tag
  let html = productionHTML.replace(
    /<title>.*?<\/title>/,
    `<title>${title}</title>`
  );

  // Replace meta description (skip if empty - let Helmet handle it)
  if (description) {
    html = html.replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${description}">`
    );
  }

  // Replace canonical link (skip if empty - let Helmet handle it)
  if (canonical) {
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${canonical}" />`
    );
  }

  // Replace Open Graph tags
  html = html.replace(
    /<meta property="og:title" content=".*?">/,
    `<meta property="og:title" content="${title}">`
  );

  html = html.replace(
    /<meta property="og:description" content=".*?">/,
    `<meta property="og:description" content="${ogDesc}">`
  );

  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`
  );

  // Add JSON-LD schema if provided (before </head>)
  if (jsonLdSchema) {
    const schemaScript = `
    <!-- Local SEO JSON-LD Schema -->
    <script type="application/ld+json">
${JSON.stringify(jsonLdSchema, null, 2)}
    </script>
  </head>`;
    html = html.replace('</head>', schemaScript);
  }

  // Add SEO static content styles (before </head>)
  const seoStyles = `
    <!-- Critical SEO Static Content Styles -->
    <style id="seo-static-styles">
      #seo-static {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: relative !important;
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem 1rem;
        line-height: 1.75;
        color: #1f2937;
        background: #ffffff;
      }
      #seo-static h1 {
        font-size: 2rem;
        font-weight: bold;
        color: #111827;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }
      #seo-static h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #111827;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      #seo-static h3 {
        font-size: 1.25rem;
        font-weight: bold;
        color: #374151;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
      }
      #seo-static p {
        margin-bottom: 1rem;
        color: #374151;
      }
      #seo-static ul, #seo-static ol {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
      }
      #seo-static li {
        margin-bottom: 0.5rem;
        color: #374151;
      }
      #seo-static a {
        color: #dc2626;
        text-decoration: underline;
      }
      #seo-static a:hover {
        color: #991b1b;
      }
      #seo-static strong {
        font-weight: 600;
        color: #111827;
      }
    </style>
  </head>`;

  html = html.replace('</head>', seoStyles);

  // Inject prerendered content INSIDE <div id="root"></div>
  const seoContent = `
    <div id="seo-static">
        <!-- Crawler-Visible License & Contact Header -->
        <div style="background: #dc2626; color: white; padding: 1rem; text-align: center; margin-bottom: 2rem;">
            <strong>All Phase Construction USA</strong> |
            Licensed: CCC-1331464 (Roofing Contractor) & CGC-1526236 (General Contractor) |
            Phone: <a href="tel:7542275605" style="color: white; text-decoration: underline;">(754) 227-5605</a> |
            590 Goolsby Blvd, Deerfield Beach, FL 33442
        </div>
        ${content}
    </div>
        `;

          const rootStart = html.indexOf('<div id="root">');
    const bodyEnd = html.indexOf('</body>');
    if (rootStart !== -1 && bodyEnd !== -1) {
      html = html.slice(0, rootStart) + `<div id="root">${seoContent}</div>` + html.slice(bodyEnd);
    } else {
      throw new Error('❌ Could not find root div or closing body tag in template.');
    }

  return html;
}

/**
 * Get SEO metadata for a page
 */
function getSEOMetadata(urlPath, cityName = null) {
  const normalizedPath = urlPath.toLowerCase().replace(/\/$/, '');

  // Check static titles
  if (seoTitlesConfig.staticTitles[normalizedPath]) {
    const config = seoTitlesConfig.staticTitles[normalizedPath];
    return {
      title: config.title,
      description: config.description,
      canonical: config.canonical,
      ogDescription: config.ogDescription || config.description
    };
  }

  // Handle dynamic city pages (roof-repair and roof-inspection only)
  // NOTE: /locations/:slug pages are handled by buildLocationSeo() and should NOT use this function
  if (cityName) {
    if (normalizedPath.includes('/roof-repair/')) {
      return {
        title: `${cityName} Roof Repair | All Phase USA`,
        description: `Emergency roof repair in ${cityName}, FL. Leaks, storm damage & flashing failures. HVHZ-compliant, dual-licensed CCC/CGC contractor. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}`
      };
    }
    if (normalizedPath.includes('/roof-inspection/')) {
      return {
        title: `${cityName} Roof Inspection | All Phase USA`,
        description: `Free 21-point roof inspection in ${cityName}, FL. Insurance docs, storm damage & pre-purchase reports. Licensed contractor. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}`
      };
    }
  }

  // Fallback - FAIL LOUDLY if metadata missing
  // This prevents silent injection of wrong metadata at build time
  throw new Error(
    `❌ MISSING METADATA FOR ROUTE: ${normalizedPath}\n` +
    `Add explicit metadata to scripts/seo-titles.json or handle this route in getSEOMetadata().\n` +
    `Routes should NOT rely on fallback metadata - every route must be explicitly defined.`
  );
}

/**
  * Helper function to write file to both public/ and dist/
 * ALL prerendered pages go to BOTH directories for deployment
 */
function writeToPublicAndDist(relativePath, content) {
  // Always write to public/ (for dev and reference)
  const publicPath = path.join(publicDir, relativePath);
  const publicDirPath = path.dirname(publicPath);
  fs.mkdirSync(publicDirPath, { recursive: true });
  fs.writeFileSync(publicPath, content);
  
  // Write ALL prerendered pages to dist/ for deployment
  if (fs.existsSync(distDir)) {
    const distPath = path.join(distDir, relativePath);
    const distDirPath = path.dirname(distPath);
    fs.mkdirSync(distDirPath, { recursive: true });
    fs.writeFileSync(distPath, content);
  }
}

/**
 * Generate all static HTML files
 */
function generateStaticFiles() {
  console.log('🏗️  Generating 3-Silo Lead Generation Architecture...\n');

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  let totalPages = 0;

  // 1. Generate Homepage
  // Homepage uses explicit metadata (NOT from getSEOMetadata fallback)
  // This ensures title is controlled by index.html + runtime metadata
  const homeHTML = createHTMLTemplate(
    'Roofing Contractor | Broward & Palm Beach | All Phase USA',
        'HVHZ-certified, dual-licensed roofer in Broward & Palm Beach. Tile, metal, shingle, flat & commercial roofing. Free inspections. Call (754) 227-5605.',
    'https://allphaseconstructionfl.com',
    homepageContent()
  );
  // HOMEPAGE SAFETY: Write to dist/index.html (was public/, now changed for deployment)
  // This WILL overwrite the Vite shell, which is intentional for prerendering
  const homePath = path.join(publicDir, 'index.html');
  console.log('🔍 DEBUG: About to write homepage to:', homePath);
  try {
    fs.writeFileSync(homePath, homeHTML);
    console.log('✓ Generated: dist/index.html');
    console.log('  File exists after write?', fs.existsSync(homePath));
    console.log('  File size:', fs.statSync(homePath).size, 'bytes');
  } catch (err) {
    console.error('❌ ERROR writing homepage:', err);
  }
  totalPages++;

    // ============================================================
  // FAQ & Breadcrumb schema data for service pages
  // Matches what React components render client-side
  // ============================================================
  const SERVICE_PAGE_SCHEMAS = {
    '/shingle-roofing': {
      faqs: [
        { question: "Are shingle roofs a good choice for South Florida hurricanes?", answer: "Yes \u2014 when installed properly. Premium architectural shingles like Tamko Titan XT carry 160 mph wind warranties. The key factors are proper nailing patterns, deck re-nailing, and quality underlayment. Many shingle failures in storms result from installation shortcuts, not material deficiencies." },
        { question: "How long do shingle roofs last in Florida?", answer: "With proper ventilation and premium materials, 20-30 years is realistic. Without proper ventilation, thermal shock can reduce that to 12-15 years. The underlayment and deck are often the limiting factors, not the shingles themselves." },
        { question: "What is a secondary water barrier and why does it matter?", answer: "A secondary water barrier is a self-adhered (peel and stick) underlayment that provides waterproofing even if shingles blow off. It qualifies for approximately 8% discount on your windstorm insurance \u2014 but only if you can document that it was installed. We photograph this installation on every job." },
        { question: "How do I get insurance discounts for my roof?", answer: "After installation, a licensed inspector performs a wind mitigation inspection (form OIR-B1-1802). They evaluate roof covering, deck attachment, secondary water resistance, and other factors. If your contractor did not document what is under the shingles, the inspector marks unknown and you do not get the discount. We provide documentation during installation so you can prove what is there." },
        { question: "Why does ventilation matter for shingle roofs?", answer: "Shingle surfaces can reach 160 degrees on sunny days. Without proper ventilation, that heat builds up in the attic and cooks the shingles from below. This thermal shock dries out the asphalt, causing cracking, curling, and premature failure. Proper ventilation can extend shingle life by 30-50%." }
      ],
      breadcrumbs: [
        { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
        { name: 'Shingle Roofing', url: 'https://allphaseconstructionfl.com/shingle-roofing' }
      ]
    },
    '/metal-roofing': {
      faqs: [
        { question: "What's the difference between standing seam and exposed fastener metal roofing?", answer: "Standing seam has concealed fasteners with panels that interlock at raised seams, providing superior wind resistance and no exposed penetrations. Exposed fastener systems use visible screws through the panel face \u2014 lower cost but require washer maintenance and are more vulnerable to wind uplift in HVHZ jurisdictions." },
        { question: "Is mechanically seamed better than snap-lock for hurricanes?", answer: "Yes. Mechanically seamed panels are physically crimped together, creating a stronger interlock than snap-lock systems that rely on tension alone. For HVHZ applications in Broward and Palm Beach Counties, mechanically seamed standing seam provides superior uplift resistance and is the preferred system for high-wind exposure." },
        { question: "What does clip spacing mean and why does it matter?", answer: "Clip spacing refers to how frequently the hidden clips that attach standing seam panels to the roof deck are installed. Tighter clip spacing increases wind uplift resistance. Florida's High Velocity Hurricane Zone requires specific clip spacing based on wind load calculations \u2014 improper spacing is one of the most common installation deficiencies we find during inspections." },
        { question: "What gauge or thickness metal should I choose?", answer: "For residential standing seam in South Florida, 24-gauge steel is the standard for quality installations. 26-gauge is acceptable for some applications but offers less dent resistance. Thicker gauge (lower number) provides better performance in hail, impact, and high-wind conditions. Aluminum panels are also common in coastal areas for corrosion resistance." },
        { question: "How long does a metal roof last?", answer: "Properly installed metal roofing systems last 40-70 years in Florida conditions. The limiting factor is usually the substrate and fastening system, not the metal panels themselves. Galvalume and Kynar-coated steel panels are particularly durable in South Florida's UV and salt air environment." }
      ],
      breadcrumbs: [
        { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
        { name: 'Metal Roofing', url: 'https://allphaseconstructionfl.com/metal-roofing' }
      ]
    },
    '/flat-roofing': {
      faqs: [
        { question: "How long does a flat roof last in Florida?", answer: "With proper installation and materials, TPO and PVC systems last 20-30 years, and modified bitumen 15-20 years. Poor installation or drainage problems can cut that lifespan in half. The key factors are seam quality, drainage design, and proper HVHZ-compliant installation." },
        { question: "What causes flat roof leaks?", answer: "The most common causes are seam failures from improper heat welding, flashing failures around penetrations such as HVAC units, vents, and pipes, and ponding water that breaks down the membrane over time. In Florida, UV exposure and thermal cycling also accelerate wear if the system is not designed for our climate." },
        { question: "What's the real difference between TPO and PVC?", answer: "When TPO is heat-welded, the seam bonds through adhesion and can be separated with enough force. TPO also requires chalk fillers for fire ratings, which bleed to the surface over time making repairs harder. When PVC is heat-welded, the material molecularly fuses into one continuous piece \u2014 the seam becomes the strongest part of the roof. PVC is naturally Class A fire rated with no fillers, so repairs decades later weld just as cleanly as day one." },
        { question: "How do you prevent ponding water on flat roofs?", answer: "We design drainage into every system \u2014 tapered insulation to create slope toward drains, properly sized primary drains, and secondary overflow scuppers as code requires. Florida Building Code defines positive drainage as water clearing within 48 hours. We engineer for complete drainage, not good enough." },
        { question: "Why does seam welding matter so much on flat roofs?", answer: "Because the seams are the weak point. A properly heat-welded seam is actually stronger than the membrane itself. But if the welder runs too hot, it destroys the stabilizers in the material. Too cold, and the bond fails over time. Our crews calibrate daily, test welds, and document everything \u2014 because this is where most flat roofs fail." }
      ],
      breadcrumbs: [
        { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
        { name: 'Flat Roofing', url: 'https://allphaseconstructionfl.com/flat-roofing' }
      ]
    },
    '/roof-inspection': {
      faqs: [
        { question: "What is the difference between a roof inspection and a free roof estimate?", answer: "A roof inspection is a diagnostic evaluation intended to identify conditions, failure mechanisms, and system performance. A free estimate is typically a pricing exercise based on visible symptoms and does not involve comprehensive diagnostic analysis." },
        { question: "Do I need a roof inspection before repairing a leak?", answer: "Yes. Roof leaks often originate far from the point where damage becomes visible. A professional inspection identifies the actual cause of water intrusion so repairs address the defect rather than the symptom." },
        { question: "How long does a professional roof inspection take?", answer: "Most roof inspections take between 60 and 90 minutes, depending on roof size, system complexity, and accessibility. Additional time may be required for documentation and analysis." },
        { question: "Will a roof inspection tell me if I need repair or replacement?", answer: "Yes. A professional roof inspection evaluates material condition, attachment integrity, and remaining service life to determine whether repair is technically sufficient or full replacement is warranted." },
        { question: "Are roof inspections used for insurance or underwriting purposes?", answer: "In many cases, yes. Inspection documentation may be used to support insurance evaluations, underwriting decisions, or post-storm damage assessments, depending on insurer requirements." },
        { question: "How often should a roof be professionally inspected?", answer: "Most roofing systems should be inspected every one to two years, and after major storm events, to identify developing issues before they result in failure." }
      ],
      breadcrumbs: [
        { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
        { name: 'Roof Inspection', url: 'https://allphaseconstructionfl.com/roof-inspection' }
      ]
    },
  '/roofing-services': {
    faqs: [
      { question: "What roofing services does All Phase Construction USA offer?", answer: "All Phase Construction USA offers tile, metal, shingle, flat, and commercial roofing, plus roof replacement, repair, and inspection services throughout Broward and Palm Beach Counties." },
      { question: "Is All Phase Construction USA licensed for commercial roofing?", answer: "Yes. All Phase holds dual licenses \u2014 General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) \u2014 allowing us to handle both structural and roofing work under one contract." },
      { question: "Do you offer free roof inspections?", answer: "Yes. All Phase Construction USA provides free roof inspections for homeowners and commercial property owners throughout Broward and Palm Beach Counties. Call (754) 227-5605 to schedule." },
      { question: "Are your roofs built to South Florida hurricane codes?", answer: "Yes. Every roof we install meets High-Velocity Hurricane Zone (HVHZ) requirements and is rated for 146 mph wind loads as required by Broward and Palm Beach County building codes." }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Roofing Services', url: 'https://allphaseconstructionfl.com/roofing-services' }
    ]
  }
  };

  
  
  // 2. Generate Service Pages (residential, commercial, metal, tile, etc.)
  const servicePages = [
    { path: '/residential-roofing', title: 'Residential Roofing Services' },
    { path: '/commercial-roofing', title: 'Commercial Roofing Services' },
    { path: '/metal-roofing', title: 'Metal Roofing Installation & Repair' },
    { path: '/tile-roofing', title: 'Tile Roofing Installation & Repair' },
    { path: '/shingle-roofing', title: 'Shingle Roofing Installation & Repair' },
    { path: '/flat-roofing', title: 'Flat Roofing Systems (TPO & PVC)' },
    { path: '/roof-inspection', title: 'Professional Roof Inspection Services' },
    { path: '/roof-repair', title: 'Emergency Roof Repair Services' },
    { path: '/roof-maintenance-programs', title: 'Roof Maintenance Programs' },
    { path: '/roof-replacement-process', title: 'Roof Replacement Process' },
    { path: '/pricing-guide', title: 'Roof Pricing Guide for South Florida' },
    { path: '/learning-center', title: 'Learning Center - Roofing Guides & Resources' },
    { path: '/roofing-services', title: 'Roofing Services - Residential & Commercial Solutions' },
    { path: '/easy-payments', title: 'Easy Payments & Financing Options' },
    { path: '/reviews', title: 'Customer Reviews & Testimonials' },
    { path: '/projects', title: 'Roofing Projects Gallery' },
    { path: '/our-location', title: 'Our Deerfield Beach Location' },
    { path: '/blog', title: 'Roofing Insights & Industry News' },
    { path: '/contact', title: 'Contact Our Roofing Team' },
    { path: '/about-us', title: 'About All Phase Construction' },
    { path: '/roof-cost-calculator', title: 'Roof Cost Calculator' },
    { path: '/how-to-hire-roofing-contractor', title: 'How to Hire a Roofing Contractor' },
    { path: '/frequently-asked-questions', title: 'Frequently Asked Questions' }
  ];

  servicePages.forEach(({ path: pagePath, title }) => {
    const metadata = getSEOMetadata(pagePath);

        // Build JSON-LD schema array for pages that have FAQ/Breadcrumb data
    let jsonLdSchema = null;
    const schemaConfig = SERVICE_PAGE_SCHEMAS[pagePath];
    if (schemaConfig) {
      jsonLdSchema = [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: schemaConfig.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer', text: faq.answer
            }
          }))
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: schemaConfig.breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url
          }))
        }
      ];
    }
    const html = createHTMLTemplate(
      metadata.title || title,
      metadata.description || `Professional ${title.toLowerCase()} from All Phase Construction USA`,
      metadata.canonical || `https://allphaseconstructionfl.com${pagePath}`,
      pagePath === '/roofing-services' ? generateRoofingServicesContent() : defaultServicePageContent(title),
      jsonLdSchema
    );

    const dir = path.join(publicDir, pagePath.substring(1));
    const filePath = path.join(dir, 'index.html');
    console.log(`🔍 DEBUG: Writing service page to: ${filePath}`);
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, html);
      console.log(`✓ Generated: dist${pagePath}/index.html`);
      console.log(`  File exists? ${fs.existsSync(filePath)}, Size: ${fs.statSync(filePath).size} bytes`);
    } catch (err) {
      console.error(`❌ ERROR writing ${pagePath}:`, err);
    }
    totalPages++;
  });


    // Roof Replacement - Custom Service Page
  const roofReplacementDir = path.join(distDir, 'roof-replacement');
  fs.mkdirSync(roofReplacementDir, { recursive: true });
  const roofReplacementContent = `
<h1>Roof Replacement Contractor in South Florida | All Phase Construction USA</h1>
<p>All Phase Construction USA is a licensed roof replacement contractor serving Broward County and Palm Beach County. We specialize in HVHZ-compliant tile, metal, shingle, and flat roof replacement systems engineered for South Florida hurricane conditions.</p>
<p>As a dual-licensed contractor (CCC-1331464 & CGC-1526236), we provide structural engineering oversight on every roof replacement project. Call (754) 227-5605 for a free estimate.</p>

${companyAuthorityFooter()}
`.trim();
  fs.writeFileSync(path.join(roofReplacementDir, 'index.html'), createHTMLTemplate(
    'Roof Replacement South Florida | Licensed Contractor | All Phase',
    'Licensed roof replacement contractor in South Florida. Serving Broward & Palm Beach County. HVHZ-compliant. Tile, metal, shingle & flat. Free estimates. Call (754) 227-5605.',
    'https://allphaseconstructionfl.com/roof-replacement',
    roofReplacementContent
  ));
  console.log('✅ Prerendered: roof-replacement/index.html');
  totalPages++;
  // 2.3. Generate Additional Location Pages (not in main LOCATIONS array)
  console.log('\n📍 Generating Additional Location Pages...\n');

  const additionalLocations = [
    { path: '/locations/gulf-stream', title: 'Gulf Stream, FL Roofing Services', city: 'Gulf Stream' },
    { path: '/locations/jupiter', title: 'Jupiter, FL Roofing Services', city: 'Jupiter' },
    { path: '/locations/lake-worth-beach', title: 'Lake Worth Beach, FL Roofing Services', city: 'Lake Worth Beach' },
    { path: '/locations/loxahatchee-groves', title: 'Loxahatchee Groves, FL Roofing Services', city: 'Loxahatchee Groves' },
    { path: '/locations/pembroke-park', title: 'Pembroke Park, FL Roofing Services', city: 'Pembroke Park' }
  ];

  additionalLocations.forEach(({ path: pagePath, title, city }) => {
    const canonical = `https://allphaseconstructionfl.com${pagePath}`;
    const description = `Professional roofing services in ${city}, Florida. Expert roof installation, repair, and maintenance from All Phase Construction USA. Licensed, insured, and serving South Florida.`;

    const content = `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
  <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2;">
    Professional Roofing Services in ${city}, Florida
  </h1>

  <p style="color: #374151; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">
    All Phase Construction USA provides expert roofing services to ${city} residents and businesses. As a dual-licensed contractor (CCC-1331464 & CGC-1526236), we bring over two decades of roofing expertise to South Florida, ensuring every project meets the highest standards of quality and hurricane compliance.
  </p>

  <div style="background: #f9fafb; padding: 2rem; border-left: 4px solid #dc2626; margin: 2rem 0;">
    <h2 style="color: #111827; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Our ${city} Roofing Services</h2>
    <ul style="color: #374151; font-size: 1.05rem; line-height: 2; margin: 0; padding-left: 1.5rem;">
      <li><strong>Roof Repair</strong> — Emergency and scheduled repairs for all roof types</li>
      <li><strong>Roof Replacement</strong> — Complete reroof with HVHZ-compliant materials</li>
      <li><strong>Roof Inspection</strong> — Thorough assessments for insurance and peace of mind</li>
      <li><strong>Preventive Maintenance</strong> — Programs to extend your roof's lifespan</li>
    </ul>
  </div>

  <h2 style="color: #111827; font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem;">Why Choose All Phase Construction USA?</h2>

  <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
    Based in nearby Deerfield Beach, we've served the ${city} community for over 20 years. Our team understands South Florida's unique roofing challenges, from hurricane-force winds to intense UV exposure and heavy rainfall. Every roof we install or repair is built to protect your property for decades.
  </p>

  <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 3rem 0;">
    <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Schedule Your Free Roofing Consultation</h3>
    <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact All Phase Construction USA today for expert roofing service in ${city}.</p>
    <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
  </div>

  ${companyAuthorityFooter()}
</section>
    `.trim();

    const html = createHTMLTemplate(title, description, canonical, content);
    const dir = path.join(publicDir, pagePath.substring(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`✓ Generated: dist${pagePath}/index.html`);
    totalPages++;
  });

  // 2.4. Generate Top-5-Roofer Service Area Pages
  console.log('\n🏆 Generating Top-5-Roofer Service Area Pages...\n');

  const topRooferPages = [
    { path: '/locations/deerfield-beach/service-area/boca-raton/top-5-roofer', city: 'Boca Raton' },
    { path: '/locations/deerfield-beach/service-area/boynton-beach/top-5-roofer', city: 'Boynton Beach' },
    { path: '/locations/deerfield-beach/service-area/broward-county/top-5-roofer', city: 'Broward County' },
    { path: '/locations/deerfield-beach/service-area/coconut-creek/top-5-roofer', city: 'Coconut Creek' },
    { path: '/locations/deerfield-beach/service-area/fort-lauderdale/top-5-roofer', city: 'Fort Lauderdale' },
    { path: '/locations/deerfield-beach/service-area/palm-beach-county/top-5-roofer', city: 'Palm Beach County' },
    { path: '/locations/deerfield-beach/service-area/west-palm-beach/top-5-roofer', city: 'West Palm Beach' }
  ];

  topRooferPages.forEach(({ path: pagePath, city }) => {
    const canonical = `https://allphaseconstructionfl.com${pagePath}`;
    const title = `Top 5 Roofer in ${city}, FL | All Phase Construction USA`;
    const description = `All Phase Construction USA ranks among the top 5 roofers in ${city}, Florida. Dual-licensed (CCC & CGC), A+ BBB rated, and trusted by thousands of South Florida homeowners.`;

    const content = `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
  <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2;">
    Top 5 Roofer in ${city}, Florida
  </h1>

  <p style="color: #374151; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">
    All Phase Construction USA is proud to be recognized as one of the top 5 roofing contractors serving ${city}. With over 20 years of experience, dual licensing (CCC-1331464 & CGC-1526236), and an A+ BBB rating, we've earned the trust of thousands of South Florida homeowners and businesses.
  </p>

  <div style="background: #f9fafb; padding: 2rem; border-left: 4px solid #dc2626; margin: 2rem 0;">
    <h2 style="color: #111827; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">What Makes Us a Top-Rated Roofer?</h2>
    <ul style="color: #374151; font-size: 1.05rem; line-height: 2; margin: 0; padding-left: 1.5rem;">
      <li><strong>Dual Licensing</strong> — Both roofing (CCC) and general contracting (CGC) licenses</li>
      <li><strong>HVHZ Certified</strong> — Approved for High-Velocity Hurricane Zone installations</li>
      <li><strong>Manufacturer Warranties</strong> — Premium warranties on all materials and workmanship</li>
      <li><strong>Local Expertise</strong> — Based in Deerfield Beach, serving South Florida since 2003</li>
      <li><strong>A+ BBB Rating</strong> — Consistent 5-star reviews and customer satisfaction</li>
    </ul>
  </div>

  <h2 style="color: #111827; font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem;">Comprehensive Roofing Services</h2>

  <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
    From emergency roof repairs to complete roof replacements, All Phase Construction USA delivers superior workmanship on every project. We specialize in all roofing systems including asphalt shingles, metal roofing, tile roofing, and flat roof systems (TPO & PVC).
  </p>

  <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 3rem 0;">
    <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Experience Top-Tier Roofing Service</h3>
    <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact one of ${city}'s top-rated roofing contractors today for a free consultation.</p>
    <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
  </div>

  ${companyAuthorityFooter()}
</section>
    `.trim();

    const html = createHTMLTemplate(title, description, canonical, content);
    const dir = path.join(publicDir, pagePath.substring(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`✓ Generated: dist${pagePath}/index.html`);
    totalPages++;
  });

  // 2.5. Generate Blog Post Pages from Sitemap
  console.log('\n📝 Generating Blog Post Pages from Sitemap...\n');

  try {
    const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

      // Extract all blog URLs from sitemap
      const blogUrlMatches = sitemapContent.match(/<loc>https:\/\/allphaseconstructionfl\.com\/blog\/([^<]+)<\/loc>/g);

      if (blogUrlMatches && blogUrlMatches.length > 0) {
        const blogSlugs = blogUrlMatches
          .map(match => {
            const urlMatch = match.match(/\/blog\/([^<]+)</);
            return urlMatch ? urlMatch[1].replace(/\/$/, '') : null;
          })
          .filter(slug => slug && slug !== 'index.html');

        console.log(`Found ${blogSlugs.length} blog posts in sitemap\n`);

        blogSlugs.forEach(slug => {
          // Generate title from slug
          const blogTitle = slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          const blogCanonical = `https://allphaseconstructionfl.com/blog/${slug}`;
          const blogDescription = `Expert roofing insights on ${blogTitle.toLowerCase()} from All Phase Construction USA, South Florida's dual-licensed roofing contractor.`;

          const blogContent = `
<section id="seo-static-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <article>
    <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.2;">${blogTitle}</h1>

    <p style="color: #6b7280; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">${blogDescription}</p>

    <div style="background: #f9fafb; padding: 2rem; border-left: 4px solid #dc2626; margin: 2rem 0;">
      <p style="color: #374151; font-size: 1rem; line-height: 1.75; margin: 0;">
        <strong>Expert Roofing Insights</strong> from All Phase Construction USA — Your trusted dual-licensed roofing contractor serving Broward and Palm Beach County.
      </p>
    </div>

    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
      At All Phase Construction USA, we bring decades of roofing expertise to South Florida homeowners and businesses. As a dual-licensed contractor (CCC-1331464 & CGC-1526236), we understand both roofing systems and structural engineering, ensuring every project meets the highest standards of quality and hurricane compliance.
    </p>

    <h2 style="color: #111827; font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem;">Professional Roofing Services</h2>
    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
      Whether you need roof repair, roof replacement, roof inspection, or preventive maintenance, our team delivers HVHZ-compliant workmanship backed by manufacturer warranties and our A+ BBB rating.
    </p>

    <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 3rem 0;">
      <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Need Professional Roofing Service?</h3>
      <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact All Phase Construction USA for expert roofing services in Broward and Palm Beach County.</p>
      <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
    </div>
  </article>

  ${companyAuthorityFooter()}
</section>
          `.trim();

          const blogHTML = createHTMLTemplate(
            `${blogTitle} | All Phase USA Blog`,
            blogDescription,
            blogCanonical,
            blogContent
          );

          const blogDir = path.join(publicDir, 'blog', slug);
          fs.mkdirSync(blogDir, { recursive: true });
          fs.writeFileSync(path.join(blogDir, 'index.html'), blogHTML);
          console.log(`✓ Generated: dist/blog/${slug}/index.html`);
          totalPages++;
        });
      } else {
        console.log('ℹ️ No blog posts found in sitemap\n');
      }
    } else {
      console.log('⚠️ Sitemap not found at public/sitemap.xml\n');
    }
  } catch (err) {
    console.log('⚠️ Error generating blog posts:', err.message);
  }

  // 3. Generate 3-Silo City Pages for all cities
  const priorityCities = ['boca-raton', 'fort-lauderdale', 'coral-springs', 'pompano-beach',
                          'west-palm-beach', 'delray-beach', 'boynton-beach', 'deerfield-beach',
                          'parkland', 'coconut-creek', 'wellington'];

  console.log('\n📍 Generating Location Pages from Single Source of Truth...\n');

  // Generate /locations/:slug pages from LOCATIONS (single source of truth)
  LOCATIONS.forEach((location) => {
    const { slug, city, state } = location;

    // Build SEO from single source of truth
    const seo = buildLocationSeo(location);

    // Special content for specific cities
    let hubContent, hubSchema = null;

    if (slug === 'boca-raton') {
      hubContent = generateBocaRatonServiceHubContent();
    } else if (slug === 'deerfield-beach') {
      hubContent = generateDeerfieldBeachHQContent();
      hubSchema = generateDeerfieldBeachSchema();
    } else {
      hubContent = generateServiceHubContent(city, slug);
    }

    const hubHTML = createHTMLTemplate(
      seo.title,
      seo.description,
      seo.canonical,
      hubContent,
      hubSchema,
      seo.ogDescription
    );

    // Write to both public/ and dist/ (if dist exists)
    writeToPublicAndDist(`locations/${slug}/index.html`, hubHTML);
    console.log(`✓ Generated: dist/locations/${slug}/index.html`);
    totalPages++;
  });

  console.log('\n📍 Generating 3-Silo City Pages (Repair + Inspection spokes)...\n');

  // Generate /roof-repair/:slug and /roof-inspection/:slug pages
  cities.forEach(({ slug, city }) => {
    const cityName = city;
    const citySlug = slug;

    // Skip county-level entries for now
    if (citySlug.includes('county')) return;

    // SILO 2: Roof Repair - /roof-repair/[city]
    const repairPath = `/roof-repair/${citySlug}`;
    const repairMetadata = getSEOMetadata(repairPath, cityName);
    const repairHTML = createHTMLTemplate(
      repairMetadata.title,
      repairMetadata.description,
      repairMetadata.canonical,
      generateRoofRepairContent(cityName, citySlug)
    );
    const repairDir = path.join(publicDir, 'roof-repair', citySlug);
    fs.mkdirSync(repairDir, { recursive: true });
    fs.writeFileSync(path.join(repairDir, 'index.html'), repairHTML);
    console.log(`✓ Generated: dist/roof-repair/${citySlug}/index.html`);
    totalPages++;

    // SILO 3: Roof Inspection - /roof-inspection/[city]
    const inspectionPath = `/roof-inspection/${citySlug}`;
    const inspectionMetadata = getSEOMetadata(inspectionPath, cityName);
    const inspectionHTML = createHTMLTemplate(
      inspectionMetadata.title,
      inspectionMetadata.description,
      inspectionMetadata.canonical,
      generateRoofInspectionContent(cityName, citySlug)
    );
    const inspectionDir = path.join(publicDir, 'roof-inspection', citySlug);
    fs.mkdirSync(inspectionDir, { recursive: true });
    fs.writeFileSync(path.join(inspectionDir, 'index.html'), inspectionHTML);
    console.log(`✓ Generated: dist/roof-inspection/${citySlug}/index.html`);
    totalPages++;
  });



    // Best Roofers Deerfield Beach - Premium Money Page
  const bestRoofersDFBDir = path.join(distDir, 'locations/deerfield-beach/best-roofers-deerfield-beach');
  fs.mkdirSync(bestRoofersDFBDir, { recursive: true });
  const bestRoofersDFBContent = `
  <h1>Top 5 Best Rated Roofers in Deerfield Beach, FL (2026)</h1>
  <p>Finding a roofer in Deerfield Beach you can actually trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records.</p>
  <h2>Finding a Roofer in Deerfield Beach You Can Actually Trust</h2>
  <p>All Phase Construction USA is headquartered at 590 Goolsby Blvd, Deerfield Beach, FL 33442. Dual licensed: CCC-1331464 (Roofing Contractor) &amp; CGC-1526236 (General Contractor). Rated 4.8/5 from 138 verified reviews. Call (754) 227-5605 for a free roof assessment.</p>
`;
  fs.writeFileSync(path.join(bestRoofersDFBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Deerfield Beach FL (2026) | All Phase',
    'Looking for the best roofers in Deerfield Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach',
    bestRoofersDFBContent
  ));
  console.log('✅ Prerendered: locations/deerfield-beach/best-roofers-deerfield-beach/index.html');
  // ============================================================
  // REGRESSION SAFEGUARD: Verify dist/index.html wasn't corrupted
  // ============================================================
  const distIndex = path.join(distDir, 'index.html');
  if (fs.existsSync(distIndex)) {
    const distHTML = fs.readFileSync(distIndex, 'utf-8');
    if (distHTML.includes('/src/main.tsx')) {
      throw new Error(
        '❌ REGRESSION: dist/index.html references /src/main.tsx!\n' +
        'The Vite production build was overwritten with dev content.\n' +
        'This would break the live site. Build aborted.'
      );
    }
    if (!distHTML.includes('/assets/')) {
      throw new Error(
        '❌ REGRESSION: dist/index.html missing /assets/ references!\n' +
        'Production Vite bundles are gone. Build aborted.'
      );
    }
    console.log('\n✅ Safeguard passed: dist/index.html contains production assets');
  }

    // ============================================================
  // REGRESSION SAFEGUARD 2: Verify location pages have non-empty root
  // ============================================================
  const locationsDistDir = path.join(distDir, 'locations');
  if (fs.existsSync(locationsDistDir)) {
        // Only check locations that are in the LOCATIONS array (single source of truth)
    const locationSlugs = LOCATIONS.map(loc => loc.slug);
    for (const slug of locationSlugs) {
      const locationIndexPath = path.join(locationsDistDir, slug, 'index.html');
      if (fs.existsSync(locationIndexPath)) {
        const locationHTML = fs.readFileSync(locationIndexPath, 'utf-8');
        // FAIL if root is empty (prerender content not injected inside root)
                if (locationHTML.includes('<div id="root"></div>')) {
          throw new Error(
            `❌ REGRESSION: dist/locations/${slug}/index.html has EMPTY root!\n` +
            'Prerender content must be injected INSIDE <div id="root">, not outside.\n' +
            'Build aborted.'
          );
        }
      }
    }
    console.log('\n✅ Safeguard 2 passed: All location pages have non-empty root divs');
  }
console.log(`\n✅ Prerender Complete! Generated ${totalPages} fully-branded HTML pages.`);
  console.log(`\n📊 Architecture Breakdown:`);
  console.log(`   - Homepage: 1 page`);
  console.log(`   - Service Pages: ${servicePages.length} pages`);
  console.log(`   - City Service Hubs: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`   - City Roof Repairs: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`   - City Roof Inspections: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`\n🎯 Lead Generation Structure:`);
  console.log(`   ✅ Service Hubs: /locations/[city] → Broad authority`);
  console.log(`   ✅ Repair Spokes: /roof-repair/[city] → High-intent leads`);
  console.log(`   ✅ Inspection Spokes: /roof-inspection/[city] → Top-of-funnel leads`);
  console.log(`\n💼 Every page includes:`);
  console.log(`   ✅ 500-700 words of branded content`);
  console.log(`   ✅ Inter-page lead-gen links (Hub ↔ Repair ↔ Inspection)`);
  console.log(`   ✅ Dual-licensing emphasis (CCC & CGC)`);
  console.log(`   ✅ HVHZ certification messaging`);
  console.log(`   ✅ "Serving from Deerfield Beach HQ" context`);
  console.log(`   ✅ Company authority footer (250+ words)`);
}

// Run the generator
generateStaticFiles();

// Copy IndexNow key file to dist
fs.copyFileSync('public/1864f0fe7c93447e946f774adbe8e54a.txt', 'dist/1864f0fe7c93447e946f774adbe8e54a.txt');
console.log('IndexNow key file copied to dist');
