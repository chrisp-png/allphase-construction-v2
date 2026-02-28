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
      title: 'Residential Roofing',
      description: 'Complete solutions for Tamarac homes — tile, shingle, metal, and flat systems, all HVHZ compliant. Special expertise in aging housing stock (40-50 year replacements) and moisture-resistant material selection for canal-adjacent properties.'
    },
    {
      title: 'Flat Roof Repair and Replacement',
      description: 'Specialized services for Kings Point and other 55+ condo communities. TPO, EPDM, and modified bitumen systems installed with proper drainage design and seam integrity to eliminate ponding. HOA coordination and property management company communication included.'
    },
    {
      title: 'Commercial Roofing',
      description: 'Flat, TPO, modified bitumen, and standing seam metal roofs for Tamarac Commerce Park and surrounding commercial properties. Minimal disruption to operations.'
    },
    {
      title: 'Roof Repair',
      description: 'Emergency and scheduled repairs for leaks, storm damage, missing shingles, and moisture-related damage. 24/7 response for active leaks and storm emergencies.'
    },
    {
      title: 'Roof Inspections',
      description: '21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports with prioritized repair recommendations.'
    },
    {
      title: 'Permitting',
      description: 'Complete permit application and processing, HVHZ compliance documentation, inspection scheduling, and final approval — all handled by our team.'
    }
  ];

  const processSteps = [
    {
      title: 'Free Inspection and Estimate',
      description: 'Scheduled within 24 hours. Comprehensive inspection covering surface materials, moisture damage, ventilation, deck condition, and canal-proximity concerns specific to Tamarac. Detailed written estimate, no pressure, no hidden fees.'
    },
    {
      title: 'Material Selection and Insurance Assistance',
      description: 'Full photo documentation for insurance claims. Material selection guidance accounting for Tamarac\'s humidity, canal exposure, HOA requirements, and HVHZ wind standards.'
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
      location: 'Tamarac Homeowner',
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
      question: 'How do you handle Tamarac\'s humidity and moisture challenges?',
      answer: 'We select materials specifically rated for high-humidity environments — algae-resistant shingles, Kynar-coated metal, TPO membranes — and install enhanced ventilation systems to combat moisture accumulation. Tamarac\'s 500+ acres of canals and lakes create persistent conditions that generic material selections can\'t handle long-term.'
    },
    {
      question: 'What\'s the best roofing material for homes near Tamarac\'s canals?',
      answer: 'Metal roofing with corrosion-resistant coatings performs best for moisture exposure. Algae-resistant architectural shingles are strong performers for pitched roofs at better price points. For flat roof applications in condo communities, TPO membranes offer superior reflectivity and moisture resistance. We\'ll recommend the right option during your inspection.'
    },
    {
      question: 'Do you work on flat roofs in Kings Point and other 55+ communities?',
      answer: 'Yes — flat roof systems for Tamarac\'s condo communities are a core specialty. We understand HOA requirements, work with property management companies, and have extensive experience with multi-unit buildings throughout Kings Point\'s 13 subdivisions.'
    },
    {
      question: 'How quickly can you respond to storm damage in Tamarac?',
      answer: 'We provide 24/7 emergency response throughout Tamarac and Broward County. Most emergency calls receive same-day service to secure the property from further damage.'
    },
    {
      question: 'Do you help with insurance claims?',
      answer: 'Yes. We document damage thoroughly, meet with adjusters, and provide detailed estimates. Nearly two decades of experience with Broward County insurance companies means faster approvals and fair coverage.'
    },
    {
      question: 'Which Tamarac neighborhoods do you serve?',
      answer: 'All of Tamarac — Woodlands, Kings Point, Mainlands of Tamarac Lakes, Tamarac Lakes, Heathgate, Sunflower, Sherwood Forest, and every neighborhood within city limits, plus commercial properties throughout Tamarac Commerce Park.'
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
        <title>Tamarac FL Roofing Contractor | HVHZ Certified | All Phase Construction USA</title>
        <meta
          name="description"
          content="Tamarac FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Woodlands, Kings Point, Tamarac Commerce Park since 2006. (754) 227-5605"
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Tamarac</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Expert Roofing Contractor in Tamarac, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              All Phase Construction USA has served Tamarac homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring capabilities to every Tamarac roofing project that standard roofing-only contractors cannot match. Whether you own a single-family home in Woodlands, a condo in Kings Point, or commercial property in Tamarac Commerce Park, our team delivers comprehensive roofing solutions engineered for the specific demands of this community.
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
                Most Tamarac roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems beneath the surface — rotted decking from moisture intrusion, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. That means delays, coordination headaches, split warranties, and cost overruns.
              </p>
              <p>
                All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. In a city where much of the housing stock dates to the 1960s and 1970s, that structural capability matters on nearly every roof replacement we perform.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              HVHZ and Moisture Management
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Tamarac sits fully within South Florida's High Velocity Hurricane Zone, where every roofing installation must meet Florida's most demanding wind load standards — engineered to withstand 175+ mph wind speeds. But Tamarac has an additional roofing challenge that most Broward County cities don't: over 500 acres of freshwater canals and lakes woven throughout the city's residential neighborhoods.
              </p>
              <p>
                That water coverage keeps humidity levels elevated year-round, accelerating algae growth on shingles, accelerating wood rot in decking and fascia, and creating persistent moisture intrusion risks that inland properties don't face. We address both challenges on every job — HVHZ-compliant fastening and wind load engineering, plus material selections and installation techniques specifically chosen for high-humidity environments. Every installation passes Broward County building department inspection on the first attempt.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Tamarac Neighborhoods We Serve
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves the full range of Tamarac's residential and commercial properties. <strong>Woodlands</strong>, one of Tamarac's most established neighborhoods, features 1970s-era homes now entering full replacement cycles — many with original roofing systems well past their service life. <strong>Kings Point</strong>, the city's premier active 55+ gated community with 13 subdivisions and thousands of condo units, represents a significant flat roofing market where TPO, EPDM, and modified bitumen systems require specialized installation and ongoing maintenance.
              </p>
              <p>
                <strong>Mainlands of Tamarac Lakes</strong> and <strong>Tamarac Lakes</strong> offer the city's original residential development — canal-adjacent homes where moisture management is a primary roofing concern. <strong>Heathgate</strong>, <strong>Sunflower</strong> near the Stranahan River, and <strong>Sherwood Forest</strong> round out the residential landscape.
              </p>
              <p>
                <strong>Tamarac Commerce Park</strong>, the city's 500-acre commercial district home to Amazon, City Furniture, and approximately 80 companies, represents the commercial roofing demand of one of Broward County's major employment centers. Colony West Golf Club — the city-owned 36-hole facility — and Woodmont Country Club anchor the community's recreational identity.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services for Tamarac Properties
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
              Materials for Tamarac's Climate
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <p className="text-zinc-400 leading-relaxed mb-6">
                Metal roofing with corrosion-resistant Kynar-coated panels performs best for canal-adjacent properties — resisting the moisture and algae that accelerate degradation. Architectural shingles with algae-resistant granules and impact-rated mat construction provide strong value for pitched roof applications. TPO and EPDM single-ply membrane systems for flat roof applications in condo communities and commercial properties. Tile for communities with HOA aesthetic requirements.
              </p>
              <p className="text-zinc-400 text-sm">
                Certified installer status with GAF, CertainTeed, Owens Corning, TAMKO, Eagle Roofing, Boral, FT Synthetics, Johns Manville, and Firestone.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our Tamarac Roofing Process
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
              What Tamarac Homeowners Say
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
              Serving all of Tamarac from our Deerfield Beach headquarters — protecting South Florida properties since 2006.
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
      </div>

      <Footer />
    </div>
  );
}
