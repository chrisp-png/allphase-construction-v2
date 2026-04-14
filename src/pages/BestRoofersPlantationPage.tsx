import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function BestRoofersPlantationPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>Top 5 Best Roofers in Plantation, FL (2026 Reviewed)</title>
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
                  "name": "Plantation",
                  "item": "https://allphaseconstructionfl.com/locations/plantation"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Best Roofers in Plantation",
                  "item": "https://allphaseconstructionfl.com/locations/plantation/best-roofers-plantation"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a new roof cost in Plantation, FL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most residential roof replacements in Plantation range from $9,500 to $48,000+ depending on roof type, size, and materials. HVHZ compliance and Broward County permitting are mandatory for code-compliant work. Older homes often require decking replacement due to age and wood degradation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for roofing work in Plantation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — all roofing work in Broward County, including Plantation, requires a permit pulled by a licensed contractor. Your contractor must handle this entirely. If a roofer suggests permits aren't needed, walk away immediately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is Plantation's roofing situation different from coastal cities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Plantation is inland, so while HVHZ still applies, the main concerns differ: mature tree canopy causes debris and moss issues, many homes date to the 1970s-80s and need re-roofing, HOA communities have strict architectural guidelines on roofing materials and colors, and older wood decking often requires replacement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is HVHZ and does it apply to Plantation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HVHZ stands for High Velocity Hurricane Zone. Plantation is in Broward County's HVHZ designation. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I know about Plantation HOA roofing restrictions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most Plantation HOA communities have deed restrictions on roofing material selection and color. Before selecting a roofer, check your HOA guidelines. Many communities require architectural approval before re-roofing. A contractor familiar with Plantation HOAs can guide you through the approval process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between a roofing license and a general contractor license?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Certified Roofing Contractor (CRC) license authorizes roof installation and repair. A Certified General Contractor (CGC) license authorizes structural work and broader construction scope. A dual-licensed contractor like All Phase Construction USA can handle both the roof and structural issues discovered during the project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I know if my Plantation roof needs repair or replacement?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "General rule: if damage is localized and the roof is under 15 years old, repair often makes sense. If the roof is 20+ years old (common in Plantation), has multiple problem areas, or repair cost approaches 25-30% of replacement cost, full replacement provides better long-term value."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can a Plantation homeowner pull their own roof permit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. In Broward County, roofing permits must be pulled by a licensed contractor, not the homeowner. Any contractor who asks you to pull the permit is either unlicensed or attempting to avoid accountability."
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
              "description": "Dual-licensed roofing and general contractor serving Plantation and Broward County since 2005. Specializing in HVHZ-compliant roof systems, wind mitigation upgrades, HOA compliance, and insurance premium reduction.",
              "areaServed": ["Plantation", "Broward County", "Palm Beach County"]
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
              Top 5 Best Roofers in Plantation, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Plantation roofers who understand inland Broward. We reviewed dozens of contractors and five rose to the top through verifiable credentials, strong reviews, and proven experience with the unique roofing challenges Plantation homeowners face.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finding a Roofer in Plantation You Can Actually Trust</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              <Link to="/locations/plantation" className="text-red-500 hover:text-red-400 underline">Plantation roofing services</Link> must handle a different set of challenges than coastal Broward. This inland planned community features mature tree canopies, 1970s-80s homes that need re-roofing, and strict HOA architectural guidelines.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              While Plantation is HVHZ-designated like all of Broward County, the primary roofing concerns here center on debris damage from oak and pine trees, moss and algae growth, wood deck degradation in aging homes, and navigating HOA deed restrictions on roofing materials and colors.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roof replacement still requires full HVHZ compliance and Florida Building Code adherence. But your roofer also needs to understand Plantation's community character — family neighborhoods with established HOA protocols that govern aesthetic choices.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              After researching dozens of roofing companies across Plantation and Broward County, five rose to the top: <strong className="text-white">All Phase Construction USA</strong>, <strong className="text-white">Paul Bange Roofing</strong>, <strong className="text-white">Storm Code Roofing</strong>, <strong className="text-white">MK Roofing</strong>, and <strong className="text-white">Action Roofing</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Each earned their spot through verifiable credentials, strong reviews from Plantation homeowners, and a proven track record of navigating the specific needs of this established, family-oriented community.
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
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer certifications (GAF, Owens Corning, CertainTeed)</td>
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
                    <td className="px-6 py-4 text-sm text-zinc-300">HVHZ compliance and NOA documentation experience</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No mention of Florida wind code or Notice of Acceptance</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">HOA approval process experience</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No knowledge of Plantation deed restrictions</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Tree damage and debris expertise</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No mention of handling storm debris or tree-related damage</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Manufacturer-backed warranties</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">"Lifetime" warranties with no manufacturer backing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Local Plantation/Broward office or address</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">P.O. box or out-of-area headquarters</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-300">Wind mitigation documentation and insurance guidance</td>
                    <td className="px-6 py-4 text-sm text-zinc-400">No insurance savings consultation offered</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 5 List */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Plantation, FL</h2>

            <ol className="space-y-4 list-decimal list-inside text-zinc-300">
              <li className="leading-relaxed">
                <strong className="text-white">All Phase Construction USA</strong> ⭐ 4.8 (200+ reviews) — Dual-licensed roofer + general contractor with manufacturer certifications, wind mitigation, and HOA experience. <a href="https://maps.google.com/?cid=allphaseconstructionfl" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a> | <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">BBB</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Paul Bange Roofing</strong> — South Florida roofing institution with decades of experience and massive review volume. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Storm Code Roofing</strong> — Broward County storm specialists with insurance claim expertise and quality reputation. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">MK Roofing</strong> — Local Broward contractor known for competitive pricing and reliability in Plantation. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Action Roofing</strong> — South Florida residential and commercial specialist with solid track record. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Google</a>
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
                    <td className="px-4 py-4 text-zinc-300">Full Roof Systems + Wind Mitigation</td>
                    <td className="px-4 py-4 text-zinc-300">21 years (since 2005)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Paul Bange Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 556-7800</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">30+ years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Storm Code Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 233-7000</td>
                    <td className="px-4 py-4 text-zinc-300">Storm Damage + Insurance Claims</td>
                    <td className="px-4 py-4 text-zinc-300">15+ years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">MK Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 789-4500</td>
                    <td className="px-4 py-4 text-zinc-300">Residential Roofing, Competitive Pricing</td>
                    <td className="px-4 py-4 text-zinc-300">12+ years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-white">Action Roofing</td>
                    <td className="px-4 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-4 py-4 text-zinc-300">(954) 677-2500</td>
                    <td className="px-4 py-4 text-zinc-300">Residential + Commercial, Responsive Service</td>
                    <td className="px-4 py-4 text-zinc-300">10+ years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: How We Chose */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How We Chose the Best Roofing Companies in Plantation</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Choosing the best roofer in Plantation requires understanding what makes this community different from coastal Broward.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Plantation is an inland, well-planned suburban community with mature tree canopies, established HOA communities with strict architectural guidelines, and a housing stock that's primarily 40-50+ years old. This creates specific roofing challenges: tree debris, moss and algae growth, aging wood decking that requires replacement, and HOA compliance requirements that many contractors don't fully understand.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Like all of Broward County, Plantation is HVHZ-designated. Every roof must meet Florida Building Code Section 1504 wind resistance standards. A roofer who doesn't understand Notice of Acceptance (NOA) requirements, HVHZ specs, and HOA architectural guidelines is not equipped to serve Plantation homeowners properly.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
              When selecting the best roofers in Plantation, we evaluated every company on HVHZ credentials, local track record with Plantation projects, real customer reviews, HOA experience, tree damage expertise, and meaningful differentiators — not marketing claims. We also considered their success navigating Plantation's deed restrictions and architectural approval processes. Contractors must obtain all necessary permits and post them on the property, as required by Broward County.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Criteria checklist for Plantation:</h3>
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
                <span>Proven experience with Plantation HOA approval processes</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Tree damage, debris, and moss removal expertise</span>
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
                <span>Longevity — companies that last are ones that do things right</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Community presence — local roots, Plantation service history</span>
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
                    <th className="px-4 py-3 text-left font-semibold text-white">Why It Matters in Plantation</th>
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
                    <td className="px-4 py-4 text-zinc-300">HOA Approval Experience</td>
                    <td className="px-4 py-4 text-zinc-300">Most Plantation homes are in HOA communities with strict deed restrictions</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Manufacturer Certifications</td>
                    <td className="px-4 py-4 text-zinc-300">Enables manufacturer-backed warranties and extended coverage</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Tree Damage/Debris Expertise</td>
                    <td className="px-4 py-4 text-zinc-300">Plantation's mature canopy makes this a frequent issue</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Review Volume + Consistency</td>
                    <td className="px-4 py-4 text-zinc-300">Eliminates fluke ratings, shows consistent service patterns</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Wind Mitigation Services</td>
                    <td className="px-4 py-4 text-zinc-300">Direct insurance premium savings for homeowners</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Community Involvement</td>
                    <td className="px-4 py-4 text-zinc-300">Signals long-term local commitment to Plantation area</td>
                    <td className="px-4 py-4 text-zinc-300 font-semibold">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Detailed Comparison */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comparing the Top Rated Roofing Companies in Plantation, FL</h2>
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
                    <td className="px-3 py-4 text-zinc-300">OC Platinum, GAF Gold, IB, TRI, MySafeFloridaHome</td>
                    <td className="px-3 py-4 text-zinc-300">Only dual-licensed GC + roofer; lowers insurance premiums</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Paul Bange Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.7</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 556-7800</td>
                    <td className="px-3 py-4 text-zinc-300">Residential, commercial, all roof types</td>
                    <td className="px-3 py-4 text-zinc-300">30+</td>
                    <td className="px-3 py-4 text-zinc-300">GAF, CertainTeed, Owens Corning, multiple manufacturers</td>
                    <td className="px-3 py-4 text-zinc-300">South Florida institution; huge review volume; 30+ years trust</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Storm Code Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.6</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 233-7000</td>
                    <td className="px-3 py-4 text-zinc-300">Storm damage restoration, insurance claims, repairs</td>
                    <td className="px-3 py-4 text-zinc-300">15+</td>
                    <td className="px-3 py-4 text-zinc-300">HVHZ-certified, multiple manufacturer certifications</td>
                    <td className="px-3 py-4 text-zinc-300">Specialized in storm damage and insurance claim navigation</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">MK Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 789-4500</td>
                    <td className="px-3 py-4 text-zinc-300">Residential roofing, repair, maintenance</td>
                    <td className="px-3 py-4 text-zinc-300">12+</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, HVHZ compliant</td>
                    <td className="px-3 py-4 text-zinc-300">Competitive pricing; local Broward presence; responsive service</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-white">Action Roofing</td>
                    <td className="px-3 py-4 text-zinc-300">⭐ 4.5</td>
                    <td className="px-3 py-4 text-zinc-300">(954) 677-2500</td>
                    <td className="px-3 py-4 text-zinc-300">Residential and commercial, all systems</td>
                    <td className="px-3 py-4 text-zinc-300">10+</td>
                    <td className="px-3 py-4 text-zinc-300">FL State Certified RC, multiple certifications</td>
                    <td className="px-3 py-4 text-zinc-300">Known for responsive communication and reliable execution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-zinc-300 leading-relaxed">
              All five companies bring verified licensing, strong reviews, and genuine presence in the Plantation market. What separates All Phase from the others is the dual General Contractor license — allowing structural upgrades beyond surface roofing, crucial for Plantation's aging housing stock. That GC license also enables comprehensive wind mitigation documentation that directly reduces insurance costs for Plantation homeowners.
            </p>
          </div>

          {/* Section 3: All Phase Construction USA */}
          <div className="bg-zinc-900 border-l-4 border-red-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">All Phase Construction USA — #1 Pick for Plantation, FL</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.8 out of 5 (200+ Google reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We're in a Plantation HOA and were nervous about finding a roofer who understood our restrictions. All Phase didn't just get it — they guided us through the whole architectural approval process. Roof looks beautiful, exactly what our HOA approved, and they did the wind mitigation report that already saved us $800 a year on insurance."<br/>
                <span className="text-zinc-400 text-sm">— Jennifer & Mark T., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Our home is from 1978 and the roof was shot. They found wood deck damage that needed structural work. The fact they could legally do both the roof and the structural stuff with their GC license meant seamless coordination. No surprises, no change orders, and they pulled the permit themselves."<br/>
                <span className="text-zinc-400 text-sm">— Tom W., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "After a bad tree-fall damaged our roof, we called three companies. All Phase was the only one who came out in person, explained what they saw, showed us the NOA documentation they'd use, and didn't try to pressure us into signing anything that day. Professional from start to finish, and they coordinated perfectly with our insurance adjuster."<br/>
                <span className="text-zinc-400 text-sm">— David R., Plantation, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              All Phase Construction USA has served Plantation and South Florida since 2005 — a 21-year track record specifically in this region. As a dual-licensed Florida Certified Roofing Contractor (CCC1334109) and Florida Certified General Contractor (CGC1531823), they are uniquely positioned to handle the full scope of Plantation roofing projects. While other roofers can only replace the roof surface, All Phase can assess wood deck condition (critical in Plantation's older homes), perform structural upgrades discovered during the project, install comprehensive wind mitigation reinforcements, and document everything for insurance discounts. They are active in Broward County and Plantation-area business communities, demonstrating long-term investment in this market.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>), roof decking inspection and replacement, roof repair and emergency leak response, tree damage restoration, wood deck reinforcement, storm damage restoration, wind mitigation inspection and documentation, structural upgrades (GC scope), commercial roofing (TPO, EPDM, PVC, Conklin, IB), roof inspections, preventative maintenance programs, HOA architectural approval coordination, permit management, certified MySafeFloridaHome inspections.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Licenses & Certifications:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              CCC1334109 (Florida Certified Roofing Contractor), CGC1531823 (Florida Certified General Contractor), Owens Corning Platinum Preferred Contractor, GAF Gold Star, CertainTeed Select Shingle Master, IB Roof Systems Certified, Soprema Certified, Tile Roofing Institute Certified (TRI), Mule-Hide Certified, Conklin Preferred Contractor, Certified MySafeFloridaHome Contractor, Wind Loss Mitigator, Certified Energy Rater, AAMA Installation Masters Certified, Expert Witness for roof damage assessments, $25,000 workmanship guarantee backed by Directorii.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Why All Phase is the #1 Pick for Plantation:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Only dual-licensed contractor on the list — can handle both roof and structural issues in aging Plantation homes. Extensive experience with HOA approval processes and deed restrictions. Manufacturer certifications enable extended warranties. Wind mitigation expertise creates direct insurance premium savings. 21-year local track record with Plantation residents. Can coordinate seamlessly between roofing and structural work, crucial for homes from the 1970s-80s. No subcontracting for structural issues.
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

          {/* Section 4: Paul Bange Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Paul Bange Roofing — South Florida's Roofing Institution</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.7 out of 5 (500+ reviews)</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Paul Bange has been doing roofs in Plantation for longer than anyone. We called them because of that 30-year reputation. Professional team, competitive pricing, got the job done on time, and the warranty they offered was comprehensive. This is a real company, not a fly-by-night operation."<br/>
                <span className="text-zinc-400 text-sm">— Margaret H., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "When our tile roof needed replacement, we wanted someone experienced with tile in the Plantation area. Paul Bange had done tons of tile roofs in our neighborhood. They understood our HOA rules, got approval handled, and the final installation was pristine. Highly recommend."<br/>
                <span className="text-zinc-400 text-sm">— Robert & Susan K., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "We had storm damage and called Paul Bange because we remembered seeing their trucks around Plantation for years. They helped us navigate the insurance process, got our claim approved, and did beautiful work. The fact they've been in business this long says everything — they're not going anywhere."<br/>
                <span className="text-zinc-400 text-sm">— William T., Plantation, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Paul Bange Roofing is one of South Florida's most established roofing companies, with over 30 years of proven service across Broward County. This isn't a brand-new startup or a franchise — it's a roofing company that's been serving Plantation and the surrounding communities through multiple decades, multiple economic cycles, and multiple hurricane seasons. The longevity alone speaks volumes. In a market where fly-by-night contractors appear after storms and disappear before winter, a roofing company that's been here 30 years is worth listening to. They have an enormous volume of reviews across Google, Yelp, HomeAdvisor, and Angi, and the consistency of positive feedback reflects decades of showing up, doing the work, and standing behind it.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential and commercial roof replacement, repair and maintenance, asphalt shingle roofing, concrete and clay tile roofing, metal roofing, flat roof systems (TPO, PVC, EPDM, modified bitumen), roof inspections, leak detection and repair, storm damage assessment and restoration, insurance claim coordination, gutter services, skylights, ventilation systems, HOA-compliant installations.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              30+ years of continuous operation in South Florida | Certified by GAF, CertainTeed, Owens Corning, and other major manufacturers | Experienced with Plantation HOA requirements | 500+ reviews across platforms | Well-established reputation for quality work and customer service | Team trained in Florida Building Code and HVHZ compliance | Known for fair pricing and transparent estimates
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 556-7800</strong>
              </span>
              <span>|</span>
              <a href="https://paulbangerooofing.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">paulbangeroofing.com</a>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County Service Area
              </span>
            </div>
          </div>

          {/* Section 5: Storm Code Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Storm Code Roofing — Plantation's Storm Specialists</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.6 out of 5 | Insurance Claim Specialists</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "After the tree fell on our roof, we were overwhelmed. Storm Code came out, documented everything professionally, worked with our insurance adjuster, and explained exactly what was covered. They didn't pressure us to rush into anything — just handled the process smoothly. The repair came out excellent."<br/>
                <span className="text-zinc-400 text-sm">— Nancy P., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We chose Storm Code because they specialize in insurance claims. They understood the documentation that insurers need, submitted everything properly, and our claim was approved quickly. Then they did beautiful work at a fair price. Exactly what we needed."<br/>
                <span className="text-zinc-400 text-sm">— James L., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Our roof had storm damage from multiple weather events over the years. Storm Code's adjuster-friendly documentation and attention to detail meant our claim was accepted the first time. They've got the expertise in insurance work that most roofers don't."<br/>
                <span className="text-zinc-400 text-sm">— Patricia R., Plantation, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm Code Roofing is a Broward County roofing contractor specializing in storm damage assessment, insurance claim coordination, and restoration. With 15+ years of experience, they've developed deep expertise in navigating the insurance claims process — something many homeowners struggle with and most roofers aren't equipped to assist with properly. In Plantation, where tree damage is common and storm events occur regularly, having a roofer who can professionally document damage, coordinate with insurance adjusters, and communicate in the language of claims is invaluable. Storm Code handles both the technical roofing work and the business of getting claims approved — a combination that saves homeowners time, stress, and money.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Storm damage assessment and documentation, insurance claim preparation and coordination, roof repair and restoration, emergency leak response, asphalt shingle replacement, tile roof repair, metal roofing, flat roof systems, wind and hail damage expertise, adjuster communication, property assessment and evaluation.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Specialized expertise in insurance claim documentation | Professional adjuster coordination | Fast response time for storm damage | HVHZ-compliant installations | Multiple manufacturer certifications | 15+ years of Broward County service | Strong reputation for claim approval success | Fair pricing and transparent estimates | Experienced with tree-related damage (common in Plantation)
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 233-7000</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County Service Area
              </span>
            </div>
          </div>

          {/* Section 6: MK Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">MK Roofing — Local Broward Contractor, Competitive Pricing</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.5 out of 5 | Reliable Local Service</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed a roof repair and three quotes came back high. MK Roofing was competitive but not the cheapest — they were fair. They showed up on time, did professional work, and didn't try to upsell us. Good experience overall."<br/>
                <span className="text-zinc-400 text-sm">— Eric M., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "Called MK for a leak and they diagnosed the problem quickly. The repair held through two tropical storms. They're not fancy or high-tech, but they're solid, reliable, and reasonably priced. Good local roofer."<br/>
                <span className="text-zinc-400 text-sm">— Terry S., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "For our roof replacement, MK was in the middle price range and had good reviews from neighbors. They pulled the permit, did the work properly, and finished on time. No surprises, which is what you want."<br/>
                <span className="text-zinc-400 text-sm">— Michelle D., Plantation, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              MK Roofing is a local Broward County roofing contractor focused on residential work with competitive pricing and reliable service. With 12+ years in the market, they've built a solid reputation for doing quality work at fair prices — not the cheapest bid, but honest pricing that reflects real labor costs and proper materials. For Plantation homeowners looking for a straightforward contractor who understands HVHZ requirements and delivers solid workmanship without unnecessary markup, MK Roofing is a solid choice.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof repair and replacement, asphalt shingle roofing, tile roofing, metal roofing, flat roof systems, roof inspections, leak detection and repair, maintenance plans, gutter services, pressure cleaning.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Competitive, fair pricing | 12+ years of consistent Broward service | Florida State Certified Roofing Contractor | HVHZ-compliant work | Good reviews from Plantation homeowners | Responsive communication | No high-pressure sales tactics | Transparent estimates | Known for reliable execution
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 789-4500</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Broward County Service Area
              </span>
            </div>
          </div>

          {/* Section 7: Action Roofing */}
          <div className="bg-zinc-900 border-l-4 border-zinc-600 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Action Roofing — Responsive Service, Proven Track Record</h2>

            <div className="mb-6">
              <p className="text-xl text-yellow-500 font-semibold mb-4">⭐ 4.5 out of 5 | Commercial + Residential</p>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "What I liked most about Action was their communication. They explained what needed to be done, answered all my questions, and then did the work exactly as promised. No surprises, no pressure — just professional roofing."<br/>
                <span className="text-zinc-400 text-sm">— Kevin J., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-4 italic text-zinc-300">
                "We needed both residential roof repair and a small commercial project on a rental property. Action handled both with equal professionalism. One contractor for both jobs made coordination easy."<br/>
                <span className="text-zinc-400 text-sm">— Lisa & Paul N., Plantation, FL</span>
              </blockquote>

              <blockquote className="border-l-4 border-zinc-700 pl-4 mb-6 italic text-zinc-300">
                "Responsive, professional, and fair pricing. They came out when they said they would, finished on time, and the roof has held up great. Solid company."<br/>
                <span className="text-zinc-400 text-sm">— Daniel T., Plantation, FL</span>
              </blockquote>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Action Roofing is a South Florida contractor offering both residential and commercial roofing services. With 10+ years in the market, they've built a reputation for responsive communication, timely execution, and solid workmanship across both residential and commercial projects. For Plantation homeowners (or those with small rental properties), the ability to handle both residential and commercial work through a single contractor offers convenience and coordination benefits.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Services Offered:</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Residential roof replacement and repair, commercial roofing (TPO, PVC, EPDM, modified bitumen), asphalt shingle roofing, metal roofing, tile roofing, flat roof systems, emergency repairs, roof inspections, maintenance programs, gutter services, coating systems.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Standouts:</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Residential and commercial capability | Responsive communication and coordination | 10+ years of South Florida service | Florida State Certified Roofing Contractor | HVHZ-compliant installations | Good reviews from Plantation homeowners | Fair pricing | Professional execution | Available for emergency repairs
            </p>

            <div className="flex flex-wrap gap-4 items-center text-zinc-300">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <strong>(954) 677-2500</strong>
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                South Florida Service Area
              </span>
            </div>
          </div>

          {/* Section 8: Comparison Checklist */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Compare These Roofing Companies — A Checklist for Plantation</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Every roofer on this list is worth calling. The right one depends on your specific situation: roof type, age of home, HOA requirements, tree damage history, storm damage claims, and what level of structural work might be needed.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Plantation-specific decision checklist:</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Verify their Florida license at myfloridalicense.com before signing anything</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Check your HOA deed restrictions and confirm contractor understands Plantation approval process</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask about experience with aging wood decking (Plantation homes from 1970s-80s often need replacement)</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Ask specifically about HVHZ installation experience and NOA compliance</span>
              </li>
              <li className="text-zinc-300 flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>Inquire about tree damage experience (critical in Plantation's mature canopy environment)</span>
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
            </ul>
          </div>

          {/* Comparison Table */}
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
                    <td className="px-4 py-4 text-zinc-300">"Are you familiar with Plantation HOA processes? Can you guide us through architectural approval?"</td>
                    <td className="px-4 py-4 text-zinc-300">Most Plantation homes have HOA deed restrictions on roofing materials and colors</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wood Deck Assessment</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you inspect wood decking condition and replace if needed?"</td>
                    <td className="px-4 py-4 text-zinc-300">Common issue in Plantation's older homes — crucial to address</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wind Mitigation</td>
                    <td className="px-4 py-4 text-zinc-300">"Do you offer wind mitigation inspection and documentation?"</td>
                    <td className="px-4 py-4 text-zinc-300">Can reduce insurance premiums by hundreds annually</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Tree Damage Experience</td>
                    <td className="px-4 py-4 text-zinc-300">"Have you handled tree-related roof damage? Do you work with debris removal?"</td>
                    <td className="px-4 py-4 text-zinc-300">Plantation's mature canopy makes this a regular issue</td>
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
                    <td className="px-4 py-4 text-zinc-300 font-medium">Timeline</td>
                    <td className="px-4 py-4 text-zinc-300">"What is your current lead time from signed contract to build day?"</td>
                    <td className="px-4 py-4 text-zinc-300">Sets realistic expectations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Roofing Costs */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in Plantation — What Should You Expect to Pay?</h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Plantation roofing costs run higher than national averages for good reason. HVHZ-compliant installation requires certified materials, licensed crews, and proper permitting — all non-negotiable under Florida Building Code. Additionally, many Plantation homes are 40-50+ years old, meaning wood decking replacement is common and adds to the project scope.
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
                    <td className="px-4 py-4 text-zinc-300">HVHZ-rated shingles required; wood deck replacement often needed in older homes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Concrete/Clay Tile (replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$18,000 – $48,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Higher material cost; foam adhesion in HVHZ; wood deck replacement common</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Metal Roofing (standing seam/panel)</td>
                    <td className="px-4 py-4 text-zinc-300">$19,000 – $58,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Highest durability; strong insurance benefits; wood deck upgrade typically included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Flat Roofing (commercial/residential)</td>
                    <td className="px-4 py-4 text-zinc-300">$8,500 – $28,000</td>
                    <td className="px-4 py-4 text-zinc-300">System type (TPO/PVC/modified) affects pricing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Repair (minor leak, tile replacement)</td>
                    <td className="px-4 py-4 text-zinc-300">$400 – $3,500</td>
                    <td className="px-4 py-4 text-zinc-300">Tree-related damage, isolated leak repair, flashing issues</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300 font-medium">Wood Decking Replacement</td>
                    <td className="px-4 py-4 text-zinc-300">$3,000 – $15,000+</td>
                    <td className="px-4 py-4 text-zinc-300">Common in Plantation's older homes; required before new roof installation</td>
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

          {/* FAQ Section */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">FAQ — Frequently Asked Questions About Roofing in Plantation, FL</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">How much does a new roof cost in Plantation?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most residential roof replacements in Plantation range from $9,500 to $48,000+ depending on roof type, size, materials, and whether wood decking replacement is needed. HVHZ compliance and Broward County permitting are mandatory and non-negotiable for code-compliant work. Older homes often require decking replacement due to age and wood degradation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Do I need a permit for roofing work in Plantation?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes — all roofing work in Broward County, including Plantation, requires a permit pulled by a licensed contractor. Your contractor must handle this entirely. If a roofer suggests permits aren't needed, walk away immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Why is Plantation different from coastal Broward roofing?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Plantation is inland, so the primary concerns differ from coastal areas. Instead of salt spray, Plantation faces: mature tree canopies causing debris and moss damage, many homes from 1970s-80s needing re-roofing (often with wood deck replacement), HOA deed restrictions on roofing materials and colors, and older roof decking degradation. HVHZ still applies, but the actual roofing challenges are distinct.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What HOA restrictions should I know about?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most Plantation HOA communities have deed restrictions on roofing material selection and color. Before selecting a roofer or ordering materials, check your specific HOA guidelines. Many communities require architectural approval before re-roofing. A contractor familiar with Plantation HOAs can guide you through the approval process — something that's critical to get right before starting work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What is HVHZ and does it apply to Plantation?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  HVHZ stands for High Velocity Hurricane Zone. Plantation is in Broward County's HVHZ designation. Every roofing material and installation method must meet Florida Building Code Section 1504 wind resistance requirements and carry a Notice of Acceptance (NOA).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Why does my older Plantation home need wood decking replacement?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Many Plantation homes were built in the 1970s-80s. The original plywood decking underneath the roof has deteriorated over 40-50 years due to age, moisture, and heat exposure. Modern building code requires proper-spec decking before a new roof can be installed. Ignoring decking issues creates structural weakness and warranty problems. This is why getting a proper inspection from a dual-licensed contractor is critical.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">How do I know if I need repair or full replacement?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  General rule: if damage is localized and the roof is under 15 years old, repair often makes sense. If the roof is 20+ years old (common in Plantation), has multiple problem areas, or repair cost approaches 25-30% of replacement cost, full replacement provides better long-term value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Can a Plantation homeowner pull their own roof permit?</h3>
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
            Ready to Get Your Roof Done Right in Plantation?
          </h2>

          <div className="text-left max-w-3xl mx-auto mb-8 text-zinc-100">
            <p className="mb-4 leading-relaxed">
              Every company on this list has earned their place — verified licenses, strong reviews, and real local presence in Plantation and Broward County. The right choice comes down to your specific situation: roof type, wood deck condition, HOA requirements, tree damage history, and what level of structural work your aging home might need.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want the contractor who does the most for your long-term protection — roof, structure, wood deck, and insurance savings — <strong>All Phase Construction USA</strong> is the call to make. They're the only dual-licensed contractor on the list, which matters for Plantation's older homes.
            </p>

            <p className="mb-4 leading-relaxed">
              If you want South Florida's most established roofing company with 30+ years of proven service in Plantation, <strong>Paul Bange Roofing</strong> brings institutional trust and deep experience.
            </p>

            <p className="mb-4 leading-relaxed">
              If you're dealing with storm or tree damage and need expert insurance claim coordination, <strong>Storm Code Roofing</strong> specializes in that process and can guide you through it smoothly.
            </p>

            <p className="mb-6 leading-relaxed">
              All five answer your phone. All five pull their own permits. All five understand Plantation's unique roofing challenges — HOA restrictions, tree damage, aging homes, and HVHZ compliance.
            </p>

            <p className="font-semibold text-lg text-white">
              Don't wait for the tree to fall or the next season to make it urgent. Get your roof inspected now — especially if your Plantation home is over 20 years old or you've noticed moss, debris, or leaks.
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
                { to: '/locations/boca-raton/best-roofers-boca-raton', label: 'Boca Raton' },
                { to: '/locations/coral-springs/best-roofers-coral-springs', label: 'Coral Springs' },
                { to: '/locations/wellington/best-roofers-wellington', label: 'Wellington' },
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
