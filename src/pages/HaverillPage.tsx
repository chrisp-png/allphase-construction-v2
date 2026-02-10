import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wrench, ArrowRight, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function HaverillPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Haverhill Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Haverhill FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Haverhill FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Haverhill');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Haverhill',
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
      { name: 'Haverhill', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/haverhill' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Haverhill be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Haverhill should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Haverhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Haverhill require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Haverhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically offer the longest lifespan in Haverhill due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain impact roof performance in Haverhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, prolonged or intense rainfall can expose installation weaknesses or aging materials without proper drainage and sealing."
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
      description: 'Focused repairs addressing leaks, storm damage, and aging materials.',
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
      description: 'Wind-rated shingle systems suitable for South Florida homes.',
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile roofing options designed for durability.',
      path: '/tile-roofing',
      icon: Shield
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting roofing systems with strong wind resistance.',
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing solutions for residential and commercial structures.',
      path: '/flat-roofing',
      icon: Home
    }
  ];

  const conditions = [
    'Seasonal storms producing strong winds and heavy rainfall',
    'Prolonged heat and UV exposure accelerating material aging',
    'Periods of high humidity increasing moisture-related risks',
    'Common use of shingle, tile, metal, and flat roofing systems'
  ];

  const challenges = [
    'Wind uplift affecting shingles, tiles, and flashing',
    'Water intrusion from heavy rain and compromised components',
    'Accelerated material aging due to sun exposure',
    'Installation vulnerabilities revealed during severe weather'
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
      question: 'Do you have a roofing office in Haverhill?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Haverhill.'
    },
    {
      question: 'How fast can you respond to roof issues in Haverhill?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Haverhill?',
      answer: 'Yes. We manage permitting and coordinate inspections according to local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Haverhill?',
      answer: 'Shingle, tile, metal, and properly installed flat roofing systems perform well in Haverhill\'s climate.'
    },
    {
      question: 'Are roof inspections free in Haverhill?',
      answer: 'Yes. Free roof inspections are available for Haverhill property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Haverhill be inspected?',
      answer: 'Roofs in Haverhill should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Haverill?',
      answer: 'Yes, most roofing projects in Haverhill require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Haverhill?',
      answer: 'Metal and tile roofing systems typically offer the longest lifespan in Haverhill due to their durability and wind resistance.'
    },
    {
      question: 'Can heavy rain impact roof performance in Haverhill?',
      answer: 'Yes, prolonged or intense rainfall can expose installation weaknesses or aging materials without proper drainage and sealing.'
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
            <Link to="/locations/service-areas" className="text-zinc-500 hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Haverhill</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Haverhill, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides reliable roofing services throughout Haverhill for residential and light commercial properties. From targeted roof repairs to full replacements, our team supports Haverhill property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather conditions and long-term code compliance.
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
              Your Trusted Roofing Services Team in Haverhill
            </h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-center leading-relaxed">
              Our roofing teams regularly work in Haverhill, dispatched from our Deerfield Beach location for efficient scheduling and hands-on project supervision. This local coverage supports familiarity with Haverhill permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture protection, and proper documentation.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roofing Conditions Unique to Haverhill
            </h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-center mb-8 leading-relaxed">
              Roofing systems in Haverhill are influenced by inland South Florida environmental conditions that impact material performance:
            </p>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {conditions.map((condition, index) => (
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
              Roofing Services for Haverhill Properties
            </h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-center mb-8 leading-relaxed">
              We offer a full range of roofing services tailored to properties in Haverhill:
            </p>
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
            <div className="max-w-4xl mx-auto mt-8 bg-[#27272a] border border-zinc-800 rounded-lg p-6">
              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">Emergency Roof Repair:</strong> Prompt response for active leaks or storm-related damage.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-3">
                <strong className="text-white">Leak Detection & Prevention:</strong> Identification of moisture entry points and preventative measures.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              What Haverhill Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-center mb-8 leading-relaxed">
              Property owners in Haverhill often encounter roofing challenges such as:
            </p>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Why Haverhill Homeowners Choose All Phase Construction USA
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
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
              Roof Cost Tools for Haverhill
            </h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-center mb-8 leading-relaxed">
              These tools help Haverhill property owners estimate roofing costs and explore financing options:
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300 group"
              >
                <Calculator className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Estimate the cost of your Haverhill roofing project based on roof size and material type.
                </p>
                <div className="flex items-center text-red-500 font-medium">
                  <span>Calculate Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-gradient-to-br from-blue-900/20 to-zinc-900/20 border border-blue-900/30 rounded-lg p-8 hover:border-blue-600/50 transition-all duration-300 group"
              >
                <Calculator className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                  Finance Calculator
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Explore monthly payment options and financing terms for your roofing project.
                </p>
                <div className="flex items-center text-blue-500 font-medium">
                  <span>View Options</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Questions from Haverhill Homeowners
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing FAQs for Haverhill
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
                    <h3 className="font-semibold text-white pr-4 text-lg">{faq.question}</h3>
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
              Ready for Roofing Services in Haverhill?
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
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
