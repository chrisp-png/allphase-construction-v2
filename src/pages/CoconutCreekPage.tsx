import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function CoconutCreekPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Coconut Creek FL Roofing Contractor | HVHZ Certified | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Coconut Creek FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Chamber member. Serving Wynmoor, Winston Park, Regency Lakes since 2006. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Coconut Creek FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Chamber member. Serving Wynmoor, Winston Park, Regency Lakes since 2006. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Coconut Creek, roofer Coconut Creek FL, roof replacement Coconut Creek, Coconut Creek roofing company, best roofer in Coconut Creek');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Coconut Creek, roofer Coconut Creek FL, roof replacement Coconut Creek, Coconut Creek roofing company, best roofer in Coconut Creek';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Coconut Creek');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Coconut Creek',
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
      { name: 'Coconut Creek', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/coconut-creek' }
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
      description: 'Complete solutions for Coconut Creek homes — tile, shingle, metal, and flat systems, all HVHZ compliant. Special expertise in canal-adjacent moisture management and aging housing stock replacements. HOA approval coordination included.'
    },
    {
      title: 'Flat Roof Repair and Replacement',
      description: 'Core specialty for Wynmoor, Regency Lakes, and other condo communities. TPO, EPDM, and modified bitumen systems with proper drainage design. HOA and property management coordination on every job.'
    },
    {
      title: 'Commercial Roofing',
      description: 'Flat, TPO, modified bitumen, and standing seam metal for Coconut Creek commercial properties throughout the Promenade corridor and surrounding districts. Minimal disruption to operations.'
    },
    {
      title: 'Roof Repair',
      description: 'Emergency and scheduled repairs for leaks, storm damage, and moisture-related deterioration. 24/7 response for active leaks.'
    },
    {
      title: 'Roof Inspections',
      description: '21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports.'
    },
    {
      title: 'Wind Mitigation Certifications',
      description: 'Form A and Form B certifications documenting wind-resistant features — potentially reducing homeowners insurance premiums 20-40%.'
    },
    {
      title: 'Permitting',
      description: 'Complete permit application, HVHZ compliance documentation, inspection scheduling, and final approval — all handled in-house.'
    }
  ];

  const testimonials = [
    {
      name: 'Michael R.',
      location: 'Coconut Creek Homeowner',
      text: 'Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!'
    },
    {
      name: 'Jennifer L.',
      location: 'Broward County',
      text: 'We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship.'
    },
    {
      name: 'David S.',
      location: 'Commercial Property Owner',
      text: 'All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience.'
    }
  ];

  const nearbyCities = [
    { name: 'Coral Springs', path: '/roofing-contractor-coral-springs-fl/' },
    { name: 'Margate', path: '/roofing-contractor-margate-fl/' },
    { name: 'Pompano Beach', path: '/roofing-contractor-pompano-beach-fl/' },
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl/' },
    { name: 'Parkland', path: '/roofing-contractor-parkland-fl/' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl/' }
  ];

  const faqs = [
    {
      question: 'How do you handle Coconut Creek\'s humidity and moisture challenges?',
      answer: 'We select materials rated for high-humidity environments — algae-resistant shingles, Kynar-coated metal, TPO membranes — and install enhanced ventilation systems. Coconut Creek\'s canal system and adjacent wetlands create conditions that generic material selections can\'t handle long-term. Our approach addresses the elevated decay rates experienced in canal-adjacent properties throughout the city.'
    },
    {
      question: 'What\'s the best roofing material for homes near Coconut Creek\'s canals?',
      answer: 'Metal roofing with Kynar 500 coatings performs best for direct moisture exposure near the Hillsboro Canal system. Algae-resistant architectural shingles deliver strong performance at better price points. For flat roof applications in communities like Wynmoor and Regency Lakes, TPO membranes offer superior reflectivity and moisture resistance.'
    },
    {
      question: 'Do you work on flat roofs in Wynmoor and other 55+ communities?',
      answer: 'Yes — flat roof systems for Coconut Creek\'s condo communities are a core specialty. We understand HOA requirements, work with property management companies, and have extensive experience with Wynmoor\'s 7,000+ units and Regency Lakes\' 9 subdivisions.'
    },
    {
      question: 'How quickly can you respond to storm damage?',
      answer: '24/7 emergency response throughout Coconut Creek from our Deerfield Beach headquarters. Most emergency calls receive same-day service to secure the property. Emergency tarping within hours, permanent repair once conditions allow.'
    },
    {
      question: 'Do you help with insurance claims?',
      answer: 'Yes — full documentation, adjuster meetings, and detailed estimates. Nearly two decades of Broward County experience means faster approvals. Wind mitigation certifications can reduce premiums 20-40% going forward.'
    },
    {
      question: 'How can I verify your licensing?',
      answer: 'Florida Certified Roofing Contractor CCC-1331464 and Certified General Contractor CGC-1526236 are both verifiable through the Florida DBPR website at myfloridalicense.com.'
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
            <span className="text-white">Coconut Creek</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in Coconut Creek, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA has served Coconut Creek homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters at 590 Goolsby Blvd. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring capabilities to every Coconut Creek roofing project that standard roofing-only contractors cannot match. As proud members of the Coral Springs Coconut Creek Regional Chamber of Commerce, we're not just a contractor serving this community — we're invested in it. Whether you own a single-family home in Winston Park, a condo in Wynmoor, or commercial property near the Coconut Creek Promenade, our team delivers comprehensive roofing solutions engineered for this community's unique demands.
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
                Most Coconut Creek roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems beneath the surface — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. In a city where 60%+ of homes exceed 30-40 years on original roofs, that happens on nearly every complete roof replacement. That means delays, coordination headaches, split warranties, and cost overruns.
              </p>
              <p>
                All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. We inspect deck fastening patterns, assess truss integrity, verify roof-to-wall connections, and confirm full Florida Building Code compliance before the first new material goes down.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              HVHZ and Moisture Management
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Coconut Creek sits fully within South Florida's High Velocity Hurricane Zone, where every roofing installation must withstand 175+ mph wind speeds. But Coconut Creek adds a layer of complexity that most Broward cities don't face: the community is built around an extensive canal system with adjacent wetlands — creating year-round humidity conditions that accelerate algae growth on shingles, wood rot in decking and fascia, and persistent moisture intrusion risks.
              </p>
              <p>
                Properties near the Hillsboro Canal and the wetland habitats surrounding Butterfly World — the world's largest butterfly aviary — experience measurably higher decay rates than inland Broward properties. We address both challenges simultaneously: HVHZ-compliant fastening and wind engineering, plus material selections specifically chosen for high-humidity canal-adjacent environments. Every installation passes Broward County building department inspection on the first attempt.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Butterfly Capital of the World — and More
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Coconut Creek earned the nickname "Butterfly Capital of the World" and was the first city in Florida certified as a Community Wildlife Habitat — a designation that reflects the city's commitment to its natural environment. Tradewinds Park & Stables, at 625 acres one of Broward County's largest parks, anchors the western end of the city. The Coconut Creek Promenade — a LEED-certified open-air shopping and dining district that received the Florida APA Award of Excellence for design — and Seminole Casino Coconut Creek define the city's MainStreet corridor. Fern Forest Nature Center preserves 247 acres of native plant communities including 30+ fern species.
              </p>
              <p>
                This environmental consciousness extends to roofing material selection — we help homeowners choose reflective, energy-efficient systems that align with the community's green values.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Coconut Creek Neighborhoods We Serve
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves the full range of Coconut Creek's residential and commercial properties. <strong>Wynmoor</strong>, the premier 55+ gated community with 7,000+ condo units across multiple subdivisions, represents the city's largest flat roofing concentration — TPO, EPDM, and modified bitumen systems with HOA coordination and property management communication on every project. <strong>Regency Lakes</strong>, the gated master community with 717 units across 9 subdivisions, features newer construction with HOA approval requirements.
              </p>
              <p>
                <strong>Winston Park</strong>, known for its family-friendly environment and strong schools, offers single-family homes from the 1980s-1990s now entering replacement cycles. <strong>Coral Gate</strong> provides canal-front waterfront homes where moisture management is the primary roofing concern. <strong>Banyan Trails</strong> represents the early 2000s development wave with lakes adjacent to most homes. <strong>Palm Beach Farms</strong> and <strong>Cocoplum</strong> round out the residential spectrum.
              </p>
              <p>
                Commercial properties throughout the Promenade corridor, Seminole Casino district, and surrounding business areas require flat and metal roofing systems meeting full HVHZ standards.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services for Coconut Creek Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Materials for Coconut Creek's Climate
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <p className="text-zinc-400 leading-relaxed mb-6">
                Metal roofing with Kynar-coated standing seam panels — best performer for canal-adjacent moisture exposure, 50+ year lifespan, 175+ mph rated, superior corrosion resistance. Algae-resistant architectural shingles with Class 4 impact ratings for pitched roofs at accessible price points. Tile roofing for communities with HOA aesthetic requirements — structural verification included given tile weight. TPO membranes (30-60 mil) with 85% reflectivity for condo and commercial flat roof applications.
              </p>
              <p className="text-zinc-400 text-sm">
                Certified installer status with GAF, CertainTeed, Owens Corning, TAMKO, Eagle Roofing, Boral, FT Synthetics, Johns Manville, and Firestone.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              What Coconut Creek Homeowners Say
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

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Flexible Financing Available
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Flexible financing including credit-based and non-credit-based options. Insurance claim coordination — we work directly with adjusters to maximize your coverage. Use our Roof Cost Calculator for a preliminary estimate.
              </p>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Coconut Creek"
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
              Proud members of the Coral Springs Coconut Creek Regional Chamber of Commerce. Serving all of Coconut Creek from our Deerfield Beach headquarters since 2006.
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
