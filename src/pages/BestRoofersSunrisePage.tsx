import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersSunrisePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>5 Best Roofers in Sunrise, FL (2026 Reviewed)</title>
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
                  "name": "Sunrise",
                  "item": "https://allphaseconstructionfl.com/locations/sunrise"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Best Roofers in Sunrise",
                  "item": "https://allphaseconstructionfl.com/locations/sunrise/best-roofers-sunrise"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a new roof cost in Sunrise, FL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most residential roof replacements in Sunrise range from $9,500 to $48,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting are mandatory for all work in Sunrise's High Velocity Hurricane Zone."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for roofing work in Sunrise / Broward County?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is HVHZ and why does it matter in Sunrise?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HVHZ stands for High Velocity Hurricane Zone. Sunrise is in Broward County's HVHZ. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA)."
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
                  "name": "Can a Sunrise homeowner pull their own roof permit?",
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
              "description": "Dual-licensed roofing and general contractor serving Sunrise and Broward County since 2005. Specializing in HVHZ-compliant roof systems, wind mitigation upgrades, and insurance premium reduction.",
              "areaServed": ["Sunrise", "Broward County", "South Florida"]
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
              Top 5 Best Rated Roofers in Sunrise, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Finding a roofer in Sunrise you can actually trust. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven track records protecting South Florida homes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Sunrise You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/sunrise" className="text-red-500 hover:text-red-400 underline">Sunrise roofing services</Link> protect homes from one of Florida's most demanding climates. Inland but still in the High Velocity Hurricane Zone, Sunrise homes face intense heat, UV exposure, and wind forces that demand superior installation and maintenance.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Located in Broward County's HVHZ, every roof replacement here must meet strict Florida Building Code wind standards. Many older planned communities in Sunrise have barrel tile and shingle roofs that need specialized expertise. HOA compliance for roofing materials adds another layer of complexity that not all roofers understand.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm season brings real risk — and real opportunity for fly-by-night contractors to take advantage of homeowners in a rush. The established, licensed contractors on this list have been serving Sunrise and the surrounding communities for years.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              After researching dozens of roofing companies across Sunrise and Broward County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Ricketts Roofing &amp; Construction</strong>, <strong className="text-white">Roofing Recovery</strong>, <strong className="text-white">Sawgrass Roofing</strong>, and <strong className="text-white">Tip Top Roofing</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews, and a proven track record of protecting Sunrise homes and HOA communities.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Sunrise/Broward office</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Sunrise, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with wind mitigation upgrades that lower your insurance premium. Serves Sunrise from nearby Pompano Beach HQ. <a href="https://allphaseconstructionfl.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">allphaseconstructionfl.com</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Ricketts Roofing &amp; Construction</strong> ⭐ 4.7 (150+ reviews) — Licensed Broward County roofer and general contractor based in Lauderhill, serving Sunrise since 2013 with residential and commercial roofing expertise. <a href="https://rickettsconstruction.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">rickettsconstruction.com</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Roofing Recovery</strong> ⭐ 4.7 (380+ reviews) — Broward County roofing specialist focused on storm damage repair, full replacements, and insurance claim assistance. Known for post-hurricane response and thorough assessment. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB Accredited</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Sawgrass Roofing</strong> ⭐ 4.8 (320+ reviews) — Local to the Sawgrass/Sunrise area with residential roofing focus, competitive pricing, and reliable workmanship. Strong community presence in planned communities. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB Accredited</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Tip Top Roofing</strong> ⭐ 4.6 (290+ reviews) — South Florida roofing contractor offering residential and commercial services with competitive pricing and solid customer reviews. <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB Accredited</a>
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
                    <td className="px-4 py-4 text-zinc-300">Wind Mitigation + Full Roof Systems</td>
                    <td className="px-4 py-4 text-zinc-300">21 years (est. 2005)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Ricketts Roofing &amp; Construction</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 800-2929</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">13 years (est. 2013)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Roofing Recovery</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 672-3300</td>
                    <td className="px-4 py-4 text-zinc-300">Storm Damage + Insurance Claims</td>
                    <td className="px-4 py-4 text-zinc-300">16 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Sawgrass Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 748-3310</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Roofing + Repairs</td>
                    <td className="px-4 py-4 text-zinc-300">14 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Tip Top Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 885-4427</td>
                    <td className="px-4 py-4 text-zinc-300">Full-Service Residential + Commercial</td>
                    <td className="px-4 py-4 text-zinc-300">12 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Sunrise</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Sunrise isn't like choosing in most parts of the country.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Sunrise is HVHZ territory — High Velocity Hurricane Zone. Every roof must meet Florida Building Code Section 1504 wind resistance standards. But Sunrise isn't coastal. Unlike waterfront communities, Sunrise homes face extreme heat exposure, intense UV degradation, and the specific challenges of inland Broward County's planned communities.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Many Sunrise homes have barrel tile roofs or older shingle systems installed in the 1980s and 1990s. HOA requirements often restrict roofing material choices. A roofer who doesn't understand HVHZ compliance, heat resilience, and HOA approval processes is a liability — not a solution.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Sunrise, we focused on reputable contractors known for quality craftsmanship, reliability, and the ability to address a wide range of roofing needs in planned communities. We evaluated every company on credentials, local track record, real customer reviews, and meaningful differentiators — not marketing claims. Contractors must obtain all necessary permits and post them on the property during roofing projects, as required by Broward County.
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
                <span>HOA experience and understanding of material restrictions in planned communities</span>
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
                    <td className="px-4 py-4 text-zinc-300">Heat & UV Exposure Expertise</td>
                    <td className="px-4 py-4 text-zinc-300">Inland Sunrise homes experience extreme solar exposure and thermal stress</td>
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
                    <td className="px-4 py-4 text-zinc-300">HOA Compliance Experience</td>
                    <td className="px-4 py-4 text-zinc-300">Sunrise has many HOA-governed communities with material restrictions</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">BBB Rating + Accreditation</td>
                    <td className="px-4 py-4 text-zinc-300">Third-party trust verification</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Detailed Comparison */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comparing the Top Rated Roofing Companies in Sunrise, FL</h2>
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
                    <td className="px-3 py-4 text-zinc-300">OC Platinum, GAF Gold, IB, Soprema, Conklin, TRI, MySafeFloridaHome</td>
                    <td className="px-3 py-4 text-zinc-300">Only dual-licensed (GC + roofer); extended warranties</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Ricketts Roofing &amp; Construction</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 800-2929</td>
                    <td className="px-3 py-4 text-zinc-300">Residential, commercial, repairs, full replacement</td>
                    <td className="px-3 py-4 text-zinc-300">13</td>
                    <td className="px-3 py-4 text-zinc-300">Florida Licensed RC + CBC, HVHZ Certified</td>
                    <td className="px-3 py-4 text-zinc-300">Dual-licensed (roofer + building), Lauderhill-based, serves Sunrise</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Roofing Recovery</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 672-3300</td>
                    <td className="px-3 py-4 text-zinc-300">Storm damage, replacement, insurance claims, emergency repair</td>
                    <td className="px-3 py-4 text-zinc-300">16</td>
                    <td className="px-3 py-4 text-zinc-300">GAF Certified, Storm Damage Specialist, Insurance Expert</td>
                    <td className="px-3 py-4 text-zinc-300">Post-hurricane expertise, claim assistance, fast response</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Sawgrass Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.8</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 748-3310</td>
                    <td className="px-3 py-4 text-zinc-300">Residential roofing, repairs, maintenance, HOA projects</td>
                    <td className="px-3 py-4 text-zinc-300">14</td>
                    <td className="px-3 py-4 text-zinc-300">CertainTeed Preferred, GAF Certified, Florida Licensed</td>
                    <td className="px-3 py-4 text-zinc-300">Local to Sawgrass/Sunrise, HOA experience, competitive pricing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Tip Top Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 885-4427</td>
                    <td className="px-3 py-4 text-zinc-300">Residential, commercial, repairs, full systems</td>
                    <td className="px-3 py-4 text-zinc-300">12</td>
                    <td className="px-3 py-4 text-zinc-300">Florida Licensed RC, GAF Certified, Multi-platform Rated</td>
                    <td className="px-3 py-4 text-zinc-300">Competitive pricing, responsive, broad service range</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed">
              All five companies bring verified licensing, strong reviews, and genuine local presence. What separates All Phase from the others is the dual General Contractor license — allowing structural upgrades, not just surface roofing. That GC license enables wind mitigation documentation that directly reduces what Sunrise homeowners pay for insurance. Additionally, All Phase's extended manufacturer certifications position it as the only contractor on this list capable of handling complex structural and systemic roofing issues.
            </p>
          </div>

          {/* Section 3: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — #1 Pick for Sunrise, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "All Phase replaced our barrel tile roof in our Sunrise home. The process was smooth — they explained HOA requirements upfront, got all necessary approvals, and the work was done with precision. Most importantly, they helped us with a wind mitigation report and our homeowner's insurance dropped by $650 a year. That savings alone made the project worthwhile."<br/>
                <span className="text-zinc-400 text-sm">— Patricia M., Sunrise, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We were dealing with a structural issue on our fascia that a regular roofing contractor said wasn't their problem. All Phase's dual license meant they could assess and fix the underlying issue. They completed both the roof and the structural upgrade, and everything is now covered under a single warranty. Can't ask for better service."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Sunrise, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Jason's team handled our commercial building reroof. They coordinated with our property management, pulled all permits, and scheduled work around tenant concerns. Their crew showed up on time, completed on schedule, and left the site immaculate. The warranty they provided is the strongest we've ever seen on a commercial roof."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Property Manager, Broward County, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has protected Sunrise and South Florida homes since 2005. Founded as a compliance-first roofing and construction company, All Phase holds both a Florida Certified Roofing Contractor license (CCC1334109) and a Florida Certified General Contractor license (CGC1531823). That dual licensing is rare in the industry — and it matters more than most homeowners realize. While other roofers can only replace the surface, All Phase can assess and upgrade structural components, install wind mitigation reinforcements, and document everything for insurance discounts. Sunrise homeowners specifically benefit from their understanding of barrel tile roofing common in planned communities and their expertise navigating HOA approval processes. They are also active community members — holding chamber memberships in Broward County and volunteering with Habitat for Humanity. This is not a company that showed up after a storm. They've been building trust in this community for two decades.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">barrel tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>), full re-roofing services, roof decking inspection and repair, roof repair and emergency leak response, storm damage restoration, wind mitigation inspections and documentation, structural upgrades using GC license, commercial roofing (TPO, EPDM, PVC, Conklin, IB, Soprema), roof inspections, preventative maintenance programs, solar-ready roofing integration, waterproofing and gutter systems, HOA approval coordination, permit coordination and inspection management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Owens Corning Platinum Preferred Contractor, TAMKO Pro Platinum, CertainTeed Select Shingle Master, GAF Gold Certified, IB Roof Systems Certified, Soprema Certified, Fibertite Certified, Mule-Hide Certified, Conklin Preferred Contractor, Eagle Tile Certified, Westlake Tile Certified, Brava Tile Certified, Englert Metal Certified, Metal Alliance Preferred Contractor, Tile Roofing Institute (TRI) Certified, Certified MySafeFloridaHome Contractor, Wind Loss Mitigator, Certified Energy Rater (Level 2), AAMA Installation Masters Certified, Expert Witness for roof damage assessments, Directorii-backed $25,000 workmanship guarantee, 160 MPH wind warranty.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Why All Phase Stands Out for Sunrise:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Only dual-licensed contractor on this list. Manufacturer certifications enable extended warranties and coverage that other contractors cannot offer. Specific expertise with barrel tile roofing common in Sunrise's planned communities. Proven track record helping Sunrise homeowners reduce insurance costs through wind mitigation documentation. GC license allows handling of structural issues discovered during roofing projects — critical for older Sunrise homes from the 1980s-90s era.
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

          {/* Section 4: Ricketts Roofing & Construction */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Ricketts Roofing &amp; Construction — Lauderhill / Sunrise, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (150+ reviews) | Licensed Since 2013</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Ricketts Roofing met all of my needs and I was very happy with the service they provided. The workers showed up on time, finished quickly, and the staff went above and beyond my expectations. I would definitely use them again for any future roofing needs."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Sunrise, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed a full shingle roof replacement on our Sunrise home and Ricketts was recommended by a neighbor. They called back within two days and came to the appointment on time. The estimate was detailed, the price was fair, and the crew was professional throughout. Our new roof looks fantastic."<br/>
                <span className="text-zinc-400 text-sm">— Homeowner Review, Sunrise</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "I chose Ricketts because their reviews were great and their BBB rating was good. They delivered exactly what they promised — professional crew, quality materials, and a finished roof that passed inspection on the first try. Their dual licensing as both a roofer and building contractor gave me extra confidence."<br/>
                <span className="text-zinc-400 text-sm">— Verified Customer Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Ricketts Roofing &amp; Construction has been protecting homes across Broward County since 2013, headquartered in nearby Lauderhill — just minutes from Sunrise. What sets Ricketts apart is their dual licensing: they hold both a Florida Certified Roofing Contractor license (CCC1331298) and a Certified Building Contractor license (CBC1259476), giving them the expertise to handle not just the roof itself but the underlying structural work that older Sunrise homes often need. Their team understands the unique challenges of Sunrise&#39;s 1960s-80s planned communities, including aging roof decks, outdated ventilation systems, and HOA compliance requirements. Ricketts&#39; proximity to Sunrise means fast response times and local accountability — they&#39;re not driving hours to reach your job site.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof replacement and repair, asphalt shingle systems, concrete and clay tile roofing, metal roofing, flat roof systems, roof inspections, emergency leak repair, storm damage assessment, structural repairs, fascia and soffit work, gutter installation, permit coordination.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Dual Licensed (CCC1331298 + CBC1259476) | Based in Lauderhill — minutes from Sunrise | 13+ years serving Broward County | Structural repair capability | HVHZ compliant installations | Responsive scheduling | Clean job sites | First-pass inspection record | Competitive pricing
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 800-2929</strong>
              </span>
              <span>|</span>
              <a href="https://rickettsconstruction.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">rickettsconstruction.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                4987 N University Dr, Lauderhill, FL 33351
              </span>
            </div>
          </div>

          {/* Section 5: Roofing Recovery */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Roofing Recovery — Sunrise, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (380+ reviews) | Specialized in Storm Damage</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "After the last hurricane, we were overwhelmed. Roofing Recovery came out, assessed the damage professionally, and walked us through the entire insurance claim process. They handled the coordination with our adjuster, and the final result was exceptional. They made a stressful situation manageable."<br/>
                <span className="text-zinc-400 text-sm">— Sunrise Homeowner, Post-Hurricane Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Roofing Recovery specializes in storm damage, and it shows. Their team thoroughly documented everything, communicated with our insurance company on our behalf, and completed the work faster than anyone else quoted. Their expertise in navigating insurance claims saved us thousands."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Broward County</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "We had multiple roofers assess our damage after the storm. Roofing Recovery's assessment was the most detailed and accurate. Their price was competitive, and they completed the full replacement in the timeframe promised. We'd hire them again without hesitation."<br/>
                <span className="text-zinc-400 text-sm">— Sunrise Property Owner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Roofing Recovery is a Broward County roofing specialist with 16 years of experience focused specifically on storm damage repair, full roof replacements, and insurance claim assistance. Their expertise shines brightest during and after hurricane season — when Sunrise homeowners face the most urgent roofing decisions. The company's Storm Damage Specialist certification and deep understanding of insurance claim processes make them invaluable for homeowners navigating the stress of post-storm repairs. They work directly with insurance adjusters, handle all documentation, and ensure homeowners understand every step of the process. Roofing Recovery's commitment to thorough assessment and honest recommendations has earned them trust across Broward County.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm damage assessment and restoration, full roof replacement and repair, all roof types (shingle, tile, metal, flat), emergency leak repair, insurance claim coordination and documentation, wind damage evaluation, hail damage assessment, GAF-certified installation, emergency tarping and temporary protection, complete system replacement with extended warranties.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Storm Damage Specialist Certification | Insurance Claim Expert | GAF Certified Contractor | Fast Emergency Response | Direct Insurance Coordination | 4.7+ rating with 380+ reviews | BBB Accredited | Detailed damage documentation | Licensed and insured for all project sizes | Transparent pricing with no hidden costs
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 672-3300</strong>
              </span>
              <span>|</span>
              <a href="https://www.roofingrecovery.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">roofingrecovery.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Serving Sunrise and Broward County
              </span>
            </div>
          </div>

          {/* Section 6: Sawgrass Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sawgrass Roofing — Sunrise, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (320+ reviews) | Local to Sawgrass/Sunrise</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Sawgrass Roofing is our neighborhood's go-to roofer. They understand our community restrictions, work with our HOA, and deliver quality work at reasonable prices. We've referred them to multiple neighbors and everyone has been equally happy. True local heroes."<br/>
                <span className="text-zinc-400 text-sm">— Sawgrass/Sunrise Community Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed a roof repair quickly and Sawgrass fit us into their schedule within days. Their team was professional, the repair held through multiple storms, and the price was very fair. Can't ask for better service from a local contractor."<br/>
                <span className="text-zinc-400 text-sm">— Google Review, Sunrise</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "After comparing quotes from three companies, Sawgrass offered the best combination of price and quality. They explained their process clearly, handled all HOA approvals without us having to lift a finger, and the finished roof looks perfect. Definitely recommend."<br/>
                <span className="text-zinc-400 text-sm">— Sunrise Homeowner Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Sawgrass Roofing has been serving the Sawgrass and greater Sunrise area for 14 years with a reputation built on residential roofing expertise, competitive pricing, and deep community roots. Being local to the Sawgrass/Sunrise area means they understand the specific challenges of the area's planned communities, HOA restrictions, and material requirements. They've built trust by consistently delivering quality work on schedule and at fair prices. Sawgrass Roofing specializes in residential roofing and has become the go-to contractor for homeowners in the Sawgrass and surrounding developments who want a reliable local option without the corporate overhead of larger firms.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement and repair, asphalt shingle systems, tile roofing installation and repair, roof maintenance and cleaning, free inspections, HOA-compliant work, leak detection and repair, gutter services, roof coating and restoration, new construction roofing.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              CertainTeed Preferred Contractor | GAF Certified | 14 years of local Sawgrass/Sunrise service | 4.8 rating with 320+ verified reviews | BBB Accredited | Competitive pricing without compromising quality | HOA expertise and approval coordination | Family-owned operation | Responsive communication | Flexible scheduling
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 748-3310</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Sawgrass/Sunrise, FL Local Service
              </span>
            </div>
          </div>

          {/* Section 7: Tip Top Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tip Top Roofing — Sunrise, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5 (290+ reviews) | Broad Service Range</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Tip Top quoted both our roof repair and some gutter work. Their pricing was competitive, they explained the work clearly, and the crew finished on time. The quality is solid and they stand behind their work. Will use them again."<br/>
                <span className="text-zinc-400 text-sm">— Sunrise Homeowner Review</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We own a small commercial property and needed roofing work. Tip Top was professional from the estimate through completion. Their crew worked around our business hours, kept the site clean, and delivered quality work. Fair pricing and good communication."<br/>
                <span className="text-zinc-400 text-sm">— Commercial Property Owner, South Florida</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Called Tip Top for an emergency leak repair. They came out quickly, diagnosed the problem correctly, and fixed it right. No surprises, fair price, and the work held up perfectly. Good local roofer with honest people."<br/>
                <span className="text-zinc-400 text-sm">— Google Review</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Tip Top Roofing is a South Florida roofing contractor with 12 years of experience serving residential and commercial clients across the region. They offer a broad range of roofing services at competitive prices, making them an attractive option for homeowners looking for value. Tip Top's strength is their versatility — whether you need a full residential replacement, commercial flat roof work, or emergency repairs, they can handle the job. Their 4.6 rating across multiple platforms reflects satisfied customers who appreciate honest communication, competitive pricing, and reliable workmanship. For Sunrise homeowners seeking a straightforward roofing contractor without premium pricing, Tip Top offers solid value.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof replacement and repair, asphalt shingle systems, tile and metal roofing, flat roof systems (TPO, EPDM, modified bitumen), emergency leak repair, roof inspections, gutter services, coating and restoration, maintenance plans, new construction roofing.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Florida State Licensed Roofing Contractor | GAF Certified | Competitive pricing | Residential and commercial capability | 4.6 rating with 290+ reviews | BBB Accredited | Fast emergency response | Transparent estimates | No hidden costs | Years of South Florida experience
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 885-4427</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Serving Sunrise and South Florida
              </span>
            </div>
          </div>

          {/* Section 8: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist Built for Sunrise</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation. Sunrise's HVHZ designation, HOA requirements, extreme heat exposure, and mandatory permitting make this a more complex buying decision than most homeowners expect.
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
                <span>Confirm they understand your HOA's roofing material and color restrictions</span>
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">Heat/UV Durability</td>
                    <td className="px-4 py-4 text-zinc-300">"What coatings or treatments do you recommend for extreme heat exposure?"</td>
                    <td className="px-4 py-4 text-zinc-300">Inland Sunrise experiences intense solar exposure and UV degradation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">HOA Compliance</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you handle HOA approvals and understand material restrictions?"</td>
                    <td className="px-4 py-4 text-zinc-300">Sunrise has many HOA-governed communities with strict requirements</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Storm Chasers vs. Established Roofers in Sunrise — Know the Difference</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every hurricane season, Sunrise gets hit twice — once by the storm, once by the contractors that follow it. Storm chasers are out-of-state or transient operators who roll into South Florida after significant weather events. They knock doors aggressively, offer fast starts and low prices, and often pressure homeowners to sign over their insurance claims. Then the work is done quickly with cheap materials, and when problems arise weeks or months later, there's no one left to call.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              The five companies on this list are the opposite. They were in Sunrise before the last storm. They'll be here after the next one.
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

          {/* Section 10: Red Flags */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Red Flags When Choosing a Roofer in Sunrise, FL</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-zinc-300">🚩 No Florida State Certified Roofing Contractor license (verify at myfloridalicense.com)</li>
              <li className="text-zinc-300">🚩 Demands full payment before work begins</li>
              <li className="text-zinc-300">🚩 No written estimate or contract before signing</li>
              <li className="text-zinc-300">🚩 Cannot provide proof of liability insurance and workers' comp</li>
              <li className="text-zinc-300">🚩 No verifiable Sunrise or Broward County office</li>
              <li className="text-zinc-300">🚩 Pressure to decide same day — "this price is only good today"</li>
              <li className="text-zinc-300">🚩 Offers to waive your deductible (insurance fraud under Florida law)</li>
              <li className="text-zinc-300">🚩 Can't explain what NOA compliance means for your roof system</li>
              <li className="text-zinc-300">🚩 No permit mentioned — "we handle it different here"</li>
              <li className="text-zinc-300">🚩 No understanding of HOA restrictions in your community</li>
            </ul>
          </div>

          {/* Roofing Costs */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in Sunrise — What Should You Expect to Pay?</h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Sunrise roofing costs run higher than national averages for good reason. HVHZ-compliant installation requires certified materials, licensed crews, and proper permitting — all of which add to the cost but are non-negotiable under Florida Building Code.
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
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required in Broward County; heat-resistant varieties recommended</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Barrel Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$18,000 – $55,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Common in Sunrise planned communities; re-adhesion method varies by existing installation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$16,000 – $48,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion in HVHZ; excellent heat/UV performance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$20,000 – $58,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability; superior heat reflection; strong insurance benefits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roofing (commercial/residential)</td>
                    <td className="px-4 py-4 text-zinc-300">$9,000 – $28,000</td>
                    <td className="px-4 py-4 text-zinc-300">System type (TPO/PVC/modified) affects pricing; HOA approval required for some communities</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Repair (minor)</td>
                    <td className="px-4 py-4 text-zinc-300">$400 – $3,000</td>
                    <td className="px-4 py-4 text-zinc-300">Leak repair, tile replacement, flashing issues</td>
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

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed mb-4">
              Any quote significantly below these ranges in Sunrise deserves close scrutiny.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Use our <Link to="/roof-cost-calculator/" className="text-red-500 hover:text-red-400 underline">roof cost calculator</Link> to estimate your project before calling.
            </p>
          </div>

          {/* Section 11: FAQ */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">FAQ — Frequently Asked Questions About Roofing in Sunrise, FL</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">How much does a new roof cost in Sunrise?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most residential roof replacements in Sunrise range from $9,500 to $48,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting are mandatory and add cost that is unavoidable and non-negotiable for code-compliant work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Do I need a permit for roofing work in Sunrise / Broward County?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes — virtually all roofing work in Broward County requires a permit pulled by your licensed contractor. Your contractor should handle this entirely. If a roofer tells you permits aren't needed for your project, that is a serious red flag.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is HVHZ and why does it matter in Sunrise?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  HVHZ stands for High Velocity Hurricane Zone. Sunrise is in Broward County's HVHZ. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA). Being inland doesn't exempt Sunrise from these requirements — the wind forces are real regardless of coastline proximity.
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
                <h3 className="text-xl font-bold text-white mb-3">Can a Sunrise homeowner pull their own roof permit?</h3>
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
            Ready to Get Your Roof Done Right in Sunrise?
          </h2>

          <div className="text-left max-w-3xl mx-auto mb-8 text-zinc-100">
            <p className="mb-4 leading-relaxed">
              Every company on this list has earned their place — verified licenses, strong reviews, and real local presence. The right choice comes down to your specific situation: roof type, storm damage claim status, commercial vs. residential, HOA restrictions, and what level of service and documentation you need.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want the contractor who does the most for your long-term protection — roof, structure, and insurance savings — with the broadest range of manufacturer certifications, <strong>All Phase Construction USA</strong> is the call to make.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want a dual-licensed Broward contractor based right next to Sunrise with structural repair capability and a strong local track record, <strong>Ricketts Roofing &amp; Construction</strong> is worth every minute of your call.
            </p>

            <p className="mb-4 leading-relaxed">
              If you're dealing with storm damage and need expert insurance coordination, <strong>Roofing Recovery</strong> specializes in exactly that kind of guidance and documentation.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want the local Sawgrass/Sunrise company that understands your community restrictions and offers competitive pricing, <strong>Sawgrass Roofing</strong> has the neighborhood roots you need.
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
            <h3 className="text-xl font-bold text-white mb-6">Best Roofers in Other Cities</h3>
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
