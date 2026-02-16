import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function PalmBeachCountyUnincorporatedRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = 'Palm Beach County Unincorporated Roof Repair | All Phase Construction';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roof repair throughout Palm Beach County Unincorporated, FL. Licensed contractor serving 30+ cities. Free estimates: (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional roof repair throughout Palm Beach County Unincorporated, FL. Licensed contractor serving 30+ cities. Free estimates: (754) 227-5605.';
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
      question: "How do you determine if a roof needs repair or replacement?",
      answer: "We assess damage extent, roof age, and underlayment condition to determine whether a localized repair is technically appropriate."
    },
    {
      question: "Do roof repairs need to follow specific codes in unincorporated areas?",
      answer: "Yes. Repairs must comply with the Florida Building Code, and HVHZ standards may apply depending on location and scope."
    },
    {
      question: "Are tile roof repairs typically feasible?",
      answer: "In many cases, individual tile and localized underlayment repairs are possible if the surrounding system remains serviceable."
    },
    {
      question: "How are HOA requirements handled if applicable?",
      answer: "When HOAs or community guidelines apply, we provide repair documentation that owners can submit for review."
    },
    {
      question: "Can roof repairs impact insurance considerations?",
      answer: "Insurance outcomes vary by policy and findings; our role is to document roof conditions and repair scope without offering insurance advice."
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
              Roof Repair in <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Palm Beach County Unincorporated, FL</span>
            </h1>

            <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
              <p>
                All Phase Construction USA provides inspection-first roof repair services for properties located in unincorporated areas of Palm Beach County, FL. Our process begins with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to determine the actual source of leaks, storm-related damage, or material failure before defining any repair scope. Repairs are evaluated for compliance with the Florida Building Code (and HVHZ requirements where applicable), while accounting for coastal exposure, heat-driven expansion, and mixed residential zoning common in unincorporated communities.
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

      {/* Common Repair Problems */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Common Roof Repair Issues in Palm Beach County Unincorporated
          </h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            Unincorporated areas of Palm Beach County often include older homes, acreage properties, and mixed roof systems that experience unique repair conditions. Common issues we diagnose include:
          </p>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Leaks at roof-to-wall transitions on single-story structures</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Tile displacement on homes with limited wind buffering</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Underlayment deterioration on aging tile roofs</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Fastener failure on metal roofs exposed to open terrain winds</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Flat roof drainage issues on additions or enclosed patios</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Flashing fatigue around vents and mechanical penetrations</span>
              </li>
            </ul>
            <p className="mt-6 text-zinc-400 italic">
              Each issue is reviewed holistically to avoid surface-level fixes that overlook underlying causes.
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
            Our repair methodology is structured to identify root causes and align repairs with long-term performance:
          </p>

          <div className="space-y-6">
            <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Exterior and Interior Review
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Identify moisture pathways and visible system failures.
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
                    Roof System Analysis
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Assess materials, attachment methods, and transitions.
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
                    Code Consideration
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Review repair scope against applicable Florida Building Code requirements.
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
                    Repair vs. System Viability Review
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Determine whether localized repair is technically appropriate.
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
                    Documented Repair Scope
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Provide clear findings and a defined repair approach.
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
            Roof Systems Repaired in Palm Beach County Unincorporated
          </h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            We perform targeted, code-aware repairs on roof systems commonly found in unincorporated areas, including:
          </p>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Concrete and clay tile roofing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Asphalt shingle roof systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Standing seam and exposed fastener metal roofs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Modified bitumen and TPO flat roofs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Low-slope residential and accessory structure roofs</span>
              </li>
            </ul>
            <p className="mt-6 text-zinc-400 italic">
              Repairs are designed to integrate with existing materials without introducing system conflicts.
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
            While some unincorporated properties are not HOA-governed, many are still subject to community guidelines or insurance documentation requirements. Our team assists by:
          </p>

          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Providing inspection documentation suitable for HOA or community review when applicable</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Supplying condition reports commonly requested by insurance carriers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Distinguishing maintenance-related wear from storm-related observations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Supporting owners with clear repair documentation and timelines</span>
              </li>
            </ul>
            <p className="mt-6 text-zinc-400 italic">
              We focus on technical findings and repair scope clarity without offering legal or insurance advice.
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
                  <th className="px-6 py-4 text-left text-white font-semibold">Common Palm Beach County Unincorporated Cause</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Water staining near exterior walls</td>
                  <td className="px-6 py-4 text-zinc-300">Roof-to-wall flashing wear on older structures</td>
                  <td className="px-6 py-4 text-zinc-300">Allows moisture intrusion behind wall systems</td>
                  <td className="px-6 py-4 text-zinc-300">Selective flashing removal and replacement</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Broken or missing roof tiles</td>
                  <td className="px-6 py-4 text-zinc-300">Wind exposure with limited surrounding structures</td>
                  <td className="px-6 py-4 text-zinc-300">Exposes underlayment to direct weathering</td>
                  <td className="px-6 py-4 text-zinc-300">Tile replacement with localized underlayment repair</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Loose metal fasteners</td>
                  <td className="px-6 py-4 text-zinc-300">Thermal cycling and open-area wind uplift</td>
                  <td className="px-6 py-4 text-zinc-300">Can progress to panel movement or leaks</td>
                  <td className="px-6 py-4 text-zinc-300">Fastener replacement and resealing</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Pooling water on flat roof sections</td>
                  <td className="px-6 py-4 text-zinc-300">Additions with limited drainage design</td>
                  <td className="px-6 py-4 text-zinc-300">Accelerates membrane deterioration</td>
                  <td className="px-6 py-4 text-zinc-300">Drainage correction and membrane patching</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-6 py-4 text-zinc-300">Recurring minor leaks</td>
                  <td className="px-6 py-4 text-zinc-300">Aged underlayment beneath intact coverings</td>
                  <td className="px-6 py-4 text-zinc-300">Surface repairs may not resolve root issue</td>
                  <td className="px-6 py-4 text-zinc-300">Targeted system exposure and underlayment repair</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-zinc-300">Rust at roof penetrations</td>
                  <td className="px-6 py-4 text-zinc-300">Humidity and aging flashing materials</td>
                  <td className="px-6 py-4 text-zinc-300">Weakens waterproofing at critical points</td>
                  <td className="px-6 py-4 text-zinc-300">Flashing replacement and corrosion treatment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            For additional planning resources, visit:
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
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
            Why Palm Beach County Unincorporated Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Inspection-first roof repair evaluations</h4>
                <p className="text-zinc-300">Diagnostic approach that identifies root causes before recommending repair scope.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Florida-licensed contractor with regional code familiarity</h4>
                <p className="text-zinc-300">Maintaining compliance with Florida Building Code and HVHZ requirements where applicable.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Experience with diverse property types and roof systems</h4>
                <p className="text-zinc-300">Work with older homes, acreage properties, and mixed roof systems common in unincorporated areas.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Clear documentation and repair scope definition</h4>
                <p className="text-zinc-300">Comprehensive project documentation suitable for community guidelines and insurance coordination.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">Consistent repair standards across South Florida</h4>
                <p className="text-zinc-300">Same quality standards applied across all Palm Beach County service areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Roof Repair FAQs – Palm Beach County Unincorporated, FL
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
            To schedule a diagnostic roof repair inspection in Palm Beach County Unincorporated, contact All Phase Construction USA:
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
