import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'dist'); // Changed from 'public' - prerender to dist for Netlify deployment
const distDir = path.resolve(projectRoot, 'dist');

console.log('Ã°ÃÃÃ DEBUG: Directory paths:');
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
  const defaultTitle = `${city} Roofing Contractor | All Phase USA`;
  const defaultDescription = `Licensed roofing contractor in ${city}, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections. (754) 227-5605.`;
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
      Ã°ÃÃÃ <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/deerfield-beach" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast Deerfield Beach Repair Service</a> ÃÂ¢ÃÃ Active leaks, storm damage, emergency tarping available 24/7
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      Ã°ÃÃÃ <strong>Free Professional Roof Inspections:</strong> <a href="/roof-inspection/deerfield-beach" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point Deerfield Beach Roof Inspection</a> ÃÂ¢ÃÃ Comprehensive assessment with photo documentation
    </p>
  </div>

  <h2>Your Deerfield Beach Headquarters for Expert Roofing</h2>
  <p>All Phase Construction USA has established its primary operations at 590 Goolsby Blvd in Deerfield Beach, strategically positioned to serve all of South Florida. As a locally-owned and operated roofing company, we understand the unique challenges Deerfield Beach properties face including salt air corrosion, hurricane exposure, and intense UV degradation. Our Deerfield Beach headquarters enables same-day inspection availability, rapid emergency response, and consistent oversight of every project throughout Broward and Palm Beach Counties.</p>

  <h2>Why Deerfield Beach Property Owners Choose All Phase Construction USA</h2>
  <p>What sets us apart from standard roofing contractors operating in Deerfield Beach:</p>

  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Dual-Licensed Roofing Authority:</strong> We hold both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses. This dual-licensing provides structural engineering oversight that standard CCC-only contractors cannot match. Our CGC license means we understand building structure, load-bearing requirements, and comprehensive building code compliance ÃÂ¢ÃÃ not just roofing materials and installation.</li>
    <li><strong>HVHZ Certified & Hurricane Compliant:</strong> Every Deerfield Beach installation meets High Velocity Hurricane Zone (HVHZ) compliance with 175+ mph wind ratings, enhanced fastening schedules, and reinforced roof-to-wall connections. We specialize in hurricane-resistant roofing systems engineered to protect your property during severe weather events.</li>
    <li><strong>Local Deerfield Beach Presence:</strong> Operating from our Deerfield Beach headquarters at 590 Goolsby Blvd enables rapid response to emergency calls, same-day inspection scheduling, and direct contractor oversight on every project. We're not a remote franchise ÃÂ¢ÃÃ we're your local roofing experts.</li>
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
          <span style="color: #fbbf24; font-size: 1.25rem;">ÃÂ¢ÃÃÃÂ¢ÃÃÃÂ¢ÃÃÃÂ¢ÃÃÃÂ¢ÃÃ</span>
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
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">ÃÂ¢ÃÃ</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Fully Licensed & Insured</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Licensed, insured, and bonded for your complete peace of mind</p>
          </div>
        </div>

        <!-- Benefit Block 2 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">ÃÂ¢ÃÃ</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">In-House Expert Team</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">All work performed by our trained, professional roofing crew</p>
          </div>
        </div>

        <!-- Benefit Block 3 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">ÃÂ¢ÃÃ</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Local Boca Raton Expertise</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Years of experience serving Boca Raton homeowners</p>
          </div>
        </div>

        <!-- Benefit Block 4 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">ÃÂ¢ÃÃ</div>
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
      As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damageÃÂ¢ÃÃcrucial for maintaining the safety and comfort of your home.
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
          <div style="color: #fbbf24; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">4.8ÃÂ¢ÃÃ</div>
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
            <span style="color: #dc2626; font-weight: bold;">ÃÂ¢ÃÃ</span>
            <span>Photos of key roof areas (edges, penetrations, valleys, transitions)</span>
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">ÃÂ¢ÃÃ</span>
            <span>Clear notes on what is failed vs what is aging</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">ÃÂ¢ÃÃ</span>
            <span>A recommendation that matches the roof's condition and your timeline</span>
          </li>
        </ul>
      </div>

      <!-- Repair vs Replacement -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-top: 4px solid #dc2626;">
        <h3 style="color: #111827; font-size: 1.3rem; font-weight: 700; margin-bottom: 1.5rem;">Repair vs Replacement (How We Decide):</h3>
        <div style="margin-bottom: 1.5rem;">
          <div style="color: #059669; font-weight: 700; margin-bottom: 0.5rem;">ÃÂ¢ÃÃ Repair When:</div>
          <p style="color: #374151; margin: 0; padding-left: 1.5rem;">The system is stable and failures are isolated</p>
        </div>
        <div>
          <div style="color: #dc2626; font-weight: 700; margin-bottom: 0.5rem;">ÃÂ¢ÃÃÂ  Replace When:</div>
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
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">ÃÂ¢ÃÃ</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Roof inspections and leak investigations</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">ÃÂ¢ÃÃ</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Roof repair (tile, shingle, metal, flat)</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">ÃÂ¢ÃÃ</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Full roof replacement and reroofing</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">ÃÂ¢ÃÃ</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Storm and hurricane damage assessments</span>
        </li>
        <li style="padding: 1.25rem 0; display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">ÃÂ¢ÃÃ</span>
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
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">ÃÂ¢ÃÃÂ¢</span>
            <span style="font-size: 1rem; line-height: 1.6;">Cracked or slipped tiles exposing underlayment</span>
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">ÃÂ¢ÃÃÂ¢</span>
            <span style="font-size: 1rem; line-height: 1.6;">Nail pops and lifted shingles</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">ÃÂ¢ÃÃÂ¢</span>
            <span style="font-size: 1rem; line-height: 1.6;">Failed pipe boots and vent flashings</span>
          </li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">ÃÂ¢ÃÃÂ¢</span>
            <span style="font-size: 1rem; line-height: 1.6;">Valley and wall transition leaks</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem; align-items: start;">
            <span style="color: #dc2626; font-weight: bold; font-size: 1.2rem; flex-shrink: 0;">ÃÂ¢ÃÃÂ¢</span>
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
      Ã°ÃÃÃ <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast ${cityName} Repair Service</a> ÃÂ¢ÃÃ Active leaks, storm damage, emergency tarping
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      Ã°ÃÃÃ <strong>Professional Roof Inspections:</strong> <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point ${cityName} Roof Inspection</a> ÃÂ¢ÃÃ Free estimates, insurance documentation
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
    <p style="margin-bottom: 0.5rem; color: #7f1d1d; font-weight: bold;">Ã°ÃÃÃ Call (754) 227-5605 for Same-Day Emergency Service</p>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">Active leaks, storm damage, missing shingles, and emergency tarping available throughout ${cityName}.</p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      Ã°ÃÃÃÂ¡ <strong>Not sure if you need a repair?</strong> Start with our <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">professional ${cityName} roof inspection</a> ÃÂ¢ÃÃ free estimates included.
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
    <li><strong>Dual-Licensed Expertise:</strong> Our CCC and CGC licenses mean we assess structural integrity alongside surface repairs ÃÂ¢ÃÃ critical for identifying hidden damage that standard roofers miss.</li>
    <li><strong>Same-Day Emergency Response:</strong> Our Deerfield Beach headquarters enables rapid deployment to ${cityName} emergency repair calls with fully-equipped service vehicles.</li>
    <li><strong>Insurance Documentation:</strong> We provide detailed photo documentation, moisture readings, and scope-of-work reports that support ${cityName} insurance claim submissions.</li>
    <li><strong>Permanent Solutions:</strong> We address root causes, not just symptoms, ensuring repairs last and preventing recurring problems.</li>
  </ul>

  <h2>The All Phase Construction USA Repair Process</h2>
  <p>Our ${cityName} roof repair service follows a proven diagnostic and repair protocol:</p>
  <ol style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Emergency Response:</strong> We deploy to ${cityName} locations within hours for active leaks and storm damage emergencies.</li>
    <li><strong>Comprehensive Inspection:</strong> Our technicians perform thorough roof inspections to identify all damage ÃÂ¢ÃÃ not just obvious problems.</li>
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
    <p style="margin-bottom: 0.5rem; color: #064e3b; font-weight: bold;">Ã°ÃÃÃ Includes: Photo Documentation, Written Report, Cost Estimate</p>
    <p style="margin-bottom: 1rem; color: #064e3b;">Call (754) 227-5605 to schedule your professional ${cityName} roof inspection. Same-day availability throughout Broward and Palm Beach Counties.</p>
    <p style="margin-bottom: 0; color: #064e3b;">
      Ã°ÃÃÃÂ§ <strong>Already know you need repairs?</strong> <a href="/roof-repair/${citySlug}" style="color: #059669; text-decoration: underline; font-weight: bold;">Get fast ${cityName} roof repair service</a>.
    </p>
  </div>

  <h2>Why ${cityName} Property Owners Choose Our Inspection Service</h2>
  <p>All Phase Construction USA's ${cityName} roof inspections go beyond surface-level assessments. Our dual-licensed expertise (CCC & CGC) means we evaluate <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">structural integrity, building code compliance</a>, and long-term performance ÃÂ¢ÃÃ not just shingle condition.</p>

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
 * CUSTOM: Shingle Roofing Page - /shingle-roofing
 * Rich prerender content matching ShingleRoofingPage.tsx (1,256 lines)
 */
function generateShingleRoofingContent() {
  return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem; background: white; color: #111827;">
  <h1 style="font-size: 2.5rem; font-weight: bold; color: #111827; margin-bottom: 1.5rem; line-height: 1.2;">
    Shingle Roofing Done Right — With Documentation That Saves You Money on Insurance
  </h1>

  <p style="font-size: 1.25rem; color: #374151; line-height: 1.75; margin-bottom: 2rem;">
    Most shingle roofs in South Florida are installed to minimum code — then forgotten. We upgrade underlayments, address ventilation, and document everything during installation. That documentation translates directly into insurance discounts you won't get from a typical roofer.
  </p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <p style="font-size: 1.125rem; font-weight: 600; color: #991b1b; margin-bottom: 0.5rem;">
      Free Shingle Roof Consultation: <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
    <p style="color: #374151; line-height: 1.75;">
      Licensed roofing contractor serving Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    The Real Problem: Thermal Shock Damage in South Florida
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Asphalt shingles in South Florida face a brutal reality: <strong>surface temperatures exceeding 160°F during summer months</strong>. But the real damage doesn't come from the sun alone — it's the combination of radiant heat from above and superheated attic air from below that creates thermal shock conditions.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    When your attic becomes a <strong>furnace (140°F+ in poorly ventilated spaces)</strong>, asphalt shingles are literally cooked from both sides. This accelerates granule loss, causes premature brittleness, and reduces your shingle roof's expected lifespan by <strong>30-50%</strong> compared to moderate climates.
  </p>

  <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #92400e; margin-bottom: 0.75rem;">Why Most Contractors Skip This</h3>
    <p style="color: #374151; line-height: 1.75;">
      Proper attic ventilation requires soffit vents, ridge vents, and sometimes powered exhaust fans. It adds cost and complexity. Most contractors install the bare minimum required by code, then move on to the next job. The shingles look fine at installation — but the accelerated aging starts immediately.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Installation Quality: What Actually Matters
  </h2>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    1. Six-Nail Patterns vs. Four-Nail Shortcuts
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Florida Building Code requires six nails per shingle in high-wind areas and on steep slopes (7:12 pitch or greater). But here's the catch: four nails will pass inspection on most residential roofs. Contractors rushing through jobs stick with four nails because it's 33% faster.
  </p>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The consequence?</strong> Reduced wind resistance. In a Category 3 hurricane, those missing nails are the difference between minor uplift damage and catastrophic shingle blow-off.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    2. Proper Deck Re-Nailing (The Hidden Requirement)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    When you replace a shingle roof, Florida's HVHZ requirements mandate that the roof deck itself must be re-nailed to current standards — typically 8d ring-shank nails at 6 inches on-center along the perimeter and 12 inches in the field.
  </p>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Why contractors skip it:</strong> You can't see deck attachment once the roof is on. It's labor-intensive. And building inspectors don't tear off your new roof to verify it was done. But that deck attachment is what keeps your entire roof structure from separating during extreme wind events.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    3. Premium Underlayment Upgrades
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Code requires basic #30 felt or synthetic underlayment. But a <strong>self-adhered secondary water barrier</strong> (applied at eaves, valleys, and penetrations) provides real protection if shingles blow off during a storm — and qualifies you for significant insurance discounts.
  </p>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Here's the problem:</strong> If you don't document this upgrade with photos during installation, a wind mitigation inspector visiting your completed roof marks "unknown" on the OIR-B1-1802 form. That means no insurance discount — even though you paid for the upgrade.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Wind Mitigation Documentation: Why It Must Happen During Installation
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Florida's wind mitigation inspection form (OIR-B1-1802) asks about roof deck attachment, secondary water barrier, roof-to-wall connections, and other features that <strong>cannot be verified once the roof is complete</strong>.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Most homeowners hire an inspector after the roof is done. The inspector takes photos of the finished roof, shrugs, and marks "unknown" for anything they can't see. You lose thousands in potential insurance savings.
  </p>

  <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #166534; margin-bottom: 0.75rem;">How We Handle It</h3>
    <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
      We photograph every wind mitigation feature <strong>during installation</strong> — before it's covered up. That includes:
    </p>
    <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
      <li>Roof deck attachment with ring-shank nails at code-required spacing</li>
      <li>Secondary water barrier application at eaves and valleys</li>
      <li>Hurricane straps and clips connecting roof to walls</li>
      <li>Proper flashing details at penetrations and transitions</li>
    </ul>
    <p style="color: #374151; line-height: 1.75;">
      You receive this documentation package at project completion. Hand it to your wind mitigation inspector or insurance agent — they mark "verified" instead of "unknown," and your premium drops accordingly.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Dual Licensing Matters for Shingle Roofs
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction USA holds both <strong>State Certified Roofing Contractor (CCC-1331464)</strong> and <strong>Certified General Contractor (CGC-1526236)</strong> licenses. Here's why that matters for your shingle roof:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Structural Assessment:</strong> A CCC-only contractor can replace your roof. But if there's truss damage, inadequate framing, or structural concerns, they must stop work and call a general contractor. We handle both — no project delays.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Permit Authority:</strong> CGC licensing gives us broader permit-pulling authority, which matters when structural repairs coincide with roof replacement.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Insurance Claims:</strong> When insurance companies dispute structural vs. roofing damage, dual licensing means we can provide authoritative assessment and complete repairs under one scope.</li>
  </ul>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Shingle Roofing Investment Range
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Residential shingle roof replacement in Broward and Palm Beach Counties typically ranges from <strong>$15,000 to $50,000+</strong> depending on:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li>Home size and roof complexity (hip vs. gable, pitch, valleys)</li>
    <li>Shingle grade (architectural vs. luxury vs. Class 4 impact-rated)</li>
    <li>Underlayment upgrades (basic synthetic vs. premium self-adhered)</li>
    <li>Deck condition and required re-nailing/replacement</li>
    <li>Ventilation system upgrades (soffit vents, ridge vents, attic fans)</li>
    <li>HVHZ compliance features and documentation</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    We provide transparent, itemized estimates showing exactly what you're paying for — including the upgrades that will save you money on insurance.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Related Roofing Services
  </h2>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 0.5rem;"><a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Professional Roof Inspection</a> — Comprehensive 21-point evaluation including ventilation assessment and HVHZ compliance verification</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Emergency Roof Repair</a> — Shingle blow-off, leak detection, flashing repair, and storm damage restoration</li>
    <li style="margin-bottom: 0.5rem;"><a href="/residential-roofing" style="color: #dc2626; text-decoration: underline;">Residential Roofing Services</a> — Complete home roofing solutions for South Florida properties</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Roof Replacement Process</a> — What to expect during your shingle roof replacement project</li>
    <li style="margin-bottom: 0.5rem;"><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Metal Roofing</a> — Compare metal vs. shingle performance for South Florida hurricanes</li>
    <li style="margin-bottom: 0.5rem;"><a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">Tile Roofing</a> — Concrete and clay tile installation with HVHZ compliance</li>
  </ul>

  <div style="background: #f3f4f6; border: 2px solid #dc2626; padding: 2rem; margin: 3rem 0; border-radius: 8px; text-align: center;">
    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">
      Schedule Your Free Shingle Roof Consultation
    </h3>
    <p style="font-size: 1.125rem; color: #374151; margin-bottom: 1.5rem;">
      Licensed roofing contractor serving Broward County and Palm Beach County. CCC-1331464 | CGC-1526236
    </p>
    <p style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">
      Call <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Metal Roofing Page - /metal-roofing
 * Rich prerender content matching MetalRoofingPage.tsx (1,240 lines)
 */
function generateMetalRoofingContent() {
  return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem; background: white; color: #111827;">
  <h1 style="font-size: 2.5rem; font-weight: bold; color: #111827; margin-bottom: 1.5rem; line-height: 1.2;">
    Metal Roofing That's Actually Engineered for South Florida Hurricanes
  </h1>

  <p style="font-size: 1.25rem; color: #374151; line-height: 1.75; margin-bottom: 2rem;">
    Not all metal roofs are created equal. The difference between a roof that survives a Category 5 and one that peels off in a tropical storm comes down to details most contractors skip: gauge thickness, clip spacing, seam type, and how thermal expansion is managed. We build metal roofs that perform.
  </p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <p style="font-size: 1.125rem; font-weight: 600; color: #991b1b; margin-bottom: 0.5rem;">
      Free Metal Roof Consultation: <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
    <p style="color: #374151; line-height: 1.75;">
      HVHZ-certified metal roofing contractor. Licensed in Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Metal Roofing Performance Varies So Widely in Florida
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Metal roofs in South Florida face two extreme forces that work against each other: <strong>175+ mph hurricane winds</strong> trying to tear the roof off, and <strong>daily thermal expansion cycles</strong> from temperature swings of 80°F or more between night and day.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    A metal roof must be anchored tightly enough to resist wind uplift — but flexible enough to expand and contract without tearing fasteners loose or buckling panels. This is <strong>engineering, not installation</strong>. And most roofing contractors don't understand the difference.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Standing Seam vs. Exposed Fastener: What Actually Matters
  </h2>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Standing Seam Metal Roofing (The Premium Choice)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Standing seam systems use <strong>concealed clips</strong> that allow panels to float and expand without stressing fasteners. The panels are mechanically seamed or snapped together, creating continuous waterproof ribs that run from ridge to eave.
  </p>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Why it performs better:</strong> The clips are attached to the roof deck, but the panels themselves slide within the clip as they expand. This means thermal stress doesn't transfer to fasteners. Wind uplift is resisted by the continuous seam — not individual screws.
  </p>

  <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">Standing Seam Wind Rating</h4>
    <p style="color: #374151; line-height: 1.75;">
      Properly installed standing seam metal roofs are rated for <strong>150-200+ mph wind speeds</strong> when using 24-gauge or thicker panels with clips spaced per engineering specifications. This exceeds South Florida's 175 mph HVHZ requirements with margin to spare.
    </p>
  </div>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Exposed Fastener Systems (Budget-Friendly Alternative)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Exposed fastener metal roofs use screws driven directly through the panels into the roof deck. They're less expensive, faster to install, and suitable for many applications — but require more maintenance and careful fastener selection.
  </p>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The thermal expansion problem:</strong> As panels expand and contract, they move against the screws. If screws are over-tightened or rubber washers degrade, you get leaks. This is why exposed fastener roofs require periodic fastener inspection and re-sealing.
  </p>

  <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #92400e; margin-bottom: 0.5rem;">When Exposed Fastener Makes Sense</h4>
    <p style="color: #374151; line-height: 1.75;">
      For budget-conscious projects, agricultural buildings, sheds, or structures where maintenance access is easy, exposed fastener systems perform well. We use high-quality stainless steel fasteners with EPDM washers and proper panel gauge to maximize lifespan.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Material Gauge: Why Thicker Actually Matters
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Metal roofing panels are measured in gauge (lower number = thicker metal). The most common residential options are:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>29-gauge:</strong> Economy-grade. Suitable for small residential applications with minimal foot traffic. More susceptible to denting from hail or debris.</li>
    <li style="margin-bottom: 0.5rem;"><strong>26-gauge:</strong> Standard residential. Good balance of cost and durability. Handles moderate foot traffic and resists most storm debris.</li>
    <li style="margin-bottom: 0.5rem;"><strong>24-gauge:</strong> Premium residential. Significantly more dent-resistant. Recommended for areas with large trees or high hail risk.</li>
    <li style="margin-bottom: 0.5rem;"><strong>22-gauge:</strong> Commercial-grade. Rarely necessary for residential, but used where extreme durability is required.</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Here's what contractors won't tell you:</strong> Thinner panels cost less and install faster. A 29-gauge roof might be $2-3 per square foot cheaper than 24-gauge — but it will dent during the first moderate hailstorm, and wind uplift resistance drops proportionally.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Clip Spacing and Fastener Schedules: The Engineering Detail That Matters Most
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Standing seam metal roofs rely on clips to resist wind uplift. Manufacturer specifications require specific clip spacing based on wind zone, roof slope, and panel width. In South Florida's HVHZ, that typically means:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>12-inch clip spacing</strong> in the field of the roof</li>
    <li style="margin-bottom: 0.5rem;"><strong>6-inch clip spacing</strong> within 4 feet of perimeter edges (wind uplift zone)</li>
    <li style="margin-bottom: 0.5rem;"><strong>Enhanced fastening</strong> at corners and ridges where wind forces concentrate</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The problem:</strong> Clips cost money and slow installation. Contractors cutting corners will space clips at 18 or 24 inches, which voids the manufacturer warranty and dramatically reduces wind resistance. You won't know until a hurricane tests it.
  </p>

  <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">How to Verify Proper Installation</h3>
    <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
      Ask your contractor for the <strong>engineering specifications</strong> matching your roof's wind zone and slope. Then physically count clips during installation. If the spacing doesn't match specs, your roof isn't hurricane-rated — regardless of what the contract says.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Coating and Finish: Kynar 500 vs. Polyester
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Metal roofing panels use either <strong>Kynar 500 (PVDF)</strong> or <strong>polyester</strong> paint coatings. The difference is dramatic:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Kynar 500:</strong> Premium resin-based coating. Resists UV degradation, chalk, and color fade for 30+ years. Required for manufacturer warranties exceeding 25 years.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Polyester (SMP):</strong> Budget coating. Fades noticeably within 10-15 years in Florida's intense UV exposure. Suitable for structures where appearance isn't critical.</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    For residential applications where you care about curb appeal and resale value, <strong>Kynar 500 is worth the 10-15% premium</strong>. Polyester roofs look aged and faded within a decade.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Dual Licensing Matters for Metal Roofing
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction USA holds both <strong>State Certified Roofing Contractor (CCC-1331464)</strong> and <strong>Certified General Contractor (CGC-1526236)</strong> licenses. This dual licensing is especially important for metal roofing because:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Structural Load Assessment:</strong> Metal roofs are significantly lighter than tile (2-3 lbs/sq ft vs. 10-12 lbs/sq ft). When replacing tile with metal, structural modification may be needed. Our CGC license allows us to perform these assessments and modifications in-house.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Engineering Calculations:</strong> Proper clip spacing and fastener schedules require load calculations. General contractor licensing includes structural expertise that pure roofing contractors lack.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Complex Integration:</strong> Metal roofs interacting with solar panel mounts, HVAC penetrations, or structural additions require both roofing and general construction knowledge.</li>
  </ul>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Metal Roofing Investment Range
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Residential metal roof installation in Broward and Palm Beach Counties typically ranges from <strong>$18,000 to $65,000+</strong> depending on:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li>System type (standing seam vs. exposed fastener)</li>
    <li>Material gauge (29-gauge vs. 24-gauge)</li>
    <li>Coating quality (Kynar 500 vs. polyester)</li>
    <li>Roof complexity (hip vs. gable, pitch, valleys)</li>
    <li>Underlayment and insulation requirements</li>
    <li>HVHZ engineering and enhanced fastening schedules</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Metal roofing costs more upfront than shingles but typically lasts <strong>50+ years with minimal maintenance</strong> — making it cost-effective over the building's lifetime.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Related Roofing Services
  </h2>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 0.5rem;"><a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Professional Roof Inspection</a> — Pre-installation structural assessment and metal roof condition evaluation</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Metal Roof Repair</a> — Fastener replacement, panel re-sealing, and storm damage restoration</li>
    <li style="margin-bottom: 0.5rem;"><a href="/residential-roofing" style="color: #dc2626; text-decoration: underline;">Residential Roofing Services</a> — Complete home roofing solutions for South Florida properties</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Roof Replacement Process</a> — What to expect during your metal roof installation project</li>
    <li style="margin-bottom: 0.5rem;"><a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">Shingle Roofing</a> — Compare metal vs. shingle cost and performance</li>
    <li style="margin-bottom: 0.5rem;"><a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">Tile Roofing</a> — Concrete and clay tile as an alternative to metal</li>
  </ul>

  <div style="background: #f3f4f6; border: 2px solid #dc2626; padding: 2rem; margin: 3rem 0; border-radius: 8px; text-align: center;">
    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">
      Schedule Your Free Metal Roof Consultation
    </h3>
    <p style="font-size: 1.125rem; color: #374151; margin-bottom: 1.5rem;">
      HVHZ-certified metal roofing contractor. Licensed in Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
    <p style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">
      Call <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Tile Roofing Page - /tile-roofing
 * 900+ words covering flashing as primary waterproofing, foam adhesive engineering, installation failures
 */
function generateTileRoofingContent() {
  return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem; background: white; color: #111827;">
  <h1 style="font-size: 2.5rem; font-weight: bold; color: #111827; margin-bottom: 1.5rem; line-height: 1.2;">
    Tile Roofs in South Florida: Why Most Fail Early
  </h1>

  <p style="font-size: 1.25rem; color: #374151; line-height: 1.75; margin-bottom: 2rem;">
    Tile roofs in South Florida should last 40-50 years. Yet most homeowners experience leaks within the first decade. The problem isn't the tile — it's the installation. Specifically, the flashings that 90% of tile roofs are missing. And the foam adhesive that determines whether your roof survives at 100 mph or 225 mph.
  </p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <p style="font-size: 1.125rem; font-weight: 600; color: #991b1b; margin-bottom: 0.5rem;">
      Free Tile Roof Consultation: <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
    <p style="color: #374151; line-height: 1.75;">
      HVHZ-certified tile roofing contractor. Dual-licensed in Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    The Flashing Problem: Why 90% of Florida Tile Roofs Leak Prematurely
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Here's what most homeowners don't understand: <strong>tile is not your waterproofing layer</strong>. Tile is a sacrificial UV shield that protects the actual waterproofing system underneath. That waterproofing system is your <strong>flashing network</strong> — metal channels, boots, and transitions that direct water flow around every roof penetration and detail.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    The underlayment (the synthetic barrier under the tile) is <strong>secondary waterproofing</strong>. It's designed to catch occasional water intrusion from wind-driven rain that gets past tile. But if flashings are missing or improperly installed, underlayment degrades rapidly from constant water exposure.
  </p>

  <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">The 90% Problem</h3>
    <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
      In our inspections of existing tile roofs in Broward and Palm Beach Counties, <strong>9 out of 10 roofs are missing critical flashings</strong>. Not because they failed — because they were never installed. Valley flashings terminate 6 inches short of the eave. Wall flashings aren't integrated into stucco. Pipe boots are missing kick-out flanges. These aren't "acceptable shortcuts" — they're code violations.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Where Flashings Are Required (And Typically Missing)
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Every one of these roof details requires <strong>custom-fabricated metal flashing</strong> to function properly:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Valley Flashings:</strong> Must extend from ridge to eave with continuous metal channel. The metal must turn up at least 8 inches on each side of the valley center. 90% of Florida valleys terminate short of the eave, dumping water onto fascia.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Roof-to-Wall Transitions:</strong> Require step flashing integrated into the wall's water-resistive barrier (behind stucco or siding). Most installations use caulk or pan flashing — both fail within 5 years.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Pipe and Vent Penetrations:</strong> Require two-piece boot systems with base flashing and storm collar. Most roofs use one-piece EPDM boots that crack from UV exposure within 10 years.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Chimney Flashings:</strong> Require counter-flashing reglets cut into masonry and full perimeter step flashing. Most chimneys use sealant and hope.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Ridge and Hip Flashings:</strong> Require vented closure strips and metal saddles at transitions. Most installations rely on mortar — which cracks from thermal expansion.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Drip Edge:</strong> Required at all eaves and rakes per Florida Building Code. Directs water into gutter without back-siphoning under tile. Often omitted entirely.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Skylight Flashings:</strong> Require four-piece pan assemblies with curb integration. Most leaks around skylights are flashing failures, not skylight failures.</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The labor reality:</strong> Proper flashing installation requires custom fabrication, precise measurements, and integration with structural elements during installation — not after the fact. It's time-consuming and requires skill. Contractors skip flashings to reduce labor costs and installation time.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Foam Adhesive: The Difference Between 100 MPH and 225 MPH
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    In South Florida's High Velocity Hurricane Zone (HVHZ), tile roofs must withstand <strong>175 mph sustained winds with gusts exceeding 200 mph</strong>. The only way to achieve this with concrete or clay tile is <strong>foam adhesive at every tile</strong>.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Mechanical fasteners alone (nails or screws) provide approximately <strong>90-110 mph wind resistance</strong>. Adding foam adhesive increases wind resistance to <strong>200-250 mph</strong> depending on tile profile and foam coverage.
  </p>

  <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">How Foam Adhesive Works</h4>
    <p style="color: #374151; line-height: 1.75;">
      Polyurethane foam adhesive (not the same as spray foam insulation) is applied in a specific bead pattern to the underside of each tile during installation. As it cures, it bonds the tile to both the underlayment and adjacent tiles, creating a <strong>monolithic shell</strong> that resists wind uplift as a unified system rather than individual tiles fighting independently.
    </p>
  </div>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    The Application Pattern Matters
  </h3>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Manufacturer specifications require specific foam bead patterns based on tile profile. For example:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Flat Concrete Tile:</strong> Two parallel beads plus perimeter bead at head and tail</li>
    <li style="margin-bottom: 0.5rem;"><strong>S-Profile Tile:</strong> Center bead following tile contour plus head/tail adhesion</li>
    <li style="margin-bottom: 0.5rem;"><strong>Barrel Tile:</strong> Full contact adhesive across pan tiles; spot adhesive on cap tiles</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The verification problem:</strong> Once a roof is complete, you cannot verify foam adhesive was applied correctly without removing tiles. This is why project manager oversight during installation is critical.
  </p>

  <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #92400e; margin-bottom: 0.5rem;">Our Verification Process</h4>
    <p style="color: #374151; line-height: 1.75;">
      All Phase Construction USA project managers <strong>randomly break installed tiles during each installation day</strong> to verify foam adhesive coverage and adhesion strength. If adhesive pattern is incorrect or adhesion is weak, the entire section is reinstalled. This destructive testing is the only way to verify proper installation before the roof is complete.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Roof-to-Wall Transitions: Where Most Tile Roofs Fail
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    When a tile roof meets a vertical wall (common on two-story homes, dormers, and chimney surrounds), proper integration requires <strong>step flashing behind the wall's water-resistive barrier</strong>. This means:
  </p>

  <ol style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;">Remove stucco or siding at the transition zone (6 inches minimum)</li>
    <li style="margin-bottom: 0.5rem;">Install step flashing that extends under the wall's weather barrier and over the roof underlayment</li>
    <li style="margin-bottom: 0.5rem;">Reinstall and seal stucco/siding over the flashing's vertical leg</li>
  </ol>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>What actually happens on most jobs:</strong> Contractors apply "pan flashing" (a single L-shaped piece of metal) over the finished stucco and caulk the joint. This works for 2-3 years until the caulk fails, UV degrades the sealant, or thermal expansion cracks the stucco. Water then runs behind the flashing and into the wall assembly.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Proper step flashing installation requires coordination with stucco contractors and adds 1-2 days to project duration. But it's the difference between a roof-to-wall transition that lasts 40 years versus one that fails in 5.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Concrete vs. Clay Tile: Functional Differences
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Both concrete and clay tile can be engineered to the same wind ratings when properly installed. The practical differences:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Weight:</strong> Clay tile (8-10 lbs/sq ft) vs. Concrete tile (10-12 lbs/sq ft). Older homes built for shingles may require structural reinforcement for either option.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Color Retention:</strong> Clay tile is through-body colored; concrete tile uses surface coatings that may fade over 20-30 years depending on pigment quality.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Thermal Performance:</strong> Clay tile has slightly better thermal mass and UV reflectivity, reducing attic heat gain by 3-5°F compared to concrete.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Cost:</strong> Clay tile typically costs 20-30% more than concrete for equivalent profiles due to material cost and manufacturing complexity.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Repairability:</strong> Both are brittle and crack if walked on improperly. Clay tile shatters more cleanly; concrete tile can chip/spall at edges.</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    For most residential applications in South Florida, <strong>concrete tile provides the best value</strong> when proper installation techniques (foam adhesive and complete flashing) are followed. Clay tile is preferred for historic preservation, high-end custom homes, or where through-body color is architecturally important.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Dual Licensing Matters for Tile Roofing
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction USA holds both <strong>State Certified Roofing Contractor (CCC-1331464)</strong> and <strong>Certified General Contractor (CGC-1526236)</strong> licenses. For tile roofing, this dual licensing is essential because:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Structural Load Assessment:</strong> Tile roofs weigh 5-6x more than shingles. When replacing shingles with tile, structural evaluation is required to verify roof framing can handle the load. Our CGC license qualifies us to perform these assessments and engineer reinforcements if needed.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Wall Integration:</strong> Proper roof-to-wall flashing requires stucco removal and integration with wall framing. This is general contracting work that roofing-only contractors cannot legally perform.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Permits and Inspections:</strong> Major tile roof installations require structural permits in addition to roofing permits. Dual licensing ensures we can pull all required permits and coordinate inspections across trades.</li>
  </ul>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Tile Roof Investment Range
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Residential tile roof installation in Broward and Palm Beach Counties typically ranges from <strong>$25,000 to $75,000+</strong> depending on:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li>Tile material (concrete vs. clay)</li>
    <li>Tile profile (flat, S-tile, barrel, custom)</li>
    <li>Roof complexity (hip/valley count, pitch, wall transitions)</li>
    <li>Structural reinforcement requirements</li>
    <li>Flashing scope (simple gable roof vs. complex multi-plane design)</li>
    <li>HVHZ enhanced installation requirements (foam adhesive labor)</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Properly installed tile roofs last <strong>40-50+ years</strong> and provide superior hurricane protection, fire resistance (Class A), and curb appeal compared to alternative materials. The upfront investment is higher than shingles but provides better long-term value.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Related Roofing Services
  </h2>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 0.5rem;"><a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Professional Roof Inspection</a> — Structural assessment and tile roof condition evaluation</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Tile Roof Repair</a> — Broken tile replacement, flashing repair, and leak diagnosis</li>
    <li style="margin-bottom: 0.5rem;"><a href="/residential-roofing" style="color: #dc2626; text-decoration: underline;">Residential Roofing Services</a> — Complete home roofing solutions for South Florida properties</li>
    <li style="margin-bottom: 0.5rem;"><a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">Shingle Roofing</a> — Compare tile vs. shingle cost and performance</li>
    <li style="margin-bottom: 0.5rem;"><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Metal Roofing</a> — Standing seam metal as an alternative to tile</li>
    <li style="margin-bottom: 0.5rem;"><a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">Flat Roofing</a> — TPO and PVC systems for low-slope applications</li>
  </ul>

  <div style="background: #f3f4f6; border: 2px solid #dc2626; padding: 2rem; margin: 3rem 0; border-radius: 8px; text-align: center;">
    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">
      Schedule Your Free Tile Roof Consultation
    </h3>
    <p style="font-size: 1.125rem; color: #374151; margin-bottom: 1.5rem;">
      HVHZ-certified tile roofing contractor. Dual-licensed in Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
    <p style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">
      Call <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Flat Roofing Page - /flat-roofing
 * 900+ words covering seam failures, TPO vs PVC chemistry, My Safe Florida Condo program
 */
function generateFlatRoofingContent() {
  return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem; background: white; color: #111827;">
  <h1 style="font-size: 2.5rem; font-weight: bold; color: #111827; margin-bottom: 1.5rem; line-height: 1.2;">
    Flat Roofing Done Right — Where the Seams Make or Break Your Roof
  </h1>

  <p style="font-size: 1.25rem; color: #374151; line-height: 1.75; margin-bottom: 2rem;">
    Flat roofs in South Florida fail at the seams. Not because the membrane material degrades — but because <strong>95% of commercial flat roofs are installed with adhesion welding when they should use cohesion welding</strong>. The difference is molecular. And it determines whether your roof lasts 15 years or 40.
  </p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <p style="font-size: 1.125rem; font-weight: 600; color: #991b1b; margin-bottom: 0.5rem;">
      Free Flat Roof Consultation: <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
    <p style="color: #374151; line-height: 1.75;">
      Commercial flat roofing specialist. Dual-licensed in Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Flat Roofs Fail in South Florida: The Three Failure Modes
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Commercial flat roofs experience three primary failure mechanisms, all accelerated by South Florida's climate:
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    1. Seam Failures (70% of All Leaks)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Single-ply membrane roofs (TPO and PVC) are installed in rolls that must be seamed together. These seams experience <strong>constant thermal expansion/contraction cycles</strong> as roof surface temperatures swing from 85°F at night to 170°F+ during peak sun exposure. Poor seam welding is the primary cause of flat roof failure.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    2. Ponding Water (20% of Failures)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Flat roofs are actually <strong>low-slope roofs</strong> with minimum 1/4" per foot pitch required for drainage. When structural deflection, settlement, or improper installation creates areas where water ponds for more than 48 hours, UV accelerates membrane degradation. Biological growth (algae) and chemical breakdown occur in ponding zones.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    3. Flashing Failures (10% of Failures)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Penetrations (HVAC curbs, drains, vents) and perimeter terminations require custom flashing details. These are <strong>hand-fabricated field conditions</strong> where most installers take shortcuts. Improper flashing installation causes premature failures at every roof penetration.
  </p>

  <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">The 70% Problem: Seam Integrity</h3>
    <p style="color: #374151; line-height: 1.75;">
      If you have a commercial flat roof in Florida and it's leaking, there's a <strong>70% chance the leak is at a seam</strong> — not from membrane puncture, not from UV degradation, but from <strong>poor seam welding during installation</strong>. This is preventable with proper material selection and installation technique.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    TPO vs. PVC: The Molecular Difference
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Both TPO (Thermoplastic Polyolefin) and PVC (Polyvinyl Chloride) are single-ply thermoplastic membranes that are heat-welded during installation. They look similar. But at the molecular level, they behave very differently when welded.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    TPO: Adhesion Welding (Surface Bonding)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    TPO is a polyolefin polymer — chemically similar to polyethylene. When heat-welded, TPO sheets bond through <strong>adhesion</strong>: the polymer chains at the surface melt and stick together, but the two sheets remain distinct layers.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The problem with adhesion welding:</strong> As the membrane expands and contracts with temperature changes, differential thermal stress concentrates at the seam interface. Over time, this <strong>peels the adhesion bond apart</strong> like two pieces of tape separating. TPO seams typically begin separating after 10-15 years of Florida UV and thermal cycling.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    PVC: Cohesion Welding (Molecular Fusion)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    PVC contains <strong>plasticizers</strong> that make the polymer flexible. When heat-welded, these plasticizers migrate across the seam interface and allow polymer chains from both sheets to <strong>intermingle and fuse</strong> at the molecular level. The two sheets become <strong>one monolithic piece</strong> with no interface layer.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Why cohesion welding performs better:</strong> Because there's no interface layer, thermal stress is distributed across the entire seam zone rather than concentrated at a bond line. PVC seams don't "peel apart" — because there's nothing to peel. The seam becomes as strong as the base membrane itself.
  </p>

  <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">Field Performance Data</h4>
    <p style="color: #374151; line-height: 1.75;">
      In South Florida's harsh UV environment, properly installed PVC roofs routinely achieve <strong>30-40+ year service life</strong>. TPO roofs typically require seam repair or replacement at <strong>12-18 years</strong>. The cost difference at installation is 10-15%. The performance difference is 20+ years of service life.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    The KEE Factor: Why Some PVC Roofs Fail Early
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Not all PVC roofing membranes perform equally. The performance difference comes down to the <strong>plasticizer chemistry</strong> used to make PVC flexible.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Traditional PVC uses <strong>phthalate plasticizers</strong>. These work well initially, but in South Florida's heat and UV exposure, phthalates <strong>slowly migrate out of the membrane over time</strong> — a process called plasticizer loss. As plasticizers leave, the PVC becomes brittle and cracks.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Some manufacturers add <strong>KEE (Ketone Ethylene Ester)</strong> copolymers to slow plasticizer migration. KEE acts as a "plasticizer trap" that reduces the rate at which phthalates escape. This extends service life from 20-25 years to 30-35 years.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    IB Roof Systems: No KEE Required
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction USA primarily installs <strong>IB Roof Systems</strong> PVC membranes, which use a proprietary plasticizer formulation that doesn't require KEE stabilization. IB achieves exceptional long-term flexibility and heat-weld strength without relying on KEE chemistry to hold plasticizers in place.
  </p>

  <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #92400e; margin-bottom: 0.5rem;">Why We Prefer IB Roof Systems</h4>
    <p style="color: #374151; line-height: 1.75;">
      IB Roof Systems PVC membranes have documented 40+ year installations in Florida with no plasticizer loss, excellent seam integrity, and minimal UV degradation. The membrane remains flexible and heat-weldable even after decades of UV exposure — which matters when repairs or additions are needed.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    My Safe Florida Condo Program: 2:1 Matching Grant for Condominium Roof Replacement
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    The <strong>My Safe Florida Condo Program</strong> provides matching grants up to <strong>$175,000 per building</strong> (2:1 match) for condominium associations replacing roofs with improved hurricane resistance. This program specifically funds:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;">Roof replacement with enhanced wind-rated systems</li>
    <li style="margin-bottom: 0.5rem;">Roof-to-wall connection upgrades</li>
    <li style="margin-bottom: 0.5rem;">Opening protection (impact windows/shutters) as part of roof projects</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>How the 2:1 match works:</strong> For every $1 the condominium association spends on an eligible roof project, the State of Florida provides $2 in grant funding, up to a maximum state contribution of $175,000 per building. This means:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;">If your project costs $75,000 total, you pay $25,000 and receive $50,000 in grant funding</li>
    <li style="margin-bottom: 0.5rem;">If your project costs $250,000 total, you pay $83,333 and receive $166,667 in grant funding (capped at $175,000 max grant)</li>
  </ul>

  <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">Grant Requirements</h4>
    <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
      To qualify, the condominium association must:
    </p>
    <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem;">
      <li>Be located in Florida</li>
      <li>Have 75% owner approval (not renter approval)</li>
      <li>Replace existing roof with a system rated for higher wind resistance</li>
      <li>Use a state-licensed contractor (CCC or CGC license required)</li>
    </ul>
  </div>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Condo/HOA Execution: Phased Approach and Resident Communication
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Multi-building condominium roof replacements require specialized execution to minimize resident disruption and maintain building access. All Phase Construction USA's approach includes:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Phased Scheduling:</strong> Buildings are re-roofed sequentially so residents maintain access to parking, amenities, and entry/exit routes</li>
    <li style="margin-bottom: 0.5rem;"><strong>Resident Notification:</strong> Door hangers 48 hours before work begins on each building detailing noise, access restrictions, and completion timeline</li>
    <li style="margin-bottom: 0.5rem;"><strong>Board Coordination:</strong> Weekly progress reports to HOA board with photo documentation and schedule updates</li>
    <li style="margin-bottom: 0.5rem;"><strong>Safety Protocols:</strong> Perimeter fencing, signage, and designated material staging areas away from resident walkways</li>
    <li style="margin-bottom: 0.5rem;"><strong>Weather Contingency:</strong> Each building is weatherproofed daily so rain doesn't cause interior damage if schedule shifts</li>
  </ul>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Dual Licensing Matters for Commercial Flat Roofing
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction USA holds both <strong>State Certified Roofing Contractor (CCC-1331464)</strong> and <strong>Certified General Contractor (CGC-1526236)</strong> licenses. For commercial flat roofing, this dual licensing is essential because:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Structural Integration:</strong> Flat roof drainage systems often require structural modifications (roof crickets, tapered insulation systems, drain relocation). CGC licensing allows us to perform these modifications in-house.</li>
    <li style="margin-bottom: 0.5rem;"><strong>HVAC Coordination:</strong> Commercial flat roofs interact with rooftop HVAC units, exhaust vents, and equipment curbs. Proper coordination requires general contracting expertise.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Multi-Trade Projects:</strong> Large commercial re-roofs often include parapet repairs, coping replacement, and building envelope upgrades that fall under general contracting scope.</li>
  </ul>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Commercial Flat Roof Investment Range
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Commercial flat roof installation in Broward and Palm Beach Counties typically ranges from <strong>$5 to $15 per square foot</strong> depending on:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li>Membrane type (TPO vs. PVC)</li>
    <li>Membrane thickness (45-mil vs. 60-mil vs. 80-mil)</li>
    <li>Insulation type and R-value requirements</li>
    <li>Roof complexity (penetrations, parapet height, drainage modifications)</li>
    <li>Access challenges (high-rise buildings requiring crane access)</li>
    <li>Scope of work (recover vs. tear-off vs. repair)</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    For condominium associations eligible for the My Safe Florida Condo Program, the 2:1 matching grant can reduce net project cost by approximately <strong>60-70%</strong>.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Related Roofing Services
  </h2>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 0.5rem;"><a href="/commercial-roofing" style="color: #dc2626; text-decoration: underline;">Commercial Roofing Services</a> — Complete commercial roofing solutions for multi-tenant buildings</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Professional Roof Inspection</a> — Infrared moisture scanning and flat roof condition assessment</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Flat Roof Repair</a> — Emergency leak repair and seam rehabilitation</li>
    <li style="margin-bottom: 0.5rem;"><a href="/roof-maintenance-programs" style="color: #dc2626; text-decoration: underline;">Roof Maintenance Programs</a> — Preventive maintenance contracts for commercial properties</li>
    <li style="margin-bottom: 0.5rem;"><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Metal Roofing</a> — Standing seam metal for low-slope applications</li>
  </ul>

  <div style="background: #f3f4f6; border: 2px solid #dc2626; padding: 2rem; margin: 3rem 0; border-radius: 8px; text-align: center;">
    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">
      Schedule Your Free Commercial Roof Consultation
    </h3>
    <p style="font-size: 1.125rem; color: #374151; margin-bottom: 1.5rem;">
      Commercial flat roofing specialist. Dual-licensed in Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
    <p style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">
      Call <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Residential Roofing Page - /residential-roofing
 * 800+ words covering building envelope concept, thermal shock, dual licensing
 */
function generateResidentialRoofingContent() {
  return `
<section id="seo-static-content">
  <h1>Your Roof Is the 5th Wall of Your Home</h1>

  <p>Most homeowners think of their roof as a separate component sitting on top of their house. But the reality is more sophisticated: your roof is the fifth wall of your building envelope—an integrated protective shell that works in concert with your four vertical walls to defend against South Florida's extreme climate conditions.</p>

  <p>At All Phase Construction USA, we approach residential roofing as <strong>building envelope contractors</strong>, not just roofers. This distinction matters because your roof doesn't exist in isolation. It's part of a continuous thermal and moisture control system that includes your walls, windows, doors, and foundation. When one component fails, the entire envelope is compromised.</p>

  <h2>The 5 Walls of Protection Model</h2>

  <p>Your home's building envelope consists of five critical barriers working together:</p>

  <ul>
    <li><strong>Wall 1 (North):</strong> Faces morning sun, experiences moderate thermal stress</li>
    <li><strong>Wall 2 (East):</strong> Receives intense afternoon heat, highest UV exposure</li>
    <li><strong>Wall 3 (South):</strong> Mid-day solar gain, moderate wind pressure during storms</li>
    <li><strong>Wall 4 (West):</strong> Sunset exposure, evening thermal release</li>
    <li><strong>Wall 5 (Roof):</strong> Absorbs 60-70% of total solar heat gain, faces maximum wind uplift during hurricanes</li>
  </ul>

  <p>The roof experiences the most extreme conditions of any building component. Summer surface temperatures reach <strong>160°F on dark shingles</strong> and <strong>140-150°F on tile and metal roofs</strong>. This creates a thermal gradient of 80-90°F between the roof surface and the conditioned interior space. That temperature differential drives heat transfer, moisture migration, and material degradation—which is why proper roof design is critical to your home's overall energy efficiency and structural integrity.</p>

  <h2>Thermal Shock: The Hidden Killer of Florida Roofs</h2>

  <p>Thermal shock is the silent assassin of roofing systems in South Florida. Here's what most homeowners never learn:</p>

  <p>Every afternoon, your roof surface reaches 150-160°F. Then a summer thunderstorm rolls through, dropping 1-2 inches of rain at 75-80°F onto that superheated surface. The instantaneous temperature drop of 70-80°F causes rapid contraction of roofing materials. This cycle repeats <strong>200+ days per year</strong> in South Florida.</p>

  <p>Over time, this constant expansion and contraction causes:</p>

  <ul>
    <li><strong>Shingle granule loss</strong> – Protective granules separate from the asphalt backing</li>
    <li><strong>Tile micro-cracking</strong> – Hairline fractures that allow water infiltration</li>
    <li><strong>Metal fastener fatigue</strong> – Screws and clips loosen from repeated stress cycles</li>
    <li><strong>Sealant breakdown</strong> – Adhesives fail prematurely, leading to blow-offs</li>
    <li><strong>Underlayment degradation</strong> – Secondary water barriers become brittle and crack</li>
  </ul>

  <p>Industry studies show that thermal shock reduces roof lifespan by <strong>30-50%</strong> compared to the same materials installed in moderate climates. A 30-year shingle in South Florida realistically lasts 15-20 years. A tile roof rated for 50 years might need significant repairs or replacement at 25-30 years.</p>

  <p>This is why proper material selection, installation quality, and engineered ventilation are non-negotiable for residential roofing in this region.</p>

  <h2>Why Dual Licensing Delivers Better Outcomes (And Lower Insurance Premiums)</h2>

  <p>All Phase Construction USA holds both a <strong>Roofing Contractor license (CCC-1331464)</strong> and a <strong>General Contractor license (CGC-1526236)</strong>. This dual licensing matters for three critical reasons:</p>

  <h3>1. Structural Authority for HVHZ Compliance</h3>

  <p>The High Velocity Hurricane Zone code requires roof-to-wall connections that exceed the scope of standard roofing work. Specifically:</p>

  <ul>
    <li>Hurricane strap installation or reinforcement</li>
    <li>Structural deck fastening at 6" on-center along perimeter zones</li>
    <li>Rafter-to-plate connections meeting uplift ratings</li>
    <li>Truss repair or reinforcement when needed</li>
  </ul>

  <p>A roofing-only contractor cannot legally perform this work. They must hire a separate general contractor, which adds cost, delays inspections, and creates divided accountability. When one contractor holds both licenses, the entire scope of work proceeds under a single permit with unified responsibility.</p>

  <h3>2. Wind Mitigation Documentation During Installation</h3>

  <p>Here's what most homeowners don't realize: the time to optimize your wind mitigation discounts is <strong>during roof replacement</strong>, not after. Once the roof is installed, it's too late to add the structural features that qualify for maximum insurance savings.</p>

  <p>Wind mitigation features include:</p>

  <ul>
    <li>Roof-to-wall connection upgrades (clips, straps, or toe-nails)</li>
    <li>Roof deck attachment upgrades (enhanced nailing patterns)</li>
    <li>Secondary water resistance (sealed deck vs. standard underlayment)</li>
    <li>Roof covering type and installation method</li>
    <li>Opening protection (impact windows or code-compliant shutters)</li>
  </ul>

  <p>A dual-licensed contractor can install these features as part of the roof replacement project and provide the documentation required for wind mitigation certification. This typically reduces homeowners' windstorm insurance premiums by <strong>30-45%</strong>—thousands of dollars in annual savings that offset the cost of the roof over its lifespan.</p>

  <h3>3. Seamless Project Management</h3>

  <p>Roof replacement often uncovers unexpected issues: rotted decking, compromised trusses, inadequate ventilation, or structural deficiencies. With dual licensing, we address these issues immediately without stopping the project to bring in a second contractor. One permit. One schedule. One point of accountability.</p>

  <h2>Engineered Ventilation: Not an Afterthought</h2>

  <p>Proper attic ventilation is critical in South Florida's climate. When attic temperatures reach 140-150°F, three problems occur:</p>

  <ol>
    <li><strong>Accelerated shingle aging</strong> – Heat cooks the asphalt from below</li>
    <li><strong>Increased cooling costs</strong> – Your AC works harder to overcome radiant heat transfer</li>
    <li><strong>Moisture accumulation</strong> – Condensation forms when humid air contacts cooler surfaces</li>
  </ol>

  <p>We design ventilation systems based on <strong>net free area (NFA) calculations</strong>, not guesswork. This means balanced intake ventilation (soffit vents) and exhaust ventilation (ridge vents, gable vents, or powered attic fans) to achieve the required 1:150 or 1:300 ventilation ratios specified by Florida Building Code.</p>

  <h2>Residential Roofing Services We Provide</h2>

  <ul>
    <li><strong><a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">Tile Roofing</a></strong> – Concrete and clay tile with foam adhesive application, mechanical fastening, and verified flashing details</li>
    <li><strong><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Metal Roofing</a></strong> – Standing seam and corrugated metal systems rated for 150+ mph wind resistance</li>
    <li><strong><a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">Shingle Roofing</a></strong> – Architectural and impact-resistant shingles with proper underlayment and enhanced fastening</li>
    <li><strong><a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">Flat Roofing</a></strong> – Built-up roofing (BUR), TPO, modified bitumen, and single-ply systems for low-slope residential roofs</li>
    <li><strong><a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Roof Replacement</a></strong> – Complete tear-off and replacement with HVHZ-compliant installation and manufacturer warranties</li>
    <li><strong><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Roof Repair</a></strong> – Emergency leak repair, storm damage restoration, and preventive maintenance</li>
  </ul>

  <h2>Why Experience Matters in HVHZ Roofing</h2>

  <p>All Phase Construction USA has completed <strong>2,500+ residential roofing projects</strong> across Broward and Palm Beach Counties since 2005. We are:</p>

  <ul>
    <li><strong>Dual-licensed</strong> (CCC-1331464 Roofing / CGC-1526236 General Contractor)</li>
    <li><strong>Manufacturer-certified</strong> by Owens Corning, CertainTeed, and Tamko</li>
    <li><strong>5-star rated</strong> on Google, Angi, and HomeAdvisor</li>
    <li><strong>HVHZ-compliant</strong> – Every installation meets Florida Building Code for High Velocity Hurricane Zones</li>
    <li><strong>Fully insured</strong> with general liability and workers' compensation coverage</li>
  </ul>

  <h2>Residential Roof Replacement Cost: What to Expect</h2>

  <p>Residential roof replacement in Broward and Palm Beach Counties typically ranges from <strong>$15,000 to $50,000+</strong> depending on:</p>

  <ul>
    <li>Roof size (square footage and complexity)</li>
    <li>Material type (shingle, tile, metal, or flat roofing systems)</li>
    <li>Pitch and accessibility</li>
    <li>Structural repairs or deck replacement</li>
    <li>HVHZ upgrade requirements</li>
    <li>Manufacturer warranty level (standard vs. lifetime coverage)</li>
  </ul>

  <p>Use our <strong><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Roof Cost Calculator</a></strong> to get a preliminary estimate based on your home's specifications. Then schedule a free inspection for an exact quote with detailed line-item pricing.</p>

  <div style="background: #f3f4f6; border-left: 4px solid #dc2626; padding: 1rem; margin: 2rem 0;">
    <p style="margin: 0; font-weight: 600;">📞 Ready to discuss your residential roofing project?</p>
    <p style="margin: 0.5rem 0 0 0;">Call <strong style="color: #dc2626;">(754) 227-5605</strong> or <a href="/contact" style="color: #dc2626; text-decoration: underline;">schedule a free inspection online</a>. Licensed, insured, and HVHZ-certified since 2005.</p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Commercial Roofing Page - /commercial-roofing
 * 800+ words covering HVHZ, My Safe Florida Condo, HOA management
 */
function generateCommercialRoofingContent() {
  return `
<section id="seo-static-content">
  <h1>Commercial Roofing Built for the High Velocity Hurricane Zone</h1>

  <p>Commercial roofing in Broward and Palm Beach Counties operates under the most stringent building codes in the United States. The High Velocity Hurricane Zone (HVHZ) provisions of the Florida Building Code mandate design wind speeds of <strong>146 mph for Broward County</strong> and <strong>140-146 mph for Palm Beach County</strong>—far exceeding the requirements in most of Florida and the rest of the country.</p>

  <p>All Phase Construction USA holds dual licenses—<strong>General Contractor (CGC-1526236)</strong> and <strong>Roofing Contractor (CCC-1331464)</strong>—allowing us to handle both structural and roofing work under one contract. This is particularly important for commercial projects where roof-to-wall connections, structural decking, and load-bearing components often require modification during roof replacement.</p>

  <h2>HVHZ Code Requirements for Commercial Buildings</h2>

  <p>Commercial roofing systems in the HVHZ must meet specific performance standards that go beyond residential requirements:</p>

  <h3>Wind Uplift Ratings</h3>

  <p>The Florida Building Code requires commercial roofs to achieve specific wind uplift ratings based on building height, exposure category, and roof geometry. These ratings are expressed as:</p>

  <ul>
    <li><strong>Class 90</strong> – 90 psf uplift resistance (for lower-risk buildings)</li>
    <li><strong>Class 120</strong> – 120 psf uplift resistance (standard for most commercial buildings)</li>
    <li><strong>Class 180</strong> – 180 psf uplift resistance (required for high-rise and coastal buildings)</li>
  </ul>

  <p>Achieving these ratings requires engineered fastening patterns, proper insulation attachment, and membrane securement methods verified by third-party testing. Not all roofing contractors understand these requirements or have experience passing HVHZ inspections.</p>

  <h3>Secondary Water Barriers</h3>

  <p>HVHZ code mandates continuous secondary water barriers on all commercial roofs. This means a fully sealed underlayment system—typically self-adhered modified bitumen or fully torched base sheets—beneath the primary roof covering. This requirement exists because hurricane-force winds can drive rain horizontally under flashing and through seams that would normally remain dry.</p>

  <h3>Flashing and Edge Details</h3>

  <p>Perimeter edge flashing must be mechanically fastened at closer spacing than standard installations. Coping caps, gravel stops, and parapet wall flashing all require enhanced securement and often structural blocking to prevent blow-off during high-wind events.</p>

  <h2>My Safe Florida Condo Program: Up to $175,000 in Grant Funding</h2>

  <p>The <strong>My Safe Florida Condo Program</strong> provides matching grants to condominium and cooperative associations for hurricane mitigation improvements, including roof replacement and reinforcement. Here's how it works:</p>

  <h3>Grant Basics</h3>

  <ul>
    <li><strong>Matching ratio:</strong> $2 in grant funding for every $1 contributed by the association</li>
    <li><strong>Maximum grant:</strong> $175,000 per association</li>
    <li><strong>Approval requirement:</strong> 75% of unit owners must approve the project</li>
    <li><strong>Eligible expenses:</strong> Roof replacement, opening protection (impact windows/shutters), structural reinforcement</li>
  </ul>

  <h3>How to Apply</h3>

  <p>Applications are submitted through the Florida Department of Emergency Management. The process involves:</p>

  <ol>
    <li>Scheduling a professional wind mitigation inspection to identify deficiencies</li>
    <li>Obtaining detailed cost estimates from licensed contractors</li>
    <li>Securing 75% owner approval via formal vote</li>
    <li>Submitting the application with supporting documentation</li>
    <li>Receiving grant award notification (applications are processed on a rolling basis)</li>
  </ol>

  <p>All Phase Construction USA can assist with the inspection, cost estimation, and scope-of-work documentation required for successful grant applications. We've helped multiple condo associations secure funding through this program.</p>

  <h2>Condo & HOA Board Management: What Sets Us Apart</h2>

  <p>Working with condominium associations and homeowners' associations requires specialized project management skills that go beyond standard commercial roofing:</p>

  <h3>Competitive Bidding Compliance</h3>

  <p>Most HOA governing documents require competitive bidding for projects exceeding specific dollar thresholds (typically $10,000-$25,000). We provide detailed, line-item proposals that allow boards to compare bids accurately. Our estimates include:</p>

  <ul>
    <li>Material specifications with manufacturer names and model numbers</li>
    <li>Labor breakdown by phase (tear-off, deck prep, installation, cleanup)</li>
    <li>Permit costs and inspection fees</li>
    <li>Warranty coverage (workmanship and manufacturer)</li>
    <li>Project timeline with milestone dates</li>
  </ul>

  <h3>Phased Project Scheduling</h3>

  <p>Large condo complexes often require phased roof replacement to minimize disruption and spread costs across multiple budget cycles. We work with boards to develop multi-year plans that:</p>

  <ul>
    <li>Prioritize buildings with the most critical roof damage</li>
    <li>Schedule work during low-occupancy periods (avoiding holidays and peak season)</li>
    <li>Coordinate with reserve fund planning and special assessments</li>
    <li>Maintain consistent pricing across phases (protecting against future price increases)</li>
  </ul>

  <h3>Resident Communication</h3>

  <p>We provide regular project updates to residents, including:</p>

  <ul>
    <li>Pre-construction notices explaining project scope and timeline</li>
    <li>Daily work schedules posted in common areas</li>
    <li>24-hour advance notice for any work directly affecting individual units</li>
    <li>Direct contact information for our project manager</li>
    <li>Post-completion walkthrough with board representatives</li>
  </ul>

  <h2>Commercial Property Types We Serve</h2>

  <p>All Phase Construction USA provides commercial roofing services for a wide range of property types:</p>

  <ul>
    <li><strong>Retail Centers</strong> – Strip malls, shopping plazas, standalone retail buildings</li>
    <li><strong>Office Buildings</strong> – Low-rise and mid-rise commercial office space</li>
    <li><strong>Warehouse & Industrial</strong> – Distribution centers, manufacturing facilities, flex space</li>
    <li><strong>Medical Facilities</strong> – Medical offices, urgent care centers, outpatient clinics</li>
    <li><strong>Schools & Institutions</strong> – Private schools, religious facilities, community centers</li>
    <li><strong>Multi-Family Housing</strong> – Apartment complexes, condominium associations, townhome communities</li>
  </ul>

  <h2>Why Dual Licensing Matters for Commercial Projects</h2>

  <p>Commercial roof replacement often reveals structural issues that require immediate attention:</p>

  <ul>
    <li><strong>Rotted roof decking</strong> – Water damage requiring deck replacement</li>
    <li><strong>Inadequate structural fastening</strong> – Deck boards nailed at 12" instead of required 6" on-center</li>
    <li><strong>Compromised parapet walls</strong> – Structural repairs needed before new flashing can be installed</li>
    <li><strong>HVAC equipment support issues</strong> – Roof-mounted units requiring reinforced curbs or structural upgrades</li>
  </ul>

  <p>When your roofing contractor also holds a general contractor license, these issues are addressed immediately without stopping the project to hire a separate structural contractor. This saves time, reduces costs, and ensures unified accountability for the entire scope of work.</p>

  <h2>Commercial Roofing Systems We Install</h2>

  <ul>
    <li><strong><a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">TPO Roofing</a></strong> – Single-ply thermoplastic membranes with heat-welded seams, rated for Class 90-180 wind uplift</li>
    <li><strong>EPDM Roofing</strong> – Rubber membrane systems ideal for flat and low-slope roofs</li>
    <li><strong>PVC Roofing</strong> – Premium single-ply membrane with superior chemical resistance and longevity</li>
    <li><strong>Built-Up Roofing (BUR)</strong> – Traditional tar-and-gravel systems with proven performance in South Florida</li>
    <li><strong>Modified Bitumen</strong> – Torch-applied or self-adhered systems for demanding commercial applications</li>
    <li><strong>Metal Roofing</strong> – Standing seam and corrugated metal for warehouse and industrial buildings</li>
  </ul>

  <h2>Preventive Maintenance Programs</h2>

  <p>Commercial roofs require regular maintenance to maximize lifespan and prevent costly emergency repairs. Our <strong><a href="/roof-maintenance-programs" style="color: #dc2626; text-decoration: underline;">commercial roof maintenance programs</a></strong> include:</p>

  <ul>
    <li>Quarterly inspections with photo documentation</li>
    <li>Drain and gutter cleaning</li>
    <li>Minor repairs completed during routine visits</li>
    <li>Annual roof condition reports for property managers and owners</li>
    <li>Priority emergency response for active leaks</li>
  </ul>

  <p>Preventive maintenance extends roof lifespan by 5-10 years and allows building owners to plan for replacement on their timeline—not when an emergency forces immediate action.</p>

  <h2>Flexible Payment Options for Commercial Projects</h2>

  <p>We understand that commercial roof replacement represents a significant capital expenditure. <strong><a href="/easy-payments" style="color: #dc2626; text-decoration: underline;">Flexible financing options</a></strong> are available including:</p>

  <ul>
    <li>Progress billing tied to project milestones</li>
    <li>Extended payment terms for qualified commercial clients</li>
    <li>Third-party financing for associations and property management companies</li>
  </ul>

  <div style="background: #f3f4f6; border-left: 4px solid #dc2626; padding: 1rem; margin: 2rem 0;">
    <p style="margin: 0; font-weight: 600;">📞 Need a commercial roofing proposal or HOA grant assistance?</p>
    <p style="margin: 0.5rem 0 0 0;">Call <strong style="color: #dc2626;">(754) 227-5605</strong> or <a href="/contact" style="color: #dc2626; text-decoration: underline;">request a commercial roofing consultation online</a>. Dual-licensed (CGC/CCC) and HVHZ-certified.</p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Roof Repair Hub Page - /roof-repair
 * 800+ words covering systemic restoration, 5-year certs, 25% rule
 */
function generateRoofRepairHubContent() {
  return `
<section id="seo-static-content">
  <h1>We Don't Just Repair Your Roof — We Restore It</h1>

  <p>Most roofing companies approach repairs as isolated patches: fix the visible leak, collect payment, and move on. This spot-repair mentality fails to address the underlying conditions that caused the failure in the first place—which is why the same homeowners end up calling back six months later when a new leak appears three feet away from the "repaired" area.</p>

  <p>At All Phase Construction USA, we take a <strong>systemic restoration approach</strong> to roof repair. When we're called to fix a leak, we don't just patch the immediate problem. We identify the root cause, evaluate surrounding areas with similar conditions, and restore the entire affected section to prevent future failures.</p>

  <h2>Why Spot Repairs Fail in South Florida</h2>

  <p>Roof damage in this region is rarely isolated. The combination of extreme heat, UV exposure, thermal shock, and hurricane-force winds creates conditions that affect large sections of roofing systems simultaneously. Here's what typically happens:</p>

  <h3>The Cascade Effect</h3>

  <p>When one area of your roof fails, adjacent areas are often in similar condition. If one shingle is losing granules due to thermal degradation, the surrounding shingles are experiencing the same stress. If one tile cracks from thermal shock, nearby tiles have the same micro-fractures that will fail within months.</p>

  <p>Spot repairs address the symptom (the visible leak) but ignore the disease (systemic material degradation). This is why we evaluate the entire roof zone—not just the leak location—and provide honest assessments of what needs immediate attention versus what can be monitored.</p>

  <h3>Flashing Failures vs. Material Failures</h3>

  <p>Approximately 70% of roof leaks in South Florida stem from flashing failures, not material failures. The most common problem areas include:</p>

  <ul>
    <li><strong>Chimney flashing</strong> – Counter-flashing separating from masonry</li>
    <li><strong>Pipe boot penetrations</strong> – Rubber boots cracking and separating from pipe collars</li>
    <li><strong>Valley flashing</strong> – Open valleys accumulating debris and allowing water backup</li>
    <li><strong>Dormer connections</strong> – Step flashing failing at wall-to-roof transitions</li>
    <li><strong>Skylight curbs</strong> – Sealant breakdown allowing water infiltration</li>
  </ul>

  <p>Proper repair requires removing the surrounding roof covering, installing new base flashing properly integrated with the underlayment, and reinstalling the roof material with correct overlap and fastening. This is not a "quick patch" job—it's skilled reconstruction work that requires roofing expertise and attention to HVHZ code requirements.</p>

  <h2>The 5-Year Certification Letter: Protecting Your Insurance Coverage</h2>

  <p>Here's something most Florida homeowners don't know: if your roof is older than a certain threshold (typically 15-20 years), insurance carriers may require a roof certification letter to maintain full coverage or avoid non-renewal.</p>

  <p><strong>Florida Statute 627.7011(5)</strong> establishes the framework for roof certification. The statute allows licensed roofing contractors to provide written certification that a roof has at least 5 years of remaining useful life, which can prevent insurance carriers from requiring immediate replacement.</p>

  <h3>What a 5-Year Certification Requires</h3>

  <p>To issue a valid certification letter, the contractor must:</p>

  <ul>
    <li>Hold an active Florida roofing contractor license (CCC)</li>
    <li>Perform a comprehensive roof inspection covering all material, structural, and water-resistance components</li>
    <li>Verify that the roof is watertight and properly maintained</li>
    <li>Confirm that all deficiencies have been repaired to code-compliant standards</li>
    <li>Provide written documentation including photos and a signed affidavit</li>
  </ul>

  <p>All Phase Construction USA provides 5-year roof certification letters after completing qualified repair work. This certification can save homeowners thousands of dollars by preventing forced roof replacement as a condition of insurance coverage.</p>

  <h2>Florida's 25% Roof Repair Rule: What You Need to Know</h2>

  <p><strong>Florida Statute 553.844(5)</strong> establishes the "25% rule" for roof repairs. Here's what it means:</p>

  <p>If roof repairs or replacement affect more than 25% of the total roof area within a 12-month period, the <strong>entire roof must be brought up to current building code</strong>—including HVHZ requirements for wind uplift, secondary water barriers, and structural fastening.</p>

  <h3>Why This Matters</h3>

  <p>This statute exists to prevent homeowners from perpetually patching failing roofs without ever addressing underlying code deficiencies. It protects both homeowners (by ensuring proper wind resistance) and future buyers (by preventing homes from being sold with substandard roofing systems).</p>

  <p>From a practical standpoint, this means:</p>

  <ul>
    <li>Keep repair receipts to track cumulative work over the past 12 months</li>
    <li>If you're approaching the 25% threshold, consider full replacement to avoid partial upgrades</li>
    <li>Work with a licensed contractor who understands code implications and can guide your decision</li>
  </ul>

  <h2>Roof Repair Services We Provide</h2>

  <h3>Leak Detection & Repair</h3>

  <p>Not all leaks are obvious. We use thermal imaging, moisture meters, and systematic water testing to pinpoint leak sources—including hard-to-find issues like underlayment breaches, deck rot, and wind-driven rain infiltration.</p>

  <h3>Shingle Restoration</h3>

  <p>Shingle repairs include replacing damaged or missing shingles, addressing granule loss, sealing lifted tabs, and ensuring proper adhesion. We match existing shingle colors and styles to maintain aesthetic consistency.</p>

  <h3>Flashing Repairs</h3>

  <p>Comprehensive flashing repair including chimney reflashing, pipe boot replacement, valley flashing installation, dormer step flashing, and skylight curb sealing. All flashing work integrates with existing underlayment or includes new underlayment installation where required.</p>

  <h3>Tile Re-Setting & Replacement</h3>

  <p>Tile roofs often require individual tile replacement due to cracking or impact damage. We maintain an inventory of common tile profiles and colors to ensure proper matches. All tile work includes proper foam adhesive application and mechanical fastening per HVHZ requirements.</p>

  <h3>Flat Roof Repairs</h3>

  <p>Flat and low-slope roofs develop issues including membrane punctures, seam separation, ponding water, and blister formation. We repair TPO, EPDM, modified bitumen, and built-up roofing systems using manufacturer-approved materials and methods.</p>

  <h3>Storm Damage Restoration</h3>

  <p>Hurricane and severe weather damage requires immediate response. We provide emergency tarping services, temporary weatherproofing, and complete storm damage restoration. We work directly with insurance adjusters and provide detailed photo documentation to support claims.</p>

  <h3>Gutter Repairs</h3>

  <p>Gutters are part of your roof's water management system. We repair damaged gutters, replace missing sections, correct improper slope, and ensure proper drainage to protect your roof and foundation.</p>

  <h2>Roof Repair Service Areas</h2>

  <p>All Phase Construction USA provides roof repair services throughout Broward and Palm Beach Counties. Our primary service areas include:</p>

  <ul>
    <li><strong><a href="/roof-repair/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Roof Repair in Deerfield Beach</a></strong> – Our headquarters location with same-day emergency response</li>
    <li><strong><a href="/roof-repair/boca-raton" style="color: #dc2626; text-decoration: underline;">Roof Repair in Boca Raton</a></strong> – Tile, metal, shingle, and flat roof repair for residential and commercial properties</li>
    <li><strong><a href="/roof-repair/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Roof Repair in Fort Lauderdale</a></strong> – Emergency leak repair and storm damage restoration</li>
    <li><strong><a href="/roof-repair/coral-springs" style="color: #dc2626; text-decoration: underline;">Roof Repair in Coral Springs</a></strong> – Flashing repair, tile replacement, and shingle restoration</li>
  </ul>

  <p>We also serve Pompano Beach, Delray Beach, Boynton Beach, West Palm Beach, Plantation, Sunrise, and all surrounding communities.</p>

  <h2>When to Repair vs. When to Replace</h2>

  <p>The decision between repair and replacement depends on several factors:</p>

  <h3>Repair Makes Sense When:</h3>

  <ul>
    <li>The roof is less than 50% through its expected lifespan</li>
    <li>Damage is localized to a specific area (less than 25% of total roof area)</li>
    <li>The underlying structure and underlayment are sound</li>
    <li>Matching materials are available</li>
    <li>Repair costs are less than 30-40% of replacement cost</li>
  </ul>

  <h3>Replacement Is Better When:</h3>

  <ul>
    <li>The roof has exceeded its expected lifespan</li>
    <li>Multiple areas show similar deterioration</li>
    <li>Previous repairs have failed in multiple locations</li>
    <li>The roof shows systemic issues (widespread granule loss, multiple tile cracks, etc.)</li>
    <li>You're approaching the 25% cumulative repair threshold</li>
    <li>Insurance certification is required and the roof cannot be certified</li>
  </ul>

  <p>We provide honest assessments and never recommend replacement when quality repairs will extend your roof's life. That said, we also won't patch a failing roof just to collect a repair fee when replacement is the right long-term decision.</p>

  <h2>Related Resources</h2>

  <ul>
    <li><strong><a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Professional Roof Inspections</a></strong> – Comprehensive assessment before deciding on repair vs. replacement</li>
    <li><strong><a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Roof Replacement Process</a></strong> – What to expect when repair is no longer viable</li>
  </ul>

  <div style="background: #f3f4f6; border-left: 4px solid #dc2626; padding: 1rem; margin: 2rem 0;">
    <p style="margin: 0; font-weight: 600;">📞 Need roof repair or a 5-year certification letter?</p>
    <p style="margin: 0.5rem 0 0 0;">Call <strong style="color: #dc2626;">(754) 227-5605</strong> for same-day emergency response or <a href="/contact" style="color: #dc2626; text-decoration: underline;">schedule a repair assessment online</a>. Licensed CCC-1331464 / CGC-1526236.</p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Roof Inspection Hub Page - /roof-inspection
 * 800+ words covering 8 components, 6 reasons, HVHZ, 5-year certification
 */
function generateRoofInspectionHubContent() {
  return `
<section id="seo-static-content">
  <h1>Roof Inspection Services in Broward & Palm Beach County</h1>

  <p>A professional roof inspection is far more than a visual walkthrough. It's a comprehensive evaluation of your roof's structural integrity, water resistance, material condition, and code compliance—delivered by licensed contractors who understand South Florida's unique High Velocity Hurricane Zone requirements.</p>

  <p>All Phase Construction USA provides detailed roof inspections with photo documentation, moisture readings, and written reports suitable for insurance submissions, real estate transactions, and maintenance planning. Every inspection is performed by state-licensed roofing contractors (CCC-1331464) with authority to issue 5-year roof certification letters under Florida Statute 627.7011(5).</p>

  <h2>Our 8-Component Inspection Process</h2>

  <p>Our roof inspections evaluate every aspect of your roofing system using a standardized 21-point checklist covering eight major categories:</p>

  <h3>1. Roofing Material Assessment</h3>

  <p>We evaluate the condition and remaining lifespan of your primary roof covering:</p>

  <ul>
    <li><strong>Shingle roofs:</strong> Granule loss, curling, cracking, missing shingles, seal failure</li>
    <li><strong>Tile roofs:</strong> Cracked or broken tiles, improper fastening, foam adhesive condition</li>
    <li><strong>Metal roofs:</strong> Fastener condition, seam integrity, rust or corrosion, panel movement</li>
    <li><strong>Flat roofs:</strong> Membrane condition, seam separation, blistering, ponding water</li>
  </ul>

  <h3>2. Water Intrusion Detection</h3>

  <p>Active and historical water intrusion is identified using multiple diagnostic methods:</p>

  <ul>
    <li>Interior ceiling inspection for staining, discoloration, and soft spots</li>
    <li>Attic inspection for water staining on decking and rafters</li>
    <li>Moisture meter readings to detect elevated moisture levels</li>
    <li>Thermal imaging (when available) to identify hidden moisture</li>
  </ul>

  <h3>3. Flashing Evaluation</h3>

  <p>Flashing is the most common source of roof leaks in South Florida. We inspect:</p>

  <ul>
    <li>Chimney flashing and counter-flashing</li>
    <li>Pipe boot penetrations (plumbing vents, electrical masts)</li>
    <li>Valley flashing and debris accumulation</li>
    <li>Dormer step flashing and sidewall transitions</li>
    <li>Skylight curbs and head flashing</li>
    <li>Drip edge and starter strip installation</li>
  </ul>

  <h3>4. Wind Resistance & HVHZ Compliance</h3>

  <p>South Florida roofs must meet High Velocity Hurricane Zone standards. We verify:</p>

  <ul>
    <li>Proper fastening patterns for primary roof covering</li>
    <li>Secondary water barrier installation (required in HVHZ)</li>
    <li>Edge metal securement and spacing</li>
    <li>Tile foam adhesive application (required for HVHZ tile roofs)</li>
    <li>Roof-to-wall connection adequacy</li>
    <li>Exposure category compliance for your building's location</li>
  </ul>

  <h3>5. Structural Deck Integrity</h3>

  <p>The roof deck is the foundation of your roofing system. We assess:</p>

  <ul>
    <li>Deck board condition (rot, deterioration, warping)</li>
    <li>Proper fastening of decking to rafters or trusses</li>
    <li>Spacing between deck boards (critical for proper ventilation)</li>
    <li>Load-bearing capacity for tile and concrete roof systems</li>
    <li>Evidence of previous repairs or modifications</li>
  </ul>

  <h3>6. Drainage & Water Management</h3>

  <p>Proper water drainage prevents premature roof failure. We evaluate:</p>

  <ul>
    <li>Gutter condition, attachment, and proper slope</li>
    <li>Downspout routing and drainage away from foundation</li>
    <li>Valley drainage and debris accumulation</li>
    <li>Flat roof drainage (scuppers, internal drains, ponding water)</li>
    <li>Splash blocks and drainage extensions</li>
  </ul>

  <h3>7. Attic Ventilation & Code Compliance</h3>

  <p>Inadequate ventilation accelerates roof aging. We verify:</p>

  <ul>
    <li>Soffit vent installation and blockage</li>
    <li>Ridge vent, gable vent, or roof vent adequacy</li>
    <li>Net free area (NFA) calculations per Florida Building Code</li>
    <li>Balanced intake and exhaust ventilation</li>
    <li>Attic insulation depth and R-value</li>
  </ul>

  <h3>8. Comprehensive Photo Documentation</h3>

  <p>Every inspection includes detailed photography:</p>

  <ul>
    <li>Overall roof condition from multiple angles</li>
    <li>Close-up shots of problem areas</li>
    <li>Flashing details and penetration conditions</li>
    <li>Interior water damage or staining</li>
    <li>Attic conditions and ventilation</li>
    <li>Documented code deficiencies</li>
  </ul>

  <p>Photos are provided digitally and can be submitted directly to insurance carriers, real estate agents, or mortgage lenders.</p>

  <h2>6 Reasons to Schedule a Professional Roof Inspection</h2>

  <h3>1. Home Purchase or Sale</h3>

  <p>Real estate transactions require accurate roof assessments. Buyers need to know remaining lifespan and repair costs before closing. Sellers benefit from pre-listing inspections that identify issues before they become negotiation points. Our inspection reports provide:</p>

  <ul>
    <li>Estimated remaining useful life (in years)</li>
    <li>Current condition rating (excellent, good, fair, poor)</li>
    <li>Required repairs with cost estimates</li>
    <li>Code compliance status</li>
  </ul>

  <h3>2. Insurance Requirements</h3>

  <p>Many insurance carriers require roof inspections or certifications for:</p>

  <ul>
    <li>Policy renewal for roofs over 15-20 years old</li>
    <li>New policy applications</li>
    <li>Wind mitigation discount verification</li>
    <li>Post-storm damage assessment</li>
  </ul>

  <p>We provide insurance-compliant reports that meet carrier requirements and can issue 5-year certification letters when roofs qualify.</p>

  <h3>3. Post-Storm Assessment</h3>

  <p>After hurricanes or severe weather, professional inspection identifies:</p>

  <ul>
    <li>Missing or damaged shingles, tiles, or metal panels</li>
    <li>Lifted flashing or compromised seals</li>
    <li>Underlayment damage (not visible from ground level)</li>
    <li>Structural damage to decking or rafters</li>
    <li>Secondary damage (gutters, fascia, soffit)</li>
  </ul>

  <p>Post-storm inspections should be completed promptly to prevent water intrusion and to document damage for insurance claims while evidence is fresh.</p>

  <h3>4. Preventive Maintenance</h3>

  <p>Annual or bi-annual inspections catch small problems before they become major repairs:</p>

  <ul>
    <li>Early detection of material deterioration</li>
    <li>Identification of potential leak sources</li>
    <li>Gutter cleaning and debris removal recommendations</li>
    <li>Verification of previous repair quality</li>
    <li>Extend roof lifespan by 5-10 years through proactive maintenance</li>
  </ul>

  <h3>5. Active Leaks or Water Damage</h3>

  <p>When leaks occur, finding the source requires professional expertise:</p>

  <ul>
    <li>Water often travels along rafters before entering the interior</li>
    <li>Visible interior damage may be 10-20 feet from the actual roof breach</li>
    <li>Multiple leak sources can exist simultaneously</li>
    <li>Proper repair requires understanding the root cause, not just patching symptoms</li>
  </ul>

  <h3>6. Pre-Renovation Planning</h3>

  <p>If you're planning home improvements (solar panels, HVAC replacement, additions), a roof inspection ensures:</p>

  <ul>
    <li>The roof can support additional loads (solar panel weight, equipment)</li>
    <li>Remaining roof life justifies deferring replacement</li>
    <li>Coordination of roof work with other projects</li>
    <li>Avoid installing expensive equipment on a roof that needs replacement in 2-3 years</li>
  </ul>

  <h2>HVHZ Inspection Requirements</h2>

  <p>High Velocity Hurricane Zone compliance is mandatory for all roofs in Broward and Palm Beach Counties. Our inspections specifically verify:</p>

  <ul>
    <li><strong>146 mph wind rating compliance</strong> for Broward County (140-146 mph for Palm Beach County)</li>
    <li><strong>Secondary water barrier installation</strong> – Continuous sealed underlayment required by HVHZ code</li>
    <li><strong>Fastening pattern compliance</strong> – Enhanced nailing or foam adhesive per manufacturer specifications</li>
    <li><strong>Edge metal securement</strong> – Proper spacing and fastening of drip edge and starter strips</li>
    <li><strong>Opening protection</strong> – Impact-rated windows or code-compliant shutters (affects wind mitigation rating)</li>
  </ul>

  <h2>5-Year Roof Certification Authority</h2>

  <p>Under <strong>Florida Statute 627.7011(5)</strong>, licensed roofing contractors can provide written certification that a roof has at least 5 years of remaining useful life. This certification can:</p>

  <ul>
    <li>Prevent insurance carriers from requiring immediate roof replacement</li>
    <li>Maintain full coverage without roof-exclusion riders</li>
    <li>Avoid policy non-renewal due to roof age</li>
    <li>Provide documentation for real estate transactions</li>
  </ul>

  <p>To qualify for a 5-year certification, the roof must:</p>

  <ul>
    <li>Be watertight with no active leaks</li>
    <li>Have adequate remaining material life</li>
    <li>Be structurally sound with no significant deck deterioration</li>
    <li>Have properly functioning flashing and drainage</li>
    <li>Be code-compliant or have deficiencies corrected</li>
  </ul>

  <p>All Phase Construction USA is authorized to issue these certifications after completing a comprehensive inspection and any required repairs.</p>

  <h2>Roof Inspection Service Areas</h2>

  <p>We provide professional roof inspections throughout Broward and Palm Beach Counties, including:</p>

  <ul>
    <li><strong><a href="/roof-inspection/boca-raton" style="color: #dc2626; text-decoration: underline;">Roof Inspection in Boca Raton</a></strong></li>
    <li><strong><a href="/roof-inspection/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Roof Inspection in Fort Lauderdale</a></strong></li>
    <li><strong><a href="/roof-inspection/coral-springs" style="color: #dc2626; text-decoration: underline;">Roof Inspection in Coral Springs</a></strong></li>
  </ul>

  <p>We also serve Deerfield Beach, Pompano Beach, Delray Beach, Boynton Beach, West Palm Beach, Plantation, Sunrise, and all surrounding communities.</p>

  <h2>What Happens After the Inspection?</h2>

  <p>Within 24-48 hours of your inspection, you'll receive:</p>

  <ul>
    <li><strong>Written inspection report</strong> with detailed findings</li>
    <li><strong>Digital photo documentation</strong> organized by roof section</li>
    <li><strong>Repair recommendations</strong> prioritized by urgency (immediate, near-term, monitor)</li>
    <li><strong>Cost estimates</strong> for recommended repairs</li>
    <li><strong>Certification letter</strong> (if roof qualifies for 5-year certification)</li>
  </ul>

  <p>If repairs are needed, we provide detailed proposals with line-item pricing. If your roof is in good condition, we'll document that and provide maintenance recommendations to maximize its lifespan.</p>

  <h2>Related Services</h2>

  <ul>
    <li><strong><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Roof Repair Services</a></strong> – Address issues identified during inspection</li>
    <li><strong><a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Roof Replacement Process</a></strong> – When repair is no longer viable</li>
  </ul>

  <div style="background: #f3f4f6; border-left: 4px solid #dc2626; padding: 1rem; margin: 2rem 0;">
    <p style="margin: 0; font-weight: 600;">📞 Schedule a professional roof inspection today</p>
    <p style="margin: 0.5rem 0 0 0;">Call <strong style="color: #dc2626;">(754) 227-5605</strong> or <a href="/contact" style="color: #dc2626; text-decoration: underline;">request an inspection online</a>. Licensed CCC-1331464 with 5-year certification authority.</p>
  </div>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * CUSTOM: Roof Cost Calculator Page - /roof-cost-calculator
 * 1,400+ words covering pricing by material, hidden costs, insurance impacts, and comparison guidance
 */
function generateRoofCostCalculatorContent() {
  return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem; background: white; color: #111827;">
  <h1 style="font-size: 2.5rem; font-weight: bold; color: #111827; margin-bottom: 1.5rem; line-height: 1.2;">
    How Much Does a New Roof Cost in South Florida? 2026 Price Guide
  </h1>

  <p style="font-size: 1.25rem; color: #374151; line-height: 1.75; margin-bottom: 2rem;">
    Roof replacement costs in Broward and Palm Beach Counties range from <strong>$10,000 to $70,000+</strong> depending on material choice, roof complexity, and code requirements. This comprehensive guide breaks down actual costs, hidden fees, and what you should compare when evaluating roofing proposals.
  </p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <p style="font-size: 1.125rem; font-weight: 600; color: #991b1b; margin-bottom: 0.5rem;">
      Get Your Free Roof Cost Estimate: <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a>
    </p>
    <p style="color: #374151; line-height: 1.75;">
      Itemized pricing with no hidden fees. Dual-licensed contractor serving Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Roof Costs Vary So Much in Broward & Palm Beach County
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    South Florida is designated as a <strong>High-Velocity Hurricane Zone (HVHZ)</strong>, which means every roof installation must meet significantly stricter requirements than standard building codes. These requirements aren't optional suggestions — they're mandatory for building permit approval and insurance coverage.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    HVHZ Requirements That Affect Cost
  </h3>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>NOA-Rated Products:</strong> All roofing materials must carry a valid Florida Product Approval (Notice of Acceptance) demonstrating they've been lab-tested to withstand 175+ mph winds. NOA-rated products cost 15-25% more than standard products.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Enhanced Fastening Schedules:</strong> HVHZ installations require significantly more fasteners, closer spacing, and specific patterns compared to standard installations. This increases both material and labor costs.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Wind-Resistant Underlayment:</strong> Self-adhered underlayment is typically required in HVHZ for secondary water protection. Standard felt paper is not acceptable for permit approval.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Roof-to-Wall Connections:</strong> Hurricane straps, clips, and structural tie-downs must meet specific engineering requirements. Many older homes require these connections to be retrofitted during re-roofing.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Permit and Inspection Costs:</strong> Broward County permit costs range from $200 to $1,000+ depending on project scope. Multiple inspections are required throughout the installation process.</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>The bottom line:</strong> HVHZ requirements add 20-35% to roofing costs compared to non-coastal regions. But these requirements protect your investment and are mandatory for insurance compliance. Cutting corners on HVHZ requirements means your roof won't pass inspection and your insurance may deny claims.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Roof Replacement Cost by Material
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Material choice is the largest cost driver in roof replacement. Here's what you can expect for a typical 2,000 square foot home in South Florida:
  </p>

  <div style="overflow-x: auto; margin: 2rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
      <thead>
        <tr style="background: #f9fafb; border-bottom: 2px solid #e5e7eb;">
          <th style="padding: 0.75rem; text-align: left; font-weight: 600; color: #111827;">Material</th>
          <th style="padding: 0.75rem; text-align: left; font-weight: 600; color: #111827;">Cost Per Sq Ft (Installed)</th>
          <th style="padding: 0.75rem; text-align: left; font-weight: 600; color: #111827;">Typical 2,000 Sq Ft Home</th>
          <th style="padding: 0.75rem; text-align: left; font-weight: 600; color: #111827;">Expected Lifespan</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">Architectural Asphalt Shingles</a></td>
          <td style="padding: 0.75rem; color: #374151;">$5–$9/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$10,000–$18,000</td>
          <td style="padding: 0.75rem; color: #374151;">15–25 years</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">Luxury Asphalt Shingles</a></td>
          <td style="padding: 0.75rem; color: #374151;">$9–$17/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$18,000–$34,000</td>
          <td style="padding: 0.75rem; color: #374151;">25–30 years</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">Concrete Tile</a></td>
          <td style="padding: 0.75rem; color: #374151;">$9–$19/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$18,000–$38,000</td>
          <td style="padding: 0.75rem; color: #374151;">50+ years</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">Clay Tile</a></td>
          <td style="padding: 0.75rem; color: #374151;">$12–$21/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$24,000–$42,000</td>
          <td style="padding: 0.75rem; color: #374151;">75–100+ years</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Standing Seam Metal</a></td>
          <td style="padding: 0.75rem; color: #374151;">$10–$35/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$20,000–$70,000</td>
          <td style="padding: 0.75rem; color: #374151;">40–60 years</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Exposed Fastener Metal</a></td>
          <td style="padding: 0.75rem; color: #374151;">$7–$12/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$14,000–$24,000</td>
          <td style="padding: 0.75rem; color: #374151;">25–40 years</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">TPO Flat Roofing</a></td>
          <td style="padding: 0.75rem; color: #374151;">$4–$9/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$8,000–$18,000</td>
          <td style="padding: 0.75rem; color: #374151;">25–30 years</td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 0.75rem; color: #374151;"><a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">Modified Bitumen</a></td>
          <td style="padding: 0.75rem; color: #374151;">$3–$5/sq ft</td>
          <td style="padding: 0.75rem; color: #374151;">$6,000–$10,000</td>
          <td style="padding: 0.75rem; color: #374151;">15–20 years</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="background: #fffbeb; border: 2px solid #f59e0b; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #92400e; margin-bottom: 0.5rem;">Understanding "Per Square Foot" Pricing</h4>
    <p style="color: #374151; line-height: 1.75;">
      Roofing costs are typically quoted per square foot of <strong>roof surface area</strong>, not home square footage. A 2,000 sq ft home typically has 2,200–2,600 sq ft of actual roof surface due to pitch and overhangs. Always verify whether quotes reference roof area or living space.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Hidden Costs Most Contractors Won't Mention
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    The base material cost is only part of your total investment. Here are the additional costs that often surprise homeowners:
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Tear-Off and Disposal
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Cost: $0.40–$2.00 per square foot</strong><br>
    Removing your existing roof and hauling debris to a landfill. Tile and concrete are significantly more expensive to remove than shingles due to weight. Some contractors include this in their base price; others quote it separately. Always verify what's included.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Underlayment Replacement
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Cost: $1.50–$2.10 per square foot</strong><br>
    Self-adhered synthetic underlayment is required in HVHZ for secondary water protection and insurance compliance. This is a separate cost from the roof covering material. Standard felt paper is not acceptable for permit approval in high-wind zones.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Rotten Decking Replacement
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Cost: $2–$5 per square foot (per damaged section)</strong><br>
    You won't know the extent of deck damage until the old roof is removed. South Florida's humidity means many roofs have hidden wood rot that isn't visible from the surface. Budget 5-15% of your project cost for potential wood replacement. All Phase Construction provides per-sheet pricing in advance so there are no surprises.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Code-Required HVHZ Upgrades
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Cost: Varies by home age and existing compliance</strong><br>
    Homes built before 2002 often require roof-to-wall connection upgrades (hurricane straps, clips) to meet current HVHZ standards. Your contractor should evaluate this during inspection and include it in the proposal. Skipping these upgrades means your roof won't pass final inspection.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Permit and Inspection Fees
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <strong>Cost: $200–$1,000+ depending on project scope</strong><br>
    All roof replacements in Broward and Palm Beach Counties require building permits. Permit costs vary by municipality and project value. Multiple inspections are required throughout the project. Your contractor should handle all permitting — if they ask you to pull the permit, that's a red flag.
  </p>

  <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h4 style="font-size: 1.125rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">All Phase Construction Transparency Guarantee</h4>
    <p style="color: #374151; line-height: 1.75;">
      We provide <strong>itemized written estimates</strong> that break down every cost: materials, labor, tear-off, underlayment, permits, and contingency pricing for potential wood replacement. No surprise charges. No hidden fees. What we quote is what you pay.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    How Your Roof Affects Insurance Premiums
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Your roof has a direct impact on homeowner's insurance costs in Florida. Insurers assess roof condition, material type, and installation quality when calculating premiums and determining coverage eligibility.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    Insurance Discounts for Hurricane-Resistant Roofs
  </h3>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    <a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">Metal</a> and <a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">tile roofs</a> often qualify for <strong>25-35% homeowner's insurance premium reductions</strong> in Florida when properly documented. These materials provide superior wind resistance and impact protection compared to shingles.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    To qualify for maximum discounts, you need:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Wind mitigation inspection</strong> documenting roof-to-wall connections, roof deck attachment, roof covering type, and secondary water resistance</li>
    <li style="margin-bottom: 0.5rem;"><strong>Permit final inspection documentation</strong> from a <a href="/licensed-roofing-contractor" style="color: #dc2626; text-decoration: underline;">licensed contractor</a> showing HVHZ compliance</li>
    <li style="margin-bottom: 0.5rem;"><strong>Product approval documentation</strong> (NOA numbers) for all roofing materials used</li>
  </ul>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    My Safe Florida Home Program
  </h3>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    The state of Florida offers grants and matching funds for homeowners making hurricane-resistant improvements, including roof replacement. The <strong>My Safe Florida Home</strong> program provides:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;">Free home inspections to identify wind vulnerabilities</li>
    <li style="margin-bottom: 0.5rem;">Mitigation recommendations and cost estimates</li>
    <li style="margin-bottom: 0.5rem;">Matching grants up to $10,000 for qualifying improvements</li>
  </ul>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Check program availability and eligibility at <a href="https://www.mysafefloridahome.com" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">MySafeFloridaHome.com</a>. All Phase Construction can coordinate with inspectors and provide required documentation for grant applications.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Why Getting 3 Quotes Isn't Enough — What to Actually Compare
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Most homeowners are told to "get three quotes" but aren't given guidance on how to compare them meaningfully. Price alone doesn't tell you anything about quality, scope, or value. Here's what to actually compare:
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    1. Material Specifications (Not Just "Shingles" or "Tile")
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Two "shingle" bids can vary by $10,000 because one uses 3-tab shingles with 20-year warranties while the other uses architectural shingles with lifetime warranties. Verify:
  </p>
  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li>Specific manufacturer and product line</li>
    <li>Product weight/thickness (heavier = better quality)</li>
    <li>Warranty length and coverage (material vs. labor)</li>
    <li>NOA approval numbers for HVHZ compliance</li>
  </ul>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    2. Labor Warranty vs. Manufacturer Warranty
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Manufacturer warranties cover material defects (rare). Labor warranties cover installation defects (common). A contractor offering a 50-year manufacturer warranty with only a 1-year labor warranty is telling you they don't stand behind their work. All Phase Construction provides a <strong>10-year workmanship warranty</strong> on all <a href="/residential-roofing" style="color: #dc2626; text-decoration: underline;">residential roofing</a> installations.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    3. What's Included in "Tear-Off"
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Some contractors quote tear-off but exclude disposal fees, dumpster rental, or debris cleanup. Others include full site restoration with landscaping protection. Verify exactly what cleanup and disposal services are included in the quoted price.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    4. Who Pulls the Permit
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Licensed contractors are required to pull permits for their own work. If a contractor asks you to pull the permit, they're either not properly licensed or trying to avoid inspection requirements. This is a major red flag. The contractor should handle all permitting and inspections.
  </p>

  <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem;">
    5. Insurance Coverage (General Liability AND Workers' Comp)
  </h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Many contractors carry general liability insurance but skip workers' compensation coverage to save money. If an uninsured worker is injured on your property, <strong>you</strong> are liable. Always verify both coverages and request certificates of insurance before signing a contract.
  </p>

  <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Dual-Licensed Contractor Advantage</h3>
    <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
      All Phase Construction holds both <strong>State Certified Roofing Contractor (CCC-1331464)</strong> and <strong>Certified General Contractor (CGC-1526236)</strong> licenses. This dual licensing means we can handle structural work, wood replacement, and building envelope repairs under one contract — no need to coordinate multiple contractors for a complete roof replacement.
    </p>
  </div>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Financing Options for Roof Replacement
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Most homeowners finance roof replacement through home equity loans, personal loans, or contractor financing programs. All Phase Construction works with several financing partners to provide flexible payment options. Learn more about available <a href="/easy-payments" style="color: #dc2626; text-decoration: underline;">financing programs</a> and qualification requirements.
  </p>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Service Areas
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction provides roof replacement and <a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">repair services</a> throughout Broward and Palm Beach Counties, including:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach</a> (headquarters)</li>
    <li style="margin-bottom: 0.5rem;"><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton</a></li>
    <li style="margin-bottom: 0.5rem;">Fort Lauderdale, Coral Springs, Pompano Beach, Delray Beach, Boynton Beach, West Palm Beach, and all surrounding communities</li>
  </ul>

  <h2 style="font-size: 2rem; font-weight: bold; color: #111827; margin-top: 3rem; margin-bottom: 1rem;">
    Get Your Free Roof Cost Estimate
  </h2>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    All Phase Construction provides free, no-pressure roof inspections and detailed cost estimates with itemized pricing. We'll evaluate your roof's condition, explain your material options, and provide transparent pricing with no hidden fees.
  </p>

  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    Schedule your free estimate:
  </p>

  <ul style="color: #374151; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Call:</strong> <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a></li>
    <li style="margin-bottom: 0.5rem;"><strong>Online:</strong> <a href="/contact" style="color: #dc2626; text-decoration: underline;">Request an estimate</a></li>
    <li style="margin-bottom: 0.5rem;"><strong>Learn More:</strong> Read our <a href="/reviews" style="color: #dc2626; text-decoration: underline;">customer reviews</a> and view our <a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">roof replacement process</a></li>
  </ul>

  <div style="background: #f3f4f6; border: 2px solid #dc2626; padding: 2rem; margin: 3rem 0; border-radius: 8px; text-align: center;">
    <h3 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">
      Ready to Get Started?
    </h3>
    <p style="font-size: 1.125rem; color: #374151; margin-bottom: 1.5rem;">
      Dual-licensed roofing contractor serving Broward & Palm Beach Counties. CCC-1331464 | CGC-1526236
    </p>
    <p style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">
      Call <a href="tel:+17542275605" style="color: #dc2626; text-decoration: underline;">(754) 227-5605</a> for Your Free Estimate
    </p>
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
function generateHowToHireContent() {
  return `
<section id="seo-static-content">
  <h1>How to Hire a Roofing Contractor in Deerfield Beach, Florida</h1>

  <h2>What Homeowners in Broward & Palm Beach County Need to Know About HVHZ, Wind Mitigation, and Insurance Savings</h2>

  <p>Roofing in Southeast Florida is fundamentally different from roofing in other parts of the country. This region operates under some of the most stringent building codes in the United States—specifically the High Velocity Hurricane Zone (HVHZ) provisions of the Florida Building Code—and homeowners' insurance carriers require documentation that most roofers elsewhere never think about.</p>

  <p>This guide applies to Deerfield Beach and the surrounding service areas throughout Broward and Palm Beach Counties. Whether you live in Boca Raton, Coral Springs, Pompano Beach, Delray Beach, or any other city in this region, the principles outlined here will help you make an informed decision when hiring a roofing contractor.</p>

  <h2>Why Hiring a Roofer in South Florida Is Different</h2>

  <p>The High Velocity Hurricane Zone designation triggers additional requirements that go far beyond standard roofing practices:</p>

  <ul>
    <li><strong>Uplift Resistance:</strong> Every component must be rated and installed to resist wind uplift. Fastening patterns, adhesives, and attachment methods are all subject to code requirements and third-party inspection.</li>
    <li><strong>Secondary Water Barriers:</strong> HVHZ requires continuous secondary water barrier systems beneath the primary roof covering to prevent water intrusion during severe weather events.</li>
    <li><strong>Roof-to-Wall Connections:</strong> The connection between your roof structure and your walls must meet specific load ratings. This often requires strapping, additional fasteners, and structural reinforcement.</li>
    <li><strong>Inspection Rigor:</strong> Building inspectors in Broward and Palm Beach Counties are trained to verify HVHZ compliance. Installations that pass inspection in other states would fail here.</li>
  </ul>

  <p>Not all roofers are qualified to work in this environment. A contractor licensed in another state—or even in North Florida—may not understand HVHZ requirements. Always <a href="/licensed-roofing-contractor">verify that your contractor is licensed</a> specifically for work in Southeast Florida and has a demonstrated track record of passing inspections in Broward or Palm Beach County.</p>

  <h2>Why Dual Licensing Matters in Southeast Florida</h2>

  <p>Many homeowners don't realize there's a critical difference between a roofing-only contractor and a dual-licensed roofing and general contractor. Here's why it matters:</p>

  <h3>What Dual Licensing Covers</h3>

  <ul>
    <li><strong>Roof Strapping:</strong> Installing or reinforcing hurricane straps connecting the roof structure to the wall framing requires general contractor authority.</li>
    <li><strong>Third Nail Requirements:</strong> Adding required fasteners at structural connections goes beyond surface roofing work.</li>
    <li><strong>Structural Tie-Ins:</strong> Connecting roof components to the load-bearing structure of the building is general contracting work.</li>
    <li><strong>Decking Replacement:</strong> When roof decking must be replaced due to rot or structural damage, this requires general contracting capabilities.</li>
  </ul>

  <h3>Red Flags: The Problem with Single-License Contractors</h3>

  <p>When a roofing-only contractor discovers structural work is needed, they must stop and hire a separate general contractor. This creates:</p>

  <ul>
    <li>Multiple permits and permit fees</li>
    <li>Coordination delays between two separate contractors</li>
    <li>Scheduling conflicts and extended project timelines</li>
    <li>Increased liability exposure (who's responsible if something fails?)</li>
    <li>Higher total costs due to subcontractor markups</li>
  </ul>

  <p><strong>All Phase Construction USA holds both a General Contractor license (CGC-1526236) and a Roofing Contractor license (CCC-1331464).</strong> This means we can handle the entire scope of work under one permit, with faster inspections, clearer accountability, and reduced overall project risk.</p>

  <h2>How to Verify a Contractor's License in Florida</h2>

  <p>Verifying a Florida contractor's license is straightforward and critical:</p>

  <ol>
    <li>Go to <strong>myfloridalicense.com</strong> and use the "Verify a Licensee" tool</li>
    <li>Search by the contractor's name or license number</li>
    <li>Confirm the license is <strong>active</strong>, in the correct category (CCC for roofing or CGC for general contractor), and not suspended or under disciplinary action</li>
    <li>Check the license history for any complaints or violations</li>
  </ol>

  <p>Never hire a contractor who cannot provide a Florida state license number or who asks you to pull the permit yourself. This is a major red flag indicating the contractor may be unlicensed or attempting to avoid accountability.</p>

  <h2>Insurance Requirements and How to Confirm Coverage</h2>

  <p>Before any work begins, verify that your contractor carries adequate insurance:</p>

  <ul>
    <li><strong>General Liability Insurance:</strong> Protects your property from damage during the project</li>
    <li><strong>Workers' Compensation Insurance:</strong> Covers injuries to workers on your property</li>
    <li>Request <strong>certificates of insurance directly from the insurance carrier</strong>, not from the contractor</li>
    <li>Verify the policy is current and covers the dates of your project</li>
  </ul>

  <p>If a contractor is unwilling or unable to provide proof of insurance, do not proceed. You could be held liable for injuries or property damage if they are uninsured.</p>

  <h2>Wind Mitigation, Insurance Discounts, and Why Documentation Is Critical</h2>

  <p>Many South Florida homeowners are unknowingly leaving money on the table. Insurance carriers offer substantial premium discounts for hurricane-resistant features—but only if you can prove they exist.</p>

  <h3>What Is a Wind Mitigation Report?</h3>

  <p>A wind mitigation report is a documented inspection that verifies hurricane-resistant features of your home's roof and structure. It includes:</p>

  <ul>
    <li>Roof covering type and attachment method</li>
    <li>Roof deck attachment (fastening pattern and spacing)</li>
    <li>Roof-to-wall connection strength</li>
    <li>Roof geometry (hip vs. gable)</li>
    <li>Secondary water resistance (peel-and-stick underlayment)</li>
    <li>Opening protection (impact-rated windows and doors)</li>
  </ul>

  <p>Insurance companies use this report to calculate your eligibility for premium discounts. Depending on the features documented, these discounts can save homeowners hundreds or even thousands of dollars annually.</p>

  <h3>Why Your Roofer Should Complete This Report</h3>

  <p>The contractor who installs your roof has firsthand knowledge of every component installed and can document it accurately. Many roofers skip this step, leaving homeowners to hire a separate inspector months or years later—if they ever realize the benefit exists at all.</p>

  <p><strong>All Phase Construction USA prepares wind mitigation reports for every qualifying roof installation.</strong> We ensure you receive the documentation needed to maximize your insurance savings immediately.</p>

  <h2>Contractor Comparison Checklist: Key Questions to Ask</h2>

  <p>When evaluating roofing contractors in South Florida, ask these critical questions:</p>

  <h3>Licensing and Credentials</h3>

  <ul>
    <li>What is your Florida contractor license number? (Verify at myfloridalicense.com)</li>
    <li>Are you licensed as a roofing contractor, general contractor, or both?</li>
    <li>How long have you been licensed in Florida?</li>
    <li>Can you provide references from recent projects in Broward or Palm Beach County?</li>
  </ul>

  <h3>HVHZ Compliance and Permitting</h3>

  <ul>
    <li>Do you pull permits for all roofing work?</li>
    <li>Are your installations HVHZ-compliant?</li>
    <li>What is your permit pass rate with local building departments?</li>
    <li>Will you provide copies of all permits and final inspection reports?</li>
  </ul>

  <h3>Insurance and Documentation</h3>

  <ul>
    <li>Can you provide current certificates of general liability and workers' compensation insurance?</li>
    <li>Do you document the installation process with photographs?</li>
    <li>Will you prepare a wind mitigation report after installation?</li>
    <li>What warranty coverage do you provide on labor and materials?</li>
  </ul>

  <h3>Project Details</h3>

  <ul>
    <li>What property protection systems do you use? (Catch-All, Equipter, etc.)</li>
    <li>How do you handle wood replacement pricing? (Should be specified in writing before work begins)</li>
    <li>What is your typical project timeline?</li>
    <li>Who will be my point of contact during the project?</li>
  </ul>

  <h2>HVHZ-Specific Hiring Considerations for Broward and Palm Beach County</h2>

  <p>High Velocity Hurricane Zone requirements are non-negotiable in South Florida. When hiring a contractor, verify they understand:</p>

  <ul>
    <li><strong>Product Approvals:</strong> All materials must carry a valid Florida Product Approval (Notice of Acceptance)</li>
    <li><strong>Fastening Schedules:</strong> Specific nailing patterns and spacing requirements based on wind load calculations</li>
    <li><strong>Secondary Water Resistance:</strong> Self-adhered underlayment requirements for insurance discounts</li>
    <li><strong>Roof-to-Wall Connections:</strong> Hurricane strapping and structural tie-down requirements</li>
    <li><strong>Inspection Compliance:</strong> Understanding what inspectors verify and how to document compliance</li>
  </ul>

  <h2>How to Evaluate Bids and Avoid Lowball Scams</h2>

  <p>The lowest bid is rarely the best value. Here's how to evaluate roofing proposals properly:</p>

  <h3>Warning Signs of a Lowball Bid</h3>

  <ul>
    <li>Significantly lower than other bids (often 30-50% below market)</li>
    <li>Vague or incomplete scope of work descriptions</li>
    <li>No mention of permits, inspections, or compliance requirements</li>
    <li>Pressure to sign immediately or pay large deposits upfront</li>
    <li>Contractor asks you to pull the permit</li>
    <li>No written warranty or guarantee provided</li>
  </ul>

  <h3>What a Quality Bid Should Include</h3>

  <ul>
    <li>Detailed scope of work with specific materials and methods</li>
    <li>Permit costs and inspection requirements clearly stated</li>
    <li>Wood replacement pricing (per sheet or linear foot) specified in advance</li>
    <li>Timeline with realistic completion dates</li>
    <li>Payment schedule tied to project milestones, not upfront lump sums</li>
    <li>Warranty details for both labor and materials</li>
    <li>Contractor license numbers and insurance information</li>
  </ul>

  <h2>Contract Essentials: What Must Be in Writing</h2>

  <p>Your roofing contract should be comprehensive and protect both parties. Essential elements include:</p>

  <ul>
    <li><strong>Scope of Work:</strong> Detailed description of all work to be performed</li>
    <li><strong>Materials Specifications:</strong> Brand, type, color, and grade of all materials</li>
    <li><strong>Total Cost:</strong> Itemized pricing with contingency pricing for potential wood replacement</li>
    <li><strong>Payment Schedule:</strong> Tied to project milestones (deposit, material delivery, completion, final inspection)</li>
    <li><strong>Project Timeline:</strong> Start date, expected completion, and weather delay provisions</li>
    <li><strong>Permit and Inspection Requirements:</strong> Who pulls permits and provides final inspection reports</li>
    <li><strong>Warranty Coverage:</strong> Labor warranty, manufacturer warranty, and claims process</li>
    <li><strong>Change Order Process:</strong> How additional work will be documented and approved</li>
    <li><strong>Cleanup and Disposal:</strong> Debris removal and site restoration responsibilities</li>
  </ul>

  <h2>Understanding Warranty Types and What to Look For</h2>

  <p>Roofing warranties are complex. Understanding the difference between warranty types is critical:</p>

  <h3>Manufacturer Material Warranty</h3>

  <p>Covers defects in the roofing materials themselves (shingles, tiles, metal panels, underlayment). Typical coverage ranges from 20-50 years depending on the product. Important: manufacturer warranties typically do NOT cover labor costs to remove and replace defective materials.</p>

  <h3>Contractor Labor Warranty</h3>

  <p>Covers workmanship and installation defects. A quality contractor should provide a minimum 5-10 year labor warranty. This covers leaks and failures resulting from improper installation, not material defects.</p>

  <h3>System Warranties (Enhanced Coverage)</h3>

  <p>Some manufacturers offer enhanced system warranties when all components (underlayment, roof covering, flashings, ventilation) come from the same manufacturer and are installed by certified contractors. These provide longer coverage and may include labor costs.</p>

  <h3>What to Verify About Any Warranty</h3>

  <ul>
    <li>Is it transferable to a new owner if you sell your home?</li>
    <li>What voids the warranty? (Common: unpermitted modifications, pressure washing, lack of maintenance)</li>
    <li>Does it cover labor costs or just materials?</li>
    <li>What is the claims process and response time?</li>
    <li>Is the warranty prorated or non-prorated?</li>
  </ul>

  <h2>Related Resources</h2>

  <ul>
    <li><a href="/licensed-roofing-contractor">Understanding Florida Roofing Contractor Licenses</a></li>
    <li><a href="/roof-inspection">Professional Roof Inspection Services</a></li>
    <li><a href="/pricing-guide">South Florida Roof Replacement Cost Guide</a></li>
    <li><a href="/roof-cost-calculator/">Free Roof Cost Calculator</a></li>
    <li><a href="/roof-replacement-process">The Roof Replacement Process: What to Expect</a></li>
  </ul>

  <h2>Ready to Hire a Professional Roofing Contractor?</h2>

  <p>Schedule a comprehensive roof assessment with All Phase Construction USA. We'll evaluate your roof's condition, explain your options, provide transparent pricing, and answer all your questions. Call <strong>(754) 227-5605</strong> for a free professional inspection.</p>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

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
    throw new Error('ÃÂ¢ÃÃ dist/index.html not found. Run npm run build first.');
  }
  const template = fs.readFileSync(distIndexPath, 'utf-8');
  if (template.includes('/src/main.tsx')) {
    throw new Error('ÃÂ¢ÃÃ Dev build detected. Run npm run build first.');
  }
  CLEAN_VITE_TEMPLATE = template;
  console.log('ÃÂ¢ÃÃ Clean Vite template locked in memory.');
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
  // Always inject base RoofingContractor schema on every prerendered page
  const baseOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#organization',
    name: 'All Phase Construction USA',
    url: 'https://allphaseconstructionfl.com',
    telephone: '+17542275605',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.3184, longitude: -80.0998 },
    areaServed: [
      { '@type': 'State', name: 'Florida' },
      { '@type': 'County', name: 'Broward County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Palm Beach County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Deerfield Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Boca Raton', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Fort Lauderdale', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Pompano Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Coral Springs', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Parkland', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Coconut Creek', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Delray Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Boynton Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'West Palm Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Lake Worth Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Palm Beach Gardens', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Jupiter', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Wellington', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Hollywood', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Plantation', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Sunrise', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Davie', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Pembroke Pines', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Miramar', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Weston', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Margate', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Tamarac', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Lighthouse Point', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Oakland Park', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Lantana', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Royal Palm Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Greenacres', containedInPlace: { '@type': 'State', name: 'Florida' } }
    ],
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Roof Replacement', itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shingle Roof Replacement', description: 'Full tear-off and replacement with architectural shingles, HVHZ compliant', url: 'https://allphaseconstructionfl.com/shingle-roofing' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: 10000, maxPrice: 18000 } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tile Roof Replacement', description: 'Concrete and clay tile installation with foam adhesion for HVHZ compliance', url: 'https://allphaseconstructionfl.com/tile-roofing' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: 20000, maxPrice: 40000 } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Roof Replacement', description: 'Standing seam metal roofing with mechanically seamed panels rated 175+ mph', url: 'https://allphaseconstructionfl.com/metal-roofing' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: 24000, maxPrice: 50000 } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flat Roof Replacement', description: 'TPO, PVC, and modified bitumen systems for flat and low-slope roofs', url: 'https://allphaseconstructionfl.com/flat-roofing' } }
        ]},
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair', description: '24/7 emergency roof leak repair and storm damage repair in Broward and Palm Beach County', url: 'https://allphaseconstructionfl.com/roof-repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Inspection', description: 'Free 21-point roof inspection with photo documentation and thermal imaging', url: 'https://allphaseconstructionfl.com/roof-inspection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Roofing', description: 'Full-service commercial roofing for flat and low-slope buildings', url: 'https://allphaseconstructionfl.com/commercial-roofing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wind Mitigation Inspection', description: 'Insurance discount qualification inspections documenting hurricane-resistant roof features' } }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '137',
      bestRating: '5',
      worstRating: '1'
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '15:00' }
    ],
    sameAs: [
      'https://www.bbb.org/us/fl/deerfield-beach/profile/roofing-contractors/all-phase-construction-usa-0633-92029436',
      'https://www.google.com/maps/place/All+Phase+Construction+USA/',
      'https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=0f8e6a98a0a5c68c5c7b8a5c'
    ],
    knowsAbout: [
      'Roof Replacement',
      'Roof Repair',
      'Hurricane Damage Roof Repair',
      'HVHZ High Velocity Hurricane Zone Roofing',
      'Wind Mitigation Inspections',
      'Tile Roofing',
      'Metal Roofing',
      'Shingle Roofing',
      'Flat Roofing Systems',
      'TPO and PVC Membrane Roofing',
      'Storm Damage Assessment',
      'Insurance Claim Assistance',
      '40-Year Recertification Inspections',
      'Commercial Roofing',
      'Residential Roofing',
      'Roof Inspections South Florida',
      'Florida Building Code Compliance'
    ],
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Robert M.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2024-06-15',
        reviewBody: 'All Phase Construction replaced our entire roof after Hurricane Irma. From the initial inspection through the final walkthrough, every step was communicated clearly. The crew was professional, the job site was spotless every evening, and they handled the permit process and inspection coordination seamlessly.'
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jennifer K.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2024-08-22',
        reviewBody: 'We had three other roofing companies come out for estimates, and All Phase was the only one that took the time to explain the code requirements for our area. They did not just sell us a roof, they educated us on what we actually needed. The 160 MPH wind warranty gives us real peace of mind.'
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Carlos D.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2024-10-03',
        reviewBody: 'Professional from start to finish. They pulled all permits, coordinated the inspection, and cleaned up like they were never there. Our new tile roof looks incredible and we have complete peace of mind going into hurricane season.'
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David L.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2025-01-10',
        reviewBody: 'I have used All Phase for two properties now, one residential and one commercial flat roof. Both projects were completed on time and on budget. Their dual licensing as both a roofing contractor and general contractor meant they handled everything under one permit.'
      }
    ],
    additionalType: [
      'https://www.wikidata.org/wiki/Q11415896',
      'https://www.wikidata.org/wiki/Q631799'
    ],
    paymentAccepted: 'Cash, Credit Card, Check, Financing Available',
    currenciesAccepted: 'USD',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Better Business Bureau',
        url: 'https://www.bbb.org'
      },
      {
        '@type': 'Organization',
        name: 'Broward County Chamber of Commerce'
      },
      {
        '@type': 'Organization',
        name: 'Chamber of the Palm Beaches'
      }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Roof Replacement',
          description: 'Complete roof replacement for homes in South Florida including tile, metal, shingle, and flat roof systems engineered for HVHZ compliance.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Roofing',
          description: 'Commercial roofing installation and replacement including TPO, PVC, modified bitumen, and built-up roofing systems for businesses.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Repair and Emergency Service',
          description: 'Emergency and scheduled roof repair services for storm damage, leaks, and general deterioration across Broward and Palm Beach counties.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Inspection and Wind Mitigation',
          description: 'Professional roof inspections, wind mitigation reports for insurance discounts, and 40-year recertification inspections for Broward County buildings.'
        }
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Florida State Certified Roofing Contractor',
        description: 'State of Florida Certified Roofing Contractor license authorizing roofing installation, repair, and replacement throughout Florida.',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Florida Department of Business and Professional Regulation',
          url: 'https://www.myfloridalicense.com'
        },
        validIn: {
          '@type': 'AdministrativeArea',
          name: 'Florida, United States'
        },
        identifier: 'CCC-1331464'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Florida Certified General Contractor',
        description: 'State of Florida Certified General Contractor license authorizing general construction, structural modifications, and building projects throughout Florida.',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Florida Department of Business and Professional Regulation',
          url: 'https://www.myfloridalicense.com'
        },
        validIn: {
          '@type': 'AdministrativeArea',
          name: 'Florida, United States'
        },
        identifier: 'CGC-1526236'
      }
    ]
  };
  // Use page-specific schema if it's already a RoofingContractor (don't double-inject)
  const schemaToInject = (jsonLdSchema && (jsonLdSchema['@type'] === 'RoofingContractor' || (Array.isArray(jsonLdSchema) && jsonLdSchema[0]?.['@type'] === 'RoofingContractor')))
    ? null
    : baseOrgSchema;
  let schemasBlock = schemaToInject
    ? `\n    <script type="application/ld+json">\n${JSON.stringify(schemaToInject, null, 2)}\n    </script>`
    : '';
  if (jsonLdSchema) {
    schemasBlock += `\n    <!-- Page-Specific JSON-LD Schema -->\n    <script type="application/ld+json">\n${JSON.stringify(jsonLdSchema, null, 2)}\n    </script>`;
  }

  // Add Speakable WebPage schema for AI assistant featured snippets
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': canonical + '#webpage',
    url: canonical,
    name: title,
    description: description,
    isPartOf: { '@id': 'https://allphaseconstructionfl.com/#website' },
    about: { '@id': 'https://allphaseconstructionfl.com/#organization' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.faq-answer', '[data-speakable]', 'meta[name="description"]']
    }
  };
  schemasBlock += `\n    <!-- Speakable WebPage Schema -->\n    <script type="application/ld+json">\n${JSON.stringify(speakableSchema, null, 2)}\n    </script>`;

  // Generate BreadcrumbList schema from canonical URL (unless already included in jsonLdSchema array)
  const hasExistingBreadcrumb = Array.isArray(jsonLdSchema) && jsonLdSchema.some(s => s['@type'] === 'BreadcrumbList');
  if (!hasExistingBreadcrumb && canonical) {
    const urlPath = canonical.replace('https://allphaseconstructionfl.com', '');
    const breadcrumbItems = [{ name: 'Home', url: 'https://allphaseconstructionfl.com/' }];
    if (urlPath && urlPath !== '/') {
      const segments = urlPath.replace(/^\/|\/$/g, '').split('/');
      let currentPath = '';
      segments.forEach((segment, i) => {
        currentPath += '/' + segment;
        const name = segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        breadcrumbItems.push({
          name: i === 0 && segment === 'locations' ? 'Locations' : name,
          url: 'https://allphaseconstructionfl.com' + currentPath
        });
      });
    }
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
    schemasBlock += `\n    <!-- BreadcrumbList Schema -->\n    <scr` + `ipt type="application/ld+json">\n${JSON.stringify(breadcrumbSchema, null, 2)}\n    </scr` + `ipt>`;
  }

  // Geo meta tags for local SEO and AI crawler geographic targeting
  schemasBlock += '\n    <meta name="geo.region" content="US-FL" />';
  schemasBlock += '\n    <meta name="geo.placename" content="Deerfield Beach" />';
  schemasBlock += '\n    <meta name="geo.position" content="26.3184;-80.0998" />';
  schemasBlock += '\n    <meta name="ICBM" content="26.3184, -80.0998" />';
  schemasBlock += '\n    <meta property="og:locale" content="en_US" />';
  schemasBlock += '\n    <meta name="author" content="All Phase Construction USA" />';


  html = html.replace('</head>', schemasBlock + '\n  </head>');

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
      throw new Error('ÃÂ¢ÃÃ Could not find root div or closing body tag in template.');
    }

    // Inject static crawler links before </body>
  const staticCrawlerLinks = `
<!-- Static internal links for crawlers -->
<div style="display:none" aria-hidden="true">
  <a href="/roofing-services">Roofing Services</a>
  <a href="/residential-roofing">Residential Roofing</a>
  <a href="/commercial-roofing">Commercial Roofing</a>
  <a href="/shingle-roofing">Shingle Roofing</a>
  <a href="/metal-roofing">Metal Roofing</a>
  <a href="/flat-roofing">Flat Roofing</a>
  <a href="/tile-roofing">Tile Roofing</a>
  <a href="/roof-repair">Roof Repair</a>
  <a href="/roof-inspection">Roof Inspection</a>
  <a href="/roof-replacement-process">Roof Replacement Process</a>
  <a href="/roof-maintenance-programs">Roof Maintenance Programs</a>
  <a href="/reviews">Reviews</a>
  <a href="/projects">Our Projects</a>
  <a href="/frequently-asked-questions">FAQ</a>
  <a href="/about-us">About Us</a>
  <a href="/contact">Contact</a>
  <a href="/blog">Blog</a>
</div>
`;
  html = html.replace('</body>', staticCrawlerLinks + '</body>');

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
    `ÃÂ¢ÃÃ MISSING METADATA FOR ROUTE: ${normalizedPath}\n` +
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
  console.log('Ã°ÃÃÃÃÂ¯ÃÂ¸Ã  Generating 3-Silo Lead Generation Architecture...\n');

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
    homepageContent(),
    [
      {"@context":"https://schema.org","@type":"WebSite","@id":"https://allphaseconstructionfl.com/#website","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com","description":"HVHZ-certified, dual-licensed roofing contractor serving Broward and Palm Beach County","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://allphaseconstructionfl.com/?q={search_term_string}"},"query-input":"required name=search_term_string"}},
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "How much does a new roof cost in South Florida?", "acceptedAnswer": {"@type": "Answer", "text": "Roof replacement costs in Broward and Palm Beach County typically range from $15,000 to $50,000+ depending on material, roof size, and complexity. Tile roofs are at the higher end; shingle roofs are the most affordable. All Phase Construction USA provides free inspections and detailed estimates. Call (754) 227-5605."}},
          {"@type": "Question", "name": "What is the best roofing material for Florida hurricanes?", "acceptedAnswer": {"@type": "Answer", "text": "For High Velocity Hurricane Zone compliance in Broward and Palm Beach County, mechanically seamed standing seam metal roofing and properly foam-adhered tile roofs offer the highest wind resistance (200+ mph). Architectural shingles with 6-nail patterns and secondary water barriers also perform well when properly installed."}},
          {"@type": "Question", "name": "How do I get insurance discounts for my roof in Florida?", "acceptedAnswer": {"@type": "Answer", "text": "After roof installation, a licensed inspector performs a wind mitigation inspection (OIR-B1-1802 form). Discounts of 30-45% on the windstorm portion of your premium are possible based on roof covering, deck attachment, secondary water resistance, and roof-to-wall connections. All Phase documents these features during installation so inspectors can verify them."}},
          {"@type": "Question", "name": "Do you offer free roof inspections?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Phase Construction USA provides complimentary 21-point roof inspections for homeowners in Broward and Palm Beach County. Our licensed inspectors assess material condition, structural integrity, flashing, ventilation, and HVHZ compliance with detailed photo documentation."}},
          {"@type": "Question", "name": "What areas does All Phase Construction USA serve?", "acceptedAnswer": {"@type": "Answer", "text": "We serve over 50 cities across Broward County and Palm Beach County from our Deerfield Beach headquarters at 590 Goolsby Blvd. Key service areas include Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, West Palm Beach, Delray Beach, Boynton Beach, Parkland, Coconut Creek, and Wellington."}},
          {"@type": "Question", "name": "What should I do if my roof is leaking?", "acceptedAnswer": {"@type": "Answer", "text": "If you notice a roof leak, act fast: move valuables away from the affected area, place a bucket to catch water, and call a licensed roofing contractor immediately. In South Florida, even a small leak can lead to mold growth within 24-48 hours due to our humidity. All Phase Construction USA offers 24/7 emergency roof leak repair across Broward and Palm Beach County. Our team can provide emergency tarping same-day and schedule a full inspection to identify the source — whether it is failed flashing, cracked tiles, or storm damage. Call (754) 227-5605 for immediate roof leak help."}},
          {"@type": "Question", "name": "Do you provide free estimates for roof replacement?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Phase Construction USA provides 100% free estimates for roof replacement, roof repair, and new roofing installations throughout Broward and Palm Beach County. Our free estimate includes a 21-point roof inspection with photo documentation, accurate measurements, an itemized quote covering materials, labor, permits, and engineering — with no hidden fees. There is never any pressure or obligation. We also offer free drone and thermal imaging assessments for larger or hard-to-access roofs. Call (754) 227-5605 or visit our website to schedule your free roofing estimate today."}}
        ]
      }
    ]
  );
  // HOMEPAGE SAFETY: Write to dist/index.html (was public/, now changed for deployment)
  // This WILL overwrite the Vite shell, which is intentional for prerendering
  const homePath = path.join(publicDir, 'index.html');
  console.log('Ã°ÃÃÃ DEBUG: About to write homepage to:', homePath);
  try {
    fs.writeFileSync(homePath, homeHTML);
    console.log('ÃÂ¢ÃÃ Generated: dist/index.html');
    console.log('  File exists after write?', fs.existsSync(homePath));
    console.log('  File size:', fs.statSync(homePath).size, 'bytes');
  } catch (err) {
    console.error('ÃÂ¢ÃÃ ERROR writing homepage:', err);
  }
  totalPages++;

    // ============================================================
  // FAQ & Breadcrumb schema data for service pages
  // Matches what React components render client-side
  // ============================================================
  const SERVICE_PAGE_SCHEMAS = {
    '/shingle-roofing': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Shingle Roofing',
      name: 'Shingle Roofing Installation and Replacement',
      description: 'Architectural and impact-rated asphalt shingle roof installation designed for South Florida HVHZ compliance with enhanced wind resistance.',
      url: 'https://allphaseconstructionfl.com/shingle-roofing',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
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
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Metal Roofing',
      name: 'Metal Roofing Installation',
      description: 'Standing seam and stone-coated metal roof installation with 50+ year lifespans engineered for South Florida hurricane zone wind resistance up to 175+ mph.',
      url: 'https://allphaseconstructionfl.com/metal-roofing',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
      faqs: [
        { question: "What's the difference between standing seam and exposed fastener metal roofing?", answer: "Standing seam has concealed fasteners with panels that interlock at raised seams, providing superior wind resistance and no exposed penetrations. Exposed fastener systems use visible screws through the panel face \u2014 lower cost but require washer maintenance and are more vulnerable to wind uplift in HVHZ jurisdictions." },
        { question: "Is mechanically seamed better than snap-lock for hurricanes?", answer: "Yes. Mechanically seamed panels are physically crimped together, creating a stronger interlock than snap-lock systems that rely on tension alone. For HVHZ applications in Broward and Palm Beach Counties, mechanically seamed standing seam provides superior uplift resistance and is the preferred system for high-wind exposure." },
        { question: "What does clip spacing mean and why does it matter?", answer: "Clip spacing refers to how frequently the hidden clips that attach standing seam panels to the roof deck are installed. Tighter clip spacing increases wind uplift resistance. Florida's High Velocity Hurricane Zone requires specific clip spacing based on wind load calculations \u2014 improper spacing is one of the most common installation deficiencies we find during inspections." },
        { question: "What gauge or thickness metal should I choose?", answer: "For residential standing seam in South Florida, 24-gauge steel is the standard for quality installations. 26-gauge is acceptable for some applications but offers less dent resistance. Thicker gauge (lower number) provides better performance in hail, impact, and high-wind conditions. Aluminum panels are also common in coastal areas for corrosion resistance." },
        { question: "How long does a metal roof last?", answer: "Properly installed metal roofing systems last 40-70 years in Florida conditions. The limiting factor is usually the substrate and fastening system, not the metal panels themselves. Galvalume and Kynar-coated steel panels are particularly durable in South Florida's UV and salt air environment." },
        { question: "What is the best metal roof for hurricanes in Broward County?", answer: "Mechanically seamed standing seam metal roofing is the best choice for hurricane zones in Broward County. It meets HVHZ wind load requirements of 175+ mph, has no exposed fasteners that can fail in uplift, and the interlocking seam design provides the highest wind resistance of any residential roofing system. All Phase Construction USA installs standing seam metal roofs throughout Broward and Palm Beach County with full HVHZ compliance. Call (754) 227-5605 for a free metal roofing estimate." },
        { question: "How much does a metal roof cost in Boca Raton or Fort Lauderdale?", answer: "Standing seam metal roofing in Boca Raton, Fort Lauderdale, and surrounding areas typically costs $12-$22 per square foot installed, or $24,000-$50,000+ for a typical home. The price varies based on panel type (snap-lock vs. mechanically seamed), gauge, coating (Galvalume vs. Kynar), roof complexity, and HVHZ engineering requirements. All Phase provides free estimates with no hidden fees — permits, engineering, and disposal are included." }
      ],
      breadcrumbs: [
        { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
        { name: 'Metal Roofing', url: 'https://allphaseconstructionfl.com/metal-roofing' }
      ]
    },
    '/flat-roofing': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Flat Roofing',
      name: 'Flat Roofing Systems',
      description: 'Flat roof installation and repair including TPO, PVC, modified bitumen, and built-up roofing for commercial and residential properties in South Florida.',
      url: 'https://allphaseconstructionfl.com/flat-roofing',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
      faqs: [
        { question: "How long does a flat roof last in Florida?", answer: "With proper installation and materials, TPO and PVC systems last 20-30 years, and modified bitumen 15-20 years. Poor installation or drainage problems can cut that lifespan in half. The key factors are seam quality, drainage design, and proper HVHZ-compliant installation." },
        { question: "What causes flat roof leaks?", answer: "The most common causes are seam failures from improper heat welding, flashing failures around penetrations such as HVAC units, vents, and pipes, and ponding water that breaks down the membrane over time. In Florida, UV exposure and thermal cycling also accelerate wear if the system is not designed for our climate." },
        { question: "What's the real difference between TPO and PVC?", answer: "When TPO is heat-welded, the seam bonds through adhesion and can be separated with enough force. TPO also requires chalk fillers for fire ratings, which bleed to the surface over time making repairs harder. When PVC is heat-welded, the material molecularly fuses into one continuous piece \u2014 the seam becomes the strongest part of the roof. PVC is naturally Class A fire rated with no fillers, so repairs decades later weld just as cleanly as day one." },
        { question: "How do you prevent ponding water on flat roofs?", answer: "We design drainage into every system \u2014 tapered insulation to create slope toward drains, properly sized primary drains, and secondary overflow scuppers as code requires. Florida Building Code defines positive drainage as water clearing within 48 hours. We engineer for complete drainage, not good enough." },
        { question: "Why does seam welding matter so much on flat roofs?", answer: "Because the seams are the weak point. A properly heat-welded seam is actually stronger than the membrane itself. But if the welder runs too hot, it destroys the stabilizers in the material. Too cold, and the bond fails over time. Our crews calibrate daily, test welds, and document everything \u2014 because this is where most flat roofs fail." },
        { question: "Who installs TPO and PVC flat roofs in Broward and Palm Beach County?", answer: "All Phase Construction USA installs TPO, PVC, and modified bitumen flat roofing systems for both commercial and residential properties throughout Broward and Palm Beach County. As a dual-licensed contractor (CCC-1331464 + CGC-1526236), we handle everything from membrane installation to structural modifications under one permit. We serve Deerfield Beach, Fort Lauderdale, Boca Raton, Pompano Beach, Delray Beach, West Palm Beach, and all surrounding cities. Call (754) 227-5605 for a free flat roofing estimate." },
        { question: "How much does flat roof replacement cost in South Florida?", answer: "Flat roof replacement cost in South Florida depends on the membrane system, building size, insulation requirements, and number of roof penetrations (HVAC units, drains, pipes). TPO systems are typically the most economical for commercial applications. PVC costs slightly more but offers superior chemical resistance and molecularly fused seams. All Phase provides free, itemized estimates with no hidden fees — call (754) 227-5605." }
      ],
      breadcrumbs: [
        { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
        { name: 'Flat Roofing', url: 'https://allphaseconstructionfl.com/flat-roofing' }
      ]
    },
    '/roof-inspection': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Roof Inspection',
      name: 'Professional Roof Inspection',
      description: 'Comprehensive roof inspections including wind mitigation reports for insurance discounts and 40-year recertification inspections for Broward County buildings.',
      url: 'https://allphaseconstructionfl.com/roof-inspection',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
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
  ,
  '/roof-repair': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Roof Repair',
      name: 'Roof Repair and Emergency Service',
      description: 'Emergency and scheduled roof repair for storm damage, leaks, and deterioration across Broward and Palm Beach counties with rapid response times.',
      url: 'https://allphaseconstructionfl.com/roof-repair',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
    faqs: [
      { question: 'How quickly can you respond to emergency roof repairs?', answer: 'We offer same-day emergency response throughout Broward and Palm Beach County. Call (754) 227-5605 and we can dispatch a crew within 2-4 hours for an active leak.' },
      { question: 'Does homeowner insurance cover roof repair in Florida?', answer: 'Most Florida homeowner policies cover storm and wind damage. We work directly with insurance adjusters and can document damage for your claim at no extra charge.' },
      { question: 'How do I know if I need a repair or full replacement?', answer: 'If your roof is under 15 years old and damage is localized, repair is usually the right call. Our free inspection identifies whether targeted repair or full replacement delivers better value.' },
      { question: 'Are you licensed for roof repairs in Broward and Palm Beach County?', answer: 'Yes. All Phase Construction USA holds Florida State Certified Roofing Contractor license CCC-1331464, covering all repair work in Broward and Palm Beach County.' },
      { question: 'How do I find where my roof is leaking?', answer: 'Roof leak detection in South Florida requires more than following a water stain. Water can travel along rafters and sheathing before dripping into your living space, making the entry point hard to find. Our technicians use thermal imaging and moisture meters to trace the actual leak source — which is often failed flashing around vents or pipes, cracked tiles, lifted shingles, or deteriorated sealant. We provide same-day emergency response and a free roof leak inspection with photo documentation. Call (754) 227-5605.' },
      { question: 'Can I get a free estimate for roof repair?', answer: 'Yes. All Phase Construction USA provides free estimates for all roof repairs in Broward and Palm Beach County. We inspect the damage, identify the root cause, provide photo documentation, and give you an honest assessment of whether a targeted repair or full replacement is the better investment — with no obligation or pressure.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Roof Repair', url: 'https://allphaseconstructionfl.com/roof-repair' }
    ]
  },
  '/how-to-hire-roofing-contractor': {
    faqs: [
      { question: 'Do I need a dual-licensed roofing contractor in South Florida?', answer: 'Yes. When roofing work requires structural modifications like adding straps, third nails, or tie-ins, a general contractor license is required. A dual-licensed contractor can handle the entire scope under one permit, reducing delays, inspection issues, and liability exposure.' },
      { question: 'What is a wind mitigation report and who should complete it?', answer: 'A wind mitigation report documents hurricane-resistant features of your roof and structure. It is used by insurance companies to determine eligibility for premium discounts. The contractor who installs your roof should complete this report because they have firsthand knowledge of the installed systems and can accurately document compliance.' },
      { question: 'Can roof upgrades reduce my insurance premiums?', answer: 'Yes. Upgrades like secondary water barriers, improved roof-to-wall connections, impact-resistant materials, and proper fastening can qualify for significant insurance discounts. However, you must have proper documentation—a wind mitigation report—to receive these savings.' },
      { question: 'How do I know if my roofer follows HVHZ code?', answer: 'Verify their contractor licenses, ask about their permit history, request references from recent projects in Broward or Palm Beach County, and confirm they pull permits for all work. HVHZ compliance requires third-party building inspections, so unpermitted work is a red flag.' },
      { question: 'How is my property protected during roof replacement?', answer: 'Professional contractors use Catch-All systems to protect landscaping, Equipters to contain debris during tile removal, and carefully stage materials to avoid damaging driveways, pavers, and surrounding property. Ask your contractor specifically what protection methods they use.' },
      { question: 'When is the best time to replace a roof in Florida?', answer: 'Winter months (November through April) are ideal. Florida rainy season runs May through October, creating scheduling challenges and moisture concerns. Winter provides more predictable weather, easier scheduling, and more reliable inspection timelines.' },
      { question: 'How should wood replacement pricing be handled in a Florida roofing contract?', answer: 'In Florida, your contract should spell out wood replacement pricing before work begins—not as a surprise after tear-off. Ask your roofer to list the exact unit price they will charge if decking, fascia, or other structural wood needs replacement (for example, a per-sheet or per-linear-foot rate), and require that any additional wood work be documented and approved in writing as a change order. The contractor should also provide clear, detailed photo documentation with no ambiguity showing exactly which boards or sheets were deteriorated before removal and the same areas after replacement.' }
    ],
    howToName: 'How to Hire a Roofing Contractor in South Florida',
    howToDescription: 'Step-by-step guide to hiring a licensed, HVHZ-compliant roofing contractor in Broward and Palm Beach County, Florida.',
    howToSteps: [
      { name: 'Verify Contractor Licenses', text: 'Check the Florida DBPR database (myfloridalicense.com) for active Certified Roofing Contractor (CCC) and Certified General Contractor (CGC) licenses. A dual-licensed contractor can handle both roofing and structural work under one permit, which is critical for HVHZ projects requiring hurricane strap upgrades or deck modifications.' },
      { name: 'Confirm Insurance and Workers Compensation', text: 'Request certificates of insurance showing general liability and workers compensation coverage. If a contractor does not carry workers comp and a worker is injured on your property, you could be held liable. Verify coverage is current and sufficient for your project scope.' },
      { name: 'Check Permit History and References', text: 'Ask the contractor for recent permit numbers in your county. You can verify permits through Broward County or Palm Beach County building department portals. A contractor who consistently pulls permits and passes inspections demonstrates code compliance and accountability.' },
      { name: 'Get a Detailed Written Estimate', text: 'A professional estimate should be fully itemized: materials with manufacturer and model numbers, labor by phase, permit and engineering fees, disposal costs, and contingency pricing for wood replacement. If an estimate is vague or missing line items, that is a red flag.' },
      { name: 'Review the Contract Before Signing', text: 'Your contract should include the full scope of work, material specifications, payment schedule tied to milestones (not upfront lump sums), wood replacement pricing, warranty terms, project timeline, and permit responsibility. Never sign a contract that requires more than 10% deposit before work begins.' },
      { name: 'Verify HVHZ Compliance Plan', text: 'For projects in Broward and Palm Beach County, confirm the contractor will provide engineered wind load calculations, use HVHZ-approved products with valid Notice of Acceptance (NOA), and schedule all required municipal inspections. Non-compliant installations void insurance and create legal liability during property transfers.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Locations', url: 'https://allphaseconstructionfl.com/locations' },
      { name: 'Deerfield Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'How to Hire a Roofing Contractor', url: 'https://allphaseconstructionfl.com/how-to-hire-roofing-contractor' }
    ]
  },
  '/tile-roofing': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Tile Roofing',
      name: 'Tile Roofing Installation and Repair',
      description: 'Concrete and clay tile roof installation and repair engineered for South Florida hurricane zone requirements with enhanced fastening and 175+ mph wind resistance.',
      url: 'https://allphaseconstructionfl.com/tile-roofing',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
    faqs: [
      { question: 'How long does tile roofing last in South Florida?', answer: 'Concrete and clay tile roofs typically last 40-50 years in South Florida when properly maintained. Their mass and profile provide excellent wind resistance in HVHZ conditions.' },
      { question: 'Can broken roof tiles be replaced individually?', answer: 'Yes. Individual tiles can be replaced without disturbing the full roof, making repairs cost-effective. We stock a wide range of profiles and colors to match existing installations.' },
      { question: 'Are tile roofs approved in HVHZ areas like Broward County?', answer: 'Yes. Concrete and clay tile systems with compliant underlayments and fastening patterns meet Broward and Palm Beach County 146 mph wind load requirements.' },
      { question: 'How much does tile roofing cost in South Florida?', answer: 'Tile roofing typically runs $10-$18 per square foot installed, depending on profile and material. Concrete tile is generally less expensive than clay while offering comparable durability.' },
      { question: 'Who is the best tile roofing contractor in Broward County?', answer: 'All Phase Construction USA is a dual-licensed (CCC-1331464 + CGC-1526236) tile roofing contractor headquartered in Deerfield Beach with over 2,500 completed projects across Broward County. We install S-tile, flat tile, barrel tile, and clay profiles with both foam-adhered and mechanically fastened systems for full HVHZ compliance. Our 4.8-star Google rating reflects consistent quality across Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, and every city in Broward County. Call (754) 227-5605 for a free tile roofing estimate.' },
      { question: 'Can I get a free estimate for tile roof replacement in Palm Beach County?', answer: 'Yes. All Phase Construction USA provides free tile roofing estimates throughout Palm Beach County including Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Palm Beach Gardens, Jupiter, Wellington, and Lake Worth Beach. Our free estimate includes a 21-point roof inspection with photo documentation, accurate measurements, and an itemized quote with no hidden fees. Call (754) 227-5605 or visit allphaseconstructionfl.com to schedule.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Tile Roofing', url: 'https://allphaseconstructionfl.com/tile-roofing' }
    ]
  },
  '/commercial-roofing': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Commercial Roofing',
      name: 'Commercial Roofing Installation and Repair',
      description: 'Commercial roofing solutions including TPO, PVC, modified bitumen, and built-up roofing systems for businesses, warehouses, and multi-unit properties across South Florida.',
      url: 'https://allphaseconstructionfl.com/commercial-roofing',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
    faqs: [
      { question: 'What commercial roofing systems do you install?', answer: 'We install TPO, PVC, modified bitumen, metal panel, and built-up roofing systems for flat and low-slope commercial buildings throughout Broward and Palm Beach County.' },
      { question: 'Do you handle commercial roofing in HVHZ zones?', answer: 'Yes. All our commercial installations meet Florida Building Code HVHZ requirements. We carry Florida General Contractor license CGC-1526236 in addition to our roofing license.' },
      { question: 'Can commercial roofing be done without disrupting business operations?', answer: 'In most cases yes. We schedule commercial work around your operating hours and can phase large projects to minimize disruption to tenants and customers.' },
      { question: 'How long does a commercial roof installation take?', answer: 'A typical commercial roof replacement takes 3-7 days depending on square footage and system type. We provide a detailed project schedule before work begins.' },
      { question: 'What is the best commercial roofing system for South Florida?', answer: 'For most commercial buildings in Broward and Palm Beach County, PVC membrane roofing offers the best combination of wind resistance, chemical durability, and longevity. PVC seams molecularly fuse when heat-welded, creating the strongest bond in the flat roofing industry. For buildings with heavy rooftop equipment or chemical exposure (restaurants, manufacturing), PVC is the clear choice. TPO is a strong option for budget-conscious projects. All Phase installs both systems with full HVHZ compliance.' },
      { question: 'Do you provide commercial roofing in Fort Lauderdale and Boca Raton?', answer: 'Yes. All Phase Construction USA provides commercial roofing services throughout Broward and Palm Beach County including Fort Lauderdale, Boca Raton, Pompano Beach, Deerfield Beach, Coral Springs, West Palm Beach, Delray Beach, and all surrounding cities. As a dual-licensed contractor (General Contractor CGC-1526236 + Roofing Contractor CCC-1331464), we can handle both structural and roofing work under one permit — which means faster project completion and single-source accountability. Call (754) 227-5605 for a free commercial roofing assessment.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Commercial Roofing', url: 'https://allphaseconstructionfl.com/commercial-roofing' }
    ]
  },
  '/residential-roofing': {
    directSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Residential Roofing',
      name: 'Residential Roof Replacement',
      description: 'Complete residential roof replacement services including tile, metal, shingle, and flat roof systems engineered for South Florida HVHZ compliance with manufacturer-backed warranties.',
      url: 'https://allphaseconstructionfl.com/residential-roofing',
      provider: {
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com'
      },
      areaServed: {
        '@type': 'State',
        name: 'Florida',
        containsPlace: [
          { '@type': 'AdministrativeArea', name: 'Broward County' },
          { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
        ]
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://allphaseconstructionfl.com/contact',
        servicePhone: '+17542275605'
      }
    },
    faqs: [
      { question: 'What roofing materials are best for South Florida homes?', answer: 'Metal, tile, and PVC flat systems perform best in HVHZ conditions. Architectural shingles are also popular for their cost and appearance when properly wind-rated for 130+ mph.' },
      { question: 'How long does a residential roof replacement take?', answer: 'Most residential replacements are completed in 1-3 days. We protect your property with tarps and complete full debris removal before the final walkthrough.' },
      { question: 'Do you offer financing for residential roofing projects?', answer: 'Yes. We offer flexible financing options for residential roofing. Call (754) 227-5605 to discuss payment plans that work within your budget.' },
      { question: 'Are you licensed to work on homes in Broward and Palm Beach County?', answer: 'Yes. All Phase holds Florida Certified Roofing Contractor license CCC-1331464 covering all residential roofing work throughout Broward and Palm Beach County.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Residential Roofing', url: 'https://allphaseconstructionfl.com/residential-roofing' }
    ]
  },
  '/roof-cost-calculator': {
    faqs: [
      { question: 'How much does a new roof cost in South Florida?', answer: 'Roof replacement costs in Broward and Palm Beach Counties range from $10,000 to $70,000+ depending on material choice (shingles, tile, metal, flat roofing), roof size, complexity, and HVHZ code requirements. A typical 2,000 sq ft home with architectural shingles costs $10,000-$18,000, while premium materials like standing seam metal can range from $20,000-$70,000.' },
      { question: 'What is the cheapest roofing material in Florida?', answer: 'Architectural asphalt shingles are the most economical option at $5-$9 per square foot installed ($10,000-$18,000 for a typical 2,000 sq ft home). However, they have the shortest lifespan in Florida climate (15-25 years) compared to tile (50+ years) or metal (40-60 years). When calculating lifetime cost, premium materials often provide better value despite higher upfront investment.' },
      { question: 'Does a new roof lower insurance in Florida?', answer: 'Yes. Metal and tile roofs often qualify for 25-35% homeowner insurance premium reductions when properly documented with wind mitigation inspections. Even shingle roofs with proper HVHZ-compliant installation, secondary water barriers, and enhanced roof-to-wall connections can qualify for significant discounts. The key is having a licensed contractor document the installation properly for insurance verification.' },
      { question: 'How long does a roof last in South Florida?', answer: 'Roof lifespan in South Florida varies significantly by material: architectural shingles last 15-25 years, luxury shingles 25-30 years, concrete tile 50+ years, clay tile 75-100+ years, standing seam metal 40-60 years, and properly installed PVC flat roofing 30-40+ years. Florida intense UV exposure, thermal cycling, and hurricane risk make material choice and proper installation critical for longevity.' },
      { question: 'What hidden costs should I expect in a roof replacement?', answer: 'Beyond base material costs, expect: tear-off and disposal ($0.40-$2.00/sq ft), underlayment replacement ($1.50-$2.10/sq ft), rotten decking replacement ($2-$5/sq ft for damaged sections), HVHZ code-required upgrades (hurricane straps, enhanced fastening), and permit/inspection fees ($200-$1,000+). These hidden costs can add $2,000-$8,000+ to your project. All Phase Construction provides itemized estimates with contingency pricing upfront so there are no surprises.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Roof Cost Calculator', url: 'https://allphaseconstructionfl.com/roof-cost-calculator' }
    ]
  },
  '/roof-replacement-process': {
    howToName: 'Roof Replacement Process in South Florida',
    howToDescription: 'How All Phase Construction USA replaces a roof in Broward and Palm Beach County, from free inspection through final permit sign-off.',
    howToSteps: [
      { name: 'Free Roof Inspection', text: 'We assess your current roof condition, document all damage, and provide a detailed written estimate at no charge. Most inspections are completed within 24-48 hours of your call.' },
      { name: 'Insurance and Permit Coordination', text: 'We work directly with your insurance adjuster if a claim is involved, then pull all required Broward or Palm Beach County building permits before any work begins.' },
      { name: 'Material Selection', text: 'Choose from shingle, tile, metal, or flat roofing systems. We present HVHZ-compliant options at multiple price points and order materials once you approve the scope.' },
      { name: 'Tear-Off and Deck Inspection', text: 'We remove the existing roof system down to the deck and inspect for rot, soft spots, or damaged sheathing, making all necessary repairs before re-roofing begins.' },
      { name: 'Underlayment Installation', text: 'HVHZ-compliant underlayment is installed and nailed per Florida Building Code to provide a secondary water barrier before the finish roofing system is applied.' },
      { name: 'New Roof Installation', text: 'Your selected roofing system is installed by our licensed crews following Florida Building Code specifications and manufacturer installation requirements.' },
      { name: 'Final Inspection and Cleanup', text: 'A county inspector signs off on the permit, we complete full magnetic nail sweep and debris removal, and conduct a final walkthrough with you before collecting final payment.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Roof Replacement Process', url: 'https://allphaseconstructionfl.com/roof-replacement-process' }
    ]
  },
  '/roof-replacement': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Roof Replacement', url: 'https://allphaseconstructionfl.com/roof-replacement' }
    ],
    faqs: [
      {
        question: 'How do I know if I need a full roof replacement vs. a repair?',
        answer: 'If your roof is over 20 years old, has widespread shingle damage, persistent leaks, or significant decking rot, replacement is typically more cost-effective than repeated repairs. We provide free inspections to give you an honest assessment.'
      },
      {
        question: 'How long does a roof replacement take in South Florida?',
        answer: 'Most residential roof replacements in Broward and Palm Beach Counties take 1–3 days depending on roof size, pitch, and material. We work efficiently to minimize disruption to your household.'
      },
      {
        question: 'What roofing materials are best for South Florida homes?',
        answer: 'Asphalt shingles, concrete tile, and metal roofing are the most popular choices for South Florida. Each has different cost, longevity, and wind resistance profiles — we help homeowners choose based on their budget and HOA requirements.'
      },
      {
        question: 'Is a permit required for roof replacement in Broward County?',
        answer: 'Yes, Florida law requires a permit for full roof replacements. As licensed contractor CCC-1331464, All Phase Construction USA pulls all required permits and ensures full code compliance on every project.'
      },
      {
        question: 'Do you offer financing for roof replacement?',
        answer: 'Yes. We work with financing partners to offer flexible payment options so South Florida homeowners can get the roof they need without waiting. Ask about current financing programs during your free estimate.'
      }
    ]
  },
  '/roof-maintenance-programs': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Roof Maintenance Programs', url: 'https://allphaseconstructionfl.com/roof-maintenance-programs' }
    ],
    faqs: [
      { question: 'What is included in a roof maintenance program?', answer: 'Our roof maintenance programs include semi-annual inspections, gutter cleaning, minor repair of flashings and sealants, debris removal, and detailed condition reporting. Regular maintenance extends roof life and prevents small issues from becoming expensive problems.' },
      { question: 'How often should my roof be professionally maintained?', answer: 'We recommend professional roof maintenance at least twice per year in South Florida—once before hurricane season and once after. Properties with tile or flat roofs in high-debris areas may benefit from quarterly maintenance.' },
      { question: 'Does roof maintenance void my warranty?', answer: 'No. Professional maintenance by a licensed contractor actually helps preserve your warranty. Many manufacturer warranties require documented maintenance to remain valid.' },
      { question: 'Can maintenance prevent roof replacement?', answer: 'Yes. Regular maintenance catches small defects early, prevents water intrusion, and can extend your roof life by 30-50%. The cost of maintenance is a fraction of premature replacement costs.' }
    ]
  },
  '/pricing-guide': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Resources', url: 'https://allphaseconstructionfl.com/learning-center' },
      { name: 'Pricing Guide', url: 'https://allphaseconstructionfl.com/pricing-guide' }
    ],
    faqs: [
      { question: 'How much does a new roof cost in South Florida?', answer: 'Roof replacement costs in Broward and Palm Beach County typically range from $8,000-$45,000+ depending on size, pitch, materials, and HVHZ compliance requirements. Shingle roofs start around $8-12 per square foot, tile $12-18, metal $14-22, and flat systems $8-16.' },
      { question: 'What factors affect roof replacement cost?', answer: 'Key cost factors include roof size (square footage), pitch and complexity, material type, HVHZ compliance requirements, permit and inspection fees, wood replacement needs, and disposal of existing materials.' },
      { question: 'Are roofing estimates free in South Florida?', answer: 'Yes. All Phase Construction USA provides free roof inspections and detailed written estimates throughout Broward and Palm Beach County. Call (754) 227-5605 to schedule.' },
      { question: 'Does insurance cover roof replacement in Florida?', answer: 'Insurance covers roof replacement when damage results from a covered peril like wind or storm damage. Age-related wear and poor maintenance are typically not covered. We work directly with insurance adjusters to document storm damage claims.' },
      { question: 'What is the most cost-effective roofing material for Florida?', answer: 'Architectural shingles offer the best balance of initial cost, wind resistance, and insurance qualification for most South Florida homes. Tile and metal cost more upfront but last longer and may provide better long-term value.' }
    ]
  },
  '/learning-center': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Learning Center', url: 'https://allphaseconstructionfl.com/learning-center' }
    ]
  },
  '/easy-payments': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Easy Payments', url: 'https://allphaseconstructionfl.com/easy-payments' }
    ],
    faqs: [
      { question: 'Do you offer financing for roofing projects?', answer: 'Yes. All Phase Construction USA works with financing partners to offer flexible payment plans for residential and commercial roofing projects. We offer options for various credit profiles and project sizes.' },
      { question: 'What financing options are available?', answer: 'We offer multiple financing programs including deferred interest promotions, fixed-rate loans, and flexible payment terms. Approved applicants can finance roof replacement, repairs, and other roofing services.' },
      { question: 'How quickly can I get approved for roofing financing?', answer: 'Most financing applications are processed within 24 hours. Many applicants receive instant approval decisions. Once approved, we can schedule your roofing project immediately.' },
      { question: 'Can I use financing for roof repairs or just replacement?', answer: 'Our financing programs can be used for roof replacement, major repairs, and other roofing services. Minimum financing amounts may apply depending on the program.' }
    ]
  },
  '/reviews': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Reviews', url: 'https://allphaseconstructionfl.com/reviews' }
    ]
  },
  '/projects': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Projects', url: 'https://allphaseconstructionfl.com/projects' }
    ]
  },
  '/our-location': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Our Location', url: 'https://allphaseconstructionfl.com/our-location' }
    ]
  },
  '/contact': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Contact', url: 'https://allphaseconstructionfl.com/contact' }
    ]
  },
  '/about-us': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'About Us', url: 'https://allphaseconstructionfl.com/about-us' }
    ]
  },
  '/roof-cost-calculator': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Resources', url: 'https://allphaseconstructionfl.com/learning-center' },
      { name: 'Roof Cost Calculator', url: 'https://allphaseconstructionfl.com/roof-cost-calculator' }
    ],
    faqs: [
      { question: 'How accurate is the roof cost calculator?', answer: 'Our calculator provides estimates based on typical South Florida pricing for similar projects. Actual costs may vary based on specific site conditions, material selections, and complexity. We recommend scheduling a free inspection for a detailed quote.' },
      { question: 'What information do I need to use the calculator?', answer: 'You will need approximate roof square footage or home square footage, desired roofing material type, roof pitch if known, and your location. The calculator will provide an estimated cost range based on these inputs.' },
      { question: 'Does the calculator include permits and inspections?', answer: 'Yes. Our estimates include typical permit fees and inspection costs for Broward and Palm Beach County. Specific municipal fees may vary slightly.' },
      { question: 'Can I get financing for the estimated amount?', answer: 'Yes. Once you receive your calculator estimate, we can discuss financing options that work within your budget. Many of our financing programs offer flexible terms and promotional rates.' }
    ]
  },
  '/licensed-roofing-contractor': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Resources', url: 'https://allphaseconstructionfl.com/learning-center' },
      { name: 'Licensed Roofing Contractor', url: 'https://allphaseconstructionfl.com/licensed-roofing-contractor' }
    ],
    faqs: [
      { question: 'What is the difference between a certified and registered roofing contractor in Florida?', answer: 'A Florida State Certified Roofing Contractor (CCC license) can work statewide without restriction. A locally registered contractor can only work within the jurisdiction that registered them. For HVHZ work in Broward and Palm Beach County, state certification is strongly recommended.' },
      { question: 'How do I verify a roofing contractor license in Florida?', answer: 'Visit myfloridalicense.com and use the Verify a Licensee tool. Search by contractor name or license number. Confirm the license is active, in the correct category, and has no disciplinary actions or suspensions.' },
      { question: 'What does a CCC roofing license mean?', answer: 'CCC stands for Certified Roofing Contractor. This is a Florida state-level license that requires passing a comprehensive exam, demonstrating financial responsibility, and maintaining insurance. CCC licensees can perform roofing work anywhere in Florida.' },
      { question: 'Why does dual licensing matter for roofing in South Florida?', answer: 'Many roofing projects in HVHZ areas require structural work like adding tie-downs, straps, or deck reinforcement. A contractor with both roofing (CCC) and general contractor (CGC) licenses can handle the full scope without subcontracting, reducing cost and liability.' },
      { question: 'What insurance should a licensed roofer carry?', answer: 'Florida roofing contractors must carry general liability insurance and workers compensation coverage. Request proof of insurance and verify the policies are current before signing any contract. Lack of proper insurance exposes you to significant liability.' }
    ]
  },
  '/frequently-asked-questions': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'FAQ', url: 'https://allphaseconstructionfl.com/frequently-asked-questions' }
    ],
    faqs: [
      { question: 'Are you licensed and insured in Broward and Palm Beach County?', answer: 'Yes. All Phase Construction USA holds Florida State Certified Roofing Contractor license CCC-1331464 and General Contractor license CGC-1526236. We carry full general liability and workers compensation insurance.' },
      { question: 'Do you offer free roof inspections?', answer: 'Yes. We provide free roof inspections for homeowners throughout Broward and Palm Beach County. Call (754) 227-5605 to schedule.' },
      { question: 'How long does a roof replacement take?', answer: 'Most residential roof replacements are completed in 1-3 days depending on size, pitch, and material type. We provide a detailed timeline before work begins.' },
      { question: 'Do you pull permits for roofing work?', answer: 'Yes. All Phase Construction USA handles all permit applications and inspections required by Broward and Palm Beach County building departments. Permits are included in our estimates.' },
      { question: 'What roofing materials do you install?', answer: 'We install shingle, tile, metal, flat TPO/PVC, and commercial roofing systems. All materials are HVHZ-compliant and rated for 146+ mph wind loads as required by Florida Building Code.' },
      { question: 'Do you work with insurance claims?', answer: 'Yes. We work directly with insurance adjusters to document storm damage and provide detailed estimates for your claim. We do not require Assignment of Benefits and allow you to maintain control of your claim.' }
    ]
  }
};

// Helper: generate city-specific FAQ entries
function cityFaqs(cityName, countyName) {
  return [
    { question: 'How much does a new roof cost in ' + cityName + ', Florida?', answer: 'Roof replacement costs in ' + cityName + ' typically range from $10,000 to $50,000+ depending on material choice. Architectural shingles run $5.50-$8.50/sq ft ($10,000-$18,000 for a typical home), concrete tile $10-$18/sq ft ($20,000-$40,000), and standing seam metal $12-$22/sq ft ($24,000-$50,000+). All projects in ' + countyName + ' must meet HVHZ code requirements, which adds engineering and permit costs. All Phase Construction USA provides free, itemized estimates with no hidden fees for ' + cityName + ' homeowners. Call (754) 227-5605.' },
    { question: 'Who is the best roofing contractor in ' + cityName + '?', answer: 'All Phase Construction USA is a dual-licensed roofing contractor (CCC-1331464) and general contractor (CGC-1526236) serving ' + cityName + ' from our Deerfield Beach headquarters. With over 2,500 completed projects, a 4.8-star Google rating, and BBB A+ accreditation, we specialize in HVHZ-compliant roof replacement, repair, and inspections. As dual-licensed contractors, we handle both roofing and structural work under one permit \u2014 something most ' + cityName + ' roofers cannot do. Call (754) 227-5605 for a free roof inspection.' },
    { question: 'Do I need a permit for roof replacement in ' + cityName + '?', answer: 'Yes. All roof replacements in ' + cityName + ' (' + countyName + ') require a building permit with engineered wind load calculations per Florida Building Code HVHZ requirements. Unpermitted roofing work voids insurance coverage and creates liability during property sales. All Phase Construction USA pulls all required permits, handles engineering, and coordinates municipal inspections on every project \u2014 the cost is included in our estimates.' }
  ];
}

const CITY_PAGE_SCHEMAS = {
  '/locations/fort-lauderdale': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/fort-lauderdale#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/fort-lauderdale","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1224,"longitude":-80.1373},"areaServed":[{"@type":"City","name":"Fort Lauderdale","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Fort Lauderdale', 'Broward County') },
  '/locations/boca-raton': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/boca-raton#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/boca-raton","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.3683,"longitude":-80.1289},"areaServed":[{"@type":"City","name":"Boca Raton","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Boca Raton', 'Palm Beach County') },
  '/locations/coral-springs': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/coral-springs#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/coral-springs","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2709,"longitude":-80.2706},"areaServed":[{"@type":"City","name":"Coral Springs","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Coral Springs', 'Broward County') },
  '/locations/pompano-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/pompano-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/pompano-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2379,"longitude":-80.1248},"areaServed":[{"@type":"City","name":"Pompano Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Pompano Beach', 'Broward County') },
  '/locations/hollywood': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/hollywood#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/hollywood","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.0112,"longitude":-80.1495},"areaServed":[{"@type":"City","name":"Hollywood","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Hollywood', 'Broward County') },
  '/locations/coconut-creek': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/coconut-creek#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/coconut-creek","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2509,"longitude":-80.1789},"areaServed":[{"@type":"City","name":"Coconut Creek","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Coconut Creek', 'Broward County') },
  '/locations/west-palm-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/west-palm-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/west-palm-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.7153,"longitude":-80.0534},"areaServed":[{"@type":"City","name":"West Palm Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('West Palm Beach', 'Palm Beach County') },
  '/locations/wellington': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/wellington#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/wellington","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.659,"longitude":-80.2686},"areaServed":[{"@type":"City","name":"Wellington","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Wellington', 'Palm Beach County') },
  '/locations/boynton-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/boynton-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/boynton-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.5317,"longitude":-80.0905},"areaServed":[{"@type":"City","name":"Boynton Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Boynton Beach', 'Palm Beach County') },
  '/locations/delray-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/delray-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/delray-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.4615,"longitude":-80.0728},"areaServed":[{"@type":"City","name":"Delray Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Delray Beach', 'Palm Beach County') },
  '/locations/plantation': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/plantation#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/plantation","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1276,"longitude":-80.2331},"areaServed":[{"@type":"City","name":"Plantation","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Plantation', 'Broward County') },
  '/locations/sunrise': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/sunrise#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/sunrise","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.167,"longitude":-80.2561},"areaServed":[{"@type":"City","name":"Sunrise","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Sunrise', 'Broward County') },
  '/locations/weston': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/weston#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/weston","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1003,"longitude":-80.3997},"areaServed":[{"@type":"City","name":"Weston","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Weston', 'Broward County') },
  '/locations/lake-worth': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/lake-worth#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/lake-worth","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.6148,"longitude":-80.0575},"areaServed":[{"@type":"City","name":"Lake Worth","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}, faqs: cityFaqs('Lake Worth', 'Palm Beach County') },
};


  /**
   * Generate comprehensive content for Roof Replacement Process page
   * Matches the 2,385-line React component content
   */
  function generateRoofReplacementProcessContent() {
    return `
  <h1>Our 10-Step Roof Replacement Process in South Florida</h1>

  <p>Replacing a roof in South Florida requires more than just removing old shingles and installing new ones. Every project must meet High Velocity Hurricane Zone (HVHZ) standards with engineered calculations, product approvals, building permits, and municipal inspections. The process typically takes 4-6 weeks from initial inspection through final approval, with 3-7 days of active construction.</p>

  <p>Our 10-step system ensures code compliance, proper material selection, thorough documentation, and zero surprises — protecting your investment with permits, warranties, and third-party verification that standard contractors often skip. From engineering to final inspection, see exactly how we navigate Florida's strictest building codes to deliver roofs that meet HVHZ compliance and exceed your expectations.</p>

  <h2>Step 1: Initial Inspection & Assessment</h2>

  <p>Comprehensive roof evaluation using thermal imaging, moisture detection, and detailed documentation of all roofing materials, structural deck, flashing systems, and ventilation. We inspect:</p>

  <ul>
    <li><strong>Roof Surface & Materials:</strong> Shingle, tile, or metal condition assessment, missing or damaged material documentation, granule loss and UV degradation evaluation, wind and storm damage identification</li>
    <li><strong>Structural Components:</strong> Roof decking integrity, soffit, fascia, and drip edge condition, roof framing and truss visible inspection, chimney and penetration flashing</li>
    <li><strong>Ventilation & Attic:</strong> Attic ventilation adequacy, moisture intrusion and mold presence, insulation condition and R-value, thermal imaging for hidden leaks</li>
    <li><strong>Drainage & Waterproofing:</strong> Valley condition and water flow patterns, gutter and downspout functionality, flashing at walls and chimneys, ponding water areas on flat sections</li>
  </ul>

  <p>After inspection, you receive a detailed report including photo documentation of all deficiencies, thermal imaging results showing moisture intrusion, accurate roof measurements with pitch and area calculations, recommended repairs or replacement with honest assessment of remaining service life, and code compliance evaluation noting any HVHZ violations. Get your <a href="/roof-inspection">professional roof inspection</a> scheduled today.</p>

  <h2>Step 2: Detailed Estimate & Planning</h2>

  <p>Transparent pricing with itemized breakdown of materials, labor, timeline, and HVHZ compliance requirements including engineering fees and permit costs. We provide detailed estimates covering all material specifications with manufacturer and model numbers, labor breakdown by phase (tear-off, installation, cleanup), permit fees and engineering costs, timeline with weather contingencies, warranty options (material and workmanship), and financing options if needed.</p>

  <p>Our estimates include everything — no hidden fees for permits, engineering, disposal, or structural repairs. We explain every line item so you understand exactly what you're paying for. Use our <a href="/roof-cost-calculator">roof cost calculator</a> for an instant estimate, then schedule an in-person inspection for precise pricing.</p>

  <h2>Step 3: Material Selection & Ordering</h2>

  <p>Choose from premium manufacturer-certified materials that meet Miami-Dade and Broward County building codes. We help you select the right system for your home, budget, and aesthetic preferences:</p>

  <ul>
    <li><strong><a href="/shingle-roofing">Asphalt Shingle Roofing</a>:</strong> Premium architectural shingles with HVHZ approval, Class 4 impact resistance available, 30-50 year warranties, Class 3 & 4 impact ratings, algae resistant. Cost: $5.50-$8.50 per square foot installed.</li>
    <li><strong><a href="/tile-roofing">Concrete & Clay Tile</a>:</strong> Traditional S-tile and flat tile systems built for Florida weather and aesthetics, lifetime material durability, superior wind resistance, energy efficient. Cost: $10-$18 per square foot installed.</li>
    <li><strong><a href="/metal-roofing">Metal Roofing Systems</a>:</strong> Standing seam and metal shingle systems with maximum wind and fire ratings, 50+ year lifespan, highest wind ratings, reflective coatings. Cost: $12-$22 per square foot installed.</li>
    <li><strong><a href="/flat-roofing">Flat & Low-Slope</a>:</strong> TPO, EPDM, and modified bitumen systems for commercial and residential applications, seamless installations, Energy Star rated, ponding water resistant. Cost varies by system type.</li>
  </ul>

  <p>Once materials are selected, we order HVHZ-approved products with proper Notice of Acceptance (NOA) documentation and schedule delivery to coordinate with permit approval and installation timeline.</p>

  <h2>Step 4: Permitting & Engineering</h2>

  <p>We handle all permits, engineering calculations, product approvals (NOA), and municipal submittals required for HVHZ compliance in South Florida. This includes:</p>

  <ul>
    <li><strong>Structural Calculations:</strong> Wind load analysis specific to your roof design, uplift calculations for fastening requirements, truss load verification if structural changes needed</li>
    <li><strong>Product Approvals:</strong> Miami-Dade NOA or Florida Product Approval for all materials, manufacturer installation specifications, HVHZ-compliant fastening schedules</li>
    <li><strong>Permit Applications:</strong> Complete submittal packages to building departments, plan review coordination, correction responses if needed</li>
    <li><strong>Final Inspection Scheduling:</strong> Coordinated with building department, certificate of completion processing</li>
  </ul>

  <p>Permits typically take 2-3 weeks in Broward and Palm Beach counties. We track applications daily and keep you informed of progress. All work is performed under permit — unpermitted roofing work voids insurance coverage and creates liability during property transfers.</p>

  <h2>Step 5: Site Protection & Preparation</h2>

  <p>Comprehensive property protection setup before any roofing work begins. We install ground tarps around entire work area, set up magnetic sweepers to catch metal debris, protect landscaping and AC units with plywood shields, cover pool areas and sensitive plants, position dump trailers removed nightly, and establish clear access paths for crews.</p>

  <p>This preparation phase typically occurs the afternoon before tear-off begins, ensuring your property is fully protected when active construction starts.</p>

  <h2>Step 6: Tear-Off & Deck Inspection</h2>

  <p>Complete removal of existing roofing materials down to structural decking. During tear-off, we expose the entire roof deck for inspection — this is when hidden damage becomes visible. We document any rotted plywood, damaged OSB, deteriorated trusses or rafters, inadequate ventilation, old underlayment condition, and previous repair quality.</p>

  <p>If structural damage is discovered, we immediately photograph it, explain the issue and necessary repairs, provide pricing for additional work, and complete repairs before proceeding. As a dual-licensed contractor (CCC-1331464 & CGC-1526236), we handle structural repairs in-house without delays or subcontractors. Minor <a href="/roof-repair">roof repairs</a> can often prevent the need for full replacement if caught early.</p>

  <h2>Step 7: Underlayment Installation</h2>

  <p>Secondary water barrier installation per HVHZ requirements with enhanced protection in vulnerable areas. We install self-adhering underlayment in valleys, eaves, and penetrations, synthetic underlayment on field areas (superior to old felt paper), ice and water shield at all transitions, and proper overlap and fastening per code requirements.</p>

  <p>Modern synthetic underlayment provides excellent temporary protection if installation extends multiple days and is far superior to traditional felt paper used by budget contractors.</p>

  <h2>Step 8: Flashing & Waterproofing</h2>

  <p>Critical metal flashing installation at all transitions, penetrations, valleys, walls, and vulnerable areas using custom-fabricated aluminum or copper materials. Proper flashing is the difference between a roof that lasts 20 years and one that fails in 5. We install step flashing at wall intersections, valley flashing with proper water channeling, chimney and skylight flashing, drip edge at eaves and rakes, and pipe boot replacements for all penetrations.</p>

  <p>All flashing work must meet HVHZ standards with proper fastening and sealing — this is where inexperienced contractors cut corners.</p>

  <h2>Step 9: Final Roofing Installation</h2>

  <p>Precision installation of finish roofing materials per manufacturer specifications and HVHZ fastening requirements with enhanced nail patterns. Installation methods vary by material type but all must meet or exceed manufacturer specifications, HVHZ fastening schedules (more fasteners than standard code), proper starter courses and ridge finishing, ventilation integration (ridge vents, soffit vents), and final sealing and weatherproofing.</p>

  <p>For tile roofs, we use foam adhesive in addition to mechanical fasteners per HVHZ requirements. Metal roofs receive concealed fastening with thermal expansion accommodation. Shingle roofs get 6-nail fastening patterns in high-wind zones versus standard 4-nail patterns used outside HVHZ.</p>

  <h2>Step 10: Final Inspection & Walkthrough</h2>

  <p>Building department inspection for code compliance, certificate of completion issuance, comprehensive project closeout with warranty documentation and maintenance guidelines. The final inspection verifies HVHZ compliance, proper fastening and flashing, adequate ventilation, code-compliant installation, and structural integrity.</p>

  <p>After passing inspection, we conduct a detailed walkthrough with you covering warranty documentation and registration, maintenance recommendations, cleanup verification, and answering any questions. You receive complete documentation including building permit and certificate of completion, manufacturer warranties, installation photos, maintenance guidelines, and wind mitigation eligibility information.</p>

  <h2>Timeline Expectations for Roof Replacement</h2>

  <p>A complete roof replacement project typically takes 4-6 weeks from initial inspection to final approval:</p>

  <ul>
    <li><strong>Week 1:</strong> Inspection, estimate, contract signing, material selection</li>
    <li><strong>Weeks 2-3:</strong> Permit processing, engineering approval, material ordering and delivery</li>
    <li><strong>Week 4:</strong> Active construction (3-7 days depending on size and complexity)</li>
    <li><strong>Week 5-6:</strong> Final inspection scheduling and approval, certificate of completion</li>
  </ul>

  <p>Weather and permitting timelines can affect this schedule. We monitor weather forecasts closely and only expose vulnerable areas when conditions permit. Summer installations may take 1-2 extra days due to afternoon rain delays.</p>

  <h2>Cost Factors That Affect Roof Replacement Pricing</h2>

  <p>Roof replacement costs in South Florida typically range from $8,000-$25,000+ depending on:</p>

  <ul>
    <li><strong>Size:</strong> Square footage and pitch (steeper roofs cost more per square foot)</li>
    <li><strong>Material Choice:</strong> Shingles are least expensive, tile mid-range, metal highest cost</li>
    <li><strong>Complexity:</strong> Multiple valleys, skylights, chimneys, and architectural features add labor</li>
    <li><strong>Structural Repairs:</strong> Rotted decking, damaged trusses, fascia replacement discovered during tear-off</li>
    <li><strong>HVHZ Requirements:</strong> Enhanced fastening and underlayment add 15-25% vs standard installations</li>
    <li><strong>Permits & Engineering:</strong> Required costs typically $800-$1,500 depending on jurisdiction</li>
    <li><strong>Access & Disposal:</strong> Difficult access or multiple-story homes increase labor costs</li>
  </ul>

  <p>Get accurate pricing with our <a href="/pricing-guide">roof replacement pricing guide</a> or use our instant <a href="/roof-cost-calculator">cost calculator</a>.</p>

  <h2>What to Expect on Installation Day</h2>

  <p>On the first day of installation, crews typically arrive between 7-8 AM and work until 4-5 PM. You'll hear significant noise during tear-off (loudest phase) as old materials are removed and disposed. Most homes are weathertight by end of day one with underlayment installed. We clean up daily and remove all debris — dump trailers are emptied nightly so they never block your driveway.</p>

  <p>You don't need to be home during installation, but we recommend being available for the initial walkthrough and final inspection. We communicate daily via text or email about progress and any findings.</p>

  <h2>Warranty Information</h2>

  <p>Every roof replacement includes multiple warranty layers:</p>

  <ul>
    <li><strong>Manufacturer Material Warranties:</strong> 25-50 years depending on product (architectural shingles typically 30-50 years, tile lifetime material, metal 40-50 years)</li>
    <li><strong>Workmanship Warranty:</strong> 10 years on our installation labor</li>
    <li><strong>Enhanced Manufacturer Warranties:</strong> Available when we install complete manufacturer systems (extended coverage on material and labor)</li>
    <li><strong>Permit-Backed Work:</strong> All work guaranteed by building department approval — unpermitted work has no such protection</li>
  </ul>

  <p>We provide all warranty documentation at project completion and register products with manufacturers on your behalf. Annual inspections through our maintenance program help preserve warranty coverage.</p>

  <h2>Frequently Asked Questions About Roof Replacement</h2>

  <h3>How long does a typical roof replacement take from start to finish?</h3>
  <p>A complete roof replacement project typically takes 4-6 weeks from initial inspection to final approval. This includes 1 week for inspection and estimating, 2-3 weeks for permit approval and material ordering, 3-7 days for active construction, and final inspections. Weather and permitting timelines can affect this schedule.</p>

  <h3>Will my insurance cover roof replacement in South Florida?</h3>
  <p>Insurance coverage depends on the cause of damage and your policy terms. Storm damage (wind, hail) with documented loss is typically covered minus your deductible. However, age-related wear and maintenance issues are not covered. We document all damage during inspection and can coordinate with your adjuster.</p>

  <h3>What permits are required for roof replacement in Broward and Palm Beach Counties?</h3>
  <p>All roof replacements in Florida require a building permit, engineering calculations, and product approvals (NOA). We handle the entire permitting process including structural calculations, wind load analysis, product approval verification, permit applications, and final inspection coordination.</p>

  <h3>What makes HVHZ roof installation different from standard roofing?</h3>
  <p>High Velocity Hurricane Zone (HVHZ) roofing requires enhanced attachment schedules with more fasteners per square, specific product approvals (NOA) from Miami-Dade or Florida Product Approval, engineered nail patterns based on roof zones, secondary water barriers in all vulnerable areas, wind uplift calculations for your specific roof design, deck re-nailing to meet current code, and inspector-verified installation methods.</p>

  <h3>What happens if you find structural damage during tear-off?</h3>
  <p>Structural issues like rotted decking or damaged trusses are common discoveries during tear-off. When we find damage, we immediately document it with photos, explain the issue and necessary repairs, provide pricing for the additional work, and complete repairs before proceeding with roofing installation. As a dual-licensed contractor (CGC and CCC), we handle structural repairs in-house without subcontracting.</p>

  <h3>How much does a new roof increase my home value in South Florida?</h3>
  <p>A new permitted roof typically adds 60-85% of the project cost to your home's resale value in South Florida's market. Beyond direct ROI, a new roof makes your property easier to sell — many buyers walk away from homes with aging roofs due to financing and insurance complications. A new warranted roof with proper permits eliminates these barriers.</p>

  <h3>Can I get a roof replacement during Florida's rainy season?</h3>
  <p>Yes, we complete roof replacements year-round including summer rainy season. We monitor weather closely and only expose vulnerable areas when forecast permits. Modern synthetic underlayment provides excellent temporary protection if installation extends multiple days. We never leave your home unprotected overnight.</p>

  <h3>What roof material lasts longest in South Florida's climate?</h3>
  <p>Material lifespan in South Florida depends on proper installation and maintenance. Concrete and clay tile roofs last 50+ years when properly installed with HVHZ-compliant attachment. Metal roofing systems last 40-60 years with coastal-rated finishes. Architectural shingles last 20-30 years — shorter than northern climates due to UV exposure and thermal cycling.</p>

  <h2>Ready to Start Your Roof Replacement Project?</h2>

  <p>All Phase Construction USA is a dual-licensed contractor (CCC-1331464 & CGC-1526236) serving Broward and Palm Beach County with comprehensive roof replacement services. We handle every phase from engineering through final inspection, ensuring HVHZ compliance, proper permitting, and zero surprises.</p>

  <p>Call <strong>(754) 227-5605</strong> to schedule your free 21-point roof inspection and detailed estimate. We provide transparent pricing, honest assessments, and proven systems that protect your investment.</p>

${companyAuthorityFooter()}
`.trim();
  }

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
    { path: '/licensed-roofing-contractor', title: 'Licensed Roofing Contractor South Florida' },
    { path: '/frequently-asked-questions', title: 'Frequently Asked Questions' }
  ];

  servicePages.forEach(({ path: pagePath, title }) => {
    try {
    const metadata = getSEOMetadata(pagePath);

        // Build JSON-LD schema array for pages that have FAQ/Breadcrumb data
    let jsonLdSchema = null;
    const schemaConfig = SERVICE_PAGE_SCHEMAS[pagePath] || CITY_PAGE_SCHEMAS[pagePath];
    if (schemaConfig) {
      if (schemaConfig.directSchema) {
        // City pages: combine directSchema with any FAQs defined alongside it
        if (schemaConfig.faqs) {
          const citySchemaItems = [schemaConfig.directSchema];
          citySchemaItems.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: schemaConfig.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer }
            }))
          });
          jsonLdSchema = citySchemaItems;
        } else {
          jsonLdSchema = schemaConfig.directSchema;
        }
      } else {
      const schemaItems = [];
      if (schemaConfig.faqs) {
        schemaItems.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: schemaConfig.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer', text: faq.answer
            }
          }))
        });
      }
      if (schemaConfig.howToSteps) {
        schemaItems.push({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: schemaConfig.howToName,
          description: schemaConfig.howToDescription,
          step: schemaConfig.howToSteps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.name,
            text: s.text
          }))
        });
      }
      schemaItems.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: schemaConfig.breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      });
      jsonLdSchema = schemaItems;
      } // end else
    }    const html = createHTMLTemplate(
      metadata.title || title,
      metadata.description || `Professional ${title.toLowerCase()} from All Phase Construction USA`,
      metadata.canonical || `https://allphaseconstructionfl.com${pagePath}`,
      pagePath === '/how-to-hire-roofing-contractor' ? generateHowToHireContent() :
      pagePath === '/roofing-services' ? generateRoofingServicesContent() :
      pagePath === '/roof-replacement-process' ? generateRoofReplacementProcessContent() :
      pagePath === '/shingle-roofing' ? generateShingleRoofingContent() :
      pagePath === '/metal-roofing' ? generateMetalRoofingContent() :
      pagePath === '/tile-roofing' ? generateTileRoofingContent() :
      pagePath === '/flat-roofing' ? generateFlatRoofingContent() :
      pagePath === '/residential-roofing' ? generateResidentialRoofingContent() :
      pagePath === '/commercial-roofing' ? generateCommercialRoofingContent() :
      pagePath === '/roof-repair' ? generateRoofRepairHubContent() :
      pagePath === '/roof-inspection' ? generateRoofInspectionHubContent() :
      pagePath === '/roof-cost-calculator' ? generateRoofCostCalculatorContent() :
      defaultServicePageContent(title),
      jsonLdSchema
    );

    const dir = path.join(publicDir, pagePath.substring(1));
    const filePath = path.join(dir, 'index.html');
    console.log(`Ã°ÃÃÃ DEBUG: Writing service page to: ${filePath}`);
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, html);
      console.log(`ÃÂ¢ÃÃ Generated: dist${pagePath}/index.html`);
      console.log(`  File exists? ${fs.existsSync(filePath)}, Size: ${fs.statSync(filePath).size} bytes`);
    } catch (err) {
      console.error(`ÃÂ¢ÃÃ ERROR writing ${pagePath}:`, err);
    }
    totalPages++;
    } catch (err) {
      console.error(`⚠️ ERROR generating ${pagePath}: ${err.message}`);
      console.error(err.stack);
    }
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
  console.log('ÃÂ¢ÃÃ Prerendered: roof-replacement/index.html');
  totalPages++;
  // 2.3. Generate Additional Location Pages (not in main LOCATIONS array)
  console.log('\nÃ°ÃÃÃ Generating Additional Location Pages...\n');

  const additionalLocations = [
    { path: '/locations/gulf-stream', title: 'Gulf Stream, FL Roofing Services', city: 'Gulf Stream' },
    { path: '/locations/jupiter', title: 'Jupiter, FL Roofing Services', city: 'Jupiter' },
    { path: '/locations/lake-worth-beach', title: 'Lake Worth Beach, FL Roofing Services', city: 'Lake Worth Beach' },
    { path: '/locations/loxahatchee-groves', title: 'Loxahatchee Groves, FL Roofing Services', city: 'Loxahatchee Groves' },
    { path: '/locations/pembroke-park', title: 'Pembroke Park, FL Roofing Services', city: 'Pembroke Park' }
  ];

  additionalLocations.forEach(({ path: pagePath, title, city }) => {
    try {
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
      <li><strong>Roof Repair</strong> ÃÂ¢ÃÃ Emergency and scheduled repairs for all roof types</li>
      <li><strong>Roof Replacement</strong> ÃÂ¢ÃÃ Complete reroof with HVHZ-compliant materials</li>
      <li><strong>Roof Inspection</strong> ÃÂ¢ÃÃ Thorough assessments for insurance and peace of mind</li>
      <li><strong>Preventive Maintenance</strong> ÃÂ¢ÃÃ Programs to extend your roof's lifespan</li>
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
    console.log(`ÃÂ¢ÃÃ Generated: dist${pagePath}/index.html`);
    totalPages++;
    } catch (err) {
      console.error(`⚠️ ERROR generating ${city}: ${err.message}`);
      console.error(err.stack);
    }
  });

  // 2.4. Generate Top-5-Roofer Service Area Pages
  console.log('\nÃ°ÃÃÃ Generating Top-5-Roofer Service Area Pages...\n');

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
    try {
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
      <li><strong>Dual Licensing</strong> ÃÂ¢ÃÃ Both roofing (CCC) and general contracting (CGC) licenses</li>
      <li><strong>HVHZ Certified</strong> ÃÂ¢ÃÃ Approved for High-Velocity Hurricane Zone installations</li>
      <li><strong>Manufacturer Warranties</strong> ÃÂ¢ÃÃ Premium warranties on all materials and workmanship</li>
      <li><strong>Local Expertise</strong> ÃÂ¢ÃÃ Based in Deerfield Beach, serving South Florida since 2003</li>
      <li><strong>A+ BBB Rating</strong> ÃÂ¢ÃÃ Consistent 5-star reviews and customer satisfaction</li>
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
    console.log(`ÃÂ¢ÃÃ Generated: dist${pagePath}/index.html`);
    totalPages++;
    } catch (err) {
      console.error(`⚠️ ERROR generating ${city}: ${err.message}`);
      console.error(err.stack);
    }
  });

  // 2.5. Generate Blog Post Pages from Sitemap
  console.log('\nÃ°ÃÃÃ Generating Blog Post Pages from Sitemap...\n');

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
          try {
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
        <strong>Expert Roofing Insights</strong> from All Phase Construction USA ÃÂ¢ÃÃ Your trusted dual-licensed roofing contractor serving Broward and Palm Beach County.
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
          console.log(`ÃÂ¢ÃÃ Generated: dist/blog/${slug}/index.html`);
          totalPages++;
          } catch (err) {
            console.error(`⚠️ ERROR generating ${slug}: ${err.message}`);
            console.error(err.stack);
          }
        });
      } else {
        console.log('ÃÂ¢ÃÃÂ¹ÃÂ¯ÃÂ¸Ã No blog posts found in sitemap\n');
      }
    } else {
      console.log('ÃÂ¢ÃÃÂ ÃÂ¯ÃÂ¸Ã Sitemap not found at public/sitemap.xml\n');
    }
  } catch (err) {
    console.log('ÃÂ¢ÃÃÂ ÃÂ¯ÃÂ¸Ã Error generating blog posts:', err.message);
  }

  // 3. Generate 3-Silo City Pages for all cities
  const priorityCities = ['boca-raton', 'fort-lauderdale', 'coral-springs', 'pompano-beach',
                          'west-palm-beach', 'delray-beach', 'boynton-beach', 'deerfield-beach',
                          'parkland', 'coconut-creek', 'wellington'];

  console.log('\nÃ°ÃÃÃ Generating Location Pages from Single Source of Truth...\n');

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

    // Apply city-specific schemas from CITY_PAGE_SCHEMAS
    const citySchemaConfig = CITY_PAGE_SCHEMAS['/locations/' + slug];
    if (citySchemaConfig && !hubSchema) {
      if (citySchemaConfig.faqs) {
        hubSchema = [citySchemaConfig.directSchema, {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: citySchemaConfig.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        }];
      } else {
        hubSchema = citySchemaConfig.directSchema;
      }
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
    console.log(`ÃÂ¢ÃÃ Generated: dist/locations/${slug}/index.html`);
    totalPages++;
  });

  console.log('\nÃ°ÃÃÃ Generating 3-Silo City Pages (Repair + Inspection spokes)...\n');

  // Generate /roof-repair/:slug and /roof-inspection/:slug pages
  cities.forEach(({ slug, city }) => {
    try {
    const cityName = city;
    const citySlug = slug;

    // Skip county-level entries for now
    if (citySlug.includes('county')) return;

    // SILO 2: Roof Repair - /roof-repair/[city]
    const repairPath = `/roof-repair/${citySlug}`;
    const repairMetadata = getSEOMetadata(repairPath, cityName);
    // Generate city-specific repair FAQs and schema
    const repairSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Roof Repair",
            "item": "https://allphaseconstructionfl.com/roof-repair"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${cityName}`,
            "item": `https://allphaseconstructionfl.com/roof-repair/${citySlug}`
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How quickly can you respond to emergency roof repairs in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer same-day emergency response throughout ${cityName} and all of Broward and Palm Beach County. Call (754) 227-5605 and we can dispatch a crew within 2-4 hours for an active leak.`
            }
          },
          {
            "@type": "Question",
            "name": `Does homeowner insurance cover roof repair in ${cityName}, FL?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Most Florida homeowner policies cover storm and wind damage. We work directly with insurance adjusters in ${cityName} and can document damage for your claim at no extra charge.`
            }
          },
          {
            "@type": "Question",
            "name": `How much does a roof repair cost in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Roof repair costs in ${cityName} vary based on the extent of damage, materials needed, and accessibility. Minor repairs typically start at $300-$800, while more extensive repairs can range from $1,500-$5,000. We provide free inspections and detailed estimates before any work begins.`
            }
          },
          {
            "@type": "Question",
            "name": `Do I need a permit for roof repair in ${cityName}, FL?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `In ${cityName}, permits are typically required for roof repairs exceeding 100 square feet or involving structural work. Minor repairs like replacing a few shingles usually do not require permits. We handle all permitting requirements for your project.`
            }
          },
          {
            "@type": "Question",
            "name": `Are you licensed for roof repairs in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes. All Phase Construction USA holds Florida State Certified Roofing Contractor license CCC-1331464, covering all repair work in ${cityName} and throughout Broward and Palm Beach County.`
            }
          }
        ]
      }
    ];

    const repairHTML = createHTMLTemplate(
      repairMetadata.title,
      repairMetadata.description,
      repairMetadata.canonical,
      generateRoofRepairContent(cityName, citySlug),
      repairSchemas
    );
    const repairDir = path.join(publicDir, 'roof-repair', citySlug);
    fs.mkdirSync(repairDir, { recursive: true });
    fs.writeFileSync(path.join(repairDir, 'index.html'), repairHTML);
    console.log(`ÃÂ¢ÃÃ Generated: dist/roof-repair/${citySlug}/index.html`);
    totalPages++;

    // SILO 3: Roof Inspection - /roof-inspection/[city]
    const inspectionPath = `/roof-inspection/${citySlug}`;
    const inspectionMetadata = getSEOMetadata(inspectionPath, cityName);
    // Generate city-specific inspection FAQs and schema
    const inspectionSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Roof Inspection",
            "item": "https://allphaseconstructionfl.com/roof-inspection"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${cityName}`,
            "item": `https://allphaseconstructionfl.com/roof-inspection/${citySlug}`
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does a roof inspection cost in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `All Phase Construction USA provides free roof inspections for homeowners in ${cityName}. For insurance or real estate purposes, detailed written inspection reports are available. Call (754) 227-5605 to schedule your inspection.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does a roof inspection take in ${cityName}, FL?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Most roof inspections in ${cityName} take between 45-90 minutes, depending on roof size, system complexity, and accessibility. We provide a detailed written report documenting all findings.`
            }
          },
          {
            "@type": "Question",
            "name": `What does a roof inspection include in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Our ${cityName} roof inspections include evaluation of roof covering condition, flashing and penetrations, gutters and drainage, ventilation systems, structural integrity, and documentation of any deficiencies or required repairs.`
            }
          },
          {
            "@type": "Question",
            "name": `Do I need a roof inspection before buying a home in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes. A professional roof inspection before purchasing a home in ${cityName} can identify existing damage, remaining service life, and potential repair costs that may not be visible during a standard home inspection.`
            }
          },
          {
            "@type": "Question",
            "name": `Are you licensed to perform roof inspections in ${cityName}, FL?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes. All Phase Construction USA holds Florida State Certified Roofing Contractor license CCC-1331464 and performs professional roof inspections throughout ${cityName} and all of Broward and Palm Beach County.`
            }
          }
        ]
      }
    ];

    const inspectionHTML = createHTMLTemplate(
      inspectionMetadata.title,
      inspectionMetadata.description,
      inspectionMetadata.canonical,
      generateRoofInspectionContent(cityName, citySlug),
      inspectionSchemas
    );
    const inspectionDir = path.join(publicDir, 'roof-inspection', citySlug);
    fs.mkdirSync(inspectionDir, { recursive: true });
    fs.writeFileSync(path.join(inspectionDir, 'index.html'), inspectionHTML);
    console.log(`ÃÂ¢ÃÃ Generated: dist/roof-inspection/${citySlug}/index.html`);
    totalPages++;
    } catch (err) {
      console.error(`⚠️ ERROR generating ${cityName}: ${err.message}`);
      console.error(err.stack);
    }
  });



    // Best Roofers Deerfield Beach - Premium Money Page
  const bestRoofersDFBDir = path.join(distDir, 'locations/deerfield-beach/best-roofers-deerfield-beach');
  fs.mkdirSync(bestRoofersDFBDir, { recursive: true });
  const bestRoofersDFBContent = `
  <h1>Top 5 Best Rated Roofers in Deerfield Beach, FL (2026)</h1>

  <p>Finding a roofer in Deerfield Beach you can actually trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records.</p>

  <h2>Finding a Roofer in Deerfield Beach You Can Actually Trust</h2>

  <p><a href="/locations/deerfield-beach">Deerfield Beach roofing services</a> protect homes from one of the most punishing climates in America. Located in Broward County's HVHZ zone, every roof replacement here must meet strict Florida Building Code wind standards.</p>

  <p>Storm season brings real risk — and real opportunity for fly-by-night contractors to take advantage of homeowners in a rush. After researching dozens of roofing companies across Deerfield Beach and Broward County, five rose to the top: <strong>All Phase Construction USA</strong>, <strong>Aastro Roofing</strong>, <strong>Monarch Roofing &amp; Construction</strong>, <strong>Bentley Roofing</strong>, and <strong>Blues Brothers Roofing Company</strong>. Each earned their spot through verifiable credentials, strong reviews, and a proven track record of protecting South Florida homes.</p>

  <h2>Your List of the Top 5 Best Roofers in Deerfield Beach, FL</h2>

  <ol>
    <li><strong>All Phase Construction USA</strong> ⭐ 4.8 (138+ reviews) — Dual-licensed roofer + general contractor with wind mitigation upgrades that lower your insurance premium.</li>
    <li><strong>Aastro Roofing</strong> ⭐ 4.9 (500+ reviews) — 3rd-generation family roofer, A+ BBB, Contractor of the Year 2017–2022, 25-year warranty.</li>
    <li><strong>Monarch Roofing &amp; Construction</strong> ⭐ 5.0 (Angi) — Family-owned since 2005, dual-licensed, Nextdoor Neighborhood Favorite 2021 &amp; 2022, free Fortified Roof Certification.</li>
    <li><strong>Bentley Roofing</strong> ⭐ 4.8 — Serving Deerfield Beach since 2007, Angie's List Super Service Award winner, video roof inspections.</li>
    <li><strong>Blues Brothers Roofing Company</strong> ⭐ 4.8 — Since 2005, Tile Roofing Institute certified for Florida high-wind installations, GAF/Atlas/Eagle/TAMKO certified.</li>
  </ol>

  <h2>How We Chose the Best Roofing Companies in Deerfield Beach</h2>

  <p>Choosing the best roofer in Deerfield Beach isn't like choosing in most parts of the country. This is HVHZ territory. Every roof must meet Florida Building Code Section 1504 wind resistance standards. A roofer who doesn't understand Notice of Acceptance (NOA) requirements or HVHZ installation specs is a liability — not a solution.</p>

  <p>When selecting the best roofers in Deerfield Beach, it's crucial to focus on reputable roofers who are known for quality craftsmanship, reliability, and the ability to address a wide range of roofing needs. We evaluated every company on credentials, local track record, real customer reviews, and meaningful differentiators — not marketing claims.</p>

  <h3>Criteria checklist:</h3>
  <ul>
    <li>Florida State Certified Roofing Contractor license — verified active</li>
    <li>HVHZ installation experience and NOA compliance knowledge</li>
    <li>Verifiable manufacturer certifications (not self-reported)</li>
    <li>BBB accreditation and rating</li>
    <li>Google and multi-platform review volume + consistency</li>
    <li>Wind mitigation services (directly impacts homeowner insurance)</li>
    <li>Longevity — roofing companies that last are ones that do things right</li>
    <li>Community presence — local roots, chamber membership, affiliations</li>
    <li>Workmanship warranty backed by manufacturer or third-party guarantee</li>
    <li>Residential AND commercial capability where offered</li>
  </ul>

  <h2>All Phase Construction USA — Deerfield Beach, FL</h2>

  <p><strong>⭐ 4.8 out of 5 (138+ Google reviews)</strong></p>

  <p>All Phase Construction USA has protected Deerfield Beach and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC-1331464) and a Florida Certified General Contractor license (CGC-1526236). That dual licensing is rare in the industry — and it matters more than most homeowners realize. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, and document everything for insurance discounts.</p>

  <h3>Services Offered:</h3>
  <p>Roof replacement (<a href="/shingle-roofing">shingle roofing</a>, <a href="/tile-roofing">tile roofing</a>, <a href="/metal-roofing">metal roofing</a>, <a href="/flat-roofing">flat roofing</a>, modified cap sheet), full re-roofing services, roof decking inspection and repair, <a href="/roof-repair/deerfield-beach">roof repair</a> and emergency leak response, storm damage restoration, <a href="/roof-inspection/deerfield-beach">wind mitigation inspections</a> and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, Conklin, IB, Soprema), preventative maintenance programs, solar-ready roofing integration, waterproofing and gutter systems, permit coordination and inspection management.</p>

  <h3>Certifications:</h3>
  <p>Owens Corning Platinum Preferred Contractor, TAMKO Pro Platinum, CertainTeed Select Shingle Master, GAF Gold Certified, IB Roof Systems Certified, Soprema Certified, Certified MySafeFloridaHome Contractor, Wind Loss Mitigator, 160 MPH wind warranty.</p>

  <p><strong>Contact:</strong> (754) 227-5605 | 159 NW 1st St, Deerfield Beach, FL 33441</p>

  <h2>Aastro Roofing — Deerfield Beach, FL</h2>

  <p><strong>⭐ 4.9 out of 5 (500+ reviews across platforms)</strong></p>

  <p>Aastro Roofing is a family-owned roofing company with three generations of expertise — a family tradition dating to the 1940s. Jason W. Blair (President) and James T. Blair (CEO) founded the current operation in 2016, bringing decades of combined executive experience from some of the largest roofing companies in North America. Their 500+ reviews across Google, HomeAdvisor, Angi, and Yelp tell a consistent story: they show up, they communicate, and they deliver.</p>

  <h3>Services:</h3>
  <p>Residential and commercial roof repair and replacement, tile, shingle, metal, flat roof systems, TPO, EPDM, PVC, and modified bitumen, roof restorations and coatings, emergency repairs, free roof inspections, insurance claim assistance.</p>

  <h3>Standouts:</h3>
  <p>A+ BBB Accredited since 2017 | Contractor of the Year awards 2017–2022 | 4.9 Google rating across 500+ reviews | 25-year manufacturer warranties | Certified: GAF, CertainTeed, Suprema, FiberTech, Viking</p>

  <p><strong>Contact:</strong> (561) 409-3280 | 159 NW 1st St Suite 5, Deerfield Beach, FL 33441</p>

  <h2>Monarch Roofing &amp; Construction — Deerfield Beach, FL</h2>

  <p><strong>⭐ 5.0 out of 5 (Angi) | Nextdoor Neighborhood Favorite 2021 &amp; 2022</strong></p>

  <p>Monarch Roofing &amp; Construction started in 2005 — a small family-owned contractor in Deerfield Beach focused on residential re-roofing. Victor Alfonso Huipio (President) and Samuel Huipio (VP) have roots in South Florida roofing going back to 1990. Two decades later, their strategy of focusing on their hometown has paid off: Nextdoor Neighborhood Favorite recognition and consistent 5-star ratings across platforms.</p>

  <h3>Services:</h3>
  <p>Asphalt shingle installation and repair, concrete and clay tile roof systems, metal roofing, flat roof systems, underlayment installation, roof repair and maintenance, re-roofing, gutter installation, MySafeFloridaHome inspections.</p>

  <h3>Standouts:</h3>
  <p>Free Fortified Roof Certification with new installs | Dual-licensed FL State Certified RC + GC | Nextdoor Neighborhood Favorite 2021 &amp; 2022 | Consistent 5.0 on Angi | 588+ permitted projects</p>

  <p><strong>Contact:</strong> (954) 426-8050 | 1202 SW 1st Way, Deerfield Beach, FL 33441</p>

  <h2>Bentley Roofing — Deerfield Beach, FL</h2>

  <p><strong>⭐ 4.8 out of 5 | Angie's List Super Service Award — Multiple Years</strong></p>

  <p>Bentley Roofing has been serving Deerfield Beach and surrounding communities since 2007 — more than 18 years of consistent, award-winning service. Founded by Michael Devaney, Bentley has built a reputation on one principle: do what you promise, when you promise it. Their Angie's List Super Service Award recognizes only the top 5% of roofing companies across Palm Beach, Broward, and Miami-Dade counties.</p>

  <h3>Services:</h3>
  <p>Roof replacement and new construction, roof repair, flat/metal/tile/shingle systems, gutter services, video roof inspections, free estimates and inspections.</p>

  <h3>Standouts:</h3>
  <p>Angie's List Super Service Award — top 5% in South Florida | Video roof inspection technology | 18+ years serving Deerfield Beach | FL State Certified RC License CCC1328148</p>

  <p><strong>Contact:</strong> (954) 979-2233 | 30 NE 10th Street, Pompano Beach, FL 33060</p>

  <h2>Blues Brothers Roofing Company — Deerfield Beach, FL</h2>

  <p><strong>⭐ 4.8 out of 5 | A+ BBB Rated | In Business Since 2005</strong></p>

  <p>Blues Brothers Roofing Company has been protecting South Florida homes since 2005. Their certification by the Tile Roofing Institute for Florida high-wind installations is specific to Florida's demanding wind environment. They are also certified installers for GAF, Atlas, Eagle, and TAMKO — four of the leading roofing manufacturers in the country.</p>

  <h3>Services:</h3>
  <p>Tile roof installation and repair, shingle roof installation and replacement, metal roofing, flat roof systems (TPO, modified bitumen, PVC, EPDM), waterproofing and elastomeric coatings, commercial roofing, residential roofing, solar roofing, roof inspections and insurance documentation.</p>

  <h3>Standouts:</h3>
  <p>Tile Roofing Institute certified for Florida high-wind installations | GAF, Atlas, Eagle, TAMKO certified | A+ BBB rated | 20 years in business</p>

  <p><strong>Contact:</strong> (561) 361-6378 | 4260 NW 1st Ave, Boca Raton, FL 33431</p>

  <h2>Understanding Roofing Pricing in Deerfield Beach</h2>

  <p>Deerfield Beach roofing costs run higher than national averages for good reason. HVHZ-compliant installation requires certified materials, licensed crews, and proper permitting — all of which add to the cost but are non-negotiable under Florida Building Code.</p>

  <h3>Typical Pricing Ranges:</h3>
  <ul>
    <li><strong>Asphalt Shingle (replacement):</strong> $9,000 – $22,000 — HVHZ-rated shingles required in Broward County</li>
    <li><strong>Concrete/Clay Tile (replacement):</strong> $16,000 – $45,000+ — Higher material cost; foam adhesion in HVHZ</li>
    <li><strong>Metal Roofing (standing seam/panel):</strong> $18,000 – $55,000+ — Highest durability; strong insurance benefits</li>
    <li><strong>Flat Roofing (commercial/residential):</strong> $8,000 – $25,000 — System type (TPO/PVC/modified) affects pricing</li>
    <li><strong>Repair (minor):</strong> $350 – $2,500 — Leak repair, tile replacement, flashing issues</li>
    <li><strong>Wind Mitigation Inspection:</strong> $75 – $150 — Potential to save $500–$2,000+ annually on insurance</li>
  </ul>

  <p>Any quote significantly below these ranges in Deerfield Beach deserves close scrutiny. Use our <a href="/roof-cost-calculator/">roof cost calculator</a> to estimate your project before calling.</p>

  <h2>FAQ — Frequently Asked Questions About Roofing in Deerfield Beach, FL</h2>

  <h3>How much does a new roof cost in Deerfield Beach?</h3>
  <p>Most residential roof replacements in Deerfield Beach range from $9,000 to $45,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting add cost that is unavoidable and non-negotiable for code-compliant work.</p>

  <h3>Do I need a permit for roofing work in Deerfield Beach / Broward County?</h3>
  <p>Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag.</p>

  <h3>What is HVHZ and does it apply to Deerfield Beach?</h3>
  <p>HVHZ stands for High Velocity Hurricane Zone. Deerfield Beach is in Broward County, which is designated HVHZ. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA).</p>

  <h3>What is a wind mitigation inspection and why does it matter?</h3>
  <p>A wind mitigation inspection documents how your roof is built relative to Florida's wind standards. Insurance companies use this report to calculate premium discounts. A strong wind mitigation report can reduce your homeowner's insurance by several hundred to several thousand dollars annually.</p>

  <h3>What is the difference between a roofing license and a general contractor license in Florida?</h3>
  <p>A Certified Roofing Contractor (CRC) license authorizes a contractor to install and repair roof systems. A Certified General Contractor (CGC) license authorizes structural, framing, and broader construction scope. A dual-licensed contractor — like All Phase Construction USA — can legally handle both the roof and any structural issues discovered during the project.</p>

  <h3>How do I know if I need repair or full replacement?</h3>
  <p>General rule: if damage is localized and the roof system is under 15 years old, repair often makes sense. If the roof is 20+ years old, has multiple problem areas, or if repair cost approaches 25-30% of replacement cost, full replacement provides better long-term value.</p>

  <h3>Does homeowner's insurance cover roof damage in Florida?</h3>
  <p>It depends on the cause and your policy. Storm damage, wind damage, and sudden events are typically covered. Gradual wear, maintenance issues, and pre-existing damage are generally not. Strong documentation and a contractor familiar with the claims process can significantly improve outcomes.</p>

  <h3>Can a Deerfield Beach homeowner pull their own roof permit?</h3>
  <p>No. In Broward County, roofing permits must be pulled by a licensed contractor, not the homeowner. Any contractor who asks you to pull the permit is either unlicensed or attempting to avoid accountability for the work.</p>

  <h2>Ready to Get Your Roof Done Right in Deerfield Beach?</h2>

  <p>Every company on this list has earned their place — verified licenses, strong reviews, and real local presence. The right choice comes down to your specific situation: roof type, storm damage claim status, commercial vs. residential, and what level of service and documentation you need.</p>

  <p>If you want the contractor who does the most for your long-term protection — roof, structure, and insurance savings — <strong>All Phase Construction USA</strong> is the call to make. Call <strong>(754) 227-5605</strong> for a free roof assessment.</p>

  <p>All five answer your phone. All five pull their own permits. All five have been here long enough to stand behind their work. Don't wait for the next storm. Get your roof inspected now — before the season makes it urgent.</p>
`;
  fs.writeFileSync(path.join(bestRoofersDFBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Deerfield Beach FL (2026) | All Phase',
    'Looking for the best roofers in Deerfield Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach',
    bestRoofersDFBContent,
    [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://allphaseconstructionfl.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Deerfield Beach",
            "item": "https://allphaseconstructionfl.com/locations/deerfield-beach"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Best Roofers in Deerfield Beach",
            "item": "https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a new roof cost in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential roof replacements in Deerfield Beach range from $9,000 to $45,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting add cost that is unavoidable and non-negotiable for code-compliant work."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a permit for roofing work in Deerfield Beach / Broward County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag."
            }
          },
          {
            "@type": "Question",
            "name": "What is HVHZ and does it apply to Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVHZ stands for High Velocity Hurricane Zone. Deerfield Beach is in Broward County, which is designated HVHZ. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA)."
            }
          },
          {
            "@type": "Question",
            "name": "What is a wind mitigation inspection and why does it matter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A wind mitigation inspection documents how your roof is built relative to Florida's wind standards. Insurance companies use this report to calculate premium discounts. A strong wind mitigation report can reduce your homeowner's insurance by several hundred to several thousand dollars annually."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a roofing license and a general contractor license in Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Certified Roofing Contractor (CRC) license authorizes a contractor to install and repair roof systems. A Certified General Contractor (CGC) license authorizes structural, framing, and broader construction scope. A dual-licensed contractor — like All Phase Construction USA — can legally handle both the roof and any structural issues discovered during the project."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if I need repair or full replacement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "General rule: if damage is localized and the roof system is under 15 years old, repair often makes sense. If the roof is 20+ years old, has multiple problem areas, or if repair cost approaches 25-30% of replacement cost, full replacement provides better long-term value."
            }
          },
          {
            "@type": "Question",
            "name": "Does homeowner's insurance cover roof damage in Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the cause and your policy. Storm damage, wind damage, and sudden events are typically covered. Gradual wear, maintenance issues, and pre-existing damage are generally not. Strong documentation and a contractor familiar with the claims process can significantly improve outcomes."
            }
          },
          {
            "@type": "Question",
            "name": "Can a Deerfield Beach homeowner pull their own roof permit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. In Broward County, roofing permits must be pulled by a licensed contractor, not the homeowner. Any contractor who asks you to pull the permit is either unlicensed or attempting to avoid accountability for the work."
            }
          }
        ]
      }
    ]
  ));
  console.log('ÃÂ¢ÃÃ Prerendered: locations/deerfield-beach/best-roofers-deerfield-beach/index.html');

  // Best Roofers Fort Lauderdale - Premium Money Page
  const bestRoofersFTLDir = path.join(distDir, 'locations/fort-lauderdale/best-roofers-fort-lauderdale');
  fs.mkdirSync(bestRoofersFTLDir, { recursive: true });
  const bestRoofersFTLContent = `
  <h1>Top 5 Best Rated Roofers in Fort Lauderdale, FL (2026)</h1>

  <p>Fort Lauderdale has no shortage of roofing contractors. Drive down Federal Highway after a storm and you'll see door hangers from out-of-state crews who materialized overnight. The problem isn't finding a roofer — it's knowing which ones are worth trusting with a $12,000 to $35,000 investment on a home that sits in one of the most demanding climate zones in North America.</p>

  <p>Fort Lauderdale falls entirely within Broward County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience. HVHZ compliance isn't optional — it's code, and it's enforced by the City of Fort Lauderdale Building Services Department.</p>

  <h2>Your List of the Top 5 Best Roofers in Fort Lauderdale, FL</h2>

  <ol>
    <li><strong>All Phase Construction USA</strong> — Dual-licensed CCC + CGC contractor with HVHZ compliance expertise across all roof system types</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong> — 25+ years in Fort Lauderdale, family-owned, HVHZ specialists</li>
    <li><strong>Tiger Team Roofing</strong> — Angie's List Super Service Award winner, Broward and Palm Beach presence</li>
    <li><strong>Nast Roofing</strong> — 30+ years operating in Fort Lauderdale, multiple code cycles and storm seasons</li>
    <li><strong>Paul Bange Roofing</strong> — South Florida institution, high-volume residential contractor</li>
  </ol>

  <h2>How We Chose the Roofing Companies in Fort Lauderdale</h2>

  <p>Every contractor on this list was evaluated against consistent criteria specific to Fort Lauderdale and Broward County:</p>

  <ul>
    <li><strong>Florida state licensing:</strong> Active CCC or CGC licensure verified through DBPR</li>
    <li><strong>HVHZ compliance capability:</strong> Specific product approvals, fastening schedules, and installation methods required by Fort Lauderdale's High Velocity Hurricane Zone designation</li>
    <li><strong>Permit history:</strong> Publicly verifiable through the City of Fort Lauderdale's online permit portal</li>
    <li><strong>Scope of services:</strong> Capability across multiple roof system types — tile, shingle, metal, and flat — for Fort Lauderdale's diverse housing stock from 1940s CBS homes to waterfront properties</li>
  </ul>

  <h2>All Phase Construction USA — Fort Lauderdale, FL</h2>

  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Broward and Palm Beach County, with significant project history in Fort Lauderdale across multiple neighborhoods and roof system types.</p>

  <p>The dual-license structure matters in Fort Lauderdale specifically. Roofing projects on older homes in areas like Riverside Park, Tarpon River, or Flagler Village often involve structural repairs — rotted decking, damaged rafters, deteriorated fascia — that require a general contractor license to address legally. All Phase handles both under one license.</p>

  <p>Fort Lauderdale's building department requires HVHZ-compliant materials and installation methods. All Phase installs roofing systems with Florida Product Approval numbers applicable to Broward County's wind speed requirements, and routinely works with the City of Fort Lauderdale's inspection scheduling process.</p>

  <h3>Services:</h3>
  <p>Roof replacement (<a href="/shingle-roofing">shingle</a>, <a href="/tile-roofing">tile</a>, <a href="/metal-roofing">metal</a>, <a href="/flat-roofing">flat</a>), <a href="/roof-repair/fort-lauderdale">roof repair</a>, structural upgrades, <a href="/roof-inspection/fort-lauderdale">wind mitigation inspections</a>, storm damage restoration, commercial roofing, permit coordination and inspection management.</p>

  <h3>License &amp; Contact:</h3>
  <p>CCC-1331464 (Roofing) | CGC-1526236 (General Contractor)<br/>
  <strong>Phone:</strong> (754) 227-5605<br/>
  Service area: <a href="/locations/fort-lauderdale">Fort Lauderdale</a> and all of Broward and Palm Beach County</p>

  <h2>Allied Roofing &amp; Sheet Metal — Fort Lauderdale, FL</h2>

  <p>Allied Roofing &amp; Sheet Metal is a family-owned roofing contractor based in Fort Lauderdale with over 25 years of operation in Broward, Miami-Dade, and Palm Beach counties. Their longevity in the Fort Lauderdale market — through multiple hurricane seasons, code cycles, and insurance market disruptions — signals operational stability. What distinguishes Allied is their explicit specialization in HVHZ systems, covering tile, metal, and shingle with the fastening schedules, product approvals, and underlayment specifications that Broward County requires.</p>

  <h2>Tiger Team Roofing — Fort Lauderdale, FL</h2>

  <p>Tiger Team Roofing is a Broward and Palm Beach County contractor with consistent presence in Fort Lauderdale. The company has received Angie's List Super Service Award recognition multiple years running, which reflects sustained positive customer feedback rather than a one-time review spike.</p>

  <h2>Nast Roofing — Fort Lauderdale, FL</h2>

  <p>Nast Roofing has been operating in Fort Lauderdale for over 30 years, making them one of the longer-tenured residential roofing contractors with specifically local focus. Thirty-plus years in Fort Lauderdale means Nast has worked through multiple roofing code cycles, the transition to HVHZ requirements, and several major storm seasons.</p>

  <h2>Paul Bange Roofing — Fort Lauderdale, FL</h2>

  <p>Paul Bange Roofing is a South Florida institution with multiple decades in the market and locations across Broward and Palm Beach County. They are one of the higher-volume residential roofing contractors in the region with established relationships with most major manufacturers.</p>

  <h2>Roofing Costs in Fort Lauderdale — What Should You Expect to Pay?</h2>

  <p>Fort Lauderdale roofing prices fall into roughly three categories. Fair market pricing for Fort Lauderdale homes:</p>

  <ul>
    <li><strong>Asphalt shingle replacement:</strong> $12,000–$22,000 for a typical 2,000–2,500 SF home</li>
    <li><strong>Concrete tile replacement:</strong> $18,000–$32,000 depending on tile weight, profile, and structural condition</li>
    <li><strong>Metal roofing (standing seam or metal tile):</strong> $22,000–$45,000 for residential systems</li>
    <li><strong>Flat roofing (modified bitumen or TPO):</strong> $8,000–$18,000 for typical residential flat sections</li>
    <li><strong>Minor repairs:</strong> $300–$1,200 for sealing, tile replacement, ridge cap work</li>
  </ul>

  <p>These figures reflect licensed, permitted, HVHZ-compliant installation with inspection. Decking replacement adds $2–$5 per square foot for damaged sections. Use our <a href="/roof-cost-calculator/">roof cost calculator</a> for estimates.</p>

  <h2>FAQ — Frequently Asked Questions About Roofing in Fort Lauderdale</h2>

  <h3>How do I verify a roofing contractor's license in Fort Lauderdale?</h3>
  <p>Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by contractor name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and not suspended or under disciplinary action.</p>

  <h3>Does my roof replacement in Fort Lauderdale need a permit?</h3>
  <p>Yes. Any roof replacement or significant repair in Fort Lauderdale requires a permit from the City of Fort Lauderdale Building Services Department. The permit triggers a final inspection by a city building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales.</p>

  <h3>What is HVHZ and why does it matter in Fort Lauderdale?</h3>
  <p>HVHZ stands for High Velocity Hurricane Zone. Fort Lauderdale and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in Fort Lauderdale must be familiar with and comply with HVHZ requirements.</p>

  <h3>Can I use my homeowner's insurance to pay for a new roof in Fort Lauderdale?</h3>
  <p>If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value — the difference can be substantial on an older roof.</p>

  <h3>What roofing materials are best for Fort Lauderdale's climate?</h3>
  <p>Concrete tile is the most common residential roofing material in Fort Lauderdale and performs well in South Florida's climate — impact-resistant, long service life, and established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment.</p>

  <h3>How long does a roof last in Fort Lauderdale?</h3>
  <p>Concrete tile roofs in Fort Lauderdale typically last 25–40 years with proper maintenance, though underlayment replacement is often needed in the 15–20 year range. Asphalt shingles last 15–20 years under South Florida conditions. Metal roofing has a 40–50 year service life. Flat roofing systems typically require maintenance every 10–15 years and full replacement after 20–25 years.</p>

  <h3>What should I do immediately after a storm damages my roof?</h3>
  <p>Document the damage with photographs before any temporary repairs. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment.</p>

  <h2>Ready to Get Your Roof Done Right in Fort Lauderdale?</h2>

  <p>All Phase Construction USA serves Fort Lauderdale with dual-licensed roofing and general contracting capability, comprehensive HVHZ-compliant installations, full permitting, and wind mitigation documentation. Call <strong>(754) 227-5605</strong> for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersFTLDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase',
    'Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale',
    bestRoofersFTLContent,
    [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://allphaseconstructionfl.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fort Lauderdale",
            "item": "https://allphaseconstructionfl.com/locations/fort-lauderdale"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Best Roofers Fort Lauderdale",
            "item": "https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I verify a roofing contractor's license in Fort Lauderdale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
            }
          },
          {
            "@type": "Question",
            "name": "Does my roof replacement in Fort Lauderdale need a permit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Any roof replacement or significant repair in Fort Lauderdale requires a permit from the City of Fort Lauderdale Building Services Department. The permit triggers a final inspection by a city building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
            }
          },
          {
            "@type": "Question",
            "name": "What is HVHZ and why does it matter in Fort Lauderdale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVHZ stands for High Velocity Hurricane Zone. Fort Lauderdale and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in Fort Lauderdale must be familiar with and comply with HVHZ requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my homeowner's insurance to pay for a new roof in Fort Lauderdale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value — the difference can be substantial on an older roof."
            }
          },
          {
            "@type": "Question",
            "name": "What roofing materials are best for Fort Lauderdale's climate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile is the most common residential roofing material in Fort Lauderdale and performs well in South Florida's climate — it's impact-resistant, has a long service life, and has established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a roof last in Fort Lauderdale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile roofs in Fort Lauderdale typically last 25–40 years with proper maintenance, though underlayment replacement is often needed in the 15–20 year range. Asphalt shingles last 15–20 years under South Florida conditions. Metal roofing has a 40–50 year service life. Flat roofing systems (modified bitumen, TPO) typically require maintenance every 10–15 years and full replacement after 20–25 years."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do immediately after a storm damages my roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Document the damage with photographs before any temporary repairs are made. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage — this is typically covered under your policy's emergency repair provision. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment."
            }
          }
        ]
      }
    ]
  ));
  console.log('ÃÂ¢ÃÃ Prerendered: locations/fort-lauderdale/best-roofers-fort-lauderdale/index.html');

  // Best Roofers West Palm Beach - Premium Money Page
  const bestRoofersWPBDir = path.join(distDir, 'locations/west-palm-beach/best-roofers-west-palm-beach');
  fs.mkdirSync(bestRoofersWPBDir, { recursive: true });
  const bestRoofersWPBContent = `
  <h1>Top 5 Best Rated Roofers in West Palm Beach, FL (2026)</h1>

  <p>West Palm Beach sits at the center of Palm Beach County's residential roofing market. The city encompasses everything from historic neighborhoods like Flamingo Park to newer developments in Westgate. Finding a roofer capable of handling the full range of West Palm Beach's housing stock — and who understands Palm Beach County's specific wind code requirements — requires more than a Google search.</p>

  <p>West Palm Beach falls within Palm Beach County's High Velocity Hurricane Zone, which means every roofing installation must meet Florida Building Code wind resistance standards specific to this coastal exposure. Contractors working in West Palm Beach must be licensed under Florida's roofing contractor category (CCC) or certified general contractor (CGC) license, and they must pull permits through Palm Beach County's building department.</p>

  <h2>Your List of the Top 5 Best Roofers in West Palm Beach, FL</h2>

  <ol>
    <li><strong>All Phase Construction USA</strong> — Dual-licensed CCC + CGC contractor serving Palm Beach and Broward County</li>
    <li><strong>Istueta Roofing</strong> — Family-owned Palm Beach County specialist, 40+ years experience</li>
    <li><strong>Roof Top Services</strong> — Established Palm Beach County presence, multiple roof systems</li>
    <li><strong>Kelly Roofing</strong> — Large-scale residential contractor, GAF Master Elite certified</li>
    <li><strong>Crowther Roofing</strong> — Multi-generation Palm Beach County roofer since 1949</li>
  </ol>

  <h2>How We Chose the Roofing Companies in West Palm Beach</h2>

  <p>Every contractor on this list was evaluated against criteria specific to West Palm Beach and Palm Beach County:</p>

  <ul>
    <li><strong>Florida state licensing:</strong> Active CCC or CGC licensure verified through DBPR</li>
    <li><strong>Palm Beach County permit history:</strong> Demonstrated track record pulling permits in Palm Beach County</li>
    <li><strong>Wind code compliance:</strong> Knowledge of Palm Beach County's specific wind speed requirements and product approvals</li>
    <li><strong>System capability:</strong> Experience across tile, shingle, metal, and flat roof systems common to West Palm Beach</li>
  </ul>

  <h2>All Phase Construction USA — West Palm Beach, FL</h2>

  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Palm Beach and Broward County, with significant project history in West Palm Beach across residential and commercial roof systems.</p>

  <p>The dual-license structure enables All Phase to handle projects that extend beyond surface roofing — structural repairs, decking replacement, fascia work — under one contractor. This capability matters in West Palm Beach's older neighborhoods where homes often need both roofing and structural attention.</p>

  <h3>Services:</h3>
  <p>Roof replacement (<a href="/shingle-roofing">shingle</a>, <a href="/tile-roofing">tile</a>, <a href="/metal-roofing">metal</a>, <a href="/flat-roofing">flat</a>), <a href="/roof-repair/west-palm-beach">roof repair</a>, structural upgrades, <a href="/roof-inspection/west-palm-beach">wind mitigation inspections</a>, storm damage restoration, commercial roofing, Palm Beach County permit coordination.</p>

  <h3>License &amp; Contact:</h3>
  <p>CCC-1331464 (Roofing) | CGC-1526236 (General Contractor)<br/>
  <strong>Phone:</strong> (754) 227-5605<br/>
  Service area: <a href="/locations/west-palm-beach">West Palm Beach</a> and all of Palm Beach and Broward County</p>

  <h2>Istueta Roofing — West Palm Beach, FL</h2>

  <p>Istueta Roofing is a family-owned roofing contractor with over 40 years of operation in Palm Beach County. Their longevity in West Palm Beach — through multiple code cycles, hurricane seasons, and roofing material evolutions — demonstrates sustained operational capability. Istueta specializes in residential roof systems common to West Palm Beach: concrete tile, asphalt shingle, and metal roofing.</p>

  <h2>Roof Top Services — West Palm Beach, FL</h2>

  <p>Roof Top Services is an established Palm Beach County roofing contractor with experience across residential and light commercial systems. The company works with multiple roof types and has demonstrated capability pulling permits through Palm Beach County's building department.</p>

  <h2>Kelly Roofing — West Palm Beach, FL</h2>

  <p>Kelly Roofing is one of the larger-volume residential roofing contractors operating in West Palm Beach and across South Florida. The company holds GAF Master Elite certification, which represents the top 3% of GAF contractors nationally. Kelly works primarily with asphalt shingle systems but also handles tile and metal installations.</p>

  <h2>Crowther Roofing — West Palm Beach, FL</h2>

  <p>Crowther Roofing has been operating in Palm Beach County since 1949, making them one of the longest-tenured roofing contractors in the region. Multi-generation longevity in a hurricane-prone market signals consistent quality and operational discipline. Crowther handles all residential roof system types common to West Palm Beach.</p>

  <h2>Roofing Costs in West Palm Beach — What Should You Expect to Pay?</h2>

  <p>West Palm Beach roofing costs reflect Palm Beach County's wind code requirements and permit fees. Fair market pricing:</p>

  <ul>
    <li><strong>Asphalt shingle replacement:</strong> $11,000–$23,000 for typical 2,000–2,500 SF homes</li>
    <li><strong>Concrete tile replacement:</strong> $17,000–$35,000 depending on tile profile and structural requirements</li>
    <li><strong>Metal roofing (standing seam or metal tile):</strong> $21,000–$48,000 for residential installations</li>
    <li><strong>Flat roofing (modified bitumen or TPO):</strong> $7,500–$19,000 for typical residential flat sections</li>
    <li><strong>Minor repairs:</strong> $350–$1,500 for leak repair, tile replacement, flashing work</li>
  </ul>

  <p>These figures reflect licensed, permitted installation with Palm Beach County inspection. Decking replacement adds $2–$5 per square foot. Use our <a href="/roof-cost-calculator/">roof cost calculator</a> for estimates.</p>

  <h2>FAQ — Frequently Asked Questions About Roofing in West Palm Beach</h2>

  <h3>Does my roof replacement in West Palm Beach need a permit?</h3>
  <p>Yes. Any roof replacement or significant repair in West Palm Beach requires a permit from Palm Beach County Building Division. The permit triggers inspection by a county building inspector. Unpermitted work creates problems with insurance claims and property transfers.</p>

  <h3>What is the difference between Palm Beach County wind code and HVHZ?</h3>
  <p>West Palm Beach falls within Palm Beach County's High Velocity Hurricane Zone (HVHZ). This designation requires more stringent fastening schedules, specific product approvals, and installation methods than standard Florida Building Code. Any contractor working in West Palm Beach must comply with HVHZ requirements.</p>

  <h3>How do I verify a roofing contractor's license in Florida?</h3>
  <p>Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by contractor name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and not suspended or under disciplinary action.</p>

  <h3>Can I use homeowner's insurance to pay for a new roof in West Palm Beach?</h3>
  <p>If your roof sustained damage from a covered event (storm, wind), your policy may cover replacement costs. Contact your insurance company before signing any contractor documentation. Have an independent inspection before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value (ACV) or replacement cost value (RCV).</p>

  <h3>What roofing materials perform best in West Palm Beach's climate?</h3>
  <p>Concrete tile is the most common residential roofing material in West Palm Beach — impact-resistant, long service life, and established wind approvals. Metal roofing provides excellent wind resistance and performs well in coastal environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's UV and heat conditions.</p>

  <h3>How long does a roof last in West Palm Beach?</h3>
  <p>Concrete tile roofs typically last 25–40 years with proper maintenance. Underlayment replacement is often needed at 15–20 years. Asphalt shingles last 15–20 years in South Florida conditions. Metal roofing has 40–50 year service life. Flat roofing systems require maintenance every 10–15 years and replacement after 20–25 years.</p>

  <h2>Ready to Get Your Roof Done Right in West Palm Beach?</h2>

  <p>All Phase Construction USA serves West Palm Beach with dual-licensed roofing and general contracting capability, full Palm Beach County permitting, and wind mitigation documentation. Call <strong>(754) 227-5605</strong> for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersWPBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in West Palm Beach FL (2026) | All Phase',
    'Looking for the best roofers in West Palm Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Palm Beach County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach',
    bestRoofersWPBContent,
    [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://allphaseconstructionfl.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "West Palm Beach",
            "item": "https://allphaseconstructionfl.com/locations/west-palm-beach"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Best Roofers West Palm Beach",
            "item": "https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I verify a roofing contractor's license in West Palm Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
            }
          },
          {
            "@type": "Question",
            "name": "Does my roof replacement in West Palm Beach need a permit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Any roof replacement or significant repair in West Palm Beach requires a permit from Palm Beach County Building Division. The permit triggers a final inspection by a county building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
            }
          },
          {
            "@type": "Question",
            "name": "What is HVHZ and why does it matter in West Palm Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVHZ stands for High Velocity Hurricane Zone. West Palm Beach and all of Palm Beach County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in West Palm Beach must be familiar with and comply with HVHZ requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my homeowner's insurance to pay for a new roof in West Palm Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value — the difference can be substantial on an older roof."
            }
          },
          {
            "@type": "Question",
            "name": "What roofing materials are best for West Palm Beach's climate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile is the most common residential roofing material in West Palm Beach and performs well in South Florida's climate — it's impact-resistant, has a long service life, and has established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a roof last in West Palm Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile roofs in West Palm Beach typically last 25–40 years with proper maintenance, though underlayment replacement is often needed in the 15–20 year range. Asphalt shingles last 15–20 years under South Florida conditions. Metal roofing has a 40–50 year service life. Flat roofing systems (modified bitumen, TPO) typically require maintenance every 10–15 years and full replacement after 20–25 years."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do immediately after a storm damages my roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Document the damage with photographs before any temporary repairs are made. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage — this is typically covered under your policy's emergency repair provision. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment."
            }
          }
        ]
      }
    ]
  ));
  console.log('ÃÂ¢ÃÃ Prerendered: locations/west-palm-beach/best-roofers-west-palm-beach/index.html');

  // Best Roofers Boca Raton - Premium Money Page
  const bestRoofersBocaDir = path.join(distDir, 'locations/boca-raton/best-roofers-boca-raton');
  fs.mkdirSync(bestRoofersBocaDir, { recursive: true });
  const bestRoofersBocaContent = `
  <h1>Top 5 Best Rated Roofers in Boca Raton, FL (2026)</h1>

  <p>Boca Raton represents one of South Florida's most distinctive residential roofing markets. The city ranges from luxury waterfront estates in Royal Palm Yacht & Country Club to established single-family neighborhoods in Boca Del Mar and newer developments west of I-95. Finding a roofer capable of handling Boca Raton's mix of high-end tile systems, coastal exposure challenges, and Palm Beach County's permitting requirements takes more than comparing online quotes.</p>

  <p>Boca Raton is located in Palm Beach County and falls within the High Velocity Hurricane Zone (HVHZ). Every roofing installation must meet Florida Building Code wind resistance standards, and all work requires permits through Palm Beach County Building Division. Contractors must be licensed under Florida's CCC (roofing) or CGC (general contractor) categories to work legally in Boca Raton.</p>

  <h2>Your List of the Top 5 Best Roofers in Boca Raton, FL</h2>

  <ol>
    <li><strong>All Phase Construction USA</strong> — Dual-licensed CCC + CGC contractor serving Palm Beach and Broward County</li>
    <li><strong>Istueta Roofing</strong> — Family-owned Palm Beach County specialist, 40+ years experience</li>
    <li><strong>Roof Top Services</strong> — Established Palm Beach County presence, residential and commercial capability</li>
    <li><strong>Kelly Roofing</strong> — Large-scale contractor, GAF Master Elite, extensive Boca Raton project history</li>
    <li><strong>Crowther Roofing</strong> — Operating in Palm Beach County since 1949, multi-generation family business</li>
  </ol>

  <h2>How We Chose the Roofing Companies in Boca Raton</h2>

  <p>Every contractor on this list was evaluated against criteria specific to Boca Raton and Palm Beach County:</p>

  <ul>
    <li><strong>Florida state licensing:</strong> Active CCC or CGC licensure verified through DBPR</li>
    <li><strong>Palm Beach County experience:</strong> Demonstrated project history in Boca Raton with verifiable permit records</li>
    <li><strong>High-end capability:</strong> Experience with premium tile systems, metal roofing, and architectural specifications common in Boca Raton's luxury market</li>
    <li><strong>Coastal environment knowledge:</strong> Understanding of salt-air corrosion mitigation and waterfront property requirements</li>
  </ul>

  <h2>All Phase Construction USA — Boca Raton, FL</h2>

  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Palm Beach and Broward County, with significant project history in Boca Raton across residential and commercial installations.</p>

  <p>The dual-license structure enables All Phase to handle complex Boca Raton projects that extend beyond surface roofing — structural upgrades, hurricane reinforcement, decking replacement — under one contractor and one permit. This capability matters in Boca Raton where older luxury homes often need both roofing and structural attention.</p>

  <p>All Phase installs roofing systems with Florida Product Approval numbers applicable to Palm Beach County's wind requirements and routinely works with Palm Beach County Building Division's inspection scheduling process.</p>

  <h3>Services:</h3>
  <p>Roof replacement (<a href="/shingle-roofing">shingle</a>, <a href="/tile-roofing">tile</a>, <a href="/metal-roofing">metal</a>, <a href="/flat-roofing">flat</a>), <a href="/roof-repair/boca-raton">roof repair</a>, structural upgrades, <a href="/roof-inspection/boca-raton">wind mitigation inspections</a>, storm damage restoration, commercial roofing, Palm Beach County permit coordination.</p>

  <h3>License &amp; Contact:</h3>
  <p>CCC-1331464 (Roofing) | CGC-1526236 (General Contractor)<br/>
  <strong>Phone:</strong> (754) 227-5605<br/>
  Service area: <a href="/locations/boca-raton">Boca Raton</a> and all of Palm Beach and Broward County</p>

  <h2>Istueta Roofing — Boca Raton, FL</h2>

  <p>Istueta Roofing is a family-owned roofing contractor with over 40 years operating in Palm Beach County. Their longevity in Boca Raton — through multiple hurricane seasons, code cycles, and material evolutions — demonstrates sustained operational capability. Istueta specializes in residential roof systems common to Boca Raton: concrete tile, clay tile, asphalt shingle, and metal roofing.</p>

  <h2>Roof Top Services — Boca Raton, FL</h2>

  <p>Roof Top Services is an established Palm Beach County roofing contractor with experience across residential and commercial systems. The company works with multiple roof types and has demonstrated capability pulling permits through Palm Beach County Building Division for Boca Raton projects.</p>

  <h2>Kelly Roofing — Boca Raton, FL</h2>

  <p>Kelly Roofing is one of the larger-volume residential roofing contractors operating in Boca Raton and across South Florida. The company holds GAF Master Elite certification, representing the top 3% of GAF contractors nationally. Kelly has extensive project history in Boca Raton across neighborhoods ranging from waterfront properties to inland developments.</p>

  <h2>Crowther Roofing — Boca Raton, FL</h2>

  <p>Crowther Roofing has been operating in Palm Beach County since 1949, making them one of the longest-tenured roofing contractors in the region. Multi-generation longevity in a hurricane-prone luxury market signals consistent quality and operational discipline. Crowther handles all residential roof system types common to Boca Raton's diverse housing stock.</p>

  <h2>Roofing Costs in Boca Raton — What Should You Expect to Pay?</h2>

  <p>Boca Raton roofing costs reflect Palm Beach County's wind code requirements, permit fees, and the city's mix of premium materials and high-end installations. Fair market pricing:</p>

  <ul>
    <li><strong>Asphalt shingle replacement:</strong> $11,000–$24,000 for typical 2,000–2,500 SF homes</li>
    <li><strong>Concrete tile replacement:</strong> $18,000–$38,000 depending on tile profile, weight, and architectural specifications</li>
    <li><strong>Clay tile replacement:</strong> $22,000–$45,000 for premium installations common in Boca Raton's luxury market</li>
    <li><strong>Metal roofing (standing seam or metal tile):</strong> $24,000–$52,000 for residential systems</li>
    <li><strong>Flat roofing (modified bitumen or TPO):</strong> $8,000–$20,000 for typical residential flat sections</li>
    <li><strong>Minor repairs:</strong> $400–$1,800 for leak repair, tile replacement, flashing work</li>
  </ul>

  <p>These figures reflect licensed, permitted installation with Palm Beach County inspection. Structural upgrades and decking replacement add $2–$5 per square foot. Use our <a href="/roof-cost-calculator/">roof cost calculator</a> for estimates.</p>

  <h2>FAQ — Frequently Asked Questions About Roofing in Boca Raton</h2>

  <h3>Does my roof replacement in Boca Raton need a permit?</h3>
  <p>Yes. Any roof replacement or significant repair in Boca Raton requires a permit from Palm Beach County Building Division. The permit triggers inspection by a county building inspector. Unpermitted work creates problems with insurance claims, property transfers, and can result in stop-work orders.</p>

  <h3>Is Boca Raton in the HVHZ?</h3>
  <p>Yes. Boca Raton is located in Palm Beach County and falls within the High Velocity Hurricane Zone (HVHZ). This designation requires more stringent fastening schedules, specific product approvals with Notice of Acceptance (NOA), and installation methods that exceed standard Florida Building Code requirements.</p>

  <h3>How do I verify a roofing contractor's license in Florida?</h3>
  <p>Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by contractor name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and not suspended or under disciplinary action.</p>

  <h3>Can I use homeowner's insurance to pay for a new roof in Boca Raton?</h3>
  <p>If your roof sustained damage from a covered event (storm, wind, hail), your policy may cover replacement costs. Contact your insurance company before signing any contractor documentation. Have an independent inspection before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value (ACV) or replacement cost value (RCV) — the difference can be substantial.</p>

  <h3>What roofing materials are best for Boca Raton homes?</h3>
  <p>Concrete and clay tile are the most common residential roofing materials in Boca Raton — impact-resistant, long service life, established HVHZ approvals, and premium aesthetic. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in Boca Raton's coastal environment. Asphalt shingles are less expensive but have shorter lifespans in South Florida conditions.</p>

  <h3>How long does a roof last in Boca Raton?</h3>
  <p>Concrete tile roofs typically last 30–50 years with proper maintenance. Clay tile can exceed 50 years. Underlayment replacement is often needed at 15–25 years. Asphalt shingles last 15–20 years in South Florida conditions. Metal roofing has 40–50 year service life. Flat roofing systems require maintenance every 10–15 years and replacement after 20–25 years.</p>

  <h2>Ready to Get Your Roof Done Right in Boca Raton?</h2>

  <p>All Phase Construction USA serves Boca Raton with dual-licensed roofing and general contracting capability, full Palm Beach County permitting, and wind mitigation documentation. Call <strong>(754) 227-5605</strong> for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersBocaDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Boca Raton FL (2026) | All Phase',
    'Looking for the best roofers in Boca Raton? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Palm Beach County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton',
    bestRoofersBocaContent,
    [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://allphaseconstructionfl.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Boca Raton",
            "item": "https://allphaseconstructionfl.com/locations/boca-raton"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Best Roofers Boca Raton",
            "item": "https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I verify a roofing contractor's license in Boca Raton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
            }
          },
          {
            "@type": "Question",
            "name": "Does my roof replacement in Boca Raton need a permit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Any roof replacement or significant repair in Boca Raton requires a permit from Palm Beach County Building Division. The permit triggers a final inspection by a county building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
            }
          },
          {
            "@type": "Question",
            "name": "What is HVHZ and why does it matter in Boca Raton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVHZ stands for High Velocity Hurricane Zone. Boca Raton and all of Palm Beach County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in Boca Raton must be familiar with and comply with HVHZ requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my homeowner's insurance to pay for a new roof in Boca Raton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value — the difference can be substantial on an older roof."
            }
          },
          {
            "@type": "Question",
            "name": "What roofing materials are best for Boca Raton's climate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile is the most common residential roofing material in Boca Raton and performs well in South Florida's climate — it's impact-resistant, has a long service life, and has established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a roof last in Boca Raton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile roofs in Boca Raton typically last 25–40 years with proper maintenance, though underlayment replacement is often needed in the 15–20 year range. Asphalt shingles last 15–20 years under South Florida conditions. Metal roofing has a 40–50 year service life. Flat roofing systems (modified bitumen, TPO) typically require maintenance every 10–15 years and full replacement after 20–25 years."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do immediately after a storm damages my roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Document the damage with photographs before any temporary repairs are made. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage — this is typically covered under your policy's emergency repair provision. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment."
            }
          }
        ]
      }
    ]
  ));
  console.log('ÃÂ¢ÃÃ Prerendered: locations/boca-raton/best-roofers-boca-raton/index.html');

  // Best Roofers Coral Springs - Premium Money Page
  const bestRoofersCoralDir = path.join(distDir, 'locations/coral-springs/best-roofers-coral-springs');
  fs.mkdirSync(bestRoofersCoralDir, { recursive: true });
  const bestRoofersCoralContent = `
  <h1>Top 5 Best Rated Roofers in Coral Springs, FL (2026)</h1>

  <p>Coral Springs is one of Broward County's largest planned communities — a master-planned city built starting in the 1960s with consistent construction standards, established neighborhoods, and a mix of single-family homes and townhomes. Finding a roofer who understands Coral Springs' specific housing characteristics and Broward County's High Velocity Hurricane Zone requirements requires more than searching online reviews.</p>

  <p>Coral Springs falls entirely within Broward County's High Velocity Hurricane Zone (HVHZ). Every roofing installation must meet Florida Building Code wind resistance standards specific to HVHZ designation, and all work requires permits through the City of Coral Springs Building Department. Contractors must be licensed under Florida's CCC (roofing) or CGC (general contractor) categories to work legally in Coral Springs.</p>

  <h2>Your List of the Top 5 Best Roofers in Coral Springs, FL</h2>

  <ol>
    <li><strong>All Phase Construction USA</strong> — Dual-licensed CCC + CGC contractor with HVHZ compliance expertise</li>
    <li><strong>Allied Roofing & Sheet Metal</strong> — 25+ years in Broward County, HVHZ specialists</li>
    <li><strong>Tiger Team Roofing</strong> — Angie's List Super Service Award winner, consistent Broward presence</li>
    <li><strong>Nast Roofing</strong> — 30+ years in Broward County, multiple code cycles and storm seasons</li>
    <li><strong>Paul Bange Roofing</strong> — South Florida institution, high-volume residential contractor</li>
  </ol>

  <h2>How We Chose the Roofing Companies in Coral Springs</h2>

  <p>Every contractor on this list was evaluated against criteria specific to Coral Springs and Broward County:</p>

  <ul>
    <li><strong>Florida state licensing:</strong> Active CCC or CGC licensure verified through DBPR</li>
    <li><strong>Coral Springs permit history:</strong> Demonstrated track record pulling permits through the City of Coral Springs Building Department</li>
    <li><strong>HVHZ compliance capability:</strong> Knowledge of Broward County's HVHZ requirements, fastening schedules, and product approvals</li>
    <li><strong>Residential specialization:</strong> Experience with single-family and townhome roof systems common to Coral Springs' planned community structure</li>
  </ul>

  <h2>All Phase Construction USA — Coral Springs, FL</h2>

  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Broward and Palm Beach County, with significant project history in Coral Springs across residential roof systems.</p>

  <p>The dual-license structure enables All Phase to handle projects that extend beyond surface roofing — structural repairs, decking replacement, fascia work — under one contractor. This capability matters in Coral Springs where many homes are 30–50 years old and often need both roofing and structural attention.</p>

  <p>All Phase installs roofing systems with Florida Product Approval numbers applicable to Broward County's HVHZ wind requirements and routinely works with the City of Coral Springs Building Department's inspection process.</p>

  <h3>Services:</h3>
  <p>Roof replacement (<a href="/shingle-roofing">shingle</a>, <a href="/tile-roofing">tile</a>, <a href="/metal-roofing">metal</a>, <a href="/flat-roofing">flat</a>), <a href="/roof-repair/coral-springs">roof repair</a>, structural upgrades, <a href="/roof-inspection/coral-springs">wind mitigation inspections</a>, storm damage restoration, commercial roofing, Coral Springs permit coordination.</p>

  <h3>License &amp; Contact:</h3>
  <p>CCC-1331464 (Roofing) | CGC-1526236 (General Contractor)<br/>
  <strong>Phone:</strong> (754) 227-5605<br/>
  Service area: <a href="/locations/coral-springs">Coral Springs</a> and all of Broward and Palm Beach County</p>

  <h2>Allied Roofing & Sheet Metal — Coral Springs, FL</h2>

  <p>Allied Roofing & Sheet Metal is a family-owned roofing contractor with over 25 years operating in Broward County. Their longevity in Coral Springs — through multiple hurricane seasons and code cycles — demonstrates sustained operational capability. Allied specializes in HVHZ-compliant residential roof systems: tile, shingle, metal, and flat roofing.</p>

  <h2>Tiger Team Roofing — Coral Springs, FL</h2>

  <p>Tiger Team Roofing is a Broward County contractor with consistent presence in Coral Springs. The company has received Angie's List Super Service Award recognition multiple years running, which reflects sustained positive customer feedback. Tiger Team handles all major residential roof system types common to Coral Springs.</p>

  <h2>Nast Roofing — Coral Springs, FL</h2>

  <p>Nast Roofing has been operating in Broward County for over 30 years, making them one of the longer-tenured residential roofing contractors with local focus. Thirty-plus years in Broward County means Nast has worked through multiple roofing code cycles, the transition to HVHZ requirements, and several major storm seasons.</p>

  <h2>Paul Bange Roofing — Coral Springs, FL</h2>

  <p>Paul Bange Roofing is a South Florida institution with multiple decades in the market and locations across Broward and Palm Beach County. They are one of the higher-volume residential roofing contractors in the region with established relationships with most major manufacturers. Paul Bange has extensive project history in Coral Springs.</p>

  <h2>Roofing Costs in Coral Springs — What Should You Expect to Pay?</h2>

  <p>Coral Springs roofing costs reflect Broward County's HVHZ requirements and permit fees. Fair market pricing for Coral Springs homes:</p>

  <ul>
    <li><strong>Asphalt shingle replacement:</strong> $10,000–$21,000 for typical 1,800–2,400 SF homes common to Coral Springs</li>
    <li><strong>Concrete tile replacement:</strong> $16,000–$34,000 depending on tile profile and structural requirements</li>
    <li><strong>Metal roofing (standing seam or metal tile):</strong> $20,000–$46,000 for residential systems</li>
    <li><strong>Flat roofing (modified bitumen or TPO):</strong> $7,000–$17,000 for typical residential flat sections</li>
    <li><strong>Minor repairs:</strong> $350–$1,400 for leak repair, tile replacement, flashing work</li>
  </ul>

  <p>These figures reflect licensed, permitted HVHZ-compliant installation with City of Coral Springs inspection. Decking replacement adds $2–$5 per square foot. Use our <a href="/roof-cost-calculator/">roof cost calculator</a> for estimates.</p>

  <h2>FAQ — Frequently Asked Questions About Roofing in Coral Springs</h2>

  <h3>Does my roof replacement in Coral Springs need a permit?</h3>
  <p>Yes. Any roof replacement or significant repair in Coral Springs requires a permit from the City of Coral Springs Building Department. The permit triggers inspection by a city building inspector. Unpermitted work creates problems with insurance claims, property transfers, and can result in stop-work orders and fines.</p>

  <h3>Is Coral Springs in the HVHZ?</h3>
  <p>Yes. Coral Springs is located in Broward County and falls entirely within the High Velocity Hurricane Zone (HVHZ). This designation requires more stringent fastening schedules, specific product approvals with Notice of Acceptance (NOA), and installation methods that exceed standard Florida Building Code requirements.</p>

  <h3>How do I verify a roofing contractor's license in Florida?</h3>
  <p>Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by contractor name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and not suspended or under disciplinary action.</p>

  <h3>Can I use homeowner's insurance to pay for a new roof in Coral Springs?</h3>
  <p>If your roof sustained damage from a covered event (storm, wind), your policy may cover replacement costs. Contact your insurance company before signing any contractor documentation. Have an independent inspection before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value (ACV) or replacement cost value (RCV).</p>

  <h3>What roofing materials are best for Coral Springs homes?</h3>
  <p>Concrete tile is the most common residential roofing material in Coral Springs — impact-resistant, long service life, and established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV conditions.</p>

  <h3>How long does a roof last in Coral Springs?</h3>
  <p>Concrete tile roofs typically last 25–40 years with proper maintenance. Underlayment replacement is often needed at 15–20 years. Asphalt shingles last 15–20 years in South Florida conditions. Metal roofing has 40–50 year service life. Flat roofing systems require maintenance every 10–15 years and replacement after 20–25 years.</p>

  <h3>What should I do after a storm damages my roof in Coral Springs?</h3>
  <p>Document the damage with photographs before any temporary repairs. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment.</p>

  <h2>Ready to Get Your Roof Done Right in Coral Springs?</h2>

  <p>All Phase Construction USA serves Coral Springs with dual-licensed roofing and general contracting capability, comprehensive HVHZ-compliant installations, full City of Coral Springs permitting, and wind mitigation documentation. Call <strong>(754) 227-5605</strong> for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersCoralDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Coral Springs FL (2026) | All Phase',
    'Looking for the best roofers in Coral Springs? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs',
    bestRoofersCoralContent,
    [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://allphaseconstructionfl.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://allphaseconstructionfl.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Coral Springs",
            "item": "https://allphaseconstructionfl.com/locations/coral-springs"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Best Roofers Coral Springs",
            "item": "https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I verify a roofing contractor's license in Coral Springs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
            }
          },
          {
            "@type": "Question",
            "name": "Does my roof replacement in Coral Springs need a permit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Any roof replacement or significant repair in Coral Springs requires a permit from Broward County Building Division. The permit triggers a final inspection by a county building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
            }
          },
          {
            "@type": "Question",
            "name": "What is HVHZ and why does it matter in Coral Springs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVHZ stands for High Velocity Hurricane Zone. Coral Springs and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in Coral Springs must be familiar with and comply with HVHZ requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my homeowner's insurance to pay for a new roof in Coral Springs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value — the difference can be substantial on an older roof."
            }
          },
          {
            "@type": "Question",
            "name": "What roofing materials are best for Coral Springs's climate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile is the most common residential roofing material in Coral Springs and performs well in South Florida's climate — it's impact-resistant, has a long service life, and has established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a roof last in Coral Springs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Concrete tile roofs in Coral Springs typically last 25–40 years with proper maintenance, though underlayment replacement is often needed in the 15–20 year range. Asphalt shingles last 15–20 years under South Florida conditions. Metal roofing has a 40–50 year service life. Flat roofing systems (modified bitumen, TPO) typically require maintenance every 10–15 years and full replacement after 20–25 years."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do immediately after a storm damages my roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Document the damage with photographs before any temporary repairs are made. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage — this is typically covered under your policy's emergency repair provision. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment."
            }
          }
        ]
      }
    ]
  ));
  console.log('ÃÂ¢ÃÃ Prerendered: locations/coral-springs/best-roofers-coral-springs/index.html');

  // ============================================================
  // REGRESSION SAFEGUARD: Verify dist/index.html wasn't corrupted
  // ============================================================
  const distIndex = path.join(distDir, 'index.html');
  if (fs.existsSync(distIndex)) {
    const distHTML = fs.readFileSync(distIndex, 'utf-8');
    if (distHTML.includes('/src/main.tsx')) {
      throw new Error(
        'ÃÂ¢ÃÃ REGRESSION: dist/index.html references /src/main.tsx!\n' +
        'The Vite production build was overwritten with dev content.\n' +
        'This would break the live site. Build aborted.'
      );
    }
    if (!distHTML.includes('/assets/')) {
      throw new Error(
        'ÃÂ¢ÃÃ REGRESSION: dist/index.html missing /assets/ references!\n' +
        'Production Vite bundles are gone. Build aborted.'
      );
    }
    console.log('\nÃÂ¢ÃÃ Safeguard passed: dist/index.html contains production assets');
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
            `ÃÂ¢ÃÃ REGRESSION: dist/locations/${slug}/index.html has EMPTY root!\n` +
            'Prerender content must be injected INSIDE <div id="root">, not outside.\n' +
            'Build aborted.'
          );
        }
      }
    }
    console.log('\nÃÂ¢ÃÃ Safeguard 2 passed: All location pages have non-empty root divs');
  }
console.log(`\nÃÂ¢ÃÃ Prerender Complete! Generated ${totalPages} fully-branded HTML pages.`);
  console.log(`\nÃ°ÃÃÃ Architecture Breakdown:`);
  console.log(`   - Homepage: 1 page`);
  console.log(`   - Service Pages: ${servicePages.length} pages`);
  console.log(`   - City Service Hubs: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`   - City Roof Repairs: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`   - City Roof Inspections: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`\nÃ°ÃÃÃÂ¯ Lead Generation Structure:`);
  console.log(`   ÃÂ¢ÃÃ Service Hubs: /locations/[city] ÃÂ¢ÃÃ Broad authority`);
  console.log(`   ÃÂ¢ÃÃ Repair Spokes: /roof-repair/[city] ÃÂ¢ÃÃ High-intent leads`);
  console.log(`   ÃÂ¢ÃÃ Inspection Spokes: /roof-inspection/[city] ÃÂ¢ÃÃ Top-of-funnel leads`);
  console.log(`\nÃ°ÃÃÃÂ¼ Every page includes:`);
  console.log(`   ÃÂ¢ÃÃ 500-700 words of branded content`);
  console.log(`   ÃÂ¢ÃÃ Inter-page lead-gen links (Hub ÃÂ¢ÃÃ Repair ÃÂ¢ÃÃ Inspection)`);
  console.log(`   ÃÂ¢ÃÃ Dual-licensing emphasis (CCC & CGC)`);
  console.log(`   ÃÂ¢ÃÃ HVHZ certification messaging`);
  console.log(`   ÃÂ¢ÃÃ "Serving from Deerfield Beach HQ" context`);
  console.log(`   ÃÂ¢ÃÃ Company authority footer (250+ words)`);
}

// Run the generator
generateStaticFiles();

// Copy IndexNow key file to dist
fs.copyFileSync('public/1864f0fe7c93447e946f774adbe8e54a.txt', 'dist/1864f0fe7c93447e946f774adbe8e54a.txt');
console.log('IndexNow key file copied to dist');
