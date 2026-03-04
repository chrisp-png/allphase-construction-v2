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

export default function HighlandBeachRoofRepairPage() {
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
          "name": "How do I know if my Highland Beach roof needs repair or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right answer comes from a diagnostic inspection that evaluates where the leak or damage starts, how far it extends, and whether the roof system is still performing as a whole. Repairs are often appropriate when issues are localized to penetrations, flashings, or specific slopes. Replacement is typically considered when deterioration is widespread, repeat failures are likely, or the system can no longer be restored reliably."
          }
        },
        {
          "@type": "Question",
          "name": "Do roof repairs in Highland Beach have to meet Florida Building Code or HVHZ rules?",
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
            "text": "Yes. Many Highland Beach properties have HOA or condo requirements for materials, profiles, and documentation. A repair plan can be documented with photos and scope notes to support approvals, and scheduling can be coordinated around association processes when required."
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
      question: "How do I know if my Highland Beach roof needs repair or replacement?",
      answer: "The right answer comes from a diagnostic inspection that evaluates where the leak or damage starts, how far it extends, and whether the roof system is still performing as a whole. Repairs are often appropriate when issues are localized to penetrations, flashings, or specific slopes. Replacement is typically considered when deterioration is widespread, repeat failures are likely, or the system can no longer be restored reliably."
    },
    {
      question: "Do roof repairs in Highland Beach have to meet Florida Building Code or HVHZ rules?",
      answer: "Roof repairs should be completed in a way that aligns with applicable Florida Building Code requirements for the scope of work and the areas being repaired. HVHZ provisions apply only where they are required. Code and permitting considerations can vary based on roof type and repair extent, so they should be confirmed during inspection and planning."
    },
    {
      question: "Can a tile roof be repaired without replacing the whole roof?",
      answer: "Often, yes—if the roof structure is sound and the broader system is still performing. Tile repairs commonly involve replacing broken or displaced tiles, addressing flashings and transitions, and correcting any localized underlayment issues found in the affected area. The right scope depends on what the inspection shows around the problem zone."
    },
    {
      question: "Can you coordinate roof repairs with my HOA or condo association?",
      answer: "Yes. Many Highland Beach properties have HOA or condo requirements for materials, profiles, and documentation. A repair plan can be documented with photos and scope notes to support approvals, and scheduling can be coordinated around association processes when required."
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
            <span className="text-white">Highland Beach</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Repair in Highland Beach, FL
          </h1>

          {/* Hero Paragraph */}
          <p className="text-xl text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            In a coastal community like Highland Beach, roof leaks and deterioration often start at penetrations, flashings, edge conditions, or specific slopes exposed to salt air, wind-driven rain, and thermal cycling. A <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">diagnostic roof inspection</Link> determines the root cause and extent of the problem before prescribing repair scope, ensuring code-aware repairs that address the full affected zone—not just the visible wet spot.
          </p>

          {/* Key Points */}
          <ul className="space-y-3 mb-8 max-w-3xl">
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Coastal exposure and salt air corrosion risk</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Repair planning that evaluates entire affected slope, not only the visible leak</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Florida Building Code compliance; HVHZ provisions applied where applicable</span>
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

      {/* Section 2: Common Roof Repair Issues in Highland Beach */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Common Roof Repair Issues in Highland Beach
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Highland Beach's coastal environment presents specific roof challenges that often lead to repair needs. These issues typically develop over time from exposure to salt air, wind-driven rain, and intense UV radiation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Corroded or Cracked Pipe Boots and Vent Flashings</h3>
                <p className="text-zinc-300">
                  Salt exposure commonly accelerates deterioration of rubber boots, metal flashings, and sealants around penetrations, creating entry points for water intrusion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Lifted or Stressed Perimeter and Edge Metal</h3>
                <p className="text-zinc-300">
                  Wind events can stress drip edges, coping caps, and termination bars, especially where fasteners have corroded or attachment has weakened over time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Tile Displacement and Cracked Tiles</h3>
                <p className="text-zinc-300">
                  Wind uplift and foot traffic can cause tiles to slip, crack, or break, particularly on exposed slopes facing prevailing winds from the ocean.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Underlayment Wear from Heat and Moisture Cycling</h3>
                <p className="text-zinc-300">
                  Coastal humidity combined with high attic heat often accelerates underlayment aging, leading to localized failures that appear as intermittent leaks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fastener Back-Out and Minor Deck Movement</h3>
                <p className="text-zinc-300">
                  Thermal expansion, salt corrosion, and wind stress can cause fasteners to loosen or corrode, showing up as small leaks that move location after storms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Gutter and Edge Drainage Issues</h3>
                <p className="text-zinc-300">
                  When present, clogged or poorly sloped gutters can cause water to back up at eaves or transitions, creating leaks that appear unrelated to roof surface condition.
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
                Symptom Review
              </h3>
              <p className="text-zinc-300 pl-11">
                Document interior stain location, leak timing, and correlation with wind-driven rain or specific weather events to narrow the probable source.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Roof Surface Assessment
              </h3>
              <p className="text-zinc-300 pl-11">
                Evaluate roof covering condition—tiles, shingles, metal panels—along with transitions, ridge/hip areas, and valleys for visible damage or deterioration.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Penetrations and Flashing Checks
              </h3>
              <p className="text-zinc-300 pl-11">
                Inspect vents, stacks, skylights where present, and all flashing transitions for corrosion, cracking, or sealant failure common in coastal environments.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Edge and Perimeter Evaluation
              </h3>
              <p className="text-zinc-300 pl-11">
                Check drip edge, coping caps, termination bars, and sealant condition at perimeter—areas particularly vulnerable to wind and salt exposure.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Moisture Pathway Tracing
              </h3>
              <p className="text-zinc-300 pl-11">
                Identify where water enters versus where it appears inside, as water can travel along rafters, underlayment, or deck before becoming visible.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Scope Planning
              </h3>
              <p className="text-zinc-300 pl-11">
                Determine whether a spot repair is appropriate or if section/slope restoration up to a natural break point reduces repeat-failure risk. Consider adjacent components with similar age and exposure.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">7</span>
                Documentation
              </h3>
              <p className="text-zinc-300 pl-11">
                Provide photos and detailed notes for HOA or insurance documentation when required, with scope aligned to Florida Building Code requirements and permitting triggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Roof Systems Repaired in Highland Beach */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Systems Repaired in Highland Beach
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            We repair all major roof systems found in Highland Beach properties, adapting repair approaches to the specific materials and exposure conditions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Concrete and Clay Tile Roofs</h3>
              <p className="text-zinc-300 mb-4">
                Tile replacement, reset and resecure where appropriate, flashing and valley transitions, and localized underlayment repairs when inspection confirms deterioration in the affected area.
              </p>
              <p className="text-sm text-zinc-400">
                Common in Highland Beach's residential properties; repairs often address wind displacement and corrosion-related failures.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Architectural Shingle Roofs</h3>
              <p className="text-zinc-300 mb-4">
                Shingle replacement, flashing repairs, and ventilation-related heat stress considerations where attic conditions may be contributing to premature aging.
              </p>
              <p className="text-sm text-zinc-400">
                Found on some residential properties; coastal UV and heat can accelerate wear on exposed slopes.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metal Roofs</h3>
              <p className="text-zinc-300 mb-4">
                Fastener and seam issues, oxidation and corrosion checks, flashing and termination detailing—particularly important in salt air environments where metal is vulnerable.
              </p>
              <p className="text-sm text-zinc-400">
                Metal roofing where present; maintenance-focused repairs can extend system life significantly.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flat and Low-Slope Systems</h3>
              <p className="text-zinc-300 mb-4">
                Modified bitumen and TPO systems where present on condos or roof additions; perimeter and penetration detailing critical for preventing water intrusion.
              </p>
              <p className="text-sm text-zinc-400">
                Depending on the system; flat roof repairs require careful attention to drainage and attachment.
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

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Highland Beach properties often have homeowners association or condominium association requirements for roof repairs. These may include approved materials, color and profile matching, and documentation before work begins.
          </p>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-8">
            <h3 className="text-2xl font-bold mb-4">How We Support HOA Coordination</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Photo documentation:</strong> Before, during, and after photos to support approval submissions and record completed work.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Scope notes and material details:</strong> Clear descriptions of repair scope and materials used, as applicable to association review processes.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Color and profile matching:</strong> Sourcing materials that match existing roof systems to maintain aesthetic consistency across the property.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Scheduling coordination:</strong> Working within association timelines and minimizing disruption during repairs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Insurance Documentation</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We document observed roof conditions and completed repairs, which can be helpful during insurance claims or renewal reviews. We do not interpret insurance policies or guarantee coverage outcomes—insurers make final decisions based on policy terms and their own assessment criteria.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Condition-based evaluations can matter for renewals. A documented repair that addresses active deficiencies may support a roof's eligibility for coverage, though outcomes vary by carrier and individual circumstances.
            </p>
          </div>

          <p className="text-zinc-300 mt-8 leading-relaxed">
            For more information about our <Link to="/service-areas/highland-beach/" className="text-red-500 hover:text-red-400 underline">service area coverage in Highland Beach</Link>, including typical response times and project coordination, visit our location page.
          </p>
        </div>
      </section>

      {/* Section 6: Roof Repair Planning Tools (TABLE REQUIRED) */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Repair Planning Tools
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            The table below helps Highland Beach property owners translate symptoms into likely causes and typical repair approaches. An inspection confirms the true source and appropriate scope.
          </p>

          {/* Planning Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-zinc-950 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">What You're Seeing</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Common Highland Beach Cause</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-white border-b border-zinc-700">Typical Repair Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Rust stains near vent or stack</td>
                  <td className="p-4 text-zinc-300">Corroded metal flashing or pipe boot from salt air exposure</td>
                  <td className="p-4 text-zinc-300">Water can enter around corroded flashings; adjacent penetrations may be similarly affected</td>
                  <td className="p-4 text-zinc-300">Replace corroded boots and flashings on affected slope; inspect all penetrations in same exposure zone</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Intermittent leak only during wind-driven rain</td>
                  <td className="p-4 text-zinc-300">Edge flashing lifted by wind, or sealant failure at perimeter allowing water intrusion under pressure</td>
                  <td className="p-4 text-zinc-300">Normal rain may not reach the compromised area; wind pushes water into vulnerable transitions</td>
                  <td className="p-4 text-zinc-300">Re-secure or replace edge metal; address perimeter transitions and sealant as needed</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Loose or slipped tiles near ridge or hip</td>
                  <td className="p-4 text-zinc-300">Wind uplift stress combined with fastener corrosion or attachment deterioration</td>
                  <td className="p-4 text-zinc-300">Exposed underlayment or gaps can allow direct water entry; adjacent tiles may be similarly vulnerable</td>
                  <td className="p-4 text-zinc-300">Reset and secure affected tiles; evaluate ridge/hip fastening across the slope section</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Ceiling stain that "moves" location after storms</td>
                  <td className="p-4 text-zinc-300">Water entering at one point and traveling along deck or rafters before dripping through ceiling</td>
                  <td className="p-4 text-zinc-300">The entry point may be upslope or lateral to where stain appears; misleading if surface-only inspection</td>
                  <td className="p-4 text-zinc-300">Trace moisture path from interior stain back to roof surface entry; repair true source zone</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Drip at patio or flat-roof transition/wall flashing</td>
                  <td className="p-4 text-zinc-300">Step flashing or wall termination bar sealant failure; common where different roof planes meet</td>
                  <td className="p-4 text-zinc-300">Transition areas are high-stress zones; sealant deteriorates faster under UV and thermal cycling</td>
                  <td className="p-4 text-zinc-300">Remove and replace compromised flashing; reseal transitions with appropriate materials and detailing</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-300">Drip at eave or edge after heavy rain</td>
                  <td className="p-4 text-zinc-300">Gutter clog or improper drainage causing water to back up at eave; drip edge may be compromised</td>
                  <td className="p-4 text-zinc-300">Water backing up can enter behind fascia or under first course of roofing; not always a roof-surface failure</td>
                  <td className="p-4 text-zinc-300">Clear gutters if present; evaluate and repair drip edge and eave detailing as needed</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-300">Musty attic odor and high heat</td>
                  <td className="p-4 text-zinc-300">Ventilation imbalance allowing moisture accumulation and heat buildup; accelerates roof aging</td>
                  <td className="p-4 text-zinc-300">Heat stress and moisture can shorten underlayment life and contribute to premature material fatigue</td>
                  <td className="p-4 text-zinc-300">Evaluate and improve ventilation (intake/exhaust balance); address any moisture-related underlayment issues found</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Planning Links */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Planning Your Roof Repair</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Once you understand the likely scope, use our planning tools to estimate costs and explore payment options:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Get a preliminary <Link to="/service-areas/highland-beach/roof-cost-estimate/" className="text-red-500 hover:text-red-400 underline">roof cost estimate</Link> based on your property details and repair scope.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Review available <Link to="/financing/" className="text-red-500 hover:text-red-400 underline">financing options</Link> to manage repair costs with flexible payment plans.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Why Highland Beach Property Owners Choose All Phase Construction USA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Highland Beach Property Owners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inspection-First Recommendations</h3>
                <p className="text-zinc-300">
                  Repair scope determined by findings, not assumptions. We evaluate whether spot repair or section/slope restoration reduces repeat-leak risk.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Code-Aware Detailing and Repair Execution</h3>
                <p className="text-zinc-300">
                  Repairs aligned with Florida Building Code requirements for the scope and roof type; permitting triggers identified during planning.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Experience Coordinating with HOA Requirements</h3>
                <p className="text-zinc-300">
                  Familiar with association review processes; provide documentation and material details to support approvals when required.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Clear Documentation and Photo Support</h3>
                <p className="text-zinc-300">
                  Thorough before/during/after documentation for HOA submittals, insurance records, and property maintenance history.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Repair Scopes That Reduce Repeat Leak Risk</h3>
                <p className="text-zinc-300">
                  Section and slope-based repair logic addresses adjacent components with similar exposure, not just the visible failure point.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed, Certified Roofing Contractor Team</h3>
                <p className="text-zinc-300">
                  Work performed by licensed professionals with credentials for inspection, repair, and certification services in Florida.
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
            Roof Repair FAQs – Highland Beach, FL
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
            A repair-first evaluation identifies the root cause and right scope—whether spot repair or section/slope restoration—for Highland Beach's coastal conditions. Get clear recommendations based on what the inspection finds, not assumptions.
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
  );
}
