import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function DelrayBeachRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How do you decide between repair and replacement in Delray Beach?",
      answer: "A diagnostic inspection evaluates damage extent, material condition, system age, and Florida Building Code thresholds to determine whether localized repair is feasible or broader work is warranted. Coastal exposure factors such as salt-air corrosion, underlayment integrity, and fastener condition are assessed where applicable."
    },
    {
      question: "Do roof repairs here have to meet Florida Building Code or HVHZ rules?",
      answer: "Yes. All roof repairs must comply with the Florida Building Code applicable to Delray Beach at the time of work. High Velocity Hurricane Zone requirements apply where applicable, depending on location and project scope."
    },
    {
      question: "Can a tile roof in Delray Beach usually be repaired without replacing the whole roof?",
      answer: "In many cases, yes. Individual tiles, localized underlayment sections, and flashing details can often be repaired if the surrounding system remains structurally sound and serviceable, though full conditions must be verified through inspection. Salt-air exposure may accelerate certain fastener and underlayment deterioration."
    },
    {
      question: "How do you handle HOA requirements for roof repairs in Delray Beach?",
      answer: "Many HOAs in Delray Beach's coastal communities and planned neighborhoods require architectural review or approval for visible repairs. We routinely prepare submittal-ready documentation with scope notes, photos, and material specifications to support the review process."
    },
    {
      question: "Will getting a roof repair affect insurance coverage or a claim?",
      answer: "Insurance coverage varies by policy terms. Inspection documentation can support carrier discussions by clearly separating observed storm-related damage from age-related wear patterns, though we do not provide insurance or legal advice."
    },
    {
      question: "How much does roof repair cost in Delray Beach?",
      answer: "Typical repair costs range from $750 to $1,500 for asphalt shingles, $750 to $2,000 for tile roofing, and $750 to $2,500 for metal roofing. More extensive repairs involving underlayment replacement or structural deck work can exceed these ranges. Use our roof cost calculator for a preliminary estimate, and financing options are available for larger projects."
    },
    {
      question: "How quickly can you respond to emergency roof repairs in Delray Beach?",
      answer: "We offer 24/7 emergency response with same-day dispatching from our Deerfield Beach headquarters. For active leaks or storm damage, call (754) 227-5605 immediately."
    },
    {
      question: "How often should I have my roof inspected in Delray Beach?",
      answer: "Due to coastal exposure and storm frequency, we recommend annual roof inspections for Delray Beach properties, plus inspections after any named storm or hurricane event. Regular inspections catch small issues before they become expensive repairs."
    },
    {
      question: "Do you repair all types of roofing materials?",
      answer: "Yes. We repair tile roofing (concrete and clay), asphalt shingles, metal roofing, and flat/low-slope systems (TPO, modified bitumen, EPDM). Our dual license also allows us to address structural issues discovered during repairs."
    },
    {
      question: "What should I do if I find a roof leak during a storm?",
      answer: "Place containers under active drips, move valuables away from affected areas, and call us at (754) 227-5605 for emergency tarping service. Do not attempt to access your roof during active weather. Document damage with photos for your insurance claim."
    },
    {
      question: "Can roof repairs help lower my insurance premiums?",
      answer: "Repairs that bring your roof into compliance with current HVHZ standards can qualify for wind mitigation discounts of 20-60% on wind coverage. We coordinate wind mitigation inspections after qualifying repairs."
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

  const blogResources = [
    {
      title: 'Spotting Early Signs of Roof Damage',
      url: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive'
    },
    {
      title: 'Filing a Roof Insurance Claim',
      url: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage'
    },
    {
      title: 'Understanding Your Roofing Warranty',
      url: '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not'
    },
    {
      title: 'Wind Mitigation Savings',
      url: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home'
    },
    {
      title: 'How to Hire a Roofer in South Florida',
      url: '/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid'
    },
    {
      title: 'Visit Our Learning Center',
      url: '/learning-center'
    }
  ];

  const nearbyCities = [
    { name: 'Boynton Beach', url: '/locations/boynton-beach' },
    { name: 'Boca Raton', url: '/locations/boca-raton' },
    { name: 'Lake Worth', url: '/locations/lake-worth' },
    { name: 'Wellington', url: '/locations/wellington' },
    { name: 'Deerfield Beach', url: '/locations/deerfield-beach' },
    { name: 'Pompano Beach', url: '/locations/pompano-beach' }
  ];

  return (
    <>
      <SEO
        title="Roof Repair Delray Beach, FL | Free Roof Inspection"
        description="Need roof repair in Delray Beach? Get a free roof inspection. Tile, shingle, metal & flat roofing. Call (754) 227-5605."
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
                  to="/roof-repair"
                  className="text-red-600 hover:text-red-500 text-sm font-medium transition-colors inline-flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Roof Repair Services
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in Delray Beach, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Delray Beach properties face coastal and near-coastal conditions that can accelerate roof wear, including salt-air exposure, wind-driven rain, sustained UV cycling, and seasonal storm impacts. As a trusted roofing company with deep roots in the community, All Phase Construction USA offers comprehensive roof repair services in Delray Beach, tailored to the unique needs of local residents and businesses. Our services address the specific challenges of the coastal climate, historic district guidelines, and waterfront properties.
                </p>
                <p>
                  All Phase Construction USA provides inspection-first roof repair services designed to identify root causes of leaks, tile displacement, or material failures before recommending corrective work. Every project begins with a diagnostic <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspection</Link> to assess conditions under the Florida Building Code and determine whether targeted repair is appropriate for the observed issues and site exposure. Roof inspections are essential for property maintenance and are often required for insurance purposes, helping to ensure the roof's integrity and compliance with local standards.
                </p>
                <p>
                  Homeowners insurance may cover some or all of the costs associated with roof repairs, depending on the nature of the damage. A thorough roof inspection can help in the <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="text-red-600 hover:text-red-500 underline transition-colors">insurance claims process</Link> by providing detailed documentation of damage. Regular roof inspections help maintain the integrity of the roof and prolong its lifespan.
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

        {/* Common Delray Beach Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roof Repair Issues in Delray Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Roof systems in Delray Beach commonly develop conditions influenced by coastal exposure, salt air, humidity, thermal cycling, and storm patterns:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Wind-driven rain intrusion at roof-to-wall transitions and step flashing</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Tile cracking, slippage, and ridge or hip cap movement after storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Underlayment wear beneath tile around valleys, skylights, and penetrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Shingle uplift, creasing, exposed nails, and missing tabs after storm events</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Flat or low-slope patio or addition roof seam and edge detail deterioration</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Metal fastener back-out and oxidation at penetrations in salt-air environments</span>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                These issues often develop gradually and may not be visible without systematic inspection.
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
              Our repair process is structured to reduce uncertainty and avoid unnecessary scope expansion:
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Symptom Review
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Documentation of interior staining, active drips, and attic indicators where accessible to guide diagnostic focus.
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
                      Roof System Identification and Transition Mapping
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Identification of tile, shingle, flat, or metal systems and mapping of transitions where complexity increases leak potential.
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
                      Moisture Pathway Tracing
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Evaluation of entry point versus where water presents, including concealed moisture travel and attic conditions.
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
                      Component Checks
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Assessment of flashing, underlayment tie-ins, field materials, edges, penetrations, and drainage to determine repair scope.
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
                      Scope Definition Aligned to Florida Building Code
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Determination of repair boundaries and code compliance requirements, including permitting triggers where applicable. HVHZ provisions apply where applicable based on project location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Repair Plan and Photo Documentation
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Preparation of repair documentation suitable for HOA review and insurance coordination, without providing legal or insurance advice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    7
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Final Verification
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Post-repair inspection of water-shedding details, seal points, and workmanship quality to verify proper completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-zinc-300 leading-relaxed">
              We maintain constant communication with our clients throughout the diagnostic and repair process, ensuring you are informed and comfortable at every stage. Our team takes detailed pictures of any damage and the overall condition of your roof, providing visual documentation for your records and to assist with insurance claims. Timely and professional roof repairs are essential for maintaining the safety and structural integrity of your home. Delaying repairs can lead to increased costs, further damage, and risks such as pest infestations or mold growth. Learn more about <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-600 hover:text-red-500 underline transition-colors">how to spot early signs of roof damage</Link> before problems become expensive.
            </p>

            <p className="mt-6 text-zinc-400 italic">
              This diagnostic approach helps property owners understand options before committing to broader roofing work.
            </p>
          </div>
        </section>

        {/* Roof Types Repaired */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Systems Repaired in Delray Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              All Phase Construction USA repairs a wide range of roofing systems commonly found in Delray Beach's residential and commercial properties:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Concrete and clay <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link> systems:</span> tile replacement, underlayment tie-ins, flashing integration, and compatibility checks
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Asphalt <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingles</Link>:</span> storm damage repairs, flashing and boot repairs, localized deck issues where found
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold"><Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Metal roofing</Link>:</span> fasteners, sealants, penetration details, and corrosion or oxidation management where present
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold"><Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Flat</Link> and low-slope systems:</span> modified bitumen and TPO, focusing on seams, drains and scuppers, edges, and penetrations
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-zinc-400 italic">
                Repair recommendations are always tied to system age, observed condition, coastal exposure factors, and code considerations.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Roof Repair Cost */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Repair Cost in Delray Beach, FL
            </h2>

            <div className="text-lg text-zinc-300 mb-8 leading-relaxed space-y-4">
              <p>
                The cost of roof repair in Delray Beach varies based on the type of roofing system, extent of damage, material costs, and whether permits are required under the Florida Building Code. Typical repair costs by material type range from $750 to $1,500 for <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">asphalt shingles</Link>, $750 to $2,000 for <Link to="/tile-roofing" className=\"text-red-600 hover:text-red-500 underline transition-colors">tile roofing</Link>, and $750 to $2,500 for <Link to="/metal-roofing" className=\"text-red-600 hover:text-red-500 underline transition-colors">metal roofing</Link>. More extensive repairs involving underlayment replacement, structural deck work, or large-area damage can exceed these ranges significantly.
              </p>
              <p>
                Factors that influence roof repair costs in Delray Beach include:
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 mb-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Roof type:</span> <Link to="/tile-roofing" className=\"text-red-600 hover:text-red-500 underline transition-colors">Tile roof repairs</Link> are typically more expensive than <Link to="/shingle-roofing" className=\"text-red-600 hover:text-red-500 underline transition-colors">shingle repairs</Link> due to material weight, fragility during access, and underlayment complexity.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Coastal exposure:</span> Properties east of I-95 often require corrosion-resistant fasteners and specialized sealants, adding to material costs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Permit requirements:</span> Repairs exceeding certain thresholds require building permits and may trigger HVHZ compliance upgrades.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Roof accessibility:</span> Multi-story homes, steep pitches, and tile roofs requiring specialized equipment increase labor costs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Emergency vs. scheduled:</span> After-hours and storm-response repairs may carry premium pricing due to urgency and demand.
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Use our <Link to="/calculator" className="text-red-600 hover:text-red-500 underline transition-colors">Roof Cost Calculator</Link> for a preliminary estimate. <Link to="/easy-payments" className=\"text-red-600 hover:text-red-500 underline transition-colors">Financing options</Link> are available for larger repair projects that exceed initial budgets.
            </p>
          </div>
        </section>

        {/* NEW: Emergency Roof Repair */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Emergency Roof Repair in Delray Beach
            </h2>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              When storm damage, active leaks, or sudden material failure compromises your roof, immediate response is critical. All Phase Construction USA provides 24/7 emergency roof repair service for Delray Beach properties, including:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Emergency tarping</span> to prevent further water intrusion during active weather events
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Active leak response</span> with same-day dispatching from our Deerfield Beach headquarters
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Storm damage assessment</span> with photo documentation for insurance claims
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Temporary structural stabilization</span> for compromised decking or trusses — our dual CGC/CCC license allows us to address structural issues that standard roofers cannot
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Delaying emergency repairs risks mold growth, electrical hazards, ceiling collapse, and exponentially higher restoration costs. If your roof is actively leaking or has sustained storm damage, call us immediately at <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 font-semibold transition-colors">(754) 227-5605</a>.
            </p>
          </div>
        </section>

        {/* NEW: Signs You Need Roof Repair */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Signs You Need Roof Repair in Delray Beach
            </h2>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Many roof problems develop gradually and become visible only after significant damage has occurred. Watch for these warning signs common to Delray Beach properties:
            </p>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 mb-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Water stains on ceilings or walls</span> — often indicates flashing failure or underlayment deterioration, especially after heavy rain events
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Missing, cracked, or displaced tiles</span> — common after tropical storms and high-wind events; exposes underlayment to UV and moisture damage
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Shingle curling, buckling, or granule loss</span> — signs of age-related wear accelerated by South Florida's intense UV exposure
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Visible rust or corrosion on metal components</span> — salt-air exposure in coastal Delray Beach accelerates metal deterioration on flashings, vents, and fasteners
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Sagging or soft spots on the roof surface</span> — may indicate deck rot or structural issues requiring immediate attention
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Unexplained increase in energy bills</span> — compromised roofing can reduce insulation performance and increase cooling costs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Algae, moss, or dark streaks</span> — humidity-driven growth common in Delray Beach that can trap moisture against roofing materials
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              If you notice any of these signs, schedule a <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">free roof inspection</Link> before minor issues become major repairs.
            </p>
          </div>
        </section>

        {/* NEW: Roof Maintenance */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Maintenance to Prevent Costly Repairs
            </h2>

            <div className="text-lg text-zinc-300 leading-relaxed space-y-4 mb-8">
              <p>
                The most cost-effective approach to roof repair is preventing problems before they start. All Phase Construction USA offers <Link to="/roof-maintenance-programs" className="text-red-600 hover:text-red-500 underline transition-colors">roof maintenance programs</Link> designed for Delray Beach's coastal climate conditions.
              </p>
              <p>
                Regular maintenance extends roof lifespan, preserves warranty coverage, and catches small issues before they escalate. Our maintenance services include annual inspections, debris removal from valleys and gutters, sealant checks at penetrations and flashings, and documentation for insurance and HOA compliance. Homeowners who invest in regular maintenance typically spend 50-70% less on emergency repairs over their roof's lifetime.
              </p>
              <p>
                Learn about <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-600 hover:text-red-500 underline transition-colors">wind mitigation inspections</Link> that can reduce your insurance premiums by 20-60% while ensuring your roof meets current HVHZ standards.
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

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Many properties in Delray Beach's coastal communities and planned neighborhoods fall under HOA governance with architectural review requirements. Our team routinely prepares repair documentation suitable for HOA submittal, including scope notes, photos, and material specifications. Coordination can also address scheduling constraints common in planned neighborhoods and association-specific standards where applicable.
              </p>

              <p>
                For insurance-related inspections, we provide condition documentation that clearly separates observed storm-related impacts from wear indications, without making coverage determinations. This documentation can support discussions with carriers and adjusters, though we do not provide insurance or legal advice. Inspection reporting may include photos, moisture mapping, and material condition notes depending on policy requirements and adjuster requests. Learn more about the <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="text-red-600 hover:text-red-500 underline transition-colors">insurance claims process</Link>.
              </p>

              <p>
                Property owners in <Link to="/locations/delray-beach" className="text-red-600 hover:text-red-500 underline transition-colors">Delray Beach</Link> can explore our <Link to="/calculator" className=\"text-red-600 hover:text-red-500 underline transition-colors">roof cost estimate tool</Link> for early planning. <Link to="/easy-payments" className=\"text-red-600 hover:text-red-500 underline transition-colors">Financing options</Link> are available to support repair and replacement projects.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Tools */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Repair Planning Tools
            </h2>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Use this table to understand common roof repair scenarios observed in Delray Beach properties:
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="w-full bg-zinc-800 border border-zinc-700 rounded-lg">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="px-6 py-4 text-left text-white font-semibold">What You're Seeing</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Common Delray Beach Cause</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Ceiling stains after coastal storms</td>
                    <td className="px-6 py-4 text-zinc-300">Wind-driven rain penetration at wall transitions or valleys near coastal exposure zones</td>
                    <td className="px-6 py-4 text-zinc-300">Moisture can spread laterally before becoming visible</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing repair or localized underlayment tie-in</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Fastener corrosion or oxidation</td>
                    <td className="px-6 py-4 text-zinc-300">Salt-air corrosion accelerating metal deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Compromised fastener integrity can allow water intrusion</td>
                    <td className="px-6 py-4 text-zinc-300">Fastener replacement with corrosion-resistant materials</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Tile displacement or cracking</td>
                    <td className="px-6 py-4 text-zinc-300">UV expansion/contraction and thermal movement cycles</td>
                    <td className="px-6 py-4 text-zinc-300">Exposes underlayment to accelerated deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Selective tile replacement with proper fastening</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Sealant failures at penetrations</td>
                    <td className="px-6 py-4 text-zinc-300">Humidity-driven sealant fatigue and UV breakdown</td>
                    <td className="px-6 py-4 text-zinc-300">Creates direct water entry at roof openings</td>
                    <td className="px-6 py-4 text-zinc-300">Penetration re-sealing or flashing replacement</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Recurring leaks in older tile roofs</td>
                    <td className="px-6 py-4 text-zinc-300">Tile underlayment aging beneath intact field tiles</td>
                    <td className="px-6 py-4 text-zinc-300">Indicates hidden failure not visible from surface</td>
                    <td className="px-6 py-4 text-zinc-300">Targeted tile lift and underlayment section repair</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Valley debris accumulation and leaking</td>
                    <td className="px-6 py-4 text-zinc-300">Debris accumulation from neighborhood tree cover blocking drainage</td>
                    <td className="px-6 py-4 text-zinc-300">Trapped debris holds moisture and damages underlayment</td>
                    <td className="px-6 py-4 text-zinc-300">Valley cleaning and underlayment repair if damaged</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300">Patio or addition roof leaks</td>
                    <td className="px-6 py-4 text-zinc-300">Flat or low-slope seam separation and edge failures from seasonal storms</td>
                    <td className="px-6 py-4 text-zinc-300">Can cause concealed deck deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Seam reinforcement or edge detail repair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Delray Beach Property Owners Choose All Phase Construction USA
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Inspection-First Approach</h4>
                  <p className="text-zinc-300">Diagnostic evaluation to identify root causes and determine repair feasibility before recommending scope.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Code-Aware Repair Scoping</h4>
                  <p className="text-zinc-300">Repair planning aligned to Florida Building Code requirements, with HVHZ provisions applied where applicable based on location.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Documentation Clarity for HOA and Insurance Workflows</h4>
                  <p className="text-zinc-300">Clear project documentation suitable for HOA architectural review submissions and insurance coordination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Repair Compatibility</h4>
                  <p className="text-zinc-300">Attention to material compatibility and transition details to maintain roof system performance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Focus on Water-Shedding Details and Flashing Integrity</h4>
                  <p className="text-zinc-300">Emphasis on flashing integrity, drainage considerations, and proper water-shedding details to prevent recurring issues.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Corrosion-Aware Detailing Where Needed</h4>
                  <p className="text-zinc-300">Technical competence with coastal exposure considerations, including salt-air corrosion management for metal components and fasteners.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">All Phase Construction USA is recognized for our local expertise in handling hurricane-rated, moisture-resistant materials in Delray Beach, setting a high standard for quality and durability in the area.</h4>
                  <p className="text-zinc-300">Understanding of tile, metal, flat, and shingle systems common to Delray Beach's coastal and near-coastal neighborhoods.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Serving Delray Beach Neighborhoods */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Repair Across Delray Beach Neighborhoods
            </h2>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              All Phase Construction USA provides roof repair services throughout Delray Beach and surrounding communities. From the historic homes of Del-Ida Park and the waterfront estates along A1A to the retirement communities of High Point and Kings Point, we understand the unique roofing requirements of each neighborhood.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                We also serve nearby communities:
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-zinc-300">
                {nearbyCities.map((city, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <Link
                      to={city.url}
                      className="text-red-600 hover:text-red-500 transition-colors"
                    >
                      {city.name}
                    </Link>
                    {index < nearbyCities.length - 1 && (
                      <span className="text-zinc-600">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/locations/delray-beach"
                className="text-red-600 hover:text-red-500 transition-colors font-medium"
              >
                View all Delray Beach roofing services
              </Link>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <Link
                to="/locations/service-areas"
                className="text-red-600 hover:text-red-500 transition-colors font-medium"
              >
                View all service areas
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair FAQs – Delray Beach, FL
            </h2>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden"
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

        {/* NEW: Helpful Resources */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Helpful Resources for Delray Beach Homeowners
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogResources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.url}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 hover:bg-black transition-all duration-300"
                >
                  <h3 className="text-white font-semibold mb-2">{resource.title}</h3>
                  <span className="text-red-500 text-sm hover:text-red-400 transition-colors">
                    Read more
                  </span>
                </Link>
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
            <p className="text-xl text-zinc-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              If you're experiencing roof issues or want clarity before committing to major work, schedule a professional roof repair inspection with All Phase Construction USA. Our inspection-first approach helps Delray Beach property owners understand options before making decisions.
            </p>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 mb-8 max-w-xl mx-auto">
              <div className="text-left space-y-2">
                <p className="text-white font-semibold text-lg">All Phase Construction USA</p>
                <p className="text-zinc-300">590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
                <p className="text-zinc-300">
                  <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 transition-colors">
                    (754) 227-5605
                  </a>
                </p>
                <p className="text-zinc-300">
                  <a href="mailto:leads@allphaseusa.com" className="text-red-600 hover:text-red-500 transition-colors">
                    leads@allphaseusa.com
                  </a>
                </p>
                <p className="text-zinc-300">
                  <a href="https://allphaseconstructionfl.com" className="text-red-600 hover:text-red-500 transition-colors">
                    allphaseconstructionfl.com
                  </a>
                </p>
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
      </div>
    </>
  );
}
