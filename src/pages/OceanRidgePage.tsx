import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function OceanRidgePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Ocean Ridge Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ocean Ridge FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ocean Ridge FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Ocean Ridge, roofer Ocean Ridge FL, roof replacement Ocean Ridge, oceanfront roofing Ocean Ridge, Ocean Ridge roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Ocean Ridge, roofer Ocean Ridge FL, roof replacement Ocean Ridge, oceanfront roofing Ocean Ridge, Ocean Ridge roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Ocean Ridge');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Ocean Ridge',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Ocean Ridge', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/ocean-ridge' }
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
      description: "Premium concrete and clay tile systems for Ocean Ridge's upscale coastal homes. Engineered for salt air and hurricane resistance.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "High-performance standing seam metal roofing with marine-grade coatings for Ocean Ridge's oceanfront properties.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Premium architectural shingles for Ocean Ridge homes requiring versatility and proven coastal performance.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern flat roofing systems for Ocean Ridge's contemporary coastal homes and low-slope designs.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert restoration and repair to protect Ocean Ridge's valuable beachfront investments.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Specialized roofing for Ocean Ridge's limited commercial properties and town facilities.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Direct Atlantic Exposure',
      description: "Ocean Ridge sits directly on the Atlantic Ocean with beachfront properties facing constant salt spray and coastal winds. We use marine-grade materials and specialized fasteners to combat accelerated corrosion and material degradation."
    },
    {
      title: 'Hurricane Wind Forces',
      description: "Ocean Ridge's beachfront location means direct exposure to hurricane-force winds and storm surge. Every roof we install is engineered for extreme wind events — your coastal property deserves more than minimum code compliance."
    },
    {
      title: 'Premium Property Standards',
      description: "Ocean Ridge homeowners expect exceptional quality. From material selection to installation details to post-project cleanup, we deliver the level of service and craftsmanship that matches your property's caliber."
    },
    {
      title: 'Town Code Requirements',
      description: "Ocean Ridge has specific building standards and architectural requirements. We handle all permit applications, code compliance, and inspection coordination for your peace of mind."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When oceanfront properties reveal structural damage or decking issues, we have the licensing and expertise to address them."
    },
    {
      title: 'Coastal Roofing Specialists',
      description: "We've completed hundreds of oceanfront and coastal roofing projects throughout Palm Beach County. We understand what materials and installation techniques work in Ocean Ridge's demanding environment."
    },
    {
      title: 'Complete Documentation',
      description: "Every project includes extensive photo documentation, detailed material specifications, manufacturer certifications, wind mitigation forms, and warranty documentation — everything your insurance and property records require."
    },
    {
      title: 'Professionalism & Discretion',
      description: "Our crews are experienced in upscale communities. We maintain job site cleanliness, respect your property and neighbors, and deliver the professionalism expected in Ocean Ridge."
    }
  ];

  const nearbyCities = [
    { name: 'Boynton Beach', path: '/roofing-contractor-boynton-beach-fl' },
    { name: 'Lantana', path: '/roofing-contractor-lantana-fl' },
    { name: 'Gulf Stream', path: '/roofing-contractor-gulf-stream-fl' },
    { name: 'Briny Breezes', path: '/roofing-contractor-briny-breezes-fl' },
    { name: 'Manalapan', path: '/roofing-contractor-manalapan-fl' },
    { name: 'Delray Beach', path: '/roofing-contractor-delray-beach-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Ocean Ridge?',
      answer: 'Roof replacement costs in Ocean Ridge typically range from $25,000 to $85,000+ depending on size, material selection, oceanfront requirements, and architectural complexity. Coastal properties require specialized materials and installation techniques. We provide detailed proposals with complete specifications.'
    },
    {
      question: 'What roofing materials work best for Ocean Ridge oceanfront homes?',
      answer: 'For Ocean Ridge beachfront properties, we typically recommend premium concrete tile with corrosion-resistant fasteners, or standing seam metal roofing with marine-grade coatings. Both materials handle direct salt air exposure while providing superior wind resistance and longevity. We\'ll assess your specific property during consultation.'
    },
    {
      question: 'Do you pull permits for roofing work in Ocean Ridge?',
      answer: 'Yes, always. Ocean Ridge requires permits for roof replacements, and we handle all applications, inspections, and compliance documentation. You\'ll receive complete records for your property files and insurance requirements.'
    },
    {
      question: 'How long does a roof replacement take in Ocean Ridge?',
      answer: 'Most Ocean Ridge residential roof replacements take 3-7 days depending on size, material, and complexity. Tile roofs and oceanfront properties typically require additional time. We provide detailed timelines before beginning work and keep you informed throughout.'
    },
    {
      question: 'How do you protect against salt air damage?',
      answer: 'Salt air protection starts with proper material selection — corrosion-resistant fasteners, marine-grade flashings, and appropriate underlayment. We also ensure proper ventilation and drainage to prevent moisture accumulation. Regular inspections can catch early signs of corrosion before they become major issues.'
    },
    {
      question: 'Do you have experience with Ocean Ridge oceanfront properties?',
      answer: 'Yes. We\'ve completed numerous oceanfront projects in Ocean Ridge and throughout Palm Beach County\'s coastal communities. We understand the unique challenges of beachfront roofing and the materials and techniques required for long-term performance.'
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
            <span className="text-white">Ocean Ridge</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Ocean Ridge, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Elite oceanfront roofing services for Ocean Ridge's exclusive coastal community — where the Atlantic Ocean meets premium craftsmanship.
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
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Ocean Ridge
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
              Your Trusted Roofer in Ocean Ridge
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Ocean Ridge and nearby communities. Ocean Ridge is a small, upscale coastal town located between Boynton Beach and Gulf Stream in southern Palm Beach County. With approximately 2,000 residents and primarily beachfront properties, Ocean Ridge represents some of the most desirable real estate in South Florida. For over 20 years, All Phase Construction has been the trusted roofing contractor for Ocean Ridge's oceanfront homes and coastal properties.
              </p>
              <p>
                Oceanfront roofing in Ocean Ridge demands specialized expertise. Direct Atlantic Ocean exposure means constant salt spray, accelerated corrosion on metal components, hurricane-force wind threats, and UV degradation that happens faster than inland areas. Standard roofing materials and generic installation techniques fail prematurely in this environment.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/tile-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and remaining life, a <Link to="/metal-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate energy-efficient systems, or a <Link to="/flat-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial buildings to detect membrane deterioration early.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Florida Code Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Code Requirements in Ocean Ridge
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                While Ocean Ridge is in Palm Beach County (not Broward's High Velocity Hurricane Zone), oceanfront properties face extreme conditions requiring strict engineering standards including:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Hurricane Engineering</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Ocean Ridge beachfront properties require engineering for extreme wind events. We don't install to minimum code — we install for real-world hurricane conditions.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Marine-Grade Materials</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every component — from fasteners to flashings to underlayment — is selected with salt air corrosion in mind. Standard materials fail quickly in oceanfront environments.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Complete Compliance</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Full permit compliance, inspection coordination, and documentation that protects your property's value and satisfies all insurance requirements.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Ocean Ridge oceanfront properties need more than basic code compliance. They need roofing systems engineered for direct Atlantic exposure and hurricane-force winds."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Ocean Ridge
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Premium oceanfront roofing services — from repairs to complete replacements.
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
                What Ocean Ridge Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Oceanfront properties face extreme challenges requiring specialized expertise:
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
              Why Ocean Ridge Homeowners Choose All Phase Construction
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
                Ocean Ridge Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve Ocean Ridge zip code 33435 and all surrounding Palm Beach County oceanfront communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Ocean Ridge, we provide roofing services throughout Palm Beach and Broward Counties:
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
                to="/service-areas"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Ocean Ridge"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Ocean Ridge Homeowners
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
              Ready for a Free Roof Inspection in Ocean Ridge?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and provide expert recommendations — no pressure, no obligation.
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
