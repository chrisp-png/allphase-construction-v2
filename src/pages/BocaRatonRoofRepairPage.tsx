import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import NearbyServiceAreas from '../components/NearbyServiceAreas';
import cities from '../data/cities.json';
import { getNearbyCities } from '../data/nearbyRoofRepairCities';

export default function BocaRatonRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const nearbyCities = getNearbyCities('boca-raton', cities);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How do I know if my Boca Raton roof needs repair or replacement?",
      answer: "A diagnostic inspection evaluates damage extent, system age, and code thresholds to determine whether repair is feasible."
    },
    {
      question: "Are roof repairs in Boca Raton required to meet current building codes?",
      answer: "Yes. Repairs must comply with the Florida Building Code and any applicable local requirements at the time of work."
    },
    {
      question: "Can cracked or slipped tile roofs be repaired without full replacement?",
      answer: "In many cases, individual tiles and localized underlayment sections can be repaired if surrounding materials remain serviceable."
    },
    {
      question: "Will my HOA need to approve roof repairs?",
      answer: "Many Boca Raton HOAs require review or approval, especially for visible repairs. Coordination is often part of the process."
    },
    {
      question: "How does roof repair affect insurance claims?",
      answer: "Insurance considerations vary by policy. Inspection documentation can help support discussions with carriers."
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
    <>
      <SEO
        title="Roof Repair in Boca Raton, FL"
        description="Expert roof repair in Boca Raton, Florida. Tile, shingle, metal & flat roof repairs. Licensed Broward/Palm Beach contractor. Free inspection: (754) 227-5605."
        schema={faqSchema}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-zinc-500">Roofing</span>
                <ChevronRight className="w-4 h-4" />
                <Link to="/roof-repair" className="hover:text-red-600 transition-colors">Roof Repair</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Boca Raton</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in Boca Raton, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Homes and commercial properties in Boca Raton face intense UV exposure, seasonal storm activity, and long-term heat cycling that can accelerate roof wear. All Phase Construction USA provides inspection-first roof repair services designed to identify the root cause of leaks, fastener failure, or material deterioration before recommending a repair approach. Every project begins with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to assess conditions under the Florida Building Code and determine whether targeted repair is appropriate versus broader corrective work.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
                >
                  Schedule a Free Roof Inspection
                </a>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg"
                >
                  Call (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Common Boca Raton Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roof Repair Issues in Boca Raton
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Boca Raton roofs commonly experience conditions influenced by coastal humidity, sun exposure, and storm-driven rain:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Tile displacement or cracked concrete/clay tiles from wind uplift</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Aging underlayment failures beneath tile or metal systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Flat roof membrane seam separation and ponding-related leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Flashing deterioration around skylights, chimneys, and wall transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Fastener back-out on metal roofing due to thermal expansion</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Hidden moisture intrusion following seasonal storm events</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                These issues often develop gradually and may not be visible without a systematic inspection.
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
              Our repair process is structured to reduce uncertainty and avoid unnecessary scope:
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Inspection & Moisture Tracing
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Visual review, attic evaluation, and targeted moisture detection to identify root causes and concealed damage patterns.
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
                      Code & System Review
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Verification against Florida Building Code requirements applicable to Boca Raton, ensuring repair approaches maintain compliance.
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
                      Repair Feasibility Analysis
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Determination of isolated repair vs. partial replacement triggers, based on system age, condition, and code considerations.
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
                      Scope Definition
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Clear explanation of repair limits, materials, and sequencing before work begins, establishing expectations and project boundaries.
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
                      Execution & Verification
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Code-compliant repair with post-work documentation suitable for HOA submissions and insurance coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-zinc-400 italic">
              This approach helps property owners make informed decisions before committing to larger roofing work.
            </p>
          </div>
        </section>

        {/* Roof Types Repaired */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Systems Repaired in Boca Raton
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              All Phase Construction USA repairs a wide range of roofing systems commonly installed in Boca Raton:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Concrete and clay tile roofing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Standing seam and exposed fastener metal roofs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Modified bitumen and built-up flat roofs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>TPO and other single-ply membranes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Architectural asphalt shingle roofs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Low-slope residential and commercial assemblies</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                Repair recommendations are always tied to system age, condition, and code considerations.
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
              Many Boca Raton properties fall under HOA governance or insurance oversight. Our team routinely:
            </p>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Prepares repair documentation suitable for HOA architectural review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Coordinates repair scopes to align with association guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Supports insurance-related inspections with condition reports and photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Distinguishes storm-related damage from age-related deterioration</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                While we do not provide legal or insurance advice, our documentation process supports smoother coordination.
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
                    <th className="px-6 py-4 text-left text-white font-semibold">Common Boca Raton Cause</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Ceiling stains after heavy rain</td>
                    <td className="px-6 py-4 text-zinc-300">Tile underlayment aging beneath intact tiles</td>
                    <td className="px-6 py-4 text-zinc-300">Moisture can spread beyond the visible stain</td>
                    <td className="px-6 py-4 text-zinc-300">Selective tile removal and underlayment repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Loose or slipped roof tiles</td>
                    <td className="px-6 py-4 text-zinc-300">Wind uplift from seasonal storms</td>
                    <td className="px-6 py-4 text-zinc-300">Exposes underlayment to UV and water intrusion</td>
                    <td className="px-6 py-4 text-zinc-300">Tile reset or replacement with proper fastening</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Flat roof leaks near seams</td>
                    <td className="px-6 py-4 text-zinc-300">Thermal movement and seam fatigue</td>
                    <td className="px-6 py-4 text-zinc-300">Leaks can travel laterally before appearing</td>
                    <td className="px-6 py-4 text-zinc-300">Localized membrane seam repair or reinforcement</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Metal roof fasteners backing out</td>
                    <td className="px-6 py-4 text-zinc-300">Heat expansion and contraction cycles</td>
                    <td className="px-6 py-4 text-zinc-300">Creates entry points for wind-driven rain</td>
                    <td className="px-6 py-4 text-zinc-300">Fastener replacement with upgraded washers</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Water intrusion around skylights</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing sealant breakdown from UV exposure</td>
                    <td className="px-6 py-4 text-zinc-300">Can damage interior finishes and framing</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing repair or localized re-flashing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300">Recurring minor leaks</td>
                    <td className="px-6 py-4 text-zinc-300">Multiple small failure points across the roof</td>
                    <td className="px-6 py-4 text-zinc-300">Indicates broader system wear</td>
                    <td className="px-6 py-4 text-zinc-300">Targeted multi-area repairs after full inspection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Property owners can also explore the <Link to="/locations/deerfield-beach/service-area/boca-raton/" className="text-red-600 hover:text-red-500 underline transition-colors">Boca Raton service area hub</Link> and use our <a href="https://allphaseconstructionfl.com/roof-cost-calculator/" className="text-red-600 hover:text-red-500 underline transition-colors">roof cost estimate tool</a> for early planning. <Link to="/easy-payments/" className="text-red-600 hover:text-red-500 underline transition-colors">Financing options</Link> are available.
            </p>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Boca Raton Property Owners Choose All Phase Construction USA
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
                  <h4 className="font-semibold text-white text-lg mb-2">Inspection-Driven Repair Recommendations</h4>
                  <p className="text-zinc-300">Diagnostic assessment identifying root causes before recommending repair scope, avoiding unnecessary work and providing clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Familiarity with South Florida Roofing Systems</h4>
                  <p className="text-zinc-300">Experience with tile, metal, flat, and shingle systems common in Boca Raton's residential and commercial building stock.</p>
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
                  <h4 className="font-semibold text-white text-lg mb-2">Clear Documentation and Code-Aware Repair Planning</h4>
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
              Roof Repair FAQs – Boca Raton, FL
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
              If you're experiencing roof issues or want clarity before committing to major work, schedule a professional roof repair inspection with All Phase Construction USA. Our inspection-first approach helps Boca Raton property owners understand options before making decisions.
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

        <NearbyServiceAreas nearbyCities={nearbyCities} serviceType="roof-repair" />

        {/* Contact Form */}
        <Contact />
      </div>
    </>
  );
}
