import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function ParklandPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Parkland Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Parkland FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Parkland FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Parkland, roofer Parkland FL, roof replacement Parkland, Parkland roofing company, best roofer in Parkland, tile roof Parkland');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Parkland, roofer Parkland FL, roof replacement Parkland, Parkland roofing company, best roofer in Parkland, tile roof Parkland';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Parkland');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Parkland',
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
      { name: 'Parkland', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/parkland' }
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
      title: 'Tile Roofing',
      description: "The signature look of Parkland homes. We install concrete and clay tile roofs with foam adhesive and proper underlayment for maximum wind resistance.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "A premium choice for Parkland's luxury homes. Metal roofs offer 50+ year lifespans, energy efficiency, and modern aesthetics.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "High-quality architectural shingles for Parkland homes. We install HVHZ-rated products with proper ventilation and underlayment.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern Parkland homes with contemporary flat roof designs. TPO, PVC, and modified bitumen systems.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Extending the life of premium Parkland roofs. We also provide 5-year certification letters for qualifying roofs to maintain insurance coverage.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Office buildings, medical facilities, and commercial properties throughout Parkland and the surrounding area.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Premium Home Standards',
      description: "Parkland homes are built to higher standards, and roofs must match. We understand the expectations of this community and deliver workmanship that meets them."
    },
    {
      title: 'Large Roof Footprints',
      description: "Parkland homes tend to be larger, with complex roof lines, multiple valleys, and architectural details. This requires experienced crews and careful planning."
    },
    {
      title: 'Strict HOA Requirements',
      description: "Parkland communities have some of the strictest HOA guidelines in Broward County. We're experienced in meeting these requirements and providing all necessary documentation."
    },
    {
      title: 'Tree Coverage and Wildlife',
      description: "Parkland's park-like setting means heavy tree coverage, debris accumulation, and occasional wildlife damage. We factor these issues into every inspection and installation."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When structural issues arise, we handle them — no need for multiple contractors."
    },
    {
      title: 'Experience with Luxury Homes',
      description: "Parkland's homes demand attention to detail. We've worked on some of the most beautiful properties in South Florida and understand what's expected."
    },
    {
      title: 'HOA Expertise',
      description: "We've worked with dozens of Parkland HOAs and know exactly what documentation and approvals are required. We handle the paperwork so you don't have to."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage."
    }
  ];

  const nearbyCities = [
    { name: 'Coral Springs', path: '/roofing-contractor-coral-springs-fl/' },
    { name: 'Coconut Creek', path: '/roofing-contractor-coconut-creek-fl/' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl/' },
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl/' },
    { name: 'Margate', path: '/roofing-contractor-margate-fl/' },
    { name: 'Pompano Beach', path: '/roofing-contractor-pompano-beach-fl/' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Parkland?',
      answer: "Roof replacement costs in Parkland typically range from $15,000 to $50,000+ depending on size, material, and complexity. Parkland homes tend to be larger with more complex roof lines, which affects pricing. Tile roofs are more expensive than shingles but offer better longevity. We provide free inspections and detailed quotes."
    },
    {
      question: 'What type of roof is most common in Parkland?',
      answer: "Tile roofs are the most common roof type in Parkland, reflecting the community's aesthetic standards and focus on quality. Concrete tiles are most popular, though clay tiles are also used. We install both to HVHZ standards with proper underlayment and attachment."
    },
    {
      question: 'Do you handle HOA approval paperwork?',
      answer: "Absolutely. Parkland HOAs are known for thorough review processes. We provide all required documentation — contractor licenses, insurance certificates, material specifications, product approvals, color samples, and project timelines. We've been through this process dozens of times."
    },
    {
      question: 'How long does a tile roof replacement take in Parkland?',
      answer: "Most tile roof replacements in Parkland take 3-5 days depending on size and complexity. Larger homes with intricate roof lines may take longer. We'll give you a specific timeline before we start and keep you informed throughout the project."
    },
    {
      question: 'My roof looks fine but it\'s 18 years old. Do I need to replace it?',
      answer: "Not necessarily. Many 18-year-old roofs in Parkland can be restored and certified rather than replaced — especially tile roofs, which can last 40+ years. We'll inspect the full system including underlayment, decking, and tiles, then give you honest options."
    },
    {
      question: 'Can you help protect my insurance coverage?',
      answer: "Yes. Under Florida Statute 627.7011, if we can certify your roof has 5+ years of remaining useful life, your insurer cannot non-renew your policy based on roof age alone. If your roof qualifies after inspection or restoration, we'll provide the certification letter."
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
            <span className="text-white">Parkland</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Parkland, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Parkland's premier homes deserve premium roofing. HVHZ compliant. Quality craftsmanship guaranteed.
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
                Schedule Free Inspection in Parkland
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
              Your Trusted Roofer in Parkland
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Parkland and nearby communities. Parkland is consistently ranked among the best places to live in Florida — and for good reason. It's a planned community with A-rated schools, park-like landscaping, and some of the most beautiful homes in Broward County.
              </p>
              <p>
                Located about 15 miles from our Deerfield Beach headquarters, Parkland has been one of our premium service areas for over two decades. We've installed and restored roofs throughout the city — from the gated estates along Pine Island Road to the family neighborhoods near Pine Trails Park.
              </p>
              <p>
                Most Parkland homes were built from the 1990s onward, with construction standards that reflect the community's quality expectations. These homes often feature tile roofs, complex architectural details, and larger footprints that require experienced contractors.
              </p>
              <p>
                When your roof shows signs of aging or damage, schedule a <Link to="/tile-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to evaluate underlayment and tile condition, a <Link to="/metal-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to assess panel integrity and fasteners, or a <Link to="/flat-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial properties to identify membrane issues before leaks develop.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Parkland Roofing Projects
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Recent tile roof installations and replacements completed by All Phase Construction in Parkland, FL
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden hover:border-red-600 transition-all duration-300">
                <img
                  src="/parkland-fl-residential-tile-roof-replacement-in-progress-allphase-construction.jpg"
                  alt="Residential tile roof replacement in progress by All Phase Construction in Parkland, Florida"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4">
                  <p className="text-zinc-400 text-sm">Residential tile roof replacement in progress — Parkland, FL</p>
                </div>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden hover:border-red-600 transition-all duration-300">
                <img
                  src="/parkland-fl-tile-roof-installation-materials-loaded-allphase-construction.jpg"
                  alt="Tile roofing materials loaded and ready for installation by All Phase Construction in Parkland, Florida"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4">
                  <p className="text-zinc-400 text-sm">Tile roofing materials loaded on jobsite — Parkland, FL</p>
                </div>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden hover:border-red-600 transition-all duration-300">
                <img
                  src="/parkland-fl-concrete-tile-roof-installation-work-in-progress-allphase-construction.jpg"
                  alt="Concrete tile roof installation work in progress by All Phase Construction in Parkland, Florida"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4">
                  <p className="text-zinc-400 text-sm">Concrete tile roof installation work in progress — Parkland, FL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Parkland Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Parkland is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
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
              "Parkland's inland location doesn't exempt it from hurricane requirements. HVHZ codes apply throughout Broward County. We build every roof to withstand Category 4 winds."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Parkland
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
                What Parkland Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Parkland's premium homes and natural setting create unique roofing considerations:
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Parkland Homeowners Choose All Phase Construction
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
                Parkland Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Parkland zip codes including: 33067, 33076, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Parkland, we provide roofing services throughout Broward County:
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
            city="Parkland"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Parkland Homeowners
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
              Ready for a Free Roof Inspection in Parkland?
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
