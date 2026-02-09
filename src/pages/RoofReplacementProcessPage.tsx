import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Home, ChevronRight, Shield, Clock, FileCheck, ChevronDown, X, AlertCircle, Award } from 'lucide-react';
import SEO from '../components/SEO';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';

import step01Image from '../assets/step-01-inspection-optimized.jpg';
import step02Image from '../assets/step-02-planning-optimized.jpg';
import step03Image from '../assets/step-03-materials-selection-optimized.jpg';
import step04Image from '../assets/step-04-permitting-optimized.jpg';
import step05Image from '../assets/step-05-prep.jpg';
import step06Image from '../assets/step-06-tearoff.jpg';
import step07Image from '../assets/step-07-underlayment-install.jpg';
import step08Image from '../assets/step-08-install.jpg';
import step09Image from '../assets/step-09-installed.jpg';
import step10Image from '../assets/step-10-piece-of-mind-optimized.jpg';
import deckInspectionImage from '../assets/deck-inspection.jpg';
import flashingDetailsImage from '../assets/flashing-details.jpg';

export default function RoofReplacementProcessPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processStepsGrid = [
    { number: '01', title: 'Initial Inspection & Assessment', image: step01Image },
    { number: '02', title: 'Detailed Estimate & Planning', image: step02Image },
    { number: '03', title: 'Material Selection & Ordering', image: step03Image },
    { number: '04', title: 'Permitting & Engineering', image: step04Image },
    { number: '05', title: 'Site Protection & Preparation', image: step05Image },
    { number: '06', title: 'Tear-Off & Deck Inspection', image: step06Image },
    { number: '07', title: 'Underlayment Installation', image: step07Image },
    { number: '08', title: 'Flashing & Waterproofing', image: step08Image },
    { number: '09', title: 'Final Roofing Installation', image: step09Image },
    { number: '10', title: 'Final Inspection & Walkthrough', image: step10Image }
  ];

  const documentationPhotos = [
    { title: 'Before Documentation', description: 'Complete pre-project assessment', image: step01Image },
    { title: 'Tear-Off Process', description: 'Old materials removed', image: step06Image },
    { title: 'Deck Inspection', description: 'Structural verification', image: deckInspectionImage },
    { title: 'Underlayment Install', description: 'Water barrier complete', image: step07Image },
    { title: 'Flashing Details', description: 'Critical waterproofing', image: flashingDetailsImage },
    { title: 'Final Completion', description: 'HVHZ-compliant finish', image: step10Image }
  ];

  const roofingSystems = [
    {
      title: 'Asphalt Shingle Roofing',
      description: 'Premium architectural shingles with HVHZ approval. Class 4 impact resistance available.',
      features: ['30-50 year warranties', 'Class 3 & 4 impact ratings', 'Algae resistant']
    },
    {
      title: 'Concrete & Clay Tile',
      description: 'Traditional S-tile and flat tile systems built for Florida weather and aesthetics.',
      features: ['Lifetime material durability', 'Superior wind resistance', 'Energy efficient']
    },
    {
      title: 'Metal Roofing Systems',
      description: 'Standing seam and metal shingle systems with maximum wind and fire ratings.',
      features: ['50+ year lifespan', 'Highest wind ratings', 'Reflective coatings']
    },
    {
      title: 'Flat & Low-Slope',
      description: 'TPO, EPDM, and modified bitumen systems for commercial and residential applications.',
      features: ['Seamless installations', 'Energy Star rated', 'Ponding water resistant']
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical roof replacement take from start to finish?',
      answer: 'A complete roof replacement project typically takes 4-6 weeks from initial inspection to final approval. This includes 1 week for inspection and estimating, 2-3 weeks for permit approval and material ordering, 3-7 days for active construction, and final inspections. Weather and permitting timelines can affect this schedule.'
    },
    {
      question: 'Will my insurance cover roof replacement in South Florida?',
      answer: 'Insurance coverage depends on the cause of damage and your policy terms. Storm damage (wind, hail) with documented loss is typically covered minus your deductible. However, age-related wear and maintenance issues are not covered. We document all damage during inspection and can coordinate with your adjuster. Insurance companies in Florida require proper permits and code-compliant installation—unpermitted work voids coverage. If your claim is approved, we work directly with adjusters and supplement requests to ensure all necessary work is included.'
    },
    {
      question: 'Do I need to be home during the roof replacement?',
      answer: 'You don\'t need to be home during the work, but we recommend being present for the initial walkthrough and final inspection. We\'ll coordinate access to your property, set up protection measures, and communicate daily via text or email about progress. Most homeowners go about their normal routines while we work.'
    },
    {
      question: 'What permits are required for roof replacement in Broward and Palm Beach Counties?',
      answer: 'All roof replacements in Florida require a building permit, engineering calculations, and product approvals (NOA). We handle the entire permitting process including: structural calculations, wind load analysis, product approval verification, permit applications, and final inspection coordination. The building department reviews plans, issues permits, and conducts final inspections before issuing a certificate of completion.'
    },
    {
      question: 'How do you protect my property during roof replacement?',
      answer: 'Property protection is a critical step in our process. Before work begins, we install ground tarps around the entire work area, set up magnetic sweepers to catch metal debris, protect landscaping and AC units with plywood shields, cover pool areas and sensitive plants, position dump trailers that are removed every night so they never impede your driveway, and establish clear access paths for crews. After work each day, we sweep and inspect the property to ensure no debris remains.'
    },
    {
      question: 'What makes HVHZ roof installation different from standard roofing?',
      answer: 'High Velocity Hurricane Zone (HVHZ) roofing requires: enhanced attachment schedules with more fasteners per square, specific product approvals (NOA) from Miami-Dade or Florida Product Approval, engineered nail patterns based on roof zones, secondary water barriers in all vulnerable areas, wind uplift calculations for your specific roof design, deck re-nailing to meet current code, and inspector-verified installation methods. Standard roofing practices from other states don\'t meet Florida\'s stricter requirements.'
    },
    {
      question: 'Can you match my existing roof color and style?',
      answer: 'Yes, we help you match or improve upon your current roof. We bring physical samples to your home, provide color visualizers for difficult decisions, show you nearby installations of similar products, and coordinate with HOA architectural guidelines if applicable. If your product is discontinued, we\'ll find the closest modern equivalent with better performance characteristics.'
    },
    {
      question: 'What happens if you find structural damage during tear-off?',
      answer: 'Structural issues like rotted decking or damaged trusses are common discoveries during tear-off. When we find damage, we immediately document it with photos, explain the issue and necessary repairs, provide pricing for the additional work, and complete repairs before proceeding with roofing installation. As a dual-licensed contractor (CGC and CCC), we handle structural repairs in-house without subcontracting. Most structural repairs add 1-2 days to the project timeline.'
    },
    {
      question: 'Do you offer financing for roof replacement?',
      answer: 'Yes, we work with multiple financing partners to offer flexible payment options including zero-interest promotional periods, extended terms up to 20 years, same-day credit decisions, and no prepayment penalties. Many homeowners use insurance proceeds combined with financing to upgrade to premium materials or cover deductibles.'
    },
    {
      question: 'What warranties come with a new roof?',
      answer: 'Every roof replacement includes multiple warranty layers: manufacturer material warranties (25-50 years depending on product), our workmanship warranty (10 years on installation), enhanced manufacturer warranties when we install full systems, permit-backed work guaranteed by the building department, and annual inspection eligibility for our maintenance program customers. We provide all warranty documentation at project completion and register products on your behalf.'
    },
    {
      question: 'How do I know if I need roof replacement vs. repair?',
      answer: 'Roof replacement is typically recommended when: your roof is over 20 years old, you have widespread damage across multiple areas, repair costs exceed 30% of replacement cost, you\'re experiencing multiple leak locations, the roof failed a recent insurance inspection, or you\'re planning to sell within 5 years. We provide honest assessments and will recommend repairs when they make sense. A thorough inspection helps us give you accurate guidance on remaining service life.'
    },
    {
      question: 'What is the average cost of roof replacement in Broward and Palm Beach Counties?',
      answer: 'Roof replacement costs in South Florida typically range from $8,000-$25,000+ depending on size, material choice, pitch, complexity, and structural repairs discovered during tear-off. Shingle roofs average $5.50-$8.50 per square foot installed. Tile roofs range $10-$18 per square foot. Metal roofing runs $12-$22 per square foot. These prices include permits, engineering, materials, labor, and disposal. HVHZ requirements add 15-25% compared to standard installations due to enhanced fastening and underlayment. Get an instant estimate using our roof calculator, but understand that accurate pricing requires an in-person inspection to assess condition, access, and structural factors.'
    },
    {
      question: 'How much does a new roof increase my home value in South Florida?',
      answer: 'A new permitted roof typically adds 60-85% of the project cost to your home\'s resale value in South Florida\'s market. Beyond direct ROI, a new roof makes your property easier to sell—many buyers walk away from homes with aging roofs due to financing and insurance complications. Lenders often require roof replacement for mortgages when roofs are over 15 years old or show significant wear. Insurance companies make coverage difficult or expensive for older roofs. A new warranted roof with proper permits eliminates these barriers and can reduce time on market by 30-50%. Wind mitigation features from HVHZ-compliant installation provide ongoing value through reduced insurance premiums.'
    },
    {
      question: 'Can I get a roof replacement during Florida\'s rainy season?',
      answer: 'Yes, we complete roof replacements year-round including summer rainy season. We monitor weather closely and only expose vulnerable areas when forecast permits. Our process includes: daily weather analysis before starting work, strategic sectioning to minimize exposed areas, immediate tarping if unexpected rain approaches, and rescheduling tear-off days when heavy rain is predicted. Most roofs are weathertight within 1-2 days of tear-off. Modern synthetic underlayment provides excellent temporary protection if installation extends multiple days. We never leave your home unprotected overnight. Summer installations may take 1-2 extra days due to weather delays, but proper planning minimizes risk.'
    },
    {
      question: 'What roof material lasts longest in South Florida\'s climate?',
      answer: 'Material lifespan in South Florida depends on proper installation, maintenance, and exposure. Concrete and clay tile roofs last 50+ years when properly installed with HVHZ-compliant attachment. Metal roofing systems last 40-60 years with coastal-rated finishes. Architectural shingles last 20-30 years—shorter than northern climates due to UV exposure and thermal cycling. Flat roof systems (TPO, EPDM) last 20-30 years with proper maintenance. All materials perform best with regular maintenance including annual inspections, debris removal, and prompt repair of minor issues. Wind mitigation features and proper ventilation extend lifespan regardless of material choice. We help you select materials based on your budget, home architecture, and long-term plans.'
    },
    {
      question: 'Do I need separate permits for roof replacement in a gated community or HOA?',
      answer: 'Yes, you need both municipal building permits and HOA architectural approval. Building permits are required by law for all roof replacements in Florida—HOAs cannot waive this requirement. Additionally, most HOAs require advance approval for material and color selection to maintain community aesthetics. We handle both processes: coordinating with your HOA\'s architectural review committee for material approval (typically 1-2 weeks) and simultaneously pursuing building permits with engineering (2-3 weeks). HOA approval usually requires submitting product samples, color chips, and installation timeline. Some communities have restricted material lists or require specific tile profiles. We\'re experienced working with local HOAs and can navigate their requirements efficiently. Skipping HOA approval can result in fines, forced removal, or liens—compliance is essential.'
    },
    {
      question: 'What happens if it rains during my roof replacement?',
      answer: 'We take extensive precautions to protect your home during active construction. Before tear-off begins, we analyze weather forecasts and only proceed with favorable conditions. If unexpected rain approaches, our crews immediately deploy tarping systems covering exposed areas within minutes. Modern synthetic underlayment (installed immediately after tear-off) provides excellent water resistance—far superior to old felt paper. We strategically section roofs so only small areas are exposed at once. Most critical: we never leave your home unprotected overnight regardless of weather forecast. In the unlikely event water enters during construction, we have insurance coverage and immediately address any interior damage. Our project managers monitor radar actively during installation and make real-time decisions to protect your property. This level of weather planning and rapid response is why we\'ve never had a significant weather-related water intrusion claim.'
    }
  ];

  return (
    <>
      <SEO
        title="10-Step Roof Replacement Process | All Phase Construction USA"
        description="See our 10-step roof replacement process in South Florida. Know exactly what happens from inspection to final cleanup. Call (754) 227-5605."
        canonical="https://allphaseconstructionfl.com/roof-replacement-process"
      />
      <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-10">
            <Link to="/" className="hover:text-red-500 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/residential-roofing" className="hover:text-red-500 transition-colors">
              Residential Roofing
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Roof Replacement Process</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            Our 10-Step Roof Replacement Process
          </h1>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mb-12 max-w-4xl">
            <h2 className="text-lg font-bold text-red-500 mb-4">How Roof Replacement Works in South Florida</h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Replacing a roof in South Florida requires more than just removing old shingles and installing new ones. Every project must meet High Velocity Hurricane Zone (HVHZ) standards with engineered calculations, product approvals, building permits, and municipal inspections. The process typically takes 4-6 weeks from initial inspection through final approval, with 3-7 days of active construction. Our 10-step system ensures code compliance, proper material selection, thorough documentation, and zero surprises—protecting your investment with permits, warranties, and third-party verification that standard contractors often skip.
            </p>
          </div>

          <p className="text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed max-w-4xl">
            From engineering to final inspection, see exactly how we navigate Florida's strictest building codes to deliver roofs that meet HVHZ compliance — and exceed your expectations.
          </p>

          {/* Dual-License Badge */}
          <div className="max-w-3xl mb-8">
            <div className="bg-zinc-900/80 backdrop-blur-sm border-2 border-[#C5A572] rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="w-8 h-8 text-[#C5A572]" />
                <h3 className="text-2xl font-bold text-white">Dual-Licensed Roofing Specialist</h3>
              </div>
              <div className="text-center space-y-2">
                <p className="text-lg text-zinc-200">
                  <span className="font-semibold text-[#C5A572]">CCC-1331464</span> - Florida Certified Roofing Contractor
                </p>
                <p className="text-lg text-zinc-200">
                  <span className="font-semibold text-[#C5A572]">CGC-1526236</span> - Certified General Contractor
                </p>
                <p className="text-sm text-zinc-300 mt-3">
                  HVHZ Certified • Full Structural Authority • Complete Permitting
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/roof-inspection"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              <FileCheck className="w-5 h-5" />
              Request 21-Point Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Licensed CGC & CCC</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>HVHZ Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Full Permits & Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our 10 Step Process - Grid Overview */}
      <section className="py-32 px-4 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our 10 Step Roof Replacement Process
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Every project follows this proven sequence designed for HVHZ compliance, quality control, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processStepsGrid.map((step, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-red-900/50 transition-all duration-300">
                <div className="aspect-square w-full overflow-hidden bg-zinc-950">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-red-500 mb-3">{step.number}</div>
                  <h3 className="text-sm font-semibold leading-tight">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 01 - Detailed */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">01</div>
                <h2 className="text-3xl font-bold mb-6">Initial Inspection & Assessment</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Comprehensive roof evaluation using thermal imaging, moisture detection, and detailed documentation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">What We Inspect</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Roof Surface & Materials</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Shingle, tile, or metal condition assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Missing, cracked, or damaged material documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Granule loss and UV degradation evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Wind and storm damage identification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Structural Components</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Roof decking integrity (visible areas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Soffit, fascia, and drip edge condition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Roof framing and truss visible inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Chimney and penetration flashing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Ventilation & Attic</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Attic ventilation adequacy (intake/exhaust)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Moisture intrusion and mold presence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Insulation condition and R-value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Thermal imaging for hidden leaks</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Drainage & Waterproofing</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Valley condition and water flow patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Gutter and downspout functionality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Flashing at walls, chimneys, and skylights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Ponding water areas on flat sections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">Inspection Report & Documentation</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  After the inspection, you receive a detailed report including:
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Photo documentation</strong> of all deficiencies and areas of concern with annotations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Thermal imaging results</strong> showing heat loss, moisture intrusion, and insulation gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Accurate roof measurements</strong> including pitch, area calculations, and material quantities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Recommended repairs or replacement</strong> with honest assessment of remaining service life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Code compliance evaluation</strong> noting any current violations of HVHZ requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why This Step Matters</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      A thorough inspection prevents surprises during installation and ensures accurate material estimates. We identify structural issues before tear-off, when repairs are most cost-effective. This step also provides documentation for insurance claims and establishes a baseline for warranty coverage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Most contractors walk your roof for 15 minutes and email an estimate. We conduct comprehensive inspections with thermal imaging, moisture meters, and detailed photography—providing documentation you can use for insurance claims or future reference.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Advanced Technology:</strong> We use FLIR thermal imaging cameras to detect hidden moisture intrusion and heat loss patterns invisible to the naked eye.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Attic Access:</strong> We always enter the attic space to inspect decking from below, check ventilation adequacy, and identify moisture problems—most contractors skip this step.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Written Reports:</strong> You receive a detailed inspection report with annotated photos, not just a verbal summary.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Code Knowledge:</strong> As dual-licensed contractors (CGC & CCC), we identify code violations that affect insurance coverage and resale value.</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-500 mt-6">
                  Learn more about our{' '}
                  <Link to="/roof-inspection" className="text-zinc-400 hover:text-red-500 underline transition-colors">
                    professional roof inspection services
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 02 */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">02</div>
                <h2 className="text-3xl font-bold mb-6">Detailed Estimate & Planning</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Transparent pricing with itemized breakdown of materials, labor, timeline, and HVHZ compliance requirements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">Your Estimate Includes</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Material Breakdown</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Exact quantities of roofing material (shingles, tiles, metal panels)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Underlayment specifications (self-adhering vs. mechanically attached)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Flashing materials (valleys, walls, penetrations, drip edge)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Ventilation components (ridge vent, soffit vent, turbines)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Fastener specifications meeting HVHZ requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Manufacturer and product line with warranty details</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Labor & Installation</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Complete tear-off and disposal of existing materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Deck inspection and estimated repair allowance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>New roof installation per manufacturer specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Crew size and estimated timeline (3-7 days typical)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Daily cleanup and final property inspection</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Permits & Engineering</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Building permit application and approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Structural engineering calculations for wind loads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Product approval (NOA) verification and submittal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Final inspection coordination and approval</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Project Management</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dedicated project manager as your single point of contact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Daily progress updates via text or email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Photo documentation at each major milestone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Schedule coordination and weather contingency planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-6">
                  Want to estimate your project cost? Try our{' '}
                  <Link to="/calculator" className="text-zinc-400 hover:text-red-500 underline transition-colors">
                    roof calculator
                  </Link>
                  {' '}for an instant preliminary estimate.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">Estimate Presentation Meeting</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  We don't email estimates and disappear. We schedule a presentation meeting to walk through:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6">
                    <h4 className="font-bold text-white mb-3">Material Options</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      We bring physical samples, discuss warranties, and explain performance differences between products in your price range.
                    </p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6">
                    <h4 className="font-bold text-white mb-3">HVHZ Requirements</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      We explain how wind zone calculations affect your roof and what specific code requirements apply to your home.
                    </p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6">
                    <h4 className="font-bold text-white mb-3">Timeline Expectations</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Realistic schedule including permit approval timelines, material lead times, and weather considerations.
                    </p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6">
                    <h4 className="font-bold text-white mb-3">Financing Options</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      We discuss payment structures, financing availability, and insurance claim coordination if applicable.{' '}
                      <Link to="/easy-payments" className="text-zinc-500 hover:text-red-500 underline transition-colors">
                        Learn about financing options
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  We don't email generic estimates with placeholder pricing. Our detailed proposals include specific manufacturers, product lines, quantities, and itemized costs—so you know exactly what you're getting before signing a contract.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Transparent Pricing:</strong> Every line item broken down including permits, engineering, materials, labor, and disposal—no hidden fees.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Material Options:</strong> We present 2-3 material tiers with actual samples, warranty comparisons, and performance data for your specific application.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">In-Person Review:</strong> We schedule dedicated meetings to walk through estimates, answer questions, and explain HVHZ requirements—not just email and disappear.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Realistic Timelines:</strong> We provide honest schedules accounting for permit delays and weather—not optimistic promises that create false expectations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 03 */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">03</div>
                <h2 className="text-3xl font-bold mb-6">Material Selection & Ordering</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Choose from premium manufacturer-certified materials. We order HVHZ-approved products and schedule delivery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">Material Selection Process</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  We help you select materials that balance aesthetics, performance, and budget while meeting HVHZ requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Roofing Material Options</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Asphalt Shingles:</strong> Architectural, designer, or luxury lines with Class 3/4 impact ratings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Concrete Tile:</strong> S-tile, flat tile, or barrel tile in multiple colors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Clay Tile:</strong> Traditional Spanish S-tile and Mediterranean profiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Metal Roofing:</strong> Standing seam, metal shingle, or corrugated options</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Color & Style Consultation</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Physical samples brought to your home for accurate color matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Nearby installation examples in your neighborhood</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>HOA architectural guideline review and compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Energy efficiency and reflectivity considerations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">HVHZ Product Approval Verification</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Every product installed must have proper approval for High Velocity Hurricane Zone applications:
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Miami-Dade NOA (Notice of Acceptance)</strong> - Required for installations in Miami-Dade and Broward counties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Florida Product Approval</strong> - State-level approval for products used throughout Florida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Wind Uplift Ratings</strong> - Products tested to withstand 170+ mph wind speeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Impact Resistance</strong> - Class 3 or 4 ratings for hail and debris impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Fire Rating</strong> - Class A fire resistance required in most areas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Material Ordering & Delivery Coordination</h3>
                <p className="text-zinc-400 mb-4">
                  Once materials are selected and permits are in progress, we coordinate material delivery:
                </p>
                <div className="space-y-3 text-zinc-400">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-red-500">1</span>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Order Placement</p>
                      <p className="text-sm">Materials ordered directly from manufacturer or authorized distributor with lead time communicated upfront</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-red-500">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Delivery Scheduling</p>
                      <p className="text-sm">Delivery timed to arrive 1-2 days before installation begins (not weeks in advance exposed to weather)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-red-500">3</span>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Professional Material Delivery</p>
                      <p className="text-sm">For tile roofs, we coordinate third-party tile loaders using conveyor belts or knuckle booms for efficient, safe placement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-red-500">4</span>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Material Inspection</p>
                      <p className="text-sm">All materials inspected upon delivery for damage, color consistency, and correct quantities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  We only specify HVHZ-approved products with verified NOA documentation. Many contractors install whatever materials are cheapest or most readily available, ignoring product approval requirements that invalidate warranties and insurance coverage.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Pre-Verified Approvals:</strong> Every product we recommend already has Miami-Dade NOA or Florida Product Approval on file—we don't discover approval issues after you've signed a contract.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Manufacturer Relationships:</strong> We're factory-certified installers for major brands, giving you access to enhanced warranty programs and technical support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Quality Control:</strong> Materials are inspected on delivery for damage, color consistency, and correct quantities before installation begins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Strategic Delivery:</strong> Materials arrive 1-2 days before installation (not weeks in advance exposed to weather and theft).</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-500 mt-6">
                  Explore our{' '}
                  <Link to="/residential-roofing" className="text-zinc-400 hover:text-red-500 underline transition-colors">
                    residential roofing services
                  </Link>
                  {' '}and material options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 04 */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">04</div>
                <h2 className="text-3xl font-bold mb-6">Permitting & Engineering</h2>
                <p className="text-zinc-400 leading-relaxed">
                  We handle all permits, engineering calculations, product approvals, and municipal submittals required for HVHZ compliance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">Engineering Requirements</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Florida requires engineered roof systems. We work with licensed structural engineers to prepare:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Structural Calculations</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Wind load analysis based on roof height, pitch, and exposure category</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Roof zone designation (interior, edge, corner) for fastening patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Uplift resistance calculations ensuring adequate attachment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Deck re-nailing schedule to meet current code (8d ring shank @ 6" o.c.)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Product Approval Submittals</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Miami-Dade NOA documents for all roofing products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Manufacturer installation instructions per product approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Material specifications and technical data sheets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Warranty documentation for building department records</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">Building Permit Process</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  We handle the entire permit application and approval process:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Application Preparation</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Complete permit applications with engineered plans, product approvals, site plans, and contractor licenses assembled for submittal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Plan Review</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Building department reviews plans for code compliance (typically 2-3 weeks). We respond to any review comments or requests for additional information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Permit Issuance</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Approved permit issued by building department. Permit card must be posted at job site and visible from street during construction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Inspection Scheduling</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Final inspection scheduled after installation completion. Inspector verifies code compliance and issues certificate of completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why Permits Matter</h4>
                    <p className="text-zinc-300 mb-4 leading-relaxed">
                      Unpermitted roof work voids your homeowner's insurance coverage and manufacturer warranties. When you sell your home, unpermitted improvements must be disclosed and can kill deals or trigger mandatory replacement at your expense.
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      We pull permits on every job — no exceptions. The permit process ensures third-party verification of code compliance and creates a permanent record that protects your investment and insurability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  We never skip permits or use generic "homeowner permit" shortcuts that transfer liability to you. Our in-house permitting team handles everything from engineering coordination to final inspection scheduling.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Engineering Included:</strong> Permit costs include licensed engineer calculations—we don't charge separately for engineering after contract signing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Fast-Track Processing:</strong> We have established relationships with local building departments that expedite plan reviews and inspection scheduling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Review Comment Response:</strong> If the building department requests changes or clarifications, we handle all responses and resubmittals at no additional cost.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Guaranteed Approval:</strong> Projects don't proceed to installation until permits are fully approved—protecting you from code violations and failed inspections.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 05 */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">05</div>
                <h2 className="text-3xl font-bold mb-6">Site Protection & Preparation</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Comprehensive property protection setup before any roofing work begins.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">Property Protection Measures</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Ground Protection</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Tarps laid around entire perimeter to catch debris</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Plywood shields over AC units, pool equipment, and landscaping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Driveway and walkway protection in work zones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Magnetic sweepers for metal fastener cleanup</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Site Setup</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dump trailers positioned and removed nightly (never blocks driveway)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Material staging area designated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Permit card posted visibly at street</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Safety barriers and warning signs installed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Property protection is where inexperienced contractors cut corners. We invest in professional-grade tarps, plywood shields, and magnetic sweepers—not just tossing a few tarps around the house and hoping for the best.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Complete Perimeter Protection:</strong> Heavy-duty tarps cover the entire work area with 10+ ft extension from drip edge to catch all debris.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Equipment Shields:</strong> AC condensers, pool equipment, and expensive landscaping protected with plywood barriers before work begins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Daily Cleanup:</strong> Magnetic sweepers run multiple times daily, and dump trailers are removed every evening so your driveway is never blocked overnight.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Final Property Inspection:</strong> Project manager walks the entire property with you to ensure zero debris remains before final payment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 06 - Tear-Off */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">06</div>
                <h2 className="text-3xl font-bold mb-6">Tear-Off & Deck Inspection</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Complete removal down to decking with structural verification and hidden damage documentation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">What Happens During Tear-Off</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  All existing roofing materials are removed down to the structural deck. This critical phase reveals hidden damage that can't be detected from the surface and ensures a clean substrate for new installation.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Complete Material Removal</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Shingles, tiles, or metal roofing removed by trained crews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Old underlayment and valley materials stripped away</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Deteriorated flashing and drip edge removed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>All fasteners and nails pulled from deck surface</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Deck Inspection & Documentation</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Every square foot of decking inspected for rot, sag, and damage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Photo documentation of any structural issues discovered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Deck re-nailing per current HVHZ code requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Repairs approved and completed before proceeding</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">Common Issues Discovered During Tear-Off</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Rotted Decking</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Water intrusion from failed underlayment or flashing causes plywood decay. Affected sections must be replaced with new code-compliant decking material.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Inadequate Fastening</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Older roofs installed before current wind codes often have insufficient deck attachment. We re-nail the entire deck at 6" on center per HVHZ requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Truss Damage</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Structural issues with roof framing require licensed structural repairs. Our dual-license (CGC/CCC) allows us to handle these repairs in-house without delays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why This Step Matters</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      Skipping thorough deck inspection leads to callbacks, warranty issues, and premature roof failure. We document every issue and repair it properly before new materials are installed—ensuring your roof has a solid foundation that meets current structural requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Many contractors rush through tear-off to minimize labor costs, missing critical structural issues that lead to problems later. We take the time to do it right.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">100% Deck Inspection:</strong> Every square foot is walked and visually inspected—we don't rely on assumptions or partial inspections.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Photo Documentation:</strong> All structural issues photographed and reviewed with homeowners before repairs proceed—no surprise charges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">In-House Repairs:</strong> As a dual-licensed contractor (CGC & CCC), we handle structural repairs ourselves—maintaining quality control and project timeline.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Code-Compliant Re-Nailing:</strong> We re-nail every deck per current code (8d ring shank @ 6" o.c.)—not just spot repairs like most contractors.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 07 - Underlayment */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">07</div>
                <h2 className="text-3xl font-bold mb-6">Underlayment Installation</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Secondary water barrier installation per HVHZ requirements with enhanced protection in vulnerable areas.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">Underlayment System Installation</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Underlayment serves as the critical secondary water barrier. In HVHZ areas, enhanced underlayment standards prevent water intrusion during extreme weather events.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Self-Adhering Membranes</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Applied to eaves, valleys, and penetrations per code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Seals around fasteners for complete waterproofing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Ice & water shield in critical zones</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Synthetic Underlayment</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>High-strength tear-resistant material across field areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Superior UV resistance during installation delays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Proper overlap and fastening per manufacturer specs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why This Step Matters</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      Underlayment is your roof's last line of defense against water intrusion. When installed correctly with proper overlaps and fastening, it prevents catastrophic leaks even if surface materials are damaged during storms. This is where cheap contractors cut corners—using inferior products or skipping secondary barriers altogether.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Premium Materials:</strong> We specify high-performance synthetic underlayments with NOA approval—never economy felt paper that deteriorates quickly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Enhanced Coverage:</strong> Self-adhering membranes applied beyond minimum code requirements at all vulnerable transition points.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Proper Overlap:</strong> All seams overlapped and sealed per manufacturer specifications—not just lapped and fastened.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 08 - Flashing */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">08</div>
                <h2 className="text-3xl font-bold mb-6">Flashing & Waterproofing</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Critical metal flashing installation at all transitions, penetrations, and vulnerable areas.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">Comprehensive Flashing System</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Proper flashing prevents 90% of roof leaks. We install custom-fabricated metal flashings at every transition point to ensure permanent waterproofing.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Critical Flashing Areas</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Valley flashings with sealed edges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Wall-to-roof transition flashings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Chimney and skylight flashings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Plumbing vent boot replacements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Drip edge at eaves and rakes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Material Selection</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Kynar-coated aluminum or copper options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Corrosion-resistant fasteners throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Professional-grade sealants and caulks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Custom fabrication for complex transitions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why This Step Matters</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      More roofs leak at flashings than at the primary roofing material. Proper metal flashing installation requires skill, experience, and attention to detail. This is where inexperienced crews create problems that don't show up until the first heavy rain—often after they've been paid and moved on.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Skilled Installation:</strong> Flashings installed by experienced lead technicians—not entry-level laborers learning on your roof.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Quality Materials:</strong> Premium Kynar-coated metal flashings that match roof color and resist coastal corrosion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Two-Layer Protection:</strong> Self-adhering membrane under all metal flashings for redundant waterproofing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Photo Documentation:</strong> Every flashing detail photographed before being covered—providing permanent records for warranty and insurance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 09 - Final Installation */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">09</div>
                <h2 className="text-3xl font-bold mb-6">Final Roofing Installation</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Precision installation of finish roofing materials per manufacturer specifications and HVHZ fastening requirements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">HVHZ-Compliant Installation</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Final roofing materials installed following engineered fastening patterns specific to your roof's wind zone, height, and exposure category.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Installation Standards</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Enhanced fastening per engineered plans (perimeter, corners, field zones)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Manufacturer-certified installation methods followed exactly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Ridge ventilation for proper attic airflow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Final sealing and quality inspection of every detail</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-4">Quality Control Checkpoints</h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Daily foreman inspection of work completed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Project manager final walkthrough before calling inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Photo documentation at completion milestones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Homeowner walkthrough before final cleanup</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why This Step Matters</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      A beautiful roof that fails building inspection or doesn't meet manufacturer warranty requirements is worthless. Proper installation following engineered plans ensures your roof performs as designed, passes inspection on the first attempt, and qualifies for full manufacturer warranties—protecting your investment for decades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Factory-Certified Crews:</strong> Our installation teams are manufacturer-certified and regularly trained on latest techniques and product updates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Engineered Fastening:</strong> We follow the exact fastening patterns specified in engineering documents—not generic recommendations from other states.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Three-Level QC:</strong> Foreman, project manager, and building inspector all verify work—catching issues before they become problems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Enhanced Warranties:</strong> Our certified installation qualifies you for extended manufacturer warranties unavailable to standard installations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 10 - Final Inspection */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="text-6xl font-bold text-red-500 mb-6">10</div>
                <h2 className="text-3xl font-bold mb-6">Final Inspection & Walkthrough</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Building department inspection, certificate of completion, and comprehensive project closeout.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-8">Municipal Inspection & Approval</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  The building department conducts a final inspection to verify code compliance before issuing your certificate of completion.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Inspection Scheduling</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        We schedule the final inspection after our internal QC confirms everything meets code. Inspector verifies fastening patterns, product approvals, flashing details, and ventilation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Certificate Issuance</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Upon approval, the building department issues a certificate of completion. This official document proves your roof meets all codes and is required for insurance coverage and future home sales.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Homeowner Walkthrough</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        We conduct a comprehensive walkthrough explaining your new roof system, reviewing warranty documentation, and answering any questions. You receive complete project files including photos, permits, and maintenance guidelines.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-500">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Wind Mitigation Inspection</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        For eligible properties, we coordinate wind mitigation inspection to document HVHZ features that reduce insurance premiums. This inspection can save homeowners 30-60% on wind coverage annually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6">Your Project Completion Package</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Certificate of Completion</strong> from building department</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Manufacturer Warranty Documentation</strong> registered in your name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">All Phase 10-Year Workmanship Warranty</strong> covering installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Complete Photo Documentation</strong> of every phase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Product Approvals & NOA Documents</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Maintenance Guidelines</strong> for optimal roof lifespan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Wind Mitigation Form</strong> (if applicable) for insurance premium reductions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3">Why This Step Matters</h4>
                    <p className="text-zinc-300 leading-relaxed">
                      The certificate of completion proves your roof meets all codes and protects your insurability. Without it, insurance companies can deny claims or cancel policies. Many contractors collect final payment before inspection, leaving homeowners to deal with failed inspections and code violations. We don't collect final payment until you have your certificate in hand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
                <h3 className="text-2xl font-bold mb-6 text-red-500">How All Phase Does It Differently</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Inspection Guarantee:</strong> We don't request final payment until you have certificate of completion in hand—zero risk to homeowner.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Comprehensive Documentation:</strong> Complete project files including before/during/after photos organized for easy reference and warranty claims.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Wind Mitigation Coordination:</strong> We schedule and coordinate wind mit inspections to maximize your insurance savings immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed"><strong className="text-white">Warranty Registration:</strong> All manufacturer warranties registered automatically—most contractors leave this to homeowners who often forget.</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-500 mt-6">
                  Learn about our{' '}
                  <Link to="/roof-repair" className="text-zinc-400 hover:text-red-500 underline transition-colors">
                    roof repair
                  </Link>
                  {' '}and maintenance services to protect your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South Florida-Specific Requirements */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              South Florida-Specific Roofing Requirements
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Roof replacement in Broward and Palm Beach Counties requires compliance with some of the nation's strictest building codes. Here's what makes South Florida different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-6">HVHZ (High Velocity Hurricane Zone) Requirements</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Broward and portions of Palm Beach County fall within the HVHZ, requiring enhanced construction standards designed for 170+ mph wind speeds.
              </p>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Miami-Dade NOA Required:</strong> All products must have Notice of Acceptance approval specific to HVHZ applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Enhanced Fastening Patterns:</strong> More fasteners per square foot based on roof zones (perimeter, corner, field).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Deck Re-Nailing Mandatory:</strong> Existing deck must be re-nailed at 6" on center with 8d ring shank nails.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Secondary Water Barriers:</strong> Self-adhering membranes required at vulnerable areas beyond standard underlayment.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Permits & Inspections</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Florida requires building permits and engineering calculations for all roof replacements—no exceptions for owner-occupied residential properties.
              </p>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Engineered Plans:</strong> Licensed engineer must prepare wind load calculations and fastening schedules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Plan Review:</strong> Building department reviews and approves plans before permit issuance (2-3 weeks typical).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Final Inspection:</strong> Building inspector verifies code compliance before issuing certificate of completion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Certificate Required:</strong> Without final approval, your roof technically fails code and insurance coverage may be voided.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Material Differences: Tile, Metal & Shingle</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Each roofing material has unique HVHZ requirements and performance characteristics suited to South Florida's climate.
              </p>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Tile Roofs:</strong> Require foam adhesive and hurricane clips per NOA. Heavy weight (900-1200 lbs/square) necessitates structural verification.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Metal Roofs:</strong> Standing seam systems offer highest wind ratings (200+ mph). Require specialized fastening clips and thermal expansion provisions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Shingle Roofs:</strong> Architectural shingles with Class 3 or 4 impact ratings preferred. High-wind nail patterns (6 nails per shingle in perimeter zones).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Cool Roof Considerations:</strong> Reflective coatings and light colors reduce attic temperatures and cooling costs in Florida's climate.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Insurance & Code Compliance</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Homeowner's insurance companies in Florida enforce strict roof compliance requirements and inspection protocols.
              </p>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">4-Point Inspections:</strong> Insurance companies require roof condition documentation. Roofs over 15 years old may be difficult to insure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Wind Mitigation Discounts:</strong> HVHZ-compliant installations qualify for 20-60% reductions in wind coverage premiums.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Permitted Work Required:</strong> Unpermitted roof work voids insurance coverage and can result in policy cancellation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed"><strong className="text-white">Claims Documentation:</strong> Proper installation with photos and permits protects your ability to file future storm damage claims.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-3">Why South Florida Requirements Matter</h4>
                <p className="text-zinc-300 leading-relaxed">
                  These requirements aren't bureaucratic red tape—they're proven standards developed after decades of hurricane damage analysis. Homes with properly permitted, HVHZ-compliant roofs consistently outperform non-compliant installations during major storms. The difference between a roof that survives Hurricane season and one that fails often comes down to following these exact specifications. Cutting corners on permits or engineering doesn't just risk code violations—it risks catastrophic failure when you need your roof most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Is This Roof Replacement Process Right for You?
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our comprehensive process is designed for homeowners who want code-compliant, warrantied roofs built to last. Here's who we're the best fit for—and who might be better served elsewhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
              <h3 className="text-2xl font-bold mb-8 text-red-500">This Process Is Perfect For:</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Homeowners planning to stay long-term</p>
                    <p className="text-zinc-400 text-sm">You want a roof that lasts 25-50 years with proper warranties and documentation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Insurance claim projects</p>
                    <p className="text-zinc-400 text-sm">You need thorough documentation, permits, and compliance for insurance approval.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Properties with past leak issues</p>
                    <p className="text-zinc-400 text-sm">You want to identify and fix underlying structural problems during replacement.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Homeowners selling within 5 years</p>
                    <p className="text-zinc-400 text-sm">A new permitted roof with transferable warranties adds significant resale value.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">High-value or luxury homes</p>
                    <p className="text-zinc-400 text-sm">You want premium materials, enhanced warranties, and certified installation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Insurance savings seekers</p>
                    <p className="text-zinc-400 text-sm">You want wind mitigation credits that reduce premiums 20-60% annually.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Detail-oriented homeowners</p>
                    <p className="text-zinc-400 text-sm">You appreciate thorough communication, photo documentation, and transparent processes.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-red-900/50 rounded-xl p-10">
              <h3 className="text-2xl font-bold mb-8 text-zinc-500">This May Not Be For You If:</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-400 font-semibold mb-1">You need installation "next week"</p>
                    <p className="text-zinc-500 text-sm">Our process includes 2-3 weeks for engineering and permits. Rush jobs compromise quality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-400 font-semibold mb-1">Price is your only concern</p>
                    <p className="text-zinc-500 text-sm">We're not the cheapest—we include permits, engineering, and proper materials. You get what you pay for.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-400 font-semibold mb-1">You want to skip permits</p>
                    <p className="text-zinc-500 text-sm">We don't do unpermitted work. It voids insurance and creates legal liability we won't accept.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-400 font-semibold mb-1">You're flipping the property immediately</p>
                    <p className="text-zinc-500 text-sm">If you're selling before the roof is tested by weather, a basic repair might be more cost-effective.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-400 font-semibold mb-1">You want a "quick patch job"</p>
                    <p className="text-zinc-500 text-sm">If you just need targeted repairs, check our <Link to="/roof-repair" className="text-zinc-400 hover:text-red-500 underline">roof repair services</Link> instead.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-400 font-semibold mb-1">You prefer "verbal agreements"</p>
                    <p className="text-zinc-500 text-sm">We document everything—scope, materials, timeline, warranties. No handshake deals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
            <h4 className="text-xl font-bold text-white mb-4">Not Sure Which Option Is Right?</h4>
            <p className="text-zinc-400 mb-6 leading-relaxed max-w-3xl mx-auto">
              We offer free inspections with honest assessments. If repair makes more sense than replacement, we'll tell you. If your roof needs replacement, we'll explain exactly why and what's involved. No pressure, no sales tactics—just experienced guidance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Our Process is Different - Comparison Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Our Process is Different in Broward & Palm Beach
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We don't cut corners on HVHZ requirements. Here's how we compare to typical roofing contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">
              <h3 className="text-2xl font-bold mb-8 text-red-500">All Phase Construction</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Engineered plans and permits on every project</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Product approvals verified before installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Enhanced fastening per HVHZ requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Deck re-nailing to meet current code</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Final inspection and certificate of completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Photo documentation at every phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Manufacturer certifications for enhanced warranties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Dual licensed (CGC/CCC) for structural repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Wind mitigation certifications for lower insurance premiums</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-red-900/50 rounded-xl p-10">
              <h3 className="text-2xl font-bold mb-8 text-zinc-500">Typical Contractor</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Vague scope of work without specific manufacturers or quantities</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Uses whatever products are cheapest or available</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">No manufacturer certifications or relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Relies on subcontractors (low quality control)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Standard fastening patterns (not HVHZ-compliant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Skips deck re-nailing requirement</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Minimal or no photo documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-500">Cannot perform wind mitigation (not dual-licensed)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">The Result:</strong> Vague contracts lead to mismatched materials, subcontractor work results in poor quality control causing brand new roofs to leak, no manufacturer warranties due to lack of certifications, and missing wind mitigation means you pay higher insurance premiums — costing you exponentially more than doing it right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Documentation Section */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Roof Replacement Photo Documentation
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Every project is documented from start to finish. You receive a complete photo record for warranty files and insurance compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documentationPhotos.map((photo, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-900/50 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{photo.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Systems Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Explore Roofing Systems We Install
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              All systems meet or exceed HVHZ requirements with proper product approvals and installation methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roofingSystems.map((system, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-900/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{system.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{system.description}</p>
                <ul className="space-y-3">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zinc-400">
              Common questions about roof replacement in South Florida
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-bold text-white pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready for a Roof Replacement Done the Right Way?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            Schedule a free inspection and receive a detailed proposal with engineered plans, HVHZ-compliant materials, and transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Free Detailed Estimate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>HVHZ Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
