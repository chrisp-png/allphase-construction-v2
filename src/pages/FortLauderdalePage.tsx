import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function FortLauderdalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Fort Lauderdale Roofing Contractor | All Phase USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor in Fort Lauderdale, FL. HVHZ-certified, dual-licensed. Tile, metal, shingle & flat roofing. Free inspections.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor in Fort Lauderdale, FL. HVHZ-certified, dual-licensed. Tile, metal, shingle & flat roofing. Free inspections.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Fort Lauderdale, roofer Fort Lauderdale FL, roof replacement Fort Lauderdale, Fort Lauderdale roofing company, best roofer in Fort Lauderdale, commercial roofing Fort Lauderdale');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Fort Lauderdale, roofer Fort Lauderdale FL, roof replacement Fort Lauderdale, Fort Lauderdale roofing company, best roofer in Fort Lauderdale, commercial roofing Fort Lauderdale';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Fort Lauderdale');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Fort Lauderdale',
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
          "name": "Is Fort Lauderdale located in Florida's High Velocity Hurricane Zone (HVHZ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Fort Lauderdale is within the HVHZ, requiring roofing systems to meet stricter wind uplift, fastening, and installation standards."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle high-rise and condo roofing projects in Fort Lauderdale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Fort Lauderdale has a large number of condos and high-rise buildings, and we have experience managing roofing projects for multi-family and commercial properties."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials are commonly used in Fort Lauderdale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tile, metal, flat roofing systems, and architectural shingles are commonly used, depending on building height, location, and code requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How do coastal conditions affect roof lifespan in Fort Lauderdale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salt air, wind exposure, and heavy rain can accelerate wear, making proper material selection, installation, and maintenance critical for long-term performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can you coordinate roofing projects with HOAs and condo boards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly coordinate with HOAs and condo boards, providing documentation, inspections, and clear communication throughout the project."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Fort Lauderdale', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/fort-lauderdale' }
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
      title: 'Roof Replacement',
      description: "Complete HVHZ-compliant replacement for all roof types with manufacturer warranties. See our 10-step replacement process.",
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
      path: '/roofing-services/roof-inspection/',
      icon: Shield
    },
    {
      title: 'Metal Roofing',
      description: "Standing seam systems rated 200+ mph, 50-year lifespan, solar heat reflection for reduced cooling costs.",
      path: '/metal-roofing/',
      icon: Building2
    },
    {
      title: 'Flat Roofing',
      description: "TPO, modified bitumen, and built-up roofing for Fort Lauderdale commercial properties.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Impact Windows & Doors',
      description: "Complete storm protection upgrades for full envelope protection.",
      path: '/contact/',
      icon: Shield
    }
  ];

  const challenges = [
    {
      title: 'Salt Air & Waterfront Exposure',
      description: "With 165 miles of waterways, Fort Lauderdale has more waterfront property than almost any city in Florida. Salt air and moisture accelerate corrosion. We specify marine-grade fasteners and corrosion-resistant materials for waterfront properties."
    },
    {
      title: 'Hurricane History',
      description: "Fort Lauderdale has taken direct and near-direct hits from multiple major hurricanes. Our HVHZ-compliant installations are engineered for the worst-case scenario — because eventually, it happens."
    },
    {
      title: 'Diverse Housing Stock',
      description: "From 1920s bungalows to 2020s new construction, Fort Lauderdale has it all. Older homes often need complete system replacement, not just new shingles over failing underlayment. We assess the full system."
    },
    {
      title: 'High-Rise Condos',
      description: "Fort Lauderdale's beachfront is lined with high-rise condos. These buildings have unique challenges: phased scheduling, resident communication, equipment staging, and association approval processes. We handle all of it."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find rotted decking, structural issues, or stucco damage at roof transitions, we fix it — no waiting for another contractor."
    },
    {
      title: 'Local & Established',
      description: "Headquartered in Deerfield Beach, just 10 miles north. We've served Fort Lauderdale for over 20 years. We're not storm chasers — we're your long-term roofing partner."
    },
    {
      title: 'Major Project Experience',
      description: "Trusted by Fort Lauderdale Building Department, FLL Airport, Mai-Kai Historic Restoration, and Broward County facilities. If institutions trust us with their most critical projects, you can too."
    },
    {
      title: 'First-Pass Inspections',
      description: "Our established relationships with Broward County building officials and proven track record means your project moves from permit application through final certificate of completion without delays."
    }
  ];

  const testimonials = [
    {
      quote: "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!",
      author: "Michael R.",
      location: "Fort Lauderdale Homeowner"
    },
    {
      quote: "We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship.",
      author: "Jennifer L.",
      location: "Broward County"
    },
    {
      quote: "All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience.",
      author: "David S.",
      location: "Commercial Property Owner"
    }
  ];

  const nearbyCities = [
    { name: 'Oakland Park', path: '/roofing-contractor-oakland-park-fl/' },
    { name: 'Wilton Manors', path: '/roofing-contractor-wilton-manors-fl/' },
    { name: 'Lauderdale-by-the-Sea', path: '/roofing-contractor-lauderdale-by-the-sea-fl/' },
    { name: 'Pompano Beach', path: '/roofing-contractor-pompano-beach-fl/' },
    { name: 'Plantation', path: '/roofing-contractor-plantation-fl/' },
    { name: 'Davie', path: '/roofing-contractor-davie-fl/' }
  ];

  const faqs = [
    {
      question: "Is Fort Lauderdale located in Florida's High Velocity Hurricane Zone (HVHZ)?",
      answer: "Yes. Fort Lauderdale is within the HVHZ, requiring roofing systems to meet stricter wind uplift, fastening, and installation standards."
    },
    {
      question: 'Do you handle high-rise and condo roofing projects in Fort Lauderdale?',
      answer: "Yes. Fort Lauderdale has a large number of condos and high-rise buildings, and we have experience managing roofing projects for multi-family and commercial properties."
    },
    {
      question: 'What roofing materials are commonly used in Fort Lauderdale?',
      answer: "Tile, metal, flat roofing systems, and architectural shingles are commonly used, depending on building height, location, and code requirements."
    },
    {
      question: 'How do coastal conditions affect roof lifespan in Fort Lauderdale?',
      answer: "Salt air, wind exposure, and heavy rain can accelerate wear, making proper material selection, installation, and maintenance critical for long-term performance."
    },
    {
      question: 'Can you coordinate roofing projects with HOAs and condo boards?',
      answer: "Yes. We regularly coordinate with HOAs and condo boards, providing documentation, inspections, and clear communication throughout the project."
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
            <span className="text-white">Fort Lauderdale</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expert Roofing Contractor in Fort Lauderdale, FL
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Dual-Licensed HVHZ Specialist — Dispatched from Deerfield Beach HQ
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Dispatched from our Deerfield Beach HQ, All Phase Construction USA is a dual-licensed roofing contractor serving Fort Lauderdale with both a Florida Certified Roofing Contractor license (CCC-1331464) and Certified General Contractor license (CGC-1526236) — structural authority that standard roofing contractors cannot match. Family owned and operated, with decades of experience across Fort Lauderdale's most demanding residential, commercial, and institutional projects.
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
                Schedule Free Inspection in Fort Lauderdale
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Dual-License Authority: Why It Matters
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Most Fort Lauderdale roofing contractors hold only a CCC license, limiting them to roof surface work. When they encounter structural issues — damaged trusses, inadequate roof-to-wall connections, compromised decking — they must stop and hire a separate general contractor, creating delays, cost overruns, and warranty gaps.
              </p>
              <p>
                Our CGC license authorizes us to evaluate and repair the complete structural system supporting your roof. During every Fort Lauderdale roof replacement, we inspect deck fastening, assess truss integrity, verify roof-to-wall connections, and ensure full Florida Building Code compliance — all under one warranty.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              HVHZ Compliance in Fort Lauderdale
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Fort Lauderdale sits in South Florida's High Velocity Hurricane Zone (HVHZ), where building codes mandate the most stringent wind resistance standards in the United States. Every roof must withstand 175+ mph wind speeds.
              </p>
              <p>
                We use enhanced fastening schedules with ring-shank nails at 6-inch spacing, high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame. Every installation passes Broward County inspection on the first attempt.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Institutional Trust & Major Projects
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA was selected to install a roof coating system on the Fort Lauderdale Building Department facility itself — a direct endorsement from the team responsible for inspecting every roofing project in the city. We completed the roof on the Broward County nursing home in Fort Lauderdale and are currently replacing all windows and doors at that same facility.
              </p>
              <p>
                Our commercial portfolio includes roofing work at Fort Lauderdale-Hollywood International Airport (FLL), one of the most stringent contractor qualification processes in South Florida, requiring security clearance, specialized insurance, and FAA facility compliance.
              </p>
              <p>
                In 2024, All Phase Construction USA served as the roofing subcontractor on the restoration of the Mai-Kai — Fort Lauderdale's iconic Polynesian landmark at 3599 N. Federal Highway, open since 1956 and listed on the National Register of Historic Places. The project was led by general contractor J.B. Construction as part of the $20 million renovation that brought South Florida's most storied restaurant back to life. Executing precision roofing work on a nationally registered historic structure — preserving original architectural character while meeting current Florida Building Code — represents the highest level of trust a Fort Lauderdale property can place in a roofing contractor.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Fort Lauderdale Neighborhoods We Serve
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA works across Fort Lauderdale's full range of residential and commercial properties. Along the Intracoastal corridor, Harbor Beach, Bay Colony, Seven Isles, Las Olas Isles, Nurmi Isles, and Idlewyld represent our highest-value roofing work — exclusive waterfront communities where salt air corrosion, coastal wind exposure, and storm surge risk demand corrosion-resistant fasteners, sealed roof decks, and premium marine-grade materials on every project.
              </p>
              <p>
                Rio Vista and Colee Hammock estates carry the same coastal exposure demands, paired with HOA architectural standards governing material selection and color approval. Coral Ridge, with its canal-front homes and proximity to the Intracoastal, regularly requires materials meeting both HVHZ code and community design guidelines.
              </p>
              <p>
                Victoria Park, with its craftsman-style and mid-century properties, demands period-appropriate materials brought to current HVHZ standards. Along the New River, Tarpon River and Sailboat Bend represent Fort Lauderdale's established residential core — homes entering their first or second full replacement cycle requiring complete HVHZ compliance upgrades. Imperial Point, Flagler Village, and Lauderdale Beach round out our residential coverage across the city.
              </p>
              <p>
                For historic properties, Fort Lauderdale's Stranahan House — built in 1901 and the oldest surviving structure in the city — represents the kind of century-old construction requiring both historic preservation sensitivity and full Florida Building Code compliance. Our CGC license gives us the structural authority to address original roof-to-wall connections, aging trusses, and non-standard decking that predate modern wind codes entirely.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Fort Lauderdale Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Fort Lauderdale is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
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
              "Fort Lauderdale has been hit by major hurricanes before, and it will be again. HVHZ codes exist because of what we've learned from storms like Wilma and Irma. We install roofs that meet — and exceed — these requirements."
            </p>
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Roofing Materials for Fort Lauderdale
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                <strong className="text-white">Shingle roofs</strong> (cost-effective, HVHZ-rated) | <strong className="text-white">Metal roofing</strong> (50+ year lifespan, 200+ mph rated) | <strong className="text-white">Tile roofing</strong> (concrete and clay, HVHZ foam-set installation) | <strong className="text-white">Flat roofing</strong> (TPO, modified bitumen, BUR)
              </p>
              <p>
                All materials selected for Fort Lauderdale's coastal salt air, UV exposure, and HVHZ wind requirements.
              </p>
            </div>
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Roof Replacement Cost in Fort Lauderdale (2026)
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
              <p>
                Fort Lauderdale roof replacement costs reflect the city's HVHZ requirements, Broward County permit fees, and coastal-grade material specifications. For a standard 2,000-square-foot home, here are 2026 pricing ranges by material:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Architectural Shingles</h3>
                <p className="text-red-500 text-2xl font-bold mb-3">$12,000 – $18,000</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Most budget-friendly for Fort Lauderdale homes. Impact-resistant Class 4 shingles recommended for insurance discounts. 20–30 year lifespan with proper HVHZ-compliant installation.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Concrete Tile</h3>
                <p className="text-red-500 text-2xl font-bold mb-3">$22,000 – $38,000</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Popular in Fort Lauderdale's established neighborhoods. HVHZ foam-adhesive installation required. Structural evaluation included — our CGC license covers any truss reinforcement needed for tile weight. 40–50+ year lifespan.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Standing Seam Metal</h3>
                <p className="text-red-500 text-2xl font-bold mb-3">$25,000 – $42,000</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Ideal for Fort Lauderdale's coastal and waterfront properties. Rated for 200+ mph winds. Corrosion-resistant coatings essential for salt air exposure. 40–60+ year lifespan with the best insurance premium reductions.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Flat Roof (TPO/Modified)</h3>
                <p className="text-red-500 text-2xl font-bold mb-3">$16,000 – $30,000</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Common for Fort Lauderdale condos, commercial buildings, and modern residences. TPO and modified bitumen with engineered drainage. 20–30 year lifespan.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              All pricing includes materials, labor, Broward County permits, debris removal, and required inspections. Get a quick estimate with our <Link to="/roof-cost-calculator/" className="text-red-500 hover:text-red-400 underline transition-colors">free roof cost calculator</Link>, or call <a href="tel:+17542275605" className="text-red-500 hover:text-red-400 underline transition-colors">(754) 227-5605</a> for a detailed assessment.
            </p>
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Permits & Local Expertise
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Every roofing project in Fort Lauderdale requires permitting and inspection under Florida Building Code and HVHZ standards. Our established relationships with Broward County building officials and proven track record of first-pass inspection approvals means your project moves from permit application through final certificate of completion without delays.
              </p>
              <p>
                Out-of-area contractors frequently cause project delays of weeks or months navigating county-specific requirements our team handles daily.
              </p>
            </div>
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Flexible Financing Options
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Flexible financing options including credit-based and non-credit-based plans with competitive rates — helping Fort Lauderdale homeowners protect their properties without delay.
              </p>
            </div>
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Learning Center Resources
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Our <Link to="/learning-center/" className="text-red-500 hover:text-red-400 underline transition-colors">Learning Center</Link> provides in-depth guides on roof replacement costs, wind mitigation savings, insurance claim processes, and selecting the right roofing materials for Fort Lauderdale properties.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Fort Lauderdale
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Full-service residential and commercial roofing — from repairs to complete replacements.
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Fort Lauderdale Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                The Venice of America is beautiful — and brutal on roofs. Here's what we see:
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Fort Lauderdale Roofing Conditions & Requirements
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Understanding the unique regulatory and environmental factors that shape roofing decisions in Fort Lauderdale.
              </p>
            </div>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Fort Lauderdale Roofing Factor</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Why It Matters for Homeowners</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-white">High Velocity Hurricane Zone (HVHZ)</td>
                      <td className="py-3 px-4">Fort Lauderdale is located in Florida's HVHZ, meaning roofing systems must meet stricter uplift resistance and installation standards to withstand extreme wind forces.</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-white">Metal Roofing in HVHZ</td>
                      <td className="py-3 px-4">Metal roofing systems must comply with UL and Miami-Dade approvals. Aluminum metal roofs are common, but they require specific fastening patterns, enhanced underlayment, and approved assemblies.</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-white">Underlayment & Fire Barriers</td>
                      <td className="py-3 px-4">HVHZ regulations often require upgraded underlayment systems and fire-resistant barriers beneath metal roofing to meet code and insurance requirements.</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-white">Uplift & Attachment Standards</td>
                      <td className="py-3 px-4">Roof uplift requirements are significantly higher in Fort Lauderdale, affecting nail patterns, fasteners, and decking attachment methods across all roof types.</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-white">Coastal vs. Inland Exposure</td>
                      <td className="py-3 px-4">Homes east of I-95 face salt air, moisture, and wind-driven rain, while western neighborhoods experience different heat and storm patterns—roof systems must be selected accordingly.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-white">Historic & Modern Home Mix</td>
                      <td className="py-3 px-4">Fort Lauderdale includes historic districts alongside modern custom homes, requiring roofing solutions that balance architectural integrity with modern code compliance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-xl p-8 text-center max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-zinc-400 font-semibold">Local Insight from Our Team</span>
              </div>
              <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-4">
                "Fort Lauderdale has always been a favorite city of mine to roof in because you get any and every type of home and many different styles of roofs."
              </blockquote>
              <cite className="text-red-500 font-semibold not-italic">— Chris, Owner</cite>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Condo & High-Rise Roofing in Fort Lauderdale
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Consideration</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">What It Means for Fort Lauderdale Condos</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High-Rise Construction</td>
                        <td className="py-3 px-4">Fort Lauderdale has a dense concentration of high-rise condos that require engineered roofing systems designed for extreme wind uplift.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">HVHZ & UL Standards</td>
                        <td className="py-3 px-4">Roofing systems, especially metal and flat roofs, must meet HVHZ approvals, UL listings, and enhanced underlayment and fire barrier requirements.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Coastal & Inland Variations</td>
                        <td className="py-3 px-4">East Fort Lauderdale properties face salt air exposure, while inland condos experience heat and storm-driven rain.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Association Oversight</td>
                        <td className="py-3 px-4">Condo projects typically require detailed documentation, inspections, and coordination with boards and management companies.</td>
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
                Understanding Roofing Costs & Financing in Fort Lauderdale
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Fort Lauderdale condo boards and homeowners often evaluate roofing costs alongside financing options when planning repairs or replacements. Having clarity on budget and payment plans before scheduling inspections helps property owners make confident, informed decisions.
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
                      Get an instant estimate for your Fort Lauderdale roofing project based on your property details and material preferences.
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Understanding Roof Costs & Financing in Fort Lauderdale
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Fort Lauderdale homeowners often want clarity around roofing costs and payment options before scheduling an inspection. To help, we provide tools and resources that make it easier to plan with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Link
                to="/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    Roof Cost Calculator
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Get a fast, ballpark estimate for your roof replacement based on size and material. This tool helps Fort Lauderdale homeowners understand realistic pricing before moving forward.
                  </p>
                  <div className="inline-flex items-center text-red-500 font-semibold">
                    <span>Calculate Your Roof Cost</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link
                to="/blog/roof-pricing-financing-guide/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    Roof Pricing & Financing Guide
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Learn how financing works, why monthly payments often make sense, and how many homeowners offset payments through insurance savings and long-term value.
                  </p>
                  <div className="inline-flex items-center text-red-500 font-semibold">
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mt-8 leading-relaxed">
              These resources are designed to help Fort Lauderdale property owners make informed decisions before selecting materials or scheduling a roof inspection.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Fort Lauderdale Property Owners Choose All Phase Construction
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              What Fort Lauderdale Homeowners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <p className="text-zinc-400 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-zinc-700 pt-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Fort Lauderdale Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Fort Lauderdale zip codes including: 33301, 33304, 33305, 33306, 33308, 33309, 33311, 33312, 33313, 33314, 33315, 33316, 33317, 33319, 33321, 33322, 33323, 33324, 33325, 33326, 33327, 33328, 33329, 33330, 33331, 33334, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Fort Lauderdale, we provide roofing services throughout Broward County:
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
            city="Fort Lauderdale"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Costs & Financing in Fort Lauderdale
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Roofing costs in Fort Lauderdale can vary widely depending on roof size, material selection, hurricane code requirements, and the condition of the existing roof system. Coastal exposure, high-velocity wind zone standards, and insurance documentation requirements all play a role in final pricing.
                </p>
                <p>
                  Many Fort Lauderdale homeowners start by using a roof cost calculator to get a realistic ballpark estimate before scheduling an inspection. This helps set expectations and compare material options such as shingle, tile, and metal roofing systems.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Key Cost Factors for Fort Lauderdale Roofs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Cost Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Why It Matters in Fort Lauderdale</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Hurricane code compliance</td>
                        <td className="py-3 px-4">Installation quality impacts approvals</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Roof material choice</td>
                        <td className="py-3 px-4">Tile and metal cost more but last longer</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Coastal exposure</td>
                        <td className="py-3 px-4">Salt air increases wear over time</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Insurance requirements</td>
                        <td className="py-3 px-4">Roof condition affects premiums</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Upgrade potential</td>
                        <td className="py-3 px-4">New roofs may lower insurance costs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Financing Options for Fort Lauderdale Homeowners</h3>
                <p>
                  Many homeowners are surprised to learn how affordable roof upgrades can be when financing options are available. In some cases, monthly payments are offset by reduced insurance premiums after installing a new, compliant roof system.
                </p>
                <p>
                  To better understand how roofing costs and financing work together, Fort Lauderdale homeowners can explore our detailed guide on estimating roof costs and understanding financing options.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-6 text-center">
                <p className="text-blue-100 font-medium mb-4">
                  ð Read: Understanding Roof Costs, Financing Options, and Why Monthly Payments Often Make Sense
                </p>
                <Link
                  to="/blog/roof-pricing-financing-guide/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
                >
                  View Complete Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Looking for the Best Roofers in Fort Lauderdale?
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Learn how to identify the most qualified roofing contractors in Fort Lauderdale, what credentials matter, and what questions to ask before hiring.
                </p>
                <Link
                  to="/locations/fort-lauderdale/best-roofers-fort-lauderdale"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  <span>Best Roofers in Fort Lauderdale</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Fort Lauderdale Property Owners
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
              Call (754) 227-5605 or Request Free Estimate
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Free roof inspection from a dual-licensed HVHZ specialist serving Fort Lauderdale.
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
