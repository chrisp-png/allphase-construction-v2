import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronDown, ChevronUp, AlertTriangle, Droplets, Sun, Home as HomeIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function SunrisePage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roofingConditions = [
    { icon: AlertTriangle, text: 'Seasonal storms producing strong winds and heavy rainfall' },
    { icon: Sun, text: 'Intense heat and UV exposure accelerating material aging' },
    { icon: Droplets, text: 'High humidity increasing moisture-related risks' },
    { icon: HomeIcon, text: 'Common roofing systems including shingle, tile, metal, and flat roofs' }
  ];

  const services = [
    {
      title: 'Residential Roofing',
      description: 'Complete solutions for Sunrise homes — tile, shingle, metal, and flat systems, all HVHZ compliant with manufacturer warranties. HOA approval coordination included where required.'
    },
    {
      title: 'Commercial Roofing',
      description: 'Flat, TPO, modified bitumen, and standing seam metal roofs for Sunrise commercial properties — retail centers along Sawgrass, office parks, warehouses, and multi-family buildings. Minimal disruption to operations.'
    },
    {
      title: 'Roof Repair',
      description: 'Emergency and scheduled repairs for leaks, storm damage, missing shingles, and debris impact damage. 24/7 response for active leaks and storm emergencies.'
    },
    {
      title: 'Roof Inspections',
      description: '21-point inspections for your records, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports with prioritized repair recommendations.'
    },
    {
      title: 'Permitting',
      description: 'Complete permit application and processing, HVHZ compliance documentation, inspection scheduling, and final approval — all handled by our team.'
    }
  ];

  const materials = [
    {
      title: 'Tile Roofing',
      description: 'Concrete and clay, 40-60 year lifespan, Class A fire rating, superior thermal mass for cooling cost reduction.'
    },
    {
      title: 'Metal Roofing',
      description: 'Standing seam aluminum and steel, 175+ mph rated, 50-70 year lifespan, 70% solar reflectivity.'
    },
    {
      title: 'Shingle Roofing',
      description: 'Impact-resistant architectural shingles, algae-resistant, UV-stabilized, 130+ mph wind warranty.'
    },
    {
      title: 'Flat/TPO Roofing',
      description: 'Single-ply membrane systems for commercial and residential flat sections, 80-90% solar reflectivity.'
    }
  ];

  const processSteps = [
    {
      title: 'Free Inspection and Estimate',
      description: 'Scheduled within 24 hours. Comprehensive inspection covering surface materials, flashing, underlayment, ventilation, deck condition, and any penetrations. Detailed written estimate, no pressure, no hidden fees.'
    },
    {
      title: 'Material Selection and Documentation',
      description: 'Full photo documentation for your records. Material selection guidance for Sunrise\'s HVHZ requirements and HOA standards where applicable.'
    },
    {
      title: 'Professional Installation with Permits',
      description: 'All Phase Construction USA handles all permitting, HVHZ compliance documentation, and coordination with Broward County building officials. Complete tear-off, deck inspection, and your approval before any additional structural repairs proceed.'
    },
    {
      title: 'Final Inspection and Warranty',
      description: 'Comprehensive final inspection, full warranty documentation, and wind mitigation certification — potentially reducing homeowners insurance premiums significantly.'
    }
  ];

  const testimonials = [
    {
      name: 'Michael R.',
      location: 'Sunrise Homeowner',
      text: 'Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!'
    },
    {
      name: 'Jennifer L.',
      location: 'Broward County',
      text: 'We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship.'
    },
    {
      name: 'David S.',
      location: 'Commercial Property Owner',
      text: 'All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience.'
    }
  ];

  const faqs = [
    {
      question: 'How long does roof replacement take in Sunrise?',
      answer: 'The physical labor for most residential roof replacements takes about 3 working days once the crew is on-site. However, the full project timeline is longer: Broward County permits can take up to 30 days, and required inspections are scheduled between phases. From contract signing to final inspection sign-off, expect 4–8 weeks total. Commercial projects vary by square footage. We provide accurate timelines during your free inspection.'
    },
    {
      question: 'What roofing materials work best in Sunrise\'s climate?',
      answer: 'All materials we install are HVHZ compliant and rated for Broward County\'s wind requirements. Tile offers the best longevity (40-60 years) and thermal performance. Metal provides the best hurricane resistance and energy efficiency. Architectural shingles deliver the best value. HOA guidelines factor into material selection in communities like Sunrise Golf Village.'
    },
    {
      question: 'Do you provide storm damage documentation?',
      answer: 'Yes. We provide thorough storm damage documentation including detailed photo reports, moisture mapping, and condition assessments. This documentation is yours to use however you need — whether for your own records, your insurer, or any other purpose. Our focus is on assessing the damage accurately and getting your roof repaired or replaced properly.'
    },
    {
      question: 'How often should Sunrise roofs be inspected?',
      answer: 'Annually, plus after any named storm event. Regular inspections catch minor issues — missing shingles, flashing gaps, debris impact damage — before they become major repairs.'
    },
    {
      question: 'Which Sunrise neighborhoods do you serve?',
      answer: 'All of Sunrise — Sunrise Golf Village, Welleby, Springtree Lakes, Sunrise Lakes, New River Estates, and every neighborhood within city limits, plus commercial properties throughout the Sawgrass corridor.'
    }
  ];

  const coordinates = getCityCoordinates('Sunrise');
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Sunrise',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
    { name: 'Sunrise', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/sunrise' }
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
        <title>Roof Replacement Sunrise, FL | Hurricane-Rated | All Phase</title>
        <meta
          name="description"
          content={generateSEOMetadata('/locations/sunrise').description}
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

      <StickyConversionBar />

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
            <span className="text-white">Sunrise</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Expert Roofing Contractor in Sunrise, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA has served Sunrise homeowners and businesses since 2006 — nearly two decades of roofing excellence delivered from our Deerfield Beach headquarters. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring capabilities to every Sunrise roofing project that standard roofing-only contractors cannot match. From the established communities near Sawgrass Mills to the canal-front homes of Sunrise Lakes and the family neighborhoods of Welleby, our team delivers comprehensive roofing solutions engineered for Broward County's demanding HVHZ requirements.
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
              Dual-License Advantage: CGC and CCC
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Most Sunrise roofing contractors hold only a CCC license — authorizing them to install and repair roof surfaces and nothing more. When they uncover structural problems beneath the surface — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. That means delays, coordination headaches, split warranties, and cost overruns.
              </p>
              <p>
                All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. During every Sunrise roof replacement, we inspect deck fastening patterns, assess truss integrity, verify roof-to-wall connections, and confirm full Florida Building Code compliance before the first new shingle goes down.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              High Velocity Hurricane Zone — 175+ MPH Wind Ratings
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Sunrise sits fully within South Florida's High Velocity Hurricane Zone, where every roofing installation must meet Florida's most demanding wind load standards — engineered to withstand 175+ mph wind speeds. Sunrise's location at the western edge of Broward County, where the suburban grid meets the open sawgrass marshlands of the Everglades, creates unobstructed wind corridors that can accelerate storm-force winds across flat terrain.
              </p>
              <p>
                The 612-acre Sawgrass International Corporate Park and the surrounding commercial district generate significant commercial roofing demand — flat, TPO, and standing seam metal systems that must perform under the same HVHZ standards as every residential installation. We use ring-shank nails at enhanced fastening schedules, high-wind rated materials with reinforced construction, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame. Every installation passes Broward County building department inspection on the first attempt.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Sunrise Neighborhoods We Serve
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves the full range of Sunrise's residential and commercial properties. <strong>Sunrise Golf Village</strong>, the city's founding neighborhood dating to 1961, features mid-century ranch homes and canal-view properties entering full replacement cycles. <strong>Welleby</strong> offers a central Sunrise community with diverse housing stock surrounding Welleby Park.
              </p>
              <p>
                <strong>Springtree Lakes</strong> combines 1980s-era single-family homes with easy Everglades access — homes here benefit from enhanced debris-impact resistance given the tree coverage. <strong>Sunrise Lakes</strong>, the established 55+ canal community near Markham Park, features a mix of condos and ranch homes where flat roofing and tile systems dominate. <strong>New River Estates</strong> rounds out the city's residential core.
              </p>
              <p>
                Sunrise's commercial zone along the Sawgrass Expressway — anchored by Amerant Bank Arena (home of the 2-time Stanley Cup champion Florida Panthers) and Sawgrass Mills, one of the largest outlet malls in the United States — represents a significant commercial roofing market where TPO, modified bitumen, and standing seam metal roofing all require HVHZ compliance.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services for Sunrise Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              HVHZ-Compliant Roofing Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{material.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{material.description}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mt-8 text-sm">
              Certified installer status with GAF, CertainTeed, Owens Corning, TAMKO, Eagle Roofing, Boral, FT Synthetics, Johns Manville, and Firestone.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our Sunrise Roofing Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              What Sunrise Homeowners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <div className="mb-4">
                    <div className="flex text-red-500 mb-2">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-white font-semibold">— {testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Flexible Financing Available
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Flexible financing plans including credit-based and non-credit-based options. Use our Roof Cost Calculator for a preliminary estimate.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
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

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <div className="mb-6">
                <p className="text-zinc-400 text-sm mb-2">Licensed & Insured</p>
                <h3 className="text-xl font-bold text-white">All Phase Construction USA</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
                <div>
                  <span className="text-white font-semibold">FL CCC License:</span> CCC-1331464
                </div>
                <div>
                  <span className="text-white font-semibold">FL CGC License:</span> CGC-1526236
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Call (754) 227-5605 or Request Free Estimate
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Serving all of Sunrise from our Deerfield Beach headquarters — protecting South Florida properties since 2006.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Request Free Estimate
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
                <span>Dual Licensed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Certified</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Since 2006</span>
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
}
