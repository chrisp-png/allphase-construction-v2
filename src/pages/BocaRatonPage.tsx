import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function BocaRatonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuickFaq, setOpenQuickFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Boca Raton Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Boca Raton FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Boca Raton FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Boca Raton');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Boca Raton',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Boca Raton be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Boca Raton should be inspected annually and after major storms to identify damage early."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Boca Raton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Boca Raton require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Boca Raton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Boca Raton due to their resistance to wind, heat, and moisture."
          }
        },
        {
          "@type": "Question",
          "name": "Can storm season impact roof lifespan in Boca Raton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, repeated exposure to storms and heavy rain can accelerate wear if roofing systems are not properly installed or maintained."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Boca Raton', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
    schemas.forEach(schema => {
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

  const roofingConditions = [
    'Tropical storms and seasonal high-wind events',
    'Intense heat and UV exposure accelerating material aging',
    'Heavy rainfall increasing moisture intrusion risks',
    'Common use of tile, metal, shingle, and flat roofing systems'
  ];

  const roofingServices = [
    {
      title: 'Roof Repair',
      description: 'Targeted solutions for leaks, storm damage, and aging components.'
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing systems built to current Florida codes.'
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for South Florida homes.'
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for durability and aesthetics.'
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing options.'
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems for residential and commercial structures.'
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related issues.'
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of water intrusion points and preventative measures.'
    }
  ];

  const commonIssues = [
    'Wind uplift affecting shingles, tiles, and flashing',
    'Water intrusion from compromised underlayment or penetrations',
    'Accelerated material aging due to sun exposure',
    'Installation vulnerabilities revealed during heavy rain events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const quickFaqs = [
    {
      question: 'Do you have a roofing office in Boca Raton?',
      answer: 'Our main office is located in Deerfield Beach, and we provide full roofing service coverage throughout Boca Raton.'
    },
    {
      question: 'How fast can you respond to roof issues in Boca Raton?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Boca Raton?',
      answer: 'Yes. We manage permitting and coordinate inspections according to local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Boca Raton?',
      answer: 'Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in Boca Raton.'
    },
    {
      question: 'Are roof inspections free in Boca Raton?',
      answer: 'Yes. We offer free roof inspections for Boca Raton property owners.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should roofs in Boca Raton be inspected?',
      answer: 'Roofs in Boca Raton should be inspected annually and after major storms to identify damage early.'
    },
    {
      question: 'Are permits required for roofing work in Boca Raton?',
      answer: 'Yes, most roofing projects in Boca Raton require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Boca Raton?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Boca Raton due to their resistance to wind, heat, and moisture.'
    },
    {
      question: 'Can storm season impact roof lifespan in Boca Raton?',
      answer: 'Yes, repeated exposure to storms and heavy rain can accelerate wear if roofing systems are not properly installed or maintained.'
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
            <span className="text-white">Boca Raton</span>
          </nav>

          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Boca Raton, FL
              </span>
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                All Phase Construction USA provides professional roofing services across Boca Raton for residential and light commercial properties. From minor roof repairs to full system replacements, our team supports Boca Raton property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing solutions designed for South Florida conditions with a focus on long-term durability and code compliance.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Your Trusted Roofing Services Team in Boca Raton
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Our roofing teams regularly serve Boca Raton from our Deerfield Beach location, allowing for efficient scheduling and reliable on-site supervision. This local presence supports familiarity with Boca Raton permitting processes, inspection requirements, and Florida Building Code standards. Each project is approached with attention to wind mitigation, waterproofing, and documentation accuracy.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Conditions Unique to Boca Raton
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Roofing systems in Boca Raton are exposed to environmental factors that require proper design and installation:
              </p>
              <ul className="space-y-3">
                {roofingConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Services for Boca Raton Properties
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We provide a full range of roofing services tailored to Boca Raton properties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {roofingServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Boca Raton Roofs Commonly Face
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Property owners in Boca Raton often encounter roofing challenges such as:
              </p>
              <ul className="space-y-3">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Boca Raton Homeowners Choose All Phase Construction USA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#27272a] border border-zinc-800 rounded-lg p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Cost Tools for Boca Raton
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                These tools help Boca Raton property owners better understand roofing costs and financing options:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/locations/deerfield-beach/service-area/boca-raton/roof-cost-calculator"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Roof Cost Calculator
                </Link>
                <Link
                  to="/locations/deerfield-beach/service-area/boca-raton/roof-cost-calculator#finance-calculator"
                  className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
                >
                  Payment Estimator
                </Link>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Roofing Questions from Boca Raton Homeowners
              </h2>
              <div className="space-y-4">
                {quickFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenQuickFaq(openQuickFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                    >
                      <span className="font-semibold text-white pr-4">{faq.question}</span>
                      {openQuickFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                      )}
                    </button>
                    {openQuickFaq === index && (
                      <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                        <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Roofing FAQs for Boca Raton
              </h2>
              <div className="space-y-4">
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
                Ready for Roofing Services in Boca Raton?
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
    </div>
  );
}
