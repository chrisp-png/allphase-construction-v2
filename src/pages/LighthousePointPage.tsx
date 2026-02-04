import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LighthousePointPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lighthouse Point Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lighthouse Point FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lighthouse Point FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Lighthouse Point, roofer Lighthouse Point FL, waterfront roofing, coastal roofing Lighthouse Point, luxury roofing');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Lighthouse Point, roofer Lighthouse Point FL, waterfront roofing, coastal roofing Lighthouse Point, luxury roofing';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lighthouse Point');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lighthouse Point',
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
      { name: 'Lighthouse Point', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lighthouse-point' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Lighthouse Point be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lighthouse Point should be inspected annually and after major coastal storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Lighthouse Point?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Lighthouse Point require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Lighthouse Point?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Lighthouse Point due to their resistance to wind, salt, and UV exposure."
          }
        },
        {
          "@type": "Question",
          "name": "Can salt air affect roof lifespan in Lighthouse Point?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, constant salt air exposure can accelerate corrosion and material wear without proper roofing materials and installation methods."
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

  const coastalConditions = [
    'Strong coastal winds from tropical systems and seasonal storms',
    'Intense sun and UV exposure accelerating material aging',
    'Salt air and moisture increasing corrosion and fastener wear',
    'Common use of tile, metal, shingle, and flat roofing systems'
  ];

  const services = [
    {
      title: 'Roof Repair',
      description: 'Targeted repairs addressing leaks, storm damage, and material deterioration.',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to Florida code standards.',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for coastal environments.',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for coastal durability.',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions ideal for salt exposure.',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems for residential and multi-unit structures.',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.',
      icon: Wrench
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative solutions.',
      icon: Wind
    }
  ];

  const challenges = [
    'Wind uplift affecting shingles, tiles, ridge systems, and edge details',
    'Water intrusion from storm-driven rain and coastal weather',
    'Accelerated material aging due to sun and salt exposure',
    'Installation vulnerabilities revealed during severe weather events'
  ];

  const whyChooseUs = [
    {
      title: 'Dual-licensed credentials',
      description: 'Supporting roofing and structural expertise'
    },
    {
      title: 'Extensive South Florida coastal roofing experience',
      description: 'Years of experience working in marine environments'
    },
    {
      title: 'Code-compliant installation and repair practices',
      description: 'Following all Florida Building Code requirements'
    },
    {
      title: 'Insurance-defensible documentation',
      description: 'Comprehensive inspection and project documentation'
    },
    {
      title: 'Supervised job sites',
      description: 'Consistent cleanliness and professionalism standards'
    }
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Lighthouse Point?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Lighthouse Point.'
    },
    {
      question: 'How fast can you respond to roof issues in Lighthouse Point?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Lighthouse Point?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Lighthouse Point?',
      answer: 'Metal, tile, wind-rated shingle, and properly installed flat roofing systems perform well in coastal conditions.'
    },
    {
      question: 'Are roof inspections free in Lighthouse Point?',
      answer: 'Yes. Free roof inspections are available for Lighthouse Point property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Lighthouse Point be inspected?',
      answer: 'Roofs in Lighthouse Point should be inspected annually and after major coastal storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Lighthouse Point?',
      answer: 'Yes, most roofing projects in Lighthouse Point require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Lighthouse Point?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Lighthouse Point due to their resistance to wind, salt, and UV exposure.'
    },
    {
      question: 'Can salt air affect roof lifespan in Lighthouse Point?',
      answer: 'Yes, constant salt air exposure can accelerate corrosion and material wear without proper roofing materials and installation methods.'
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
            <span className="text-white">Lighthouse Point</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lighthouse Point, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Lighthouse Point for residential and coastal properties. From detailed roof repairs to full system replacements, our team supports Lighthouse Point property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing solutions designed for coastal exposure, long-term durability, and Florida code compliance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Trusted Roofing Services Team in Lighthouse Point
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Lighthouse Point from our Deerfield Beach location, allowing for efficient scheduling and direct jobsite supervision. This proximity supports familiarity with Lighthouse Point permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind mitigation, moisture control, and proper documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Roofing Conditions Unique to Lighthouse Point
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Roofing systems in Lighthouse Point face coastal environmental conditions that influence material performance and installation methods:
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {coastalConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for Lighthouse Point Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Lighthouse Point properties:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Lighthouse Point Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Property owners in Lighthouse Point often encounter roofing challenges such as:
              </p>
            </div>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Lighthouse Point Homeowners Choose All Phase Construction USA
            </h2>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">{reason.title}</span>
                      <span className="text-zinc-400"> – {reason.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Tools for Lighthouse Point
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8">
              These tools help Lighthouse Point property owners estimate roofing costs and explore financing options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/locations/deerfield-beach/service-area/lighthouse-point/roof-cost-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-600 transition-colors">
                    Roof Cost Calculator
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Get instant estimates for your Lighthouse Point roofing project
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>Calculate Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link
                to="/locations/deerfield-beach/service-area/lighthouse-point/roof-cost-calculator#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-600 transition-colors">
                    Financing Calculator
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Explore monthly payment options for your roof
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>View Options</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Lighthouse Point Homeowners
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
              Roofing FAQs for Lighthouse Point
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
              Ready for Roofing Services in Lighthouse Point?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free roof inspection with our South Florida roofing team today.
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
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
