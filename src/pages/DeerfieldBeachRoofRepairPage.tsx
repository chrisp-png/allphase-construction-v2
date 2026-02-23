import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus, Phone, MapPin, Clock, Award, Wrench, Home } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import NearbyServiceAreas from '../components/NearbyServiceAreas';
import cities from '../data/cities.json';
import { getNearbyCities } from '../data/nearbyRoofRepairCities';

export default function DeerfieldBeachRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const nearbyCities = getNearbyCities('deerfield-beach', cities);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How do I know if my Deerfield Beach roof needs repair or replacement?",
      answer: "A diagnostic inspection evaluates damage extent, system age, and code thresholds to determine whether repairs are viable."
    },
    {
      question: "Are roof repairs in Deerfield Beach subject to HVHZ requirements?",
      answer: "Some repair scopes may fall under HVHZ standards depending on location and attachment methods."
    },
    {
      question: "Can tile roofs in Deerfield Beach usually be repaired instead of replaced?",
      answer: "In many cases, individual tile and underlayment repairs are possible if materials remain available and compliant."
    },
    {
      question: "Will my HOA need to approve roof repairs?",
      answer: "Most HOAs require review; documentation is typically needed before repairs proceed."
    },
    {
      question: "Does insurance usually cover roof repairs?",
      answer: "Coverage depends on policy terms and cause of damage; inspection documentation can support the claim process."
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
        title="Roof Repair Deerfield Beach, FL | Licensed Contractor | All Phase Construction USA"
        description="Licensed roof repair in Deerfield Beach, FL. Inspection-first diagnostics, HVHZ-compliant repairs, HOA documentation support. Free inspection. Call (754) 227-5605."
        schema={faqSchema}
        canonical="/roof-repair/deerfield-beach"
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/roof-repair" className="hover:text-red-600 transition-colors">Roof Repair</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Deerfield Beach</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in Deerfield Beach, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Deerfield Beach roofs experience constant exposure to salt air, UV intensity, seasonal storms, and rapid heat cycling. These conditions can accelerate wear across tile, shingle, flat, and metal roof systems. All Phase Construction USA has built long-standing relationships with residential and commercial clients in Deerfield Beach by focusing on customer satisfaction and delivering reliable roof repair services.
                </p>
                <p>
                  All Phase Construction USA provides inspection-first roof repair in Deerfield Beach, starting with a certified inspector who will evaluate the safety and resilience of your roof against weather-related threats to determine whether targeted repairs are appropriate under the Florida Building Code and applicable HVHZ requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Free Inspection
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Common Deerfield Beach Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Common Roof Repair Issues in Deerfield Beach
              </h2>
              <p className="text-zinc-300 text-lg mb-10">
                Deerfield Beach roofs commonly experience conditions influenced by coastal proximity, high humidity, and storm-driven rain:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Tile displacement or cracked concrete and clay tiles from wind uplift and thermal cycling</p>
                </div>
                <div className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Aging underlayment failures beneath tile or metal systems exposed to salt air</p>
                </div>
                <div className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Flat roof membrane seam separation and ponding-related leaks after heavy rain events</p>
                </div>
                <div className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Flashing deterioration around skylights, chimneys, and wall transitions</p>
                </div>
                <div className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Fastener back-out on metal roofing due to heat expansion and contraction cycles</p>
                </div>
                <div className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Hidden moisture intrusion following seasonal storm events and hurricane-force winds</p>
                </div>
              </div>
              <p className="text-zinc-400 mt-8 text-base">
                These issues often develop gradually and may not be visible without a systematic inspection.
              </p>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Diagnostic Roof Repair Process
              </h2>
              <p className="text-zinc-300 text-lg mb-12">
                Our repair process is structured to reduce uncertainty and avoid unnecessary scope:
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inspection & Moisture Tracing</h3>
                    <p className="text-zinc-400">Visual review, attic evaluation, and targeted moisture detection to identify root causes and concealed damage patterns.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Code & System Review</h3>
                    <p className="text-zinc-400">Verification against Florida Building Code and HVHZ requirements applicable to Deerfield Beach, ensuring repair approaches maintain compliance.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Repair Feasibility Analysis</h3>
                    <p className="text-zinc-400">Determination of isolated repair vs. partial replacement triggers, based on system age, condition, and code considerations.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scope Definition</h3>
                    <p className="text-zinc-400">Clear explanation of repair limits, materials, and sequencing before work begins, establishing expectations and project boundaries.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Execution & Verification</h3>
                    <p className="text-zinc-400">Code-compliant repair with post-work documentation suitable for HOA submissions and insurance coordination.</p>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 mt-10 text-base">
                This approach helps property owners make informed decisions before committing to larger roofing work.
              </p>
            </div>
          </div>
        </section>

        {/* Roof Types Repaired */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Roof Systems Repaired in Deerfield Beach
              </h2>
              <p className="text-zinc-300 text-lg mb-10">
                All Phase Construction USA repairs a wide range of roofing systems commonly installed in Deerfield Beach:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Concrete and clay tile roofing systems</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Standing seam and exposed fastener metal roofs</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Modified bitumen and built-up flat roofs</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">TPO and other single-ply membranes</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Architectural asphalt shingle roofs</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Low-slope residential and commercial assemblies</span>
                </div>
              </div>
              <p className="text-zinc-400 mt-8 text-base">
                Repair recommendations are always tied to system age, condition, and code considerations.
              </p>
            </div>
          </div>
        </section>

        {/* HOA & Insurance Considerations */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                HOA and Insurance Coordination
              </h2>
              <p className="text-zinc-300 text-lg mb-10">
                Many Deerfield Beach properties fall under HOA governance or insurance oversight. Our team routinely:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Prepares repair documentation suitable for HOA architectural review</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Coordinates repair scopes to align with association guidelines</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Supports insurance-related inspections with condition reports and photos</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Distinguishes storm-related damage from age-related deterioration</span>
                </div>
              </div>
              <p className="text-zinc-400 mt-8 text-base">
                While we do not provide legal or insurance advice, our documentation process supports smoother coordination.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Tools */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Roof Repair Planning Tools
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-zinc-300">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="py-3 px-4 font-semibold text-white">What You're Seeing</th>
                      <th className="py-3 px-4 font-semibold text-white">Common Deerfield Beach Cause</th>
                      <th className="py-3 px-4 font-semibold text-white">Why It Matters</th>
                      <th className="py-3 px-4 font-semibold text-white">Typical Repair Approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4">Ceiling stains after heavy rain</td>
                      <td className="py-3 px-4">Tile underlayment aging beneath intact tiles</td>
                      <td className="py-3 px-4">Moisture can spread beyond the visible stain</td>
                      <td className="py-3 px-4">Selective tile removal and underlayment repair</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4">Loose or slipped roof tiles</td>
                      <td className="py-3 px-4">Wind uplift from coastal storms</td>
                      <td className="py-3 px-4">Exposes underlayment to UV and water intrusion</td>
                      <td className="py-3 px-4">Tile reset or replacement with proper fastening</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4">Flat roof leaks near seams</td>
                      <td className="py-3 px-4">Thermal movement and seam fatigue</td>
                      <td className="py-3 px-4">Leaks can travel laterally before appearing</td>
                      <td className="py-3 px-4">Localized membrane seam repair or reinforcement</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4">Metal roof fasteners backing out</td>
                      <td className="py-3 px-4">Heat expansion and contraction cycles</td>
                      <td className="py-3 px-4">Creates entry points for wind-driven rain</td>
                      <td className="py-3 px-4">Fastener replacement with upgraded washers</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4">Water intrusion around skylights</td>
                      <td className="py-3 px-4">Flashing sealant breakdown from UV exposure</td>
                      <td className="py-3 px-4">Can damage interior finishes and framing</td>
                      <td className="py-3 px-4">Flashing repair or localized re-flashing</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4">Recurring minor leaks</td>
                      <td className="py-3 px-4">Multiple small failure points across the roof</td>
                      <td className="py-3 px-4">Indicates broader system wear</td>
                      <td className="py-3 px-4">Targeted multi-area repairs after full inspection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-zinc-400 mt-8 text-base">
                Property owners can also explore the <Link to="/locations/deerfield-beach" className="text-red-600 hover:text-red-500 underline transition-colors">Deerfield Beach service area hub</Link> and use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">roof cost estimate tool</Link> for early planning. <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">Financing options</Link> are available.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Why Deerfield Beach Property Owners Choose All Phase Construction USA
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-800/30 rounded-xl p-6">
                  <Award className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Florida-based, Dual-Licensed Roofing Contractor</h4>
                  <p className="text-zinc-400 text-sm">Maintaining full compliance with state regulatory requirements and professional standards for commercial and residential roofing work.</p>
                </div>
                <div className="bg-zinc-800/30 rounded-xl p-6">
                  <Wrench className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Inspection-Driven Repair Recommendations</h4>
                  <p className="text-zinc-400 text-sm">Diagnostic assessment identifying root causes before recommending repair scope, avoiding unnecessary work and providing clarity.</p>
                </div>
                <div className="bg-zinc-800/30 rounded-xl p-6">
                  <Home className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Familiarity with South Florida Roofing Systems</h4>
                  <p className="text-zinc-400 text-sm">Experience with tile, metal, flat, and shingle systems common in Deerfield Beach's residential and commercial building stock.</p>
                </div>
                <div className="bg-zinc-800/30 rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Experience Coordinating with HOAs and Insurers</h4>
                  <p className="text-zinc-400 text-sm">Documentation protocols and coordination experience addressing HOA architectural review and insurance documentation requirements.</p>
                </div>
                <div className="bg-zinc-800/30 rounded-xl p-6 md:col-span-2">
                  <Clock className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Clear Documentation and Code-Aware Repair Planning</h4>
                  <p className="text-zinc-400 text-sm">Comprehensive project documentation suitable for HOA submissions, insurance coordination, and Florida Building Code compliance verification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Roof Repair FAQs – Deerfield Beach, FL
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="bg-zinc-800/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-lg pr-4">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <Minus className="w-5 h-5 text-red-500 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-red-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6 text-zinc-400">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule a Roof Repair Inspection
              </h2>
              <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
                If you're experiencing roof issues or want clarity before committing to major work, schedule a professional roof repair inspection with All Phase Construction USA. Our inspection-first approach helps Deerfield Beach property owners understand options before making decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (754) 227-5605
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Request Inspection
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <Contact />
        </section>

        {/* Nearby Service Areas */}
        {nearbyCities.length > 0 && (
          <NearbyServiceAreas
            nearbyCities={nearbyCities} serviceType="roof-repair"
          />
        )}
      </div>
    </>
  );
}
