import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Clock, FileText, CheckCircle2, Star, Phone } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function SouthwestRanchesPage() {
  const services = [
    {
      title: 'Roof Repair',
      description: 'Focused repairs addressing leaks, storm damage, and isolated material failures.'
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roofing system replacements built to current Florida code standards.'
    },
    {
      title: 'Shingle Roofing',
      description: 'Wind-rated shingle systems commonly used on residential structures.'
    },
    {
      title: 'Tile Roofing',
      description: 'Clay and concrete tile systems designed for durability and longevity.'
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting, wind-resistant roofing solutions well suited for open-area exposure.'
    },
    {
      title: 'Flat Roofing',
      description: 'Low-slope roofing systems designed for proper drainage and sealing.'
    },
    {
      title: 'Emergency Roof Repair',
      description: 'Prompt response for active leaks or storm-related damage.'
    },
    {
      title: 'Leak Detection & Prevention',
      description: 'Identification of moisture entry points and preventative solutions.'
    }
  ];

  const conditions = [
    'Strong winds during seasonal storms across open acreage',
    'Intense heat and UV exposure accelerating material aging',
    'Heavy rainfall stressing drainage and roof transitions',
    'Common roofing systems including shingle, tile, metal, and flat roofs'
  ];

  const commonIssues = [
    'Wind uplift affecting shingles, tiles, metal panels, and edge details',
    'Water intrusion during prolonged or heavy rain events',
    'Accelerated material aging from constant sun exposure',
    'Installation vulnerabilities revealed during severe weather'
  ];

  const whyChooseUs = [
    'Dual-licensed credentials supporting roofing and structural expertise',
    'Extensive South Florida roofing experience',
    'Code-compliant installation and repair practices',
    'Insurance-defensible inspection and project documentation',
    'Supervised job sites with consistent cleanliness standards'
  ];

  const questions = [
    {
      q: 'Do you have a roofing office in Southwest Ranches?',
      a: 'Our primary office is located in Deerfield Beach, and we provide full roofing service coverage throughout Southwest Ranches.'
    },
    {
      q: 'How fast can you respond to roof issues in Southwest Ranches?',
      a: 'Our regional coverage allows for efficient response times and flexible scheduling.'
    },
    {
      q: 'Do you pull permits in Southwest Ranches?',
      a: 'Yes. We handle permitting and coordinate inspections in accordance with local and state requirements.'
    },
    {
      q: 'What roofing systems work best in Southwest Ranches?',
      a: 'Metal, tile, wind-rated shingle, and properly installed flat roofing systems perform well in open-area and inland conditions.'
    },
    {
      q: 'Are roof inspections free in Southwest Ranches?',
      a: 'Yes. Free roof inspections are available for Southwest Ranches property owners.'
    }
  ];

  const faqs = [
    {
      question: 'How often should roofs in Southwest Ranches be inspected?',
      answer: 'Roofs in Southwest Ranches should be inspected annually and after major storms to identify early signs of damage.'
    },
    {
      question: 'Are permits required for roofing work in Southwest Ranches?',
      answer: 'Yes, most roofing projects in Southwest Ranches require permits and inspections to meet Florida Building Code standards.'
    },
    {
      question: 'What roofing materials last longest in Southwest Ranches?',
      answer: 'Metal and tile roofing systems typically provide the longest lifespan in Southwest Ranches due to their durability and wind resistance.'
    },
    {
      question: 'Can heavy rain cause roof leaks in Southwest Ranches even without visible damage?',
      answer: 'Yes, prolonged or wind-driven rain can expose flashing or transition weaknesses even when surface materials appear intact.'
    }
  ];

  const coordinates = getCityCoordinates('Southwest Ranches');
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Southwest Ranches',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
    { name: 'Southwest Ranches', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/southwest-ranches' }
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
    <>
      <Helmet>
        <title>Southwest Ranches Roofer | HVHZ Certified | All Phase</title>
        <meta
          name="description"
          content="Southwest Ranches FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605"
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

      <div className="min-h-screen bg-[#09090b]">
        <Header />

        {/* Hero Section */}
        <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Roofing Services in Southwest Ranches, FL
              </h1>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                All Phase Construction USA provides professional roofing services throughout Southwest Ranches for residential and estate-style properties. From detailed roof repairs to full system replacements, our team supports Southwest Ranches homeowners with consistent service and technical oversight. Operating from our Deerfield Beach headquarters, we deliver roofing solutions designed for South Florida weather exposure, large property layouts, and Florida code compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-200"
                >
                  Schedule Free Inspection
                </Link>
                <a
                  href="tel:7542275605"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-500 border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Your Trusted Roofing Services Team in Southwest Ranches
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Our roofing teams regularly serve Southwest Ranches with crews dispatched from our Deerfield Beach headquarters. This regional coverage allows for efficient scheduling and familiarity with Southwest Ranches permitting processes, inspection requirements, and Florida Building Code standards. Each project is completed with attention to wind resistance, moisture control, and thorough documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Roofing Conditions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Conditions Unique to Southwest Ranches
            </h2>
            <p className="text-lg text-zinc-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Roofing systems in Southwest Ranches are influenced by open-land and inland South Florida conditions that impact long-term performance:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-4 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">{condition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services for Southwest Ranches Properties
            </h2>
            <p className="text-lg text-zinc-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              We provide a full range of roofing services tailored to Southwest Ranches properties:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-500/50 transition-all duration-200">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What Southwest Ranches Roofs Commonly Face
            </h2>
            <p className="text-lg text-zinc-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Property owners in Southwest Ranches often encounter roofing challenges such as:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-4 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Southwest Ranches Homeowners Choose All Phase Construction USA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                  <Star className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Southwest Ranches
            </h2>
            <p className="text-lg text-zinc-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              These tools help Southwest Ranches property owners estimate roofing costs and explore financing options:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="flex-1 bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-lg text-center hover:from-red-500 hover:to-red-400 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                <FileText className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Roof Cost Calculator</h3>
                <p className="text-red-50">Get a ballpark estimate for your roofing project</p>
              </Link>
              <Link
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="flex-1 bg-zinc-900 border border-zinc-800 p-6 rounded-lg text-center hover:border-red-500/50 transition-all duration-200"
              >
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Finance Calculator</h3>
                <p className="text-zinc-400">Explore monthly payment options</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Southwest Ranches Homeowners
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing FAQs for Southwest Ranches
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-red-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Roofing Services in Southwest Ranches?
            </h2>
            <p className="text-xl text-red-50 mb-8">
              Schedule a free roof inspection with our South Florida roofing team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-lg hover:bg-red-50 transition-all duration-200 shadow-lg"
              >
                Schedule Free Inspection
              </Link>
              <a
                href="tel:7542275605"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-700 rounded-lg hover:bg-red-800 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
