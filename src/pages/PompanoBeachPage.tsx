import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PompanoBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Pompano Beach Roofing Contractor | HVHZ Certified | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dual-licensed Pompano Beach roofing contractor (CCC-1331464 & CGC-1526236). Coastal HVHZ expertise. 20+ years. Minutes from Deerfield Beach HQ. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Dual-licensed Pompano Beach roofing contractor (CCC-1331464 & CGC-1526236). Coastal HVHZ expertise. 20+ years. Minutes from Deerfield Beach HQ. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Pompano Beach, roofer Pompano Beach FL, roof replacement Pompano Beach, Pompano Beach roofing company, condo roofing Pompano Beach, commercial roofing Pompano Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Pompano Beach, roofer Pompano Beach FL, roof replacement Pompano Beach, Pompano Beach roofing company, condo roofing Pompano Beach, commercial roofing Pompano Beach';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Pompano Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Pompano Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a new roof cost in Pompano Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof replacement costs in Pompano Beach vary based on roof size, material, and building type. Because the city is in Florida's High Velocity Hurricane Zone (HVHZ), roofing systems must meet stricter standards, which can affect pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Is Pompano Beach located in Florida's High Velocity Hurricane Zone (HVHZ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pompano Beach falls within the HVHZ, meaning all roofing installations must meet enhanced wind uplift, fastening, and material approval requirements under Florida Building Code."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with condo associations and property managers in Pompano Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly work with condo associations, HOAs, and property managers, coordinating inspections, documentation, and phased roofing projects for multi-family properties."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials are best for coastal properties in Pompano Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tile, metal, and flat roofing systems are commonly used. Coastal exposure often makes corrosion-resistant materials and proper underlayment systems especially important."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with insurance documentation and inspections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We assist with inspections, permits, and documentation needed for insurance purposes and code compliance."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Pompano Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/pompano-beach' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
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
      description: "Complete solutions for Pompano Beach homes — from single-family residences to luxury estates. Tile, shingle, metal, and flat systems, all HVHZ compliant with manufacturer warranties.",
      path: '/roofing-services/roof-replacement/',
      icon: Home
    },
    {
      title: 'Commercial Roofing',
      description: "Flat, TPO, modified bitumen, and standing seam metal roofs for Pompano Beach retail centers, office buildings, and industrial facilities. Minimal disruption to operations during installation.",
      path: '/commercial-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair',
      description: "Emergency and scheduled repairs for leaks, storm damage, missing shingles, and coastal corrosion damage. Same-day response for active leaks and storm emergencies.",
      path: '/roof-repair/pompano-beach/',
      icon: Wrench
    },
    {
      title: 'Roof Inspections',
      description: "Comprehensive 21-point inspections for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports with prioritized repair recommendations.",
      path: '/roof-inspection/',
      icon: Shield
    },
    {
      title: 'Tile Roofing',
      description: "Concrete and clay tile installations for Mediterranean-style homes and coastal properties. HVHZ foam-set installation methods for maximum wind resistance.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Standing seam and panel systems rated for 200+ mph winds. 50+ year lifespan with exceptional energy efficiency and salt air corrosion resistance.",
      path: '/metal-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Salt Air & Coastal Exposure',
      description: "With the Atlantic Ocean right there, Pompano Beach properties — especially east of Federal Highway — face constant salt air exposure. We specify corrosion-resistant fasteners and materials rated for coastal environments."
    },
    {
      title: 'Condo & Multi-Family Buildings',
      description: "Pompano Beach has significant condo inventory, from beachfront towers to garden-style communities. We understand board approval processes, phased scheduling, and resident communication."
    },
    {
      title: 'Aging Building Stock',
      description: "Many Pompano Beach buildings date from the 1960s-1980s and are now facing major roof work. We assess these older systems thoroughly and bring them up to current HVHZ standards."
    },
    {
      title: 'Hurricane Season',
      description: "June through November, Pompano Beach is in the crosshairs. Our HVHZ-compliant installations are engineered for high winds and flying debris — because building code is the minimum, not the goal."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Just Down the Road',
      description: "Our headquarters is in Deerfield Beach — just 3 miles away. We're practically neighbors. When you need us, we're there fast."
    },
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find structural issues, deck rot, or stucco damage, we fix it — no waiting for another contractor."
    },
    {
      title: 'Condo & Commercial Experience',
      description: "We work with Pompano Beach condo associations and commercial property managers regularly. We know how to navigate board approvals, phase projects, and communicate with residents."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage."
    }
  ];

  const nearbyCities = [
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl/' },
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl/' },
    { name: 'Lighthouse Point', path: '/roofing-contractor-lighthouse-point-fl/' },
    { name: 'Coconut Creek', path: '/roofing-contractor-coconut-creek-fl/' },
    { name: 'Margate', path: '/roofing-contractor-margate-fl/' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl/' }
  ];

  const faqs = [
    {
      question: 'What makes All Phase Construction different from other Pompano Beach roofers?',
      answer: "We hold both a Florida Certified Roofing Contractor license (CCC-1331464) and Certified General Contractor license (CGC-1526236). When we encounter structural issues during a roof replacement, we can evaluate and repair the complete system under one warranty — no delays, no additional contractors, no warranty gaps."
    },
    {
      question: 'Does Pompano Beach require HVHZ-compliant roofing?',
      answer: "Yes. Pompano Beach is in the High Velocity Hurricane Zone, requiring installations that withstand 175+ mph winds. We use enhanced fastening schedules, high-wind rated materials, and engineered roof-to-wall connections on every project. Every installation passes Broward County inspection on the first attempt."
    },
    {
      question: 'How does salt air affect roofs in Pompano Beach?',
      answer: "Salt air accelerates corrosion of fasteners, flashing, and metal components. We use marine-grade corrosion-resistant materials and sealed deck systems on all coastal properties. Every fastener, every flashing, every underlayment we specify accounts for salt air exposure."
    },
    {
      question: 'Do you work with condo associations and property managers?',
      answer: "Absolutely. We regularly serve Pompano Beach's condo associations and commercial property managers. We understand board approval processes, phased scheduling, resident communication, and the unique requirements of multi-family properties."
    },
    {
      question: 'Do you offer financing for Pompano Beach roofing projects?',
      answer: "Yes. We offer flexible financing plans including credit-based and non-credit-based options with competitive rates. Use our Roof Cost Calculator for a preliminary estimate based on your roof type and square footage."
    },
    {
      question: 'How quickly can you respond to emergency repairs?',
      answer: "We provide same-day response for active leaks and storm emergencies. Our Deerfield Beach headquarters is just minutes from Pompano Beach, allowing us to respond quickly when you need us most."
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
            <span className="text-white">Pompano Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Pompano Beach, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Dual-Licensed Roofing & General Contractor
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Operating from our Deerfield Beach headquarters just minutes away, All Phase Construction USA brings over two decades of roofing excellence to Pompano Beach — serving residential and commercial property owners throughout Broward County with both a Florida Certified Roofing Contractor license (CCC-1331464) and Certified General Contractor license (CGC-1526236).
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Locally owned and operated, our dual-licensed team delivers comprehensive roofing solutions that meet South Florida's demanding building codes and withstand our region's most intense weather conditions. We specialize in tile, shingle, metal, and flat roofing systems, with particular expertise in HVHZ installations that provide maximum protection for Pompano Beach's coastal properties.
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
                <span>Coastal Expertise</span>
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
                Get Free Inspection
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
              Why Dual Licensing Matters in Pompano Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Most Pompano Beach roofing contractors hold only a CCC license, limiting them to roof surface work. When they encounter structural issues — damaged trusses, inadequate roof-to-wall connections, compromised decking — they must stop and hire a separate general contractor, creating delays, cost overruns, and warranty gaps.
              </p>
              <p>
                Our CGC license authorizes us to evaluate and repair the complete structural system. During every Pompano Beach roof replacement, we inspect deck fastening, assess truss integrity, verify roof-to-wall connections, and ensure full Florida Building Code compliance — all under one warranty, one contractor, one point of responsibility.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Coastal Roofing Challenges in Pompano Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Pompano Beach sits directly on the Atlantic coast and Intracoastal Waterway, creating a combination of roofing challenges that inland properties never face. Salt air corrosion accelerates fastener and flashing degradation — requiring corrosion-resistant materials and sealed deck systems on every coastal installation.
              </p>
              <p>
                Wind exposure from both the ocean and Intracoastal demands full HVHZ compliance, with every roof engineered to withstand 175+ mph wind speeds. We use enhanced fastening schedules with ring-shank nails at 6-inch spacing, high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame.
              </p>
              <p>
                Pompano Beach's position as a premier diving destination — with Shipwreck Park's 17 artificial reefs just offshore — is a testament to the marine environment these homes and businesses sit in daily. Every fastener, every flashing, every underlayment we specify accounts for that salt air exposure. Every installation passes Broward County building department inspection on the first attempt.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pompano Beach Neighborhoods We Serve
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  All Phase Construction USA serves the full range of Pompano Beach residential and commercial properties. Along the Intracoastal, Cypress Harbor, Snug Harbor, Garden Isles, and Boulevard Park Isles feature canal-front homes with private docks where salt air corrosion and coastal wind exposure demand premium marine-grade materials and corrosion-resistant fasteners on every project.
                </p>
                <p>
                  Hillsboro Shores provides oceanfront properties with direct Atlantic exposure — the most demanding roofing environment in all of Broward County. Santa Barbara Estates and Palm Aire offer a mix of Mediterranean-style homes and country club properties where tile roofing dominates and HOA color and material guidelines must be navigated alongside HVHZ code requirements.
                </p>
                <p>
                  Cresthaven and Highlands represent Pompano Beach's established residential core — mid-century ranch homes and newer builds entering full replacement cycles. Old Pompano and Downtown Pompano Beach are experiencing active revitalization, with the Bailey Contemporary Arts Center and Pompano Beach Cultural Center anchoring a growing arts district where commercial roofing demand is rising alongside residential.
                </p>
                <p>
                  The historic Hillsboro Inlet Lighthouse, standing just north of the city since 1907, marks the northern boundary of our Pompano Beach service area — a reminder of how long this coastline has demanded structures built to withstand the Atlantic.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                High Velocity Hurricane Zone Compliance
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Pompano Beach is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Materials</h3>
                <p className="text-zinc-400 leading-relaxed">
                  All roofing materials must have specific Florida Product Approvals for HVHZ use. We only install products that meet these requirements.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Fastener patterns, wind uplift calculations, and attachment methods must meet HVHZ standards. Our crews are trained specifically for these requirements.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  HVHZ projects require detailed permit applications, wind load calculations, and inspection documentation. We handle all of it.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Pompano Beach has taken direct hits from major hurricanes. HVHZ codes exist because we've learned what happens when roofs aren't built to withstand these storms. We install every roof as if the next one is coming this season."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Roofing Services in Pompano Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                From emergency repairs to complete replacements — serving residential and commercial properties.
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
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Project Planning
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Proper planning is the foundation of any successful roofing project, whether you're considering a <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">full roof replacement</Link> or a targeted repair. The process starts with a thorough assessment of your existing roof to determine its current condition and identify underlying issues. All Phase Construction USA works closely with you to understand your specific needs, preferences, and budget, developing a detailed plan for your project.
                </p>
                <p>
                  Key factors such as roof size, pitch, and structure are carefully evaluated to ensure the right approach and selection of quality roofing materials. During this stage, we review local building codes and Broward County regulations to guarantee compliance and avoid hidden costs. Permits for roof replacement in Pompano Beach typically range from $100 to $500. By investing in comprehensive project planning, homeowners can feel confident their roofing project will be completed efficiently, on budget, and to the highest standards.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Consultation and Advice
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  All Phase Construction USA offers more than just installation — we provide expert consultation and advice tailored to your specific needs. During a roofing consultation, our team will thoroughly assess your existing roof, identify any issues such as leaks or damaged shingles, and recommend the most effective solution, whether it's roof repair, roof replacement, or routine maintenance. You'll receive guidance on selecting the best roofing materials and gain a clear understanding of the costs involved.
                </p>
                <p>
                  Consultations also cover the importance of regular <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspections</Link> and <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline transition-colors">wind mitigation inspections</Link>, which help protect your property from severe weather and can lower your insurance premiums by 20–45%. By working with All Phase Construction USA, you'll receive honest recommendations, cost-effective solutions, and the peace of mind that comes from making informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Materials and Options
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Choosing the right roofing materials is a crucial decision that affects the performance, appearance, and longevity of your roof. Homeowners in Pompano Beach have access to a wide variety of options, each offering unique benefits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link to="/shingle-roofing" className="hover:text-red-500 transition-colors">Asphalt Shingles</Link>
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    The most common and affordable roofing material, ideal for budget-conscious homeowners. Lifespan: 15–30 years.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link to="/shingle-roofing" className="hover:text-red-500 transition-colors">Architectural Shingles</Link>
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Added dimension and style compared to standard three-tab shingles, with improved wind resistance.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link to="/metal-roofing" className="hover:text-red-500 transition-colors">Metal Roofing</Link>
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Excellent durability and energy efficiency that can withstand Florida's challenging weather. Lifespan: up to 70 years.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link to="/tile-roofing" className="hover:text-red-500 transition-colors">Concrete and Clay Tile</Link>
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Resilient and classic, known for their longevity. Clay tile roofs can last 50–100 years.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Slate Tile</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Luxurious, long-lasting solution with lifespans up to 150 years.
                  </p>
                </div>
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link to="/flat-roofing" className="hover:text-red-500 transition-colors">Flat Roofing Systems</Link>
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    TPO, modified bitumen, and SPF options for commercial and low-slope residential applications.
                  </p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mt-8">
                Our team can help you compare these materials, taking into account your budget, climate considerations, and personal style preferences. Energy-efficient materials like metal roofs can help reduce energy bills over time.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Safety and Wind Mitigation
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Safety is paramount during any roofing project, both for homeowners and contractors. A damaged roof can lead to serious issues such as roof leaks, structural problems, or even collapse if not addressed properly. Before any work begins, a comprehensive <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspection</Link> is conducted to identify potential hazards and ensure the roof is safe to access.
                </p>
                <p>
                  Implementing <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline transition-colors">wind mitigation measures</Link> is especially important for Pompano Beach properties located in Florida's High Velocity Hurricane Zone. Wind mitigation upgrades can lower homeowner insurance premiums by 20–45% while strengthening your roof against storm damage. All Phase Construction USA is a certified wind mitigator and can perform both the upgrades and the inspection documentation your insurance company requires.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Maintenance and Inspection
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Regular maintenance and inspection are key to maximizing the lifespan of your roof and preventing unexpected expenses. Scheduling <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">annual roof inspections</Link> allows homeowners to catch small issues — such as missing shingles or loose flashing — before they turn into costly repairs. These inspections are especially important after severe weather, as they can reveal hidden damage that might otherwise go unnoticed.
                </p>
                <p>
                  Homeowners can also take simple steps to protect their roof, such as cleaning gutters and downspouts to prevent water buildup and trimming overhanging branches. All Phase Construction USA offers comprehensive <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline transition-colors">roof maintenance programs</Link> designed specifically for South Florida conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Removal and Cleanup
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  The removal and cleanup phase is a critical part of any roof replacement project. All Phase Construction USA carefully removes your old roof, including all shingles, underlayment, and other materials, ensuring the process is safe and efficient. The cost for roofing removal typically ranges from $0.40 to $2.00 per square foot, depending on the type of material and complexity of the job.
                </p>
                <p>
                  Proper cleanup is just as important as the installation itself. All debris is thoroughly cleared away, and the roof deck and structure are inspected for any hidden damage that could affect the new installation. This attention to detail ensures your new roof is built on a solid, reliable foundation.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Pompano Beach Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Pompano Beach's coastal location and building mix create specific challenges:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Roofing Considerations in Pompano Beach, Florida
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Why It Matters in Pompano Beach</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High Velocity Hurricane Zone (HVHZ)</td>
                        <td className="py-3 px-4">Pompano Beach is located within Florida's HVHZ, requiring stricter wind uplift ratings, fastening schedules, and approved roofing assemblies.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Coastal & Salt Air Exposure</td>
                        <td className="py-3 px-4">Properties closer to the ocean and Intracoastal are exposed to salt air, increasing the importance of corrosion-resistant materials and proper coatings.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Condos & Multi-Family Buildings</td>
                        <td className="py-3 px-4">Pompano Beach has a high concentration of condos and multi-family properties, requiring experience with large-scale roofing systems and HOA coordination.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Roofing Materials</td>
                        <td className="py-3 px-4">Tile, metal, and flat roofing systems are common, with material selection often influenced by wind resistance, building height, and long-term durability.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Metal Roofing Requirements</td>
                        <td className="py-3 px-4">Metal roofing systems must meet HVHZ approval standards, including UL listings, enhanced underlayment systems, and fire barrier requirements.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Storm & Rain Exposure</td>
                        <td className="py-3 px-4">Heavy rain events and tropical systems make proper drainage, flashing, and waterproofing critical to roof performance.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-4xl mx-auto">
                Roofing in Pompano Beach requires specialized HVHZ expertise, coastal material knowledge, and experience with both residential and multi-family properties. All Phase Construction brings over 20 years of local experience to every project, ensuring your roof meets strict wind codes, resists salt air corrosion, and delivers long-term performance in South Florida's demanding coastal environment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Condo & Multi-Family Roofing in Pompano Beach
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Consideration</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">What It Means for Pompano Beach Condos</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High-Rise Wind Exposure</td>
                        <td className="py-3 px-4">Many Pompano Beach condos are mid- and high-rise structures exposed to elevated wind pressures requiring enhanced uplift-rated systems.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">HVHZ Compliance</td>
                        <td className="py-3 px-4">All condo roofing systems must meet Florida HVHZ standards, including approved assemblies and fastening schedules.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Flat & Low-Slope Roofing</td>
                        <td className="py-3 px-4">TPO, modified bitumen, and other flat roofing systems are common and must be designed for drainage and long-term performance.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">HOA & Board Coordination</td>
                        <td className="py-3 px-4">Condo projects often require phased scheduling, documentation, and coordination with associations and property managers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Roofing Costs & Payment Options in Pompano Beach
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Many Pompano Beach homeowners and condo associations explore costs and financing before committing to a roofing project. Understanding your budget and available payment options helps you plan effectively and make informed decisions about your property's most important investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/roof-cost-calculator/"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-red-600 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                      Roof Cost Calculator
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Get an instant estimate for your Pompano Beach roofing project based on your property details and material preferences.
                    </p>
                  </Link>
                  <Link
                    to="/blog/roof-pricing-financing-guide/"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-red-600 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                      Roof Pricing & Financing Guide
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Learn about typical roofing costs, financing options, and payment plans available for South Florida properties.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Pompano Beach Property Owners Choose All Phase Construction
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
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Partnerships and Certifications
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  All Phase Construction USA holds certifications from leading manufacturers including GAF, Owens Corning Platinum, CertainTeed Master, and Tamko Pro Platinum. These partnerships give us access to top-tier roofing materials and advanced installation techniques.
                </p>
                <p>
                  In addition to manufacturer certifications, we hold credentials for specialized services including wind mitigation inspection and architectural shingle installation. These certifications reflect our commitment to ongoing training and excellence in roofing services. When you work with All Phase Construction USA, you benefit from quality roofing materials, expert installation, and comprehensive warranties.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Education and Resources
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  All Phase Construction USA is dedicated to empowering homeowners and business owners with the knowledge they need to make informed decisions about their roofing needs. Our <Link to="/learning-center" className="text-red-500 hover:text-red-400 underline transition-colors">Learning Center</Link> provides clear information on different types of roofing materials, guidance on selecting the best option for your budget and climate, and tips for maintaining your roof.
                </p>
                <p>
                  Resources cover topics like how to <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline transition-colors">spot early signs of roof damage</Link>, <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline transition-colors">understanding your roofing warranty</Link>, how to <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="text-red-500 hover:text-red-400 underline transition-colors">file an insurance claim</Link> after storm damage, and how <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline transition-colors">wind mitigation</Link> can lower your insurance premiums. Visit our <Link to="/learning-center" className="text-red-500 hover:text-red-400 underline transition-colors">Learning Center</Link> to explore all of our roofing guides and educational content.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Permits and Compliance
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Securing the <Link to="/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida" className="text-red-500 hover:text-red-400 underline transition-colors">proper permits</Link> and ensuring compliance with local regulations are essential steps in any roofing project. Homeowners should always verify that their roofing contractor obtains all necessary permits and adheres to building codes, including wind mitigation and energy efficiency standards.
                </p>
                <p>
                  All Phase Construction USA manages the permitting process from start to finish, submitting all required documentation and ensuring work is performed according to code. As GAF Certified, Owens Corning Platinum, CertainTeed Master, and Tamko Pro Platinum certified contractors, we meet the highest manufacturer standards for installation quality. By prioritizing permits and compliance, you avoid costly fines, guarantee a safe and reliable installation, and safeguard your investment for the long term.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pompano Beach Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Pompano Beach zip codes including: 33060, 33061, 33062, 33063, 33064, 33068, 33069, 33072, 33074, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Serving Pompano Beach & Surrounding Areas
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Based in Deerfield Beach, we provide roofing services throughout South Florida including Pompano Beach and surrounding communities. Our local presence means faster response times and familiarity with regional building requirements. We proudly serve nearby areas including <Link to="/locations/fort-lauderdale" className="text-red-500 hover:text-red-400 transition-colors">Fort Lauderdale</Link>, <Link to="/locations/coral-springs" className="text-red-500 hover:text-red-400 transition-colors">Coral Springs</Link>, <Link to="/locations/deerfield-beach" className="text-red-500 hover:text-red-400 transition-colors">Deerfield Beach</Link>, <Link to="/locations/boca-raton" className="text-red-500 hover:text-red-400 transition-colors">Boca Raton</Link>, <Link to="/locations/delray-beach" className="text-red-500 hover:text-red-400 transition-colors">Delray Beach</Link>, and <Link to="/locations/boynton-beach" className="text-red-500 hover:text-red-400 transition-colors">Boynton Beach</Link>.
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
            city="Pompano Beach"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Pompano Beach Property Owners
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
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free estimate on your roofing project and explore your options with transparent pricing.
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
