import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calculator, MapPin, Shield, Plus, Minus, ArrowRight, Wallet } from 'lucide-react';
import RoofCalculator from '../components/RoofCalculator';
import HVHZText from '../components/HVHZText';

export default function CalculatorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('roof-calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    

    // Add FAQ Schema
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a new roof cost in South Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New roof costs in Broward and Palm Beach Counties typically range from $9,000 to $70,000+ depending on roof size, material type, and system complexity. Shingle roofs ($4.50–$16/sq ft) are the most cost-effective, while tile roofs ($12–$35/sq ft) and metal roofs ($8–$28/sq ft) offer greater longevity. A 2,000 sq ft shingle roof averages $14,000–$22,000 installed. Tile roofs of the same size typically cost $24,000–$48,000. Final pricing depends on roof pitch, layers to remove, HVHZ fastening requirements, and code compliance upgrades."
          }
        },
        {
          "@type": "Question",
          "name": "What affects roof replacement cost the most?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof replacement cost is driven by the roof system requirements and the quality of installation, not just the material. The biggest pricing factors usually include roof size and complexity, tear-off requirements, HVHZ code compliance, underlayment and flashing details, ventilation upgrades, and any hidden decking repairs. Just as important: the crew installing the roof. Companies with specialized crews, experienced supervision, and consistent workmanship standards typically cost more than low-bid contractors using rotating subcontractors or day labor. In roofing, the cheapest quote often becomes the most expensive once repairs, leaks, and rework show up later."
          }
        },
        {
          "@type": "Question",
          "name": "Why are some roofing quotes so much cheaper than others?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lower quotes are often cheaper because corners are being cut somewhere–labor quality, supervision, underlayment/flashing details, code compliance, or warranty coverage. Roofing isn't just materials; it's a system. The best value usually comes from a contractor with trained crews, consistent installation standards, and a track record of roofs that perform long-term–not just the lowest number on paper."
          }
        },
        {
          "@type": "Question",
          "name": "Does it matter how long a roofing company has been in business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Longevity often signals that a company has stable crews, repeatable installation processes, and accountability after the job is done. Roofing problems don\u2019t always show up on day one\u2013so choosing a company with a proven history can reduce the risk of callbacks, ongoing leaks, and \u2018can\u2019t get them back out here\u2019 situations."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to repair a roof or replace it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with a diagnostic roof inspection to evaluate localized failure versus widespread deterioration. Repair is often the better first option when damage is confined to specific slopes, penetrations, or flashings–addressing the failure pattern without replacing sound areas. Replacement becomes necessary when deterioration is roof-wide, repeat failures are likely, or the system can no longer perform reliably. In Florida, repairs may also position a roof for the 5-year certification pathway under Florida Statute § 627.7011(5)(a), allowing insurers to renew based on roof condition rather than age alone when a qualified professional certifies 5+ years of useful life. This approach can defer replacement costs, support insurance renewals, and provide time for planned capital budgeting. Outcomes depend on inspection findings, repair scope, and individual roof condition."
          }
        },
        {
          "@type": "Question",
          "name": "Do tile roofs cost more than shingles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tile roofs cost 2–3 times more than asphalt shingle roofs due to material weight, installation complexity, and enhanced underlayment requirements. Concrete tile systems cost $12–$24 per square foot installed, while premium clay tile can reach $22–$35 per square foot. Shingle roofs range from $4.50–$16 per square foot. However, tile roofs typically last 40–50+ years compared to 20–30 years for shingles, offering better long-term value despite higher upfront cost."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover roof replacement in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insurance covers roof replacement in Florida only when damage results from a covered peril (wind, hail, fire) rather than normal wear and age-related deterioration. Wind damage from hurricanes or tropical storms is commonly covered, subject to deductibles and policy limits. Age-related granule loss, UV degradation, and general wear are not covered. Many Florida policies now include special hurricane deductibles (percentage of dwelling coverage) and depreciation schedules that reduce coverage as roofs age. Always obtain a professional roof inspection to document storm damage before filing claims."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements in South Florida take 2–7 days depending on roof size, material type, weather, and system complexity. Shingle roofs on homes under 2,500 sq ft typically complete in 2–3 days. Tile roof installations require 4–7 days due to weight, fastening requirements, and underlayment installation. Metal roofs take 3–5 days for proper panel seaming and clip attachment. Flat or low-slope commercial roofs vary widely based on membrane type and roof area. Permit processing adds 1–3 weeks before work begins. Weather delays are common during Florida's rainy season (June–September)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the average cost per square foot for a new roof in Broward County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Broward County roof replacement costs average $8–$20 per square foot installed, depending on material type and HVHZ compliance requirements. Shingle roofs cost $7–$14/sq ft, concrete tile $14–$22/sq ft, metal roofs $12–$24/sq ft, and flat membrane systems $8–$16/sq ft. Broward County properties require HVHZ-compliant fastening, which adds $1–$3 per square foot compared to non-HVHZ installations. These ranges include tear-off, disposal, new underlayment, installation, and all required flashings."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get financing for a roof replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most roofing contractors in South Florida offer financing options through third-party lenders with approved credit. Monthly payment plans typically range from 12–180 months with interest rates from 0% (promotional) to 12%+ depending on credit score and term length. Financing allows homeowners to address urgent roof needs without depleting savings. Home equity lines of credit (HELOCs) and cash-out refinancing are alternative options that may offer lower interest rates for qualified borrowers."
          }
        },
        {
          "@type": "Question",
          "name": "Why are roofs more expensive in South Florida than other parts of Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Broward County and most of South Florida fall within the High Velocity Hurricane Zone (HVHZ), which requires all roofing materials and installation methods to meet Miami-Dade NOA (Notice of Acceptance) standards. HVHZ-rated materials cost 10-20% more than standard materials, and the installation techniques are more labor-intensive."
          }
        },
        {
          "@type": "Question",
          "name": "Should I add wind mitigation upgrades during my reroof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Most wind mitigation upgrades can only be done during a reroof. The insurance savings alone ($2,000-$3,000+ per year) typically pay for the upgrades within 1-2 years. Over 20 years, that's $40,000-$60,000 in savings."
          }
        },
        {
          "@type": "Question",
          "name": "Do solar attic fans really make a difference on roof lifespan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Solar attic fans vent heat and humidity, reducing thermal shock on your underlayment and extending roof life. They also lower A/C costs by reducing attic temperatures where ductwork runs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if a roofer is cutting corners on tile installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask about the foam adhesive: what brand, what grade, what size foam pad under each tile, and whether the permit matches. This is the #1 area where roofers cut corners on tile roofs."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth financing extra roof upgrades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, yes. Financing an additional $5,000 for wind mitigation and ventilation typically pays for itself within 2 years through insurance and energy savings, with pure savings for the remaining 18 years of your roof's life."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.head.removeChild(faqSchema);
    };
  }, []);

  return (
    <><div className="min-h-screen bg-black">
      {/* Snippet-Optimized Intro Section */}
      <section className="bg-gradient-to-b from-zinc-950 to-black pt-32 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Calculator className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
              <div>
                <h1 className="text-2xl font-bold text-white mb-3">Roof Replacement Cost Calculator</h1>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  Get an instant ballpark estimate for your roof replacement cost in Broward County or Palm Beach County. This free calculator provides estimated pricing for <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">tile</Link>, <Link to="/metal-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">metal</Link>, <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">shingle</Link>, and <Link to="/flat-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">flat roofing</Link> systems based on roof size and material selection.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Final costs vary based on roof condition, pitch, <span className="text-amber-400 font-semibold">code requirements</span>, and <span className="text-amber-400 font-semibold">HVHZ compliance</span>. A <Link to="/roof-inspection/" className="text-white font-semibold hover:text-zinc-100 underline">professional roof inspection</Link> provides accurate pricing. In some cases, <Link to="/roofing-services/roof-repair/" className="text-white font-semibold hover:text-zinc-100 underline">roof repair</Link> may be a cost-effective alternative to full replacement.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800/50">
                  <button
                    onClick={scrollToCalculator}
                    className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Roof Cost
                  </button>
                  <Link
                    to="/roof-inspection/"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-600 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-800 hover:border-zinc-500 transition-colors"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Schedule a Roof Inspection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Component — FIRST, before educational content */}
      <section id="roof-calculator-section">
        <RoofCalculator />
      </section>

      {/* Educational Content Section — below calculator results */}
      <section className="py-16 bg-black px-4">
        <div className="max-w-6xl mx-auto">

          {/* Authority Introduction */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  <strong className="text-white">This calculator provides estimates only.</strong> Final pricing requires a professional roof inspection to evaluate roof condition, decking integrity, <span className="text-amber-400 font-semibold">code compliance requirements</span>, and site-specific installation factors.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Broward and most coastal Palm Beach County properties are located in the <HVHZText variant="south-florida" className="text-amber-400" />, which requires enhanced fastening patterns, approved underlayment systems, and <span className="text-amber-400 font-semibold">Florida Building Code compliance</span>. <HVHZText variant="acronym" showIcon={false} className="text-amber-400" /> requirements typically add $1–$3 per square foot to installation costs compared to standard installations.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">South Florida HVHZ Roof Pricing Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-600">
                    <th className="py-3 px-4 text-white font-semibold">Roof Type</th>
                    <th className="py-3 px-4 text-white font-semibold">Avg Cost per Sq Ft (South Florida HVHZ)</th>
                    <th className="py-3 px-4 text-white font-semibold">Typical Lifespan</th>
                    <th className="py-3 px-4 text-white font-semibold">Best Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700 bg-zinc-800/30">
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Asphalt Shingle</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$8–$12</td>
                    <td className="py-3 px-4 text-zinc-300">15–25 years</td>
                    <td className="py-3 px-4 text-zinc-300">Code-compliant residential replacements</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Tile (Concrete / Clay)</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$10–$18</td>
                    <td className="py-3 px-4 text-zinc-300">30–50 years</td>
                    <td className="py-3 px-4 text-zinc-300">Long-term durability, HOA & coastal homes</td>
                  </tr>
                  <tr className="border-b border-zinc-700 bg-zinc-800/30">
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/metal-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Metal (Standing Seam)</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$12–$20</td>
                    <td className="py-3 px-4 text-zinc-300">40–70 years</td>
                    <td className="py-3 px-4 text-zinc-300">Wind resistance, solar-ready systems</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/flat-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Flat / Low-Slope</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$10–$16</td>
                    <td className="py-3 px-4 text-zinc-300">20–30 years</td>
                    <td className="py-3 px-4 text-zinc-300">Commercial & modern residential roofs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Regional Cost Context */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">What Does a Typical Roof Cost in South Florida?</h2>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">For a standard 2,000 sq ft home in Broward or Palm Beach County, here's what most homeowners pay in 2026:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Shingle Roof</p>
                <p className="text-white text-xl font-bold">$16,000 – $26,000</p>
                <p className="text-zinc-500 text-xs mt-1">Most common residential choice</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Tile Roof</p>
                <p className="text-white text-xl font-bold">$20,000 – $38,000</p>
                <p className="text-zinc-500 text-xs mt-1">Concrete or clay tile systems</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Metal Roof</p>
                <p className="text-white text-xl font-bold">$24,000 – $44,000</p>
                <p className="text-zinc-500 text-xs mt-1">Standing seam &amp; stone-coated</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">Pricing is consistent across most cities in our service area. The real cost drivers are roof size, pitch, decking condition, and the material system you choose — not your zip code. <Link to="/contact" className="text-red-500 hover:text-red-400">Request a free inspection</Link> for a quote based on your actual roof.</p>
          </div>

          {/* Cost Factors Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">What Factors Affect Roof Replacement Cost?</h2>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-white">Roof size:</strong> Measured in squares (100 sq ft per square) – larger roofs cost more</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-white">Roof pitch:</strong> Steep roofs require additional safety equipment and labor time</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-white">Decking condition:</strong> Rotted or damaged plywood sheathing requires replacement before installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-amber-400">HVHZ fastening requirements:</strong> Enhanced nailing patterns and approved fasteners add labor and material costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-amber-400">Florida Building Code compliance:</strong> Tear-off, underlayment, flashing, and ventilation must meet current code standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-white">Material selection:</strong> Shingle, tile, metal, and flat roofing systems have different material and labor costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">––</span>
                <span><strong className="text-white">Upgrades and add-ons:</strong> Solar panel readiness, impact-rated materials, enhanced warranties, and ventilation improvements</span>
              </li>
            </ul>
          </div>

          {/* Estimate Clarification */}
          <div className="bg-zinc-800/60 border border-zinc-700/50 border-l-4 border-l-red-600 rounded p-6 mb-8">
            <p className="text-zinc-200 font-semibold mb-2">Important: Calculator Results Are Estimates Only</p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Accurate roof replacement pricing requires an on-site inspection to evaluate roof condition, identify hidden issues, measure roof dimensions, assess <span className="text-amber-400 font-semibold">code compliance requirements</span>, and develop a detailed scope of work. Calculator estimates provide general pricing ranges but cannot account for site-specific variables that affect final costs.
            </p>
            <Link
              to="/roof-inspection/"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Schedule a Roof Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Wind Mitigation & Insurance Savings Section */}
          <div className="bg-amber-950/20 border border-amber-900/40 border-l-4 border-l-amber-500 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Wind Mitigation & Insurance Savings (Florida Homeowners)</h2>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  Properly installed roofing systems in South Florida may qualify for <strong className="text-white">wind mitigation credits</strong> that can reduce homeowners insurance premiums. Features such as <span className="text-amber-400 font-semibold">enhanced roof decking attachment</span>, <span className="text-amber-400 font-semibold">secondary water barriers</span>, <span className="text-amber-400 font-semibold">impact-rated materials</span>, and <span className="text-amber-400 font-semibold">code-compliant fastening patterns</span> are evaluated during wind mitigation inspections.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Investing slightly more during roof replacement to meet enhanced wind resistance standards may result in lower insurance costs over the life of the roof. Annual premium savings can offset incremental installation costs within 3–7 years for many South Florida properties.
                </p>
                <Link
                  to="/roof-inspection/"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-600/60 text-amber-100 font-semibold rounded hover:bg-amber-900/30 hover:border-amber-500 transition-colors"
                >
                  Learn About Wind Mitigation Inspections
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Financing Options Section */}
          <div className="bg-zinc-800/50 border border-zinc-700/40 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-6 h-6 text-zinc-400" />
              <h2 className="text-xl font-bold text-white">Flexible Roof Financing Options</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Roof replacement and repair costs can be managed with flexible financing options designed for homeowners. Whether you need to finance a complete roof replacement, targeted repairs, or only the cost difference when upgrading to premium materials like tile or metal, affordable monthly payment plans are available to qualified homeowners.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Financing allows you to address urgent roof needs without depleting savings or delaying necessary work. Payment terms and rates vary based on credit approval, project scope, and selected financing program.
            </p>
            <Link
              to="/easy-payments/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-zinc-600 text-zinc-200 font-semibold rounded hover:bg-zinc-700/50 hover:border-zinc-500 transition-colors"
            >
              View Roofing Financing Options
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Insights Content — Written by Chris Porosky, All Phase Construction */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: What Most Homeowners Don't Know */}
          <h2 className="text-3xl font-bold text-white mb-6">What Most South Florida Homeowners Don't Know About Their Roof Cost</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            When homeowners in South Florida use a roof cost calculator, they're usually focused on the price of shingles or tiles. But the real cost of a roof — and the real savings — goes much deeper than what's on the surface.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            In our 20+ years of re-roofing homes across Broward County, we've found that 99% of homes are under-insulated in their attic. Most homeowners don't think about what's happening in that attic space, but it directly affects how long your roof lasts, what your energy bills look like, and how hard your A/C system has to work.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Here's what happens: whether you have a tile roof or asphalt shingles, your roof covering absorbs heat directly from the Florida sun and transfers it into the attic. When that attic gets extremely hot, the underlayment — the protective layer between your roof covering and the plywood decking — is affected by what's called <strong className="text-white">thermal shock</strong>. This repeated heating and cooling cycle deteriorates the underlayment much faster than normal, which means your roof fails sooner than it should.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-8">
            This is why two identical roofs installed on the same street can have completely different lifespans. The difference often comes down to what's happening underneath.
          </p>

          {/* Section 2: Solar Attic Fans */}
          <h2 className="text-3xl font-bold text-white mb-6">Why We Recommend Solar Attic Fans on Every Reroof</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            One of the most cost-effective upgrades you can add during a roof replacement is proper attic ventilation. Instead of the expensive route of adding insulation throughout the attic, we run the calculations for proper ventilation — and the results speak for themselves.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            We personally install solar attic fans on most of our jobs, and here's why they work so well in South Florida: they don't even need direct sunlight to start working. As soon as the sun rises in the morning, the fan starts spinning and forcing positive airflow, venting heat and humidity out of the attic. As the sun moves overhead and the intensity increases through midday, the fan spins faster and works harder — exactly when you need it most.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The ideal placement is on the southwest side of the roof. This way, as the sun sets into the evening, the fan continues to vent. The goal is to prevent the attic from getting dangerously hot in the first place, rather than trying to cool it down after the fact.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            We can immediately tell the difference when we walk into an attic that's properly vented versus one that isn't. It's a night-and-day comparison. The benefits are threefold:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span><strong className="text-white">Your roof lasts longer</strong> because the underlayment isn't baking and deteriorating from thermal shock</span>
            </li>
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span><strong className="text-white">Your A/C bill drops</strong> because your ductwork (which runs through the attic in most South Florida homes) isn't sitting in a 150°F+ environment</span>
            </li>
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span><strong className="text-white">Your A/C unit lasts longer</strong> because it's not working as hard to keep up with the heat radiating down from the attic</span>
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mb-8">
            Most homeowners think of attic ventilation as an energy-saving upgrade. As roofers, we think of it as a roof-preservation upgrade that happens to also lower your utility bills.
          </p>

          {/* Section 3: Wind Mitigation ROI */}
          <h2 className="text-3xl font-bold text-white mb-6">Wind Mitigation Upgrades: The Hidden ROI Most Calculators Miss</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            If you're getting a new roof in Broward County or anywhere in the South Florida <span className="text-amber-400 font-semibold">High Velocity Hurricane Zone</span>, the wind mitigation techniques available to you should not be taken lightly. Here's what most homeowners don't realize: <strong className="text-white">most of these upgrades can only be done during a reroof.</strong>
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Take secondary water barriers, for example. These cannot be installed after the fact — they go on during the re-roofing process when the decking is exposed. Roof-to-wall connections are technically possible to add later, but it becomes extremely expensive because you'd be opening up a new roof, cutting through soffit, and causing significant damage in the process. The practical, cost-effective window to do these upgrades is when the roof covering is already off and the plywood is exposed.
          </p>

          {/* Insurance Savings Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Wind Mitigation Insurance Savings Over Time</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-600">
                    <th className="py-3 px-4 text-white font-semibold">Insurance Savings</th>
                    <th className="py-3 px-4 text-white font-semibold">Over 10 Years</th>
                    <th className="py-3 px-4 text-white font-semibold">Over 20 Years (Roof Life)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="py-3 px-4 text-white font-bold">$2,500/year premium reduction</td>
                    <td className="py-3 px-4 text-amber-400 font-bold">$25,000 saved</td>
                    <td className="py-3 px-4 text-amber-400 font-bold">$50,000 saved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed mb-4">
            Insurance companies very rarely lower their prices — they only go up. The same is true for utility companies. So the savings you lock in today only become more valuable over time.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-8">
            This is where financing plays a critical role. Even if you were prepared to pay $20,000 for a standard roof replacement, it often makes sense to finance an additional $5,000 for all the wind mitigation and energy upgrades. You'll make that money back within two years through insurance and utility savings alone. After that, it's pure savings for the remaining 18 years of your roof's life.
          </p>

          {/* Section 4: Material Insights */}
          <h2 className="text-3xl font-bold text-white mb-6">What a Contractor Knows About Materials That a Calculator Can't Tell You</h2>

          <h3 className="text-xl font-bold text-white mb-3">Asphalt Shingles</h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            There's new technology in the shingle world that most homeowners aren't aware of. Wind ratings have improved dramatically. Right now, Tamko offers the highest wind rating in the industry at 160 mph for <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">shingles</Link> — which matters when you're in a hurricane zone. Not all shingles are created equal, and the wind rating directly affects both your safety during a storm and your insurance premiums.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">Tile Roofing: Where Roofers Cut Corners Most</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            With <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">tile roofs</Link>, the most important factor isn't actually the tile itself — it's <strong className="text-white">how that tile is installed.</strong>
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Tile can be mechanically attached (screwed or nailed) or set with adhesive foam. There are many different grades of adhesives and different manufacturers, each offering different uplift calculations. A good roofer should take the time to educate you about whose foam they're using, how they're spraying it, and what size foam pad will go under each tile. The permit should match those specifications exactly.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-3">
            <strong className="text-red-500">This is the number one spot where roofers cut corners.</strong> Understanding these details and asking the right questions will help you keep your roofer accountable. Here's what to ask:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span>What brand and grade of foam adhesive are you using?</span>
            </li>
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span>What size foam pad will be under each tile?</span>
            </li>
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span>What are the uplift calculations, and do they meet HVHZ requirements?</span>
            </li>
            <li className="flex items-start text-zinc-300">
              <span className="text-red-600 mr-2 mt-1">—</span>
              <span>Does the permit match the exact adhesive and method being used?</span>
            </li>
          </ul>

          {/* Section 5: Why the Lowest Bid Costs More */}
          <h2 className="text-3xl font-bold text-white mb-6">Why the Lowest Roof Estimate Almost Always Costs More</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            In our experience, homeowners who go with the lowest bid almost always end up regretting it. They either don't get the energy or insurance savings they expected, or worse, they end up dealing with leaks and costly repairs within just a few years.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The roof is the single most important part of your home. It protects everything else — your walls, your belongings, your family. This is the one area where it pays to invest a little more for quality materials, proper installation techniques, and all the available wind mitigation and energy upgrades.
          </p>

          {/* Budget vs Upgraded Comparison Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Budget Roof vs. Upgraded Roof: 20-Year Cost Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-zinc-600">
                    <th className="py-3 px-4 text-white font-semibold"></th>
                    <th className="py-3 px-4 text-white font-semibold">Budget Roof</th>
                    <th className="py-3 px-4 text-white font-semibold">Upgraded Roof</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="py-3 px-4 text-white font-bold">Upfront Cost</td>
                    <td className="py-3 px-4 text-zinc-300">$18,000</td>
                    <td className="py-3 px-4 text-zinc-300">$23,000</td>
                  </tr>
                  <tr className="border-b border-zinc-700 bg-zinc-800/30">
                    <td className="py-3 px-4 text-white font-bold">Annual Insurance Savings</td>
                    <td className="py-3 px-4 text-zinc-300">$500/year</td>
                    <td className="py-3 px-4 text-amber-400 font-semibold">$2,500/year</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="py-3 px-4 text-white font-bold">Annual Energy Savings</td>
                    <td className="py-3 px-4 text-zinc-300">Minimal</td>
                    <td className="py-3 px-4 text-amber-400 font-semibold">$400–$800/year</td>
                  </tr>
                  <tr className="border-b border-zinc-700 bg-zinc-800/30">
                    <td className="py-3 px-4 text-white font-bold">20-Year Net Cost</td>
                    <td className="py-3 px-4 text-zinc-300">$8,000 ($18K − $10K savings)</td>
                    <td className="py-3 px-4 text-amber-400 font-bold">−$43,000 ($23K − $66K savings)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-bold">Risk of Early Failure</td>
                    <td className="py-3 px-4 text-zinc-300">Higher</td>
                    <td className="py-3 px-4 text-amber-400 font-semibold">Significantly lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed mb-8">
            The numbers are clear: spending $5,000 more upfront can save you $50,000+ over the life of your roof. That's not a cost — it's the smartest investment you can make in your home.
          </p>

          {/* CTA After Expert Content */}
          <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-6 text-center">
            <p className="text-xl font-bold text-white mb-3">Ready to See What Your Roof Really Costs?</p>
            <p className="text-zinc-300 mb-6">Get a free on-site inspection with a detailed scope of work — not just a number on paper.</p>
            <Link
              to="/roof-inspection/"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Free Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* People Also Ask Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            People Also Ask About Roof Costs
          </h2>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">How much does a new roof cost in South Florida?</span>
                {openFaqIndex === 0 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    New roof costs in Broward and Palm Beach Counties typically range from $9,000 to $70,000+ depending on roof size, material type, and system complexity. <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Shingle roofs</Link> ($4.50–$16/sq ft) are the most cost-effective, while <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">tile roofs</Link> ($12–$35/sq ft) and <Link to="/metal-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">metal roofs</Link> ($8–$28/sq ft) offer greater longevity. A 2,000 sq ft shingle roof averages $14,000–$22,000 installed. Tile roofs of the same size typically cost $24,000–$48,000. Final pricing depends on roof pitch, layers to remove, <span className="text-amber-400 font-semibold">HVHZ fastening requirements</span>, and <span className="text-amber-400 font-semibold">code compliance upgrades</span>.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">What affects roof replacement cost the most?</span>
                {openFaqIndex === 1 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Roof replacement cost is driven by the roof system requirements and the quality of installation, not just the material. The biggest pricing factors usually include roof size and complexity, tear-off requirements, <span className="text-amber-400 font-semibold">HVHZ code compliance</span>, underlayment and flashing details, ventilation upgrades, and any hidden decking repairs.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    Just as important: the crew installing the roof. Companies with specialized crews, experienced supervision, and consistent workmanship standards typically cost more than low-bid contractors using rotating subcontractors or day labor. In roofing, the cheapest quote often becomes the most expensive once repairs, leaks, and rework show up later.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">Why are some roofing quotes so much cheaper than others?</span>
                {openFaqIndex === 2 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Lower quotes are often cheaper because corners are being cut somewhere–labor quality, supervision, underlayment/flashing details, <span className="text-amber-400 font-semibold">code compliance</span>, or warranty coverage. Roofing isn't just materials; it's a system. The best value usually comes from a contractor with trained crews, consistent installation standards, and a track record of roofs that perform long-term–not just the lowest number on paper.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">Does it matter how long a roofing company has been in business?</span>
                {openFaqIndex === 3 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Yes. Longevity often signals that a company has stable crews, repeatable installation processes, and accountability after the job is done. Roofing problems don't always show up on day one–so choosing a company with a proven history can reduce the risk of callbacks, ongoing leaks, and "can't get them back out here" situations.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">Is it better to repair a roof or replace it?</span>
                {openFaqIndex === 4 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-zinc-300 leading-relaxed">
                      Start with a <Link to="/roof-inspection/" className="text-white font-semibold hover:text-zinc-100 underline">diagnostic roof inspection</Link> to evaluate <strong className="text-white">localized failure versus widespread deterioration</strong>. <Link to="/roofing-services/roof-repair/" className="text-white font-semibold hover:text-zinc-100 underline">Repair</Link> is often the better first option when damage is confined to specific slopes, penetrations, or flashings–addressing the failure pattern without replacing sound areas.
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      Replacement becomes necessary when deterioration is roof-wide, repeat failures are likely, or the system can no longer perform reliably.
                    </p>
                    <div className="bg-zinc-800 border-l-4 border-red-600 p-4 rounded">
                      <p className="text-zinc-200 font-semibold mb-2">Florida's 5-Year Roof Certification for Insurance Renewal</p>
                      <p className="text-zinc-300 leading-relaxed mb-2">
                        In Florida, repairs may position a roof for the <strong className="text-white">5-year certification pathway</strong> under <span className="text-amber-400 font-semibold">Florida Statute § 627.7011(5)(a)</span>. This allows insurers to renew based on <strong className="text-white">roof condition rather than age alone</strong> when a qualified professional certifies 5+ years of useful life remaining.
                      </p>
                      <p className="text-zinc-300 leading-relaxed">
                        This approach can defer replacement costs, support insurance renewals, and provide time for planned capital budgeting. Outcomes depend on inspection findings, repair scope, and individual roof condition.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">Do tile roofs cost more than shingles?</span>
                {openFaqIndex === 5 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 5 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Yes. <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Tile roofs</Link> cost 2–3 times more than <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">asphalt shingle roofs</Link> due to material weight, installation complexity, and enhanced underlayment requirements. Concrete tile systems cost $12–$24 per square foot installed, while premium clay tile can reach $22–$35 per square foot. Shingle roofs range from $4.50–$16 per square foot. However, tile roofs typically last 40–50+ years compared to 20–30 years for shingles, offering better long-term value despite higher upfront cost.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(6)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">Does insurance cover roof replacement in Florida?</span>
                {openFaqIndex === 6 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 6 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Insurance covers roof replacement in Florida only when damage results from a covered peril (wind, hail, fire) rather than normal wear and age-related deterioration. Wind damage from hurricanes or tropical storms is commonly covered, subject to deductibles and policy limits. Age-related granule loss, UV degradation, and general wear are not covered. Many Florida policies now include special hurricane deductibles (percentage of dwelling coverage) and depreciation schedules that reduce coverage as roofs age. Always obtain a professional <Link to="/roof-inspection/" className="text-white font-semibold hover:text-zinc-100 underline">roof inspection</Link> to document storm damage before filing claims.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(7)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">How long does a roof replacement take?</span>
                {openFaqIndex === 7 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 7 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Most residential roof replacements in South Florida take 2–7 days depending on roof size, material type, weather, and system complexity. <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Shingle roofs</Link> on homes under 2,500 sq ft typically complete in 2–3 days. <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Tile roof</Link> installations require 4–7 days due to weight, fastening requirements, and underlayment installation. <Link to="/metal-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Metal roofs</Link> take 3–5 days for proper panel seaming and clip attachment. <Link to="/flat-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Flat or low-slope</Link> commercial roofs vary widely based on membrane type and roof area. Permit processing adds 1–3 weeks before work begins. Weather delays are common during Florida's rainy season (June–September).
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(8)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">What is the average cost per square foot for a new roof in Broward County?</span>
                {openFaqIndex === 8 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 8 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Broward County roof replacement costs average $8–$20 per square foot installed, depending on material type and <span className="text-amber-400 font-semibold">HVHZ compliance requirements</span>. <Link to="/shingle-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">Shingle roofs</Link> cost $7–$14/sq ft, <Link to="/tile-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">concrete tile</Link> $14–$22/sq ft, <Link to="/metal-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">metal roofs</Link> $12–$24/sq ft, and <Link to="/flat-roofing/" className="text-white font-semibold hover:text-zinc-100 underline">flat membrane systems</Link> $8–$16/sq ft. Broward County properties require <span className="text-amber-400 font-semibold">HVHZ-compliant fastening</span>, which adds $1–$3 per square foot compared to non-HVHZ installations. These ranges include tear-off, disposal, new underlayment, installation, and all required flashings.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(9)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">Can I get financing for a roof replacement?</span>
                {openFaqIndex === 9 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 9 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Yes. Most roofing contractors in South Florida offer financing options through third-party lenders with approved credit. Monthly payment plans typically range from 12–180 months with interest rates from 0% (promotional) to 12%+ depending on credit score and term length. Financing allows homeowners to address urgent roof needs without depleting savings. Home equity lines of credit (HELOCs) and cash-out refinancing are alternative options that may offer lower interest rates for qualified borrowers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">Serving Broward & Palm Beach County</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  All Phase Construction USA provides licensed roofing services throughout South Florida, including Boca Raton, Deerfield Beach, Pompano Beach, Fort Lauderdale, Coral Springs, Delray Beach, Boynton Beach, West Palm Beach, Plantation, and surrounding communities in Broward and Palm Beach Counties.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  CCC-1331464 (Roofing Contractor) –– CGC-1526236 (General Contractor)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Learn More About Roofing Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/tile-roofing/" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Tile Roofing</h3>
              <p className="text-zinc-400 mb-4">Concrete and clay tile systems for South Florida homes</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/metal-roofing/" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Metal Roofing</h3>
              <p className="text-zinc-400 mb-4">Standing seam metal roofs designed for hurricane resistance</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/shingle-roofing/" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Shingle Roofing</h3>
              <p className="text-zinc-400 mb-4">High-wind rated asphalt shingle systems</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/flat-roofing/" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Flat Roofing</h3>
              <p className="text-zinc-400 mb-4">TPO, PVC, and modified bitumen membrane systems</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/single-ply-roofing/" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Single-Ply Roofing</h3>
              <p className="text-zinc-400 mb-4">Commercial membrane roofing systems</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/roof-inspection/" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Roof Inspection</h3>
              <p className="text-zinc-400 mb-4">Professional diagnostic evaluations</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
