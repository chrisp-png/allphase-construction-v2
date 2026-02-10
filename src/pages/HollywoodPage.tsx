import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function HollywoodPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Hollywood Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hollywood FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Hollywood FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Hollywood FL, roofer Hollywood Florida, roof replacement Hollywood, Hollywood roofing company, best roofer in Hollywood, Hollywood Beach roofing');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Hollywood FL, roofer Hollywood Florida, roof replacement Hollywood, Hollywood roofing company, best roofer in Hollywood, Hollywood Beach roofing';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Hollywood');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Hollywood',
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
      { name: 'Hollywood', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/hollywood' }
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
      title: 'Tile Roofing',
      description: "Classic tile roofing for Hollywood's Mediterranean and Spanish-style architecture. Built for coastal conditions and HVHZ wind requirements.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Corrosion-resistant metal roofing ideal for Hollywood's salt air environment. Energy efficient with 50+ year performance.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "High-wind architectural shingles for Hollywood's diverse neighborhoods — from beachside to downtown. HVHZ compliant and built to last.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial flat roofing throughout Hollywood's business districts. TPO, PVC, and modified bitumen for retail, office, and industrial properties.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Extending roof life for Hollywood properties with targeted repairs and restoration. 5-year certification letters when roofs qualify.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Full-service commercial roofing from Hollywood Beach to the western neighborhoods. Buildings of all sizes and types.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Coastal to Inland Variations',
      description: "Hollywood stretches from the Atlantic Ocean to west of I-95, meaning properties face different conditions. Beachfront homes need marine-grade materials, while inland properties deal with heat and UV exposure. We adjust our approach based on your property's location."
    },
    {
      title: 'Historic Preservation',
      description: "Downtown Hollywood and the Historic District have architectural guidelines that must be respected. We work within these requirements while upgrading roofs to modern HVHZ standards."
    },
    {
      title: 'Diverse Building Ages',
      description: "Hollywood has everything from 1920s historic homes to brand new developments. Each era of construction requires different approaches to bring roofs up to current hurricane codes."
    },
    {
      title: 'High Density Development',
      description: "Hollywood's urban areas have tight lot spacing and limited access. We plan logistics carefully to minimize disruption to neighbors while maintaining safety and quality standards."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When roof damage reveals structural issues, we fix everything under one contract."
    },
    {
      title: 'Coastal & Urban Experience',
      description: "We've worked throughout Hollywood — from beachfront condos to historic downtown homes to suburban neighborhoods near Hard Rock Stadium. We understand the city's diverse roofing needs."
    },
    {
      title: 'Local Knowledge',
      description: "Based in nearby Deerfield Beach, we know Hollywood's neighborhoods, building departments, and permitting processes. We're close enough for quick response and follow-up service."
    },
    {
      title: '5-Year Certification Letters',
      description: "For qualifying roofs, we provide certification letters under Florida Statute 627.7011 to help protect your insurance coverage from age-based non-renewals."
    }
  ];

  const nearbyCities = [
    { name: 'Hallandale Beach', path: '/roofing-contractor-hallandale-beach-fl' },
    { name: 'Pembroke Pines', path: '/roofing-contractor-pembroke-pines-fl' },
    { name: 'Davie', path: '/roofing-contractor-davie-fl' },
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl' },
    { name: 'Miramar', path: '/roofing-contractor-miramar-fl' },
    { name: 'Aventura', path: '/roofing-contractor-aventura-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Hollywood?',
      answer: "Roof replacement costs in Hollywood typically range from $12,000 to $30,000+ for residential properties, depending on size, material, height, and location. Beachfront properties often require enhanced corrosion protection. Historic properties may have additional requirements. We provide free inspections and detailed quotes."
    },
    {
      question: 'Do beachfront homes in Hollywood need special roofing?',
      answer: "Yes. Properties near the ocean require marine-grade fasteners, enhanced corrosion protection, and materials specifically rated for salt air exposure. Standard inland fasteners will corrode quickly in coastal conditions. We use the appropriate materials based on your distance from the ocean."
    },
    {
      question: 'Can you work on historic homes in downtown Hollywood?',
      answer: "Yes. We regularly work in Hollywood's Historic District and understand the architectural guidelines. We can upgrade roofs to modern HVHZ standards while respecting the historic character of these properties. We handle all required approvals and documentation."
    },
    {
      question: 'What type of roof is best for Hollywood homes?',
      answer: "It depends on your home's style and location. Tile roofs suit Mediterranean and Spanish Revival homes common in Hollywood. Architectural shingles work well for mid-century and modern homes. Metal roofing is increasingly popular for durability and energy efficiency. All must meet HVHZ requirements."
    },
    {
      question: 'How long does a roof replacement take in Hollywood?',
      answer: "Most residential roof replacements take 1-2 days for shingle roofs, 2-3 days for tile. Timeline can vary based on property size, access constraints in dense neighborhoods, and weather. We provide a specific schedule during your free inspection."
    },
    {
      question: 'Do you handle commercial properties in Hollywood?',
      answer: "Yes. We work on commercial buildings throughout Hollywood — from small retail shops on Hollywood Boulevard to large commercial properties near the airport. We have the licensing, insurance, and experience for commercial roofing projects of any size."
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
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Hollywood</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Hollywood, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Professional roofing for Hollywood's diverse neighborhoods — from beachfront to downtown to western suburbs.
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
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Hollywood
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
              Your Trusted Roofer in Hollywood
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Hollywood and nearby communities. Hollywood is one of Broward County's largest and most diverse cities. Stretching from the Atlantic Ocean west past I-95, Hollywood encompasses beachfront properties, a historic downtown, dense urban neighborhoods, and sprawling suburban developments. This diversity means Hollywood roofs face a wide range of conditions.
              </p>
              <p>
                We've worked throughout Hollywood for over 20 years — from beachfront homes along the Broadwalk to historic properties downtown, from high-rise condos on Hollywood Beach to family homes in the western neighborhoods near Pembroke Pines. Each area has different roofing needs, and we bring the right approach to every project.
              </p>
              <p>
                Hollywood's building stock ranges from 1920s Mediterranean Revival homes requiring <Link to="/tile-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">specialized tile roof inspection</Link> to assess historic materials, to beachfront properties needing <Link to="/metal-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to detect salt air corrosion, to modern commercial buildings benefiting from <Link to="/flat-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection and evaluation</Link> to identify membrane deterioration early.
              </p>
              <p>
                Whether you own a beachfront condo, a downtown historic home, or a suburban property near the Hard Rock, we have the experience and materials to protect your investment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Hollywood Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Hollywood is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Materials</h3>
                <p className="text-zinc-400 leading-relaxed">
                  All roofing materials must have specific Florida Product Approvals for HVHZ use. Coastal properties require additional corrosion resistance ratings.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Fastener patterns, wind uplift calculations, and attachment methods must meet HVHZ standards. Beachfront properties require marine-grade components.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  HVHZ projects require detailed permit applications, wind load calculations, and inspection documentation. We handle all of it.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Hollywood stretches from the ocean inland. Whether you're beachfront or miles inland, HVHZ requirements still apply. Hurricane winds affect the entire city."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Hollywood
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Complete roofing services throughout Hollywood — residential, historic, and commercial properties.
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Hollywood Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Hollywood's size and diversity create unique roofing challenges:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Hollywood Property Owners Choose All Phase Construction
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
                Hollywood Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Hollywood zip codes including: 33019, 33020, 33021, 33023, 33024, 33025, 33026, 33027, 33028, 33029, 33083, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Hollywood, we provide roofing services throughout Broward County:
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
                to="/locations"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Hollywood"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Hollywood Property Owners
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

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for a Free Roof Inspection in Hollywood?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and give you honest recommendations — no pressure, no obligation.
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
  );
}
