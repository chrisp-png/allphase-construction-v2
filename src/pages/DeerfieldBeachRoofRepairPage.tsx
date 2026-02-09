import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, FileCheck, Shield, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function DeerfieldBeachRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
        title="Roof Repair Deerfield Beach, FL | Free Roof Inspection"
        description="Need roof repair in Deerfield Beach? Get a free roof inspection. Tile, shingle, metal & flat roofing. Call (754) 227-5605."
        schema={faqSchema}
      />
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
                Roof Repair in Deerfield Beach, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Deerfield Beach roofs experience constant exposure to salt air, UV intensity, seasonal storms, and rapid heat cycling. These conditions can accelerate wear across tile, shingle, flat, and metal roof systems. All Phase Construction USA provides inspection-first roof repair in Deerfield Beach, starting with a <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to determine whether targeted repairs are appropriate under the Florida Building Code and applicable HVHZ requirements.
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

        {/* Common Deerfield Beach Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roof Repair Issues in Deerfield Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              Roofs in Deerfield Beach often show damage patterns influenced by coastal exposure and dense residential development. Common repair issues include cracked or displaced tiles from thermal expansion, fastener back-out on shingle systems, flat roof membrane seam separation, and flashing deterioration caused by salt corrosion. Moisture intrusion around skylights, wall transitions, and parapet caps is also frequently observed, particularly after seasonal storm activity.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Cracked or Displaced Tiles
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Thermal expansion and coastal wind uplift cause tiles to crack, shift, or dislodge, creating direct water entry points that require selective tile replacement and underlayment inspection to ensure proper waterproofing integrity.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Fastener Back-Out and Shingle Loss
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Wind exposure and aged fasteners on shingle systems lead to fastener back-out and missing shingles, compromising wind resistance and requiring code-compliant fastening methods during repair.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Flat Roof Membrane Separation
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Drainage limitations and membrane wear on flat roofs cause seam separation and ponding water, accelerating membrane failure and requiring localized repair with proper drainage correction.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Salt Air Corrosion
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Coastal salt air accelerates corrosion on metal components and flashing systems, weakening attachment points and requiring corroded section replacement with proper sealing to prevent recurring damage.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Flashing Breakdown at Transitions
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Flashing deterioration near wall transitions and roof penetrations creates moisture intrusion pathways, causing interior ceiling staining and requiring targeted flashing repair or replacement to restore waterproofing.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Skylight and Penetration Leaks
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Aging seals and improper flashing around skylights and roof penetrations allow recurring interior damage, necessitating flashing system rebuild or seal replacement to eliminate leak sources.
                </p>
              </div>
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
              All Phase Construction USA follows a structured diagnostic process before recommending any roof repair. The process begins with a surface and perimeter inspection, followed by moisture pathway evaluation and attachment assessment. Findings are reviewed against current Florida Building Code standards, including HVHZ considerations where applicable. Only repair scopes that can be completed without triggering unnecessary system-wide replacement are recommended, allowing property owners to make informed, code-aware decisions.
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Surface and Perimeter Inspection
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Comprehensive examination of roof surface conditions, perimeter details, and visible damage patterns with deck access where necessary. This initial assessment identifies obvious deficiencies and establishes the scope for deeper diagnostic investigation of concealed conditions.
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
                      Moisture Pathway Evaluation
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Detailed analysis of moisture intrusion patterns, drainage pathways, and water entry points using moisture detection equipment where appropriate. This diagnostic phase determines whether observed leaks represent isolated failures amenable to repair or symptoms of systemic deterioration requiring replacement consideration.
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
                      Attachment Assessment
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Verification of fastener patterns, attachment integrity, and wind resistance characteristics against Florida Building Code requirements. This evaluation determines whether existing attachment methods meet current standards or require upgrade during repair execution.
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
                      Code Compliance Review
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Assessment of repair scope against current Florida Building Code standards, including HVHZ considerations where applicable. This review ensures proposed repairs maintain code compliance and insurability without triggering unnecessary system-wide replacement requirements.
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
              Roof Systems Repaired in Deerfield Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              All Phase Construction USA performs code-compliant repairs on the following roof systems commonly found in Deerfield Beach:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Concrete and Clay Tile Roofing Systems
                </h3>
                <p className="text-zinc-300 mb-3">
                  Individual tile replacement, underlayment section repair, and flashing upgrades for concrete and clay tile systems prevalent across Deerfield Beach residential properties. Repair feasibility depends on tile availability and underlayment condition assessment.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Tile repairs prove cost-effective when damage remains localized and materials can be properly matched to existing installations.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Architectural and Three-Tab Shingle Roofs
                </h3>
                <p className="text-zinc-300 mb-3">
                  Shingle replacement, fastener correction, and flashing repairs for asphalt shingle systems addressing wind uplift damage, fastener pullout, and localized deterioration from UV exposure and coastal conditions.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Shingle repairs maintain manufacturer warranty coverage when materials are properly matched and installation follows approved methods.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Modified Bitumen and Flat Membrane Roofs
                </h3>
                <p className="text-zinc-300 mb-3">
                  Membrane repairs, seam correction, and drainage improvements for flat and low-slope systems on commercial properties and residential flat roof sections. Repair techniques address both surface symptoms and underlying causal factors.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Flat roof repairs require proper drainage correction and substrate preparation to achieve long-term performance.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Standing Seam and Exposed-Fastener Metal Roofs
                </h3>
                <p className="text-zinc-300 mb-3">
                  Panel replacement, fastener correction, and sealant restoration for metal roofing systems. Metal roof repairs accommodate thermal movement and maintain wind resistance ratings critical in coastal applications.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Metal repairs must address thermal expansion cycles characteristic of South Florida temperature ranges.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-zinc-400 italic">
              Repair feasibility is evaluated based on system age, prior installation methods, and current code requirements.
            </p>
          </div>
        </section>

        {/* HOA & Insurance Considerations */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HOA and Insurance Coordination
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              Many Deerfield Beach properties are governed by HOAs or condo associations with specific repair approval processes. All Phase Construction USA coordinates documentation, scope clarity, and repair limitations to support HOA compliance. When repairs involve insurance claims, inspection findings and photo documentation are provided to support the claim review process without offering legal or coverage determinations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-semibold text-white">
                    HOA Architectural Standards
                  </h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Deerfield Beach homeowner associations maintain architectural control standards governing material selection, color matching, and installation methodology for visible roof repairs. Repair proposals require documentation demonstrating compliance with community aesthetic requirements.
                  </p>
                  <p>
                    We provide comprehensive submission packages including material specifications, manufacturer data sheets, color samples, and installation methodology descriptions addressing common HOA review criteria.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-semibold text-white">
                    Insurance Documentation Requirements
                  </h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Insurance carriers scrutinize roof condition through inspection protocols identifying deficiencies requiring correction. Properly documented repairs addressing cited deficiencies demonstrate responsive property maintenance.
                  </p>
                  <p>
                    Repair documentation includes pre-repair condition photography, detailed scope descriptions, material certifications, and post-repair verification suitable for insurance submission. Property owners should confirm carrier-specific requirements before proceeding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-white mb-6">
                Documentation Use Cases
              </h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">HOA Submission Support:</strong> Material specifications and installation methodology for architectural review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Insurance Coordination:</strong> Pre/post-repair photography and scope documentation for carrier verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Real Estate Transactions:</strong> Maintenance records demonstrating proactive repair completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Warranty Records:</strong> Work completion documentation with material and labor warranty terms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Planning Tools Table */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair Planning Tools
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-zinc-800 border border-zinc-700 rounded-lg">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="px-6 py-4 text-left text-white font-semibold">What You're Seeing</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Common Deerfield Beach Cause</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Cracked or shifted roof tiles</td>
                    <td className="px-6 py-4 text-zinc-300">Thermal expansion and coastal wind uplift</td>
                    <td className="px-6 py-4 text-zinc-300">Creates direct water entry points</td>
                    <td className="px-6 py-4 text-zinc-300">Selective tile replacement and underlayment inspection</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Interior ceiling staining</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing breakdown near wall transitions</td>
                    <td className="px-6 py-4 text-zinc-300">Indicates active moisture intrusion</td>
                    <td className="px-6 py-4 text-zinc-300">Targeted flashing repair or replacement</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Loose or missing shingles</td>
                    <td className="px-6 py-4 text-zinc-300">Wind exposure and aged fasteners</td>
                    <td className="px-6 py-4 text-zinc-300">Compromises wind resistance</td>
                    <td className="px-6 py-4 text-zinc-300">Shingle replacement with code-compliant fastening</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Flat roof ponding</td>
                    <td className="px-6 py-4 text-zinc-300">Drainage limitations and membrane wear</td>
                    <td className="px-6 py-4 text-zinc-300">Accelerates membrane failure</td>
                    <td className="px-6 py-4 text-zinc-300">Localized membrane repair and drainage correction</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Rusting metal components</td>
                    <td className="px-6 py-4 text-zinc-300">Salt air corrosion</td>
                    <td className="px-6 py-4 text-zinc-300">Weakens attachment points</td>
                    <td className="px-6 py-4 text-zinc-300">Corroded section replacement and sealing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300">Skylight leaks</td>
                    <td className="px-6 py-4 text-zinc-300">Aging seals and improper flashing</td>
                    <td className="px-6 py-4 text-zinc-300">Allows recurring interior damage</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing system rebuild or seal replacement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <Link
                to="/locations/deerfield-beach"
                className="block bg-zinc-800 border-2 border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Deerfield Beach Roofing Services
                </h3>
                <p className="text-zinc-300">
                  Comprehensive roofing services including repair and replacement for Deerfield Beach properties.
                </p>
              </Link>

              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="block bg-zinc-800 border-2 border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Cost Estimate
                </h3>
                <p className="text-zinc-300">
                  Generate preliminary cost estimates based on property characteristics and repair scope assumptions.
                </p>
              </a>

              <Link
                to="/easy-payments"
                className="block bg-zinc-800 border-2 border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Financing Options
                </h3>
                <p className="text-zinc-300">
                  Explore financing options and flexible payment plans for roof repair projects.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Deerfield Beach Property Owners Choose All Phase Construction USA
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Inspection-Driven Approach</h4>
                  <p className="text-zinc-300">Forensic-style roof assessment identifying root causes rather than surface symptoms, providing property owners with accurate condition understanding and scope clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Florida Code Literacy</h4>
                  <p className="text-zinc-300">Comprehensive understanding of Florida Building Code requirements including HVHZ standards applicable to Deerfield Beach coastal properties.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">HOA Framework Experience</h4>
                  <p className="text-zinc-300">Proven experience navigating homeowner association architectural review processes with documentation protocols addressing common approval requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Insurance Documentation Support</h4>
                  <p className="text-zinc-300">Comprehensive project documentation suitable for insurance coordination and claim support, recognizing that repair value extends beyond immediate leak resolution.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">No Unnecessary Upselling</h4>
                  <p className="text-zinc-300">Repairs are evaluated for technical feasibility, longevity, and compliance without unnecessary replacement recommendations or premature system-wide proposals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Licensed and Insured</h4>
                  <p className="text-zinc-300">Florida-licensed roofing contractor maintaining full compliance with state regulatory requirements and comprehensive liability insurance coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair FAQs – Deerfield Beach, FL
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
              Active leaks, visible damage, or suspected roof deterioration require prompt diagnostic assessment. Contact All Phase Construction USA for comprehensive roof inspection and code-compliant repair scoping in Deerfield Beach.
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
      </div>
    </>
  );
}
