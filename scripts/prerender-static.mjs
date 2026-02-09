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

// Load SEO titles configuration
const seoTitlesPath = path.join(__dirname, 'seo-titles.json');
const seoTitlesConfig = JSON.parse(fs.readFileSync(seoTitlesPath, 'utf-8'));

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
  <h1>All Phase Construction USA | Dual-Licensed Roofing Specialist</h1>
  <p><strong>Expert Roofing Solutions backed by General Contracting Authority. Serving Broward & Palm Beach Counties from our Deerfield Beach Headquarters.</strong></p>

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
 * Create base HTML template with proper header, meta tags, and styling
 */
function createHTMLTemplate(title, description, canonical, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">

    <!-- Open Graph -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="website">

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
</head>
<body>
    <div id="seo-static">${content}</div>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
}

/**
 * Get SEO metadata for a page
 */
function getSEOMetadata(urlPath, cityName = null) {
  const normalizedPath = urlPath.toLowerCase().replace(/\/$/, '');

  // Check static titles
  if (seoTitlesConfig.staticTitles[normalizedPath]) {
    return seoTitlesConfig.staticTitles[normalizedPath];
  }

  // Handle dynamic city pages
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
    if (normalizedPath.includes('/locations/')) {
      // Special SEO for Deerfield Beach HQ page
      if (normalizedPath === '/locations/deerfield-beach') {
        return {
          title: `Deerfield Beach Roofing Contractor | All Phase Construction USA HQ`,
          description: `All Phase Construction USA headquarters in Deerfield Beach, FL. Dual-licensed roofing contractor (CCC-1331464 & CGC-1526236). 590 Goolsby Blvd. Call (754) 227-5605 for emergency repairs & inspections.`,
          canonical: `https://allphaseconstructionfl.com${normalizedPath}`
        };
      }
      return {
        title: `${cityName} Roofing Services | All Phase Construction USA`,
        description: `Professional roofing services in ${cityName}, FL. Dual-licensed CCC/CGC contractor. Roof repair, inspection, replacement. HVHZ certified. Call (754) 227-5605.`,
        canonical: `https://allphaseconstructionfl.com${normalizedPath}`
      };
    }
  }

  // Fallback
  return {
    title: 'All Phase Construction USA | Dual-Licensed Roofing Specialist',
    description: 'Licensed roofing company in Broward & Palm Beach County. Expert roof replacement, repair & inspection. Call (754) 227-5605',
    canonical: `https://allphaseconstructionfl.com${normalizedPath}`
  };
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
  const homeMetadata = getSEOMetadata('/');
  const homeHTML = createHTMLTemplate(
    homeMetadata.title,
    homeMetadata.description,
    homeMetadata.canonical,
    homepageContent()
  );
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

  console.log('\n📍 Generating 3-Silo City Pages (Service Hub + Repair + Inspection)...\n');

  cities.forEach(({ slug, city }) => {
    const cityName = city;
    const citySlug = slug;

    // Skip county-level entries for now
    if (citySlug.includes('county')) return;

    // SILO 1: Service Hub - /locations/[city]
    // Generate prerendered HTML for ALL cities including Money Pages for SEO
    const hubPath = `/locations/${citySlug}`;
    const hubMetadata = getSEOMetadata(hubPath, cityName);
    const hubContent = generateServiceHubContent(cityName, citySlug);

    const hubHTML = createHTMLTemplate(
      hubMetadata.title,
      hubMetadata.description,
      hubMetadata.canonical,
      hubContent
    );
    const hubDir = path.join(publicDir, 'locations', citySlug);
    fs.mkdirSync(hubDir, { recursive: true });
    fs.writeFileSync(path.join(hubDir, 'index.html'), hubHTML);
    console.log(`✓ Generated: public/locations/${citySlug}/index.html`);
    totalPages++;

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
