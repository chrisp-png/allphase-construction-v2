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

export default function LighthousePointRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Lighthouse Point Roof Repair | Licensed Roofer in Lighthouse Point FL';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert roof repair in Lighthouse Point, Florida. Tile, shingle, metal & flat roof repairs. Licensed Broward/Palm Beach contractor. Free inspection: (754) 227-5605.');
    }

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you decide whether my roof needs repair or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We compare the damaged area to the overall roof condition, evaluate underlayment and flashing performance, and consider whether repair scope triggers code requirements. If a repair can restore performance reliably, we'll document a repair-first approach."
          }
        },
        {
          "@type": "Question",
          "name": "Do roof repairs in Lighthouse Point have to meet HVHZ requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your property falls under HVHZ provisions, applicable repairs must follow those Florida Building Code requirements for materials and attachment. We align repair details to the code path that applies to the project."
          }
        },
        {
          "@type": "Question",
          "name": "Can a tile roof be repaired without replacing the whole roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes—especially when the field tile is in serviceable condition and the underlayment and flashings can be corrected locally. If underlayment is widely deteriorated, broader scope may be more practical."
          }
        },
        {
          "@type": "Question",
          "name": "What if my HOA requires specific materials or approvals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide repair descriptions, photos, and material notes that help meet typical HOA review standards. Final material selection may depend on what the association approves and what is compatible with your roof system."
          }
        },
        {
          "@type": "Question",
          "name": "Will a roof repair help with an insurance claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We document observed conditions and completed work so you have clear records to share with your insurer. Coverage decisions and claim handling remain between you and your insurance provider."
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
      question: "How do you decide whether my roof needs repair or replacement?",
      answer: "We compare the damaged area to the overall roof condition, evaluate underlayment and flashing performance, and consider whether repair scope triggers code requirements. If a repair can restore performance reliably, we'll document a repair-first approach."
    },
    {
      question: "Do roof repairs in Lighthouse Point have to meet HVHZ requirements?",
      answer: "If your property falls under HVHZ provisions, applicable repairs must follow those Florida Building Code requirements for materials and attachment. We align repair details to the code path that applies to the project."
    },
    {
      question: "Can a tile roof be repaired without replacing the whole roof?",
      answer: "Often, yes—especially when the field tile is in serviceable condition and the underlayment and flashings can be corrected locally. If underlayment is widely deteriorated, broader scope may be more practical."
    },
    {
      question: "What if my HOA requires specific materials or approvals?",
      answer: "We provide repair descriptions, photos, and material notes that help meet typical HOA review standards. Final material selection may depend on what the association approves and what is compatible with your roof system."
    },
    {
      question: "Will a roof repair help with an insurance claim?",
      answer: "We document observed conditions and completed work so you have clear records to share with your insurer. Coverage decisions and claim handling remain between you and your insurance provider."
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
            <span className="text-white">Lighthouse Point</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Repair in Lighthouse Point, FL
          </h1>

          {/* Hero Paragraph */}
          <p className="text-xl text-zinc-300 mb-6 max-w-4xl leading-relaxed">
            All Phase Construction USA provides inspection-first roof repair for Lighthouse Point homes and multi-family properties, emphasizing accurate leak tracing, Florida Building Code compliance, and repair scopes that fit the roof system's actual condition. Each project starts with a <Link to="/roofing-services/roof-inspection" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspection</Link> to confirm the source of intrusion or damage, check vulnerable transitions, and determine whether a targeted repair is appropriate—especially for properties influenced by coastal wind and salt-air conditions.
          </p>

          <p className="text-lg text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            Explore local resources: <Link to="/service-areas/lighthouse-point" className="text-red-500 hover:text-red-400 underline">Lighthouse Point service area</Link> • <Link to="/service-areas/lighthouse-point/roof-cost-estimate" className="text-red-500 hover:text-red-400 underline">roof cost estimate</Link> • <Link to="/financing" className="text-red-500 hover:text-red-400 underline">financing</Link>.
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

      {/* Section 2: Common Roof Repair Issues in Lighthouse Point */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Common Roof Repair Issues in Lighthouse Point
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Lighthouse Point properties often experience accelerated wear from heat cycling, seasonal storm activity, and salt-influenced moisture. Repairs typically focus on water entry points, fastener performance, and system compatibility with existing materials.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Tile Slippage or Breakage</h3>
                <p className="text-zinc-300">
                  High-wind events and debris impact commonly cause tile displacement and cracking, creating direct exposure to underlayment and increasing uplift risk.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Leak Paths at Penetrations</h3>
                <p className="text-zinc-300">
                  Skylights, vents, and plumbing stacks often develop leaks due to aged boots or sealant failure from UV degradation and heat cycling.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Corrosion at Flashings and Fasteners</h3>
                <p className="text-zinc-300">
                  Coastal-influenced streets and waterways accelerate corrosion at drip edges, wall flashings, and fastener points, compromising water-shedding performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Flat/Low-Slope Ponding Stress</h3>
                <p className="text-zinc-300">
                  Where drainage is restricted or scuppers are undersized or obstructed, ponding accelerates membrane aging and increases seam stress.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Underlayment Fatigue and Nail Back-Out</h3>
                <p className="text-zinc-300">
                  Thermal cycling and fastener movement can reveal themselves through intermittent staining or damp decking that appears after specific weather events.
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
            Effective roof repair starts with understanding the problem, not just treating symptoms. Our diagnostic process identifies the root cause and full extent of damage before recommending scope.
          </p>

          <div className="space-y-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Targeted Inspection
              </h3>
              <p className="text-zinc-300 pl-11">
                Evaluate roof surface condition, penetrations, transitions, and drainage components to identify all potential failure points.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Leak-Path Tracing
              </h3>
              <p className="text-zinc-300 pl-11">
                Confirm where water is entering and where it is traveling to avoid "guess repairs" that don't address the true source.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                System Compatibility Check
              </h3>
              <p className="text-zinc-300 pl-11">
                Verify repair materials and attachment methods will integrate with the existing roof system for long-term performance.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Code-Aware Scope
              </h3>
              <p className="text-zinc-300 pl-11">
                Determine whether repair quantity or extent triggers Florida Building Code requirements, including HVHZ provisions where applicable.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Documentation
              </h3>
              <p className="text-zinc-300 pl-11">
                Provide clear findings and photos for homeowner records, HOA review, and insurance communication as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Roof Systems Repaired in Lighthouse Point */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Systems Repaired in Lighthouse Point
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Concrete and Clay Tile</h3>
              <p className="text-zinc-300">
                Selective tile replacement and reset, flashing repairs, and localized underlayment correction where accessible. Compatible mortar and adhesive applications per manufacturer requirements.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Asphalt Shingles</h3>
              <p className="text-zinc-300">
                Tab and dimensional shingle repairs, flashing corrections, and ventilation-related leak investigations where applicable. Heat stress and wind damage addressed per code requirements.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metal Components</h3>
              <p className="text-zinc-300">
                Fastener and clip issues, edge metal and flashing repairs, corrosion-related replacements. Coastal exposure considerations for material selection and attachment.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flat and Low-Slope Membranes</h3>
              <p className="text-zinc-300">
                Modified bitumen and single-ply seam and termination repairs, drain and scupper corrections, and localized patching. Ponding stress mitigation where feasible.
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
            <h3 className="text-2xl font-bold mb-4">HOA and Architectural Guidelines</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Lighthouse Point communities often have HOA or architectural guidelines that affect visible materials, colors, and repair methods—especially on tile, edge metal, and flat-roof terminations. We help streamline approvals by providing repair descriptions, photos, and material notes aligned to common HOA review requirements.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Clear repair descriptions with material specifications and color matching details</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Photo documentation before, during, and after repairs for association records</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Coordination with HOA timelines and approval processes to minimize delays</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Insurance Communication</h3>
            <p className="text-zinc-300 leading-relaxed">
              For insurance communication, we focus on objective condition reporting and documentation of completed work. This supports clear conversations with your carrier while avoiding claims guidance or coverage interpretation. Coverage decisions and claim handling remain between you and your insurance provider.
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
            The table below helps Lighthouse Point property owners translate symptoms into likely causes and typical repair approaches. An inspection confirms the true source and appropriate scope.
          </p>

          {/* Planning Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-zinc-950 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">What You're Seeing</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Common Lighthouse Point Cause</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Intermittent ceiling stain that "comes and goes"</td>
                  <td className="p-4 text-zinc-300">Water tracking from a penetration or transition before showing indoors</td>
                  <td className="p-4 text-zinc-300">Leak origin is often uphill or offset from the stain, leading to missed repairs</td>
                  <td className="p-4 text-zinc-300">Trace leak path; reseal or replace penetration flashing and correct adjacent laps</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Cracked or missing tile near hips or ridges</td>
                  <td className="p-4 text-zinc-300">Wind vibration and debris impact during storms</td>
                  <td className="p-4 text-zinc-300">Creates direct access to underlayment and increases uplift risk</td>
                  <td className="p-4 text-zinc-300">Replace or reset tiles; verify ridge and hip attachment and compatible mortar or adhesive use</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Rust at drip edge or wall flashing</td>
                  <td className="p-4 text-zinc-300">Salt-influenced moisture accelerating metal corrosion</td>
                  <td className="p-4 text-zinc-300">Compromised flashing allows water entry behind the roof covering</td>
                  <td className="p-4 text-zinc-300">Replace affected metal with corrosion-resistant components; reseal terminations</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Water near sliding doors or upper wall lines</td>
                  <td className="p-4 text-zinc-300">Roof-to-wall transition or counterflashing leakage</td>
                  <td className="p-4 text-zinc-300">Can affect wall sheathing and interior finishes beyond the roof deck</td>
                  <td className="p-4 text-zinc-300">Repair or replace step or counterflashing; ensure proper sealant and termination detail</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Ponding on flat or low-slope areas after rain</td>
                  <td className="p-4 text-zinc-300">Restricted drains or scuppers, or minor substrate deflection</td>
                  <td className="p-4 text-zinc-300">Accelerates membrane aging and increases seam stress</td>
                  <td className="p-4 text-zinc-300">Clear or upgrade drainage where feasible; reinforce seams and terminations; localized patching</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-300">Loose vent boot or cracked sealant at pipe</td>
                  <td className="p-4 text-zinc-300">UV degradation and heat cycling</td>
                  <td className="p-4 text-zinc-300">One of the most common intrusion points on many roof types</td>
                  <td className="p-4 text-zinc-300">Replace boot or flashing; rework sealant per manufacturer-compatible methods</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Planning Links */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Planning Your Roof Repair</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              For budgeting and next-step planning, use the tools below to estimate costs and explore payment options:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Get a preliminary <Link to="/service-areas/lighthouse-point/roof-cost-estimate" className="text-red-500 hover:text-red-400 underline">Lighthouse Point roof cost estimate</Link> based on your property details and repair scope.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Review available <Link to="/financing" className="text-red-500 hover:text-red-400 underline">financing options</Link> to manage repair costs with flexible payment plans.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Area coverage and related services are listed on the <Link to="/service-areas/lighthouse-point" className="text-red-500 hover:text-red-400 underline">Lighthouse Point service area hub</Link>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Why Lighthouse Point Property Owners Choose All Phase Construction USA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Lighthouse Point Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inspection-First Scope</h3>
                <p className="text-zinc-300">
                  Repairs are based on verified causes, not assumptions. We identify the true source before prescribing repair extent.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Code-Aware Execution</h3>
                <p className="text-zinc-300">
                  Repair approaches account for Florida Building Code and HVHZ considerations where applicable, ensuring compliant work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">System-Specific Expertise</h3>
                <p className="text-zinc-300">
                  Tile, shingle, metal details, and low-slope membrane transitions handled with compatibility in mind for long-term performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">HOA-Ready Documentation</h3>
                <p className="text-zinc-300">
                  Clear repair descriptions and photos that support faster approvals and streamlined association coordination.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Owner-Friendly Process</h3>
                <p className="text-zinc-300">
                  Practical recommendations that prioritize risk reduction and durability without unnecessary scope expansion.
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
            Roof Repair FAQs – Lighthouse Point, FL
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
            To schedule a roof repair inspection for your Lighthouse Point property, contact All Phase Construction USA. We'll evaluate the roof system, document findings, and recommend a code-aware repair scope when appropriate.
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
