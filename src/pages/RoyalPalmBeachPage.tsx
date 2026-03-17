import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function RoyalPalmBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Royal Palm Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Royal Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Royal Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Royal Palm Beach, roofer Royal Palm Beach FL, roof replacement Royal Palm Beach, RPB roofing company, best roofer Royal Palm Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Royal Palm Beach, roofer Royal Palm Beach FL, roof replacement Royal Palm Beach, RPB roofing company, best roofer Royal Palm Beach';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Royal Palm Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Royal Palm Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Royal Palm Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/royal-palm-beach' }
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
      description: "Popular throughout Royal Palm Beach. Quality concrete and clay tile installations built for Florida's climate and suburban aesthetics.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Growing choice for Royal Palm Beach homeowners seeking energy efficiency, durability, and lower cooling costs.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Reliable architectural shingles for Royal Palm Beach's diverse neighborhoods — affordable and built to last.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern flat roofing systems for Royal Palm Beach commercial properties and contemporary home designs.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert repairs extending Royal Palm Beach roof lifespans. Includes required 5-year certification letters for insurance.",
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Retail centers, office buildings, and commercial properties throughout Royal Palm Beach and western Palm Beach County.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Intense Heat & UV',
      description: "Royal Palm Beach's western Palm Beach County location means full sun exposure year-round. UV radiation and heat degrade roofing materials faster here than most of the country. We install products rated for extreme exposure."
    },
    {
      title: 'Hurricane Season',
      description: "While inland from the coast, Royal Palm Beach still faces hurricane-force winds and tropical storms from June through November. We engineer roofing systems to handle high winds and storm conditions — code minimums aren't enough."
    },
    {
      title: 'Heavy Rainfall',
      description: "South Florida's summer brings daily afternoon thunderstorms and heavy rainfall. Proper drainage, quality underlayment, and correct installation prevent the water intrusion problems common with substandard work."
    },
    {
      title: 'HOA Guidelines',
      description: "Many Royal Palm Beach communities have HOA requirements for roofing materials, colors, and appearance. We're familiar with local HOA standards and can help navigate approval processes."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we discover structural damage or rotted decking, we have the licensing and expertise to fix it right."
    },
    {
      title: 'Western Palm Beach Experts',
      description: "We've completed hundreds of projects throughout Royal Palm Beach and western Palm Beach County. We understand local building codes, weather patterns, and what roofing systems perform best in this area."
    },
    {
      title: 'Honest & Transparent',
      description: "Every job includes detailed photo documentation, clear pricing with no hidden fees, permit compliance, wind mitigation forms, and manufacturer warranties. You'll know exactly what's happening at every stage."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to maintain your insurance coverage and avoid the policy non-renewal crisis affecting Florida homeowners."
    }
  ];

  const nearbyCities = [
    { name: 'West Palm Beach', path: '/locations/west-palm-beach' },
    { name: 'Wellington', path: '/locations/wellington' },
    { name: 'Greenacres', path: '/locations/greenacres' },
    { name: 'Loxahatchee', path: '/locations/loxahatchee' },
    { name: 'Palm Springs', path: '/locations/palm-springs' },
    { name: 'Lake Worth', path: '/locations/lake-worth' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Royal Palm Beach?',
      answer: 'Roof replacement costs in Royal Palm Beach typically range from $10,000 to $45,000+ depending on size, material, and complexity. Shingle roofs are the most budget-friendly option. Tile roofs cost more but last 50+ years. Metal roofing offers excellent value for energy efficiency. We provide free inspections and detailed written estimates.'
    },
    {
      question: 'What roofing material is best for Royal Palm Beach homes?',
      answer: 'For Royal Palm Beach, tile roofing is a popular choice that handles Florida\'s climate well. Architectural shingles are more affordable and perform well with proper installation. Metal roofing is growing in popularity for energy savings. We\'ll assess your specific property and recommend the best option during your free inspection.'
    },
    {
      question: 'Do you pull permits for roofing work in Royal Palm Beach?',
      answer: 'Yes, always. Royal Palm Beach requires permits for roof replacements, and we handle all permit applications, inspection scheduling, and compliance documentation. You\'ll receive complete records for your property files and insurance requirements.'
    },
    {
      question: 'How long does a roof replacement take in Royal Palm Beach?',
      answer: 'Most Royal Palm Beach residential roof replacements take 2-4 days depending on size and material. Shingle roofs are typically faster than tile installations. Larger homes may require additional time. We provide a detailed timeline before starting work and keep you informed throughout the project.'
    },
    {
      question: 'Do you work with insurance companies for storm damage?',
      answer: 'We provide comprehensive documentation for insurance claims including damage assessments, detailed scope of work, and post-repair documentation with photos. This gives you everything needed to submit a successful claim, though we don\'t negotiate directly with insurance companies on pricing.'
    },
    {
      question: 'Can you help with HOA approval in Royal Palm Beach?',
      answer: 'Yes. We can provide material specifications, color samples, manufacturer documentation, and installation details for your HOA submission. We\'re familiar with requirements in most Royal Palm Beach communities and can help navigate the approval process.'
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
            <span className="text-white">Royal Palm Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Royal Palm Beach, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Professional roofing services for Royal Palm Beach — serving western Palm Beach County's planned community.
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
                Schedule Free Inspection in Royal Palm Beach
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
              Your Trusted Roofer in Royal Palm Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Royal Palm Beach and nearby communities. For over 20 years, All Phase Construction has been serving Royal Palm Beach homeowners and businesses with professional roofing services. Royal Palm Beach is a planned community in western Palm Beach County with approximately 40,000 residents. Incorporated in 1959, this suburban city features family-friendly neighborhoods, parks, and a mix of housing from starter homes to larger family estates.
              </p>
              <p>
                Royal Palm Beach faces typical South Florida roofing challenges: intense year-round sun exposure and heat, hurricane threats during storm season, heavy summer rainfall and afternoon thunderstorms, and HOA requirements in many neighborhoods. While further inland than coastal communities, your roof still faces conditions demanding proper materials and expert installation.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/tile-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and remaining life, a <Link to="/metal-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate energy-efficient systems, or a <Link to="/flat-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial buildings to detect membrane deterioration early.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Florida Code Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Code Requirements in Royal Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Royal Palm Beach is in Palm Beach County, which has strict building codes designed for Florida's hurricane climate. While not in Broward's HVHZ, your roof must meet comprehensive requirements including:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Wind Load Engineering</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Roofing systems must meet wind load requirements based on your property's location and roof design. We engineer and install to meet these standards.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Proper Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Nail patterns, underlayment requirements, flashing details, and fastener specifications must meet Florida code. We follow manufacturers' specs and local standards.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Permits & Inspections</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Royal Palm Beach requires permits and inspections for roof replacements. We handle all applications and ensure your project passes inspection the first time.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Royal Palm Beach homeowners need roofers who understand Florida's building codes and install roofs that can handle what hurricane season brings — not contractors taking shortcuts."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Royal Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Complete residential and commercial roofing services — from repairs to full replacements.
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
                What Royal Palm Beach Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Florida's climate is demanding on roofs. Here's what we see:
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
              Why Royal Palm Beach Homeowners Choose All Phase Construction
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
                Royal Palm Beach Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve Royal Palm Beach zip codes 33411 and 33421, plus all surrounding western Palm Beach County communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Royal Palm Beach, we provide roofing services throughout Palm Beach and Broward Counties:
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
            city="Royal Palm Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Royal Palm Beach Homeowners
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
              Ready for a Free Roof Inspection in Royal Palm Beach?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and give you honest recommendations — no pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
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
