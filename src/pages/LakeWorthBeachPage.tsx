import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Calculator, DollarSign } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function LakeWorthBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuickFaq, setOpenQuickFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lake Worth Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lake Worth Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lake Worth Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Lake Worth Beach, roofer Lake Worth Beach FL, roof replacement Lake Worth Beach, roof repair Lake Worth Beach, Lake Worth Beach roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Lake Worth Beach, roofer Lake Worth Beach FL, roof replacement Lake Worth Beach, roof repair Lake Worth Beach, Lake Worth Beach roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Lake Worth Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Lake Worth Beach',
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
      { name: 'Lake Worth Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/lake-worth-beach' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should roofs in Lake Worth Beach be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofs in Lake Worth Beach should be inspected annually and after major storms to identify early signs of damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required for roofing work in Lake Worth Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most roofing projects in Lake Worth Beach require permits and inspections to meet Florida Building Code standards."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials last longest in Lake Worth Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Metal and tile roofing systems typically provide the longest lifespan in Lake Worth Beach due to their resistance to wind, heat, and moisture."
          }
        },
        {
          "@type": "Question",
          "name": "Can heavy rain cause roof leaks in Lake Worth Beach even without visible damage?",
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

  const conditions = [
    {
      title: 'Tropical Storms & High-Wind Exposure',
      description: 'Seasonal weather events requiring wind-rated roofing systems and proper attachment methods.',
      icon: Shield
    },
    {
      title: 'Intense Heat & UV Radiation',
      description: 'Accelerated material aging from prolonged sun exposure and high temperatures.',
      icon: Home
    },
    {
      title: 'Heavy Rainfall',
      description: 'Water intrusion risks at penetrations, valleys, and transitions requiring proper sealing.',
      icon: Home
    },
    {
      title: 'Common Roofing Systems',
      description: 'Shingle, tile, metal, and flat roofing systems each with specific maintenance requirements.',
      icon: Building2
    }
  ];

  const services = [
    {
      title: 'Roof Repair',
      description: 'Focused repairs addressing leaks, storm damage, and material wear.',
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Full roofing system replacements built to current Florida code standards.',
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for South Florida homes.',
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for durability and longevity.',
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions.',
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems designed for proper drainage and sealing.',
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.',
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative solutions.',
      path: '/roof-inspection/',
      icon: Shield
    }
  ];

  const challenges = [
    {
      title: 'Wind Uplift Damage',
      description: 'Wind uplift impacting shingles, tiles, flashing, and edge details'
    },
    {
      title: 'Water Intrusion',
      description: 'Water intrusion at penetrations, valleys, and roof transitions'
    },
    {
      title: 'Accelerated Aging',
      description: 'Accelerated material aging from sun exposure'
    },
    {
      title: 'Installation Vulnerabilities',
      description: 'Installation vulnerabilities revealed during heavy rain events'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-Licensed Credentials',
      description: 'Supporting roofing and structural expertise for comprehensive project execution.'
    },
    {
      title: 'Extensive South Florida Experience',
      description: 'Deep familiarity with regional roofing conditions and requirements.'
    },
    {
      title: 'Code-Compliant Practices',
      description: 'Installation and repair practices aligned with Florida Building Code standards.'
    },
    {
      title: 'Insurance-Defensible Documentation',
      description: 'Thorough inspection and project documentation for insurance purposes.'
    },
    {
      title: 'Supervised Job Sites',
      description: 'Consistent jobsite supervision with maintained cleanliness standards.'
    }
  ];

  const quickFaqs = [
    {
      question: 'Do you have a roofing office in Lake Worth Beach?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Lake Worth Beach.',
      hasLinks: false
    },
    {
      question: 'How fast can you respond to roof issues in Lake Worth Beach?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.',
      hasLinks: false
    },
    {
      question: 'Do you pull permits in Lake Worth Beach?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.',
      hasLinks: false
    },
    {
      question: 'What roofing systems work best in Lake Worth Beach?',
      answer: 'roofing_systems_answer',
      hasLinks: true
    },
    {
      question: 'Are roof inspections free in Lake Worth Beach?',
      answer: 'roof_inspections_answer',
      hasLinks: true
    }
  ];

  const detailedFaqs = [
    {
      question: 'How often should roofs in Lake Worth Beach be inspected?',
      answer: 'inspection_frequency_answer',
      hasLinks: true
    },
    {
      question: 'Are permits required for roofing work in Lake Worth Beach?',
      answer: 'Yes, most roofing projects in Lake Worth Beach require permits and inspections to meet Florida Building Code standards.',
      hasLinks: false
    },
    {
      question: 'What roofing materials last longest in Lake Worth Beach?',
      answer: 'longevity_answer',
      hasLinks: true
    },
    {
      question: 'Can heavy rain cause roof leaks in Lake Worth Beach even without visible damage?',
      answer: 'leak_causes_answer',
      hasLinks: true
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Lake Worth Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Lake Worth Beach, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Lake Worth Beach for residential and light commercial properties. From targeted <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline">roof repairs</Link> to complete <Link to="/residential-roofing/" className="text-red-500 hover:text-red-400 underline">roof replacements</Link>, our team supports Lake Worth Beach property owners with dependable service and consistent oversight. Operating from our <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline">Deerfield Beach headquarters</Link>, we deliver roofing systems designed for South Florida weather exposure, longevity, and Florida code compliance.
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
                <span>Code Compliant</span>
              </div>
            </div>
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
              Your Trusted Roofing Services Team in Lake Worth Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Lake Worth Beach from our Deerfield Beach headquarters, allowing for efficient scheduling and direct jobsite supervision. This regional coverage supports familiarity with Lake Worth Beach permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture control, and accurate documentation.
              </p>
              <p>
                Lake Worth Beach is part of <Link to="/palm-beach-county/" className="text-red-500 hover:text-red-400 underline">Palm Beach County</Link>, where we provide comprehensive roofing services to neighboring communities including <Link to="/locations/deerfield-beach/service-area/boynton-beach/" className="text-red-500 hover:text-red-400 underline">Boynton Beach</Link>, <Link to="/locations/deerfield-beach/service-area/lantana/" className="text-red-500 hover:text-red-400 underline">Lantana</Link>, and <Link to="/locations/deerfield-beach/service-area/hypoluxo/" className="text-red-500 hover:text-red-400 underline">Hypoluxo</Link>. Our familiarity with local building codes and coastal requirements ensures every installation meets or exceeds regional standards.
              </p>
              <p>
                Whether you need a <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">professional roof inspection</Link>, emergency storm damage repairs, or a complete roof system replacement, our licensed contractors provide detailed assessments and transparent recommendations. We specialize in <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">tile roofing systems</Link>, <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">metal roofs</Link>, <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">wind-rated shingles</Link>, and <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline">flat roofing applications</Link>.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Lake Worth Beach
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Roofing systems in Lake Worth Beach are influenced by coastal and inland South Florida conditions that impact performance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{condition.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{condition.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services for Lake Worth Beach Properties
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              We provide a complete range of roofing services tailored to Lake Worth Beach properties:
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
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed text-sm">{service.description}</p>
                    <div className="flex items-center text-red-500 font-medium text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What Lake Worth Beach Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Property owners in Lake Worth Beach often encounter roofing challenges such as:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Lake Worth Beach Homeowners Choose All Phase Construction USA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Lake Worth Beach
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These tools help Lake Worth Beach property owners estimate roofing costs and explore financing options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-8 hover:border-blue-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Roof Cost Calculator
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Estimate your roofing project costs based on roof size, materials, and Lake Worth Beach requirements.
                </p>
                <div className="flex items-center text-blue-400 font-medium">
                  <span>Calculate Costs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-8 hover:border-green-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Finance Calculator
                  </h3>
                </div>
                <p className="text-green-100 leading-relaxed mb-4">
                  Explore monthly payment options and financing terms for your Lake Worth Beach roofing project.
                </p>
                <div className="flex items-center text-green-400 font-medium">
                  <span>View Payment Options</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Questions from Lake Worth Beach Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
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
                      {faq.answer === 'roofing_systems_answer' ? (
                        <p className="text-zinc-400 leading-relaxed">
                          <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">Tile</Link>, <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">metal</Link>, wind-rated <Link to="/shingle-roofing/" className="text-red-500 hover:text-red-400 underline">shingle</Link>, and properly installed <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline">flat roofing systems</Link> perform well in Lake Worth Beach conditions.
                        </p>
                      ) : faq.answer === 'roof_inspections_answer' ? (
                        <p className="text-zinc-400 leading-relaxed">
                          Yes. Free <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">roof inspections</Link> are available for Lake Worth Beach property owners.
                        </p>
                      ) : (
                        <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing FAQs for Lake Worth Beach
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
                    <h3 className="font-semibold text-white pr-4 text-lg">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      {faq.answer === 'inspection_frequency_answer' ? (
                        <p className="text-zinc-400 leading-relaxed">
                          Roofs in Lake Worth Beach should be <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">inspected</Link> annually and after major storms to identify early signs of damage.
                        </p>
                      ) : faq.answer === 'longevity_answer' ? (
                        <p className="text-zinc-400 leading-relaxed">
                          <Link to="/metal-roofing/" className="text-red-500 hover:text-red-400 underline">Metal</Link> and <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline">tile roofing systems</Link> typically provide the longest lifespan in Lake Worth Beach due to their resistance to wind, heat, and moisture.
                        </p>
                      ) : faq.answer === 'leak_causes_answer' ? (
                        <p className="text-zinc-400 leading-relaxed">
                          Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact. A <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline">professional roof inspection</Link> can identify these vulnerabilities before they cause interior damage.
                        </p>
                      ) : (
                        <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Roofing Services in Lake Worth Beach?
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
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
