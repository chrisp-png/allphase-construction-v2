import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LauderhillPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lauderhill Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lauderhill FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lauderhill FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lauderhill');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lauderhill',
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
      { name: 'Lauderhill', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lauderhill' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Lauderhill be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lauderhill should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Lauderhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Lauderhill require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Lauderhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Lauderhill due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in Lauderhill even without visible damage?",
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
      description: 'Focused repairs addressing leaks, storm damage, and aging components.',
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to current Florida code standards.',
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for South Florida homes.',
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for durability and longevity.',
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions.',
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems designed for proper drainage and sealing.',
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.',
      path: '/roofing-services/roof-repair',
      icon: Wind
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative solutions.',
      path: '/roofing-services/roof-repair',
      icon: Wrench
    }
  ];

  const roofingConditions = [
    'Seasonal storms producing strong winds and heavy rainfall',
    'Intense heat and UV exposure accelerating material aging',
    'High humidity increasing moisture-related risks',
    'Common roofing systems including shingle, tile, metal, and flat roofs'
  ];

  const commonChallenges = [
    'Wind uplift impacting shingles, tiles, flashing, and edge details',
    'Water intrusion at penetrations, valleys, and roof transitions',
    'Accelerated material aging from prolonged sun exposure',
    'Installation vulnerabilities revealed during heavy rain events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Lauderhill?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Lauderhill.'
    },
    {
      question: 'How fast can you respond to roof issues in Lauderhill?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Lauderhill?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Lauderhill?',
      answer: 'Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in Lauderhill conditions.'
    },
    {
      question: 'Are roof inspections free in Lauderhill?',
      answer: 'Yes. Free roof inspections are available for Lauderhill property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Lauderhill be inspected?',
      answer: 'Roofs in Lauderhill should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Lauderhill?',
      answer: 'Yes, most roofing projects in Lauderhill require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Lauderhill?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Lauderhill due to their durability and wind resistance.'
    },
    {
      question: 'Can heavy rain cause roof leaks in Lauderhill even without visible damage?',
      answer: 'Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact.'
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
            <span className="text-white">Lauderhill</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lauderhill, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Lauderhill for residential and light commercial properties. From targeted roof repairs to complete roof replacements, our team supports Lauderhill property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather exposure, durability, and Florida code compliance.
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

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Trusted Roofing Services Team in Lauderhill
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly work in Lauderhill with crews dispatched from our Deerfield Beach headquarters. This proximity allows for efficient scheduling and familiarity with Lauderhill permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture protection, and proper documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Roofing Conditions Unique to Lauderhill
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Roofing systems in Lauderhill are influenced by inland South Florida conditions that affect long-term performance:
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {roofingConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roofing Services for Lauderhill Properties
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              We provide a full range of roofing services tailored to Lauderhill properties:
            </p>
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
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Lauderhill Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Property owners in Lauderhill often encounter roofing challenges such as:
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {commonChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <Wind className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Lauderhill Homeowners Choose All Phase Construction USA
            </h2>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Tools for Lauderhill
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These tools help Lauderhill property owners estimate roofing costs and explore financing options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calculator className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Estimate your roofing project costs
                </p>
              </a>
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calculator className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Financing Calculator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Explore monthly payment options
                </p>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Lauderhill Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {questions.map((item, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Lauderhill
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
              Ready for Roofing Services in Lauderhill?
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
