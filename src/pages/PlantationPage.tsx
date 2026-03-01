import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PlantationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Plantation Roofing Contractor | Broward County Licensed | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Plantation FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Hawk\'s Landing, Plantation Acres, Jacaranda Country Club since 2006. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Plantation FL roofing contractor. Dual-licensed (CCC-1331464, CGC-1526236). HVHZ certified. Serving Hawk\'s Landing, Plantation Acres, Jacaranda Country Club since 2006. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Plantation FL, roofer Plantation, roof replacement Plantation, Plantation roofing company, best roofer in Plantation, shingle roof Plantation Florida');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Plantation FL, roofer Plantation, roof replacement Plantation, Plantation roofing company, best roofer in Plantation, shingle roof Plantation Florida';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Plantation');

    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Plantation',
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
      { name: 'Plantation', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/plantation' }
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
      description: 'Complete solutions for Plantation homes — tile, shingle, metal, and flat systems, all HVHZ compliant with manufacturer warranties. HOA approval coordination for Hawk\'s Landing, Jacaranda Country Club, and all gated communities included.',
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Commercial Roofing',
      description: 'Flat, TPO, modified bitumen, and standing seam metal roofs for Plantation retail centers, office buildings along University Drive and Broward Boulevard, and commercial facilities including Westfield Broward area properties.',
      path: '/commercial-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair',
      description: 'Emergency and scheduled repairs for leaks, storm damage, and debris impact. 24/7 response for active leaks and storm emergencies throughout Plantation.',
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
      description: 'Complete storm protection upgrades for Plantation properties.',
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
      description: 'Full photo documentation for insurance claims. Material selection guidance for Plantation\'s unique conditions — elevated humidity from the Everglades border demands proper ventilation systems, and HOA guidelines in gated communities govern material and color selection.'
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
      description: 'Most Plantation roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems, they must stop and hire a separate general contractor. Our CGC license (CGC-1526236) authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability.'
    },
    {
      title: 'Tree City USA Expertise',
      description: 'Plantation is designated "Tree City USA" — its signature oak-lined streets and mature tree canopy create debris impact conditions that make roof quality non-negotiable. In Plantation Acres and estate communities where large mature trees border rooflines, we regularly find structural issues caused by debris impact and root-driven moisture intrusion during tear-off.'
    },
    {
      title: 'Everglades Border Microclimate',
      description: 'Plantation\'s western boundary borders the Everglades — one of the most humidity-intensive environments in North America. We specify materials and ventilation systems designed for Plantation\'s unique microclimate, not just standard South Florida conditions.'
    },
    {
      title: 'HOA Coordination',
      description: 'We coordinate with HOA architectural review boards for Hawk\'s Landing, Jacaranda Country Club, Jacaranda Cay, and all Plantation gated communities. We prepare all documentation and ensure material selections meet community guidelines before work begins.'
    },
    {
      title: 'Nearly Two Decades of Experience',
      description: 'All Phase Construction USA has served Plantation homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters, just minutes away.'
    },
    {
      title: 'Flexible Financing',
      description: 'Credit-based and non-credit-based financing options with competitive rates. Visit our easy payments page for current options.'
    }
  ];

  const nearbyCities = [
    { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale/' },
    { name: 'Sunrise', path: '/locations/sunrise/' },
    { name: 'Davie', path: '/locations/davie/' },
    { name: 'Cooper City', path: '/locations/cooper-city/' },
    { name: 'Deerfield Beach', path: '/locations/deerfield-beach/' },
    { name: 'Weston', path: '/locations/weston/' }
  ];

  const faqs = [
    {
      question: 'Do you handle HOA approvals for Plantation golf communities?',
      answer: 'Yes — we coordinate with HOA architectural review boards for Hawk\'s Landing, Jacaranda Country Club, Jacaranda Cay, and all Plantation gated communities. We prepare all documentation and ensure material selections meet community guidelines before work begins.'
    },
    {
      question: 'Does Plantation\'s proximity to the Everglades affect roofing?',
      answer: 'Significantly. Properties near Plantation\'s western edge face elevated humidity levels that accelerate underlayment degradation and promote mold beneath roofing materials. We specify materials and ventilation systems designed for Plantation\'s unique microclimate.'
    },
    {
      question: 'What HVHZ requirements apply in Plantation?',
      answer: 'Every roofing installation in Plantation must meet Broward County\'s High Velocity Hurricane Zone standards — 175+ mph wind resistance, HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections. All Phase handles all permitting and HVHZ compliance documentation.'
    },
    {
      question: 'Do you work with insurance companies for storm damage claims?',
      answer: 'Yes — comprehensive photo documentation, damage assessments, and detailed repair estimates. We meet with adjusters on-site and have nearly two decades navigating Florida storm damage claims.'
    },
    {
      question: 'What\'s the risk of delaying roof replacement on older Plantation homes?',
      answer: 'In Plantation Acres and other neighborhoods with 1970s-80s construction, delaying replacement allows water intrusion to spread beneath the surface — rotting decking, compromising trusses, and turning a straightforward replacement into a structural project. Our CGC license means we can address whatever we find without stopping the job.'
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
            <span className="text-zinc-500">Roofing</span>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Plantation</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in Plantation, FL
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA has served Plantation homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), we bring capabilities to every Plantation roofing project that standard roofing-only contractors cannot match. Plantation is a planned community designated "Tree City USA" — its signature oak-lined streets and mature tree canopy create the debris impact conditions that make roof quality non-negotiable here.
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
                Schedule Free Inspection in Plantation
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
              The Dual-License Advantage for Plantation Properties
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Most Plantation roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. That means delays, split warranties, and cost overruns.
              </p>
              <p>
                All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. In Plantation's equestrian and estate communities where large mature trees border rooflines, structural issues caused by debris impact and root-driven moisture intrusion are common findings during tear-off.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              HVHZ Compliance for Plantation
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Plantation is located in Broward County's High Velocity Hurricane Zone. Every roof installation must be engineered for 175+ mph wind resistance with HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections. All Phase Construction USA's dual licensure enables us to engineer the complete roofing system — surface and structure — for full HVHZ compliance in a single project, with all Broward County permitting handled in-house.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Plantation's Western Edge and What It Means for Your Roof
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Plantation's western boundary borders the Everglades — one of the most humidity-intensive environments in North America. Properties along Plantation's western edge face elevated ambient moisture levels that accelerate underlayment degradation, promote mold growth under roofing materials, and demand ventilation systems designed for extreme humidity. We specify materials and installation methods that account for this unique microclimate, not just standard South Florida conditions.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Serving All Plantation Communities
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves every Plantation neighborhood. <strong>Hawk's Landing</strong> is a gated estate community where luxury tile roofing and HOA approval requirements are standard on every project. <strong>Plantation Acres</strong> is Plantation's equestrian community — one-acre-plus lots, mature tree canopy, and aging housing stock entering replacement cycles.
              </p>
              <p>
                <strong>Plantation Isles</strong> offers private-dock waterfront homes with direct humidity and salt air exposure. <strong>Jacaranda Country Club</strong> and <strong>Jacaranda Cay</strong> represent the golf community tier where HOA architectural guidelines govern material selection. <strong>Plantation Park</strong> and <strong>Midtown Plantation</strong> offer more accessible residential neighborhoods with 1970s-80s construction.
              </p>
              <p>
                The Plantation Historical Museum and Plantation Preserve Golf Course — an 18-hole course alongside Everglades wetlands — define a community that takes its identity seriously. The Equestrian Center at Volunteer Park and the Frank Veltri Tennis Center reflect Plantation's commitment to its planned community character. Westfield Broward Mall serves as the commercial anchor for a community that balances suburban living with significant commercial roofing demand.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Roofing Services for Plantation
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
              Our Plantation Roofing Process
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
              Why Plantation Homeowners Choose All Phase Construction
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
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Plantation, we provide roofing services throughout Broward County:
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
                to="/locations/"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              What Plantation Homeowners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"
                </p>
                <p className="text-white font-semibold">— Michael R.</p>
                <p className="text-zinc-500 text-sm">Plantation Homeowner</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship."
                </p>
                <p className="text-white font-semibold">— Jennifer L.</p>
                <p className="text-zinc-500 text-sm">Broward County</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience."
                </p>
                <p className="text-white font-semibold">— David S.</p>
                <p className="text-zinc-500 text-sm">Commercial Property Owner</p>
              </div>
            </div>
          </div>

          <EmbeddedRoofCalculator city="Plantation" county="Broward" isHVHZ={true} />

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
              <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
                <div>
                  <span className="text-white font-semibold">FL CCC License:</span> CCC-1331464
                </div>
                <div>
                  <span className="text-white font-semibold">FL CGC License:</span> CGC-1526236
                </div>
                <div>
                  <span className="text-white font-semibold">Headquarters:</span> 590 Goolsby Blvd, Deerfield Beach, FL 33442
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Call (754) 227-5605 or Request Free Estimate
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Serving all of Plantation from our Deerfield Beach headquarters since 2006. Licenses CCC-1331464 | CGC-1526236.
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
    </div>
  );
}
