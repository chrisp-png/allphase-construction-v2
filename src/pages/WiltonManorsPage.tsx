import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function WiltonManorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Wilton Manors Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wilton Manors FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Wilton Manors FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Wilton Manors, roofer Wilton Manors FL, roof replacement Wilton Manors, Wilton Manors roofing company, best roofer in Wilton Manors, shingle roof Wilton Manors');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Wilton Manors, roofer Wilton Manors FL, roof replacement Wilton Manors, Wilton Manors roofing company, best roofer in Wilton Manors, shingle roof Wilton Manors';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Wilton Manors');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Wilton Manors',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Wilton Manors', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/wilton-manors' }
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
      description: "Classic tile roofs for Wilton Manors' historic and renovated properties. Installed with proper underlayment and foam adhesive for hurricane protection.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Modern metal roofing systems for Wilton Manors homes. Energy efficient, durable, and perfect for contemporary renovations.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "The most practical choice for Wilton Manors' diverse housing stock. We install HVHZ-rated architectural shingles built for South Florida.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial buildings and modern residential designs throughout Wilton Manors. TPO, PVC, and modified bitumen systems.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Maintaining Wilton Manors roofs economically. We provide 5-year certification letters for qualifying roofs to help protect insurance coverage.",
      path: '/roofing-services/roof-repair/',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Retail spaces, mixed-use buildings, and commercial properties along Wilton Drive and throughout the city.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Historic Housing Stock',
      description: "Many Wilton Manors homes date back to the 1940s-1960s. These older properties often have unique construction methods, multiple roof layers, and structural issues that need addressing during roof replacement."
    },
    {
      title: 'Close Coastal Proximity',
      description: "Wilton Manors sits just a few miles from the Atlantic, which means salt air exposure, higher humidity, and more aggressive corrosion on roofing materials. We use coastal-rated products and galvanized fasteners."
    },
    {
      title: 'Mixed Property Types',
      description: "From small bungalows to large renovated estates, from single-family homes to mixed-use buildings — Wilton Manors has incredible diversity. We handle all types with equal expertise."
    },
    {
      title: 'Active Renovation Market',
      description: "Wilton Manors is experiencing significant renovation activity. We work with homeowners and contractors to provide roofing solutions that match the quality and character of these updated properties."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). Older homes often reveal structural issues during tear-off. We handle them — no need for multiple contractors."
    },
    {
      title: 'Experience with Older Homes',
      description: "Wilton Manors' historic housing stock requires contractors who understand older construction methods. We've worked on hundreds of mid-century homes and know what to expect."
    },
    {
      title: 'Local & Reliable',
      description: "Headquartered in Deerfield Beach, just minutes from Wilton Manors. We've been serving this community for over 20 years and understand its unique character."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage from roof age-based non-renewals."
    }
  ];

  const nearbyCities = [
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl/' },
    { name: 'Oakland Park', path: '/roofing-contractor-oakland-park-fl/' },
    { name: 'Lauderdale Lakes', path: '/roofing-contractor-lauderdale-lakes-fl/' },
    { name: 'Pompano Beach', path: '/roofing-contractor-pompano-beach-fl/' },
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl/' },
    { name: 'Lauderhill', path: '/roofing-contractor-lauderhill-fl/' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Wilton Manors?',
      answer: "Roof replacement costs in Wilton Manors typically range from $7,000 to $22,000+ depending on size, material, and structural condition. Older homes sometimes require more decking repair, which affects the final price. We provide free inspections and detailed quotes."
    },
    {
      question: 'What type of roof is most common in Wilton Manors?',
      answer: "Shingle roofs are most common in Wilton Manors, especially on the older bungalows and ranch homes that make up much of the city. Some renovated properties have tile or metal. We install all types to current HVHZ standards."
    },
    {
      question: 'My home is from the 1950s. Will you discover problems during tear-off?',
      answer: "Possibly. Older homes in Wilton Manors sometimes have rotted decking, inadequate ventilation, or structural issues that aren't visible until the old roof is removed. Our dual licensing means we can address these issues immediately — no waiting for another contractor."
    },
    {
      question: 'How long does a roof replacement take in Wilton Manors?',
      answer: "Most residential roof replacements in Wilton Manors take 1-2 days for shingle roofs, 2-3 days for tile. Older homes may take slightly longer if we discover structural issues. We'll provide a timeline before starting."
    },
    {
      question: 'Can you match the look of my original roof?',
      answer: "Often, yes. We have access to a wide range of roofing materials and colors. For historic properties, we can usually find modern materials that closely match the original appearance while meeting current building codes and HVHZ requirements."
    },
    {
      question: 'Does my older roof qualify for insurance certification?',
      answer: "It depends on condition, not just age. Under Florida Statute 627.7011, if we can certify your roof has 5+ years of remaining useful life, your insurer cannot non-renew based on age alone. We'll inspect your roof thoroughly and let you know if it qualifies."
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
            <span className="text-white">Wilton Manors</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Wilton Manors, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Wilton Manors' unique community deserves quality roofing. HVHZ compliant. Honest work. Fair pricing.
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
                Schedule Free Inspection in Wilton Manors
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
              Your Trusted Roofer in Wilton Manors
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Wilton Manors and nearby communities. Wilton Manors is one of South Florida's most unique communities — a small city with a big personality, known for its inclusive culture, vibrant downtown, and eclectic mix of historic bungalows, renovated estates, and contemporary homes. It's a place where character matters.
              </p>
              <p>
                Located just minutes from our Deerfield Beach headquarters, Wilton Manors has been one of our most active service areas for over two decades. We've worked throughout the city — from the historic neighborhoods near Five Points to the waterfront properties along the Middle River, from the renovated homes near Wilton Drive to the bungalows along NE 24th Street.
              </p>
              <p>
                Many Wilton Manors homes were built between the 1940s and 1960s, which means they're at the age where original roofs have been replaced multiple times. We understand older construction methods and what it takes to bring these homes up to current HVHZ standards while respecting their character.
              </p>
              <p>
                Wilton Manors residents value authenticity and quality work. That's what we deliver — straightforward service, honest pricing, and work that lasts.
              </p>
              <p>
                When roof concerns arise, schedule a <Link to="/tile-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and remaining life, a <Link to="/metal-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate system performance, or a <Link to="/flat-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial properties to identify issues early.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Wilton Manors Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Wilton Manors is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
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
              "Wilton Manors sits close to the coast, fully exposed to hurricane winds. HVHZ requirements apply to every roof we install, protecting homes that have stood for decades."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Wilton Manors
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
                What Wilton Manors Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Wilton Manors' age, location, and character create unique roofing challenges:
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
              Why Wilton Manors Homeowners Choose All Phase Construction
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
                Wilton Manors Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Wilton Manors zip codes including: 33305, 33311, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Wilton Manors, we provide roofing services throughout Broward County:
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
            city="Wilton Manors"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Wilton Manors Homeowners
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
              Ready for a Free Roof Inspection in Wilton Manors?
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
