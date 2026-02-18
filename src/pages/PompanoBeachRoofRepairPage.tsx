import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, FileCheck, Shield, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function PompanoBeachRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How do I know if my Pompano Beach roof needs repair or full replacement?",
      answer: "A diagnostic inspection evaluates damage extent, system age, and code thresholds to determine whether repairs are viable. Material condition, underlayment integrity, and compliance considerations inform the recommendation."
    },
    {
      question: "Do roof repairs in Pompano Beach have to meet Florida Building Code or HVHZ rules?",
      answer: "Yes. All repairs must comply with the Florida Building Code applicable at the time of work. High Velocity Hurricane Zone (HVHZ) requirements may apply depending on jurisdiction and roof system scope."
    },
    {
      question: "Can a tile roof be repaired without replacing the whole roof?",
      answer: "In many cases, individual tiles and localized underlayment sections can be repaired if the surrounding system remains sound and materials can be properly matched."
    },
    {
      question: "How do you handle HOA approvals for roof repairs in Pompano Beach?",
      answer: "We prepare documentation packages including photos, roof system details, and color/profile matching notes for HOA submittal. Coordination and scheduling support is provided where required."
    },
    {
      question: "Will a roof repair affect my insurance claim or premiums?",
      answer: "Coverage decisions are made by the insurer. Our documentation can support claim discussions by clearly separating observed damage from wear patterns, though we do not provide insurance advice or guarantees."
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
        title="Roofing Contractor Pompano Beach, FL | Free Roof Inspection | All Phase"
        description="Licensed roofing contractor serving Pompano Beach, FL. Residential & commercial roof repair, replacement, inspection. Dual-county licensed. Call (754) 227-5605."
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
                  to="/roofing-services/roof-repair/"
                  className="text-red-600 hover:text-red-500 text-sm font-medium transition-colors inline-flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Roof Repair Services
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roofing Contractor in Pompano Beach, FL
              </h1>

              <p className="text-xl text-zinc-400 mb-8">
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </p>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  All Phase Construction USA serves Pompano Beach with comprehensive residential and commercial roofing services. Licensed in both Broward and Palm Beach counties, we specialize in tile, shingle, metal, and flat roofing systems designed for South Florida's climate challenges. Pompano Beach roofs experience sustained exposure to coastal salt air, UV intensity, canal-adjacent humidity, and seasonal storm patterns that accelerate wear on all roof systems. We start every project with a <Link to="/roofing-services/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to identify leak pathways, document moisture patterns, and determine whether targeted repairs or full replacement is appropriate under the Florida Building Code and HVHZ requirements.
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

        {/* Roof Replacement Cost Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Replacement Cost in Pompano Beach
            </h2>

            <div className="text-lg text-zinc-300 leading-relaxed space-y-6 mb-10">
              <p>
                The average cost to replace a roof is around $9,500, but it can range from $5,800 to $46,000 depending on several factors. The actual cost of roof replacement includes labor, materials, removal and disposal of old materials, permits, and your geographic location. Labor costs typically account for more than half of the total cost, and permits can range from $100 to $1,400 depending on the city. Removing and disposing of old roofing materials usually adds $0.40 to $2.00 per square foot to the price.
              </p>

              <p>
                The overall cost of your roof project will also depend on the size and square footage of the roof, complexity such as chimneys or skylights, and whether you are replacing the entire roof or just a section. Larger roofs with more complex designs require more materials and labor, which increases installation costs. Roof height and accessibility also impact costs — a two-story home will have higher labor costs than a single-story home.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Roofing Materials and Lifespan
            </h3>

            <div className="text-lg text-zinc-300 leading-relaxed space-y-6 mb-10">
              <p>
                When considering roofing materials, asphalt shingles are the most common and affordable option, with a lifespan of 15–30 years and low maintenance needs. Metal roofs are a premium option lasting up to 70 years, offering energy efficiency and long-term savings. Clay tiles are exceptionally durable and typically last 50–100 years, providing excellent noise insulation from wind and rain. Slate roofs are the longest-lasting option with lifespans up to 150 years and minimal maintenance. Energy-efficient materials like metal roofs can help reduce energy bills over time. New underlayment is often required during roof replacement to prevent water damage and should be included in your total cost estimate.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Getting Quotes and Understanding Warranties
            </h3>

            <div className="text-lg text-zinc-300 leading-relaxed space-y-6">
              <p>
                To get a better idea of the price range and value, homeowners should get multiple quotes from roofing contractors. Roof replacement costs can sometimes be offset by homeowner's insurance, local or federal grants, or by negotiating with your contractor. Workmanship warranties from contractors typically last 1–10 years, while manufacturer warranties for roofing materials usually last 25–50 years. All Phase Construction USA provides both warranty types on every project.
              </p>

              <p>
                The decision to repair or replace a roof depends on the age, condition, and extent of damage to your existing roof. Acting quickly on roof issues can help you avoid higher costs and protect your property investment. Use our free <Link to="/roof-cost-calculator" className="text-red-600 hover:text-red-500 underline transition-colors">Roof Cost Calculator</Link> to estimate your project, or call (754) 227-5605 for an in-person assessment. <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">Explore our financing options</Link> to make your roof replacement more manageable.
              </p>
            </div>
          </div>
        </section>

        {/* Signs of a Failing Roof Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Signs of a Failing Roof
            </h2>

            <div className="text-lg text-zinc-300 leading-relaxed space-y-6 mb-8">
              <p>
                Recognizing the early signs of a failing roof is essential for homeowners who want to protect their property and avoid costly repairs. A roof in poor condition can lead to water damage, structural issues, and increased energy costs. Common indicators your roof needs attention:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Water Stains on Ceilings or Walls</h4>
                <p className="text-zinc-300">
                  These often point to a leaky roof and can signal water damage inside your home.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Cracked or Broken Shingles</h4>
                <p className="text-zinc-300">
                  Damaged shingles compromise the integrity of your roof and can allow moisture to seep in.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Sagging or Uneven Rooflines</h4>
                <p className="text-zinc-300">
                  This may indicate underlying structural problems that require immediate attention.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Missing or Loose Shingles</h4>
                <p className="text-zinc-300">
                  Gaps in your roofing material can lead to further leaks and damage, especially during extreme weather.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Roof Age</h4>
                <p className="text-zinc-300">
                  Most asphalt shingle roofs last 20–30 years. If your roof is approaching this age, it may be time to consider roof replacement.
                </p>
              </div>
            </div>

            <div className="text-lg text-zinc-300 leading-relaxed space-y-6">
              <p>
                Addressing these issues promptly can help you avoid more extensive and expensive repairs. Regular <Link to="/roofing-services/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">inspections by professional roofers</Link> can catch problems early, ensuring your roof remains in good condition and continues to protect your home.
              </p>

              <p>
                If only certain areas of your roof are damaged, partial roof replacement can be a cost-effective solution, helping you save money on materials and labor. Homeowners can also reduce costs by scheduling their roof replacement project during the off season when labor expenses may be lower.
              </p>
            </div>
          </div>
        </section>

        {/* Common Pompano Beach Repair Problems */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roof Repair Issues in Pompano Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              Roofs in Pompano Beach frequently develop damage patterns influenced by coastal exposure, canal proximity, and dense residential development. Common repair issues include wind-driven rain intrusion at flashing and wall transitions, fastener back-out on perimeter edge metal during gusts, sealant failure around pipe boots and skylights from UV and heat cycling, and tile displacement from aging fasteners. Granule loss and brittle shingle tabs from sun exposure, low-slope ponding near scuppers and drains, and rust or corrosion at metal components exposed to salt air are also routinely observed.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Wind-Driven Rain at Flashing
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Coastal wind patterns drive rain into flashing seams, valleys, and wall transitions, creating moisture pathways that require targeted flashing repair or reconstruction to eliminate leak sources.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Fastener Back-Out and Uplift
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Wind exposure and thermal cycling cause fastener back-out at perimeter edge metal and shingle field areas, compromising wind resistance and requiring code-compliant fastening during repair.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Sealant and Boot Failure
                  </h3>
                </div>
                <p className="text-zinc-300">
                  UV exposure and extreme heat cycling deteriorate sealants around pipe boots, vents, and skylights, causing intermittent leaks that require component replacement and proper resealing.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Tile Displacement and Cracking
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Foot traffic, thermal expansion, and aging fasteners cause tiles to crack, shift, or dislodge, exposing underlayment to accelerated deterioration and requiring selective tile replacement with underlayment inspection.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Shingle Granule Loss and Brittleness
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Intense UV exposure and thermal cycling cause granule loss and brittle shingle tabs that crack or lift, compromising waterproofing and requiring targeted shingle replacement to maintain roof integrity.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    Low-Slope Ponding and Drainage Issues
                  </h3>
                </div>
                <p className="text-zinc-300">
                  Partial blockage at scuppers and drains combined with low-slope areas causes ponding water that accelerates membrane wear, requiring drainage clearing and localized membrane reinforcement.
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
              All Phase Construction USA follows a structured diagnostic process before recommending any roof repair. The process begins with interior symptom review and moisture pattern mapping, followed by attic evaluation where accessible, exterior field survey by roof system type, and comprehensive documentation. Findings are reviewed against current Florida Building Code standards, including HVHZ considerations where applicable. Only repair scopes that can be completed without triggering unnecessary system-wide replacement are recommended, allowing property owners to make informed, code-aware decisions.
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Interior Symptom Review and Moisture Pattern Mapping
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Documentation of ceiling staining, wall moisture, and leak timing patterns to establish diagnostic focus areas and guide field investigation priorities.
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
                      Attic Evaluation (If Accessible)
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Inspection of attic staining patterns, ventilation adequacy, and decking condition to identify concealed moisture travel and structural concerns requiring attention.
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
                      Exterior Field Survey by Roof System Type
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Comprehensive examination of roof surface conditions, material integrity, and visible damage patterns specific to tile, shingle, metal, or flat roof assemblies.
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
                      Flashing and Penetrations Perimeter Checks
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Detailed assessment of valleys, chimneys, walls, parapets, skylights, and roof penetrations where complexity increases leak potential and repair intervention is frequently needed.
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
                      Drainage Evaluation for Low-Slope Roofs
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Inspection of scuppers, drains, slope adequacy, and ponding indicators on flat and low-slope systems to identify drainage restrictions contributing to membrane stress.
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
                      Photo Documentation and Measured Repair Scope
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Photographic documentation of conditions and preparation of measured repair scope suitable for HOA review, insurance coordination, and permit requirements where applicable.
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
                      Florida Building Code Considerations
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Assessment of repair scope against current Florida Building Code standards, including HVHZ detailing where applicable, to ensure compliance and insurability without triggering unnecessary replacement thresholds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    8
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Repair Plan with Options Based on Findings
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Preparation of repair options ranging from targeted intervention to larger sectional remediation, based on diagnostic findings and property owner priorities.
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
              Roof Systems Repaired in Pompano Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              All Phase Construction USA performs code-compliant repairs on the following roof systems commonly found in Pompano Beach:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Asphalt Shingle Roofs
                </h3>
                <p className="text-zinc-300 mb-3">
                  Shingle replacement, fastener correction, and flashing repairs addressing wind uplift damage, granule loss, and localized deterioration from UV exposure and coastal conditions. Repair approaches maintain manufacturer warranty coverage when materials are properly matched.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Shingle repairs prove cost-effective when damage remains localized and surrounding materials maintain adequate service life.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Concrete and Clay Tile Roofing Systems
                </h3>
                <p className="text-zinc-300 mb-3">
                  Individual tile replacement, underlayment section repair, and flashing upgrades for concrete and clay tile systems prevalent across Pompano Beach residential properties. Repair feasibility depends on tile availability and underlayment condition assessment.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Tile repairs avoid full replacement costs when structural components remain sound and materials can be properly matched.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Metal Roofing Systems
                </h3>
                <p className="text-zinc-300 mb-3">
                  Panel replacement, fastener correction, and sealant restoration for standing seam and exposed-fastener metal roofing systems. Metal roof repairs accommodate thermal movement and maintain wind resistance ratings critical in coastal applications.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Metal repairs must address thermal expansion cycles and salt-air exposure characteristic of Pompano Beach conditions.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Flat and Low-Slope Systems
                </h3>
                <p className="text-zinc-300 mb-3">
                  Membrane repairs, seam correction, and drainage improvements for modified bitumen, TPO, and other flat and low-slope systems on commercial properties and residential flat roof sections. Repair techniques address both surface symptoms and underlying causal factors.
                </p>
                <p className="text-sm text-zinc-400 italic">
                  Flat roof repairs require proper drainage correction and substrate preparation to achieve long-term performance.
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
              Many Pompano Beach properties are governed by HOAs or condo associations with specific repair approval processes. All Phase Construction USA coordinates documentation, scope clarity, and repair limitations to support HOA compliance. When repairs involve insurance claims, inspection findings and photo documentation are provided to support the claim review process without offering legal or coverage determinations.
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
                    Pompano Beach homeowner associations maintain architectural control standards governing material selection, color matching, and installation methodology for visible roof repairs. Repair proposals require documentation demonstrating compliance with community aesthetic requirements.
                  </p>
                  <p>
                    We provide comprehensive submission packages including material specifications, manufacturer data sheets, color samples, and installation methodology descriptions addressing common HOA review criteria. Work scheduling and access coordination for multi-family and condo properties is routinely handled.
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
                    Repair documentation includes pre-repair condition photography, detailed scope descriptions, material certifications, and post-repair verification suitable for insurance submission. Documentation can support claim discussions by clearly separating observed storm-related damage from wear patterns, though coverage decisions remain with the insurer. Property owners should confirm carrier-specific requirements before proceeding.
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
                    <th className="px-6 py-4 text-left text-white font-semibold">Common Pompano Beach Cause</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Repair Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Water staining near exterior wall or soffit line</td>
                    <td className="px-6 py-4 text-zinc-300">Wind-driven rain at wall flashing or edge metal transitions</td>
                    <td className="px-6 py-4 text-zinc-300">Moisture migration into decking and interior cavities</td>
                    <td className="px-6 py-4 text-zinc-300">Re-secure or replace edge metal, update flashing, seal transitions</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Drips around vent pipe after heavy rain</td>
                    <td className="px-6 py-4 text-zinc-300">UV-cracked pipe boot collar from heat cycling</td>
                    <td className="px-6 py-4 text-zinc-300">Creates intermittent leak pathways difficult to trace</td>
                    <td className="px-6 py-4 text-zinc-300">Replace boot, re-seat flashing, seal per manufacturer details</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Lifted shingle corners or missing tabs</td>
                    <td className="px-6 py-4 text-zinc-300">Thermal aging and gust uplift at perimeter zones</td>
                    <td className="px-6 py-4 text-zinc-300">Blow-off risk and exposed underlayment deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Replace damaged shingles, reinforce perimeter detailing where appropriate</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Cracked or slipped roof tiles over walkway or valley</td>
                    <td className="px-6 py-4 text-zinc-300">Foot traffic impact and aging fasteners or underlayment wear</td>
                    <td className="px-6 py-4 text-zinc-300">Hidden underlayment tears accelerate moisture intrusion</td>
                    <td className="px-6 py-4 text-zinc-300">Replace tiles, inspect underlayment, repair localized underlayment as needed</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Rusted screws or fasteners on metal roof</td>
                    <td className="px-6 py-4 text-zinc-300">Salt-air exposure combined with washer deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Fastener leaks and panel movement compromise waterproofing</td>
                    <td className="px-6 py-4 text-zinc-300">Replace fasteners with correct gasketed type, re-seat panels, seal per system</td>
                  </tr>
                  <tr className="border-b border-zinc-700">
                    <td className="px-6 py-4 text-zinc-300">Ponding marks near scupper or drain on flat roof</td>
                    <td className="px-6 py-4 text-zinc-300">Partial blockage combined with low-slope areas</td>
                    <td className="px-6 py-4 text-zinc-300">Accelerated membrane wear and concealed deck deterioration</td>
                    <td className="px-6 py-4 text-zinc-300">Clear drainage, reinforce membrane at stress points, add tapered solutions if warranted</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300">Damp ceiling line appearing after repeated storms</td>
                    <td className="px-6 py-4 text-zinc-300">Flashing fatigue at wall-to-roof transition zones</td>
                    <td className="px-6 py-4 text-zinc-300">Recurring interior damage requiring source elimination</td>
                    <td className="px-6 py-4 text-zinc-300">Targeted flashing reconstruction and sealant strategy based on condition</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <Link
                to="/service-areas/pompano-beach/"
                className="block bg-zinc-800 border-2 border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Pompano Beach Roofing Services
                </h3>
                <p className="text-zinc-300">
                  Comprehensive roofing services including repair and replacement for Pompano Beach properties.
                </p>
              </Link>

              <Link
                to="/service-areas/pompano-beach/roof-cost-estimate/"
                className="block bg-zinc-800 border-2 border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Cost Estimate
                </h3>
                <p className="text-zinc-300">
                  Generate preliminary cost estimates based on property characteristics and repair scope assumptions.
                </p>
              </Link>

              <Link
                to="/financing/"
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

        {/* Roofing Services Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Services in Pompano Beach
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              All Phase Construction USA provides comprehensive roofing services for residential and commercial properties in Pompano Beach and throughout Broward and Palm Beach counties.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/roofing-services/roof-repair/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Repair
                </h3>
                <p className="text-zinc-300">
                  Targeted repairs for leaks, damage, and wear on all roof systems with code-compliant materials and methods.
                </p>
              </Link>

              <Link
                to="/roofing-services/roof-inspection/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Inspection
                </h3>
                <p className="text-zinc-300">
                  Comprehensive diagnostic inspections identifying leak sources, damage patterns, and repair needs.
                </p>
              </Link>

              <Link
                to="/roofing-services/residential-roofing/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  New Roof Installation
                </h3>
                <p className="text-zinc-300">
                  Complete roof replacement with high-wind rated materials meeting Florida's HVHZ requirements for Pompano Beach homes and businesses.
                </p>
              </Link>

              <Link
                to="/roofing-services/tile-roofing/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Tile Roofing
                </h3>
                <p className="text-zinc-300">
                  Concrete and clay tile installation and repair. Clay tiles are a premium roofing material known for exceptional durability and longevity, with clay tile roofs typically lasting 50 to 100 years. Tile roofing also offers excellent noise isolation from wind and rain.
                </p>
              </Link>

              <Link
                to="/roofing-services/metal-roofing/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Metal Roofing
                </h3>
                <p className="text-zinc-300">
                  Standing seam and exposed-fastener metal roofing systems with superior wind resistance and longevity up to 70 years.
                </p>
              </Link>

              <Link
                to="/roofing-services/flat-roofing/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Flat Roofing
                </h3>
                <p className="text-zinc-300">
                  Modified bitumen, TPO, and low-slope membrane systems for commercial and residential flat roof applications.
                </p>
              </Link>

              <Link
                to="/roofing-services/commercial-roofing/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Commercial Roofing
                </h3>
                <p className="text-zinc-300">
                  Commercial roof systems for multi-family properties, businesses, and HOA communities throughout South Florida.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Pompano Beach Property Owners Choose All Phase Construction USA
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Inspection-First Approach</h4>
                  <p className="text-zinc-300">Diagnostic evaluation pinpointing leak pathways and root causes rather than surface symptoms, providing property owners with accurate condition understanding and scope clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Photo Documentation and Clear Scopes</h4>
                  <p className="text-zinc-300">Comprehensive photo documentation and measured repair scopes suitable for HOA submissions, insurance coordination, and informed decision-making.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Code-Aware Detailing</h4>
                  <p className="text-zinc-300">Repair planning aligned to Florida Building Code requirements with HVHZ provisions applied where applicable, ensuring compliance and insurability.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Experience Across Roof Systems</h4>
                  <p className="text-zinc-300">Technical competence with shingle, tile, metal, and flat roof systems common to Pompano Beach residential and commercial properties.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Coordination-Minded Workflows</h4>
                  <p className="text-zinc-300">Proven experience coordinating with HOA boards, property managers, and homeowners to meet approval processes and scheduling requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Licensed and Insured</h4>
                  <p className="text-zinc-300">Florida-licensed roofing contractor maintaining full compliance with state regulatory requirements and comprehensive liability insurance coverage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Dual-County Licensing</h4>
                  <p className="text-zinc-300">Licensed and insured in both Broward and Palm Beach counties, ensuring compliance with all local building codes and regulations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Hurricane-Rated Installations</h4>
                  <p className="text-zinc-300">All roofing systems meet Florida's High Velocity Hurricane Zone requirements with proper wind uplift ratings and installation standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Comprehensive Warranties</h4>
                  <p className="text-zinc-300">We provide both manufacturer warranties on materials and workmanship warranties on installation. Our workmanship warranty typically covers 1 to 10 years, while manufacturer warranties usually last 25–50 years covering defects in materials.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Direct Communication</h4>
                  <p className="text-zinc-300">Work directly with licensed professionals throughout your project. No subcontractors, no middlemen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Pompano Beach Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Pompano Beach & Surrounding Areas
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              All Phase Construction USA provides roofing services throughout Pompano Beach and neighboring South Florida communities. Our dual-county licensing in Broward and Palm Beach counties enables us to serve residential and commercial properties across the region with consistent quality and code compliance.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/roof-repair/fort-lauderdale/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Fort Lauderdale Roof Repair
                </h3>
                <p className="text-zinc-300 text-sm">
                  Comprehensive roof repair and replacement services for Fort Lauderdale properties.
                </p>
              </Link>

              <Link
                to="/roof-repair/coral-springs/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Coral Springs Roof Repair
                </h3>
                <p className="text-zinc-300 text-sm">
                  Expert roofing services for Coral Springs homes and businesses.
                </p>
              </Link>

              <Link
                to="/roof-repair/deerfield-beach/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Deerfield Beach Roof Repair
                </h3>
                <p className="text-zinc-300 text-sm">
                  Local roofing contractor serving Deerfield Beach from our headquarters.
                </p>
              </Link>

              <Link
                to="/roof-repair/boca-raton/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Boca Raton Roof Repair
                </h3>
                <p className="text-zinc-300 text-sm">
                  Premium roofing services for Boca Raton residential and commercial properties.
                </p>
              </Link>

              <Link
                to="/roof-repair/delray-beach/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Delray Beach Roof Repair
                </h3>
                <p className="text-zinc-300 text-sm">
                  Trusted roofing contractor for Delray Beach area properties.
                </p>
              </Link>

              <Link
                to="/roof-repair/boynton-beach/"
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Boynton Beach Roof Repair
                </h3>
                <p className="text-zinc-300 text-sm">
                  Complete roofing solutions for Boynton Beach homes and businesses.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Roof Repair FAQs – Pompano Beach, FL
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
              Active leaks, visible damage, or suspected roof deterioration require prompt diagnostic assessment. Contact All Phase Construction USA for comprehensive roof inspection and code-compliant repair scoping in Pompano Beach.
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
