import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Droplets } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function NorthPalmBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'North Palm Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'North Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'North Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor North Palm Beach, roofer North Palm Beach FL, roof replacement North Palm Beach, North Palm Beach roofing company, roof repair North Palm Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor North Palm Beach, roofer North Palm Beach FL, roof replacement North Palm Beach, North Palm Beach roofing company, roof repair North Palm Beach';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('North Palm Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'North Palm Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'North Palm Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/north-palm-beach' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in North Palm Beach be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in North Palm Beach should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in North Palm Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in North Palm Beach require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in North Palm Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in North Palm Beach due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in North Palm Beach even without visible damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact."
          }
        }
      ]
    };

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    [localBusinessSchema, breadcrumbSchema, faqSchema].forEach(schema => {
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
      title: 'Roof Repair',
      description: "Focused repairs addressing leaks, storm damage, and aging components in North Palm Beach properties.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: "Complete roofing system replacements built to current Florida Building Code standards for North Palm Beach.",
      path: '/residential-roofing',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: "Wind-rated shingle systems suitable for South Florida homes in North Palm Beach.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: "Clay and concrete tile systems designed for durability and longevity in North Palm Beach conditions.",
      path: '/tile-roofing',
      icon: Shield
    },
    {
      title: 'Metal Roofing',
      description: "Long-lasting, wind-resistant metal roofing solutions for North Palm Beach properties.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: "Low-slope roofing systems designed for proper drainage and sealing in North Palm Beach.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: "Prompt response for active leaks or storm-related damage throughout North Palm Beach.",
      path: '/roofing-services/roof-repair',
      icon: Wind
    },
    {
      title: 'Leak Detection & Prevention',
      description: "Identification of moisture entry points and preventative solutions for North Palm Beach roofs.",
      path: '/roof-inspection',
      icon: Droplets
    }
  ];

  const challenges = [
    {
      title: 'Wind Uplift Impact',
      description: "Wind exposure impacts shingles, tiles, flashing, and edge details throughout North Palm Beach properties, requiring proper attachment and wind-rated materials."
    },
    {
      title: 'Water Intrusion Risk',
      description: "Heavy rainfall and wind-driven rain create water intrusion challenges at penetrations, valleys, and roof transitions in North Palm Beach homes."
    },
    {
      title: 'Accelerated Material Aging',
      description: "Prolonged sun exposure and intense UV radiation accelerate material aging in North Palm Beach, reducing roofing system lifespan."
    },
    {
      title: 'Installation Vulnerabilities',
      description: "Installation quality issues can be revealed during heavy rain events, making proper installation critical for North Palm Beach properties."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-Licensed Credentials',
      description: "We hold both General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) licenses, supporting roofing and structural expertise for North Palm Beach projects."
    },
    {
      title: 'South Florida Experience',
      description: "Extensive experience with South Florida roofing conditions, coastal influence, and tropical weather exposure affecting North Palm Beach properties."
    },
    {
      title: 'Code-Compliant Installation',
      description: "All roofing work follows Florida Building Code requirements with proper permitting, inspections, and documentation for North Palm Beach projects."
    },
    {
      title: 'Insurance Documentation',
      description: "Insurance-defensible inspection reports and project documentation supporting claims and coverage requirements for North Palm Beach homeowners."
    }
  ];

  const nearbyCities = [
    { name: 'West Palm Beach', path: '/locations/deerfield-beach/service-area/west-palm-beach' },
    { name: 'Palm Beach Gardens', path: '/locations/deerfield-beach/service-area/palm-beach-gardens' },
    { name: 'Jupiter', path: '/locations/deerfield-beach/service-area/jupiter' },
    { name: 'Lake Worth Beach', path: '/locations/deerfield-beach/service-area/lake-worth-beach' },
    { name: 'Royal Palm Beach', path: '/locations/deerfield-beach/service-area/royal-palm-beach' },
    { name: 'Greenacres', path: '/locations/deerfield-beach/service-area/greenacres' }
  ];

  const businessFaqs = [
    {
      question: 'Do you have a roofing office in North Palm Beach?',
      answer: "Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout North Palm Beach and surrounding Palm Beach County communities."
    },
    {
      question: 'How fast can you respond to roof issues in North Palm Beach?',
      answer: "Our proximity to North Palm Beach allows for efficient response times and flexible scheduling. We typically respond to emergency situations within 24-48 hours and can schedule routine inspections within the same week."
    },
    {
      question: 'Do you pull permits in North Palm Beach?',
      answer: "Yes. We handle all permitting requirements and coordinate inspections in accordance with local and state requirements for North Palm Beach projects."
    },
    {
      question: 'What roofing systems work best in North Palm Beach?',
      answer: "Tile, metal, wind-rated shingle, and properly installed flat roofing systems all perform well in North Palm Beach conditions. The best choice depends on your property type, budget, and specific requirements."
    },
    {
      question: 'Are roof inspections free in North Palm Beach?',
      answer: "Yes. Free roof inspections are available for North Palm Beach property owners to assess roof condition and identify any issues."
    }
  ];

  const technicalFaqs = [
    {
      question: 'How often should roofs in North Palm Beach be inspected?',
      answer: "Roofs in North Palm Beach should be inspected annually and after major storms to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in North Palm Beach?',
      answer: "Yes, most roofing projects in North Palm Beach require permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in North Palm Beach?',
      answer: "Metal and tile roofing systems typically provide the longest lifespan in North Palm Beach due to their durability and wind resistance."
    },
    {
      question: 'Can heavy rain cause roof leaks in North Palm Beach even without visible damage?',
      answer: "Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact."
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
            <Link to="/locations" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">North Palm Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                North Palm Beach, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Dependable roofing services for residential and light commercial properties throughout North Palm Beach. From detailed repairs to full replacements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Florida Building Code Compliant</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspections</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Dual Licensed</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Trusted Roofing Services Team in North Palm Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA provides dependable roofing services throughout North Palm Beach for residential and light commercial properties. From detailed roof repairs to full roof replacements, our team supports North Palm Beach property owners with consistent service and technical oversight.
              </p>
              <p>
                Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather exposure, coastal influence, and Florida Building Code compliance. Our roofing teams regularly serve North Palm Beach with crews dispatched from our Deerfield Beach office.
              </p>
              <p>
                This regional coverage allows for efficient scheduling and familiarity with North Palm Beach permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture control, and accurate documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Conditions Unique to North Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Roofing systems in North Palm Beach are influenced by coastal and inland South Florida conditions that impact long-term performance:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tropical Storm Exposure</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Tropical storms and seasonal wind exposure require wind-rated materials and proper installation throughout North Palm Beach.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intense UV Radiation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Intense heat and UV radiation accelerate material aging in North Palm Beach, reducing roofing system lifespan without proper materials.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Heavy Rainfall</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Heavy rainfall increases water intrusion risks at penetrations, valleys, and transitions in North Palm Beach roofing systems.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Diverse Roofing Systems</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Common roofing systems in North Palm Beach include shingle, tile, metal, and flat roofs, each requiring specialized expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for North Palm Beach Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Full range of roofing services tailored to North Palm Beach residential and commercial properties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <p className="text-zinc-400 mb-4 leading-relaxed text-sm">{service.description}</p>
                    <div className="flex items-center text-red-500 font-medium text-sm">
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
                What North Palm Beach Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Property owners in North Palm Beach often encounter these roofing challenges:
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
              Why North Palm Beach Homeowners Choose All Phase Construction USA
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

          <EmbeddedRoofCalculator
            city="North Palm Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from North Palm Beach Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {businessFaqs.map((faq, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for North Palm Beach
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {technicalFaqs.map((faq, index) => (
                <div
                  key={index + businessFaqs.length}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === (index + businessFaqs.length) ? null : (index + businessFaqs.length))}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === (index + businessFaqs.length) ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === (index + businessFaqs.length) && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to North Palm Beach, we provide roofing services throughout Palm Beach County:
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

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Roofing Services in North Palm Beach?
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
  );
}
