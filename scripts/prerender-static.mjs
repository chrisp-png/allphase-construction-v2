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

// ── Supabase REST API config for build-time blog fetching ──
const SUPABASE_URL = 'https://vsjebxljdhomgmqbqgdi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzamVieGxqZGhvbWdtcWJxZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODkxMzcsImV4cCI6MjA4MjU2NTEzN30._gjIILl6LtMKnoERihdaRrQ-OQQ1rKoB_FXnoxRCW2Y';

// Global variable for crawler links HTML (populated before page generation)
let CRAWLER_LINKS_HTML = '';

/**
 * Fetch all published blog posts from Supabase at build time.
 * Uses the REST API directly (no SDK needed).
 */
async function fetchBlogPostsFromSupabase() {
  const url = `${SUPABASE_URL}/rest/v1/blog_posts?published=eq.true&order=published_date.desc&select=title,slug,excerpt,content,featured_image,author,published_date,categories,tags,meta_title,meta_description,faqs`;

  try {
    const response = await fetch(url, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Supabase API error: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    console.log(`📚 Fetched ${posts.length} published blog posts from Supabase`);
    return posts;
  } catch (err) {
    console.error('⚠️ Failed to fetch blog posts from Supabase:', err.message);
    console.error('   Blog posts will use fallback content.');
    return [];
  }
}

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
  const defaultTitle = `${city} Roofing Contractor | Roof Replacement | All Phase`;
  const defaultDescription = `Roof replacement contractor in ${city}, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.`;
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
      <h2 style="color: #111827; font-size: 2rem; font-weight: 700; margin-bottom: 2rem;">Licensed Florida Roofing Contractor in Boca Raton</h2>

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
      <h2 style="color: white; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">Roofing Contractor in Boca Raton FL: What We Do</h2>

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
 * CITY-SPECIFIC CONTENT DATA
 * Unique local details for indexable cities that don't have dedicated money pages.
 * This prevents thin/duplicate content for Google-indexed pages.
 */
const CITY_UNIQUE_CONTENT = {
  'palm-beach': {
    county: 'Palm Beach County',
    neighborhoods: 'the Historic District, South End, North End, and Phipps Estate area',
    localContext: `Palm Beach is one of South Florida's most prestigious communities, with landmark estates and historic Mediterranean Revival architecture lining Ocean Boulevard. Properties here face unique roofing challenges: direct oceanfront salt air exposure accelerates corrosion on metal components, the island's coastal wind exposure demands premium wind-rated systems, and historic preservation guidelines may require specific tile profiles and colors to maintain architectural consistency. Many Palm Beach homes feature barrel tile roofs that require specialized reinstallation techniques after storm damage.`,
    buildingNotes: `Palm Beach's strict architectural review process means roofing materials, colors, and profiles must meet community aesthetic standards in addition to Florida Building Code requirements. Our team coordinates with architectural review boards to ensure compliance while maintaining the highest structural integrity. As a barrier island, Palm Beach properties face heightened hurricane exposure — our HVHZ-certified installations are engineered specifically for direct coastal wind loads.`,
    popularServices: 'barrel tile restoration, historic property reroofing, copper flashing and gutter systems, and salt-resistant metal roof installations',
    localFact: 'With over 2,000 historic and estate-class properties, Palm Beach requires roofing contractors who understand both structural engineering and architectural preservation requirements.'
  },
  'wellington': {
    county: 'Palm Beach County',
    neighborhoods: 'Olympia, The Isles, Grand Isles, Binks Estates, and the Equestrian Preserve',
    localContext: `Wellington is one of Palm Beach County's largest planned communities, home to the International Polo Club and the Winter Equestrian Festival. The community features diverse residential architecture from single-family homes in established neighborhoods to luxury equestrian estates. Wellington's master-planned layout means many homes were built in the same era (1980s-2000s), and entire neighborhoods often need roof replacements simultaneously as original roofs reach end-of-life.`,
    buildingNotes: `Wellington falls under Palm Beach County building codes with specific wind-speed requirements for the western communities. Many Wellington homes have original concrete tile roofs from the community's initial development phases — after 25-35 years, these roofs need full replacement rather than patching. Our dual licensing enables us to assess and address the structural decking beneath aging tile systems, something standard roofers often overlook. Wellington HOAs typically require pre-approved roofing materials and color palettes.`,
    popularServices: 'concrete tile replacement for aging developments, HOA-compliant reroofing, equestrian property roofing, and whole-neighborhood roof replacement coordination',
    localFact: 'Wellington was incorporated in 1995 and experienced rapid growth, meaning many original roofs throughout the community are now approaching or exceeding their designed lifespan.'
  },
  'lake-worth': {
    county: 'Palm Beach County',
    neighborhoods: 'the Historic District, College Park, South Palm Park, Lucerne Lakes, and downtown Lake Worth Beach',
    localContext: `Lake Worth Beach combines historic charm with coastal living, featuring a vibrant arts district and direct beach access along the Lake Worth Municipal Beach. The city's diverse housing stock includes 1920s-era historic bungalows, mid-century concrete block homes, and modern coastal construction. This architectural variety demands a roofing contractor experienced with multiple roofing systems and building code eras.`,
    buildingNotes: `Lake Worth Beach properties range from historic structures with original roof framing to modern coastal construction built to current Florida Building Code standards. Our dual licensing is particularly valuable here — many older homes require structural assessment before reroofing to ensure the existing framing can support modern wind-rated roofing systems. Properties east of I-95 face increased salt air exposure that accelerates fastener and flashing corrosion, requiring marine-grade components for lasting installations.`,
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
    localFact: 'Lauderdale-by-the-Sea\'s position on a narrow barrier island means every structure faces direct coastal exposure — making premium roofing installation the single most important structural investment for property protection.'
  },
  'wilton-manors': {
    county: 'Broward County',
    neighborhoods: 'the Arts & Entertainment District along Wilton Drive, Jenada Isles, Manor Grove, Central Area, and the neighborhoods along Middle River',
    localContext: `Wilton Manors is a vibrant, close-knit community located just north of Fort Lauderdale, known for its walkable Wilton Drive corridor and diverse, well-maintained residential neighborhoods. The city features predominantly single-family homes built from the 1950s through 1980s, many of which still have original or aging roofing systems. Wilton Manors properties along Middle River and the Jenada Isles canals face additional moisture and humidity challenges from waterfront proximity.`,
    buildingNotes: `Wilton Manors falls within Broward County's HVHZ zone, requiring HVHZ-compliant installation methods on every roofing project. Many homes in Wilton Manors were originally built with 3-tab shingle roofs or flat modified bitumen systems that are now past their serviceable lifespan. Our dual licensing enables structural assessment of older roof framing systems common in mid-century Wilton Manors homes — ensuring the existing structure can safely support modern, heavier tile or metal roofing upgrades. The city's active code enforcement ensures all roofing work meets current building standards.`,
    popularServices: 'mid-century home reroofing, flat-to-pitched roof conversions, architectural shingle upgrades, and canal-front property waterproofing solutions',
    localFact: 'Wilton Manors covers just 1.9 square miles, making it one of Broward County\'s smallest cities — but its dense, established housing stock means concentrated demand for quality roofing services.'
  }
};

/**
 * Generate ENHANCED service hub content for cities with unique data.
 * Produces 1,200+ words of city-specific content instead of the generic 700 words.
 */
function generateEnhancedServiceHubContent(cityName, citySlug) {
  const data = CITY_UNIQUE_CONTENT[citySlug];
  if (!data) return generateServiceHubContent(cityName, citySlug);

  const isBroward = data.county === 'Broward County';
  const complianceLabel = isBroward ? 'HVHZ-compliant' : 'wind-code compliant';

  return `
<section id="seo-static-content">
  <h1>${cityName} Roofing Contractor | All Phase Construction USA</h1>

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
      🔍 <strong>Emergency Roof Repairs:</strong> <a href="/roof-repair/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">Fast ${cityName} Repair Service</a> ✅ Active leaks, storm damage, emergency tarping
    </p>
    <p style="margin-bottom: 0; color: #7f1d1d;">
      🔍 <strong>Professional Roof Inspections:</strong> <a href="/roof-inspection/${citySlug}" style="color: #dc2626; text-decoration: underline; font-weight: bold;">21-Point ${cityName} Roof Inspection</a> ✅ Free estimates, insurance documentation
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

  // Add og:image, og:site_name, and twitter:image if not already present
  const ogImageUrl = 'https://allphaseconstructionfl.com/images/og-default.jpg';
  if (!html.includes('og:image')) {
    const ogImageTags = `
    <meta property="og:image" content="${ogImageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="All Phase Construction USA — Licensed South Florida Roofing Contractor">
    <meta property="og:site_name" content="All Phase Construction USA">
    <meta name="twitter:image" content="${ogImageUrl}">`;
    html = html.replace('</head>', `${ogImageTags}\n</head>`);
  }

  // Add JSON-LD schema if provided (before </head>)
  // Always inject base RoofingContractor schema on every prerendered page
  const baseOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#organization',
    name: 'All Phase Construction USA',
    alternateName: 'All Phase Roofing',
    description: 'Licensed roofing contractor serving Broward and Palm Beach Counties, Florida. Dual-licensed (CCC-1331464, CGC-1526236) for residential and commercial roof replacement, repair, and inspection. HVHZ certified.',
    url: 'https://allphaseconstructionfl.com',
    logo: 'https://allphaseconstructionfl.com/logo.png',
    image: 'https://allphaseconstructionfl.com/images/og-default.jpg',
    telephone: '+17542275605',
    email: 'info@allphaseconstructionfl.com',
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
      { '@type': 'AdministrativeArea', name: 'Broward County', containedInPlace: { '@type': 'AdministrativeArea', name: 'Florida' } },
      { '@type': 'AdministrativeArea', name: 'Palm Beach County', containedInPlace: { '@type': 'AdministrativeArea', name: 'Florida' } }
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '150'
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '15:00' }
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Florida Certified Roofing Contractor — CCC-1331464', recognizedBy: { '@type': 'Organization', name: 'Florida DBPR' } },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Florida Certified General Contractor — CGC-1526236', recognizedBy: { '@type': 'Organization', name: 'Florida DBPR' } }
    ],
    sameAs: [
      'https://www.facebook.com/allphaseconstructionusa',
      'https://www.instagram.com/allphaseconstructionusa',
      'https://www.linkedin.com/company/allphaseconstructionusa',
      'https://www.youtube.com/@allphaseconstructionusa'
    ],
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing']
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

    // Inject comprehensive crawler links (uses global CRAWLER_LINKS_HTML set before page generation)
  if (CRAWLER_LINKS_HTML) {
    html = html.replace('</body>', CRAWLER_LINKS_HTML + '</body>');
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
        title: `Roof Repair ${cityName} FL | Leaks & Storm Damage | All Phase`,
        description: `Roof leak and storm damage repair in ${cityName}, FL. Emergency patching, flashing failures, missing shingles & wind damage. Same-day response. (754) 227-5605.`,
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
    'Roofing Contractor | Broward & Palm Beach | All Phase USA',
        'HVHZ-certified, dual-licensed roofer in Broward & Palm Beach. Tile, metal, shingle, flat & commercial roofing. Free inspections. Call (754) 227-5605.',
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
      { question: 'What types of roof damage can be repaired instead of replaced?', answer: 'Localized leaks, cracked or missing tiles, damaged flashing around vents and pipes, and wind-lifted shingles on an otherwise sound roof are all good candidates for repair rather than full replacement.' },
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
      { question: 'What makes residential roofing different from commercial in South Florida?', answer: 'Residential roofing involves steeper pitches, aesthetic considerations for HOA compliance, and homeowner-specific insurance requirements. Commercial projects use different membrane systems and have distinct code requirements for larger roof areas.' },
      { question: 'Can you match my existing roof tiles or shingles for a partial repair?', answer: 'In most cases, yes. We stock a wide range of profiles and colors and work with distributors to match existing installations as closely as possible.' },
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
        question: 'What happens to my old roof during replacement?',
        answer: 'We tear off the existing roof system down to the deck, inspect for rot or soft spots, repair any damaged sheathing, then install the new system. Full debris removal and magnetic nail sweep are included.'
      },
      {
        question: 'Is a permit required for roof replacement in Broward County?',
        answer: 'Yes, Florida law requires a permit for full roof replacements. As licensed contractor CCC-1331464, All Phase Construction USA pulls all required permits and ensures full code compliance on every project.'
      },
      {
        question: 'What warranty do you provide on a new roof?',
        answer: 'We provide manufacturer material warranties (typically 25-50 years depending on system) plus our workmanship warranty. All installations meet or exceed Florida Building Code HVHZ requirements.'
      }
    ]
  },
  '/frequently-asked-questions': {
    breadcrumbs: [
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Frequently Asked Questions', url: 'https://allphaseconstructionfl.com/frequently-asked-questions' }
    ],
    faqs: [
      { question: 'Do I need a roof repair or a full replacement?', answer: 'The decision depends on the age of your roof, the number of active leaks, visible signs of lifted shingles or tiles, and whether you have needed repeated repairs. In the HVHZ, older roofs may not meet current uplift code requirements even if not actively leaking.' },
      { question: 'How long does a roof replacement take in South Florida?', answer: 'For a typical 2,000–2,500 sq ft home, installation takes 1–3 working days. The full process from contract to final inspection typically spans 2–4 weeks due to permits and engineering.' },
      { question: 'How much does a new roof cost in the HVHZ?', answer: 'For a 1,800–2,200 sq ft home: $15,000–$25,000 for asphalt shingles, $25,000–$45,000 for tile, $30,000–$50,000+ for standing seam metal. Costs include permits, engineering, and HVHZ-compliant installation.' },
      { question: 'Will my homeowners insurance pay for my new roof?', answer: 'Insurance typically covers sudden storm or wind damage but excludes age-related wear. Document damage with photos immediately and get a professional inspection to support your claim.' },
      { question: 'Are there special hurricane requirements for roofs here?', answer: 'Yes. HVHZ requires roofing systems designed for 170+ mph winds. All materials need Miami-Dade Product Approval, with enhanced fastener patterns, secondary water barriers, and engineered roof-to-wall connections.' },
      { question: 'How long should my roof last in South Florida\'s climate?', answer: 'Asphalt shingles last 15–22 years (vs. 30 elsewhere), concrete tile 30–50 years, clay tile 75+ years, and metal roofs 40–60+ years. UV, salt air, and hurricane stress accelerate aging.' },
      { question: 'What are the most common roofing materials in South Florida?', answer: 'Architectural asphalt shingles, concrete and clay tiles, standing seam metal roofs, and flat roof systems (TPO, modified bitumen) are the most common in South Florida.' },
      { question: 'Will a metal roof make my house hotter?', answer: 'No. Modern metal roofs with reflective finishes run cooler than dark asphalt shingles. CRRC-rated metal roofing can reduce cooling costs by 20–30%.' },
      { question: 'Does roof color matter in our climate?', answer: 'Yes. Lighter colors reduce attic temperatures significantly. A white metal roof can keep your roof deck 50–70°F cooler than a dark shingle roof on summer afternoons.' },
      { question: 'When does roof repair make sense?', answer: 'Repair is appropriate when damage is localized, your roof is under 10–12 years for shingles or 20 years for tile, and the underlying deck and fastening system remain sound.' },
      { question: 'When should you consider roof replacement?', answer: 'Consider replacement for widespread granule loss, multiple chronic leaks, visible uplift damage across multiple slopes, roofs older than insurer thresholds, or roofs installed before 2002 code changes.' },
      { question: 'How does code affect roof repair vs. replacement?', answer: 'In HVHZ, once repairs exceed about 25% of roof area, building codes may require bringing the entire system up to current standards, turning a repair into a full replacement.' },
      { question: 'What does "High Velocity Hurricane Zone" mean?', answer: 'The HVHZ designates Miami-Dade and Broward counties for extreme hurricane exposure, requiring wind speeds of 170–200 mph design capacity and mandatory high-velocity wind tunnel testing for all products.' },
      { question: 'Do I really need a permit for my roof?', answer: 'Yes, for full replacements and most structural repairs. Permits ensure independent verification that your installation meets local building codes for hurricane performance.' },
      { question: 'Why is engineering sometimes required for a roof?', answer: 'HVHZ projects often need a Florida-licensed engineer to calculate uplift forces and specify fastening schedules, especially for tile and metal roofs where wind pressures can exceed 150–180 psf.' },
      { question: 'How often should I have my roof inspected?', answer: 'At least once annually before hurricane season, plus after any named storm or significant wind event. Photo-documented inspections support future insurance claims.' },
      { question: 'What are common signs of roof damage in South Florida?', answer: 'Watch for lifted or curled shingles, cracked tiles, loose ridge caps, deteriorated flashing, water stains on ceilings, daylight in the attic, clogged valleys, and algae or mold growth.' },
      { question: 'How can I prepare my roof for hurricane season?', answer: 'Trim overhanging branches, clear gutters and drains, inspect hurricane straps in the attic, and schedule needed repairs by late June before the August–October peak season.' },
      { question: 'What factors influence roof pricing in South Florida?', answer: 'Roof size and complexity, pitch, stories, material choice, tear-off complexity, deck condition, permit fees, engineering requirements, and hurricane upgrades all affect cost.' },
      { question: 'When does homeowners insurance pay for a roof?', answer: 'Insurers cover wind, hail, or impact damage from storms. Coverage excludes age-related wear and poor maintenance. Document damage immediately with photos after any storm.' },
      { question: 'Can a new roof lower my insurance premium?', answer: 'Yes. A new HVHZ-compliant roof with favorable wind mitigation features can reduce premiums by $500–$2,000+ annually through documented credits for roof covering, nailing pattern, secondary water barrier, and connections.' },
      { question: 'What financing options are available?', answer: 'Options include home improvement installment loans (3–10+ years), home equity loans or lines of credit, and contractor financing partnerships with home improvement lenders.' },
      { question: 'What licenses should a South Florida roofer have?', answer: 'Florida requires a State Certified Roofing Contractor license (CCC) or Registered Roofing Contractor license. Verify through DBPR license lookup before signing any contract.' },
      { question: 'What questions should I ask a roofer in Miami-Dade/Broward?', answer: 'Ask about HVHZ experience, Miami-Dade NOA familiarity, engineering and permit handling, recent local project references, hurricane-specific proposal details, and inspection correction processes.' },
      { question: 'How long do shingle roofs really last in South Florida?', answer: 'Architectural asphalt shingles typically last 15–22 years in South Florida despite 25–30 year manufacturer claims, due to intense UV, 150°F+ surface temperatures, and adhesive bond breakdown.' },
      { question: 'What\'s different about 130-mph and higher wind-rated shingles?', answer: 'Class H shingles have enhanced adhesive strips and reinforced nailing zones, tested for 130+ mph winds. In HVHZ, they must be installed with 6 nails per shingle instead of 4.' },
      { question: 'What\'s the difference between concrete and clay tiles?', answer: 'Concrete tiles last 30–50 years at lower cost. Clay tiles cost more but can exceed 75 years with superior color retention since color runs through the material rather than surface-applied.' },
      { question: 'Why do tile roofs need special engineering?', answer: 'Tile systems face unique uplift challenges in HVHZ. Each tile must resist forces exceeding 150 psf while the 8–10 lbs/sq ft weight stresses the structure, requiring engineered fastener schedules.' },
      { question: 'How do metal roofs perform in hurricanes?', answer: 'Properly engineered metal roofs show dramatically lower failure rates than other materials. Hurricane Irma data confirmed their superior performance when correctly installed with adequate clip spacing.' },
      { question: 'What about noise and coastal corrosion on metal roofs?', answer: 'Rain noise is mitigated by proper insulation and sheathing. For coastal properties, specify aluminum or galvanized steel with salt-air-rated coatings and inspect fasteners every few years.' },
      { question: 'What systems work for flat roofs in Florida?', answer: 'TPO, PVC, and modified bitumen are the most common. TPO dominates commercial roofing due to welded seams, reflective surface, and competitive pricing.' },
      { question: 'How long do flat roofs last in South Florida?', answer: 'With proper maintenance, flat roof systems last 15–25+ years. The biggest enemies are ponding water, UV degradation, and debris blocking drains.' },
      { question: 'What is a wind mitigation inspection and why do I need one?', answer: 'A wind mitigation inspection (OIR-B1-1802 form) documents hurricane-resistant features of your roof. Florida law requires insurers to offer discounts for qualifying features, typically saving $500–$2,000+ per year.' },
      { question: 'How much can I save on insurance with a new roof?', answer: 'Homeowners commonly save $800–$2,500 annually with HVHZ-compliant roofs. Savings come from documented features including FBC-equivalent covering, sealed deck, hurricane straps, and hip geometry.' },
      { question: 'My roof is leaking during a storm—what should I do right now?', answer: 'Protect belongings, place containers under drips, do not climb on a wet roof. Document with photos. Call a licensed roofer for emergency tarping after the storm passes. Insurance covers emergency mitigation.' },
      { question: 'Can a roof leak be repaired without replacing the whole roof?', answer: 'Yes, if the roof is young and damage is localized. Repairable issues include failed flashing, cracked tiles, small shingle areas, and pipe boot seals. Multiple leak points may indicate replacement is needed.' },
      { question: 'Does my HOA need to approve my roof replacement?', answer: 'Most South Florida HOAs require architectural review board approval covering material type, color, and profile. Allow 2–6 weeks for HOA approval. Note that HOA approval does not replace building permits.' },
      { question: 'What areas do you serve?', answer: 'We serve all of Broward County and Palm Beach County including Fort Lauderdale, Pompano Beach, Hollywood, Coral Springs, Deerfield Beach, Boca Raton, West Palm Beach, and surrounding communities.' },
      { question: 'Do you work in Miami-Dade County?', answer: 'Our primary service area covers Broward County and Palm Beach County, headquartered in Deerfield Beach. We do not currently service Miami-Dade County.' }
    ]
  },
};

const CITY_PAGE_SCHEMAS = {
  '/locations/fort-lauderdale': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/fort-lauderdale#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/fort-lauderdale","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1224,"longitude":-80.1373},"areaServed":[{"@type":"City","name":"Fort Lauderdale","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/boca-raton': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/boca-raton#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/boca-raton","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.3683,"longitude":-80.1289},"areaServed":[{"@type":"City","name":"Boca Raton","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/coral-springs': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/coral-springs#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/coral-springs","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2709,"longitude":-80.2706},"areaServed":[{"@type":"City","name":"Coral Springs","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/pompano-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/pompano-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/pompano-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2379,"longitude":-80.1248},"areaServed":[{"@type":"City","name":"Pompano Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/hollywood': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/hollywood#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/hollywood","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.0112,"longitude":-80.1495},"areaServed":[{"@type":"City","name":"Hollywood","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/coconut-creek': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/coconut-creek#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/coconut-creek","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.2509,"longitude":-80.1789},"areaServed":[{"@type":"City","name":"Coconut Creek","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/west-palm-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/west-palm-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/west-palm-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.7153,"longitude":-80.0534},"areaServed":[{"@type":"City","name":"West Palm Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/wellington': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/wellington#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/wellington","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.659,"longitude":-80.2686},"areaServed":[{"@type":"City","name":"Wellington","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/boynton-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/boynton-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/boynton-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.5317,"longitude":-80.0905},"areaServed":[{"@type":"City","name":"Boynton Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/delray-beach': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/delray-beach#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/delray-beach","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.4615,"longitude":-80.0728},"areaServed":[{"@type":"City","name":"Delray Beach","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/plantation': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/plantation#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/plantation","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1276,"longitude":-80.2331},"areaServed":[{"@type":"City","name":"Plantation","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/sunrise': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/sunrise#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/sunrise","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.167,"longitude":-80.2561},"areaServed":[{"@type":"City","name":"Sunrise","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/weston': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/weston#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/weston","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.1003,"longitude":-80.3997},"areaServed":[{"@type":"City","name":"Weston","containedInPlace":{"@type":"AdministrativeArea","name":"Broward County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
  '/locations/lake-worth': { directSchema: {"@context":"https://schema.org","@type":"RoofingContractor","@id":"https://allphaseconstructionfl.com/locations/lake-worth#roofingcontractor","name":"All Phase Construction USA","url":"https://allphaseconstructionfl.com/locations/lake-worth","telephone":"(754) 227-5605","address":{"@type":"PostalAddress","streetAddress":"590 Goolsby Blvd","addressLocality":"Deerfield Beach","addressRegion":"FL","postalCode":"33442","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":26.6148,"longitude":-80.0575},"areaServed":[{"@type":"City","name":"Lake Worth","containedInPlace":{"@type":"AdministrativeArea","name":"Palm Beach County"}},{"@type":"State","name":"Florida"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"137","bestRating":"5"},"priceRange":"$$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"}],"hasCredential":["Florida State Certified Roofing Contractor CCC-1331464","Florida State Certified General Contractor CGC-1526236","HVHZ Certified"]} },
};


  
  
  // ── Pre-fetch blog posts from Supabase (needed for /blog listing page and blog post pages) ──
  const supabasePostsEarly = await fetchBlogPostsFromSupabase();

  // ── Build comprehensive crawler links HTML (injected on every page for full internal linking) ──
  const locationLinks = LOCATIONS.map(loc => `  <a href="/locations/${loc.slug}">${loc.city}, FL Roofing</a>`).join('\n');
  const cityLinks = cities.filter(c => !c.slug.includes('county')).map(c => {
    const cityName = c.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `  <a href="/roof-repair/${c.slug}">${cityName} Roof Repair</a>\n  <a href="/roof-inspection/${c.slug}">${cityName} Roof Inspection</a>`;
  }).join('\n');
  const blogCrawlerLinks = (supabasePostsEarly || []).map(p => `  <a href="/blog/${p.slug}">${p.title}</a>`).join('\n');

  CRAWLER_LINKS_HTML = `
<!-- Comprehensive internal links for crawlers — ensures all pages are discoverable -->
<nav style="display:none" aria-hidden="true" id="crawler-sitemap">
  <!-- Service Pages -->
  <a href="/">Home</a>
  <a href="/roofing-services">Roofing Services</a>
  <a href="/residential-roofing">Residential Roofing</a>
  <a href="/commercial-roofing">Commercial Roofing</a>
  <a href="/shingle-roofing">Shingle Roofing</a>
  <a href="/metal-roofing">Metal Roofing</a>
  <a href="/flat-roofing">Flat Roofing</a>
  <a href="/tile-roofing">Tile Roofing</a>
  <a href="/roof-repair">Roof Repair</a>
  <a href="/roof-inspection">Roof Inspection</a>
  <a href="/roof-replacement">Roof Replacement</a>
  <a href="/roof-replacement-process">Roof Replacement Process</a>
  <a href="/roof-maintenance-programs">Roof Maintenance Programs</a>
  <a href="/roof-cost-calculator">Roof Cost Calculator</a>
  <a href="/reviews">Reviews</a>
  <a href="/projects">Our Projects</a>
  <a href="/frequently-asked-questions">FAQ</a>
  <a href="/about-us">About Us</a>
  <a href="/contact">Contact</a>
  <a href="/blog">Blog</a>
  <a href="/learning-center">Learning Center</a>
  <a href="/easy-payments">Easy Payments</a>
  <a href="/how-to-hire-roofing-contractor">How to Hire a Roofing Contractor</a>
  <a href="/single-ply-roofing">Single Ply Roofing</a>
  <a href="/licensed-roofing-contractor">Licensed Roofing Contractor</a>
  <!-- Location Pages -->
${locationLinks}
  <!-- Best Roofers Sub-Pages -->
    <a href="/locations/fort-lauderdale/best-roofers-fort-lauderdale">Best Roofers Fort Lauderdale</a>
    <a href="/locations/deerfield-beach/best-roofers-deerfield-beach">Best Roofers Deerfield Beach</a>
    <!-- City Service Pages (Roof Repair & Inspection) -->
${cityLinks}
  <!-- Blog Posts -->
${blogCrawlerLinks}
</nav>
`;
  console.log(`🔗 Crawler links block built: ${CRAWLER_LINKS_HTML.split('<a href=').length - 1} internal links on every page`);

  // Re-inject crawler links into homepage (homepage was generated before CRAWLER_LINKS_HTML was built)
  if (CRAWLER_LINKS_HTML) {
    const homePath = path.join(publicDir, 'index.html');
    let homeContent = fs.readFileSync(homePath, 'utf-8');
    homeContent = homeContent.replace('</body>', CRAWLER_LINKS_HTML + '</body>');
    fs.writeFileSync(homePath, homeContent);
    console.log('🔗 Injected crawler links into homepage index.html');
  }

  // Function to generate blog listing page with real links to all posts
  function generateBlogListingContent(posts) {
    if (!posts || posts.length === 0) {
      return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
  <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; text-align: center;">Roofing Insights & Industry News</h1>
  <p style="text-align: center; color: #6b7280; font-size: 1.15rem; margin-bottom: 2rem;">Expert advice, maintenance tips, and the latest trends in residential and commercial roofing</p>
  <p style="text-align: center; color: #6b7280;">Check back soon for new content!</p>
  ${companyAuthorityFooter()}
</section>`.trim();
    }

    const postCards = posts.map(post => {
      const pubDate = new Date(post.published_date);
      const formattedDate = pubDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const excerpt = post.excerpt ? (post.excerpt.length > 150 ? post.excerpt.substring(0, 150).trim() + '...' : post.excerpt) : '';
      const category = (post.categories && post.categories.length > 0) ? post.categories[0] : '';

      return `
      <article style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; margin-bottom: 1.5rem;">
        <a href="/blog/${post.slug}" style="text-decoration: none; color: inherit; display: block;">
          ${post.featured_image ? `<img src="${post.featured_image}" alt="${post.title}" style="width: 100%; height: 14rem; object-fit: cover;" loading="lazy" />` : ''}
          <div style="padding: 1.5rem;">
            ${category ? `<span style="display: inline-block; background: #dc2626; color: white; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; margin-bottom: 0.75rem;">${category}</span>` : ''}
            <h2 style="color: #111827; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3;">${post.title}</h2>
            <div style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.75rem;">
              <time datetime="${post.published_date}">${formattedDate}</time> • ${post.author || 'All Phase Construction USA'}
            </div>
            ${excerpt ? `<p style="color: #4b5563; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">${excerpt}</p>` : ''}
            <span style="color: #dc2626; font-weight: 600; font-size: 0.95rem;">Read More →</span>
          </div>
        </a>
      </article>`;
    }).join('\n');

    return `
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
  <div style="text-align: center; margin-bottom: 3rem;">
    <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">Roofing Insights & Industry News</h1>
    <p style="color: #6b7280; font-size: 1.15rem; max-width: 700px; margin: 0 auto;">Expert advice, maintenance tips, and the latest trends in residential and commercial roofing from South Florida's dual-licensed roofing contractor.</p>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
    ${postCards}
  </div>

  <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 3rem 0; text-align: center;">
    <h2 style="color: white; font-size: 1.75rem; font-weight: 600; margin-bottom: 1rem;">Need Expert Roofing Advice?</h2>
    <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Get a free consultation and estimate for your roofing project.</p>
    <a href="/contact" style="display: inline-block; background: white; color: #dc2626; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem; margin-right: 1rem;">Contact Us Today</a>
    <a href="/roof-cost-calculator" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Get a Roofing Estimate</a>
  </div>

  ${companyAuthorityFooter()}
</section>`.trim();
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
    { path: '/frequently-asked-questions', title: 'Frequently Asked Questions' }
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
    }    const html = createHTMLTemplate(
      metadata.title || title,
      metadata.description || `Professional ${title.toLowerCase()} from All Phase Construction USA`,
      metadata.canonical || `https://allphaseconstructionfl.com${pagePath}`,
      pagePath === '/roofing-services' ? generateRoofingServicesContent() : pagePath === '/blog' ? generateBlogListingContent(supabasePostsEarly) : defaultServicePageContent(title),
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

  // 2.5. Generate Blog Post Pages from Supabase (REAL CONTENT)
  console.log('\n📚 Generating Blog Post Pages from Supabase data...\n');

  const supabasePosts = supabasePostsEarly; // Already fetched above
  let blogPostsGenerated = 0;

  if (supabasePosts.length > 0) {
    for (const post of supabasePosts) {
      try {
        const blogCanonical = `https://allphaseconstructionfl.com/blog/${post.slug}`;
        const blogPath = `/blog/${post.slug}`;

        // Check seo-titles.json overrides FIRST (these are hand-crafted and take priority)
        const seoOverride = seoTitlesConfig.staticTitles[blogPath];

        const blogMetaTitle = (seoOverride && seoOverride.title) || post.meta_title || post.title;
    const cleanBlogTitle = (() => { const t = blogMetaTitle.replace(/\s*\|.*$/, '').trim(); return t.length <= 52 ? t : t.substring(0, 52).replace(/\s+\S*$/, ''); })();
        let blogMetaDesc = (seoOverride && seoOverride.description) || post.meta_description || post.excerpt || '';
        // If description is too short, auto-generate from content
        if (blogMetaDesc.length < 70 && post.content) {
          const stripped = post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
          const sentences = stripped.match(/[^.!?]+[.!?]+/g) || [];
          blogMetaDesc = sentences.slice(0, 3).join(' ').trim();
          if (blogMetaDesc.length > 155) blogMetaDesc = blogMetaDesc.substring(0, 155).replace(/\s+\S*$/, '') + '.';
          if (blogMetaDesc.length < 70) blogMetaDesc = `${post.title}. Expert roofing insights from a dual-licensed South Florida contractor. Read the full guide at All Phase Construction USA.`;
        }
        // If description is too long, trim at word boundary
        if (blogMetaDesc.length > 160) {
          blogMetaDesc = blogMetaDesc.substring(0, 155).replace(/\s+\S*$/, '') + '.';
        }

        // Format the published date
        const pubDate = new Date(post.published_date);
        const formattedDate = pubDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        // Build category tags HTML
        const categoryTags = (post.categories || []).map(cat =>
          `<a href="/blog" style="display: inline-block; background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; text-decoration: none; margin-right: 0.5rem;">${cat}</a>`
        ).join('');

        // Build FAQ section if FAQs exist
        let faqHTML = '';
        let faqSchema = null;
        if (post.faqs && Array.isArray(post.faqs) && post.faqs.length > 0) {
          const faqItems = post.faqs.map(faq => `
            <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #e5e7eb; padding-bottom: 1.5rem;">
              <h3 style="color: #111827; font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">${faq.question}</h3>
              <p style="color: #374151; font-size: 1rem; line-height: 1.75; margin: 0;">${faq.answer}</p>
            </div>
          `).join('');

          faqHTML = `
            <section style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #e5e7eb;">
              <h2 style="color: #111827; font-size: 1.75rem; font-weight: 600; margin-bottom: 1.5rem;">Frequently Asked Questions</h2>
              ${faqItems}
            </section>
          `;

          faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer }
            }))
          };
        }

        // Build the full blog post HTML with REAL article content
        const blogContent = `
<section id="seo-static-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <article>
    <header style="margin-bottom: 2rem;">
      ${categoryTags ? `<div style="margin-bottom: 1rem;">${categoryTags}</div>` : ''}
      <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.2;">${post.title}</h1>
      <div style="display: flex; align-items: center; gap: 1rem; color: #6b7280; font-size: 0.95rem;">
        <span>By ${post.author || 'All Phase Construction USA'}</span>
        <span>•</span>
        <time datetime="${post.published_date}">${formattedDate}</time>
      </div>
    </header>

    ${post.excerpt ? `<p style="color: #6b7280; font-size: 1.15rem; line-height: 1.75; margin-bottom: 2rem; font-style: italic;">${post.excerpt}</p>` : ''}

    <div class="blog-content" style="color: #374151; font-size: 1.05rem; line-height: 1.85;">
      ${post.content}
    </div>

    ${faqHTML}

    <div style="background: #111827; color: white; padding: 2rem; border-radius: 8px; margin: 3rem 0;">
      <h3 style="color: white; font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Need Professional Roofing Service?</h3>
      <p style="color: #e5e7eb; margin-bottom: 1.5rem;">Contact All Phase Construction USA for expert roofing services in Broward and Palm Beach County.</p>
      <a href="tel:7542275605" style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.1rem;">Call (754) 227-5605</a>
    </div>

    <nav style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
      <a href="/blog" style="color: #dc2626; font-weight: 600; text-decoration: none;">← Back to All Blog Posts</a>
    </nav>
  </article>

  ${companyAuthorityFooter()}
</section>
        `.trim();

        // Build JSON-LD schema for the blog post
        const blogSchema = [
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: blogMetaDesc,
            datePublished: post.published_date,
            author: {
              '@type': 'Organization',
              name: post.author || 'All Phase Construction USA'
            },
            publisher: {
              '@type': 'Organization',
              name: 'All Phase Construction USA',
              url: 'https://allphaseconstructionfl.com'
            },
            mainEntityOfPage: blogCanonical,
            image: post.featured_image || undefined
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://allphaseconstructionfl.com/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: blogCanonical }
            ]
          }
        ];

        if (faqSchema) {
          blogSchema.push(faqSchema);
        }

        const blogHTML = createHTMLTemplate(
          `${cleanBlogTitle} | All Phase`,
          blogMetaDesc,
          blogCanonical,
          blogContent,
          blogSchema
        );

        const blogDir = path.join(publicDir, 'blog', post.slug);
        fs.mkdirSync(blogDir, { recursive: true });
        fs.writeFileSync(path.join(blogDir, 'index.html'), blogHTML);

        const contentLength = post.content ? post.content.length : 0;
        console.log(`✅ Generated: dist/blog/${post.slug}/index.html (${contentLength} chars of real content)`);
        totalPages++;
        blogPostsGenerated++;
      } catch (err) {
        console.error(`❌ Error generating blog post "${post.slug}":`, err.message);
      }
    }
    console.log(`\n📚 Blog posts generated with real Supabase content: ${blogPostsGenerated}`);
  } else {
    // Fallback: try generating from sitemap with generic content if Supabase fetch failed
    console.log('⚠️ No posts from Supabase. Falling back to sitemap-based generation...\n');
    try {
      const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
        const blogUrlMatches = sitemapContent.match(/<loc>https:\/\/allphaseconstructionfl\.com\/blog\/([^<]+)<\/loc>/g);
        if (blogUrlMatches && blogUrlMatches.length > 0) {
          const blogSlugs = blogUrlMatches
            .map(match => { const m = match.match(/\/blog\/([^<]+)/); return m ? m[1].replace(/\/$/, '') : null; })
            .filter(slug => slug && slug !== 'index.html');
          blogSlugs.forEach(slug => {
            const blogTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            const blogCanonical = `https://allphaseconstructionfl.com/blog/${slug}`;
            const blogDescription = `Expert roofing insights on ${blogTitle.toLowerCase()} from All Phase Construction USA.`;
            const fallbackContent = `
<section id="seo-static-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
  <article>
    <h1 style="color: #111827; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">${blogTitle}</h1>
    <p style="color: #6b7280; font-size: 1.1rem; line-height: 1.75; margin-bottom: 2rem;">${blogDescription}</p>
    <a href="/blog" style="color: #dc2626; font-weight: 600; text-decoration: none;">← Back to All Blog Posts</a>
  </article>
  ${companyAuthorityFooter()}
</section>`.trim();
            const blogHTML = createHTMLTemplate(`${blogTitle} | All Phase`, blogDescription, blogCanonical, fallbackContent);
            const blogDir = path.join(publicDir, 'blog', slug);
            fs.mkdirSync(blogDir, { recursive: true });
            fs.writeFileSync(path.join(blogDir, 'index.html'), blogHTML);
            console.log(`✅ Generated (fallback): dist/blog/${slug}/index.html`);
            totalPages++;
          });
        }
      }
    } catch (err) {
      console.log('⚠️ Error in fallback blog generation:', err.message);
    }
  }

  // 3. Generate 3-Silo City Pages for all cities
  const priorityCities = ['boca-raton', 'fort-lauderdale', 'coral-springs', 'pompano-beach',
                          'west-palm-beach', 'delray-beach', 'boynton-beach', 'deerfield-beach',
                          'parkland', 'coconut-creek', 'wellington'];

  console.log('\n🔍 Generating Location Pages from Single Source of Truth...\n');

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
    } else if (CITY_UNIQUE_CONTENT[slug]) {
      hubContent = generateEnhancedServiceHubContent(city, slug);
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
    console.log(`✅ Generated: dist/locations/${slug}/index.html`);
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
  <p>Finding a reliable roofer in Deerfield Beach is not as simple as picking the first name on Google. Deerfield Beach sits within the High-Velocity Hurricane Zone (HVHZ), which means every roof installation, repair, or replacement must meet some of the strictest building codes in the country. The wrong contractor can leave your home vulnerable to storm damage, insurance claim denials, and costly code violations. We reviewed dozens of roofing contractors serving Deerfield Beach and narrowed it down to the five that consistently deliver quality workmanship, proper permitting, and genuine HVHZ compliance.</p>

  <h2>Why Choosing the Right Roofer in Deerfield Beach Matters</h2>
  <p>Deerfield Beach homeowners face unique roofing challenges. Located in Broward County along the coast, properties here are subject to salt air corrosion, extreme UV exposure, and hurricane-force winds. Florida Building Code requires HVHZ-rated materials and installation methods for every roofing project in this area. A roofer who cuts corners on underlayment, flashing, or fastener patterns is putting your entire home at risk. Beyond structural concerns, improperly installed roofs can void your homeowners insurance coverage, leaving you financially exposed when the next storm hits.</p>

  <h2>What We Looked for in Our Rankings</h2>
  <p>Our review process evaluated each contractor on licensing and insurance verification, HVHZ compliance history, customer reviews across Google and the BBB, warranty offerings, response time, and transparency in pricing. We also checked for active state certifications, Broward County permit pull history, and whether each company employs in-house crews rather than relying entirely on subcontractors. Roofing companies that demonstrated consistent quality across shingle, tile, metal, and flat roof systems ranked highest.</p>

  <h2>1. All Phase Construction USA</h2>
  <p>All Phase Construction USA is headquartered at 590 Goolsby Blvd, Deerfield Beach, FL 33442. Dual licensed as both a Certified General Contractor (CGC1532699) and Certified Roofing Contractor (CCC1334089), All Phase brings a level of expertise that most single-license roofers cannot match. With over 2,500 roofs completed across South Florida, they specialize in full roof replacements, storm damage repair, and insurance claim assistance. Their in-house team handles every project from permit to final inspection, ensuring full HVHZ code compliance. All Phase offers free roof inspections, detailed written estimates, and a transferable workmanship warranty that protects your investment long after the job is done.</p>

  <h2>Finding a Roofer in Deerfield Beach You Can Actually Trust</h2>
  <p>The roofing industry in South Florida has its share of storm chasers and unlicensed operators who appear after every hurricane season. Protect yourself by always verifying a contractor license through the Florida DBPR website, requesting proof of workers compensation and liability insurance, and confirming that the company pulls its own permits with Broward County. A trustworthy roofer will never ask for full payment upfront and will always provide a written contract detailing scope of work, materials, timeline, and warranty terms. If a deal sounds too good to be true in Deerfield Beach roofing, it almost certainly is.</p>
`;
  fs.writeFileSync(path.join(bestRoofersDFBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Deerfield Beach FL (2026) | All Phase',
    'Looking for the best roofers in Deerfield Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach',
    bestRoofersDFBContent
  ));
  console.log('✅ Prerendered: locations/deerfield-beach/best-roofers-deerfield-beach/index.html');

  // Best Roofers Fort Lauderdale - Premium Money Page
  const bestRoofersFTLDir = path.join(distDir, 'locations/fort-lauderdale/best-roofers-fort-lauderdale');
  fs.mkdirSync(bestRoofersFTLDir, { recursive: true });
  const bestRoofersFTLContent = `
  <h1>Top 5 Best Rated Roofers in Fort Lauderdale, FL (2026)</h1>
  <p>Fort Lauderdale is one of the most demanding markets for roofing contractors in all of Florida. Every project must comply with Broward County HVHZ building codes, which are among the toughest in the nation. Between salt air exposure, intense UV radiation, and annual hurricane threats, your roof takes more punishment here than in almost any other part of the country. We evaluated dozens of Fort Lauderdale roofing companies and identified the five that consistently deliver code-compliant installations, transparent pricing, and long-term reliability.</p>

  <h2>Why Fort Lauderdale Roofing Requires Specialized Expertise</h2>
  <p>Fort Lauderdale sits squarely within the High-Velocity Hurricane Zone, which means standard roofing practices from other parts of the country do not apply here. Every roof must use HVHZ-approved materials, specific nail patterns, enhanced underlayment systems, and sealed roof decking. The permit process in Broward County is rigorous, requiring engineering calculations, product approvals, and multiple inspections. Contractors who are not intimately familiar with these requirements will delay your project, fail inspections, and potentially leave your home without a valid permit, which creates serious problems for insurance coverage and future resale value.</p>

  <h2>How We Evaluated Each Contractor</h2>
  <p>Our rankings are based on verified state licensing, Broward County permit history, Google and BBB customer reviews, warranty quality, response time, and demonstrated expertise across multiple roofing systems including shingle, tile, metal, and flat roofing. We prioritized companies that employ their own installation crews, carry full workers compensation and liability insurance, and have a documented track record of passing HVHZ inspections on the first attempt. Roofers who rely heavily on subcontractors or who have a history of permit violations were excluded from consideration.</p>

  <h2>1. All Phase Construction USA</h2>
  <p>All Phase Construction USA serves Fort Lauderdale from their headquarters at 590 Goolsby Blvd in nearby Deerfield Beach, FL 33442. Holding dual state licenses as both a Certified General Contractor (CGC1532699) and Certified Roofing Contractor (CCC1334089), All Phase is uniquely qualified to handle everything from straightforward re-roofs to complex structural repairs. With more than 2,500 completed roofing projects across Broward and Palm Beach counties, they bring deep local experience to every job. Their team manages each project in-house from initial inspection through final Broward County sign-off, ensuring full HVHZ compliance. All Phase offers complimentary roof inspections, written estimates with no hidden fees, and a transferable workmanship warranty.</p>

  <h2>Protecting Yourself from Unlicensed Roofers in Fort Lauderdale</h2>
  <p>After every major storm, Fort Lauderdale sees an influx of out-of-state contractors and unlicensed operators looking to capitalize on desperate homeowners. These storm chasers often collect deposits and disappear, perform substandard work that fails inspection, or use materials that do not meet HVHZ requirements. Always verify your contractor license on the Florida DBPR website, confirm active workers compensation insurance, and ensure the company pulls permits under their own license with Broward County. A reputable Fort Lauderdale roofer will provide a detailed written contract, never demand full payment before work begins, and stand behind their installation with a meaningful warranty.</p>
`;
  fs.writeFileSync(path.join(bestRoofersFTLDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase',
    'Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale',
    bestRoofersFTLContent
  ));
  console.log('✅ Prerendered: locations/fort-lauderdale/best-roofers-fort-lauderdale/index.html');

  // Best Roofers West Palm Beach - Premium Money Page
  const bestRoofersWPBDir = path.join(distDir, 'locations/west-palm-beach/best-roofers-west-palm-beach');
  fs.mkdirSync(bestRoofersWPBDir, { recursive: true });
  const bestRoofersWPBContent = `
  <h1>Top 5 Best Rated Roofers in West Palm Beach, FL (2026)</h1>
  <p>Finding a Roofer in West Palm Beach You Can Actually Trust. West Palm Beach falls entirely within Palm Beach County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience.</p>
  <h2>Your List of the Top 5 Best Roofers in West Palm Beach, FL</h2>
  <ol>
    <li>All Phase Construction USA</li>
    <li>Istueta Roofing</li>
    <li>Roof Top Services</li>
    <li>Kelly Roofing</li>
    <li>Crowther Roofing</li>
  </ol>
  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Palm Beach and Broward County, with significant project history in West Palm Beach. Call (754) 227-5605 for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersWPBDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in West Palm Beach FL (2026) | All Phase',
    'Looking for the best roofers in West Palm Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Palm Beach County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach',
    bestRoofersWPBContent
  ));
  console.log('✅ Prerendered: locations/west-palm-beach/best-roofers-west-palm-beach/index.html');

  // Best Roofers Boca Raton - Premium Money Page
  const bestRoofersBocaDir = path.join(distDir, 'locations/boca-raton/best-roofers-boca-raton');
  fs.mkdirSync(bestRoofersBocaDir, { recursive: true });
  const bestRoofersBocaContent = `
  <h1>Top 5 Best Rated Roofers in Boca Raton, FL (2026)</h1>
  <p>Finding a Roofer in Boca Raton You Can Actually Trust. Boca Raton falls entirely within Palm Beach County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience.</p>
  <h2>Your List of the Top 5 Best Roofers in Boca Raton, FL</h2>
  <ol>
    <li>All Phase Construction USA</li>
    <li>Istueta Roofing</li>
    <li>Roof Top Services</li>
    <li>Kelly Roofing</li>
    <li>Crowther Roofing</li>
  </ol>
  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Palm Beach and Broward County, with significant project history in Boca Raton. Call (754) 227-5605 for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersBocaDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Boca Raton FL (2026) | All Phase',
    'Looking for the best roofers in Boca Raton? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Palm Beach County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton',
    bestRoofersBocaContent
  ));
  console.log('✅ Prerendered: locations/boca-raton/best-roofers-boca-raton/index.html');

  // Best Roofers Coral Springs - Premium Money Page
  const bestRoofersCoralDir = path.join(distDir, 'locations/coral-springs/best-roofers-coral-springs');
  fs.mkdirSync(bestRoofersCoralDir, { recursive: true });
  const bestRoofersCoralContent = `
  <h1>Top 5 Best Rated Roofers in Coral Springs, FL (2026)</h1>
  <p>Finding a Roofer in Coral Springs You Can Actually Trust. Coral Springs falls entirely within Broward County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience.</p>
  <h2>Your List of the Top 5 Best Roofers in Coral Springs, FL</h2>
  <ol>
    <li>All Phase Construction USA</li>
    <li>Allied Roofing</li>
    <li>Tiger Team Roofing</li>
    <li>Nast Roofing</li>
    <li>Paul Bange Roofing</li>
  </ol>
  <p>All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Palm Beach and Broward County, with significant project history in Coral Springs. Call (754) 227-5605 for a free roof inspection.</p>
`;
  fs.writeFileSync(path.join(bestRoofersCoralDir, 'index.html'), createHTMLTemplate(
    'Top 5 Roofers in Coral Springs FL (2026) | All Phase',
    'Looking for the best roofers in Coral Springs? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    'https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs',
    bestRoofersCoralContent
  ));
  console.log('✅ Prerendered: locations/coral-springs/best-roofers-coral-springs/index.html');

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
}

// Run the generator
await generateStaticFiles();

// Copy IndexNow key file to dist
fs.copyFileSync('public/1864f0fe7c93447e946f774adbe8e54a.txt', 'dist/1864f0fe7c93447e946f774adbe8e54a.txt');
console.log('IndexNow key file copied to dist');
