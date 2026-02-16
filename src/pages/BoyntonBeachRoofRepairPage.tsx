import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function BoyntonBeachRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = 'Boynton Beach Roof Repair | Licensed Roofer in Boynton Beach FL';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert roof repair in Boynton Beach, Florida. Tile, shingle, metal & flat roof repairs. Licensed Broward/Palm Beach contractor. Free inspection: (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert roof repair in Boynton Beach, Florida. Tile, shingle, metal & flat roof repairs. Licensed Broward/Palm Beach contractor. Free inspection: (754) 227-5605.';
      document.head.appendChild(meta);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow';
      document.head.appendChild(meta);
    }}, []);

  const faqItems = [
    {
      question: "How do I know if my Boynton Beach roof needs repair or replacement?",
      answer: "A professional inspection evaluates damage extent, system age, and code thresholds to determine repair feasibility."
    },
    {
      question: "Do roof repairs in Boynton Beach have to meet current building codes?",
      answer: "Yes. All roof repairs must comply with the Florida Building Code in effect at the time of repair."
    },
    {
      question: "Can tile roof damage be repaired without replacing the entire roof?",
      answer: "Often, individual tiles and localized underlayment sections can be repaired if surrounding materials remain serviceable."
    },
    {
      question: "Will my HOA need to approve roof repairs?",
      answer: "Many Boynton Beach HOAs require review or approval, especially for visible exterior repairs."
    },
    {
      question: "How can roof repairs impact insurance claims?",
      answer: "Insurance impacts vary by policy. Inspection documentation may help support claim discussions."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6">
                <Link
                  to="/roofing-services/roof-repair/"
                  className="text-red-600 hover:text-red-500 text-sm font-medium transition-colors inline-flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Roof Repair Services
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in Boynton Beach, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Boynton Beach properties are exposed to strong sun, coastal humidity, and seasonal storm patterns that can gradually compromise roof systems. All Phase Construction USA provides inspection-first roof repair services focused on identifying the source of damage before determining the appropriate repair scope. Every project begins with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to evaluate roof conditions under the Florida Building Code and determine whether localized repair is viable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
                >
                  Call (754) 227-5605
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg"
                >
                  Request Inspection
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Common Boynton Beach Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roof Repair Issues in Boynton Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Roof repair needs in Boynton Beach often develop from a combination of weather exposure and material aging:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Wind-shifted or cracked concrete and clay roof tiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Underlayment deterioration beneath tile roofing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Flat roof membrane wear, seam separation, or ponding leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Flashing corrosion or sealant failure around roof penetrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Metal roof fastener movement caused by heat expansion</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Moisture intrusion following heavy rain or tropical weather</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                Many of these conditions are not immediately visible from the ground.
              </p>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Diagnostic Roof Repair Process
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              Our structured process emphasizes clarity and code awareness:
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Comprehensive Inspection
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Surface evaluation, attic review, and moisture tracing to identify root causes and damage patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Code Alignment Review
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Assessment against Florida Building Code requirements to ensure repair approaches maintain compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Repair vs. Replacement Analysis
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Identification of repair limitations and triggers based on system condition, age, and code considerations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Defined Repair Scope
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Clear documentation of materials, methods, and constraints before work begins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Repair Execution & Verification
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Code-compliant repairs with photo documentation suitable for HOA submissions and insurance coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-zinc-400 italic">
              This process helps reduce uncertainty and supports informed decision-making.
            </p>
          </div>
        </section>

        {/* Roof Types Repaired */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Systems Repaired in Boynton Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              We service and repair roofing systems commonly found throughout Boynton Beach:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Concrete and clay tile roofs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Standing seam and exposed fastener metal roofs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Modified bitumen and built-up flat roofing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>TPO and other single-ply membranes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Architectural asphalt shingle systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Low-slope residential and commercial roof assemblies</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                Repair recommendations are based on system condition, age, and compliance considerations.
              </p>
            </div>
          </div>
        </section>

        {/* HOA & Insurance Considerations */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HOA and Insurance Coordination
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              Boynton Beach includes many HOA-managed communities and insured properties. Our team routinely assists with:
            </p>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Repair documentation for HOA architectural review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Alignment with association repair standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Inspection reports supporting insurance discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Differentiation between storm-related and age-related damage</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                We provide technical documentation, not legal or insurance advice.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Tools */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair Planning Tools
            </h2>

            <div className="overflow-x-auto mb-10">
              <table className="w-full bg-zinc-800 border border-zinc-700 rounded-lg">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="px-6 py-4 text-left text-white font-semibold">What You're Seeing</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Common Boynton Beach Cause</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Water stains on ceilings</td>
                    <td className="px-6 py-4 text-zinc-300">Underlayment breakdown beneath tile roofs</td>
                    <td className="px-6 py-4 text-zinc-300">Moisture can migrate beyond visible areas</td>
                    <td className="px-6 py-4 text-zinc-300">Selective tile removal and underlayment repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Displaced roof tiles</td>
                    <td className="px-6 py-4 text-zinc-300">Wind uplift from seasonal storms</td>
                    <td className="px-6 py-4 text-zinc-300">Exposes the roof system to water intrusion</td>
                    <td className="px-6 py-4 text-zinc-300">Tile reset or replacement with proper fastening</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Flat roof leaks after rain</td>
                    <td className="px-6 py-4 text-zinc-300">Membrane seam fatigue or ponding water</td>
                    <td className="px-6 py-4 text-zinc-300">Leaks may spread laterally before detection</td>
                    <td className="px-6 py-4 text-zinc-300">Localized membrane seam repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Loose metal roof fasteners</td>
                    <td className="px-6 py-4 text-zinc-300">Thermal expansion from daily heat cycles</td>
                    <td className="px-6 py-4 text-zinc-300">Creates entry points for wind-driven rain</td>
                    <td className="px-6 py-4 text-zinc-300">Fastener replacement with sealing washers</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Leaks near vents or skylights</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing sealant deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Can damage interior finishes over time</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing repair or partial replacement</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300">Recurring minor leaks</td>
                    <td className="px-6 py-4 text-zinc-300">Multiple small system deficiencies</td>
                    <td className="px-6 py-4 text-zinc-300">Often signals broader roof wear</td>
                    <td className="px-6 py-4 text-zinc-300">Targeted multi-area repairs after inspection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Explore the <Link to="/locations/deerfield-beach/service-area/boynton-beach/" className="text-red-600 hover:text-red-500 underline transition-colors">Boynton Beach service area hub</Link> or use the <a href="https://allphaseconstructionfl.com/roof-cost-calculator/" className="text-red-600 hover:text-red-500 underline transition-colors">roof cost estimate tool</a> for planning. <Link to="/easy-payments/" className="text-red-600 hover:text-red-500 underline transition-colors">Financing options</Link> are available.
            </p>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Boynton Beach Property Owners Choose All Phase Construction USA
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Florida-based, Dual-Licensed Roofing Contractor</h4>
                  <p className="text-zinc-300">Maintaining full compliance with state regulatory requirements and professional standards for commercial and residential roofing work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Inspection-Driven Repair Methodology</h4>
                  <p className="text-zinc-300">Diagnostic assessment identifying root causes before recommending repair scope, avoiding unnecessary work and providing clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Familiarity with South Florida Roofing Materials and Systems</h4>
                  <p className="text-zinc-300">Experience with tile, metal, flat, and shingle systems common in Boynton Beach's residential and commercial building stock.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Experience Coordinating with HOAs and Insurers</h4>
                  <p className="text-zinc-300">Documentation protocols and coordination experience addressing HOA architectural review and insurance documentation requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Clear, Code-Aware Documentation</h4>
                  <p className="text-zinc-300">Comprehensive project documentation suitable for HOA submissions, insurance coordination, and Florida Building Code compliance verification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair FAQs – Boynton Beach, FL
            </h2>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-[400px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule a Roof Repair Inspection
            </h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              If you're noticing roof issues or want clarity on repair options, schedule a roof repair inspection with All Phase Construction USA. Our inspection-first approach helps Boynton Beach property owners plan repairs responsibly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20"
              >
                Call (754) 227-5605
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg border border-zinc-700"
              >
                Request Inspection
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
  );
}
