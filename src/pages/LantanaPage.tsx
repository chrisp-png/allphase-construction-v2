import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LantanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lantana Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lantana FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lantana FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Lantana, roofer Lantana FL, roof replacement Lantana, Lantana roofing company, best roofer in Lantana');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Lantana, roofer Lantana FL, roof replacement Lantana, Lantana roofing company, best roofer in Lantana';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lantana');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lantana',
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
      { name: 'Lantana', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lantana' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should a roof be inspected in Lantana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lantana should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best roofing material for homes in Lantana, FL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tile and metal roofing are popular in Lantana due to durability, while architectural shingles remain a cost-effective option."
          }
        },
        {
          "@type": "Question",
          "name": "Do roofing projects in Lantana require permits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most roof replacements and major repairs in Lantana require permits and inspections."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with insurance roof claims in Lantana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide documentation and inspections that support insurance claim reviews for Lantana homeowners."
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
    { name: 'Roof Repair', icon: Wrench },
    { name: 'Roof Replacement', icon: Home },
    { name: 'Shingle Roofing', icon: Home },
    { name: 'Tile Roofing', icon: Home },
    { name: 'Metal Roofing', icon: Building2 },
    { name: 'Flat Roofing', icon: Building2 },
    { name: 'Emergency Roof Repair', icon: Wrench },
    { name: 'Leak Detection & Prevention', icon: Wrench }
  ];

  const relatedServices = [
    { name: 'Roof Repair', path: '/roofing-services/roof-repair' },
    { name: 'Roof Replacement', path: '/roofing-services/roof-replacement' },
    { name: 'Shingle Roofing', path: '/shingle-roofing' },
    { name: 'Tile Roofing', path: '/tile-roofing' },
    { name: 'Metal Roofing', path: '/metal-roofing' },
    { name: 'Emergency Roofing', path: '/roofing-services/emergency-roofing' }
  ];

  const quickFaqs = [
    {
      question: 'Do you have a roofing office in Lantana?',
      answer: 'Our teams operate from Deerfield Beach and regularly serve Lantana with dedicated crews.'
    },
    {
      question: 'How fast can you respond to roof issues in Lantana?',
      answer: 'Most inspections and emergency responses in Lantana can be scheduled quickly due to proximity.'
    },
    {
      question: 'Do you pull permits in Lantana?',
      answer: 'Yes. We handle permitting and inspections required for roofing projects in Lantana.'
    },
    {
      question: 'What roofing systems work best in Lantana?',
      answer: 'Tile, metal, and high-wind-rated shingles perform well when properly installed.'
    },
    {
      question: 'Are inspections free in Lantana?',
      answer: 'Yes. We offer no-obligation roof inspections for Lantana properties.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should a roof be inspected in Lantana?',
      answer: 'Roofs in Lantana should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'What is the best roofing material for homes in Lantana, FL?',
      answer: 'Tile and metal roofing are popular in Lantana due to durability, while architectural shingles remain a cost-effective option.'
    },
    {
      question: 'Do roofing projects in Lantana require permits?',
      answer: 'Yes. Most roof replacements and major repairs in Lantana require permits and inspections.'
    },
    {
      question: 'Can you help with insurance roof claims in Lantana?',
      answer: 'We provide documentation and inspections that support insurance claim reviews for Lantana homeowners.'
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
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Lantana</span>
          </nav>

          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lantana, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Lantana, FL, with responsive scheduling and experienced crews based just minutes away in Deerfield Beach. Our team understands the roofing demands of South Florida properties and delivers code-compliant solutions designed for long-term performance in Lantana's coastal environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg text-center"
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Your Trusted Roofing Services Team in Lantana
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                From our Deerfield Beach headquarters, our roofing teams regularly serve homeowners and property managers across Lantana. We work within local permitting requirements, coordinate inspections, and follow Florida Building Code standards specific to Palm Beach County. This familiarity helps projects move efficiently while maintaining quality and compliance.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Roofing Conditions Unique to Lantana
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>Roofs in Lantana face conditions that require informed material selection and proper installation:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Coastal air that accelerates corrosion on metal components</li>
                <li>Seasonal storms with strong wind uplift risks</li>
                <li>High heat and UV exposure that shortens material lifespan</li>
                <li>Common use of tile, shingle, and flat roofing systems</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Roofing Services for Lantana Properties
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed mb-6">
              <p>We offer a full range of roofing services tailored to residential and light commercial properties in Lantana:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.name}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-4 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="text-base font-semibold text-white pt-2">{service.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              What Lantana Roofs Commonly Face
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>Lantana roofs are often affected by predictable issues due to climate and location:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wind uplift from tropical systems and summer storms</li>
                <li>Salt air corrosion impacting fasteners and flashing</li>
                <li>Water intrusion around penetrations and aging underlayment</li>
                <li>Aging materials accelerated by heat and sun exposure</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Lantana Homeowners Choose All Phase Construction USA
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>Property owners in Lantana rely on All Phase Construction USA because we provide:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dual-licensed roofing and general construction expertise</li>
                <li>Deep experience across South Florida roofing systems</li>
                <li>Code-compliant installations and documented processes</li>
                <li>Insurance-defensible inspections and reporting</li>
                <li>Clean job sites with active supervision</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Roofing Questions from Lantana Homeowners
            </h2>
            <div className="space-y-4">
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

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Roof Cost Tools for Lantana
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed mb-6">
              <p>Planning a roofing project? Use our cost tools designed for Lantana properties:</p>
            </div>
            <div className="space-y-4">
              <Link
                to="/locations/deerfield-beach/service-area/lantana/roof-cost-calculator"
                className="block bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">Roof Cost Calculator</h3>
                <p className="text-zinc-400">Get instant estimates for your Lantana roofing project</p>
              </Link>
              <Link
                to="/locations/deerfield-beach/service-area/lantana/roof-cost-calculator#finance-calculator"
                className="block bg-gradient-to-r from-blue-600/10 to-blue-500/10 border border-blue-600/20 rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">Finance Calculator</h3>
                <p className="text-zinc-400">Explore financing options for your roof</p>
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Roofing FAQs for Lantana
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
              Ready for Roofing Services in Lantana?
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
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
