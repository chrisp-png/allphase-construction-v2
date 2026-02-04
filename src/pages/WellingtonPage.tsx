import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Calculator, DollarSign } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function WellingtonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Wellington Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wellington FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Wellington FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Wellington FL, roofer Wellington Florida, roof replacement Wellington, Wellington roofing company, tile roof Wellington, estate roofing Palm Beach County');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Wellington FL, roofer Wellington Florida, roof replacement Wellington, Wellington roofing company, tile roof Wellington, estate roofing Palm Beach County';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Wellington');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Wellington',
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
      { name: 'Wellington', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/wellington' }
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
      description: "The signature of Wellington homes. Concrete and clay tile installations for estates, single-family homes, and detached structures. Foam adhesive for superior wind resistance.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Standing seam and metal panels for Wellington homeowners seeking 50+ year durability. Popular for equestrian facilities and accessory structures.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Quality architectural shingles for Wellington's family neighborhoods. Excellent value with proper wind ratings.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial properties, barns, and accessory buildings. TPO, PVC, and modified bitumen systems with proper drainage engineering.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Extending the life of Wellington's tile roofs — and protecting your insurance coverage with 5-year certification letters.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Retail centers, professional buildings, and equestrian facilities throughout Wellington.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Large Roof Areas',
      description: "Wellington homes are bigger than typical South Florida properties. Larger roof areas mean more material, more labor, and more opportunities for problems if not installed correctly. We're experienced with large-scale residential projects."
    },
    {
      title: 'Multiple Structures',
      description: "Many Wellington properties include detached garages, guest houses, pool cabanas, or equestrian facilities. We can roof all structures on your property with consistent quality and coordinated scheduling."
    },
    {
      title: 'Hurricane Season',
      description: "Wellington may be inland, but it's not immune to hurricanes. When major storms cross South Florida, they bring damaging winds well past the coast. Our installations are engineered for high winds."
    },
    {
      title: 'Estate-Level Expectations',
      description: "Wellington homeowners expect premium quality. We deliver — from material selection to installation precision to final cleanup. Your property will look as good when we leave as when we arrived."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find rotted decking, structural issues, or fascia damage, we fix it — no waiting for another contractor."
    },
    {
      title: 'Large Project Experience',
      description: "Wellington's estate homes are larger than typical South Florida properties. We're equipped for these projects — with crews, equipment, and scheduling capacity to handle significant roof areas."
    },
    {
      title: 'Complete Property Service',
      description: "Main house, guest house, pool cabana, barn — we can roof every structure on your property. One contractor, one timeline, consistent quality."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage."
    }
  ];

  const nearbyCities = [
    { name: 'Royal Palm Beach', path: '/locations/deerfield-beach/service-area/royal-palm-beach' },
    { name: 'West Palm Beach', path: '/locations/deerfield-beach/service-area/west-palm-beach' },
    { name: 'Lake Worth Beach', path: '/locations/deerfield-beach/service-area/lake-worth-beach' },
    { name: 'Boynton Beach', path: '/locations/deerfield-beach/service-area/boynton-beach' },
    { name: 'Palm Beach Gardens', path: '/locations/deerfield-beach/service-area/palm-beach-gardens' },
    { name: 'Boca Raton', path: '/locations/deerfield-beach/service-area/boca-raton' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Wellington?',
      answer: "Due to Wellington's larger home sizes, roof replacement costs here are typically higher than other areas — often $20,000 to $60,000+ depending on size, material, and complexity. Tile roofs on estate homes can exceed $80,000. We provide free inspections and detailed quotes based on your specific property."
    },
    {
      question: 'Can you roof multiple buildings on my property?',
      answer: "Absolutely. We frequently work on Wellington properties with multiple structures — main house, guest house, garage, pool cabana, or equestrian buildings. We can coordinate all work under a single project or phase it based on your preferences."
    },
    {
      question: 'Do you work on equestrian facilities?',
      answer: "Yes. Barns, covered arenas, and stable buildings often have flat or metal roofing systems. We install and repair these commercial-style roofs alongside residential work."
    },
    {
      question: 'How long does a large roof replacement take?',
      answer: "A typical Wellington tile roof on a larger home takes 3-5 days, sometimes longer for estates or complex roof lines. We'll provide a specific timeline after our inspection."
    },
    {
      question: 'What roofing material do you recommend for Wellington homes?',
      answer: "Tile is the traditional choice for Wellington estates — it matches the architecture, handles Florida's climate, and lasts 50+ years. For accessory structures or homes seeking a different aesthetic, standing seam metal offers exceptional durability. We'll discuss options during your free inspection."
    },
    {
      question: 'Do you pull permits in Wellington?',
      answer: "Yes, always. Wellington (Village of Wellington) requires permits for roof replacements. We handle all permit applications and inspection scheduling."
    }
  ];

  return (
    <><div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Wellington</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Wellington, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Master-planned communities and equestrian properties with HOA coordination expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Florida Licensed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HOA Coordination</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Community Projects</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Wellington
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
              Your Trusted Roofer in Wellington
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Wellington and nearby communities. Wellington is known for its master-planned communities, equestrian properties, and well-maintained residential neighborhoods governed by active HOAs. Roofing systems in Wellington must meet strict aesthetic standards while also performing under South Florida's heat, wind, and storm conditions.
              </p>
              <p>
                Homeowners and associations in Wellington rely on experienced, dual-licensed roofing contractors who understand HOA coordination, large community projects, and long-term roof maintenance requirements.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Conditions Unique to Wellington
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Community Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Impact on Wellington Roofs</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">HOA-governed communities</td>
                        <td className="py-3 px-4">Strict material and appearance standards</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Clubhouses & amenities</td>
                        <td className="py-3 px-4">Larger, more complex roofing systems</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Tile-dominant neighborhoods</td>
                        <td className="py-3 px-4">Underlayment longevity is critical</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Planned developments</td>
                        <td className="py-3 px-4">Consistency across homes is required</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Preventive maintenance</td>
                        <td className="py-3 px-4">Ongoing care extends roof lifespan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Roofing Services for Wellington Communities</h3>
                <p>
                  Roofing projects in Wellington often involve close coordination with HOAs, property managers, and community boards. From individual homes to shared community structures, proper planning and communication are essential.
                </p>
                <p>
                  Our roofing services in Wellington include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tile roof repair and replacement</li>
                  <li>Roofing for clubhouses and community buildings</li>
                  <li>Metal and shingle roofing systems</li>
                  <li>Preventive roof maintenance and cleaning</li>
                  <li>Roof inspections for HOA and insurance needs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Team Insight – Wellington Roofing</h3>
                    <div className="text-zinc-300 leading-relaxed space-y-3">
                      <p>
                        "We've had the privilege of working closely with many Wellington communities over the years, including completing multiple community clubhouses and then continuing to support those neighborhoods long-term. We originally completed the Buena Vida clubhouse a few years ago. We still return annually to clean and maintain it, which is something we take a lot of pride in."
                      </p>
                      <p className="text-red-400 font-semibold">
                        — Chris, Owner, All Phase Construction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <h3 className="text-2xl font-bold text-white">HOA Coordination & Long-Term Roof Care</h3>
                <p>
                  In Wellington, roofing projects often extend beyond a single installation. Ongoing maintenance, cleaning, and inspections play an important role in preserving appearance and performance, especially for tile roofing systems.
                </p>
                <p>
                  Many communities and homeowners begin by reviewing roofing options and planning upgrades early to ensure compliance with HOA standards and long-term durability.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                  Florida Code Compliant
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Roofing Code & Compliance in Wellington
                </h2>
              </div>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Roofing projects in Wellington must comply with Florida Building Code requirements and any additional HOA guidelines. Proper documentation, inspections, and material approvals are essential for community-based projects.
                </p>
                <p>
                  Working with a dual-licensed roofing contractor helps ensure roofing systems are installed correctly and managed efficiently from approval through completion.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Wellington
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
                What Wellington Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Wellington's unique properties create unique roofing challenges:
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
              Why Wellington Homeowners Choose All Phase Construction
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
                Wellington Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Wellington zip codes including: 33414, 33449, and surrounding areas including Royal Palm Beach, Loxahatchee, and western Lake Worth.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Wellington, we provide roofing services throughout western Palm Beach County:
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
                to="/service-areas"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Roofing Costs & Payment Options for Wellington Homeowners
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Roofing projects in Wellington can vary in cost depending on material selection, HOA requirements, roof size, and long-term maintenance considerations. Many homeowners and communities begin by reviewing estimated costs before planning repairs or full replacements.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 mb-8">
                <p className="text-zinc-400 leading-relaxed mb-6">
                  To help with early planning, homeowners can start with a roof cost calculator to get a realistic ballpark estimate. From there, exploring financing options can make upgrading to higher-quality roofing materials more manageable, especially for larger homes and HOA-governed communities.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  In some cases, monthly payments may be offset by insurance savings after installing a new, code-compliant roofing system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/learning-center/roof-cost-calculator/"
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                        Estimate Your Roof Cost
                      </h3>
                      <p className="text-zinc-400 mb-3 leading-relaxed">
                        Get a realistic ballpark estimate for your Wellington roofing project with our interactive calculator.
                      </p>
                      <div className="flex items-center text-red-500 font-medium">
                        <span>Try Calculator</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/blog/roof-pricing-financing-guide"
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                        Understanding Roof Financing
                      </h3>
                      <p className="text-zinc-400 mb-3 leading-relaxed">
                        Learn about roof costs, financing options, and why monthly payments often make sense for Wellington homeowners.
                      </p>
                      <div className="flex items-center text-red-500 font-medium">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Wellington"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Wellington Homeowners
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
              Ready for a Free Roof Inspection in Wellington?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and give you honest recommendations — no pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
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
    </>
  );
}
