import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PlantationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Plantation FL Roofing Contractor | HVHZ Certified | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Plantation FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Hawk\'s Landing, Plantation Acres, Jacaranda Country Club since 2006. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Plantation FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Hawk\'s Landing, Plantation Acres, Jacaranda Country Club since 2006. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Plantation, roofer Plantation FL, roof replacement Plantation, Plantation roofing company, best roofer in Plantation, shingle roof Plantation');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Plantation, roofer Plantation FL, roof replacement Plantation, Plantation roofing company, best roofer in Plantation, shingle roof Plantation';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Plantation');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Plantation',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Plantation', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/plantation' }
    ]);

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    [localBusinessSchema, breadcrumbSchema].forEach(schema => {
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
      description: "Complete solutions for Plantation homes — tile, shingle, metal, and flat systems, all HVHZ compliant with manufacturer warranties. HOA approval coordination included.",
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Commercial Roofing',
      description: "Flat, TPO, modified bitumen, and standing seam metal roofs for Plantation retail centers, office buildings along University Drive and Broward Boulevard, and industrial facilities. Minimal disruption to operations.",
      path: '/commercial-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair',
      description: "Emergency and scheduled repairs for leaks, storm damage, missing shingles, and debris impact damage. 24/7 response for active leaks and storm emergencies.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Roof Inspections',
      description: "21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports with prioritized repair recommendations.",
      path: '/roof-inspection/',
      icon: Shield
    },
    {
      title: 'Permitting',
      description: "Complete permit application and processing, Florida Building Code and HVHZ compliance, HOA approval coordination, inspection scheduling, and final approval documentation — all handled by our team.",
      path: '/contact/',
      icon: Building2
    }
  ];

  const processSteps = [
    {
      title: 'Free Inspection and Estimate',
      description: "Scheduled within 24 hours. Thorough inspection covering sagging sections, damaged flashing, deteriorated underlayment, debris impact damage, and hidden water damage. Detailed written estimate, no pressure, no hidden fees."
    },
    {
      title: 'Material Selection and Insurance Assistance',
      description: "Full photo documentation for insurance claims. Material selection guidance for Plantation's climate and HOA standards — reflective metal roofing that reduces cooling costs 10-25%, impact-resistant shingles, or community-approved tile."
    },
    {
      title: 'Professional Installation with Permits',
      description: "All Phase Construction USA handles all permitting, HVHZ compliance documentation, and HOA approval coordination. Complete tear-off, deck inspection, and your approval before any additional structural repairs proceed."
    },
    {
      title: 'Final Inspection and Warranty',
      description: "Comprehensive final inspection, full warranty documentation, and wind mitigation certification — potentially reducing homeowners insurance premiums by up to 40%."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-License Advantage',
      description: "Most Plantation roofing contractors hold only a CCC license — authorizing them to install and repair roof surfaces, but nothing more. All Phase Construction USA's CGC license (CGC-1526236) authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability."
    },
    {
      title: 'HVHZ Certified',
      description: "Every installation meets Florida's most demanding wind load standards — engineered to withstand 175+ mph wind speeds with ring-shank nails at enhanced 6-inch fastening schedules, high-wind rated shingles, and engineered roof-to-wall connections."
    },
    {
      title: 'Nearly Two Decades of Experience',
      description: "Serving Plantation homeowners and businesses since 2006 — nearly two decades of roofing excellence delivered from our Deerfield Beach headquarters."
    },
    {
      title: 'HOA Approval Coordination',
      description: "We navigate Plantation's strict HOA guidelines in communities like Hawk's Landing, Jacaranda Country Club, and Jacaranda Cay — ensuring your new roof satisfies both HVHZ code and community standards simultaneously."
    },
    {
      title: 'Flexible Financing',
      description: "Credit-based and non-credit-based financing options with competitive rates. Use our Roof Cost Calculator for a preliminary estimate."
    }
  ];

  const nearbyCities = [
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl/' },
    { name: 'Davie', path: '/roofing-contractor-davie-fl/' },
    { name: 'Sunrise', path: '/roofing-contractor-sunrise-fl/' },
    { name: 'Weston', path: '/roofing-contractor-weston-fl/' },
    { name: 'Lauderhill', path: '/roofing-contractor-lauderhill-fl/' }
  ];

  const faqs = [
    {
      question: 'How long does roof replacement take in Plantation?',
      answer: "Most residential replacements complete in 1-3 days. We minimize disruption to your property and communicate throughout."
    },
    {
      question: 'What roofing materials work best in Plantation\'s climate?',
      answer: "Impact-resistant shingles, metal roofing (175+ mph rated standing seam systems), and HVHZ-approved concrete or clay tile all perform well. HOA guidelines in communities like Hawk's Landing and Jacaranda Country Club also factor into material selection — we help you find the option that satisfies both code and community standards."
    },
    {
      question: 'Do you help with insurance claims for storm damage?',
      answer: "Yes. We document damage thoroughly with photos and detailed reports, and our nearly two decades of experience with Broward County adjusters means faster approvals for you."
    },
    {
      question: 'How often should Plantation roofs be inspected?',
      answer: "Annually, plus after any named storm event. Regular inspections catch minor issues — debris impact damage, flashing gaps, sealant wear — before they become major repairs."
    },
    {
      question: 'Which Plantation neighborhoods do you serve?',
      answer: "All of Plantation — Hawk's Landing, Plantation Acres, Plantation Isles, Jacaranda Country Club, Jacaranda Cay, Plantation Park, and every neighborhood within city limits, plus surrounding Broward County communities."
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
            <span className="text-white">Plantation</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in Plantation, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA has served Plantation homeowners and businesses since 2006 — nearly two decades of roofing excellence delivered from our Deerfield Beach headquarters, just a short drive east. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring capabilities to every Plantation roofing project that standard roofing-only contractors simply cannot match. Whether you own a luxury estate in Hawk's Landing, an equestrian property in Plantation Acres, or a commercial building along University Drive, our team delivers comprehensive roofing solutions engineered for South Florida's demands.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Certified</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspections</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Locally Owned</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Plantation
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
                Most Plantation roofing contractors hold only a CCC license — authorizing them to install and repair roof surfaces, but nothing more. The moment they uncover structural issues — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop work and bring in a separate general contractor. That means delays, coordination headaches, split warranties, and cost overruns.
              </p>
              <p>
                All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. During every Plantation roof replacement, we inspect deck fastening patterns, assess truss integrity, verify roof-to-wall connections, and confirm full Florida Building Code compliance before the first new shingle goes down.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Plantation Neighborhoods We Serve
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves the full range of Plantation's residential and commercial properties. <strong>Hawk's Landing</strong>, the luxury gated community west of Jacaranda Golf Club, features 550+ estate homes ranging from 3,000 to 9,000 square feet — high-end tile and metal roofing systems with 24-hour security and HOA approval requirements on all exterior work.
              </p>
              <p>
                <strong>Plantation Acres</strong>, the city's equestrian community with large lots and ranch-style homes, borders the Everglades and faces the unobstructed wind exposure that comes with it. <strong>Plantation Isles</strong> features waterfront homes with private docks where Intracoastal proximity demands corrosion-resistant fastener and flashing systems.
              </p>
              <p>
                <strong>Jacaranda Country Club</strong> and <strong>Jacaranda Cay</strong> offer golf course-adjacent properties where tile roofing dominates and community design guidelines are strictly enforced. <strong>Plantation Park</strong> provides affordable single-family housing stock entering replacement cycles.
              </p>
              <p>
                The Plantation Historical Museum, Plantation Preserve Golf Course and Linear Park — which runs alongside 55 acres of Everglades-adjacent wetlands — and the Equestrian Center at Volunteer Park define the community character of a city that takes both its green spaces and its standards seriously.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                High Velocity Hurricane Zone — 175+ MPH Wind Ratings
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Plantation sits fully within South Florida's High Velocity Hurricane Zone, where every roofing installation must meet Florida's most demanding wind load standards — engineered to withstand 175+ mph wind speeds. Plantation's western border meets the Everglades, and the flat terrain between the coast and the Everglades creates unobstructed wind corridors that accelerate storm-force winds across the city. We use ring-shank nails at enhanced 6-inch fastening schedules, high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame. Every installation passes Broward County building department inspection on the first attempt.
              </p>
            </div>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Plantation's Tree Canopy and HOA Requirements</h3>
              <p className="text-zinc-400 leading-relaxed">
                Plantation was designated a "Tree City USA" by the Arbor Day Foundation — the city's oak-lined streets and mature canopy are a point of civic pride. That canopy also means debris impact is a real roofing concern after every storm: branches, limbs, and windblown material accelerate surface wear on shingles and tile. Plantation's strict exterior standards — including HOA guidelines in communities like Hawk's Landing, Jacaranda Country Club, and Jacaranda Cay — require roofing material and color selections to be coordinated with community standards alongside HVHZ code requirements. Our team navigates both simultaneously on every project.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our Plantation Roofing Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Plantation
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Full-service residential and commercial roofing — from repairs to complete replacements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center text-red-500 font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              What Plantation Homeowners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"
                </p>
                <p className="text-white font-semibold">— Michael R.</p>
                <p className="text-zinc-500 text-sm">Plantation Homeowner</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship."
                </p>
                <p className="text-white font-semibold">— Jennifer L.</p>
                <p className="text-zinc-500 text-sm">Broward County</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience."
                </p>
                <p className="text-white font-semibold">— David S.</p>
                <p className="text-zinc-500 text-sm">Commercial Property Owner</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Plantation Homeowners Choose All Phase Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Plantation Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Plantation zip codes including: 33311, 33312, 33313, 33317, 33322, 33323, 33324, 33325, 33388, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Plantation, we provide roofing services throughout Broward County:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {nearbyCities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 text-center text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/locations/"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Plantation"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
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
              Serving all of Plantation from our Deerfield Beach headquarters — protecting South Florida properties since 2006.
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
                <span>HVHZ Certified</span>
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
