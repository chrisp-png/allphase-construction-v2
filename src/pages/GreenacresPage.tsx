import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, FileCheck, ClipboardCheck, Calculator } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function GreenacresPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Greenacres Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Greenacres FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Greenacres FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Greenacres roofing contractor, Greenacres roofer, Greenacres roof repair, Greenacres roof replacement, Greenacres roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Greenacres roofing contractor, Greenacres roofer, Greenacres roof repair, Greenacres roof replacement, Greenacres roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Greenacres');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Greenacres',
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
      { name: 'Greenacres', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/greenacres' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a new roof cost in Greenacres?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Roof costs depend on size, materials, and roof condition. Use our Greenacres roof cost calculator for a quick estimate."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer roof financing in Greenacres?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer flexible roofing financing options for qualified customers in Greenacres."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a roof replacement take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most residential roof replacements take 1 to 3 days, depending on roof size and weather."
              }
            },
            {
              "@type": "Question",
              "name": "Are you licensed and insured in Florida?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All Phase Construction USA is fully licensed and insured in the state of Florida."
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

  const roofingServices = [
    {
      title: 'Roof Repair',
      description: 'Fast, reliable roof repair services in Greenacres to fix leaks, damaged shingles, and storm damage.',
      icon: Wrench,
      path: '/roofing-services/roof-repair'
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roof replacement services with durable materials built for Florida weather conditions.',
      icon: Home,
      path: '/residential-roofing'
    },
    {
      title: 'New Roof Installation',
      description: 'Professional new roof installation for residential and commercial properties in Greenacres.',
      icon: Building2,
      path: '/residential-roofing'
    },
    {
      title: 'Shingle Roofing',
      description: 'High-quality asphalt shingle roofing systems engineered for Florida hurricane zones.',
      icon: Home,
      path: '/shingle-roofing'
    },
    {
      title: 'Metal Roofing',
      description: 'Durable standing seam metal roofing systems with superior wind resistance and longevity.',
      icon: Shield,
      path: '/metal-roofing'
    },
    {
      title: 'Tile Roofing',
      description: 'Concrete and clay tile roofing systems designed for Florida coastal conditions.',
      icon: Home,
      path: '/tile-roofing'
    },
    {
      title: 'Flat & Low-Slope Roofing',
      description: 'TPO, PVC, and modified bitumen flat roofing systems for commercial and residential properties.',
      icon: Building2,
      path: '/flat-roofing'
    },
    {
      title: 'Storm & Hurricane Damage Repair',
      description: 'Emergency storm damage repair and hurricane damage restoration services.',
      icon: Wind,
      path: '/roofing-services/roof-repair'
    },
    {
      title: 'Roof Inspections & Maintenance',
      description: 'Professional roof inspections and preventive maintenance programs.',
      icon: FileCheck,
      path: '/roof-inspection'
    }
  ];

  const whyChooseReasons = [
    'Local Greenacres roofing experts',
    'Florida code-compliant systems',
    'Financing available',
    'Manufacturer-backed warranties',
    'Fast inspections',
    'Licensed and insured',
    'Emergency storm repair'
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Greenacres?',
      shortAnswer: "Roof costs vary by size, material, and condition. Use our Greenacres roof cost calculator for a fast estimate.",
      answer: "Roof pricing depends on square footage, roofing material, tear-off needs, and structural condition. Our online calculator gives a ballpark estimate in minutes."
    },
    {
      question: 'Do you offer roof financing in Greenacres?',
      shortAnswer: "Yes. We provide flexible financing options for qualified homeowners and businesses.",
      answer: "Yes. Financing options help spread payments over time. Check available plans through our finance calculator."
    },
    {
      question: 'How long does a roof replacement take?',
      shortAnswer: "Most residential roof replacements in Greenacres take 1–3 days, weather permitting.",
      answer: "Standard homes are completed within a few days. Larger or specialty roofs may take longer."
    },
    {
      question: 'Are you licensed and insured in Florida?',
      shortAnswer: "Yes. All Phase Construction USA is fully licensed and insured in Florida.",
      answer: "Yes. We meet all Florida licensing requirements and carry full insurance for your protection."
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
            <Link to="/service-areas" className="text-zinc-500 hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Greenacres</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Contractor in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Greenacres, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              All Phase Construction USA provides licensed, insured roofing services in Greenacres, FL. We specialize in residential and commercial roofing with fast inspections and durable systems built for Florida weather.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {roofingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                >
                  <Icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-red-500 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mb-20 bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Calculator className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Greenacres Roof Cost Calculator
              </h2>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Get an instant estimate for your roofing project in Greenacres with our online roof cost calculator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  <Calculator className="w-5 h-5" />
                  Roof Cost Calculator
                </a>
                <a
                  href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
                >
                  Finance Calculator
                </a>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Choose All Phase Construction in Greenacres
            </h2>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 lg:p-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions — Greenacres Roofing
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

          <div className="bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact All Phase Construction USA for a free roof inspection and estimate in Greenacres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7542275605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
              >
                Request Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
