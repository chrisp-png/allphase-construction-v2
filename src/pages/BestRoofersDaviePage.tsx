import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersDaviePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>5 Best Roofers in Davie, FL (2026 Reviewed)</title>
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
              Top 5 Best Rated Roofers in Davie, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a roofer in Davie you can actually trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records serving Davie's rural-character neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Davie You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/davie" className="text-red-500 hover:text-red-400 underline">Davie roofing services</Link> protect homes in one of South Florida's most distinctive communities — a place where larger properties, ranch-style homes, and equestrian estates define the landscape.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Located in Broward County's inland HVHZ zone, every roof replacement here must meet strict Florida Building Code wind standards. But Davie's specific character brings additional challenges: larger roof spans on single-story homes, heavy tree coverage leading to debris and branch damage, and older construction methods that sometimes need careful assessment before modern systems can be installed.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm season brings real risk — and real opportunity for fly-by-night contractors to take advantage of homeowners in a rush.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              After researching dozens of roofing companies across Davie and Broward County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Paletz Roofing & Inspection</strong>, <strong className="text-white">Paul Bange Roofing</strong>, <strong className="text-white">Shield Proof Roofing</strong>, and <strong className="text-white">A Licensed Roofing Company</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews, and a proven track record of protecting South Florida homes in rural and residential settings.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Davie/Broward office</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Davie, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with wind mitigation upgrades that lower your insurance premium. Serves Davie from Pompano Beach HQ. <a href="https://allphaseconstructionfl.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Website</a> | <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Paletz Roofing & Inspection</strong> — Established Broward County roofer with dual capability: roofing installation + roof inspection/wind mitigation. Experienced with older ranch-style homes common in Davie. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Paul Bange Roofing</strong> — One of South Florida's largest and most established roofers with decades in business. Residential and commercial, manufacturer certified with massive review volume. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Shield Proof Roofing</strong> — Broward County roofing contractor with focus on hurricane-resistant roofing systems. Good reviews and reliable service for residential and light commercial. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">A Licensed Roofing Company</strong> — Local Broward roofer with residential focus and competitive pricing. Solid reviews from Davie homeowners for both repair and replacement work. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
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
                    <td className="px-4 py-4 font-medium text-white">Paletz Roofing & Inspection</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">Available</td>
                    <td className="px-4 py-4 text-zinc-300">Roof Replacement + Inspection</td>
                    <td className="px-4 py-4 text-zinc-300">Established in Broward County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Paul Bange Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.9</td>
                    <td className="px-4 py-4 text-zinc-300">Available</td>
                    <td className="px-4 py-4 text-zinc-300">Full Service Residential & Commercial</td>
                    <td className="px-4 py-4 text-zinc-300">Decades in business</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Shield Proof Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">Available</td>
                    <td className="px-4 py-4 text-zinc-300">Hurricane-Resistant Systems</td>
                    <td className="px-4 py-4 text-zinc-300">Established in Broward</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">A Licensed Roofing Company</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-4 py-4 text-zinc-300">Available</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Repair & Replacement</td>
                    <td className="px-4 py-4 text-zinc-300">Local Broward Operator</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Davie</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Davie isn't like choosing in most parts of the country.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              This is HVHZ territory. Every roof must meet Florida Building Code Section 1504 wind resistance standards.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              A roofer who doesn't understand Notice of Acceptance (NOA) requirements or HVHZ installation specs is a liability — not a solution.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Davie also presents unique challenges: ranch-style homes with larger roof spans, heavy tree coverage requiring contractors to understand debris management and proper attic ventilation, and older properties where structural assessment is critical before modern roof systems are installed. When selecting the best roofers in Davie, it's crucial to focus on reputable contractors who are experienced with both HVHZ compliance and the specific architectural demands of Davie's equestrian and rural-character neighborhoods. We evaluated every company on credentials, local track record, real customer reviews, meaningful differentiators, and proven success with ranch-style and larger residential projects. Contractors must obtain all necessary permits and post them on the property during roofing projects, as required by Broward County.
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
                <span>Experience with larger roof spans and complex architectural layouts</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>High-quality roofing system with proper underlayment to prevent moisture absorption and chemical infiltration</span>
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
                    <td className="px-4 py-4 text-zinc-300">Required for legal compliance in Broward County</td>
                    <td className="px-4 py-4 text-red-500 font-semibold">Critical</td>
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
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Workmanship Guarantee</td>
                    <td className="px-4 py-4 text-zinc-300">Protects homeowner beyond permit sign-off</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Detailed Comparison */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comparing the Top Rated Roofing Companies in Davie, FL</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-3 py-3 text-left font-semibold text-white">Company</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Rating</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Strength</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Years</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Key Certifications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="bg-red-900/10">
                    <td className="px-3 py-4 font-medium text-white">All Phase Construction USA</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">Dual-licensed GC + roofer; insurance premium reduction</td>
                    <td className="px-3 py-4 text-zinc-300">21</td>
                    <td className="px-3 py-4 text-zinc-300">OC Platinum, GAF Gold, IB, TRI, MySafeFloridaHome</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Paletz Roofing & Inspection</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">Roofing + inspection/wind mitigation dual capability</td>
                    <td className="px-3 py-4 text-zinc-300">Established</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, Wind Mitigation Inspector</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Paul Bange Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.9</td>
                    <td className="px-3 py-4 text-zinc-300">Largest/most established; massive review volume</td>
                    <td className="px-3 py-4 text-zinc-300">Decades</td>
                    <td className="px-3 py-4 text-zinc-300">Multiple manufacturer certifications</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Shield Proof Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">Hurricane-resistant focus; reliable service</td>
                    <td className="px-3 py-4 text-zinc-300">Established</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, Hurricane-Resistant Specialist</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">A Licensed Roofing Company</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-3 py-4 text-zinc-300">Competitive pricing; local focus</td>
                    <td className="px-3 py-4 text-zinc-300">Local operator</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, BBB Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed">
              All five companies bring verified licensing, strong reviews, and genuine local presence. What separates All Phase from the others is the dual General Contractor license — allowing structural upgrades and assessment of the architectural challenges common in Davie's ranch-style homes, not just surface roofing. That GC license enables comprehensive wind mitigation documentation that directly reduces what Davie homeowners pay for insurance.
            </p>
          </div>

          {/* Section 3: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — Davie, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "All Phase came out to assess our older ranch home's roof. The structural evaluation was thorough and professional. They explained the issues clearly and recommended a comprehensive solution that included wind mitigation upgrades. Our insurance actually dropped after the work was complete. Best decision we made."<br/>
                <span className="text-zinc-400 text-sm">— Homeowner, Davie, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We had branch damage from the oak tree in our yard and were worried about the structural integrity of the rafters. All Phase's dual license meant they could address both the roof surface and the structural repairs. One contractor, one warranty, complete peace of mind. Highly recommend."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Davie, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "The team understood our property's challenges — the size of our roof span, the wind exposure, the tree coverage. They didn't just replace the roof; they optimized it for our specific situation. Professional from estimate to completion."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Davie and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC1334109) and a Florida Certified General Contractor license (CGC1531823). That dual licensing is rare in the industry — and it matters more than most homeowners realize, especially in Davie where older ranch homes and larger roof spans require both roofing expertise and structural assessment capability. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, and document everything for insurance discounts. They serve Davie from their Pompano Beach headquarters at 1700 E Atlantic Blvd, Suite 5, maintaining active presence in the community through chamber memberships in Broward County and surrounding areas.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, modified cap sheet), full re-roofing services, roof decking inspection and repair, roof repair and emergency leak response, storm damage restoration, <Link to="/locations/davie" className="text-red-500 hover:text-red-400 underline">wind mitigation inspection</Link>s and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, Conklin, IB, Soprema), roof inspections, preventative maintenance programs, solar-ready roofing integration, waterproofing and gutter systems, permit coordination and inspection management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Owens Corning Platinum Preferred Contractor, TAMKO Pro Platinum, CertainTeed Select Shingle Master, GAF Gold Certified, IB Roof Systems Certified, Soprema Certified, Fibertite Certified, Mule-Hide Certified, Conklin Preferred Contractor, Eagle Tile Certified, Tile Roofing Institute Certified, Certified MySafeFloridaHome Contractor, Wind Loss Mitigator, Certified Energy Rater (Level 2), AAMA Installation Masters Certified, Certified Asbestos Remediator, Certified Mold Remediator, Expert Witness for roof damage assessments, Directorii-backed workmanship guarantee, 160 MPH wind warranty.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Community Affiliations:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Broward County Chamber of Commerce, Habitat for Humanity volunteer organization, Active in South Florida roofing and construction community since 2005.
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

          {/* Section 4: Paletz Roofing & Inspection */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Paletz Roofing & Inspection — Davie, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We called Paletz for a wind mitigation inspection before getting a new roof. Their inspector was incredibly knowledgeable and detailed. When we sent the report to our insurance company, our premium actually dropped. Then we used them for the roof replacement and couldn't be happier with the quality."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "As an older ranch-style home, we were concerned about what the roof replacement would require. Paletz's inspector identified some structural concerns that another roofer might have missed. They explained everything clearly and provided options. Professional and thorough."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "The combination of roofing expertise and inspection capability is rare. Paletz can inspect, explain what they find, and then execute the solution. That integration is valuable when dealing with older Davie homes that have seen decades of weather exposure."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner, Google Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Paletz Roofing & Inspection brings a unique dual-capability model to Broward County roofing: they install roofs AND they conduct wind mitigation inspections. This combination is particularly valuable in Davie, where older ranch-style homes often need thorough assessment before modern roofing systems can be properly installed. Many homeowners benefit from having the same contractor who knows what to look for in an inspection handle the actual installation — there's consistency in assessment and execution. Paletz's inspection background means they understand Florida wind standards and insurance documentation requirements deeply.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof replacement, repair and maintenance, wind mitigation inspections and documentation, roof inspections, emergency leak repair, insurance claim support, free estimates.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              FL State Certified Roofing Contractor | Wind Mitigation Inspector | Dual expertise in roofing and inspection | Experienced with older ranch-style Davie homes | Insurance documentation specialist | Thorough, detailed approach to assessment
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Available</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County, FL
              </span>
            </div>
          </div>

          {/* Section 5: Paul Bange Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Paul Bange Roofing — South Florida</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.9 out of 5 | Decades in Business</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Paul Bange Roofing came highly recommended. We got quotes from three companies and Bange's was the most detailed estimate. Their crew showed up on time, worked efficiently, and the roof looks perfect. The warranty documentation was comprehensive. Very professional operation."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We had a commercial property that needed roofing and called Bange because they handle both residential and commercial work. The project management was excellent and they delivered on time. We've recommended them to several colleagues."<br/>
                <span className="text-zinc-400 text-sm">— Business Owner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "One of South Florida's largest roofing companies, and they still maintain that personal attention to detail. They're not the cheapest option, but you get what you pay for — quality materials, experienced crews, and accountability."<br/>
                <span className="text-zinc-400 text-sm">— Multi-Project Customer Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Paul Bange Roofing is one of South Florida's most established roofing companies, with decades of experience serving residential and commercial clients across Broward County and beyond. Their massive review volume across multiple platforms speaks to consistent quality and customer satisfaction. As one of the larger operators in the region, they have the resources to handle complex projects, manage large crews, and maintain strong relationships with material suppliers and manufacturers. This scale allows them to be manufacturer-certified across multiple systems and to offer comprehensive warranties backed by their longevity in the market.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement and repair, commercial roofing systems, multiple roof types (shingle, tile, metal, flat), storm damage assessment and restoration, insurance claim coordination, free inspections and estimates.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              One of South Florida's largest and most established roofers | Decades in business | 4.9 rating across hundreds of reviews | Residential and commercial capability | Manufacturer-certified systems | Strong industry reputation | Comprehensive project management
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Available</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                South Florida
              </span>
            </div>
          </div>

          {/* Section 6: Shield Proof Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Shield Proof Roofing — Broward County, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We specifically chose Shield Proof because of their focus on hurricane-resistant systems. Living in Davie and knowing the wind exposure is real, we wanted specialists in that area. The installation was meticulous and the results are outstanding."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Shield Proof's team explained the different hurricane-resistant options and helped us choose what made sense for our property. The installation was professional and they answered every question thoroughly. Reliable contractor."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Good service, reasonable pricing, and a clear focus on wind-resistant construction. That's the right combination for a Broward County home. They delivered a quality roof and stood behind their work."<br/>
                <span className="text-zinc-400 text-sm">— Broward Homeowner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Shield Proof Roofing is a Broward County contractor with a clear specialization: hurricane-resistant roofing systems. In an HVHZ zone like Davie, this focused expertise matters. They understand the materials, installation methods, and documentation requirements for systems designed to withstand Florida's wind environment. Their reputation for reliable service and good value makes them a solid choice for homeowners prioritizing storm resilience.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Hurricane-resistant roof installation, residential roof replacement and repair, multiple roof types, wind-resistant systems, commercial roofing, free estimates.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              FL State Certified Roofing Contractor | Hurricane-resistant systems specialist | HVHZ-focused expertise | Good reviews from Broward homeowners | Reliable service | Reasonable pricing
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Available</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County, FL
              </span>
            </div>
          </div>

          {/* Section 7: A Licensed Roofing Company */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">A Licensed Roofing Company — Broward County, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.5 out of 5</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed a repair quote quickly and A Licensed Roofing responded within hours. Their pricing was fair and they showed up when they said they would. Simple, professional, no surprises. Good local roofer."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Replaced a section of our roof and the work quality was solid. Fair pricing compared to other quotes we got. They pulled the permit and handled everything professionally. Would call them again."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "A Licensed Roofing is a straightforward, no-nonsense local contractor. They do good work at competitive prices. That's all you really need — no complicated upsell, just honest roofing service."<br/>
                <span className="text-zinc-400 text-sm">— Davie Homeowner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              A Licensed Roofing Company operates with a straightforward philosophy: licensed contractor, quality work, competitive pricing. They've built a solid local reputation in Broward County serving residential homeowners with both repair and replacement work. For homeowners looking for a reliable local operator without premium pricing, they represent good value and responsive service.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof repair and replacement, shingle and tile roofing, free estimates, permit coordination, residential focus.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              FL State Certified Roofing Contractor | Local Broward operator | Competitive pricing | Straightforward service | Good reviews from Davie homeowners | Quick response times
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Available</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County, FL
              </span>
            </div>
          </div>

          {/* Section 8: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Davie</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation. Davie's unique characteristics — larger properties, ranch-style homes, heavy tree coverage, and equestrian/rural character — combined with Florida's HVHZ designation, mandatory permitting, and insurance documentation requirements, make this a more complex buying decision than most homeowners expect.
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">Insurance Work</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you work with insurance adjusters? Can you document storm damage?"</td>
                    <td className="px-4 py-4 text-zinc-300">Critical if filing a claim</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">GC License</td>
                    <td className="px-4 py-4 text-zinc-300">"Are you dual-licensed as a General Contractor?"</td>
                    <td className="px-4 py-4 text-zinc-300">Needed for structural scope beyond the roof surface</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Timeline</td>
                    <td className="px-4 py-4 text-zinc-300">"What is your current lead time from signed contract to build day?"</td>
                    <td className="px-4 py-4 text-zinc-300">Sets realistic expectations</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">References</td>
                    <td className="px-4 py-4 text-zinc-300">"Can you provide 2-3 references from Davie jobs?"</td>
                    <td className="px-4 py-4 text-zinc-300">Verifies local track record</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Storm Chasers vs Established Roofers */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Davie — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Davie gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into South Florida after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Davie before the last storm. They'll be here after the next one.
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

          {/* Storm Chaser Comparison Table */}
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">Follow-Up</td>
                    <td className="px-4 py-4 text-zinc-400">None — they've moved to the next storm</td>
                    <td className="px-4 py-4 text-zinc-300">Warranty calls, inspections, long-term relationship</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Community Ties</td>
                    <td className="px-4 py-4 text-zinc-400">None</td>
                    <td className="px-4 py-4 text-zinc-300">Chambers, affiliations, local reviews going back years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Professional Roofing Job Process */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What a Professional Roofing Job Looks Like From Start to Finish in Davie</h2>

            <h3 className="text-xl font-bold text-white mb-3">Step 1 — Sales & Estimate</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A legitimate contractor inspects before they quote. They measure your roof, assess decking condition, identify existing issues, and present written options — not a verbal pitch. For Davie's older homes, this inspection phase is particularly important: assessing structural integrity, evaluating tree damage risk, and understanding the specific architectural challenges of larger ranch-style properties.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 2 — Pre-Production</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Materials get ordered. Permits get pulled. Broward County requires permits for virtually all roofing work — and your contractor should handle this entirely. You'll receive a timeline for build day and a checklist of what to prepare.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 3 — Build Day</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A professional crew arrives — not one person with a pickup truck. There should be a project manager or point of contact on site or reachable throughout the day. Work follows manufacturer installation specs, not shortcuts. Job site should be protected and cleaned each day. For larger Davie properties, this professional organization is essential.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 4 — Post-Job & Aftercare</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              The contractor walks you through the finished roof before leaving. You receive warranty documentation — both manufacturer and workmanship. A professional company follows up to ensure there are no issues and to complete your wind mitigation report if applicable.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">What to expect from a pro:</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Written estimate before any work begins</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Permit pulled by the contractor (never the homeowner)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Dedicated, trained crew — not a subcontracted pickup team</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Manufacturer-spec installation (verifiable via NOA)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Daily job site cleanup</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Final walkthrough with homeowner</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Warranty documentation in writing</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Wind mitigation report offered post-completion</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Follow-up contact after job completion</span>
              </li>
            </ul>
          </div>

          {/* Section 11: Understanding Roofing Pricing */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Roofing Pricing in Davie — Cheap, Fair, and Overpriced</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The low-bid roofer in Davie is often using the cheapest materials available. In an HVHZ zone, a roof installed below spec is not just a warranty issue — it's a code violation that can affect your insurance coverage and resale value. Cheap quotes feel good on signing day. They get expensive when the first storm hits.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Most of the five companies on this list operate in the middle ground — fair market pricing that reflects real labor costs, proper materials, licensed crews, and overhead from running a legitimate business. Most Davie homeowners are best served here — quality without premium brand markup.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Premium-positioned national franchises often have the fanciest trucks and the highest quotes. Their overhead is real: marketing budgets, call centers, branded materials. For most jobs, the mid-tier established local contractors deliver the same — or better — result for significantly less.
            </p>
          </div>

          {/* Pricing Comparison Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-4 py-3 text-left font-semibold text-white">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Budget Contractor</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Mid-Range Contractor</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Premium Contractor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Materials</td>
                    <td className="px-4 py-4 text-zinc-400">Off-brand, cheapest available</td>
                    <td className="px-4 py-4 text-zinc-300">Manufacturer-certified, spec-grade</td>
                    <td className="px-4 py-4 text-zinc-300">Premium or luxury brands</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Labor</td>
                    <td className="px-4 py-4 text-zinc-400">Solo or inexperienced crews</td>
                    <td className="px-4 py-4 text-zinc-300">Trained crews, proper management</td>
                    <td className="px-4 py-4 text-zinc-300">Large crews, dedicated managers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Warranty</td>
                    <td className="px-4 py-4 text-zinc-400">Minimal or verbal only</td>
                    <td className="px-4 py-4 text-zinc-300">Standard manufacturer + workmanship</td>
                    <td className="px-4 py-4 text-zinc-300">Extended warranties, guarantees</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">HVHZ Compliance</td>
                    <td className="px-4 py-4 text-zinc-400">Often non-compliant</td>
                    <td className="px-4 py-4 text-zinc-300">Fully compliant with NOA</td>
                    <td className="px-4 py-4 text-zinc-300">Fully compliant</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Price Range</td>
                    <td className="px-4 py-4 text-zinc-400">Well below market</td>
                    <td className="px-4 py-4 text-zinc-300">Market rate</td>
                    <td className="px-4 py-4 text-zinc-300">Well above market</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Best For</td>
                    <td className="px-4 py-4 text-zinc-400">Minor repairs only</td>
                    <td className="px-4 py-4 text-zinc-300">Most Davie homeowners</td>
                    <td className="px-4 py-4 text-zinc-300">High-end homes, complex commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 12: Common Red Flags */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Red Flags When Choosing a Roofer in Davie, FL</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-zinc-300">🚩 No Florida State Certified Roofing Contractor license (verify at myfloridalicense.com)</li>
              <li className="text-zinc-300">🚩 Demands full payment before work begins</li>
              <li className="text-zinc-300">🚩 No written estimate or contract before signing</li>
              <li className="text-zinc-300">🚩 Cannot provide proof of liability insurance and workers' comp</li>
              <li className="text-zinc-300">🚩 No verifiable Davie or Broward County office</li>
              <li className="text-zinc-300">🚩 Pressure to decide same day — "this price is only good today"</li>
              <li className="text-zinc-300">🚩 Offers to waive your deductible (insurance fraud under Florida law)</li>
              <li className="text-zinc-300">🚩 Can't explain what NOA compliance means for your roof system</li>
              <li className="text-zinc-300">🚩 No permit mentioned — "we handle it different here"</li>
              <li className="text-zinc-300">🚩 No mention of wind mitigation documentation</li>
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">No permit mentioned</td>
                    <td className="px-4 py-4 text-zinc-300">Unpermitted work can prevent home sale and void warranties</td>
                    <td className="px-4 py-4 text-zinc-300">Require permit documentation in every contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Full upfront payment</td>
                    <td className="px-4 py-4 text-zinc-300">Industry standard is deposit only — balance on completion</td>
                    <td className="px-4 py-4 text-zinc-300">Never pay more than 10-20% before work begins</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">No wind mitigation mention</td>
                    <td className="px-4 py-4 text-zinc-300">Missing an opportunity for meaningful insurance savings</td>
                    <td className="px-4 py-4 text-zinc-300">Ask every roofer specifically about wind mitigation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 13: Roofing Costs */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in Davie — What Should You Expect to Pay?</h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Davie roofing costs run higher than national averages for good reason. HVHZ-compliant installation requires certified materials, licensed crews, and proper permitting — all of which add to the cost but are non-negotiable under Florida Building Code. Davie's larger properties and architectural complexity can also affect pricing.
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
                    <td className="px-4 py-4 text-zinc-300">$9,500 – $24,000</td>
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required; larger Davie roof spans increase cost</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$17,000 – $48,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion in HVHZ; common in older Davie homes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$19,000 – $58,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability; strong insurance benefits; excellent for large spans</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roofing (commercial/residential)</td>
                    <td className="px-4 py-4 text-zinc-300">$8,500 – $27,000</td>
                    <td className="px-4 py-4 text-zinc-300">System type (TPO/PVC/modified) affects pricing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Repair (minor)</td>
                    <td className="px-4 py-4 text-zinc-300">$400 – $3,000</td>
                    <td className="px-4 py-4 text-zinc-300">Leak repair, tile replacement, flashing issues, branch damage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation Inspection</td>
                    <td className="px-4 py-4 text-zinc-300">$85 – $175</td>
                    <td className="px-4 py-4 text-zinc-300">Potential to save $600–$2,500+ annually on insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed mb-4">
              Any quote significantly below these ranges in Davie deserves close scrutiny.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Use our <Link to="/roof-cost-calculator/" className="text-red-500 hover:text-red-400 underline">roof cost calculator</Link> to estimate your project before calling.
            </p>
          </div>

          {/* Section 14: FAQ */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">FAQ — Frequently Asked Questions About Roofing in Davie, FL</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">How much does a new roof cost in Davie?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most residential roof replacements in Davie range from $9,500 to $48,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting add cost that is unavoidable and non-negotiable for code-compliant work. Larger properties and older architectural styles can affect pricing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Do I need a permit for roofing work in Davie / Broward County?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is HVHZ and does it apply to Davie?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  HVHZ stands for High Velocity Hurricane Zone. Davie is in Broward County's inland HVHZ zone. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is a wind mitigation inspection and why does it matter?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  A wind mitigation inspection documents how your roof is built relative to Florida's wind standards. Insurance companies use this report to calculate premium discounts. A strong wind mitigation report can reduce your homeowner's insurance by several hundred to several thousand dollars annually.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is the difference between a roofing license and a general contractor license in Florida?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  A Certified Roofing Contractor (CRC) license authorizes a contractor to install and repair roof systems. A Certified General Contractor (CGC) license authorizes structural, framing, and broader construction scope. A dual-licensed contractor — like All Phase Construction USA — can legally handle both the roof and any structural issues discovered during the project.
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
                <h3 className="text-xl font-bold text-white mb-3">Can a Davie homeowner pull their own roof permit?</h3>
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
            Ready to Get Your Roof Done Right in Davie?
          </h2>

          <div className="text-left max-w-3xl mx-auto mb-8 text-zinc-100">
            <p className="mb-4 leading-relaxed">
              Every company on this list has earned their place — verified licenses, strong reviews, and real local presence. The right choice comes down to your specific situation: roof type, storm damage claim status, property size, and what level of service and documentation you need.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want the contractor who does the most for your long-term protection — roof, structure, and insurance savings — combined with 21 years of local expertise, <strong>All Phase Construction USA</strong> is the call to make.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want a contractor who combines roofing expertise with wind mitigation inspection capability to understand your property's specific needs, <strong>Paletz Roofing & Inspection</strong> is worth every minute of your call.
            </p>

            <p className="mb-4 leading-relaxed">
              If you need one of South Florida's largest and most established roofers with proven track record across hundreds of properties, <strong>Paul Bange Roofing</strong> brings years of expertise and reliability.
            </p>

            <p className="mb-6 leading-relaxed">
              All five answer your phone. All five pull their own permits. All five have been here long enough to stand behind their work.
            </p>

            <p className="font-semibold text-lg text-white">
              Don't wait for the next storm. Get your roof inspected now — before the season makes it urgent.
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
            <h3 className="text-xl font-bold text-white mb-6">Best Roofers in Other South Florida Cities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: '/locations/deerfield-beach/best-roofers-deerfield-beach', label: 'Deerfield Beach' },
                { to: '/locations/fort-lauderdale/best-roofers-fort-lauderdale', label: 'Fort Lauderdale' },
                { to: '/locations/west-palm-beach/best-roofers-west-palm-beach', label: 'West Palm Beach' },
                { to: '/locations/boca-raton/best-roofers-boca-raton', label: 'Boca Raton' },
                { to: '/locations/coral-springs/best-roofers-coral-springs', label: 'Coral Springs' },
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
