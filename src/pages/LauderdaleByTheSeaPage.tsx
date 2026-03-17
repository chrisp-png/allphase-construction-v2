import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Home, Shield, Building2, Wrench, AlertTriangle, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LauderdaleByTheSeaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lauderdale By The Sea Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lauderdale By The Sea FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lauderdale By The Sea FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lauderdale By The Sea');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lauderdale By The Sea',
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
      { name: 'Lauderdale By The Sea', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lauderdale-by-the-sea' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Lauderdale By The Sea be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lauderdale By The Sea should be inspected at least once per year and after major storms to identify early signs of damage or wear."
          }
        },
        {
          "@type": "Question",
          "name": "Are roofing permits required in Lauderdale By The Sea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing work in Lauderdale By The Sea requires permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Lauderdale By The Sea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically offer the longest lifespan in Lauderdale By The Sea due to their resistance to wind, moisture, and UV exposure."
          }
        },
        {
          "@type": "Question",
          "name": "Can coastal weather shorten roof lifespan in Lauderdale By The Sea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, salt air, sun exposure, and frequent storms can accelerate aging without proper materials and installation methods."
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
      description: 'Targeted repairs addressing storm damage, leaks, and wear.',
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Full system replacements designed for durability and code compliance.',
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: 'Cost-effective systems with modern wind-rated options.',
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile solutions suited for coastal conditions.',
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant systems ideal for South Florida.',
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Modified bitumen and other low-slope roofing applications.',
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Rapid response for active leaks or storm-related issues.',
      path: '/roof-repair',
      icon: AlertTriangle
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Moisture intrusion diagnostics and preventative solutions.',
      path: '/roof-inspection/',
      icon: Wrench
    }
  ];

  const conditions = [
    'Coastal wind exposure from tropical systems and seasonal storms',
    'Intense sun and UV radiation accelerating material aging',
    'Salt air and moisture increasing corrosion risks',
    'Common use of tile, metal, shingle, and flat roofing systems'
  ];

  const challenges = [
    'Wind uplift loosening tiles, shingles, or flashing',
    'Water intrusion around penetrations and roof transitions',
    'Accelerated material aging due to sun and salt exposure',
    'Installation vulnerabilities revealed during heavy rain events'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida roofing experience',
    'Code-compliant installation practices',
    'Insurance-defensible documentation and reporting',
    'On-site supervision and clean, organized job sites'
  ];

  const quickFaqs = [
    {
      question: 'Do you have a roofing office in Lauderdale By The Sea?',
      answer: 'Our main office is located in Deerfield Beach, and we provide full service coverage throughout Lauderdale By The Sea.'
    },
    {
      question: 'How fast can you respond to roof issues in Lauderdale By The Sea?',
      answer: 'Response times are typically fast due to our nearby headquarters and dedicated local crews.'
    },
    {
      question: 'Do you pull permits in Lauderdale By The Sea?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local requirements.'
    },
    {
      question: 'What roofing systems work best in Lauderdale By The Sea?',
      answer: 'Tile, metal, wind-rated shingles, and properly installed flat roofing systems perform well in coastal conditions.'
    },
    {
      question: 'Are roof inspections free in Lauderdale By The Sea?',
      answer: 'Yes. We offer free roof inspections for Lauderdale By The Sea property owners.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should roofs in Lauderdale By The Sea be inspected?',
      answer: "Roofs in Lauderdale By The Sea should be inspected at least once per year and after major storms to identify early signs of damage or wear."
    },
    {
      question: 'Are roofing permits required in Lauderdale By The Sea?',
      answer: "Yes, most roofing work in Lauderdale By The Sea requires permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in Lauderdale By The Sea?',
      answer: "Metal and tile roofing systems typically offer the longest lifespan in Lauderdale By The Sea due to their resistance to wind, moisture, and UV exposure."
    },
    {
      question: 'Can coastal weather shorten roof lifespan in Lauderdale By The Sea?',
      answer: "Yes, salt air, sun exposure, and frequent storms can accelerate aging without proper materials and installation methods."
    }
  ];

  return (
    <><div className="min-h-screen bg-[#09090b]">
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
            <Link to="/locations/deerfield-beach/service-area/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Lauderdale By The Sea</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lauderdale By The Sea, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Lauderdale By The Sea, delivering reliable support for residential and light commercial properties. From routine repairs to full roof replacements, our team serves the area directly from our Deerfield Beach headquarters, ensuring timely service and consistent oversight.
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

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Trusted Roofing Services Team in Lauderdale By The Sea
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing team operates daily across Broward County, including Lauderdale By The Sea, with crews dispatched from our Deerfield Beach location. This proximity allows for faster response times and familiarity with local permitting requirements, inspection processes, and coastal building standards. Every project follows current Florida Building Code requirements with attention to wind mitigation and material specifications.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Lauderdale By The Sea
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Roofs in Lauderdale By The Sea are exposed to environmental conditions that demand proper material selection and installation:
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
              Roofing Services for Lauderdale By The Sea Properties
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Our roofing services are tailored to meet the structural and environmental needs of properties in Lauderdale By The Sea:
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
              What Lauderdale By The Sea Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Homeowners in Lauderdale By The Sea often encounter roofing challenges such as:
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
              Why Lauderdale By The Sea Homeowners Choose All Phase Construction USA
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
              Roof Cost Tools for Lauderdale By The Sea
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Planning a roofing project starts with understanding potential costs. These tools help Lauderdale By The Sea property owners estimate and plan effectively:
            </p>
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calculator className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 text-sm">Get a ballpark estimate for your roofing project</p>
              </a>
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
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
              Roofing Questions from Lauderdale By The Sea Homeowners
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
              Roofing FAQs for Lauderdale By The Sea
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
              Ready for Roofing Services in Lauderdale By The Sea?
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
    </>
  );
}
