import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function MargatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Margate Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Margate FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Margate FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Margate, roofer Margate FL, roof replacement Margate, Margate roofing company, best roofer in Margate');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Margate, roofer Margate FL, roof replacement Margate, Margate roofing company, best roofer in Margate';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Margate');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Margate',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Margate', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/margate' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Margate be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Margate should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Margate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Margate require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Margate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Margate due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in Margate even without visible damage?",
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
      description: "Focused repairs addressing leaks, storm damage, and aging components.",
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: "Complete roofing system replacements built to current Florida code standards.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: "Wind-rated shingle systems suitable for South Florida homes.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: "Clay and concrete tile systems designed for durability and longevity.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Long-lasting, wind-resistant roofing solutions.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: "Low-slope roofing systems designed for proper drainage and sealing.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: "Prompt response for active leaks or storm-related damage.",
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Leak Detection & Prevention',
      description: "Identification of moisture entry points and preventative solutions.",
      path: '/roof-repair',
      icon: Wind
    }
  ];

  const challenges = [
    {
      title: 'Wind uplift impacting shingles, tiles, flashing, and edge details',
      description: ""
    },
    {
      title: 'Water intrusion at penetrations, valleys, and roof transitions',
      description: ""
    },
    {
      title: 'Accelerated material aging from prolonged sun exposure',
      description: ""
    },
    {
      title: 'Installation vulnerabilities revealed during heavy rain events',
      description: ""
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-licensed credentials supporting roofing and structural expertise',
      description: ""
    },
    {
      title: 'Extensive South Florida roofing experience',
      description: ""
    },
    {
      title: 'Code-compliant installation and repair practices',
      description: ""
    },
    {
      title: 'Insurance-defensible inspection and project documentation',
      description: ""
    },
    {
      title: 'Supervised job sites with consistent cleanliness standards',
      description: ""
    }
  ];

  const nearbyCities = [
    { name: 'Coral Springs', path: '/locations/coral-springs' },
    { name: 'Coconut Creek', path: '/locations/coconut-creek' },
    { name: 'Tamarac', path: '/locations/tamarac' },
    { name: 'Pompano Beach', path: '/locations/pompano-beach' },
    { name: 'Parkland', path: '/locations/parkland' },
    { name: 'North Lauderdale', path: '/locations/north-lauderdale' }
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Margate?',
      answer: "Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Margate."
    },
    {
      question: 'How fast can you respond to roof issues in Margate?',
      answer: "Our proximity allows for efficient response times and flexible scheduling."
    },
    {
      question: 'Do you pull permits in Margate?',
      answer: "Yes. We handle permitting and coordinate inspections in accordance with local and state requirements."
    },
    {
      question: 'What roofing systems work best in Margate?',
      answer: "Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in Margate conditions."
    },
    {
      question: 'Are roof inspections free in Margate?',
      answer: "Yes. Free roof inspections are available for Margate property owners."
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Margate be inspected?',
      answer: "Roofs in Margate should be inspected annually and after major storms to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in Margate?',
      answer: "Yes, most roofing projects in Margate require permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in Margate?',
      answer: "Metal and tile roofing systems typically provide the longest lifespan in Margate due to their durability and wind resistance."
    },
    {
      question: 'Can heavy rain cause roof leaks in Margate even without visible damage?',
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Margate</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Margate, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Margate for residential and light commercial properties. From targeted roof repairs to complete roof replacements, our team supports Margate property owners with consistent service and technical oversight.
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
                Schedule Free Inspection in Margate
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
              Your Trusted Roofing Services Team in Margate
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly work in Margate with crews dispatched from our Deerfield Beach headquarters. This proximity allows for efficient scheduling and familiarity with Margate permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture protection, and accurate documentation.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Roofing Conditions Unique to Margate
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Roofing systems in Margate are influenced by inland South Florida conditions that affect long-term performance:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Seasonal storms producing strong winds and heavy rainfall</li>
                <li>Intense heat and UV exposure accelerating material aging</li>
                <li>High humidity increasing moisture-related risks</li>
                <li>Common roofing systems including shingle, tile, metal, and flat roofs</li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for Margate Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Margate properties:
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
                What Margate Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Property owners in Margate often encounter roofing challenges such as:
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <p className="text-white leading-relaxed">{challenge.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Margate Homeowners Choose All Phase Construction USA
            </h2>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <p className="text-white leading-relaxed">{reason.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Margate
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-zinc-400 mb-6 text-center">
                These tools help Margate property owners estimate roofing costs and explore financing options:
              </p>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <ul className="space-y-4 text-zinc-400">
                  <li>
                    <a
                      href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                      className="text-red-500 hover:text-red-400 underline transition-colors"
                    >
                      https://allphaseconstructionfl.com/roof-cost-calculator/
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                      className="text-red-500 hover:text-red-400 underline transition-colors"
                    >
                      https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Margate Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{question.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Margate
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
              Ready for Roofing Services in Margate?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free roof inspection with our South Florida roofing team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
