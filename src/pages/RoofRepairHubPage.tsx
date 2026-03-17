import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ChevronRight,
  FileText,
  Wind,
  Droplets,
  ThermometerSun,
  Wrench,
  Home,
  Calendar,
  Plus,
  Minus,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
} from 'lucide-react';
import SEO from '../components/SEO';

export default function RoofRepairHubPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // NOTE: "Is it better to repair a roof or replace it?" was removed from this FAQ list
  // to avoid duplicate FAQ schema — that question lives on /frequently-asked-questions.
  const faqItems = [
    {
      question: "Do roof repairs have to meet Florida Building Code requirements?",
      answer: "Roof repairs should be completed in a way that aligns with applicable Florida Building Code requirements for the scope of work and the areas being repaired. Code considerations can vary based on roof type, the extent of the repair, and what components are being disturbed or replaced. A licensed roofing contractor can identify the relevant code requirements during the inspection and repair planning process."
    },
    {
      question: "Can ventilation upgrades be included as part of a roof repair plan?",
      answer: "Yes. In South Florida, excess attic heat and moisture imbalance can accelerate roof aging and contribute to premature material fatigue. When ventilation is a contributing factor, a repair plan may include ventilation improvements such as balanced intake and exhaust adjustments, installed where appropriate and in a code-compliant manner."
    },
    {
      question: "Can roof repairs help with Florida's 5-year roof certification for insurance renewal?",
      answer: "Repairs may address specific deficiencies so the roof can be evaluated based on condition rather than age. Florida Statute § 627.7011(5)(a) addresses renewals related to roof age when a qualified professional provides a roof condition certification indicating remaining useful life. Whether a roof qualifies depends on inspection findings and documentation, and outcomes can vary by insurer."
    },
    {
      question: "Is it better to repair one spot or restore an entire roof section?",
      answer: "Often, restoring an entire affected section or slope is more reliable than a single spot repair because it addresses adjacent penetrations, flashings, and any nearby underlayment deterioration that may be part of the same failure pattern. The right scope depends on what a diagnostic inspection finds and how the roof system is performing around the problem area."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roof Repair Services",
      "serviceType": "Roof Repair",
      "description": "Professional roof repair and restoration services in Broward and Palm Beach County, Florida. Diagnostic inspections, slope-based restoration, and Florida Building Code-compliant repairs.",
      "url": "https://allphaseconstructionfl.com/roof-repair",
      "provider": {
        "@id": "https://allphaseconstructionfl.com/#business"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Broward County, Florida"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Palm Beach County, Florida"
        }
      ]
    },
    {
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
    }
  ];

  return (
    <>
      <SEO
        title="Roof Repair Broward & Palm Beach County, FL"
        description="Professional roof repair services in Broward and Palm Beach County. Inspection-based evaluations, slope restoration, ventilation upgrades, and Florida Building Code-compliant repairs. Diagnostic inspections available."
        schema={schemas}
      />
      <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Roof Repair</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Repair in Broward & Palm Beach County, FL
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-red-500 font-semibold mb-6">
            Don't Replace Your Roof — Restore It Instead
          </p>

          {/* Hero Paragraph */}
          <p className="text-xl text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            In Broward and Palm Beach County, many roofs are replaced years before the system has reached the end of its useful life. In South Florida's heat, humidity, and storm-driven conditions, roof issues most often begin at penetrations, flashings, ventilation points, or entire slopes — not across the entire roof at once. A professional, <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspection</Link> can determine whether strategic repairs and restoration can extend roof life, support insurance eligibility, and delay full replacement. We service all roofing systems including <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">tile</Link>, <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">metal</Link>, <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">shingle</Link>, <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline">flat</Link>, and <Link to="/single-ply-roofing/" className="text-red-500 hover:text-red-400 underline">single-ply</Link> roofs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Roof Inspection
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

      {/* HVHZ Roofing Code Considerations */}
      <section className="py-16 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">HVHZ Roofing Code Considerations</h2>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">High Velocity Hurricane Zone Requirements</h3>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  All of Broward County and Palm Beach County properties south of the Martin County line fall within Florida's High Velocity Hurricane Zone (HVHZ). This designation requires enhanced fastening schedules, wind-rated material approvals, and specific installation methods for all roof repairs and replacements.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Roof repairs in HVHZ areas must meet Florida Building Code Section 1511 requirements and applicable HVHZ provisions to maintain wind resistance performance. All <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">tile roof</Link> repairs require both foam adhesive and mechanical fastening. <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">Metal roofing</Link> systems need tested clip or panel attachment methods. <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">Shingle repairs</Link> must use high-wind-rated products with enhanced nailing patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <FileText className="w-6 h-6 text-red-600" />
                The 25% Rule (Pre-2009 Roofs)
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Florida Statute 553.844(5) requires that pre-2009 roofs exceeding 25% repair within a 12-month period may trigger full code-compliant replacement. Licensed contractors calculate repair scope during <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">inspection</Link> to verify compliance.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-red-600" />
                Post-2009 Roof Flexibility
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Roofs permitted after March 1, 2009 can be repaired at any scope without triggering full replacement, provided the repaired section meets current Florida Building Code requirements for materials and installation methods.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Material-Specific HVHZ Repair Standards</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-zinc-300"><strong>Concrete & Clay Tile:</strong> All tiles must be mechanically fastened plus foam-adhered per TAS 100 standards</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-zinc-300"><strong>Standing Seam Metal:</strong> Clip systems must meet HVHZ testing protocols; panels require proper thermal movement allowances</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-zinc-300"><strong>Asphalt Shingles:</strong> High-wind shingles rated for 130+ mph with 6-nail patterns in field and enhanced edge fastening</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-zinc-300"><strong><Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline">Flat</Link> & <Link to="/single-ply-roofing/" className="text-red-500 hover:text-red-400 underline">Single-Ply</Link> Systems:</strong> Membrane attachments and base sheet fastening must meet uplift ratings for exposure zone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Restore Performance Instead of Chasing Leaks */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Restore Performance Instead of Chasing Leaks
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            A single leak is rarely a single failure. When one pipe boot, vent, or flashing is corroded, others of the same age and exposure may be nearing failure too. Effective roof repair planning evaluates the whole slope system around the leak, not just the wet spot.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span><strong>Penetrations are installed at the same time and tend to age together.</strong> If one pipe boot has failed, adjacent boots on the same slope may be at similar risk.</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span><strong>UV and heat cycling causes sealant and material fatigue across a section.</strong> Exposure patterns mean deterioration rarely stops at one component.</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span><strong>Underlayment breakdown can extend beyond the visible wet spot.</strong> Water may travel before appearing as a leak, masking broader deterioration.</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span><strong>Attachment and fastener loosening often occurs slope-wide.</strong> Wind uplift and thermal expansion affect entire sections, not isolated points.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Slope-Based Roof Repair & System Restoration */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Slope-Based Roof Repair & System Restoration
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Repairing an entire affected slope — up to the ridge or natural break point — often restores roof performance more reliably than isolated patches. This approach addresses the root cause of failure patterns rather than treating symptoms one at a time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <Wrench className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Replace Multiple Penetrations at Once</h3>
              <p className="text-zinc-300">
                When one vent or pipe boot has failed, replacing all penetrations on the same slope prevents recurring service calls and extends the repair lifespan. This approach works for all roofing systems including <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">tile</Link>, <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">shingle</Link>, and <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">metal roofs</Link>.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rework Flashing Transitions as a Unit</h3>
              <p className="text-zinc-300">
                Flashing transitions and surrounding underlayment are interconnected. Addressing them together ensures proper water shedding and attachment integrity.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <Wind className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Reinforce Attachment Where Movement Has Begun</h3>
              <p className="text-zinc-300">
                Wind uplift and thermal movement can loosen fasteners across a section. Reinforcement addresses the pattern, not just the symptom.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <FileText className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Execute Repairs to Code Standards</h3>
              <p className="text-zinc-300">
                Repairs are executed in a way that aligns with Florida Building Code requirements for the scope of work, ensuring compliant restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ventilation */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ventilation: One of the Most Overlooked Roof Repairs
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            In South Florida, ventilation issues are often a contributing factor in premature roof aging. Excess attic heat and moisture imbalance accelerate material deterioration and can undermine even a well-installed roof system.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4">
              <ThermometerSun className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Excess Attic Heat Accelerates Shingle Aging</h3>
                <p className="text-zinc-300">
                  High attic temperatures cause <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">shingles</Link> to become brittle and lose flexibility, reducing their resistance to wind and thermal stress.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Thermal Shock Increases Movement at Seams</h3>
                <p className="text-zinc-300">
                  Rapid temperature changes create expansion and contraction cycles that stress fasteners, seams, and adhesive bonds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">High Heat Shortens Underlayment Lifespan</h3>
                <p className="text-zinc-300">
                  Prolonged heat exposure degrades underlayment and adhesive materials, reducing the system's overall durability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Droplets className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Moisture Imbalance Contributes to Hidden Deterioration</h3>
                <p className="text-zinc-300">
                  Poor ventilation can trap moisture in the attic space, leading to condensation, mold growth, and structural concerns over time.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Ventilation upgrades — including balanced intake and exhaust systems, and ridge vent installations where appropriate — can be incorporated into a repair plan when properly designed and code-compliant. These improvements reduce heat stress and can slow premature aging.
          </p>
        </div>
      </section>

      {/* Section 4: Repair vs. Replace Decision Table */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Repair vs. Replace: Making the Right Decision
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            This decision framework helps homeowners facing insurance review, budgeting constraints, or home sale timing evaluate their options based on specific roof conditions and circumstances.
          </p>

          {/* Decision Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-zinc-900 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Scenario</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Repair-Based Approach</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Replacement-Based Approach</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Practical Impact</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Typical Cost Range (Relative)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Leak at one pipe boot; surrounding slope looks intact</td>
                  <td className="p-4 text-zinc-300">Replace boot + inspect all penetrations on that slope</td>
                  <td className="p-4 text-zinc-300">Full reroof if widespread material fatigue is confirmed</td>
                  <td className="p-4 text-zinc-300">Stops recurring leaks and reduces 'next penetration' failures</td>
                  <td className="p-4 text-zinc-300">Low to Medium</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Multiple penetrations on one slope are brittle or corroded</td>
                  <td className="p-4 text-zinc-300">Replace all penetrations on that slope; reflash as needed</td>
                  <td className="p-4 text-zinc-300">Full replacement if underlayment is broadly compromised</td>
                  <td className="p-4 text-zinc-300">Restores slope reliability; reduces repeat service calls</td>
                  <td className="p-4 text-zinc-300">Medium</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Damage is concentrated on one slope after storms/UV exposure</td>
                  <td className="p-4 text-zinc-300">Section/slope restoration up to ridge/break; match system details</td>
                  <td className="p-4 text-zinc-300">Full reroof if multiple slopes show the same failure pattern</td>
                  <td className="p-4 text-zinc-300">Targets the failure zone without replacing sound areas</td>
                  <td className="p-4 text-zinc-300">Medium</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Underlayment deterioration is localized around a leak path</td>
                  <td className="p-4 text-zinc-300">Open and restore affected area; replace compromised underlayment</td>
                  <td className="p-4 text-zinc-300">Replace if underlayment failure is widespread</td>
                  <td className="p-4 text-zinc-300">Addresses the cause, not just the symptom</td>
                  <td className="p-4 text-zinc-300">Medium</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Roof is aging but still performing; goal is 3–5 year extension</td>
                  <td className="p-4 text-zinc-300">Correct active deficiencies + maintenance plan + document condition</td>
                  <td className="p-4 text-zinc-300">Replace now for full lifecycle reset</td>
                  <td className="p-4 text-zinc-300">Defers major capital cost and supports planned timing</td>
                  <td className="p-4 text-zinc-300">Low to Medium</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Homeowner preparing to sell within 6–24 months</td>
                  <td className="p-4 text-zinc-300">Stabilize leaks, correct visible deficiencies, document repairs</td>
                  <td className="p-4 text-zinc-300">Replace if buyer/insurer requires full system reset</td>
                  <td className="p-4 text-zinc-300">Improves marketability without unnecessary upfront spend</td>
                  <td className="p-4 text-zinc-300">Low to Medium</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Insurance renewal pressure; roof age questioned</td>
                  <td className="p-4 text-zinc-300">Repair deficiencies + evaluate eligibility for 5-year certification</td>
                  <td className="p-4 text-zinc-300">Replace if roof cannot reasonably pass condition review</td>
                  <td className="p-4 text-zinc-300">Condition-focused pathway instead of age-based decisions</td>
                  <td className="p-4 text-zinc-300">Medium (varies by scope)</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-300">Hot attic, curling shingles, moisture imbalance</td>
                  <td className="p-4 text-zinc-300">Add/adjust ventilation; repair heat-stressed sections</td>
                  <td className="p-4 text-zinc-300">Replace if heat damage is roof-wide and severe</td>
                  <td className="p-4 text-zinc-300">Reduces heat stress; can slow premature aging</td>
                  <td className="p-4 text-zinc-300">Low to Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5-Year Delay Concept */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Understanding the 5-Year Delay Concept</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Delaying replacement by approximately 5 years can shift costs to a planned timeline, improve return on investment if the roof is still structurally sound, and support a home sale strategy when disclosures and documentation are clean.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              This approach is only appropriate after a diagnostic inspection confirms repair feasibility. There are no guarantees that any specific roof can be extended by a set timeframe—outcomes depend on condition, scope, and ongoing maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Maintenance Is the Missing Link */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Maintenance Is the Missing Link
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Many roof repairs stem from deferred maintenance. Small issues that could be addressed during routine inspections grow into leaks and structural concerns when left unattended.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Sealants Dry Out</h3>
                <p className="text-zinc-300">
                  UV exposure and heat cause sealants around penetrations and flashings to become brittle and crack over time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Wrench className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Flashings Loosen</h3>
                <p className="text-zinc-300">
                  Thermal expansion, wind uplift, and fastener corrosion can compromise flashing attachment and water resistance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Droplets className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Debris Holds Moisture</h3>
                <p className="text-zinc-300">
                  Leaves, pine needles, and organic debris trap moisture against roof surfaces, accelerating deterioration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Minor Issues Grow Into Leaks</h3>
                <p className="text-zinc-300">
                  What starts as a small crack or loose fastener becomes a water intrusion point if not addressed early.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-zinc-950 p-6 rounded-lg border border-zinc-800">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Regular roof maintenance — including inspections, cleaning, and minor repairs — is a practical way to extend roof life and reduce the likelihood of emergency repairs. Scheduled maintenance creates a documented history that can support insurance renewals and home sale disclosures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Florida's 5-Year Roof Certification */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Florida's 5-Year Roof Certification & Insurance Renewal
          </h2>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-8">
            <FileText className="w-12 h-12 text-red-600 mb-4" />
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Florida Statute § 627.7011(5)(a) addresses insurance renewals related to roof age. Under this statute, insurers may not refuse renewal solely due to roof age when a compliant roof condition certification indicates 5 or more years of useful life remaining.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Certification must be completed by a qualified, licensed professional with appropriate credentials and training.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>The certification evaluates roof condition, not just age, and considers structural integrity, material condition, and remaining useful life.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Carriers still control underwriting decisions for other allowable factors, including overall property condition and claims history.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Roof repairs may help address deficiencies so the roof can be evaluated on condition rather than age alone.</span>
              </li>
            </ul>

            <div className="bg-zinc-950 p-4 rounded border border-zinc-800">
              <p className="text-sm text-zinc-400 italic">
                <strong>Disclaimer:</strong> This information is provided for general educational purposes and is not legal or insurance advice. Outcomes depend on inspection findings, insurer policies, and individual circumstances. Consult a qualified professional for specific guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Planning Ahead - Costs, Financing & Options */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Planning Ahead: Costs, Financing & Options
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Planning a roof repair or restoration project involves understanding both the scope of work and the available financial options. Whether you're addressing an immediate leak or planning a proactive restoration, having clear information helps you make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <DollarSign className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Estimate Your Roof Costs</h3>
              <p className="text-zinc-300 mb-4">
                Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">roof cost calculator</Link> to get a preliminary estimate based on your roof type, square footage, and scope of work.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Calendar className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Explore Financing Options</h3>
              <p className="text-zinc-300 mb-4">
                We offer <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">financing options</Link> and flexible payment plans to help you manage the cost of roof repairs and restorations.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-zinc-950 p-6 rounded-lg border border-zinc-800">
            <p className="text-zinc-300 leading-relaxed">
              Every roof repair project is different. A free diagnostic inspection provides the information needed to plan scope, timing, and budget. Contact us to schedule an inspection and receive a detailed proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: People Also Ask - Local Search Queries */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            People Also Ask
          </h2>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(10)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Who are the best roofers in Broward County?</span>
                {openFaqIndex === 10 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 10 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Licensed roofing contractors in Broward County must hold CCC (roofing contractor) or CGC (general contractor) licenses and maintain familiarity with HVHZ requirements. All Phase Construction USA (CCC-1331464, CGC-1526236) serves Coral Springs, Fort Lauderdale, Deerfield Beach, Pompano Beach, Plantation, and surrounding Broward communities with inspection-based roof repair and replacement services.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(11)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Where can I find roofing contractors in Deerfield Beach?</span>
                {openFaqIndex === 11 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 11 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Deerfield Beach roofing contractors should be licensed, familiar with HVHZ fastening requirements, and able to provide <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspections</Link> before recommending repair or replacement. All Phase Construction USA is based in Deerfield Beach and serves residential and commercial properties throughout Broward and Palm Beach Counties with <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">tile</Link>, <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">metal</Link>, <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline">flat</Link>, and <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">shingle</Link> roofing systems.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(12)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">What makes a roof hurricane-proof in South Florida?</span>
                {openFaqIndex === 12 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 12 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Hurricane-resistant roofs in Broward and southern Palm Beach County must meet HVHZ provisions for wind uplift, including enhanced fastening schedules, approved materials, and proper installation methods. <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">Tile roofs</Link> require foam adhesive and mechanical fasteners. <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">Metal roofs</Link> need tested clip systems. <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">Shingles</Link> require high-wind-rated products with specific nailing patterns. Repairs must maintain or restore these performance standards to preserve wind resistance.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(13)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">How do I find reliable roofing services in Palm Beach County?</span>
                {openFaqIndex === 13 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 13 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Reliable roofing contractors in Palm Beach County should hold active state licenses (CCC or CGC), provide diagnostic inspections before proposals, and be familiar with both standard Florida Building Code and HVHZ requirements for properties south of the Martin County line. Verify license status through MyFloridaLicense.com and request references from similar projects in Boca Raton, Boynton Beach, Delray Beach, West Palm Beach, or Wellington.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(14)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Can roof repairs help with insurance renewal in Florida?</span>
                {openFaqIndex === 14 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 14 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Repairs may address deficiencies that prevent a roof from qualifying for condition-based certification under Florida Statute § 627.7011(5)(a). Whether repairs are sufficient depends on the extent of work and inspection outcomes. Results vary by insurer.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(15)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Can a roof repair help me pass insurance renewal in Florida?</span>
                {openFaqIndex === 15 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 15 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Yes — in many cases, a properly completed roof repair can restore performance and help a roof qualify for a Florida 5-year roof certification letter when eligible. If the issue is isolated (like a localized leak, flashing failure, or a small damaged section), repairing it correctly can be enough to confirm the roof is serviceable without requiring full replacement.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(16)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">How do I know if my roof can be repaired instead of replaced?</span>
                {openFaqIndex === 16 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 16 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    A roof can often be repaired if the problem is limited to one area and the rest of the roof system is still performing. Repairs are usually the better option when the leak is coming from a specific detail—like a pipe boot, valley, wall flashing, or a small section of damaged materials. Replacement is typically needed when there are widespread failures, recurring leaks in multiple areas, or the roof system is near the end of its service life.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(17)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Will a roof repair last, or is it just a temporary patch?</span>
                {openFaqIndex === 17 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 17 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    A professional roof repair should not be a "band-aid." If the repair is properly designed, installed, and tied into the existing system, it can restore watertight performance and last for years. The key is identifying the true source of the leak and repairing the system correctly—especially in South Florida conditions where wind-driven rain and HVHZ requirements demand higher standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Why Property Owners Choose Repair-First Evaluations */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Property Owners Choose Repair-First Evaluations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inspection-First Decisions</h3>
                <p className="text-zinc-300">
                  We begin with a comprehensive diagnostic inspection to understand the extent of damage and evaluate all available options.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Florida Building Code-Aware Scope Planning</h3>
                <p className="text-zinc-300">
                  Repairs are planned and executed in alignment with applicable code requirements for the scope and roof type.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">HOA and Insurance Coordination Support</h3>
                <p className="text-zinc-300">
                  We provide thorough documentation to support HOA approvals and insurance claims, with photo records and detailed reports.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Restoration Before Replacement Philosophy</h3>
                <p className="text-zinc-300">
                  When a roof can be restored reliably, we present repair options before recommending full replacement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed, Certified Roofing Professionals</h3>
                <p className="text-zinc-300">
                  Our team includes licensed roofing contractors with credentials to perform inspections and certifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent, Fact-Based Recommendations</h3>
                <p className="text-zinc-300">
                  We provide honest evaluations based on inspection findings, not sales pressure or unnecessary upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FAQ Accordion */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Repair FAQs – Broward & Palm Beach County, FL
          </h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
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

      {/* Section 11: CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Schedule a Roof Repair Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            If your roof is leaking, aging, or under insurance review, a repair-first inspection can determine whether restoration is a defensible alternative to full replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/"
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
        </div>
      </section>
    </div>
    </>
  );
}
