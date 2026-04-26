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

// Set of slugs that receive prerendered /roof-repair/${slug} and
// /roof-inspection/${slug} spoke pages. Any location outside this set
// (e.g. small towns like pembroke-park, sea-ranch-lakes, lauderdale-lakes,
// southwest-ranches that live in src/data/locations.ts but not in
// cities.json) must NOT emit CTAs pointing to those non-existent spokes,
// or the links SPA-shell when crawled and Google canonicalizes the shell.
// See generateServiceHubContent() — CTAs are gated on SUBPAGE_SLUGS.has(slug).
const SUBPAGE_SLUGS = new Set(cities.map((c) => c.slug));

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

// Load landmark data (SINGLE SOURCE OF TRUTH for /locations/:city/:landmark pages)
// Mirrors the locations.ts parsing pattern above. landmarks.ts MUST use
// double-quoted strings — see QUOTING CONVENTION comment in that file.
const landmarksDataPath = path.join(projectRoot, 'src', 'data', 'landmarks.ts');
const landmarksRaw = fs.readFileSync(landmarksDataPath, 'utf-8');
const landmarksMatch = landmarksRaw.match(/export const landmarks: Landmark\[\] = \[([\s\S]*?)\];/);
if (!landmarksMatch) {
  throw new Error('Could not parse landmarks from src/data/landmarks.ts');
}
const landmarksArrayText = '[' + landmarksMatch[1] + ']';
const landmarksJson = landmarksArrayText
  .replace(/\/\/[^\n]*/g, '')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":')
  .replace(/,(\s*[}\]])/g, '$1');
const LANDMARKS = JSON.parse(landmarksJson);

/**
 * Broward County cities (HVHZ-compliant)
 */
/**
 * Build SEO metadata for a location (matches src/lib/locationSeo.ts logic).
 *
 * County is read from the Location record itself (single source of truth in
 * src/data/locations.ts). Keep in sync with src/lib/locationSeo.ts — ideally
 * this script should import from there once we add a TS compile step.
 */
function buildLocationSeo(location) {
  const { slug, city } = location;

  // Determine compliance language from county field (single source of truth)
  const isBrowardCounty = location.county === 'Broward';
  const complianceLanguage = isBrowardCounty ? 'HVHZ-compliant' : 'Palm Beach County wind-compliant';

  // Generate defaults from templates (POST-April-6 pivot: roof replacement positioning)
  const defaultTitle = `Roof Replacement ${city}, FL | All Phase USA`;
  const defaultDescription = `Roof replacement in ${city}, FL. Tile, metal, shingle & flat roof replacement. ${complianceLanguage}, 2,500+ projects. Free estimate. (754) 227-5605.`;
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
function companyAuthorityFooter(county = null) {
  // county: 'Broward' | 'Palm Beach' | null (regional / dual-county pages)
  const isBroward = county === 'Broward';
  const isPalmBeach = county === 'Palm Beach';

  const complianceHeading = isBroward
    ? 'HVHZ Certification & Hurricane Compliance'
    : isPalmBeach
      ? 'Palm Beach County Wind-Code Compliance'
      : 'Hurricane-Zone Compliance Across South Florida';

  const complianceParagraph = isBroward
    ? `We specialize in High Velocity Hurricane Zone (HVHZ) compliance throughout Broward County. Every installation meets or exceeds the strictest wind rating requirements, with enhanced fastening schedules, impact-rated materials, and roof-to-wall connections engineered to withstand 175+ mph wind speeds. Our HVHZ expertise ensures your roof passes building department inspections and protects your property during severe weather.`
    : isPalmBeach
      ? `We install every Palm Beach County roof to the county's wind-code requirements, with enhanced fastening schedules, impact-rated materials, and roof-to-wall connections engineered for 170+ mph design wind speeds. Our licensed team voluntarily builds to HVHZ specification where it strengthens the assembly, ensuring your new roof passes Palm Beach County building department inspections and performs through severe weather.`
      : `We build to High Velocity Hurricane Zone (HVHZ) standards in Broward County and to Palm Beach County wind-code requirements throughout Palm Beach County. Every installation meets or exceeds the strictest applicable wind rating, with enhanced fastening schedules, impact-rated materials, and roof-to-wall connections engineered for South Florida's severe weather.`;

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

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">${complianceHeading}</h3>
  <p style="color: #374151; line-height: 1.75; margin-bottom: 1rem;">
    ${complianceParagraph}
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
  <h1>Deerfield Beach Roofing Contractor | All Phase USA Headquarters</h1>

  <p><strong>All Phase Construction USA</strong> is a dual-licensed roofing contractor headquartered in Deerfield Beach, Florida. Operating from 590 Goolsby Blvd, Deerfield Beach, FL 33442, we serve residential and commercial properties throughout Broward County and Palm Beach County with comprehensive roofing services backed by both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses.</p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Need Immediate Roofing Help in Deerfield Beach?</h3>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">
      🔍 <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/deerfield-beach" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast Deerfield Beach Repair Service</a> ✅ Active leaks, storm damage, emergency tarping available 24/7
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔍 <strong>Free Professional Roof Inspections:</strong> <a href="/roof-inspection/deerfield-beach" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point Deerfield Beach Roof Inspection</a> ✅ Comprehensive assessment with photo documentation
    </p>
  </div>

  <h2>Your Deerfield Beach Headquarters for Expert Roofing</h2>
  <p>All Phase Construction USA has established its primary operations at 590 Goolsby Blvd in Deerfield Beach, strategically positioned to serve all of South Florida. As a locally-owned and operated roofing company, we understand the unique challenges Deerfield Beach properties face including salt air corrosion, hurricane exposure, and intense UV degradation. Our Deerfield Beach headquarters enables same-day inspection availability, rapid emergency response, and consistent oversight of every project throughout Broward and Palm Beach Counties.</p>

  <h2>Why Deerfield Beach Property Owners Choose All Phase Construction USA</h2>
  <p>What sets us apart from standard roofing contractors operating in Deerfield Beach:</p>

  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Dual-Licensed Roofing Authority:</strong> We hold both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses. This dual-licensing provides structural engineering oversight that standard CCC-only contractors cannot match. Our CGC license means we understand building structure, load-bearing requirements, and comprehensive building code compliance — not just roofing materials and installation.</li>
    <li><strong>HVHZ Certified & Hurricane Compliant:</strong> Every Deerfield Beach installation meets High Velocity Hurricane Zone (HVHZ) compliance with 175+ mph wind ratings, enhanced fastening schedules, and reinforced roof-to-wall connections. We specialize in hurricane-resistant roofing systems engineered to protect your property during severe weather events.</li>
    <li><strong>Local Deerfield Beach Presence:</strong> Operating from our Deerfield Beach headquarters at 590 Goolsby Blvd enables rapid response to emergency calls, same-day inspection scheduling, and direct contractor oversight on every project. We're not a remote franchise — we're your local roofing experts.</li>
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


  <h2>Additional Resources for Deerfield Beach Roofing</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><a href="/locations/deerfield-beach/best-roofers-deerfield-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Deerfield Beach</a></li>
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
    <li><a href="/blog/how-to-hire-a-roofer-in-south-florida" style="color: #dc2626; text-decoration: underline;">How to Hire a Roofer in South Florida</a></li>
    <li><a href="/blog/our-roofing-company-is-proud-to-be-a-family-owned-business" style="color: #dc2626; text-decoration: underline;">Why We're a Proud Family-Owned Business</a></li>
    <li><a href="/broward-county-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Broward County Roof Replacement Guide</a></li>
    <li><a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a></li>
    <li><a href="/learning-center" style="color: #dc2626; text-decoration: underline;">Learning Center</a></li>
  </ul>

  <p>Trusted industry resources: <a href="https://www.gaf.com" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">GAF Roofing</a> · <a href="https://www.owenscorning.com/en-us/roofing" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Owens Corning</a> · <a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NRCA</a></p>

<div class="seo-service-links">
  <h2>Roofing Services in Deerfield Beach, FL</h2>
  <ul>
    <li><a href="/roof-repair/deerfield-beach">Roof Repair in Deerfield Beach, FL</a></li>
    <li><a href="/roof-inspection/deerfield-beach">Roof Inspection in Deerfield Beach, FL</a></li>
    <li><a href="/roof-replacement-process">Roof Replacement in Deerfield Beach, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter('Broward')}
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
      <h1 style="color: white; font-size: 2.75rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.1;">Roof Replacement in Boca Raton, FL</h1>

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
          <span style="color: #fbbf24; font-size: 1.25rem;">⭐⭐⭐⭐⭐</span>
          <span style="color: #e5e7eb; font-weight: 600;">4.8 Google Rating</span>
          <span style="color: #9ca3af;">(137 reviews)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 2: TRUST BLOCK (Light Background Contrast) -->
  <div style="background: #f9fafb; padding: 3.5rem 2rem; margin: 3rem -1rem; border-left: 4px solid #dc2626;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 2rem;">Licensed Florida Roof Replacement Contractor in Boca Raton</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <!-- Benefit Block 1 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">✅</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Fully Licensed & Insured</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Licensed, insured, and bonded for your complete peace of mind</p>
          </div>
        </div>

        <!-- Benefit Block 2 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">✅</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">In-House Expert Team</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">All work performed by our trained, professional roofing crew</p>
          </div>
        </div>

        <!-- Benefit Block 3 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">✅</div>
          <div>
            <h3 style="color: #111827; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;">Local Boca Raton Expertise</h3>
            <p style="color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin: 0;">Years of experience serving Boca Raton homeowners</p>
          </div>
        </div>

        <!-- Benefit Block 4 -->
        <div style="display: flex; gap: 1rem; align-items: start;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">✅</div>
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
      As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damage — crucial for maintaining the safety and comfort of your home.
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
          <div style="color: #fbbf24; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">4.8⭐</div>
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
            <span style="color: #dc2626; font-weight: bold;">✅</span>
            <span>Photos of key roof areas (edges, penetrations, valleys, transitions)</span>
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">✅</span>
            <span>Clear notes on what is failed vs what is aging</span>
          </li>
          <li style="padding: 0.75rem 0; color: #374151; display: flex; gap: 0.75rem;">
            <span style="color: #dc2626; font-weight: bold;">✅</span>
            <span>A recommendation that matches the roof's condition and your timeline</span>
          </li>
        </ul>
      </div>

      <!-- Repair vs Replacement -->
      <div style="background: #f9fafb; padding: 2rem; border-radius: 8px; border-top: 4px solid #dc2626;">
        <h3 style="color: #111827; font-size: 1.3rem; font-weight: 700; margin-bottom: 1.5rem;">Repair vs Replacement (How We Decide):</h3>
        <div style="margin-bottom: 1.5rem;">
          <div style="color: #059669; font-weight: 700; margin-bottom: 0.5rem;">✅ Repair When:</div>
          <p style="color: #374151; margin: 0; padding-left: 1.5rem;">The system is stable and failures are isolated</p>
        </div>
        <div>
          <div style="color: #dc2626; font-weight: 700; margin-bottom: 0.5rem;">❌ Replace When:</div>
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
      <h2 style="color: white; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">Roof Replacement in Boca Raton, FL: What We Do</h2>

      <p style="max-width: 750px; color: #d1d5db; font-size: 1.05rem; line-height: 1.75; margin-bottom: 3.5rem;">
        We deliver roofing services that are permit-ready, inspection-ready, and storm-ready. Our work includes complete roof replacements, targeted repairs, and specialized commercial roofing solutions designed for South Florida conditions.
      </p>

      <h3 style="color: white; font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem;">Our Core Services</h3>

      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✅</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Roof inspections and leak investigations</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✅</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Roof repair (tile, shingle, metal, flat)</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✅</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Full roof replacement and reroofing</span>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✅</span>
          <span style="color: #e5e7eb; font-size: 1.05rem; font-weight: 500;">Storm and hurricane damage assessments</span>
        </li>
        <li style="padding: 1.25rem 0; display: flex; align-items: center; gap: 1rem;">
          <span style="color: #dc2626; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">✅</span>
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

  <h2>Additional Resources for Boca Raton Roofing</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><a href="/locations/boca-raton/best-roofers-boca-raton" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boca Raton</a></li>
    <li><a href="/boca-raton-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement Guide</a></li>
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
    <li><a href="/blog/can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners" style="color: #dc2626; text-decoration: underline;">Can Your HOA Say No to a Metal Roof?</a></li>
    <li><a href="/blog/why-choose-tile-roofing-in-south-florida" style="color: #dc2626; text-decoration: underline;">Why Choose Tile Roofing in South Florida</a></li>
    <li><a href="/palm-beach-county-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roof Replacement Guide</a></li>
    <li><a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a></li>
  </ul>

  <p>Trusted industry resources: <a href="https://www.gaf.com" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">GAF Roofing</a> · <a href="https://www.owenscorning.com/en-us/roofing" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Owens Corning</a> · <a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NRCA</a></p>

<div class="seo-service-links">
  <h2>Roofing Services in Boca Raton, FL</h2>
  <ul>
    <li><a href="/roof-repair/boca-raton">Roof Repair in Boca Raton, FL</a></li>
    <li><a href="/roof-inspection/boca-raton">Roof Inspection in Boca Raton, FL</a></li>
    <li><a href="/roof-replacement-process">Roof Replacement in Boca Raton, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter('Palm Beach')}
</section>
`.trim();
}

/**
 * CITY-SPECIFIC CONTENT DATA
 * Unique local details for indexable cities that don't have dedicated money pages.
 * This prevents thin/duplicate content for Google-indexed pages.
 */
const CITY_UNIQUE_CONTENT = {
  'palm-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'the Historic District, South End, North End, and Phipps Estate area',
    localContext: `Palm Beach is one of South Florida's most prestigious communities, with landmark estates and historic Mediterranean Revival architecture lining Ocean Boulevard. Properties here face unique roofing challenges: direct oceanfront salt air exposure accelerates corrosion on metal components, the island's coastal wind exposure demands premium wind-rated systems, and historic preservation guidelines may require specific tile profiles and colors to maintain architectural consistency. Many Palm Beach homes feature barrel tile roofs that require specialized reinstallation techniques after storm damage.`,
    buildingNotes: `Palm Beach's strict architectural review process means roofing materials, colors, and profiles must meet community aesthetic standards in addition to Florida Building Code requirements. Our team coordinates with architectural review boards to ensure compliance while maintaining the highest structural integrity. As a barrier island, Palm Beach properties face heightened hurricane exposure &mdash; our HVHZ-certified installations are engineered specifically for direct coastal wind loads.`,
    popularServices: 'barrel tile restoration, historic property reroofing, copper flashing and gutter systems, and salt-resistant metal roof installations',
    localFact: 'With over 2,000 historic and estate-class properties, Palm Beach requires roofing contractors who understand both structural engineering and architectural preservation requirements.'
  },
  'wellington': {
    county: 'Palm Beach County',
    neighborhoods: 'Olympia, The Isles, Grand Isles, Binks Estates, and the Equestrian Preserve',
    localContext: `Wellington is one of Palm Beach County's largest planned communities, home to the International Polo Club and the Winter Equestrian Festival. The community features diverse residential architecture from single-family homes in established neighborhoods to luxury equestrian estates. Wellington's master-planned layout means many homes were built in the same era (1980s-2000s), and entire neighborhoods often need roof replacements simultaneously as original roofs reach end-of-life.`,
    buildingNotes: `Wellington falls under Palm Beach County building codes with specific wind-speed requirements for the western communities. Many Wellington homes have original concrete tile roofs from the community's initial development phases &mdash; after 25-35 years, these roofs need full replacement rather than patching. Our dual licensing enables us to assess and address the structural decking beneath aging tile systems, something standard roofers often overlook. Wellington HOAs typically require pre-approved roofing materials and color palettes.`,
    popularServices: 'concrete tile replacement for aging developments, HOA-compliant reroofing, equestrian property roofing, and whole-neighborhood roof replacement coordination',
    localFact: 'Wellington was incorporated in 1995 and experienced rapid growth, meaning many original roofs throughout the community are now approaching or exceeding their designed lifespan.'
  },
  'lake-worth-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'the Historic District, College Park, South Palm Park, Lucerne Lakes, and downtown Lake Worth Beach',
    localContext: `Lake Worth Beach combines historic charm with coastal living, featuring a vibrant arts district and direct beach access along the Lake Worth Municipal Beach. The city's diverse housing stock includes 1920s-era historic bungalows, mid-century concrete block homes, and modern coastal construction. This architectural variety demands a roofing contractor experienced with multiple roofing systems and building code eras.`,
    buildingNotes: `Lake Worth Beach properties range from historic structures with original roof framing to modern coastal construction built to current Florida Building Code standards. Our dual licensing is particularly valuable here &mdash; many older homes require structural assessment before reroofing to ensure the existing framing can support modern wind-rated roofing systems. Properties east of I-95 face increased salt air exposure that accelerates fastener and flashing corrosion, requiring marine-grade components for lasting installations.`,
    popularServices: 'historic home reroofing, coastal property wind-rated upgrades, flat roof restoration for mid-century homes, and insurance claim support for storm damage',
    localFact: 'Lake Worth Beach has one of Palm Beach County\'s most diverse architectural landscapes, with structures spanning over 100 years of Florida building practices.'
  },
  'weston': {
    county: 'Broward County',
    neighborhoods: 'Weston Hills Country Club, The Ridges, Savanna, The Palms, Indian Trace, and Emerald Estates',
    localContext: `Weston consistently ranks among Florida's safest and most desirable suburban communities, located in western Broward County along the edge of the Everglades. The city's master-planned developments feature predominantly single-family homes built during Weston's growth boom from the mid-1990s through 2000s. This means thousands of homes share similar roof ages, and many neighborhoods are now entering the 25-30 year window where original tile and shingle roofs need replacement.`,
    buildingNotes: `Weston falls within Broward County's High Velocity Hurricane Zone (HVHZ), requiring the strictest wind-resistant installation standards in the nation. Every roofing installation must meet HVHZ-compliant fastening schedules, enhanced underlayment requirements, and specific roof-to-wall connection specifications. Our HVHZ certification ensures every Weston project passes the rigorous Broward County building inspections. Weston HOAs are particularly stringent about roofing materials, colors, and contractor insurance requirements.`,
    popularServices: 'HVHZ-compliant tile replacement, whole-community reroofing coordination, shingle-to-tile conversions, and HOA-approved roof replacement programs',
    localFact: 'Incorporated in 1996, Weston experienced its primary growth between 1995-2007, placing the majority of homes in a critical 20-30 year roof replacement window.'
  },
  'lauderdale-by-the-sea': {
    county: 'Broward County',
    neighborhoods: 'the beachfront district along El Mar Drive, Commercial Boulevard corridor, and the residential neighborhoods along Terra Mar Drive and Bougainvilla Drive',
    localContext: `Lauderdale-by-the-Sea is a small, walkable beach town known for its laid-back atmosphere and world-class shore diving along the nearshore reef system. Located on a barrier island between the Atlantic Ocean and the Intracoastal Waterway, every property here faces intense coastal environmental stress. Salt spray, constant UV exposure, and direct hurricane wind loads make roofing system selection and installation quality critical for property protection and longevity.`,
    buildingNotes: `As a barrier island community within Broward County's HVHZ zone, Lauderdale-by-the-Sea properties face the most demanding roofing requirements in South Florida. Roofing installations must meet both HVHZ wind-speed ratings and withstand aggressive saltwater corrosion. We specify marine-grade stainless steel fasteners, corrosion-resistant flashing systems, and premium underlayments rated for coastal exposure on every Lauderdale-by-the-Sea project. Many properties here are condominiums and multi-family buildings requiring commercial roofing expertise.`,
    popularServices: 'salt-resistant coastal reroofing, condominium and multi-family roof replacement, flat roof membrane systems for commercial properties, and emergency storm damage repairs',
    localFact: 'Lauderdale-by-the-Sea\'s position on a narrow barrier island means every structure faces direct coastal exposure &mdash; making premium roofing installation the single most important structural investment for property protection.'
  },
  'wilton-manors': {
    county: 'Broward County',
    neighborhoods: 'the Arts & Entertainment District along Wilton Drive, Jenada Isles, Manor Grove, Central Area, and the neighborhoods along Middle River',
    localContext: `Wilton Manors is a vibrant, close-knit community located just north of Fort Lauderdale, known for its walkable Wilton Drive corridor and diverse, well-maintained residential neighborhoods. The city features predominantly single-family homes built from the 1950s through 1980s, many of which still have original or aging roofing systems. Wilton Manors properties along Middle River and the Jenada Isles canals face additional moisture and humidity challenges from waterfront proximity.`,
    buildingNotes: `Wilton Manors falls within Broward County's HVHZ zone, requiring HVHZ-compliant installation methods on every roofing project. Many homes in Wilton Manors were originally built with 3-tab shingle roofs or flat modified bitumen systems that are now past their serviceable lifespan. Our dual licensing enables structural assessment of older roof framing systems common in mid-century Wilton Manors homes &mdash; ensuring the existing structure can safely support modern, heavier tile or metal roofing upgrades. The city's active code enforcement ensures all roofing work meets current building standards.`,
    popularServices: 'mid-century home reroofing, flat-to-pitched roof conversions, architectural shingle upgrades, and canal-front property waterproofing solutions',
    localFact: 'Wilton Manors covers just 1.9 square miles, making it one of Broward County\'s smallest cities &mdash; but its dense, established housing stock means concentrated demand for quality roofing services.'
  },

  'pompano-beach': {
    county: 'Broward County',
    neighborhoods: 'Palm Aire, Harbor Village, Garden Isles, and Cypress Lakes',
    localContext: `Pompano Beach stretches from the Atlantic coastline west to the Sawgrass Expressway, with roofing needs that vary dramatically by neighborhood. Homes near <a href="https://en.wikipedia.org/wiki/Pompano_Beach,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Harbor Village and the Intracoastal</a> face aggressive salt air corrosion, while inland communities like Palm Aire &mdash; built around the former resort golf courses &mdash; deal with aging tile roofs from the 1970s-80s development era. The 247-acre Fern Forest Nature Center and Pompano Beach Community Park anchor the western residential zones where many single-family homes need full reroofing as original systems reach 30+ years.`,
    buildingNotes: `Pompano Beach properties fall within Broward County's HVHZ zone, requiring the nation's strictest wind-resistant installation standards. Homes near Sample Road and North Federal Highway &mdash; one of the city's busiest commercial corridors &mdash; often have flat commercial roofing systems requiring TPO or modified bitumen expertise. Our dual licensing is critical for Palm Aire homes where structural decking assessment is essential before replacing heavy concrete tile systems installed during original construction. Pompano Beach's Broward College North Campus area sees a mix of residential and commercial roofing demand.`,
    popularServices: 'aging tile roof replacement in Palm Aire, salt-resistant coastal reroofing near Harbor Village, flat roof restoration for commercial properties along Federal Highway, and storm damage repair for homes near the Pompano Beach Community Park area',
    localFact: 'Pompano Beach receives 60-65 inches of rain annually with salt-laden Atlantic winds. The combination of coastal humidity and direct storm exposure means roofs here face year-round environmental stress that accelerates deterioration faster than inland communities.'
  },
  'fort-lauderdale': {
    county: 'Broward County',
    neighborhoods: 'Victoria Park, Rio Vista, Central Beach, and the Downtown Las Olas corridor',
    localContext: `Fort Lauderdale is Broward County's largest city and a major hub for both residential and commercial roofing demand. Properties near the <a href="https://www.britannica.com/place/Fort-Lauderdale" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Las Olas Boulevard corridor</a> and Rio Vista's waterfront canals face intense salt air exposure from the Intracoastal Waterway and Atlantic Ocean. Victoria Park's walkable urban neighborhoods feature diverse housing stock from mid-century ranch homes to modern construction. Hugh Taylor Birch State Park &mdash; positioned between the ocean and the Intracoastal &mdash; marks the transition zone where coastal roofing demands are most extreme.`,
    buildingNotes: `Fort Lauderdale sits entirely within Broward County's HVHZ zone. The I-95 and I-595 interchange &mdash; one of the region's most critical transportation intersections &mdash; divides the city's eastern coastal properties from western suburban developments, each with distinct roofing challenges. Coastal properties near Central Beach and The Galleria at Fort Lauderdale require marine-grade fasteners and corrosion-resistant flashing, while inland neighborhoods need standard HVHZ-compliant systems. Our dual licensing enables structural assessment of Fort Lauderdale's many mid-century homes where original roof framing may need reinforcement before supporting modern wind-rated tile or metal systems.`,
    popularServices: 'waterfront property reroofing near Rio Vista canals, high-rise and condo flat roof systems for Central Beach, tile-to-metal conversions in Victoria Park, and emergency storm damage repair throughout the I-595 corridor',
    localFact: 'Fort Lauderdale receives 62 inches of rainfall annually. During hurricane season, wind speeds can exceed 155 mph &mdash; forces that can strip unprotected roofing materials in minutes, making HVHZ-compliant installation essential for every property.'
  },
  'coral-springs': {
    county: 'Broward County',
    neighborhoods: 'Heron Bay, Kensington, Eagle Trace, Wyndham Lakes, and Ramblewood',
    localContext: `Coral Springs is a master-planned city in western Broward County known for its well-maintained neighborhoods and strong community standards. The Heron Bay community alone contains 30+ sub-neighborhoods with golf course estates and resort-style amenities. Properties near <a href="https://www.census.gov/quickfacts/coralspringscityflorida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Mullins Park</a> &mdash; the city's largest at 70 acres &mdash; and The Sportsplex anchor the central residential core where many homes built during the 1980s-90s growth boom now need roof replacement. The Tall Cypress Natural Area provides a green buffer for western neighborhoods.`,
    buildingNotes: `Coral Springs falls within Broward County's HVHZ zone with the strictest wind-resistant requirements in the nation. The University Drive and Atlantic Boulevard corridor marks the commercial center where flat roof systems demand specialized expertise. Many Heron Bay and Eagle Trace homes have original concrete tile roofs from the 1990s development era &mdash; after 25-30 years these systems need full replacement. Coral Square mall and The Walk shopping center anchor the retail district where commercial reroofing requires minimal business disruption. Our HVHZ certification ensures every Coral Springs project passes rigorous Broward County inspections.`,
    popularServices: 'concrete tile replacement for aging Heron Bay estates, HOA-compliant reroofing in Kensington and Eagle Trace, commercial flat roof systems near University Drive, and whole-neighborhood roof replacement coordination for Ramblewood',
    localFact: 'Although Coral Springs sits inland from the coast, hurricane-force winds remain a serious threat. Homes built before the 2002 Florida Building Code updates are particularly vulnerable to roof uplift and require modern wind-rated upgrades.'
  },
  'hollywood': {
    county: 'Broward County',
    neighborhoods: 'Emerald Hills, Hollywood Hills, Central Beach along the Broadwalk, and Highland Gardens near Young Circle',
    localContext: `Hollywood spans from the Atlantic Ocean west to the Everglades, creating a diverse roofing landscape. The 2.5-mile <a href="https://www.britannica.com/place/Hollywood-Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Hollywood Beach Broadwalk</a> draws visitors year-round, but the coastal properties flanking it endure relentless salt spray and wind exposure. Emerald Hills &mdash; a canal-front community with gated sections and a golf club &mdash; represents the city's premium residential roofing market. Hollywood North Beach Park's 56-acre oceanfront expanse and Anne Kolb Nature Center with its 68-foot observation tower mark neighborhoods where coastal environmental stress is most intense.`,
    buildingNotes: `Hollywood falls within Broward County's HVHZ zone. Young Circle &mdash; where Federal Highway meets Hollywood Boulevard &mdash; serves as the geographic and commercial heart of the city, with properties radiating outward facing varying exposure levels. Homes in Hollywood Hills near Zinkil Park feature family-friendly neighborhoods with 1960s-80s construction that often needs structural assessment before reroofing. The Pines Boulevard corridor (State Road 820) connects western neighborhoods where larger estate properties require coordinated reroofing projects. Our dual licensing enables both roofing system installation and structural remediation for Hollywood's aging housing stock.`,
    popularServices: 'salt-resistant coastal reroofing near the Broadwalk, canal-front property roofing in Emerald Hills, mid-century home reroofing in Hollywood Hills, and flat roof systems for commercial properties along Young Circle',
    localFact: 'Hollywood sits directly on the Atlantic coast with the ocean immediately to the east. Roofs older than 25 years in this environment are significantly more vulnerable to hurricane damage &mdash; modern materials and reinforcement techniques can reduce storm damage by up to 55%.'
  },
  'sunrise': {
    county: 'Broward County',
    neighborhoods: 'Sunrise Lakes, Sawgrass community, Sunrise Golf Village West, and the Plantation Acres area',
    localContext: `Sunrise is anchored by <a href="https://www.noaa.gov/weather" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Sawgrass Mills</a> &mdash; one of the nation's largest outlet malls attracting 25 million visitors annually &mdash; and the surrounding residential communities that house Broward County families. The 669-acre Markham Park with its mountain bike trails and Fox Observatory sits on the city's western edge near I-75, while Welleby Park and Oak Hammock Park serve central neighborhoods. Sunrise Lakes, a large 55+ community developed between 1971-1997, represents a significant concentration of aging roofs that are now reaching replacement age.`,
    buildingNotes: `Sunrise falls within Broward County's HVHZ zone. The intersection of Sunrise Boulevard and Flamingo Road marks the commercial gateway to Sawgrass Mills, where commercial and residential roofing needs overlap. I-75 along the western edge and I-595 providing direct eastward routes create access corridors our crews use daily from Deerfield Beach headquarters. Many Sunrise Golf Village West homes from the 1970s era have canal views but aging shingle roofs past their serviceable lifespan. Our HVHZ certification is essential for every Sunrise installation.`,
    popularServices: 'aging roof replacement in Sunrise Lakes 55+ community, shingle-to-tile conversions in Sunrise Golf Village, commercial roof maintenance near Sawgrass Mills, and hurricane-rated upgrades for homes along the I-595 corridor',
    localFact: 'Sunrise sits at the intersection of three major highways &mdash; I-75, I-595, and the Sawgrass Expressway. This strategic location 20-30 miles from the Atlantic coast still faces hurricane-force winds during major storms, making wind-rated roofing essential for every property.'
  },
  'plantation': {
    county: 'Broward County',
    neighborhoods: 'Hawk\'s Landing, Plantation Acres, Plantation Park, and the Jacaranda area',
    localContext: `Plantation sits in central Broward County with a blend of luxury gated communities and established family neighborhoods. Hawk's Landing features estate-style homes requiring premium roofing materials, while <a href="https://www.epa.gov/climate-indicators/climate-indicators-heavy-precipitation" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Plantation Acres</a> &mdash; east of Flamingo Road &mdash; offers equestrian estates on larger lots. Central Park with its Frank Veltri Tennis Center and aquatic center anchors the residential core, and Heritage Park provides waterfront green space with fitness trails. The Westfield Broward Mall area draws commercial roofing demand alongside residential needs.`,
    buildingNotes: `Plantation falls within Broward County's HVHZ zone requiring the strictest wind-resistant installation standards. The Flamingo Road corridor serves as the primary traffic artery connecting Plantation's diverse neighborhoods. Many Plantation Acres properties have original tile roofs from the 1980s development era that now need replacement, and the large lot sizes mean bigger roof footprints requiring experienced coordination. Our dual licensing enables structural assessment of older homes where roof decking may need replacement before modern heavy tile or metal systems can be installed.`,
    popularServices: 'luxury home reroofing in Hawk\'s Landing, equestrian estate roofing in Plantation Acres, shingle tear-offs and tile upgrades near Central Park, and commercial flat roof systems along Broward Boulevard',
    localFact: 'Plantation\'s intense year-round sun causes asphalt shingle roofs to deteriorate 15-20% faster than in cooler climates, with degradation accelerated by constant UV exposure and high humidity levels averaging 80%+.'
  },
  'davie': {
    county: 'Broward County',
    neighborhoods: 'the Central Davie corridor, equestrian districts along Flamingo Road, and neighborhoods near the Everglades',
    localContext: `Davie is Broward County's historic horse country &mdash; a unique community where equestrian estates sit alongside suburban developments. <a href="https://en.wikipedia.org/wiki/Flamingo_Gardens" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Flamingo Gardens</a>, a 60-acre botanical garden established in 1927, represents the town's deep roots. Tree Tops Park &mdash; 23 acres with boardwalks through freshwater marsh and nature trails &mdash; anchors the eastern residential neighborhoods. The Flamingo Road and Griffin Road intersection serves as a commercial hub where residential and commercial roofing demands converge.`,
    buildingNotes: `Davie falls within Broward County's HVHZ zone. The town's equestrian properties feature unique roofing challenges: larger barn-style structures, extended covered areas, and estate homes with complex roof lines that require experienced installation crews. Davie sits within a special flood-hazard area where heavy monsoon rains from May through October create persistent moisture exposure. Nova Southeastern University's 314-acre campus on the Davie-Fort Lauderdale border generates commercial roofing demand. Our dual licensing enables us to handle both the structural complexity of equestrian estates and standard residential reroofing.`,
    popularServices: 'equestrian estate and barn roofing, ranch-style home reroofing in Central Davie, flood-zone waterproof roofing systems, and emergency storm damage repair for properties near the Everglades corridor',
    localFact: 'Davie sits within a special flood-hazard zone where 100-year flood events have a 26% chance of occurring during any 30-year period. Approximately all Davie buildings face some flooding risk, making waterproof roofing systems and proper drainage critical.'
  },
  'miramar': {
    county: 'Broward County',
    neighborhoods: 'Huntington, Silver Shores, Nautica, and Country Club Ranches',
    localContext: `Miramar is one of Broward County's fastest-growing cities, stretching from the urban core west toward the Everglades along I-75. The 173-acre <a href="https://www.census.gov/quickfacts/miramarcityflorida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Miramar Regional Park</a> and 157-acre Miramar Pineland Park serve the city's expanding residential communities. Silver Shores features Mediterranean-style gated developments with lake views, while Country Club Ranches offers an equestrian-friendly, rural atmosphere on Miramar's western edge. Nautica's Spanish-style gated homes represent the city's newer construction requiring proactive roof maintenance.`,
    buildingNotes: `Miramar falls within Broward County's HVHZ zone requiring roofing materials rated for 130+ mph winds. The I-75 and Miramar Parkway interchange connects the city's western growth areas where newer communities like Huntington are entering their first roof maintenance windows. Many Silver Shores and Nautica homes were built in the 2000s with concrete tile systems that are now 20+ years old and approaching inspection age. Our HVHZ certification and dual licensing ensure every Miramar project meets the strict Broward County building code requirements for hurricane straps, specialized fasteners, and impact-resistant materials.`,
    popularServices: 'concrete tile maintenance for Silver Shores and Nautica communities, HVHZ-compliant reroofing in Huntington subdivisions, equestrian property roofing in Country Club Ranches, and new construction roofing for Miramar\'s expanding western developments',
    localFact: 'Miramar requires all roofing materials to carry HVHZ ratings for 130+ mph winds. Every installation must include hurricane straps, enhanced fastening schedules, and impact-resistant materials &mdash; the strictest residential roofing standards in the United States.'
  },
  'pembroke-pines': {
    county: 'Broward County',
    neighborhoods: 'Chapel Trail, the Downtown district, Pembroke Falls, and neighborhoods west of Flamingo Road',
    localContext: `Pembroke Pines is one of Broward County's most populous cities with diverse residential development from the 1960s through today. <a href="https://www.epa.gov/indoor-air-quality-iaq/mold-and-health" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">C.B. Smith Park</a> &mdash; featuring batting cages, tennis courts, and Paradise Cove Water Park &mdash; anchors the eastern residential core. Chapel Trail Nature Preserve encompasses 450 acres with a 1,650-foot boardwalk through wetlands, and its surrounding residential community represents one of the city's largest concentrations of homes needing roof replacement. The Shops at Pembroke Gardens and Pembroke Lakes Regional Mall generate commercial roofing demand.`,
    buildingNotes: `Pembroke Pines falls within Broward County's HVHZ zone, classified as Wind Zone 4. Roofing here requires six nails per shingle in high-wind areas, hurricane straps, and all materials must carry Notice of Acceptance (NOA) certification. The I-75 and Pines Boulevard interchange marks the western growth corridor where newer homes are built to current Florida Building Code standards, while older eastern neighborhoods need roof upgrades to meet modern wind ratings. Our dual licensing enables structural assessment of older Pembroke Pines homes where original roof framing may need reinforcement.`,
    popularServices: 'whole-neighborhood reroofing coordination in Chapel Trail, HVHZ-compliant tile replacement in Pembroke Falls, commercial flat roof systems near Pembroke Lakes Mall, and wind-rated shingle upgrades for older eastern neighborhoods',
    localFact: 'Pembroke Pines is classified as HVHZ Wind Zone 4 under the Florida Building Code. This requires six nails per shingle, hurricane straps, and NOA-certified materials on every installation &mdash; the most demanding residential roofing standards in the country.'
  },
  'delray-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'the Old School Square historic district, Pineapple Grove, Huntington Lakes, and the Del-Ida Park area',
    localContext: `Delray Beach blends historic charm with coastal living along the vibrant Atlantic Avenue corridor. <a href="https://en.wikipedia.org/wiki/Delray_Beach,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Pineapple Grove</a> &mdash; a charming enclave off Atlantic Avenue with boutiques and galleries &mdash; features historic buildings with unique roofing preservation needs. The Wakodahatchee Wetlands nature boardwalk and Atlantic Dunes Park oceanfront boardwalk represent the east-west range of residential neighborhoods. Properties near the Atlantic Avenue and A1A intersection face the most intense coastal exposure in the city.`,
    buildingNotes: `Delray Beach properties fall under Palm Beach County wind-code requirements with specific fastening schedules for coastal proximity. The historic Old School Square district presents unique roofing challenges where architectural integrity must be balanced with modern storm protection. Huntington Lakes &mdash; a 55+ luxury community &mdash; represents concentrated demand for coordinated reroofing as original systems age. Properties east of I-95 face increased salt air corrosion requiring marine-grade components, while western neighborhoods like Lake Ida Park need standard wind-compliant installations. Our dual licensing enables structural assessment of Delray Beach's diverse building stock spanning over a century of construction.`,
    popularServices: 'historic district reroofing near Old School Square, coastal property wind-rated upgrades east of A1A, 55+ community coordination in Huntington Lakes, and tile roof restoration in Pineapple Grove',
    localFact: 'As a coastal Atlantic community, Delray Beach faces direct hurricane exposure with storm surge potential reaching 20 feet. Barrier island properties and waterfront homes require salt-spray-resistant roofing systems engineered for the most demanding coastal conditions.'
  },
  'boynton-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'The Cascades, Canyon Lakes, Hunters Run, and Valencia Lakes',
    localContext: `Boynton Beach combines oceanfront living with established inland communities across Palm Beach County. <a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Oceanfront Park</a> at 6415 N. Ocean Blvd with its boardwalk and beach access marks the eastern coastal zone where roofing demands are most extreme. The Cascades and Valencia Lakes &mdash; active 55+ communities &mdash; represent concentrated aging roof replacement needs as original systems reach 20-25 years. Canyon Lakes and Hunters Run feature upscale gated homes with complex tile roof systems requiring specialized installation expertise.`,
    buildingNotes: `Boynton Beach properties fall under Palm Beach County wind-code requirements. The I-95 and Boynton Beach Boulevard interchange serves as the commercial artery where residential neighborhoods transition to retail districts including Boynton Beach Mall. Mangrove Nature Park's observation deck overlooks neighborhoods where many 1990s-era homes now need roof assessment. The Boynton Beach Boulevard and Congress Avenue intersection anchors the commercial district generating flat roof demand. Our dual licensing provides the structural engineering expertise needed for Hunters Run's complex multi-level tile roof systems and Canyon Lakes' estate homes.`,
    popularServices: 'coordinated 55+ community reroofing in The Cascades and Valencia Lakes, premium tile replacement in Canyon Lakes, golf course community roofing in Hunters Run, and commercial flat roof systems near Congress Avenue',
    localFact: 'Boynton Beach buildings face approximately a 41% chance of experiencing significant flooding over 30 years, with 61 of 70 census tracts having substantial storm surge and flooding risk &mdash; making weather-resistant roofing systems a critical investment.'
  },
  'jupiter': {
    county: 'Palm Beach County',
    neighborhoods: 'Abacoa, Jonathan\'s Landing, The Shores along the Loxahatchee River, and the Jupiter Farms area',
    localContext: `Jupiter sits at the northern edge of Palm Beach County where the Loxahatchee River meets the Atlantic Ocean. <a href="https://en.wikipedia.org/wiki/Jupiter,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Jonathan Dickinson State Park</a> &mdash; the largest state park in Southeast Florida &mdash; borders the western residential communities. Jupiter Beach Park with its fishing jetty and Carlin Park along A1A serve the coastal neighborhoods where salt air exposure demands premium roofing materials. Abacoa, a master-planned community with A-rated schools, represents newer construction requiring proactive maintenance. Harbourside Place on the waterfront provides the downtown anchor.`,
    buildingNotes: `Jupiter properties fall under Palm Beach County wind-code requirements with additional coastal exposure considerations. The I-95 and Indiantown Road (SR 706) interchange connects the city's main commercial corridor with residential neighborhoods radiating east toward the coast and west toward Jupiter Farms. Jonathan's Landing &mdash; a luxury gated community with premier golf courses and waterfront homes &mdash; features complex tile roof systems requiring specialized expertise. The Shores neighborhood along the Loxahatchee River faces unique humidity and moisture challenges from river proximity. Our dual licensing enables structural assessment of Jupiter's diverse housing stock.`,
    popularServices: 'premium tile roofing for Jonathan\'s Landing estates, coastal wind-rated systems near Jupiter Beach, Abacoa community roof maintenance, and hurricane-rated upgrades for homes near the Loxahatchee River',
    localFact: 'Jupiter experiences intense hurricane season exposure from June through November. Metal and concrete tile roofing are the top recommendations for Jupiter properties, and hurricane retrofit investments typically pay for themselves within two years through insurance premium credits.'
  },
  'palm-beach-gardens': {
    county: 'Palm Beach County',
    neighborhoods: 'Frenchman\'s Creek, Old Palm Golf Club, Avenir, and the PGA National area',
    localContext: `Palm Beach Gardens is one of Palm Beach County's most prestigious communities, home to world-class golf developments and luxury estates. <a href="https://www.britannica.com/sports/golf" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Frenchman's Creek</a> features two 18-hole championship golf courses and waterfront homes, while Old Palm Golf Club includes ultra-luxury properties exceeding $10 million. The 82-acre Gardens North County District Park &mdash; opened in 2019 &mdash; and Frenchman's Forest Natural Area serve the community's expanding residential zones. The Gardens Mall with 160+ retailers anchors the commercial district.`,
    buildingNotes: `Palm Beach Gardens properties fall under Palm Beach County wind-code requirements. The PGA Boulevard and US-1 intersection &mdash; one of the area's most congested &mdash; marks the commercial core where residential estates meet retail development. Avenir, a master-planned luxury community opened in 2020, features the newest construction in the area with modern code-compliant roofing, while Frenchman's Creek and Old Palm homes built in earlier decades may need comprehensive roof assessment. Premium tile roofs are the standard here, and HOA architectural review boards require specific materials and color palettes. Our dual licensing is essential for the structural complexity of Palm Beach Gardens' estate-class properties.`,
    popularServices: 'premium tile replacement for Frenchman\'s Creek estates, HOA-approved reroofing at Old Palm Golf Club, new construction roofing coordination in Avenir, and PGA National community roof replacement programs',
    localFact: 'Palm Beach Gardens\' sunny climate and occasional salt-laden coastal breezes create accelerated roof wear. Tile roofs are the most popular choice here, blending aesthetic appeal with wind resistance. Regular inspections in spring and fall catch issues before they become costly repairs.'
  },
  'royal-palm-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'Bella Terra, Bella Sera, and the Village Walk area near Commons Park',
    localContext: `Royal Palm Beach is a family-oriented village in western Palm Beach County centered around the 163-acre <a href="https://www.census.gov/quickfacts/royalpalmbeachvillageflorida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Royal Palm Beach Commons</a> &mdash; featuring a golf training center, driving range, 18-hole tournament green, and 19-acre lake. Bella Terra and Bella Sera are upscale gated communities with sparkling lakes and resort-style amenities. The nearly 800-acre Royal Palm Beach Pines Natural Area with its boardwalk and observation platform provides a unique natural buffer for western neighborhoods.`,
    buildingNotes: `Royal Palm Beach properties fall under Palm Beach County wind-code requirements. The Southern Boulevard and State Road 7 intersection &mdash; known for heavy traffic and commercial activity &mdash; marks the village's primary commercial corridor. Preservation Park's 65-acre recreational facility serves the central residential core where many homes from the 1990s-2000s development era are entering the roof replacement window. Strong winds from summer storms and hurricanes frequently dislodge roofing materials, making enhanced fastening schedules essential. Our dual licensing provides structural assessment capability for the village's diverse housing stock.`,
    popularServices: 'gated community reroofing in Bella Terra and Bella Sera, wind-rated roof upgrades near Commons Park, TPO and metal roofing for storm durability, and coordinated neighborhood roof replacement programs',
    localFact: 'Royal Palm Beach faces summer heat, torrential downpours, and sudden storms that regularly dislodge roofing materials. Annual professional inspections are critical &mdash; wind damage can range from moderate shingle displacement to complete material removal during major storm events.'
  },
  'greenacres': {
    county: 'Palm Beach County',
    neighborhoods: 'Nautica Isles, River Bridge, and the Cresthaven Boulevard area',
    localContext: `Greenacres is a growing residential community in central Palm Beach County anchored by <a href="https://www.epa.gov/greeningepa" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Greenacres Freedom Park</a> &mdash; featuring a large lake, sports fields, basketball and volleyball courts, skate park, and BMX track. Nautica Isles, a gated community by GL Homes with 1,500+ homes across four subdivisions, represents the city's largest concentration of coordinated roofing needs. The 1,700-acre Okeeheelee Park on the western city limit and River Bridge's well-maintained gated neighborhood with 1,100+ homes complete the residential landscape.`,
    buildingNotes: `Greenacres properties fall under Palm Beach County wind-code requirements. The Forest Hill Boulevard and Jog Road intersection serves as the commercial center where River Bridge Centre anchors the retail district. Cresthaven Boulevard &mdash; a quiet neighborhood of villas and townhouses established in the 1960s &mdash; represents the city's oldest housing stock requiring structural assessment before reroofing. Nautica Isles and River Bridge, both built in the 2000s era, are approaching the 20-year mark where proactive roof maintenance prevents costly emergency repairs. Our dual licensing enables both structural remediation of older homes and modern wind-rated installations for newer communities.`,
    popularServices: 'coordinated community reroofing in Nautica Isles and River Bridge, 1960s-era home structural assessment and reroofing on Cresthaven, hurricane-rated tile and metal installations, and flat roof systems for commercial properties along Forest Hill Boulevard',
    localFact: 'Greenacres experiences harsh thunderstorms, hurricanes, and heavy rain that promote moss, algae, and mold growth on roofing systems. Metal and tile roofing offer the longest lifespan in this climate &mdash; 40-50 years versus 15-20 for standard shingles.'
  },
  'west-palm-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'Southland Park, Northwood Shores, Flamingo Park, and the Downtown waterfront district',
    localContext: `West Palm Beach is Palm Beach County's urban center, blending historic neighborhoods with modern waterfront development. <a href="https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Flamingo Park's</a> Spanish Colonial and Mission Revival architecture demands roofing materials that maintain historic character while meeting modern wind codes. The 120-acre Dreher Park &mdash; home to Palm Beach Zoo and South Florida Science Center &mdash; and the 15,000-acre Grassy Waters Preserve represent the east-west spectrum of residential development. Rosemary Square (formerly CityPlace) anchors downtown with 600,000 square feet of retail and dining.`,
    buildingNotes: `West Palm Beach properties fall under Palm Beach County wind-code requirements. The Okeechobee Boulevard and Jog Road intersection &mdash; identified as the county's busiest &mdash; marks the commercial corridor dividing eastern historic districts from western suburban development. Southland Park's 1920s-1940s homes near Lake Worth Lagoon require careful structural assessment before reroofing, while Northwood Shores' historic Intracoastal Waterway properties face aggressive salt air corrosion. Palm Beach Atlantic University's downtown campus generates mixed-use roofing demand. Our dual licensing is essential for West Palm Beach's diverse building stock spanning over a century of Florida construction practices.`,
    popularServices: 'historic home reroofing in Flamingo Park and Southland Park, coastal property salt-resistant systems in Northwood Shores, commercial flat roofing downtown near Rosemary Square, and wind-code compliant tile replacement throughout the Okeechobee corridor',
    localFact: 'Studies show that 90% of South Florida homes experienced roof damage during Hurricane Andrew. West Palm Beach homes built after 1994 with updated building codes sustain significantly less roof damage in subsequent hurricanes &mdash; making code-compliant reroofing the most important property investment.'
  },
  'deerfield-beach': {
    county: 'Broward County',
    neighborhoods: 'The Cove, Deer Creek, Century Village East, and the Hillsboro Boulevard corridor',
    localContext: `Deerfield Beach is home to All Phase Construction USA's headquarters at 590 Goolsby Blvd &mdash; the center of our operations serving all of Broward and Palm Beach County. <a href="https://en.wikipedia.org/wiki/Deerfield_Beach,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">The Cove</a> is a premier boating community with waterfront homes between Hillsboro Inlet and Boca Raton Inlet. The 431-acre Quiet Waters Park &mdash; featuring Ski Rixen USA cable water-skiing, marina, and fishing lakes &mdash; anchors the western residential zones. Century Village East, a 750-acre 55+ community with 8,500+ condos, represents one of South Florida's largest concentrations of aging roof systems. Deer Creek features an excellent public golf course with surrounding single-family homes and townhomes.`,
    buildingNotes: `Deerfield Beach falls within Broward County's HVHZ zone requiring the nation's strictest wind-resistant installation standards. The US-1 and Hillsboro Boulevard intersection serves as the traditional business district center. As our home community, we have completed more roofing projects in Deerfield Beach than any other city &mdash; giving us unmatched familiarity with local HOA requirements, building department processes, and neighborhood-specific roofing challenges. Century Village East's 8,500+ units require ongoing roof maintenance and replacement coordination. Our dual licensing enables the structural assessment capability that Deerfield Beach's diverse housing stock demands.`,
    popularServices: 'Century Village condo roof replacement coordination, waterfront property reroofing in The Cove, golf community tile replacement in Deer Creek, and emergency storm damage response from our local headquarters',
    localFact: 'Deerfield Beach faced major hurricanes in 1926 and a Category 4 storm in 1928. Current HVHZ standards require roofs to withstand 130-175+ mph winds. As our headquarters city, we provide the fastest emergency response times to Deerfield Beach properties.'
  }
};

/**
 * Generate ENHANCED service hub content for cities with unique data.
 * Produces 1,200+ words of city-specific content instead of the generic 700 words.
 */
function generateEnhancedServiceHubContent(cityName, citySlug, location = null) {
  const data = CITY_UNIQUE_CONTENT[citySlug];
  if (!data) return generateServiceHubContent(cityName, citySlug, location);

  const isBroward = data.county === 'Broward County';
  const complianceLabel = isBroward ? 'HVHZ-compliant' : 'wind-code compliant';

  return `
<section id="seo-static-content">
  <h1>Roof Replacement in ${cityName}, FL | All Phase USA</h1>

  <p><strong>All Phase Construction USA</strong> provides professional roofing services throughout ${cityName}, ${data.county}, Florida. Dual-licensed as both a State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring structural engineering expertise and ${complianceLabel} installation quality to every ${cityName} roofing project — from emergency repairs to complete roof replacements.</p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Need Roofing Help in ${cityName}?</h3>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">
      🔍 <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast ${cityName} Repair Service</a> ✅ Active leaks, storm damage, emergency tarping
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔍 <strong>Professional Inspections:</strong> <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point ${cityName} Roof Inspection</a> ✅ Free estimates, photo documentation
    </p>
  </div>

  <h2>Roofing Services in ${cityName}, Florida</h2>
  <p>${data.localContext}</p>

  <h2>Why ${cityName} Property Owners Choose All Phase Construction USA</h2>
  <p>${data.buildingNotes}</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Dual-Licensed Advantage for ${cityName} Properties</h3>
  <p>Unlike standard roofing contractors, our dual licensing (CCC + CGC) provides a critical advantage for ${cityName} homeowners: we assess and address structural integrity alongside roofing system performance. This means we evaluate roof decking condition, truss and rafter soundness, load-bearing capacity, and roof-to-wall connections — not just surface materials. For ${cityName} properties with aging roofs, this structural perspective prevents costly surprises during installation and ensures your new roof is engineered as a complete building envelope system.</p>

  <h2>Popular Roofing Services in ${cityName}</h2>
  <p>Our most requested services throughout ${cityName} neighborhoods including ${data.neighborhoods} include ${data.popularServices}. Every installation includes manufacturer-backed warranties, full building department permitting, and comprehensive project documentation.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Emergency Roof Repair in ${cityName}</h3>
  <p>Active leaks and storm damage require immediate professional attention. Our ${cityName} emergency repair team provides rapid response from our Deerfield Beach headquarters for water intrusion, missing shingles, tile displacement, flashing failures, and structural damage. We deploy fully-equipped service vehicles and provide emergency tarping, moisture detection, and permanent repairs. <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline;">Get emergency roof repair in ${cityName}</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Professional 21-Point Roof Inspections</h3>
  <p>Our comprehensive inspection protocol evaluates every critical roofing system component for ${cityName} properties: exterior material condition, flashing integrity, valley and ridge condition, soffit and fascia health, structural decking soundness, attic ventilation adequacy, and moisture intrusion evidence. Every inspection includes detailed photo documentation, written professional reports, and maintenance recommendations. <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline;">Schedule a free roof inspection in ${cityName}</a>.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Complete Roof Replacement</h3>
  <p>We install all major roofing systems throughout ${cityName}: architectural asphalt shingles, concrete and clay tile, standing seam and corrugated metal, TPO and PVC single-ply membranes, and modified bitumen systems. Every replacement includes removal and disposal of existing materials, thorough decking inspection and repair, code-compliant underlayment and flashing, and ${complianceLabel} installation methods.</p>

  <h2>About ${cityName}</h2>
  <p>${data.localFact}</p>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from 590 Goolsby Blvd in Deerfield Beach, strategically positioned to serve ${cityName} and all of ${data.county}. Our central location enables same-day inspection availability, rapid emergency response, and consistent contractor oversight on every project.</p>

  <h2>Contact All Phase Construction USA for ${cityName} Roofing</h2>
  <p><strong>Call (754) 227-5605</strong> to speak with a licensed roofing specialist about your ${cityName} roofing project. We provide free professional inspections, transparent estimates, and detailed project timelines.</p>

  <h2>Additional Resources for ${cityName} Roofing</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    ${['deerfield-beach','fort-lauderdale','west-palm-beach','boca-raton','coral-springs','wellington','pompano-beach','hollywood','sunrise','plantation','davie','miramar','pembroke-pines','delray-beach','boynton-beach','jupiter','palm-beach-gardens','royal-palm-beach','greenacres','lake-worth-beach','parkland'].includes(citySlug) ? `<li><a href="/locations/${citySlug}/best-roofers-${citySlug}" style="color: #dc2626; text-decoration: underline;">Best Roofers in ${cityName}</a></li>` : ''}
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
    <li><a href="/blog/how-to-hire-a-roofer-in-south-florida" style="color: #dc2626; text-decoration: underline;">How to Hire a Roofer in South Florida</a></li>
    <li><a href="/blog/how-often-should-i-replace-my-roof-in-south-florida" style="color: #dc2626; text-decoration: underline;">How Often Should I Replace My Roof?</a></li>
    <li><a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a></li>
    <li><a href="/learning-center" style="color: #dc2626; text-decoration: underline;">Learning Center</a></li>
  </ul>

  <p>Trusted industry resources: <a href="https://www.gaf.com" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">GAF Roofing</a> · <a href="https://www.owenscorning.com/en-us/roofing" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Owens Corning</a> · <a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NRCA</a></p>

<div class="seo-service-links">
  <h2>Roofing Services in ${cityName}, FL</h2>
  <ul>
    <li><a href="/roof-repair/${citySlug}">Roof Repair in ${cityName}, FL</a></li>
    <li><a href="/roof-inspection/${citySlug}">Roof Inspection in ${cityName}, FL</a></li>
    <li><a href="/roof-replacement-process">Roof Replacement in ${cityName}, FL</a></li>
    ${citySlug === 'deerfield-beach' ? `
    <li><a href="/deerfield-beach-commercial-roofing">Commercial Roofing</a></li>
    ` : ''}${citySlug === 'lighthouse-point' ? `
    <li><a href="/lighthouse-point-roof-replacement">Roof Replacement</a></li>
    <li><a href="/lighthouse-point-tile-roof-replacement">Tile Roof Replacement</a></li>
    ` : ''}${citySlug === 'pompano-beach' ? `
    <li><a href="/pompano-beach-commercial-roofing">Commercial Roofing</a></li>
    <li><a href="/pompano-beach-coastal-roofing">Coastal Roofing</a></li>
    <li><a href="/pompano-beach-tile-roof-replacement">Tile Roof Replacement</a></li>
    <li><a href="/palm-aire-pompano-beach-roofing">Palm Aire Roofing</a></li>
    ` : ''}${citySlug === 'boca-raton' ? `
    <li><a href="/boca-raton-commercial-roofing">Commercial Roofing</a></li>
    <li><a href="/boca-raton-metal-roofing">Metal Roofing</a></li>
    <li><a href="/boca-raton-tile-re-roof">Tile Re-Roof</a></li>
    <li><a href="/coastal-boca-raton-roofing-contractor">Coastal Roofing</a></li>
    <li><a href="/boca-raton-wind-mitigation-roofing">Wind Mitigation Roofing</a></li>
    ` : ''}${citySlug === 'boynton-beach' ? `
    <li><a href="/boynton-beach-oceanfront-roofing">Boynton Beach Oceanfront Roofing</a></li>
    <li><a href="/boynton-beach-55-plus-community-roofing">55+ Community Roofing</a></li>
    <li><a href="/boynton-beach-tile-roof-replacement">Tile Roof Replacement</a></li>
    <li><a href="/boynton-beach-commercial-roofing">Commercial Roofing</a></li>
    <li><a href="/boynton-beach-roof-insurance-claim">Roof Insurance Claim</a></li>
    ` : ''}${citySlug === 'lake-worth-beach' ? `
    <li><a href="/lake-worth-beach-historic-roofing">Historic District Roofing</a></li>
    <li><a href="/lake-worth-beach-coastal-roofing">Coastal Roofing</a></li>
    <li><a href="/lake-worth-beach-flat-roof-replacement">Flat Roof Replacement</a></li>
    <li><a href="/lake-worth-beach-tile-roof-replacement">Tile Roof Replacement</a></li>
    <li><a href="/lake-worth-beach-roof-insurance-claim">Roof Insurance Claim</a></li>
    ` : ''}${citySlug === 'wellington' ? `
    <li><a href="/wellington-equestrian-estate-roofing">Equestrian Estate Roofing</a></li>
    <li><a href="/wellington-hoa-roof-replacement">HOA Roof Replacement</a></li>
    <li><a href="/wellington-tile-roof-replacement">Tile Roof Replacement</a></li>
    <li><a href="/wellington-metal-roofing">Metal Roofing</a></li>
    <li><a href="/wellington-roof-insurance-claim">Roof Insurance Claim</a></li>
    ` : ''}${citySlug === 'west-palm-beach' ? `
    <li><a href="/west-palm-beach-historic-roofing">Historic District Roofing</a></li>
    <li><a href="/west-palm-beach-waterfront-roofing">Waterfront Roofing</a></li>
    <li><a href="/west-palm-beach-commercial-roofing">Commercial Roofing</a></li>
    <li><a href="/west-palm-beach-tile-roof-replacement">Tile Roof Replacement</a></li>
    <li><a href="/west-palm-beach-roof-insurance-claim">Roof Insurance Claim</a></li>
    ` : ''}
  </ul>
</div>
  ${companyAuthorityFooter(data.county === 'Broward County' ? 'Broward' : 'Palm Beach')}
</section>
`.trim();
}

/**
 * SILO 1: Service Hub Page - /locations/[city]
 * Broad roofing authority with links to Repair + Inspection spokes
 */
function generateServiceHubContent(cityName, citySlug, location = null) {
  const isBroward = location && location.county === 'Broward';
  const complianceLabel = isBroward ? 'HVHZ-compliant' : 'wind-code compliant';
  const complianceCert = isBroward ? 'HVHZ certification' : 'Palm Beach County wind-code compliance';
  const complianceSentence = isBroward
    ? `Every installation in ${cityName} meets High Velocity Hurricane Zone (HVHZ) compliance with 175+ mph wind ratings and enhanced fastening schedules.`
    : `Every installation in ${cityName} is built to Palm Beach County wind-code requirements with 170+ mph design wind speeds and enhanced fastening schedules.`;
  const replacementSentence = isBroward
    ? 'Every installation includes manufacturer-backed warranties, building code compliance, and HVHZ certification where required.'
    : 'Every installation includes manufacturer-backed warranties, building code compliance, and Palm Beach County wind-code certification.';

  // Gate the /roof-repair/${slug} and /roof-inspection/${slug} CTAs on
  // whether those spoke pages actually get prerendered (via cities.json).
  // For small towns outside cities.json (pembroke-park, sea-ranch-lakes,
  // lauderdale-lakes, southwest-ranches) the spokes don't exist, so
  // emitting the anchors produces 4+ SPA-shell canonicalizations that
  // Screaming Frog flagged in PR-5 verification. Fall back to a phone CTA.
  const hasSpokes = SUBPAGE_SLUGS.has(citySlug);
  const urgentCtaRepair = hasSpokes
    ? `<a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast ${cityName} Repair Service</a>`
    : `<a href="tel:7542275605" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Call (754) 227-5605</a>`;
  const urgentCtaInspect = hasSpokes
    ? `<a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point ${cityName} Roof Inspection</a>`
    : `<a href="tel:7542275605" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Call (754) 227-5605</a>`;
  const inlineRepairCta = hasSpokes
    ? ` <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline;">Get emergency repairs in ${cityName}</a>.`
    : '';
  const inlineInspectCta = hasSpokes
    ? ` <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline;">Schedule a ${cityName} roof inspection</a>.`
    : '';
  const servicesListExtras = hasSpokes
    ? `
    <li><a href="/roof-repair/${citySlug}">Roof Repair in ${cityName}, FL</a></li>
    <li><a href="/roof-inspection/${citySlug}">Roof Inspection in ${cityName}, FL</a></li>`
    : '';
  return `
<section id="seo-static-content">
  <h1>Roof Replacement in ${cityName}, FL | All Phase USA</h1>

  <p><strong>Dispatched from our Deerfield Beach HQ to provide rapid roof replacement and repair services in ${cityName}</strong>, All Phase Construction USA delivers comprehensive roofing solutions with dual-licensed expertise (CCC-1331464 & CGC-1526236) and ${complianceCert} on every residential and commercial project.</p>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Need Immediate Help in ${cityName}?</h3>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">
      🔍 <strong>Emergency Roof Repairs:</strong> ${urgentCtaRepair} ✅ Active leaks, storm damage, emergency tarping
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔍 <strong>Professional Roof Inspections:</strong> ${urgentCtaInspect} ✅ Free estimates, insurance documentation
    </p>
  </div>

  <h2>Why ${cityName} Homeowners Choose All Phase Construction USA</h2>
  <p>We're not just another roofing company serving ${cityName}. Here's what sets us apart:</p>

  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Dual-Licensed Authority:</strong> We hold both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses. This means we bring structural engineering expertise that standard roofers cannot match.</li>
    <li><strong>${isBroward ? 'HVHZ Certified' : 'Wind-Code Compliant'}:</strong> ${complianceSentence}</li>
    <li><strong>Local Deerfield Beach Headquarters:</strong> Our central South Florida location enables same-day inspection availability and rapid emergency response throughout ${cityName}.</li>
    <li><strong>Owner-Operator Accountability:</strong> Direct contractor involvement on every ${cityName} project ensures precision and quality that large franchise operations cannot match.</li>
  </ul>

  <h2>Complete Roofing Services in ${cityName}</h2>
  <p>All Phase Construction USA provides full-spectrum roofing solutions for ${cityName} properties:</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Emergency Roof Repairs</h3>
  <p>Active leaks require immediate attention. Our ${cityName} emergency repair team provides 24/7 response for storm damage, missing shingles, flashing failures, and water intrusion.${inlineRepairCta}</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Professional Roof Inspections</h3>
  <p>Our comprehensive 21-point roof inspection covers every critical component including underlayment condition, flashing integrity, ventilation adequacy, and structural soundness. Perfect for pre-purchase evaluations, insurance documentation, and maintenance planning.${inlineInspectCta}</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Roof Replacement Systems</h3>
  <p>We install all major roof replacement systems in ${cityName} including architectural shingles, concrete and clay tile, standing seam metal, and TPO/PVC flat roofing. ${replacementSentence}</p>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from 590 Goolsby Blvd in Deerfield Beach, providing consistent, reliable roofing services throughout ${cityName} and surrounding South Florida communities. Our central location enables rapid response times and efficient project coordination across Broward and Palm Beach Counties.</p>

  <h2>Get Started with Your ${cityName} Roofing Project</h2>
  <p><strong>Call (754) 227-5605</strong> to speak with a licensed roofing specialist. We provide free professional inspections, transparent estimates, and detailed project timelines for all ${cityName} roofing services.</p>

  <h2>Additional Resources for ${cityName} Roofing</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    ${['deerfield-beach','fort-lauderdale','west-palm-beach','boca-raton','coral-springs','wellington','pompano-beach','hollywood','sunrise','plantation','davie','miramar','pembroke-pines','delray-beach','boynton-beach','jupiter','palm-beach-gardens','royal-palm-beach','greenacres','lake-worth-beach','parkland'].includes(citySlug) ? `<li><a href="/locations/${citySlug}/best-roofers-${citySlug}" style="color: #dc2626; text-decoration: underline;">Best Roofers in ${cityName}</a></li>` : ''}
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
    <li><a href="/blog/how-to-hire-a-roofer-in-south-florida" style="color: #dc2626; text-decoration: underline;">How to Hire a Roofer in South Florida</a></li>
    <li><a href="/blog/how-often-should-i-replace-my-roof-in-south-florida" style="color: #dc2626; text-decoration: underline;">How Often Should I Replace My Roof?</a></li>
    <li><a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a></li>
    <li><a href="/learning-center" style="color: #dc2626; text-decoration: underline;">Learning Center</a></li>
  </ul>

  <p>Trusted industry resources: <a href="https://www.gaf.com" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">GAF Roofing</a> · <a href="https://www.owenscorning.com/en-us/roofing" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Owens Corning</a> · <a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NRCA</a></p>

<div class="seo-service-links">
  <h2>Roofing Services in ${cityName}, FL</h2>
  <ul>${servicesListExtras}
    <li><a href="/roof-replacement-process">Roof Replacement in ${cityName}, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter(isBroward ? 'Broward' : 'Palm Beach')}
</section>
`.trim();
}

/**
 * SILO 2: Roof Repair Hub Page - /roof-repair
 * Landing page with links to all city-specific roof repair pages
 */
function generateRoofRepairHubContent() {
  const citiesFiltered = cities.filter(c => !c.slug.includes('county'));
  const citiesLinksHtml = citiesFiltered
    .map(c => `<li><a href="/roof-repair/${c.slug}" style="color: #dc2626; text-decoration: underline;">${c.city} Roof Repair</a></li>`)
    .join('\n    ');

  return `
<section id="seo-static-content">
  <h1>Emergency Roof Repair Services | South Florida</h1>

  <p><strong>Roof leaking? We can help today.</strong> All Phase Construction USA handles emergency leaks, storm damage, and flashing failures across South Florida. We're dual-licensed (CCC & CGC), so we fix both the roof and any structural damage underneath. Call <strong>(754) 227-5605</strong> for same-day service.</p>

  <h2>Roof Repair Service Areas</h2>
  <p>We serve over 50 cities across Broward County and Palm Beach County. Select your city for local roof repair services:</p>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    ${citiesLinksHtml}
  </ul>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #991b1b; margin-bottom: 0.75rem;">Emergency Roof Repair Available 24/7</h3>
    <p style="margin-bottom: 0.5rem; color: #7f1d1d; font-weight: bold;">🔍 Call (754) 227-5605 for Same-Day Emergency Service</p>
    <p style="margin-bottom: 0; color: #7f1d1d;">Active leaks, storm damage, missing shingles, and emergency tarping available throughout South Florida.</p>
  </div>

  <h2>Helpful Roof Repair Resources</h2>
  <p>Learn more about roof repairs and maintenance from our expert guides:</p>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><a href="/blog/how-often-should-i-replace-my-roof-in-south-florida" style="color: #dc2626; text-decoration: underline;">How Often Should I Replace My Roof?</a></li>
    <li><a href="/blog/dont-replace-your-roof-restore-it-instead" style="color: #dc2626; text-decoration: underline;">Don't Replace Your Roof — Restore It Instead</a></li>
    <li><a href="/blog/what-to-expect-during-a-roof-replacement-project" style="color: #dc2626; text-decoration: underline;">What to Expect During a Roof Replacement</a></li>
    <li><a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a></li>
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
  </ul>

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
    <p style="margin-bottom: 0.5rem; color: #7f1d1d; font-weight: bold;">🔍 Call (754) 227-5605 for Same-Day Emergency Service</p>
    <p style="margin-bottom: 1rem; color: #7f1d1d;">Active leaks, storm damage, missing shingles, and emergency tarping available throughout ${cityName}.</p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔎 <strong>Not sure if you need a repair?</strong> Start with our <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">professional ${cityName} roof inspection</a> ✅ free estimates included.
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
    <li><strong>Dual-Licensed Expertise:</strong> Our CCC and CGC licenses mean we assess structural integrity alongside surface repairs ✅ critical for identifying hidden damage that standard roofers miss.</li>
    <li><strong>Same-Day Emergency Response:</strong> Our Deerfield Beach headquarters enables rapid deployment to ${cityName} emergency repair calls with fully-equipped service vehicles.</li>
    <li><strong>Insurance Documentation:</strong> We provide detailed photo documentation, moisture readings, and scope-of-work reports that support ${cityName} insurance claim submissions.</li>
    <li><strong>Permanent Solutions:</strong> We address root causes, not just symptoms, ensuring repairs last and preventing recurring problems.</li>
  </ul>

  <h2>The All Phase Construction USA Repair Process</h2>
  <p>Our ${cityName} roof repair service follows a proven diagnostic and repair protocol:</p>
  <ol style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Emergency Response:</strong> We deploy to ${cityName} locations within hours for active leaks and storm damage emergencies.</li>
    <li><strong>Comprehensive Inspection:</strong> Our technicians perform thorough roof inspections to identify all damage ✅ not just obvious problems.</li>
    <li><strong>Detailed Estimate:</strong> We provide transparent pricing with itemized repair scopes and photo documentation.</li>
    <li><strong>Professional Repair:</strong> All work follows manufacturer specifications and building code requirements.</li>
    <li><strong>Quality Verification:</strong> We test all repairs and provide warranty documentation for ${cityName} customers.</li>
  </ol>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from 590 Goolsby Blvd in Deerfield Beach, providing consistent, reliable roof repair services throughout ${cityName} and surrounding Broward and Palm Beach County communities. Our central location enables rapid emergency response and efficient project coordination.</p>

  <h2>Schedule Your ${cityName} Roof Repair</h2>
  <p><strong>Call (754) 227-5605</strong> to speak with a licensed roofing specialist. We provide same-day emergency service and free professional inspections for all ${cityName} roof repair needs.</p>

  <div style="margin-top: 1.5rem; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
    <p><strong>Explore More Services:</strong> <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">Complete ${cityName} roofing services</a> | <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline;">Professional ${cityName} roof inspection</a> | <a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></p>
    <p style="margin-top: 0.75rem;"><strong>Related Articles:</strong> <a href="/blog/how-often-should-i-replace-my-roof-in-south-florida" style="color: #dc2626; text-decoration: underline;">How Often to Replace Your Roof</a> | <a href="/blog/what-to-expect-during-a-roof-replacement-project" style="color: #dc2626; text-decoration: underline;">What to Expect During Replacement</a> | <a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Insurance Claims Guide</a></p>
  </div>

<div class="seo-service-links">
  <h2>More Roofing Services in ${cityName}, FL</h2>
  <ul>
    <li><a href="/locations/${citySlug}">Roof Replacement in ${cityName}, FL</a></li>
    <li><a href="/roof-inspection/${citySlug}">Roof Inspection in ${cityName}, FL</a></li>
  </ul>
</div>
  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * SILO 3: Roof Inspection Hub Page - /roof-inspection
 * Landing page with links to all city-specific roof inspection pages
 */
function generateRoofInspectionHubContent() {
  const citiesFiltered = cities.filter(c => !c.slug.includes('county'));
  const citiesLinksHtml = citiesFiltered
    .map(c => `<li><a href="/roof-inspection/${c.slug}" style="color: #dc2626; text-decoration: underline;">${c.city} Roof Inspection</a></li>`)
    .join('\n    ');

  return `
<section id="seo-static-content">
  <h1>Professional Roof Inspection Services | South Florida</h1>

  <p><strong>Know your roof's real condition before you spend a dollar.</strong> Our 21-point inspection covers every part of your roof — from the shingles down to the decking. We check for storm damage, hidden leaks, and code issues. You get a written report with photos, cost estimates, and a clear plan. Call <strong>(754) 227-5605</strong> to schedule a free inspection.</p>

  <h2>Roof Inspection Service Areas</h2>
  <p>We serve over 50 cities across Broward County and Palm Beach County. Select your city for professional roof inspection services:</p>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    ${citiesLinksHtml}
  </ul>

  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #15803d; margin-bottom: 0.75rem;">Free Inspection Quote</h3>
    <p style="margin-bottom: 0.5rem; color: #166534; font-weight: bold;">📋 Call (754) 227-5605 for Your Free Estimate</p>
    <p style="margin-bottom: 0; color: #166534;">Comprehensive 21-point inspections with detailed documentation for insurance, purchase decisions, or maintenance planning.</p>
  </div>

  <h2>Roof Inspection Resources</h2>
  <p>Learn more about roof inspections and maintenance:</p>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><a href="/blog/professional-roof-inspection-south-florida" style="color: #dc2626; text-decoration: underline;">What a Professional Roof Inspection Looks Like</a></li>
    <li><a href="/blog/how-to-hire-a-roofer-in-south-florida" style="color: #dc2626; text-decoration: underline;">How to Hire a Roofer in South Florida</a></li>
    <li><a href="/blog/how-often-should-i-replace-my-roof-in-south-florida" style="color: #dc2626; text-decoration: underline;">How Often Should I Replace My Roof?</a></li>
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
  </ul>

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
    <p style="margin-bottom: 0.5rem; color: #064e3b; font-weight: bold;">🔍 Includes: Photo Documentation, Written Report, Cost Estimate</p>
    <p style="margin-bottom: 1rem; color: #064e3b;">Call (754) 227-5605 to schedule your professional ${cityName} roof inspection. Same-day availability throughout Broward and Palm Beach Counties.</p>
    <p style="margin-bottom: 0; color: #064e3b;">
      🔧 <strong>Already know you need repairs?</strong> <a href="/roof-repair/${citySlug}" style="color: #059669; text-decoration: underline; font-weight: bold;">Get fast ${cityName} roof repair service</a>.
    </p>
  </div>

  <h2>Why ${cityName} Property Owners Choose Our Inspection Service</h2>
  <p>All Phase Construction USA's ${cityName} roof inspections go beyond surface-level assessments. Our dual-licensed expertise (CCC & CGC) means we evaluate <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">structural integrity, building code compliance</a>, and long-term performance ✅ not just shingle condition.</p>

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

  <div style="margin-top: 1.5rem; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
    <p><strong>Explore More Services:</strong> <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">Complete ${cityName} roofing services</a> | <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline;">Emergency ${cityName} roof repairs</a> | <a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></p>
    <p style="margin-top: 0.75rem;"><strong>Related Articles:</strong> <a href="/blog/professional-roof-inspection-south-florida" style="color: #dc2626; text-decoration: underline;">What a Roof Inspection Looks Like</a> | <a href="/blog/how-to-hire-a-roofer-in-south-florida" style="color: #dc2626; text-decoration: underline;">How to Hire a Roofer</a> | <a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Insurance Claims Guide</a></p>
  </div>

<div class="seo-service-links">
  <h2>More Roofing Services in ${cityName}, FL</h2>
  <ul>
    <li><a href="/locations/${citySlug}">Roof Replacement in ${cityName}, FL</a></li>
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

  <p><strong>All Phase Construction USA</strong> is a dual-licensed roofing contractor in Broward and Palm Beach County. We hold both a CCC roofing license and a CGC general contractor license. That means we handle your roof and any structural work underneath — all under one contract, one crew, one warranty.</p>

  <h2>Why Choose All Phase Construction USA</h2>
  <p>Here's what makes us different:</p>
  <ul>
    <li><strong>Dual-Licensed (CCC & CGC):</strong> We hold both State Certified Roofing Contractor and Certified General Contractor licenses, providing structural engineering oversight that standard roofers cannot match.</li>
    <li><strong>HVHZ Certified:</strong> Every installation meets High Velocity Hurricane Zone compliance for maximum wind protection and building code requirements.</li>
    <li><strong>Owner-Operator Lead:</strong> Direct contractor involvement on every project ensures accountability and precision standard roofers can't match.</li>
    <li><strong>Local Deerfield Beach Headquarters:</strong> Serving South Florida from 590 Goolsby Blvd with consistent, reliable service and local expertise.</li>
  </ul>

  <h2>Professional Service Throughout South Florida</h2>
  <p>From our centrally located Deerfield Beach headquarters, we serve over 50 cities across Broward and Palm Beach Counties including Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach, West Palm Beach, Delray Beach, Boynton Beach, Wellington, Parkland, and all surrounding communities. Our strategic location enables same-day inspection availability and prompt emergency response throughout the region.</p>

  <h2>Trusted Industry Resources</h2>
  <p>All Phase Construction USA works with leading roofing manufacturers and follows industry best practices. Learn more from these authoritative sources: <a href="https://www.gaf.com" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">GAF Roofing</a>, <a href="https://www.owenscorning.com/en-us/roofing" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Owens Corning Roofing</a>, and the <a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">National Roofing Contractors Association (NRCA)</a>.</p>

  <h2>Related Articles</h2>
  <p>Expert roofing advice from our blog: <a href="/blog/how-to-hire-a-roofer-in-south-florida" style="color: #dc2626; text-decoration: underline;">How to Hire a Roofer</a> · <a href="/blog/how-often-should-i-replace-my-roof-in-south-florida" style="color: #dc2626; text-decoration: underline;">Roof Replacement Timing</a> · <a href="/blog/what-to-expect-during-a-roof-replacement-project" style="color: #dc2626; text-decoration: underline;">What to Expect During Replacement</a> · <a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Cost Calculator</a></p>

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
  <h1>Roof Replacement in Broward & Palm Beach County | All Phase USA</h1>
  <p><strong>Your roof protects everything you own. Make sure it's built to last.</strong> All Phase Construction USA is a dual-licensed roof replacement contractor serving Broward and Palm Beach County. Every roof we install meets HVHZ hurricane-zone standards in Broward and Palm Beach County wind-code requirements — built for South Florida's toughest weather.</p>

  <h2>Our Edge</h2>
  <p>Here's what makes us different from other roofers:</p>
  <ul>
    <li><strong>Dual-Licensed Authority:</strong> Both State Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses provide structural engineering expertise standard roofers lack.</li>
    <li><strong>HVHZ Specialist:</strong> Every South Florida installation meets High Velocity Hurricane Zone compliance with 175+ mph wind ratings.</li>
    <li><strong>Owner-Operator Accountability:</strong> Direct contractor involvement on every project ensures precision and quality franchise operations cannot match.</li>
    <li><strong>Deerfield Beach Headquarters:</strong> Central location enables same-day inspection availability and rapid emergency response throughout Broward and Palm Beach Counties.</li>
  </ul>

  <h2>Comprehensive Roofing Services</h2>
  <p>All Phase Construction USA provides complete residential and commercial roofing solutions throughout South Florida including <a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">emergency roof repairs</a>, <a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">professional roof inspections</a>, <a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">complete roof replacements</a>, <a href="/tile-roofing" style="color: #dc2626; text-decoration: underline;">tile roofing</a>, <a href="/metal-roofing" style="color: #dc2626; text-decoration: underline;">metal roofing</a>, <a href="/shingle-roofing" style="color: #dc2626; text-decoration: underline;">shingle roofing</a>, <a href="/flat-roofing" style="color: #dc2626; text-decoration: underline;">flat roofing (TPO/PVC)</a>, <a href="/roof-maintenance-programs" style="color: #dc2626; text-decoration: underline;">roof maintenance programs</a>, and storm damage restoration.</p>

  <h2>Service Area</h2>
  <p>From our Deerfield Beach headquarters at 590 Goolsby Blvd, we serve over 50 cities across Broward County and Palm Beach County including <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton</a>, <a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale</a>, <a href="/locations/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs</a>, <a href="/locations/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach</a>, <a href="/locations/parkland" style="color: #dc2626; text-decoration: underline;">Parkland</a>, <a href="/locations/coconut-creek" style="color: #dc2626; text-decoration: underline;">Coconut Creek</a>, <a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach</a>, <a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach</a>, <a href="/locations/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach</a>, <a href="/locations/wellington" style="color: #dc2626; text-decoration: underline;">Wellington</a>, and all surrounding communities.</p>

  <h2>Roofing Guides & Resources</h2>
  <p>Make informed roofing decisions with our expert guides: <a href="/broward-county-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Broward County Roof Replacement Guide</a>, <a href="/palm-beach-county-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roof Replacement Guide</a>, <a href="/boca-raton-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement Guide</a>, and our <a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a>. Visit our <a href="/learning-center" style="color: #dc2626; text-decoration: underline;">Learning Center</a> or <a href="/blog" style="color: #dc2626; text-decoration: underline;">Roofing Blog</a> for more homeowner tips and industry updates.</p>

  <p><strong>Call (754) 227-5605 for a free professional roof inspection and estimate.</strong></p>

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * Generate Blog Hub Page - /blog
 * Landing page with links to all blog posts from sitemap
 */
function generateBlogHubContent() {
  let blogLinksHtml = '';

  try {
    // Primary source: blog-content.json (has all blog post slugs and titles)
    const blogContentPath = path.join(projectRoot, 'public', 'blog-content.json');
    if (fs.existsSync(blogContentPath)) {
      const blogContent = JSON.parse(fs.readFileSync(blogContentPath, 'utf-8'));
      const blogSlugs = Object.keys(blogContent);

      if (blogSlugs.length > 0) {
        blogLinksHtml = blogSlugs
          .map(slug => {
            const post = blogContent[slug];
            const blogTitle = (post && post.title)
              ? post.title
              : slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return `<li><a href="/blog/${slug}" style="color: #dc2626; text-decoration: underline;">${blogTitle}</a></li>`;
          })
          .join('\n    ');
        console.log(`📝 Blog hub: found ${blogSlugs.length} posts from blog-content.json`);
      }
    } else {
      // Fallback: read blog/ directory for markdown files
      const blogDir = path.join(projectRoot, 'blog');
      if (fs.existsSync(blogDir)) {
        const mdFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
        blogLinksHtml = mdFiles
          .map(f => {
            const slug = f.replace('.md', '');
            const blogTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return `<li><a href="/blog/${slug}" style="color: #dc2626; text-decoration: underline;">${blogTitle}</a></li>`;
          })
          .join('\n    ');
        console.log(`📝 Blog hub: found ${mdFiles.length} posts from blog/ directory`);
      }
    }
  } catch (err) {
    console.warn('⚠️ Warning reading blog content for blog hub:', err.message);
  }

  return `
<section id="seo-static-content">
  <h1>Roofing Insights & Industry News | All Phase</h1>

  <p><strong>Expert roofing advice from South Florida's dual-licensed contractor.</strong> All Phase Construction USA shares industry insights, maintenance tips, and storm damage guides to help homeowners and business owners make informed roofing decisions. Stay updated on the latest roofing trends, best practices, and local updates from our Deerfield Beach headquarters.</p>

  <h2>Roofing Guides & Resources</h2>
  <p>In-depth guides for South Florida homeowners:</p>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><a href="/broward-county-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Broward County Roof Replacement Guide</a></li>
    <li><a href="/palm-beach-county-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roof Replacement Guide</a></li>
    <li><a href="/boca-raton-roof-replacement-guide" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement Guide</a></li>
    <li><a href="/florida-roof-insurance-claims-guide" style="color: #dc2626; text-decoration: underline;">Florida Roof Insurance Claims Guide</a></li>
    <li><a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Free Roof Cost Calculator</a></li>
    <li><a href="/learning-center" style="color: #dc2626; text-decoration: underline;">Learning Center</a></li>
  </ul>

  <h2>Latest Blog Articles</h2>
  <p>Explore our collection of roofing guides, maintenance tips, and expert insights:</p>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    ${blogLinksHtml || '<li><p style="color: #6b7280;">Blog posts loading...</p></li>'}
  </ul>

  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 1.5rem; margin: 2rem 0;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #15803d; margin-bottom: 0.75rem;">Expert Roofing Resources</h3>
    <p style="margin-bottom: 0.5rem; color: #166534;">Our blog provides detailed information on roof maintenance, storm damage restoration, material comparisons, and roofing best practices for South Florida properties.</p>
    <p style="margin-bottom: 0; color: #166534;"><strong>Have roofing questions?</strong> Call (754) 227-5605 to speak with a licensed roofing specialist.</p>
  </div>

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
    // aggregateRating matches baseOrgSchema (line ~1775). Required here because
    // RoofingContractor page-specific schemas REPLACE baseOrgSchema entirely
    // (see schemaToInject logic ~line 1810). Without this, the Deerfield Beach
    // HQ page loses the star rich snippet that every other page earns via
    // baseOrgSchema. DO NOT add an inline `review` array alongside — that
    // re-triggers the GSC "multiple aggregate ratings" error documented in
    // the baseOrgSchema comment above.
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "136",
      "bestRating": "5"
    },
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
    throw new Error('✅ dist/index.html not found. Run npm run build first.');
  }
  const template = fs.readFileSync(distIndexPath, 'utf-8');
  if (template.includes('/src/main.tsx')) {
    throw new Error('✅ Dev build detected. Run npm run build first.');
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

  // Replace Twitter Card tags (was previously leaking index.html hardcoded values)
  if (/<meta name="twitter:title"[^>]*>/i.test(html)) {
    html = html.replace(
      /<meta name="twitter:title"[^>]*>/i,
      `<meta name="twitter:title" content="${title}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="twitter:title" content="${title}" />\n  </head>`);
  }
  if (description) {
    if (/<meta name="twitter:description"[^>]*>/i.test(html)) {
      html = html.replace(
        /<meta name="twitter:description"[^>]*>/i,
        `<meta name="twitter:description" content="${description}" />`
      );
    } else {
      html = html.replace('</head>', `  <meta name="twitter:description" content="${description}" />\n  </head>`);
    }
  }

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
    areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
    priceRange: '$$',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '15:00' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '136',
      bestRating: '5'
    },
    // NOTE: Inline `review` array intentionally removed (2026-04-06).
    // Cause: Google Search Console flagged "Review has multiple aggregate ratings"
    // on all /locations/[city]/best-roofers-[city]/ pages (10 URLs, 70 items).
    // Reviews without `itemReviewed` get attached by Google to the parent
    // RoofingContractor, which already carries an aggregateRating, producing
    // the duplicate-rating error. The aggregateRating above is what earns
    // the star rich snippet — that's preserved. Visual testimonials on the
    // page are unaffected; only the structured-data copy is removed.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Roof Inspection',
            description: 'Complimentary 21-point roof inspection for South Florida homeowners'
          },
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      ]
    }
  };
  // Use page-specific schema if it's already a RoofingContractor (don't double-inject)
  // NOTE: Removed `injectReviews` helper (2026-04-06) — see baseOrgSchema comment above.
  // Page-specific RoofingContractor schemas must NOT carry an inline `review` array.
  const schemaToInject = (jsonLdSchema && (jsonLdSchema['@type'] === 'RoofingContractor' || (Array.isArray(jsonLdSchema) && jsonLdSchema[0]?.['@type'] === 'RoofingContractor')))
    ? null
    : baseOrgSchema;
  let schemasBlock = schemaToInject
    ? `\n    <script type="application/ld+json">\n${JSON.stringify(schemaToInject, null, 2)}\n    </script>`
    : '';
  if (jsonLdSchema) {
    schemasBlock += `\n    <!-- Page-Specific JSON-LD Schema -->\n    <script type="application/ld+json">\n${JSON.stringify(jsonLdSchema, null, 2)}\n    </script>`;
  }
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
      throw new Error('✅ Could not find root div or closing body tag in template.');
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
  <a href="/single-ply-roofing">Single-Ply Roofing</a>
  <a href="/roof-repair">Roof Repair</a>
  <a href="/roof-replacement">Roof Replacement</a>
  <a href="/roof-inspection">Roof Inspection</a>
  <a href="/flat-roof-moisture-infrared-inspection">Flat Roof Moisture &amp; Infrared Inspection</a>
  <a href="/roof-replacement-process">Roof Replacement Process</a>
  <a href="/roof-maintenance-programs">Roof Maintenance Programs</a>
  <a href="/how-to-hire-roofing-contractor">How to Hire a Roofing Contractor</a>
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
 * Mark prerendered HTML as "static-only" so the React SPA does NOT mount.
 * Pages without a matching React Router route would otherwise be replaced
 * by the catch-all NotFoundPage, causing a soft 404.
 */
function markStaticOnly(html) {
  return html.replace('<div id="root"', '<div id="root" data-static-only="true"');
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
        description: `Roof repair in ${cityName}, FL. Leaks, storm damage & flashing fixes. HVHZ-compliant, dual-licensed contractor. Call (754) 227-5605.`,
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
    `✅ MISSING METADATA FOR ROUTE: ${normalizedPath}\n` +
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

// =====================================================================
// SPA-shell-victim verifier (Diagnostic — PR-24)
// =====================================================================
// Asserts that each prerendered "victim" slug — the 44 city / neighborhood /
// sub-service URLs flagged by the 2026-04-26 Screaming Frog crawl as sharing
// the generic Vite-shell title — actually has a unique, non-default <title>
// in dist/<slug>/index.html after the prerender pass completes.
//
// If any are missing the dist file or are still serving the Vite shell
// title, the build fails LOUDLY with a precise list — surfacing the real
// root cause in the Netlify deploy log instead of letting partial deploys
// ship silently.
//
// Set SPA_SHELL_VERIFIER=warn to downgrade to warning-only for an
// emergency override. Default behavior is fail.
// =====================================================================

const SPA_SHELL_VICTIM_SLUGS = [
  // Boca Raton (5)
  'boca-raton-luxury-estate-roofing',
  'boca-raton-commercial-roofing',
  'boca-raton-metal-roofing',
  'boca-raton-tile-re-roof',
  'boca-raton-wind-mitigation-roofing',
  // Boynton Beach (5)
  'boynton-beach-55-plus-community-roofing',
  'boynton-beach-commercial-roofing',
  'boynton-beach-oceanfront-roofing',
  'boynton-beach-roof-insurance-claim',
  'boynton-beach-tile-roof-replacement',
  // Boca + Boynton neighborhood / community
  'broken-sound-boca-raton-roofing',
  'canyon-lakes-boynton-beach-roofing',
  'coastal-boca-raton-roofing-contractor',
  'kings-point-boca-roofing-contractor',
  'royal-palm-yacht-club-boca-raton-roofing',
  'st-andrews-country-club-boca-raton-roofing',
  // Deerfield Beach (1)
  'deerfield-beach-commercial-roofing',
  // Delray Beach + Highland Beach (4)
  'delray-beach-roof-replacement',
  'delray-beach-tile-roof-contractor',
  'highland-beach-roof-replacement',
  'historic-delray-roofing',
  // Lake Worth Beach (4)
  'lake-worth-beach-coastal-roofing',
  'lake-worth-beach-flat-roof-replacement',
  'lake-worth-beach-historic-roofing',
  'lake-worth-beach-roof-insurance-claim',
  // Lighthouse Point (2)
  'lighthouse-point-roof-replacement',
  'lighthouse-point-tile-roof-replacement',
  // Palm Beach County / Oceanfront (2)
  'oceanfront-roof-replacement-palm-beach-county',
  'palm-beach-county-roof-insurance-claim',
  // Pompano Beach (3)
  'palm-aire-pompano-beach-roofing',
  'pompano-beach-commercial-roofing',
  'pompano-beach-tile-roof-replacement',
  // Wellington (5)
  'olympia-wellington-roofing',
  'wellington-equestrian-estate-roofing',
  'wellington-hoa-roof-replacement',
  'wellington-metal-roofing',
  'wellington-roof-insurance-claim',
  'wellington-tile-roof-replacement',
  // West Boca Raton (1)
  'west-boca-raton-roof-replacement',
  // West Palm Beach (5)
  'west-palm-beach-commercial-roofing',
  'west-palm-beach-historic-roofing',
  'west-palm-beach-roof-insurance-claim',
  'west-palm-beach-tile-roof-replacement',
  'west-palm-beach-waterfront-roofing',
];

// Title patterns that indicate the prerender did NOT successfully replace
// the Vite shell title — i.e. Netlify is serving the bare SPA shell for
// this slug. Anything matching these is a verifier failure.
const VITE_SHELL_TITLE_PATTERNS = [
  /^Roofing Contractor \| Broward & Palm Beach \| All Phase USA$/,
  /^All Phase Construction USA$/, // legacy fallback
];

function verifySpaShellArtifacts(slugs) {
  const mode = (process.env.SPA_SHELL_VERIFIER || 'fail').toLowerCase();
  const ok = [];
  const missing = [];
  const stale = [];

  for (const slug of slugs) {
    const filePath = path.join(distDir, slug, 'index.html');
    if (!fs.existsSync(filePath)) {
      missing.push(slug);
      continue;
    }
    const html = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : '(no <title> tag)';
    const isStale = VITE_SHELL_TITLE_PATTERNS.some((re) => re.test(title));
    if (isStale) {
      stale.push({ slug, title });
    } else {
      ok.push({ slug, title });
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(`🔍  SPA-shell-victim verifier (mode=${mode})`);
  console.log('='.repeat(70));
  console.log(`   Checked: ${slugs.length} slugs`);
  console.log(`   ✅ Unique title:        ${ok.length}`);
  console.log(`   ❌ Missing dist file:   ${missing.length}`);
  console.log(`   ❌ Vite-shell title:    ${stale.length}`);

  if (missing.length) {
    console.error('\n❌ MISSING dist/<slug>/index.html (no prerender output written):');
    for (const s of missing) console.error(`   - ${s}`);
  }
  if (stale.length) {
    console.error('\n❌ STALE Vite-shell title (prerender wrote file but title was not replaced):');
    for (const { slug, title } of stale) {
      console.error(`   - ${slug}    title="${title}"`);
    }
  }

  const failed = missing.length + stale.length;
  if (failed === 0) {
    console.log(`\n✅  All ${slugs.length} SPA-shell-victim slugs prerendered with unique titles.`);
    console.log('='.repeat(70) + '\n');
    return;
  }

  if (mode === 'warn') {
    console.warn(`\n⚠️  SPA_SHELL_VERIFIER=warn — ${failed} failure(s) found but build will continue.`);
    console.log('='.repeat(70) + '\n');
    return;
  }

  console.log('='.repeat(70) + '\n');
  throw new Error(
    `SPA-shell-victim verifier FAILED: ${missing.length} missing, ${stale.length} stale. ` +
    `See diagnostic output above. Set SPA_SHELL_VERIFIER=warn to override.`
  );
}

async function generateStaticFiles() {
  console.log('📋  Generating 3-Silo Lead Generation Architecture...\n');

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  let totalPages = 0;

  // 1. Generate Homepage
  // Homepage uses explicit metadata (NOT from getSEOMetadata fallback)
  // This ensures title is controlled by index.html + runtime metadata
  const homeHTML = createHTMLTemplate(
    'Roof Replacement in Broward & Palm Beach | All Phase',
        'Roof replacement in Broward & Palm Beach County. Dual-licensed, HVHZ-certified. Tile, metal, shingle, flat & commercial. Free estimates. (754) 227-5605.',
    'https://allphaseconstructionfl.com',
    homepageContent(),
    {"@context":"https://schema.org","@type":"WebSite","@id":"https://allphaseconstructionfl.com/#website","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com","description":"HVHZ-certified, dual-licensed roofing contractor serving Broward and Palm Beach County","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://allphaseconstructionfl.com/?q={search_term_string}"},"query-input":"required name=search_term_string"}}
  );
  // HOMEPAGE SAFETY: Write to dist/index.html (was public/, now changed for deployment)
  // This WILL overwrite the Vite shell, which is intentional for prerendering
  const homePath = path.join(publicDir, 'index.html');
  console.log('🔍 DEBUG: About to write homepage to:', homePath);
  try {
    fs.writeFileSync(homePath, homeHTML);
    console.log('✅ Generated: dist/index.html');
    console.log('  File exists after write?', fs.existsSync(homePath));
    console.log('  File size:', fs.statSync(homePath).size, 'bytes');
  } catch (err) {
    console.error('✅ ERROR writing homepage:', err);
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
  ,
  '/roof-repair': {
    faqs: [
      { question: 'How quickly can you respond to emergency roof repairs?', answer: 'We offer same-day emergency response throughout Broward and Palm Beach County. Call (754) 227-5605 and we can dispatch a crew within 2-4 hours for an active leak.' },
      { question: 'Does homeowner insurance cover roof repair in Florida?', answer: 'Most Florida homeowner policies cover storm and wind damage. We work directly with insurance adjusters and can document damage for your claim at no extra charge.' },
      { question: 'How do I know if I need a repair or full replacement?', answer: 'If your roof is under 15 years old and damage is localized, repair is usually the right call. Our free inspection identifies whether targeted repair or full replacement delivers better value.' },
      { question: 'Are you licensed for roof repairs in Broward and Palm Beach County?', answer: 'Yes. All Phase Construction USA holds Florida State Certified Roofing Contractor license CCC-1331464, covering all repair work in Broward and Palm Beach County.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Roof Repair', url: 'https://allphaseconstructionfl.com/roof-repair' }
    ]
  },
  '/tile-roofing': {
    faqs: [
      { question: 'How long does tile roofing last in South Florida?', answer: 'Concrete and clay tile roofs typically last 40-50 years in South Florida when properly maintained. Their mass and profile provide excellent wind resistance in HVHZ conditions.' },
      { question: 'Can broken roof tiles be replaced individually?', answer: 'Yes. Individual tiles can be replaced without disturbing the full roof, making repairs cost-effective. We stock a wide range of profiles and colors to match existing installations.' },
      { question: 'Are tile roofs approved in HVHZ areas like Broward County?', answer: 'Yes. Concrete and clay tile systems with compliant underlayments and fastening patterns meet Broward and Palm Beach County 146 mph wind load requirements.' },
      { question: 'How much does tile roofing cost in South Florida?', answer: 'Tile roofing typically runs $10-$18 per square foot installed, depending on profile and material. Concrete tile is generally less expensive than clay while offering comparable durability.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Tile Roofing', url: 'https://allphaseconstructionfl.com/tile-roofing' }
    ]
  },
  '/commercial-roofing': {
    faqs: [
      { question: 'What commercial roofing systems do you install?', answer: 'We install TPO, PVC, modified bitumen, metal panel, and built-up roofing systems for flat and low-slope commercial buildings throughout Broward and Palm Beach County.' },
      { question: 'Do you handle commercial roofing in HVHZ zones?', answer: 'Yes. All our commercial installations meet Florida Building Code HVHZ requirements. We carry Florida General Contractor license CGC-1526236 in addition to our roofing license.' },
      { question: 'Can commercial roofing be done without disrupting business operations?', answer: 'In most cases yes. We schedule commercial work around your operating hours and can phase large projects to minimize disruption to tenants and customers.' },
      { question: 'How long does a commercial roof installation take?', answer: 'A typical commercial roof replacement takes 3-7 days depending on square footage and system type. We provide a detailed project schedule before work begins.' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Services', url: 'https://allphaseconstructionfl.com/roofing-services' },
      { name: 'Commercial Roofing', url: 'https://allphaseconstructionfl.com/commercial-roofing' }
    ]
  },
  '/residential-roofing': {
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
};

const CITY_PAGE_SCHEMAS = {
  '/locations/deerfield-beach': { directSchema: [{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://allphaseconstructionfl.com/locations/deerfield-beach#localbusiness","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com","telephone":"(754) 227-5605","email":"info@allphasesfl.com","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.3187,"longitude":-80.1342},"image":"https://allphaseconstructionfl.com/logo.png","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"138","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"],"areaServed":[{"@type":"City","name":"Deerfield Beach"},{"@type":"AdministrativeArea","name":"Broward County"},{"@type":"AdministrativeArea","name":"Palm Beach County"}],"foundingDate":"2005","numberOfEmployees":{"@type":"QuantitativeValue","minValue":25,"maxValue":50}},{"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/deerfield-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/deerfield-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.3187,"longitude":-80.1342},"areaServed":[{"@type":"City","name":"Deerfield Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"138","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]}] },
  '/locations/fort-lauderdale': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/fort-lauderdale#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/fort-lauderdale","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1224,"longitude":-80.1373},"areaServed":[{"@type":"City","name":"Fort Lauderdale","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/boca-raton': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/boca-raton#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/boca-raton","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.3683,"longitude":-80.1289},"areaServed":[{"@type":"City","name":"Boca Raton","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/coral-springs': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/coral-springs#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/coral-springs","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2709,"longitude":-80.2706},"areaServed":[{"@type":"City","name":"Coral Springs","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/pompano-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/pompano-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/pompano-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2379,"longitude":-80.1248},"areaServed":[{"@type":"City","name":"Pompano Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/hollywood': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/hollywood#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/hollywood","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.0112,"longitude":-80.1495},"areaServed":[{"@type":"City","name":"Hollywood","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/coconut-creek': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/coconut-creek#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/coconut-creek","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2509,"longitude":-80.1789},"areaServed":[{"@type":"City","name":"Coconut Creek","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/west-palm-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/west-palm-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/west-palm-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.7153,"longitude":-80.0534},"areaServed":[{"@type":"City","name":"West Palm Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/wellington': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/wellington#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/wellington","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.659,"longitude":-80.2686},"areaServed":[{"@type":"City","name":"Wellington","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/boynton-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/boynton-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/boynton-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.5317,"longitude":-80.0905},"areaServed":[{"@type":"City","name":"Boynton Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/delray-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/delray-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/delray-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.4615,"longitude":-80.0728},"areaServed":[{"@type":"City","name":"Delray Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/plantation': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/plantation#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/plantation","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1276,"longitude":-80.2331},"areaServed":[{"@type":"City","name":"Plantation","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/sunrise': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/sunrise#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/sunrise","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.167,"longitude":-80.2561},"areaServed":[{"@type":"City","name":"Sunrise","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/weston': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/weston#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/weston","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1003,"longitude":-80.3997},"areaServed":[{"@type":"City","name":"Weston","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/lake-worth-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/lake-worth-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/lake-worth-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.6148,"longitude":-80.0575},"areaServed":[{"@type":"City","name":"Lake Worth Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"136","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/palm-beach': { directSchema: [{"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/palm-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/palm-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.7056,"longitude":-80.0364},"areaServed":[{"@type":"City","name":"Palm Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"150","bestRating":"5"},"priceRange":"$$-$$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236"]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Palm Beach require architectural review board approval for roofing projects?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Town of Palm Beach requires roofing projects to be reviewed by the Architectural Commission (ARCOM). Material selection, tile profiles, colors, and visual appearance must meet the town's architectural standards. Properties in historic districts face additional Landmarks Preservation Commission review. All Phase Construction USA prepares complete ARCOM submissions before beginning work."}},{"@type":"Question","name":"What roofing materials are most common on Palm Beach estates?","acceptedAnswer":{"@type":"Answer","text":"Barrel tile (S-tile or Spanish tile) is the signature roofing material for Palm Beach's Mediterranean Revival architecture. Flat concrete tile, standing seam metal, and specialty profiles are also common. All materials must meet both Florida Building Code wind resistance requirements and Palm Beach's architectural standards."}},{"@type":"Question","name":"How does salt air affect roofs on Palm Beach island?","acceptedAnswer":{"@type":"Answer","text":"Palm Beach sits on a narrow barrier island less than half a mile wide, placing every property in the extreme salt corrosion zone. Salt-laden ocean air attacks metal fasteners, flashing, and drip edges. All Phase Construction USA specifies stainless steel fasteners, copper or aluminum flashing, and marine-grade underlayment on every Palm Beach project to prevent premature corrosion failures."}},{"@type":"Question","name":"Why is a dual-licensed contractor important for Palm Beach roofing?","acceptedAnswer":{"@type":"Answer","text":"Palm Beach's historic and estate-class properties often have complex structural conditions beneath the roof surface. A dual-licensed contractor (CCC roofing + CGC general) can evaluate and repair both the roofing system and the underlying structure — trusses, decking, connections — under one contract. Single-license roofers must stop and hire a separate general contractor when structural issues are discovered."}},{"@type":"Question","name":"How much does a roof replacement cost in Palm Beach?","acceptedAnswer":{"@type":"Answer","text":"Palm Beach roof replacement costs vary significantly based on property size, material selection, and ARCOM requirements. Estate-class barrel tile replacements with structural assessment and coastal-grade specifications typically represent a premium investment. All Phase Construction USA provides detailed, transparent proposals with itemized material and labor specifications. Use our online roof cost calculator for a preliminary estimate."}},{"@type":"Question","name":"Does All Phase Construction USA handle Palm Beach condominium reroofing?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our commercial roofing division handles multi-family and condominium association reroofing projects in Palm Beach, including detailed scope documentation for board approval, phased installation to minimize disruption to occupied units, and coordination with property management companies."}},{"@type":"Question","name":"Can a new roof reduce insurance premiums for Palm Beach homeowners?","acceptedAnswer":{"@type":"Answer","text":"Yes. A properly installed wind-code-compliant roof with enhanced wind mitigation features can qualify Palm Beach homeowners for significant insurance premium reductions. All Phase Construction USA provides wind mitigation inspection reports documenting every qualifying feature of your new roof system."}},{"@type":"Question","name":"How quickly can All Phase respond to emergency roof repairs in Palm Beach?","acceptedAnswer":{"@type":"Answer","text":"Our headquarters in Deerfield Beach enables same-day emergency response to Palm Beach. We provide 24/7 emergency tarping, leak mitigation, and storm damage assessment for Palm Beach properties, understanding the urgency of protecting high-value interiors from water intrusion."}}]}] },
  '/locations/lauderdale-by-the-sea': { directSchema: [{"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/lauderdale-by-the-sea#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/lauderdale-by-the-sea","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1924,"longitude":-80.0963},"areaServed":[{"@type":"City","name":"Lauderdale-By-The-Sea","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"150","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How often should roofs in Lauderdale-By-The-Sea be inspected?","acceptedAnswer":{"@type":"Answer","text":"Roofs in Lauderdale-By-The-Sea should be inspected at least once per year and after every major storm. As a barrier island community, salt air corrosion can cause hidden fastener and flashing deterioration that requires professional assessment to detect."}},{"@type":"Question","name":"What roofing materials last longest on Lauderdale-By-The-Sea's barrier island?","acceptedAnswer":{"@type":"Answer","text":"Concrete and clay tile roofing systems typically offer the longest lifespan in Lauderdale-By-The-Sea due to their natural resistance to salt corrosion. Standing seam metal roofing in aluminum or Galvalume also performs exceptionally well when specified with marine-grade concealed fastener systems."}},{"@type":"Question","name":"Why does salt air damage roofs in Lauderdale-By-The-Sea faster than inland areas?","acceptedAnswer":{"@type":"Answer","text":"Lauderdale-By-The-Sea sits directly on the Atlantic Ocean barrier island, placing every property within the extreme salt corrosion zone. Salt deposition rates are 10 to 50 times higher than properties just a few miles inland. This accelerates corrosion of galvanized fasteners, metal flashing, and drip edges — the hidden components that keep water out."}},{"@type":"Question","name":"Are roofing permits required in Lauderdale-By-The-Sea?","acceptedAnswer":{"@type":"Answer","text":"Yes, all roofing work in Lauderdale-By-The-Sea requires permits through the Broward County permitting system. The town also has specific requirements for construction staging, dumpster placement, and work hours that must be followed. All Phase Construction USA handles all permitting and inspection coordination."}},{"@type":"Question","name":"Does All Phase Construction USA use corrosion-resistant materials in Lauderdale-By-The-Sea?","acceptedAnswer":{"@type":"Answer","text":"Yes. We specify stainless steel ring-shank nails, marine-grade flashing, and salt-resistant underlayment on every Lauderdale-By-The-Sea project. Standard galvanized fasteners corrode rapidly in barrier island salt environments and can lead to catastrophic roof failures during storms."}},{"@type":"Question","name":"How close is All Phase Construction USA to Lauderdale-By-The-Sea?","acceptedAnswer":{"@type":"Answer","text":"Our headquarters in Deerfield Beach is just 4 miles north of Lauderdale-By-The-Sea, enabling the fastest response times in the area. Our crews work in Lauderdale-By-The-Sea regularly and are familiar with the community's access constraints, parking limitations, and HOA requirements."}},{"@type":"Question","name":"What is HVHZ certification and why does it matter for Lauderdale-By-The-Sea roofing?","acceptedAnswer":{"@type":"Answer","text":"HVHZ stands for High Velocity Hurricane Zone. Lauderdale-By-The-Sea is within this zone, requiring all roof installations to withstand 175+ mph winds. As a barrier island, properties face direct unobstructed hurricane wind paths from the Atlantic. HVHZ certification ensures your contractor understands and meets these stringent requirements."}},{"@type":"Question","name":"Can a new roof in Lauderdale-By-The-Sea reduce my insurance premiums?","acceptedAnswer":{"@type":"Answer","text":"Yes. A properly installed HVHZ-compliant roof with enhanced wind mitigation features can qualify Lauderdale-By-The-Sea homeowners for significant insurance premium reductions. All Phase Construction USA provides wind mitigation inspection reports documenting every qualifying feature of your new roof system."}}]}] },
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
    { path: '/roof-cost-calculator', title: 'South Florida Roof Cost Calculator' },
    { path: '/how-to-hire-roofing-contractor', title: 'How to Hire a Roofing Contractor' },
    { path: '/frequently-asked-questions', title: 'Frequently Asked Questions' },
    { path: '/broward-county-roof-replacement-guide', title: 'Broward County Roof Replacement Guide' },
    { path: '/palm-beach-county-roof-replacement-guide', title: 'Palm Beach County Roof Replacement Guide' },
    { path: '/boca-raton-roof-replacement-guide', title: 'Boca Raton Roof Replacement Guide' },
    { path: '/florida-roof-insurance-claims-guide', title: 'Florida Roof Insurance Claims Guide' },
    { path: '/roof-replacement-cost-florida', title: 'Roof Replacement Cost in Florida' },
    { path: '/single-ply-roofing', title: 'Single-Ply Roofing Systems' },
    { path: '/licensed-roofing-contractor', title: 'Licensed Roofing Contractor' },
    { path: '/south-florida-roofing-reviews', title: 'South Florida Roofing Reviews' },
    { path: '/flat-roof-moisture-infrared-inspection', title: 'Flat Roof Moisture & Infrared Inspection' }
  ];

  servicePages.forEach(({ path: pagePath, title }) => {
    const metadata = getSEOMetadata(pagePath);

        // Build JSON-LD schema array for pages that have FAQ/Breadcrumb data
    let jsonLdSchema = null;
    const schemaConfig = SERVICE_PAGE_SCHEMAS[pagePath] || CITY_PAGE_SCHEMAS[pagePath];
    if (schemaConfig) {
      if (schemaConfig.directSchema) {
        jsonLdSchema = schemaConfig.directSchema;
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
    }

    // Determine content based on page path
    let pageContent;
    if (pagePath === '/roofing-services') {
      pageContent = generateRoofingServicesContent();
    } else if (pagePath === '/roof-repair') {
      pageContent = generateRoofRepairHubContent();
    } else if (pagePath === '/roof-inspection') {
      pageContent = generateRoofInspectionHubContent();
    } else if (pagePath === '/blog') {
      pageContent = generateBlogHubContent();
    } else {
      pageContent = defaultServicePageContent(title);
    }

    const html = createHTMLTemplate(
      metadata.title || title,
      metadata.description || `Professional ${title.toLowerCase()} from All Phase Construction USA`,
      metadata.canonical || `https://allphaseconstructionfl.com${pagePath}`,
      pageContent,
      jsonLdSchema
    );

    const dir = path.join(publicDir, pagePath.substring(1));
    const filePath = path.join(dir, 'index.html');
    console.log(`🔍 DEBUG: Writing service page to: ${filePath}`);
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, html);
      console.log(`✅ Generated: dist${pagePath}/index.html`);
      console.log(`  File exists? ${fs.existsSync(filePath)}, Size: ${fs.statSync(filePath).size} bytes`);
    } catch (err) {
      console.error(`✅ ERROR writing ${pagePath}:`, err);
    }
    totalPages++;
  });


    // Roof Replacement - Custom Service Page
  const roofReplacementDir = path.join(distDir, 'roof-replacement');
  fs.mkdirSync(roofReplacementDir, { recursive: true });
  const roofReplacementContent = `
<h1>Roof Replacement Contractor in South Florida | All Phase USA</h1>
<p>All Phase Construction USA is a licensed roof replacement contractor serving Broward County and Palm Beach County. We specialize in HVHZ-compliant tile, metal, shingle, and flat roof replacement systems engineered for South Florida hurricane conditions.</p>
<p>As a dual-licensed contractor (CCC-1331464 & CGC-1526236), we provide structural engineering oversight on every roof replacement project. Call (754) 227-5605 for a free estimate.</p>

${companyAuthorityFooter()}
`.trim();
  fs.writeFileSync(path.join(roofReplacementDir, 'index.html'), createHTMLTemplate(
    'Roof Replacement South Florida (2026 Cost) | All Phase',
    'Roof replacement in South Florida. Broward & Palm Beach County. HVHZ-compliant. Tile, metal, shingle & flat. (754) 227-5605.',
    'https://allphaseconstructionfl.com/roof-replacement',
    roofReplacementContent
  ));
  console.log('✅ Prerendered: roof-replacement/index.html');
  totalPages++;
  // 2.3. Generate Additional Location Pages (not in main LOCATIONS array)
  console.log('\n🔍 Generating Additional Location Pages...\n');

  const additionalLocations = [
    { path: '/locations/gulf-stream', title: 'Gulf Stream, FL Roofing Services', city: 'Gulf Stream' },
    { path: '/locations/jupiter', title: 'Jupiter, FL Roofing Services', city: 'Jupiter' },
    { path: '/locations/lake-worth-beach', title: 'Lake Worth Beach, FL Roofing Services', city: 'Lake Worth Beach' },
    { path: '/locations/loxahatchee-groves', title: 'Loxahatchee Groves, FL Roofing Services', city: 'Loxahatchee Groves' },
    { path: '/locations/pembroke-park', title: 'Pembroke Park, FL Roofing Services', city: 'Pembroke Park' }
  ];

  additionalLocations.forEach(({ path: pagePath, title, city }) => {
    const canonical = `https://allphaseconstructionfl.com${pagePath}`;
    const description = `Roofing services in ${city}, FL. Roof installation, repair & maintenance. All Phase Construction USA. Licensed & insured. (754) 227-5605.`;

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
      <li><strong>Roof Repair</strong> ✅ Emergency and scheduled repairs for all roof types</li>
      <li><strong>Roof Replacement</strong> ✅ Complete reroof with HVHZ-compliant materials</li>
      <li><strong>Roof Inspection</strong> ✅ Thorough assessments for insurance and peace of mind</li>
      <li><strong>Preventive Maintenance</strong> ✅ Programs to extend your roof's lifespan</li>
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
    console.log(`✅ Generated: dist${pagePath}/index.html`);
    totalPages++;
  });

  // 2.4. Generate Top-5-Roofer Service Area Pages
  console.log('\n🔍 Generating Top-5-Roofer Service Area Pages...\n');

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
    const title = `Top 5 Roofers in ${city}, FL (2026) | All Phase`;
    const description = `All Phase is a top 5 roof replacement contractor in ${city}, FL. Dual-licensed (CCC & CGC), A+ BBB rated. Trusted by South Florida homeowners.`;

    const content = `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
  <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2;">
    Top 5 Roof Replacement Contractors in ${city}, Florida
  </h1>

  <p style="color: #374151; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">
    All Phase Construction USA is proud to be recognized as one of the top 5 roof replacement contractors serving ${city}. With over 20 years of experience, dual licensing (CCC-1331464 & CGC-1526236), and an A+ BBB rating, we've earned the trust of thousands of South Florida homeowners and businesses.
  </p>

  <div style="background: #f9fafb; padding: 2rem; border-left: 4px solid #dc2626; margin: 2rem 0;">
    <h2 style="color: #111827; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">What Makes Us a Top-Rated Roofer?</h2>
    <ul style="color: #374151; font-size: 1.05rem; line-height: 2; margin: 0; padding-left: 1.5rem;">
      <li><strong>Dual Licensing</strong> ✅ Both roofing (CCC) and general contracting (CGC) licenses</li>
      <li><strong>HVHZ Certified</strong> ✅ Approved for High-Velocity Hurricane Zone installations</li>
      <li><strong>Manufacturer Warranties</strong> ✅ Premium warranties on all materials and workmanship</li>
      <li><strong>Local Expertise</strong> ✅ Based in Deerfield Beach, serving South Florida since 2003</li>
      <li><strong>A+ BBB Rating</strong> ✅ Consistent 5-star reviews and customer satisfaction</li>
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
    console.log(`✅ Generated: dist${pagePath}/index.html`);
    totalPages++;
  });

  // 2.5. Generate Blog Post Pages from Sitemap
  console.log('\n🔍 Generating Blog Post Pages from Sitemap...\n');

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

        // Load blog-content.json for real titles
        let blogContentData = {};
        try {
          const bcPath = path.join(projectRoot, 'public', 'blog-content.json');
          if (fs.existsSync(bcPath)) {
            blogContentData = JSON.parse(fs.readFileSync(bcPath, 'utf-8'));
          }
        } catch (e) { /* fallback to slug */ }

        blogSlugs.forEach(slug => {
          // Get real title from blog content, or generate from slug
          let blogTitle = slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          // Prefer the title from the new {title, content} format; fall back
          // to scanning legacy string payloads for an <h1>. Keeps older
          // blog-content.json shapes working during a rolling deploy.
          const entry = blogContentData[slug];
          if (entry) {
            if (typeof entry === 'object' && entry.title) {
              blogTitle = entry.title;
            } else {
              const haystack = typeof entry === 'string' ? entry : (entry.content || '');
              const h1Match = haystack.match(/<h1>(.*?)<\/h1>/);
              if (h1Match) blogTitle = h1Match[1];
            }
          }

          // Build page title, capping at 60 chars including suffix
          const suffix = ' | All Phase';
          let pageTitle = blogTitle + suffix;
          if (pageTitle.length > 60) {
            // Trim the blog title to fit
            const maxTitleLen = 60 - suffix.length;
            pageTitle = blogTitle.substring(0, maxTitleLen).trim() + suffix;
          }

          const blogCanonical = `https://allphaseconstructionfl.com/blog/${slug}`;
          // Build blog description, ensuring it stays under 155 chars
          let blogDescription = `${blogTitle} — expert roofing insights from All Phase Construction USA, your dual-licensed South Florida roofer.`;
          if (blogDescription.length > 155) {
            blogDescription = `${blogTitle} — expert insights from All Phase USA, South Florida's dual-licensed roofer.`;
          }
          if (blogDescription.length > 155) {
            blogDescription = `${blogTitle.substring(0, 90)} — roofing tips from All Phase USA. Call (754) 227-5605.`;
          }

          const blogContent = `
<section id="seo-static-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <article>
    <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.2;">${blogTitle}</h1>

    <p style="color: #6b7280; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">${blogDescription}</p>

    <div style="background: #f9fafb; padding: 2rem; border-left: 4px solid #dc2626; margin: 2rem 0;">
      <p style="color: #374151; font-size: 1rem; line-height: 1.75; margin: 0;">
        <strong>Expert Roofing Insights</strong> from All Phase Construction USA ✅ Your trusted dual-licensed roofing contractor serving Broward and Palm Beach County.
      </p>
    </div>

    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
      At All Phase Construction USA, we bring decades of roofing expertise to South Florida homeowners and businesses. As a dual-licensed contractor (CCC-1331464 & CGC-1526236), we understand both roofing systems and structural engineering, ensuring every project meets the highest standards of quality and hurricane compliance.
    </p>

    <h2 style="color: #111827; font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem;">Professional Roofing Services</h2>
    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
      Whether you need roof repair, roof replacement, roof inspection, or preventive maintenance, our team delivers HVHZ-compliant workmanship backed by manufacturer warranties and our A+ BBB rating.
    </p>

    <div style="margin-top: 2rem; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">Related Services & Resources</h3>
      <p style="color: #374151; line-height: 1.75;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Roof Repair Services</a> · <a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Free Roof Inspections</a> · <a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Roof Cost Calculator</a> · <a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Replacement Process</a> · <a href="/learning-center" style="color: #dc2626; text-decoration: underline;">Learning Center</a></p>
      <p style="color: #374151; line-height: 1.75; margin-top: 0.5rem;"><strong>Top Locations:</strong> <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton</a> · <a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale</a> · <a href="/locations/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs</a> · <a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach</a> · <a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach</a></p>
    </div>

    <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 2rem 0;">
      <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Need Professional Roofing Service?</h3>
      <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact All Phase Construction USA for expert roofing services in Broward and Palm Beach County.</p>
      <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
    </div>
  </article>

  ${companyAuthorityFooter()}
</section>
          `.trim();

          const blogHTML = createHTMLTemplate(
            pageTitle,
            blogDescription,
            blogCanonical,
            blogContent
          );

          const blogDir = path.join(publicDir, 'blog', slug);
          fs.mkdirSync(blogDir, { recursive: true });
          fs.writeFileSync(path.join(blogDir, 'index.html'), blogHTML);
          console.log(`✅ Generated: dist/blog/${slug}/index.html`);
          totalPages++;
        });
      } else {
        console.log('✅ No blog posts found in sitemap\n');
      }
    } else {
      console.log('⚠️ Sitemap not found at public/sitemap.xml\n');
    }

    // Create a fallback for blog paths without prerendered HTML
    // Netlify returns 404 for unknown paths inside dist/blog/ directory.
    // Copy index.html as the 404 fallback so the SPA handles unknown blog slugs.
    const blogFallbackDir = path.join(distDir, 'blog');
    if (fs.existsSync(blogFallbackDir)) {
      const indexHtml = path.join(distDir, 'index.html');
      if (fs.existsSync(indexHtml)) {
        const fallbackDest = path.join(blogFallbackDir, '404.html');
        fs.copyFileSync(indexHtml, fallbackDest);
        console.log('✅ Created blog/404.html fallback (SPA for unknown blog slugs)');
      }
    }
  } catch (err) {
    console.log('⚠️ Error generating blog posts:', err.message);
  }

  // 2.6. Generate Blog Post Pages from Supabase (SPA-shell victims)
  // -----------------------------------------------------------------
  // The 9 blog posts listed in public/sitemap.xml are prerendered above.
  // Dozens more live only in Supabase — prior to this block they returned
  // the bare 18,504-byte Vite SPA shell to Googlebot.
  //
  // This block does TWO things, in order, so we always ship SOMETHING for
  // every known Supabase-only slug:
  //   1. Tries to query Supabase for the authoritative list + rich content
  //      (meta_title, meta_description, excerpt, full HTML content).
  //   2. Falls back to a hardcoded list of 38 known Supabase-only slugs
  //      (derived from the 2026-04-17 Screaming Frog SPA-shell audit) so
  //      the build keeps working even if Supabase is unreachable.
  //
  // Skips any slug already prerendered (from the sitemap loop above) so
  // this block only adds coverage — never overwrites existing output.
  console.log('\n🔍 Generating Blog Post Pages from Supabase (SPA-shell victims)...\n');

  try {
    // Authoritative fallback list — 38 Supabase-only slugs returning SPA
    // shell per the 2026-04-17 SF crawl. Keeps the build resilient to
    // Supabase being unreachable at build time.
    const KNOWN_SUPABASE_SLUGS = [
      'best-roofing-companies-south-florida',
      'can-a-screen-room-add-to-my-property-value',
      'can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida',
      'certified-vs-licensed-roofer-florida',
      'choosing-between-roof-repair-and-full-replacement',
      'common-roofing-myths-that-homeowners-still-believe',
      'complete-roof-replacement-process-10-steps',
      'do-i-need-a-roof-inspection-after-a-storm',
      'dont-replace-your-roof-restore-it-instead',
      'how-climate-change-is-impacting-roofing-choices-in-coastal-areas',
      'how-solar-impacts-property-taxes-in-florida',
      'how-to-choose-roofing-materials-for-large-scale-projects',
      'how-to-combine-solar-and-a-new-roof-for-maximum-efficiency',
      'how-to-plan-long-term-roofing-budgets-for-your-condo-association',
      'how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home',
      'how-to-protect-roof-decking-from-moisture-damage-during-construction',
      'how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive',
      'metal-roof-vs-shingles-florida-2026',
      'metal-roof-vs-tile-roof-south-florida-hurricanes',
      'metal-roofing-south-florida-what-homeowners-need-to-know',
      'professional-roof-inspection-south-florida',
      'residential-flat-roofs-types-options-and-florida-considerations',
      'roof-pricing-financing-guide',
      'roof-replacement-cost-broward-county-2026',
      'roof-replacement-cost-palm-beach-county-2026',
      'soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa',
      'the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet',
      'the-importance-of-proper-flashing-installation-to-prevent-roof-leaks',
      'the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles',
      'the-pros-and-cons-of-flat-roofs-for-florida-homes',
      'the-role-of-roof-pitch-in-water-drainage-and-design',
      'visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview',
      'what-is-roof-underlayment-and-why-does-it-matter',
      'what-makes-a-roof-hurricane-resistant',
      'what-south-florida-homeowners-get-wrong-about-roof-replacement',
      'whats-the-lifespan-of-a-solar-ready-roof',
      'why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa',
      'wind-mitigation-roof-south-florida',
    ];

    // Escape helper for HTML attribute values (title, meta content, etc.)
    const escapeAttr = (s) => String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Strip HTML tags from a string (for use in <title> and meta description)
    const stripHtml = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

    // postMetadata: slug -> { title, metaTitle, metaDescription, excerpt, content }
    const postMetadata = {};
    // supabaseCacheRows: slug -> full BlogPost-shaped row for the client-side
    // build cache (dist/blog-supabase-cache.json). Serves as BlogPostPage's
    // tertiary fallback when the runtime Supabase call fails (RLS blip, DNS,
    // CORS edge case) — keeps the 38 KNOWN_SUPABASE_SLUGS legible to users
    // and pinned to the deploy they landed on. Read by PR-17.
    const supabaseCacheRows = {};
    let supabaseReachable = false;

    try {
      const supabaseUrl = process.env.VITE_SUPABASE_URL
        || 'https://vsjebxljdhomgmqbqgdi.supabase.co';
      const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY
        || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzamVieGxqZGhvbWdtcWJxZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODkxMzcsImV4cCI6MjA4MjU2NTEzN30._gjIILl6LtMKnoERihdaRrQ-OQQ1rKoB_FXnoxRCW2Y';

      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: false } });

      // SELECT list is deliberately broad: the prerender loop below only needs
      // title/meta/excerpt/content, but BlogPostPage needs a full BlogPost row
      // shape. Asking for every field here lets us populate both the prerender
      // metadata AND the runtime cache from a single round-trip.
      const { data: supabasePosts, error: supabaseError } = await supabase
        .from('blog_posts')
        .select('id, slug, title, meta_title, meta_description, excerpt, content, featured_image, author, published_date, updated_at, categories, tags, faqs, related_post_ids, view_count')
        .eq('published', true);

      if (supabaseError) {
        console.warn(`  ⚠️ Supabase query failed: ${supabaseError.message}`);
        console.warn('  → Falling back to hardcoded slug list with boilerplate HTML.');
      } else if (supabasePosts && supabasePosts.length > 0) {
        supabaseReachable = true;
        console.log(`  ✓ Supabase returned ${supabasePosts.length} published posts`);
        supabasePosts.forEach(post => {
          if (!post.slug) return;
          postMetadata[post.slug] = {
            title: post.title,
            metaTitle: post.meta_title,
            metaDescription: post.meta_description,
            excerpt: post.excerpt,
            content: post.content,
          };
          // Mirror the full row into the client cache, coercing nullable
          // fields to the shapes BlogPostPage expects (string | array | 0).
          supabaseCacheRows[post.slug] = {
            id: String(post.id || `supabase-${post.slug}`),
            slug: post.slug,
            title: post.title || '',
            meta_title: post.meta_title || '',
            meta_description: post.meta_description || '',
            excerpt: post.excerpt || '',
            content: post.content || '',
            featured_image: post.featured_image || '',
            author: post.author || 'All Phase Construction USA Team',
            published_date: post.published_date || '',
            updated_at: post.updated_at || post.published_date || '',
            categories: Array.isArray(post.categories) ? post.categories : [],
            tags: Array.isArray(post.tags) ? post.tags : [],
            faqs: Array.isArray(post.faqs) ? post.faqs : [],
            related_post_ids: Array.isArray(post.related_post_ids) ? post.related_post_ids : [],
            view_count: typeof post.view_count === 'number' ? post.view_count : 0,
          };
        });
      } else {
        console.warn('  ⚠️ Supabase returned 0 rows (empty blog_posts table?)');
      }
    } catch (err) {
      console.warn(`  ⚠️ Supabase fetch error: ${err.message}`);
      console.warn('  → Falling back to hardcoded slug list with boilerplate HTML.');
    }

    // Write the build-time cache to dist/blog-supabase-cache.json regardless of
    // whether Supabase was reachable. When Supabase is down we ship an empty
    // object — the client falls through to blog-content.json synthesis and the
    // slug stub, matching PR-16 behavior. When Supabase is up, this cache
    // captures every published row as of build-time and BlogPostPage can
    // render the full post even if the runtime Supabase call fails.
    try {
      const cachePath = path.join(distDir, 'blog-supabase-cache.json');
      const cachePayload = {
        generatedAt: new Date().toISOString(),
        supabaseReachable,
        postCount: Object.keys(supabaseCacheRows).length,
        posts: supabaseCacheRows,
      };
      fs.writeFileSync(cachePath, JSON.stringify(cachePayload));
      console.log(
        `  ✓ Wrote build cache: dist/blog-supabase-cache.json (${cachePayload.postCount} posts, ${(fs.statSync(cachePath).size / 1024).toFixed(1)} KB)`,
      );
    } catch (cacheErr) {
      console.warn(`  ⚠️ Could not write blog-supabase-cache.json: ${cacheErr.message}`);
    }

    // Build the slug set: union of Supabase slugs (if reachable) + hardcoded fallback.
    // Hardcoded fallback guarantees we fix the 38 known victims even if Supabase is down.
    const slugSet = new Set(KNOWN_SUPABASE_SLUGS);
    Object.keys(postMetadata).forEach(slug => slugSet.add(slug));

    let createdCount = 0;
    let skippedCount = 0;

    for (const slug of Array.from(slugSet).sort()) {
      const blogDir = path.join(distDir, 'blog', slug);
      const blogHtmlPath = path.join(blogDir, 'index.html');

      // Skip if already prerendered by the sitemap-based loop above
      if (fs.existsSync(blogHtmlPath)) {
        skippedCount++;
        continue;
      }

      const meta = postMetadata[slug] || {};

      // Title: prefer Supabase title > slug → Title Case
      let blogTitle = stripHtml(meta.title);
      if (!blogTitle) {
        blogTitle = slug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }

      // Page title (what goes in <title>): prefer meta_title > "{title} | All Phase" (cap 60 chars)
      let pageTitle = stripHtml(meta.metaTitle) || (blogTitle + ' | All Phase');
      if (pageTitle.length > 60) {
        const suffix = ' | All Phase';
        const maxTitleLen = 60 - suffix.length;
        pageTitle = blogTitle.substring(0, maxTitleLen).trim() + suffix;
      }

      // Description: prefer meta_description > excerpt > boilerplate (cap 155 chars)
      let blogDescription = stripHtml(meta.metaDescription) || stripHtml(meta.excerpt);
      if (!blogDescription) {
        blogDescription = `${blogTitle} — expert roofing insights from All Phase Construction USA, your dual-licensed South Florida roofer.`;
      }
      if (blogDescription.length > 155) {
        blogDescription = blogDescription.substring(0, 152).trim() + '...';
      }

      const blogCanonical = `https://allphaseconstructionfl.com/blog/${slug}`;

      // Body content: prefer substantial Supabase content, fall back to boilerplate.
      // A "See blog/*" placeholder short-circuits to boilerplate too.
      const supabaseContent = String(meta.content || '').trim();
      const hasRealContent = supabaseContent.length >= 500
        && !supabaseContent.toLowerCase().startsWith('see blog/');
      const leadParagraph = stripHtml(meta.excerpt) || blogDescription;

      const richContent = `
<section id="seo-static-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <article>
    <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.2;">${escapeAttr(blogTitle)}</h1>
    <p style="color: #6b7280; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">${escapeAttr(leadParagraph)}</p>
    <div style="color: #374151; font-size: 1.05rem; line-height: 1.75;">${supabaseContent}</div>
    <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 2rem 0;">
      <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Need Professional Roofing Service?</h3>
      <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact All Phase Construction USA for expert roofing services in Broward and Palm Beach County.</p>
      <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
    </div>
    <div style="margin-top: 2rem; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">Related Services & Resources</h3>
      <p style="color: #374151; line-height: 1.75;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Roof Repair</a> · <a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Free Inspections</a> · <a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Cost Calculator</a> · <a href="/blog" style="color: #dc2626; text-decoration: underline;">All Articles</a></p>
    </div>
  </article>
  ${companyAuthorityFooter()}
</section>
      `.trim();

      const boilerplateContent = `
<section id="seo-static-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <article>
    <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.2;">${escapeAttr(blogTitle)}</h1>
    <p style="color: #6b7280; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">${escapeAttr(leadParagraph)}</p>
    <div style="background: #f9fafb; padding: 2rem; border-left: 4px solid #dc2626; margin: 2rem 0;">
      <p style="color: #374151; font-size: 1rem; line-height: 1.75; margin: 0;">
        <strong>Expert Roofing Insights</strong> from All Phase Construction USA ✅ Your trusted dual-licensed roofing contractor serving Broward and Palm Beach County.
      </p>
    </div>
    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
      At All Phase Construction USA, we bring decades of roofing expertise to South Florida homeowners and businesses. As a dual-licensed contractor (CCC-1331464 &amp; CGC-1526236), we understand both roofing systems and structural engineering, ensuring every project meets the highest standards of quality and hurricane compliance.
    </p>
    <h2 style="color: #111827; font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem;">Professional Roofing Services</h2>
    <p style="color: #374151; font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
      Whether you need roof repair, roof replacement, roof inspection, or preventive maintenance, our team delivers HVHZ-compliant workmanship backed by manufacturer warranties and our A+ BBB rating.
    </p>
    <div style="margin-top: 2rem; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">Related Services &amp; Resources</h3>
      <p style="color: #374151; line-height: 1.75;"><a href="/roof-repair" style="color: #dc2626; text-decoration: underline;">Roof Repair Services</a> · <a href="/roof-inspection" style="color: #dc2626; text-decoration: underline;">Free Roof Inspections</a> · <a href="/roof-cost-calculator" style="color: #dc2626; text-decoration: underline;">Roof Cost Calculator</a> · <a href="/roof-replacement-process" style="color: #dc2626; text-decoration: underline;">Replacement Process</a> · <a href="/blog" style="color: #dc2626; text-decoration: underline;">All Articles</a></p>
      <p style="color: #374151; line-height: 1.75; margin-top: 0.5rem;"><strong>Top Locations:</strong> <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton</a> · <a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale</a> · <a href="/locations/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs</a> · <a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach</a> · <a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach</a></p>
    </div>
    <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 2rem 0;">
      <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Need Professional Roofing Service?</h3>
      <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact All Phase Construction USA for expert roofing services in Broward and Palm Beach County.</p>
      <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
    </div>
  </article>
  ${companyAuthorityFooter()}
</section>
      `.trim();

      const blogHTML = createHTMLTemplate(
        escapeAttr(pageTitle),
        escapeAttr(blogDescription),
        blogCanonical,
        hasRealContent ? richContent : boilerplateContent
      );

      fs.mkdirSync(blogDir, { recursive: true });
      fs.writeFileSync(blogHtmlPath, blogHTML);
      console.log(`✅ Generated: dist/blog/${slug}/index.html${hasRealContent ? ' (rich)' : ' (boilerplate)'}`);
      createdCount++;
      totalPages++;
    }

    console.log(`\n📊 Supabase blog prerender: ${createdCount} new pages, ${skippedCount} already prerendered, supabaseReachable=${supabaseReachable}\n`);
  } catch (err) {
    console.log('⚠️ Error in Supabase blog prerender block:', err.message);
  }

  // 3. Generate 3-Silo City Pages for all cities
  const priorityCities = ['boca-raton', 'fort-lauderdale', 'coral-springs', 'pompano-beach',
                          'west-palm-beach', 'delray-beach', 'boynton-beach', 'deerfield-beach',
                          'parkland', 'coconut-creek', 'wellington'];

  console.log('\n🔍 Generating Location Pages from Single Source of Truth...\n');

  // ─── Local helpers for Wave-C content backfill (FAQ + Map + Testimonials) ───
  // Generates replacement-focused, insurance-free FAQ Q&A pairs for any city.
  // Used to backfill thin location pages with content depth + FAQPage rich results.
  const buildLocationFaqs = (cityName, location) => {
    const neighborhoods = (location.neighborhoods && location.neighborhoods.length)
      ? location.neighborhoods.slice(0, 4).join(', ')
      : null;
    const hvhzNote = location.hvhz
      ? `${cityName} sits inside Florida's High Velocity Hurricane Zone, so every roof we install is engineered to the HVHZ standard with 175+ mph wind ratings and enhanced fastening schedules.`
      : `${cityName} is in ${location.county || 'Palm Beach'} County, and we voluntarily build to HVHZ specification on every project for the highest wind-rated installation available.`;
    return [
      {
        question: `How long does a roof replacement take in ${cityName}?`,
        answer: `Most single-family roof replacements in ${cityName} are completed in 2 to 5 working days from tear-off to final cleanup. Larger homes, tile systems, and projects with structural deck repair can extend the timeline. We schedule a single mobilization and a single crew per project so your home is buttoned up each evening.`
      },
      {
        question: `What roofing materials do you install on ${cityName} homes?`,
        answer: `All Phase Construction USA installs architectural shingles, concrete and clay tile, standing seam metal, and TPO/PVC flat-roof systems on ${cityName} properties. Material selection depends on your roof pitch, structural capacity, neighborhood architecture, and long-term plans for the home. We walk every option with you before you sign anything.`
      },
      {
        question: `Are you licensed to replace roofs in ${cityName}?`,
        answer: `Yes. We hold both the Florida State Certified Roofing Contractor license (CCC-1331464) and the Certified General Contractor license (CGC-1526236). The dual license means we can repair the deck, trusses, fascia, and any structural condition we uncover during tear-off without subbing it out or stopping the job.`
      },
      {
        question: `Is ${cityName} in the High Velocity Hurricane Zone?`,
        answer: hvhzNote
      },
      {
        question: `Do you offer free roof inspections in ${cityName}?`,
        answer: `Yes. We provide free, no-pressure roof inspections throughout ${cityName} from our Deerfield Beach headquarters. A licensed estimator walks the roof, photographs every elevation, and gives you a written assessment with a transparent replacement quote — no obligation to move forward.`
      },
      {
        question: `What ${cityName} neighborhoods do you serve?`,
        answer: neighborhoods
          ? `We service all of ${cityName}, including ${neighborhoods}. Our crews work in this market every week and are familiar with local HOA requirements, ARC submittal packages, and access constraints.`
          : `We service all of ${cityName} and the surrounding ${location.county || 'South Florida'} communities. Our crews work in this market every week and are familiar with local HOA requirements and ARC submittal packages.`
      }
    ];
  };

  const buildFaqSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  });

  const buildFaqHtml = (cityName, faqs) => {
    const items = faqs.map(f => `
    <details style="margin-bottom: 0.75rem; padding: 1rem; border-left: 3px solid #dc2626; background: #fafafa;">
      <summary style="font-weight: bold; cursor: pointer; color: #111;">${f.question}</summary>
      <p style="margin-top: 0.75rem; line-height: 1.7; color: #333;">${f.answer}</p>
    </details>`).join('');
    return `
  <h2 id="${cityName.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-faqs">${cityName} Roof Replacement FAQs</h2>
  <div class="seo-location-faqs">${items}
  </div>`;
  };

  const buildMapHtml = (cityName) => {
    const q = encodeURIComponent(`${cityName}, FL`);
    return `
  <h2>Find Us Serving ${cityName}</h2>
  <p>All Phase Construction USA dispatches crews to ${cityName} from our Deerfield Beach headquarters at 590 Goolsby Blvd. Tap the map below for directions.</p>
  <div class="seo-location-map" style="position: relative; width: 100%; max-width: 720px; margin: 1rem 0;">
    <iframe
      title="Map of ${cityName}, FL service area"
      src="https://maps.google.com/maps?q=${q}&t=&z=12&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="320"
      style="border:0; border-radius: 8px;"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen></iframe>
  </div>`;
  };

  const TESTIMONIAL_POOL = [
    { name: 'Mike R.', text: "All Phase replaced our roof in four days flat. Crew was clean, the foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar." },
    { name: 'Linda S.', text: "We got three bids before calling All Phase. They were the only ones who actually got on the roof, photographed everything, and explained what we were paying for. Easy decision." },
    { name: 'Carlos M.', text: "Old tile roof, new concrete tile roof, zero surprises. They handled the permit, the HOA submittal, and even color-matched the ridge caps. Highly recommend." },
    { name: 'Jennifer P.', text: "Honest pricing and a real warranty. The crew protected our landscaping with tarps and left the driveway cleaner than they found it. We'd hire them again tomorrow." }
  ];

  const buildTestimonialsHtml = (cityName, location) => {
    const idx = Math.abs(cityName.split('').reduce((a,c)=>a+c.charCodeAt(0),0)) % TESTIMONIAL_POOL.length;
    const t1 = TESTIMONIAL_POOL[idx];
    const t2 = TESTIMONIAL_POOL[(idx+1) % TESTIMONIAL_POOL.length];
    const neighborhood = (location.neighborhoods && location.neighborhoods[0]) || cityName;
    const neighborhood2 = (location.neighborhoods && location.neighborhoods[1]) || cityName;
    return `
  <h2>What ${cityName} Homeowners Say</h2>
  <div class="seo-location-testimonials" style="display: grid; gap: 1rem; margin: 1rem 0;">
    <blockquote style="margin: 0; padding: 1rem 1.25rem; border-left: 4px solid #dc2626; background: #fff; font-style: italic;">
      <p style="margin: 0 0 0.5rem;">"${t1.text}"</p>
      <footer style="font-style: normal; font-weight: bold; color: #555;">— ${t1.name}, ${neighborhood}, ${cityName}</footer>
    </blockquote>
    <blockquote style="margin: 0; padding: 1rem 1.25rem; border-left: 4px solid #dc2626; background: #fff; font-style: italic;">
      <p style="margin: 0 0 0.5rem;">"${t2.text}"</p>
      <footer style="font-style: normal; font-weight: bold; color: #555;">— ${t2.name}, ${neighborhood2}, ${cityName}</footer>
    </blockquote>
  </div>`;
  };

  // ─── Orphan-fix: inbound links to geo / HOA / community / niche pages ───
  // Every standalone slug page generated elsewhere in this script (hoaCommunityPages,
  // lighthousePompanoPages, bocaFinalPages, stAndrewsPages, browardCommercialPages,
  // priority1-4Pages, boyntonBeachPages, lakeWorthPages, wellingtonPages,
  // westPalmPages) needs at least one inbound link from the corresponding city hub
  // at /locations/:city. Without that, Google treats them as orphans and de-prioritizes
  // crawl + indexing. This map is consumed inside LOCATIONS.forEach below to inject a
  // "Featured Communities & Specialty Services" link block into each parent city page.
  const COMMUNITY_LINKS_BY_CITY = {
    'boca-raton': [
      ['coastal-boca-raton-roofing-contractor', 'Coastal Boca Raton Roofing'],
      ['west-boca-raton-roof-replacement', 'West Boca Raton Roof Replacement'],
      ['north-boca-raton-roof-replacement', 'North Boca Raton Roof Replacement'],
      ['kings-point-boca-roofing-contractor', 'Kings Point Boca Roofing'],
      ['boca-raton-tile-re-roof', 'Boca Raton Tile Re-Roof'],
      ['boca-raton-wind-mitigation-roofing', 'Boca Raton Wind Mitigation Roofing'],
      ['boca-raton-commercial-roofing', 'Boca Raton Commercial Roofing'],
      ['boca-raton-metal-roofing', 'Boca Raton Metal Roofing'],
      ['boca-raton-luxury-estate-roofing', 'Boca Raton Luxury Estate Roofing'],
      ['broken-sound-boca-raton-roofing', 'Broken Sound Roofing'],
      ['royal-palm-yacht-club-boca-raton-roofing', 'Royal Palm Yacht & Country Club Roofing'],
      ['st-andrews-country-club-boca-raton-roofing', 'St. Andrews Country Club Roofing'],
    ],
    'deerfield-beach': [
      ['the-cove-deerfield-beach-roofing', 'The Cove Deerfield Beach Roofing'],
      ['deerfield-beach-commercial-roofing', 'Deerfield Beach Commercial Roofing'],
    ],
    'pompano-beach': [
      ['pompano-beach-coastal-roofing', 'Pompano Beach Coastal Roofing'],
      ['pompano-beach-tile-roof-replacement', 'Pompano Beach Tile Roof Replacement'],
      ['palm-aire-pompano-beach-roofing', 'Palm-Aire Pompano Beach Roofing'],
      ['pompano-beach-commercial-roofing', 'Pompano Beach Commercial Roofing'],
    ],
    'lighthouse-point': [
      ['lighthouse-point-roof-replacement', 'Lighthouse Point Roof Replacement'],
      ['lighthouse-point-tile-roof-replacement', 'Lighthouse Point Tile Roof Replacement'],
    ],
    'delray-beach': [
      ['delray-beach-roof-replacement', 'Delray Beach Roof Replacement'],
      ['delray-beach-tile-roof-contractor', 'Delray Beach Tile Roof Contractor'],
      ['historic-delray-roofing', 'Historic Delray Roofing'],
    ],
    'highland-beach': [
      ['highland-beach-roof-replacement', 'Highland Beach Roof Replacement'],
    ],
    'boynton-beach': [
      ['boynton-beach-oceanfront-roofing', 'Boynton Beach Oceanfront Roofing'],
      ['boynton-beach-tile-roof-replacement', 'Boynton Beach Tile Roof Replacement'],
      ['boynton-beach-commercial-roofing', 'Boynton Beach Commercial Roofing'],
      ['boynton-beach-roof-insurance-claim', 'Boynton Beach Roof Insurance Claim'],
      ['canyon-lakes-boynton-beach-roofing', 'Canyon Lakes Boynton Beach Roofing'],
    ],
    'lake-worth-beach': [
      ['lake-worth-beach-historic-roofing', 'Lake Worth Beach Historic Roofing'],
      ['lake-worth-beach-coastal-roofing', 'Lake Worth Beach Coastal Roofing'],
      ['lake-worth-beach-flat-roof-replacement', 'Lake Worth Beach Flat Roof Replacement'],
      ['lake-worth-beach-roof-insurance-claim', 'Lake Worth Beach Roof Insurance Claim'],
      ['lake-worth-beach-tile-roof-replacement', 'Lake Worth Beach Tile Roof Replacement'],
    ],
    'wellington': [
      ['olympia-wellington-roofing', 'Olympia Wellington Roofing'],
      ['wellington-equestrian-estate-roofing', 'Wellington Equestrian Estate Roofing'],
      ['wellington-hoa-roof-replacement', 'Wellington HOA Roof Replacement'],
      ['wellington-tile-roof-replacement', 'Wellington Tile Roof Replacement'],
      ['wellington-metal-roofing', 'Wellington Metal Roofing'],
      ['wellington-roof-insurance-claim', 'Wellington Roof Insurance Claim'],
    ],
    'west-palm-beach': [
      ['west-palm-beach-historic-roofing', 'West Palm Beach Historic Roofing'],
      ['west-palm-beach-waterfront-roofing', 'West Palm Beach Waterfront Roofing'],
      ['west-palm-beach-commercial-roofing', 'West Palm Beach Commercial Roofing'],
      ['west-palm-beach-tile-roof-replacement', 'West Palm Beach Tile Roof Replacement'],
      ['west-palm-beach-roof-insurance-claim', 'West Palm Beach Roof Insurance Claim'],
    ],
  };

  const buildCommunityLinksHtml = (citySlug, cityName) => {
    const entries = COMMUNITY_LINKS_BY_CITY[citySlug];
    if (!entries || !entries.length) return '';
    const items = entries
      .map(([slug, label]) => `<li><a href="/${slug}" style="color:#dc2626;text-decoration:underline;">${label}</a></li>`)
      .join('');
    return `
  <h2 id="${citySlug}-featured-communities">Featured Communities &amp; Specialty Services in ${cityName}</h2>
  <p>Dedicated landing pages for the ${cityName} neighborhoods, country clubs, and specialty roofing services we cover most often. Each page details the specific materials, HOA coordination, and scope we apply to that community or project type.</p>
  <ul style="line-height:1.75;">${items}</ul>`;
  };

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
      // Deerfield Beach HQ gets: RoofingContractor (with aggregateRating)
      // + BreadcrumbList. FAQPage is added by the Wave-C backfill below if
      // missing, so we don't duplicate it here. Home → Locations → Deerfield
      // Beach matches the breadcrumb convention used by county hubs and
      // landmark pages elsewhere in this script.
      hubSchema = [
        generateDeerfieldBeachSchema(),
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
            { '@type': 'ListItem', position: 3, name: 'Deerfield Beach', item: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
          ],
        },
      ];
    } else if (CITY_UNIQUE_CONTENT[slug]) {
      hubContent = generateEnhancedServiceHubContent(city, slug, location);
    } else {
      hubContent = generateServiceHubContent(city, slug, location);
    }

    // Check CITY_PAGE_SCHEMAS for enhanced schema (RoofingContractor + FAQPage)
    const citySchemaConfig = CITY_PAGE_SCHEMAS[`/locations/${slug}`];
    if (citySchemaConfig && !hubSchema) {
      hubSchema = citySchemaConfig.directSchema;
    }

    // ─── T3.10 Trust strip + T3.9 "Updated" timestamp ───
    // Insert immediately after the first </h1> in the hub content. Inserts a
    // 5-pill trust strip (CCC + CGC + HVHZ + BBB + Since 2005) plus a small
    // "Updated April 2026" stamp. Both are inline-styled for inclusion in the
    // prerendered HTML that Google reads, independent of React hydration.
    const trustStripHtml = `
  <div class="seo-trust-strip" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0 1rem; font-size: 0.875rem;">
    <span style="background: #fef2f2; color: #991b1b; padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 600;">✓ Dual-Licensed CCC + CGC</span>
    <span style="background: #fef2f2; color: #991b1b; padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 600;">✓ HVHZ-Certified</span>
    <span style="background: #fef2f2; color: #991b1b; padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 600;">✓ A+ BBB</span>
    <span style="background: #fef2f2; color: #991b1b; padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 600;">✓ Since 2005</span>
    <span style="background: #fef2f2; color: #991b1b; padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 600;">✓ 2,500+ Roofs</span>
  </div>
  <p class="seo-updated-stamp" style="font-size: 0.8125rem; color: #666; margin: 0 0 1.5rem;"><time datetime="2026-04">Updated April 2026</time> · Free inspections throughout South Florida.</p>`;
    if (hubContent.includes('</h1>')) {
      hubContent = hubContent.replace('</h1>', '</h1>' + trustStripHtml);
    }

    // ─── Wave-C backfill: inject FAQ + Map + Testimonials ───
    // Detect whether existing schema already includes a FAQPage; if not, add one.
    // Cities in CITIES_WITH_OWN_FAQ have a dedicated React component that owns
    // the FAQ (schema + visible content). Skipping Wave-C FAQ here prevents a
    // duplicate FAQPage block being emitted alongside the one the React
    // component appends on hydration — GSC flags duplicate FAQPage as invalid.
    const CITIES_WITH_OWN_FAQ = new Set(['deerfield-beach']);
    const existingArr = Array.isArray(hubSchema) ? hubSchema : (hubSchema ? [hubSchema] : []);
    const alreadyHasFaq = existingArr.some(s => s && s['@type'] === 'FAQPage');
    const faqs = buildLocationFaqs(city, location);
    const cityOwnsFaq = CITIES_WITH_OWN_FAQ.has(slug);
    if (!alreadyHasFaq && !cityOwnsFaq) {
      hubSchema = [...existingArr, buildFaqSchema(faqs)];
    }
    // ─── PR #3: County hub backlink block ───
    // Every city page links up to its parent county hub to concentrate
    // topical ranking signal onto /locations/{county}-county. This is the
    // single highest-leverage internal-linking change for the county-level
    // keyword targets.
    const countyHubSlug = location.county === 'Broward' ? 'broward-county' : 'palm-beach-county';
    const countyHubName = location.county === 'Broward' ? 'Broward County' : 'Palm Beach County';
    const countyBacklinkHtml = `
  <div style="background:#fef2f2;border-left:4px solid #dc2626;border-radius:0.5rem;padding:1.25rem 1.5rem;margin:2rem 0;">
    <div style="font-size:0.8125rem;color:#991b1b;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.375rem;">Part of Our ${countyHubName} Service Area</div>
    <p style="margin:0;color:#1f2937;">${city} is one of the cities we serve throughout ${countyHubName}. See our full <a href="/locations/${countyHubSlug}" style="color:#dc2626;font-weight:600;text-decoration:underline;">${countyHubName} roof replacement service area</a> for coverage details across every community.</p>
  </div>`;

    // Inject FAQ HTML + Map + Testimonials + County backlink + Community links before closing </section>
    // If the city owns its FAQ (via a dedicated React component), skip the
    // prerender's visible FAQ HTML too — React will render its own on hydration.
    const communityLinksHtml = buildCommunityLinksHtml(slug, city);
    const faqHtmlBlock = cityOwnsFaq ? '' : buildFaqHtml(city, faqs);
    const injectedBlock = `\n${countyBacklinkHtml}\n${buildMapHtml(city)}\n${communityLinksHtml}\n${buildTestimonialsHtml(city, location)}\n${faqHtmlBlock}\n`;
    if (hubContent.includes('</section>')) {
      hubContent = hubContent.replace('</section>', `${injectedBlock}</section>`);
    } else {
      hubContent = hubContent + injectedBlock;
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
    console.log(`✅ Generated: dist/locations/${slug}/index.html`);
    totalPages++;
  });

  // ─── PR #3: Generate prerendered county hub pages ───
  // /locations/palm-beach-county and /locations/broward-county render
  // client-side via React, but need prerendered HTML for Google to see
  // the county-level content. This block emits static HTML for both hubs
  // with full content, city lists, and (for PBC) landmark cards.
  const COUNTY_HUBS = [
    {
      slug: 'palm-beach-county',
      name: 'Palm Beach County',
      complianceLanguage: 'Palm Beach County wind-compliant',
      cities: [
        ['boca-raton', 'Boca Raton'],
        ['delray-beach', 'Delray Beach'],
        ['boynton-beach', 'Boynton Beach'],
        ['west-palm-beach', 'West Palm Beach'],
        ['palm-beach-gardens', 'Palm Beach Gardens'],
        ['jupiter', 'Jupiter'],
        ['wellington', 'Wellington'],
        ['lake-worth', 'Lake Worth'],
        ['palm-beach', 'Palm Beach'],
        ['greenacres', 'Greenacres'],
        ['lantana', 'Lantana'],
        ['highland-beach', 'Highland Beach'],
        ['loxahatchee-groves', 'Loxahatchee Groves'],
      ],
      includeLandmarks: true,
    },
    {
      slug: 'broward-county',
      name: 'Broward County',
      complianceLanguage: 'HVHZ-compliant',
      cities: [
        ['deerfield-beach', 'Deerfield Beach'],
        ['pompano-beach', 'Pompano Beach'],
        ['fort-lauderdale', 'Fort Lauderdale'],
        ['hollywood', 'Hollywood'],
        ['coral-springs', 'Coral Springs'],
        ['coconut-creek', 'Coconut Creek'],
        ['parkland', 'Parkland'],
        ['lighthouse-point', 'Lighthouse Point'],
        ['wilton-manors', 'Wilton Manors'],
        ['pembroke-pines', 'Pembroke Pines'],
        ['plantation', 'Plantation'],
        ['davie', 'Davie'],
        ['sunrise', 'Sunrise'],
        ['lauderdale-lakes', 'Lauderdale Lakes'],
        ['pembroke-park', 'Pembroke Park'],
        ['sea-ranch-lakes', 'Sea Ranch Lakes'],
        ['southwest-ranches', 'Southwest Ranches'],
      ],
      includeLandmarks: false,
    },
  ];

  // ─── County-hub FAQs: 6 per county, mirrors city-hub FAQ pattern ───
  // Needed so GSC picks up FAQPage enhancement on the county hubs — city hubs
  // already have it via buildLocationFaqs() but county hubs had no FAQ block.
  // Rich results impact: FAQ accordion in SERP for county-level queries
  // ("palm beach county roofer", "broward county roofing contractor").
  const buildCountyFaqs = (hub) => {
    const isBroward = hub.slug === 'broward-county';
    const hvhzNote = isBroward
      ? `Yes. All of Broward County is designated a High Velocity Hurricane Zone (HVHZ), which means every roof replacement we perform here is installed to the strictest wind-code requirements in Florida — 175+ mph wind-rated assemblies with enhanced fastening schedules, approved product control numbers, and impact-rated components.`
      : `Technically no — Palm Beach County sits just outside the official HVHZ boundary — but we voluntarily build every Palm Beach County roof to HVHZ specification anyway. The cost difference is minimal, the performance difference is substantial, and the wind credits on your insurance policy typically pay back the upgrade within a few years.`;
    const countyCities = hub.cities.map(([, name]) => name).join(', ');
    return [
      {
        question: `How long does a roof replacement take in ${hub.name}?`,
        answer: `Most single-family roof replacements across ${hub.name} are completed in 2 to 5 working days from tear-off to final cleanup. Larger estate homes, complex multi-level tile systems, and projects that require structural deck repair can extend to 1–2 weeks. We schedule a single crew and a single mobilization per project so the home is buttoned up every evening.`
      },
      {
        question: `Is ${hub.name} in the High Velocity Hurricane Zone?`,
        answer: hvhzNote
      },
      {
        question: `Are you licensed to replace roofs throughout ${hub.name}?`,
        answer: `Yes. We hold both the Florida State Certified Roofing Contractor license (CCC-1331464) and the Certified General Contractor license (CGC-1526236). That dual licensing covers every municipality in ${hub.name} and lets us address structural conditions under the roof deck — rotted sheathing, failed trusses, rusted tie-down straps — without subcontracting the work or stopping the job.`
      },
      {
        question: `What cities in ${hub.name} do you serve?`,
        answer: `We serve every major city in ${hub.name} including ${countyCities}. Crews dispatch from our Deerfield Beach headquarters at 590 Goolsby Blvd, which puts us in a same-day response radius for most projects in the county.`
      },
      {
        question: `Do you handle ${hub.name} permits, inspections, and HOA architectural review?`,
        answer: `Yes. Permitting, building-department inspections, and HOA architectural review committee submittals are part of every ${hub.name} project we run. We pull the permit under our dual license, coordinate inspection scheduling, and submit the full material-and-color package to the HOA in advance so tear-off doesn't start until everything is approved in writing.`
      },
      {
        question: `What roofing materials do you install on ${hub.name} homes?`,
        answer: `All Phase Construction USA installs concrete and clay tile, architectural and 3-tab shingles, standing-seam and ribbed metal, and TPO/PVC flat-roof systems throughout ${hub.name}. Material choice is driven by roof pitch, structural capacity, neighborhood architectural guidelines, and long-term insurance economics — we walk every realistic option with the homeowner before anyone signs.`
      }
    ];
  };

  COUNTY_HUBS.forEach((hub) => {
    const title = `${hub.name} Roof Replacement | All Phase USA`;
    const description = `Roof replacement in ${hub.name}, FL. Tile, metal, shingle & flat. ${hub.complianceLanguage}, dual-licensed. 2,500+ projects. Free estimate.`;
    const canonical = `https://allphaseconstructionfl.com/locations/${hub.slug}`;

    const cityLinksHtml = hub.cities
      .map(([citySlug, cityName]) => `<li><a href="/locations/${citySlug}">${cityName} Roof Replacement</a></li>`)
      .join('');

    let landmarkHtml = '';
    if (hub.includeLandmarks) {
      const hubLandmarks = LANDMARKS.filter((lm) => lm.citySlug === 'boca-raton');
      if (hubLandmarks.length) {
        landmarkHtml = `
  <h2>Featured Service Areas in Boca Raton</h2>
  <p>Detailed landmark-level coverage for the distinct roofing environments around some of Palm Beach County&rsquo;s most recognizable locations.</p>
  <ul>` + hubLandmarks.map((lm) =>
    `<li><a href="/locations/${lm.citySlug}/${lm.slug}">Roof Replacement Near ${lm.name}</a></li>`
  ).join('') + `</ul>`;
      }
    }

    const hubContent = `
<section>
  <nav aria-label="Breadcrumb" style="font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">
    <a href="/">Home</a> › <a href="/locations/deerfield-beach/service-area">Locations</a> › <span>${hub.name}</span>
  </nav>
  <h1>${hub.name} Roof Replacement</h1>
  <p style="font-size:1.125rem;">Dual-licensed roof replacement throughout ${hub.name}, Florida. Tile, metal, architectural shingle, and flat-roof systems built to ${hub.complianceLanguage} standards. Over 2,500 roofs completed since 2005 from our Deerfield Beach headquarters.</p>

  <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:0.5rem;padding:1rem 1.25rem;margin:1.5rem 0;">
    <strong style="color:#991b1b;">✓ Dual-Licensed CCC-1331464 + CGC-1526236</strong> · ${hub.complianceLanguage} · A+ BBB · 2,500+ Roofs · Since 2005
  </div>

  <h2>${hub.name} Cities We Serve</h2>
  <p>We handle roof replacement projects throughout ${hub.name}, coordinating HOA architectural review, permits, and inspections from our Deerfield Beach headquarters. Our dual CCC + CGC licensing lets us assess structural conditions under the roof deck before any tear-off begins.</p>
  <ul>${cityLinksHtml}</ul>

  ${landmarkHtml}

  ${hub.slug === 'palm-beach-county' ? `
  <h2>Palm Beach County Specialty Coverage</h2>
  <p>County-wide roofing resources for coastal exposure and insurance claim support across every city we serve.</p>
  <ul>
    <li><a href="/oceanfront-roof-replacement-palm-beach-county">Oceanfront Roof Replacement in Palm Beach County</a></li>
    <li><a href="/palm-beach-county-roof-insurance-claim">Palm Beach County Roof Insurance Claim Support</a></li>
  </ul>
  ` : ''}

  <h2>Why Choose All Phase in ${hub.name}</h2>
  <p>All Phase Construction USA has been replacing roofs across ${hub.name} since 2005. Our dual general-contractor and roofing-contractor licensing gives us the authority to address structural issues under the roof deck — rotted sheathing, failed trusses, rusted straps — that pure roofing contractors have to stop and subcontract out. That single advantage is why we handle the oldest and most complex housing stock in ${hub.name}.</p>

  <p><a href="tel:7542275605"><strong>Call (754) 227-5605</strong></a> for a free inspection anywhere in ${hub.name}.</p>

  ${(() => {
    const countyFaqs = buildCountyFaqs(hub);
    const items = countyFaqs.map(f => `
    <details style="margin-bottom: 0.75rem; padding: 1rem; border-left: 3px solid #dc2626; background: #fafafa;">
      <summary style="font-weight: bold; cursor: pointer; color: #111;">${f.question}</summary>
      <p style="margin-top: 0.75rem; line-height: 1.7; color: #333;">${f.answer}</p>
    </details>`).join('');
    return `
  <h2 id="${hub.slug}-faqs">${hub.name} Roof Replacement FAQs</h2>
  <div class="seo-location-faqs">${items}
  </div>`;
  })()}
</section>`;

    const schema = [
      {
        '@context': 'https://schema.org',
        '@type': 'RoofingContractor',
        name: 'All Phase Construction USA',
        telephone: '+17542275605',
        areaServed: { '@type': 'AdministrativeArea', name: `${hub.name}, Florida` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1590 SW 13th Ct',
          addressLocality: 'Deerfield Beach',
          addressRegion: 'FL',
          postalCode: '33442',
          addressCountry: 'US',
        },
        // aggregateRating added inline because baseOrgSchema is suppressed when
        // the page-specific schema is RoofingContractor-first (see schemaToInject
        // logic ~line 1820). Without this, county hubs lose the review-stars
        // rich snippet that every city page earns via baseOrgSchema. Mirrors
        // the Deerfield Beach HQ pattern at line ~1662. Values match
        // baseOrgSchema to keep the site-wide rating consistent. DO NOT add an
        // inline `review` array — that re-triggers the GSC "multiple aggregate
        // ratings" error documented in the baseOrgSchema comment.
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '136',
          bestRating: '5',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
          { '@type': 'ListItem', position: 3, name: hub.name, item: canonical },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: buildCountyFaqs(hub).map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      },
    ];

    const hubHTML = createHTMLTemplate(title, description, canonical, hubContent, schema, description);
    writeToPublicAndDist(`locations/${hub.slug}/index.html`, hubHTML);
    console.log(`✅ Generated: dist/locations/${hub.slug}/index.html (county hub)`);
    totalPages++;
  });

  // ─── Generate /locations/:city/:landmark landmark pages ───
  // Mirrors the city hub loop above. Uses landmark data from landmarks.ts
  // as single source of truth. Part of PR #2 geo-relevance push for
  // palm-beach-county-roofing-contractor.
  console.log('\n📍 Generating landmark geo-relevance pages...\n');
  LANDMARKS.forEach((landmark) => {
    const parentCity = LOCATIONS.find((l) => l.slug === landmark.citySlug);
    const cityDisplay = parentCity ? parentCity.city : landmark.citySlug;
    const isBroward = parentCity && parentCity.county === 'Broward';
    const complianceLanguage = isBroward ? 'HVHZ-compliant' : 'Palm Beach County wind-compliant';

    const defaultTitle = `Roofing Near ${landmark.name}, ${cityDisplay} FL | All Phase`;
    const defaultDescription = `Roof replacement serving ${landmark.name} and the surrounding ${cityDisplay}, FL area. Tile, metal, shingle & flat. ${complianceLanguage}, dual-licensed CCC + CGC. Free estimate. (754) 227-5605.`;
    const title = landmark.titleOverride || defaultTitle;
    const description = landmark.descriptionOverride || defaultDescription;
    const canonical = `https://allphaseconstructionfl.com/locations/${landmark.citySlug}/${landmark.slug}`;

    const nearbyHtml = (landmark.nearbyAreas && landmark.nearbyAreas.length)
      ? `<div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;margin:1.5rem 0;">
  <h3 style="margin-top:0;">Neighborhoods We Serve Near ${landmark.name}</h3>
  <ul>${landmark.nearbyAreas.map((a) => `<li>${a}</li>`).join('')}</ul>
</div>`
      : '';

    const faqsHtml = (landmark.faqs && landmark.faqs.length)
      ? `<h2>${landmark.name} Roof Replacement FAQs</h2>` +
        landmark.faqs.map((f) =>
          `<div style="margin-bottom:1.5rem;"><h3>${f.question}</h3><p>${f.answer}</p></div>`
        ).join('')
      : '';

    const countyHubLink = isBroward
      ? '<a href="/locations/broward-county">Broward County Roof Replacement</a>'
      : '<a href="/locations/palm-beach-county">Palm Beach County Roof Replacement</a>';

    const landmarkContent = `
<section>
  <nav aria-label="Breadcrumb" style="font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">
    <a href="/">Home</a> › <a href="/locations/deerfield-beach/service-area">Locations</a> › <a href="/locations/${landmark.citySlug}">${cityDisplay}</a> › <span>${landmark.name}</span>
  </nav>
  <h1>Roof Replacement Near ${landmark.name}</h1>
  <p style="font-size:1.125rem;">${landmark.shortDescriptor}</p>
  <h2>The ${landmark.name} Area</h2>
  <p>${landmark.localContext}</p>
  <h2>Roofing in This Part of ${cityDisplay}</h2>
  <p>${landmark.roofingAngle}</p>
  ${nearbyHtml}
  ${faqsHtml}
  <h2>Continue Exploring</h2>
  <p><a href="/locations/${landmark.citySlug}">Roof Replacement in ${cityDisplay}</a> · ${countyHubLink}</p>
  <p><a href="tel:7542275605"><strong>Call (754) 227-5605</strong></a> for a free inspection.</p>
</section>`;

    // Build FAQPage + BreadcrumbList schema
    const schemaArr = [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
          { '@type': 'ListItem', position: 3, name: cityDisplay, item: `https://allphaseconstructionfl.com/locations/${landmark.citySlug}` },
          { '@type': 'ListItem', position: 4, name: landmark.name, item: canonical },
        ],
      },
    ];
    if (landmark.faqs && landmark.faqs.length) {
      schemaArr.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: landmark.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    const landmarkHTML = createHTMLTemplate(
      title,
      description,
      canonical,
      landmarkContent,
      schemaArr,
      description
    );

    writeToPublicAndDist(`locations/${landmark.citySlug}/${landmark.slug}/index.html`, landmarkHTML);
    console.log(`✅ Generated: dist/locations/${landmark.citySlug}/${landmark.slug}/index.html`);
    totalPages++;
  });

  console.log('\n🔍 Generating 3-Silo City Pages (Repair + Inspection spokes)...\n');

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
    console.log(`✅ Generated: dist/roof-repair/${citySlug}/index.html`);
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
    console.log(`✅ Generated: dist/roof-inspection/${citySlug}/index.html`);
    totalPages++;
  });



    // Best Roofers Deerfield Beach - Premium Money Page
  const bestRoofersDFBDir = path.join(distDir, 'locations/deerfield-beach/best-roofers-deerfield-beach');
  fs.mkdirSync(bestRoofersDFBDir, { recursive: true });
  const bestRoofersDFBContent = `
  <h1>Top 5 Best Rated Roofers in Deerfield Beach, FL (2026)</h1>
  <p>Deerfield Beach stretches along the Atlantic coast and inland through established neighborhoods like the Cove area, Century Village, and the scenic Waterways community. Finding a trustworthy roofer in Deerfield Beach means understanding both coastal salt-air demands and the aging roof systems common in 1970s-80s developments. We evaluated dozens of licensed roofers and identified five that stand out for their HVHZ expertise, local track records, and transparent pricing.</p>
  <h2>Why Deerfield Beach Roofing Requires Specialized Expertise</h2>
  <p>Deerfield Beach is home to the 1,350-foot fishing pier and year-round beach recreation, but that ocean proximity creates significant roofing challenges. Properties near the Intracoastal and Atlantic face aggressive salt spray that corrodes standard fasteners within years, while inland neighborhoods in the Cove area and Waterways communities deal with aging roof systems from earlier development eras. Century Village, one of South Florida's largest 55+ communities, presents unique challenges where many original tile and shingle roofs are now 35+ years old. According to <a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NOAA's hurricane research</a>, Deerfield Beach falls within Broward County's High Velocity Hurricane Zone with design wind speeds exceeding 175 mph. Every roofing contractor in Deerfield Beach must carry HVHZ certification and understand marine-grade fastening systems.</p>
  <h2>Your List of the Top 5 Best Roofers in Deerfield Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Headquartered at 590 Goolsby Blvd in Deerfield Beach, dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed, 4.8/5 rating from 138+ verified reviews. In business since 2005, Tamko Pro Platinum certified.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong> &mdash; Broward County specialists offering residential and commercial roofing with focus on HVHZ-compliant systems.</li>
    <li><strong>Tiger Team Roofing</strong> &mdash; Local installer known for metal and tile roofing projects in coastal Broward communities.</li>
    <li><strong>Nast Roofing</strong> &mdash; Licensed contractor serving Deerfield Beach with comprehensive roof repair and replacement services.</li>
    <li><strong>Paul Bange Roofing</strong> &mdash; Established roofer with experience in HVHZ-compliant residential installations.</li>
  </ol>
  <h2>Roofing in Century Village, the Cove, and Waterways Communities</h2>
  <p>Century Village's 55+ population requires contractors who understand the specific needs of mature roof systems and often-restrictive HOA architectural guidelines. The Cove area, with its established family neighborhoods, features a mix of concrete tile and asphalt shingle systems, many now reaching 30-year replacement cycles. The Waterways community's canal-front properties demand marine-grade fastening systems and enhanced corrosion protection. All Phase Construction USA has completed hundreds of projects across all three neighborhoods, coordinating directly with HOAs and understanding each community's unique permitting and approval processes. Metal roofing systems rated for 175+ mph winds and concrete tile installations with stainless steel fasteners are standard recommendations for Deerfield Beach properties.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Deerfield Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does a roof replacement cost in Deerfield Beach?</h3>
  <p>Roof replacement in Deerfield Beach typically ranges from &#36;8,000 to &#36;16,000 for a standard residential home, depending on square footage, material choice, and whether your property is coastal or inland. Homes near the Intracoastal or in the Waterways command premium pricing due to marine-grade fastener and flashing requirements. All Phase Construction USA offers free inspections and competitive financing options.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material best handles Deerfield Beach's salt air and 175+ mph winds?</h3>
  <p>Metal roofing and high-impact concrete tile are the top choices for Deerfield Beach. Metal systems with standing seam construction and stainless steel fasteners last 40-50 years in coastal environments, while standard asphalt shingles deteriorate in 15-20 years. Concrete tile with proper underlayment and corrosion-resistant flashing protects historic homes in Century Village while meeting HVHZ compliance standards.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a roofer is HVHZ-certified for Deerfield Beach?</h3>
  <p>Check your contractor's Florida roofing license (CCC) or general contractor license (CGC) at myfloridalicense.com, then confirm their HVHZ certification. All Phase Construction USA holds CCC-1331464 and CGC-1526236, both verifiable in Florida's licensing database. Any contractor working in Deerfield Beach without HVHZ certification is operating outside compliance.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Deerfield Beach HOAs like Century Village enforce specific roofing rules?</h3>
  <p>Absolutely. Century Village, the Waterways, and the Cove area all maintain strict architectural guidelines governing roof color, material type, and installation specifications. We coordinate with each HOA's architectural committee before work begins, ensuring full compliance and preventing project delays or denial of approval.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/pompano-beach/best-roofers-pompano-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Pompano Beach</a></li>
    <li><a href="/locations/boca-raton/best-roofers-boca-raton" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boca Raton</a></li>
    <li><a href="/locations/coral-springs/best-roofers-coral-springs" style="color: #dc2626; text-decoration: underline;">Best Roofers in Coral Springs</a></li>
    <li><a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach Roofing Services</a></li>
    <li><a href="/roof-repair/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersDFBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Deerfield Beach FL (2026) | All Phase',
    'Looking for the best roofers in Deerfield Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach',
    bestRoofersDFBContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a roof replacement cost in Deerfield Beach?","acceptedAnswer":{"@type":"Answer","text":"Roof replacement in Deerfield Beach typically ranges from $8,000 to $16,000 for a standard residential home, depending on square footage, material choice, and whether your property is coastal or inland. Homes near the Intracoastal or in the Waterways command premium pricing due to marine-grade fastener and flashing requirements. All Phase Construction USA offers free inspections and competitive financing options."}},{"@type":"Question","name":"What roofing material best handles Deerfield Beach\'s salt air and 175+ mph winds?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing and high-impact concrete tile are the top choices for Deerfield Beach. Metal systems with standing seam construction and stainless steel fasteners last 40-50 years in coastal environments, while standard asphalt shingles deteriorate in 15-20 years. Concrete tile with proper underlayment and corrosion-resistant flashing protects historic homes in Century Village while meeting HVHZ compliance standards."}},{"@type":"Question","name":"How do I verify a roofer is HVHZ-certified for Deerfield Beach?","acceptedAnswer":{"@type":"Answer","text":"Check your contractor\'s Florida roofing license (CCC) or general contractor license (CGC) at myfloridalicense.com, then confirm their HVHZ certification. All Phase Construction USA holds CCC-1331464 and CGC-1526236, both verifiable in Florida\'s licensing database. Any contractor working in Deerfield Beach without HVHZ certification is operating outside compliance."}},{"@type":"Question","name":"Do Deerfield Beach HOAs like Century Village enforce specific roofing rules?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Century Village, the Waterways, and the Cove area all maintain strict architectural guidelines governing roof color, material type, and installation specifications. We coordinate with each HOA\'s architectural committee before work begins, ensuring full compliance and preventing project delays or denial of approval."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Deerfield Beach","item":"https://allphaseconstructionfl.com/locations/deerfield-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in Deerfield Beach","item":"https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/deerfield-beach/best-roofers-deerfield-beach/index.html');

  // Best Roofers Fort Lauderdale - Premium Money Page
  const bestRoofersFTLDir = path.join(distDir, 'locations/fort-lauderdale/best-roofers-fort-lauderdale');
  fs.mkdirSync(bestRoofersFTLDir, { recursive: true });
  const bestRoofersFTLContent = `
  <h1>Top 5 Best Rated Roofers in Fort Lauderdale, FL (2026)</h1>
  <p>Fort Lauderdale is South Florida's largest metropolitan roofing market, stretching from the Atlantic coast to inland communities like Las Olas, Victoria Park, and Coral Ridge. Finding a trustworthy roofer in Fort Lauderdale means accessing a contractor with proven expertise in both coastal salt-air challenges and the diverse architectural styles spanning from historic 1920s properties to modern luxury homes. We evaluated dozens of licensed contractors and identified five that consistently deliver quality, professionalism, and HVHZ compliance across Fort Lauderdale's neighborhoods.</p>
  <h2>Why Fort Lauderdale Roofing Demands HVHZ-Certified Expertise</h2>
  <p>Fort Lauderdale is home to the world-famous Las Olas Boulevard, a vibrant commercial and cultural hub, and the New River, which winds through historic neighborhoods featuring Mediterranean revival and tropical contemporary architecture. The city's waterfront properties &mdash; from the 6-mile beach to the scenic Intracoastal &mdash; face relentless salt spray and storm surge exposure. Victoria Park's tree-lined streets house vintage homes with aging roof systems, while Coral Ridge represents one of South Florida's most prestigious residential enclaves with complex architectural roofing requirements. Las Olas Beach Park and Harbor Branch provide landmarks for understanding storm exposure patterns. According to <a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NOAA's hurricane research</a>, Fort Lauderdale's entire jurisdiction falls within Broward County's High Velocity Hurricane Zone with design wind speeds exceeding 175 mph. Every roofing contractor operating in Fort Lauderdale must carry HVHZ certification and understand the advanced fastening and flashing systems required.</p>
  <h2>Your List of the Top 5 Best Roofers in Fort Lauderdale, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ completed roofs, 4.8/5 rating from 138+ reviews. Headquartered at 590 Goolsby Blvd in nearby Deerfield Beach for rapid response. Tamko Pro Platinum certified, in business since 2005.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong> &mdash; Established Broward contractor specializing in HVHZ-compliant metal, tile, and shingle systems across Fort Lauderdale's diverse neighborhoods.</li>
    <li><strong>Tiger Team Roofing</strong> &mdash; Local installer with extensive portfolio in coastal Fort Lauderdale properties, waterfront estates, and Las Olas residential projects.</li>
    <li><strong>Nast Roofing</strong> &mdash; Licensed contractor with decades of experience in Fort Lauderdale roof replacement, repair, and HVHZ compliance certification.</li>
    <li><strong>Paul Bange Roofing</strong> &mdash; Trusted residential roofer serving Fort Lauderdale with focus on quality installation and customer service.</li>
  </ol>
  <h2>Roofing in Las Olas, Victoria Park, and Coral Ridge</h2>
  <p>Las Olas properties require contractors who understand both historic preservation standards and modern hurricane protection requirements. Many homes feature clay tile roofs that are 40+ years old and nearing replacement cycles. Victoria Park's established neighborhoods, built primarily in the 1950s-1970s, feature conventional asphalt shingle and barrel tile systems now reaching end-of-life, presenting opportunities for impact-resistant upgrades. Coral Ridge, Fort Lauderdale's most prestigious community, demands premium materials and meticulous craftsmanship with strict HOA architectural review. All Phase Construction USA has completed hundreds of projects across all three neighborhoods, coordinating with architectural committees and understanding each community's unique aesthetic and compliance requirements. Properties near the Intracoastal and beach require marine-grade stainless steel fasteners and salt-resistant underlayment as standard specifications.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Fort Lauderdale</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Fort Lauderdale?</h3>
  <p>Fort Lauderdale roof replacement typically ranges from &#36;8,000 to &#36;16,000 for a standard residential home, depending on square footage, material choice, and neighborhood location. Waterfront properties in Coral Ridge and near Las Olas command premium pricing due to enhanced material and fastening system requirements. All Phase Construction USA offers free inspections, transparent pricing, and flexible financing.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What's the best roofing material for Fort Lauderdale's 175+ mph wind design standards?</h3>
  <p>Standing seam metal roofing and architectural impact-resistant asphalt shingles are top choices for Fort Lauderdale's HVHZ compliance. Concrete tile with reinforced fastening systems protects historic properties in Victoria Park and Las Olas while meeting wind requirements. Metal systems with marine-grade stainless steel fasteners and corrosion-resistant flashing last 40-50 years, significantly outperforming standard shingles in coastal environments.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a roofer has proper HVHZ certification for Fort Lauderdale?</h3>
  <p>Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license, then verify HVHZ certification at myfloridalicense.com. All Phase Construction USA carries CCC-1331464 and CGC-1526236, both verifiable in Florida's database. Any contractor without HVHZ certification cannot legally work on Fort Lauderdale properties.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Fort Lauderdale neighborhoods like Coral Ridge and Las Olas have strict roofing requirements?</h3>
  <p>Yes. Coral Ridge, Las Olas, and Victoria Park all enforce strict architectural guidelines governing color, material type, profile, and installation methods. We coordinate directly with each neighborhood's architectural review board before any work begins, ensuring approvals and preventing costly project delays.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/pompano-beach/best-roofers-pompano-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Pompano Beach</a></li>
    <li><a href="/locations/hollywood/best-roofers-hollywood" style="color: #dc2626; text-decoration: underline;">Best Roofers in Hollywood</a></li>
    <li><a href="/locations/deerfield-beach/best-roofers-deerfield-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Deerfield Beach</a></li>
    <li><a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale Roofing Services</a></li>
    <li><a href="/roof-repair/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale Roof Repair</a></li>
    <li><a href="/roof-inspection/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersFTLDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase',
    'Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale',
    bestRoofersFTLContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Fort Lauderdale?","acceptedAnswer":{"@type":"Answer","text":"Fort Lauderdale roof replacement typically ranges from $8,000 to $16,000 for a standard residential home, depending on square footage, material choice, and neighborhood location. Waterfront properties in Coral Ridge and near Las Olas command premium pricing due to enhanced material and fastening system requirements. All Phase Construction USA offers free inspections, transparent pricing, and flexible financing."}},{"@type":"Question","name":"What\'s the best roofing material for Fort Lauderdale\'s 175+ mph wind design standards?","acceptedAnswer":{"@type":"Answer","text":"Standing seam metal roofing and architectural impact-resistant asphalt shingles are top choices for Fort Lauderdale\'s HVHZ compliance. Concrete tile with reinforced fastening systems protects historic properties in Victoria Park and Las Olas while meeting wind requirements. Metal systems with marine-grade stainless steel fasteners and corrosion-resistant flashing last 40-50 years, significantly outperforming standard shingles in coastal environments."}},{"@type":"Question","name":"How do I verify a roofer has proper HVHZ certification for Fort Lauderdale?","acceptedAnswer":{"@type":"Answer","text":"Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license, then verify HVHZ certification at myfloridalicense.com. All Phase Construction USA carries CCC-1331464 and CGC-1526236, both verifiable in Florida\'s database. Any contractor without HVHZ certification cannot legally work on Fort Lauderdale properties."}},{"@type":"Question","name":"Do Fort Lauderdale neighborhoods like Coral Ridge and Las Olas have strict roofing requirements?","acceptedAnswer":{"@type":"Answer","text":"Yes. Coral Ridge, Las Olas, and Victoria Park all enforce strict architectural guidelines governing color, material type, profile, and installation methods. We coordinate directly with each neighborhood\'s architectural review board before any work begins, ensuring approvals and preventing costly project delays."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Fort Lauderdale","item":"https://allphaseconstructionfl.com/locations/fort-lauderdale"},{"@type":"ListItem","position":3,"name":"Best Roofers in Fort Lauderdale","item":"https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale"}]}]')
  ));
  console.log('✅ Prerendered: locations/fort-lauderdale/best-roofers-fort-lauderdale/index.html');

  // Best Roofers West Palm Beach - Premium Money Page
  const bestRoofersWPBDir = path.join(distDir, 'locations/west-palm-beach/best-roofers-west-palm-beach');
  fs.mkdirSync(bestRoofersWPBDir, { recursive: true });
  const bestRoofersWPBContent = `
  <h1>Top 5 Best Rated Roofers in West Palm Beach, FL (2026)</h1>
  <p>West Palm Beach is Palm Beach County's largest city and seat of government, stretching from the Intracoastal Waterway across diverse neighborhoods including Flamingo Park, Northwood, and El Cid. Finding a trustworthy roofer in West Palm Beach means accessing a contractor with expertise in both historic preservation and modern hurricane protection, managing aging roof systems across a city with deep architectural heritage. We evaluated dozens of licensed contractors and identified five that consistently deliver quality work, transparent pricing, and wind-borne debris region compliance.</p>
  <h2>Why West Palm Beach Roofing Demands Wind-Borne Debris Region Expertise</h2>
  <p>West Palm Beach is home to Norton Museum of Art, the vibrant downtown arts district, and the scenic Lake Worth Lagoon, but its location in Palm Beach County's wind-borne debris region presents unique roofing challenges. Flamingo Park, built in the 1950s-1970s, features predominantly concrete tile and barrel tile systems now 50+ years old and approaching replacement cycles. The Northwood Historic District preserves Mediterranean revival and period revival architecture requiring specialized contractors experienced with historic roof profiles and materials. El Cid represents the city's established residential market with diverse roof age and condition. According to <a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NOAA's hurricane research</a>, West Palm Beach experiences design wind speeds of 140+ mph in the wind-borne debris region. Every roofing contractor must understand enhanced fastening systems and impact-resistant materials required by Florida Building Code.</p>
  <h2>Your List of the Top 5 Best Roofers in West Palm Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), wind-borne debris region certified, 2,500+ completed roofs, 4.8/5 rating from 138+ reviews. Serves Palm Beach County with expertise in historic preservation and modern impact-resistant systems. In business since 2005, Tamko Pro Platinum certified.</li>
    <li><strong>Kelly Roofing</strong> &mdash; Established Palm Beach County contractor specializing in tile and metal roofing systems across West Palm Beach's diverse neighborhoods.</li>
    <li><strong>Roof Top Services</strong> &mdash; Licensed installer with extensive experience in residential roof repair and replacement across West Palm Beach's historic districts.</li>
    <li><strong>Altec Roofing</strong> &mdash; Palm Beach roofer known for quality installations and professionalism in coastal and inland communities.</li>
    <li><strong>Crowther Roofing</strong> &mdash; Trusted contractor serving West Palm Beach with comprehensive roofing solutions and wind-borne debris compliance.</li>
  </ol>
  <h2>Roofing in Flamingo Park, Northwood, and El Cid</h2>
  <p>Flamingo Park properties, many built during post-war development booms, feature barrel tile roofing systems that require specialized contractors experienced in tile roof restoration and replacement. The Northwood Historic District demands meticulous attention to architectural authenticity while meeting modern hurricane protection codes. Period-appropriate clay tile roofs are common here, requiring contractors who understand traditional profiles and can coordinate with the historic preservation board. El Cid's diverse housing stock encompasses both traditional tile and modern shingle systems, each with distinct requirements. All Phase Construction USA has completed hundreds of projects across all three neighborhoods, coordinating directly with historic district boards and understanding Flamingo Park HOA architectural requirements. Impact-resistant roofing materials and reinforced fastening systems are standard recommendations for all West Palm Beach properties within the wind-borne debris region.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in West Palm Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in West Palm Beach?</h3>
  <p>West Palm Beach roof replacement typically ranges from &#36;8,000 to &#36;16,000 for a standard residential home, depending on square footage, material choice, and neighborhood. Flamingo Park and Northwood historic properties command premium pricing due to architectural restrictions and specialized material requirements. All Phase Construction USA offers free inspections and competitive financing for impact-resistant upgrades.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material is best for West Palm Beach's 140+ mph wind-borne debris region?</h3>
  <p>Architectural impact-resistant asphalt shingles, standing seam metal roofing, and high-impact concrete tile are top choices for West Palm Beach. Historic properties in Northwood and Flamingo Park benefit from impact-resistant barrel tile and clay tile systems that maintain period aesthetics while meeting modern wind and debris protection codes. Metal systems with reinforced fastening last 40-50 years.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a roofer understands wind-borne debris region requirements for West Palm Beach?</h3>
  <p>Check your contractor's Florida CCC roofing license or CGC general contractor license at myfloridalicense.com, then confirm experience with impact-resistant materials and fastening systems. All Phase Construction USA holds CCC-1331464 and CGC-1526236, both verifiable in Florida's database. Ask for references from Flamingo Park or Northwood projects to confirm wind-borne debris region expertise.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do West Palm Beach historic neighborhoods like Northwood have specific roofing requirements?</h3>
  <p>Yes. Northwood Historic District enforces strict architectural guidelines protecting period details, while Flamingo Park communities maintain HOA color and material specifications. We coordinate directly with historic preservation boards and HOA architectural committees before any work, ensuring full approval and maintaining historic authenticity.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/wellington/best-roofers-wellington" style="color: #dc2626; text-decoration: underline;">Best Roofers in Wellington</a></li>
    <li><a href="/locations/boca-raton/best-roofers-boca-raton" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boca Raton</a></li>
    <li><a href="/locations/boynton-beach/best-roofers-boynton-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boynton Beach</a></li>
    <li><a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roofing Services</a></li>
    <li><a href="/roof-repair/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersWPBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in West Palm Beach FL (2026) | All Phase',
    'Top 5 roofers in West Palm Beach for 2026. Verified licenses, real reviews. Palm Beach County wind-compliant. See the list.',
    'https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach',
    bestRoofersWPBContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in West Palm Beach?","acceptedAnswer":{"@type":"Answer","text":"West Palm Beach roof replacement typically ranges from $8,000 to $16,000 for a standard residential home, depending on square footage, material choice, and neighborhood. Flamingo Park and Northwood historic properties command premium pricing due to architectural restrictions and specialized material requirements. All Phase Construction USA offers free inspections and competitive financing for impact-resistant upgrades."}},{"@type":"Question","name":"What roofing material is best for West Palm Beach\'s 140+ mph wind-borne debris region?","acceptedAnswer":{"@type":"Answer","text":"Architectural impact-resistant asphalt shingles, standing seam metal roofing, and high-impact concrete tile are top choices for West Palm Beach. Historic properties in Northwood and Flamingo Park benefit from impact-resistant barrel tile and clay tile systems that maintain period aesthetics while meeting modern wind and debris protection codes. Metal systems with reinforced fastening last 40-50 years."}},{"@type":"Question","name":"How do I verify a roofer understands wind-borne debris region requirements for West Palm Beach?","acceptedAnswer":{"@type":"Answer","text":"Check your contractor\'s Florida CCC roofing license or CGC general contractor license at myfloridalicense.com, then confirm experience with impact-resistant materials and fastening systems. All Phase Construction USA holds CCC-1331464 and CGC-1526236, both verifiable in Florida\'s database. Ask for references from Flamingo Park or Northwood projects to confirm wind-borne debris region expertise."}},{"@type":"Question","name":"Do West Palm Beach historic neighborhoods like Northwood have specific roofing requirements?","acceptedAnswer":{"@type":"Answer","text":"Yes. Northwood Historic District enforces strict architectural guidelines protecting period details, while Flamingo Park communities maintain HOA color and material specifications. We coordinate directly with historic preservation boards and HOA architectural committees before any work, ensuring full approval and maintaining historic authenticity."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"West Palm Beach","item":"https://allphaseconstructionfl.com/locations/west-palm-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in West Palm Beach","item":"https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/west-palm-beach/best-roofers-west-palm-beach/index.html');

  // Best Roofers Boca Raton - Premium Money Page
  const bestRoofersBocaDir = path.join(distDir, 'locations/boca-raton/best-roofers-boca-raton');
  fs.mkdirSync(bestRoofersBocaDir, { recursive: true });
  const bestRoofersBocaContent = `
  <h1>Top 5 Best Rated Roofers in Boca Raton, FL (2026)</h1>
  <p>Boca Raton is South Florida's premier residential destination, known for upscale communities stretching from the Intracoastal Waterway to inland golf course communities like Boca West and neighborhoods near Mizner Park. Finding a trustworthy roofer in Boca Raton means accessing a contractor with expertise in high-end residential construction, HOA compliance, and wind-borne debris region protection standards. We evaluated dozens of licensed contractors and identified five that consistently deliver the quality and professionalism Boca Raton homeowners expect.</p>
  <h2>Why Boca Raton Roofing Demands Premium Expertise and Compliance</h2>
  <p>Boca Raton is home to Mizner Park, a European-inspired architectural showcase, and a reputation for premium residential communities with sophisticated design standards and strict HOA enforcement. The Royal Palm Yacht Club area features waterfront estates with complex roof lines and premium architectural requirements. Boca West, a golf course-centered community, hosts numerous homes with tile and specialty roofing systems. Properties near the Intracoastal face salt-air exposure, while inland communities benefit from proximity to established golf courses and championship play. Located on the cusp of Broward and Palm Beach County borders, Boca Raton experiences wind-borne debris region conditions with 140+ mph design wind speeds. According to <a href="https://www.britannica.com/place/Boca-Raton" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Britannica's Boca Raton guide</a>, the city's upscale character reflects strict architectural governance and meticulous community standards. Every roofing contractor must understand impact-resistant materials, sophisticated fastening systems, and HOA architectural review requirements.</p>
  <h2>Your List of the Top 5 Best Roofers in Boca Raton, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), wind-borne debris region certified, 2,500+ completed roofs, 4.8/5 rating from 138+ reviews. Serves Palm Beach County with expertise in upscale residential and HOA-governed communities. In business since 2005, Tamko Pro Platinum certified.</li>
    <li><strong>Kelly Roofing</strong> &mdash; Palm Beach County specialist with extensive portfolio in Boca Raton's premium residential communities and golf course estates.</li>
    <li><strong>Roof Top Services</strong> &mdash; Licensed contractor with proven expertise in high-end residential roofing and HOA coordination across Boca Raton neighborhoods.</li>
    <li><strong>Neal Roofing &amp; Waterproofing</strong> &mdash; Established Boca Raton roofer specializing in complex architectural systems and waterproofing solutions for luxury homes.</li>
    <li><strong>Crowther Roofing</strong> &mdash; Trusted contractor serving Boca Raton with focus on quality installation and compliance with premium community standards.</li>
  </ol>
  <h2>Roofing in Royal Palm Yacht Club, Boca West, and Mizner Park Area</h2>
  <p>Royal Palm Yacht Club properties require contractors experienced in waterfront estate architecture, complex roof designs, and marine-grade fastening systems. Salt-air corrosion is a primary concern for properties this close to the Intracoastal, demanding stainless steel fasteners and enhanced underlayment. Boca West, with its championship golf course anchoring the community, features numerous homes with 30+ year old tile systems and sophisticated architectural profiles requiring specialized installation expertise. Mizner Park-area properties showcase Mediterranean revival and high-end contemporary architecture demanding meticulous craftsmanship and strict HOA compliance. All Phase Construction USA has completed hundreds of projects across all three neighborhoods, coordinating directly with HOA architectural committees, understanding premium material specifications, and managing the exacting standards Boca Raton homeowners maintain. Impact-resistant materials and advanced fastening systems are standard for all wind-borne debris region properties.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Boca Raton</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Boca Raton?</h3>
  <p>Boca Raton roof replacement typically ranges from &#36;9,000 to &#36;18,000 for a standard residential home, with upscale properties and specialty materials commanding premium pricing. Royal Palm Yacht Club and Mizner Park-area properties often exceed this range due to premium material requirements and architectural complexity. All Phase Construction USA provides detailed estimates and financing options for Boca Raton homeowners.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material is best for Boca Raton's upscale neighborhoods and wind-borne debris region?</h3>
  <p>High-impact concrete tile, standing seam metal roofing, and architectural impact-resistant shingles are premium choices for Boca Raton. Tile roofing maintains traditional aesthetics while meeting modern wind protection in Royal Palm Yacht Club and Boca West. Metal systems with reinforced fastening last 40-50 years and enhance property value. All materials must meet wind-borne debris region compliance with enhanced fastening standards.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a roofer has experience with Boca Raton's strict HOA requirements?</h3>
  <p>Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license, then ask for references from Royal Palm Yacht Club, Boca West, or Mizner Park projects. All Phase Construction USA carries CCC-1331464 and CGC-1526236 and has extensive Boca Raton experience coordinating with architectural review boards.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Boca Raton HOAs like Royal Palm and Boca West require special roofing materials?</h3>
  <p>Yes. Royal Palm Yacht Club, Boca West, and Mizner Park area communities all enforce strict color palettes and material specifications. We coordinate directly with each community's architectural committee before work begins, ensuring approvals and preventing costly project delays or rejections.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/deerfield-beach/best-roofers-deerfield-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Deerfield Beach</a></li>
    <li><a href="/locations/delray-beach/best-roofers-delray-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Delray Beach</a></li>
    <li><a href="/locations/coral-springs/best-roofers-coral-springs" style="color: #dc2626; text-decoration: underline;">Best Roofers in Coral Springs</a></li>
    <li><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roofing Services</a></li>
    <li><a href="/roof-repair/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Repair</a></li>
    <li><a href="/roof-inspection/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersBocaDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Boca Raton FL (2026) | All Phase',
    'Looking for the best roofers in Boca Raton? We reviewed the top 5 rated roofing contractors in Palm Beach County upscale communities. See who made the list.',
    'https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton',
    bestRoofersBocaContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Boca Raton?","acceptedAnswer":{"@type":"Answer","text":"Boca Raton roof replacement typically ranges from $9,000 to $18,000 for a standard residential home, with upscale properties and specialty materials commanding premium pricing. Royal Palm Yacht Club and Mizner Park-area properties often exceed this range due to premium material requirements and architectural complexity. All Phase Construction USA provides detailed estimates and financing options for Boca Raton homeowners."}},{"@type":"Question","name":"What roofing material is best for Boca Raton\'s upscale neighborhoods and wind-borne debris region?","acceptedAnswer":{"@type":"Answer","text":"High-impact concrete tile, standing seam metal roofing, and architectural impact-resistant shingles are premium choices for Boca Raton. Tile roofing maintains traditional aesthetics while meeting modern wind protection in Royal Palm Yacht Club and Boca West. Metal systems with reinforced fastening last 40-50 years and enhance property value. All materials must meet wind-borne debris region compliance with enhanced fastening standards."}},{"@type":"Question","name":"How do I verify a roofer has experience with Boca Raton\'s strict HOA requirements?","acceptedAnswer":{"@type":"Answer","text":"Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license, then ask for references from Royal Palm Yacht Club, Boca West, or Mizner Park projects. All Phase Construction USA carries CCC-1331464 and CGC-1526236 and has extensive Boca Raton experience coordinating with architectural review boards."}},{"@type":"Question","name":"Do Boca Raton HOAs like Royal Palm and Boca West require special roofing materials?","acceptedAnswer":{"@type":"Answer","text":"Yes. Royal Palm Yacht Club, Boca West, and Mizner Park area communities all enforce strict color palettes and material specifications. We coordinate directly with each community\'s architectural committee before work begins, ensuring approvals and preventing costly project delays or rejections."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Boca Raton","item":"https://allphaseconstructionfl.com/locations/boca-raton"},{"@type":"ListItem","position":3,"name":"Best Roofers in Boca Raton","item":"https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton"}]}]')
  ));
  console.log('✅ Prerendered: locations/boca-raton/best-roofers-boca-raton/index.html');

  // Best Roofers Coral Springs - Premium Money Page
  const bestRoofersCoralDir = path.join(distDir, 'locations/coral-springs/best-roofers-coral-springs');
  fs.mkdirSync(bestRoofersCoralDir, { recursive: true });
  const bestRoofersCoralContent = `
  <h1>Top 5 Best Rated Roofers in Coral Springs, FL (2026)</h1>
  <p>Coral Springs is Broward County's premier family-oriented inland city, featuring 80+ HOA communities spanning Eagle Trace, Heron Bay, and Ramblewood neighborhoods. Finding a trustworthy roofer in Coral Springs means accessing a contractor with expertise in HOA coordination, HVHZ compliance, and residential roofing across master-planned communities. We evaluated dozens of licensed contractors and identified five that consistently deliver quality work and understand Coral Springs' unique community governance structure.</p>
  <h2>Why Coral Springs Roofing Requires HVHZ Expertise and HOA Coordination</h2>
  <p>Coral Springs was designed as a master-planned community with 80+ distinct neighborhoods, each with its own HOA board and architectural guidelines. Eagle Trace, one of Broward County's most prominent golf course communities, features sophisticated architecture and strict design standards. Heron Bay combines upscale residential with a championship golf course anchoring the community. Ramblewood offers family-oriented suburban living with diverse architectural styles. While Coral Springs is inland and not subject to direct salt-air exposure, it falls entirely within Broward County's High Velocity Hurricane Zone with design wind speeds exceeding 175 mph. According to <a href="https://www.britannica.com/place/Coral-Springs-Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Britannica's Coral Springs profile</a>, the city's planned community structure creates unique coordination requirements for roofing contractors. Every roofer must be HVHZ-certified and experienced in HOA architectural review processes.</p>
  <h2>Your List of the Top 5 Best Roofers in Coral Springs, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ completed roofs, 4.8/5 rating from 138+ reviews. Extensive experience coordinating with Coral Springs HOA boards across Eagle Trace, Heron Bay, and Ramblewood. In business since 2005, Tamko Pro Platinum certified.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong> &mdash; Broward County specialist with deep experience in HOA-governed communities and HVHZ-compliant systems.</li>
    <li><strong>Tiger Team Roofing</strong> &mdash; Local installer known for metal and tile roofing in Coral Springs master-planned communities.</li>
    <li><strong>Nast Roofing</strong> &mdash; Licensed contractor with extensive portfolio in Coral Springs neighborhoods and HOA coordination.</li>
    <li><strong>Paul Bange Roofing</strong> &mdash; Established roofer serving Coral Springs with focus on HVHZ compliance and HOA approval processes.</li>
  </ol>
  <h2>Roofing in Eagle Trace, Heron Bay, and Ramblewood</h2>
  <p>Eagle Trace properties, built around one of South Florida's premier golf courses, demand contractors who understand architectural restrictions governing color, material type, and profile specifications. Many homes feature clay tile and concrete tile systems now 30+ years old and reaching replacement cycles. Heron Bay's championship golf course community features sophisticated waterfront and golf-front estates with complex roof lines and premium architectural requirements. HOA coordination is essential, as approval from architectural review boards can take weeks. Ramblewood's family-focused communities feature diverse architectural styles from traditional to contemporary, each with specific HOA aesthetic standards. All Phase Construction USA has completed hundreds of projects across all three neighborhoods, managing HOA approval processes, understanding each community's design guidelines, and coordinating directly with architectural committees. Impact-resistant materials and reinforced fastening systems meeting 175+ mph HVHZ standards are standard recommendations.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Coral Springs</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Coral Springs?</h3>
  <p>Coral Springs roof replacement typically ranges from &#36;7,500 to &#36;16,000 for a standard residential home, depending on square footage and material choice. Eagle Trace and Heron Bay properties with premium tile or metal systems may exceed this range. All Phase Construction USA offers free inspections and financing for all Coral Springs neighborhoods.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material is best for Coral Springs' HVHZ compliance requirements?</h3>
  <p>Impact-resistant architectural shingles, standing seam metal roofing, and high-impact concrete tile are top choices for Coral Springs. Metal systems with reinforced fastening last 40-50 years and meet HVHZ wind protection standards. Concrete tile provides traditional aesthetics while meeting 175+ mph design requirements for Eagle Trace and Heron Bay properties.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I ensure my roofer is HVHZ-certified for Coral Springs?</h3>
  <p>Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license at myfloridalicense.com, then verify HVHZ certification. All Phase Construction USA carries CCC-1331464 and CGC-1526236, both verifiable in Florida's database. Any contractor without HVHZ certification cannot legally work in Coral Springs.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Coral Springs HOAs like Eagle Trace and Heron Bay require approval before roofing work?</h3>
  <p>Yes. Every Coral Springs neighborhood, including Eagle Trace, Heron Bay, and Ramblewood, requires architectural approval before roof replacement. We coordinate directly with each HOA's architectural review board, obtain necessary approvals, and maintain full compliance throughout the project.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/pompano-beach/best-roofers-pompano-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Pompano Beach</a></li>
    <li><a href="/locations/deerfield-beach/best-roofers-deerfield-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Deerfield Beach</a></li>
    <li><a href="/locations/parkland/best-roofers-parkland" style="color: #dc2626; text-decoration: underline;">Best Roofers in Parkland</a></li>
    <li><a href="/locations/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs Roofing Services</a></li>
    <li><a href="/roof-repair/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs Roof Repair</a></li>
    <li><a href="/roof-inspection/coral-springs" style="color: #dc2626; text-decoration: underline;">Coral Springs Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersCoralDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Coral Springs FL (2026) | All Phase',
    'Looking for the best roofers in Coral Springs? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs',
    bestRoofersCoralContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Coral Springs?","acceptedAnswer":{"@type":"Answer","text":"Coral Springs roof replacement typically ranges from $7,500 to $16,000 for a standard residential home, depending on square footage and material choice. Eagle Trace and Heron Bay properties with premium tile or metal systems may exceed this range. All Phase Construction USA offers free inspections and financing for all Coral Springs neighborhoods."}},{"@type":"Question","name":"What roofing material is best for Coral Springs\' HVHZ compliance requirements?","acceptedAnswer":{"@type":"Answer","text":"Impact-resistant architectural shingles, standing seam metal roofing, and high-impact concrete tile are top choices for Coral Springs. Metal systems with reinforced fastening last 40-50 years and meet HVHZ wind protection standards. Concrete tile provides traditional aesthetics while meeting 175+ mph design requirements for Eagle Trace and Heron Bay properties."}},{"@type":"Question","name":"How do I ensure my roofer is HVHZ-certified for Coral Springs?","acceptedAnswer":{"@type":"Answer","text":"Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license at myfloridalicense.com, then verify HVHZ certification. All Phase Construction USA carries CCC-1331464 and CGC-1526236, both verifiable in Florida\'s database. Any contractor without HVHZ certification cannot legally work in Coral Springs."}},{"@type":"Question","name":"Do Coral Springs HOAs like Eagle Trace and Heron Bay require approval before roofing work?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every Coral Springs neighborhood, including Eagle Trace, Heron Bay, and Ramblewood, requires architectural approval before roof replacement. We coordinate directly with each HOA\'s architectural review board, obtain necessary approvals, and maintain full compliance throughout the project."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Coral Springs","item":"https://allphaseconstructionfl.com/locations/coral-springs"},{"@type":"ListItem","position":3,"name":"Best Roofers in Coral Springs","item":"https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs"}]}]')
  ));
  console.log('✅ Prerendered: locations/coral-springs/best-roofers-coral-springs/index.html');

  // Best Roofers Wellington - Premium Money Page
  const bestRoofersWellingtonDir = path.join(distDir, 'locations/wellington/best-roofers-wellington');
  fs.mkdirSync(bestRoofersWellingtonDir, { recursive: true });
  const bestRoofersWellingtonContent = `
  <h1>Top 5 Best Rated Roofers in Wellington, FL (2026)</h1>
  <p>Wellington is South Florida's premier equestrian community, known as the "Equestrian Capital of the World," with 80+ HOA communities spanning 40+ square miles in Palm Beach County. Finding a trustworthy roofer in Wellington means accessing a contractor with expertise in wind-borne debris region protection, master-planned community coordination, and the specialized architectural standards that govern Palm Beach County properties. We evaluated dozens of licensed contractors and identified five that consistently deliver quality work across Wellington's diverse neighborhoods.</p>
  <h2>Why Wellington Roofing Requires Wind-Borne Debris Region Expertise and HOA Coordination</h2>
  <p>Wellington is home to dozens of world-class equestrian facilities and hundreds of horse properties, making it a unique roofing market with sophisticated HOA governance. The Olympia neighborhood anchors Wellington's equestrian identity with premium estates on large lots surrounding riding facilities. Sugar Pond Manor offers more affordable family-oriented living with its own HOA standards. The Aero Club area represents Wellington's master-planned communities with upscale amenities and strict architectural guidelines. Wellington Falls to the east provides another major residential area with numerous HOA communities. The entire city falls within Palm Beach County's wind-borne debris region with design wind speeds of 140+ mph. According to <a href="https://www.britannica.com/place/Wellington-Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Britannica's Wellington guide</a>, the city's equestrian reputation and master-planned community structure require contractors with specialized expertise in both hurricane protection and HOA coordination. Every roofing contractor must understand wind-borne debris region compliance and HOA architectural review processes.</p>
  <h2>Your List of the Top 5 Best Roofers in Wellington, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), wind-borne debris region certified, 2,500+ completed roofs, 4.8/5 rating from 138+ reviews. Extensive experience coordinating with Wellington HOA boards and understanding equestrian estate requirements. In business since 2005, Tamko Pro Platinum certified.</li>
    <li><strong>Altec Roofing</strong> &mdash; Palm Beach County specialist with proven portfolio in Wellington's equestrian estates and master-planned communities.</li>
    <li><strong>Kelly Roofing</strong> &mdash; Established Palm Beach roofer with extensive experience in Wellington neighborhoods and HOA compliance coordination.</li>
    <li><strong>Neal Roofing &amp; Waterproofing</strong> &mdash; Licensed contractor specializing in high-end residential roofing and waterproofing solutions for Wellington estates.</li>
    <li><strong>Distinctive Roofing</strong> &mdash; Trusted Wellington roofer with focus on quality installation and wind-borne debris region compliance.</li>
  </ol>
  <h2>Roofing in Olympia, Sugar Pond Manor, and the Aero Club Area</h2>
  <p>Olympia properties, Wellington's most prestigious equestrian enclave, feature sophisticated architecture on expansive lots with complex roof designs requiring experienced craftspeople. Many homes feature premium clay tile and concrete tile systems now 30+ years old and reaching replacement cycles. HOA approval processes in Olympia can be extensive, requiring coordination with architectural committees protecting the neighborhood's equestrian character. Sugar Pond Manor offers more family-focused living with its own distinct architectural standards and HOA governance structure. The Aero Club area represents contemporary master-planned community architecture with modern HOA amenities and design guidelines. All Phase Construction USA has completed hundreds of projects across all three neighborhoods, managing HOA approval processes, understanding each community's design guidelines, and coordinating directly with architectural committees. Wind-borne debris region compliance with 140+ mph design standards and impact-resistant materials are essential for all Wellington properties.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/wellington" style="color: #dc2626; text-decoration: underline;">Wellington roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Wellington</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Wellington?</h3>
  <p>Wellington roof replacement typically ranges from &#36;8,000 to &#36;17,000 for a standard residential home, depending on square footage and material choice. Olympia's equestrian estates and larger properties often exceed this range. All Phase Construction USA provides detailed estimates, flexible financing, and coordinated HOA approval processes for Wellington homeowners.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material is best for Wellington's 140+ mph wind-borne debris region?</h3>
  <p>Architectural impact-resistant asphalt shingles, standing seam metal roofing, and high-impact concrete tile are top choices for Wellington. Metal systems with reinforced fastening last 40-50 years and meet wind-borne debris region compliance. Concrete tile provides traditional aesthetics while meeting 140+ mph design protection standards for Olympia's equestrian estates.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a roofer understands Wellington's wind-borne debris region requirements?</h3>
  <p>Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license at myfloridalicense.com, then ask for references from Wellington projects. All Phase Construction USA carries CCC-1331464 and CGC-1526236 and has extensive Wellington experience with impact-resistant materials and enhanced fastening standards.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Wellington HOAs like Olympia and Sugar Pond Manor require roof approval before work?</h3>
  <p>Yes. Every Wellington neighborhood, including Olympia, Sugar Pond Manor, and the Aero Club area, requires architectural approval before roof replacement. We coordinate directly with each community's architectural review board, obtain necessary approvals, and manage the full project timeline through completion.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/royal-palm-beach/best-roofers-royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Royal Palm Beach</a></li>
    <li><a href="/locations/lake-worth-beach/best-roofers-lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Lake Worth Beach</a></li>
    <li><a href="/locations/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roofing Services</a></li>
    <li><a href="/roof-repair/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roof Repair</a></li>
    <li><a href="/roof-inspection/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersWellingtonDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Wellington, FL (2026) | All Phase',
    'Top 5 roofing contractors in Wellington, FL for 2026. Verified licenses, real reviews, and proven track records across equestrian estates and HOA communities.',
    'https://allphaseconstructionfl.com/locations/wellington/best-roofers-wellington',
    bestRoofersWellingtonContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Wellington?","acceptedAnswer":{"@type":"Answer","text":"Wellington roof replacement typically ranges from $8,000 to $17,000 for a standard residential home, depending on square footage and material choice. Olympia\'s equestrian estates and larger properties often exceed this range. All Phase Construction USA provides detailed estimates, flexible financing, and coordinated HOA approval processes for Wellington homeowners."}},{"@type":"Question","name":"What roofing material is best for Wellington\'s 140+ mph wind-borne debris region?","acceptedAnswer":{"@type":"Answer","text":"Architectural impact-resistant asphalt shingles, standing seam metal roofing, and high-impact concrete tile are top choices for Wellington. Metal systems with reinforced fastening last 40-50 years and meet wind-borne debris region compliance. Concrete tile provides traditional aesthetics while meeting 140+ mph design protection standards for Olympia\'s equestrian estates."}},{"@type":"Question","name":"How do I verify a roofer understands Wellington\'s wind-borne debris region requirements?","acceptedAnswer":{"@type":"Answer","text":"Confirm your contractor holds a valid Florida CCC roofing license or CGC general contractor license at myfloridalicense.com, then ask for references from Wellington projects. All Phase Construction USA carries CCC-1331464 and CGC-1526236 and has extensive Wellington experience with impact-resistant materials and enhanced fastening standards."}},{"@type":"Question","name":"Do Wellington HOAs like Olympia and Sugar Pond Manor require roof approval before work?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every Wellington neighborhood, including Olympia, Sugar Pond Manor, and the Aero Club area, requires architectural approval before roof replacement. We coordinate directly with each community\'s architectural review board, obtain necessary approvals, and manage the full project timeline through completion."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Wellington","item":"https://allphaseconstructionfl.com/locations/wellington"},{"@type":"ListItem","position":3,"name":"Best Roofers in Wellington","item":"https://allphaseconstructionfl.com/locations/wellington/best-roofers-wellington"}]}]')
  ));
  console.log('✅ Prerendered: locations/wellington/best-roofers-wellington/index.html');



  // Best Roofers Pompano Beach - Premium Money Page
  const bestRoofersPompanoDir = path.join(distDir, 'locations/pompano-beach/best-roofers-pompano-beach');
  fs.mkdirSync(bestRoofersPompanoDir, { recursive: true });
  const bestRoofersPompanoContent = `
  <h1>Top 5 Best Rated Roofers in Pompano Beach, FL (2026)</h1>
  <p>Finding a trustworthy roofer in Pompano Beach means understanding the unique demands of coastal Broward County roofing. From the salt-air exposure near Harbor Village to the aging tile systems in Palm Aire, Pompano Beach properties need contractors with HVHZ certification and real local experience. We evaluated dozens of licensed roofers and identified five that stand out.</p>
  <h2>Why Pompano Beach Roofing Requires Specialized Expertise</h2>
  <p>Pompano Beach stretches from the Atlantic coastline to the Sawgrass Expressway. Homes near the Intracoastal face aggressive salt spray that corrodes standard fasteners within years, while inland communities like Cypress Lakes and Garden Isles deal with aging roof systems from the 1970s-80s development era. The 247-acre Fern Forest Nature Center and Pompano Beach Community Park anchor neighborhoods where many original roofs are now 30+ years old. According to <a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">NOAA's hurricane research</a>, South Florida's coastal communities face the highest wind damage risk in the continental United States.</p>
  <h2>Your List of the Top 5 Best Roofers in Pompano Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Pompano Beach properties.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Nast Roofing</strong></li>
    <li><strong>Paul Bange Roofing</strong></li>
  </ol>
  <h2>Roofing Near Palm Aire and Harbor Village in Pompano Beach</h2>
  <p>Palm Aire homes built around the former resort golf courses typically have concrete tile roofs that are reaching end-of-life. Harbor Village's waterfront properties require marine-grade stainless steel fasteners and corrosion-resistant flashing systems. Our crews work extensively in both neighborhoods and understand the specific HOA requirements, permitting processes, and material specifications each community demands.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Pompano Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Pompano Beach?</h3>
  <p>Roof replacement in Pompano Beach typically ranges from &#36;8,000 to &#36;15,000 for a standard residential home, depending on square footage and material. Homes near Harbor Village and the Intracoastal may cost more due to salt-air-rated material requirements. Call (754) 227-5605 for a free estimate.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What's the best roofing material for Pompano Beach's salt air?</h3>
  <p>Metal roofing and concrete tile are ideal for Pompano Beach's coastal environment. In communities like Palm Aire and Harbor Village, metal roofs with marine-grade fasteners last 40-50 years versus 15-20 for standard shingles. Salt-resistant underlayment is essential for any material choice this close to the Atlantic.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What should I look for when hiring a roofer in Pompano Beach?</h3>
  <p>Verify your roofer holds a valid Florida CCC license and is HVHZ-certified &mdash; Pompano Beach falls within Broward County's High Velocity Hurricane Zone. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Always confirm active liability insurance and ask for references from your specific neighborhood.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Pompano Beach HOAs like Palm Aire have specific roofing requirements?</h3>
  <p>Yes. Palm Aire, Harbor Village, and most Pompano Beach communities have strict architectural guidelines governing tile profiles, colors, and approved materials. We coordinate with HOA boards before every project to ensure full compliance and prevent costly do-overs.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/fort-lauderdale/best-roofers-fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Best Roofers in Fort Lauderdale</a></li>
    <li><a href="/locations/deerfield-beach/best-roofers-deerfield-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Deerfield Beach</a></li>
    <li><a href="/locations/coral-springs/best-roofers-coral-springs" style="color: #dc2626; text-decoration: underline;">Best Roofers in Coral Springs</a></li>
    <li><a href="/locations/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach Roofing Services</a></li>
    <li><a href="/roof-repair/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersPompanoDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Pompano Beach FL (2026) | All Phase',
    'Looking for the best roofers in Pompano Beach? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/pompano-beach/best-roofers-pompano-beach',
    bestRoofersPompanoContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Pompano Beach?","acceptedAnswer":{"@type":"Answer","text":"Roof replacement in Pompano Beach typically ranges from $8,000 to $15,000 for a standard residential home, depending on square footage and material. Homes near Harbor Village and the Intracoastal may cost more due to salt-air-rated material requirements. Call (754) 227-5605 for a free estimate."}},{"@type":"Question","name":"What\'s the best roofing material for Pompano Beach\'s salt air?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing and concrete tile are ideal for Pompano Beach\'s coastal environment. In communities like Palm Aire and Harbor Village, metal roofs with marine-grade fasteners last 40-50 years versus 15-20 for standard shingles. Salt-resistant underlayment is essential for any material choice this close to the Atlantic."}},{"@type":"Question","name":"What should I look for when hiring a roofer in Pompano Beach?","acceptedAnswer":{"@type":"Answer","text":"Verify your roofer holds a valid Florida CCC license and is HVHZ-certified \u2014 Pompano Beach falls within Broward County\'s High Velocity Hurricane Zone. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Always confirm active liability insurance and ask for references from your specific neighborhood."}},{"@type":"Question","name":"Do Pompano Beach HOAs like Palm Aire have specific roofing requirements?","acceptedAnswer":{"@type":"Answer","text":"Yes. Palm Aire, Harbor Village, and most Pompano Beach communities have strict architectural guidelines governing tile profiles, colors, and approved materials. We coordinate with HOA boards before every project to ensure full compliance and prevent costly do-overs."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Pompano Beach","item":"https://allphaseconstructionfl.com/locations/pompano-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in Pompano Beach","item":"https://allphaseconstructionfl.com/locations/pompano-beach/best-roofers-pompano-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/pompano-beach/best-roofers-pompano-beach/index.html');

  // Best Roofers Hollywood - Premium Money Page
  const bestRoofersHollywoodDir = path.join(distDir, 'locations/hollywood/best-roofers-hollywood');
  fs.mkdirSync(bestRoofersHollywoodDir, { recursive: true });
  const bestRoofersHollywoodContent = `
  <h1>Top 5 Best Rated Roofers in Hollywood, FL (2026)</h1>
  <p>Hollywood stretches from the Atlantic coast to the Everglades, making it one of South Florida's most diverse roofing markets. Coastal properties near the Broadwalk face relentless salt spray, while inland neighborhoods like Emerald Hills and Hollywood Hills have their own unique challenges. We reviewed Broward County's licensed roofers and selected five that consistently deliver quality work.</p>
  <h2>Why Hollywood Roofing Demands Coastal Expertise</h2>
  <p>Hollywood's 2.5-mile <a href="https://www.britannica.com/place/Hollywood-Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Hollywood Beach Broadwalk</a> is an iconic landmark, but the coastal properties flanking it endure relentless salt spray and wind exposure. Emerald Hills &mdash; a canal-front community with gated sections and a golf club &mdash; represents the city's premium residential market. Hollywood North Beach Park's 56-acre oceanfront and Anne Kolb Nature Center with its 68-foot observation tower mark where environmental stress is most intense. Every property in Hollywood falls within Broward County's HVHZ zone.</p>
  <h2>Your List of the Top 5 Best Roofers in Hollywood, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Hollywood properties.</li>
    <li><strong>Earl W. Johnston Roofing</strong></li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Paul Bange Roofing</strong></li>
  </ol>
  <h2>Roofing in Emerald Hills and Near the Hollywood Broadwalk</h2>
  <p>Emerald Hills homes feature canal-front architecture with complex roof lines requiring experienced tile installation crews. Properties near the Broadwalk face the most aggressive salt-air corrosion in the city &mdash; marine-grade stainless steel fasteners and corrosion-resistant flashing are non-negotiable here. We've completed hundreds of Hollywood roofing projects across both neighborhoods.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/hollywood" style="color: #dc2626; text-decoration: underline;">Hollywood roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Hollywood</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does a new roof cost in Hollywood, FL?</h3>
  <p>Hollywood roof replacement typically costs &#36;7,500 to &#36;16,000 depending on roof size and material. Coastal properties near the Broadwalk may require premium salt-resistant systems that add to the investment. All Phase Construction USA offers free inspections and financing options.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Hollywood's coastal weather?</h3>
  <p>Impact-resistant architectural shingles and standing seam metal roofing are top choices for Hollywood's salt-laden air. Homeowners in Emerald Hills and Hollywood Hills benefit from 130+ mph wind-rated systems that also reduce insurance premiums. Concrete tile is another strong option for homes with adequate structural support.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a roofer is properly licensed in Hollywood?</h3>
  <p>Check for a valid Florida CCC or CGC license and confirm HVHZ certification &mdash; mandatory for Hollywood's hurricane zone. All Phase Construction USA holds both CCC-1331464 and CGC-1526236. You can verify any contractor's license at myfloridalicense.com.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do homes near the Hollywood Beach Broadwalk need special roofing?</h3>
  <p>Yes. Properties within a mile of the Broadwalk face aggressive salt spray that corrodes standard fasteners within years. Marine-grade stainless steel fasteners, corrosion-resistant flashing, and enhanced underlayment are essential for coastal Hollywood properties to achieve their full lifespan.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/pembroke-pines/best-roofers-pembroke-pines" style="color: #dc2626; text-decoration: underline;">Best Roofers in Pembroke Pines</a></li>
    <li><a href="/locations/fort-lauderdale/best-roofers-fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Best Roofers in Fort Lauderdale</a></li>
    <li><a href="/locations/miramar/best-roofers-miramar" style="color: #dc2626; text-decoration: underline;">Best Roofers in Miramar</a></li>
    <li><a href="/locations/hollywood" style="color: #dc2626; text-decoration: underline;">Hollywood Roofing Services</a></li>
    <li><a href="/roof-repair/hollywood" style="color: #dc2626; text-decoration: underline;">Hollywood Roof Repair</a></li>
    <li><a href="/roof-inspection/hollywood" style="color: #dc2626; text-decoration: underline;">Hollywood Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersHollywoodDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Hollywood FL (2026) | All Phase',
    'Looking for the best roofers in Hollywood? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/hollywood/best-roofers-hollywood',
    bestRoofersHollywoodContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does a new roof cost in Hollywood, FL?","acceptedAnswer":{"@type":"Answer","text":"Hollywood roof replacement typically costs $7,500 to $16,000 depending on roof size and material. Coastal properties near the Broadwalk may require premium salt-resistant systems that add to the investment. All Phase Construction USA offers free inspections and financing options."}},{"@type":"Question","name":"Which roofing material is best for Hollywood\'s coastal weather?","acceptedAnswer":{"@type":"Answer","text":"Impact-resistant architectural shingles and standing seam metal roofing are top choices for Hollywood\'s salt-laden air. Homeowners in Emerald Hills and Hollywood Hills benefit from 130+ mph wind-rated systems that also reduce insurance premiums. Concrete tile is another strong option for homes with adequate structural support."}},{"@type":"Question","name":"How do I verify a roofer is properly licensed in Hollywood?","acceptedAnswer":{"@type":"Answer","text":"Check for a valid Florida CCC or CGC license and confirm HVHZ certification \u2014 mandatory for Hollywood\'s hurricane zone. All Phase Construction USA holds both CCC-1331464 and CGC-1526236. You can verify any contractor\'s license at myfloridalicense.com."}},{"@type":"Question","name":"Do homes near the Hollywood Beach Broadwalk need special roofing?","acceptedAnswer":{"@type":"Answer","text":"Yes. Properties within a mile of the Broadwalk face aggressive salt spray that corrodes standard fasteners within years. Marine-grade stainless steel fasteners, corrosion-resistant flashing, and enhanced underlayment are essential for coastal Hollywood properties to achieve their full lifespan."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Hollywood","item":"https://allphaseconstructionfl.com/locations/hollywood"},{"@type":"ListItem","position":3,"name":"Best Roofers in Hollywood","item":"https://allphaseconstructionfl.com/locations/hollywood/best-roofers-hollywood"}]}]')
  ));
  console.log('✅ Prerendered: locations/hollywood/best-roofers-hollywood/index.html');

  // Best Roofers Sunrise - Premium Money Page
  const bestRoofersSunriseDir = path.join(distDir, 'locations/sunrise/best-roofers-sunrise');
  fs.mkdirSync(bestRoofersSunriseDir, { recursive: true });
  const bestRoofersSunriseContent = `
  <h1>Top 5 Best Rated Roofers in Sunrise, FL (2026)</h1>
  <p>Sunrise is home to Sawgrass Mills mall and a wide range of residential communities from Sunrise Lakes to the Sawgrass development. Finding a roofer who understands both the aging 55+ community roofs and newer construction challenges takes local knowledge. Here are five Broward County contractors we trust.</p>
  <h2>Why Sunrise Roofing Demands HVHZ Expertise</h2>
  <p><a href="https://www.noaa.gov/weather" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Sawgrass Mills</a> draws 25 million visitors annually to Sunrise, but the residential communities surrounding it are what define the city's roofing landscape. The 669-acre Markham Park sits on the western edge near I-75, while Welleby Park and Oak Hammock Park serve central neighborhoods. Sunrise Lakes &mdash; a large 55+ community developed between 1971 and 1997 &mdash; has thousands of aging roofs now reaching replacement age. The entire city falls within Broward County's High Velocity Hurricane Zone.</p>
  <h2>Your List of the Top 5 Best Roofers in Sunrise, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Sunrise properties.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Nast Roofing</strong></li>
    <li><strong>Paul Bange Roofing</strong></li>
  </ol>
  <h2>Roofing for Sunrise Lakes and the Sawgrass Community</h2>
  <p>Sunrise Lakes homes were built over a 26-year span, meaning roof ages vary from 30 to 55+ years old. Coordinated community reroofing projects can reduce per-unit costs while ensuring consistent quality. The Sawgrass community features newer construction but still requires HVHZ-compliant maintenance as systems age. We handle both community types with tailored approaches.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/sunrise" style="color: #dc2626; text-decoration: underline;">Sunrise roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Sunrise</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Sunrise?</h3>
  <p>Sunrise roof replacement ranges from &#36;8,500 to &#36;14,000 for most residential homes. Sunrise Lakes 55+ community homes tend to be on the lower end due to smaller footprints. Contact All Phase Construction USA at (754) 227-5605 for a free, no-obligation quote.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material works best in Sunrise's hot, humid climate?</h3>
  <p>Cool-roof rated architectural shingles and metal roofing with reflective coatings excel in Sunrise's intense heat. These materials reduce attic temperatures by up to 30 degrees, cutting cooling costs significantly. The Sunrise Lakes and Sawgrass communities see strong results with energy-efficient roofing upgrades.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What certifications should a Sunrise roofer have?</h3>
  <p>Your Sunrise roofer must hold a Florida CCC license and HVHZ certification since the entire city falls within Broward County's High Velocity Hurricane Zone. All Phase Construction USA carries CCC-1331464 and CGC-1526236. Never hire a roofer who cannot produce these credentials.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are there specific roofing concerns for the Sunrise Lakes 55+ community?</h3>
  <p>Yes. Many Sunrise Lakes homes were built between 1971 and 1997, meaning original roofs are 30-55 years old and well past their designed lifespan. Coordinated community reroofing projects can reduce per-unit costs and ensure consistent quality across the development.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/plantation/best-roofers-plantation" style="color: #dc2626; text-decoration: underline;">Best Roofers in Plantation</a></li>
    <li><a href="/locations/fort-lauderdale/best-roofers-fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Best Roofers in Fort Lauderdale</a></li>
    <li><a href="/locations/coral-springs/best-roofers-coral-springs" style="color: #dc2626; text-decoration: underline;">Best Roofers in Coral Springs</a></li>
    <li><a href="/locations/sunrise" style="color: #dc2626; text-decoration: underline;">Sunrise Roofing Services</a></li>
    <li><a href="/roof-repair/sunrise" style="color: #dc2626; text-decoration: underline;">Sunrise Roof Repair</a></li>
    <li><a href="/roof-inspection/sunrise" style="color: #dc2626; text-decoration: underline;">Sunrise Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersSunriseDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Sunrise FL (2026) | All Phase',
    'Looking for the best roofers in Sunrise? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/sunrise/best-roofers-sunrise',
    bestRoofersSunriseContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Sunrise?","acceptedAnswer":{"@type":"Answer","text":"Sunrise roof replacement ranges from $8,500 to $14,000 for most residential homes. Sunrise Lakes 55+ community homes tend to be on the lower end due to smaller footprints. Contact All Phase Construction USA at (754) 227-5605 for a free, no-obligation quote."}},{"@type":"Question","name":"What roofing material works best in Sunrise\'s hot, humid climate?","acceptedAnswer":{"@type":"Answer","text":"Cool-roof rated architectural shingles and metal roofing with reflective coatings excel in Sunrise\'s intense heat. These materials reduce attic temperatures by up to 30 degrees, cutting cooling costs significantly. The Sunrise Lakes and Sawgrass communities see strong results with energy-efficient roofing upgrades."}},{"@type":"Question","name":"What certifications should a Sunrise roofer have?","acceptedAnswer":{"@type":"Answer","text":"Your Sunrise roofer must hold a Florida CCC license and HVHZ certification since the entire city falls within Broward County\'s High Velocity Hurricane Zone. All Phase Construction USA carries CCC-1331464 and CGC-1526236. Never hire a roofer who cannot produce these credentials."}},{"@type":"Question","name":"Are there specific roofing concerns for the Sunrise Lakes 55+ community?","acceptedAnswer":{"@type":"Answer","text":"Yes. Many Sunrise Lakes homes were built between 1971 and 1997, meaning original roofs are 30-55 years old and well past their designed lifespan. Coordinated community reroofing projects can reduce per-unit costs and ensure consistent quality across the development."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Sunrise","item":"https://allphaseconstructionfl.com/locations/sunrise"},{"@type":"ListItem","position":3,"name":"Best Roofers in Sunrise","item":"https://allphaseconstructionfl.com/locations/sunrise/best-roofers-sunrise"}]}]')
  ));
  console.log('✅ Prerendered: locations/sunrise/best-roofers-sunrise/index.html');

  // Best Roofers Plantation - Premium Money Page
  const bestRoofersPlantationDir = path.join(distDir, 'locations/plantation/best-roofers-plantation');
  fs.mkdirSync(bestRoofersPlantationDir, { recursive: true });
  const bestRoofersPlantationContent = `
  <h1>Top 5 Best Rated Roofers in Plantation, FL (2026)</h1>
  <p>Plantation blends luxury gated communities like Hawk's Landing with established equestrian properties in Plantation Acres. Each neighborhood has unique roofing demands &mdash; from premium tile systems on estate homes to shingle replacements on ranch-style houses. We identified five Broward County roofers that consistently deliver.</p>
  <h2>Why Plantation Roofing Requires Specialized Knowledge</h2>
  <p>Plantation sits in central Broward County with diverse residential architecture. Hawk's Landing features estate homes requiring premium materials, while <a href="https://www.epa.gov/climate-indicators/climate-indicators-heavy-precipitation" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Plantation Acres</a> &mdash; east of Flamingo Road &mdash; offers equestrian estates on larger lots. Central Park with its Frank Veltri Tennis Center anchors the residential core. The Westfield Broward Mall area draws commercial roofing demand. Plantation's intense year-round UV causes shingle roofs to deteriorate 15-20% faster than in cooler climates.</p>
  <h2>Your List of the Top 5 Best Roofers in Plantation, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Plantation properties.</li>
    <li><strong>Nast Roofing</strong></li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Earl W. Johnston Roofing</strong></li>
  </ol>
  <h2>Roofing for Hawk's Landing and Plantation Acres</h2>
  <p>Hawk's Landing HOA requires architectural review approval before any roofing work, with specific approved materials and color palettes. Plantation Acres' equestrian estates have larger roof footprints and sometimes barn structures requiring specialized expertise. We navigate both community types routinely and handle all HOA coordination as part of the project.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/plantation" style="color: #dc2626; text-decoration: underline;">Plantation roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Plantation</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What's the typical cost for roof replacement in Plantation?</h3>
  <p>Plantation roof replacement costs between &#36;8,000 and &#36;15,500 depending on home size and material. Larger estates in Hawk's Landing typically run higher due to complex roof lines and premium material requirements. All Phase Construction USA provides detailed, transparent proposals for every Plantation project.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Plantation's intense sun exposure?</h3>
  <p>Premium architectural shingles with UV-resistant coatings and metal roofing perform best in Plantation's year-round sun. Plantation's intense UV causes standard shingles to deteriorate 15-20% faster than in cooler climates. Metal roofing reflects heat and lasts 40-50 years even in our harsh conditions.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I find a properly credentialed roofer in Plantation?</h3>
  <p>Verify your roofer holds both a Florida CCC license and HVHZ certification for Broward County's hurricane zone. All Phase Construction USA maintains CCC-1331464 and CGC-1526236. Ask for references specifically from Plantation properties and confirm active liability insurance.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Hawk's Landing and Plantation Acres have special roofing requirements?</h3>
  <p>Yes. Hawk's Landing requires HOA architectural review approval before any roofing work, with specific approved materials and color palettes. Plantation Acres' equestrian estates often have larger roof footprints and barn structures requiring specialized expertise. We handle both community types regularly.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/davie/best-roofers-davie" style="color: #dc2626; text-decoration: underline;">Best Roofers in Davie</a></li>
    <li><a href="/locations/sunrise/best-roofers-sunrise" style="color: #dc2626; text-decoration: underline;">Best Roofers in Sunrise</a></li>
    <li><a href="/locations/fort-lauderdale/best-roofers-fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Best Roofers in Fort Lauderdale</a></li>
    <li><a href="/locations/plantation" style="color: #dc2626; text-decoration: underline;">Plantation Roofing Services</a></li>
    <li><a href="/roof-repair/plantation" style="color: #dc2626; text-decoration: underline;">Plantation Roof Repair</a></li>
    <li><a href="/roof-inspection/plantation" style="color: #dc2626; text-decoration: underline;">Plantation Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersPlantationDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Plantation FL (2026) | All Phase',
    'Looking for the best roofers in Plantation? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/plantation/best-roofers-plantation',
    bestRoofersPlantationContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What\'s the typical cost for roof replacement in Plantation?","acceptedAnswer":{"@type":"Answer","text":"Plantation roof replacement costs between $8,000 and $15,500 depending on home size and material. Larger estates in Hawk\'s Landing typically run higher due to complex roof lines and premium material requirements. All Phase Construction USA provides detailed, transparent proposals for every Plantation project."}},{"@type":"Question","name":"Which roofing material is best for Plantation\'s intense sun exposure?","acceptedAnswer":{"@type":"Answer","text":"Premium architectural shingles with UV-resistant coatings and metal roofing perform best in Plantation\'s year-round sun. Plantation\'s intense UV causes standard shingles to deteriorate 15-20% faster than in cooler climates. Metal roofing reflects heat and lasts 40-50 years even in our harsh conditions."}},{"@type":"Question","name":"How do I find a properly credentialed roofer in Plantation?","acceptedAnswer":{"@type":"Answer","text":"Verify your roofer holds both a Florida CCC license and HVHZ certification for Broward County\'s hurricane zone. All Phase Construction USA maintains CCC-1331464 and CGC-1526236. Ask for references specifically from Plantation properties and confirm active liability insurance."}},{"@type":"Question","name":"Do Hawk\'s Landing and Plantation Acres have special roofing requirements?","acceptedAnswer":{"@type":"Answer","text":"Yes. Hawk\'s Landing requires HOA architectural review approval before any roofing work, with specific approved materials and color palettes. Plantation Acres\' equestrian estates often have larger roof footprints and barn structures requiring specialized expertise. We handle both community types regularly."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Plantation","item":"https://allphaseconstructionfl.com/locations/plantation"},{"@type":"ListItem","position":3,"name":"Best Roofers in Plantation","item":"https://allphaseconstructionfl.com/locations/plantation/best-roofers-plantation"}]}]')
  ));
  console.log('✅ Prerendered: locations/plantation/best-roofers-plantation/index.html');

  // Best Roofers Davie - Premium Money Page
  const bestRoofersDavieDir = path.join(distDir, 'locations/davie/best-roofers-davie');
  fs.mkdirSync(bestRoofersDavieDir, { recursive: true });
  const bestRoofersDavieContent = `
  <h1>Top 5 Best Rated Roofers in Davie, FL (2026)</h1>
  <p>Davie is Broward County's horse country &mdash; a community where equestrian estates sit alongside suburban neighborhoods. The town's unique mix of ranch properties, barn structures, and standard residential homes demands a roofer with versatile experience. Here are five contractors that handle Davie's diverse roofing needs.</p>
  <h2>Why Davie Roofing Demands Flood-Zone Awareness</h2>
  <p><a href="https://en.wikipedia.org/wiki/Flamingo_Gardens" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Flamingo Gardens</a> &mdash; a 60-acre botanical garden established in 1927 &mdash; represents Davie's deep roots. Tree Tops Park anchors the eastern neighborhoods with boardwalks through freshwater marsh. The Flamingo Road and Griffin Road intersection serves as a commercial hub. Davie sits within a special flood-hazard zone where heavy monsoon rains from May through October create persistent moisture exposure. Every property here falls within Broward County's HVHZ zone.</p>
  <h2>Your List of the Top 5 Best Roofers in Davie, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Davie properties.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Paul Bange Roofing</strong></li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Nast Roofing</strong></li>
  </ol>
  <h2>Roofing for Davie's Equestrian Properties and Flood Zones</h2>
  <p>Davie's equestrian estates feature larger barn-style structures and extended covered areas with complex roof lines. The town's flood-hazard designation means enhanced waterproof underlayment and oversized gutters are essential &mdash; not optional. We assess every Davie property's specific flood risk before recommending materials and drainage solutions.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/davie" style="color: #dc2626; text-decoration: underline;">Davie roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Davie</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Davie?</h3>
  <p>Davie roof replacement typically costs &#36;7,500 to &#36;14,000 depending on roof size and material. Equestrian estate properties with barn structures and complex roof lines may run higher. Contact All Phase Construction USA at (754) 227-5605 for a free estimate that includes flood-zone assessment.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What's the best roofing material for Davie's flood-prone areas?</h3>
  <p>Metal roofing and premium shingles with enhanced waterproof underlayment are ideal for Davie's special flood-hazard zone. Proper roof drainage is critical since Davie faces heavy monsoon rains from May through October. We design drainage into every system to protect against Davie's unique moisture conditions.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What licensing should I verify for a Davie roofer?</h3>
  <p>Ensure your Davie roofer holds a Florida CCC license and HVHZ certification &mdash; Davie sits within Broward County's hurricane zone. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Dual licensing is especially important in Davie where structural assessment of equestrian properties may be needed.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Does Davie's flood zone status affect roofing choices?</h3>
  <p>Yes. Davie sits within a special flood-hazard area where 100-year flood events have a 26% chance of occurring in any 30-year period. Enhanced roof ventilation, oversized gutters, and waterproof underlayment systems are essential. We conduct flood-risk assessments specific to your Davie property location.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/plantation/best-roofers-plantation" style="color: #dc2626; text-decoration: underline;">Best Roofers in Plantation</a></li>
    <li><a href="/locations/hollywood/best-roofers-hollywood" style="color: #dc2626; text-decoration: underline;">Best Roofers in Hollywood</a></li>
    <li><a href="/locations/sunrise/best-roofers-sunrise" style="color: #dc2626; text-decoration: underline;">Best Roofers in Sunrise</a></li>
    <li><a href="/locations/davie" style="color: #dc2626; text-decoration: underline;">Davie Roofing Services</a></li>
    <li><a href="/roof-repair/davie" style="color: #dc2626; text-decoration: underline;">Davie Roof Repair</a></li>
    <li><a href="/roof-inspection/davie" style="color: #dc2626; text-decoration: underline;">Davie Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersDavieDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Davie FL (2026) | All Phase',
    'Looking for the best roofers in Davie? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/davie/best-roofers-davie',
    bestRoofersDavieContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Davie?","acceptedAnswer":{"@type":"Answer","text":"Davie roof replacement typically costs $7,500 to $14,000 depending on roof size and material. Equestrian estate properties with barn structures and complex roof lines may run higher. Contact All Phase Construction USA at (754) 227-5605 for a free estimate that includes flood-zone assessment."}},{"@type":"Question","name":"What\'s the best roofing material for Davie\'s flood-prone areas?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing and premium shingles with enhanced waterproof underlayment are ideal for Davie\'s special flood-hazard zone. Proper roof drainage is critical since Davie faces heavy monsoon rains from May through October. We design drainage into every system to protect against Davie\'s unique moisture conditions."}},{"@type":"Question","name":"What licensing should I verify for a Davie roofer?","acceptedAnswer":{"@type":"Answer","text":"Ensure your Davie roofer holds a Florida CCC license and HVHZ certification \u2014 Davie sits within Broward County\'s hurricane zone. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Dual licensing is especially important in Davie where structural assessment of equestrian properties may be needed."}},{"@type":"Question","name":"Does Davie\'s flood zone status affect roofing choices?","acceptedAnswer":{"@type":"Answer","text":"Yes. Davie sits within a special flood-hazard area where 100-year flood events have a 26% chance of occurring in any 30-year period. Enhanced roof ventilation, oversized gutters, and waterproof underlayment systems are essential. We conduct flood-risk assessments specific to your Davie property location."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Davie","item":"https://allphaseconstructionfl.com/locations/davie"},{"@type":"ListItem","position":3,"name":"Best Roofers in Davie","item":"https://allphaseconstructionfl.com/locations/davie/best-roofers-davie"}]}]')
  ));
  console.log('✅ Prerendered: locations/davie/best-roofers-davie/index.html');

  // Best Roofers Miramar - Premium Money Page
  const bestRoofersMiramarDir = path.join(distDir, 'locations/miramar/best-roofers-miramar');
  fs.mkdirSync(bestRoofersMiramarDir, { recursive: true });
  const bestRoofersMiramarContent = `
  <h1>Top 5 Best Rated Roofers in Miramar, FL (2026)</h1>
  <p>Miramar is one of Broward County's fastest-growing cities, with residential communities stretching from the urban core westward toward the Everglades. Newer neighborhoods like Huntington and Silver Shores are entering their first roof maintenance windows. We identified five roofers with the HVHZ credentials and local experience Miramar demands.</p>
  <h2>Why Miramar Requires HVHZ-Certified Roofers</h2>
  <p>The 173-acre <a href="https://www.census.gov/quickfacts/miramarcityflorida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Miramar Regional Park</a> and 157-acre Miramar Pineland Park serve the city's expanding communities. Silver Shores features Mediterranean-style gated developments with lake views, while Country Club Ranches offers a rural atmosphere on Miramar's western edge. Nautica's Spanish-style gated homes represent newer construction now requiring proactive maintenance. All roofing materials must carry HVHZ ratings for 130+ mph winds.</p>
  <h2>Your List of the Top 5 Best Roofers in Miramar, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Miramar properties.</li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Paul Bange Roofing</strong></li>
    <li><strong>Earl W. Johnston Roofing</strong></li>
  </ol>
  <h2>Roofing for Silver Shores, Huntington, and Country Club Ranches</h2>
  <p>Silver Shores and Huntington homes built in the early 2000s are now 20+ years old &mdash; approaching the window where proactive maintenance prevents costly emergency repairs. Country Club Ranches' equestrian-friendly properties have unique roofing needs similar to Davie's horse country. We provide tailored solutions for each Miramar community.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/miramar" style="color: #dc2626; text-decoration: underline;">Miramar roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Miramar</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does a new roof cost in Miramar?</h3>
  <p>Miramar roof replacement ranges from &#36;8,000 to &#36;15,000 depending on roof size and material selection. HVHZ-certified installations ensure compliance with Broward County's strictest hurricane codes. All Phase Construction USA offers free inspections for all Miramar neighborhoods.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Miramar's HVHZ requirements?</h3>
  <p>Concrete tile and impact-resistant architectural shingles rated for 130+ mph winds are the most popular choices in Miramar. Silver Shores and Huntington homeowners benefit from materials that meet HVHZ standards while keeping insurance premiums low. Metal roofing is gaining popularity for its 40-50 year lifespan.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a Miramar roofer's HVHZ credentials?</h3>
  <p>Check that your Miramar roofer holds a Florida CCC license and can demonstrate HVHZ installation competency. All Phase Construction USA maintains CCC-1331464 and CGC-1526236. Broward County requires all materials to carry Notice of Acceptance (NOA) certification &mdash; ask your roofer to confirm.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are newer Miramar communities like Huntington approaching roof maintenance age?</h3>
  <p>Yes. Many Huntington and Silver Shores homes built in the early 2000s are now 20+ years old &mdash; approaching the window where proactive maintenance prevents costly emergency repairs. Concrete tile systems from that era should be inspected for cracked tiles, deteriorated underlayment, and fastener corrosion.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/pembroke-pines/best-roofers-pembroke-pines" style="color: #dc2626; text-decoration: underline;">Best Roofers in Pembroke Pines</a></li>
    <li><a href="/locations/hollywood/best-roofers-hollywood" style="color: #dc2626; text-decoration: underline;">Best Roofers in Hollywood</a></li>
    <li><a href="/locations/davie/best-roofers-davie" style="color: #dc2626; text-decoration: underline;">Best Roofers in Davie</a></li>
    <li><a href="/locations/miramar" style="color: #dc2626; text-decoration: underline;">Miramar Roofing Services</a></li>
    <li><a href="/roof-repair/miramar" style="color: #dc2626; text-decoration: underline;">Miramar Roof Repair</a></li>
    <li><a href="/roof-inspection/miramar" style="color: #dc2626; text-decoration: underline;">Miramar Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersMiramarDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Miramar FL (2026) | All Phase',
    'Looking for the best roofers in Miramar? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/miramar/best-roofers-miramar',
    bestRoofersMiramarContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does a new roof cost in Miramar?","acceptedAnswer":{"@type":"Answer","text":"Miramar roof replacement ranges from $8,000 to $15,000 depending on roof size and material selection. HVHZ-certified installations ensure compliance with Broward County\'s strictest hurricane codes. All Phase Construction USA offers free inspections for all Miramar neighborhoods."}},{"@type":"Question","name":"Which roofing material is best for Miramar\'s HVHZ requirements?","acceptedAnswer":{"@type":"Answer","text":"Concrete tile and impact-resistant architectural shingles rated for 130+ mph winds are the most popular choices in Miramar. Silver Shores and Huntington homeowners benefit from materials that meet HVHZ standards while keeping insurance premiums low. Metal roofing is gaining popularity for its 40-50 year lifespan."}},{"@type":"Question","name":"How do I verify a Miramar roofer\'s HVHZ credentials?","acceptedAnswer":{"@type":"Answer","text":"Check that your Miramar roofer holds a Florida CCC license and can demonstrate HVHZ installation competency. All Phase Construction USA maintains CCC-1331464 and CGC-1526236. Broward County requires all materials to carry Notice of Acceptance (NOA) certification \u2014 ask your roofer to confirm."}},{"@type":"Question","name":"Are newer Miramar communities like Huntington approaching roof maintenance age?","acceptedAnswer":{"@type":"Answer","text":"Yes. Many Huntington and Silver Shores homes built in the early 2000s are now 20+ years old \u2014 approaching the window where proactive maintenance prevents costly emergency repairs. Concrete tile systems from that era should be inspected for cracked tiles, deteriorated underlayment, and fastener corrosion."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Miramar","item":"https://allphaseconstructionfl.com/locations/miramar"},{"@type":"ListItem","position":3,"name":"Best Roofers in Miramar","item":"https://allphaseconstructionfl.com/locations/miramar/best-roofers-miramar"}]}]')
  ));
  console.log('✅ Prerendered: locations/miramar/best-roofers-miramar/index.html');

  // Best Roofers Pembroke Pines - Premium Money Page
  const bestRoofersPPinesDir = path.join(distDir, 'locations/pembroke-pines/best-roofers-pembroke-pines');
  fs.mkdirSync(bestRoofersPPinesDir, { recursive: true });
  const bestRoofersPPinesContent = `
  <h1>Top 5 Best Rated Roofers in Pembroke Pines, FL (2026)</h1>
  <p>Pembroke Pines is one of Broward County's most populated cities, with residential development spanning from the 1960s to present day. From Chapel Trail's nature preserve community to the bustling Pines Boulevard corridor, roofing needs vary significantly by neighborhood. Here are five roofers with the credentials this city demands.</p>
  <h2>Why Pembroke Pines Requires Wind Zone 4 Expertise</h2>
  <p><a href="https://www.epa.gov/indoor-air-quality-iaq/mold-and-health" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">C.B. Smith Park</a> &mdash; featuring Paradise Cove Water Park &mdash; anchors the eastern residential core. Chapel Trail Nature Preserve encompasses 450 acres with a 1,650-foot boardwalk through wetlands, and its surrounding community has a large concentration of homes needing roof replacement. The Shops at Pembroke Gardens and Pembroke Lakes Regional Mall generate commercial demand. Pembroke Pines is classified as HVHZ Wind Zone 4, requiring six nails per shingle and NOA-certified materials.</p>
  <h2>Your List of the Top 5 Best Roofers in Pembroke Pines, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Pembroke Pines properties.</li>
    <li><strong>Allied Roofing &amp; Sheet Metal</strong></li>
    <li><strong>Tiger Team Roofing</strong></li>
    <li><strong>Nast Roofing</strong></li>
    <li><strong>Paul Bange Roofing</strong></li>
  </ol>
  <h2>Roofing for Chapel Trail and Pembroke Falls</h2>
  <p>Chapel Trail homes were built in the late 1990s and early 2000s, placing them in the 20-25 year replacement window. The nature preserve humidity accelerates underlayment deterioration. Pembroke Falls features newer construction with HOA standards requiring approved tile profiles and colors. We coordinate with both community associations for seamless project execution.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/pembroke-pines" style="color: #dc2626; text-decoration: underline;">Pembroke Pines roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Pembroke Pines</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does a new roof cost in Pembroke Pines?</h3>
  <p>Pembroke Pines roof replacement ranges from &#36;8,000 to &#36;15,500 depending on home size and material. Chapel Trail homes with complex roof lines and tile systems typically cost more. All Phase Construction USA provides free on-site assessments and transparent estimates for every Pembroke Pines project.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Pembroke Pines' HVHZ zone?</h3>
  <p>Impact-rated architectural shingles, concrete tile, and standing seam metal are the most popular choices in Pembroke Pines. All materials must carry NOA certification and meet Wind Zone 4 requirements. Concrete tile offers the best combination of wind resistance and longevity for Pembroke Pines homes.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I confirm my Pembroke Pines roofer meets HVHZ standards?</h3>
  <p>Verify your roofer holds a Florida CCC license and HVHZ certification. Pembroke Pines requires six nails per shingle, hurricane straps, and NOA-certified materials. All Phase Construction USA carries CCC-1331464 and CGC-1526236 &mdash; fully compliant with Broward County's strictest standards.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are Chapel Trail homes due for roof replacement?</h3>
  <p>Many Chapel Trail homes were built in the late 1990s and early 2000s, placing them squarely in the 20-25 year replacement window. The nature preserve humidity accelerates underlayment deterioration. We recommend proactive inspection for any Chapel Trail home that hasn't been reroofed in 18+ years.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/miramar/best-roofers-miramar" style="color: #dc2626; text-decoration: underline;">Best Roofers in Miramar</a></li>
    <li><a href="/locations/hollywood/best-roofers-hollywood" style="color: #dc2626; text-decoration: underline;">Best Roofers in Hollywood</a></li>
    <li><a href="/locations/davie/best-roofers-davie" style="color: #dc2626; text-decoration: underline;">Best Roofers in Davie</a></li>
    <li><a href="/locations/pembroke-pines" style="color: #dc2626; text-decoration: underline;">Pembroke Pines Roofing Services</a></li>
    <li><a href="/roof-repair/pembroke-pines" style="color: #dc2626; text-decoration: underline;">Pembroke Pines Roof Repair</a></li>
    <li><a href="/roof-inspection/pembroke-pines" style="color: #dc2626; text-decoration: underline;">Pembroke Pines Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersPPinesDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Pembroke Pines FL (2026) | All Phase',
    'Looking for the best roofers in Pembroke Pines? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/pembroke-pines/best-roofers-pembroke-pines',
    bestRoofersPPinesContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does a new roof cost in Pembroke Pines?","acceptedAnswer":{"@type":"Answer","text":"Pembroke Pines roof replacement ranges from $8,000 to $15,500 depending on home size and material. Chapel Trail homes with complex roof lines and tile systems typically cost more. All Phase Construction USA provides free on-site assessments and transparent estimates for every Pembroke Pines project."}},{"@type":"Question","name":"Which roofing material is best for Pembroke Pines\' HVHZ zone?","acceptedAnswer":{"@type":"Answer","text":"Impact-rated architectural shingles, concrete tile, and standing seam metal are the most popular choices in Pembroke Pines. All materials must carry NOA certification and meet Wind Zone 4 requirements. Concrete tile offers the best combination of wind resistance and longevity for Pembroke Pines homes."}},{"@type":"Question","name":"How do I confirm my Pembroke Pines roofer meets HVHZ standards?","acceptedAnswer":{"@type":"Answer","text":"Verify your roofer holds a Florida CCC license and HVHZ certification. Pembroke Pines requires six nails per shingle, hurricane straps, and NOA-certified materials. All Phase Construction USA carries CCC-1331464 and CGC-1526236 \u2014 fully compliant with Broward County\'s strictest standards."}},{"@type":"Question","name":"Are Chapel Trail homes due for roof replacement?","acceptedAnswer":{"@type":"Answer","text":"Many Chapel Trail homes were built in the late 1990s and early 2000s, placing them squarely in the 20-25 year replacement window. The nature preserve humidity accelerates underlayment deterioration. We recommend proactive inspection for any Chapel Trail home that hasn\'t been reroofed in 18+ years."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Pembroke Pines","item":"https://allphaseconstructionfl.com/locations/pembroke-pines"},{"@type":"ListItem","position":3,"name":"Best Roofers in Pembroke Pines","item":"https://allphaseconstructionfl.com/locations/pembroke-pines/best-roofers-pembroke-pines"}]}]')
  ));
  console.log('✅ Prerendered: locations/pembroke-pines/best-roofers-pembroke-pines/index.html');

  // Best Roofers Delray Beach - Premium Money Page
  const bestRoofersDelrayDir = path.join(distDir, 'locations/delray-beach/best-roofers-delray-beach');
  fs.mkdirSync(bestRoofersDelrayDir, { recursive: true });
  const bestRoofersDelrayContent = `
  <h1>Top 5 Best Rated Roofers in Delray Beach, FL (2026)</h1>
  <p>Delray Beach blends historic charm with coastal living along the vibrant Atlantic Avenue corridor. From the Old School Square district's preservation requirements to Huntington Lakes' coordinated community needs, finding the right roofer here takes research. We reviewed Palm Beach County's licensed contractors and selected five standouts.</p>
  <h2>Why Delray Beach Roofing Requires Local Expertise</h2>
  <p><a href="https://en.wikipedia.org/wiki/Delray_Beach,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Pineapple Grove</a> &mdash; an charming enclave off Atlantic Avenue with boutiques and galleries &mdash; features historic buildings with unique preservation needs. Wakodahatchee Wetlands nature boardwalk and Atlantic Dunes Park oceanfront boardwalk represent the east-west range of residential neighborhoods. Properties near Atlantic Avenue and A1A face the most intense coastal exposure. As a coastal city, Delray Beach faces direct hurricane exposure with storm surge potential reaching 20 feet.</p>
  <h2>Your List of the Top 5 Best Roofers in Delray Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Delray Beach properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Altec Roofing</strong></li>
    <li><strong>Crowther Roofing</strong></li>
    <li><strong>Roof Top Services</strong></li>
  </ol>
  <h2>Roofing for Old School Square and Huntington Lakes</h2>
  <p>The Old School Square historic district requires careful coordination with preservation boards to maintain architectural integrity while installing modern storm-rated systems. Huntington Lakes &mdash; a 55+ luxury community &mdash; needs coordinated reroofing as original systems age. We handle both with the attention to detail each community demands.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Delray Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does roof replacement cost in Delray Beach?</h3>
  <p>Delray Beach roof replacement typically costs &#36;8,500 to &#36;17,000 depending on property size, material, and proximity to the coast. Historic district properties near Old School Square may require specialty materials. Call All Phase Construction USA at (754) 227-5605 for a free assessment.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Delray Beach's coastal climate?</h3>
  <p>Concrete tile and metal roofing with marine-grade components are ideal for Delray Beach. Properties east of I-95 need salt-spray-resistant systems, while western neighborhoods like Lake Ida can use standard wind-rated materials. Tile roofs offer 40-50 years of protection with proper installation.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What credentials should a Delray Beach roofer have?</h3>
  <p>Confirm your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. For historic district work, verify your contractor has experience coordinating with architectural review boards.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Does Delray Beach's historic district have special roofing rules?</h3>
  <p>Yes. The Old School Square district and surrounding historic neighborhoods have architectural guidelines governing roofing materials, colors, and profiles. We coordinate with Delray Beach's Historic Preservation Board to ensure compliance while installing modern storm-rated roofing systems.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/boynton-beach/best-roofers-boynton-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boynton Beach</a></li>
    <li><a href="/locations/boca-raton/best-roofers-boca-raton" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boca Raton</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roofing Services</a></li>
    <li><a href="/roof-repair/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersDelrayDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Delray Beach FL (2026) | All Phase',
    'Looking for the best roofers in Delray Beach? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/delray-beach/best-roofers-delray-beach',
    bestRoofersDelrayContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does roof replacement cost in Delray Beach?","acceptedAnswer":{"@type":"Answer","text":"Delray Beach roof replacement typically costs $8,500 to $17,000 depending on property size, material, and proximity to the coast. Historic district properties near Old School Square may require specialty materials. Call All Phase Construction USA at (754) 227-5605 for a free assessment."}},{"@type":"Question","name":"Which roofing material is best for Delray Beach\'s coastal climate?","acceptedAnswer":{"@type":"Answer","text":"Concrete tile and metal roofing with marine-grade components are ideal for Delray Beach. Properties east of I-95 need salt-spray-resistant systems, while western neighborhoods like Lake Ida can use standard wind-rated materials. Tile roofs offer 40-50 years of protection with proper installation."}},{"@type":"Question","name":"What credentials should a Delray Beach roofer have?","acceptedAnswer":{"@type":"Answer","text":"Confirm your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. For historic district work, verify your contractor has experience coordinating with architectural review boards."}},{"@type":"Question","name":"Does Delray Beach\'s historic district have special roofing rules?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Old School Square district and surrounding historic neighborhoods have architectural guidelines governing roofing materials, colors, and profiles. We coordinate with Delray Beach\'s Historic Preservation Board to ensure compliance while installing modern storm-rated roofing systems."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Delray Beach","item":"https://allphaseconstructionfl.com/locations/delray-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in Delray Beach","item":"https://allphaseconstructionfl.com/locations/delray-beach/best-roofers-delray-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/delray-beach/best-roofers-delray-beach/index.html');

  // Best Roofers Boynton Beach - Premium Money Page
  const bestRoofersBoyntonDir = path.join(distDir, 'locations/boynton-beach/best-roofers-boynton-beach');
  fs.mkdirSync(bestRoofersBoyntonDir, { recursive: true });
  const bestRoofersBoyntonContent = `
  <h1>Top 5 Best Rated Roofers in Boynton Beach, FL (2026)</h1>
  <p>Boynton Beach combines oceanfront living with established inland communities across Palm Beach County. From The Cascades active adult community to Canyon Lakes' upscale estates, roofing needs vary dramatically. We identified five Palm Beach County roofers with the credentials and local knowledge this city requires.</p>
  <h2>Why Boynton Beach Roofing Needs Wind-Code Expertise</h2>
  <p><a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Oceanfront Park</a> at 6415 N. Ocean Blvd marks the eastern coastal zone where roofing demands are most extreme. The Cascades and Valencia Lakes &mdash; active 55+ communities &mdash; represent concentrated aging roof replacement needs. Canyon Lakes and Hunters Run feature upscale gated homes with complex tile roof systems. Boynton Beach buildings face approximately a 41% chance of significant flooding over 30 years.</p>
  <h2>Your List of the Top 5 Best Roofers in Boynton Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Boynton Beach properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Distinctive Roofing</strong></li>
    <li><strong>Neal Roofing &amp; Waterproofing</strong></li>
    <li><strong>Bentley Roofing</strong></li>
  </ol>
  <h2>Roofing for The Cascades, Canyon Lakes, and Hunters Run</h2>
  <p>The Cascades and Valencia Lakes homes built in the early 2000s are entering the 20-25 year replacement window. Canyon Lakes' estate properties feature complex multi-level tile systems requiring specialized installation expertise. Hunters Run's golf course community has strict architectural standards we navigate regularly.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Boynton Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does a new roof cost in Boynton Beach?</h3>
  <p>Boynton Beach roof replacement ranges from &#36;8,000 to &#36;16,500 depending on home size and material. Canyon Lakes and Hunters Run estate homes with complex tile systems cost more. Contact All Phase Construction USA at (754) 227-5605 for a detailed proposal.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material performs best in Boynton Beach?</h3>
  <p>Concrete tile and metal roofing are the top performers in Boynton Beach's climate. The Cascades and Valencia Lakes communities see excellent results with concrete tile for its wind resistance and 40+ year lifespan. Coastal properties near Oceanfront Park need salt-resistant fasteners and flashing.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify my Boynton Beach roofer's qualifications?</h3>
  <p>Ensure your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA maintains CCC-1331464 and CGC-1526236 dual licenses. Ask for recent references from Boynton Beach properties and verify active liability insurance.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are 55+ communities in Boynton Beach due for roof replacement?</h3>
  <p>Yes. The Cascades, Valencia Lakes, and other active adult communities built in the early 2000s are entering the 20-25 year window where proactive replacement prevents costly emergency repairs. Coordinated community reroofing can reduce per-unit costs significantly.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/delray-beach/best-roofers-delray-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Delray Beach</a></li>
    <li><a href="/locations/lake-worth-beach/best-roofers-lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Lake Worth Beach</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roofing Services</a></li>
    <li><a href="/roof-repair/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersBoyntonDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Boynton Beach FL (2026) | All Phase',
    'Looking for the best roofers in Boynton Beach? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/boynton-beach/best-roofers-boynton-beach',
    bestRoofersBoyntonContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a new roof cost in Boynton Beach?","acceptedAnswer":{"@type":"Answer","text":"Boynton Beach roof replacement ranges from $8,000 to $16,500 depending on home size and material. Canyon Lakes and Hunters Run estate homes with complex tile systems cost more. Contact All Phase Construction USA at (754) 227-5605 for a detailed proposal."}},{"@type":"Question","name":"Which roofing material performs best in Boynton Beach?","acceptedAnswer":{"@type":"Answer","text":"Concrete tile and metal roofing are the top performers in Boynton Beach\'s climate. The Cascades and Valencia Lakes communities see excellent results with concrete tile for its wind resistance and 40+ year lifespan. Coastal properties near Oceanfront Park need salt-resistant fasteners and flashing."}},{"@type":"Question","name":"How do I verify my Boynton Beach roofer\'s qualifications?","acceptedAnswer":{"@type":"Answer","text":"Ensure your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA maintains CCC-1331464 and CGC-1526236 dual licenses. Ask for recent references from Boynton Beach properties and verify active liability insurance."}},{"@type":"Question","name":"Are 55+ communities in Boynton Beach due for roof replacement?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Cascades, Valencia Lakes, and other active adult communities built in the early 2000s are entering the 20-25 year window where proactive replacement prevents costly emergency repairs. Coordinated community reroofing can reduce per-unit costs significantly."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Boynton Beach","item":"https://allphaseconstructionfl.com/locations/boynton-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in Boynton Beach","item":"https://allphaseconstructionfl.com/locations/boynton-beach/best-roofers-boynton-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/boynton-beach/best-roofers-boynton-beach/index.html');

  // Best Roofers Jupiter - Premium Money Page
  const bestRoofersJupiterDir = path.join(distDir, 'locations/jupiter/best-roofers-jupiter');
  fs.mkdirSync(bestRoofersJupiterDir, { recursive: true });
  const bestRoofersJupiterContent = `
  <h1>Top 5 Best Rated Roofers in Jupiter, FL (2026)</h1>
  <p>Jupiter sits at the northern edge of Palm Beach County where the Loxahatchee River meets the Atlantic. From luxury estates in Jonathan's Landing to the master-planned Abacoa community, Jupiter's roofing landscape demands contractors who understand both coastal and inland challenges. Here are five we recommend.</p>
  <h2>Why Jupiter Roofing Demands Coastal-Ready Solutions</h2>
  <p><a href="https://en.wikipedia.org/wiki/Jupiter,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Jonathan Dickinson State Park</a> &mdash; the largest state park in Southeast Florida &mdash; borders Jupiter's western communities. Jupiter Beach Park with its fishing jetty and Carlin Park along A1A serve coastal neighborhoods where salt air demands premium materials. Abacoa is a master-planned community with A-rated schools and newer construction. Harbourside Place on the waterfront provides the downtown anchor. Metal and concrete tile are the top recommendations for Jupiter properties.</p>
  <h2>Your List of the Top 5 Best Roofers in Jupiter, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Jupiter properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Altec Roofing</strong></li>
    <li><strong>Crowther Roofing</strong></li>
    <li><strong>Roof Top Services</strong></li>
  </ol>
  <h2>Roofing for Jonathan's Landing, Abacoa, and Jupiter Beach</h2>
  <p>Jonathan's Landing estates feature complex tile roof systems on luxury waterfront properties. Abacoa's modern construction requires proactive maintenance as systems age beyond 15 years. Jupiter Beach properties face the most intense salt-air corrosion and require marine-grade components throughout. We tailor every proposal to the specific neighborhood's environmental exposure.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/jupiter" style="color: #dc2626; text-decoration: underline;">Jupiter roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Jupiter</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does roof replacement cost in Jupiter, FL?</h3>
  <p>Jupiter roof replacement typically costs &#36;9,000 to &#36;18,000 depending on property size and material. Jonathan's Landing estate homes with complex tile systems run higher. Contact All Phase Construction USA at (754) 227-5605 for a free assessment.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material is best for Jupiter's coastal exposure?</h3>
  <p>Metal roofing and concrete tile with marine-grade fasteners are ideal for Jupiter's coastal environment. Properties near Jupiter Beach and the Loxahatchee River face the most intense salt air exposure. Abacoa homes built to modern codes benefit from impact-rated systems that reduce insurance premiums.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a Jupiter roofer's credentials?</h3>
  <p>Confirm your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. For Jonathan's Landing and other gated communities, verify your contractor has HOA coordination experience.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Jupiter homes near the Loxahatchee River need special roofing?</h3>
  <p>Yes. Properties along the Loxahatchee face elevated humidity and moisture that accelerates underlayment deterioration. Enhanced ventilation, premium waterproof underlayment, and corrosion-resistant components are essential. We assess every Jupiter property's specific environmental exposure before recommending materials.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/palm-beach-gardens/best-roofers-palm-beach-gardens" style="color: #dc2626; text-decoration: underline;">Best Roofers in Palm Beach Gardens</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/royal-palm-beach/best-roofers-royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Royal Palm Beach</a></li>
    <li><a href="/locations/jupiter" style="color: #dc2626; text-decoration: underline;">Jupiter Roofing Services</a></li>
    <li><a href="/roof-repair/jupiter" style="color: #dc2626; text-decoration: underline;">Jupiter Roof Repair</a></li>
    <li><a href="/roof-inspection/jupiter" style="color: #dc2626; text-decoration: underline;">Jupiter Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersJupiterDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Jupiter FL (2026) | All Phase',
    'Looking for the best roofers in Jupiter? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/jupiter/best-roofers-jupiter',
    bestRoofersJupiterContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does roof replacement cost in Jupiter, FL?","acceptedAnswer":{"@type":"Answer","text":"Jupiter roof replacement typically costs $9,000 to $18,000 depending on property size and material. Jonathan\'s Landing estate homes with complex tile systems run higher. Contact All Phase Construction USA at (754) 227-5605 for a free assessment."}},{"@type":"Question","name":"What roofing material is best for Jupiter\'s coastal exposure?","acceptedAnswer":{"@type":"Answer","text":"Metal roofing and concrete tile with marine-grade fasteners are ideal for Jupiter\'s coastal environment. Properties near Jupiter Beach and the Loxahatchee River face the most intense salt air exposure. Abacoa homes built to modern codes benefit from impact-rated systems that reduce insurance premiums."}},{"@type":"Question","name":"How do I verify a Jupiter roofer\'s credentials?","acceptedAnswer":{"@type":"Answer","text":"Confirm your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. For Jonathan\'s Landing and other gated communities, verify your contractor has HOA coordination experience."}},{"@type":"Question","name":"Do Jupiter homes near the Loxahatchee River need special roofing?","acceptedAnswer":{"@type":"Answer","text":"Yes. Properties along the Loxahatchee face elevated humidity and moisture that accelerates underlayment deterioration. Enhanced ventilation, premium waterproof underlayment, and corrosion-resistant components are essential. We assess every Jupiter property\'s specific environmental exposure before recommending materials."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Jupiter","item":"https://allphaseconstructionfl.com/locations/jupiter"},{"@type":"ListItem","position":3,"name":"Best Roofers in Jupiter","item":"https://allphaseconstructionfl.com/locations/jupiter/best-roofers-jupiter"}]}]')
  ));
  console.log('✅ Prerendered: locations/jupiter/best-roofers-jupiter/index.html');

  // Best Roofers Palm Beach Gardens - Premium Money Page
  const bestRoofersPBGDir = path.join(distDir, 'locations/palm-beach-gardens/best-roofers-palm-beach-gardens');
  fs.mkdirSync(bestRoofersPBGDir, { recursive: true });
  const bestRoofersPBGContent = `
  <h1>Top 5 Best Rated Roofers in Palm Beach Gardens, FL (2026)</h1>
  <p>Palm Beach Gardens is one of Palm Beach County's most prestigious communities, home to world-class golf developments and luxury estates. From Frenchman's Creek to PGA National, the roofing demands here are as elevated as the real estate. We identified five roofers with the premium experience this market requires.</p>
  <h2>Why Palm Beach Gardens Demands Premium Roofing Expertise</h2>
  <p><a href="https://www.britannica.com/sports/golf" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Frenchman's Creek</a> features two 18-hole championship golf courses and waterfront homes, while Old Palm Golf Club includes ultra-luxury properties. The 82-acre Gardens North County District Park and Frenchman's Forest Natural Area serve the community's expanding residential zones. The Gardens Mall with 160+ retailers anchors the commercial district. Premium tile roofs are the standard here, and HOA architectural review boards require specific materials and color palettes.</p>
  <h2>Your List of the Top 5 Best Roofers in Palm Beach Gardens, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Palm Beach Gardens properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Distinctive Roofing</strong></li>
    <li><strong>Neal Roofing &amp; Waterproofing</strong></li>
    <li><strong>Bentley Roofing</strong></li>
  </ol>
  <h2>Roofing for Frenchman's Creek, Old Palm, and PGA National</h2>
  <p>Frenchman's Creek requires specific barrel tile profiles approved through architectural review. Old Palm's ultra-luxury properties demand premium materials matching the community's aesthetic standards. PGA National homeowners benefit from coordinated reroofing programs that maintain property values across the development. We handle all HOA approvals as part of every project.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/palm-beach-gardens" style="color: #dc2626; text-decoration: underline;">Palm Beach Gardens roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Palm Beach Gardens</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Palm Beach Gardens?</h3>
  <p>Palm Beach Gardens roof replacement ranges from &#36;10,000 to &#36;22,000+ for luxury estates. Frenchman's Creek and Old Palm properties with complex tile roof systems run at the premium end. All Phase Construction USA provides detailed proposals for every Palm Beach Gardens project.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Palm Beach Gardens estates?</h3>
  <p>Premium flat and barrel concrete tile is the gold standard for Palm Beach Gardens estates. PGA National and BallenIsles communities require specific tile profiles approved by HOA architectural review boards. Metal roofing is gaining traction for its 40-50 year lifespan and modern aesthetic appeal.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What should I look for in a Palm Beach Gardens roofer?</h3>
  <p>Verify your roofer holds a Florida CCC license and has extensive experience with Palm Beach Gardens HOA architectural review processes. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Ask for references from luxury estate communities specifically.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Frenchman's Creek and Old Palm have specific roofing requirements?</h3>
  <p>Yes. Both communities have strict architectural review boards that must approve roofing materials, colors, and profiles before work begins. Frenchman's Creek requires specific barrel tile profiles, while Old Palm may require premium materials matching the community's ultra-luxury aesthetic. We handle these approvals as part of every project.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/jupiter/best-roofers-jupiter" style="color: #dc2626; text-decoration: underline;">Best Roofers in Jupiter</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/royal-palm-beach/best-roofers-royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Royal Palm Beach</a></li>
    <li><a href="/locations/palm-beach-gardens" style="color: #dc2626; text-decoration: underline;">Palm Beach Gardens Roofing Services</a></li>
    <li><a href="/roof-repair/palm-beach-gardens" style="color: #dc2626; text-decoration: underline;">Palm Beach Gardens Roof Repair</a></li>
    <li><a href="/roof-inspection/palm-beach-gardens" style="color: #dc2626; text-decoration: underline;">Palm Beach Gardens Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersPBGDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Palm Beach Gardens FL (2026) | All Phase',
    'Looking for the best roofers in Palm Beach Gardens? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/palm-beach-gardens/best-roofers-palm-beach-gardens',
    bestRoofersPBGContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Palm Beach Gardens?","acceptedAnswer":{"@type":"Answer","text":"Palm Beach Gardens roof replacement ranges from $10,000 to $22,000+ for luxury estates. Frenchman\'s Creek and Old Palm properties with complex tile roof systems run at the premium end. All Phase Construction USA provides detailed proposals for every Palm Beach Gardens project."}},{"@type":"Question","name":"Which roofing material is best for Palm Beach Gardens estates?","acceptedAnswer":{"@type":"Answer","text":"Premium flat and barrel concrete tile is the gold standard for Palm Beach Gardens estates. PGA National and BallenIsles communities require specific tile profiles approved by HOA architectural review boards. Metal roofing is gaining traction for its 40-50 year lifespan and modern aesthetic appeal."}},{"@type":"Question","name":"What should I look for in a Palm Beach Gardens roofer?","acceptedAnswer":{"@type":"Answer","text":"Verify your roofer holds a Florida CCC license and has extensive experience with Palm Beach Gardens HOA architectural review processes. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Ask for references from luxury estate communities specifically."}},{"@type":"Question","name":"Do Frenchman\'s Creek and Old Palm have specific roofing requirements?","acceptedAnswer":{"@type":"Answer","text":"Yes. Both communities have strict architectural review boards that must approve roofing materials, colors, and profiles before work begins. Frenchman\'s Creek requires specific barrel tile profiles, while Old Palm may require premium materials matching the community\'s ultra-luxury aesthetic. We handle these approvals as part of every project."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Palm Beach Gardens","item":"https://allphaseconstructionfl.com/locations/palm-beach-gardens"},{"@type":"ListItem","position":3,"name":"Best Roofers in Palm Beach Gardens","item":"https://allphaseconstructionfl.com/locations/palm-beach-gardens/best-roofers-palm-beach-gardens"}]}]')
  ));
  console.log('✅ Prerendered: locations/palm-beach-gardens/best-roofers-palm-beach-gardens/index.html');

  // Best Roofers Royal Palm Beach - Premium Money Page
  const bestRoofersRPBDir = path.join(distDir, 'locations/royal-palm-beach/best-roofers-royal-palm-beach');
  fs.mkdirSync(bestRoofersRPBDir, { recursive: true });
  const bestRoofersRPBContent = `
  <h1>Top 5 Best Rated Roofers in Royal Palm Beach, FL (2026)</h1>
  <p>Royal Palm Beach is a family-oriented village in western Palm Beach County centered around the scenic Commons Park. Bella Terra, Bella Sera, and surrounding communities feature well-maintained homes that are now entering the roof replacement window. Here are five Palm Beach County roofers we recommend.</p>
  <h2>Why Royal Palm Beach Roofing Needs Storm-Ready Solutions</h2>
  <p>The 163-acre <a href="https://www.census.gov/quickfacts/royalpalmbeachvillageflorida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Royal Palm Beach Commons</a> features a golf training center, driving range, 18-hole tournament green, and 19-acre lake &mdash; anchoring the village's residential core. Bella Terra and Bella Sera are upscale gated communities with resort-style amenities. The nearly 800-acre Royal Palm Beach Pines Natural Area provides a green buffer for western neighborhoods. Summer storms and hurricanes frequently dislodge roofing materials in this area.</p>
  <h2>Your List of the Top 5 Best Roofers in Royal Palm Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Royal Palm Beach properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Altec Roofing</strong></li>
    <li><strong>Crowther Roofing</strong></li>
    <li><strong>Roof Top Services</strong></li>
  </ol>
  <h2>Roofing for Bella Terra, Bella Sera, and the Village Walk Area</h2>
  <p>Bella Terra and Bella Sera homes built in the 2000s-2010s are approaching the 15-20 year inspection window. Both communities have HOA requirements for specific tile profiles and colors. We coordinate with village HOA boards before every project to ensure material compliance and minimize disruption to homeowners.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Royal Palm Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Royal Palm Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How much does roof replacement cost in Royal Palm Beach?</h3>
  <p>Royal Palm Beach roof replacement ranges from &#36;8,000 to &#36;15,000 for most homes. Bella Terra and Bella Sera gated community properties may cost more due to HOA material requirements. Contact All Phase Construction USA at (754) 227-5605 for a free estimate.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What roofing material performs best in Royal Palm Beach?</h3>
  <p>Concrete tile and metal roofing deliver the best long-term value in Royal Palm Beach's climate. Tile offers 40+ years of protection with wind resistance up to 150 mph. Metal roofing reflects heat and stands up to the intense summer storms that frequently hit western Palm Beach County.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What credentials should my Royal Palm Beach roofer have?</h3>
  <p>Confirm your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA maintains CCC-1331464 and CGC-1526236 dual licenses. For Bella Terra and Bella Sera work, verify HOA coordination experience.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are Bella Terra and Bella Sera homes approaching roof replacement age?</h3>
  <p>Many Bella Terra and Bella Sera homes were built in the 2000s-2010s and are entering or approaching the 15-20 year inspection window. Proactive assessment catches minor issues before they become major expenses. We recommend professional inspection for any home in these communities that's 15+ years old.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/greenacres/best-roofers-greenacres" style="color: #dc2626; text-decoration: underline;">Best Roofers in Greenacres</a></li>
    <li><a href="/locations/wellington/best-roofers-wellington" style="color: #dc2626; text-decoration: underline;">Best Roofers in Wellington</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Royal Palm Beach Roofing Services</a></li>
    <li><a href="/roof-repair/royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Royal Palm Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Royal Palm Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersRPBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Royal Palm Beach FL (2026) | All Phase',
    'Looking for the best roofers in Royal Palm Beach? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/royal-palm-beach/best-roofers-royal-palm-beach',
    bestRoofersRPBContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does roof replacement cost in Royal Palm Beach?","acceptedAnswer":{"@type":"Answer","text":"Royal Palm Beach roof replacement ranges from $8,000 to $15,000 for most homes. Bella Terra and Bella Sera gated community properties may cost more due to HOA material requirements. Contact All Phase Construction USA at (754) 227-5605 for a free estimate."}},{"@type":"Question","name":"What roofing material performs best in Royal Palm Beach?","acceptedAnswer":{"@type":"Answer","text":"Concrete tile and metal roofing deliver the best long-term value in Royal Palm Beach\'s climate. Tile offers 40+ years of protection with wind resistance up to 150 mph. Metal roofing reflects heat and stands up to the intense summer storms that frequently hit western Palm Beach County."}},{"@type":"Question","name":"What credentials should my Royal Palm Beach roofer have?","acceptedAnswer":{"@type":"Answer","text":"Confirm your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA maintains CCC-1331464 and CGC-1526236 dual licenses. For Bella Terra and Bella Sera work, verify HOA coordination experience."}},{"@type":"Question","name":"Are Bella Terra and Bella Sera homes approaching roof replacement age?","acceptedAnswer":{"@type":"Answer","text":"Many Bella Terra and Bella Sera homes were built in the 2000s-2010s and are entering or approaching the 15-20 year inspection window. Proactive assessment catches minor issues before they become major expenses. We recommend professional inspection for any home in these communities that\'s 15+ years old."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Royal Palm Beach","item":"https://allphaseconstructionfl.com/locations/royal-palm-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in Royal Palm Beach","item":"https://allphaseconstructionfl.com/locations/royal-palm-beach/best-roofers-royal-palm-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/royal-palm-beach/best-roofers-royal-palm-beach/index.html');

  // Best Roofers Greenacres - Premium Money Page
  const bestRoofersGreenacresDir = path.join(distDir, 'locations/greenacres/best-roofers-greenacres');
  fs.mkdirSync(bestRoofersGreenacresDir, { recursive: true });
  const bestRoofersGreenacresContent = `
  <h1>Top 5 Best Rated Roofers in Greenacres, FL (2026)</h1>
  <p>Greenacres is a growing residential community in central Palm Beach County with a mix of newer gated developments and established neighborhoods. Nautica Isles' 1,500+ homes and River Bridge's 1,100+ properties represent concentrated roofing demand. Here are five Palm Beach County contractors that deliver.</p>
  <h2>Why Greenacres Roofing Requires Climate-Tough Materials</h2>
  <p><a href="https://www.epa.gov/greeningepa" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Greenacres Freedom Park</a> features a large lake, sports fields, skate park, and BMX track &mdash; anchoring the residential core. Nautica Isles, a gated community by GL Homes with 1,500+ homes across four subdivisions, represents the city's largest concentration of roofing needs. The 1,700-acre Okeeheelee Park sits on the western city limit. River Bridge's well-maintained gated neighborhood houses 1,100+ homes. Harsh thunderstorms, heavy rain, and high humidity promote moss, algae, and mold growth that shortens roof lifespan.</p>
  <h2>Your List of the Top 5 Best Roofers in Greenacres, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Greenacres properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Distinctive Roofing</strong></li>
    <li><strong>Neal Roofing &amp; Waterproofing</strong></li>
    <li><strong>Bentley Roofing</strong></li>
  </ol>
  <h2>Roofing for Nautica Isles, River Bridge, and Cresthaven</h2>
  <p>Nautica Isles and River Bridge homes built in the 2000s are approaching the 20-year mark. Cresthaven Boulevard's villas and townhouses from the 1960s represent Greenacres' oldest housing stock, requiring structural assessment before reroofing. We handle both community types with the appropriate level of assessment and expertise.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/greenacres" style="color: #dc2626; text-decoration: underline;">Greenacres roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Greenacres</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does roof replacement cost in Greenacres?</h3>
  <p>Greenacres roof replacement typically costs &#36;7,500 to &#36;14,000 depending on home size and material. Nautica Isles and River Bridge homes with tile systems tend toward the higher end. Contact All Phase Construction USA at (754) 227-5605 for a free assessment.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Greenacres' climate?</h3>
  <p>Metal and concrete tile roofing offer the longest lifespan in Greenacres' harsh climate &mdash; 40-50 years versus 15-20 for standard shingles. Greenacres' intense thunderstorms, heavy rain, and high humidity promote moss, algae, and mold growth that shortens shingle life. Tile and metal resist these conditions far better.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a Greenacres roofer's qualifications?</h3>
  <p>Ensure your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Ask for references from Greenacres neighborhoods and verify active liability insurance.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are Nautica Isles and River Bridge homes due for roof work?</h3>
  <p>Yes. Nautica Isles (1,500+ homes across four subdivisions) and River Bridge (1,100+ homes) were both built in the 2000s era and are approaching the 20-year mark. Proactive roof maintenance at this stage prevents costly emergency repairs. We offer community coordination for multi-home projects.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/royal-palm-beach/best-roofers-royal-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Royal Palm Beach</a></li>
    <li><a href="/locations/lake-worth-beach/best-roofers-lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Lake Worth Beach</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/greenacres" style="color: #dc2626; text-decoration: underline;">Greenacres Roofing Services</a></li>
    <li><a href="/roof-repair/greenacres" style="color: #dc2626; text-decoration: underline;">Greenacres Roof Repair</a></li>
    <li><a href="/roof-inspection/greenacres" style="color: #dc2626; text-decoration: underline;">Greenacres Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersGreenacresDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Greenacres FL (2026) | All Phase',
    'Looking for the best roofers in Greenacres? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/greenacres/best-roofers-greenacres',
    bestRoofersGreenacresContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does roof replacement cost in Greenacres?","acceptedAnswer":{"@type":"Answer","text":"Greenacres roof replacement typically costs $7,500 to $14,000 depending on home size and material. Nautica Isles and River Bridge homes with tile systems tend toward the higher end. Contact All Phase Construction USA at (754) 227-5605 for a free assessment."}},{"@type":"Question","name":"Which roofing material is best for Greenacres\' climate?","acceptedAnswer":{"@type":"Answer","text":"Metal and concrete tile roofing offer the longest lifespan in Greenacres\' harsh climate \u2014 40-50 years versus 15-20 for standard shingles. Greenacres\' intense thunderstorms, heavy rain, and high humidity promote moss, algae, and mold growth that shortens shingle life. Tile and metal resist these conditions far better."}},{"@type":"Question","name":"How do I verify a Greenacres roofer\'s qualifications?","acceptedAnswer":{"@type":"Answer","text":"Ensure your roofer holds a Florida CCC license and meets Palm Beach County wind-code requirements. All Phase Construction USA carries CCC-1331464 and CGC-1526236 dual licenses. Ask for references from Greenacres neighborhoods and verify active liability insurance."}},{"@type":"Question","name":"Are Nautica Isles and River Bridge homes due for roof work?","acceptedAnswer":{"@type":"Answer","text":"Yes. Nautica Isles (1,500+ homes across four subdivisions) and River Bridge (1,100+ homes) were both built in the 2000s era and are approaching the 20-year mark. Proactive roof maintenance at this stage prevents costly emergency repairs. We offer community coordination for multi-home projects."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Greenacres","item":"https://allphaseconstructionfl.com/locations/greenacres"},{"@type":"ListItem","position":3,"name":"Best Roofers in Greenacres","item":"https://allphaseconstructionfl.com/locations/greenacres/best-roofers-greenacres"}]}]')
  ));
  console.log('✅ Prerendered: locations/greenacres/best-roofers-greenacres/index.html');

  // Best Roofers Lake Worth Beach - Premium Money Page
  const bestRoofersLWBDir = path.join(distDir, 'locations/lake-worth-beach/best-roofers-lake-worth-beach');
  fs.mkdirSync(bestRoofersLWBDir, { recursive: true });
  const bestRoofersLWBContent = `
  <h1>Top 5 Best Rated Roofers in Lake Worth Beach, FL (2026)</h1>
  <p>Lake Worth Beach combines historic charm with coastal living, featuring diverse architecture from 1920s bungalows to modern construction. The city's location on the Intracoastal demands roofers who understand both preservation requirements and coastal building standards. Here are five Palm Beach County roofers we recommend.</p>
  <h2>Why Lake Worth Beach Roofing Balances History and Hurricane Safety</h2>
  <p>Lake Worth Beach features a vibrant arts district and direct beach access along the <a href="https://en.wikipedia.org/wiki/Lake_Worth_Beach,_Florida" target="_blank" rel="noopener noreferrer" style="color: #dc2626; text-decoration: underline;">Lake Worth Municipal Beach</a>. College Park and Old Lucerne are listed on the National Register of Historic Places. The city's diverse housing stock spans 1920s-era historic bungalows, mid-century concrete block homes, and modern coastal construction. Properties east of I-95 face increased salt air exposure that accelerates fastener and flashing corrosion.</p>
  <h2>Your List of the Top 5 Best Roofers in Lake Worth Beach, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed. Headquartered in neighboring Deerfield Beach for fast response to Lake Worth Beach properties.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Altec Roofing</strong></li>
    <li><strong>Crowther Roofing</strong></li>
    <li><strong>Roof Top Services</strong></li>
  </ol>
  <h2>Roofing for College Park, Old Lucerne, and Coastal Properties</h2>
  <p>College Park and Old Lucerne's historic preservation guidelines require specific roofing materials and profiles. Properties east of US-1 face intense salt-air corrosion requiring marine-grade components. We coordinate with the preservation board and specify appropriate materials for each Lake Worth Beach neighborhood.</p>
  <p>Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Lake Worth Beach</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does roof replacement cost in Lake Worth Beach?</h3>
  <p>Lake Worth Beach roof replacement ranges from &#36;8,500 to &#36;16,000 depending on roof size and material selection. Historic district properties in College Park may require specialty materials affecting cost. Contact All Phase Construction USA at (754) 227-5605 for a detailed assessment.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Lake Worth Beach's coastal exposure?</h3>
  <p>Premium metal roofing and impact-resistant shingles with marine-grade fasteners are ideal for Lake Worth Beach's Intracoastal proximity. College Park and Old Lucerne historic homes require materials that balance preservation guidelines with modern storm protection. Properties east of US-1 need enhanced salt-air specifications.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a Lake Worth Beach roofer has proper credentials?</h3>
  <p>Confirm your roofer holds a Florida CCC license and wind-code certification for Palm Beach County. All Phase Construction USA maintains CCC-1331464 and CGC-1526236 dual licenses. For historic district work, verify your contractor has preservation board coordination experience.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Are there historic preservation requirements for roofing in Lake Worth Beach?</h3>
  <p>Yes. College Park and Old Lucerne are listed on the National Register of Historic Places with architectural guidelines governing roofing materials and appearance. We coordinate with Lake Worth Beach's preservation board to ensure compliance while delivering modern wind-code-rated protection that keeps your home safe and insured.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/boynton-beach/best-roofers-boynton-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Boynton Beach</a></li>
    <li><a href="/locations/greenacres/best-roofers-greenacres" style="color: #dc2626; text-decoration: underline;">Best Roofers in Greenacres</a></li>
    <li><a href="/locations/west-palm-beach/best-roofers-west-palm-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in West Palm Beach</a></li>
    <li><a href="/locations/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach Roofing Services</a></li>
    <li><a href="/roof-repair/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersLWBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Lake Worth Beach FL (2026) | All Phase',
    'Looking for the best roofers in Lake Worth Beach? We reviewed the top 5 roofing contractors. See who made the list.',
    'https://allphaseconstructionfl.com/locations/lake-worth-beach/best-roofers-lake-worth-beach',
    bestRoofersLWBContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does roof replacement cost in Lake Worth Beach?","acceptedAnswer":{"@type":"Answer","text":"Lake Worth Beach roof replacement ranges from $8,500 to $16,000 depending on roof size and material selection. Historic district properties in College Park may require specialty materials affecting cost. Contact All Phase Construction USA at (754) 227-5605 for a detailed assessment."}},{"@type":"Question","name":"Which roofing material is best for Lake Worth Beach\'s coastal exposure?","acceptedAnswer":{"@type":"Answer","text":"Premium metal roofing and impact-resistant shingles with marine-grade fasteners are ideal for Lake Worth Beach\'s Intracoastal proximity. College Park and Old Lucerne historic homes require materials that balance preservation guidelines with modern storm protection. Properties east of US-1 need enhanced salt-air specifications."}},{"@type":"Question","name":"How do I verify a Lake Worth Beach roofer has proper credentials?","acceptedAnswer":{"@type":"Answer","text":"Confirm your roofer holds a Florida CCC license and wind-code certification for Palm Beach County. All Phase Construction USA maintains CCC-1331464 and CGC-1526236 dual licenses. For historic district work, verify your contractor has preservation board coordination experience."}},{"@type":"Question","name":"Are there historic preservation requirements for roofing in Lake Worth Beach?","acceptedAnswer":{"@type":"Answer","text":"Yes. College Park and Old Lucerne are listed on the National Register of Historic Places with architectural guidelines governing roofing materials and appearance. We coordinate with Lake Worth Beach\'s preservation board to ensure compliance while delivering modern wind-code-rated protection that keeps your home safe and insured."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Lake Worth Beach","item":"https://allphaseconstructionfl.com/locations/lake-worth-beach"},{"@type":"ListItem","position":3,"name":"Best Roofers in Lake Worth Beach","item":"https://allphaseconstructionfl.com/locations/lake-worth-beach/best-roofers-lake-worth-beach"}]}]')
  ));
  console.log('✅ Prerendered: locations/lake-worth-beach/best-roofers-lake-worth-beach/index.html');

  // Best Roofers Parkland - Premium Money Page
  const bestRoofersParklandDir = path.join(distDir, 'locations/parkland/best-roofers-parkland');
  fs.mkdirSync(bestRoofersParklandDir, { recursive: true });
  const bestRoofersParklandContent = `
  <h1>Top 5 Best Rated Roofers in Parkland, FL (2026)</h1>
  <p>Parkland is one of Broward County's most exclusive luxury communities, with gated estate neighborhoods, strict HOA architectural review boards, and homes that demand premium tile, slate, and metal roofing systems. Finding a Parkland roofer means hiring a contractor who can coordinate with Heron Bay, Parkland Golf &amp; Country Club, and MiraLago ARCs, carries HVHZ certification for Broward's 175+ mph wind-load requirements, and delivers workmanship at the standard Parkland homeowners expect. We evaluated dozens of licensed contractors and identified five we would recommend to a Parkland neighbor.</p>
  <h2>Why Parkland Roofing Demands HOA Coordination and Premium Materials</h2>
  <p>Parkland sits inside Florida's High-Velocity Hurricane Zone and features some of the largest single-family estate footprints in Broward County. Communities like Heron Bay, Parkland Golf &amp; Country Club, MiraLago, Parkland Isles, and Pine Tree Estates enforce strict architectural review covering tile color, profile, manufacturer, and visible metal flashing. Properties in Parkland Golf &amp; Country Club and the Ranches of Parkland often have roof footprints of 4,000 to 8,000 square feet, complex hip and valley geometries, and premium tile or slate systems that require specialized fastening and underlayment assemblies. Every Parkland reroof also requires HVHZ-compliant design, product approvals on file with Broward County, and tie-in work that preserves ARC-approved appearance.</p>
  <h2>Your List of the Top 5 Best Roofers in Parkland, FL</h2>
  <ol>
    <li><strong>All Phase Construction USA</strong> &mdash; Dual-licensed (CCC-1331464 &amp; CGC-1526236), HVHZ-certified, 2,500+ roofs completed across Broward and Palm Beach Counties. Parkland HOA &amp; ARC submission packages handled in-house. Deerfield Beach HQ means fast mobilization to Parkland estate projects.</li>
    <li><strong>Kelly Roofing</strong></li>
    <li><strong>Altec Roofing</strong></li>
    <li><strong>Crowther Roofing</strong></li>
    <li><strong>Istueta Roofing</strong></li>
  </ol>
  <h2>Roofing for Heron Bay, Parkland Golf &amp; Country Club, and MiraLago Estates</h2>
  <p>Every Parkland community enforces its own ARC guidelines. Heron Bay's architectural review controls tile color and profile across 1,500+ estate homes. Parkland Golf &amp; Country Club and MiraLago require pre-approval packages including manufacturer data sheets, color samples, and installation method statements. We prepare the full HOA/ARC submittal as part of every Parkland proposal and handle board coordination on the homeowner's behalf. Our CGC license also lets us assess and address any structural deck concerns on larger estate footprints before the new tile or metal system goes down.</p>
  <p>Ready for a free Parkland roof assessment? Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/parkland" style="color: #dc2626; text-decoration: underline;">Parkland roofing page</a> to learn more.</p>
  <h2>Frequently Asked Questions About Roofing in Parkland</h2>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">What does roof replacement cost in Parkland, FL?</h3>
  <p>Parkland roof replacement typically ranges from &#36;18,000 to &#36;45,000+ because of larger estate footprints and premium material specifications. Heron Bay and Parkland Golf &amp; Country Club tile roofs often exceed &#36;30,000 due to tile cost, fastening requirements, and HOA-specified manufacturers. Contact All Phase Construction USA at (754) 227-5605 for a detailed estate-level assessment.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Do Parkland HOAs like Heron Bay and Parkland Golf &amp; Country Club require approval before roof replacement?</h3>
  <p>Yes. Every Parkland master-planned community requires architectural review approval before roofing work begins — Heron Bay, Parkland Golf &amp; Country Club, MiraLago, Parkland Isles, and the Ranches of Parkland all enforce their own ARC guidelines covering color, tile profile, and manufacturer. We prepare the full ARC submittal package (manufacturer data sheets, color samples, installation method statement, insurance certificates) as part of every Parkland proposal.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">Which roofing material is best for Parkland estate homes?</h3>
  <p>Premium concrete or clay tile and standing-seam metal are the two dominant Parkland systems. Concrete tile meets HVHZ requirements with 40-50 year service life at architectural profiles approved by most Parkland HOAs. Standing-seam metal is favored on newer contemporary estates and performs exceptionally in Broward's wind regime. Slate is less common but seen on some Parkland Golf &amp; Country Club estates where ARC allows it.</p>
  <h3 style="font-size: 1.1rem; font-weight: bold; margin-top: 1.25rem;">How do I verify a Parkland roofer is HVHZ-certified and ARC-experienced?</h3>
  <p>Confirm the contractor holds a valid Florida CCC roofing license or CGC general contractor license at myfloridalicense.com and verify HVHZ product approvals on file with Broward County. All Phase Construction USA carries CCC-1331464 and CGC-1526236, both verifiable in Florida's database. Ask for Parkland references, prior ARC submittal examples, and proof of active liability insurance.</p>

  <h2>Best Roofers in Nearby Cities</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/coral-springs/best-roofers-coral-springs" style="color: #dc2626; text-decoration: underline;">Best Roofers in Coral Springs</a></li>
    <li><a href="/locations/deerfield-beach/best-roofers-deerfield-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Deerfield Beach</a></li>
    <li><a href="/locations/pompano-beach/best-roofers-pompano-beach" style="color: #dc2626; text-decoration: underline;">Best Roofers in Pompano Beach</a></li>
    <li><a href="/locations/parkland" style="color: #dc2626; text-decoration: underline;">Parkland Roofing Services</a></li>
    <li><a href="/roof-repair/parkland" style="color: #dc2626; text-decoration: underline;">Parkland Roof Repair</a></li>
    <li><a href="/roof-inspection/parkland" style="color: #dc2626; text-decoration: underline;">Parkland Roof Inspection</a></li>
  </ul>
`;
  fs.writeFileSync(path.join(bestRoofersParklandDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Parkland FL (2026) | All Phase',
    'Top 5 HVHZ-certified roofers in Parkland FL serving Heron Bay, Parkland Golf & Country Club, and MiraLago. Independent Broward review.',
    'https://allphaseconstructionfl.com/locations/parkland/best-roofers-parkland',
    bestRoofersParklandContent,
    JSON.parse('[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does roof replacement cost in Parkland, FL?","acceptedAnswer":{"@type":"Answer","text":"Parkland roof replacement typically ranges from $18,000 to $45,000+ because of larger estate footprints and premium material specifications. Heron Bay and Parkland Golf & Country Club tile roofs often exceed $30,000 due to tile cost, fastening requirements, and HOA-specified manufacturers. Contact All Phase Construction USA at (754) 227-5605 for a detailed estate-level assessment."}},{"@type":"Question","name":"Do Parkland HOAs like Heron Bay and Parkland Golf & Country Club require approval before roof replacement?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every Parkland master-planned community requires architectural review approval before roofing work begins \u2014 Heron Bay, Parkland Golf & Country Club, MiraLago, Parkland Isles, and the Ranches of Parkland all enforce their own ARC guidelines covering color, tile profile, and manufacturer. We prepare the full ARC submittal package (manufacturer data sheets, color samples, installation method statement, insurance certificates) as part of every Parkland proposal."}},{"@type":"Question","name":"Which roofing material is best for Parkland estate homes?","acceptedAnswer":{"@type":"Answer","text":"Premium concrete or clay tile and standing-seam metal are the two dominant Parkland systems. Concrete tile meets HVHZ requirements with 40-50 year service life at architectural profiles approved by most Parkland HOAs. Standing-seam metal is favored on newer contemporary estates and performs exceptionally in Broward\'s wind regime. Slate is less common but seen on some Parkland Golf & Country Club estates where ARC allows it."}},{"@type":"Question","name":"How do I verify a Parkland roofer is HVHZ-certified and ARC-experienced?","acceptedAnswer":{"@type":"Answer","text":"Confirm the contractor holds a valid Florida CCC roofing license or CGC general contractor license at myfloridalicense.com and verify HVHZ product approvals on file with Broward County. All Phase Construction USA carries CCC-1331464 and CGC-1526236, both verifiable in Florida\'s database. Ask for Parkland references, prior ARC submittal examples, and proof of active liability insurance."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allphaseconstructionfl.com/"},{"@type":"ListItem","position":2,"name":"Parkland","item":"https://allphaseconstructionfl.com/locations/parkland"},{"@type":"ListItem","position":3,"name":"Best Roofers in Parkland","item":"https://allphaseconstructionfl.com/locations/parkland/best-roofers-parkland"}]}]')
  ));
  console.log('✅ Prerendered: locations/parkland/best-roofers-parkland/index.html');



  // ============================================================
  // REGRESSION SAFEGUARD: Verify dist/index.html wasn't corrupted
  // ============================================================
  const distIndex = path.join(distDir, 'index.html');
  if (fs.existsSync(distIndex)) {
    const distHTML = fs.readFileSync(distIndex, 'utf-8');
    if (distHTML.includes('/src/main.tsx')) {
      throw new Error(
        '✅ REGRESSION: dist/index.html references /src/main.tsx!\n' +
        'The Vite production build was overwritten with dev content.\n' +
        'This would break the live site. Build aborted.'
      );
    }
    if (!distHTML.includes('/assets/')) {
      throw new Error(
        '✅ REGRESSION: dist/index.html missing /assets/ references!\n' +
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
            `✅ REGRESSION: dist/locations/${slug}/index.html has EMPTY root!\n` +
            'Prerender content must be injected INSIDE <div id="root">, not outside.\n' +
            'Build aborted.'
          );
        }
      }
    }
    console.log('\n✅ Safeguard 2 passed: All location pages have non-empty root divs');
  }

  // =====================================================================
  // PRIORITY 1 — Coastal PBC content pages (PR #8)
  // Target: NE quadrant of LeadSnap 1001074 heatmap (ranks 11–19)
  // =====================================================================
  const priority1Pages = [
    {
      slug: 'highland-beach-roof-replacement',
      title: 'Highland Beach Roof Replacement | All Phase USA',
      description: 'Salt-air roof replacement for Highland Beach FL oceanfront homes. Stainless fasteners, peel-and-stick underlayment, PBC wind-code. Free inspection.',
      h1: 'Roof Replacement in Highland Beach, FL',
      intro: `Highland Beach sits on a narrow barrier island between the Intracoastal and the Atlantic, which means every roof on A1A faces salt spray, UV, and direct onshore wind loads that inland Palm Beach County roofs never see. All Phase Construction USA replaces tile, metal, and flat roofs across Highland Beach with Palm Beach County wind-code compliant assemblies rated for 170+ mph design wind speeds.`,
      sections: `
  <h2>Why Coastal Highland Beach Roofs Fail Early</h2>
  <p>Three things kill an oceanfront roof faster than the manufacturer's warranty says it should: salt fog corrosion of exposed fasteners and flashing, UV degradation of underlayment that bakes felt brittle in half the time of an inland home, and uplift pressure at the eaves driven by Exposure D open-ocean wind loads. We design every Highland Beach assembly around these three problems from the deck up — 304-grade stainless fastening, SBS-modified peel-and-stick underlayment, and enhanced edge metal with a reinforced fastening schedule.</p>
  <h2>Landmarks We Serve Near Highland Beach</h2>
  <p>We regularly work the A1A corridor from Spanish River Park at the north end down through Red Reef Park and the South Inlet Park area at the Boca Inlet. The Boca Raton Resort &amp; Club's historic Mediterranean tile aesthetic sets the visual benchmark we match on private estates along Ocean Blvd, and the Boca Inlet zone carries the worst salt exposure on this stretch of coast.</p>
  <h2>Materials We Recommend for Highland Beach</h2>
  <p>Clay and concrete tile deliver the A1A aesthetic with a 50-year service life when installed on stainless battens. Standing-seam aluminum is salt-proof with a 40+ year life and typically earns premium credits from coastal insurers. For flat sections we specify fully adhered white modified-bitumen for heat rejection and wind compliance.</p>
  <h2>What the Replacement Process Looks Like</h2>
  <p>Free inspection, drone and attic deck evaluation, permit pulled with the Town of Highland Beach, tear-off, deck repair, peel-and-stick underlayment, new roof system, final inspection, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    },
    {
      slug: 'coastal-boca-raton-roofing-contractor',
      title: 'Coastal Boca Raton Roofing Contractor | All Phase USA',
      description: 'Salt-air roof replacement and repair for east Boca Raton. Stainless fasteners, peel-and-stick underlayment, PBC wind-code compliant. Licensed & insured.',
      h1: 'Coastal Boca Raton Roofing Contractor',
      intro: `The stretch of Boca Raton east of the Intracoastal — from the Boca Inlet north to Spanish River Park — is one of the harshest roofing environments in Palm Beach County. All Phase Construction USA specializes in coastal re-roofs that actually hit their warranty lifespan, using stainless fastening, SBS-modified peel-and-stick underlayment, and assemblies engineered for Exposure D wind loads.`,
      sections: `
  <h2>The East-Boca Roofing Problem</h2>
  <p>Coastal Boca homes deal with three failure modes that inland homes don't: chloride intrusion rusting out fasteners and flashing, direct UV load on south and east elevations accelerating granule loss, and Exposure D wind pressures at the eaves where pressure maps show uplift values 30–50% higher than inland Boca. We design every coastal assembly around those three problems from the deck up.</p>
  <h2>Neighborhoods &amp; Landmarks We Serve</h2>
  <p>Our coastal Boca service area covers the Spanish River Park corridor at the north end, the Red Reef Park mid-coastal zone, the Boca Inlet and South Inlet Park area with the worst salt exposure in the city, and the Ocean Blvd / A1A corridor between Palmetto Park Road and Spanish River Boulevard. The Boca Raton Resort &amp; Club remains the Mediterranean tile benchmark we match on private estates.</p>
  <h2>Assemblies We Install on Coastal Boca Homes</h2>
  <p>Clay or concrete tile on stainless battens with 304-grade fasteners. Standing-seam aluminum with zero ferrous metal and a 40+ year service life. White modified-bitumen for flat sections with full adhesion and wind-rated edge metal.</p>
  <h2>Our Coastal Workflow</h2>
  <p>Drone and attic inspection, PBC wind mitigation evaluation, City of Boca Raton permit, tear-off, deck repair and re-nail, peel-and-stick underlayment, primary roof system, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    },
    {
      slug: 'oceanfront-roof-replacement-palm-beach-county',
      title: 'Oceanfront Roofing in Palm Beach County | All Phase',
      description: 'Oceanfront roof replacement across Palm Beach County — Highland Beach, Boca Raton, Delray Beach. Salt-rated, PBC wind-code compliant, insurance-ready.',
      h1: 'Oceanfront Roof Replacement in Palm Beach County',
      intro: `Oceanfront homes in Palm Beach County face wind, salt, and sun loads that kill standard roofs decades early. All Phase Construction USA replaces oceanfront roofs across the county — from the Boca Inlet north through Highland Beach and coastal Delray — with assemblies engineered specifically for Exposure D sites and rated to Palm Beach County's 170+ mph design wind speeds.`,
      sections: `
  <h2>What "Oceanfront-Rated" Actually Means</h2>
  <p>Most contractors quote the same assembly for a home on A1A as they'd quote for one five miles inland. That is the single biggest reason oceanfront roofs fail early. Our oceanfront spec changes five things: 304-grade stainless fasteners throughout with no galvanized or coated steel, SBS-modified peel-and-stick underlayment with full coverage, enhanced edge metal with hemmed drip and reinforced fastening for Exposure D uplift, a deck re-nailed to current PBC fastening schedule before any new system goes on, and aluminum or non-ferrous flashings at every penetration and valley.</p>
  <h2>Communities We Serve</h2>
  <p>Highland Beach across the entire A1A corridor, coastal Boca Raton from the Boca Inlet to Spanish River Park, coastal Delray Beach from Atlantic Dunes Park to the Gulf Stream line, and Gulf Stream and Manalapan for ultra-coastal single-family work. Geographic anchors include Spanish River Park, Red Reef Park, South Inlet Park, and Atlantic Dunes Park.</p>
  <h2>Systems We Install Oceanfront</h2>
  <p>Clay and concrete tile in the Mediterranean aesthetic most HOAs require, installed with stainless battens. Standing-seam aluminum for the highest-longevity option with zero corrosion risk. Premium modified-bitumen for flat and low-slope sections with white-cap heat rejection.</p>
  <h2>Insurance and Wind Mitigation</h2>
  <p>Every oceanfront re-roof we complete includes a wind mitigation form delivered directly to your insurer, typically unlocking meaningful premium credits for opening protection, roof-to-wall connections, and roof covering class. On a coastal PBC home, that credit often covers a significant portion of the re-roof over the policy lifetime.</p>
      `
    }
  ];

  // =====================================================================
  // PRIORITY 2 — Delray Beach content pages (PR #9)
  // Target: row 0 cols 4–11 (ranks 13–18) — entire Delray latitude band
  // =====================================================================
  const priority2Pages = [
    {
      slug: 'delray-beach-roof-replacement',
      title: 'Delray Beach Roof Replacement | All Phase USA',
      description: 'Roof replacement in Delray Beach, FL. Tile, metal, and shingle systems built to Palm Beach County wind code. Licensed, insured, insurance-claim ready.',
      h1: 'Roof Replacement in Delray Beach, FL',
      intro: `Delray Beach roofs run the full range — historic bungalows off Atlantic Avenue, coastal estates along Gulf Stream, and mid-century single-family homes west to Morikami. All Phase Construction USA replaces every one of them to Palm Beach County wind-code standards with 170+ mph design wind speeds.`,
      sections: `
  <h2>The Delray Beach Roofing Market</h2>
  <p>Delray's housing stock spans nearly a century, which means we see everything from original clay barrel tile on Old School Square bungalows to aging architectural shingles on 1990s subdivisions west of I-95. Each era has its own failure pattern, and each deserves an assembly engineered for its specific site, not a one-size-fits-all quote.</p>
  <h2>Neighborhoods &amp; Landmarks We Serve</h2>
  <p>Our Delray Beach service area covers the Atlantic Avenue downtown commercial corridor, the Old School Square and Pineapple Grove Arts District historic belt, the Seagate and Gulf Stream coastal estate zone, and the west-side communities anchored by Morikami Park. Each of these areas carries its own HOA and architectural review considerations, and we coordinate approvals before any tear-off begins.</p>
  <h2>Materials We Install in Delray Beach</h2>
  <p>Clay and concrete tile for historic and Mediterranean-style homes. Standing-seam metal for coastal and modern builds. Architectural asphalt shingles for inland subdivisions where HOA guidelines require them. Every system carries a manufacturer warranty plus our workmanship guarantee.</p>
  <h2>Insurance and Wind Mitigation</h2>
  <p>Every Delray Beach re-roof we complete includes a wind mitigation form delivered to your insurer, typically unlocking credits for opening protection, roof-to-wall connections, and roof covering class.</p>
      `
    },
    {
      slug: 'delray-beach-tile-roof-contractor',
      title: 'Delray Beach Tile Roof Contractor | All Phase USA',
      description: 'Clay and concrete tile roofing in Delray Beach, FL. Historic re-roofs, coastal tile installs, HOA-compliant. Palm Beach County wind-code certified.',
      h1: 'Delray Beach Tile Roof Contractor',
      intro: `Tile roofs define the Delray Beach aesthetic — from the historic barrel tile off Atlantic Avenue to the contemporary flat tile on Gulf Stream estates. All Phase Construction USA installs, replaces, and repairs clay and concrete tile systems built to Palm Beach County wind code with stainless battens and peel-and-stick underlayment.`,
      sections: `
  <h2>Why Tile Still Dominates Delray Beach</h2>
  <p>Tile delivers a 50-year service life when installed correctly, matches the Mediterranean and Spanish Revival architecture the city is known for, and passes nearly every HOA architectural review in Delray. The failure point on most aging Delray tile roofs is not the tile itself — it's the underlayment below, which bakes brittle in 20–25 years. Our tile re-roofs always include a full underlayment replacement with SBS-modified peel-and-stick.</p>
  <h2>Historic Delray Tile Work</h2>
  <p>Homes around Old School Square and the Pineapple Grove Arts District often carry original barrel tile that can be salvaged and reset over new underlayment. We handle salvage-and-reset projects regularly and can source matching replacement tile for pieces that don't make the cut.</p>
  <h2>Coastal Tile Installs</h2>
  <p>On the coastal side — Seagate, Gulf Stream, and the oceanfront zone down to Atlantic Dunes Park — we install clay and concrete tile on stainless battens with 304-grade fasteners to eliminate corrosion risk in salt air.</p>
  <h2>HOA Coordination</h2>
  <p>We pull permits with the City of Delray Beach and coordinate with each community's architectural review board before tear-off. No surprises, no stop-work orders.</p>
      `
    },
    {
      slug: 'historic-delray-roofing',
      title: 'Historic Delray Beach Roofing | All Phase USA',
      description: 'Historic district roofing in Delray Beach — Old School Square, Pineapple Grove, Atlantic Ave. Period-correct tile and shingle re-roofs, HOA approved.',
      h1: 'Historic Delray Beach Roofing',
      intro: `The historic core of Delray Beach — Old School Square, the Pineapple Grove Arts District, and the bungalow belt around Atlantic Avenue — requires roofing work that preserves period-correct aesthetics while meeting modern Palm Beach County wind-code requirements. All Phase Construction USA has been the roofing contractor local homeowners trust for exactly that combination.</p>`,
      sections: `
  <h2>The Historic Delray Roofing Challenge</h2>
  <p>Historic bungalows and Mediterranean Revival homes in the Delray core were built with original clay barrel tile or wood shingle systems. Modern code requires a fastening schedule and underlayment assembly that did not exist when these homes were built, and architectural review boards require a visual match to the original. Bridging that gap is what we do.</p>
  <h2>Period-Correct Materials</h2>
  <p>We source salvaged clay barrel tile for true historic matches, work with manufacturers producing period-accurate profiles for new installs, and specify architectural shingles in colors and patterns approved by the historic review board when tile is not on the original specification.</p>
  <h2>Landmarks in Our Historic Service Area</h2>
  <p>Old School Square is the central anchor for the Delray historic district, with Pineapple Grove Arts District extending north and the Atlantic Avenue commercial corridor running through the core. We work the residential streets off all three, from Swinton Avenue east to the Intracoastal.</p>
  <h2>Architectural Review Board Coordination</h2>
  <p>Every historic project starts with a submittal to the Delray Beach Historic Preservation Board. We handle the paperwork, the sample boards, and the approval process so your re-roof gets greenlit without delay.</p>
      `
    }
  ];

  // =====================================================================
  // PRIORITY 3 — West Boca Raton content pages (PR #9)
  // Target: rows 0–2 cols 0–3 (ranks 5–10) — 441/Glades corridor
  // =====================================================================
  const priority3Pages = [
    {
      slug: 'west-boca-raton-roof-replacement',
      title: 'West Boca Raton Roof Replacement | All Phase USA',
      description: 'Roof replacement in West Boca Raton, FL. Serving Mission Bay, Boca Del Mar, Sandalfoot Cove, and the 441/Glades corridor. PBC wind-code compliant.',
      h1: 'Roof Replacement in West Boca Raton, FL',
      intro: `West Boca Raton — the corridor west of Florida's Turnpike along Glades Road and State Road 7/441 — is home to one of Palm Beach County's largest concentrations of 1980s and 1990s single-family subdivisions and 55+ communities. All Phase Construction USA replaces roofs across the entire west-side market with Palm Beach County wind-code compliant assemblies rated for 170+ mph design wind speeds.`,
      sections: `
  <h2>The West Boca Roofing Market</h2>
  <p>Most West Boca subdivisions were built in a 20-year window between the late 1970s and the late 1990s, which means the bulk of the housing stock is now 25–45 years old and sitting squarely in the re-roof window. Original concrete tile and architectural shingle systems installed in that era are reaching end-of-life, and the underlayment below has almost universally failed regardless of visible tile condition.</p>
  <h2>Neighborhoods &amp; Landmarks We Serve</h2>
  <p>Our West Boca service area covers the Mission Bay community anchored by Mission Bay Plaza, the Boca Del Mar single-family belt, the Sandalfoot Cove community west of 441, and the Glades Road commercial corridor west of the Turnpike. South County Regional Park and Burt Aaronson Park sit at the far western edge of our service area and anchor the geographic reach.</p>
  <h2>Systems We Install in West Boca</h2>
  <p>Concrete tile replacements with full underlayment tear-off and stainless battens. Architectural asphalt shingles for subdivisions whose HOAs require shingle-to-shingle replacement. Standing-seam metal for homeowners who want the longest-life option available in Palm Beach County.</p>
  <h2>HOA &amp; Permit Coordination</h2>
  <p>Every West Boca subdivision carries its own architectural review board with its own color palette, tile profile, and shingle approval list. We coordinate submittals with the HOA and pull permits with Palm Beach County before tear-off begins.</p>
      `
    },
    {
      slug: 'kings-point-boca-roofing-contractor',
      title: 'Kings Point Boca Roofing Contractor | All Phase USA',
      description: 'Kings Point and West Boca 55+ community roofing. Condo, villa, and single-family re-roofs coordinated with association approval. PBC wind-code certified.',
      h1: 'Kings Point Boca Roofing Contractor',
      intro: `Kings Point and the surrounding 55+ communities of West Boca Raton make up one of the largest concentrated roofing markets in Palm Beach County. Villa-style and condominium roofing work here requires tight association coordination, and All Phase Construction USA handles that end-to-end while delivering re-roofs built to Palm Beach County wind code.`,
      sections: `
  <h2>The 55+ Community Roofing Challenge</h2>
  <p>Villa and patio-home roofing in Kings Point and similar West Boca communities requires coordinating with a community association on color match, tile profile, scheduling, and resident access. The work itself is straightforward; the coordination is where most contractors fall down. We handle association paperwork, scheduling windows, and resident notification as a standard part of every project.</p>
  <h2>Assemblies We Install</h2>
  <p>Concrete tile with full underlayment replacement on villa-style homes. Modified bitumen for flat and low-slope sections. Architectural shingles where association guidelines specify shingle-to-shingle replacement.</p>
  <h2>Service Area Landmarks</h2>
  <p>Our West Boca service area includes the Mission Bay Plaza commercial anchor, South County Regional Park at the western edge, and the entire Glades Road corridor west of Florida's Turnpike. We work Sandalfoot Cove and Boca Del Mar communities regularly alongside Kings Point.</p>
  <h2>Insurance Claim Support</h2>
  <p>Many West Boca 55+ residents file insurance claims after hurricane events. We provide full claim documentation, work directly with adjusters, and deliver a wind mitigation form on completion to unlock premium credits.</p>
      `
    },
    {
      slug: 'boca-raton-tile-re-roof',
      title: 'Boca Raton Tile Re-Roof | All Phase USA',
      description: 'Tile re-roofing in Boca Raton, FL. Clay and concrete tile, full underlayment replacement, PBC wind-code compliant. Free inspection, insurance-ready.',
      h1: 'Boca Raton Tile Re-Roof',
      intro: `A Boca Raton tile re-roof is almost never about the tile itself — it's about the underlayment underneath, which bakes brittle in 20–25 years and begins leaking long before the tile shows visible damage. All Phase Construction USA replaces tile roofs across Boca Raton with full underlayment tear-off, SBS-modified peel-and-stick replacement, and stainless battens for coastal-grade longevity.`,
      sections: `
  <h2>Why Tile Re-Roofs Matter in Boca Raton</h2>
  <p>Clay and concrete tile carry a 50-year service life, but the underlayment below them is typically rated for 20–25 years. That gap is why Boca Raton homeowners often find themselves with a "good-looking" roof that is actively leaking. A re-roof recycles the tile where possible, replaces the underlayment entirely, and resets the whole system for another 25 years of service.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection first. Tile removal and on-site storage where tile is salvageable. Full underlayment tear-off down to the deck. Deck repair and re-nailing to current PBC fastening schedule. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners, with new tile sourced where originals are cracked or chipped.</p>
  <h2>Neighborhoods We Serve</h2>
  <p>We handle tile re-roofs across all of Boca Raton — the central Camino Real belt, the northern Yamato Road corridor, the western communities around Boca Del Mar and Sandalfoot Cove, and the coastal A1A corridor. Each area has its own HOA and architectural review considerations, and we coordinate every submittal before work begins.</p>
  <h2>Warranty &amp; Insurance</h2>
  <p>Every tile re-roof includes a manufacturer underlayment warranty, our workmanship guarantee, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    }
  ];

  // =====================================================================
  // PRIORITY 4 — North Boca transition pages (PR #10)
  // Target: row 1 cols 4-7 (ranks 6-8) — one authoritative page per topic
  // tips the band into top-3
  // =====================================================================
  const priority4Pages = [
    {
      slug: 'north-boca-raton-roof-replacement',
      title: 'North Boca Raton Roof Replacement | All Phase USA',
      description: 'Roof replacement in North Boca Raton, FL. Yamato Road corridor, Spanish River Blvd, BCT airport area. Palm Beach County wind-code compliant.',
      h1: 'Roof Replacement in North Boca Raton, FL',
      intro: `North Boca Raton — the corridor between Yamato Road and the Delray Beach city line — is a mix of established 1980s single-family subdivisions, newer luxury communities along Spanish River Boulevard, and the commercial corridor around Boca Raton Airport. All Phase Construction USA replaces roofs across the entire north-side market with Palm Beach County wind-code compliant assemblies rated for 170+ mph design wind speeds.`,
      sections: `
  <h2>The North Boca Roofing Market</h2>
  <p>Most north-side Boca subdivisions were built in a 20-year window between 1980 and 2000, which puts the original roof systems squarely in the re-roof window. Concrete tile underlayment from that era has almost universally failed regardless of visible tile condition, and architectural shingle systems installed in the late 1990s are hitting the end of their service life right now.</p>
  <h2>Neighborhoods &amp; Landmarks We Serve</h2>
  <p>Our north Boca service area covers the Yamato Road commercial and residential corridor, the Spanish River Boulevard east–west artery, the Boca Raton Airport (BCT) vicinity with its heightened wind exposure, and the El Rio Trail anchor connecting the north-side communities. Each subdivision carries its own HOA architectural review considerations, and we coordinate submittals before any tear-off begins.</p>
  <h2>Systems We Install in North Boca</h2>
  <p>Concrete tile replacements with full underlayment tear-off and stainless battens. Architectural asphalt shingles for subdivisions whose HOAs require shingle-to-shingle replacement. Standing-seam metal for homeowners prioritizing the longest-life option available in Palm Beach County.</p>
  <h2>Permit &amp; HOA Coordination</h2>
  <p>We pull permits with the City of Boca Raton and coordinate with each community's architectural review board before work starts. No surprises, no stop-work orders, no HOA fines.</p>
      `
    },
    {
      slug: 'boca-raton-wind-mitigation-roofing',
      title: 'Boca Raton Wind Mitigation Roofing | All Phase USA',
      description: 'Wind mitigation roofing in Boca Raton, FL. PBC wind-code compliant assemblies, roof-to-wall connections, and insurance credits. Free inspection.',
      h1: 'Boca Raton Wind Mitigation Roofing',
      intro: `A wind mitigation re-roof in Boca Raton is about more than surviving a storm — it's about unlocking insurance premium credits that can cover a meaningful portion of the re-roof over the policy lifetime. All Phase Construction USA builds every Boca Raton re-roof to maximize wind mitigation credits under Palm Beach County's 170+ mph design wind speed standard.`,
      sections: `
  <h2>What Wind Mitigation Actually Means</h2>
  <p>Florida insurers grant premium credits for specific roof construction features: opening protection, roof-to-wall connection type, roof deck attachment schedule, roof covering class, and secondary water resistance. A properly documented re-roof can qualify a Boca Raton home for every one of those credits, which compound into a significant annual policy discount.</p>
  <h2>The Five Wind Mitigation Credits We Target</h2>
  <p>Roof deck attachment — we re-nail the deck to the current PBC fastening schedule before any new system goes on. Roof-to-wall connection — we verify or upgrade to clip, single wrap, or double wrap as site conditions allow. Roof covering — every system we install meets or exceeds the FBC HVHZ-equivalent class. Secondary water resistance — SBS-modified peel-and-stick underlayment on every re-roof. Opening protection — coordinated with impact window and door contractors when part of a larger envelope project.</p>
  <h2>The Wind Mitigation Form</h2>
  <p>On completion, we deliver a completed OIR-B1-1802 wind mitigation form to your insurer documenting every credit your new roof qualifies for. That single document is what unlocks the policy discount — without it, the credits don't exist.</p>
  <h2>Landmarks in Our North Boca Wind Mitigation Service Area</h2>
  <p>We service the Yamato Road corridor, Spanish River Boulevard artery, Boca Raton Airport (BCT) area, and El Rio Trail communities, along with the central Camino Real belt and the coastal A1A corridor.</p>
      `
    },
    {
      slug: 'palm-beach-county-roof-insurance-claim',
      title: 'Palm Beach County Roof Insurance Claim | All Phase USA',
      description: 'Palm Beach County roof insurance claim assistance. Adjuster coordination, full documentation, wind mitigation credits. Licensed & insured.',
      h1: 'Palm Beach County Roof Insurance Claim Assistance',
      intro: `A Palm Beach County roof insurance claim is won or lost on documentation. All Phase Construction USA handles the full claim process for homeowners across Boca Raton, Delray Beach, Boynton Beach, and the surrounding PBC market — drone photography, adjuster coordination, scope review, and wind mitigation credit filing after the re-roof is complete.`,
      sections: `
  <h2>How a PBC Roof Claim Actually Works</h2>
  <p>Most denied or underpaid roof claims come down to one issue: incomplete or missing documentation. The adjuster needs clear photographic evidence of storm damage, a documented timeline, and a scope of repair that matches the damage pattern. When any piece of that chain is missing, the claim gets reduced or denied.</p>
  <h2>Our Claim Documentation Process</h2>
  <p>Free inspection with drone and attic imaging on day one. Full photographic damage documentation, including close-ups of every affected area and wide shots for context. Scope of repair written to match the documented damage pattern, not a generic template. Direct coordination with your insurance adjuster during their site visit to ensure the scope we wrote and the scope they approve match.</p>
  <h2>After the Claim Is Approved</h2>
  <p>Once the claim is approved, we pull the Palm Beach County permit, execute the re-roof to current wind-code standards, and deliver a wind mitigation form to your insurer on completion. That last step typically unlocks premium credits that compound into a significant annual discount over the life of the policy.</p>
  <h2>Communities We Serve</h2>
  <p>Our insurance claim service area covers all of Palm Beach County — Boca Raton, Delray Beach, Highland Beach, Boynton Beach, and the west-side 55+ communities — with coordination for both named-storm and non-catastrophic claim events.</p>
      `
    }
  ];

  for (const p of priority4Pages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement</a></li>
    <li><a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Priority 4: ${p.slug}/index.html`);
    totalPages++;
  }

  // =====================================================================
  // BOYNTON BEACH GEO-RELEVANCE — Neighborhood + Service × City pages
  // Builds topical depth and neighborhood-level geo signal
  // =====================================================================
  const boyntonBeachPages = [
    {
      slug: 'boynton-beach-oceanfront-roofing',
      title: 'Boynton Beach Oceanfront Roofing | All Phase USA',
      description: 'Oceanfront roofing in Boynton Beach, FL. Salt-air rated systems for the A1A corridor near Oceanfront Park. PBC wind-code compliant. Free inspection.',
      h1: 'Boynton Beach Oceanfront Roofing',
      intro: `The A1A corridor through Boynton Beach — from Oceanfront Park at 6415 N. Ocean Blvd south to the Lantana border — puts roofs directly in the path of salt spray, UV, and onshore wind loads that inland systems never face. All Phase Construction USA builds coastal assemblies for Boynton Beach oceanfront homes rated to Palm Beach County's 170+ mph design wind speeds with salt-grade materials throughout.`,
      sections: `
  <h2>Why Oceanfront Boynton Beach Roofs Fail Early</h2>
  <p>Salt fog corrodes exposed fasteners and flashing within 18 months when the wrong metals are specified. UV bakes standard felt underlayment brittle in half the time of an inland home. Exposure D wind pressures at the eaves drive uplift values 30–50% higher than neighborhoods just a mile west. We spec 304-grade stainless fasteners, SBS-modified peel-and-stick underlayment, and reinforced edge metal on every oceanfront Boynton Beach project.</p>
  <h2>Landmarks in Our Coastal Service Area</h2>
  <p>Oceanfront Park and its boardwalk mark the center of the Boynton Beach coastal zone. The Boynton Inlet and its surrounding inlet-adjacent homes carry the worst salt exposure in the city. South of the inlet, the Manalapan line marks where Palm Beach County's highest-value coastal homes begin. We work the full stretch from Ocean Ridge south through the Boynton Beach city limits.</p>
  <h2>Coastal Assemblies We Install</h2>
  <p>Clay and concrete tile on stainless battens with 304-grade fasteners for the dominant coastal aesthetic. Standing-seam aluminum for maximum salt resistance and a 40+ year service life. Fully adhered white modified-bitumen for flat sections with wind-rated edge metal.</p>
  <h2>Wind Mitigation on Oceanfront Homes</h2>
  <p>Every coastal re-roof includes a completed OIR-B1-1802 wind mitigation form delivered to your insurer. On an oceanfront Boynton Beach home, the premium credits for opening protection, roof-to-wall connections, and roof covering class typically represent a meaningful offset against the re-roof cost over the policy lifetime.</p>
      `
    },
    {
      slug: 'boynton-beach-55-plus-community-roofing',
      title: 'Boynton Beach 55+ Community Roofing | All Phase USA',
      description: 'Roof replacement for 55+ communities in Boynton Beach — The Cascades, Valencia Lakes, Hunters Run. HOA coordinated, PBC wind-code compliant.',
      h1: 'Boynton Beach 55+ Community Roofing',
      intro: `The Cascades, Valencia Lakes, and Hunters Run represent some of the largest 55+ communities in Palm Beach County — and the bulk of their original roof systems, installed between 2000 and 2010, are now entering the re-roof window. All Phase Construction USA handles full-community and individual-unit re-roofs with end-to-end HOA coordination and Palm Beach County wind-code compliant assemblies.`,
      sections: `
  <h2>The 55+ Re-Roof Wave in Boynton Beach</h2>
  <p>Communities built in the early 2000s installed roof systems with a 20–25 year underlayment lifespan. In 2026, that clock has expired or is about to. The tile on many of these homes still looks fine from the street, but the underlayment beneath has lost its waterproofing integrity. A proactive re-roof now prevents the interior water damage, mold, and emergency repair costs that come from waiting.</p>
  <h2>Communities We Serve</h2>
  <p>The Cascades on Cascades Boulevard — the largest active-adult community in the Boynton Beach corridor with hundreds of villa and single-family roofs. Valencia Lakes off Hagen Ranch Road — a gated 55+ community with a concentrated footprint of barrel tile homes. Hunters Run near the Boynton Beach city limits — an established golf-course community with complex multi-level tile roof systems on estate-sized homes.</p>
  <h2>HOA &amp; Association Coordination</h2>
  <p>Every 55+ project starts with a submittal to the community's architectural review committee — color match, tile profile, scheduling windows, and resident notification. We handle all the paperwork and board presentations so the association doesn't have to chase us. Multiple-unit scheduling is available for communities pursuing a phased neighborhood-wide program.</p>
  <h2>Insurance Claim Support for 55+ Residents</h2>
  <p>Many 55+ residents file insurance claims after storm events. We provide full claim documentation, work directly with adjusters, and deliver a wind mitigation form on completion to unlock premium credits.</p>
      `
    },
    {
      slug: 'boynton-beach-tile-roof-replacement',
      title: 'Boynton Beach Tile Roof Replacement | All Phase USA',
      description: 'Tile roof replacement in Boynton Beach, FL. Clay and concrete tile, full underlayment tear-off, stainless battens. PBC wind-code compliant.',
      h1: 'Tile Roof Replacement in Boynton Beach, FL',
      intro: `Tile roofs dominate the Boynton Beach housing stock — from barrel tile on the coastal estates near Oceanfront Park to flat concrete tile across the inland gated communities like Canyon Lakes and The Cascades. All Phase Construction USA replaces tile roofs across Boynton Beach with full underlayment tear-off, SBS-modified peel-and-stick replacement, and stainless battens for long-term performance under Palm Beach County wind code.`,
      sections: `
  <h2>Why Tile Re-Roofs Are Urgent in Boynton Beach</h2>
  <p>Tile carries a 50-year service life, but the underlayment beneath it typically fails in 20–25 years. Most Boynton Beach tile homes were built between 1990 and 2010, which means a large portion of the market is in the re-roof window right now. The tile may look fine from the street; the underlayment beneath it has almost certainly lost its waterproofing integrity.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection to assess deck and underlayment condition. Careful tile removal with on-site salvage for tiles in good condition. Full underlayment tear-off down to the deck. Deck repair and re-nailing to current PBC fastening schedule. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners, replacement tile sourced for cracked or chipped pieces.</p>
  <h2>Neighborhoods We Serve</h2>
  <p>Canyon Lakes estate homes with complex multi-level tile systems. The Cascades and Valencia Lakes 55+ communities. Hunters Run golf course community. The coastal zone near Oceanfront Park and along A1A. The Congress Avenue and Boynton Beach Boulevard corridor where commercial flat-tile applications are common.</p>
  <h2>Warranty &amp; Insurance</h2>
  <p>Every tile re-roof includes a manufacturer underlayment warranty, our workmanship guarantee, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    },
    {
      slug: 'boynton-beach-commercial-roofing',
      title: 'Boynton Beach Commercial Roofing | All Phase USA',
      description: 'Commercial roofing in Boynton Beach, FL. Flat roof replacement and repair for Congress Ave, Boynton Beach Blvd, and retail centers. Licensed & insured.',
      h1: 'Boynton Beach Commercial Roofing',
      intro: `The Congress Avenue and Boynton Beach Boulevard corridors are the commercial spine of the city — strip centers, medical offices, restaurants, and retail anchored by the Boynton Beach Mall area. All Phase Construction USA replaces and repairs commercial flat roof systems across Boynton Beach with TPO, modified-bitumen, and built-up assemblies rated to Palm Beach County wind code.`,
      sections: `
  <h2>The Boynton Beach Commercial Roofing Market</h2>
  <p>Most commercial structures along the Congress Avenue corridor were built in the 1980s and 1990s with built-up or modified-bitumen flat roof systems that are now 30–40 years old. Many have been patched repeatedly rather than replaced, creating leak chains that are more expensive to repair than to re-roof entirely.</p>
  <h2>Commercial Landmarks We Serve</h2>
  <p>The Boynton Beach Mall area and surrounding retail parcels at Congress Avenue and Old Boynton Road. The Boynton Beach Boulevard commercial corridor from I-95 east to Federal Highway. Medical and professional office parks along Gateway Boulevard. Mangrove Nature Park's surrounding commercial district where 1990s-era flat roofs are reaching end of life.</p>
  <h2>Systems We Install</h2>
  <p>TPO single-ply membrane for energy efficiency and reflectivity. Fully adhered modified-bitumen for durability and puncture resistance. Multi-ply built-up systems for heavy-traffic rooftops with HVAC and equipment. Every commercial system includes wind-rated edge metal and tapered insulation for positive drainage.</p>
  <h2>Dual Licensing Advantage</h2>
  <p>All Phase Construction USA holds both a CCC roofing license (CCC-1331464) and a CGC general contractor license (CGC-1526236). For commercial projects requiring structural assessment, parapet repair, or fascia replacement alongside the roof work, our dual licensing eliminates the need for a second contractor.</p>
      `
    },
    {
      slug: 'boynton-beach-roof-insurance-claim',
      title: 'Boynton Beach Roof Insurance Claim | All Phase USA',
      description: 'Boynton Beach roof insurance claim assistance. 41% flooding risk, full documentation, adjuster coordination. Licensed & insured.',
      h1: 'Boynton Beach Roof Insurance Claim Assistance',
      intro: `Boynton Beach buildings face approximately a 41% chance of experiencing significant flooding over 30 years, with 61 of 70 census tracts carrying substantial storm surge and flooding risk. That exposure translates directly into roof insurance claims — and those claims are won or lost on documentation. All Phase Construction USA handles the full claim process for Boynton Beach homeowners from inspection through re-roof completion.`,
      sections: `
  <h2>Why Boynton Beach Claims Are Documentation-Critical</h2>
  <p>Most denied or underpaid roof claims come down to incomplete documentation. The adjuster needs clear photographic evidence of storm damage tied to a specific weather event, a documented timeline, and a scope of repair that matches the damage pattern. When any piece of that chain is missing, the claim gets reduced or denied. Boynton Beach's high flood and storm-surge exposure means adjusters see a high volume of claims from this area and scrutinize them carefully.</p>
  <h2>Our Claim Documentation Process</h2>
  <p>Free inspection with drone and attic imaging on day one. Full photographic damage documentation including close-ups of every affected area and wide shots for context. Scope of repair written to match the documented damage pattern. Direct coordination with your insurance adjuster during their site visit. Supplement filing if the initial approved scope does not cover the full documented damage.</p>
  <h2>After the Claim Is Approved</h2>
  <p>Palm Beach County permit pulled, re-roof executed to current wind-code standards, and a wind mitigation form delivered to your insurer on completion. That last step typically unlocks premium credits that compound into a significant annual discount.</p>
  <h2>Communities We Serve</h2>
  <p>Our Boynton Beach claim support covers the oceanfront A1A corridor, The Cascades and Valencia Lakes 55+ communities, Canyon Lakes and Hunters Run gated communities, and the Congress Avenue commercial corridor.</p>
      `
    }
  ];

  for (const p of boyntonBeachPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roof Replacement</a></li>
    <li><a href="/roof-repair/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roof Inspection</a></li>
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Boynton Beach Geo: ${p.slug}/index.html`);
    totalPages++;
  }

  // =====================================================================
  // LAKE WORTH BEACH GEO-RELEVANCE — Neighborhood + Service × City pages
  // Builds topical depth: historic district, coastal,
  // mid-century, commercial, and insurance claim angles
  // =====================================================================
  const lakeWorthPages = [
    {
      slug: 'lake-worth-beach-historic-roofing',
      title: 'Lake Worth Beach Historic District Roofing | All Phase USA',
      description: 'Historic district roofing in Lake Worth Beach, FL. Period-correct tile and shingle re-roofs for 1920s–1950s bungalows. PBC wind-code compliant.',
      h1: 'Lake Worth Beach Historic District Roofing',
      intro: `Lake Worth Beach has one of Palm Beach County's most diverse architectural landscapes, with structures spanning over 100 years of Florida building practices. The Historic District, College Park, and South Palm Park neighborhoods are home to 1920s-era bungalows, 1930s Mediterranean Revival homes, and mid-century concrete block houses — each with its own roofing challenges. All Phase Construction USA replaces roofs on historic Lake Worth Beach properties with period-correct materials that satisfy architectural review while meeting modern Palm Beach County wind-code requirements.`,
      sections: `
  <h2>The Historic Lake Worth Beach Roofing Challenge</h2>
  <p>Original roof framing on 1920s and 1930s Lake Worth Beach homes was not designed for today's wind-code fastening schedule. Many attics reveal undersized rafters, non-standard spacing, and original skip sheathing that cannot accept modern peel-and-stick underlayment without a deck overlay. We assess every historic roof structure before quoting to ensure the assembly we propose actually works with the framing underneath — not just the tile on top.</p>
  <h2>Period-Correct Materials</h2>
  <p>We source clay barrel tile for true 1920s Mediterranean matches, work with manufacturers producing period-accurate flat and S-tile profiles, and specify architectural shingles in historic color palettes when the original specification called for wood or composition. Every material choice is coordinated with the Lake Worth Beach Historic Preservation Board where applicable.</p>
  <h2>Neighborhoods We Serve</h2>
  <p>The Historic District centered on Lake and Lucerne Avenues. College Park east of Dixie Highway with its mix of bungalows and Craftsman homes. South Palm Park between Southern Boulevard and Lake Worth Road. The downtown Lake Worth Beach corridor where commercial and residential roofing needs overlap on mixed-use structures.</p>
  <h2>Structural Assessment Included</h2>
  <p>Our dual licensing — CCC roofing (CCC-1331464) and CGC general contractor (CGC-1526236) — means we can assess and repair structural framing issues without subcontracting. If the original rafters or decking need reinforcement before a new roof system goes on, we handle both the structural work and the roofing under one permit and one crew.</p>
      `
    },
    {
      slug: 'lake-worth-beach-coastal-roofing',
      title: 'Lake Worth Beach Coastal Roofing | All Phase USA',
      description: 'Coastal roofing in Lake Worth Beach, FL. Salt-air rated systems for properties east of I-95. Marine-grade fasteners, PBC wind-code compliant.',
      h1: 'Lake Worth Beach Coastal Roofing',
      intro: `Properties east of I-95 in Lake Worth Beach face increased salt air exposure from the Atlantic and Lake Worth Lagoon — conditions that demand marine-grade roofing components standard inland assemblies don't include. All Phase Construction USA builds coastal re-roofs for Lake Worth Beach with 304-grade stainless fasteners, SBS-modified peel-and-stick underlayment, and wind-code compliant assemblies rated to 170+ mph design wind speeds.`,
      sections: `
  <h2>The Coastal Zone in Lake Worth Beach</h2>
  <p>Lake Worth Beach's coastal exposure is two-sided: the Atlantic Ocean to the east and the Lake Worth Lagoon to the west, which means salt air reaches farther inland here than in cities without lagoon-side exposure. Properties between Federal Highway and the beach face the worst corrosion conditions, but even homes west to I-95 see enough salt load to destroy standard galvanized fasteners within a few years.</p>
  <h2>Landmarks in Our Coastal Service Area</h2>
  <p>Lake Worth Municipal Beach and the Lake Worth Beach Pier mark the center of the coastal zone. The Lake Worth Lagoon waterfront runs north–south through the city and creates salt exposure on the west side of the barrier island. The Snook Islands Natural Area and Bryant Park anchor the Intracoastal neighborhoods where we regularly work.</p>
  <h2>Coastal Assemblies We Install</h2>
  <p>Clay and concrete tile on stainless battens with 304-grade fasteners. Standing-seam aluminum for maximum corrosion resistance and a 40+ year service life. Modified-bitumen flat roof systems with fully adhered application and aluminum or stainless flashings at every penetration.</p>
  <h2>Wind Mitigation for Coastal Homes</h2>
  <p>Every coastal re-roof includes a completed wind mitigation form delivered to your insurer. On a Lake Worth Beach coastal home, the premium credits for opening protection, roof-to-wall connections, and roof covering class typically represent a meaningful annual savings.</p>
      `
    },
    {
      slug: 'lake-worth-beach-flat-roof-replacement',
      title: 'Lake Worth Beach Flat Roof Replacement | All Phase USA',
      description: 'Flat roof replacement in Lake Worth Beach, FL. Mid-century homes, commercial buildings, and mixed-use structures. TPO, modified-bitumen, built-up systems.',
      h1: 'Flat Roof Replacement in Lake Worth Beach, FL',
      intro: `Lake Worth Beach's mid-century concrete block homes and downtown mixed-use buildings share a common feature — flat or low-slope roofs that are now 30–60 years old and well past their service life. All Phase Construction USA replaces flat roof systems across Lake Worth Beach with TPO, modified-bitumen, and built-up assemblies engineered to Palm Beach County wind code with positive drainage and wind-rated edge metal.`,
      sections: `
  <h2>The Flat Roof Problem in Lake Worth Beach</h2>
  <p>Mid-century homes built in the 1950s through 1970s across College Park, Lucerne Lakes, and the neighborhoods south of Lake Worth Road were originally roofed with tar-and-gravel or early modified-bitumen systems. Many have been patched and coated repeatedly over the decades, creating layered assemblies that trap moisture and make leak detection nearly impossible. A full tear-off and replacement is almost always the right call over another coating.</p>
  <h2>Systems We Install</h2>
  <p>TPO single-ply membrane for energy efficiency and reflectivity on residential and commercial flat roofs. Fully adhered modified-bitumen for durability and puncture resistance on homes with rooftop foot traffic or HVAC equipment. Multi-ply built-up systems for commercial structures requiring the heaviest-duty option. Every system includes tapered insulation for positive drainage and wind-rated edge metal.</p>
  <h2>Commercial Flat Roofs on Lake Avenue</h2>
  <p>The Lake Avenue and Lucerne Avenue downtown corridor mixes retail, restaurant, and residential uses under flat roof assemblies that are often original to the building. We handle commercial flat roof replacement with minimal business disruption, phased tear-off where needed, and full Palm Beach County permitting.</p>
  <h2>Dual Licensing Advantage</h2>
  <p>Flat roof replacements on older structures frequently uncover parapet deterioration, fascia rot, or structural deck issues. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the structural repair and the roof system under one permit.</p>
      `
    },
    {
      slug: 'lake-worth-beach-roof-insurance-claim',
      title: 'Lake Worth Beach Roof Insurance Claim | All Phase USA',
      description: 'Lake Worth Beach roof insurance claim assistance. Full documentation, adjuster coordination, wind mitigation credits. Licensed & insured.',
      h1: 'Lake Worth Beach Roof Insurance Claim Assistance',
      intro: `Lake Worth Beach's mix of aging housing stock and coastal storm exposure generates a high volume of roof insurance claims — and those claims are won or lost on documentation quality. All Phase Construction USA handles the full claim process for Lake Worth Beach homeowners from drone inspection through re-roof completion and wind mitigation filing.`,
      sections: `
  <h2>Why Lake Worth Beach Claims Need Expert Documentation</h2>
  <p>Adjusters scrutinize Lake Worth Beach claims carefully because the city's housing stock spans 100 years of building practices, which means pre-existing conditions are common and must be clearly distinguished from storm damage. A 1920s bungalow with original decking requires different documentation than a 1990s concrete block home. We document both the storm damage and the pre-existing condition to give the adjuster a clear, defensible scope.</p>
  <h2>Our Claim Documentation Process</h2>
  <p>Free inspection with drone and attic imaging on day one. Full photographic damage documentation with close-ups and wide-angle context shots. Scope of repair written to match the documented damage pattern and the building's construction era. Direct coordination with your adjuster during their site visit. Supplement filing if the initial scope doesn't cover the full documented damage.</p>
  <h2>After the Claim Is Approved</h2>
  <p>Palm Beach County permit pulled, re-roof executed to current wind-code standards, and a wind mitigation form delivered to your insurer on completion to unlock premium credits.</p>
  <h2>Service Area</h2>
  <p>Our Lake Worth Beach claim support covers the Historic District, College Park, South Palm Park, Lucerne Lakes, the coastal zone east of I-95, and the downtown Lake Avenue commercial corridor.</p>
      `
    },
    {
      slug: 'lake-worth-beach-tile-roof-replacement',
      title: 'Lake Worth Beach Tile Roof Replacement | All Phase USA',
      description: 'Tile roof replacement in Lake Worth Beach, FL. Clay and concrete tile, full underlayment tear-off, structural assessment included. PBC wind-code compliant.',
      h1: 'Tile Roof Replacement in Lake Worth Beach, FL',
      intro: `Tile roofs across Lake Worth Beach range from original 1920s clay barrel tile on Historic District bungalows to 1990s concrete flat tile on newer subdivisions near Lucerne Lakes. Regardless of era, the re-roof trigger is almost always the underlayment — not the tile — failing after 20–25 years. All Phase Construction USA replaces tile roofs across Lake Worth Beach with full underlayment tear-off, structural assessment, and stainless battens for long-term PBC wind-code compliance.`,
      sections: `
  <h2>Two Eras of Tile in Lake Worth Beach</h2>
  <p>Historic-era tile homes (pre-1960) often have original skip sheathing and undersized rafters that need a structural overlay before new underlayment can go on. Modern-era tile homes (1980s–2000s) have plywood decking that typically just needs re-nailing to current code. We assess every structure before quoting to ensure the right scope — a structural overlay on a bungalow is a very different project from a standard tear-and-replace on a 1990s home.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection to assess deck condition and structural framing. Tile removal with on-site salvage where tiles are reusable. Full underlayment tear-off. Deck repair, overlay, or re-nailing as conditions require. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners. Replacement tile sourced for cracked or chipped pieces.</p>
  <h2>Neighborhoods We Serve</h2>
  <p>The Historic District and College Park for barrel and S-tile re-roofs on pre-war homes. Lucerne Lakes and the neighborhoods south of Lake Worth Road for concrete flat tile replacements. The coastal zone east of Federal Highway where stainless battens and marine-grade fasteners are mandatory.</p>
  <h2>Warranty &amp; Insurance</h2>
  <p>Every tile re-roof includes a manufacturer underlayment warranty, our workmanship guarantee, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    }
  ];

  for (const p of lakeWorthPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach Roof Replacement</a></li>
    <li><a href="/roof-repair/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/lake-worth-beach" style="color: #dc2626; text-decoration: underline;">Lake Worth Beach Roof Inspection</a></li>
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/boynton-beach" style="color: #dc2626; text-decoration: underline;">Boynton Beach Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Lake Worth Geo: ${p.slug}/index.html`);
    totalPages++;
  }

  // =====================================================================
  // WELLINGTON GEO-RELEVANCE — Neighborhood + Service × City pages
  // Equestrian estates, 80+ HOA communities, 1980s–2000s tile wave
  // =====================================================================
  const wellingtonPages = [
    {
      slug: 'wellington-equestrian-estate-roofing',
      title: 'Wellington Equestrian Estate Roofing | All Phase USA',
      description: 'Roofing for Wellington equestrian estates and large-acreage properties near the International Polo Club. PBC wind-code compliant. Free inspection.',
      h1: 'Wellington Equestrian Estate Roofing',
      intro: `Wellington is home to the International Polo Club and the Winter Equestrian Festival, and the estates surrounding the Equestrian Preserve represent some of the largest residential roof footprints in Palm Beach County. All Phase Construction USA replaces roofs on Wellington equestrian properties — main residences, guesthouses, barns, and covered arenas — with Palm Beach County wind-code compliant assemblies rated for 170+ mph design wind speeds.`,
      sections: `
  <h2>The Equestrian Estate Roofing Challenge</h2>
  <p>Equestrian properties in Wellington's Binks Estates and the Equestrian Preserve routinely carry 5,000–15,000 square feet of roof across multiple structures. The main residence, guesthouse, barn, and covered riding arena each have different structural requirements, slope profiles, and material needs. We scope every structure on the property and stage the project to minimize disruption to horses, staff, and daily operations.</p>
  <h2>Assemblies for Estate Properties</h2>
  <p>Clay and concrete tile on the main residence to match Wellington's Mediterranean aesthetic. Standing-seam metal on barns and covered arenas for durability and long span capability. Modified-bitumen on flat-section pool houses and equipment buildings. Every assembly uses the same wind-code compliant fastening schedule regardless of structure type.</p>
  <h2>Landmarks in Our Service Area</h2>
  <p>The International Polo Club Palm Beach on 120th Avenue South anchors the equestrian district. The Wellington Environmental Preserve and the Equestrian Preserve area are home to the largest estate lots. Binks Estates, Binks Forest, and the Palm Beach Point communities represent the core of our equestrian estate work.</p>
  <h2>Multi-Structure Coordination</h2>
  <p>We permit, schedule, and execute multi-structure estate projects under a single project management plan — one point of contact, one crew rotation, one inspection timeline. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means structural issues on any building are handled in-house without subcontracting delays.</p>
      `
    },
    {
      slug: 'wellington-hoa-roof-replacement',
      title: 'Wellington HOA Roof Replacement | All Phase USA',
      description: 'HOA-coordinated roof replacement across Wellington FL. 80+ communities served. Color match, architectural review, phased scheduling. PBC wind-code compliant.',
      h1: 'Wellington HOA Roof Replacement',
      intro: `Wellington has over 80 HOA-governed communities — from Olympia and The Isles to Grand Isles and Sugar Pond Manor — and nearly all of them were built in a 20-year window between the mid-1980s and early 2000s. That means the original roof systems across these communities are hitting the re-roof window simultaneously. All Phase Construction USA handles HOA-coordinated roof replacement at scale with pre-approved materials, architectural review submittals, and phased neighborhood scheduling.`,
      sections: `
  <h2>The Wellington HOA Re-Roof Wave</h2>
  <p>Most Wellington subdivisions installed concrete tile with standard felt underlayment during original construction. The tile itself may last 50 years, but the underlayment beneath it fails in 20–25 years. In 2026, that means communities built between 1985 and 2005 are in the active re-roof window — and Wellington has dozens of them hitting this threshold at the same time.</p>
  <h2>Communities We Serve</h2>
  <p>Olympia — one of Wellington's largest master-planned communities with multiple villages and architectural guidelines. The Isles and Grand Isles — waterfront communities with strict color and profile requirements. Sugar Pond Manor — established community with aging tile systems. Aero Club — aviation-themed community near the Wellington Aero Club airport. We work with each community's architectural review committee to pre-approve materials and colors before any tear-off begins.</p>
  <h2>Our HOA Process</h2>
  <p>Initial board presentation with material samples and project timeline. Architectural review submittal for approval. Phased scheduling to minimize neighborhood disruption. Color-matched tile sourcing confirmed before project start. Progress updates to the property manager throughout the project. Post-completion walk with the homeowner and association representative.</p>
  <h2>Volume Scheduling Available</h2>
  <p>For communities pursuing a phased neighborhood-wide program, we offer volume scheduling that reduces per-unit cost and compresses the project timeline. Multiple homes on the same street can be staged in sequence to share mobilization and equipment costs.</p>
      `
    },
    {
      slug: 'wellington-tile-roof-replacement',
      title: 'Wellington Tile Roof Replacement | All Phase USA',
      description: 'Tile roof replacement in Wellington, FL. Concrete and clay tile, full underlayment tear-off, HOA-compliant. PBC wind-code certified.',
      h1: 'Tile Roof Replacement in Wellington, FL',
      intro: `Concrete tile is the dominant roofing material in Wellington — nearly every subdivision built between the 1980s and 2000s was originally roofed with it. All Phase Construction USA replaces tile roofs across Wellington with full underlayment tear-off, SBS-modified peel-and-stick replacement, and stainless battens built to Palm Beach County wind code.`,
      sections: `
  <h2>Why Wellington Tile Roofs Need Replacement Now</h2>
  <p>Wellington incorporated in 1995, but most of its housing stock was built starting in the mid-1980s. Original concrete tile systems from that era are now 25–40 years old. The tile still looks serviceable from the street, but the felt underlayment beneath it — rated for 20–25 years — has failed or is actively failing. That's why Wellington homeowners see interior leaks despite having tile that appears intact.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection to assess underlayment and deck condition. Tile removal with on-site salvage where tiles are reusable. Full underlayment tear-off down to the deck. Deck repair and re-nailing to current PBC fastening schedule. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners, replacement tile sourced to match the existing profile and color for HOA compliance.</p>
  <h2>HOA Color &amp; Profile Matching</h2>
  <p>Every Wellington subdivision has its own approved color palette and tile profile. We coordinate with the HOA architectural review committee, source matching tile from multiple manufacturers, and provide physical samples for approval before any work begins.</p>
  <h2>Warranty &amp; Insurance</h2>
  <p>Every tile re-roof includes a manufacturer underlayment warranty, our workmanship guarantee, and a wind mitigation form delivered to your insurer on completion to unlock premium credits.</p>
      `
    },
    {
      slug: 'wellington-roof-insurance-claim',
      title: 'Wellington Roof Insurance Claim | All Phase USA',
      description: 'Wellington FL roof insurance claim assistance. Full documentation, adjuster coordination, wind mitigation credits. Licensed & insured.',
      h1: 'Wellington Roof Insurance Claim Assistance',
      intro: `Wellington's concentrated footprint of 1980s–2000s tile roofs means storm events generate a wave of simultaneous insurance claims across the community. Adjusters see high claim volume from Wellington after every named storm, and they scrutinize each one carefully. All Phase Construction USA handles the full claim process with documentation built to withstand that scrutiny.`,
      sections: `
  <h2>Why Wellington Claims Need Expert Documentation</h2>
  <p>When an adjuster reviews a Wellington claim, they know the roof is likely 25–40 years old with aging underlayment. The challenge is proving that the specific damage being claimed was caused by the storm event — not by pre-existing underlayment failure. We document both the storm damage and the pre-existing condition clearly, giving the adjuster a defensible scope that separates covered damage from wear-and-tear.</p>
  <h2>Our Claim Documentation Process</h2>
  <p>Free inspection with drone and attic imaging on day one. Full photographic damage documentation with close-ups and wide-angle context. Scope of repair written to match the documented storm damage pattern. Direct coordination with your adjuster during their site visit. Supplement filing if the initial approved scope does not cover the full documented damage.</p>
  <h2>After the Claim Is Approved</h2>
  <p>Palm Beach County permit pulled, re-roof executed to current wind-code standards with HOA-approved materials, and a wind mitigation form delivered to your insurer on completion.</p>
  <h2>Communities We Serve</h2>
  <p>Our Wellington claim support covers Olympia, The Isles, Grand Isles, Sugar Pond Manor, Aero Club, Binks Estates, and the equestrian estate district.</p>
      `
    },
    {
      slug: 'wellington-metal-roofing',
      title: 'Wellington Metal Roofing | All Phase USA',
      description: 'Metal roofing in Wellington, FL. Standing-seam and corrugated systems for homes, barns, and equestrian properties. PBC wind-code compliant.',
      h1: 'Metal Roofing in Wellington, FL',
      intro: `Metal roofing is gaining ground in Wellington as homeowners and equestrian property owners look for the longest-life, lowest-maintenance option available under Palm Beach County wind code. All Phase Construction USA installs standing-seam and corrugated metal roof systems across Wellington's residential subdivisions, estate properties, barns, and covered arenas.`,
      sections: `
  <h2>Why Metal Is Growing in Wellington</h2>
  <p>Tile has dominated Wellington for decades, but metal offers a 40–50 year service life with virtually zero maintenance — no underlayment replacement cycle, no cracked tiles, no re-nailing. For equestrian estates with large roof footprints across multiple structures, the lifetime cost of metal is often lower than tile when you factor in the 25-year underlayment replacement tile roofs require.</p>
  <h2>Systems We Install</h2>
  <p>Standing-seam aluminum and steel for residential homes — clean lines, concealed fasteners, and the highest wind rating available. Corrugated metal for barns, arenas, and agricultural structures where span capability and cost efficiency matter. Kynar/PVDF finishes in colors that match Wellington's HOA-approved palettes.</p>
  <h2>Equestrian Property Metal Roofing</h2>
  <p>Barns, covered arenas, equipment buildings, and guesthouses on Wellington equestrian estates are ideal metal roof candidates. We install long-span standing-seam systems that handle the open truss structures common in equestrian buildings while meeting PBC wind-code fastening requirements.</p>
  <h2>HOA Approval &amp; Aesthetics</h2>
  <p>Standing-seam metal is increasingly accepted by Wellington HOAs, especially in profiles and colors that approximate the look of traditional flat tile. We coordinate architectural review submittals and provide physical finish samples for board approval.</p>
      `
    }
  ];

  // =====================================================================
  // BOCA RATON — Commercial + Metal roofing (final two Boca pages)
  // =====================================================================
  const bocaFinalPages = [
    {
      slug: 'boca-raton-commercial-roofing',
      title: 'Boca Raton Commercial Roofing | All Phase USA',
      description: 'Commercial roofing in Boca Raton, FL. Flat roof replacement & repair for Yamato Rd, Glades Rd, and Town Center. Dual licensed, PBC wind-code.',
      h1: 'Boca Raton Commercial Roofing',
      intro: `Boca Raton's commercial corridors — Yamato Road, Glades Road, Federal Highway, and the Town Center district — generate steady demand for flat roof replacement and repair on office parks, retail centers, medical buildings, and mixed-use structures. All Phase Construction USA replaces and repairs commercial roof systems across Boca Raton with TPO, modified-bitumen, and built-up assemblies rated to Palm Beach County wind code.`,
      sections: `
  <h2>The Boca Raton Commercial Roofing Market</h2>
  <p>Boca Raton's commercial building stock grew rapidly in the 1980s and 1990s along the Yamato Road and Glades Road corridors, where office parks, tech campuses, and retail centers were built with flat roof systems that are now 30–40 years old. Many have been patched and coated repeatedly rather than replaced, creating layered assemblies that trap moisture and make leak sourcing nearly impossible. The Arvida Park of Commerce, Boca Corporate Center, and the medical office cluster along Glades Road west of I-95 all fall into this category.</p>
  <h2>Commercial Landmarks We Serve</h2>
  <p>The Yamato Road corridor from I-95 west to the Turnpike — one of the densest commercial roof footprints in PBC. The Glades Road office and retail belt between I-95 and 441. Federal Highway's mixed-use corridor through central Boca. The Boca Raton Innovation Campus (formerly IBM) area. Retail and restaurant parcels surrounding the Town Center at Boca Raton district.</p>
  <h2>Systems We Install</h2>
  <p>TPO single-ply membrane for energy efficiency, reflectivity, and clean weld seams. Fully adhered modified-bitumen for puncture resistance on high-traffic rooftops with HVAC equipment. Multi-ply built-up systems for heavy-duty applications where maximum durability is required. Every commercial system includes tapered insulation for positive drainage and wind-rated edge metal per PBC code.</p>
  <h2>Dual Licensing Advantage</h2>
  <p>Commercial flat roof replacements on aging Boca Raton structures frequently uncover parapet deterioration, fascia rot, or structural deck damage. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the structural repair and the roof system under one permit, one crew, and one project timeline — no subcontractor coordination delays.</p>
  <h2>Phased Replacement for Occupied Buildings</h2>
  <p>We schedule tear-off and installation in sections to keep ground-floor tenants operational. Multi-tenant retail centers and occupied office buildings get a phased plan that isolates the work zone and maintains parking access throughout the project.</p>
      `
    },
    {
      slug: 'boca-raton-metal-roofing',
      title: 'Boca Raton Metal Roofing | All Phase USA',
      description: 'Metal roofing in Boca Raton, FL. Standing-seam aluminum and steel for residential and commercial. Salt-rated coastal options. PBC wind-code compliant.',
      h1: 'Metal Roofing in Boca Raton, FL',
      intro: `Metal roofing is the fastest-growing category in the Boca Raton market as homeowners and commercial property owners look for the longest-life, lowest-maintenance option available under Palm Beach County wind code. All Phase Construction USA installs standing-seam aluminum and steel roof systems across Boca Raton — from coastal A1A estates to inland subdivisions and commercial corridors.`,
      sections: `
  <h2>Why Metal Is Gaining Ground in Boca Raton</h2>
  <p>Tile has dominated Boca Raton for decades, and it remains a strong option — but metal delivers a 40–50 year service life with no underlayment replacement cycle, no cracked tiles, and no re-nailing. For homeowners facing a second tile underlayment replacement in 25 years, the lifetime economics of metal often win. For coastal properties where salt corrosion is the primary failure mode, aluminum standing-seam eliminates the corrosion variable entirely.</p>
  <h2>Residential Metal Roofing</h2>
  <p>Standing-seam aluminum is the premium residential choice for Boca Raton — concealed fasteners, clean lines, and zero corrosion risk in the coastal zone. Steel standing-seam with Kynar/PVDF finish is the cost-effective alternative for inland homes where salt exposure is lower. Both systems carry the highest wind ratings available under PBC code and qualify for maximum wind mitigation insurance credits.</p>
  <h2>Coastal Metal Roofing</h2>
  <p>On the A1A corridor, along the Intracoastal, and through Highland Beach, aluminum standing-seam is the only metal option we recommend. Steel — even galvalume-coated — will show corrosion in the salt zone within 5–10 years. Aluminum is salt-proof with a 40+ year service life and requires zero maintenance after installation. We pair it with stainless flashings and aluminum edge metal for a fully non-ferrous envelope.</p>
  <h2>Commercial Metal Roofing</h2>
  <p>Standing-seam metal on commercial structures offers long-span capability, energy-efficient reflectivity, and a service life that outlasts TPO and modified-bitumen by 15–20 years. We install commercial metal systems on office buildings, retail centers, and mixed-use structures along the Yamato Road, Glades Road, and Federal Highway corridors.</p>
  <h2>HOA Approval</h2>
  <p>Standing-seam metal is increasingly accepted by Boca Raton HOAs, particularly in low-profile configurations and colors that approximate the look of flat tile. We handle architectural review submittals and provide physical finish samples for board approval before any material is ordered.</p>
      `
    }
  ];

  // =====================================================================
  // DEERFIELD BEACH + POMPANO BEACH — Commercial roofing pages
  // HQ market (Deerfield) + adjacent Broward commercial corridor
  // =====================================================================
  const browardCommercialPages = [
    {
      slug: 'deerfield-beach-commercial-roofing',
      title: 'Deerfield Beach Commercial Roofing | All Phase USA',
      description: 'Commercial roofing in Deerfield Beach, FL. Flat roof replacement & repair for Hillsboro Blvd, Powerline Rd, and I-95. HVHZ-compliant, dual licensed.',
      h1: 'Deerfield Beach Commercial Roofing',
      intro: `Deerfield Beach is home to All Phase Construction USA's headquarters at 590 Goolsby Blvd — and the commercial corridors surrounding it generate some of the highest flat-roof replacement demand in Broward County. The Hillsboro Boulevard corridor, the Powerline Road office parks, and the I-95 interchange district are all concentrated with 1980s and 1990s-era commercial structures whose original roof systems are at or past end-of-life. We replace and repair commercial roofs across Deerfield Beach with HVHZ-compliant assemblies rated for 175+ mph wind speeds.`,
      sections: `
  <h2>The Deerfield Beach Commercial Roofing Market</h2>
  <p>Deerfield Beach's commercial building stock grew rapidly along Hillsboro Boulevard and Powerline Road in the 1980s and 1990s — strip centers, medical offices, light industrial, and professional parks that now carry 30–40 year old flat roof systems. The Quiet Waters Park industrial corridor and the Century Village commercial perimeter add additional aging roof inventory. Many of these buildings have been patched and coated repeatedly, creating layered assemblies that trap moisture and make leak detection impossible without a full tear-off.</p>
  <h2>Commercial Landmarks We Serve</h2>
  <p>The Hillsboro Boulevard corridor from I-95 west to Powerline Road — Deerfield Beach's densest commercial stretch. The Powerline Road office and retail belt running north-south through the city. The I-95/Hillsboro interchange district with its concentration of hospitality, retail, and service buildings. The Goolsby Boulevard industrial area surrounding our headquarters. Century Village's commercial perimeter including retail, medical, and service providers serving the 55+ community.</p>
  <h2>Systems We Install</h2>
  <p>TPO single-ply membrane for energy efficiency and reflectivity on office and retail buildings. Fully adhered modified-bitumen for puncture resistance on high-traffic rooftops with HVAC and equipment. Multi-ply built-up systems for heavy-duty industrial and warehouse applications. Every system meets Broward County HVHZ compliance with 175+ mph wind ratings, enhanced edge metal, and approved fastening schedules.</p>
  <h2>HVHZ Compliance on Commercial Structures</h2>
  <p>Every commercial roof in Deerfield Beach falls within Broward County's High Velocity Hurricane Zone. HVHZ compliance on a commercial structure requires product approvals, fastening schedules, and edge metal specifications that exceed standard Florida Building Code. We hold the certifications and the product approval documentation to pass Broward County commercial roof inspections without callbacks.</p>
  <h2>Dual Licensing Advantage</h2>
  <p>Commercial roof replacements frequently uncover parapet deterioration, structural deck damage, or fascia failure. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the structural repair and the roof system under one permit — no subcontractor delays, no split responsibility.</p>
      `
    },
    {
      slug: 'pompano-beach-commercial-roofing',
      title: 'Pompano Beach Commercial Roofing | All Phase USA',
      description: 'Commercial roofing in Pompano Beach, FL. Flat roof replacement & repair for Atlantic Blvd, Copans Rd, and Sample Rd. HVHZ-compliant, dual licensed.',
      h1: 'Pompano Beach Commercial Roofing',
      intro: `Pompano Beach's commercial corridors — Atlantic Boulevard, Copans Road, Sample Road, and the Federal Highway strip — run the full east-west width of the city with 1970s through 1990s-era flat roof inventory that is aging out fast. All Phase Construction USA replaces and repairs commercial roof systems across Pompano Beach with HVHZ-compliant assemblies rated for 175+ mph wind speeds.`,
      sections: `
  <h2>The Pompano Beach Commercial Roofing Market</h2>
  <p>Pompano Beach's commercial real estate stretches from the beachside hospitality district on A1A to the inland industrial and office corridors along Copans Road and Sample Road. The city's Powerline Road corridor connects to Deerfield Beach's commercial belt to the north, creating one of the longest continuous commercial roof inventories in Broward County. Buildings along Atlantic Boulevard between Federal Highway and I-95 — retail, restaurant, medical, and professional office — carry some of the oldest commercial flat roofs in the market.</p>
  <h2>Commercial Landmarks We Serve</h2>
  <p>The Atlantic Boulevard corridor from A1A to Powerline Road — Pompano Beach's primary commercial artery. The Copans Road industrial and office belt. The Sample Road corridor connecting Pompano to Coral Springs with dense retail and medical office. The Pompano Beach Airpark district with light industrial and aviation-related commercial structures. The beachside A1A hospitality corridor where salt exposure compounds flat roof deterioration.</p>
  <h2>Systems We Install</h2>
  <p>TPO single-ply membrane for office and retail buildings — energy-efficient, reflective, and clean weld seams. Fully adhered modified-bitumen for restaurants, warehouses, and buildings with rooftop equipment and foot traffic. Multi-ply built-up systems for heavy industrial applications. Coastal commercial buildings on A1A get aluminum flashings and stainless fasteners as standard to combat salt corrosion.</p>
  <h2>HVHZ Compliance on Commercial Structures</h2>
  <p>Pompano Beach falls within Broward County's High Velocity Hurricane Zone. Every commercial roof installation requires HVHZ-approved products, fastening schedules, and edge metal specifications. We carry the product approval documentation and HVHZ certifications to pass Broward County commercial inspections without issue.</p>
  <h2>Beachside Commercial Roofing</h2>
  <p>Hotels, restaurants, and mixed-use buildings on the A1A beachside corridor face the worst combination of salt air, UV, and wind exposure in Pompano Beach. We spec marine-grade flashings, fully adhered membranes, and enhanced edge metal on every coastal commercial project. Phased scheduling is available to keep hospitality operations running during the re-roof.</p>
      `
    }
  ];

  // =====================================================================
  // HOA / COMMUNITY-SPECIFIC PAGES
  // Named communities with enough search volume and unit count
  // to justify dedicated landing pages
  // =====================================================================
  const hoaCommunityPages = [
    {
      slug: 'the-cove-deerfield-beach-roofing',
      title: 'The Cove Deerfield Beach Roofing | All Phase USA',
      description: 'Roof replacement in The Cove, Deerfield Beach FL. HOA-coordinated tile and shingle re-roofs. HVHZ-compliant, close to our HQ. Free inspection.',
      h1: 'Roofing Contractor for The Cove, Deerfield Beach',
      hubSlug: 'deerfield-beach',
      hubName: 'Deerfield Beach',
      county: 'Broward',
      intro: `The Cove is one of Deerfield Beach's most established residential neighborhoods — a mix of single-family homes, townhomes, and villas spread across tree-lined side streets between the Hillsboro Canal and the Intracoastal. It's also less than two miles from our headquarters at 590 Goolsby Blvd, which means faster response times and zero mobilization delays. All Phase Construction USA replaces roofs across The Cove with HVHZ-compliant assemblies rated for 175+ mph wind speeds.`,
      sections: `
  <h2>The Cove's Roofing Profile</h2>
  <p>The Cove's housing stock spans several decades — older concrete block homes from the 1960s and 1970s on the interior streets, newer townhome developments along the perimeter, and waterfront properties along the Intracoastal on the eastern edge. That mix means we see everything from aging asphalt shingle systems on the older single-family homes to concrete tile on the newer builds. Most of the original roof systems in The Cove are well past the 20–25 year underlayment replacement window.</p>
  <h2>Streets &amp; Sections We Serve</h2>
  <p>The residential streets between SE 2nd Court and the Hillsboro Canal, the townhome sections along SE 15th Terrace, the single-family homes off SE 10th Street and SE 12th Avenue, and the waterfront lots on the eastern boundary. We work every section of The Cove regularly and know the neighborhood's HOA requirements, permit routing, and inspection expectations.</p>
  <h2>HOA Coordination</h2>
  <p>The Cove's various sections have their own architectural guidelines for roof color, material, and profile. We coordinate submittals with each section's HOA board, source approved materials, and confirm color matches before any tear-off begins. For multi-unit townhome sections, we offer phased scheduling to minimize disruption to adjacent residents.</p>
  <h2>Proximity to Our HQ</h2>
  <p>Our office at 590 Goolsby Blvd is a short drive from The Cove, which means same-day emergency response, no travel surcharges, and project managers who can be on-site within minutes. For ongoing projects, our crew staging and material delivery logistics are the most efficient of any neighborhood we serve.</p>
      `
    },
    {
      slug: 'olympia-wellington-roofing',
      title: 'Olympia Wellington Roofing | All Phase USA',
      description: 'Roof replacement in Olympia, Wellington FL. Village-by-village HOA coordination, tile re-roofs, PBC wind-code compliant. Free inspection.',
      h1: 'Roofing Contractor for Olympia, Wellington',
      hubSlug: 'wellington',
      hubName: 'Wellington',
      county: 'Palm Beach',
      intro: `Olympia is Wellington's largest master-planned community — multiple villages, each with its own architectural review committee, and thousands of homes built primarily in the late 1990s and early 2000s. That construction window means the original tile roof systems across Olympia are entering the re-roof window right now. All Phase Construction USA handles Olympia re-roofs village by village with pre-approved materials, HOA coordination, and Palm Beach County wind-code compliant assemblies.`,
      sections: `
  <h2>The Olympia Re-Roof Wave</h2>
  <p>Olympia's villages were built over roughly a 10-year period starting in the late 1990s. Original concrete tile systems from that era are now 25–30 years old — the tile looks fine from the street, but the felt underlayment beneath it was rated for 20–25 years and has failed or is actively failing. That's why Olympia homeowners are seeing interior leaks despite visually intact tile. The re-roof wave across Olympia is not coming — it's here.</p>
  <h2>Village-by-Village HOA Coordination</h2>
  <p>Each Olympia village maintains its own architectural review committee with specific approved tile profiles, colors, and material specifications. We submit to each village's committee individually, source matching tile from multiple manufacturers, and provide physical samples for board approval. For villages pursuing a phased community-wide program, we offer volume scheduling that reduces per-home cost and compresses the timeline.</p>
  <h2>Our Olympia Re-Roof Process</h2>
  <p>Drone and attic inspection to assess underlayment and deck condition. Tile removal with on-site salvage where tiles are reusable. Full underlayment tear-off. Deck repair and re-nailing to current PBC fastening schedule. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners and replacement tile sourced for HOA color match.</p>
  <h2>Insurance &amp; Wind Mitigation</h2>
  <p>Every Olympia re-roof includes a wind mitigation form delivered to your insurer. Many Olympia homeowners file insurance claims after storm events — we provide full claim documentation, adjuster coordination, and supplement filing when the initial scope doesn't cover the documented damage.</p>
      `
    },
    {
      slug: 'canyon-lakes-boynton-beach-roofing',
      title: 'Canyon Lakes Boynton Beach Roofing | All Phase USA',
      description: 'Roof replacement in Canyon Lakes, Boynton Beach FL. Upscale gated community, complex tile systems, HOA-coordinated. PBC wind-code compliant.',
      h1: 'Roofing Contractor for Canyon Lakes, Boynton Beach',
      hubSlug: 'boynton-beach',
      hubName: 'Boynton Beach',
      county: 'Palm Beach',
      intro: `Canyon Lakes is one of Boynton Beach's premier gated communities — upscale single-family homes with complex multi-level tile roof systems that demand specialized installation expertise. All Phase Construction USA replaces roofs in Canyon Lakes with full underlayment tear-off, structural assessment where needed, and HOA-approved materials built to Palm Beach County wind code.`,
      sections: `
  <h2>The Canyon Lakes Roofing Challenge</h2>
  <p>Canyon Lakes homes feature some of the most complex residential roof geometries in Boynton Beach — multi-level rooflines, hip-and-valley intersections, decorative turrets, and mixed-slope sections that combine steep tile with low-slope flat areas. These complex footprints require careful flashing detailing at every transition point and experienced tile crews who can handle the geometry without shortcuts.</p>
  <h2>Materials We Install in Canyon Lakes</h2>
  <p>Concrete and clay tile matched to the community's approved profiles and color palette. SBS-modified peel-and-stick underlayment on every project — no felt. Stainless fasteners and battens for long-term corrosion resistance. Modified-bitumen on flat and low-slope sections with fully adhered application and wind-rated edge metal.</p>
  <h2>HOA Architectural Review</h2>
  <p>Canyon Lakes maintains strict architectural guidelines governing tile profile, color, and installation specifications. We handle the full submittal process — material samples, color boards, and project scope documentation — and wait for written approval before ordering materials or scheduling tear-off.</p>
  <h2>Structural Assessment</h2>
  <p>Complex multi-level rooflines on Canyon Lakes estate homes sometimes reveal structural concerns during tear-off — undersized rafters at valley intersections, deck delamination at flat-to-slope transitions, or inadequate ventilation in enclosed soffits. Our dual licensing (CCC-1331464 + CGC-1526236) means we address structural issues in-house without subcontracting delays.</p>
      `
    },
    {
      slug: 'broken-sound-boca-raton-roofing',
      title: 'Broken Sound Boca Raton Roofing | All Phase USA',
      description: 'Roof replacement in Broken Sound, Boca Raton FL. Golf course community, tile and flat roof systems, HOA-coordinated. PBC wind-code compliant.',
      h1: 'Roofing Contractor for Broken Sound, Boca Raton',
      hubSlug: 'boca-raton',
      hubName: 'Boca Raton',
      county: 'Palm Beach',
      intro: `Broken Sound is one of Boca Raton's premier country club communities — a gated, golf-course community off Yamato Road with a mix of single-family estates, villas, and townhomes built primarily in the 1980s and 1990s. The original tile and flat roof systems across Broken Sound are 30–40 years old and deep into the re-roof window. All Phase Construction USA replaces roofs throughout Broken Sound with HOA-approved materials and Palm Beach County wind-code compliant assemblies.`,
      sections: `
  <h2>The Broken Sound Re-Roof Window</h2>
  <p>Broken Sound's homes were built in two primary waves — the original 1980s single-family estates and the 1990s villa and townhome additions. Both waves installed concrete tile with felt underlayment that was rated for 20–25 years. In 2026, that means every original roof in Broken Sound has exceeded its underlayment lifespan, and many have exceeded it by a decade or more. The tile may still look acceptable, but the waterproofing layer beneath it has failed.</p>
  <h2>Roof Types in Broken Sound</h2>
  <p>Single-family estates with complex tile rooflines, hip-and-valley geometry, and mixed steep/flat sections. Villas and townhomes with shared rooflines that require coordination between adjacent owners. Country club and amenity buildings with large-span flat roof systems. Each type requires a different scope, material specification, and scheduling approach.</p>
  <h2>HOA &amp; Country Club Coordination</h2>
  <p>Broken Sound's HOA maintains detailed architectural guidelines for roof materials, colors, and profiles. The country club community also has specific access, scheduling, and staging requirements — golf cart path restrictions, noise windows around tournament events, and gate access logistics. We coordinate all of it before project start so there are no surprises for the homeowner or the association.</p>
  <h2>Wind Mitigation &amp; Insurance</h2>
  <p>Every Broken Sound re-roof includes a wind mitigation form delivered to your insurer. On a Broken Sound estate home, the premium credits for roof-to-wall connections, deck attachment, and roof covering class can represent a substantial annual savings.</p>
      `
    },
    {
      slug: 'royal-palm-yacht-club-boca-raton-roofing',
      title: 'Royal Palm Yacht Club Boca Roofing | All Phase',
      description: 'Roof replacement in Royal Palm Yacht & Country Club, Boca Raton FL. Luxury waterfront estates, premium materials, HOA-coordinated. PBC wind-code.',
      h1: 'Roofing Contractor for Royal Palm Yacht &amp; Country Club, Boca Raton',
      hubSlug: 'boca-raton',
      hubName: 'Boca Raton',
      county: 'Palm Beach',
      intro: `Royal Palm Yacht &amp; Country Club is Boca Raton's most exclusive residential community — waterfront estates on the Intracoastal Waterway with some of the largest residential roof footprints in Palm Beach County. All Phase Construction USA replaces roofs on Royal Palm properties with premium materials, marine-grade fastening, and meticulous HOA coordination built to PBC wind code.`,
      sections: `
  <h2>The Royal Palm Roofing Standard</h2>
  <p>Royal Palm estates carry 5,000–15,000+ square feet of roof across main residences, guesthouses, pool cabanas, and covered outdoor structures. The architectural standard is Mediterranean-influenced with clay barrel tile, decorative ridge work, and complex multi-level rooflines. Every detail is visible from the street and the waterway, which means the finished product must be flawless — material quality, alignment, and color consistency are non-negotiable.</p>
  <h2>Waterfront Material Specifications</h2>
  <p>Royal Palm's Intracoastal location puts every roof in the salt spray zone. We spec 304-grade stainless fasteners, stainless battens, aluminum flashings, and SBS-modified peel-and-stick underlayment as the baseline — not as upgrades. Clay barrel tile is sourced from manufacturers with documented salt-environment performance data. Standing-seam aluminum is available for pool cabanas, guesthouses, and flat-section applications where a modern aesthetic is appropriate.</p>
  <h2>HOA &amp; Estate Coordination</h2>
  <p>Royal Palm's architectural review process is among the most rigorous in Boca Raton. We handle the full submittal — material samples, color boards, project timeline, staging plan, and crew access logistics — and work directly with the community manager throughout the project. For properties with Intracoastal-facing elevations, we coordinate staging to minimize visual impact during the construction period.</p>
  <h2>Multi-Structure Estate Projects</h2>
  <p>Most Royal Palm properties have multiple roofed structures. We scope every building on the property, stage the project to minimize disruption to the household, and execute under a single permit and project timeline. Our dual licensing handles any structural issues discovered during tear-off without subcontracting delays.</p>
      `
    },
    {
      slug: 'boca-raton-luxury-estate-roofing',
      title: 'Boca Raton Luxury Estate Roofing | All Phase USA',
      description: 'Luxury estate roofing in Boca Raton — The Sanctuary, Le Lac, St. Andrews Country Club. Premium tile, metal, and flat systems. PBC wind-code compliant.',
      h1: 'Boca Raton Luxury Estate Roofing',
      hubSlug: 'boca-raton',
      hubName: 'Boca Raton',
      county: 'Palm Beach',
      intro: `Boca Raton's luxury estate communities — The Sanctuary, Le Lac, St. Andrews Country Club, Woodfield Country Club, and the gated enclaves along Palmetto Park Road — set the highest roofing standard in Palm Beach County. All Phase Construction USA serves these communities with premium material sourcing, meticulous HOA coordination, and wind-code compliant assemblies engineered for the most complex residential roof geometries in the market.`,
      sections: `
  <h2>Communities We Serve</h2>
  <p>The Sanctuary — ultra-exclusive gated community with Mediterranean and contemporary estates on oversized lots. Le Lac — one of Boca Raton's most private enclaves with lakefront estate homes. St. Andrews Country Club — established golf-course community with complex tile roof systems on estate-scale homes. Woodfield Country Club — gated country club community west of the Turnpike. The private estates along Palmetto Park Road west of Powerline where lot sizes and roof footprints rival anything in the county.</p>
  <h2>The Luxury Estate Roofing Standard</h2>
  <p>Estate homes in these communities carry 6,000–20,000+ square feet of roof with architectural complexity that standard residential crews cannot handle — barrel tile turrets, curved hip ridges, copper accent flashings, mixed-material transitions between tile and flat sections, and multi-structure compounds with guesthouses, cabanas, and detached garages. We assign dedicated project managers and specialty tile crews to every luxury estate project.</p>
  <h2>Premium Materials</h2>
  <p>Imported clay barrel tile for authentic Mediterranean profiles. Copper flashings and accent work where the architectural specification calls for it. Standing-seam copper or aluminum on accent roofs and modern-design estates. SBS-modified peel-and-stick underlayment on every structure regardless of material. Stainless fasteners throughout for long-term corrosion resistance.</p>
  <h2>Architectural Review &amp; Project Management</h2>
  <p>Each community's architectural review board has its own submittal requirements, approved material lists, and construction scheduling restrictions. We handle every submittal, coordinate with the community manager on access and staging, and provide the homeowner with a single point of contact from contract through final inspection.</p>
      `
    }
  ];

  // =====================================================================
  // LIGHTHOUSE POINT + POMPANO BEACH — Geo-relevance pages
  // Two closest cities to HQ after Deerfield Beach
  // =====================================================================
  const lighthousePompanoPages = [
    {
      slug: 'lighthouse-point-roof-replacement',
      title: 'Lighthouse Point Roof Replacement | All Phase USA',
      description: 'Roof replacement in Lighthouse Point, FL. Waterfront and inland homes. HVHZ-compliant, marine-grade materials. Minutes from our Deerfield Beach HQ.',
      h1: 'Roof Replacement in Lighthouse Point, FL',
      hubSlug: 'lighthouse-point',
      hubName: 'Lighthouse Point',
      county: 'Broward',
      intro: `Lighthouse Point is a small, affluent waterfront community just south of Deerfield Beach — and just minutes from our headquarters at 590 Goolsby Blvd. The city's network of canals, Intracoastal frontage, and proximity to the Hillsboro Inlet means nearly every home in Lighthouse Point faces some degree of salt air exposure. All Phase Construction USA replaces roofs across Lighthouse Point with HVHZ-compliant assemblies rated for 175+ mph wind speeds and marine-grade materials throughout.`,
      sections: `
  <h2>The Lighthouse Point Roofing Environment</h2>
  <p>Lighthouse Point is essentially a canal community — deep-water canals run through most of the city, connecting to the Intracoastal Waterway and the Hillsboro Inlet. That water network means salt air reaches every neighborhood, not just the waterfront lots. Even homes on interior streets face enough chloride exposure to corrode standard galvanized fasteners within a few years. We treat the entire city as a coastal zone and spec marine-grade materials accordingly.</p>
  <h2>Neighborhoods &amp; Landmarks</h2>
  <p>The Hillsboro Inlet area at the city's northeast corner — closest to open ocean with the worst salt exposure. The deep-water canal homes along NE 24th Street, NE 26th Street, and the finger canals off the Intracoastal. The interior single-family streets between Federal Highway and Dixie Highway. Cap's Place Island — the historic restaurant landmark accessible only by boat, which anchors the inlet neighborhood. Dixon Ahl Park and Dan Witt Park mark the central residential zones.</p>
  <h2>Materials for Lighthouse Point</h2>
  <p>Clay and concrete tile on stainless battens with 304-grade fasteners — the dominant aesthetic and the right choice for the salt environment. Standing-seam aluminum for canal-front homes where maximum corrosion resistance is the priority. Modified-bitumen on flat sections with aluminum flashings at every penetration. No galvanized metal anywhere on a Lighthouse Point roof.</p>
  <h2>Proximity to Our HQ</h2>
  <p>Our Deerfield Beach headquarters is less than 5 minutes from Lighthouse Point. That means same-day emergency response, zero mobilization surcharges, and project managers who can be on-site in minutes. We're the closest licensed roofing contractor to Lighthouse Point with HVHZ certification and dual licensing.</p>
      `
    },
    {
      slug: 'lighthouse-point-tile-roof-replacement',
      title: 'Lighthouse Point Tile Roof Replacement | All Phase USA',
      description: 'Tile roof replacement in Lighthouse Point, FL. Clay and concrete tile, full underlayment tear-off, stainless battens. HVHZ-compliant.',
      h1: 'Tile Roof Replacement in Lighthouse Point, FL',
      hubSlug: 'lighthouse-point',
      hubName: 'Lighthouse Point',
      county: 'Broward',
      intro: `Tile roofs define the Lighthouse Point aesthetic — Mediterranean-profile barrel tile and flat concrete tile dominate the streetscape from the Intracoastal to the interior streets. All Phase Construction USA replaces tile roofs across Lighthouse Point with full underlayment tear-off, SBS-modified peel-and-stick replacement, and stainless battens rated for the city's canal-side salt environment and Broward County's HVHZ wind code.`,
      sections: `
  <h2>Why Lighthouse Point Tile Roofs Need Replacement</h2>
  <p>Most Lighthouse Point homes were built or substantially renovated between the 1970s and 2000s. The tile on these homes often looks intact, but the underlayment beneath — rated for 20–25 years — has failed. The salt-air environment accelerates underlayment degradation even faster than the rated lifespan, which is why Lighthouse Point homeowners see interior leaks appear seemingly overnight despite tile that looks fine from the curb.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection to assess underlayment and deck condition. Tile removal with on-site salvage where tiles are reusable. Full underlayment tear-off. Deck repair and re-nailing to current HVHZ fastening schedule. New SBS-modified peel-and-stick underlayment. Tile reset with 304-grade stainless fasteners on stainless battens. Replacement tile sourced for cracked or chipped pieces.</p>
  <h2>Salt-Environment Specifications</h2>
  <p>Every tile re-roof in Lighthouse Point uses stainless battens, stainless fasteners, and aluminum or stainless flashings. We do not install galvanized components in Lighthouse Point — the canal-side salt environment makes corrosion a certainty, not a risk.</p>
  <h2>Warranty &amp; Insurance</h2>
  <p>Every tile re-roof includes a manufacturer underlayment warranty, our workmanship guarantee, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    },
    {
      slug: 'pompano-beach-coastal-roofing',
      title: 'Pompano Beach Coastal Roofing | All Phase USA',
      description: 'Coastal roofing in Pompano Beach, FL. A1A corridor, Harbor Village, beachside properties. Salt-rated, HVHZ-compliant. Free inspection.',
      h1: 'Pompano Beach Coastal Roofing',
      hubSlug: 'pompano-beach',
      hubName: 'Pompano Beach',
      county: 'Broward',
      intro: `Pompano Beach's coastal zone — the A1A beachside corridor, Harbor Village, and the neighborhoods east of Federal Highway — faces Atlantic salt spray, direct UV, and Exposure D wind loads year-round. All Phase Construction USA builds coastal re-roofs for Pompano Beach with 304-grade stainless fasteners, SBS-modified peel-and-stick underlayment, and HVHZ-compliant assemblies rated for 175+ mph wind speeds.`,
      sections: `
  <h2>The Pompano Beach Coastal Zone</h2>
  <p>Pompano Beach stretches from the Hillsboro Inlet at the north end to the Fort Lauderdale line at the south, with 3+ miles of direct oceanfront. Harbor Village sits on the Intracoastal with deep-water canal access. Garden Isles and the neighborhoods between Federal Highway and A1A face enough salt load to corrode standard fasteners within a few years. We treat everything east of I-95 as the coastal zone and spec marine-grade materials accordingly.</p>
  <h2>Landmarks in Our Coastal Service Area</h2>
  <p>Pompano Beach Pier and the surrounding beachside hotels and condominiums. Harbor Village's canal-front homes with direct Intracoastal access. The Hillsboro Inlet area at the Deerfield Beach / Lighthouse Point / Pompano Beach convergence — the worst salt exposure in the city. Pompano Beach Community Park marks the inland edge of the salt-affected zone.</p>
  <h2>Coastal Assemblies</h2>
  <p>Clay and concrete tile on stainless battens with 304-grade fasteners. Standing-seam aluminum for maximum corrosion resistance on canal-front and oceanfront properties. Modified-bitumen on flat sections with aluminum flashings. Enhanced edge metal for Exposure D uplift at the eaves.</p>
  <h2>Wind Mitigation</h2>
  <p>Every coastal re-roof includes a wind mitigation form delivered to your insurer. Pompano Beach coastal homes typically qualify for the maximum credit categories across all five wind mitigation line items.</p>
      `
    },
    {
      slug: 'pompano-beach-tile-roof-replacement',
      title: 'Pompano Beach Tile Roof Replacement | All Phase USA',
      description: 'Tile roof replacement in Pompano Beach, FL. Palm Aire, Cypress Lakes, and citywide. Full underlayment tear-off, HVHZ-compliant.',
      h1: 'Tile Roof Replacement in Pompano Beach, FL',
      hubSlug: 'pompano-beach',
      hubName: 'Pompano Beach',
      county: 'Broward',
      intro: `Concrete and clay tile covers the majority of Pompano Beach's residential roofing — from the 1970s ranch homes in Palm Aire to the newer builds in Cypress Lakes and the subdivisions west of Powerline Road. All Phase Construction USA replaces tile roofs across Pompano Beach with full underlayment tear-off, SBS-modified peel-and-stick replacement, and HVHZ-compliant fastening schedules rated for 175+ mph wind speeds.`,
      sections: `
  <h2>Why Pompano Beach Tile Roofs Need Replacement Now</h2>
  <p>Palm Aire's homes were built starting in the 1970s, making their original tile systems 40–50 years old. Cypress Lakes and the western subdivisions were built in the 1990s and 2000s, putting them squarely in the 20–25 year underlayment failure window. Pompano Beach's 60–65 inches of annual rainfall and salt-laden Atlantic winds accelerate underlayment degradation faster than manufacturer ratings suggest. The tile looks fine; the waterproofing beneath it has failed.</p>
  <h2>Communities We Serve</h2>
  <p>Palm Aire — one of Pompano Beach's largest residential communities with thousands of homes carrying aging tile systems. Cypress Lakes — gated community with concrete tile on 1990s–2000s homes entering the re-roof window. Garden Isles — canal community where salt exposure compounds underlayment failure. The residential streets between Atlantic Boulevard and Sample Road where the densest tile roof inventory sits.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection. Tile removal with on-site salvage. Full underlayment tear-off. Deck repair and re-nailing to HVHZ fastening schedule. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners. Replacement tile sourced for HOA color and profile match.</p>
  <h2>Insurance &amp; Wind Mitigation</h2>
  <p>Every tile re-roof includes a wind mitigation form delivered to your insurer. Many Pompano Beach homeowners file claims after storm events — we provide full documentation, adjuster coordination, and supplement filing.</p>
      `
    },
    {
      slug: 'palm-aire-pompano-beach-roofing',
      title: 'Palm Aire Pompano Beach Roofing | All Phase USA',
      description: 'Roof replacement in Palm Aire, Pompano Beach FL. 1970s-era tile and flat roof systems. HOA-coordinated, HVHZ-compliant. Free inspection.',
      h1: 'Roofing Contractor for Palm Aire, Pompano Beach',
      hubSlug: 'pompano-beach',
      hubName: 'Pompano Beach',
      county: 'Broward',
      intro: `Palm Aire is one of the largest residential communities in Pompano Beach — a sprawling golf-course community of single-family homes, villas, and condominiums built starting in the 1970s. The original roof systems across Palm Aire are 40–50 years old, and even homes that were re-roofed in the 1990s or early 2000s are back in the replacement window. All Phase Construction USA handles Palm Aire re-roofs with HOA coordination and HVHZ-compliant assemblies.`,
      sections: `
  <h2>The Palm Aire Re-Roof Situation</h2>
  <p>Palm Aire's construction spans the 1970s through the 1990s, creating three overlapping re-roof waves: original 1970s systems that are critically overdue, 1980s re-roofs that have exceeded their underlayment lifespan, and 1990s re-roofs that are entering the failure window now. Regardless of which wave your home falls in, the underlayment beneath the tile has reached or exceeded its rated life.</p>
  <h2>Sections We Serve</h2>
  <p>Palm Aire's multiple sections — from the original golf-course villas to the single-family homes along Palm Aire Drive and the condominium buildings — each have their own association guidelines and architectural requirements. We work with each section's board individually on material approvals, color matching, and scheduling.</p>
  <h2>Villa &amp; Condo Roofing</h2>
  <p>Multi-unit villa and condominium buildings in Palm Aire require coordination between adjacent unit owners and the association board on timing, access, and cost sharing. We handle the full coordination — board presentations, resident notification, phased scheduling — so the association isn't chasing the contractor.</p>
  <h2>HOA Process</h2>
  <p>Architectural review submittal with material samples and color boards. Written approval before material ordering. Phased scheduling for multi-unit buildings. Post-completion walk with the homeowner and association representative. Wind mitigation form delivered to each unit owner's insurer.</p>
      `
    }
  ];

  // =====================================================================
  // ST. ANDREWS COUNTRY CLUB — West Boca off Clint Moore Rd
  // =====================================================================
  const stAndrewsPages = [
    {
      slug: 'st-andrews-country-club-boca-raton-roofing',
      title: 'St. Andrews Country Club Boca Roofing | All Phase',
      description: 'Roof replacement in St. Andrews Country Club, West Boca Raton FL. Estate tile re-roofs, HOA-coordinated, PBC wind-code compliant. Free inspection.',
      h1: 'Roofing Contractor for St. Andrews Country Club, Boca Raton',
      hubSlug: 'boca-raton',
      hubName: 'Boca Raton',
      county: 'Palm Beach',
      intro: `St. Andrews Country Club is one of West Boca Raton's most prestigious gated golf-course communities — located off Clint Moore Road west of the Turnpike, with estate homes built primarily in the late 1980s and 1990s. The original tile roof systems across St. Andrews are now 30–40 years old and deep into the re-roof window. All Phase Construction USA replaces roofs throughout St. Andrews with HOA-approved materials, meticulous architectural review coordination, and Palm Beach County wind-code compliant assemblies rated for 170+ mph design wind speeds.`,
      sections: `
  <h2>The St. Andrews Re-Roof Window</h2>
  <p>St. Andrews Country Club was developed in the late 1980s through the mid-1990s, with most homes carrying original concrete tile systems installed during initial construction. Those systems are now 30–40 years old. The tile itself may still appear intact from the street, but the felt underlayment beneath — rated for 20–25 years — failed a decade ago on the oldest homes and is actively failing across the rest of the community. Interior leaks, mold behind drywall, and soft spots on the deck are the symptoms homeowners see when the underlayment has given out.</p>
  <h2>Estate-Scale Roof Complexity</h2>
  <p>St. Andrews estate homes carry 4,000–10,000+ square feet of roof with complex multi-level rooflines, hip-and-valley intersections, barrel tile turrets, mixed steep-slope and flat-section transitions, and decorative ridge work. These aren't standard residential re-roofs — they require specialty tile crews who understand complex geometry, custom flashing fabrication at every transition point, and project managers who can sequence multi-week estate projects without gaps or delays.</p>
  <h2>HOA &amp; Country Club Coordination</h2>
  <p>St. Andrews' architectural review committee maintains strict standards for tile profile, color, and installation quality. We handle the full submittal — physical tile samples, color boards, project timeline, staging plan, and debris management logistics — and secure written approval before ordering materials. The country club environment also requires coordination around golf operations, gate access scheduling, and noise-sensitive hours that we build into every project plan.</p>
  <h2>Materials for St. Andrews</h2>
  <p>Concrete and clay tile matched to the community's approved palette and profile. SBS-modified peel-and-stick underlayment on every project — no felt. Stainless fasteners and battens for long-term performance. Modified-bitumen on flat and low-slope sections with fully adhered application and wind-rated edge metal. For homeowners considering an upgrade, standing-seam metal is available for flat sections and contemporary accents where the HOA permits it.</p>
  <h2>Clint Moore Road Service Area</h2>
  <p>Our West Boca service area extends across the entire Clint Moore Road corridor — from St. Andrews Country Club and the surrounding communities west of the Turnpike through Boca West, Boca Pointe, and the residential neighborhoods east to Powerline Road. St. Andrews homeowners benefit from our proximity to the West Boca market and our deep familiarity with the community's architectural standards.</p>
  <h2>Insurance &amp; Wind Mitigation</h2>
  <p>Every St. Andrews re-roof includes a completed OIR-B1-1802 wind mitigation form delivered to your insurer. On an estate-scale St. Andrews home, the premium credits for roof-to-wall connections, deck attachment, secondary water resistance, and roof covering class can represent a substantial annual savings that compounds over the life of the policy. We also provide full insurance claim documentation and adjuster coordination for storm-damage claims.</p>
      `
    }
  ];

  for (const p of stAndrewsPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement</a></li>
    <li><a href="/boca-raton-luxury-estate-roofing" style="color: #dc2626; text-decoration: underline;">Boca Raton Luxury Estate Roofing</a></li>
    <li><a href="/broken-sound-boca-raton-roofing" style="color: #dc2626; text-decoration: underline;">Broken Sound Roofing</a></li>
    <li><a href="/west-boca-raton-roof-replacement" style="color: #dc2626; text-decoration: underline;">West Boca Raton Roof Replacement</a></li>
    <li><a href="/boca-raton-tile-re-roof" style="color: #dc2626; text-decoration: underline;">Boca Raton Tile Re-Roof</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered St. Andrews: ${p.slug}/index.html`);
    totalPages++;
  }

  for (const p of lighthousePompanoPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} Roof Replacement</a></li>
    <li><a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach Roof Replacement</a></li>
    <li><a href="/locations/broward-county" style="color: #dc2626; text-decoration: underline;">Broward County Roofing Contractor</a></li>
  </ul>
  ${companyAuthorityFooter('Broward')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered LP/Pompano Geo: ${p.slug}/index.html`);
    totalPages++;
  }

  for (const p of hoaCommunityPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} Roof Replacement</a></li>
    <li><a href="/roof-repair/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} Roof Repair</a></li>
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
  </ul>
  ${companyAuthorityFooter(p.county)}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered HOA Community: ${p.slug}/index.html`);
    totalPages++;
  }

  for (const p of browardCommercialPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Commercial Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/${p.slug.startsWith('deerfield') ? 'deerfield-beach' : 'pompano-beach'}" style="color: #dc2626; text-decoration: underline;">${p.slug.startsWith('deerfield') ? 'Deerfield Beach' : 'Pompano Beach'} roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/deerfield-beach" style="color: #dc2626; text-decoration: underline;">Deerfield Beach Roof Replacement</a></li>
    <li><a href="/locations/pompano-beach" style="color: #dc2626; text-decoration: underline;">Pompano Beach Roof Replacement</a></li>
    <li><a href="/locations/broward-county" style="color: #dc2626; text-decoration: underline;">Broward County Roofing Contractor</a></li>
    <li><a href="/boca-raton-commercial-roofing" style="color: #dc2626; text-decoration: underline;">Boca Raton Commercial Roofing</a></li>
    <li><a href="/locations/fort-lauderdale" style="color: #dc2626; text-decoration: underline;">Fort Lauderdale Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Broward')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Broward Commercial: ${p.slug}/index.html`);
    totalPages++;
  }

  for (const p of bocaFinalPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement</a></li>
    <li><a href="/coastal-boca-raton-roofing-contractor" style="color: #dc2626; text-decoration: underline;">Coastal Boca Raton Roofing</a></li>
    <li><a href="/boca-raton-tile-re-roof" style="color: #dc2626; text-decoration: underline;">Boca Raton Tile Re-Roof</a></li>
    <li><a href="/boca-raton-wind-mitigation-roofing" style="color: #dc2626; text-decoration: underline;">Boca Raton Wind Mitigation</a></li>
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Boca Final: ${p.slug}/index.html`);
    totalPages++;
  }

  for (const p of wellingtonPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/wellington" style="color: #dc2626; text-decoration: underline;">Wellington roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roof Replacement</a></li>
    <li><a href="/roof-repair/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roof Repair</a></li>
    <li><a href="/roof-inspection/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roof Inspection</a></li>
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Wellington Geo: ${p.slug}/index.html`);
    totalPages++;
  }

  // =====================================================================
  // WEST PALM BEACH GEO-RELEVANCE — Neighborhood + Service × City pages
  // County seat: historic Flamingo Park, waterfront Northwood,
  // downtown commercial, and inland suburban corridors
  // =====================================================================
  const westPalmPages = [
    {
      slug: 'west-palm-beach-historic-roofing',
      title: 'West Palm Beach Historic District Roofing | All Phase USA',
      description: 'Historic district roofing in West Palm Beach — Flamingo Park, El Cid, Northwood. Period-correct tile and shingle re-roofs. PBC wind-code compliant.',
      h1: 'West Palm Beach Historic District Roofing',
      intro: `West Palm Beach's historic neighborhoods — Flamingo Park, El Cid, Northwood Historic District, and Southland Park — contain some of Palm Beach County's most architecturally significant residential structures. Spanish Colonial Revival, Mission Revival, Mediterranean, and Art Deco homes from the 1920s through 1940s require roofing work that preserves period-correct aesthetics while meeting modern wind-code requirements. All Phase Construction USA handles that balance with dual-licensed structural assessment and period-appropriate material sourcing.`,
      sections: `
  <h2>The Historic WPB Roofing Challenge</h2>
  <p>Homes in Flamingo Park and El Cid were built with clay barrel tile, wood shake, and early composition systems on framing that predates modern code. Original skip sheathing, undersized rafters, and non-standard spacing are common. A re-roof on these structures is a structural project as much as a roofing project — the deck and framing must be evaluated and potentially upgraded before any new system goes on.</p>
  <h2>Neighborhoods We Serve</h2>
  <p>Flamingo Park — West Palm Beach's premier historic neighborhood with Spanish Colonial and Mediterranean Revival homes between Southern Boulevard and Belvedere Road. El Cid — architecturally significant homes west of Flagler Drive with direct Intracoastal views. Northwood Historic District — early 20th century homes north of 25th Street. Southland Park — 1920s–1940s structures near Lake Worth Lagoon requiring structural assessment before reroofing.</p>
  <h2>Period-Correct Materials</h2>
  <p>We source clay barrel tile for authentic 1920s Mediterranean matches, flat and S-tile profiles for Mission Revival homes, and architectural shingles in historically accurate color palettes. Material selection is coordinated with the City of West Palm Beach Historic Preservation division where applicable.</p>
  <h2>Structural Assessment Included</h2>
  <p>Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we assess and repair structural framing issues — rafter reinforcement, deck overlays, fascia replacement — without subcontracting. One permit, one crew, one project timeline.</p>
      `
    },
    {
      slug: 'west-palm-beach-waterfront-roofing',
      title: 'West Palm Beach Waterfront Roofing | All Phase USA',
      description: 'Waterfront roofing in West Palm Beach, FL. Intracoastal and lagoon-side homes. Salt-air rated, marine-grade fasteners. PBC wind-code compliant.',
      h1: 'West Palm Beach Waterfront Roofing',
      intro: `West Palm Beach's waterfront neighborhoods along the Intracoastal Waterway and Lake Worth Lagoon face salt air corrosion, direct wind exposure, and UV loads that destroy standard roofing assemblies years ahead of schedule. All Phase Construction USA builds waterfront re-roofs for West Palm Beach with 304-grade stainless fasteners, SBS-modified peel-and-stick underlayment, and wind-code compliant assemblies rated to 170+ mph design wind speeds.`,
      sections: `
  <h2>The Waterfront Exposure Problem</h2>
  <p>Properties along Flagler Drive, the Northwood Shores waterfront, and the Intracoastal-facing lots in El Cid sit within the salt spray zone where standard galvanized fasteners corrode in 2–3 years and felt underlayment degrades at double the rate of inland installations. We spec marine-grade materials as the baseline on every waterfront project — not as an upgrade.</p>
  <h2>Landmarks in Our Waterfront Service Area</h2>
  <p>Flagler Drive runs the length of the West Palm Beach waterfront and connects our primary service zones. Northwood Shores offers direct Intracoastal waterfront with the worst salt exposure in the city. The Dreher Park area and Okeechobee Boulevard bridge mark the southern waterfront boundary. Rosemary Square and the downtown waterfront district generate both residential and commercial demand.</p>
  <h2>Waterfront Assemblies</h2>
  <p>Clay and concrete tile on stainless battens with 304-grade fasteners. Standing-seam aluminum for maximum corrosion resistance. Modified-bitumen for flat sections with aluminum flashings at every penetration. Every assembly includes enhanced edge metal for Exposure D uplift pressures.</p>
  <h2>Wind Mitigation Credits</h2>
  <p>Every waterfront re-roof includes a wind mitigation form delivered to your insurer. Waterfront homes typically qualify for the maximum credit categories, which compound into a significant annual premium reduction.</p>
      `
    },
    {
      slug: 'west-palm-beach-commercial-roofing',
      title: 'West Palm Beach Commercial Roofing | All Phase USA',
      description: 'Commercial roofing in West Palm Beach, FL. Downtown, Okeechobee corridor, Rosemary Square area. TPO, modified-bitumen, built-up systems. Dual licensed.',
      h1: 'West Palm Beach Commercial Roofing',
      intro: `West Palm Beach is Palm Beach County's commercial hub — the Okeechobee Boulevard corridor, the Rosemary Square downtown district, and the Congress Avenue office parks generate steady demand for flat roof replacement and repair. All Phase Construction USA replaces and repairs commercial roof systems across West Palm Beach with TPO, modified-bitumen, and built-up assemblies rated to Palm Beach County wind code.`,
      sections: `
  <h2>The West Palm Beach Commercial Roofing Market</h2>
  <p>The Okeechobee Boulevard and Jog Road interchange anchors the busiest commercial corridor in West Palm Beach, where 1980s and 1990s-era office parks and retail centers carry original flat roof systems that are 30–40 years old. The downtown Rosemary Square district has a mix of newer mixed-use buildings and older commercial structures, many with flat roof sections that have been patched rather than replaced. Congress Avenue south of Okeechobee carries a dense concentration of medical offices and professional buildings with aging roof systems.</p>
  <h2>Systems We Install</h2>
  <p>TPO single-ply membrane for energy efficiency and reflectivity. Fully adhered modified-bitumen for durability and puncture resistance on high-traffic rooftops. Multi-ply built-up systems for heavy-duty commercial applications. Every system includes tapered insulation for positive drainage and wind-rated edge metal.</p>
  <h2>Downtown Mixed-Use Roofing</h2>
  <p>Mixed-use buildings near Rosemary Square and along Clematis Street combine retail, restaurant, and residential uses under flat roof assemblies that often require phased replacement to minimize business disruption. We schedule tear-off and installation in sections to keep ground-floor tenants operational.</p>
  <h2>Dual Licensing Advantage</h2>
  <p>Commercial flat roof replacements frequently uncover parapet deterioration, structural deck issues, or fascia damage. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) eliminates the need for a second contractor on these combined-scope projects.</p>
      `
    },
    {
      slug: 'west-palm-beach-tile-roof-replacement',
      title: 'West Palm Beach Tile Roof Replacement | All Phase USA',
      description: 'Tile roof replacement in West Palm Beach, FL. Historic barrel tile and modern concrete tile. Full underlayment tear-off, PBC wind-code compliant.',
      h1: 'Tile Roof Replacement in West Palm Beach, FL',
      intro: `Tile roofs in West Palm Beach span the full range — original 1920s clay barrel tile on Flamingo Park bungalows, 1990s concrete flat tile on suburban subdivisions near Jog Road, and everything in between. All Phase Construction USA replaces tile roofs across West Palm Beach with full underlayment tear-off, structural assessment where needed, and stainless battens for PBC wind-code compliance.`,
      sections: `
  <h2>Two Eras of Tile in West Palm Beach</h2>
  <p>Pre-war tile homes in the historic districts often have original skip sheathing and undersized rafters that need structural overlay before new underlayment can go on. Post-1980 tile homes across the suburban corridors have plywood decking that typically needs re-nailing to current code. We assess every structure before quoting because these are fundamentally different scopes — a Flamingo Park barrel tile salvage-and-reset is nothing like a 1995 flat tile tear-and-replace.</p>
  <h2>Our Tile Re-Roof Process</h2>
  <p>Drone and attic inspection. Tile removal with on-site salvage where tiles are reusable. Full underlayment tear-off down to the deck. Deck repair, overlay, or re-nailing as conditions require. New SBS-modified peel-and-stick underlayment. Tile reset with stainless fasteners. Replacement tile sourced for cracked or chipped pieces.</p>
  <h2>Neighborhoods We Serve</h2>
  <p>Flamingo Park, El Cid, and Northwood for historic barrel and S-tile re-roofs. The Okeechobee corridor subdivisions for concrete flat tile replacements. Northwood Shores and the waterfront zone where stainless battens and marine-grade fasteners are mandatory.</p>
  <h2>Warranty &amp; Insurance</h2>
  <p>Every tile re-roof includes a manufacturer underlayment warranty, our workmanship guarantee, and a wind mitigation form delivered to your insurer on completion.</p>
      `
    },
    {
      slug: 'west-palm-beach-roof-insurance-claim',
      title: 'West Palm Beach Roof Insurance Claim | All Phase USA',
      description: 'West Palm Beach roof insurance claim assistance. Full documentation, adjuster coordination, wind mitigation credits. Licensed & insured.',
      h1: 'West Palm Beach Roof Insurance Claim Assistance',
      intro: `West Palm Beach's mix of historic structures, aging suburban tile, and waterfront exposure generates a steady volume of roof insurance claims. All Phase Construction USA handles the full claim process for West Palm Beach homeowners — from drone inspection through re-roof completion and wind mitigation filing — with documentation built to withstand adjuster scrutiny on both storm damage and pre-existing condition separation.`,
      sections: `
  <h2>Why West Palm Beach Claims Need Expert Documentation</h2>
  <p>Adjusters reviewing West Palm Beach claims know the housing stock ranges from 100-year-old historic homes to 30-year-old suburban tile. Pre-existing conditions are common, and the adjuster must see clear documentation separating storm damage from wear-and-tear. On historic properties, structural framing issues further complicate the scope. We document everything — storm damage, pre-existing condition, and structural concerns — so the adjuster can approve a defensible scope.</p>
  <h2>Our Claim Documentation Process</h2>
  <p>Free inspection with drone and attic imaging on day one. Full photographic damage documentation. Scope of repair written to match the documented damage pattern and the building's construction era. Direct coordination with your adjuster during their site visit. Supplement filing if the initial scope doesn't cover the full documented damage.</p>
  <h2>After the Claim Is Approved</h2>
  <p>Palm Beach County permit pulled, re-roof executed to current wind-code standards, and a wind mitigation form delivered to your insurer on completion to unlock premium credits.</p>
  <h2>Service Area</h2>
  <p>Our West Palm Beach claim support covers Flamingo Park, El Cid, Northwood Historic District, Southland Park, Northwood Shores waterfront, the Okeechobee Boulevard corridor, and the downtown Rosemary Square district.</p>
      `
    }
  ];

  for (const p of westPalmPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roof Replacement</a></li>
    <li><a href="/roof-repair/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roof Repair</a></li>
    <li><a href="/roof-inspection/west-palm-beach" style="color: #dc2626; text-decoration: underline;">West Palm Beach Roof Inspection</a></li>
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/wellington" style="color: #dc2626; text-decoration: underline;">Wellington Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered West Palm Beach Geo: ${p.slug}/index.html`);
    totalPages++;
  }



  for (const p of [...priority2Pages, ...priority3Pages]) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement</a></li>
    <li><a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Priority 2/3: ${p.slug}/index.html`);
    totalPages++;
  }

  for (const p of priority1Pages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    const content = `
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  ${p.sections}
  <h2>Ready for a Free Coastal Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our <a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County roofing hub</a> to schedule a free inspection.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">
    <li><a href="/locations/palm-beach-county" style="color: #dc2626; text-decoration: underline;">Palm Beach County Roofing Contractor</a></li>
    <li><a href="/locations/boca-raton" style="color: #dc2626; text-decoration: underline;">Boca Raton Roof Replacement</a></li>
    <li><a href="/locations/delray-beach" style="color: #dc2626; text-decoration: underline;">Delray Beach Roof Replacement</a></li>
  </ul>
  ${companyAuthorityFooter('Palm Beach')}
    `;
    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered Priority 1: ${p.slug}/index.html`);
    totalPages++;
  }

  // =====================================================================
  // SPA-SHELL-VICTIM PRERENDER COVERAGE (PR-3a)
  // React routes declared in src/App.tsx that had no corresponding entry in
  // this prerender script. Netlify was falling through to the SPA catch-all
  // (/* → /index.html 200), serving the 18,504-byte bare dist/index.html
  // shell on 26 crawlable URLs (verified in the 2026-04-18 Screaming Frog
  // crawl). We generate a minimal SEO shell (title + description + canonical
  // + H1 + summary paragraph) for each; React hydrates the full experience
  // on top. Content mirrors the <SEO> metadata defined in each page
  // component so Google sees consistent signals pre- and post-hydration.
  //
  // DO NOT include: parameterized dynamic routes (:city, :landmark, :slug)
  // or Supabase-backed blog posts — those are handled separately.
  // =====================================================================
  const spaShellVictimPages = [
    // ── 22 single-segment landing pages (React routes, had no prerender) ──
    {
      slug: 'annual-roof-inspection-sunrise',
      title: 'Annual Roof Inspection in Sunrise, FL (10-Point Checklist)',
      description: '10-point annual roof inspection checklist for Sunrise, FL homeowners. What real inspections cover, what they cost, and how they save thousands in interior',
      h1: 'Annual Roof Inspection in Sunrise',
      summary: 'What a real annual roof inspection should cover for Sunrise, FL homeowners — from flashing and fastener checks to attic moisture scanning — and how proactive inspection prevents thousands in interior damage. Free inspection available within 48 hours.',
      hubSlug: 'sunrise',
      hubName: 'Sunrise',
      county: 'Broward'
    },
    {
      slug: 'boca-raton-roof-replacement-timeline',
      title: 'Boca Raton Roof Replacement Timeline (2026) | Day-by-Day Guide',
      description: 'How long does a roof replacement take in Boca Raton? A phase-by-phase day-by-day timeline from inspection to final inspection, with permit and weather',
      h1: 'Boca Raton Roof Replacement Timeline: Day-by-Day',
      summary: 'Most Boca Raton shingle roof replacements are completed in 2 to 4 working days once the Palm Beach County permit is issued, while concrete tile homes typically take 5 to 7 days. The full timeline from contract to final inspection runs 2 to 6 weeks. We schedule tear-off and dry-in on the same day so your home is protected overnight.',
      hubSlug: 'boca-raton',
      hubName: 'Boca Raton',
      county: 'Palm Beach'
    },
    {
      slug: 'coral-springs-roof-permit-guide',
      title: 'Coral Springs Roof Permit Guide (2026)',
      description: 'When you need a roofing permit in Coral Springs, what the city requires, how long it takes, fees, required inspections, and HVHZ code requirements.',
      h1: 'Coral Springs Roof Permit Guide (2026)',
      summary: 'Coral Springs requires a permit for any roof replacement over 25% of the surface, any material change, or structural work. We submit electronically with a sealed product approval package; most residential roofing permits are issued within 5 to 10 business days under HVHZ code.',
      hubSlug: 'coral-springs',
      hubName: 'Coral Springs',
      county: 'Broward'
    },
    {
      slug: 'delray-beach-roof-overlay-vs-tear-off',
      title: "Why You Can't Overlay a Roof in Delray Beach (HVHZ Code",
      description: 'A contractor pitched you a roof-over in Delray Beach? Florida HVHZ code makes that almost impossible — and here is exactly why, with the code section that',
      h1: "Why You Can't Overlay a Roof in Delray Beach",
      summary: 'Florida HVHZ code effectively disqualifies roof-overs (overlay installations) in Delray Beach. We walk through the exact code section, the secondary water barrier requirement, the deck-nailing rule, and why a full tear-off is almost always the right call in Palm Beach County.',
      hubSlug: 'delray-beach',
      hubName: 'Delray Beach',
      county: 'Palm Beach'
    },
    {
      slug: 'emergency-roof-tarp-lighthouse-point',
      title: 'Emergency Roof Tarp in Lighthouse Point (24-Hour Service)',
      description: 'Emergency roof tarp service in Lighthouse Point, FL — five minutes from our Deerfield Beach HQ.',
      h1: 'Emergency Roof Tarp in Lighthouse Point',
      summary: '24-hour emergency roof tarp service in Lighthouse Point, FL. Five minutes from our Deerfield Beach headquarters. When to call, what an emergency tarp costs, and how to get it reimbursed by your insurer as part of your claim.',
      hubSlug: 'lighthouse-point',
      hubName: 'Lighthouse Point',
      county: 'Broward'
    },
    {
      slug: 'flat-roof-tpo-vs-pvc-west-palm-beach',
      title: 'Flat Roof TPO vs PVC in West Palm Beach (2026)',
      description: 'TPO or PVC for your West Palm Beach flat roof? 2026 pricing, 25-year lifespan numbers, chemical and ponding resistance, and the HVHZ code that decides',
      h1: 'Flat Roof: TPO vs PVC in West Palm Beach',
      summary: 'Side-by-side comparison of TPO and PVC flat roof systems for West Palm Beach homes and commercial buildings. 2026 pricing, 25-year lifespan numbers, chemical and ponding resistance, and the Palm Beach County code details that determine which membrane fits your project.',
      hubSlug: 'west-palm-beach',
      hubName: 'West Palm Beach',
      county: 'Palm Beach'
    },
    {
      slug: 'four-point-inspection-roof-lake-worth-beach',
      title: '4-Point Inspection Roof Section in Lake Worth Beach (2026)',
      description: 'How the Florida 4-point inspection roof section works for Lake Worth Beach homeowners, what carriers require, and how to avoid a non-renewal letter.',
      h1: '4-Point Inspection (Roof Section) in Lake Worth Beach',
      summary: 'The Florida 4-point inspection roof section for Lake Worth Beach homeowners — what carriers require, how the inspector evaluates each item, and the specific roof conditions that trigger a non-renewal letter.',
      hubSlug: 'lake-worth-beach',
      hubName: 'Lake Worth Beach',
      county: 'Palm Beach'
    },
    {
      slug: 'hurricane-roof-damage-inspection-hollywood',
      title: 'Hurricane Roof Damage Inspection in Hollywood, FL (2026)',
      description: 'What to do after a hurricane damages your Hollywood, FL roof — the 10-point inspection checklist, insurance documentation, and the 24-hour window that',
      h1: 'Hurricane Roof Damage Inspection in Hollywood',
      summary: 'What to do after a hurricane damages your Hollywood, FL roof — the 10-point inspection checklist, insurance documentation standards, and the 24-hour window that protects your claim from underpayment.',
      hubSlug: 'hollywood',
      hubName: 'Hollywood',
      county: 'Broward'
    },
    {
      slug: 'metal-roofing-cost-fort-lauderdale',
      title: 'Metal Roofing Cost in Fort Lauderdale (2026) | All Phase USA',
      description: 'Real 2026 metal roof prices in Fort Lauderdale, FL by panel type. HVHZ code, coastal aluminum upgrades, insurance credits, and 50-year warranty options',
      h1: 'Metal Roofing Cost in Fort Lauderdale (2026)',
      summary: 'Real 2026 metal roof pricing in Fort Lauderdale by panel type — standing seam, exposed fastener, and stone-coated steel — with HVHZ code costs, coastal aluminum upgrades, insurance credits, and 50-year warranty options.',
      hubSlug: 'fort-lauderdale',
      hubName: 'Fort Lauderdale',
      county: 'Broward'
    },
    {
      slug: 'pompano-beach-roof-inspection',
      title: 'Pompano Beach Roof Inspection: 9 Signs You Need a New Roof',
      description: 'The nine clearest signs that your Pompano Beach roof has reached end-of-life — from curling shingles to insurance non-renewal — plus what to do next.',
      h1: 'Pompano Beach Roof Inspection: 9 Signs You Need a New Roof',
      summary: 'The nine clearest signs that your Pompano Beach roof has reached end-of-life — curling shingles, granule loss, deck sag, attic moisture, flashing failure, and insurance non-renewal patterns — plus what to do next before the rainy season.',
      hubSlug: 'pompano-beach',
      hubName: 'Pompano Beach',
      county: 'Broward'
    },
    {
      slug: 'pre-listing-roof-certification-coconut-creek',
      title: 'Pre-Listing Roof Certification in Coconut Creek (2026)',
      description: 'Why Coconut Creek listings need a pre-listing roof certification before going to market in 2026, what it includes, and how it prevents deals from',
      h1: 'Pre-Listing Roof Certification in Coconut Creek',
      summary: 'Why Coconut Creek home listings need a pre-listing roof certification before going to market — what the certification includes, how buyers and their inspectors weigh it, and how it prevents deals from collapsing at inspection.',
      hubSlug: 'coconut-creek',
      hubName: 'Coconut Creek',
      county: 'Broward'
    },
    {
      slug: 'roof-leak-detection-weston',
      title: 'Roof Leak Detection in Weston, FL (2026 Guide)',
      description: 'How to find the source of a roof leak in a Weston home, the 8 most common Florida leak sources, and when to repair vs file an insurance claim.',
      h1: 'Roof Leak Detection in Weston',
      summary: 'How to find the source of a roof leak in a Weston home — the 8 most common Florida leak sources (flashing failures, slipped tiles, soffit intrusion, nail pops, valley overflow, skylight boot failure, AC pan overflow, and deck rot) and when to repair vs file an insurance claim.',
      hubSlug: 'weston',
      hubName: 'Weston',
      county: 'Broward'
    },
    {
      slug: 'roof-maintenance-tips-miramar',
      title: '10 Roof Maintenance Tips for Miramar Homeowners (2026)',
      description: '10 practical Miramar roof maintenance habits that extend roof life, prevent leaks, and protect insurance renewability. The full pre-hurricane checklist.',
      h1: '10 Roof Maintenance Tips for Miramar',
      summary: '10 practical roof maintenance habits for Miramar homeowners that extend roof life, prevent leaks, and protect insurance renewability — including the full pre-hurricane-season checklist every South Florida home should run each May.',
      hubSlug: 'miramar',
      hubName: 'Miramar',
      county: 'Broward'
    },
    {
      slug: 'roof-replacement-cost-deerfield-beach',
      title: 'Roof Replacement Cost in Deerfield Beach (2026)',
      description: '2026 Deerfield Beach roof replacement pricing by material — shingle, tile, and metal — including HVHZ code costs, permits, and insurance options.',
      h1: 'Roof Replacement Cost in Deerfield Beach (2026)',
      summary: '2026 Deerfield Beach roof replacement pricing by material — architectural shingle, concrete and clay tile, and standing seam metal — including HVHZ code costs, permit fees, insurance reimbursement options, and typical timeline. Free quote within 24 hours of inspection.',
      hubSlug: 'deerfield-beach',
      hubName: 'Deerfield Beach',
      county: 'Broward'
    },
    {
      slug: 'standing-seam-metal-roof-jupiter',
      title: 'Standing Seam Metal Roof in Jupiter (2026)',
      description: 'Why aluminum standing seam is the right metal roof for coastal Jupiter, FL — with 2026 pricing, HVHZ code, hurricane resilience, and Palm Beach County',
      h1: 'Standing Seam Metal Roof in Jupiter',
      summary: 'Why aluminum standing seam is the right metal roof for coastal Jupiter, FL — marine-grade fastener systems, 2026 pricing ranges, Palm Beach County wind-code attachment requirements, hurricane resilience data, and the insurance credits a standing seam roof unlocks.',
      hubSlug: 'jupiter',
      hubName: 'Jupiter',
      county: 'Palm Beach'
    },
    {
      slug: 'storm-damage-repair-or-replace-davie',
      title: 'Storm Damage: Repair or Replace in Davie?',
      description: 'Repair or replace a storm-damaged Davie, FL roof? Decision matrix, Florida matching statute, law-and-ordinance coverage, and the insurance angle that',
      h1: 'Storm Damage: Repair or Replace in Davie?',
      summary: 'Repair or replace a storm-damaged roof in Davie, FL? A decision matrix that weighs age, damage extent, Florida\'s matching statute, law-and-ordinance coverage, and the insurance carrier\'s position — so you can argue the right scope with your adjuster.',
      hubSlug: 'davie',
      hubName: 'Davie',
      county: 'Broward'
    },
    {
      slug: 'switch-from-shingles-to-metal-plantation',
      title: 'Switch From Shingles to Metal in Plantation?',
      description: 'Should you replace your Plantation shingle roof with metal in 2026? Side-by-side cost, lifespan, insurance, HOA, and 40-year total-cost-of-ownership math.',
      h1: 'Is It Time to Switch From Shingles to Metal in Plantation?',
      summary: 'Should you replace your Plantation shingle roof with metal in 2026? A side-by-side comparison of up-front cost, lifespan, insurance premium impact, HOA architectural approval realities, and the 40-year total-cost-of-ownership math.',
      hubSlug: 'plantation',
      hubName: 'Plantation',
      county: 'Broward'
    },
    {
      slug: 'tile-roof-replacement-wellington',
      title: 'Tile Roof Replacement in Wellington (2026)',
      description: '2026 Wellington tile roof pricing for concrete and clay, with HOA architectural approval, engineered weight load review, and HVHZ attachment requirements',
      h1: 'Tile Roof Replacement in Wellington',
      summary: '2026 Wellington tile roof replacement pricing for concrete and clay, with HOA architectural approval checklists, engineered weight-load review when profile changes, and Palm Beach County attachment requirements explained step by step.',
      hubSlug: 'wellington',
      hubName: 'Wellington',
      county: 'Palm Beach'
    },
    {
      slug: 'tree-damage-roof-repair-parkland',
      title: 'Tree Damage Roof Repair in Parkland, FL (2026)',
      description: 'How to handle tree-limb roof damage in Parkland, FL — the 7 damage patterns, insurance coverage, repair vs replace, and the 24-hour documentation window',
      h1: 'Tree Damage Roof Repair in Parkland',
      summary: 'How to handle tree-limb roof damage in Parkland, FL — the 7 damage patterns (puncture, scrape, impact fracture, gutter tear-off, fascia crush, eave lift, and full collapse), insurance coverage, repair vs replace calls, and the 24-hour documentation window that protects your claim.',
      hubSlug: 'parkland',
      hubName: 'Parkland',
      county: 'Broward'
    },
    {
      slug: 'wind-damage-insurance-claim-boynton-beach',
      title: 'Wind Damage Insurance Claim in Boynton Beach',
      description: 'The 9-step Boynton Beach wind damage roof insurance claim process — filing windows, hurricane deductibles, law-and-ordinance coverage, and how to avoid',
      h1: 'Wind Damage Insurance Claim in Boynton Beach',
      summary: 'The 9-step Boynton Beach wind damage roof insurance claim process — filing windows, hurricane vs named-storm deductibles, law-and-ordinance coverage application, supplement filing timing, and how to avoid the five most common underpayment traps.',
      hubSlug: 'boynton-beach',
      hubName: 'Boynton Beach',
      county: 'Palm Beach'
    },
    {
      slug: 'wind-mitigation-inspection-palm-beach-gardens',
      title: 'Wind Mitigation Inspection in Palm Beach Gardens',
      description: 'How a Florida wind mitigation inspection saves Palm Beach Gardens homeowners $400 to $2,000 per year on insurance — every credit category explained.',
      h1: 'Wind Mitigation Inspection in Palm Beach Gardens',
      summary: 'How a Florida wind mitigation inspection saves Palm Beach Gardens homeowners $400 to $2,000 per year on insurance — every credit category on the OIR-B1-1802 form explained, plus which existing construction already qualifies for the maximum discount.',
      hubSlug: 'palm-beach-gardens',
      hubName: 'Palm Beach Gardens',
      county: 'Palm Beach'
    },
    // ── Legal pages (no city hub link — use generic related links) ──
    {
      slug: 'privacy',
      title: 'Privacy Policy | All Phase Construction USA',
      description: 'All Phase Construction USA privacy policy. How we collect, use, and protect personal information from website visitors and customers in Broward & Palm',
      h1: 'Privacy Policy',
      summary: 'All Phase Construction USA is committed to protecting your privacy. This policy explains what information we collect when you visit our website or contact us, how we use it, how we protect it, and your rights as a South Florida homeowner or business. For questions contact (754) 227-5605.',
      hubSlug: null,
      hubName: null,
      county: null
    },
    {
      slug: 'terms',
      title: 'Terms of Service | All Phase Construction USA',
      description: 'Terms of service governing the use of the All Phase Construction USA website and the terms under which we provide roofing services in South Florida.',
      h1: 'Terms of Service',
      summary: 'The terms of service governing your use of the All Phase Construction USA website and the terms under which we provide roofing services across Broward and Palm Beach County. Licensed under CCC-1331464 and CGC-1526236. For questions contact (754) 227-5605.',
      hubSlug: null,
      hubName: null,
      county: null
    },
    // ── Roof-repair county hub pages (had no <SEO> component) ──
    {
      slug: 'roof-repair/broward-county',
      title: 'Broward County Roof Repair | HVHZ-Code Repairs | All Phase USA',
      description: 'Roof repair across Broward County — tile, metal, shingle, and flat roof repairs to HVHZ code. Free inspection within 48 hours, dual-licensed (CCC + CGC).',
      h1: 'Roof Repair in Broward County, FL',
      summary: 'Roof repair across Broward County — tile, metal, shingle, and flat roof systems repaired to current HVHZ code. Dual-licensed (CCC-1331464 roofing + CGC-1526236 general contractor) means a single accountable crew for combined-scope work (flashing, fascia, soffit, structural). Free inspection within 48 hours.',
      hubSlug: 'deerfield-beach',
      hubName: 'Broward County',
      county: 'Broward'
    },
    {
      slug: 'roof-repair/palm-beach-county',
      title: 'Palm Beach County Roof Repair | Wind-Code Repairs',
      description: 'Roof repair across Palm Beach County — tile, metal, shingle, and flat roof repairs to wind-code standards. Free inspection within 48 hours, dual-licensed.',
      h1: 'Roof Repair in Palm Beach County, FL',
      summary: 'Roof repair across Palm Beach County — tile, metal, shingle, and flat roof systems repaired to current Palm Beach County wind-code standards. Dual-licensed (CCC-1331464 roofing + CGC-1526236 general contractor) means combined-scope repairs (flashing, fascia, soffit, structural) are handled by a single accountable crew. Free inspection within 48 hours.',
      hubSlug: 'boca-raton',
      hubName: 'Palm Beach County',
      county: 'Palm Beach'
    },
    // ── Service areas hub listing all covered cities ──
    {
      slug: 'locations/service-areas',
      title: 'Roofing Service Areas | All Phase Construction USA',
      description: 'Complete list of service areas in Broward & Palm Beach Counties. All cities served from our Deerfield Beach office with consistent supervision.',
      h1: 'Roofing Service Areas',
      summary: 'Complete list of service areas across Broward and Palm Beach County. All cities are served from our Deerfield Beach office and warehouse with consistent crew supervision and code-compliant workmanship — HVHZ in Broward, Palm Beach County wind-code in PBC.',
      hubSlug: 'deerfield-beach',
      hubName: 'Deerfield Beach',
      county: 'Broward'
    }
  ];

  for (const p of spaShellVictimPages) {
    const dir = path.join(distDir, p.slug);
    fs.mkdirSync(dir, { recursive: true });

    // Related links: city hub if available, otherwise generic top locations
    let relatedLinks;
    if (p.hubSlug && p.hubName) {
      relatedLinks = `
    <li><a href="/locations/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} Roof Replacement</a></li>
    <li><a href="/roof-repair/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} Roof Repair</a></li>
    <li><a href="/roof-inspection/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} Roof Inspection</a></li>
    <li><a href="/locations/${p.county === 'Broward' ? 'broward-county' : 'palm-beach-county'}" style="color: #dc2626; text-decoration: underline;">${p.county} County Roofing Contractor</a></li>`;
    } else {
      relatedLinks = `
    <li><a href="/residential-roofing" style="color: #dc2626; text-decoration: underline;">Residential Roofing</a></li>
    <li><a href="/commercial-roofing" style="color: #dc2626; text-decoration: underline;">Commercial Roofing</a></li>
    <li><a href="/contact" style="color: #dc2626; text-decoration: underline;">Contact Us</a></li>
    <li><a href="/our-location" style="color: #dc2626; text-decoration: underline;">Our Deerfield Beach Office</a></li>`;
    }

    const ctaHubLink = p.hubSlug
      ? `<a href="/locations/${p.hubSlug}" style="color: #dc2626; text-decoration: underline;">${p.hubName} roofing hub</a>`
      : `<a href="/contact" style="color: #dc2626; text-decoration: underline;">contact page</a>`;

    const content = `
  <h1>${p.h1}</h1>
  <p>${p.summary}</p>
  <h2>Ready for a Free Roof Assessment?</h2>
  <p>Call <strong>(754) 227-5605</strong> or visit our ${ctaHubLink} to schedule a free inspection. Dual-licensed (CCC-1331464 &amp; CGC-1526236), A+ BBB rated, serving Broward &amp; Palm Beach Counties from our Deerfield Beach headquarters.</p>
  <h2>Related Pages</h2>
  <ul style="line-height: 1.75;">${relatedLinks}
  </ul>
  ${companyAuthorityFooter(p.county)}
    `;

    fs.writeFileSync(path.join(dir, 'index.html'), createHTMLTemplate(
      p.title,
      p.description,
      `https://allphaseconstructionfl.com/${p.slug}`,
      content
    ));
    console.log(`✅ Prerendered SPA-shell victim: ${p.slug}/index.html`);
    totalPages++;
  }

console.log(`\n✅ Prerender Complete! Generated ${totalPages} fully-branded HTML pages.`);
  console.log(`\n🔍 Architecture Breakdown:`);
  console.log(`   - Homepage: 1 page`);
  console.log(`   - Service Pages: ${servicePages.length} pages`);
  console.log(`   - City Service Hubs: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`   - City Roof Repairs: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`   - City Roof Inspections: ${cities.filter(c => !c.slug.includes('county')).length} pages`);
  console.log(`\n📊 Lead Generation Structure:`);
  console.log(`   ✅ Service Hubs: /locations/[city] ✅ Broad authority`);
  console.log(`   ✅ Repair Spokes: /roof-repair/[city] ✅ High-intent leads`);
  console.log(`   ✅ Inspection Spokes: /roof-inspection/[city] ✅ Top-of-funnel leads`);
  console.log(`\n📝 Every page includes:`);
  console.log(`   ✅ 500-700 words of branded content`);
  console.log(`   ✅ Inter-page lead-gen links (Hub ✅ Repair ✅ Inspection)`);
  console.log(`   ✅ Dual-licensing emphasis (CCC & CGC)`);
  console.log(`   ✅ HVHZ certification messaging`);
  console.log(`   ✅ "Serving from Deerfield Beach HQ" context`);
  console.log(`   ✅ Company authority footer (250+ words)`);
  // ===== Diagnostic verification =====
  // Fail the build loudly if any SPA-shell-victim slug is still serving
  // the Vite shell title. See SPA_SHELL_VICTIM_SLUGS comment for context.
  verifySpaShellArtifacts(SPA_SHELL_VICTIM_SLUGS);

}

// Run the generator
await generateStaticFiles();

// Copy IndexNow key file to dist
fs.copyFileSync('public/1864f0fe7c93447e946f774adbe8e54a.txt', 'dist/1864f0fe7c93447e946f774adbe8e54a.txt');
console.log('IndexNow key file copied to dist');
