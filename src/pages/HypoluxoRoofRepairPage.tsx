import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ChevronRight,
  FileText,
  Wrench,
  Home,
  Plus,
  Minus,
  MapPin,
  Mail,
  Globe,
} from 'lucide-react';

export default function HypoluxoRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Roof Repair Hypoluxo FL | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roof repair services in Hypoluxo, FL. Inspection-first diagnostics, Florida Building Code compliance, HOA coordination, and insurance documentation support.');
    }

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you determine whether my Hypoluxo roof needs repair or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assess the extent of damage, the condition of flashings and underlayment, and whether the repair scope triggers code requirements. If a targeted repair can restore performance reliably, we document a repair-first scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do roof repairs in Hypoluxo need to follow HVHZ requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If HVHZ provisions apply to your property and repair scope, repairs must meet those Florida Building Code requirements for materials and attachment methods. We align repair details to the code path that applies."
          }
        },
        {
          "@type": "Question",
          "name": "Can a tile roof be repaired without replacing the entire roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes—particularly when the tile field is serviceable and the issue is localized to flashings, penetrations, or limited underlayment areas. If underlayment is broadly deteriorated, a larger scope may be more practical."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with HOA or condo association approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide repair descriptions, photos, and material notes commonly used for architectural review. Final approval depends on your association's process and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What insurance documentation do you provide for roof repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide factual condition documentation and records of completed work that owners can share with their insurance carrier. Coverage decisions and claim handling remain between you and your insurer."
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
      question: "How do you determine whether my Hypoluxo roof needs repair or replacement?",
      answer: "We assess the extent of damage, the condition of flashings and underlayment, and whether the repair scope triggers code requirements. If a targeted repair can restore performance reliably, we document a repair-first scope."
    },
    {
      question: "Do roof repairs in Hypoluxo need to follow HVHZ requirements?",
      answer: "If HVHZ provisions apply to your property and repair scope, repairs must meet those Florida Building Code requirements for materials and attachment methods. We align repair details to the code path that applies."
    },
    {
      question: "Can a tile roof be repaired without replacing the entire roof?",
      answer: "Often, yes—particularly when the tile field is serviceable and the issue is localized to flashings, penetrations, or limited underlayment areas. If underlayment is broadly deteriorated, a larger scope may be more practical."
    },
    {
      question: "Can you help with HOA or condo association approval?",
      answer: "Yes. We provide repair descriptions, photos, and material notes commonly used for architectural review. Final approval depends on your association's process and requirements."
    },
    {
      question: "What insurance documentation do you provide for roof repairs?",
      answer: "We provide factual condition documentation and records of completed work that owners can share with their insurance carrier. Coverage decisions and claim handling remain between you and your insurer."
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
            <span className="text-white">Hypoluxo</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Repair in Hypoluxo, FL
          </h1>

          {/* Hero Paragraph */}
          <p className="text-xl text-zinc-300 mb-6 max-w-4xl leading-relaxed">
            All Phase Construction USA provides inspection-first roof repair services for Hypoluxo properties, with an emphasis on accurate leak diagnostics, Florida Building Code compliance, and repair details that hold up to South Florida heat, seasonal storms, and moisture exposure near the Intracoastal corridor. Every repair recommendation starts with a <Link to="/roofing-services/roof-inspection" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspection</Link> to confirm the cause of the problem and determine whether a focused repair is appropriate.
          </p>

          <p className="text-lg text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            Local planning resources: <Link to="/service-areas/hypoluxo" className="text-red-500 hover:text-red-400 underline">Hypoluxo service area hub</Link> • <Link to="/service-areas/hypoluxo/roof-cost-estimate" className="text-red-500 hover:text-red-400 underline">roof cost estimate</Link> • <Link to="/financing" className="text-red-500 hover:text-red-400 underline">financing</Link>.
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

      {/* Section 2: Common Roof Repair Issues in Hypoluxo */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Common Roof Repair Issues in Hypoluxo
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Hypoluxo roofs commonly show wear patterns tied to intense sun and UV exposure, wind-driven rain, and water migration at transitions. Repairs often focus on the "weak links" that allow water entry rather than broad, non-specific patching.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Leak Activity at Penetrations</h3>
                <p className="text-zinc-300">
                  Pipe penetrations, vents, and skylights develop leaks due to UV-degraded sealants and aged flashing boots that fail under thermal cycling.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Tile Cracking or Displacement</h3>
                <p className="text-zinc-300">
                  After storms, tiles crack or displace especially along ridges, hips, and perimeter edges, creating direct exposure to underlayment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Flashing Separation at Transitions</h3>
                <p className="text-zinc-300">
                  Roof-to-wall transitions and areas around chimneys or parapets develop separation that allows water entry behind the roof covering.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Underlayment Fatigue on Tile Systems</h3>
                <p className="text-zinc-300">
                  Recurring stains or intermittent leaks often reveal underlayment degradation beneath serviceable tile, requiring targeted intervention.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Flat and Low-Slope Membrane Issues</h3>
                <p className="text-zinc-300">
                  Seam lifting, edge termination failure, or ponding near drains and scuppers compromise flat and low-slope roof performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Diagnostic Roof Repair Process */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Diagnostic Roof Repair Process
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Effective repairs require understanding the problem's root cause. Our diagnostic process identifies the true source of damage and confirms the appropriate repair scope before work begins.
          </p>

          <div className="space-y-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Condition Survey
              </h3>
              <p className="text-zinc-300 pl-11">
                Review roof covering, edge metal, flashings, penetrations, and drainage performance to identify all potential failure points.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Leak-Source Confirmation
              </h3>
              <p className="text-zinc-300 pl-11">
                Trace moisture paths to the most likely entry point, accounting for wind-driven rain and water travel patterns.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                System Compatibility
              </h3>
              <p className="text-zinc-300 pl-11">
                Confirm repair materials and fastening methods align with the existing roof assembly for long-term performance.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Code-Aware Scope
              </h3>
              <p className="text-zinc-300 pl-11">
                Identify Florida Building Code requirements that apply to the repair, including HVHZ provisions where applicable.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Documentation
              </h3>
              <p className="text-zinc-300 pl-11">
                Provide photos and clear scope notes that support owner decisions, HOA review, and insurance communication as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Roof Systems Repaired in Hypoluxo */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Systems Repaired in Hypoluxo
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Concrete and Clay Tile</h3>
              <p className="text-zinc-300">
                Tile replacement and reset, flashing corrections, and localized underlayment repairs where feasible. Compatible attachment methods per manufacturer and code requirements.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Asphalt Shingles</h3>
              <p className="text-zinc-300">
                Shingle replacement, flashing repairs, and ventilation-related troubleshooting where applicable. Wind damage and heat stress addressed per code requirements.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metal Details</h3>
              <p className="text-zinc-300">
                Edge metal, flashing, fastener corrections, and corrosion-related component replacement. Intracoastal exposure considerations for material selection.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flat and Low-Slope Membranes</h3>
              <p className="text-zinc-300">
                Modified bitumen and single-ply repairs at seams, penetrations, and terminations. Ponding stress mitigation and drainage corrections where feasible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: HOA and Insurance Coordination */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            HOA and Insurance Coordination
          </h2>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-8">
            <h3 className="text-2xl font-bold mb-4">HOA and Condo Association Requirements</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Hypoluxo communities may have HOA or condo association requirements that influence visible materials, work hours, and approval steps. We support the process by providing repair descriptions, photos, and product notes commonly requested for architectural review.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Detailed repair descriptions with material specifications and color matching information</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Photo documentation before, during, and after repairs for association records</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Coordination with HOA timelines and approval workflows to minimize project delays</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Insurance Communication</h3>
            <p className="text-zinc-300 leading-relaxed">
              When insurance is involved, we focus on documenting observed roof conditions and the scope of completed work so property owners have clear records to share with their carrier. We do not provide coverage determinations or claim direction.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Roof Repair Planning Tools (TABLE REQUIRED) */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Repair Planning Tools
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            The table below helps Hypoluxo property owners translate symptoms into likely causes and typical repair approaches. An inspection confirms the true source and appropriate scope.
          </p>

          {/* Planning Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-zinc-950 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">What You're Seeing</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Common Hypoluxo Cause</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Drip marks around a bathroom vent or exhaust fan</td>
                  <td className="p-4 text-zinc-300">Cracked vent flashing boot or failed sealant at the penetration</td>
                  <td className="p-4 text-zinc-300">Small penetration leaks can spread moisture across decking and insulation</td>
                  <td className="p-4 text-zinc-300">Replace or repair flashing boot; rework sealant using compatible materials</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Recurring stain that appears after wind-driven rain</td>
                  <td className="p-4 text-zinc-300">Water entering at an offset transition and tracking along underlayment</td>
                  <td className="p-4 text-zinc-300">Repairing the "stain location" alone often misses the true entry point</td>
                  <td className="p-4 text-zinc-300">Trace leak path; correct flashing or termination detail upslope</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Loose or broken tiles near the roof edge</td>
                  <td className="p-4 text-zinc-300">Perimeter uplift forces and aging fasteners or adhesives</td>
                  <td className="p-4 text-zinc-300">Edge failures increase wind vulnerability and expose underlayment</td>
                  <td className="p-4 text-zinc-300">Reset or replace tiles; verify compliant attachment at perimeter conditions</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Water at the top of an exterior wall line</td>
                  <td className="p-4 text-zinc-300">Roof-to-wall flashing separation or inadequate counterflashing termination</td>
                  <td className="p-4 text-zinc-300">Can affect wall assemblies and interior finishes beyond the roof deck</td>
                  <td className="p-4 text-zinc-300">Repair or replace step or counterflashing; ensure proper termination and seal</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Ponding water on a flat or low-slope section</td>
                  <td className="p-4 text-zinc-300">Restricted drain or scupper or localized low spot from substrate movement</td>
                  <td className="p-4 text-zinc-300">Accelerates membrane aging and increases seam and termination stress</td>
                  <td className="p-4 text-zinc-300">Clear drainage; reinforce seams and terminations; localized patching as needed</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-300">Nail pops or lifted shingle edges</td>
                  <td className="p-4 text-zinc-300">Heat cycling and fastener movement over time</td>
                  <td className="p-4 text-zinc-300">Creates pathways for wind-driven rain and shingle loss</td>
                  <td className="p-4 text-zinc-300">Secure or replace affected shingles; correct flashing edges nearby</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Planning Links */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Planning Your Roof Repair</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              For planning and budgeting, use the tools below to estimate costs and explore payment options:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Get a preliminary <Link to="/service-areas/hypoluxo/roof-cost-estimate" className="text-red-500 hover:text-red-400 underline">Hypoluxo roof cost estimate</Link> based on your property details and repair scope.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Review available <Link to="/financing" className="text-red-500 hover:text-red-400 underline">financing options</Link> to manage repair costs with flexible payment plans.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Additional coverage details are available on the <Link to="/service-areas/hypoluxo" className="text-red-500 hover:text-red-400 underline">Hypoluxo service area hub</Link>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Why Hypoluxo Property Owners Choose All Phase Construction USA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Hypoluxo Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inspection-First Approach</h3>
                <p className="text-zinc-300">
                  We focus on verified causes and durable repair details rather than guessing at solutions or over-scoping work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Code-Aware Repairs</h3>
                <p className="text-zinc-300">
                  Repair scopes are aligned to Florida Building Code requirements and HVHZ considerations where applicable, ensuring compliant work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">System-Specific Experience</h3>
                <p className="text-zinc-300">
                  Tile, shingle, metal, and low-slope repairs are handled with compatibility in mind for long-term performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">HOA-Ready Support</h3>
                <p className="text-zinc-300">
                  Documentation structured for association review workflows to support faster approvals and streamlined coordination.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Clear Reporting</h3>
                <p className="text-zinc-300">
                  Photos and scope notes that help owners make informed decisions about repair timing, scope, and budget.
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

      {/* Section 8: FAQ Accordion */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Repair FAQs – Hypoluxo, FL
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

      {/* Section 9: CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Schedule a Roof Repair Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            Schedule a roof repair inspection for your Hypoluxo property with All Phase Construction USA. We'll evaluate the roof system, document findings, and recommend a code-aware repair scope when appropriate.
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
