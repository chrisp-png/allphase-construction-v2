import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PembrokePinesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Pembroke Pines Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pembroke Pines FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. 20+ years experience. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Pembroke Pines FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. 20+ years experience. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Pembroke Pines, roofer Pembroke Pines FL, roof replacement Pembroke Pines, Pembroke Pines roofing company, best roofer in Pembroke Pines, shingle roof Pembroke Pines');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Pembroke Pines, roofer Pembroke Pines FL, roof replacement Pembroke Pines, Pembroke Pines roofing company, best roofer in Pembroke Pines, shingle roof Pembroke Pines';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Pembroke Pines');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Pembroke Pines',
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
      { name: 'Pembroke Pines', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/pembroke-pines' }
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
      description: "Popular throughout Pembroke Pines neighborhoods. We install concrete and clay tiles with proper underlayment and foam adhesive for maximum wind uplift resistance.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "A growing choice for Pembroke Pines homeowners seeking longevity and energy efficiency. Built to last 50+ years.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "The most common roof type in Pembroke Pines. We install HVHZ-rated architectural shingles designed for Florida's climate.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial buildings and modern residential properties throughout Pembroke Pines. TPO, PVC, and modified bitumen systems.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Extending roof lifespan for Pembroke Pines properties. We can provide 5-year certification letters for qualifying roofs to maintain insurance coverage.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Retail centers, office buildings, and commercial properties along Pines Boulevard and throughout the city.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Rapid Growth Area',
      description: "Pembroke Pines experienced massive growth in the 1980s-2000s. Many homes are now reaching the 20-30 year mark where roof replacement becomes necessary. We understand the construction methods of this era."
    },
    {
      title: 'Large City Diversity',
      description: "As one of South Florida's largest cities, Pembroke Pines has everything from mid-century homes to brand-new construction. Every neighborhood has unique characteristics we account for."
    },
    {
      title: 'HOA Communities',
      description: "Much of Pembroke Pines is governed by HOAs with specific requirements for materials, colors, and contractor documentation. We've worked with dozens of local HOAs and know the drill."
    },
    {
      title: 'Intense Weather Patterns',
      description: "Pembroke Pines sits inland enough to avoid coastal flooding but still gets hammered by afternoon thunderstorms, hurricanes, and UV exposure. Roofs here need to handle it all."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we discover structural issues during tear-off, we fix them — no need for multiple contractors."
    },
    {
      title: 'Local Knowledge',
      description: "Based in Deerfield Beach, we've been serving Pembroke Pines for over 20 years. We understand the city's housing stock and what roofs here are up against."
    },
    {
      title: 'HOA Expertise',
      description: "We've navigated the approval processes for dozens of Pembroke Pines HOAs. We provide all necessary documentation and handle the paperwork."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage from roof age non-renewals."
    }
  ];

  const nearbyCities = [
    { name: 'Miramar', path: '/roofing-contractor-miramar-fl/' },
    { name: 'Hollywood', path: '/roofing-contractor-hollywood-fl/' },
    { name: 'Davie', path: '/roofing-contractor-davie-fl/' },
    { name: 'Weston', path: '/roofing-contractor-weston-fl/' },
    { name: 'Cooper City', path: '/roofing-contractor-cooper-city-fl/' },
    { name: 'Plantation', path: '/roofing-contractor-plantation-fl/' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Pembroke Pines?',
      answer: "Roof replacement costs in Pembroke Pines typically range from $10,000 to $35,000+ depending on size, material choice, and complexity. Shingle roofs are generally more affordable, while tile roofs cost more but last longer. We provide free inspections and detailed, itemized quotes."
    },
    {
      question: 'What type of roof is most common in Pembroke Pines?',
      answer: "Architectural shingles are the most common roof type in Pembroke Pines, especially in neighborhoods developed from the 1980s-2000s. Tile roofs are also popular in certain areas. We install both to HVHZ standards with proper underlayment and ventilation."
    },
    {
      question: 'Do you handle HOA approval paperwork?',
      answer: "Yes. We provide all documentation your HOA typically requires — contractor licenses, insurance certificates, material specifications, color samples, and project timelines. We've worked with many Pembroke Pines HOAs and know what they need."
    },
    {
      question: 'How long does a roof replacement take in Pembroke Pines?',
      answer: "Most residential roof replacements in Pembroke Pines are completed in 1-3 days depending on size and material. Shingle roofs typically take 1-2 days, tile roofs 2-3 days. We'll provide a specific timeline before starting."
    },
    {
      question: 'My insurance company says my roof is too old. What can I do?',
      answer: "Under Florida Statute 627.7011, if we can certify your roof has 5+ years of remaining useful life, your insurer cannot non-renew your policy based solely on roof age. We'll inspect your roof and, if it qualifies, provide the required certification letter."
    },
    {
      question: 'Should I repair or replace my 18-year-old roof?',
      answer: "It depends on the condition. Some 18-year-old roofs can be repaired and restored, while others need replacement. We'll inspect the entire system — shingles, underlayment, decking, and ventilation — and give you honest options with pros and cons of each."
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
            <span className="text-white">Pembroke Pines</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Pembroke Pines, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Pembroke Pines families deserve reliable roofs. HVHZ compliant. Quality you can trust.
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
                Schedule Free Inspection in Pembroke Pines
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
              Your Trusted Roofer in Pembroke Pines
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Pembroke Pines and nearby communities. Pembroke Pines is one of South Florida's largest cities — a sprawling community of over 170,000 residents living in everything from 1960s ranch homes to brand-new construction. It's a city built for families, with good schools, parks, and accessible neighborhoods.
              </p>
              <p>
                Located about 20 miles from our Deerfield Beach headquarters, Pembroke Pines has been one of our most active service areas for over two decades. We've worked throughout the city — from the established neighborhoods near Pembroke Lakes Mall to the newer developments in Chapel Trail and Silver Lakes.
              </p>
              <p>
                Much of Pembroke Pines was built during the explosive growth period of the 1980s and 1990s. These homes are now reaching the age where original roofs need replacement. Before making decisions, schedule a <Link to="/tile-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">diagnostic tile roof inspection</Link> to assess remaining service life, a <Link to="/metal-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional metal roof inspection</Link> for energy-efficient metal systems, or a <Link to="/flat-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection and evaluation</Link> for commercial properties and modern homes.
              </p>
              <p>
                Pembroke Pines is a community where families put down roots. We make sure those roots stay protected from the top down.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pembroke Pines Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Pembroke Pines is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
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
              "Pembroke Pines may feel suburban and comfortable, but it's still in the hurricane zone. Every roof we install is built to withstand Category 4 winds. No exceptions."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Pembroke Pines
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
                What Pembroke Pines Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Pembroke Pines roofs deal with the full range of South Florida weather challenges:
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
              Why Pembroke Pines Homeowners Choose All Phase Construction
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
                Pembroke Pines Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Pembroke Pines zip codes including: 33023, 33024, 33025, 33026, 33027, 33028, 33029, 33082, 33084, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Pembroke Pines, we provide roofing services throughout Broward County:
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
            city="Pembroke Pines"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Pembroke Pines Homeowners
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
              Ready for a Free Roof Inspection in Pembroke Pines?
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
