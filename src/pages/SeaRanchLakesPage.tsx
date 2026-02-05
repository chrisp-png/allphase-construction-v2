import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Droplets, AlertTriangle, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function SeaRanchLakesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      icon: Home
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
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.',
      path: '/roofing-services/roof-repair',
      icon: AlertTriangle
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative solutions.',
      path: '/roof-inspection',
      icon: Droplets
    }
  ];

  const conditions = [
    {
      title: 'Coastal Winds',
      description: 'Strong coastal winds from tropical systems and seasonal storms'
    },
    {
      title: 'UV Exposure',
      description: 'Intense sun and UV exposure accelerating material aging'
    },
    {
      title: 'Salt Air',
      description: 'Salt air and moisture increasing corrosion and fastener wear'
    },
    {
      title: 'Multiple Roof Types',
      description: 'Common roofing systems including tile, metal, shingle, and flat roofs'
    }
  ];

  const challenges = [
    'Wind uplift affecting shingles, tiles, ridge systems, and edge details',
    'Water intrusion from storm-driven rain and coastal weather',
    'Accelerated material aging due to sun and salt exposure',
    'Installation vulnerabilities revealed during severe weather events'
  ];

  const whyChooseUs = [
    {
      title: 'Dual-Licensed Credentials',
      description: 'Supporting roofing and structural expertise'
    },
    {
      title: 'South Florida Coastal Experience',
      description: 'Extensive South Florida coastal roofing experience'
    },
    {
      title: 'Code-Compliant Practices',
      description: 'Code-compliant installation and repair practices'
    },
    {
      title: 'Insurance Documentation',
      description: 'Insurance-defensible inspection and project documentation'
    },
    {
      title: 'Clean Job Sites',
      description: 'Supervised job sites with consistent cleanliness standards'
    }
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Sea Ranch Lakes?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Sea Ranch Lakes.'
    },
    {
      question: 'How fast can you respond to roof issues in Sea Ranch Lakes?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Sea Ranch Lakes?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Sea Ranch Lakes?',
      answer: 'Metal, tile, wind-rated shingle, and properly installed flat roofing systems perform well in coastal conditions.'
    },
    {
      question: 'Are roof inspections free in Sea Ranch Lakes?',
      answer: 'Yes. Free roof inspections are available for Sea Ranch Lakes property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Sea Ranch Lakes be inspected?',
      answer: 'Roofs in Sea Ranch Lakes should be inspected annually and after major coastal storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Sea Ranch Lakes?',
      answer: 'Yes, most roofing projects in Sea Ranch Lakes require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Sea Ranch Lakes?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Sea Ranch Lakes due to their resistance to wind, salt, and UV exposure.'
    },
    {
      question: 'Can salt air affect roof lifespan in Sea Ranch Lakes?',
      answer: 'Yes, constant salt air exposure can accelerate corrosion and material wear without proper roofing materials and installation methods.'
    }
  ];

  const coordinates = getCityCoordinates('Sea Ranch Lakes');
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Sea Ranch Lakes',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
    { name: 'Sea Ranch Lakes', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/sea-ranch-lakes' }
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Helmet>
        <title>Sea Ranch Lakes Roofer | HVHZ Certified | All Phase</title>
        <meta
          name="description"
          content="Sea Ranch Lakes FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605"
        />
        <meta
          name="keywords"
          content="roofing contractor Sea Ranch Lakes, roofer Sea Ranch Lakes FL, roof replacement Sea Ranch Lakes, Sea Ranch Lakes roofing company, coastal roofing Sea Ranch Lakes"
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

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
            <span className="text-white">Sea Ranch Lakes</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Sea Ranch Lakes, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
              All Phase Construction USA provides professional roofing services throughout Sea Ranch Lakes for residential and coastal properties. From precise roof repairs to full system replacements, our team supports Sea Ranch Lakes homeowners with consistent service and technical oversight.
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Operating from our Deerfield Beach headquarters, we deliver roofing solutions designed for coastal exposure, long-term durability, and Florida code compliance.
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
              Your Trusted Roofing Services Team in Sea Ranch Lakes
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Sea Ranch Lakes with crews dispatched from our Deerfield Beach headquarters. This close proximity allows for efficient scheduling and familiarity with Sea Ranch Lakes permitting processes, inspection requirements, and Florida Building Code standards.
              </p>
              <p>
                Each roofing project is completed with attention to wind mitigation, moisture protection, and thorough documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <Wind className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Conditions Unique to Sea Ranch Lakes
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Roofing systems in Sea Ranch Lakes face coastal environmental factors that influence material selection and installation methods:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{condition.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services for Sea Ranch Lakes Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Sea Ranch Lakes properties:
              </p>
            </div>
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
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{service.description}</p>
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
            <div className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What Sea Ranch Lakes Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Property owners in Sea Ranch Lakes often encounter roofing challenges such as:
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-5 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Sea Ranch Lakes Homeowners Choose All Phase Construction USA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="bg-gradient-to-r from-blue-600/10 to-blue-500/10 border border-blue-600/20 rounded-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Roof Cost Tools for Sea Ranch Lakes
                </h2>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
                  These tools help Sea Ranch Lakes property owners estimate roofing costs and explore financing options:
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-center"
                >
                  Roof Cost Calculator
                </a>
                <a
                  href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700 text-center"
                >
                  Finance Calculator
                </a>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <HelpCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Questions from Sea Ranch Lakes Homeowners
              </h2>
            </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Sea Ranch Lakes
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
              Ready for Roofing Services in Sea Ranch Lakes?
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
                <span>Florida Building Code Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
