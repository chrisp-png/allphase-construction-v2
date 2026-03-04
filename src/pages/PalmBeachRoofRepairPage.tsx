import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function PalmBeachRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

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
      question: "How do you determine if a roof needs repair or replacement?",
      answer: "We evaluate the extent of damage, system age, and underlayment condition to determine whether a targeted repair is appropriate or if broader corrective work should be considered."
    },
    {
      question: "Do roof repairs in Palm Beach County need to meet special code requirements?",
      answer: "Repairs must align with the Florida Building Code, and certain areas may fall under HVHZ standards depending on location and scope."
    },
    {
      question: "Can cracked or slipped tile roofs usually be repaired?",
      answer: "In many cases, individual tile and localized underlayment repairs are feasible if the surrounding system remains serviceable."
    },
    {
      question: "How is HOA approval handled for roof repairs?",
      answer: "We provide repair documentation and scope details that owners can submit to their HOA for review and approval."
    },
    {
      question: "Will roof repairs affect an insurance claim?",
      answer: "Insurance implications vary by policy and condition findings; our role is to document roof conditions and repair scope without providing insurance advice."
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
              Roof Repair in <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Palm Beach County, FL</span>
            </h1>

            <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
              <p>
                All Phase Construction USA provides inspection-first roof repair services across Palm Beach County, FL. Our approach begins with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to identify the true source of leaks, storm-related damage, or system deterioration before any repair scope is defined. We evaluate repairs for code compliance under the Florida Building Code (and HVHZ requirements where applicable), while accounting for coastal exposure, intense UV cycling, and the prevalence of HOA-governed communities throughout the county.
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

      {/* Common Palm Beach County Repair Problems */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Common Roof Repair Issues in Palm Beach County
          </h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            Properties across Palm Beach County experience roof stress from heat, humidity, seasonal storms, and wind-driven rain. Common repair triggers we diagnose include:
          </p>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Active leaks around penetrations, skylights, or valleys</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Displaced or fractured concrete and clay roof tiles</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Aging underlayment failures beneath tile systems</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Wind-lifted shingles or fastener back-out after storms</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Flat roof membrane seam separation or ponding-related wear</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Deteriorated flashing at walls, chimneys, and parapets</span>
              </li>
            </ul>
            <p className="mt-6 text-zinc-400 italic">
              Each issue is evaluated in context—what appears to be a surface failure may originate from underlayment, flashing, or structural movement.
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
            Our roof repair process is structured to reduce uncertainty and prevent repeat failures:
          </p>

          <div className="space-y-6">
            <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Visual & Interior Assessment
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Identify staining, moisture paths, and system transitions.
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
                    System-Specific Evaluation
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile, shingle, metal, or flat roof components are reviewed individually.
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
                    Code Alignment Review
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Repairs are scoped to meet current Florida Building Code requirements where applicable.
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
                    Repair Feasibility Analysis
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Determine whether targeted repair is appropriate or if broader corrective work is warranted.
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
                    Clear Repair Scope
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Provide a documented repair plan aligned with the roof's age, condition, and exposure profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Types Repaired */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Roof Systems Repaired in Palm Beach County
          </h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            We perform code-aware repairs on the following roof systems commonly found throughout Palm Beach County:
          </p>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Concrete and clay tile roofing systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Asphalt shingle roofs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Standing seam and exposed fastener metal roofs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Modified bitumen and TPO flat roof systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Low-slope residential and light commercial roofs</span>
              </li>
            </ul>
            <p className="mt-6 text-zinc-400 italic">
              Repairs are designed to integrate with the existing system without compromising adjacent materials.
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
            Many Palm Beach County properties are subject to HOA architectural standards and insurance documentation requirements. Our team routinely:
          </p>

          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Aligns repair scopes with HOA guidelines and approval workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Provides inspection documentation suitable for insurance review</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Separates maintenance-related wear from storm-related damage findings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Coordinates timelines to reduce administrative delays</span>
              </li>
            </ul>
            <p className="mt-6 text-zinc-400 italic">
              We focus on technical documentation and condition reporting without offering legal or insurance advice.
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
                  <th className="px-6 py-4 text-left text-white font-semibold">Common Palm Beach County Cause</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Ceiling stains after heavy rain</td>
                  <td className="px-6 py-4 text-zinc-300">Wind-driven rain at flashing transitions</td>
                  <td className="px-6 py-4 text-zinc-300">Indicates water intrusion beyond surface materials</td>
                  <td className="px-6 py-4 text-zinc-300">Targeted flashing repair and sealant replacement</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Cracked or slipped roof tiles</td>
                  <td className="px-6 py-4 text-zinc-300">Thermal expansion and storm vibration</td>
                  <td className="px-6 py-4 text-zinc-300">Exposes underlayment to moisture</td>
                  <td className="px-6 py-4 text-zinc-300">Tile replacement with underlayment patching</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Loose metal panels or fasteners</td>
                  <td className="px-6 py-4 text-zinc-300">Wind uplift and fastener fatigue</td>
                  <td className="px-6 py-4 text-zinc-300">Can lead to progressive panel loss</td>
                  <td className="px-6 py-4 text-zinc-300">Fastener replacement and panel re-securing</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Blistering on flat roof surfaces</td>
                  <td className="px-6 py-4 text-zinc-300">Heat buildup and trapped moisture</td>
                  <td className="px-6 py-4 text-zinc-300">Weakens membrane integrity</td>
                  <td className="px-6 py-4 text-zinc-300">Localized membrane repair or seam reinforcement</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Debris accumulation in valleys</td>
                  <td className="px-6 py-4 text-zinc-300">Seasonal storms and tree coverage</td>
                  <td className="px-6 py-4 text-zinc-300">Restricts water flow and accelerates wear</td>
                  <td className="px-6 py-4 text-zinc-300">Valley cleaning and protective flashing repair</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-zinc-300">Recurring minor leaks</td>
                  <td className="px-6 py-4 text-zinc-300">Aging underlayment beneath intact surfaces</td>
                  <td className="px-6 py-4 text-zinc-300">Surface repairs alone may not resolve issue</td>
                  <td className="px-6 py-4 text-zinc-300">Selective system exposure and underlayment repair</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            For additional planning resources, visit:
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/roofing-contractor-palm-beach-county-fl/"
              className="text-red-600 hover:text-red-500 underline transition-colors"
            >
              Palm Beach County Service Area
            </Link>
            <Link
              to="/easy-payments/"
              className="text-red-600 hover:text-red-500 underline transition-colors"
            >
              Financing Options
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose All Phase */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Palm Beach County Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Inspection-first, non-sales-driven repair assessments</h4>
                <p className="text-zinc-300">Diagnostic approach that identifies root causes before recommending repair scope, providing clarity and avoiding unnecessary work.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Dual-licensed Florida contractor with regional code familiarity</h4>
                <p className="text-zinc-300">Maintaining full compliance with Florida Building Code and HVHZ requirements where applicable.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Experience working within HOA and insurance frameworks</h4>
                <p className="text-zinc-300">Documentation protocols addressing HOA architectural review and insurance documentation requirements.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Clear documentation and repair scope transparency</h4>
                <p className="text-zinc-300">Comprehensive project documentation suitable for HOA submissions and insurance coordination.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Consistent repair methodology across South Florida markets</h4>
                <p className="text-zinc-300">Experience with tile, metal, flat, and shingle systems common throughout Palm Beach County's building stock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Roof Repair FAQs – Palm Beach County, FL
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
            To schedule a diagnostic roof repair inspection in Palm Beach County, contact All Phase Construction USA:
          </p>

          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 mb-10 text-left max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">All Phase Construction USA</h3>
            <div className="space-y-2 text-zinc-300">
              <p>590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
              <p>Phone: <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 transition-colors">(754) 227-5605</a></p>
              <p>Email: <a href="mailto:leads@allphaseusa.com" className="text-red-600 hover:text-red-500 transition-colors">leads@allphaseusa.com</a></p>
              <p>Website: <a href="https://allphaseconstructionfl.com" className="text-red-600 hover:text-red-500 transition-colors">allphaseconstructionfl.com</a></p>
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
