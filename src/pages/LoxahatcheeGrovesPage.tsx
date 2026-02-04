import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LoxahatcheeGrovesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Loxahatchee Groves Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Loxahatchee Groves FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Loxahatchee Groves FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Loxahatchee Groves, roofer Loxahatchee Groves FL, roof replacement Loxahatchee Groves, rural roofing Loxahatchee Groves, Loxahatchee Groves roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Loxahatchee Groves, roofer Loxahatchee Groves FL, roof replacement Loxahatchee Groves, rural roofing Loxahatchee Groves, Loxahatchee Groves roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Loxahatchee Groves');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Loxahatchee Groves',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Loxahatchee Groves', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/loxahatchee-groves' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Loxahatchee Groves be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Loxahatchee Groves should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Loxahatchee Groves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Loxahatchee Groves require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Loxahatchee Groves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Loxahatchee Groves due to their durability and wind resistance."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in Loxahatchee Groves even without visible damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, prolonged or wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact."
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
      description: "Focused repairs addressing leaks, storm damage, and material wear.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: "Complete roofing system replacements built to current Florida code standards.",
      path: '/residential-roofing',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: "Wind-rated shingle systems suitable for residential structures.",
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
      description: "Long-lasting, wind-resistant roofing solutions well-suited for open-area exposure.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: "Low-slope roofing systems designed for proper drainage and sealing.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: "Prompt response for active leaks or storm-related damage.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Leak Detection & Prevention',
      description: "Identification of moisture entry points and preventative solutions.",
      path: '/roof-inspection',
      icon: Shield
    }
  ];

  const challenges = [
    {
      title: 'Wind uplift affecting shingles, metal panels, and flashing',
      description: "Strong winds during seasonal storms across open land areas can cause significant uplift forces on roofing materials."
    },
    {
      title: 'Water intrusion during prolonged or heavy rain events',
      description: "Heavy rainfall increases water intrusion risks on low-slope areas and can expose vulnerabilities in flashing and transitions."
    },
    {
      title: 'Accelerated material aging from constant sun exposure',
      description: "Intense heat and UV exposure accelerate material aging, reducing roof lifespan if not properly addressed."
    },
    {
      title: 'Installation vulnerabilities revealed during severe weather',
      description: "Common roofing systems including shingle, metal, tile, and flat roofs can show weaknesses during storm events if not properly installed."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-licensed credentials',
      description: "Dual-licensed credentials supporting roofing and structural expertise."
    },
    {
      title: 'Extensive South Florida roofing experience',
      description: "Extensive South Florida roofing experience serving property owners throughout Loxahatchee Groves."
    },
    {
      title: 'Code-compliant installation and repair practices',
      description: "Code-compliant installation and repair practices ensuring all work meets Florida Building Code standards."
    },
    {
      title: 'Insurance-defensible inspection and project documentation',
      description: "Insurance-defensible inspection and project documentation for claims and compliance needs."
    },
    {
      title: 'Supervised job sites with consistent cleanliness standards',
      description: "Supervised job sites with consistent cleanliness standards throughout every project."
    }
  ];

  const nearbyCities = [
    { name: 'Royal Palm Beach', path: '/roofing-contractor-royal-palm-beach-fl' },
    { name: 'Wellington', path: '/roofing-contractor-wellington-fl' },
    { name: 'West Palm Beach', path: '/roofing-contractor-west-palm-beach-fl' },
    { name: 'Palm Beach Gardens', path: '/roofing-contractor-palm-beach-gardens-fl' },
    { name: 'Jupiter', path: '/roofing-contractor-jupiter-fl' },
    { name: 'Lake Worth Beach', path: '/roofing-contractor-lake-worth-fl' }
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Loxahatchee Groves?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Loxahatchee Groves.'
    },
    {
      question: 'How fast can you respond to roof issues in Loxahatchee Groves?',
      answer: 'Our regional coverage allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Loxahatchee Groves?',
      answer: 'Yes. We handle permitting and coordinate inspections according to local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Loxahatchee Groves?',
      answer: 'Metal, wind-rated shingle, tile, and properly installed flat roofing systems perform well in open-area and inland conditions.'
    },
    {
      question: 'Are roof inspections free in Loxahatchee Groves?',
      answer: 'Yes. Free roof inspections are available for Loxahatchee Groves property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Loxahatchee Groves be inspected?',
      answer: 'Roofs in Loxahatchee Groves should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Loxahatchee Groves?',
      answer: 'Yes, most roofing projects in Loxahatchee Groves require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Loxahatchee Groves?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Loxahatchee Groves due to their durability and wind resistance.'
    },
    {
      question: 'Can heavy rain cause roof leaks in Loxahatchee Groves even without visible damage?',
      answer: 'Yes, prolonged or wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact.'
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
            <span className="text-white">Loxahatchee Groves</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Loxahatchee Groves, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Loxahatchee Groves for residential and agricultural-style properties.
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
                Schedule Free Inspection in Loxahatchee Groves
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
              Your Trusted Roofing Services Team in Loxahatchee Groves
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Loxahatchee Groves with crews dispatched from our Deerfield Beach headquarters. This regional coverage allows for efficient scheduling and familiarity with Loxahatchee Groves permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture control, and accurate documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Conditions Unique to Loxahatchee Groves
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Roofing systems in Loxahatchee Groves are influenced by inland and open-area environmental conditions:
              </p>
            </div>
            <div className="max-w-5xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-6">
              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Strong winds during seasonal storms across open land areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Intense heat and UV exposure accelerating material aging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Heavy rainfall increasing water intrusion risks on low-slope areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Common roofing systems including shingle, metal, tile, and flat roofs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for Loxahatchee Groves Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Loxahatchee Groves properties:
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
                What Loxahatchee Groves Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Property owners in Loxahatchee Groves often encounter roofing challenges such as:
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Loxahatchee Groves Homeowners Choose All Phase Construction USA
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
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Loxahatchee Groves Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve Loxahatchee Groves zip codes 33470 and all surrounding western Palm Beach County communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Loxahatchee Groves, we provide roofing services throughout Palm Beach and Broward Counties:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {nearbyCities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 text-center text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Loxahatchee Groves"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Roof Cost Tools for Loxahatchee Groves
              </h2>
              <p className="text-zinc-400 text-center mb-8 leading-relaxed">
                These tools help Loxahatchee Groves property owners estimate roofing costs and explore financing options:
              </p>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Roof Cost Calculator</h3>
                      <Link
                        to="/locations/deerfield-beach/service-area/loxahatchee-groves/roof-cost-calculator"
                        className="text-red-500 hover:text-red-400 transition-colors break-all"
                      >
                        /locations/deerfield-beach/service-area/loxahatchee-groves/roof-cost-calculator
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Finance Calculator</h3>
                      <Link
                        to="/locations/deerfield-beach/service-area/loxahatchee-groves/roof-cost-calculator#finance-calculator"
                        className="text-red-500 hover:text-red-400 transition-colors break-all"
                      >
                        /locations/deerfield-beach/service-area/loxahatchee-groves/roof-cost-calculator#finance-calculator
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Loxahatchee Groves Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{question.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Loxahatchee Groves
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
              Ready for Roofing Services in Loxahatchee Groves?
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
