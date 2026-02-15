import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');
const distDir = path.resolve(projectRoot, 'dist');

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
 * Build SEO metadata for a location (matches src/lib/locationSeo.ts logic)
 */
function buildLocationSeo(location) {
  const { slug, city, state } = location;

  // Generate defaults from templates
  const defaultTitle = `${city} Roofing Contractor | All Phase Construction USA`;
  const defaultDescription = `All Phase Construction USA is a licensed roofing contractor serving ${city}, ${state}. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.`;
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

  ${companyAuthorityFooter()}
</section>
`.trim();
}

/**
 * SPECIAL: Boca Raton Service Hub Override - Custom content for Boca Raton location
 */
function generateBocaRatonServiceHubContent() {
  return `
<section id="seo-static-content">
  <h1>Roofer in Boca Raton FL</h1>
  <h2>All Phase Construction USA | Roofing Contractor Serving Boca Raton, Palm Beach, and Broward County</h2>
  <p>If you're searching for a roofer in Boca Raton FL, you want one thing: a roof that passes inspection, survives storms, and does not turn into a "surprise leak" two months later. That is what we build. Our commitment to quality, customer satisfaction, and safety standards sets us apart as a trusted member of the local community.</p>
  <p>All Phase Construction USA is a licensed Florida roofing contractor—fully insured and bonded for your peace of mind. We are proud to have an expert team of professional roofers dedicated to delivering reliable, high-quality workmanship. Our team takes pride in serving the Boca Raton community and building lasting relationships with our customers.</p>
  <p><strong>Call 24/7:</strong> (754) 227-5605<br>
  <strong>Address:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442<br>
  <strong>Google Rating:</strong> 4.8★ with 137 reviews</p>
  <p>As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damage—crucial for maintaining the safety and comfort of your home. We are proud of our strong BBB rating (A+) and recent positive Google reviews. When choosing a roofer in Boca Raton, always prioritize local, licensed, insured, and bonded contractors with a proven commitment to customer satisfaction and community trust.</p>
  <h2>Why Boca Raton homeowners hire All Phase Construction USA</h2>
  <h3>Not a "random crew with a ladder"</h3>
  <p>In Boca Raton, the roof that "looks fine" can still fail the moment wind-driven rain hits a weak transition. That's why we run our jobs like a code-and-inspection system, not a patch-and-pray operation.</p>
  <p>Our experienced and trained contractors handle all aspects of roof installation and repair, ensuring every project meets the highest standards. We plan the build, document the condition, pull permits correctly, and execute with specialized crews by roofing system.</p>
  <h3>Built for permits, inspections, and hurricane reality</h3>
  <p>South Florida roofing is not only about materials. It is about details that pass inspection and hold up when storms start pushing water sideways.</p>
  <p>Boca Raton weather stresses edges, flashings, valleys, penetrations, and underlayment first. We focus there because that's where roofs usually lose. Our team is committed to strict safety protocols and ensures all work meets or exceeds safety standards to protect your home and everyone involved.</p>
  <h2>The Proof Stack</h2>
  <ul>
    <li>BBB A+ rated</li>
    <li>4.8★ Google rating (137 reviews)</li>
    <li>Dual-licensed: Roofing Contractor CCC-1331464 + General Contractor CGC-1526236</li>
    <li>Manufacturer certifications, including Tamko Platinum Preferred, plus multiple major system credentials</li>
    <li>Specialized crews by system</li>
  </ul>
  <p>Different roof types fail in different ways. We assign the right crew to the right system so installs are cleaner, repairs are tighter, and callbacks drop.</p>
  <p>Shingle crew for shingles. Tile crew for tile. Metal crew for metal. Flat crew for flat systems.</p>
  <p>All Phase Construction USA installs code-compliant roofing systems in Boca Raton.</p>
  <p>Our team handles permits and inspections for reroof projects.</p>
  <p>Boca Raton storms create wind-driven rain that exposes weak flashing and underlayment</p>
  <h2>Roofing company in Boca Raton FL with a "show-you" inspection process</h2>
  <p>Most roof problems are invisible from the driveway. Our inspection is designed to reduce guesswork and help you make a clean decision.</p>
  <h3>What you get from a real roof inspection:</h3>
  <ul>
    <li>Photos of key roof areas (edges, penetrations, valleys, transitions)</li>
    <li>Clear notes on what is failed vs what is aging</li>
    <li>A recommendation that matches the roof's condition and your timeline</li>
  </ul>
  <h3>Repair vs replacement (how we decide):</h3>
  <ul>
    <li>A roof can be repaired when the system is stable and failures are isolated</li>
    <li>A roof should be replaced when the system is at end-of-life or failing in multiple zones</li>
  </ul>
  <h2>About All Phase Construction USA</h2>
  <p>All Phase Construction USA is a Florida roofing contractor based in Deerfield Beach, serving Boca Raton and the surrounding region with repairs, replacements, and inspections.</p>
  <p>We operate like a builder, not a sales script. You get direct oversight, clear scope, and a roof system designed for South Florida weather.</p>
  <p><strong>Find us:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
  <h2>Roofing contractor in Boca Raton FL: what we do</h2>
  <p>We deliver roofing services that are permit-ready, inspection-ready, and storm-ready, including complete roof replacements and specialized commercial roofing solutions. Our roof repair services are designed to keep your home or business covered and protected from the elements. That includes residential and commercial projects.</p>
  <h3>Our core services</h3>
  <ul>
    <li>Roof inspection and leak investigations</li>
    <li>Roof repair (tile, shingle, metal, flat)</li>
    <li>Full roof replacement and reroofing</li>
    <li>Storm and hurricane damage assessments</li>
    <li>Preventive maintenance for aging roofs</li>
  </ul>
  <h3>Quick service fit guide</h3>
  <table>
    <thead>
      <tr><th>Service</th><th>Best for</th><th>Typical outcome</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Roof inspection</td>
        <td>Leaks, stains, insurance letters, "something feels off"</td>
        <td>Photos + options + next steps; well-managed project assessment with attention to detail throughout the project lifecycle</td>
      </tr>
      <tr>
        <td>Roof repair</td>
        <td>Localized damage, flashing issues, minor storm damage</td>
        <td>Stop leaks and extend roof life; each repair project is handled with expertise and careful project management</td>
      </tr>
      <tr>
        <td>Roof replacement</td>
        <td>Widespread wear, recurring leaks, failed underlayment</td>
        <td>New system, updated code, warranty; comprehensive project oversight ensures customer satisfaction at every stage</td>
      </tr>
    </tbody>
  </table>
  <h2>What we typically find during Boca Raton roof inspections</h2>
  <p>Boca Raton roofs take heat, UV, salt air, and storm-driven rain. The failures tend to repeat.</p>
  <h3>Common inspection findings in Boca Raton:</h3>
  <ul>
    <li>Cracked or slipped tiles that expose underlayment</li>
    <li>Nail pops, lifted shingles, and perimeter edge issues</li>
    <li>Failed pipe boots and vent flashings</li>
    <li>Valley and wall transition leaks</li>
    <li>Flat roof seam issues and ponding stress points</li>
  </ul>
  <p>At the first sign of roof leaks or a leaky roof, prompt professional intervention is crucial to prevent further damage and avoid costly repairs. A small leak can be a small fix, or it can be the symptom of a tired system. The inspection tells the truth.</p>
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
  <p>All Phase Construction USA's ${cityName} roof inspections go beyond surface-level assessments. Our dual-licensed expertise (CCC & CGC) means we evaluate structural integrity, building code compliance, and long-term performance – not just shingle condition.</p>

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
  <p>Buying a ${cityName} property? Our roof inspection provides accurate remaining lifespan estimates, identifies required repairs, and establishes negotiation leverage. We deliver detailed reports within 24 hours to meet real estate closing timelines.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Insurance Documentation</h3>
  <p>Insurance companies require professional roof inspections for policy renewals and claim submissions. Our ${cityName} inspections include comprehensive photo documentation, moisture readings, and detailed condition reports that meet insurance adjuster requirements.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Storm Damage Assessment</h3>
  <p>After severe weather events, our ${cityName} storm damage inspections identify all wind and hail damage including subtle underlayment compromise that untrained observers miss. We provide documentation that supports insurance claim submissions.</p>

  <h3 style="font-size: 1.15rem; font-weight: bold; margin-top: 1.5rem;">Maintenance Planning</h3>
  <p>Proactive maintenance extends roof lifespan and prevents expensive emergency repairs. Our annual ${cityName} inspection service identifies minor issues before they become major problems.</p>

  <h2>What You Receive with Your ${cityName} Inspection</h2>
  <ul style="line-height: 1.75; margin-bottom: 1.5rem;">
    <li><strong>Comprehensive Photo Documentation:</strong> Detailed photos of all roof areas including close-ups of any concerns</li>
    <li><strong>Written Professional Report:</strong> Clear findings with specific recommendations and priority ratings</li>
    <li><strong>Cost Estimates:</strong> Transparent pricing for any recommended repairs or maintenance</li>
    <li><strong>Lifespan Assessment:</strong> Realistic remaining lifespan estimate for budget planning</li>
    <li><strong>Insurance Support:</strong> Documentation formatted for ${cityName} insurance submissions if needed</li>
  </ul>

  <h2>Serving ${cityName} from Our Deerfield Beach Headquarters</h2>
  <p>All Phase Construction USA operates from 590 Goolsby Blvd in Deerfield Beach, providing professional roof inspection services throughout ${cityName} and surrounding Broward and Palm Beach County communities. Our central location enables same-day inspection availability and rapid report delivery.</p>

  <h2>Schedule Your Free ${cityName} Roof Inspection</h2>
  <p><strong>Call (754) 227-5605</strong> to schedule your professional 21-point roof inspection. We provide same-day availability, detailed photo documentation, and written reports within 24 hours for all ${cityName} properties.</p>

  <p style="margin-top: 1.5rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
    <strong>Explore More Services:</strong> <a href="/locations/${citySlug}" style="color: #dc2626; text-decoration: underline;">Complete ${cityName} roofing services</a> | <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline;">Emergency ${cityName} roof repairs</a>
  </p>

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
  <h1>Roofing Contractor — All Phase Construction USA | Broward & Palm Beach</h1>
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
function loadProductionTemplate() {
  const distIndexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(distIndexPath)) {
    throw new Error(
      '❌ dist/index.html not found!\n' +
      'Run `npm run build` before prerendering.\n' +
      'The prerender script needs dist/index.html to extract production asset references.'
    );
  }

    const template = fs.readFileSync(distIndexPath, 'utf-8');

  // SAFETY: Reject dev template -- must contain production Vite assets
  if (template.includes('/src/main.tsx')) {
    throw new Error(
      '❌ dist/index.html still references /src/main.tsx!\n' +
      'This is a dev template, not a production build.\n' +
      'Run `npm run build` (not `vite build --mode development`) before prerendering.'
    );
  }

  return template;
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

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${description}">`
  );

  // Replace canonical link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );

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

      html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);

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
        title: `Roof Repair in ${cityName}, FL | Emergency Service Available`,
        description: `Need roof repair in ${cityName}? Emergency leak repair, storm damage, and professional roofing services. Dual-licensed CCC/CGC contractor. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}`
      };
    }
    if (normalizedPath.includes('/roof-inspection/')) {
      return {
        title: `${cityName} Roof Inspection | 21-Point Professional Assessment`,
        description: `Professional roof inspection in ${cityName}, FL. Free 21-point assessment with photo documentation. Pre-purchase, insurance, storm damage inspections. Call (754) 227-5605.`,
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
    'Roofing Contractor — All Phase Construction USA | Broward & Palm Beach',
    'All Phase Construction USA provides hurricane-compliant roofing in Broward and Palm Beach County. Dual-licensed contractor specializing in HVHZ wind-code installation and manufacturer-spec roofing systems.',
    'https://allphaseconstructionfl.com',
    homepageContent()
  );
    // HOMEPAGE SAFETY: Write to public/ ONLY — do NOT overwrite dist/index.html
  // dist/index.html is the Vite-built shell and must be preserved as-is
fs.writeFileSync(path.join(publicDir, 'index.html'), homeHTML);
  console.log('✓ Generated: public/index.html');
  totalPages++;

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
    { path: '/easy-payments', title: 'Easy Payments & Financing Options' },
    { path: '/blog', title: 'Roofing Insights & Industry News' }
  ];

  servicePages.forEach(({ path: pagePath, title }) => {
    const metadata = getSEOMetadata(pagePath);
    const html = createHTMLTemplate(
      metadata.title || title,
      metadata.description || `Professional ${title.toLowerCase()} from All Phase Construction USA`,
      metadata.canonical || `https://allphaseconstructionfl.com${pagePath}`,
      defaultServicePageContent(title)
    );

    const dir = path.join(publicDir, pagePath.substring(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`✓ Generated: public${pagePath}/index.html`);
    totalPages++;
  });

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
    console.log(`✓ Generated: public/locations/${slug}/index.html`);
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
    console.log(`✓ Generated: public/roof-repair/${citySlug}/index.html`);
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
    console.log(`✓ Generated: public/roof-inspection/${citySlug}/index.html`);
    totalPages++;
  });

  
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
    const locationSlugs = fs.readdirSync(locationsDistDir);
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
