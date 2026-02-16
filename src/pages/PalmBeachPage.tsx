import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PalmBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Palm Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Palm Beach, roofer Palm Beach FL, luxury roofing Palm Beach, historic estate roofing, Palm Beach roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Palm Beach, roofer Palm Beach FL, luxury roofing Palm Beach, historic estate roofing, Palm Beach roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Palm Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Palm Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Palm Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/palm-beach' }
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
      description: "Premium tile roofing for Palm Beach's historic estates. Clay and concrete tile installations that honor architectural heritage while providing modern hurricane protection.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "High-end standing seam metal roofing for Palm Beach's contemporary estates. Marine-grade materials engineered for oceanfront luxury properties.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Premium architectural shingles for Palm Beach properties requiring specific aesthetic requirements or budget considerations.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern flat roofing systems for Palm Beach's contemporary architectural designs and multi-level estates.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert restoration of historic roofs and preservation of architectural details on Palm Beach's landmark properties.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "High-end commercial roofing for Palm Beach's exclusive clubs, retail establishments, and luxury properties.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Historic Preservation',
      description: "Many Palm Beach properties are historic landmarks or located in preservation districts. We understand the requirements for maintaining architectural integrity while modernizing roof systems to current hurricane standards."
    },
    {
      title: 'Oceanfront Exposure',
      description: "Palm Beach Island sits between the Atlantic Ocean and Lake Worth Lagoon. Salt air from both sides accelerates material degradation. We use marine-grade materials and specialized installation techniques proven in this demanding environment."
    },
    {
      title: 'Luxury Market Standards',
      description: "Palm Beach homeowners expect absolute perfection. From material quality to installation precision to job site management, we deliver the level of craftsmanship and professionalism that matches the island's luxury market."
    },
    {
      title: 'Architectural Review Requirements',
      description: "The Town of Palm Beach and many estates have strict architectural review processes. We provide complete documentation, material specifications, and historical context to navigate approval requirements successfully."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). Historic properties often reveal structural challenges requiring comprehensive expertise beyond basic roofing."
    },
    {
      title: 'Luxury Market Experience',
      description: "We've worked on South Florida's most exclusive properties for over 20 years. We understand the expectations, the materials, the craftsmanship, and the discretion required in markets like Palm Beach."
    },
    {
      title: 'Comprehensive Documentation',
      description: "Every project includes extensive photo documentation, detailed material specifications, manufacturer certifications, wind mitigation forms, architectural drawings when required, and warranty documentation that protects your estate's value."
    },
    {
      title: 'Discretion & Excellence',
      description: "Our crews are experienced in ultra-luxury communities. We maintain absolute professionalism, respect privacy, ensure job site security, and deliver work that meets the exacting standards of Palm Beach properties."
    }
  ];

  const nearbyCities = [
    { name: 'West Palm Beach', path: '/roofing-contractor-west-palm-beach-fl/' },
    { name: 'Palm Beach Gardens', path: '/roofing-contractor-palm-beach-gardens-fl/' },
    { name: 'Lake Worth', path: '/roofing-contractor-lake-worth-fl/' },
    { name: 'North Palm Beach', path: '/roofing-contractor-north-palm-beach-fl/' },
    { name: 'Manalapan', path: '/roofing-contractor-manalapan-fl/' },
    { name: 'South Palm Beach', path: '/roofing-contractor-south-palm-beach-fl/' }
  ];

  const faqs = [
    {
      question: 'How much does roofing cost for Palm Beach estates?',
      answer: 'Luxury roofing projects in Palm Beach typically range from $100,000 to $500,000+ depending on estate size, material selection, architectural complexity, historic preservation requirements, and oceanfront considerations. We provide comprehensive proposals with detailed specifications and project timelines.'
    },
    {
      question: 'Do you have experience with historic Palm Beach properties?',
      answer: 'Yes. We have extensive experience working on historic estates and properties within preservation districts. We understand the Town of Palm Beach\'s architectural review processes and can provide the documentation and craftsmanship required for landmark properties.'
    },
    {
      question: 'What roofing materials are appropriate for Palm Beach estates?',
      answer: 'Palm Beach estates typically feature premium clay tile, slate, copper, or standing seam metal roofing. Material selection depends on architectural style, historic designation, and specific property requirements. We work with the finest materials and can source specialty products for restoration projects.'
    },
    {
      question: 'How do you handle privacy and security on Palm Beach properties?',
      answer: 'We understand the privacy and security expectations in Palm Beach. Our crews are background-checked, professionally trained, and experienced in ultra-luxury communities. We coordinate with estate managers, maintain strict site security, and ensure complete discretion throughout the project.'
    },
    {
      question: 'Do you work with estate managers and property managers?',
      answer: 'Yes. We regularly work with estate managers, property managers, and owner representatives. We provide detailed communication, comprehensive documentation, and the professionalism expected when working with luxury property management teams.'
    },
    {
      question: 'Can you provide references from other Palm Beach properties?',
      answer: 'Yes, we can provide references from luxury properties throughout Palm Beach County, while respecting our clients\' privacy. We have extensive experience in South Florida\'s most exclusive communities and can demonstrate our capabilities and professionalism.'
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
            <span className="text-white">Palm Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Palm Beach, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Elite roofing services for Palm Beach's legendary estates — where historic architecture meets modern hurricane engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Florida Licensed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Historic Properties</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Luxury Estates</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Consultation in Palm Beach
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
              Your Trusted Roofer in Palm Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Palm Beach and nearby communities. Palm Beach is one of South Florida's most exclusive barrier island communities, known for luxury estates, historic architecture, and strict building and aesthetic standards. With direct ocean exposure, constant coastal winds, and salt air, roofing systems in Palm Beach must be designed and installed to the highest level of performance and precision.
              </p>
              <p>
                Property owners in Palm Beach rely on experienced, dual-licensed roofing contractors who understand coastal construction requirements, historic considerations, and the importance of premium materials and workmanship.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">comprehensive roof inspection</Link> to evaluate your roof's condition and compliance, explore <Link to="/tile-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection services</Link> for historic estates, or review <Link to="/metal-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection options</Link> for coastal durability assessment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Conditions Unique to Palm Beach
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Coastal Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Impact on Palm Beach Roofs</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Direct ocean exposure</td>
                        <td className="py-3 px-4">Accelerated wear from salt air</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High wind environment</td>
                        <td className="py-3 px-4">Increased uplift and fastening demands</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Historic & luxury homes</td>
                        <td className="py-3 px-4">Strict material and design requirements</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Hurricane risk</td>
                        <td className="py-3 px-4">Enhanced installation standards required</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Insurance scrutiny</td>
                        <td className="py-3 px-4">Roof condition heavily impacts premiums</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Roofing Services for Palm Beach Properties</h3>
                <p>
                  Roofing projects in Palm Beach often require specialized planning, premium materials, and close attention to detail to meet both performance and aesthetic expectations.
                </p>
                <p>
                  Our roofing services in Palm Beach include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Clay and concrete tile roofing systems</li>
                  <li>Metal roofing for coastal durability and longevity</li>
                  <li>Roof repair and restoration for storm-related damage</li>
                  <li>Full roof replacements for luxury estates</li>
                  <li>Flat and specialty roofing systems where applicable</li>
                </ul>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Coastal Exposure & Roof Longevity on Palm Beach Island</h3>
                <p>
                  Roofs in Palm Beach face constant stress from wind, salt, and moisture. Proper underlayment systems, fastening methods, ventilation, and material selection are essential to protecting high-value properties from premature failure.
                </p>
                <p>
                  Many Palm Beach homeowners begin by reviewing roofing options and estimating costs early in the planning process, especially when coordinating projects with insurance requirements and long-term property protection goals.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                  Florida Code Compliant
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Roofing Code, Permitting & Compliance in Palm Beach
                </h2>
              </div>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  As a barrier island community, Palm Beach enforces strict permitting and inspection standards in accordance with Florida Building Code and local regulations. Roofing installations must meet enhanced requirements for wind uplift resistance, material approval, and documentation.
                </p>
                <p>
                  Working with a dual-licensed roofing contractor helps ensure roofing projects are completed correctly, efficiently, and in full compliance with all applicable standards.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Comprehensive luxury roofing services for Palm Beach's most exclusive properties.
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
                Palm Beach Roofing Considerations
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Luxury estates face unique challenges requiring specialized expertise:
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
              Why Palm Beach Property Owners Choose All Phase Construction
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
                Palm Beach Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve Palm Beach zip codes 33480 and all properties on Palm Beach Island and surrounding luxury communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Palm Beach, we provide roofing services throughout Palm Beach County's luxury communities:
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
            city="Palm Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Palm Beach Property Owners
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
              Ready to Discuss Your Palm Beach Roofing Project?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation. We'll assess your estate's roofing needs and provide expert recommendations with complete discretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Consultation
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
                <span>Luxury Market Expertise</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Discretion Guaranteed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Historic Property Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
