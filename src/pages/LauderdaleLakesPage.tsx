import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Home, Shield, Building2, Wrench, AlertTriangle, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LauderdaleLakesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lauderdale Lakes Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lauderdale Lakes FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lauderdale Lakes FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lauderdale Lakes');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lauderdale Lakes',
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
      { name: 'Lauderdale Lakes', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lauderdale-lakes' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Lauderdale Lakes be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lauderdale Lakes should be inspected annually and after major weather events to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Lauderdale Lakes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Lauderdale Lakes require permits and inspections to comply with Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials are best suited for Lauderdale Lakes homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal, tile, and wind-rated shingle roofing systems are commonly used in Lauderdale Lakes due to their durability and performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain affect roof performance in Lauderdale Lakes?",
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
      description: 'Focused repairs addressing leaks, wind damage, and aging components.',
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Complete system replacements built to current code standards.',
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
      description: 'Durable clay and concrete tile roofing options.',
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting systems designed for heat and wind resistance.',
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing solutions for residential and commercial structures.',
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.',
      path: '/roofing-services/roof-repair',
      icon: AlertTriangle
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative measures.',
      path: '/roof-inspection',
      icon: Wrench
    }
  ];

  const conditions = [
    'Seasonal storms bringing high winds and heavy rain',
    'Prolonged heat and UV exposure affecting roof materials',
    'Moisture-related risks during extended rainy periods',
    'Common use of shingle, tile, metal, and flat roofing systems'
  ];

  const challenges = [
    'Wind uplift impacting shingles, tiles, and flashing',
    'Water intrusion from aging or compromised materials',
    'Accelerated wear from prolonged heat exposure',
    'Installation vulnerabilities revealed during heavy rain events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing expertise',
    'Extensive experience with South Florida roofing systems',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const quickFaqs = [
    {
      question: 'Do you have a roofing office in Lauderdale Lakes?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Lauderdale Lakes.'
    },
    {
      question: 'How fast can you respond to roof issues in Lauderdale Lakes?',
      answer: 'Our nearby headquarters allows for prompt scheduling and efficient response times.'
    },
    {
      question: 'Do you pull permits in Lauderdale Lakes?',
      answer: 'Yes. We manage permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Lauderdale Lakes?',
      answer: 'Shingle, tile, metal, and properly installed flat roofing systems perform well when designed for South Florida conditions.'
    },
    {
      question: 'Are roof inspections free in Lauderdale Lakes?',
      answer: 'Yes. Free roof inspections are available for Lauderdale Lakes property owners.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should roofs in Lauderdale Lakes be inspected?',
      answer: "Roofs in Lauderdale Lakes should be inspected annually and after major weather events to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in Lauderdale Lakes?',
      answer: "Yes, most roofing projects in Lauderdale Lakes require permits and inspections to comply with Florida Building Code standards."
    },
    {
      question: 'What roofing materials are best suited for Lauderdale Lakes homes?',
      answer: "Metal, tile, and wind-rated shingle roofing systems are commonly used in Lauderdale Lakes due to their durability and performance."
    },
    {
      question: 'Can heavy rain affect roof performance in Lauderdale Lakes?',
      answer: "Yes, prolonged or intense rainfall can expose installation weaknesses or aging materials without proper drainage and sealing."
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
            <Link to="/locations/deerfield-beach/service-area" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Lauderdale Lakes</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lauderdale Lakes, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Lauderdale Lakes for residential and light commercial properties. From repairs to full replacements, our team serves the area directly from our Deerfield Beach headquarters, allowing for consistent oversight and timely scheduling. Our focus is on durable roofing systems designed for South Florida conditions and long-term performance.
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
              Your Trusted Roofing Services Team in Lauderdale Lakes
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing crews regularly work in Lauderdale Lakes, operating from our Deerfield Beach headquarters. This local coverage supports efficient response times and familiarity with Lauderdale Lakes permitting processes, inspection standards, and Florida Building Code requirements. Each project is completed with attention to wind resistance, waterproofing, and proper documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Lauderdale Lakes
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Roofs in Lauderdale Lakes face environmental and structural factors that influence material selection and installation:
            </p>
            <div className="max-w-3xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services for Lauderdale Lakes Properties
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              We offer a full range of roofing services tailored to properties in Lauderdale Lakes:
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
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What Lauderdale Lakes Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Property owners in Lauderdale Lakes often experience roofing concerns such as:
            </p>
            <div className="max-w-3xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Lauderdale Lakes Homeowners Choose All Phase Construction USA
            </h2>
            <div className="max-w-3xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Lauderdale Lakes
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Understanding roofing costs helps with planning and decision-making. These tools are available for Lauderdale Lakes property owners:
            </p>
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/locations/deerfield-beach/service-area/lauderdale-lakes/roof-cost-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calculator className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 text-sm">Get a ballpark estimate for your roofing project</p>
              </Link>
              <a
                href="/locations/deerfield-beach/service-area/lauderdale-lakes/roof-cost-calculator#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calculator className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Finance Calculator
                </h3>
                <p className="text-zinc-400 text-sm">Estimate monthly payments for your roof</p>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Questions from Lauderdale Lakes Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {quickFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Lauderdale Lakes
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
              Ready for Roofing Services in Lauderdale Lakes?
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
