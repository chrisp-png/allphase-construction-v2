import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Droplets, AlertTriangle, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PembrokeParkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Roof Repair',
      description: 'Focused repairs addressing leaks, storm damage, and aging components.',
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to current Florida code standards.',
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
      description: 'Clay and concrete tile systems designed for durability and longevity.',
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions.',
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems designed for proper drainage and sealing.',
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
      title: 'Seasonal Storms',
      description: 'Strong winds and heavy rainfall producing roofing stress'
    },
    {
      title: 'UV Exposure',
      description: 'Intense heat and UV exposure accelerating material aging'
    },
    {
      title: 'High Humidity',
      description: 'Elevated moisture levels increasing moisture-related risks'
    },
    {
      title: 'Multiple Roof Types',
      description: 'Common systems including shingle, tile, metal, and flat roofs'
    }
  ];

  const challenges = [
    'Wind uplift impacting shingles, tiles, flashing, and edge details',
    'Water intrusion at penetrations, valleys, and roof transitions',
    'Accelerated material aging from prolonged sun exposure',
    'Installation vulnerabilities revealed during heavy rain events'
  ];

  const whyChooseUs = [
    {
      title: 'Dual-Licensed Credentials',
      description: 'Supporting roofing and structural expertise'
    },
    {
      title: 'South Florida Experience',
      description: 'Extensive regional roofing knowledge'
    },
    {
      title: 'Code-Compliant Practices',
      description: 'Installation and repair following Florida Building Code'
    },
    {
      title: 'Insurance Documentation',
      description: 'Insurance-defensible inspection and project records'
    },
    {
      title: 'Clean Job Sites',
      description: 'Supervised sites with consistent cleanliness standards'
    }
  ];

  const questions = [
    {
      question: 'Do you have a roofing office in Pembroke Park?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Pembroke Park.'
    },
    {
      question: 'How fast can you respond to roof issues in Pembroke Park?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Pembroke Park?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Pembroke Park?',
      answer: 'Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in Pembroke Park conditions.'
    },
    {
      question: 'Are roof inspections free in Pembroke Park?',
      answer: 'Yes. Free roof inspections are available for Pembroke Park property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Pembroke Park be inspected?',
      answer: 'Roofs in Pembroke Park should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Pembroke Park?',
      answer: 'Yes, most roofing projects in Pembroke Park require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Pembroke Park?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Pembroke Park due to their durability and wind resistance.'
    },
    {
      question: 'Can heavy rain cause roof leaks in Pembroke Park even without visible damage?',
      answer: 'Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact.'
    }
  ];

  const coordinates = getCityCoordinates('Pembroke Park');
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Pembroke Park',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
    { name: 'Pembroke Park', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/pembroke-park' }
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
        <title>Pembroke Park Roofer | HVHZ Certified | All Phase</title>
        <meta
          name="description"
          content="Pembroke Park FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605"
        />
        <meta
          name="keywords"
          content="roofing contractor Pembroke Park, roofer Pembroke Park FL, roof replacement Pembroke Park, Pembroke Park roofing company, roof repair Pembroke Park, emergency roof repair Pembroke Park"
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
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Pembroke Park</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Pembroke Park, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Pembroke Park for residential and light commercial properties. From focused roof repairs to full roof replacements, our team supports Pembroke Park property owners with consistent service and technical oversight.
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather exposure, durability, and Florida code compliance.
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
              Your Trusted Roofing Services Team in Pembroke Park
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly serve Pembroke Park with crews dispatched from our Deerfield Beach headquarters. This proximity allows for efficient scheduling and familiarity with Pembroke Park permitting processes, inspection requirements, and Florida Building Code standards.
              </p>
              <p>
                Each project is completed with attention to wind resistance, moisture protection, and accurate documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <Wind className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Conditions Unique to Pembroke Park
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Roofing systems in Pembroke Park are influenced by inland South Florida conditions that affect long-term performance:
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
                Roofing Services for Pembroke Park Properties
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                We provide a full range of roofing services tailored to Pembroke Park properties:
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
                What Pembroke Park Roofs Commonly Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Property owners in Pembroke Park often encounter roofing challenges such as:
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
              Why Pembroke Park Homeowners Choose All Phase Construction USA
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
                  Roof Cost Tools for Pembroke Park
                </h2>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
                  These tools help Pembroke Park property owners estimate roofing costs and explore financing options:
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
                Roofing Questions from Pembroke Park Homeowners
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
              Roofing FAQs for Pembroke Park
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
              Ready for Roofing Services in Pembroke Park?
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
