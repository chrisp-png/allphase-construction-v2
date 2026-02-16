import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LauderdaleRanchesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lauderdale Ranches Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lauderdale Ranches FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lauderdale Ranches FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lauderdale Ranches');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lauderdale Ranches',
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
      { name: 'Lauderdale Ranches', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lauderdale-ranches' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Lauderdale Ranches be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lauderdale Ranches should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Lauderdale Ranches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Lauderdale Ranches require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Lauderdale Ranches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Lauderdale Ranches due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in Lauderdale Ranches even without visible damage?",
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
      description: "Targeted repairs addressing leaks, storm damage, and aging materials.",
      path: '/roofing-services/roof-repair/',
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
      icon: Shield
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
      path: '/roofing-services/roof-repair/',
      icon: AlertTriangle
    },
    {
      title: 'Leak Detection & Prevention',
      description: "Identification of moisture entry points and preventative solutions.",
      path: '/roof-inspection/',
      icon: CheckCircle2
    }
  ];

  const conditions = [
    {
      title: 'Seasonal Storms',
      description: "Strong winds and heavy rainfall impact roofing systems throughout the year."
    },
    {
      title: 'Heat and UV Exposure',
      description: "Intense sun accelerates material aging and requires UV-resistant systems."
    },
    {
      title: 'High Humidity',
      description: "Moisture-related risks require proper ventilation and sealing practices."
    },
    {
      title: 'Multiple Roofing Systems',
      description: "Shingle, tile, metal, and flat roofs all present in Lauderdale Ranches properties."
    }
  ];

  const challenges = [
    {
      title: 'Wind Uplift',
      description: "Impacts shingles, tiles, flashing, and edge details during storm events."
    },
    {
      title: 'Water Intrusion',
      description: "Common at penetrations, valleys, and roof transitions during heavy rain."
    },
    {
      title: 'Material Aging',
      description: "Accelerated by prolonged sun exposure and South Florida climate."
    },
    {
      title: 'Installation Vulnerabilities',
      description: "Often revealed during heavy rain events and require professional assessment."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-Licensed Credentials',
      description: "Supporting roofing and structural expertise for comprehensive project oversight."
    },
    {
      title: 'South Florida Experience',
      description: "Extensive experience with local conditions, codes, and permitting processes."
    },
    {
      title: 'Code-Compliant Practices',
      description: "All work meets or exceeds Florida Building Code requirements."
    },
    {
      title: 'Insurance Documentation',
      description: "Detailed inspection reports and project documentation for insurance claims."
    },
    {
      title: 'Clean Job Sites',
      description: "Supervised work areas with consistent cleanliness and safety standards."
    }
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Lauderdale Ranches?',
      answer: "Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Lauderdale Ranches."
    },
    {
      question: 'How fast can you respond to roof issues in Lauderdale Ranches?',
      answer: "Our proximity allows for efficient response times and flexible scheduling."
    },
    {
      question: 'Do you pull permits in Lauderdale Ranches?',
      answer: "Yes. We handle permitting and coordinate inspections in accordance with local and state requirements."
    },
    {
      question: 'What roofing systems work best in Lauderdale Ranches?',
      answer: "Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in Lauderdale Ranches conditions."
    },
    {
      question: 'Are roof inspections free in Lauderdale Ranches?',
      answer: "Yes. Free roof inspections are available for Lauderdale Ranches property owners."
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Lauderdale Ranches be inspected?',
      answer: "Roofs in Lauderdale Ranches should be inspected annually and after major storms to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in Lauderdale Ranches?',
      answer: "Yes, most roofing projects in Lauderdale Ranches require permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in Lauderdale Ranches?',
      answer: "Metal and tile roofing systems typically provide the longest lifespan in Lauderdale Ranches due to their durability and wind resistance."
    },
    {
      question: 'Can heavy rain cause roof leaks in Lauderdale Ranches even without visible damage?',
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
            <span className="text-white">Lauderdale Ranches</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lauderdale Ranches, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Lauderdale Ranches for residential and light commercial properties. From focused roof repairs to full system replacements, our team supports Lauderdale Ranches property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing solutions designed for South Florida conditions and long-term Florida code compliance.
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
                (754) 227-5605
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Your Trusted Roofing Services Team in Lauderdale Ranches
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Our roofing teams regularly work in Lauderdale Ranches with crews dispatched from our Deerfield Beach headquarters. This proximity allows for efficient scheduling and familiarity with Lauderdale Ranches permitting processes, inspection requirements, and Florida Building Code standards. Every project is completed with attention to wind mitigation, moisture protection, and proper documentation.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services for Lauderdale Ranches Properties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    to={service.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                  >
                    <Icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roofing Conditions Unique to Lauderdale Ranches
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Roofing systems in Lauderdale Ranches are influenced by inland South Florida environmental conditions that impact performance:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{condition.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              What Lauderdale Ranches Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Property owners in Lauderdale Ranches often encounter roofing challenges such as:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Lauderdale Ranches Homeowners Choose All Phase Construction USA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed pl-9">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Tools for Lauderdale Ranches
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These tools help Lauderdale Ranches property owners estimate roofing costs and explore financing options:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Get a ballpark estimate for your Lauderdale Ranches roofing project.
                </p>
              </Link>
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Finance Calculator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Explore monthly payment options for your roofing project.
                </p>
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Lauderdale Ranches Homeowners
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
              Roofing FAQs for Lauderdale Ranches
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
              Ready for Roofing Services in Lauderdale Ranches?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free roof inspection with our South Florida roofing team today.
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
                Call (754) 227-5605
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
