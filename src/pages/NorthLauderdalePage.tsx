import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Shield, Clock, Award, FileText, AlertTriangle, Droplets, Wind, Sun } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InspectionCTA from '../components/InspectionCTA';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function NorthLauderdalePage() {
  const coordinates = getCityCoordinates('North Lauderdale');
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'North Lauderdale',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
    { name: 'North Lauderdale', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/north-lauderdale' }
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should roofs in North Lauderdale be inspected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roofs in North Lauderdale should be inspected annually and after major storms to identify early signs of damage."
        }
      },
      {
        "@type": "Question",
        "name": "Are permits required for roofing work in North Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most roofing projects in North Lauderdale require permits and inspections to meet Florida Building Code standards."
        }
      },
      {
        "@type": "Question",
        "name": "What roofing materials last longest in North Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metal and tile roofing systems typically provide the longest lifespan in North Lauderdale due to their durability and wind resistance."
        }
      },
      {
        "@type": "Question",
        "name": "Can heavy rain cause roof leaks in North Lauderdale even without visible damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact."
        }
      }
    ]
  };

  const faqs = [
    {
      question: 'How often should roofs in North Lauderdale be inspected?',
      answer: "Roofs in North Lauderdale should be inspected annually and after major storms to identify early signs of damage."
    },
    {
      question: 'Are permits required for roofing work in North Lauderdale?',
      answer: "Yes, most roofing projects in North Lauderdale require permits and inspections to meet Florida Building Code standards."
    },
    {
      question: 'What roofing materials last longest in North Lauderdale?',
      answer: "Metal and tile roofing systems typically provide the longest lifespan in North Lauderdale due to their durability and wind resistance."
    },
    {
      question: 'Can heavy rain cause roof leaks in North Lauderdale even without visible damage?',
      answer: "Yes, wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact."
    }
  ];

  const roofingQuestions = [
    {
      question: 'Do you have a roofing office in North Lauderdale?',
      answer: "Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout North Lauderdale."
    },
    {
      question: 'How fast can you respond to roof issues in North Lauderdale?',
      answer: "Our proximity allows for efficient response times and flexible scheduling."
    },
    {
      question: 'Do you pull permits in North Lauderdale?',
      answer: "Yes. We handle permitting and coordinate inspections in accordance with local and state requirements."
    },
    {
      question: 'What roofing systems work best in North Lauderdale?',
      answer: "Tile, metal, wind-rated shingle, and properly installed flat roofing systems perform well in North Lauderdale conditions."
    },
    {
      question: 'Are roof inspections free in North Lauderdale?',
      answer: "Yes. Free roof inspections are available for North Lauderdale property owners."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Helmet>
        <title>North Lauderdale Roofer | HVHZ Certified | All Phase</title>
        <meta name="description" content="North Lauderdale FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605" />
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            Roofing Services in <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale, FL</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            All Phase Construction USA provides dependable roofing services throughout North Lauderdale for residential and light commercial properties. From targeted roof repairs to full roof replacements, our team supports North Lauderdale property owners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing systems designed for South Florida weather exposure, durability, and Florida code compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:754-227-5605"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (754) 227-5605
            </a>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all border border-zinc-700"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Your Trusted Roofing Services Team in <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Our roofing teams regularly work in North Lauderdale with crews dispatched from our Deerfield Beach headquarters. This proximity allows for efficient scheduling and familiarity with North Lauderdale permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture protection, and accurate documentation.
          </p>
        </div>
      </section>

      {/* Roofing Conditions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Roofing Conditions Unique to <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Roofing systems in North Lauderdale are influenced by inland South Florida conditions that affect long-term performance:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Wind className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Seasonal Storms</h3>
              <p className="text-zinc-300 leading-relaxed">
                Seasonal storms producing strong winds and heavy rainfall
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Sun className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">UV Exposure</h3>
              <p className="text-zinc-300 leading-relaxed">
                Intense heat and UV exposure accelerating material aging
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Droplets className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">High Humidity</h3>
              <p className="text-zinc-300 leading-relaxed">
                High humidity increasing moisture-related risks
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Shield className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Roofing Systems</h3>
              <p className="text-zinc-300 leading-relaxed">
                Common roofing systems including shingle, tile, metal, and flat roofs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Roofing Services for <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale Properties</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            We provide a full range of roofing services tailored to North Lauderdale properties:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Roof Repair</h3>
              <p className="text-zinc-400 text-sm">
                Focused repairs addressing leaks, storm damage, and aging components.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Roof Replacement</h3>
              <p className="text-zinc-400 text-sm">
                Complete roofing system replacements built to current Florida code standards.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Shingle Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Wind-rated shingle systems suitable for South Florida homes.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Tile Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Clay and concrete tile systems designed for durability and longevity.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Metal Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Long-lasting, wind-resistant roofing solutions.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Flat Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Low-slope roofing systems designed for proper drainage and sealing.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Emergency Roof Repair</h3>
              <p className="text-zinc-400 text-sm">
                Prompt response for active leaks or storm-related damage.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <CheckCircle className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Leak Detection & Prevention</h3>
              <p className="text-zinc-400 text-sm">
                Identification of moisture entry points and preventative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            What North Lauderdale Roofs <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">Commonly Face</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Property owners in North Lauderdale often encounter roofing challenges such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <AlertTriangle className="w-8 h-8 text-red-500 mb-3" />
              <p className="text-zinc-300 leading-relaxed">
                Wind uplift impacting shingles, tiles, flashing, and edge details
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Droplets className="w-8 h-8 text-red-500 mb-3" />
              <p className="text-zinc-300 leading-relaxed">
                Water intrusion at penetrations, valleys, and roof transitions
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Sun className="w-8 h-8 text-red-500 mb-3" />
              <p className="text-zinc-300 leading-relaxed">
                Accelerated material aging from prolonged sun exposure
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <Wind className="w-8 h-8 text-red-500 mb-3" />
              <p className="text-zinc-300 leading-relaxed">
                Installation vulnerabilities revealed during heavy rain events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Why North Lauderdale Homeowners Choose <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">All Phase Construction USA</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <Award className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Dual-Licensed Credentials</h3>
              <p className="text-zinc-400 text-sm">
                Supporting roofing and structural expertise
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">South Florida Experience</h3>
              <p className="text-zinc-400 text-sm">
                Extensive roofing experience in the region
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Code-Compliant Practices</h3>
              <p className="text-zinc-400 text-sm">
                Code-compliant installation and repair practices
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <FileText className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Insurance Documentation</h3>
              <p className="text-zinc-400 text-sm">
                Insurance-defensible inspection and project documentation
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Supervised Job Sites</h3>
              <p className="text-zinc-400 text-sm">
                Supervised job sites with consistent cleanliness standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Roof Cost Tools for <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            These tools help North Lauderdale property owners estimate roofing costs and explore financing options:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="https://allphaseconstructionfl.com/roof-cost-calculator/"
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">Roof Cost Calculator</h3>
              <p className="text-zinc-400 mb-4">
                Get a ballpark estimate for your North Lauderdale roofing project
              </p>
              <span className="text-red-500 font-semibold">Calculate Now</span>
            </Link>
            <Link
              href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">Financing Calculator</h3>
              <p className="text-zinc-400 mb-4">
                Explore monthly payment options for your roofing project
              </p>
              <span className="text-red-500 font-semibold">View Options</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Roofing Questions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Roofing Questions from <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale Homeowners</span>
          </h2>
          <div className="space-y-6">
            {roofingQuestions.map((item, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Roofing FAQs for <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Roofing Services in <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale?</span>
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Schedule a free roof inspection with our South Florida roofing team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:754-227-5605"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all border border-zinc-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (754) 227-5605
            </a>
          </div>
        </div>
      </section>

      <InspectionCTA />
      <Footer />
    </div>
  );
}
