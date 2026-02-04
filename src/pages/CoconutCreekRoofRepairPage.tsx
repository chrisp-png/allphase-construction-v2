import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function CoconutCreekRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = 'Roof Repair Coconut Creek FL | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roof repair services in Coconut Creek, FL. Inspection-first approach for tile, flat, metal, and shingle roof repairs. Diagnostic inspections, HOA coordination, insurance documentation.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional roof repair services in Coconut Creek, FL. Inspection-first approach for tile, flat, metal, and shingle roof repairs. Diagnostic inspections, HOA coordination, insurance documentation.';
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
      question: "How do you decide between repair and replacement in Coconut Creek?",
      answer: "A diagnostic inspection evaluates damage extent, material condition, system age, and Florida Building Code thresholds to determine whether localized repair is feasible or broader work is warranted. Factors include underlayment integrity, fastener condition, and code requirements where applicable."
    },
    {
      question: "Do roof repairs here have to meet Florida Building Code or HVHZ rules?",
      answer: "Yes. All roof repairs must comply with the Florida Building Code applicable to Coconut Creek at the time of work. High Velocity Hurricane Zone requirements apply where applicable, depending on location and project scope."
    },
    {
      question: "Can a tile roof in Coconut Creek usually be repaired without replacing the whole roof?",
      answer: "In many cases, yes. Individual tiles, localized underlayment sections, and flashing details can often be repaired if the surrounding system remains structurally sound and serviceable, though full conditions must be verified through inspection."
    },
    {
      question: "How do you handle HOA requirements for roof repairs in Coconut Creek?",
      answer: "Many HOAs in Coconut Creek's planned communities require architectural review or approval for visible repairs. We routinely prepare submittal-ready documentation with scope notes, photos, and material specifications to support the review process."
    },
    {
      question: "Will getting a roof repair affect insurance coverage or a claim?",
      answer: "Insurance coverage varies by policy terms. Inspection documentation can support carrier discussions by clearly separating observed storm-related damage from age-related wear patterns, though we do not provide insurance or legal advice."
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
                  to="/roofing-services/roof-repair"
                  className="text-red-600 hover:text-red-500 text-sm font-medium transition-colors inline-flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Roof Repair Services
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Coconut Creek, FL</span>
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Coconut Creek's planned neighborhoods and HOA communities face sustained UV cycling, coastal humidity, and seasonal storm exposure that can accelerate roof wear. All Phase Construction USA provides inspection-first roof repair services designed to identify the root cause of leaks, tile displacement, or material failures before recommending a corrective approach. Every project begins with a <Link to="/roofing-services/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to assess conditions under the Florida Building Code and determine whether targeted repair is appropriate for the observed issues.
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

        {/* Common Coconut Creek Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roof Repair Issues in Coconut Creek
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Roof systems in Coconut Creek commonly develop conditions influenced by humidity, thermal cycling, storm patterns, and the area's mixed tile and shingle inventory:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Wind-driven rain entry at wall flashings, step flashing, and roof-to-wall transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Tile slippage, cracking, and ridge or hip cap movement</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Underlayment wear beneath tile around valleys and penetrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Shingle uplift, creasing, exposed nails, and missing tabs after storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Flat or low-slope patio or addition roof seam and edge deterioration</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Metal fastener back-out and washer deterioration at penetrations</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                These issues often develop gradually and may not be visible without systematic inspection.
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
              Our repair process is structured to reduce uncertainty and avoid unnecessary scope expansion:
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Symptom Review
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Documentation of interior staining, musty odors, active drips, and exterior indicators to guide diagnostic focus.
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
                      Roof System Identification and Transition Mapping
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Identification of tile, shingle, flat, or metal systems and mapping of transitions where complexity increases leak potential.
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
                      Moisture Pathway Tracing
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Evaluation of likely entry points versus where water appears, including concealed moisture travel and attic conditions.
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
                      Component Checks
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Assessment of flashing, underlayment, field materials, edges, penetrations, and ventilation impacts to determine repair scope.
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
                      Scope Definition Aligned to Florida Building Code
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Determination of repair boundaries and code compliance requirements, including permitting triggers where applicable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Repair Plan and Photo Documentation
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Preparation of repair documentation suitable for HOA review and insurance coordination, without providing legal or insurance advice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    7
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Final Verification
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Post-repair inspection of water-shedding details, seal points, and workmanship quality to verify proper completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-zinc-400 italic">
              This diagnostic approach helps property owners understand options before committing to broader roofing work.
            </p>
          </div>
        </section>

        {/* Roof Types Repaired */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Systems Repaired in Coconut Creek
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              All Phase Construction USA repairs a wide range of roofing systems commonly found in Coconut Creek's residential and commercial properties:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Concrete and clay tile systems:</span> tile replacement, underlayment tie-ins, and flashing integration
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Asphalt shingles:</span> storm damage repairs, flashing and boot repairs, localized deck issues where found
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Metal roofing:</span> fasteners, sealants, penetration details, and corrosion management where present
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Flat and low-slope systems:</span> modified bitumen and TPO, focusing on seams, drains, edges, and penetrations
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                Repair recommendations are always tied to system age, observed condition, and code considerations.
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

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Many properties in Coconut Creek's planned communities fall under HOA governance with architectural review requirements. Our team routinely prepares repair documentation suitable for HOA submittal, including scope notes, photos, and material specifications. Coordination can also address scheduling constraints common in planned communities and association-specific standards where applicable.
              </p>

              <p>
                For insurance-related inspections, we provide condition documentation that clearly separates observed storm-related impacts from wear indications, without making coverage determinations. This documentation can support discussions with carriers and adjusters, though we do not provide insurance or legal advice. Inspection reporting may include photos, moisture mapping, and material condition notes depending on policy requirements and adjuster requests.
              </p>

              <p>
                Property owners in <Link to="/service-areas/coconut-creek" className="text-red-600 hover:text-red-500 underline transition-colors">Coconut Creek</Link> can explore our <Link to="/service-areas/coconut-creek/roof-cost-estimate" className="text-red-600 hover:text-red-500 underline transition-colors">roof cost estimate tool</Link> for early planning. <Link to="/financing" className="text-red-600 hover:text-red-500 underline transition-colors">Financing options</Link> are available to support repair and replacement projects.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Tools */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Repair Planning Tools
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Use this table to understand common roof repair scenarios observed in Coconut Creek properties:
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="w-full bg-zinc-800 border border-zinc-700 rounded-lg">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="px-6 py-4 text-left text-white font-semibold">What You're Seeing</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Common Coconut Creek Cause</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Ceiling stains after seasonal storms</td>
                    <td className="px-6 py-4 text-zinc-300">Wind-driven rain penetration at wall transitions or valleys</td>
                    <td className="px-6 py-4 text-zinc-300">Moisture can spread laterally before becoming visible</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing repair or localized underlayment tie-in</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Tile displacement or cracking</td>
                    <td className="px-6 py-4 text-zinc-300">UV expansion/contraction and thermal movement</td>
                    <td className="px-6 py-4 text-zinc-300">Exposes underlayment to accelerated deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Selective tile replacement with proper fastening</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Recurring leaks in older tile roofs</td>
                    <td className="px-6 py-4 text-zinc-300">Tile underlayment aging beneath intact field tiles</td>
                    <td className="px-6 py-4 text-zinc-300">Indicates hidden failure not visible from surface</td>
                    <td className="px-6 py-4 text-zinc-300">Targeted tile lift and underlayment section repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Patio or addition roof leaks</td>
                    <td className="px-6 py-4 text-zinc-300">Flat or low-slope seam separation and edge failures</td>
                    <td className="px-6 py-4 text-zinc-300">Can cause concealed deck deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Seam reinforcement or edge detail repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Shingle tabs missing or lifted</td>
                    <td className="px-6 py-4 text-zinc-300">Storm uplift and tree debris impact from neighborhoods</td>
                    <td className="px-6 py-4 text-zinc-300">Allows water intrusion under shingle layers</td>
                    <td className="px-6 py-4 text-zinc-300">Shingle replacement or edge detail repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Sealant failures at penetrations</td>
                    <td className="px-6 py-4 text-zinc-300">Humidity-driven sealant fatigue and UV breakdown</td>
                    <td className="px-6 py-4 text-zinc-300">Creates direct water entry at roof openings</td>
                    <td className="px-6 py-4 text-zinc-300">Penetration re-sealing or flashing replacement</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300">Water intrusion at walls</td>
                    <td className="px-6 py-4 text-zinc-300">Wind-driven rain at step flashing or wall transitions</td>
                    <td className="px-6 py-4 text-zinc-300">Transition zones are high-risk leak areas</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing integration and transition sealing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Coconut Creek Property Owners Choose All Phase Construction USA
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Inspection-First Approach</h4>
                  <p className="text-zinc-300">Diagnostic evaluation to identify root causes and determine repair feasibility before recommending scope.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Code-Aware Repair Scoping</h4>
                  <p className="text-zinc-300">Repair planning aligned to Florida Building Code requirements, with HVHZ provisions applied where applicable.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Documentation Clarity for HOA and Insurance Workflows</h4>
                  <p className="text-zinc-300">Clear project documentation suitable for HOA architectural review submissions and insurance coordination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Repair Compatibility</h4>
                  <p className="text-zinc-300">Attention to material compatibility and transition details to maintain roof system performance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Focus on Water-Shedding Details</h4>
                  <p className="text-zinc-300">Emphasis on flashing integrity, drainage considerations, and proper water-shedding details to prevent recurring issues.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Local Experience with Planned Communities</h4>
                  <p className="text-zinc-300">Technical competence with tile, metal, flat, and shingle systems common to Coconut Creek's residential neighborhoods.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair FAQs – Coconut Creek, FL
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
            <p className="text-xl text-zinc-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              If you're experiencing roof issues or want clarity before committing to major work, schedule a professional roof repair inspection with All Phase Construction USA. Our inspection-first approach helps Coconut Creek property owners understand options before making decisions.
            </p>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 mb-8 max-w-xl mx-auto">
              <div className="text-left space-y-2">
                <p className="text-white font-semibold text-lg">All Phase Construction USA</p>
                <p className="text-zinc-300">590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
                <p className="text-zinc-300">
                  <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 transition-colors">
                    (754) 227-5605
                  </a>
                </p>
                <p className="text-zinc-300">
                  <a href="mailto:leads@allphaseusa.com" className="text-red-600 hover:text-red-500 transition-colors">
                    leads@allphaseusa.com
                  </a>
                </p>
                <p className="text-zinc-300">
                  <a href="https://allphaseconstructionfl.com" className="text-red-600 hover:text-red-500 transition-colors">
                    allphaseconstructionfl.com
                  </a>
                </p>
              </div>
            </div>

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
