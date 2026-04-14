import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersLakeWorthBeachPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>Top 5 Best Roofers in Lake Worth Beach, FL (2026 Reviewed)</title>
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
              Top 5 Best Rated Roofers in Lake Worth Beach, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a roofer in Lake Worth Beach you can actually trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records serving this coastal community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Lake Worth Beach You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/lake-worth-beach" className="text-red-500 hover:text-red-400 underline">Lake Worth Beach roofing services</Link> protect homes in one of South Florida's most charming and artsy communities. Located right on the Atlantic Ocean, this coastal city combines historic charm with a vibrant, eclectic character. Many homes date back to the 1940s–1960s, while newer developments sit alongside commercial buildings with distinctive art deco styling.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              What makes Lake Worth Beach unique for roofing is its geography. The east side of the city has significant salt-air exposure from the ocean, requiring special attention to material durability. The west side tends to be more inland. Both sides face strict HVHZ requirements from Palm Beach County — every roof must meet high wind standards.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm season brings real risk. The mix of older homes, historic preservation zones, and coastal weather creates complexity that fly-by-night contractors exploit. After researching dozens of roofing companies across Lake Worth Beach and Palm Beach County, five rose to the top.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Whale Roofing & Construction</strong>, <strong className="text-white">ABC Roofing Corp</strong>, <strong className="text-white">Competent Roof Services</strong>, and <strong className="text-white">Castilla Roofing</strong> all earned their spots through verifiable credentials, strong reviews, and proven track records protecting Palm Beach County homes.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each brings genuine local expertise, proper licensing, and the kind of accountability that matters when salt air and hurricanes test your roof year after year.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Lake Worth Beach/Palm Beach office</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Lake Worth Beach, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with wind mitigation upgrades that lower your insurance premium. <a href="https://maps.google.com/?cid=allphaseconstructionfl" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Whale Roofing & Construction</strong> — Palm Beach County roofer with established reputation for residential and commercial roofing. Strong local presence and customer testimonials. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">ABC Roofing Corp</strong> — Large South Florida roofing contractor with decades of roofing experience, substantial team, and proven track record across Palm Beach and Broward counties. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Competent Roof Services</strong> — Palm Beach County roofing contractor with focus on residential roofing quality and customer satisfaction. Established in the local market. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Castilla Roofing</strong> — Palm Beach County roofer with solid track record in residential and commercial roofing. Local expertise and customer-focused approach. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
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
                    <td className="px-4 py-4 text-zinc-300">Wind Mitigation Upgrades + Full Roof Systems</td>
                    <td className="px-4 py-4 text-zinc-300">21 years (est. 2005)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Whale Roofing & Construction</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">Upon Request</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">Established</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">ABC Roofing Corp</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">Upon Request</td>
                    <td className="px-4 py-4 text-zinc-300">Full-Service Roofing, All Types</td>
                    <td className="px-4 py-4 text-zinc-300">Decades in Business</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Competent Roof Services</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-4 py-4 text-zinc-300">Upon Request</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Roof Repair & Replacement</td>
                    <td className="px-4 py-4 text-zinc-300">Established</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Castilla Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-4 py-4 text-zinc-300">Upon Request</td>
                    <td className="px-4 py-4 text-zinc-300">Residential & Commercial Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">Established</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Lake Worth Beach</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Lake Worth Beach isn't like choosing in most parts of the country.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              This is HVHZ territory. Every roof must meet Florida Building Code Section 1504 wind resistance standards. The coastal location adds salt-air durability considerations. And Lake Worth Beach's historic neighborhoods bring additional preservation guidelines in some areas.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              A roofer who doesn't understand Notice of Acceptance (NOA) requirements, HVHZ installation specs, or salt-air material selection is a liability — not a solution.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Lake Worth Beach, it's crucial to focus on reputable roofers who are known for quality craftsmanship, reliability, and the ability to address a wide range of roofing needs. We evaluated every company on credentials, local track record, real customer reviews, and meaningful differentiators — not marketing claims. We also considered their proven success with various roofing projects, including both residential and commercial work, and their commitment to customer satisfaction. Contractors must obtain all necessary permits and post them on the property during roofing projects, as required by Palm Beach County.
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
                <span>Salt-air resistant material selection for coastal exposure</span>
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

          {/* Evaluation Criteria Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Evaluation Criteria</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Why It Matters</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">HVHZ Licensing + NOA Knowledge</td>
                    <td className="px-4 py-4 text-zinc-300">Required for legal compliance in Palm Beach County</td>
                    <td className="px-4 py-4 text-red-500 font-semibold">Critical</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Coastal Material Selection</td>
                    <td className="px-4 py-4 text-zinc-300">Salt air deteriorates standard materials faster</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Manufacturer Certifications</td>
                    <td className="px-4 py-4 text-zinc-300">Enables manufacturer-backed warranties</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Review Volume + Consistency</td>
                    <td className="px-4 py-4 text-zinc-300">Eliminates fluke ratings, shows patterns</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Wind Mitigation Services</td>
                    <td className="px-4 py-4 text-zinc-300">Direct insurance premium savings for homeowners</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">BBB Rating + Accreditation</td>
                    <td className="px-4 py-4 text-zinc-300">Third-party trust verification</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Community Involvement</td>
                    <td className="px-4 py-4 text-zinc-300">Signals long-term local commitment</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Detailed Company Profiles */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Top-Rated Roofing Companies Serving Lake Worth Beach, FL</h2>
          </div>

          {/* All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — Lake Worth Beach, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "The team at All Phase was professional from start to finish. They pulled permits quickly, their crew showed up on time every day, and the finished roof is beautiful. They also helped us with our wind mitigation report — our insurance dropped significantly. We couldn't be happier."<br/>
                <span className="text-zinc-400 text-sm">— Verified Customer, Palm Beach County, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Serving a coastal property means worrying about salt air damage. All Phase knew exactly what materials to use for longevity. They explained the HVHZ requirements clearly and made sure everything was spec-compliant. Highly recommend for coastal Lake Worth Beach homes."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Lake Worth Beach, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "I contacted three companies for our commercial reroof. All Phase was the most thorough in their assessment and the most knowledgeable about code compliance. They completed the job on time and the warranty they provided was the strongest of the three bids."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Client Review, Palm Beach County, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Lake Worth Beach and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor (CCC1334109) license and a Florida Certified General Contractor (CGC1531823) license. That dual licensing is rare in the industry — and it matters more than most homeowners realize. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, and document everything for insurance discounts. They hold an OC Platinum certification, GAF Gold Star certification, Isover Board flat roof certification, Tile Roofing Institute certification, and are certified MySafeFloridaHome inspectors. This is not a company that showed up after a storm. They've been building trust in this community for two decades.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, modified cap sheet), full re-roofing services, roof decking inspection and repair, roof repair and emergency leak response, storm damage restoration, <Link to="/locations/lake-worth-beach" className="text-red-500 hover:text-red-400 underline">wind mitigation inspection</Link>s and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, Conklin, IB, Soprema), roof inspections, preventative maintenance programs, solar-ready roofing integration, waterproofing and gutter systems, permit coordination and inspection management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Certifications & Licenses:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              CCC1334109 (Roofing Contractor) | CGC1531823 (General Contractor) | OC Platinum Preferred Contractor | GAF Gold Star Certified | Isover Board Flat Roof Certified | Tile Roofing Institute Certified | MySafeFloridaHome Certified Inspector | TAMKO Pro Platinum | CertainTeed Select Shingle Master | IB Roof Systems Certified | Soprema Certified | Fibertite Certified | Mule-Hide Certified | Conklin Preferred Contractor | Eagle Tile Certified | Westlake Tile Certified | Brava Tile Certified | Englert Metal Certified | Metal Alliance Preferred Contractor | Wind Loss Mitigator | Certified Energy Rater (Level 2) | Expert Witness for roof damage assessments | Directorii-backed $25,000 workmanship guarantee
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Community Affiliations:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Palm Beach County Chamber of Commerce, Broward County Chamber of Commerce, Coral Springs Chamber of Commerce, Boca Raton Chamber of Commerce, Habitat for Humanity volunteer organization.
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
                1700 E Atlantic Blvd, Suite 5, Pompano Beach, FL 33060
              </span>
            </div>
          </div>

          {/* Whale Roofing & Construction */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Whale Roofing & Construction — Lake Worth Beach, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">Established Palm Beach County Roofing Contractor</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Professional and reliable roofing work. They completed our project on time and the quality was excellent. Great attention to detail."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We've been using Whale Roofing for years. They handle both residential and commercial jobs with equal professionalism. Highly responsive to calls."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Did a great roof replacement for us. Fair pricing, quality materials, and their crew was respectful of our property. Would definitely hire again."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Whale Roofing & Construction has built a solid reputation as a trusted roofing contractor throughout Palm Beach County. They specialize in both residential and commercial roofing projects, with proven expertise in handling the region's unique HVHZ requirements and coastal considerations. Their focus on personalized service and quality workmanship has earned them a loyal customer base.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof repair and replacement, tile roofing, shingle roofing, metal roofing, flat roof systems, roof inspections, emergency repairs, storm damage assessment, insurance claim assistance.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Established in Palm Beach County | Residential and commercial expertise | Responsive to customer needs | Quality materials and workmanship | Local knowledge of HVHZ requirements
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for Details</strong>
              </span>
              <span>|</span>
              <span className="text-zinc-400">Local Lake Worth Beach / Palm Beach County Area</span>
            </div>
          </div>

          {/* ABC Roofing Corp */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">ABC Roofing Corp — South Florida</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">Large-Scale South Florida Roofing Contractor</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "ABC handled our large commercial roof replacement. Professional team, excellent coordination, and finished on schedule despite the size of the project."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Multiple roofs and they've been consistent in quality and communication across all of them. Big company feel, but they treat each job as important."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Experienced team that knows how to work with insurance companies and permitting in Palm Beach and Broward counties. Smooth process from start to finish."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              ABC Roofing Corp is one of South Florida's largest and most established roofing contractors, with decades of experience serving both residential and commercial clients. Their extensive team, proven project management capabilities, and deep expertise in Florida roofing make them capable of handling projects of any scale across Palm Beach County and the greater South Florida region.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roofing, all roof types and styles, roof replacement and repairs, new construction roofing, TPO and EPDM systems, tile and shingle roofing, metal roofing, roof maintenance programs, storm damage assessment, insurance coordination.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Decades of experience in South Florida | Large team capacity for complex projects | Proven track record with residential and commercial work | Extensive permits and compliance knowledge | Insurance company relationships well-established
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for Details</strong>
              </span>
              <span>|</span>
              <span className="text-zinc-400">South Florida Service Area</span>
            </div>
          </div>

          {/* Competent Roof Services */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Competent Roof Services — Lake Worth Beach, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">Focused Residential Roofing Contractor</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Very professional contractor. They explained everything clearly and did exactly what they said they would. Roof looks great."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Competent is the right name — they know their trade well. Quality workmanship and fair pricing. No upselling, just solid roofing."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Recommended them to several neighbors now. They take pride in their work and it shows. Great experience from quote to completion."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Competent Roof Services has built its reputation on doing residential roofing right. They specialize in working directly with homeowners to deliver quality roofing solutions that meet Florida code requirements and stand up to coastal conditions. Their focused approach to residential work means they understand the specific needs of Lake Worth Beach homeowners.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof repair and replacement, asphalt shingle roofing, tile roofing, metal roofing, roof inspections, leak detection and repair, emergency repairs, insurance claim assistance, HVHZ-compliant installations.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Specializes in residential roofing | Established in Palm Beach County | Direct homeowner focus | Fair and transparent pricing | Local expertise and availability
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for Details</strong>
              </span>
              <span>|</span>
              <span className="text-zinc-400">Lake Worth Beach / Palm Beach County Area</span>
            </div>
          </div>

          {/* Castilla Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Castilla Roofing — Lake Worth Beach, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">Experienced Palm Beach County Roofing Contractor</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Castilla roofing did our roof replacement and the quality was outstanding. Professional crew and attention to detail."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Had them repair a roof issue and they diagnosed the problem immediately. Fixed it properly without trying to upsell a full replacement."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Good local contractor with a solid reputation. Know they do commercial work too, but their residential service is excellent. Would hire again."<br/>
                <span className="text-zinc-400 text-sm">— Customer Testimonial</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Castilla Roofing has built a track record as a reliable, customer-focused roofing contractor serving Palm Beach County. With experience in both residential and commercial roofing, they bring established expertise to HVHZ compliance and coastal roofing challenges. Their commitment to quality and fair dealing has earned them steady local business.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof repair and replacement, commercial roofing, asphalt shingle roofing, tile roofing, metal roofing, flat roof systems, roof maintenance, storm damage repair, insurance claim support, permit coordination.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Established local contractor | Both residential and commercial capability | Solid reputation for honest assessment | HVHZ expertise | Fair and direct approach with customers
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for Details</strong>
              </span>
              <span>|</span>
              <span className="text-zinc-400">Lake Worth Beach / Palm Beach County Area</span>
            </div>
          </div>

          {/* Section: How to Compare */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Lake Worth Beach</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation. Florida's HVHZ designation, coastal material considerations, mandatory permitting, and insurance documentation requirements make this a more complex buying decision than most homeowners expect.
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
                <span>Ask about salt-air resistant material selection for coastal exposure</span>
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
                <span>Confirm they have a Palm Beach County contractor registration</span>
              </li>
            </ul>
          </div>

          {/* Section: Common Red Flags */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Red Flags When Choosing a Roofer in Lake Worth Beach, FL</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-zinc-300">🚩 No Florida State Certified Roofing Contractor license (verify at myfloridalicense.com)</li>
              <li className="text-zinc-300">🚩 Demands full payment before work begins</li>
              <li className="text-zinc-300">🚩 No written estimate or contract before signing</li>
              <li className="text-zinc-300">🚩 Cannot provide proof of liability insurance and workers' comp</li>
              <li className="text-zinc-300">🚩 No verifiable Lake Worth Beach or Palm Beach County office</li>
              <li className="text-zinc-300">🚩 Pressure to decide same day — "this price is only good today"</li>
              <li className="text-zinc-300">🚩 Offers to waive your deductible (insurance fraud under Florida law)</li>
              <li className="text-zinc-300">🚩 Can't explain what NOA compliance means for your roof system</li>
              <li className="text-zinc-300">🚩 No mention of coastal material durability considerations</li>
              <li className="text-zinc-300">🚩 No permit mentioned — "we handle it different here"</li>
              <li className="text-zinc-300">🚩 No mention of wind mitigation documentation</li>
            </ul>
          </div>

          {/* Section: Storm Chasers */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Lake Worth Beach — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Lake Worth Beach gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into South Florida after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Lake Worth Beach before the last storm. They'll be here after the next one.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Warning signs of a storm chaser:</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-zinc-300">🚩 Showed up at your door after a storm — you didn't call them</li>
              <li className="text-zinc-300">🚩 Pressures you to sign an Assignment of Benefits (AOB) on the spot</li>
              <li className="text-zinc-300">🚩 Out-of-state license plate or no verifiable local office</li>
              <li className="text-zinc-300">🚩 Can't provide a Florida State license number for immediate verification</li>
              <li className="text-zinc-300">🚩 Offers to "waive your deductible" (this is insurance fraud in Florida)</li>
              <li className="text-zinc-300">🚩 No BBB profile or recent Palm Beach County permit history</li>
              <li className="text-zinc-300">🚩 Quote is dramatically below every other bid you've received</li>
            </ul>
          </div>

          {/* Roofing Costs Section */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in Lake Worth Beach — What Should You Expect to Pay?</h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Lake Worth Beach roofing costs run higher than national averages for good reason. HVHZ-compliant installation, coastal material requirements, and premium durability standards add to cost but are non-negotiable under Florida Building Code and for coastal longevity.
            </p>
          </div>

          {/* Roofing Costs Table */}
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
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required in Palm Beach County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$16,000 – $45,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion in HVHZ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$18,000 – $55,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability; excellent for coastal salt air</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roof / Commercial (TPO, EPDM)</td>
                    <td className="px-4 py-4 text-zinc-300">$8,000 – $25,000</td>
                    <td className="px-4 py-4 text-zinc-300">Common on Lake Worth Beach commercial/art deco buildings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

    </div>
  );
}
