import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function CoralSpringsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Coral Springs Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Coral Springs FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Coral Springs FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
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
      title: 'Tile Roofing',
      description: "Concrete and clay tile installations for Coral Springs homes seeking durability and curb appeal. Foam adhesive for wind resistance.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "A growing choice for Coral Springs homeowners wanting 50+ year durability and energy efficiency.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "The most common roof type in Coral Springs. We install high-wind rated architectural shingles that meet HVHZ requirements and look great.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial properties and modern homes throughout Coral Springs. TPO, PVC, and modified bitumen systems.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Extending the life of Coral Springs roofs — and protecting your insurance coverage with 5-year certification letters when your roof qualifies.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Office buildings, retail centers, and commercial properties throughout Coral Springs.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Intense UV Exposure',
      description: "Florida's sun doesn't care that you're not on the beach. Coral Springs roofs take the same UV punishment as coastal properties. We install materials rated for extreme sun exposure."
    },
    {
      title: 'Hurricane Season',
      description: "Being inland doesn't exempt Coral Springs from hurricanes. When a major storm crosses South Florida, wind speeds stay dangerous well past the coast. HVHZ codes exist for exactly this reason."
    },
    {
      title: 'Mature Tree Coverage',
      description: "Many Coral Springs neighborhoods have mature landscaping that looked great when planted 30 years ago. Now those trees drop debris, hold moisture against roofs, and pose branch-fall risks. We factor this into every inspection."
    },
    {
      title: 'HOA Requirements',
      description: "Coral Springs is full of HOA communities with specific requirements for roof appearance, materials, and contractor documentation. We work within these requirements and provide all necessary paperwork."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find rotted decking or fascia damage, we fix it — no waiting for another contractor."
    },
    {
      title: 'Local & Established',
      description: "Headquartered in Deerfield Beach, about 12 miles from Coral Springs. We've served this community for over 20 years. Your neighbors know us."
    },
    {
      title: 'Family-Friendly Service',
      description: "We know Coral Springs is a family community. Our crews are professional, our work sites are clean, and we communicate clearly throughout every project."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage."
    }
  ];

  const nearbyCities = [
    { name: 'Parkland', path: '/roofing-contractor-parkland-fl' },
    { name: 'Coconut Creek', path: '/roofing-contractor-coconut-creek-fl' },
    { name: 'Margate', path: '/roofing-contractor-margate-fl' },
    { name: 'Tamarac', path: '/roofing-contractor-tamarac-fl' },
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Coral Springs?',
      answer: "Roof replacement costs in Coral Springs typically range from $10,000 to $30,000+ depending on size, material, and complexity. Most Coral Springs homes have shingle roofs, which are on the more affordable end. Tile roofs cost more but last longer. We provide free inspections and detailed quotes."
    },
    {
      question: 'What type of roof is most common in Coral Springs?',
      answer: "Architectural shingles are the most common roof type in Coral Springs, reflecting the suburban residential construction patterns of the 1970s-2000s. Tile roofs are also popular, especially on newer and larger homes. We install both to HVHZ standards."
    },
    {
      question: 'Do you handle HOA approval paperwork?',
      answer: "Yes. We can provide all the documentation your HOA typically requires — contractor licenses, insurance certificates, material specifications, and color samples. We've worked with dozens of Coral Springs HOAs."
    },
    {
      question: 'How long does a roof replacement take in Coral Springs?',
      answer: "Most residential roof replacements in Coral Springs are completed in 1-2 days for shingle roofs, 2-3 days for tile. We'll give you a specific timeline before we start."
    },
    {
      question: 'My roof is 20 years old. Should I replace it or repair it?',
      answer: "It depends on its condition. Many 20-year-old roofs in Coral Springs are reaching the end of their useful life, but some can be restored rather than replaced. We'll inspect the full system — not just the shingles, but underlayment, decking, and ventilation — and give you honest options."
    },
    {
      question: 'Can you help protect my insurance coverage?',
      answer: "Possibly. Under Florida Statute 627.7011, if we can certify your roof has 5+ years of remaining useful life, your insurer cannot drop you based on roof age alone. If your roof qualifies after restoration, we'll provide the certification letter."
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
            <Link to="/locations" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Coral Springs</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in Coral Springs, FL
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Coral Springs and nearby communities. Coral Springs' family neighborhoods deserve roofs built to last. HVHZ compliant. Quality guaranteed.
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
                to="/contact"
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
              Your Trusted Roofer in Coral Springs
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Coral Springs is one of South Florida's most well-planned communities — and its roofs reflect that. Row after row of well-maintained single-family homes in master-planned neighborhoods, many with HOA requirements that demand quality workmanship and proper documentation.
              </p>
              <p>
                Located about 12 miles from our Deerfield Beach headquarters, Coral Springs is one of our most active service areas. We've roofed homes throughout the city — from the established neighborhoods near Coral Square Mall to the newer developments along Coral Ridge Drive, from Ramblewood to Eagle Glen.
              </p>
              <p>
                Most Coral Springs homes were built between the 1970s and 2000s, which means many are now reaching the age where roof replacement becomes necessary. If your roof is showing signs of aging, schedule a <Link to="/tile-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">diagnostic tile roof inspection</Link> to assess condition and remaining service life. For metal roofing systems, our <Link to="/metal-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> evaluate panel integrity and fastener performance. Commercial properties and flat-roof homes benefit from <Link to="/flat-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">comprehensive flat roof inspection</Link> to identify membrane deterioration before leaks develop.
              </p>
              <p>
                Coral Springs families invest in their homes. We make sure that investment is protected from the top down.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Coral Springs Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Coral Springs is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
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
              "Even though Coral Springs is inland, HVHZ requirements still apply. Hurricane winds don't stop at the coast. We install every roof as if a Category 4 is coming — because eventually, one will."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Coral Springs
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
                What Coral Springs Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Coral Springs may be inland, but roofs here still take a beating:
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
                Roofing Considerations in Coral Springs, Florida
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Why It Matters in Coral Springs</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High Velocity Hurricane Zone (HVHZ)</td>
                        <td className="py-3 px-4">Coral Springs is located within Florida's HVHZ, requiring stricter wind uplift ratings, fastening patterns, and approved roofing assemblies.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Roofing Materials</td>
                        <td className="py-3 px-4">Tile, metal, and architectural shingles are common, but materials must meet HVHZ approval standards and manufacturer specifications.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Metal Roofing Standards</td>
                        <td className="py-3 px-4">Aluminum and steel metal roofing systems must comply with UL listings, enhanced underlayment requirements, and fire barrier standards.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">HOA & Community Guidelines</td>
                        <td className="py-3 px-4">Many Coral Springs neighborhoods have HOA requirements that influence roof color, material type, and replacement timelines.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Home Age & Development</td>
                        <td className="py-3 px-4">The city includes established neighborhoods alongside newer developments, requiring experience with both legacy structures and modern construction methods.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Storm & Rain Exposure</td>
                        <td className="py-3 px-4">Heavy rain events and hurricane activity place added importance on proper flashing, waterproofing, and drainage design.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-4xl mx-auto">
                Roofing in Coral Springs requires HVHZ expertise, code-compliant materials, and precise installation to meet Florida Building Code standards. All Phase Construction specializes in these exacting requirements, ensuring every roof system delivers long-term performance while complying with both state regulations and local HOA guidelines.
              </p>
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
                to="/locations"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Coral Springs"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Coral Springs Homeowners
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
              Ready for a Free Roof Inspection in Coral Springs?
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
  );
}
