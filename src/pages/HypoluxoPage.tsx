import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Waves, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function HypoluxoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Hypoluxo Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hypoluxo FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Hypoluxo FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Hypoluxo, roofer Hypoluxo FL, roof replacement Hypoluxo, coastal roofing Hypoluxo, Hypoluxo roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Hypoluxo, roofer Hypoluxo FL, roof replacement Hypoluxo, coastal roofing Hypoluxo, Hypoluxo roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Hypoluxo');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Hypoluxo',
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
      { name: 'Hypoluxo', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/hypoluxo' }
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
      description: "Premium concrete and clay tile roofing systems designed for Hypoluxo's coastal climate. Superior durability against salt air and wind.",
      path: '/tile-roofing',
      icon: Shield
    },
    {
      title: 'Metal Roofing',
      description: "Corrosion-resistant metal roofing ideal for Hypoluxo waterfront properties. Exceptional wind resistance and longevity.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "High-grade architectural shingles rated for coastal wind exposure in Hypoluxo residential neighborhoods.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Durable flat roofing systems for Hypoluxo townhomes and low-slope residential structures with proper drainage.",
      path: '/flat-roofing',
      icon: Home
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert coastal roof repairs including storm damage, wind damage, and material degradation from salt air exposure.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Residential Roofing',
      description: "Complete residential roofing services for Hypoluxo homes — from waterfront estates to neighborhood residences.",
      path: '/residential-roofing',
      icon: Home
    }
  ];

  const challenges = [
    {
      title: 'Intracoastal Salt Air',
      description: "Hypoluxo's location along the Intracoastal Waterway means roofs are constantly exposed to salt-laden air. This accelerates corrosion on metal components, fasteners, and underlayment if improper materials are used."
    },
    {
      title: 'Coastal Wind Patterns',
      description: "Waterfront locations experience stronger and more consistent wind patterns. Proper wind rating, fastening patterns, and edge securement become critical for roof longevity."
    },
    {
      title: 'Storm Water Intrusion',
      description: "Seasonal storms bring wind-driven rain that can penetrate vulnerable roof areas. Quality underlayment, flashing details, and proper installation are essential."
    },
    {
      title: 'Material Selection',
      description: "Not all roofing materials perform equally in coastal environments. Understanding which materials withstand salt air exposure prevents premature failure and costly repairs."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Coastal Roofing Expertise',
      description: "We've been roofing coastal properties throughout South Florida for over 20 years. We understand how Hypoluxo's Intracoastal location affects material selection and installation requirements."
    },
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When waterfront properties reveal structural issues, we fix them properly."
    },
    {
      title: 'Insurance Documentation',
      description: "Coastal properties face strict insurance requirements. We provide complete documentation — inspection reports, scope of work, and post-installation certification when applicable."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required by Florida insurance law to maintain your coverage and avoid forced policy non-renewals."
    }
  ];

  const nearbyCities = [
    { name: 'Lake Worth Beach', path: '/roofing-contractor-lake-worth-fl' },
    { name: 'Lantana', path: '/roofing-contractor-lantana-fl' },
    { name: 'Boynton Beach', path: '/roofing-contractor-boynton-beach-fl' },
    { name: 'Ocean Ridge', path: '/roofing-contractor-ocean-ridge-fl' },
    { name: 'Gulf Stream', path: '/roofing-contractor-gulf-stream-fl' },
    { name: 'Delray Beach', path: '/roofing-contractor-delray-beach-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Hypoluxo?',
      answer: 'Roof replacement costs in Hypoluxo typically range from $12,000 to $40,000+ depending on size, material choice, and coastal requirements. Waterfront properties often require upgraded materials and fastening for salt air exposure and wind resistance. We provide free inspections and detailed written estimates.'
    },
    {
      question: 'What roofing material is best for coastal properties in Hypoluxo?',
      answer: 'For Hypoluxo coastal properties, tile roofing offers excellent durability and salt air resistance. Metal roofing (aluminum or specialized coatings) is also ideal for waterfront homes. High-grade architectural shingles work well for inland neighborhoods. We\'ll assess your specific location during your free inspection.'
    },
    {
      question: 'Do you pull permits for roofing work in Hypoluxo?',
      answer: 'Yes, always. Hypoluxo requires permits for roof replacements, and coastal locations often have additional documentation requirements. We handle all applications, inspections, and approvals. You\'ll receive complete documentation for your records and insurance company.'
    },
    {
      question: 'How long does a roof replacement take in Hypoluxo?',
      answer: 'Most Hypoluxo residential roof replacements are completed in 3-5 days depending on size, material, and complexity. Waterfront properties may require additional time for proper material staging and weather-dependent scheduling. We provide a detailed timeline before starting work.'
    },
    {
      question: 'How does salt air affect my roof in Hypoluxo?',
      answer: 'Salt air accelerates corrosion on metal components including flashing, valleys, fasteners, and metal roofing panels. It also degrades inferior underlayment and sealants. Using marine-grade or coated materials specifically rated for coastal exposure extends roof life significantly.'
    },
    {
      question: 'Do you work with insurance companies for storm damage claims?',
      answer: 'We provide comprehensive documentation for insurance claims — detailed damage assessment, scope of work, and post-repair documentation. This gives you everything needed to file your claim, though we don\'t negotiate directly with insurance companies on pricing.'
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
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Hypoluxo</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Hypoluxo, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Coastal roofing specialists serving Hypoluxo — waterfront homes, Intracoastal properties, and residential communities.
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
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Hypoluxo
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
              Your Trusted Roofer in Hypoluxo
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Hypoluxo and nearby communities. For over 20 years, All Phase Construction has been the trusted roofing contractor serving Hypoluxo — the small coastal community in Palm Beach County nestled along the Intracoastal Waterway. Known for waterfront homes, quiet residential neighborhoods, and easy access to both the ocean and Lake Worth, this area offers peaceful coastal living.
              </p>
              <p>
                Hypoluxo's location creates unique roofing challenges. Salt air from the Intracoastal accelerates corrosion on metal components. Coastal wind patterns increase uplift pressure on roof systems. Seasonal storms bring wind-driven rain that tests every vulnerable point in your roof. These conditions demand proper material selection and installation techniques designed specifically for coastal exposure.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/metal-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate corrosion-resistant systems, a <Link to="/tile-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and salt air damage, or explore <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">comprehensive roof inspection services</Link> for all roofing types.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Florida Code Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Code Requirements in Hypoluxo
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Hypoluxo is located in Palm Beach County and follows Florida Building Code requirements. Coastal properties require enhanced attention to wind load calculations and material specifications:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Coastal Wind Standards</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Waterfront properties face increased wind exposure. Roofing systems must meet enhanced wind load requirements with proper engineering for coastal conditions.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Material Specifications</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Coastal locations require corrosion-resistant materials including marine-grade fasteners, upgraded underlayment, and salt-air rated components.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Permits & Inspections</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Hypoluxo requires permits and inspections for roof replacements. We handle all applications and ensure your coastal property passes inspection the first time.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Coastal properties need a roofer who understands how salt air and Intracoastal exposure affect material selection and long-term performance."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Hypoluxo
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Complete roofing services for coastal properties, waterfront homes, and residential communities.
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
              <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Hypoluxo Coastal Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Intracoastal proximity creates roofing challenges that require specialized expertise:
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
              Why Hypoluxo Homeowners Choose All Phase Construction
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
                Hypoluxo Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve Hypoluxo zip code 33462 and all surrounding coastal Palm Beach County communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Hypoluxo, we provide roofing services throughout Palm Beach and Broward Counties:
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
                to="/locations"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Hypoluxo"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Costs & Payment Options in Hypoluxo
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <p>
                  Hypoluxo is a small coastal community located along the Intracoastal Waterway, known for waterfront homes, townhomes, and quiet residential neighborhoods. With close proximity to the ocean, roofing systems in Hypoluxo are exposed to salt air, strong winds, and seasonal storm activity that can accelerate roof wear over time.
                </p>
                <p>
                  Property owners in Hypoluxo depend on experienced, dual-licensed roofing contractors who understand coastal exposure, wind mitigation requirements, and proper installation techniques designed for South Florida's climate.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Roofing Conditions Unique to Hypoluxo</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Coastal Condition</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Impact on Hypoluxo Roofs</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Intracoastal proximity</td>
                        <td className="py-3 px-4">Salt air increases material corrosion</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Coastal wind patterns</td>
                        <td className="py-3 px-4">Higher wind uplift risk</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Storm exposure</td>
                        <td className="py-3 px-4">Increased potential for water intrusion</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Waterfront construction</td>
                        <td className="py-3 px-4">Stricter material and installation needs</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Residential density</td>
                        <td className="py-3 px-4">Noise, access, and staging considerations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Roofing Services for Hypoluxo Properties</h3>
                <p>
                  Homes in Hypoluxo range from waterfront residences to inland residential communities, requiring roofing systems that balance durability, aesthetics, and long-term performance.
                </p>
                <p>
                  Our roofing services in Hypoluxo include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tile roofing systems for coastal durability</li>
                  <li>Metal roofing for wind resistance and longevity</li>
                  <li>Shingle roofing for residential properties</li>
                  <li>Roof repair and storm damage restoration</li>
                  <li>Flat roofing systems for townhomes and low-slope structures</li>
                </ul>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Coastal Exposure & Roof Longevity</h3>
                <p>
                  Salt air, moisture, and wind-driven rain can shorten the lifespan of roofing systems if materials and installation methods are not properly selected. In Hypoluxo, proper underlayment, fastening systems, and ventilation play a critical role in protecting roofs from premature failure.
                </p>
                <p>
                  Many homeowners begin by reviewing roofing options and estimating costs before scheduling an inspection, especially when planning upgrades for storm protection and insurance considerations.
                </p>
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
                <h3 className="text-2xl font-bold text-white">Roofing Code & Compliance in Hypoluxo</h3>
                <p>
                  Roofing projects in Hypoluxo must comply with Florida Building Code requirements, including wind uplift standards, permitting, and inspections. Coastal locations often require careful documentation to ensure insurance and compliance requirements are met.
                </p>
                <p>
                  Working with a dual-licensed roofing contractor helps ensure roofing systems are installed correctly and in accordance with all applicable regulations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-6 text-center">
                <p className="text-blue-100 font-medium mb-4">
                  Read: Understanding Roof Costs, Financing Options, and Why Monthly Payments Often Make Sense
                </p>
                <Link
                  to="/blog/roof-pricing-financing-guide"
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
              Roofing Questions from Hypoluxo Homeowners
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
              Ready for a Free Roof Inspection in Hypoluxo?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any coastal-related issues, and give you honest recommendations — no pressure, no obligation.
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
  );
}
