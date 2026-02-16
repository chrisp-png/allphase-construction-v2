import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function WestPalmBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'West Palm Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'West Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'West Palm Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
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

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    [localBusinessSchema, breadcrumbSchema].forEach(schema => {
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
      description: "Popular throughout West Palm Beach. Premium concrete and clay tile installations for the city's diverse architectural styles.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Modern metal roofing solutions for West Palm Beach homes and commercial buildings. Energy-efficient and durable.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Reliable architectural shingles for West Palm Beach's diverse neighborhoods — from historic districts to newer developments.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial flat roofing systems for West Palm Beach's extensive business districts and modern residential designs.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert repairs for West Palm Beach properties. Historic restoration to modern maintenance. 5-year certification letters available.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Extensive commercial roofing experience in West Palm Beach — office buildings, retail centers, government facilities, and multi-family properties.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Diverse Property Types',
      description: "West Palm Beach features everything from historic homes to modern high-rises, waterfront estates to urban apartments. Each property type presents unique roofing challenges requiring specialized knowledge and adaptability."
    },
    {
      title: 'Waterfront Salt Air',
      description: "Properties near the Intracoastal Waterway and Lake Worth face salt air corrosion on roofing materials and metal components. We use corrosion-resistant materials and proper installation techniques for coastal properties."
    },
    {
      title: 'Hurricane Exposure',
      description: "As Palm Beach County's largest city, West Palm Beach faces direct hurricane threats. We engineer roofing systems for high winds and storm conditions — because Florida Building Code minimums are just the baseline."
    },
    {
      title: 'Urban Environment',
      description: "Urban roofing presents unique challenges: limited access, neighboring properties, noise restrictions, and parking considerations. We have extensive experience navigating these complexities efficiently and professionally."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). From historic renovations to modern commercial buildings, we have the licensing and expertise for any project."
    },
    {
      title: 'West Palm Beach Experience',
      description: "We've completed hundreds of residential and commercial projects throughout West Palm Beach. We understand the city's diverse neighborhoods, building codes, and the unique challenges of Florida's largest Palm Beach County city."
    },
    {
      title: 'Complete Project Management',
      description: "Every job includes detailed photo documentation, transparent pricing, permit coordination, inspection scheduling, wind mitigation forms, and manufacturer warranties. Professional project management from start to finish."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to maintain insurance coverage and avoid the policy non-renewal crisis affecting homeowners statewide."
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
      question: 'How much does a roof replacement cost in West Palm Beach?',
      answer: 'Roof replacement costs in West Palm Beach typically range from $10,000 to $55,000+ for residential properties, and higher for commercial buildings. Costs depend on size, material choice, property type, and complexity. We provide free inspections and detailed written estimates for both residential and commercial projects.'
    },
    {
      question: 'What roofing material is best for West Palm Beach properties?',
      answer: 'West Palm Beach\'s diverse housing stock means different materials work for different properties. Tile roofing is popular and handles Florida\'s climate well. Architectural shingles are cost-effective with good performance. Metal roofing offers energy efficiency. For commercial properties, TPO and PVC are common choices. We\'ll recommend the best option for your specific building during inspection.'
    },
    {
      question: 'Do you handle commercial roofing in West Palm Beach?',
      answer: 'Yes. We have extensive commercial roofing experience throughout West Palm Beach — office buildings, retail centers, multi-family properties, and government facilities. We understand commercial building codes, project scheduling requirements, and the coordination needed for occupied buildings.'
    },
    {
      question: 'Do you pull permits for roofing work in West Palm Beach?',
      answer: 'Yes, always. West Palm Beach requires permits for roof replacements on both residential and commercial properties. We handle all permit applications, code compliance documentation, and inspection scheduling. You\'ll receive complete records for your files.'
    },
    {
      question: 'How long does a roof replacement take in West Palm Beach?',
      answer: 'Residential roof replacements typically take 2-5 days depending on size and material. Commercial projects vary significantly based on building size and type. We provide detailed project timelines before beginning work and coordinate scheduling to minimize disruption.'
    },
    {
      question: 'Do you work on historic properties in West Palm Beach?',
      answer: 'Yes. We have experience working on historic properties and understand the requirements for preservation districts. We can work with appropriate materials and techniques to maintain architectural integrity while upgrading to modern standards where allowed.'
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
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                West Palm Beach, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Professional roofing services for West Palm Beach — Palm Beach County's largest city and county seat.
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
                <span>Commercial & Residential</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspections</span>
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
              Your Trusted Roofer in West Palm Beach
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout West Palm Beach and nearby communities. For over 20 years, All Phase Construction has been serving West Palm Beach property owners with professional roofing services. As Palm Beach County's largest city and county seat with over 110,000 residents, West Palm Beach is a diverse urban center featuring historic neighborhoods, modern downtown high-rises, waterfront estates, suburban communities, and extensive commercial districts.
              </p>
              <p>
                West Palm Beach's diversity creates unique roofing challenges. Historic homes in Flamingo Park or Old Northwood require different approaches than modern condos downtown or waterfront properties along the Intracoastal. Commercial projects demand expertise in flat roofing systems, project coordination, and occupied building considerations. Whether residential or commercial, every project faces Florida's intense sun, hurricane threats, and strict building codes.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/tile-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and remaining life, a <Link to="/metal-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate energy-efficient systems, or a <Link to="/flat-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial buildings to detect membrane deterioration early.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Florida Code Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Code Requirements in West Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                West Palm Beach follows Palm Beach County building codes designed for hurricane protection. While not in Broward's HVHZ, all roofing must meet strict Florida Building Code requirements including:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Wind Load Engineering</h3>
                <p className="text-zinc-400 leading-relaxed">
                  All roofing systems must meet wind load requirements based on building location, height, and roof geometry. We engineer installations accordingly for both residential and commercial properties.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Code-Compliant Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  From underlayment specifications to fastener requirements to flashing details, every component must meet Florida code. We follow manufacturers' specifications and local standards.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Permits & Inspections</h3>
                <p className="text-zinc-400 leading-relaxed">
                  West Palm Beach requires permits and inspections for all roofing work. We handle applications, coordinate inspections, and ensure compliance for residential and commercial projects.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "West Palm Beach property owners need contractors who understand Florida's building codes and deliver installations that meet hurricane standards — not companies cutting corners."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in West Palm Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Complete residential and commercial roofing services — from repairs to full replacements.
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
                What West Palm Beach Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                South Florida's largest urban center presents unique roofing challenges:
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
                Roofing Considerations in West Palm Beach, Florida
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Why It Matters in West Palm Beach</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Hurricane Exposure</td>
                        <td className="py-3 px-4">West Palm Beach is located in a high-wind coastal region where roofing systems must meet enhanced uplift and fastening requirements.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Coastal & Inland Conditions</td>
                        <td className="py-3 px-4">Properties closer to the Intracoastal and ocean face salt air exposure, while western areas experience intense heat and storm-driven rain.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Roofing Materials</td>
                        <td className="py-3 px-4">Tile, metal, and architectural shingles are common, with material selection often influenced by wind resistance and long-term durability.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Building Codes</td>
                        <td className="py-3 px-4">Roofing installations must comply with Florida Building Code requirements, including wind uplift ratings and approved underlayment systems.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Insurance & Inspections</td>
                        <td className="py-3 px-4">Proper installation and documentation can help homeowners qualify for insurance discounts and smoother inspections.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-4xl mx-auto">
                West Palm Beach roofing projects require experience with coastal conditions, wind zones, and code compliance. All Phase Construction specializes in these local requirements, ensuring every installation meets Florida Building Code standards while addressing the unique challenges of West Palm Beach's diverse property types and coastal environment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why West Palm Beach Property Owners Choose All Phase Construction
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

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Costs & Payment Options in West Palm Beach
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Roofing costs in West Palm Beach are influenced by a mix of urban density, coastal exposure, and strict Palm Beach County building requirements. Property type, roof height, material selection, and hurricane code compliance all play a role in determining final pricing.
                </p>
                <p>
                  Many West Palm Beach property owners begin by using a roof cost calculator to establish a realistic estimate before scheduling an inspection. This approach helps homeowners and property managers better understand material options and budget considerations early in the process.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Key Cost Factors for West Palm Beach Roofs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Cost Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Impact in West Palm Beach</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Urban density</td>
                        <td className="py-3 px-4">Access and staging can affect labor</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Roof height & structure</td>
                        <td className="py-3 px-4">Multi-story buildings increase complexity</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Material selection</td>
                        <td className="py-3 px-4">Tile and metal offer longevity but higher upfront cost</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Hurricane code compliance</td>
                        <td className="py-3 px-4">Installation quality affects approvals</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Insurance considerations</td>
                        <td className="py-3 px-4">New roofs may reduce premiums</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Making Roof Upgrades More Affordable</h3>
                <p>
                  For many homeowners, upgrading to a longer-lasting roofing system becomes more achievable when payment options are available. Financing can allow property owners to move forward without delaying necessary work, while also spreading costs over time.
                </p>
                <p>
                  In some cases, insurance savings from installing a new, code-compliant roof may help offset monthly payments.
                </p>
                <p>
                  To better understand how roof pricing and financing work together, explore our in-depth guide below.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-6 text-center">
                <p className="text-blue-100 font-medium mb-4">
                  👉 Read: Understanding Roof Costs, Financing Options, and Why Monthly Payments Often Make Sense
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
