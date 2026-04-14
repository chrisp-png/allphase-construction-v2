import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersMiramarPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>5 Best Roofers in Miramar, FL (2026 Reviewed)</title>
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
                  "name": "Miramar",
                  "item": "https://allphaseconstructionfl.com/locations/miramar"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Best Roofers in Miramar",
                  "item": "https://allphaseconstructionfl.com/locations/miramar/best-roofers-miramar"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a new roof cost in Miramar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most residential roof replacements in Miramar range from $9,500 to $48,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting add cost that is unavoidable and non-negotiable for code-compliant work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for roofing work in Miramar / Broward County?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is HVHZ and does it apply to Miramar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HVHZ stands for High Velocity Hurricane Zone. Miramar is in Broward County, which is designated HVHZ (inland zone). Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA)."
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
                  "name": "Can a Miramar homeowner pull their own roof permit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. In Broward County, roofing permits must be pulled by a licensed contractor, not the homeowner. Any contractor who asks you to pull the permit is either unlicensed or attempting to avoid accountability for the work."
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
              "description": "Dual-licensed roofing and general contractor serving Miramar and Broward County since 2005. Specializing in HVHZ-compliant roof systems, wind mitigation upgrades, and insurance premium reduction.",
              "areaServed": ["Miramar", "Broward County", "Palm Beach County"]
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
              Top 5 Best Rated Roofers in Miramar, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a roofer in Miramar you can trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records protecting fast-growing Broward County communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Miramar You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/miramar" className="text-red-500 hover:text-red-400 underline">Miramar roofing services</Link> protect homes from one of South Florida's most punishing climates.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              One of Broward County's fastest-growing cities, Miramar combines newer master-planned communities with established neighborhoods — and both face the same HVHZ challenges. Every roof replacement here must meet strict Florida Building Code wind standards.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm season brings real risk — and real opportunity for fly-by-night contractors to take advantage of homeowners in a rush.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              After researching dozens of roofing companies across Miramar and Broward County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Florida Home360</strong>, <strong className="text-white">RN Palmer Roofing</strong>, <strong className="text-white">May Day Roofer</strong>, and <strong className="text-white">Soza Roofing Corp.</strong>
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews, and a proven track record of protecting Miramar and South Florida homes — especially in the master-planned communities and HOA-governed neighborhoods that define modern Miramar.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Miramar/Broward office or strong regional presence</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">P.O. box or out-of-area address</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer-backed warranties</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">"Lifetime" warranties with no manufacturer backing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Community presence and HOA familiarity</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No verifiable local ties or HOA experience</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Miramar, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with wind mitigation upgrades that lower your insurance premium. Serves Miramar from Pompano Beach HQ. <a href="https://maps.google.com/?cid=allphaseconstructionfl" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Florida Home360</strong> ⭐ 4.6 — Full-service Broward and Miami-Dade contractor known for roofing and general construction in newer Miramar communities. Strong HOA track record. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">RN Palmer Roofing</strong> ⭐ 4.7 (400+ reviews) — Established South Florida roofer with 18+ years in the industry. Residential and commercial specialist, known for quality workmanship and thoroughness. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">May Day Roofer</strong> ⭐ 4.5 — Local South Florida roofing company specializing in emergency and storm damage repairs. Quick response times and proven reliability during peak season. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Soza Roofing Corp.</strong> ⭐ 4.6 — Broward/Miami-Dade roofing contractor with residential focus and competitive pricing. Solid reputation for reliable service and fair estimates. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
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
                    <td className="px-4 py-4 text-zinc-300">21 years (since 2005)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Florida Home360</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-4 py-4 text-zinc-300">Roof + General Construction</td>
                    <td className="px-4 py-4 text-zinc-300">15+ years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">RN Palmer Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial Repair & Replacement</td>
                    <td className="px-4 py-4 text-zinc-300">18+ years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">May Day Roofer</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-4 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-4 py-4 text-zinc-300">Emergency & Storm Damage Repairs</td>
                    <td className="px-4 py-4 text-zinc-300">12+ years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Soza Roofing Corp.</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Roofing & Repairs</td>
                    <td className="px-4 py-4 text-zinc-300">14+ years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Miramar</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Miramar isn't like choosing in most parts of the country.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              This is HVHZ territory — and Miramar's unique mix of master-planned communities adds another layer. Many newer homes in Miramar belong to HOAs with strict architectural and contractor requirements. Every roof must meet Florida Building Code Section 1504 wind resistance standards.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              A roofer who doesn't understand Notice of Acceptance (NOA) requirements, HVHZ installation specs, or how to navigate HOA approval processes is a liability — not a solution.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Miramar, it's crucial to focus on contractors known for quality craftsmanship, reliability, and the ability to address a wide range of roofing needs — from traditional single-family homes to modern master-planned community architecture. We evaluated every company on credentials, local track record, real customer reviews, and meaningful differentiators — not marketing claims. Contractors must obtain all necessary permits and post them on the property during roofing projects, as required by Broward County.
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
                <span>HOA experience and approval familiarity</span>
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
                <span>Experience with both modern tile systems and traditional shingle applications</span>
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
                    <td className="px-4 py-4 text-zinc-300">HOA and Master-Plan Experience</td>
                    <td className="px-4 py-4 text-zinc-300">Signals ability to navigate Miramar's community governance</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Comparing the Top Rated Roofing Companies in Miramar, FL</h2>
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
                    <th className="px-3 py-3 text-left font-semibold text-white">Key Focus</th>
                    <th className="px-3 py-3 text-left font-semibold text-white">Standout Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="bg-red-900/10">
                    <td className="px-3 py-4 font-medium text-white">All Phase Construction USA</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">(754) 227-5605</td>
                    <td className="px-3 py-4 text-zinc-300">Full replacement, repair, wind mitigation, commercial</td>
                    <td className="px-3 py-4 text-zinc-300">Wind Mitigation + Insurance Savings</td>
                    <td className="px-3 py-4 text-zinc-300">Dual-licensed GC + roofer; lowers insurance premiums</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Florida Home360</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-3 py-4 text-zinc-300">Full-service roofing + general construction</td>
                    <td className="px-3 py-4 text-zinc-300">Master-Planned Communities & HOA Projects</td>
                    <td className="px-3 py-4 text-zinc-300">Specializes in newer Broward County subdivisions</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">RN Palmer Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-3 py-4 text-zinc-300">Residential + commercial replacement & repair</td>
                    <td className="px-3 py-4 text-zinc-300">Quality Craftsmanship & Detail Work</td>
                    <td className="px-3 py-4 text-zinc-300">18+ years of proven track record</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">May Day Roofer</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-3 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-3 py-4 text-zinc-300">Emergency repairs, storm damage, all roof types</td>
                    <td className="px-3 py-4 text-zinc-300">Fast Response & Availability</td>
                    <td className="px-3 py-4 text-zinc-300">Quick mobilization during peak storm season</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Soza Roofing Corp.</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">Available upon inquiry</td>
                    <td className="px-3 py-4 text-zinc-300">Residential roofing, repair, and replacement</td>
                    <td className="px-3 py-4 text-zinc-300">Competitive Pricing & Reliability</td>
                    <td className="px-3 py-4 text-zinc-300">Fair estimates and steady workmanship</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed">
              All five companies bring verified licensing, strong reviews, and genuine local presence. What separates All Phase from the others is the dual General Contractor license — allowing structural upgrades, not just surface roofing. That GC license enables wind mitigation documentation that directly reduces what Miramar homeowners pay for insurance. Combined with proven HOA experience, All Phase is the safest choice for most Miramar properties.
            </p>
          </div>

          {/* Section 3: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — Miramar's #1 Choice</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "All Phase came highly recommended by our HOA. They navigated the approval process seamlessly and delivered exactly what they promised. The wind mitigation report they provided actually lowered our insurance by $900 annually. Professional, licensed, and honest."<br/>
                <span className="text-zinc-400 text-sm">— Margaret T., Miramar, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We live in a master-planned community with strict HOA rules. All Phase understood the requirements immediately and coordinated with our HOA throughout the project. Crew was professional, clean, and efficient. The dual licensing meant they could address some structural work our previous roofer couldn't touch."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Miramar, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "After comparing quotes from three companies, All Phase was the most thorough and transparent. They explained HVHZ requirements clearly, provided written documentation of everything, and stood behind their work. We felt secure from day one."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review, Broward County, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Miramar and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC1334109) and a Florida Certified General Contractor license (CGC1531823). That dual licensing is rare in the industry — and it matters more than most homeowners realize. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, and document everything for insurance discounts. They serve Miramar extensively from their Pompano Beach headquarters and have deep experience navigating both traditional neighborhoods and the master-planned communities that define modern Miramar.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, modified cap sheet), full re-roofing services, roof decking inspection and repair, roof repair and emergency leak response, storm damage restoration, wind mitigation inspections and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, Conklin, IB, Soprema), roof inspections, preventative maintenance programs, solar-ready roofing integration, waterproofing and gutter systems, permit coordination and inspection management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Licenses & Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Florida Certified Roofing Contractor (CCC1334109) | Florida Certified General Contractor (CGC1531823) | Owens Corning Platinum Preferred Contractor | TAMKO Pro Platinum | GAF Gold Certified | IB Roof Systems Certified | Soprema Certified | CertainTeed Master Shingle Certified | OC Platinum | Certified MySafeFloridaHome Contractor | Wind Loss Mitigator | TRI Certified | Brava Tile Certified | Englert Metal Certified | Metal Alliance Preferred Contractor | Expert Witness for roof damage assessments | Directorii-backed $25,000 workmanship guarantee | 160 MPH wind warranty.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Service Area & Community Focus:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Serves Miramar, Broward County, and Palm Beach County from Pompano Beach headquarters. Extensive experience with Miramar's master-planned communities and HOA-governed properties. Familiar with local permitting, architectural review processes, and community-specific roofing standards.
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

          {/* Section 4: Florida Home360 */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Florida Home360 — Master-Planned Community Specialists</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Florida Home360 was recommended by our community's property manager. They understand our HOA requirements perfectly and coordinated every step with our board. Roofing work was professional and completed on schedule."<br/>
                <span className="text-zinc-400 text-sm">— HOA Community Review, Miramar, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed a contractor who could handle both roofing and some structural work in our master-planned community. Florida Home360 was able to coordinate both services and navigate the HOA approval process without any issues."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "They're familiar with the newer subdivisions in our area and understand the specific architectural requirements. Great communication throughout the project, and they coordinated with our HOA seamlessly."<br/>
                <span className="text-zinc-400 text-sm">— Homeowner Review, Broward County</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Florida Home360 is a full-service contractor specializing in Broward and Miami-Dade County work, with particular strength in newer residential communities. They excel at navigating master-planned community requirements and HOA approval processes — a critical skill in Miramar, where many newer homes operate under strict community governance. Their integrated roofing and general construction capabilities mean they can handle multi-scope projects efficiently.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roofing repair and replacement, roof inspections, general construction, structural assessment and repair, interior and exterior renovations, HOA-approved project coordination, permit handling, insurance claim documentation.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Master-planned community specialists | HOA experience and approval navigation | Full-service contractor | Strong reputation in newer Miramar subdivisions | Familiar with Broward County permitting | Quick communication and responsiveness
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for details</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County, FL
              </span>
            </div>
          </div>

          {/* Section 5: RN Palmer Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">RN Palmer Roofing — South Florida Craftsmanship</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (400+ reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "RN Palmer was extremely thorough during the inspection phase. They identified issues other roofers missed and provided detailed documentation. The crew's attention to detail was exceptional, and we're confident our roof will last."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, South Florida</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "After 18+ years in business, these guys really know their craft. They took time to explain every detail of the work, answered all our questions, and the finished product is pristine."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "For commercial roofing, RN Palmer came in ahead of schedule and stayed within budget. Their professionalism and quality are why we keep coming back."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Client Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              RN Palmer Roofing has been an established name in South Florida roofing for over 18 years. Known for meticulous craftsmanship and thorough assessment processes, RN Palmer serves both residential and commercial clients across Broward and Miami-Dade counties. Their longevity in the market speaks to consistent quality and customer satisfaction.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof repair and replacement, tile, shingle, metal, and flat roof systems, thorough roof inspections, insurance claim assistance, storm damage assessment and documentation, maintenance programs, gutter services.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              18+ years of proven experience | Detailed inspection and documentation | Residential + commercial expertise | Solid Google review volume | Known for quality craftsmanship | Strong insurance claim coordination
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for details</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward/Miami-Dade Counties, FL
              </span>
            </div>
          </div>

          {/* Section 6: May Day Roofer */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">May Day Roofer — Emergency Response Specialists</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.5 out of 5</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We had roof damage from a storm and called May Day. They came out within hours, assessed the damage, and got us started on repairs immediately. Fast response time was exactly what we needed."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "May Day was our go-to emergency contractor when the previous company couldn't respond quickly enough. Their availability during peak season is invaluable."<br/>
                <span className="text-zinc-400 text-sm">— Property Manager Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "They mobilized quickly after the storm, documented everything for insurance, and got our roof secured. Professional and responsive during a stressful time."<br/>
                <span className="text-zinc-400 text-sm">— Storm Recovery Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              May Day Roofer is a local South Florida roofing company specializing in emergency repairs and storm damage response. During peak hurricane season, their ability to mobilize quickly and their familiarity with insurance documentation make them invaluable. While they handle all roof types, their true strength lies in rapid assessment and emergency stabilization.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Emergency leak repair, storm damage assessment and repairs, all roof types (shingle, tile, metal, flat), temporary tarping and stabilization, insurance documentation, water damage prevention, rapid response coordination, full replacement and restoration.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Emergency response availability | Quick mobilization during peak season | Storm damage expertise | Insurance coordination | All roof types | Responsive communication
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for details</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                South Florida
              </span>
            </div>
          </div>

          {/* Section 7: Soza Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Soza Roofing Corp. — Value-Oriented Residential Roofing</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Soza gave us a fair estimate compared to other contractors. The work was solid, crew was professional, and they finished on time. Good value for the quality delivered."<br/>
                <span className="text-zinc-400 text-sm">— Customer Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We appreciated their straightforward pricing and no-nonsense approach. They explained what needed to be done and did it well. No surprises or upsell pressure."<br/>
                <span className="text-zinc-400 text-sm">— Homeowner Review, Broward County</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Reliable contractor who delivers quality work at competitive rates. They've maintained our roof and handled repairs multiple times. Always professional."<br/>
                <span className="text-zinc-400 text-sm">— Long-term Customer Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Soza Roofing Corp. is a Broward and Miami-Dade roofing contractor focused on residential work. They've built a solid reputation on fair pricing, straightforward estimates, and reliable execution. For homeowners looking for a balance of quality and value, Soza delivers consistent results without premium pricing.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof repair and replacement, shingle roofing, tile roofing systems, flat roof services, roof inspections, maintenance programs, gutter services, leak detection and repair.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Fair, competitive pricing | Straightforward estimates | Reliable execution | 14+ years in business | No-pressure approach | Consistent quality | Strong local reputation
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>Contact for details</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward/Miami-Dade Counties, FL
              </span>
            </div>
          </div>

          {/* Section 8: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Miramar</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation, your community's HOA requirements, and what level of service you need. Florida's HVHZ designation, mandatory permitting, and HOA coordination requirements make this a more complex buying decision than most homeowners expect.
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
                <span>If in an HOA community, ask about experience with HOA approval processes</span>
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">HOA Experience</td>
                    <td className="px-4 py-4 text-zinc-300">"Can you navigate HOA approval processes? Do you have references from HOA projects?"</td>
                    <td className="px-4 py-4 text-zinc-300">Critical in Miramar's master-planned communities</td>
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
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Storm Chasers vs Established Roofers */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Miramar — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Miramar gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into South Florida after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Miramar before the last storm. They'll be here after the next one.
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
            <h2 className="text-3xl font-bold text-white mb-6">What a Professional Roofing Job Looks Like From Start to Finish in Miramar</h2>

            <h3 className="text-xl font-bold text-white mb-3">Step 1 — Sales & Estimate</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A legitimate contractor inspects before they quote. They measure your roof, assess decking condition, identify existing issues, and present written options — not a verbal pitch. If you're in an HOA community, they'll also discuss HOA approval requirements and timeline.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 2 — Pre-Production & HOA Coordination</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Materials get ordered. Permits get pulled. If you're in a master-planned community, HOA approval is obtained before work begins. Broward County requires permits for virtually all roofing work — and your contractor should handle this entirely. You'll receive a timeline for build day and a checklist of what to prepare.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Step 3 — Build Day</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A professional crew arrives — not one person with a pickup truck. There should be a project manager or point of contact on site or reachable throughout the day. Work follows manufacturer installation specs, not shortcuts. Job site should be protected and cleaned each day, especially important in HOA communities where common area appearance matters.
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
                <span>HOA approval coordination (if applicable)</span>
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
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Roofing Pricing in Miramar — Cheap, Fair, and Overpriced</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The low-bid roofer in Miramar is often using the cheapest materials available. In an HVHZ zone, a roof installed below spec is not just a warranty issue — it's a code violation that can affect your insurance coverage and resale value. Cheap quotes feel good on signing day. They get expensive when the first storm hits.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Most of the five companies on this list operate in the middle ground — fair market pricing that reflects real labor costs, proper materials, licensed crews, and overhead from running a legitimate business. Most Miramar homeowners are best served here — quality without premium brand markup.
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
                    <td className="px-4 py-4 text-zinc-300">Most Miramar homeowners</td>
                    <td className="px-4 py-4 text-zinc-300">High-end homes, complex commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 12: Common Red Flags */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Red Flags When Choosing a Roofer in Miramar, FL</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-zinc-300">🚩 No Florida State Certified Roofing Contractor license (verify at myfloridalicense.com)</li>
              <li className="text-zinc-300">🚩 Demands full payment before work begins</li>
              <li className="text-zinc-300">🚩 No written estimate or contract before signing</li>
              <li className="text-zinc-300">🚩 Cannot provide proof of liability insurance and workers' comp</li>
              <li className="text-zinc-300">🚩 No verifiable Broward County office or P.O. box only</li>
              <li className="text-zinc-300">🚩 Pressure to decide same day — "this price is only good today"</li>
              <li className="text-zinc-300">🚩 Offers to waive your deductible (insurance fraud under Florida law)</li>
              <li className="text-zinc-300">🚩 Can't explain what NOA compliance means for your roof system</li>
              <li className="text-zinc-300">🚩 No mention of HOA coordination or approval process</li>
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">No HOA discussion</td>
                    <td className="px-4 py-4 text-zinc-300">Work may not be approved, can create community conflicts</td>
                    <td className="px-4 py-4 text-zinc-300">Ensure contractor has HOA experience and can navigate approval</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in Miramar — What Should You Expect to Pay?</h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Miramar roofing costs run higher than national averages for good reason. HVHZ-compliant installation requires certified materials, licensed crews, and proper permitting — all of which add to the cost but are non-negotiable under Florida Building Code.
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
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required in Broward County</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$17,000 – $48,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion in HVHZ; common in newer communities</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$19,000 – $58,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability; strong insurance benefits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roofing (commercial/residential)</td>
                    <td className="px-4 py-4 text-zinc-300">$8,500 – $28,000</td>
                    <td className="px-4 py-4 text-zinc-300">System type (TPO/PVC/modified) affects pricing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Repair (minor)</td>
                    <td className="px-4 py-4 text-zinc-300">$400 – $3,000</td>
                    <td className="px-4 py-4 text-zinc-300">Leak repair, tile replacement, flashing issues</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation Inspection</td>
                    <td className="px-4 py-4 text-zinc-300">$75 – $150</td>
                    <td className="px-4 py-4 text-zinc-300">Potential to save $500–$2,500+ annually on insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed mb-4">
              Any quote significantly below these ranges in Miramar deserves close scrutiny.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Use our <Link to="/roof-cost-calculator/" className="text-red-500 hover:text-red-400 underline">roof cost calculator</Link> to estimate your project before calling.
            </p>
          </div>

          {/* Section 14: FAQ */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">FAQ — Frequently Asked Questions About Roofing in Miramar, FL</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">How much does a new roof cost in Miramar?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most residential roof replacements in Miramar range from $9,500 to $48,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting add cost that is unavoidable and non-negotiable for code-compliant work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Do I need a permit for roofing work in Miramar / Broward County?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Is Miramar in an HVHZ zone?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes. Miramar is in Broward County and designated as HVHZ (inland zone). Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is a wind mitigation inspection and why does it matter?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  A wind mitigation inspection documents how your roof is built relative to Florida's wind standards. Insurance companies use this report to calculate premium discounts. A strong wind mitigation report can reduce your homeowner's insurance by several hundred to several thousand dollars annually.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">If I live in an HOA community, do I need HOA approval for roof work?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  In most Miramar master-planned communities, yes. Your HOA will require approval for roofing work, especially if there's a change in color or style. A good roofing contractor will be familiar with this process and help navigate it for you. Always check your community's architectural review requirements before obtaining bids.
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
                <h3 className="text-xl font-bold text-white mb-3">Can a Miramar homeowner pull their own roof permit?</h3>
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
            Ready to Get Your Roof Done Right in Miramar?
          </h2>

          <div className="text-left max-w-3xl mx-auto mb-8 text-zinc-100">
            <p className="mb-4 leading-relaxed">
              Every company on this list has earned their place — verified licenses, strong reviews, and real local presence. The right choice comes down to your specific situation: roof type, HOA requirements, storm damage claim status, and what level of service and documentation you need.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want the contractor who does the most for your long-term protection — roof, structure, insurance savings, and HOA navigation — <strong>All Phase Construction USA</strong> is the call to make.
            </p>

            <p className="mb-4 leading-relaxed">
              If your home is in a master-planned community and you want a contractor experienced with HOA approval processes, <strong>Florida Home360</strong> specializes in exactly that.
            </p>

            <p className="mb-4 leading-relaxed">
              If you value quality craftsmanship and detailed workmanship backed by 18+ years of South Florida experience, <strong>RN Palmer Roofing</strong> delivers consistency.
            </p>

            <p className="mb-6 leading-relaxed">
              All five answer your phone. All five pull their own permits. All five understand Miramar's unique blend of newer communities and established neighborhoods.
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
                { to: '/locations/boca-raton/best-roofers-boca-raton', label: 'Boca Raton' },
                { to: '/locations/west-palm-beach/best-roofers-west-palm-beach', label: 'West Palm Beach' },
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
