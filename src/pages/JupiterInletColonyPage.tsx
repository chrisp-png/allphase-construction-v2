import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function JupiterInletColonyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Jupiter Inlet Colony Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jupiter Inlet Colony FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Jupiter Inlet Colony FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Jupiter Inlet Colony');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Jupiter Inlet Colony',
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
      { name: 'Jupiter Inlet Colony', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/jupiter-inlet-colony' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Jupiter Inlet Colony be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Jupiter Inlet Colony should be inspected annually and after major coastal storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Jupiter Inlet Colony?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Jupiter Inlet Colony require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Jupiter Inlet Colony?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Jupiter Inlet Colony due to their resistance to wind, salt, and UV exposure."
          }
        },
        {
          "@type": "Question",
          "name": "Can salt air affect roof lifespan in Jupiter Inlet Colony?",
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

  const services = [
    {
      title: 'Roof Repair',
      description: 'Targeted repairs addressing leaks, storm damage, and material deterioration.',
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to Florida code standards.',
      path: '/residential-roofing',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for coastal environments.',
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for coastal durability.',
      path: '/tile-roofing',
      icon: Shield
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions ideal for salt exposure.',
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems for residential and multi-unit structures.',
      path: '/flat-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Strong Coastal Winds',
      description: 'Strong coastal winds from tropical systems and seasonal storms demand proper wind mitigation and secure installation techniques.'
    },
    {
      title: 'Intense Sun and UV Exposure',
      description: 'Intense sun and UV exposure accelerate material aging, requiring UV-resistant materials and proper ventilation systems.'
    },
    {
      title: 'Salt Air and Moisture',
      description: 'Salt air and moisture increase corrosion and fastener wear, necessitating marine-grade materials and corrosion-resistant fasteners.'
    },
    {
      title: 'Common Roofing Systems',
      description: 'Common roofing systems including tile, metal, shingle, and flat roofs all require specialized installation techniques for coastal conditions.'
    }
  ];

  const commonIssues = [
    'Wind uplift affecting shingles, tiles, ridge systems, and edge details',
    'Water intrusion from storm-driven rain and coastal weather',
    'Accelerated material aging due to sun and salt exposure',
    'Installation vulnerabilities revealed during severe weather events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida coastal roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const costQuestions = [
    {
      question: 'Do you have a roofing office in Jupiter Inlet Colony?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Jupiter Inlet Colony.'
    },
    {
      question: 'How fast can you respond to roof issues in Jupiter Inlet Colony?',
      answer: 'Our regional coverage allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Jupiter Inlet Colony?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Jupiter Inlet Colony?',
      answer: 'Metal, tile, wind-rated shingle, and properly installed flat roofing systems perform well in coastal conditions.'
    },
    {
      question: 'Are roof inspections free in Jupiter Inlet Colony?',
      answer: 'Yes. Free roof inspections are available for Jupiter Inlet Colony property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Jupiter Inlet Colony be inspected?',
      answer: 'Roofs in Jupiter Inlet Colony should be inspected annually and after major coastal storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Jupiter Inlet Colony?',
      answer: 'Yes, most roofing projects in Jupiter Inlet Colony require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Jupiter Inlet Colony?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Jupiter Inlet Colony due to their resistance to wind, salt, and UV exposure.'
    },
    {
      question: 'Can salt air affect roof lifespan in Jupiter Inlet Colony?',
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
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Jupiter Inlet Colony</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Jupiter Inlet Colony, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Jupiter Inlet Colony for residential and coastal properties. From detailed roof repairs to full roof replacements, our team supports Jupiter Inlet Colony homeowners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for coastal exposure, long-term durability, and Florida code compliance.
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
              Your Trusted Roofing Services Team in Jupiter Inlet Colony
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Jupiter Inlet Colony with crews dispatched from our Deerfield Beach headquarters. This regional coverage allows for efficient scheduling and familiarity with Jupiter Inlet Colony permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind mitigation, moisture control, and accurate documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Conditions Unique to Jupiter Inlet Colony
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Roofing systems in Jupiter Inlet Colony face demanding coastal environmental conditions that affect material performance:
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for Jupiter Inlet Colony Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Jupiter Inlet Colony properties:
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
                What Jupiter Inlet Colony Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Property owners in Jupiter Inlet Colony often encounter roofing challenges such as:
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Jupiter Inlet Colony Homeowners Choose All Phase Construction USA
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roof Cost Tools for Jupiter Inlet Colony
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                These tools help Jupiter Inlet Colony property owners estimate roofing costs and explore financing options:
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Estimate your roofing costs with our Jupiter Inlet Colony roof cost calculator.
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>Calculate Costs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  Financing Calculator
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Explore financing options and estimate monthly payments for your roofing project.
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>View Financing</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Jupiter Inlet Colony Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {costQuestions.map((item, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Jupiter Inlet Colony
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
              Ready for Roofing Services in Jupiter Inlet Colony?
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
