import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersRoyalPalmBeachPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>Top 5 Best Roofers in Royal Palm Beach, FL (2026 Reviewed)</title>
        <script type="application/ld+json">
          {JSON.stringify([
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
                  "name": "Royal Palm Beach",
                  "item": "https://allphaseconstructionfl.com/locations/royal-palm-beach"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Best Roofers in Royal Palm Beach",
                  "item": "https://allphaseconstructionfl.com/locations/royal-palm-beach/best-roofers-royal-palm-beach"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a new roof cost in Royal Palm Beach?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most residential roof replacements in Royal Palm Beach range from $8,500 to $42,000+ depending on roof type, home size, and materials. HVHZ compliance is required in Palm Beach County, which adds unavoidable cost that is non-negotiable for code-compliant work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for roofing work in Royal Palm Beach?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — virtually all roofing work in Palm Beach County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is HVHZ and does it apply to Royal Palm Beach?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HVHZ stands for High Velocity Hurricane Zone. Royal Palm Beach is located in Palm Beach County, which is designated HVHZ. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA)."
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
                  "name": "Can a Royal Palm Beach homeowner pull their own roof permit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. In Palm Beach County, roofing permits must be pulled by a licensed contractor, not the homeowner. Any contractor who asks you to pull the permit is either unlicensed or attempting to avoid accountability for the work."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "All Phase Construction USA",
              "telephone": "(754) 227-5605",
              "url": "https://allphaseconstructionfl.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1700 E Atlantic Blvd, Suite 5",
                "addressLocality": "Pompano Beach",
                "addressRegion": "FL",
                "postalCode": "33060",
                "addressCountry": "US"
              },
              "description": "Dual-licensed roofing and general contractor serving Royal Palm Beach and Palm Beach County since 2005. Specializing in HVHZ-compliant roof systems, wind mitigation upgrades, and insurance premium reduction.",
              "areaServed": ["Royal Palm Beach", "Palm Beach County", "West Palm Beach"]
            }
          ])}
        </script>
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
              Top 5 Best Rated Roofers in Royal Palm Beach, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a roofer in Royal Palm Beach you can trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records serving the Royal Palm Beach community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Royal Palm Beach You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/royal-palm-beach" className="text-red-500 hover:text-red-400 underline">Royal Palm Beach roofing services</Link> protect homes in one of Palm Beach County's most family-oriented inland communities.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Royal Palm Beach is inland, away from salt-air corrosion that plagues coastal cities, but directly in Palm Beach County's HVHZ zone. That means every roof replacement here must meet strict Florida Building Code wind standards to protect against hurricane-force winds.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Many homes in Royal Palm Beach were built in the 1980s and 1990s — meaning they're approaching or past their first roof replacement cycle. Combined with the cost-conscious homeowner culture and strict HOA governance in planned communities, finding a contractor who balances quality with fair pricing becomes critical.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              After researching dozens of roofing companies serving Royal Palm Beach and Palm Beach County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Ranger Roofing Corporation</strong>, <strong className="text-white">Hurricane Pro Roofing</strong>, <strong className="text-white">Storm Roofing Inc.</strong>, and <strong className="text-white">Neal Roofing & Waterproofing</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews, and a proven track record of protecting Royal Palm Beach homes with compliance-first roofing standards.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Royal Palm Beach/Palm Beach County office</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Royal Palm Beach, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with wind mitigation upgrades that lower your insurance premium. <a href="https://maps.google.com/?cid=allphaseconstructionfl" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Ranger Roofing Corporation</strong> ⭐ 4.7 (150+ reviews) — Established Palm Beach County contractor with 25+ years of residential and commercial roofing expertise. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Hurricane Pro Roofing</strong> ⭐ 4.8 (180+ reviews) — South Florida storm and hurricane damage specialist with rapid emergency response. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Storm Roofing Inc.</strong> ⭐ 4.6 (120+ reviews) — Palm Beach County residential roofing contractor with competitive pricing and quick turnarounds. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Neal Roofing & Waterproofing</strong> ⭐ 4.7 (140+ reviews) — Specialist in roofing and waterproofing with decades of Palm Beach County experience. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
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
                    <td className="px-4 py-4 font-medium text-white">Ranger Roofing Corporation</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 625-4455</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">26 years (est. 2000)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Hurricane Pro Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 847-9902</td>
                    <td className="px-4 py-4 text-zinc-300">Storm Damage + Emergency Response</td>
                    <td className="px-4 py-4 text-zinc-300">18 years (est. 2008)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Storm Roofing Inc.</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 734-2009</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Roof Replacement + Repair</td>
                    <td className="px-4 py-4 text-zinc-300">15 years (est. 2011)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Neal Roofing & Waterproofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(561) 582-1515</td>
                    <td className="px-4 py-4 text-zinc-300">Roofing + Waterproofing Specialist</td>
                    <td className="px-4 py-4 text-zinc-300">32 years (est. 1994)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Royal Palm Beach</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Royal Palm Beach isn't like choosing in most parts of the country.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Royal Palm Beach is in an inland area of Palm Beach County — but that doesn't exempt it from HVHZ requirements. As an inland community, it avoids the salt-air corrosion that damages coastal roofs, but faces full hurricane wind exposure. Every roof must meet Florida Building Code Section 1504 wind resistance standards.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              A roofer who doesn't understand Notice of Acceptance (NOA) requirements or HVHZ installation specs is a liability — not a solution.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Royal Palm Beach, it's crucial to focus on reputable contractors known for quality craftsmanship, fair pricing, and the ability to address a wide range of roofing needs. Royal Palm Beach homeowners tend to be budget-conscious and value-oriented — so we prioritized contractors who deliver compliance-first work at mid-range pricing. We evaluated every company on credentials, local track record, real customer reviews, and meaningful differentiators. Contractors must obtain all necessary permits and post them on the property during roofing projects, as required by Palm Beach County.
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
                <span>Residential AND commercial capability where offered</span>
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
                    <td className="px-4 py-4 text-zinc-300">Required for legal compliance in Palm Beach County</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Comparing the Top Rated Roofing Companies in Royal Palm Beach, FL</h2>
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
                    <th className="px-3 py-3 text-left font-semibold text-white">Key Certifications</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Standout Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="bg-red-900/10">
                    <td className="px-3 py-4 font-medium text-white">All Phase Construction USA</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">(754) 227-5605</td>
                    <td className="px-3 py-4 text-zinc-300">Full replacement, repair, wind mitigation, commercial</td>
                    <td className="px-3 py-4 text-zinc-300">21</td>
                    <td className="px-3 py-4 text-zinc-300">OC Platinum, GAF Gold, IB, Soprema, TRI</td>
                    <td className="px-3 py-4 text-zinc-300">Dual-licensed GC + roofer; insurance premium reduction</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Ranger Roofing Corporation</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 625-4455</td>
                    <td className="px-3 py-4 text-zinc-300">Residential and commercial, all roof types</td>
                    <td className="px-3 py-4 text-zinc-300">26</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, GAF, CertainTeed</td>
                    <td className="px-3 py-4 text-zinc-300">Long track record in Palm Beach County</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Hurricane Pro Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 847-9902</td>
                    <td className="px-3 py-4 text-zinc-300">Storm damage, emergency response, full repairs</td>
                    <td className="px-3 py-4 text-zinc-300">18</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, Storm specialist</td>
                    <td className="px-3 py-4 text-zinc-300">24/7 emergency hurricane damage response</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Storm Roofing Inc.</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 734-2009</td>
                    <td className="px-3 py-4 text-zinc-300">Residential roof replacement, repair, maintenance</td>
                    <td className="px-3 py-4 text-zinc-300">15</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, GAF</td>
                    <td className="px-3 py-4 text-zinc-300">Quick turnarounds, competitive pricing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Neal Roofing & Waterproofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(561) 582-1515</td>
                    <td className="px-3 py-4 text-zinc-300">Roofing, waterproofing, coating systems</td>
                    <td className="px-3 py-4 text-zinc-300">32</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, Waterproofing specialist</td>
                    <td className="px-3 py-4 text-zinc-300">Specialized waterproofing expertise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed">
              All five companies bring verified licensing, strong reviews, and genuine local presence. What separates All Phase from the others is the dual General Contractor license — allowing structural upgrades, not just surface roofing. That GC license enables wind mitigation documentation that directly reduces what Royal Palm Beach homeowners pay for insurance.
            </p>
          </div>

          {/* Section 3: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — Royal Palm Beach's #1 Pick</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "All Phase did an excellent job on our roof replacement. From the initial inspection to final completion, they were professional and thorough. The wind mitigation report they provided actually lowered our insurance premiums by $400 annually. That alone paid for some of their premium pricing."<br/>
                <span className="text-zinc-400 text-sm">— David M., Royal Palm Beach, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We were impressed by their dual-license approach. When they discovered some minor structural issues during the roof replacement, they could handle them directly without bringing in a general contractor. That saved us time and hassle. Very professional team."<br/>
                <span className="text-zinc-400 text-sm">— Maria & Jorge C., Royal Palm Beach, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "As a property manager overseeing multiple Royal Palm Beach properties, I've used All Phase multiple times. They consistently deliver on time, their crews are clean and professional, and they handle the permit process seamlessly. We recommend them to every property owner in the community."<br/>
                <span className="text-zinc-400 text-sm">— PMC Property Management Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Royal Palm Beach and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC1334109) and a Florida Certified General Contractor license (CGC1531823). That dual licensing is rare in the industry — and it matters more than most homeowners realize. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, and document everything for insurance discounts. They are also active community members — holding chamber memberships across Palm Beach County and volunteering with local organizations. This is not a company that showed up after a storm. They've been building trust in this community for over two decades.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>), full re-roofing services, roof decking inspection and repair, roof repair and emergency leak response, storm damage restoration, <Link to="/locations/royal-palm-beach" className="text-red-500 hover:text-red-400 underline">wind mitigation inspections</Link> and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, Conklin, IB, Soprema), roof inspections, preventative maintenance programs, solar-ready roofing integration, waterproofing and gutter systems, permit coordination and inspection management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Owens Corning Platinum Preferred Contractor, GAF Gold Certified, IB Roof Systems Certified, Soprema Certified, TAMKO Pro Platinum, CertainTeed Select Shingle Master, TRI (Tile Roofing Institute) Certified, Fibertite Certified, Mule-Hide Certified, Conklin Preferred Contractor, MySafeFloridaHome Certified Contractor, Wind Loss Mitigator, Certified Energy Rater (Level 2), Expert Witness for roof damage assessments, Directorii-backed workmanship guarantee, 160+ MPH wind warranty.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Community Affiliations:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Palm Beach County Chamber of Commerce, Broward County Chamber of Commerce, Coral Springs Chamber of Commerce, Local volunteer organizations and community initiatives.
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

          {/* Section 4: Ranger Roofing Corporation */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Ranger Roofing Corporation — Royal Palm Beach Established Leader</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (150+ reviews) | 26 Years of Service</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Been in Royal Palm Beach for 18 years and Ranger Roofing has done work for multiple neighbors. The consistency is impressive — they show up, they're professional, and the work holds up. I trust them completely."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Royal Palm Beach, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Called Ranger after a storm damaged our tile roof. They came out quickly, assessed the damage, worked with our insurance company, and got us back in business in three weeks. True professional organization."<br/>
                <span className="text-zinc-400 text-sm">— Insurance Claim Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "My HOA board hired Ranger for a complex multi-building reroof project. They managed the timeline perfectly, communicated with residents throughout, and left every property looking pristine. Would hire again without hesitation."<br/>
                <span className="text-zinc-400 text-sm">— HOA Board Member Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Ranger Roofing Corporation has been an established presence in Palm Beach County for over 25 years. Founded on principles of reliability and craft, Ranger has built a reputation for handling both residential and commercial projects with equal professionalism. They're known for their straightforward communication, fair pricing, and ability to work with both private homeowners and property management companies. Ranger brings the kind of steady, no-nonsense approach that appeals to Royal Palm Beach's practical, community-minded homeowners.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof replacement, asphalt shingle installation, tile roofing, metal roofing, flat roof systems, roof repair and maintenance, storm damage assessment and repair, insurance claim coordination, free inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              26+ years in business | Strong BBB rating | Extensive residential and commercial portfolio | Expert in working with insurance companies | Straightforward pricing model | Multi-generational family operation
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 625-4455</strong>
              </span>
              <span>|</span>
              <a href="https://rangerroofingcorp.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">rangerroofingcorp.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                4800 Broadway, West Palm Beach, FL 33407
              </span>
            </div>
          </div>

          {/* Section 5: Hurricane Pro Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Hurricane Pro Roofing — South Florida Storm Specialist</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (180+ reviews) | 24/7 Emergency Response</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "During the hurricane, we couldn't reach anyone. But Hurricane Pro answered their emergency line at midnight, came out at 3 AM to secure the roof temporarily, and had us scheduled for full repairs within two days. That's what emergency response means."<br/>
                <span className="text-zinc-400 text-sm">— Emergency Damage Review, Royal Palm Beach</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We had multiple storm damage jobs. Hurricane Pro showed up in person (not just an estimator), understood the damage better than our insurance company's adjuster, and guided us through the entire claim process. Their expertise saved us thousands."<br/>
                <span className="text-zinc-400 text-sm">— Insurance Claim Assistance Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "These guys live and breathe hurricane prep and recovery. They know the building codes, they know the insurance game, and they deliver quality under pressure. If a storm's coming, you want them on your team."<br/>
                <span className="text-zinc-400 text-sm">— Property Manager Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Hurricane Pro Roofing has been protecting South Florida homes and businesses through storm season since 2008. Specializing in hurricane damage assessment, emergency stabilization, and restoration, Hurricane Pro is built for crisis work. They maintain 24/7 emergency response teams, work directly with insurance adjusters, and have the expertise to navigate both the damage assessment process and the permitting requirements of post-storm reconstruction. For Royal Palm Beach homeowners worried about hurricane season, Hurricane Pro represents peace of mind.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              24/7 emergency storm damage response, temporary roof stabilization, full storm damage assessment and repair, insurance claim coordination and documentation, complete roof replacement, roof inspections, preventative hurricane preparations, commercial and residential damage restoration.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              24/7 emergency hotline | Same-day emergency response available | Insurance claim specialists on staff | Storm damage expertise unmatched in the region | Rapid documentation for claims | Extensive post-hurricane project portfolio
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 847-9902</strong>
              </span>
              <span>|</span>
              <a href="https://hurricaneproroofing.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">hurricaneproroofing.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                3400 Northlake Blvd, West Palm Beach, FL 33403
              </span>
            </div>
          </div>

          {/* Section 6: Storm Roofing Inc. */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Storm Roofing Inc. — Affordable Residential Specialist</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5 (120+ reviews) | Budget-Friendly Pricing</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Got three quotes. Storm Roofing was the middle price — not the cheapest, but fair. The job was clean, they finished exactly when promised, and the roof looks great. Good value for the money."<br/>
                <span className="text-zinc-400 text-sm">— Value-Conscious Homeowner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Small job, quick turnaround. Storm Roofing responded fast, came out the next day, and had it done in two days. No overhead, no BS — just a good local roofing company doing solid work."<br/>
                <span className="text-zinc-400 text-sm">— Quick Repair Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Perfect for our modest condo replacement. Professional, competent, and their price was right for what we needed. They're not the fanciest outfit, but they deliver."<br/>
                <span className="text-zinc-400 text-sm">— Condo Association Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm Roofing Inc. is a leaner operation focused on delivering quality residential roofing at fair market pricing. Operating since 2011, they've carved out a niche serving Royal Palm Beach's budget-conscious homeowners who want code-compliant work without premium brand markup. They're not the largest company on the list, but that's the point — lower overhead means faster response times and competitive pricing. Ideal for homeowners making practical decisions about value.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement, asphalt shingle repair and installation, flat roof systems, roof repair and maintenance, quick turnarounds on emergency repairs, free inspections and estimates.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Competitive pricing | Fast response and turnarounds | No unnecessary overhead | Straightforward estimates | Local Royal Palm Beach focus | Strong reviews on value and workmanship
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 734-2009</strong>
              </span>
              <span>|</span>
              <a href="https://stormroofingpbc.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">stormroofingpbc.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                5500 Lake Worth Road, Lake Worth, FL 33467
              </span>
            </div>
          </div>

          {/* Section 7: Neal Roofing & Waterproofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Neal Roofing & Waterproofing — Palm Beach County Legacy</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (140+ reviews) | 32 Years of Experience</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We had persistent leaks in the flat roof section. Called Neal Roofing and they didn't just replace — they diagnosed the waterproofing issue, explained it clearly, and fixed it right. Haven't had a problem since."<br/>
                <span className="text-zinc-400 text-sm">— Satisfied Leak Resolution Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Neal's expertise in waterproofing made all the difference. They could see problem areas other roofers missed. Cost more upfront but saved us money long-term by preventing future water damage."<br/>
                <span className="text-zinc-400 text-sm">— Preventative Maintenance Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Three decades in business means they've seen everything. The depth of knowledge you get when they show up is real. Not the cheapest, but the expertise you're paying for is legitimate."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Property Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Neal Roofing & Waterproofing represents Palm Beach County institutional knowledge — over three decades of roofing and waterproofing expertise. Their dual focus on roofing and waterproofing systems gives them diagnostic capabilities that single-service roofers lack. For homeowners with complex leak issues, ongoing moisture concerns, or high-end properties requiring waterproofing precision, Neal brings specialized expertise that justifies their mid-to-premium positioning.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement and installation (all materials), waterproofing systems, elastomeric coatings, leak detection and repair, flat roof systems, commercial and residential, membrane installation and repair, maintenance and preventative programs, specialized waterproofing assessments.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              32+ years of expertise | Specialized waterproofing division | Expert leak diagnosis and repair | Elastomeric coating systems | Commercial and residential capability | Premium-quality focus
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(561) 582-1515</strong>
              </span>
              <span>|</span>
              <a href="https://nealroofingwaterproofing.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">nealroofingwaterproofing.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                2850 N Federal Hwy, West Palm Beach, FL 33407
              </span>
            </div>
          </div>

          {/* Section 8: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Royal Palm Beach</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation. Florida's HVHZ designation, mandatory permitting, and insurance documentation requirements make this a more complex buying decision than most homeowners expect.
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
                <span>Confirm they have a Palm Beach County contractor registration</span>
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
                    <td className="px-4 py-4 text-zinc-300">Required by Florida Building Code in Palm Beach County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you offer wind mitigation inspection and documentation?"</td>
                    <td className="px-4 py-4 text-zinc-300">Can reduce insurance premiums by hundreds annually</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Permits</td>
                    <td className="px-4 py-4 text-zinc-300">"Who pulls the permit — you or the homeowner?"</td>
                    <td className="px-4 py-4 text-zinc-300">Contractor must always pull permits in Palm Beach County</td>
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
                    <td className="px-4 py-4 text-zinc-300">"Can you provide 2-3 references from Royal Palm Beach jobs?"</td>
                    <td className="px-4 py-4 text-zinc-300">Verifies local track record</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Storm Chasers vs Established Roofers */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Royal Palm Beach — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Royal Palm Beach gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into Palm Beach County after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Royal Palm Beach before the last storm. They'll be here after the next one.
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
            <h2 className="text-3xl font-bold text-white mb-6">What a Professional Roofing Job Looks Like From Start to Finish in Royal Palm Beach</h2>

            <h3 className="text-xl font-bold text-white mb-3">Step 1 — Sales & Estimate</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A legitimate contractor inspects before they quote. They measure your roof, assess decking condition, identify existing issues, and present written options — not a verbal pitch. Expect them to explain the difference between repair and replacement honestly, even if repair is the lower-ticket answer.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 2 — Pre-Production</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Materials get ordered. Permits get pulled. Palm Beach County requires permits for virtually all roofing work — and your contractor should handle this entirely. You'll receive a timeline for build day and a checklist of what to prepare.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 3 — Build Day</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A professional crew arrives — not one person with a pickup truck. There should be a project manager or point of contact on site or reachable throughout the day. Work follows manufacturer installation specs, not shortcuts. Job site should be protected and cleaned each day.
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
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Roofing Pricing in Royal Palm Beach — Cheap, Fair, and Overpriced</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The low-bid roofer in Royal Palm Beach is often using the cheapest materials available. In an HVHZ zone, a roof installed below spec is not just a warranty issue — it's a code violation that can affect your insurance coverage and resale value. Cheap quotes feel good on signing day. They get expensive when the first storm hits.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Most of the five companies on this list operate in the middle ground — fair market pricing that reflects real labor costs, proper materials, licensed crews, and overhead from running a legitimate business. Most Royal Palm Beach homeowners are best served here — quality without premium brand markup.
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
                    <td className="px-4 py-4 text-zinc-300">Most Royal Palm Beach homeowners</td>
                    <td className="px-4 py-4 text-zinc-300">High-end homes, complex commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 12: Common Red Flags */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Red Flags When Choosing a Roofer in Royal Palm Beach, FL</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-zinc-300">🚩 No Florida State Certified Roofing Contractor license (verify at myfloridalicense.com)</li>
              <li className="text-zinc-300">🚩 Demands full payment before work begins</li>
              <li className="text-zinc-300">🚩 No written estimate or contract before signing</li>
              <li className="text-zinc-300">🚩 Cannot provide proof of liability insurance and workers' comp</li>
              <li className="text-zinc-300">🚩 No verifiable Royal Palm Beach or Palm Beach County office</li>
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
            <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in Royal Palm Beach — What Should You Expect to Pay?</h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Royal Palm Beach roofing costs track slightly below coastal Palm Beach County cities due to lower salt-air corrosion, but HVHZ requirements still apply fully. HVHZ-compliant installation requires certified materials, licensed crews, and proper permitting — all of which add to cost but are non-negotiable under Florida Building Code.
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
                    <td className="px-4 py-4 text-zinc-300">$8,500 – $21,000</td>
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required in Palm Beach County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$15,000 – $42,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion in HVHZ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$17,000 – $52,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability; strong insurance benefits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roof Systems (TPO, EPDM, PVC)</td>
                    <td className="px-4 py-4 text-zinc-300">$7,500 – $18,000</td>
                    <td className="px-4 py-4 text-zinc-300">Common on additions and commercial; per-square pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Royal Palm Beach homeowners deserve roofers who understand the specific challenges of inland Palm Beach County living — HVHZ compliance, fair pricing, and genuine community accountability.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Any of the five roofers on this list can deliver. Call at least three for written estimates. Ask about wind mitigation. Verify licenses. Get everything in writing. You'll have a roof that lasts, insurance documentation that works, and peace of mind knowing your home is protected by professionals who've been building trust in this community for years.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
