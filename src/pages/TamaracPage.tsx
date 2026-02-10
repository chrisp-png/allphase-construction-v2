import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function TamaracPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Roof Repair',
      description: 'Focused repairs addressing leaks, storm damage, and aging components.',
      icon: Wrench
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to current Florida code standards.',
      icon: Home
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems suitable for South Florida homes.',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for durability and longevity.',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions.',
      icon: Shield
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems designed for proper drainage and sealing.',
      icon: Building2
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.',
      icon: AlertTriangle
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative solutions.',
      icon: Wind
    }
  ];

  const conditions = [
    {
      title: 'Seasonal Storms',
      description: 'Producing strong winds and heavy rainfall'
    },
    {
      title: 'Intense Heat & UV Exposure',
      description: 'Accelerating material aging'
    },
    {
      title: 'High Humidity',
      description: 'Increasing moisture-related risks'
    },
    {
      title: 'Common Roofing Systems',
      description: 'Including shingle, tile, metal, and flat roofs'
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
      title: 'Extensive South Florida Experience',
      description: 'Decades of roofing expertise in the region'
    },
    {
      title: 'Code-Compliant Practices',
      description: 'Installation and repair practices meeting all requirements'
    },
    {
      title: 'Insurance-Defensible Documentation',
      description: 'Inspection and project documentation'
    },
    {
      title: 'Supervised Job Sites',
      description: 'With consistent cleanliness standards'
    }
  ];

  const homeownerQuestions = [
    {
      question: 'Do you have a roofing office in Tamarac?',
      answer: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Tamarac.'
    },
    {
      question: 'How fast can you respond to roof issues in Tamarac?',
      answer: 'Our proximity allows for efficient response times and flexible scheduling.'
    },
    {
      question: 'Do you pull permits in Tamarac?',
      answer: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      question: 'What roofing systems work best in Tamarac?',
      answer: 'Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in Tamarac conditions.'
    },
    {
      question: 'Are roof inspections free in Tamarac?',
      answer: 'Yes. Free roof inspections are available for Tamarac property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Tamarac be inspected?',
      answer: 'Roofs in Tamarac should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Tamarac?',
      answer: 'Yes, most roofing projects in Tamarac require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Tamarac?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Tamarac due to their durability and wind resistance.'
    },
    {
      question: 'Can heavy rain cause roof leaks in Tamarac even without visible damage?',
      answer: 'Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact.'
    }
  ];

  const coordinates = getCityCoordinates('Tamarac');
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Tamarac',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
    { name: 'Tamarac', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/tamarac' }
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
        <title>Tamarac Roofer | HVHZ Certified | All Phase</title>
        <meta
          name="description"
          content="Tamarac FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605"
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
            <span className="text-white">Tamarac</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Tamarac, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA provides dependable roofing services throughout Tamarac for residential and light commercial properties. From targeted roof repairs to complete roof replacements, our team supports Tamarac property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather exposure, durability, and Florida code compliance.
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
              Your Trusted Roofing Services Team in Tamarac
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our roofing teams regularly work in Tamarac with crews dispatched from our Deerfield Beach headquarters. This proximity allows for efficient scheduling and familiarity with Tamarac permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture protection, and accurate documentation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Tamarac
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Roofing systems in Tamarac are influenced by inland South Florida conditions that affect long-term performance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{condition.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services for Tamarac Properties
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              We provide a full range of roofing services tailored to Tamarac properties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What Tamarac Roofs Commonly Face
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Property owners in Tamarac often encounter roofing challenges such as:
            </p>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Tamarac Homeowners Choose All Phase Construction USA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Tamarac
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These tools help Tamarac property owners estimate roofing costs and explore financing options:
            </p>
            <div className="max-w-3xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a
                    href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                    className="text-red-500 hover:text-red-400 underline transition-colors text-lg"
                  >
                    Tamarac Roof Cost Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                    className="text-red-500 hover:text-red-400 underline transition-colors text-lg"
                  >
                    Monthly Payment Estimator
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Tamarac Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {homeownerQuestions.map((question, index) => (
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
              Roofing FAQs for Tamarac
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
              Ready for Roofing Services in Tamarac?
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

      <Footer />
    </div>
  );
}
