import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function BocaRatonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuickFaq, setOpenQuickFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Boca Raton Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Boca Raton FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Boca Raton FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Boca Raton');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Boca Raton',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // FAQ Schema - All 12 FAQs for rich snippet eligibility
    const allFaqs = [
      ...quickFaqs,
      ...detailedFaqs
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Boca Raton', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, []);

  const roofingConditions = [
    'Tropical storms and seasonal high-wind events',
    'Intense heat and UV exposure accelerating material aging',
    'Heavy rainfall increasing moisture intrusion risks',
    'Common use of tile, metal, shingle, and flat roofing systems'
  ];

  const roofingServices = [
    {
      title: 'Roof Repair',
      description: 'Targeted solutions for leaks, storm damage, and aging components.'
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing systems built to current Florida codes.'
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for South Florida homes.'
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for durability and aesthetics.'
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing options.'
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems for residential and commercial structures.'
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related issues.'
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of water intrusion points and preventative measures.'
    }
  ];

  const commonIssues = [
    'Wind uplift affecting shingles, tiles, and flashing',
    'Water intrusion from compromised underlayment or penetrations',
    'Accelerated material aging due to sun exposure',
    'Installation vulnerabilities revealed during heavy rain events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const quickFaqs = [
    {
      question: 'Do you have a roofing office in Boca Raton?',
      answer: 'Our main office is located in Deerfield Beach, approximately 15 minutes from Boca Raton, allowing us to provide same-day service for emergency repairs and flexible scheduling for planned projects.'
    },
    {
      question: 'How fast can you respond to roof emergencies in Boca Raton?',
      answer: 'We offer same-day emergency response for active leaks and storm damage in Boca Raton. For scheduled inspections and non-emergency repairs, most appointments are available within 2-3 business days.'
    },
    {
      question: 'Do you handle Boca Raton building permits and inspections?',
      answer: 'Yes. We manage all permitting with the City of Boca Raton Building Department, including plan submission, permit fees, required inspections, and final approval documentation.'
    },
    {
      question: 'What roofing systems work best for Boca Raton homes?',
      answer: 'Concrete and clay tile roofs are most common in Boca Raton due to their durability and Mediterranean aesthetic. Metal roofing offers superior hurricane resistance. All systems must meet Florida Building Code wind load requirements for coastal zones.'
    },
    {
      question: 'Are roof inspections free in Boca Raton?',
      answer: 'Yes. We provide complimentary roof inspections for Boca Raton homeowners, including written assessments, photo documentation, and repair/replacement recommendations with no obligation.'
    },
    {
      question: 'Do you work with Boca Raton HOAs?',
      answer: 'Yes. We prepare architectural review packages for HOA approval, coordinate with property management companies, and ensure all materials meet community aesthetic standards and deed restrictions.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should roofs in Boca Raton be inspected?',
      answer: 'Annual inspections are recommended for Boca Raton homes to identify wind damage, deteriorated flashing, and moisture intrusion before they escalate. Post-storm inspections should be conducted immediately after tropical weather events, even if no visible damage is apparent, as wind uplift and water intrusion can occur without obvious exterior signs.'
    },
    {
      question: 'When should I repair versus replace my Boca Raton roof?',
      answer: 'Roof repair is appropriate for isolated damage affecting less than 25% of the roof area, such as broken tiles, minor leaks, or localized wind damage. Full replacement becomes necessary when underlayment integrity is compromised, structural decking shows rot or deterioration, or when repair costs approach 40-50% of replacement cost. Insurance considerations and remaining roof lifespan also factor into this decision.'
    },
    {
      question: 'How much does roof replacement cost in Boca Raton?',
      answer: 'Residential roof replacement in Boca Raton typically ranges from $18,000 to $65,000 depending on roof size, material selection, pitch complexity, and required structural upgrades. Tile roofs generally cost $12-18 per square foot installed, metal roofs $10-16 per square foot, and premium shingle systems $8-12 per square foot. HOA-mandated materials or coastal construction requirements may increase costs.'
    },
    {
      question: 'Does roof replacement reduce insurance premiums in Boca Raton?',
      answer: 'Yes. Installing impact-resistant materials, reinforced roof-to-wall connections, secondary water barriers, and proper hurricane straps can reduce Florida homeowners insurance premiums by 20-45%. We provide completed wind mitigation inspection forms (OIR-B1-1802) documenting these features for submission to your insurance carrier. Our dual CGC/CCC licensing allows us to perform structural upgrades that maximize available discounts.'
    },
    {
      question: 'How long does roof replacement take in Boca Raton?',
      answer: 'Permit approval from the City of Boca Raton typically requires 7-14 business days. Once approved, most residential projects are completed in 3-7 days depending on roof size and weather. HOA approval processes may add 2-4 weeks to the front end of the timeline. We coordinate scheduling to minimize disruption and ensure all required inspections are completed promptly.'
    },
    {
      question: 'Will you help with insurance claims for storm damage in Boca Raton?',
      answer: 'Yes. We provide detailed inspection reports with photo documentation, material specifications, and scope-of-work descriptions formatted for insurance adjuster review. We can meet with adjusters on-site, provide supplemental estimates when initial approvals are insufficient, and coordinate with public adjusters when needed. Our documentation standards meet insurance industry requirements for claim substantiation.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Boca Raton</span>
          </nav>

          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roof Inspections in Boca Raton for Repairs, Replacement & Insurance
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                A professional roof inspection is the first step in determining repair needs, replacement planning, or insurance documentation in Boca Raton. Inspections identify leaks, structural concerns, code compliance issues, and wind mitigation opportunities. Whether addressing visible damage, preparing for storm season, or documenting conditions for insurance purposes, a thorough inspection provides the technical foundation for informed decisions about your roofing system.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Your Trusted Roofing Services Team in Boca Raton
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Our roofing teams regularly serve Boca Raton from our Deerfield Beach location, allowing for efficient scheduling and reliable on-site supervision. This local presence supports familiarity with Boca Raton permitting processes, inspection requirements, and Florida Building Code standards. Each project is approached with attention to wind mitigation, waterproofing, and documentation accuracy.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Considerations Unique to Boca Raton Homes
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Boca Raton's coastal location, upscale architecture, and strict community standards create specific roofing requirements that require specialized knowledge and attention to detail.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Common Roof Types in Boca Raton</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Boca Raton homes predominantly feature tile roofing systems (both clay and concrete), which align with Mediterranean and coastal architectural styles favored in the area. Metal roofing is increasingly common for its hurricane resistance and energy efficiency. Flat and low-slope roofing systems are standard in contemporary designs and commercial properties throughout the city.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Coastal Weather and Wind Exposure</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Proximity to the Atlantic Ocean subjects Boca Raton roofs to salt air, which accelerates corrosion of metal components, fasteners, and flashing. Wind-driven rain during tropical weather events requires enhanced waterproofing protocols. Roofs must be engineered for high wind loads, particularly in coastal zones where building codes mandate stricter attachment methods and impact-resistant materials.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">HOA and Architectural Requirements</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Many Boca Raton neighborhoods enforce strict homeowners association guidelines governing roof color, material type, and visual consistency. Architectural Review Board approval is often required before roofing work begins, adding lead time to project schedules. We coordinate with HOAs throughout the approval process, ensuring material selections meet aesthetic requirements while maintaining code compliance and performance standards.
              </p>

              <ul className="space-y-3">
                {roofingConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Services for Boca Raton Properties
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We provide a full range of roofing services tailored to Boca Raton properties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {roofingServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Roofing Process for Boca Raton Properties
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Every roofing project in Boca Raton follows a structured process designed to meet local permitting requirements, ensure code compliance, and deliver results that protect your property for decades.
              </p>

              <div className="space-y-6">
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">1</span>
                    Initial Inspection and Assessment
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We conduct a comprehensive roof inspection documenting current condition, material age, and compliance with current Florida Building Code requirements. This includes attic ventilation assessment, structural evaluation, and identification of any existing wind mitigation features that may qualify for insurance discounts.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">2</span>
                    HOA Coordination and Material Selection
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    For properties governed by homeowners associations, we prepare architectural submission packages including material specifications, color samples, and installation methods. We guide homeowners through the approval process and coordinate timing to align with HOA review cycles and meeting schedules.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">3</span>
                    Permitting and Code Compliance
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We handle all permitting requirements with the City of Boca Raton Building Department, including plan submission, permit fees, and inspection scheduling. Our dual General Contractor (CGC) and Roofing Contractor (CCC) licenses enable us to perform structural upgrades that roofing-only contractors cannot legally execute in Florida.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">4</span>
                    Installation and Quality Control
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Installation follows manufacturer specifications and Florida Building Code requirements, with particular attention to wind uplift resistance and water intrusion prevention. Daily site supervision ensures workmanship quality, material handling protocols, and jobsite cleanliness standards are maintained throughout the project.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">5</span>
                    Final Inspection and Documentation
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Upon completion, we coordinate required building department inspections and provide comprehensive documentation including permit closeout, warranty information, and wind mitigation forms for insurance submission. Typical Boca Raton roofing projects require 2-4 weeks from permit approval to final inspection, depending on project complexity and weather conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Boca Raton Roofs Commonly Face
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Property owners in Boca Raton often encounter roofing challenges such as:
              </p>
              <ul className="space-y-3">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Boca Raton Homeowners Choose All Phase Construction USA
              </h2>

              <p className="text-zinc-300 leading-relaxed mb-6">
                Our Deerfield Beach headquarters places us within 20 minutes of most Boca Raton properties, allowing for rapid response times, efficient project management, and direct oversight of every installation. This proximity means your project receives consistent attention from the same supervisors and crews familiar with Boca Raton's specific permitting procedures, HOA requirements, and building department protocols.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Dual Licensing and Structural Expertise</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We hold both General Contractor (CGC) and Roofing Contractor (CCC) licenses, a combination held by fewer than 15% of roofing companies in Florida. This dual licensing allows us to perform structural repairs, install hurricane straps, reinforce roof-to-wall connections, and execute other wind mitigation upgrades that can reduce insurance premiums by 20-45%. Roofing-only contractors cannot legally perform these structural improvements under Florida law.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Proven Track Record and Experience</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Since 2009, we've completed over 2,500 roofing projects throughout Palm Beach and Broward Counties, including hundreds of installations in Boca Raton neighborhoods from Boca Pointe to Royal Palm Yacht Club. Our experience spans residential estates, townhome communities, and light commercial properties, with expertise in tile, metal, shingle, and flat roofing systems.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Trust, Longevity, and Professional Standards</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We maintain manufacturer certifications at Platinum and Master Elite levels, qualifying projects for enhanced warranty coverage that standard installations cannot access. Our commitment to transparent pricing, detailed documentation, and professional communication has earned consistent referrals from Boca Raton homeowners, property managers, and insurance professionals who value accountability and technical competence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#27272a] border border-zinc-800 rounded-lg p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Cost Tools for Boca Raton
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                These tools help Boca Raton property owners better understand roofing costs and financing options:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Roof Cost Calculator
                </a>
                <a
                  href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                  className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
                >
                  Payment Estimator
                </a>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Roofing Questions from Boca Raton Homeowners
              </h2>
              <div className="space-y-4">
                {quickFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenQuickFaq(openQuickFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                    >
                      <span className="font-semibold text-white pr-4">{faq.question}</span>
                      {openQuickFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                      )}
                    </button>
                    {openQuickFaq === index && (
                      <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                        <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Roofing FAQs for Boca Raton
              </h2>
              <div className="space-y-4">
                {detailedFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                    >
                      <span className="font-semibold text-white pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                        <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready for Roofing Services in Boca Raton?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a free roof inspection with our South Florida roofing team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
                >
                  Schedule Free Inspection
                </Link>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Free Inspection</span>
                </div>
                <span className="text-zinc-600">•</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>No Obligation</span>
                </div>
                <span className="text-zinc-600">•</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Same-Week Scheduling Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
