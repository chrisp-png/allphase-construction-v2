import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function BoyntonBeachPage() {
  useEffect(() => {
    document.title = 'Boynton Beach Roofing Contractor | Palm Beach County Licensed | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Boynton Beach roofing contractor. Dual-licensed Palm Beach & Broward Counties (CCC-1331464, CGC-1526236). Hunters Run, Aberdeen, Leisureville specialist. Since 2006. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Boynton Beach roofing contractor. Dual-licensed Palm Beach & Broward Counties (CCC-1331464, CGC-1526236). Hunters Run, Aberdeen, Leisureville specialist. Since 2006. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Boynton Beach, roofer Boynton Beach FL, roof replacement Boynton Beach, Boynton Beach roofing company, metal roof Boynton Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Boynton Beach, roofer Boynton Beach FL, roof replacement Boynton Beach, Boynton Beach roofing company, metal roof Boynton Beach';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Boynton Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Boynton Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Boynton Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boynton-beach' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, breadcrumbSchema];
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

  const services = [
    {
      title: 'Residential Roofing',
      description: 'Complete solutions for all Boynton Beach home types — tile, shingle, metal, and flat systems. HOA approval coordination for golf course communities. Special expertise in aging housing stock and salt air coastal environments.'
    },
    {
      title: 'Commercial Roofing',
      description: 'Flat, TPO, modified bitumen, and standing seam metal for Boynton Beach commercial properties. Energy-efficient systems for Palm Beach County properties.'
    },
    {
      title: 'Roof Repair',
      description: 'Emergency and scheduled repairs for leaks, storm damage, salt air corrosion damage, and aging material failures. 24/7 response for active leaks and storm emergencies.'
    },
    {
      title: 'Roof Inspections',
      description: '21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports.'
    },
    {
      title: 'Permitting',
      description: 'Complete Palm Beach County permit application, HVHZ compliance documentation, HOA coordination, inspection scheduling, and final approval — all handled in-house.'
    }
  ];

  const processSteps = [
    {
      title: 'Free Inspection and Estimate',
      description: 'Scheduled within 24 hours. Comprehensive inspection covering surface materials, salt air corrosion assessment, flashing, underlayment, ventilation, deck condition, and structural concerns specific to Boynton Beach\'s coastal environment. Detailed written estimate, no pressure, no hidden fees.'
    },
    {
      title: 'Material Selection and HOA Coordination',
      description: 'Material guidance for Palm Beach County\'s coastal wind requirements and HOA standards. Salt-resistant metal, concrete and clay tile for golf communities, impact-resistant shingles, TPO for flat applications.'
    },
    {
      title: 'Professional Installation with Permits',
      description: 'All Phase handles all Palm Beach County permitting, HVHZ compliance documentation, and HOA architectural review coordination. Complete tear-off, deck inspection, your approval before any additional structural repairs proceed.'
    },
    {
      title: 'Final Inspection and Warranty',
      description: 'Comprehensive final inspection, full warranty documentation, and wind mitigation certification — potentially reducing homeowners insurance premiums significantly.'
    }
  ];

  const faqs = [
    {
      question: 'Do you handle HOA approvals for golf communities like Hunters Run and Quail Ridge?',
      answer: 'Yes — HOA coordination is a core service for Boynton Beach projects. We prepare all documentation, coordinate with architectural review committees, and ensure material selections meet community guidelines before work begins. We\'ve worked with Hunters Run, Aberdeen, Cypress Creek Country Club, and similar communities throughout the area.'
    },
    {
      question: 'What roofing materials work best against salt air corrosion near the Intracoastal and Atlantic?',
      answer: 'Corrosion-resistant standing seam metal with Kynar coatings, concrete tile with protective sealants, and premium coastal-rated roofing systems outperform standard materials significantly in Boynton Beach\'s salt air environment. Standard materials that perform adequately inland can fail years earlier with constant Atlantic and Gulf Stream exposure.'
    },
    {
      question: 'How do Palm Beach County permits differ from Broward County?',
      answer: 'Palm Beach County maintains separate building code requirements and permit processes. Many contractors licensed only in Broward encounter delays or compliance issues in Boynton Beach. All Phase Construction USA holds active licenses in both counties — we know Palm Beach County\'s specific requirements, preventing project delays and ensuring full code compliance.'
    },
    {
      question: 'Do you work with insurance companies for storm damage claims?',
      answer: 'Yes — comprehensive photo documentation, damage assessments, and detailed repair estimates to support your claim. We meet with adjusters on-site and have nearly two decades of experience navigating Florida insurance processes.'
    },
    {
      question: 'What\'s the typical timeline for roof replacement in Boynton Beach?',
      answer: 'Shingle replacements typically take 1-3 days. Tile installations run 3-7 days for average residential properties given weight considerations. Metal installations 2-5 days. We provide accurate timelines during your free inspection.'
    },
    {
      question: 'Which Boynton Beach neighborhoods do you serve?',
      answer: 'All of Boynton Beach — Hunters Run, Aberdeen, Pine Tree Golf Club, Quail Ridge Country Club, Cypress Creek Country Club, Melrose Park, Golfview Harbour, Downtown Boynton, Renaissance Commons, Leisureville, Valencia communities, The Club, Palm Chase Lakes, Tropical Breeze, Meadows, Heart of Boynton, Knollwood, Manor Forest, San Castle, and every neighborhood within the city.'
    }
  ];

  const testimonials = [
    {
      name: 'Michael R.',
      location: 'Boynton Beach Homeowner',
      text: 'Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!'
    },
    {
      name: 'Jennifer L.',
      location: 'Palm Beach County',
      text: 'We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship.'
    },
    {
      name: 'David S.',
      location: 'Commercial Property Owner',
      text: 'All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience.'
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Boynton Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in Boynton Beach, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA has served Boynton Beach homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), licensed in both Palm Beach County and Broward County, we bring capabilities to every Boynton Beach roofing project that standard roofing-only contractors cannot match. From the luxury golf course estates of Hunters Run and Aberdeen to the canal-front homes of Golfview Harbour and the 55+ communities of Leisureville and Valencia — our team delivers comprehensive roofing solutions engineered for Palm Beach County's coastal climate and demanding code requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Dual-License Advantage: CGC and CCC
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Most Boynton Beach roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems beneath the surface — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. That means delays, coordination headaches, split warranties, and cost overruns.
              </p>
              <p>
                In aging neighborhoods like Heart of Boynton, San Castle, and Manor Forest where original roofs are well past their service life, structural issues beneath the surface are the rule, not the exception. All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. We inspect deck fastening patterns, assess truss integrity, verify roof-to-wall connections, and confirm full Florida Building Code compliance before the first new material goes down.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Palm Beach County Coastal Environment
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Boynton Beach sits on the Atlantic coast where the Gulf Stream runs close to shore — giving the city some of the best diving and fishing on the East Coast, and giving your roof some of the most demanding conditions in South Florida. Salt air corrosion from constant Atlantic and Intracoastal exposure accelerates fastener and flashing degradation on any roofing system not specifically specified for coastal environments.
              </p>
              <p>
                The flat terrain extending west toward Loxahatchee National Wildlife Refuge creates unobstructed wind corridors that amplify storm forces across the city. Palm Beach County's coastal zone enforces strict HVHZ-equivalent wind load standards — requiring every roofing installation to be engineered for 175+ mph wind resistance with enhanced fastening schedules, HVHZ-approved materials, and engineered roof-to-wall connections.
              </p>
              <p>
                All Phase Construction USA holds active licenses in Palm Beach County — not just Broward — meaning we know this jurisdiction's specific permit requirements, inspection processes, and building department expectations. Many Broward-only contractors encounter delays or compliance issues when working in Boynton Beach. We don't.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Golf Course Communities and HOA Expertise
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Boynton Beach is home to one of South Florida's highest concentrations of luxury golf course communities — <strong>Hunters Run</strong> (3 championship courses, mandatory country club membership), <strong>Aberdeen</strong> (18-hole, 24+ subdivisions), <strong>Pine Tree Golf Club</strong> (Dick Wilson-designed, gated), <strong>Quail Ridge Country Club</strong> (2 courses), and <strong>Cypress Creek Country Club</strong> all maintain strict architectural guidelines governing roofing materials, colors, and installation methods. <strong>Melrose Park's</strong> gated estates with 4,000+ square foot homes on acre-plus lots add another tier of luxury specification.
              </p>
              <p>
                All Phase Construction USA navigates HOA architectural review processes, prepares all required documentation, and coordinates directly with review committees — ensuring your new roof meets both community standards and Palm Beach County code requirements simultaneously.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Boynton Beach Neighborhoods We Serve
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves the full range of Boynton Beach's residential and commercial properties. In the luxury golf corridor — Hunters Run, Aberdeen, Pine Tree Golf Club, Quail Ridge Country Club, Cypress Creek Country Club, and Melrose Park — tile roofing dominates and HOA approval is mandatory on every project. <strong>Golfview Harbour's</strong> canal-front properties and <strong>Downtown Boynton's</strong> Intracoastal-adjacent revitalization zone require salt-resistant materials and corrosion-resistant fastening systems.
              </p>
              <p>
                <strong>Renaissance Commons</strong> offers resort-style condo living where flat roofing expertise matters. The 55+ communities of <strong>Leisureville</strong> (3 clubhouses), <strong>Valencia, The Club,</strong> and <strong>Palm Chase Lakes</strong> represent significant flat roofing and modified bitumen demand. Family neighborhoods including <strong>Meadows, Knollwood,</strong> and <strong>Manor Forest</strong> offer well-maintained 1980s housing stock.
              </p>
              <p>
                <strong>Heart of Boynton</strong> and <strong>San Castle</strong> represent the city's original residential core — 1950s-60s ranch homes well into replacement cycles where structural surprises beneath aging shingles are common. Loxahatchee National Wildlife Refuge borders the city to the west, its open sawgrass and cypress swamp creating the unobstructed wind exposure that makes proper HVHZ installation non-negotiable throughout Boynton Beach.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services for Boynton Beach Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Flexible Financing Available
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Flexible financing including credit-based and non-credit-based options. Insurance claim coordination — we work directly with adjusters to maximize your coverage. Use our Roof Cost Calculator for a preliminary estimate.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              What Boynton Beach Homeowners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <div className="mb-4">
                    <div className="flex text-red-500 mb-2">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-white font-semibold">— {testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Boynton Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <div className="mb-6">
                <p className="text-zinc-400 text-sm mb-2">Licensed & Insured</p>
                <h3 className="text-xl font-bold text-white">All Phase Construction USA</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
                <div>
                  <span className="text-white font-semibold">FL CCC License:</span> CCC-1331464
                </div>
                <div>
                  <span className="text-white font-semibold">FL CGC License:</span> CGC-1526236
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Call (754) 227-5605 or Request Free Estimate
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Licensed in both Palm Beach County and Broward County. Serving all of Boynton Beach from our Deerfield Beach headquarters since 2006.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Request Free Estimate
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
                <span>Dual Licensed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Palm Beach & Broward Counties</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Since 2006</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
