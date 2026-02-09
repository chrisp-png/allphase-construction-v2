import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Calculator, DollarSign, ChevronDown, ChevronUp, Wrench, Home, Shield, Droplet, CloudRain, Sun, Wind, AlertTriangle } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function HallandaleBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Hallandale Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hallandale Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Hallandale Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Hallandale Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Hallandale Beach',
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
      { name: 'Hallandale Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/hallandale-beach' }
    ]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should roofs in Hallandale Beach be inspected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roofs in Hallandale Beach should be inspected annually and after major storms to identify early signs of damage."
            }
          },
          {
            "@type": "Question",
            "name": "Are permits required for roofing work in Hallandale Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, most roofing projects in Hallandale Beach require permits and inspections to meet Florida Building Code standards."
            }
          },
          {
            "@type": "Question",
            "name": "What roofing materials last longest in Hallandale Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Metal and tile roofing systems typically provide the longest lifespan in Hallandale Beach due to their resistance to wind, moisture, and UV exposure."
            }
          },
          {
            "@type": "Question",
            "name": "Can coastal weather affect roof lifespan in Hallandale Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, salt air, sun exposure, and frequent storms can accelerate roof aging without proper materials and installation."
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
      name: 'Roof Repair',
      icon: Wrench,
      description: 'Targeted repairs addressing leaks, storm damage, and material deterioration.'
    },
    {
      name: 'Roof Replacement',
      icon: Home,
      description: 'Complete roofing system replacements built to Florida code standards.'
    },
    {
      name: 'Shingle Roofing',
      icon: Home,
      description: 'Wind-rated shingle systems suitable for South Florida conditions.'
    },
    {
      name: 'Tile Roofing',
      icon: Home,
      description: 'Clay and concrete tile systems designed for coastal durability.'
    },
    {
      name: 'Metal Roofing',
      icon: Shield,
      description: 'Long-lasting, wind-resistant roofing solutions.'
    },
    {
      name: 'Flat Roofing',
      icon: Home,
      description: 'Low-slope roofing systems for residential and commercial structures.'
    },
    {
      name: 'Emergency Roof Repair',
      icon: Droplet,
      description: 'Prompt response for active leaks or storm-related damage.'
    },
    {
      name: 'Leak Detection & Prevention',
      icon: AlertTriangle,
      description: 'Identification of moisture entry points and preventative solutions.'
    }
  ];

  const conditions = [
    { icon: CloudRain, text: 'Tropical storms and strong coastal winds' },
    { icon: Sun, text: 'Intense sun and UV exposure accelerating material aging' },
    { icon: Droplet, text: 'Salt air and moisture increasing corrosion risks' },
    { icon: Home, text: 'Common use of tile, metal, shingle, and flat roofing systems' }
  ];

  const commonIssues = [
    'Wind uplift affecting shingles, tiles, and flashing',
    'Water intrusion from heavy rain and compromised underlayment',
    'Accelerated material aging due to sun and salt exposure',
    'Installation vulnerabilities revealed during severe weather events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const homeownerQuestions = [
    {
      question: 'Do you have a roofing office in Hallandale Beach?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Hallandale Beach.'
    },
    {
      question: 'How fast can you respond to roof issues in Hallandale Beach?',
      answer: 'Our nearby headquarters allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Hallandale Beach?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Hallandale Beach?',
      answer: 'Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in coastal conditions.'
    },
    {
      question: 'Are roof inspections free in Hallandale Beach?',
      answer: 'Yes. Free roof inspections are available for Hallandale Beach property owners.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should roofs in Hallandale Beach be inspected?',
      answer: 'Roofs in Hallandale Beach should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Hallandale Beach?',
      answer: 'Yes, most roofing projects in Hallandale Beach require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Hallandale Beach?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Hallandale Beach due to their resistance to wind, moisture, and UV exposure.'
    },
    {
      question: 'Can coastal weather affect roof lifespan in Hallandale Beach?',
      answer: 'Yes, salt air, sun exposure, and frequent storms can accelerate roof aging without proper materials and installation.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-zinc-500 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations" className="text-zinc-500 hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Hallandale Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roofing Services
              </span>{' '}
              in Hallandale Beach, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Hallandale Beach for residential and light commercial properties. From roof repairs to full system replacements, our team supports Hallandale Beach property owners with dependable service and technical oversight.
            </p>
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

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Your Trusted Roofing Services Team in Hallandale Beach
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <p className="text-zinc-400 leading-relaxed">
                Our roofing teams regularly serve Hallandale Beach from our Deerfield Beach location, allowing for efficient scheduling and consistent on-site supervision. This proximity supports familiarity with Hallandale Beach permitting requirements, inspection processes, and Florida Building Code regulations. Each project is completed with attention to wind resistance, waterproofing, and documentation accuracy.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Hallandale Beach
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Roofing systems in Hallandale Beach are exposed to coastal environmental conditions that influence material performance and installation methods:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {conditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-zinc-300 leading-relaxed">{condition.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services for Hallandale Beach Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.name}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-red-500 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What Hallandale Beach Roofs Commonly Face
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <p className="text-zinc-400 leading-relaxed mb-6">
                Property owners in Hallandale Beach often encounter roofing challenges such as:
              </p>
              <ul className="space-y-3">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Hallandale Beach Homeowners Choose All Phase Construction USA
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Hallandale Beach
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These tools help Hallandale Beach property owners estimate roofing costs and explore financing options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 group"
              >
                <Calculator className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Get a fast ballpark estimate based on your roof size and material type.
                </p>
              </a>

              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 group"
              >
                <DollarSign className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  Financing Calculator
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Estimate monthly payments for your Hallandale Beach roofing project.
                </p>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Questions from Hallandale Beach Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {homeownerQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{item.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing FAQs for Hallandale Beach
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
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
              Ready for Roofing Services in Hallandale Beach?
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
                <span>Code Compliant</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
