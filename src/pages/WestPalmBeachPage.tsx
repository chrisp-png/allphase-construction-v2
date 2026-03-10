import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function WestPalmBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'West Palm Beach Roofing Contractor | All Phase USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dual-licensed West Palm Beach roofing contractor (CCC-1331464 & CGC-1526236). HVHZ certified. Historic district expertise. 20+ years. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Dual-licensed West Palm Beach roofing contractor (CCC-1331464 & CGC-1526236). HVHZ certified. Historic district expertise. 20+ years. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor West Palm Beach, roofer West Palm Beach FL, roof replacement West Palm Beach, WPB roofing company, best roofer West Palm Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor West Palm Beach, roofer West Palm Beach FL, roof replacement West Palm Beach, WPB roofing company, best roofer West Palm Beach';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('West Palm Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'West Palm Beach',
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
      { name: 'West Palm Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/west-palm-beach' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    [localBusinessSchema, breadcrumbSchema, faqSchema].forEach(schema => {
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
      title: 'Roof Replacement',
      description: "Complete HVHZ-compliant replacement for all roof types with manufacturer warranties.",
      path: '/roofing-services/roof-replacement/',
      icon: Home
    },
    {
      title: 'Emergency Repairs',
      description: "24/7 response for active leaks, storm damage, missing shingles, and emergency tarping.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Professional Inspections',
      description: "21-point inspections for insurance documentation, pre-purchase evaluations, and maintenance assessments.",
      path: '/roof-inspection/',
      icon: Shield
    },
    {
      title: 'Tile Roofing',
      description: "Clay and concrete tile installations for historic districts and Mediterranean-style homes.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Standing seam and panel systems for commercial buildings and modern residences.",
      path: '/metal-roofing/',
      icon: Building2
    },
    {
      title: 'Commercial Roofing',
      description: "TPO, modified bitumen, and BUR systems for commercial properties throughout West Palm Beach.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const nearbyCities = [
    { name: 'Palm Beach', path: '/roofing-contractor-palm-beach-fl/' },
    { name: 'Palm Beach Gardens', path: '/roofing-contractor-palm-beach-gardens-fl/' },
    { name: 'Lake Worth', path: '/roofing-contractor-lake-worth-fl/' },
    { name: 'North Palm Beach', path: '/roofing-contractor-north-palm-beach-fl/' },
    { name: 'Riviera Beach', path: '/roofing-contractor-riviera-beach-fl/' },
    { name: 'Greenacres', path: '/roofing-contractor-greenacres-fl/' }
  ];

  const faqs = [
    {
      question: 'What makes All Phase Construction different from other West Palm Beach roofers?',
      answer: 'We hold both a Florida Certified Roofing Contractor license (CCC-1331464) and Certified General Contractor license (CGC-1526236), giving us structural authority that standard roofing contractors lack. When we encounter structural issues during a roof replacement, we can evaluate and repair the complete system under one warranty — no delays, no additional contractors.'
    },
    {
      question: 'Does West Palm Beach require HVHZ-compliant roofing?',
      answer: 'Yes. West Palm Beach is in the High Velocity Hurricane Zone, requiring installations that withstand 175+ mph winds. We use enhanced fastening schedules, high-wind rated materials, and engineered roof-to-wall connections on every project. Every installation passes Palm Beach County inspection on the first attempt.'
    },
    {
      question: 'Can you work on historic district properties in West Palm Beach?',
      answer: 'Absolutely. We have extensive experience with West Palm Beach\'s historic districts including Grandview Heights, Old Northwood, Flamingo Park, and El Cid. We understand preservation board requirements, can source period-correct materials, and have the structural expertise to bring older homes to current hurricane code standards.'
    },
    {
      question: 'Do you offer financing for West Palm Beach roofing projects?',
      answer: 'Yes. We offer flexible financing plans including credit-based and non-credit-based options with competitive rates and flexible terms. Visit our Roof Pricing Guide for detailed cost information by material and roof size.'
    },
    {
      question: 'How long does a roof replacement take in West Palm Beach?',
      answer: 'Most residential projects take 3-7 days depending on roof size, material choice, and property complexity. Historic district projects may require additional time for preservation board coordination. We provide detailed timelines during inspection and handle all permit and inspection scheduling.'
    },
    {
      question: 'Do you install impact windows and doors?',
      answer: 'Yes. As a dual-licensed contractor, we provide complete storm protection services including impact-resistant windows and doors. Many homeowners upgrade their entire building envelope for maximum hurricane protection and insurance savings.'
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">West Palm Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                West Palm Beach, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Dual-Licensed Roofing & General Contractor
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Dispatched from our Deerfield Beach HQ, All Phase Construction USA serves West Palm Beach with both Florida Certified Roofing Contractor license (CCC-1331464) and Certified General Contractor license (CGC-1526236) — structural authority that standard roofing contractors cannot match.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Dual Licensed (CCC & CGC)</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Certified</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Historic District Expertise</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Family Owned</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in West Palm Beach
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
              Why Dual Licensing Matters in West Palm Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Most West Palm Beach roofing contractors hold only a CCC license, limiting them to roof surface work. When they encounter structural issues — damaged trusses, inadequate roof-to-wall connections, compromised decking — they must stop and hire a separate general contractor, creating delays, cost overruns, and warranty gaps.
              </p>
              <p>
                Our CGC license authorizes us to evaluate and repair the complete structural system supporting your roof. During every West Palm Beach roof replacement, we inspect deck fastening, assess truss integrity, verify roof-to-wall connections, and ensure full Florida Building Code compliance — all under one warranty.
              </p>
              <p>
                Family owned and operated, with decades of experience across West Palm Beach's most demanding residential, commercial, and historic district projects. We also perform impact window and door installations as part of our comprehensive storm protection services.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Certified
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                High Velocity Hurricane Zone Compliance
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                West Palm Beach sits in South Florida's High Velocity Hurricane Zone (HVHZ), where building codes mandate the most stringent wind resistance standards in the United States. Every roof installation must withstand 175+ mph wind speeds.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Enhanced Fastening Schedules</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We use ring-shank nails at 6-inch spacing, high-wind rated shingles with reinforced mat construction, and upgraded hip and ridge cap systems with specialty adhesive.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Engineered Roof-to-Wall Connections</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every installation includes engineered connections that transfer wind loads directly to the structural frame — critical for hurricane protection.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">First-Pass Inspection Approval</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every installation passes Palm Beach County building department inspection on the first attempt. Many homeowners discover too late that their contractor's work doesn't meet code.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Insurance Premium Reductions</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Florida building codes require hurricane-rated materials that can qualify homeowners for insurance premium reductions through wind mitigation.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Florida's intense heat, humidity, salt air, and hurricane seasons place unique demands on every roofing system. HVHZ compliance isn't optional — it's the minimum standard for life safety."
            </p>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Palm Beach County Building Code Expertise
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Operating from our Deerfield Beach headquarters, we serve West Palm Beach with intimate knowledge of Palm Beach County building codes, permit requirements, and inspection procedures. Our established relationships with Palm Beach County building officials and proven track record of first-pass inspection approvals means your project moves from permit application through final certificate of completion without delays.
                </p>
                <p>
                  Out-of-area contractors frequently cause delays of weeks or months navigating Palm Beach County-specific requirements our team handles daily.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Historic District Roofing Expertise
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  All Phase Construction USA has completed roofing projects in West Palm Beach's historic districts, where strict preservation guidelines require matching original clay tile profiles, colors, and installation methods. These installations demand sourcing period-correct materials and executing precise craftsmanship to maintain the architectural character of historically designated properties — expertise that only a dual-licensed contractor with both roofing and general contracting authority can deliver.
                </p>
                <p>
                  West Palm Beach is home to some of South Florida's most architecturally significant neighborhoods, including the Grandview Heights Historic District, Old Northwood, Flamingo Park, and El Cid. Replacing a roof on a historically designated property involves coordination with local preservation boards, adherence to design guidelines, and the structural knowledge to work with older building systems while bringing the roof to current hurricane code standards.
                </p>
                <p>
                  Our CGC license gives us the authority to address the structural challenges common in older homes, including outdated truss systems, non-standard decking, and original roof-to-wall connections that predate modern wind codes.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                West Palm Beach Neighborhoods We Serve
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  All Phase Construction USA serves the full range of West Palm Beach residential and commercial properties. Downtown, the Clematis Street corridor and Rosemary Square area feature a mix of historic commercial buildings and newer mixed-use properties requiring both preservation sensitivity and HVHZ compliance.
                </p>
                <p>
                  El Cid, Flamingo Park, and Grandview Heights are West Palm Beach's most architecturally significant residential neighborhoods — Mediterranean Revival and Spanish Colonial homes where clay tile roofing dominates and period-correct materials are required. Old Northwood and Northwood Village feature Craftsman and bungalow-style homes entering their first or second full replacement cycle.
                </p>
                <p>
                  SoSo (South of Southern), Prospect Park, and Kenilworth Park represent established mid-century residential neighborhoods where aging roofs require full HVHZ upgrades. The Palm Beach Lakes corridor and Intracoastal waterfront communities bring the same coastal salt air and wind exposure demands as Broward's waterfront neighborhoods, requiring corrosion-resistant fasteners and sealed decking systems throughout.
                </p>
                <p>
                  Proximity to Palm Beach Island means we regularly serve some of the highest-value properties in all of South Florida — estates where material quality, craftsmanship, and documentation standards are non-negotiable.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roof Replacement Cost in West Palm Beach (2026)
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Roof replacement costs in West Palm Beach run higher than state averages due to HVHZ compliance requirements, Palm Beach County permit fees, and material specifications mandated by the Florida Building Code. Here's what homeowners should budget for in 2026 based on material type and a standard 2,000-square-foot residential roof:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Architectural Shingles</h3>
                  <p className="text-red-500 text-2xl font-bold mb-3">$12,000 – $18,000</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Most affordable option for West Palm Beach homes. Impact-resistant Class 4 shingles recommended for maximum insurance savings. Typical lifespan: 20–30 years with proper installation and maintenance.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Concrete Tile</h3>
                  <p className="text-red-500 text-2xl font-bold mb-3">$22,000 – $38,000</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    The dominant material in West Palm Beach's historic districts and Mediterranean-style homes. Requires structural verification due to weight. Lifespan: 40–50+ years. Often required by HOAs and preservation boards.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Standing Seam Metal</h3>
                  <p className="text-red-500 text-2xl font-bold mb-3">$25,000 – $42,000</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Highest wind resistance and energy efficiency. Popular for waterfront properties along the Intracoastal and Palm Beach Island. Lifespan: 40–60+ years. Excellent ROI through insurance premium reductions.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Flat Roof (TPO/Modified)</h3>
                  <p className="text-red-500 text-2xl font-bold mb-3">$16,000 – $30,000</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Common for commercial properties and modern residential designs in downtown West Palm Beach. TPO and modified bitumen systems with proper drainage design. Lifespan: 20–30 years.
                  </p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-4">
                These ranges include materials, labor, permits, debris removal, and all required Palm Beach County inspections. Costs vary based on roof complexity (number of penetrations, pitch, accessibility), decking condition, and whether structural repairs are needed. Our dual-licensing means we can handle structural work under the same contract — no separate general contractor needed if we find truss or decking issues during tear-off.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Get a quick ballpark estimate with our <Link to="/roof-cost-calculator/" className="text-red-500 hover:text-red-400 underline transition-colors">free online roof cost calculator</Link>, or call <a href="tel:+17542275605" className="text-red-500 hover:text-red-400 underline transition-colors">(754) 227-5605</a> for a detailed, no-obligation assessment at your West Palm Beach property.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Roofing Services in West Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                From emergency repairs to complete replacements — all roof types, all project sizes.
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
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                West Palm Beach Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all West Palm Beach zip codes including: 33401, 33402, 33403, 33404, 33405, 33406, 33407, 33409, 33411, 33412, 33413, 33414, 33415, 33416, 33417, 33419, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to West Palm Beach, we provide roofing services throughout Palm Beach and Broward Counties:
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

          <EmbeddedRoofCalculator
            city="West Palm Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          {/* BEST ROOFERS CALLOUT */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Looking for the Best Roofers in West Palm Beach?
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Learn how to identify the most qualified roofing contractors in West Palm Beach, what credentials matter, and what questions to ask before hiring.
                </p>
                <Link
                  to="/locations/west-palm-beach/best-roofers-west-palm-beach"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  <span>Best Roofers in West Palm Beach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Flexible Financing for West Palm Beach Homeowners
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Flexible financing plans designed to fit your budget, including credit-based and non-credit-based options with competitive rates and flexible repayment terms — helping West Palm Beach homeowners protect their properties without delay.
                </p>
                <p>
                  View our <Link to="/roof-pricing-guide/" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Pricing Guide</Link> for detailed cost breakdowns by material and roof size.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Educational Resources for West Palm Beach Property Owners
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Our <Link to="/learning-center/" className="text-red-500 hover:text-red-400 underline transition-colors">Learning Center</Link> provides in-depth guides on roof replacement costs, wind mitigation savings, insurance claim processes, and selecting the right roofing materials for West Palm Beach properties.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                What West Palm Beach Homeowners Say
              </h2>
              <div className="space-y-6">
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <p className="text-zinc-300 leading-relaxed mb-4 italic">
                    "Graham and his team at All Phase Construction did an outstanding job on our tile roof replacement. Professional from start to finish."
                  </p>
                  <p className="text-zinc-500 text-sm">— West Palm Beach Homeowner</p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <p className="text-zinc-300 leading-relaxed mb-4 italic">
                    "The attention to detail and quality of workmanship exceeded our expectations. They handled our historic home with the care it deserved."
                  </p>
                  <p className="text-zinc-500 text-sm">— Old Northwood Resident</p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <p className="text-zinc-300 leading-relaxed mb-4 italic">
                    "All Phase handled our commercial building's roof replacement with minimal disruption to our business operations. Highly recommend."
                  </p>
                  <p className="text-zinc-500 text-sm">— Downtown West Palm Beach Property Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from West Palm Beach Property Owners
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
              Ready for a Free Roof Inspection in West Palm Beach?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and give you honest recommendations — no pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
    </div>
  );
}
