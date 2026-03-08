import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function CoralSpringsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Coral Springs Roofing Contractor | All Phase USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor in Coral Springs, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor in Coral Springs, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Coral Springs, roofer Coral Springs FL, roof replacement Coral Springs, Coral Springs roofing company, best roofer in Coral Springs, shingle roof Coral Springs');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Coral Springs, roofer Coral Springs FL, roof replacement Coral Springs, Coral Springs roofing company, best roofer in Coral Springs, shingle roof Coral Springs';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Coral Springs');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Coral Springs',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Coral Springs', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/coral-springs' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
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
      description: "Complete solutions for Coral Springs homes — tile, shingle, metal, and flat systems, all HVHZ compliant with manufacturer warranties. Coral Springs material code compliance included on every project.",
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Commercial Roofing',
      description: "Flat, TPO, modified bitumen, and standing seam metal roofs for Coral Springs retail centers, office buildings along Sample Road and University Drive, and commercial facilities.",
      path: '/commercial-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair',
      description: "Emergency and scheduled repairs for leaks, storm damage, and wear. 24/7 response for active leaks and storm emergencies.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Roof Inspections',
      description: "21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation with detailed photo reports.",
      path: '/roof-inspection/',
      icon: Shield
    },
    {
      title: 'Impact Windows & Doors',
      description: "Complete storm protection upgrades for Coral Springs properties.",
      path: '/contact/',
      icon: Wind
    },
    {
      title: 'Permitting',
      description: "Full permit application, HVHZ documentation, Coral Springs code compliance verification, and final approval — all handled by our team.",
      path: '/contact/',
      icon: Building2
    }
  ];

  const processSteps = [
    {
      title: 'Free Inspection and Estimate',
      description: "Scheduled within 24-48 hours. Thorough inspection covering sagging sections, damaged flashing, deteriorated underlayment, hidden water damage, and signs of active leaks. Detailed written estimate, no pressure, no hidden fees."
    },
    {
      title: 'Insurance Claim Assistance and Material Selection',
      description: "Full photo documentation for insurance claims. Material selection guidance for Coral Springs' climate — reflective metal roofing that reduces cooling costs 10-25%, impact-resistant shingles, or city-approved clay and cement tile that meets Coral Springs' strict aesthetic standards."
    },
    {
      title: 'Professional Installation with Permits',
      description: "All Phase Construction USA handles all permitting requirements, ensuring compliance with Florida Building Code, HVHZ wind mitigation standards, and Coral Springs' enforced material codes. Complete tear-off, deck inspection, and your approval before any additional repairs proceed."
    },
    {
      title: 'Final Inspection and Warranty',
      description: "Comprehensive final inspection, warranty documentation, and wind mitigation certification — potentially saving up to 40% on homeowners insurance premiums with a qualified system."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Chamber of Commerce Member',
      description: "Active membership in the Coral Springs Coconut Creek Regional Chamber demonstrates verified credentials and a reputation built over nearly two decades in this community."
    },
    {
      title: 'Post-Wilma Experience',
      description: "All Phase Construction USA was founded in the aftermath of Hurricane Wilma's devastation across Broward County in 2005. That origin forged our expertise in storm damage documentation, insurance claim navigation, and rapid response — relationships with Coral Springs families who still call us today."
    },
    {
      title: 'Dual-License Advantage',
      description: "Most Coral Springs roofing contractors hold only a CCC license, limiting them to surface work. Our CGC license (CGC-1526236) authorizes structural evaluation and repair — damaged trusses, inadequate roof-to-wall connections, compromised decking — all under one warranty, without stopping to hire a separate contractor."
    },
    {
      title: 'Complete Roofing Solutions',
      description: "Roof repair, residential and commercial replacement, emergency response, maintenance programs, and impact window and door installation."
    },
    {
      title: 'All Roofing Materials',
      description: "Tile roofs compliant with Coral Springs' strictly enforced material and color codes, impact-resistant shingles, energy-efficient metal roofing systems (175+ mph rated), and flat roofing for commercial properties."
    },
    {
      title: 'Flexible Financing',
      description: "Credit-based and non-credit-based financing options with competitive rates."
    }
  ];

  const nearbyCities = [
    { name: 'Parkland', path: '/roofing-contractor-parkland-fl/' },
    { name: 'Coconut Creek', path: '/roofing-contractor-coconut-creek-fl/' },
    { name: 'Margate', path: '/roofing-contractor-margate-fl/' },
    { name: 'Tamarac', path: '/roofing-contractor-tamarac-fl/' },
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl/' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl/' }
  ];

  const faqs = [
    {
      question: 'How much does roof replacement cost in Coral Springs?',
      answer: "For a typical 2,000 sq ft home, expect $8,000-$15,000 for quality shingle installation and $15,000-$30,000 for metal or premium tile. Factors include roof pitch, accessibility, material selection, and structural repairs needed. We provide a detailed free estimate."
    },
    {
      question: 'What roofing materials comply with Coral Springs guidelines?',
      answer: "Coral Springs maintains approved tile colors, styles, and material standards. Our team navigates these requirements daily — we'll help you select compliant options that also maximize HVHZ storm protection and qualify for insurance wind mitigation discounts."
    },
    {
      question: 'How long does roof installation take?',
      answer: "Most residential replacements complete in 2-5 days. Commercial projects vary by square footage and system type. We plan around rainy season weather and communicate throughout."
    },
    {
      question: 'Do you help with insurance claims?',
      answer: "Yes. We document damage with photos and detailed reports, and our experience since Wilma means faster adjuster approvals and fewer headaches for you."
    },
    {
      question: 'Which Coral Springs neighborhoods do you serve?',
      answer: "All of Coral Springs — Eagle Trace, Wyndham Lakes, Heron Bay, Whispering Woods, The Isles, Kensington, Maplewood, Ramblewood, Cypress Run, Running Brook, and every zip code within city limits, plus surrounding Broward County communities."
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
            <span className="text-white">Coral Springs</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Trusted Roofing Contractor in Coral Springs, FL — Local Chamber Member Since 2006
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              When a South Florida storm rolls through and you spot water stains on your ceiling, you need a roofing contractor who answers the phone — not a distant call center. Coral Springs homeowners have trusted All Phase Construction USA since 2006, when our team helped this community recover in the aftermath of Hurricane Wilma. As a proud member of the Coral Springs Coconut Creek Regional Chamber of Commerce, we've built our company on the same values that make this tree-lined planned city special — reliability, transparency, and genuine care for our neighbors. Dual-licensed with both a Florida Certified Roofing Contractor license (CCC-1331464) and Certified General Contractor license (CGC-1526236), we deliver comprehensive roofing solutions that standard contractors simply cannot match.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
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
                <span>Locally Owned</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Coral Springs
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
              Chamber of Commerce Member — Verified and Accountable
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA is an active, verified member of the Coral Springs Coconut Creek Regional Chamber of Commerce — the combined chamber representing both Coral Springs and Coconut Creek businesses. Chamber membership is more than a credential; it reflects our long-standing investment in this community. We're not a fly-by-night operation. We're your neighbors, accountable to the same business community we serve. You can verify our listing directly through the Chamber's member directory.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Coral Springs Neighborhoods We Serve
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA serves the full range of Coral Springs residential and commercial properties. <strong>Eagle Trace</strong>, the prestigious gated community that once hosted the Honda Classic PGA Tour event at TPC Eagle Trace, features estate homes where premium tile and metal roofing systems demand both HVHZ compliance and HOA approval. <strong>Heron Bay</strong> and <strong>Wyndham Lakes</strong> are among Coral Springs' most sought-after gated communities — large format tile roofing dominates, and community design guidelines govern material selection.
              </p>
              <p>
                <strong>Whispering Woods</strong>, <strong>The Isles</strong>, and <strong>Kensington</strong> represent Coral Springs' upscale residential fabric — meticulously maintained homes where workmanship quality and clean installation are non-negotiable. <strong>Maplewood</strong>, <strong>Ramblewood</strong>, and <strong>Cypress Run</strong> are family-friendly neighborhoods with established housing stock entering first and second replacement cycles, requiring full HVHZ compliance upgrades.
              </p>
              <p>
                <strong>Running Brook</strong> and the areas surrounding the Coral Springs Center for the Arts and Coral Springs Museum of Art form the civic and cultural core of this planned city — a community that takes its standards seriously, from the Florida Panthers IceDen to Florida's only covered bridge, built in 1964, which still stands as a landmark of Coral Springs' unique character.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                High Velocity Hurricane Zone — 175+ MPH Wind Ratings
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Coral Springs sits in South Florida's High Velocity Hurricane Zone, where every roof must withstand 175+ mph wind speeds. Hurricane Wilma's eye passed directly over Coral Springs in 2005, reducing the city's tree canopy by roughly one third — and exposing how many roofs were not truly HVHZ compliant. We use enhanced fastening schedules with ring-shank nails at 6-inch spacing, high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame. Every installation passes Broward County building department inspection on the first attempt.
              </p>
            </div>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Coral Springs Code Compliance</h3>
              <p className="text-zinc-400 leading-relaxed">
                Coral Springs is a master-planned city with some of the most strictly enforced exterior standards in Broward County — including specific roofing materials, colors, and profiles. Our team navigates these requirements daily, ensuring your new roof satisfies both HVHZ code and Coral Springs' community standards simultaneously.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our Coral Springs Roofing Process
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Roofing Services for Coral Springs
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
              Why Coral Springs Homeowners Choose All Phase Construction
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
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Coral Springs Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Coral Springs zip codes including: 33065, 33067, 33071, 33073, 33075, 33076, 33077, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Coral Springs, we provide roofing services throughout Broward County:
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
              What Coral Springs Homeowners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'âââââ'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"
                </p>
                <p className="text-white font-semibold">— Michael R.</p>
                <p className="text-zinc-500 text-sm">Coral Springs Homeowner</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex text-red-500 mb-2">
                    {'âââââ'.split('').map((star, i) => (
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
                    {'âââââ'.split('').map((star, i) => (
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

          <EmbeddedRoofCalculator
            city="Coral Springs"
            county="Broward"
            isHVHZ={true}
          />

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
                <p className="text-zinc-400 text-sm mb-2">Verified Member</p>
                <h3 className="text-xl font-bold text-white">Coral Springs Coconut Creek Regional Chamber of Commerce</h3>
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

          {/* Best Roofers Callout */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Looking for the Best Roofers in Coral Springs?
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Learn how to identify the most qualified roofing contractors in Coral Springs, what credentials matter, and what questions to ask before hiring.
              </p>
              <Link
                to="/locations/coral-springs/best-roofers-coral-springs"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                <span>Best Roofers in Coral Springs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Call (754) 227-5605 or Request Free Estimate
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Serving all of Coral Springs from our Deerfield Beach headquarters — your neighbors since 2006.
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
                <span>Chamber Member</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Dual Licensed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
