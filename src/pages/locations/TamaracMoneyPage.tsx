import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../../components/EmbeddedRoofCalculator';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function TamaracMoneyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Tamarac Roofing Contractor | HVHZ Certified | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tamarac FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Mainlands, Kings Point, and all Tamarac communities since 2006. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Tamarac FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Mainlands, Kings Point, and all Tamarac communities since 2006. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Tamarac FL, roofer Tamarac, roof replacement Tamarac, Tamarac roofing company, best roofer in Tamarac, shingle roof Tamarac Florida');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Tamarac FL, roofer Tamarac, roof replacement Tamarac, Tamarac roofing company, best roofer in Tamarac, shingle roof Tamarac Florida';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Tamarac');

    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Tamarac',
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
      { name: 'Tamarac', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/tamarac' }
    ]);

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    const schemas = [localBusinessSchema, breadcrumbSchema];
    schemas.forEach(schema => {
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
      title: 'Residential Roofing',
      description: 'Complete solutions for Tamarac homes — tile, shingle, metal, and flat systems, all HVHZ compliant with manufacturer warranties. Extensive experience with Mainlands, Kings Point, and Tamarac\'s 55+ communities.',
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Commercial Roofing',
      description: 'Flat, TPO, modified bitumen, and standing seam metal roofs for Tamarac commercial properties along Commercial Boulevard, McNab Road, and University Drive corridors.',
      path: '/commercial-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair',
      description: 'Emergency and scheduled repairs for leaks, storm damage, and wear. 24/7 response for active leaks and storm emergencies throughout Tamarac.',
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Roof Inspections',
      description: '21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation with detailed photo reports.',
      path: '/roof-inspection/',
      icon: Shield
    },
    {
      title: 'Impact Windows & Doors',
      description: 'Complete storm protection upgrades for Tamarac properties.',
      path: '/contact/',
      icon: Wind
    },
    {
      title: 'Permitting',
      description: 'Full permit application, HVHZ documentation, Broward County code compliance verification, and final approval — all handled by our team.',
      path: '/contact/',
      icon: Building2
    }
  ];

  const processSteps = [
    {
      title: 'Free Inspection and Estimate',
      description: 'Scheduled within 24-48 hours. Thorough inspection covering sagging sections, damaged flashing, deteriorated underlayment, hidden water damage, and signs of active leaks. Detailed written estimate, no pressure, no hidden fees.'
    },
    {
      title: 'Insurance Claim Assistance and Material Selection',
      description: 'Full photo documentation for insurance claims. Material selection guidance for Tamarac\'s housing stock — much of which was built in the 1960s and 1970s and is entering second and third replacement cycles, where structural findings during tear-off are common.'
    },
    {
      title: 'Professional Installation with Permits',
      description: 'All Phase Construction USA handles all permitting requirements, ensuring compliance with Florida Building Code and HVHZ wind mitigation standards. Complete tear-off, deck inspection, and your approval before any additional repairs proceed.'
    },
    {
      title: 'Final Inspection and Warranty',
      description: 'Comprehensive final inspection, warranty documentation, and wind mitigation certification — potentially saving up to 40% on homeowners insurance premiums with a qualified system.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual-License Advantage',
      description: 'Most Tamarac roofing contractors hold only a CCC license, limiting them to surface work. Our CGC license (CGC-1526236) authorizes structural evaluation and repair of damaged trusses, compromised decking, and inadequate roof-to-wall connections — all under one warranty without stopping to hire a separate contractor.'
    },
    {
      title: 'Tamarac\'s Aging Housing Stock',
      description: 'Tamarac was incorporated in 1963 and much of its housing stock dates to the 1960s and 1970s. Homes and condominiums in Mainlands, Kings Point, and other original Tamarac communities are entering second and third replacement cycles — where structural issues discovered during tear-off are the rule, not the exception. Our CGC license means we handle whatever we find without stopping the job.'
    },
    {
      title: '55+ Community Expertise',
      description: 'Tamarac has one of Broward\'s highest concentrations of 55+ communities. We work with condo associations and individual unit owners throughout Mainlands, Kings Point, Sunflower, and Woodmont Country Club, handling association approvals, multi-unit permitting, and the flat and low-slope systems common in these communities.'
    },
    {
      title: 'HVHZ Engineering',
      description: 'Tamarac sits in Broward County\'s High Velocity Hurricane Zone. Every installation is engineered for 175+ mph wind resistance with enhanced fastening schedules, HVHZ-approved materials, and engineered roof-to-wall connections that pass Broward County inspection on the first attempt.'
    },
    {
      title: 'Nearly Two Decades of Experience',
      description: 'All Phase Construction USA has served Tamarac homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters, just minutes away on Commercial Boulevard.'
    },
    {
      title: 'Flexible Financing',
      description: 'Credit-based and non-credit-based financing options with competitive rates. Visit our easy payments page for current options.'
    }
  ];

  const nearbyCities = [
    { name: 'Sunrise', path: '/locations/sunrise/' },
    { name: 'Coconut Creek', path: '/locations/coconut-creek/' },
    { name: 'Margate', path: '/locations/margate/' },
    { name: 'North Lauderdale', path: '/locations/north-lauderdale/' },
    { name: 'Deerfield Beach', path: '/locations/deerfield-beach/' },
    { name: 'Coral Springs', path: '/locations/coral-springs/' }
  ];

  const faqs = [
    {
      question: 'Do you work with Tamarac condo associations?',
      answer: 'Yes — we work with condo associations throughout Mainlands, Kings Point, Sunflower, and other Tamarac 55+ communities. We handle all association approval documentation, multi-unit permitting, and coordinate inspections with Broward County. We understand the approval processes and timelines unique to association-managed communities.'
    },
    {
      question: 'What roofing issues are common in older Tamarac homes?',
      answer: 'Tamarac\'s 1960s-1970s housing stock commonly presents deteriorated wood decking from decades of humidity exposure, undersized or inadequate roof-to-wall connections that don\'t meet current HVHZ standards, aged underlayment that has lost its waterproofing properties, and in some cases original roofing materials that contain components no longer permitted under current code. Our CGC license means we can address all of these findings under one contract.'
    },
    {
      question: 'What HVHZ requirements apply in Tamarac?',
      answer: 'Every roofing installation in Tamarac must meet Broward County\'s High Velocity Hurricane Zone standards — 175+ mph wind resistance, HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections. All Phase handles all permitting and HVHZ compliance documentation in-house.'
    },
    {
      question: 'How do you handle insurance claims for storm damage in Tamarac?',
      answer: 'We provide comprehensive photo documentation, detailed damage assessments, and written estimates. We meet with adjusters on-site and have nearly two decades navigating Florida storm damage claims. Tamarac homeowners frequently need insurance documentation after tropical storms track through central Broward County.'
    },
    {
      question: 'How much does roof replacement cost in Tamarac?',
      answer: 'For a typical 2,000 sq ft home, expect $8,000–$15,000 for quality shingle installation and $15,000–$30,000 for metal or premium tile. Condominium buildings vary by roof area and system type. We provide detailed free estimates covering all findings with no hidden fees.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <StickyConversionBar />
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-500">Roofing</span>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Tamarac</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in Tamarac, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA has served Tamarac homeowners and businesses since 2006 — nearly two decades of roofing expertise from our Deerfield Beach headquarters, just minutes away. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring capabilities to every Tamarac roofing project that standard roofing-only contractors cannot match. Tamarac was incorporated in 1963 and its housing stock reflects that history — homes and 55+ communities built in the 1960s and 1970s now entering second and third replacement cycles, where structural findings during tear-off are common and where our CGC license makes all the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Nearly Two Decades Experience</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Certified</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspections</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Dual Licensed</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Tamarac
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
              Tamarac's Aging Housing Stock — Why the CGC License Matters Here
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Tamarac was developed rapidly through the 1960s and 1970s as one of Broward County's first planned communities. The original Mainlands communities, Kings Point, and dozens of other subdivisions represent housing stock that is now 50–60 years old. When we tear off a roof on a Tamarac home, we frequently find deteriorated wood decking, undersized trusses that don't meet current HVHZ load requirements, and original roof-to-wall connections that predate modern hurricane engineering.
              </p>
              <p>
                A roofing-only contractor with a CCC license must stop when they find these structural problems and bring in a separate general contractor — adding cost, time, and split accountability. Our CGC license authorizes us to assess and repair the complete structural system under one contract and one warranty. In Tamarac, that's not an edge case — it's a routine part of the job.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Serving All Tamarac Communities
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves every Tamarac neighborhood. <strong>Mainlands</strong> is one of Tamarac's original communities — developed in sections through the 1960s and 1970s, featuring single-family homes and villas now in their second and third roof replacement cycles. <strong>Kings Point</strong> is a prominent 55+ gated community with a mix of condominium buildings and villas requiring both flat and pitched roofing expertise.
              </p>
              <p>
                <strong>Sunflower</strong> and <strong>Woodmont Country Club</strong> represent Tamarac's golf community tier — established neighborhoods where quality and workmanship standards are non-negotiable. <strong>Tropic Isles</strong>, <strong>Colony West</strong>, and the neighborhoods along <strong>Commercial Boulevard</strong> and <strong>McNab Road</strong> round out Tamarac's diverse residential landscape.
              </p>
              <p>
                The Tamarac Sports Complex and the city's extensive canal system — Tamarac has more than 23 miles of canals — define a community built on the western fringes of Broward County's developed footprint. The proximity to conservation lands means elevated humidity levels and the occasional wildlife encounter during roofing work, both of which our experienced crews handle routinely.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Roofing Services for Tamarac
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                From emergency repairs to complete roof replacement — we handle every aspect of your roofing project.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our Tamarac Roofing Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
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
              Why Tamarac Homeowners Choose All Phase Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Also Serving Nearby Communities</h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">In addition to Tamarac, we provide roofing services throughout Broward County:</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {nearbyCities.map((city) => (
                <Link key={city.name} to={city.path} className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 text-center text-sm">
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link to="/locations/" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors">
                View All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">What Tamarac Homeowners Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex text-red-500 mb-2">{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="text-zinc-400 leading-relaxed mb-4">"Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"</p>
                <p className="text-white font-semibold">— Michael R.</p>
                <p className="text-zinc-500 text-sm">Tamarac Homeowner</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex text-red-500 mb-2">{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="text-zinc-400 leading-relaxed mb-4">"We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship."</p>
                <p className="text-white font-semibold">— Jennifer L.</p>
                <p className="text-zinc-500 text-sm">Broward County</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex text-red-500 mb-2">{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="text-zinc-400 leading-relaxed mb-4">"All Phase found structural damage under our old roof that two other contractors missed. They fixed everything under one contract and the new roof passed inspection first try. Worth every penny to have a contractor with both licenses."</p>
                <p className="text-white font-semibold">— Robert M.</p>
                <p className="text-zinc-500 text-sm">Mainlands Homeowner</p>
              </div>
            </div>
          </div>

          <EmbeddedRoofCalculator city="Tamarac" county="Broward" isHVHZ={true} />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors">
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />}
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
              <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
                <div><span className="text-white font-semibold">FL CCC License:</span> CCC-1331464</div>
                <div><span className="text-white font-semibold">FL CGC License:</span> CGC-1526236</div>
                <div><span className="text-white font-semibold">Headquarters:</span> 590 Goolsby Blvd, Deerfield Beach, FL 33442</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Call (754) 227-5605 or Request Free Estimate</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">Serving all of Tamarac from our Deerfield Beach headquarters since 2006. Licenses CCC-1331464 | CGC-1526236.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/contact/" className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg">Request Free Estimate</Link>
              <a href="tel:+17542275605" className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700">
                <Phone className="w-5 h-5" />(754) 227-5605
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /><span>Dual Licensed</span></div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /><span>HVHZ Certified</span></div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /><span>Since 2006</span></div>
            </div>
          </div>

        </div>

        <Contact />
      </div>
    </div>
  );
}
