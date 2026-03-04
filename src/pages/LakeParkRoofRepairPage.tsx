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

export default function LakeParkRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if my Lake Park roof needs repair or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right answer comes from a diagnostic inspection that evaluates where the leak or damage starts, how far it extends, and whether the roof system is still performing as a whole. Repairs are often appropriate when issues are localized to penetrations, flashings, or specific slopes. Replacement is typically considered when deterioration is widespread, repeat failures are likely, or the system can no longer be restored reliably."
          }
        },
        {
          "@type": "Question",
          "name": "Do roof repairs in Lake Park have to meet Florida Building Code or HVHZ rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof repairs should be completed in a way that aligns with applicable Florida Building Code requirements for the scope of work and the areas being repaired. HVHZ provisions apply only where they are required. Code and permitting considerations can vary based on roof type and repair extent, so they should be confirmed during inspection and planning."
          }
        },
        {
          "@type": "Question",
          "name": "Can a tile roof be repaired without replacing the whole roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes—if the roof structure is sound and the broader system is still performing. Tile repairs commonly involve replacing broken or displaced tiles, addressing flashings and transitions, and correcting any localized underlayment issues found in the affected area. The right scope depends on what the inspection shows around the problem zone."
          }
        },
        {
          "@type": "Question",
          "name": "Can you coordinate roof repairs with my HOA or condo association?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Some Lake Park communities and multifamily properties have HOA or condo requirements for materials, profiles, and visible details. A repair plan can be documented with photos and scope notes to support approvals, and scheduling can be coordinated around association processes when required."
          }
        },
        {
          "@type": "Question",
          "name": "Will roof repairs help with insurance renewal or claims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof repairs can address active deficiencies and provide documentation of observed conditions and completed work, which may be helpful during insurance reviews. Insurers make the final decisions on renewals and claims, and outcomes can vary by policy and carrier. A diagnostic inspection helps ensure the repair scope is defensible and well documented."
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
      question: "How do I know if my Lake Park roof needs repair or replacement?",
      answer: "The right answer comes from a diagnostic inspection that evaluates where the leak or damage starts, how far it extends, and whether the roof system is still performing as a whole. Repairs are often appropriate when issues are localized to penetrations, flashings, or specific slopes. Replacement is typically considered when deterioration is widespread, repeat failures are likely, or the system can no longer be restored reliably."
    },
    {
      question: "Do roof repairs in Lake Park have to meet Florida Building Code or HVHZ rules?",
      answer: "Roof repairs should be completed in a way that aligns with applicable Florida Building Code requirements for the scope of work and the areas being repaired. HVHZ provisions apply only where they are required. Code and permitting considerations can vary based on roof type and repair extent, so they should be confirmed during inspection and planning."
    },
    {
      question: "Can a tile roof be repaired without replacing the whole roof?",
      answer: "Often, yes—if the roof structure is sound and the broader system is still performing. Tile repairs commonly involve replacing broken or displaced tiles, addressing flashings and transitions, and correcting any localized underlayment issues found in the affected area. The right scope depends on what the inspection shows around the problem zone."
    },
    {
      question: "Can you coordinate roof repairs with my HOA or condo association?",
      answer: "Yes. Some Lake Park communities and multifamily properties have HOA or condo requirements for materials, profiles, and visible details. A repair plan can be documented with photos and scope notes to support approvals, and scheduling can be coordinated around association processes when required."
    },
    {
      question: "Will roof repairs help with insurance renewal or claims?",
      answer: "Roof repairs can address active deficiencies and provide documentation of observed conditions and completed work, which may be helpful during insurance reviews. Insurers make the final decisions on renewals and claims, and outcomes can vary by policy and carrier. A diagnostic inspection helps ensure the repair scope is defensible and well documented."
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
            <Link to="/roofing-services/roof-repair/" className="hover:text-red-500 transition-colors">Roof Repair</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Lake Park</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Repair in Lake Park, FL
          </h1>

          {/* Hero Paragraph */}
          <p className="text-xl text-zinc-300 mb-6 max-w-4xl leading-relaxed">
            In Lake Park, where properties can see intense sun and heat cycling, seasonal storm-driven rain, and mixed roof types, leaks often originate at penetrations, flashing transitions, drainage points, or specific slopes rather than the entire roof system at once. All Phase Construction USA provides <Link to="/roofing-services/roof-inspection/" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspection</Link> services that identify root causes before repair work begins, supporting code-aware decisions tailored to the observed condition.
          </p>

          {/* Hero Bullets */}
          <ul className="space-y-3 mb-8 max-w-4xl">
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Heat and UV cycling that accelerates sealant and flashing fatigue across all roof types</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Storm-driven rain that exposes weak transitions, penetrations, and drainage vulnerabilities</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Repair planning that evaluates the whole affected slope, not only the visible leak location</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Florida Building Code compliance; HVHZ provisions where applicable</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
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

      {/* Section 2: Common Roof Repair Issues in Lake Park */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Common Roof Repair Issues in Lake Park
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Lake Park roofs commonly experience wear patterns tied to intense heat and UV exposure, seasonal storms, and the mixed residential roof stock found in the area. Effective repairs focus on verified causes rather than generic patching.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Cracked or Aged Pipe Boots and Vent Flashings</h3>
                <p className="text-zinc-300">
                  Leaks around penetrations often result from UV-degraded rubber boots and failed sealants that lose flexibility under thermal cycling.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Lifted or Deteriorated Step Flashing</h3>
                <p className="text-zinc-300">
                  Step flashing at walls and transitions can separate or corrode, allowing water to enter behind the roof covering during wind-driven rain.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Shingle Blow-Offs or Seal Strip Failure</h3>
                <p className="text-zinc-300">
                  After storms, shingles can lift or detach due to inadequate seal activation or aged adhesive performance on shingle systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Tile Cracks or Displacement</h3>
                <p className="text-zinc-300">
                  Tile systems can experience cracking from foot traffic or displacement from uplift forces, particularly near valleys and ridges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Underlayment Wear from Heat and Moisture Cycling</h3>
                <p className="text-zinc-300">
                  Underlayment degradation accelerated by heat exposure and moisture cycling often shows up near valleys, ridges, and transition zones.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fastener Back-Out on Metal Roofs</h3>
                <p className="text-zinc-300">
                  Metal roof fasteners and terminations can experience back-out or loosening from thermal expansion and contraction cycles.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Drainage Issues at Eaves and Valleys</h3>
                <p className="text-zinc-300">
                  Inadequate drainage at eaves or valleys concentrates water flow, exposing weak detailing and accelerating component wear.
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
            Durable repairs require understanding the problem's true cause. Our inspection-first process identifies leak sources, evaluates system condition, and confirms the appropriate repair scope before work begins.
          </p>

          <div className="space-y-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Symptom Review
              </h3>
              <p className="text-zinc-300 pl-11">
                Review stain location, leak timing, storm correlation, and any prior repair history to understand the problem context.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Surface Assessment
              </h3>
              <p className="text-zinc-300 pl-11">
                Evaluate roof covering condition, ridges, hips, valleys, and visible transitions to identify wear patterns and material performance.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Penetrations and Flashing Checks
              </h3>
              <p className="text-zinc-300 pl-11">
                Inspect vents, stacks, skylights, and all flashing details to identify seal failures, boot cracking, and separation issues.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Perimeter and Edge Evaluation
              </h3>
              <p className="text-zinc-300 pl-11">
                Check drip edge, fascia transitions, and sealant condition to confirm proper termination and edge detailing.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Moisture Pathway Tracing
              </h3>
              <p className="text-zinc-300 pl-11">
                Trace the moisture path from entry point to interior symptom location, accounting for water travel and wind-driven rain patterns.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Scope Planning
              </h3>
              <p className="text-zinc-300 pl-11">
                Determine whether a spot repair is appropriate or whether section or slope restoration up to the ridge or break point is needed for reliability.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">7</span>
                Documentation
              </h3>
              <p className="text-zinc-300 pl-11">
                Provide photos and detailed notes for HOA or association review and insurance communication when required. Florida Building Code compliance and permitting requirements depend on scope and are confirmed during planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Roof Systems Repaired in Lake Park */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Systems Repaired in Lake Park
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Concrete and Clay Tile Roofs</h3>
              <p className="text-zinc-300">
                Tile replacement and reset where appropriate, resecuring displaced tiles, flashing and valley transition repairs, and localized underlayment restoration when feasible.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Architectural Shingle Roofs</h3>
              <p className="text-zinc-300">
                Shingle replacement, flashing repairs, wind uplift corrections, and seal strip concerns addressed per code requirements and manufacturer specifications.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metal Roofs</h3>
              <p className="text-zinc-300">
                Fastener and seam corrections, oxidation evaluation, flashing and termination detailing, and thermal movement considerations where present.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flat and Low-Slope Systems</h3>
              <p className="text-zinc-300">
                Modified bitumen and TPO repairs where present on additions or multifamily properties; perimeter and penetration detailing, seam reinforcement, and drainage corrections.
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
            <h3 className="text-2xl font-bold mb-4">HOA and Association Requirements</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Some Lake Park communities and multifamily properties have HOA or association requirements for visible materials, profiles, and documentation. We support the approval process by providing repair descriptions, photos, and product notes commonly requested for architectural review.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Detailed repair scope with material specifications and color matching details for association review</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Photo documentation before, during, and after repairs to support HOA approval workflows</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span>Scheduling coordination around association timelines and requirements when needed</span>
              </li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mt-6">
              For more information on <Link to="/service-areas/lake-park/" className="text-red-500 hover:text-red-400 underline">service area coverage in Lake Park</Link>, visit the local service area hub.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Insurance Communication</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              When insurance is involved, we focus on documenting observed roof conditions and the scope of completed work so property owners have clear records to share with their carrier. We do not provide coverage determinations or claim direction.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Condition documentation can be useful during insurance renewals and reviews, though outcomes vary by policy and carrier. A diagnostic inspection helps ensure the repair scope is defensible and well documented.
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
            The table below helps Lake Park property owners translate visible symptoms into likely causes and typical repair approaches. An inspection confirms the true source and appropriate scope for your specific situation.
          </p>

          {/* Planning Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-zinc-950 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">What You're Seeing</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Common Lake Park Cause</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Leak ring around a bathroom vent</td>
                  <td className="p-4 text-zinc-300">Cracked rubber boot or failed sealant at the vent penetration from UV and heat exposure</td>
                  <td className="p-4 text-zinc-300">Penetration leaks can spread moisture across decking and into insulation, causing hidden damage</td>
                  <td className="p-4 text-zinc-300">Replace or repair flashing boot; apply compatible sealant with proper termination details</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Leak only during heavy, wind-driven rain</td>
                  <td className="p-4 text-zinc-300">Water entering at an upslope transition or flashing separation that only fails under pressure</td>
                  <td className="p-4 text-zinc-300">Repairing only the stain location often misses the actual entry point several feet upslope</td>
                  <td className="p-4 text-zinc-300">Trace moisture path; correct transition flashing or counterflashing detail at true entry point</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Missing or creased shingles after storms</td>
                  <td className="p-4 text-zinc-300">Seal strip failure or inadequate fastening that allows wind uplift to lift or displace shingles</td>
                  <td className="p-4 text-zinc-300">Exposed underlayment accelerates degradation and creates direct water entry pathways</td>
                  <td className="p-4 text-zinc-300">Replace affected shingles with code-compliant fastening; verify seal and edge details nearby</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Cracked or slipped tile near valley or ridge</td>
                  <td className="p-4 text-zinc-300">Foot traffic damage, uplift forces, or inadequate tile attachment at high-stress zones</td>
                  <td className="p-4 text-zinc-300">Tile failures expose underlayment and concentrate water at vulnerable transitions</td>
                  <td className="p-4 text-zinc-300">Replace or reset affected tiles; verify compliant attachment and transition flashing details</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Drip at wall and roof transition or chimney step flashing</td>
                  <td className="p-4 text-zinc-300">Step flashing separation, corrosion, or inadequate counterflashing termination at wall line</td>
                  <td className="p-4 text-zinc-300">Can compromise wall assemblies and interior finishes beyond just the roof deck</td>
                  <td className="p-4 text-zinc-300">Repair or replace step and counterflashing; ensure proper lap, termination, and seal</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Water staining near eave edge after long rain</td>
                  <td className="p-4 text-zinc-300">Inadequate drip edge termination or eave flashing that allows water migration behind fascia</td>
                  <td className="p-4 text-zinc-300">Edge detail failures can affect fascia, soffit, and create interior entry points at vulnerable locations</td>
                  <td className="p-4 text-zinc-300">Correct edge flashing and drip termination; verify proper overhang and seal details</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Interior stain that appears far from roof defect</td>
                  <td className="p-4 text-zinc-300">Water traveling along rafters, sheathing, or underlayment before dropping into visible interior location</td>
                  <td className="p-4 text-zinc-300">Repairing at the stain location alone will not stop the leak; true entry point must be found</td>
                  <td className="p-4 text-zinc-300">Trace water path back to actual entry; correct source defect several feet upslope or offset</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-300">Hot attic or musty odor</td>
                  <td className="p-4 text-zinc-300">Ventilation imbalance or inadequate airflow contributing to moisture retention and heat buildup</td>
                  <td className="p-4 text-zinc-300">Poor ventilation accelerates roof system aging, moisture damage, and reduces material lifespan</td>
                  <td className="p-4 text-zinc-300">Evaluate and correct ventilation balance; address moisture sources and airflow restrictions</td>
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
                <span>Get a preliminary <Link to="/service-areas/lake-park/roof-cost-estimate/" className="text-red-500 hover:text-red-400 underline">roof cost estimate</Link> based on your Lake Park property details and repair scope.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Review available <Link to="/financing/" className="text-red-500 hover:text-red-400 underline">easy payment options</Link> to manage repair costs with flexible financing plans.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Additional coverage details are available on the <Link to="/service-areas/lake-park/" className="text-red-500 hover:text-red-400 underline">Lake Park service area hub</Link>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Why Lake Park Property Owners Choose All Phase Construction USA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Lake Park Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inspection-First Recommendations</h3>
                <p className="text-zinc-300">
                  Repair versus larger scope decisions are based on diagnostic findings, not assumptions or generic guidelines.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Code-Aware Detailing and Repair Execution</h3>
                <p className="text-zinc-300">
                  All repairs align with applicable Florida Building Code requirements and are executed with proper materials and attachment methods.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">HOA and Association Coordination Support</h3>
                <p className="text-zinc-300">
                  Documentation and material specifications structured for architectural review workflows when required by your community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Clear Documentation and Photo Support</h3>
                <p className="text-zinc-300">
                  Detailed condition documentation, scope notes, and photo records that help owners make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Repair Scopes Designed to Reduce Repeat Leak Risk</h3>
                <p className="text-zinc-300">
                  Section and slope logic applied when appropriate to address related vulnerabilities, not just isolated symptoms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed, Certified Roofing Contractor Team</h3>
                <p className="text-zinc-300">
                  Experienced roofing professionals with proper licensing and certifications for South Florida roofing work.
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
            Roof Repair FAQs – Lake Park, FL
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
            Schedule a repair-first evaluation that identifies the root cause and right scope—whether spot repair or section and slope restoration—suited to Lake Park conditions. Our diagnostic approach confirms the appropriate repair path before work begins, supporting reliable results and code-aware execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          <p className="text-zinc-400">
            All Phase Construction USA • 590 Goolsby Blvd, Deerfield Beach, FL 33442 • <a href="mailto:leads@allphaseusa.com" className="text-red-500 hover:text-red-400 underline">leads@allphaseusa.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
