import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PalmBeachShoresPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Palm Beach Shores Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Palm Beach Shores FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Palm Beach Shores FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Palm Beach Shores');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Palm Beach Shores',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Palm Beach Shores', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/palm-beach-shores' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Palm Beach Shores be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Palm Beach Shores should be inspected annually and after major coastal storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Palm Beach Shores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Palm Beach Shores require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Palm Beach Shores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Palm Beach Shores due to their resistance to wind, salt, and UV exposure."
          }
        },
        {
          "@type": "Question",
          "name": "Can salt air affect roof lifespan in Palm Beach Shores?",
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

  const faqs = [
    {
      question: 'How often should roofs in Palm Beach Shores be inspected?',
      answer: "Roofs in Palm Beach Shores should be inspected annually and after major coastal storms to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in Palm Beach Shores?',
      answer: "Yes, most roofing projects in Palm Beach Shores require permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in Palm Beach Shores?',
      answer: "Metal and tile roofing systems typically provide the longest lifespan in Palm Beach Shores due to their resistance to wind, salt, and UV exposure."
    },
    {
      question: 'Can salt air affect roof lifespan in Palm Beach Shores?',
      answer: "Yes, constant salt air exposure can accelerate corrosion and material wear without proper roofing materials and installation methods."
    }
  ];

  const serviceQuestions = [
    {
      question: 'Do you have a roofing office in Palm Beach Shores?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Palm Beach Shores.'
    },
    {
      question: 'How fast can you respond to roof issues in Palm Beach Shores?',
      answer: 'Our regional coverage allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Palm Beach Shores?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Palm Beach Shores?',
      answer: 'Metal, tile, wind-rated shingle, and properly installed flat roofing systems perform well in coastal conditions.'
    },
    {
      question: 'Are roof inspections free in Palm Beach Shores?',
      answer: 'Yes. Free roof inspections are available for Palm Beach Shores property owners.'
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Roof Repair',
      description: 'Targeted repairs addressing leaks, storm damage, and material deterioration.'
    },
    {
      icon: Home,
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to Florida code standards.'
    },
    {
      icon: Shield,
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for coastal environments.'
    },
    {
      icon: Building2,
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for coastal durability.'
    },
    {
      icon: Shield,
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions ideal for salt exposure.'
    },
    {
      icon: Building2,
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems for residential and multi-unit structures.'
    }
  ];

  const challenges = [
    'Wind uplift affecting shingles, tiles, ridge systems, and edge details',
    'Water intrusion from storm-driven rain and coastal weather',
    'Accelerated material aging due to sun and salt exposure',
    'Installation vulnerabilities revealed during severe weather events'
  ];

  const conditions = [
    'Strong coastal winds from tropical systems and seasonal storms',
    'Intense sun and UV exposure accelerating material aging',
    'Salt air and moisture increasing corrosion and fastener wear',
    'Common roofing systems including tile, metal, shingle, and flat roofs'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida coastal roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
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
            <span className="text-white">Palm Beach Shores</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Shield className="w-4 h-4" />
              Professional Roofing Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Palm Beach Shores, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Palm Beach Shores for residential and coastal properties. From detailed roof repairs to complete roof replacements, our team supports Palm Beach Shores property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for coastal exposure, long-term durability, and Florida code compliance.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Your Trusted Roofing Services Team in Palm Beach Shores
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Our roofing teams regularly serve Palm Beach Shores with crews dispatched from our Deerfield Beach headquarters. This regional coverage allows for efficient scheduling and familiarity with Palm Beach Shores permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind mitigation, moisture control, and accurate documentation.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Palm Beach Shores
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Roofing systems in Palm Beach Shores face coastal environmental conditions that significantly impact performance:
            </p>
            <div className="max-w-4xl mx-auto grid gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{condition}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services for Palm Beach Shores Properties
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              We provide a full range of roofing services tailored to Palm Beach Shores properties:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 border border-red-600/20">
                    <service.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-zinc-400 mb-4">Additional services include:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-[#27272a] border border-zinc-800 px-4 py-2 rounded-full text-zinc-300">
                  Emergency Roof Repair
                </span>
                <span className="bg-[#27272a] border border-zinc-800 px-4 py-2 rounded-full text-zinc-300">
                  Leak Detection & Prevention
                </span>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What Palm Beach Shores Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Property owners in Palm Beach Shores often encounter roofing challenges such as:
            </p>
            <div className="max-w-4xl mx-auto grid gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Palm Beach Shores Homeowners Choose All Phase Construction USA
            </h2>
            <div className="max-w-4xl mx-auto grid gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Palm Beach Shores
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These tools help Palm Beach Shores property owners estimate roofing costs and explore financing options:
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300 group"
              >
                <Calculator className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Get instant estimates for your Palm Beach Shores roofing project.
                </p>
                <div className="flex items-center text-red-500 text-sm font-semibold">
                  Calculate Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300 group"
              >
                <Calculator className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Monthly Payment Calculator
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Estimate monthly payments with flexible financing options.
                </p>
                <div className="flex items-center text-red-500 text-sm font-semibold">
                  View Options <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Questions from Palm Beach Shores Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {serviceQuestions.map((item, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Palm Beach Shores
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
              Ready for Roofing Services in Palm Beach Shores?
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
