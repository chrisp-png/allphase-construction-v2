import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, AlertTriangle, Droplets } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function WestlakePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestionsFaq, setOpenQuestionsFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Westlake Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Westlake FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Westlake FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Westlake');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Westlake',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Westlake', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/westlake' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Westlake be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Westlake should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Westlake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Westlake require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Westlake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Westlake due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in Westlake even without visible damage?",
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
      description: "Focused repairs addressing leaks, storm damage, and isolated material failures.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: "Complete roofing system replacements built to current Florida code standards.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: "Wind-rated shingle systems commonly used in newer Westlake homes.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: "Clay and concrete tile systems designed for durability and longevity.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Long-lasting, wind-resistant roofing solutions suited for open-area exposure.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: "Low-slope roofing systems designed for proper drainage and sealing.",
      path: '/flat-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Seasonal Storms',
      description: "Seasonal storms producing strong winds across open developments can affect roofing systems in Westlake.",
      icon: Wind
    },
    {
      title: 'Intense Heat & UV Exposure',
      description: "Intense heat and UV exposure accelerating material aging in South Florida's climate.",
      icon: AlertTriangle
    },
    {
      title: 'Heavy Rainfall',
      description: "Heavy rainfall testing drainage, flashing, and roof transitions throughout the year.",
      icon: Droplets
    },
    {
      title: 'Wind Uplift',
      description: "Wind uplift affecting shingles, tiles, and edge details during storm events.",
      icon: Wind
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-Licensed Credentials',
      description: "Dual-licensed credentials supporting roofing and structural expertise for comprehensive project handling."
    },
    {
      title: 'Extensive South Florida Experience',
      description: "Extensive South Florida roofing experience with local climate knowledge and best practices."
    },
    {
      title: 'Code-Compliant Installation',
      description: "Code-compliant installation and repair practices meeting all Florida Building Code requirements."
    },
    {
      title: 'Insurance-Defensible Documentation',
      description: "Insurance-defensible inspection and project documentation for your peace of mind."
    },
    {
      title: 'Professional Job Sites',
      description: "Supervised job sites with consistent cleanliness standards and professionalism."
    }
  ];

  const roofingQuestions = [
    {
      question: 'Do you have a roofing office in Westlake?',
      answer: "Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Westlake."
    },
    {
      question: 'How fast can you respond to roof issues in Westlake?',
      answer: "Our regional coverage allows for efficient response times and flexible scheduling."
    },
    {
      question: 'Do you pull permits in Westlake?',
      answer: "Yes. We handle permitting and coordinate inspections in accordance with local and state requirements."
    },
    {
      question: 'What roofing systems work best in Westlake?',
      answer: "Wind-rated shingle, tile, metal, and properly installed flat roofing systems perform well in Westlake conditions."
    },
    {
      question: 'Are roof inspections free in Westlake?',
      answer: "Yes. Free roof inspections are available for Westlake property owners."
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Westlake be inspected?',
      answer: "Roofs in Westlake should be inspected annually and after major storms to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in Westlake?',
      answer: "Yes, most roofing projects in Westlake require permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in Westlake?',
      answer: "Metal and tile roofing systems typically provide the longest lifespan in Westlake due to their durability and wind resistance."
    },
    {
      question: 'Can heavy rain cause roof leaks in Westlake even without visible damage?',
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
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Westlake</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Westlake, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Westlake for residential and light commercial properties. From focused roof repairs to complete roof replacements, our team supports Westlake property owners with consistent service and technical oversight.
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
                Schedule Free Inspection in Westlake
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
              Your Trusted Roofing Services Team in Westlake
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Westlake with crews dispatched from our Deerfield Beach headquarters. This regional coverage allows for efficient scheduling and familiarity with Westlake permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture control, and accurate documentation.
              </p>
              <p>
                Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather exposure, newer community construction standards, and Florida code compliance.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Conditions Unique to Westlake
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Roofing systems in Westlake are influenced by open-area and inland South Florida conditions that impact long-term performance:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{challenge.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <p className="text-zinc-400 text-sm italic">
                Common roofing systems including shingle, tile, metal, and flat roofs
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for Westlake Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Westlake properties:
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
            <div className="mt-8 max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Additional Services</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Emergency Roof Repair</strong> – Prompt response for active leaks or storm-related damage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Leak Detection & Prevention</strong> – Identification of moisture entry points and preventative solutions.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What Westlake Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Property owners in Westlake often encounter roofing challenges such as:
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Wind uplift affecting shingles, tiles, and edge details</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Water intrusion at roof penetrations and transition points</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Accelerated material aging from prolonged sun exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Installation vulnerabilities revealed during heavy rain events</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Westlake Homeowners Choose All Phase Construction USA
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roof Cost Tools for Westlake
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                These tools help Westlake property owners estimate roofing costs and explore financing options:
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 mb-4">
                  Get instant estimates for your Westlake roofing project based on size and material selection.
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>Calculate Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Financing Calculator
                </h3>
                <p className="text-zinc-400 mb-4">
                  Explore monthly payment options and financing plans for your roofing project.
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>View Options</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Westlake Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {roofingQuestions.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestionsFaq(openQuestionsFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openQuestionsFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestionsFaq === index && (
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
              Roofing FAQs for Westlake
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
              Ready for Roofing Services in Westlake?
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
