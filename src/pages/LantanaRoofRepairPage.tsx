import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ChevronRight,
  Wrench,
  Home,
  Plus,
  Minus,
  MapPin,
  Mail,
  Globe,
} from 'lucide-react';

export default function LantanaRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Lantana Roof Repair | Licensed Roofer in Lantana FL';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert roof repair in Lantana, Florida. Tile, shingle, metal & flat roof repairs. Licensed Broward/Palm Beach contractor. Free inspection: (754) 227-5605.');
    }

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you determine whether my Lantana roof needs repair or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We evaluate the damaged area relative to total roof condition, review flashing and underlayment performance, and consider whether code-related thresholds apply. If a targeted repair can restore performance reliably, we document a repair-first scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do roof repairs in Lantana need to meet HVHZ requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If HVHZ provisions apply to your property and the repair scope, repairs must follow those Florida Building Code requirements for materials and attachment. We align repair details to the applicable code path."
          }
        },
        {
          "@type": "Question",
          "name": "Can a tile roof be repaired without replacing the entire roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes—especially when the tile field is serviceable and issues are localized to penetrations, flashings, or limited underlayment areas. If underlayment is broadly deteriorated, a larger scope may be recommended."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with HOA or condo association approvals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide repair descriptions, photos, and material notes commonly requested during architectural review. Final approval depends on your association's process and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What insurance-related documentation do you provide for roof repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide factual condition documentation and records of completed work that owners can share with their insurance provider. Coverage decisions and claim handling remain between you and your insurer."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.head.removeChild(faqSchema);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you determine whether my Lantana roof needs repair or replacement?",
      answer: "We evaluate the damaged area relative to total roof condition, review flashing and underlayment performance, and consider whether code-related thresholds apply. If a targeted repair can restore performance reliably, we document a repair-first scope."
    },
    {
      question: "Do roof repairs in Lantana need to meet HVHZ requirements?",
      answer: "If HVHZ provisions apply to your property and the repair scope, repairs must follow those Florida Building Code requirements for materials and attachment. We align repair details to the applicable code path."
    },
    {
      question: "Can a tile roof be repaired without replacing the entire roof?",
      answer: "Often, yes—especially when the tile field is serviceable and issues are localized to penetrations, flashings, or limited underlayment areas. If underlayment is broadly deteriorated, a larger scope may be recommended."
    },
    {
      question: "Can you help with HOA or condo association approvals?",
      answer: "Yes. We provide repair descriptions, photos, and material notes commonly requested during architectural review. Final approval depends on your association's process and requirements."
    },
    {
      question: "What insurance-related documentation do you provide for roof repairs?",
      answer: "We provide factual condition documentation and records of completed work that owners can share with their insurance provider. Coverage decisions and claim handling remain between you and your insurer."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/roofing-services/roof-repair" className="hover:text-red-500 transition-colors">Roof Repair</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Lantana</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Repair in Lantana, FL
          </h1>

          {/* Hero Paragraph */}
          <p className="text-xl text-zinc-300 mb-6 max-w-4xl leading-relaxed">
            All Phase Construction USA provides inspection-first roof repair services for Lantana properties, focusing on accurate leak diagnostics, Florida Building Code compliance, and repair details designed for South Florida heat, wind-driven rain, and moisture exposure near the Intracoastal corridor. Every project begins with a <Link to="/roofing-services/roof-inspection" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspection</Link> to confirm the source of the issue and determine whether a targeted repair is appropriate.
          </p>

          <p className="text-lg text-zinc-300 mb-8 max-w-4xl">
            Local planning resources: <Link to="/service-areas/lantana" className="text-red-500 hover:text-red-400 underline">Lantana service area hub</Link> • <Link to="/service-areas/lantana/roof-cost-estimate" className="text-red-500 hover:text-red-400 underline">roof cost estimate</Link> • <Link to="/financing" className="text-red-500 hover:text-red-400 underline">financing</Link>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>
        </div>
      </section>

      {/* Common Roof Repair Issues in Lantana */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Common Roof Repair Issues in Lantana
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Lantana roofs frequently show damage patterns related to seasonal storms, prolonged UV exposure, and moisture intrusion at transitions and penetrations. Repairs are most effective when they address the true entry point and the surrounding assembly, not just the visible symptom.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Active Leaks at Penetrations</h3>
                <p className="text-zinc-300">
                  Plumbing stacks, vents, and skylights commonly experience leaks caused by degraded boots, sealant failure, or improper flashing laps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Tile Cracking and Displacement</h3>
                <p className="text-zinc-300">
                  Tile cracking, slipped tiles, or ridge and hip vulnerability following high-wind events require targeted repairs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Roof-to-Wall Flashing Separation</h3>
                <p className="text-zinc-300">
                  Chimney and wall flashing separation, including counterflashing termination issues, creates entry points for moisture.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Underlayment Wear on Tile Systems</h3>
                <p className="text-zinc-300">
                  Underlayment deterioration leads to intermittent staining and moisture migration beneath intact tile.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Flat/Low-Slope Membrane Problems</h3>
                <p className="text-zinc-300">
                  Seam fatigue, termination failure, and localized ponding near drains and scuppers where low-slope systems are present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Roof Repair Process */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Diagnostic Roof Repair Process
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Roof System Review
              </h3>
              <p className="text-zinc-300 pl-11">
                Inspect the roof covering, flashings, edge details, penetrations, and drainage components.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Leak-Path Mapping
              </h3>
              <p className="text-zinc-300 pl-11">
                Trace where water is entering and how it travels through the assembly under wind-driven rain.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Compatibility Check
              </h3>
              <p className="text-zinc-300 pl-11">
                Confirm repair materials and methods match the existing system and manufacturer requirements where applicable.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Code-Aware Scope
              </h3>
              <p className="text-zinc-300 pl-11">
                Determine whether Florida Building Code repair thresholds apply, including HVHZ provisions where applicable.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Photo Documentation
              </h3>
              <p className="text-zinc-300 pl-11">
                Provide clear findings to support owner decisions, HOA review, and insurance communication when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Systems Repaired in Lantana */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Systems Repaired in Lantana
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Concrete &amp; Clay Tile</h3>
              <p className="text-zinc-300">
                Selective tile replacement and reset, flashing repairs, and localized underlayment corrections where feasible.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Asphalt Shingles</h3>
              <p className="text-zinc-300">
                Shingle replacement, flashing corrections, and ventilation-related troubleshooting where applicable.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metal Components</h3>
              <p className="text-zinc-300">
                Edge metal and flashing repairs, fastener corrections, and corrosion-related replacements.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flat/Low-Slope Membranes</h3>
              <p className="text-zinc-300">
                Modified bitumen and single-ply seam, penetration, and termination repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOA and Insurance Coordination */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            HOA and Insurance Coordination
          </h2>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-8">
            <p className="text-zinc-300 leading-relaxed mb-4">
              Many Lantana neighborhoods and communities have HOA or condo association standards that may govern visible materials, work approvals, and scheduling. We support HOA coordination by providing repair scopes, photos, and material notes commonly used in architectural review.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              When insurance is involved, we document observed roof conditions and completed work so you have records to share with your carrier. We do not provide legal guidance, coverage interpretation, or claim direction.
            </p>
          </div>
        </div>
      </section>

      {/* Roof Repair Planning Tools (TABLE) */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Repair Planning Tools
          </h2>

          {/* Planning Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-zinc-950 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">What You're Seeing</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Common Lantana Cause</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Water spot forming near a hallway ceiling line</td>
                  <td className="p-4 text-zinc-300">Leak entry at a nearby penetration with moisture tracking across decking</td>
                  <td className="p-4 text-zinc-300">Stains often appear away from the true entry point, leading to missed repairs</td>
                  <td className="p-4 text-zinc-300">Trace leak path; repair the penetration flashing and adjacent laps</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Loose or cracked tiles along the perimeter</td>
                  <td className="p-4 text-zinc-300">Wind uplift at edges and aging fasteners/adhesives</td>
                  <td className="p-4 text-zinc-300">Perimeter failures increase uplift risk and expose underlayment</td>
                  <td className="p-4 text-zinc-300">Reset/replace tiles; verify compliant perimeter attachment and edge details</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Drips around a plumbing stack</td>
                  <td className="p-4 text-zinc-300">UV-degraded boot or failed sealant at the pipe penetration</td>
                  <td className="p-4 text-zinc-300">Small openings can drive ongoing moisture intrusion during storms</td>
                  <td className="p-4 text-zinc-300">Replace boot/flashing; rework sealant using compatible products</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Leak at an upper wall or soffit line</td>
                  <td className="p-4 text-zinc-300">Roof-to-wall flashing separation or counterflashing termination gap</td>
                  <td className="p-4 text-zinc-300">Can affect wall assemblies and interior finishes beyond the roof deck</td>
                  <td className="p-4 text-zinc-300">Repair/replace step/counterflashing; correct termination and sealing</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Ponding on a low-slope roof section</td>
                  <td className="p-4 text-zinc-300">Restricted drainage (debris) or localized low spot in the substrate</td>
                  <td className="p-4 text-zinc-300">Accelerates membrane aging and increases seam/termination stress</td>
                  <td className="p-4 text-zinc-300">Clear drains/scuppers; reinforce seams/terminations; localized patching</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Lifted shingle edges or nail pops</td>
                  <td className="p-4 text-zinc-300">Heat cycling and fastener movement over time</td>
                  <td className="p-4 text-zinc-300">Creates pathways for wind-driven rain and shingle loss</td>
                  <td className="p-4 text-zinc-300">Secure/replace affected shingles; verify flashing and edge integrity</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-300">Water marks at roof-to-wall stucco junction</td>
                  <td className="p-4 text-zinc-300">Transition fatigue from thermal cycling and moisture</td>
                  <td className="p-4 text-zinc-300">Recurring interior damage risk</td>
                  <td className="p-4 text-zinc-300">Rebuild transition flashing and sealant strategy based on condition</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Planning Links */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800">
            <p className="text-zinc-300 leading-relaxed mb-6">
              For budgeting and planning, use the <Link to="/service-areas/lantana/roof-cost-estimate" className="text-red-500 hover:text-red-400 underline">Lantana roof cost estimate</Link> and review <Link to="/financing" className="text-red-500 hover:text-red-400 underline">financing options</Link>. Area coverage and related services are listed on the <Link to="/service-areas/lantana" className="text-red-500 hover:text-red-400 underline">Lantana service area hub</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Lantana Property Owners Choose All Phase Construction USA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Lantana Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inspection-First Recommendations</h3>
                <p className="text-zinc-300">
                  Repair scopes based on confirmed causes and system condition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Code-Aware Execution</h3>
                <p className="text-zinc-300">
                  Repairs aligned with Florida Building Code requirements and HVHZ considerations where applicable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">System Compatibility Focus</h3>
                <p className="text-zinc-300">
                  Materials and attachment methods chosen to integrate with the existing roof assembly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">HOA-Ready Support</h3>
                <p className="text-zinc-300">
                  Documentation structured for association review workflows.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Clear Documentation</h3>
                <p className="text-zinc-300">
                  Photos and scope notes that help owners make informed decisions.
                </p>
              </div>
            </div>
          </div>

          {/* NAP */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">Contact All Phase Construction USA</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">All Phase Construction USA</p>
                  <p className="text-zinc-300">590 Goolsby Blvd<br />Deerfield Beach, FL 33442</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <a href="tel:+17542275605" className="text-zinc-300 hover:text-red-500 transition-colors">
                    (754) 227-5605
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <a href="mailto:leads@allphaseusa.com" className="text-zinc-300 hover:text-red-500 transition-colors">
                    leads@allphaseusa.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <a href="https://allphaseconstructionfl.com" className="text-zinc-300 hover:text-red-500 transition-colors">
                    allphaseconstructionfl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Repair FAQs – Lantana, FL
          </h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Schedule a Roof Repair Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            Schedule a roof repair inspection for your Lantana property with All Phase Construction USA. We'll assess the roof system, document findings, and recommend a code-aware repair scope when appropriate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule an Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>
          <p className="text-zinc-400">
            All Phase Construction USA • 590 Goolsby Blvd, Deerfield Beach, FL 33442 • <a href="mailto:leads@allphaseusa.com" className="text-red-500 hover:text-red-400 underline">leads@allphaseusa.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
