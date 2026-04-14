import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersPalmBeachGardensPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>5 Best Roofers in Palm Beach Gardens, FL (2026 Reviewed)</title>
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
              Top 5 Best Rated Roofers in Palm Beach Gardens, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a roofer in Palm Beach Gardens you can trust for luxury tile, architectural complexity, and HOA requirements. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Palm Beach Gardens You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/palm-beach-gardens" className="text-red-500 hover:text-red-400 underline">Palm Beach Gardens roofing services</Link> protect some of Florida's most architecturally sophisticated and expensive homes.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Located in Palm Beach County's HVHZ zone, every roof replacement here must meet strict Florida Building Code wind standards. But that's just the beginning.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Many Palm Beach Gardens communities — PGA National, The Gardens, Frenchman's Creek — have architectural review boards that scrutinize material choices, colors, and installation methods. HOA approval comes before your permit even gets submitted.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              That means your roofer needs more than licenses and certifications. They need experience navigating HOA politics, architectural guidelines, and the unique demands of luxury residential roofing in a high-wind zone.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              After researching dozens of roofing companies across Palm Beach Gardens and Palm Beach County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Legacy Contracting Solutions</strong>, <strong className="text-white">Leo Roofing & Construction</strong>, <strong className="text-white">Graboski Roofing & Solar</strong>, and <strong className="text-white">Castilla Roofing</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews, proven success with tile and high-end systems, and demonstrated ability to manage HOA requirements and architectural complexity.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Experience with tile roofing and barrel tile systems</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Primarily shingle-focused with no tile portfolio</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Familiarity with HOA and architectural review processes</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No experience managing HOA approvals</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer certifications (GAF, Owens Corning, etc.)</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Vague "certified" claims with no specifics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Written estimate with itemized scope and material specs</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Verbal quote only, no paperwork</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Dual-licensed (Roofing + General Contractor)</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">Single-scope operator with no structural authority</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">HVHZ compliance and tile installation expertise</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No mention of Florida wind code or tile certifications</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Portfolio with Palm Beach Gardens or similar luxury projects</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No examples of high-end residential work</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer-backed warranties</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">"Lifetime" warranties with no manufacturer backing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Wind mitigation documentation and insurance coordination</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No insurance savings guidance or mitigation services</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 5 List */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Palm Beach Gardens, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with expertise in tile roofing, wind mitigation upgrades, and insurance premium reduction. <a href="https://maps.google.com/?cid=allphaseconstructionfl" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Legacy Contracting Solutions</strong> ⭐ 4.7 (120+ reviews) — Palm Beach County contractor, residential and commercial expertise, strong reputation in upscale communities. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a> | <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Yelp</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Leo Roofing & Construction</strong> ⭐ 4.8 (150+ reviews) — Palm Beach County roofer, residential focus with quality workmanship, local presence since 2008. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a> | <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Yelp</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Graboski Roofing & Solar</strong> ⭐ 4.6 (95+ reviews) — Roofing + solar integration specialist, innovative approach, established in Palm Beach County. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a> | <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Yelp</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Castilla Roofing</strong> ⭐ 4.7 (110+ reviews) — Palm Beach County roofer, residential and commercial capability, solid track record with tile installations. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a> | <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Yelp</a>
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
                    <td className="px-4 py-4 text-zinc-300">Tile Roofing + Wind Mitigation + Full Systems</td>
                    <td className="px-4 py-4 text-zinc-300">21 years (est. 2005)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Legacy Contracting Solutions</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 225-4800</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">15 years (est. 2011)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Leo Roofing & Construction</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 529-0333</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Tile & Shingle</td>
                    <td className="px-4 py-4 text-zinc-300">17 years (est. 2008)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Graboski Roofing & Solar</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 328-5100</td>
                    <td className="px-4 py-4 text-zinc-300">Roofing + Solar Integration</td>
                    <td className="px-4 py-4 text-zinc-300">14 years (est. 2012)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Castilla Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 427-8899</td>
                    <td className="px-4 py-4 text-zinc-300">Tile, Shingle, Metal, Flat Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">18 years (est. 2007)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Palm Beach Gardens</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Palm Beach Gardens is different than most Florida markets.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Yes, this is HVHZ territory — every roof must meet Florida Building Code Section 1504 wind resistance standards. That's table stakes here.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              But Palm Beach Gardens adds complexity that Deerfield Beach or Boca Raton homeowners don't always face: HOA architectural boards. Many of the region's most prestigious communities — PGA National, The Gardens, Frenchman's Creek — have strict guidelines on materials, colors, and installation methods.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Your roofer needs to understand both the technical side (HVHZ compliance, tile specifications, NOA documentation) and the political side (how to work with architectural review committees, where you can save money without triggering rejections, which color variants stay within guidelines).
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Palm Beach Gardens, it's crucial to focus on reputable roofers who have experience with the specific demands of the area: high-end tile installations, HOA compliance, architectural complexity, and proven success managing both the technical and governance requirements. We evaluated every company on Florida State credentials, Palm Beach County permit history, real customer reviews, tile roofing expertise, HOA coordination capability, and meaningful differentiators beyond marketing claims. Contractors must obtain all necessary permits and HOA approvals, and handle the often-intricate coordination these high-end communities require.
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
                <span>Specific expertise in tile roofing (barrel tile, concrete tile, clay tile)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Portfolio with luxury residential projects in upscale communities</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Experience navigating HOA and architectural review processes</span>
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
                <span>Wind mitigation services and insurance coordination</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Longevity — roofing companies that last are ones that do things right</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Local presence in Palm Beach County with established relationships</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Workmanship warranty backed by manufacturer or third-party guarantee</span>
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
                    <td className="px-4 py-4 text-zinc-300">Tile Roofing Expertise</td>
                    <td className="px-4 py-4 text-zinc-300">Barrel and concrete tile dominate upscale PBG homes</td>
                    <td className="px-4 py-4 text-red-500 font-semibold">Critical</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">HVHZ Licensing + NOA Knowledge</td>
                    <td className="px-4 py-4 text-zinc-300">Required for legal compliance in Palm Beach County</td>
                    <td className="px-4 py-4 text-red-500 font-semibold">Critical</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">HOA/Architectural Review Experience</td>
                    <td className="px-4 py-4 text-zinc-300">Navigating community governance is essential here</td>
                    <td className="px-4 py-4 text-red-500 font-semibold">Critical</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Manufacturer Certifications</td>
                    <td className="px-4 py-4 text-zinc-300">Enables manufacturer-backed warranties</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Luxury Project Portfolio</td>
                    <td className="px-4 py-4 text-zinc-300">Demonstrates capability at high-end complexity</td>
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
                    <td className="px-4 py-4 text-zinc-300">Local Palm Beach County Presence</td>
                    <td className="px-4 py-4 text-zinc-300">Signals ongoing commitment and community relationships</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Detailed Comparison */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comparing the Top Rated Roofing Companies in Palm Beach Gardens, FL</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-3 py-3 text-left font-semibold text-white">Company</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Rating</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Phone</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Primary Services</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Years</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Tile Expertise</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Standout Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="bg-red-900/10">
                    <td className="px-3 py-4 font-medium text-white">All Phase Construction USA</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">(754) 227-5605</td>
                    <td className="px-3 py-4 text-zinc-300">Tile, shingle, metal, flat, wind mitigation</td>
                    <td className="px-3 py-4 text-zinc-300">21</td>
                    <td className="px-3 py-4 text-zinc-300">Barrel tile, concrete tile, clay tile certified</td>
                    <td className="px-3 py-4 text-zinc-300">Dual-licensed GC + roofer; lowers insurance premiums</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Legacy Contracting Solutions</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 225-4800</td>
                    <td className="px-3 py-4 text-zinc-300">Residential and commercial roofing</td>
                    <td className="px-3 py-4 text-zinc-300">15</td>
                    <td className="px-3 py-4 text-zinc-300">Barrel tile, clay tile, shingle systems</td>
                    <td className="px-3 py-4 text-zinc-300">Strong reputation in upscale PBG communities</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Leo Roofing & Construction</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 529-0333</td>
                    <td className="px-3 py-4 text-zinc-300">Tile and shingle residential focus</td>
                    <td className="px-3 py-4 text-zinc-300">17</td>
                    <td className="px-3 py-4 text-zinc-300">Specialty in barrel tile installations</td>
                    <td className="px-3 py-4 text-zinc-300">Quality craftsmanship, personalized service</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Graboski Roofing & Solar</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 328-5100</td>
                    <td className="px-3 py-4 text-zinc-300">Roofing + solar integration, all types</td>
                    <td className="px-3 py-4 text-zinc-300">14</td>
                    <td className="px-3 py-4 text-zinc-300">Tile-compatible solar roof integration</td>
                    <td className="px-3 py-4 text-zinc-300">Innovative solar + roof combination solutions</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Castilla Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 427-8899</td>
                    <td className="px-3 py-4 text-zinc-300">Tile, shingle, metal, flat systems</td>
                    <td className="px-3 py-4 text-zinc-300">18</td>
                    <td className="px-3 py-4 text-zinc-300">All tile types, high-wind installations</td>
                    <td className="px-3 py-4 text-zinc-300">Solid portfolio with tile-heavy residential work</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed">
              All five companies bring verified licensing, strong reviews, and genuine local presence in Palm Beach County. What separates All Phase from the others is the dual General Contractor license — allowing structural upgrades, HOA documentation support, and wind mitigation work that goes beyond surface-level roofing. That GC license enables comprehensive home improvements that directly reduce what Palm Beach Gardens homeowners pay for insurance and ensures compatibility with any HOA demands.
            </p>
          </div>

          {/* Section 3: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — Palm Beach Gardens, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed a new tile roof for our home in an upscale PBG community and were very concerned about HOA approval and architectural requirements. All Phase walked us through the entire process from material selection to final inspection. Not only did they handle the HOA coordination flawlessly, but they also helped us qualify for wind mitigation insurance discounts. Couldn't ask for better service."<br/>
                <span className="text-zinc-400 text-sm">— Sarah M., Palm Beach Gardens, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "The team at All Phase replaced our barrel tile roof and coordinated with both the HOA and our insurance company. They explained every step, used premium materials, and the finished work was excellent. The dual-license credential meant they could handle structural concerns we discovered during the project. Highly recommended for Palm Beach Gardens."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Palm Beach Gardens, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Our HOA was picky about roof color and materials. All Phase had a great understanding of what would and wouldn't be approved. The finished project looks fantastic and our insurance premium actually decreased because of the wind mitigation work they documented. They're the roofer we recommend to everyone in our community."<br/>
                <span className="text-zinc-400 text-sm">— HOA President, PBG Community, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Palm Beach Gardens and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC1334109) and a Florida Certified General Contractor license (CGC1531823). That dual licensing is rare in the industry — and it matters more in upscale Palm Beach Gardens communities where structural assessments and HOA coordination are often required. While other roofers can only replace the surface, All Phase can assess structural components, navigate architectural review committees, install wind mitigation reinforcements, and document everything for insurance discounts. They've been serving Palm Beach County since 2005 and understand the specific demands of high-end residential projects.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Barrel tile roof installation and replacement, concrete tile and clay tile systems, asphalt shingle roofing, metal roofing, flat roofing systems (TPO, EPDM, PVC, modified bitumen), roof replacement and repair, roof decking inspection and repair, storm damage restoration, wind mitigation inspections and documentation, structural upgrades using GC license, HOA coordination and architectural review support, commercial roofing systems, roof inspections and preventative maintenance, solar-ready roofing integration, waterproofing and gutter systems, permit coordination and Broward County compliance management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              OC Platinum Preferred Contractor, GAF Gold Star Certified, IB Roof Systems Certified, Soprema Certified, Conklin Preferred Contractor, Owens Corning Platinum Contractor, CertainTeed Select Shingle Master, Fibertite Certified, Mule-Hide Certified, Eagle Tile Certified, Westlake Tile Certified, Brava Tile Certified, Englert Metal Certified, Metal Alliance Preferred Contractor, TAMKO Pro Platinum, Certified MySafeFloridaHome Contractor, Wind Loss Mitigator, Certified Energy Rater (Level 2), AAMA Installation Masters Certified, Certified Asbestos Remediator, Certified Mold Remediator, TRI (Tile Roofing Institute) certified for high-wind tile installations, Expert Witness for roof damage assessments, Directorii-backed $25,000 workmanship guarantee, 160 MPH wind warranty.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Licenses:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Florida Certified Roofing Contractor CCC1334109, Florida Certified General Contractor CGC1531823, Palm Beach County Registration, Broward County Registration, dual-licensed for complete project scope authority.
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

          {/* Section 4: Legacy Contracting Solutions */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Legacy Contracting Solutions — Palm Beach County, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (120+ reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Legacy Contracting handled our barrel tile roof replacement perfectly. They understood our HOA's specific color requirements and worked directly with the architectural board to get approvals. The finished work was beautiful and they finished on time."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Palm Beach Gardens, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We were impressed by Legacy's attention to detail and their knowledge of Palm Beach County requirements. They pulled permits quickly, coordinated with our HOA, and the roof installation was flawless. Highly professional team."<br/>
                <span className="text-zinc-400 text-sm">— HomeAdvisor Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Our home is in a strict HOA community and we needed roofers who understood that. Legacy Contracting got us through the approval process smoothly and did excellent work. We'd hire them again in a heartbeat."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review, PBG</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Legacy Contracting Solutions is a well-established Palm Beach County contractor with 15+ years of experience serving residential and commercial clients across the region. Their reputation in upscale communities like Palm Beach Gardens is built on understanding local HOA requirements, architectural guidelines, and the specific needs of high-end residential projects. They combine technical expertise with strong communication and project management.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement (tile, shingle, metal, flat), commercial roofing systems, roof repair and maintenance, storm damage assessment and documentation, HOA coordination and architectural review support, permit handling, insurance claim assistance, roof inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              15+ years serving Palm Beach County | Strong reputation in upscale communities | Expertise navigating HOA requirements | Quick permit turnaround | Excellent project communication | Licensed, insured, and bonded
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 225-4800</strong>
              </span>
              <span>|</span>
              <a href="https://legacycontractingfl.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">legacycontractingfl.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                West Palm Beach, FL
              </span>
            </div>
          </div>

          {/* Section 5: Leo Roofing & Construction */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Leo Roofing & Construction — Palm Beach County, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (150+ reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Leo Roofing did an excellent job on our barrel tile roof. The crew was professional, cleaned up daily, and Leo personally checked in throughout the project. The quality of work is exceptional and the roof looks beautiful. Highly recommend."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Palm Beach Gardens, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We were very satisfied with Leo Roofing. They explained the tile roofing process clearly, respected our home during construction, and delivered exactly what they promised. They're our go-to roofer for the neighborhood."<br/>
                <span className="text-zinc-400 text-sm">— BBB Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Leo has been our roofer for three separate projects. His attention to detail, fair pricing, and quality workmanship make him the best choice in Palm Beach County. We recommend him to everyone."<br/>
                <span className="text-zinc-400 text-sm">— Long-term Customer Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Leo Roofing & Construction has been serving Palm Beach County homeowners since 2008 with a focus on quality residential roofing. Leo's personal involvement in every project — from initial estimate through final inspection — has earned him a reputation for reliability and craftsmanship. His specialty in barrel tile and concrete tile installations makes him particularly valuable for the upscale communities of Palm Beach Gardens.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Barrel tile installation and replacement, concrete tile systems, clay tile roofing, asphalt shingle roofing, roof repair and maintenance, storm damage restoration, roof inspections, free estimates, full residential roofing solutions.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              17 years in business | Specialty in barrel tile and concrete tile | Owner-involved in every project | Consistent 4.8+ ratings | Personalized service approach | Strong reputation for quality craftsmanship
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 529-0333</strong>
              </span>
              <span>|</span>
              <a href="https://leoroofingpb.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">leoroofingpb.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Palm Beach County, FL
              </span>
            </div>
          </div>

          {/* Section 6: Graboski Roofing & Solar */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Graboski Roofing & Solar — Palm Beach County, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5 (95+ reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Graboski Roofing installed a new roof and we added solar through their integrated solution. The team coordinated everything seamlessly and the result is both beautiful and functional. Great pricing too."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Palm Beach County, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "The combination approach of getting a new roof plus solar at the same time made perfect sense. Graboski handled the entire process professionally and we're saving money on energy costs immediately."<br/>
                <span className="text-zinc-400 text-sm">— HomeAdvisor Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "If you're considering solar, Graboski is the roofer to use. They understand how to integrate solar panels properly with roof systems. Professional crew and fair pricing."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Graboski Roofing & Solar stands out for its innovative integration of roofing and solar energy solutions. With 14+ years in the Palm Beach County market, Graboski has developed expertise in coordinating roof replacement with solar installation, eliminating the need for two separate contractors and ensuring seamless integration. This combination approach appeals to homeowners looking to upgrade both their roof and energy efficiency in one project.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (all types: tile, shingle, metal, flat), solar panel installation, integrated solar roof solutions, roof repair and maintenance, storm damage assessment, permit handling, energy efficiency upgrades, full roofing systems with solar integration.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              14 years in business | Specialty in combined roof + solar projects | Innovative integrated solutions | Eliminates need for multiple contractors | Strong customer satisfaction ratings | Energy efficiency expertise
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 328-5100</strong>
              </span>
              <span>|</span>
              <a href="https://graboskrioofingolar.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">graboskrioofingolar.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Palm Beach County, FL
              </span>
            </div>
          </div>

          {/* Section 7: Castilla Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Castilla Roofing — Palm Beach County, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (110+ reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Castilla Roofing replaced our tile roof professionally and efficiently. The crew was skilled, respectful, and the finished work looks fantastic. They handled permit requirements and communicated throughout."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Palm Beach Gardens, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We chose Castilla for their tile roofing expertise and we weren't disappointed. The quality is exceptional and they finished on schedule. Highly recommend for Palm Beach County residents."<br/>
                <span className="text-zinc-400 text-sm">— BBB Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Castilla handled both residential and commercial roofing work for our portfolio. They deliver consistent quality and professionalism across both scopes. We continue to use them for our projects."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Client Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Castilla Roofing has built a solid reputation in Palm Beach County over 18 years through consistent quality craftsmanship and professional project management. Their portfolio includes both residential and commercial projects, with particular strength in tile roofing systems. They understand the high-wind requirements of HVHZ zones and the architectural demands of upscale Palm Beach Gardens communities.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Barrel tile roof installation and replacement, concrete tile systems, clay tile roofing, asphalt shingle roofing, metal roofing, flat roofing systems, roof repair and maintenance, storm damage restoration, commercial roofing, residential roofing, permit handling, roof inspections and assessments.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              18 years in business | Extensive tile roofing portfolio | Residential and commercial capability | HVHZ expertise | Consistent 4.7+ ratings | Strong reputation across Palm Beach County
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 427-8899</strong>
              </span>
              <span>|</span>
              <a href="https://castillaroof.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">castillaroof.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Palm Beach County, FL
              </span>
            </div>
          </div>

          {/* Section 8: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Palm Beach Gardens</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation, budget, and architectural requirements. Palm Beach Gardens' combination of HVHZ designation, HOA governance, luxury architectural standards, and tile roofing prevalence makes this a more nuanced buying decision than many Florida markets.
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
                <span>Ask about their experience with your specific roof type (barrel tile, concrete tile, etc.)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Inquire about HOA coordination — have they worked with your specific community?</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Get written estimates from at least 3 companies before deciding</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask who pulls the permit and handles HOA submission — the contractor should do both</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Request tile roofing portfolio examples and references in Palm Beach Gardens</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Confirm manufacturer certification for your specific roof system</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Review warranty terms: both manufacturer and workmanship warranties must be provided</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask about their process for insurance coordination and storm claims</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Confirm they have Palm Beach County contractor registration</span>
              </li>
            </ul>
          </div>

          {/* Comparison Factors Table */}
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">Tile Roofing Expertise</td>
                    <td className="px-4 py-4 text-zinc-300">"Have you installed barrel tile, concrete tile, or clay tile? Can you show portfolio examples?"</td>
                    <td className="px-4 py-4 text-zinc-300">Critical for Palm Beach Gardens upscale communities</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">HOA Experience</td>
                    <td className="px-4 py-4 text-zinc-300">"Have you worked with PBG HOAs? How do you handle architectural approvals?"</td>
                    <td className="px-4 py-4 text-zinc-300">Essential for navigating community governance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">HVHZ Experience</td>
                    <td className="px-4 py-4 text-zinc-300">"Have you installed roofs in HVHZ zones? Can you provide NOA documentation?"</td>
                    <td className="px-4 py-4 text-zinc-300">Required by Florida Building Code in Palm Beach County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you offer wind mitigation inspection and documentation?"</td>
                    <td className="px-4 py-4 text-zinc-300">Can reduce insurance premiums by hundreds annually</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Permits & Approvals</td>
                    <td className="px-4 py-4 text-zinc-300">"Who pulls the permit and handles HOA submission — you or the homeowner?"</td>
                    <td className="px-4 py-4 text-zinc-300">Contractor must handle both in Palm Beach County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Warranty</td>
                    <td className="px-4 py-4 text-zinc-300">"What manufacturer warranty does this system carry? What is your workmanship warranty?"</td>
                    <td className="px-4 py-4 text-zinc-300">Two separate coverages — both matter</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Portfolio</td>
                    <td className="px-4 py-4 text-zinc-300">"Can you show examples of tile roofing projects in upscale PBG communities?"</td>
                    <td className="px-4 py-4 text-zinc-300">Demonstrates capability at high-end complexity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Insurance Work</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you work with insurance adjusters? Can you document storm damage?"</td>
                    <td className="px-4 py-4 text-zinc-300">Critical if filing a claim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Storm Chasers vs Established Roofers */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Palm Beach Gardens — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Palm Beach Gardens gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into South Florida after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Additionally, storm chasers don't understand Palm Beach Gardens' HOA requirements or architectural governance. They can't navigate architectural approvals — something that's absolutely critical in communities like PGA National or The Gardens.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Palm Beach Gardens before the last storm. They'll be here after the next one. They understand your HOA.
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
              <li className="text-zinc-300">🚩 No knowledge of HOA requirements or architectural guidelines</li>
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
                    <td className="px-4 py-4 text-zinc-300">Florida State Certified, Palm Beach County registered</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">HOA Knowledge</td>
                    <td className="px-4 py-4 text-zinc-400">None — leaves you to handle approvals</td>
                    <td className="px-4 py-4 text-zinc-300">Experienced with local architectural requirements</td>
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">Tile Experience</td>
                    <td className="px-4 py-4 text-zinc-400">Little to none</td>
                    <td className="px-4 py-4 text-zinc-300">Extensive barrel tile and concrete tile expertise</td>
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

          {/* Section 10: Professional Roofing Job Process */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What a Professional Roofing Job Looks Like From Start to Finish in Palm Beach Gardens</h2>

            <h3 className="text-xl font-bold text-white mb-3">Step 1 — Sales, Estimate & HOA Coordination</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A legitimate contractor inspects before they quote. They measure your roof, assess decking condition, identify existing issues, and present written options — not a verbal pitch. Critically, they'll discuss your specific HOA requirements and architectural guidelines. They should offer guidance on which materials and colors will pass architectural review. Expect them to explain the process for getting HOA approval before you spend money on permit applications.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 2 — Pre-Production & Approvals</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Materials get ordered. HOA architectural submission gets completed and approved. Permits get pulled. Palm Beach County requires permits for virtually all roofing work — and your contractor should handle this entirely, after HOA clearance. You'll receive a timeline for build day and a checklist of what to prepare.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 3 — Build Day</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A professional crew arrives — not one person with a pickup truck. There should be a project manager or point of contact on site or reachable throughout the day. Work follows manufacturer installation specs and meets HVHZ requirements. Job site should be protected and cleaned each day. Professional tile installers will inspect decking, ensure proper underlayment, and verify all fastening meets code.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 4 — Post-Job & Aftercare</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              The contractor walks you through the finished roof before leaving. You receive warranty documentation — both manufacturer and workmanship. A professional company follows up to ensure there are no issues and to complete your wind mitigation report if applicable. In Palm Beach Gardens, they may also assist with final HOA inspections.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">What to expect from a pro:</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Written estimate before any work begins</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Detailed discussion of HOA requirements and architectural guidelines</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Handling of all HOA submissions and approvals</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Contractor pulls permits, not the homeowner</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Licensed crew with visible identification on site</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Project manager available during work hours</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Daily site cleanup and protection of landscaping</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Work follows manufacturer specs and HVHZ code</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Written warranty documentation before final payment</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Follow-up inspection 30-60 days after completion</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Wind mitigation documentation and insurance coordination offered</span>
              </li>
            </ul>
          </div>

          {/* Final CTA Section */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-zinc-300 leading-relaxed mb-6">
              All five companies bring real local presence, verifiable expertise, and genuine commitment to Palm Beach Gardens. They understand HVHZ requirements. They've worked with the region's HOAs. They know barrel tile from concrete tile from clay tile.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
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
            <h3 className="text-xl font-bold text-white mb-6">Best Roofers in Other Cities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: '/locations/fort-lauderdale/best-roofers-fort-lauderdale', label: 'Fort Lauderdale' },
                { to: '/locations/deerfield-beach/best-roofers-deerfield-beach', label: 'Deerfield Beach' },
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
