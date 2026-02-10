import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PalmBeachGardensPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Palm Beach Gardens Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Palm Beach Gardens FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Palm Beach Gardens FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Palm Beach Gardens, roofer Palm Beach Gardens FL, roof replacement Palm Beach Gardens, PBG roofing company, best roofer Palm Beach Gardens');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Palm Beach Gardens, roofer Palm Beach Gardens FL, roof replacement Palm Beach Gardens, PBG roofing company, best roofer Palm Beach Gardens';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Palm Beach Gardens');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Palm Beach Gardens',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Palm Beach Gardens', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/palm-beach-gardens' }
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
      description: "Popular choice throughout Palm Beach Gardens. Premium concrete and clay tile installations for the city's diverse neighborhoods.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Energy-efficient metal roofing gaining popularity in Palm Beach Gardens for durability and lower cooling costs.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Quality architectural shingles for Palm Beach Gardens homes — from starter properties to family estates.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern flat roofing systems for Palm Beach Gardens commercial properties and contemporary home designs.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert repairs and maintenance extending Palm Beach Gardens roof lifespans. Includes required 5-year certification letters.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Office buildings, retail centers, and commercial properties throughout Palm Beach Gardens and PGA Boulevard corridor.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Intense Sun & Heat',
      description: "Palm Beach Gardens faces year-round Florida sun that degrades roofing materials faster than anywhere else. We install UV-resistant products designed for extreme exposure to maximize your roof's lifespan and performance."
    },
    {
      title: 'Hurricane Season',
      description: "From June through November, Palm Beach Gardens faces tropical storms and hurricane threats. We engineer every roof for high winds and storm conditions — because Florida Building Code minimums are just the starting point."
    },
    {
      title: 'Afternoon Thunderstorms',
      description: "Summer brings daily afternoon deluges that test roofing systems. Proper drainage, quality underlayment, and correct flashing details prevent the water intrusion issues we see from substandard installations."
    },
    {
      title: 'HOA Requirements',
      description: "Many Palm Beach Gardens communities have HOA guidelines for roofing materials, colors, and appearance. We're familiar with requirements in most neighborhoods and can help navigate approval processes."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we discover structural issues or rotted decking during installation, we have the licensing and expertise to fix it properly."
    },
    {
      title: 'Northern Palm Beach Experts',
      description: "We've completed hundreds of projects throughout Palm Beach Gardens and northern Palm Beach County. We know the building codes, common HOA requirements, and what roofing systems perform best in this area."
    },
    {
      title: 'Complete Transparency',
      description: "Every job includes detailed photo documentation, clear pricing with no surprises, permit compliance, wind mitigation forms, and manufacturer certifications. You'll know exactly what's happening at every stage."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida insurance law to maintain coverage and avoid the forced policy non-renewals happening across the state."
    }
  ];

  const nearbyCities = [
    { name: 'Jupiter', path: '/roofing-contractor-jupiter-fl' },
    { name: 'North Palm Beach', path: '/roofing-contractor-north-palm-beach-fl' },
    { name: 'West Palm Beach', path: '/roofing-contractor-west-palm-beach-fl' },
    { name: 'Juno Beach', path: '/roofing-contractor-juno-beach-fl' },
    { name: 'Riviera Beach', path: '/roofing-contractor-riviera-beach-fl' },
    { name: 'Lake Park', path: '/roofing-contractor-lake-park-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Palm Beach Gardens?',
      answer: 'Roof replacement costs in Palm Beach Gardens typically range from $12,000 to $50,000+ depending on size, material choice, and complexity. Tile roofs cost more upfront but last 50+ years. Shingle roofs are more budget-friendly with 20-30 year lifespans. We provide free inspections and detailed written estimates.'
    },
    {
      question: 'What roofing material is best for Palm Beach Gardens homes?',
      answer: 'Tile roofing is very popular in Palm Beach Gardens — it handles Florida\'s climate well and matches the architectural style of many neighborhoods. Metal roofing is growing in popularity for energy efficiency. Architectural shingles work well for budget-conscious homeowners. We\'ll assess your specific property and recommend the best option during your free inspection.'
    },
    {
      question: 'Do you pull permits for roofing work in Palm Beach Gardens?',
      answer: 'Yes, always. Palm Beach Gardens requires permits for roof replacements, and we handle all permit applications, inspection scheduling, and compliance documentation. You\'ll receive complete records for your property files and insurance requirements.'
    },
    {
      question: 'How long does a roof replacement take in Palm Beach Gardens?',
      answer: 'Most Palm Beach Gardens residential roof replacements take 2-5 days depending on size and material. Tile roofs take longer than shingle roofs. Larger homes or complex designs may require additional time. We provide a detailed timeline before starting and keep you informed throughout the project.'
    },
    {
      question: 'Do you work with insurance companies for storm damage?',
      answer: 'We provide comprehensive documentation for insurance claims including pre-repair photos, detailed damage assessments, scope of work, and post-repair documentation. This gives you everything needed to file your claim successfully, though we don\'t negotiate directly with insurance companies on pricing.'
    },
    {
      question: 'Can you help with HOA approval in Palm Beach Gardens communities?',
      answer: 'Yes. We can provide material specifications, color samples, manufacturer documentation, and installation details for your HOA submission. Many Palm Beach Gardens HOAs have approved materials lists — we\'re familiar with requirements in most communities and can help navigate the approval process.'
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
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Palm Beach Gardens</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Palm Beach Gardens, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Professional roofing services for Palm Beach Gardens — from PGA Boulevard to the Gardens Mall corridor and beyond.
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
                Schedule Free Inspection in Palm Beach Gardens
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
              Your Trusted Roofer in Palm Beach Gardens
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Palm Beach Gardens and nearby communities. For over 20 years, All Phase Construction has been serving Palm Beach Gardens homeowners and businesses with professional roofing services. As one of northern Palm Beach County's largest cities with over 60,000 residents, Palm Beach Gardens features diverse neighborhoods — from master-planned communities to golf course estates to commercial corridors along PGA Boulevard.
              </p>
              <p>
                Palm Beach Gardens presents typical South Florida roofing challenges: intense year-round sun exposure that degrades materials, hurricane threats during storm season, daily afternoon thunderstorms testing drainage systems, and HOA requirements in many communities. Whether you own a home in Mirasol, BallenIsles, Old Palm, or any of the city's many neighborhoods, your roof faces conditions that demand proper installation and quality materials.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/tile-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and remaining life, a <Link to="/metal-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate energy-efficient systems, or a <Link to="/flat-roof-inspection-palm-beach-county" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial buildings to detect membrane deterioration early.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Florida Code Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Code Requirements in Palm Beach Gardens
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Palm Beach Gardens is in Palm Beach County, which has strict building codes for hurricane resistance. While not in Broward's HVHZ, your roof must meet Florida Building Code requirements including:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Wind Load Standards</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Roofing systems must be engineered for local wind speeds based on your property's location and roof design. We calculate and install to meet these requirements.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Code-Compliant Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Nail patterns, underlayment specifications, flashing details, and fastener requirements all must meet Florida code. We never cut corners on proper installation.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Permits & Inspections</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Palm Beach Gardens requires permits and inspections for roof replacements. We handle all applications and coordinate inspections to keep your project on schedule.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Palm Beach County codes are designed for hurricane protection. Palm Beach Gardens homeowners need roofers who install to these standards — not contractors taking shortcuts."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Palm Beach Gardens
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
                What Palm Beach Gardens Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                South Florida's climate is tough on roofs. Here's what we address:
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
              Why Palm Beach Gardens Homeowners Choose All Phase Construction
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
                Palm Beach Gardens Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Palm Beach Gardens zip codes including: 33403, 33408, 33410, 33412, 33418, 33420, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Palm Beach Gardens, we provide roofing services throughout Palm Beach and Broward Counties:
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
            city="Palm Beach Gardens"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Palm Beach Gardens Homeowners
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
              Ready for a Free Roof Inspection in Palm Beach Gardens?
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
