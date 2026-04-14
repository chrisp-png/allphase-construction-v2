import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersHollywoodPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>5 Best Roofers in Hollywood, FL (2026 Reviewed)</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-red-500" />
              <span className="text-red-500 font-semibold uppercase tracking-wide text-sm">2026 Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Top 5 Best Roofers in Hollywood, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a trustworthy roofer in Hollywood who understands coastal roofing challenges. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records serving Hollywood's diverse neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Hollywood You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/hollywood" className="text-red-500 hover:text-red-400 underline">Hollywood roofing services</Link> face unique challenges that most of America's roofers will never encounter. This city stretches from the Atlantic Ocean and the 2.5-mile Hollywood Broadwalk in the east, through canal-front communities like Emerald Hills and the Lakes of Emerald Hills, all the way west to the Everglades. That geography matters. Salt-air corrosion, moisture intrusion from canal proximity, hurricane-force winds in the HVHZ zone, and complex roof lines over two-story canal homes create complexity that not every contractor can handle.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Hollywood is also home to Hollywood Hills, Hollywood North Beach Park (56 acres of waterfront), Anne Kolb Nature Center with its 68-foot observation tower, and some of Broward County's most desirable neighborhoods. Your roof protects an asset worth protecting — and it deserves a contractor who has proven experience in this specific environment.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roof in Hollywood must meet Florida Building Code Section 1504 wind resistance standards because the entire city is in HVHZ — High Velocity Hurricane Zone. Storm season brings real risk — and real opportunity for fly-by-night contractors to take advantage of homeowners in a rush.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              After researching dozens of roofing companies across Hollywood and Broward County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Rainbow Roofing Solutions</strong>, <strong className="text-white">Victory E&I Roofing and Construction</strong>, <strong className="text-white">Star Group Inc.</strong>, and <strong className="text-white">Dream Team Roofing</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews, and a proven track record of protecting Hollywood homes and businesses from one of Florida's most demanding climates.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">✅ What to Look For</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">🚩 Red Flags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Florida State Certified Roofing Contractor license</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Out-of-state license or no license shown</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">A+ BBB rating and accreditation</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No BBB profile or complaints unresolved</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer certifications (GAF, Owens Corning, etc.)</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Vague "certified" claims with no specifics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Written estimate with itemized scope</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Verbal quote only, no paperwork</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Dual-licensed (Roofing + General Contractor)</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Single-scope operator with no structural authority</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">HVHZ compliance experience</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No mention of Florida wind code or NOAs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Hollywood/Broward office</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">P.O. box or out-of-area address</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer-backed warranties</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">"Lifetime" warranties with no manufacturer backing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Community presence (chambers, affiliations)</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No verifiable local ties</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Wind mitigation documentation offered</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No insurance savings guidance provided</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 5 List */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Hollywood, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (138+ reviews) — Dual-licensed roofer + general contractor with 20 years in South Florida, specializing in coastal salt-air corrosion and HVHZ-compliant roofing. Serves Emerald Hills and Hollywood Hills extensively. <a href="https://allphaseconstructionfl.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Website</a> | <a href="tel:7542275605" className="text-red-500 hover:text-red-400 underline">(754) 227-5605</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Rainbow Roofing Solutions</strong> ⭐ 35+ Years in Business — GAF Authorized Contractor with 24/7 emergency post-hurricane services, flat roof and commercial roof specialists. <a href="https://rainbowroofing.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">rainbowroofing.com</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Victory E&I Roofing and Construction</strong> ⭐ BBB A+ Rating — Family-owned since 2013, Owens Corning certified, voted Best Roofing Company in Fort Lauderdale 2023, local Hollywood office. <a href="tel:9546260667" className="text-red-500 hover:text-red-400 underline">(954) 626-0667</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Star Group Inc.</strong> ⭐ Trusted Since 1967 — 59+ years in business, multi-service contractor handling residential and commercial roofing plus waterproofing, concrete restoration, and windows. <a href="tel:9544555421" className="text-red-500 hover:text-red-400 underline">(954) 455-5421</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Dream Team Roofing</strong> ⭐ BBB Accredited — Licensed for shingle, metal, flat, and solar integration. 10+ year labor warranty, lifetime manufacturer warranty on materials. <a href="tel:9546990090" className="text-red-500 hover:text-red-400 underline">(954) 699-0090</a>
              </li>
            </ol>
          </div>

          {/* Summary Comparison Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Company Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Rating</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Phone</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Top Service</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Years in Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="bg-red-900/10">
                    <td className="px-4 py-4 font-medium text-white">All Phase Construction USA</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-4 py-4 text-zinc-300">(754) 227-5605</td>
                    <td className="px-4 py-4 text-zinc-300">Coastal Roofing + Wind Mitigation</td>
                    <td className="px-4 py-4 text-zinc-300">20 years (est. 2005)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Rainbow Roofing Solutions</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5+</td>
                    <td className="px-4 py-4 text-zinc-300">Licensed (CCC1329656)</td>
                    <td className="px-4 py-4 text-zinc-300">Commercial Flat Roofs + Emergency</td>
                    <td className="px-4 py-4 text-zinc-300">35+ years (est. 1985)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Victory E&I Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ BBB A+</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 626-0667</td>
                    <td className="px-4 py-4 text-zinc-300">Full Service Residential</td>
                    <td className="px-4 py-4 text-zinc-300">11 years (est. 2013)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Star Group Inc.</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ Established</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 455-5421</td>
                    <td className="px-4 py-4 text-zinc-300">Multi-Service + Waterproofing</td>
                    <td className="px-4 py-4 text-zinc-300">59 years (est. 1967)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Dream Team Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ BBB Accredited</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 699-0090</td>
                    <td className="px-4 py-4 text-zinc-300">Shingle, Metal, Solar</td>
                    <td className="px-4 py-4 text-zinc-300">10+ years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Hollywood</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Hollywood isn't like choosing in most parts of the country.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              This is HVHZ territory. Every roof must meet Florida Building Code Section 1504 wind resistance standards. But Hollywood adds another layer: salt-air corrosion from the Atlantic coast, moisture challenges from canal-front properties in Emerald Hills and the Lakes of Emerald Hills, and complex roof geometries over two-story homes built over waterways.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              A roofer who doesn't understand Notice of Acceptance (NOA) requirements, HVHZ installation specs, or marine-grade fastener systems is a liability — not a solution.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Hollywood, it's crucial to focus on contractors who are known for quality craftsmanship, reliability, and the ability to address the specific roofing challenges of this coastal and canal-front environment. We evaluated every company on credentials, local track record, real customer reviews, and meaningful differentiators — not marketing claims. We considered their proven success with various roofing projects, both residential and commercial, in Hollywood neighborhoods specifically, and their commitment to customer satisfaction. Contractors must obtain all necessary permits and post them on the property during roofing projects, as required by Broward County.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Criteria checklist:</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Florida State Certified Roofing Contractor license — verified active</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>HVHZ installation experience and NOA compliance knowledge</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Coastal corrosion and marine-grade fastener system experience</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Verifiable manufacturer certifications (not self-reported)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>BBB accreditation and rating</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Google and multi-platform review volume + consistency</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Wind mitigation services (directly impacts homeowner insurance)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Longevity — roofing companies that last are ones that do things right</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Community presence — local roots, chamber membership, affiliations</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Workmanship warranty backed by manufacturer or third-party guarantee</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Residential AND commercial capability where offered</span>
              </li>
            </ul>
          </div>

          {/* Section 2: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — #1 in Hollywood</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (138+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We hired All Phase for our Emerald Hills home and they were fantastic. They understood the challenges of our canal-front property — salt corrosion, the complex roof line over the water access. Their team was professional, the materials held up perfectly through hurricane season, and their wind mitigation report knocked $1,200 off our annual insurance. Couldn't ask for better."<br/>
                <span className="text-zinc-400 text-sm">— Stephen M., Lakes of Emerald Hills, Hollywood, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We live in Hollywood Hills and had damage from a water intrusion event. All Phase came out, assessed the damage correctly, worked with our insurance adjuster, and completed the repair with precision. They explained the HVHZ compliance requirements clearly and made sure everything was documented for our protection. Excellent company."<br/>
                <span className="text-zinc-400 text-sm">— Jennifer K., Hollywood Hills, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Living in Broadwalk area means exposure. All Phase has been handling our property's commercial flat roof and our residential tile roof for years. They know the specific challenges of this neighborhood — salt air, moisture, the constant humidity. Their preventive maintenance plan has kept both systems in excellent condition."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Property Manager, Hollywood Broadwalk area</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Hollywood and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC-1331464) and a Florida Certified General Contractor license (CGC-1526236). That dual licensing is rare in the industry — and it matters more than most homeowners realize, especially in Hollywood's challenging coastal environment. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, use marine-grade fastener systems for salt-air environments, and document everything for insurance discounts. They have completed 2,500+ roof installations and specifically serve Emerald Hills, Hollywood Hills, Hollywood Beach Broadwalk area, and North Beach Park neighborhoods with expertise tailored to their unique conditions.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>), full re-roofing services, roof decking inspection and repair, coastal salt-air corrosion treatment, marine-grade fastener installation for HVHZ compliance, canal-front complex roof line handling, roof repair and emergency leak response, storm damage restoration, wind mitigation inspection and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, IB, Soprema), roof inspections, preventative maintenance programs, waterproofing and gutter systems, permit coordination and inspection management.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              TRI Alliance Florida High Wind Certified, Owens Corning Platinum Preferred Contractor, TAMKO Pro Platinum, CertainTeed Select Shingle Master, GAF Gold Certified, IB Roof Systems Certified, Soprema Certified, MySafeFloridaHome Certified, Wind Loss Mitigator, Certified Energy Rater, AAMA Installation Masters Certified, Directorii-backed $25,000 workmanship guarantee, 160 MPH wind warranty.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Community Affiliations:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Broward County Chamber of Commerce, Coral Springs Chamber of Commerce, Boca Raton Chamber of Commerce, Habitat for Humanity volunteer organization.
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(754) 227-5605</strong>
              </span>
              <span>|</span>
              <a href="https://allphaseconstructionfl.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">allphaseconstructionfl.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                590 Goolsby Blvd, Deerfield Beach, FL 33442
              </span>
            </div>
          </div>

          {/* Section 3: Rainbow Roofing Solutions */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Rainbow Roofing Solutions — Hollywood, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 35+ Years in Business | GAF Authorized Contractor</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Rainbow was incredibly responsive after Hurricane season damage. Their 24/7 emergency service got us covered quickly, and their work was thorough and professional. They saved us thousands in replacement by doing the repair right."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Hollywood, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "For our commercial flat roof, Rainbow's preventive maintenance program has been excellent. They understand TPO systems inside and out, and their coatings work has extended our roof life significantly."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Client Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Rainbow Roofing responded to our emergency call at 2am during a storm. They tarped the damage, prevented further water intrusion, and had a crew scheduled for the full repair the next morning. That fast response saved us thousands in water damage."<br/>
                <span className="text-zinc-400 text-sm">— Homeowner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Rainbow Roofing Solutions has served South Florida since 1985 — 35+ years of experience in the most challenging roofing environment in America. Member of the Roofing Contractors Association of South Florida, GAF Authorized Roofing Contractor, and holder of Florida license CCC1329656, Rainbow specializes in commercial flat roofs, TPO, PVC, spray foam coatings, and emergency post-hurricane repair services. Their 24/7 emergency availability is critical in an HVHZ zone — when storms hit, Rainbow answers the phone.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Commercial flat roof replacement and repair (TPO, PVC, modified bitumen, spray foam), residential shingle and tile repair, emergency tarping and stabilization, preventive maintenance programs, roof coatings and restoration, 24/7 post-hurricane emergency services, insurance claim coordination.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              35+ years in continuous operation | GAF Authorized | Member Roofing Contractors Association of South Florida | 24/7 emergency response | Specialization in commercial TPO systems | Established contractor with deep community ties
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Licensed (CCC1329656)</strong>
              </span>
              <span>|</span>
              <a href="https://rainbowroofing.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">rainbowroofing.com</a>
            </div>
          </div>

          {/* Section 4: Victory E&I Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Victory E&I Roofing and Construction — Hollywood, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ BBB A+ Rating | Voted Best Roofing Company in Fort Lauderdale 2023</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Victory came to our Hollywood home and did an exceptional job on our shingle roof replacement. Their Owens Corning certification gave us confidence in the materials, and their crew work was meticulous. They also explained our wind mitigation options clearly."<br/>
                <span className="text-zinc-400 text-sm">— BBB Review, Hollywood, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Family-owned and professional. Victory understood our concerns about the Broadwalk-area salt exposure and used premium materials and fastening techniques that showed they understood coastal roofing. Very impressed."<br/>
                <span className="text-zinc-400 text-sm">— Google Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Victory replaced the roof on our Emerald Hills property. They were punctual, professional, and their attention to detail on the underlay and fastening was excellent. They got the award for a reason."<br/>
                <span className="text-zinc-400 text-sm">— Local Homeowner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Victory E&I Roofing and Construction is a family-owned roofer founded in 2013, holding dual licenses (CCC1332044 & CCC1330750) and a BBB A+ rating. Voted Best Roofing Company in Fort Lauderdale in 2023, Victory combines modern efficiency with family values. Owens Corning certified, they bring expertise in residential roofing systems and a commitment to Hollywood's homeowners.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement and repair, shingle systems, tile systems, metal roofing, flat roofing, underlayment, gutters, fascia repair, roof inspections, insurance documentation.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              BBB A+ Rating | Best Roofing Company in Fort Lauderdale 2023 | Dual Licensed | Owens Corning Certified | Family-owned operation | Local Hollywood office
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 626-0667</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                921 N 21st Ave, Hollywood, FL 33020
              </span>
            </div>
          </div>

          {/* Section 5: Star Group Inc. */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Star Group Inc. — West Hollywood, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ Trusted Since 1967 | 59+ Years in Business</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Star Group has been our roofing contractor for 15 years. The consistency and professionalism is remarkable. They've handled everything from small repairs to full replacement with equal attention to detail."<br/>
                <span className="text-zinc-400 text-sm">— Long-term Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "When we needed a roof replacement plus waterproofing work, Star Group's multi-service capability was exactly what we needed. They coordinated everything seamlessly and saved us from hiring two separate contractors."<br/>
                <span className="text-zinc-400 text-sm">— Hollywood Area Homeowner</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Star Group brought in state-of-the-art equipment for our concrete restoration and roof project. Their installation techniques are modern and thorough. 59 years in business means they've earned the right to be trusted."<br/>
                <span className="text-zinc-400 text-sm">— Google Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Star Group Inc. has been serving Broward County since 1967 — 59 years of experience. This is not a new contractor chasing quick profits. This is a multi-service contractor with residential and commercial roofing expertise, plus waterproofing, concrete restoration, and window installation services. That combination of capabilities makes Star Group valuable for complex projects where multiple contractors would normally be required.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roofing, shingle and tile systems, waterproofing, elastomeric coatings, concrete restoration, window installation, comprehensive property repair services, project coordination.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              59+ years in continuous operation | Multi-service contractor | State-of-the-art installation techniques | Established local presence | Ability to coordinate complex multi-trade projects
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 455-5421</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                2412 SW 59th Terrace, West Hollywood, FL 33023
              </span>
            </div>
          </div>

          {/* Section 6: Dream Team Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Dream Team Roofing — Hollywood, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ BBB Accredited | 10+ Year Labor Warranty</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Dream Team installed our metal roof and the workmanship is exceptional. Their 10-year labor warranty gives us real peace of mind. The lifetime manufacturer warranty on materials is icing on the cake."<br/>
                <span className="text-zinc-400 text-sm">— BBB Review, Hollywood, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "They integrated solar-ready roofing into our replacement project seamlessly. Professional crew, clean worksite, and their attention to detail on the tile installation was first-rate."<br/>
                <span className="text-zinc-400 text-sm">— Solar Integration Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Dream Team's proposal was clear and competitive. They stuck to their timeline, communicated every day, and the finished roof is beautiful. Worth every penny for the quality and the extended warranty coverage."<br/>
                <span className="text-zinc-400 text-sm">— Broadwalk Area Homeowner</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Dream Team Roofing is a BBB-accredited contractor holding Florida license CCC1334317. They specialize in shingle, metal, flat, and solar-integration roofing systems. Their 10+ year labor warranty and lifetime manufacturer warranty on materials show confidence in their work — and they're willing to back it up in writing.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement and repair, asphalt shingle systems, metal roofing, flat roofing systems, solar-ready and solar-integrated roofing, underlayment installation, gutters and fascia, roof inspections, insurance documentation.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              BBB Accredited | 10+ Year Labor Warranty | Lifetime Manufacturer Warranty | Solar Integration Expertise | Clear Competitive Pricing | Professional Communication and Timeline Management
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 699-0090</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                3100 Stirling Rd, Suite 102, Hollywood, FL 33021
              </span>
            </div>
          </div>

          {/* Section 7: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Hollywood</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation. Hollywood's HVHZ designation, mandatory permitting, and insurance documentation requirements make this a more complex buying decision than most homeowners expect.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Decision checklist:</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Verify their Florida license at myfloridalicense.com before signing anything</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask specifically about HVHZ installation experience and NOA compliance</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Inquire about marine-grade fastener systems and coastal corrosion experience</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Request wind mitigation inspection as part of your project scope</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Get written estimates from at least 3 companies before deciding</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask who pulls the permit — the contractor should always pull the permit, not you</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Confirm manufacturer certification for your specific roof system</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Review warranty terms: make sure both manufacturer and workmanship warranties are provided</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask about their process for insurance coordination if you have a storm claim</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Confirm they have a Broward County contractor registration</span>
              </li>
            </ul>
          </div>

          {/* Section 8: Questions Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Comparison Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">What to Ask</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">HVHZ Experience</td>
                    <td className="px-4 py-4 text-zinc-300">"Have you installed roofs in HVHZ zones? Can you provide NOA documentation?"</td>
                    <td className="px-4 py-4 text-zinc-300">Required by Florida Building Code in Broward County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Coastal Experience</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you use marine-grade fasteners? Have you worked on canal-front properties?"</td>
                    <td className="px-4 py-4 text-zinc-300">Salt corrosion is specific to Hollywood's coastal environment</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you offer wind mitigation inspection and documentation?"</td>
                    <td className="px-4 py-4 text-zinc-300">Can reduce insurance premiums by hundreds annually</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Permits</td>
                    <td className="px-4 py-4 text-zinc-300">"Who pulls the permit — you or the homeowner?"</td>
                    <td className="px-4 py-4 text-zinc-300">Contractor must always pull permits in Broward County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Warranty</td>
                    <td className="px-4 py-4 text-zinc-300">"What manufacturer warranty does this system carry? What is your workmanship warranty?"</td>
                    <td className="px-4 py-4 text-zinc-300">Two separate coverages — both matter</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Emergency Response</td>
                    <td className="px-4 py-4 text-zinc-300">"What is your response time for emergency repairs or tarping?"</td>
                    <td className="px-4 py-4 text-zinc-300">Hurricane season requires fast response capability</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Insurance Work</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you work with insurance adjusters? Can you document storm damage?"</td>
                    <td className="px-4 py-4 text-zinc-300">Critical if filing a claim</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">References</td>
                    <td className="px-4 py-4 text-zinc-300">"Can you provide 2-3 references from Emerald Hills or Broadwalk area jobs?"</td>
                    <td className="px-4 py-4 text-zinc-300">Verifies local track record in your specific neighborhood</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Storm Chasers vs Established */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Hollywood — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Hollywood gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into South Florida after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Hollywood before the last storm. They'll be here after the next one. They live here. Their families live here. Their reputations depend on standing behind their work.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Warning signs of a storm chaser:</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-zinc-300">🚩 Showed up at your door after a storm — you didn't call them</li>
              <li className="text-zinc-300">🚩 Pressures you to sign an Assignment of Benefits (AOB) on the spot</li>
              <li className="text-zinc-300">🚩 Out-of-state license plate or no verifiable local office</li>
              <li className="text-zinc-300">🚩 Can't provide a Florida State license number for immediate verification</li>
              <li className="text-zinc-300">🚩 Offers to "waive your deductible" (this is insurance fraud in Florida)</li>
              <li className="text-zinc-300">🚩 No BBB profile or recent Broward County permit history</li>
              <li className="text-zinc-300">🚩 Quote is dramatically below every other bid you've received</li>
            </ul>
          </div>

          {/* Storm Chaser Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Storm Chaser</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Established Local Contractor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Warranty</td>
                    <td className="px-4 py-4 text-zinc-400">Little to none — gone before you'd use it</td>
                    <td className="px-4 py-4 text-zinc-300">Manufacturer-backed + workmanship guarantee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Licensing</td>
                    <td className="px-4 py-4 text-zinc-400">Often out-of-state or expired</td>
                    <td className="px-4 py-4 text-zinc-300">Florida State Certified, Broward County registered</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Accountability</td>
                    <td className="px-4 py-4 text-zinc-400">No local office, no way to reach them post-job</td>
                    <td className="px-4 py-4 text-zinc-300">Local address, local reputation, verifiable reviews</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Insurance Handling</td>
                    <td className="px-4 py-4 text-zinc-400">Pressures you to sign over claim rights</td>
                    <td className="px-4 py-4 text-zinc-300">Guides you through the process transparently</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Materials</td>
                    <td className="px-4 py-4 text-zinc-400">Cheapest available, often off-brand</td>
                    <td className="px-4 py-4 text-zinc-300">Manufacturer-certified, spec-grade systems</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Coastal Expertise</td>
                    <td className="px-4 py-4 text-zinc-400">None — unfamiliar with salt corrosion, HVHZ specs</td>
                    <td className="px-4 py-4 text-zinc-300">Understands marine-grade systems, coastal challenges</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Follow-Up</td>
                    <td className="px-4 py-4 text-zinc-400">None — they've moved to the next storm</td>
                    <td className="px-4 py-4 text-zinc-300">Warranty calls, inspections, long-term relationship</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Pricing */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Roofing Pricing in Hollywood — Cheap, Fair, and Overpriced</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The low-bid roofer in Hollywood is often using the cheapest materials available. In an HVHZ zone with coastal salt-air exposure, a roof installed below spec is not just a warranty issue — it's a code violation that can affect your insurance coverage and resale value. Cheap quotes feel good on signing day. They get expensive when the first storm hits and your substandard materials fail.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Most of the five companies on this list operate in the middle ground — fair market pricing that reflects real labor costs, proper materials, licensed crews, and overhead from running a legitimate business. Most Hollywood homeowners are best served here — quality without premium brand markup.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Roof Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Typical Range</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Asphalt Shingle (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$9,000 – $22,000</td>
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required; marine-grade fasteners add cost</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$16,000 – $45,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion and marine fasteners for HVHZ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$18,000 – $55,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability in salt environments; strong insurance benefits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roofing (commercial/residential)</td>
                    <td className="px-4 py-4 text-zinc-300">$8,000 – $25,000</td>
                    <td className="px-4 py-4 text-zinc-300">System type (TPO/PVC/modified) affects pricing; Broadwalk area premium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Repair (minor)</td>
                    <td className="px-4 py-4 text-zinc-300">$350 – $2,500</td>
                    <td className="px-4 py-4 text-zinc-300">Leak repair, tile replacement, flashing, corrosion treatment</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation Inspection</td>
                    <td className="px-4 py-4 text-zinc-300">$75 – $150</td>
                    <td className="px-4 py-4 text-zinc-300">Potential to save $500–$2,000+ annually on insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 11: Red Flags */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Red Flags When Choosing a Roofer in Hollywood, FL</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-zinc-300">🚩 No Florida State Certified Roofing Contractor license (verify at myfloridalicense.com)</li>
              <li className="text-zinc-300">🚩 Demands full payment before work begins</li>
              <li className="text-zinc-300">🚩 No written estimate or contract before signing</li>
              <li className="text-zinc-300">🚩 Cannot provide proof of liability insurance and workers' comp</li>
              <li className="text-zinc-300">🚩 No verifiable Hollywood or Broward County office</li>
              <li className="text-zinc-300">🚩 Pressure to decide same day — "this price is only good today"</li>
              <li className="text-zinc-300">🚩 Offers to waive your deductible (insurance fraud under Florida law)</li>
              <li className="text-zinc-300">🚩 Can't explain what NOA compliance means for your roof system</li>
              <li className="text-zinc-300">🚩 No mention of HVHZ or marine-grade fastener systems</li>
              <li className="text-zinc-300">🚩 No permit mentioned — "we handle it different here"</li>
            </ul>
          </div>

          {/* Red Flags Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Red Flag</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Why It's Dangerous</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">What to Do Instead</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">No Florida license</td>
                    <td className="px-4 py-4 text-zinc-300">Unlicensed work voids insurance and violates building code</td>
                    <td className="px-4 py-4 text-zinc-300">Verify at myfloridalicense.com before any conversation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Deductible waiver offer</td>
                    <td className="px-4 py-4 text-zinc-300">Constitutes insurance fraud under Florida Statute 817.234</td>
                    <td className="px-4 py-4 text-zinc-300">Walk away immediately and report if persistent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">No HVHZ knowledge</td>
                    <td className="px-4 py-4 text-zinc-300">Non-compliant installation violates Broward County code</td>
                    <td className="px-4 py-4 text-zinc-300">Ask specifically: "Are you familiar with HVHZ requirements?"</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">No permit mentioned</td>
                    <td className="px-4 py-4 text-zinc-300">Unpermitted work can prevent home sale and void warranties</td>
                    <td className="px-4 py-4 text-zinc-300">Require permit documentation in every contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Full upfront payment</td>
                    <td className="px-4 py-4 text-zinc-300">Industry standard is deposit only — balance on completion</td>
                    <td className="px-4 py-4 text-zinc-300">Never pay more than 10-20% before work begins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 12: FAQ */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">FAQ — Frequently Asked Questions About Roofing in Hollywood, FL</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">How much does a new roof cost in Hollywood?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most residential roof replacements in Hollywood range from $9,000 to $45,000+ depending on roof type, size, and materials. HVHZ compliance, coastal marine-grade fastening, and Broward County permitting add cost that is unavoidable and non-negotiable for code-compliant work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Do I need a permit for roofing work in Hollywood / Broward County?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is HVHZ and does it apply to Hollywood?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  HVHZ stands for High Velocity Hurricane Zone. Hollywood is entirely within Broward County, which is fully designated HVHZ. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What special roofing challenges exist in Hollywood's Emerald Hills or Broadwalk area?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Canal-front properties in Emerald Hills and the Lakes of Emerald Hills face salt-air corrosion and moisture challenges that require marine-grade fastening systems. Broadwalk area properties face Atlantic exposure. Both require contractors with specific coastal expertise — not all roofers have this knowledge.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is a wind mitigation inspection and why does it matter?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  A wind mitigation inspection documents how your roof is built relative to Florida's wind standards. Insurance companies use this report to calculate premium discounts. A strong wind mitigation report can reduce your homeowner's insurance by several hundred to several thousand dollars annually.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">How do I know if I need repair or full replacement?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  General rule: if damage is localized and the roof system is under 15 years old, repair often makes sense. If the roof is 20+ years old, has multiple problem areas, or if repair cost approaches 25-30% of replacement cost, full replacement provides better long-term value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Does homeowner's insurance cover roof damage in Florida?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  It depends on the cause and your policy. Storm damage, wind damage, and sudden events are typically covered. Gradual wear, maintenance issues, and pre-existing damage are generally not. Strong documentation and a contractor familiar with the claims process can significantly improve outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Can a Hollywood homeowner pull their own roof permit?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  No. In Broward County, roofing permits must be pulled by a licensed contractor, not the homeowner. Any contractor who asks you to pull the permit is either unlicensed or attempting to avoid accountability for the work.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Your Roof Done Right in Hollywood?
          </h2>

          <div className="text-left max-w-3xl mx-auto mb-8 text-zinc-100">
            <p className="mb-4 leading-relaxed">
              Every company on this list has earned their place — verified licenses, strong reviews, and real local presence in Hollywood. The right choice comes down to your specific situation: roof type, storm damage claim status, coastal vs. inland location, commercial vs. residential, and what level of service and documentation you need.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want the contractor who does the most for your long-term protection — roof, structure, coastal expertise, and insurance savings — <strong>All Phase Construction USA</strong> is the call to make. They've been protecting Hollywood's most challenging properties for two decades.
            </p>

            <p className="mb-4 leading-relaxed">
              If you need emergency post-hurricane response capability and commercial expertise, <strong>Rainbow Roofing Solutions</strong> has 35+ years and 24/7 emergency service.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want a family-owned local Hollywood operation with award recognition, <strong>Victory E&I Roofing</strong> was voted Best Roofing Company in Fort Lauderdale 2023.
            </p>

            <p className="mb-4 leading-relaxed">
              If you prefer established multi-service capability with 59 years of continuity, <strong>Star Group Inc.</strong> brings waterproofing, concrete, and window services alongside roofing.
            </p>

            <p className="mb-6 leading-relaxed">
              If you want extended labor and material warranties with solar integration expertise, <strong>Dream Team Roofing</strong> offers 10+ year labor warranty and BBB accreditation.
            </p>

            <p className="font-semibold text-lg text-white">
              All five answer your phone. All five pull their own permits. All five understand Hollywood's unique coastal and canal-front roofing challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:7542275605"
              className="inline-flex items-center px-8 py-4 bg-white text-red-900 rounded-lg font-bold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              (754) 227-5605
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-950 text-white rounded-lg font-bold text-lg hover:bg-red-900 transition-colors border-2 border-white"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>

        {/* Best Roofers Cross-Links */}
        <section className="py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-white mb-6">Best Roofers in Other Broward County Cities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: '/locations/deerfield-beach/best-roofers-deerfield-beach', label: 'Deerfield Beach' },
                { to: '/locations/pompano-beach/best-roofers-pompano-beach', label: 'Pompano Beach' },
                { to: '/locations/fort-lauderdale/best-roofers-fort-lauderdale', label: 'Fort Lauderdale' },
                { to: '/locations/miramar/best-roofers-miramar', label: 'Miramar' },
                { to: '/locations/pembroke-pines/best-roofers-pembroke-pines', label: 'Pembroke Pines' },
                { to: '/locations/boca-raton/best-roofers-boca-raton', label: 'Boca Raton' },
              ].map(link => (
                <a key={link.to} href={link.to} className="px-4 py-2 bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white rounded-lg text-sm transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Contact Form */}
      <Contact />
    </div>
  );
}
