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

  useEffect(() => {
    document.title = 'Roof Cost Calculator | Free Estimate Tool South Florida';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get instant roof replacement cost estimates for Broward & Palm Beach homes. Free calculator, no email required. Licensed contractor pricing. Try now.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get instant roof replacement cost estimates for Broward & Palm Beach homes. Free calculator, no email required. Licensed contractor pricing. Try now.';
      document.head.appendChild(meta);
    }

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
            "text": "Lower quotes are often cheaper because corners are being cut somewhere—labor quality, supervision, underlayment/flashing details, code compliance, or warranty coverage. Roofing isn't just materials; it's a system. The best value usually comes from a contractor with trained crews, consistent installation standards, and a track record of roofs that perform long-term—not just the lowest number on paper."
          }
        },
        {
          "@type": "Question",
          "name": "Does it matter how long a roofing company has been in business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Longevity often signals that a company has stable crews, repeatable installation processes, and accountability after the job is done. Roofing problems don't always show up on day one—so choosing a company with a proven history can reduce the risk of callbacks, ongoing leaks, and \"can't get them back out here\" situations."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to repair a roof or replace it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with a diagnostic roof inspection to evaluate localized failure versus widespread deterioration. Repair is often the better first option when damage is confined to specific slopes, penetrations, or flashings—addressing the failure pattern without replacing sound areas. Replacement becomes necessary when deterioration is roof-wide, repeat failures are likely, or the system can no longer perform reliably. In Florida, repairs may also position a roof for the 5-year certification pathway under Florida Statute § 627.7011(5)(a), allowing insurers to renew based on roof condition rather than age alone when a qualified professional certifies 5+ years of useful life. This approach can defer replacement costs, support insurance renewals, and provide time for planned capital budgeting. Outcomes depend on inspection findings, repair scope, and individual roof condition."
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
                  Get an instant ballpark estimate for your roof replacement cost in Broward County or Palm Beach County. This free calculator provides estimated pricing for <Link to="/tile-roofing" className="text-white font-semibold hover:text-zinc-100 underline">tile</Link>, <Link to="/metal-roofing" className="text-white font-semibold hover:text-zinc-100 underline">metal</Link>, <Link to="/shingle-roofing" className="text-white font-semibold hover:text-zinc-100 underline">shingle</Link>, and <Link to="/flat-roofing" className="text-white font-semibold hover:text-zinc-100 underline">flat roofing</Link> systems based on roof size and material selection.
                </p>
                <p className="text-zinc-300 leading-relaxed pb-4 border-b border-zinc-800/50">
                  Final costs vary based on roof condition, pitch, <span className="text-amber-400 font-semibold">code requirements</span>, and <span className="text-amber-400 font-semibold">HVHZ compliance</span>. A <Link to="/roof-inspection" className="text-white font-semibold hover:text-zinc-100 underline">professional roof inspection</Link> provides accurate pricing. In some cases, <Link to="/roofing-services/roof-repair" className="text-white font-semibold hover:text-zinc-100 underline">roof repair</Link> may be a cost-effective alternative to full replacement.
                </p>
              </div>
            </div>
          </div>

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
                      <Link to="/shingle-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Asphalt Shingle</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$8–$12</td>
                    <td className="py-3 px-4 text-zinc-300">15–25 years</td>
                    <td className="py-3 px-4 text-zinc-300">Code-compliant residential replacements</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/tile-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Tile (Concrete / Clay)</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$10–$18</td>
                    <td className="py-3 px-4 text-zinc-300">30–50 years</td>
                    <td className="py-3 px-4 text-zinc-300">Long-term durability, HOA & coastal homes</td>
                  </tr>
                  <tr className="border-b border-zinc-700 bg-zinc-800/30">
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/metal-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Metal (Standing Seam)</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$12–$20</td>
                    <td className="py-3 px-4 text-zinc-300">40–70 years</td>
                    <td className="py-3 px-4 text-zinc-300">Wind resistance, solar-ready systems</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-zinc-300">
                      <Link to="/flat-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Flat / Low-Slope</Link>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">$10–$16</td>
                    <td className="py-3 px-4 text-zinc-300">20–30 years</td>
                    <td className="py-3 px-4 text-zinc-300">Commercial & modern residential roofs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost Factors Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">What Factors Affect Roof Replacement Cost?</h2>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong className="text-white">Roof size:</strong> Measured in squares (100 sq ft per square) — larger roofs cost more</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong className="text-white">Roof pitch:</strong> Steep roofs require additional safety equipment and labor time</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong className="text-white">Decking condition:</strong> Rotted or damaged plywood sheathing requires replacement before installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong className="text-amber-400">HVHZ fastening requirements:</strong> Enhanced nailing patterns and approved fasteners add labor and material costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong className="text-amber-400">Florida Building Code compliance:</strong> Tear-off, underlayment, flashing, and ventilation must meet current code standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong className="text-white">Material selection:</strong> Shingle, tile, metal, and flat roofing systems have different material and labor costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
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
              to="/roof-inspection"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Schedule a Roof Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
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
              to="/easy-payments"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-zinc-600 text-zinc-200 font-semibold rounded hover:bg-zinc-700/50 hover:border-zinc-500 transition-colors"
            >
              View Roofing Financing Options
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Component */}
      <RoofCalculator />

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
                    New roof costs in Broward and Palm Beach Counties typically range from $9,000 to $70,000+ depending on roof size, material type, and system complexity. <Link to="/shingle-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Shingle roofs</Link> ($4.50–$16/sq ft) are the most cost-effective, while <Link to="/tile-roofing" className="text-white font-semibold hover:text-zinc-100 underline">tile roofs</Link> ($12–$35/sq ft) and <Link to="/metal-roofing" className="text-white font-semibold hover:text-zinc-100 underline">metal roofs</Link> ($8–$28/sq ft) offer greater longevity. A 2,000 sq ft shingle roof averages $14,000–$22,000 installed. Tile roofs of the same size typically cost $24,000–$48,000. Final pricing depends on roof pitch, layers to remove, <span className="text-amber-400 font-semibold">HVHZ fastening requirements</span>, and <span className="text-amber-400 font-semibold">code compliance upgrades</span>.
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
                    Lower quotes are often cheaper because corners are being cut somewhere—labor quality, supervision, underlayment/flashing details, <span className="text-amber-400 font-semibold">code compliance</span>, or warranty coverage. Roofing isn't just materials; it's a system. The best value usually comes from a contractor with trained crews, consistent installation standards, and a track record of roofs that perform long-term—not just the lowest number on paper.
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
                    Yes. Longevity often signals that a company has stable crews, repeatable installation processes, and accountability after the job is done. Roofing problems don't always show up on day one—so choosing a company with a proven history can reduce the risk of callbacks, ongoing leaks, and "can't get them back out here" situations.
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
                      Start with a <Link to="/roof-inspection" className="text-white font-semibold hover:text-zinc-100 underline">diagnostic roof inspection</Link> to evaluate <strong className="text-white">localized failure versus widespread deterioration</strong>. <Link to="/roofing-services/roof-repair" className="text-white font-semibold hover:text-zinc-100 underline">Repair</Link> is often the better first option when damage is confined to specific slopes, penetrations, or flashings—addressing the failure pattern without replacing sound areas.
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
                    Yes. <Link to="/tile-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Tile roofs</Link> cost 2–3 times more than <Link to="/shingle-roofing" className="text-white font-semibold hover:text-zinc-100 underline">asphalt shingle roofs</Link> due to material weight, installation complexity, and enhanced underlayment requirements. Concrete tile systems cost $12–$24 per square foot installed, while premium clay tile can reach $22–$35 per square foot. Shingle roofs range from $4.50–$16 per square foot. However, tile roofs typically last 40–50+ years compared to 20–30 years for shingles, offering better long-term value despite higher upfront cost.
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
                    Insurance covers roof replacement in Florida only when damage results from a covered peril (wind, hail, fire) rather than normal wear and age-related deterioration. Wind damage from hurricanes or tropical storms is commonly covered, subject to deductibles and policy limits. Age-related granule loss, UV degradation, and general wear are not covered. Many Florida policies now include special hurricane deductibles (percentage of dwelling coverage) and depreciation schedules that reduce coverage as roofs age. Always obtain a professional <Link to="/roof-inspection" className="text-white font-semibold hover:text-zinc-100 underline">roof inspection</Link> to document storm damage before filing claims.
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
                    Most residential roof replacements in South Florida take 2–7 days depending on roof size, material type, weather, and system complexity. <Link to="/shingle-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Shingle roofs</Link> on homes under 2,500 sq ft typically complete in 2–3 days. <Link to="/tile-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Tile roof</Link> installations require 4–7 days due to weight, fastening requirements, and underlayment installation. <Link to="/metal-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Metal roofs</Link> take 3–5 days for proper panel seaming and clip attachment. <Link to="/flat-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Flat or low-slope</Link> commercial roofs vary widely based on membrane type and roof area. Permit processing adds 1–3 weeks before work begins. Weather delays are common during Florida's rainy season (June–September).
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
                    Broward County roof replacement costs average $8–$20 per square foot installed, depending on material type and <span className="text-amber-400 font-semibold">HVHZ compliance requirements</span>. <Link to="/shingle-roofing" className="text-white font-semibold hover:text-zinc-100 underline">Shingle roofs</Link> cost $7–$14/sq ft, <Link to="/tile-roofing" className="text-white font-semibold hover:text-zinc-100 underline">concrete tile</Link> $14–$22/sq ft, <Link to="/metal-roofing" className="text-white font-semibold hover:text-zinc-100 underline">metal roofs</Link> $12–$24/sq ft, and <Link to="/flat-roofing" className="text-white font-semibold hover:text-zinc-100 underline">flat membrane systems</Link> $8–$16/sq ft. Broward County properties require <span className="text-amber-400 font-semibold">HVHZ-compliant fastening</span>, which adds $1–$3 per square foot compared to non-HVHZ installations. These ranges include tear-off, disposal, new underlayment, installation, and all required flashings.
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
                  CCC-1331464 (Roofing Contractor) • CGC-1526236 (General Contractor)
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
            <Link to="/tile-roofing" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Tile Roofing</h3>
              <p className="text-zinc-400 mb-4">Concrete and clay tile systems for South Florida homes</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/metal-roofing" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Metal Roofing</h3>
              <p className="text-zinc-400 mb-4">Standing seam metal roofs designed for hurricane resistance</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/shingle-roofing" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Shingle Roofing</h3>
              <p className="text-zinc-400 mb-4">High-wind rated asphalt shingle systems</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/flat-roofing" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Flat Roofing</h3>
              <p className="text-zinc-400 mb-4">TPO, PVC, and modified bitumen membrane systems</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/single-ply-roofing" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Single-Ply Roofing</h3>
              <p className="text-zinc-400 mb-4">Commercial membrane roofing systems</p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link to="/roof-inspection" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors group">
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
