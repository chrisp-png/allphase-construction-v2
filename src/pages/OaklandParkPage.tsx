import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function OaklandParkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Oakland Park Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Oakland Park FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Oakland Park FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Oakland Park, roofer Oakland Park FL, roof replacement Oakland Park, Oakland Park roofing company, best roofer in Oakland Park, shingle roof Oakland Park');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Oakland Park, roofer Oakland Park FL, roof replacement Oakland Park, Oakland Park roofing company, best roofer in Oakland Park, shingle roof Oakland Park';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Oakland Park');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Oakland Park',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: { ratingValue: '4.9', reviewCount: '150' }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Oakland Park', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/oakland-park' }
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
      description: "Classic barrel tiles and flat tiles for Oakland Park homes. Built for aesthetics and hurricane resistance with proper underlayment.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Standing seam and metal shingles for Oakland Park properties. Energy efficient and built to last 50+ years.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "The most cost-effective option for Oakland Park homes. We install HVHZ-rated architectural shingles that look great and perform under pressure.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Commercial and multi-family flat roof systems throughout Oakland Park. TPO, modified bitumen, and built-up roofing.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Keeping Oakland Park roofs functional longer. We can also provide 5-year certification letters for qualifying roofs to protect insurance coverage.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Multi-family buildings, retail spaces, and commercial properties along Dixie Highway and throughout Oakland Park.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Proximity to the Coast',
      description: "Oakland Park sits just a few miles inland from the Atlantic. This means higher humidity, salt air exposure, and more aggressive corrosion on roofing materials and fasteners. We use coastal-rated materials and galvanized fasteners."
    },
    {
      title: 'Older Housing Stock',
      description: "Many Oakland Park homes date back to the 1950s-1970s, meaning roofs often have multiple layers, outdated ventilation, and aging decking. We frequently discover and address these issues during tear-offs."
    },
    {
      title: 'Mixed Residential-Commercial Use',
      description: "Oakland Park has a unique mix of residential homes and commercial properties often side-by-side. We handle both — from single-family homes to multi-unit buildings and retail centers."
    },
    {
      title: 'Heavy Afternoon Storms',
      description: "Being close to the coast means Oakland Park often gets hit with intense afternoon thunderstorms during summer months. Proper drainage and flashing are critical to prevent water intrusion."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find rotted wood or structural issues, we fix it — no waiting for another contractor."
    },
    {
      title: 'Local & Established',
      description: "Headquartered in Deerfield Beach, just minutes from Oakland Park. We've been serving this community for over 20 years. We're not going anywhere."
    },
    {
      title: 'Honest Communication',
      description: "We know Oakland Park's housing diversity means every property is different. We'll tell you what you actually need — not what makes us the most money."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to help protect your insurance coverage."
    }
  ];

  const nearbyCities = [
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl' },
    { name: 'Wilton Manors', path: '/roofing-contractor-wilton-manors-fl' },
    { name: 'Lauderdale Lakes', path: '/roofing-contractor-lauderdale-lakes-fl' },
    { name: 'Pompano Beach', path: '/roofing-contractor-pompano-beach-fl' },
    { name: 'Lauderhill', path: '/roofing-contractor-lauderhill-fl' },
    { name: 'Tamarac', path: '/roofing-contractor-tamarac-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Oakland Park?',
      answer: "Roof replacement costs in Oakland Park typically range from $8,000 to $25,000+ depending on size, material choice, and structural condition. Older homes often require more decking repair, which affects the final price. We provide free inspections and detailed quotes."
    },
    {
      question: 'What type of roof is most common in Oakland Park?',
      answer: "Shingle roofs are the most common in Oakland Park, especially on older single-family homes. Tile roofs are also present, particularly on mid-century homes and renovated properties. We install both to current HVHZ standards."
    },
    {
      question: 'Does Oakland Park require building permits for roof replacement?',
      answer: "Yes. All roof replacements in Oakland Park require a building permit through Broward County. We handle the entire permitting process, including wind load calculations, product approvals, and inspection scheduling."
    },
    {
      question: 'How long does a roof replacement take in Oakland Park?',
      answer: "Most residential roof replacements in Oakland Park are completed in 1-3 days depending on size and material. We'll give you a specific timeline before we start and communicate any changes if unexpected issues arise."
    },
    {
      question: 'My roof is only 15 years old but I see some issues. Should I replace it?',
      answer: "Not necessarily. Some 15-year-old roofs in Oakland Park can be restored rather than replaced — especially if the underlying structure is sound. We'll inspect the full system and give you honest options based on what we find."
    },
    {
      question: 'Can you help with insurance claims for storm damage?',
      answer: "Yes. We work with insurance adjusters regularly and can provide documentation, photos, and professional assessments to support your claim. We'll walk you through the process."
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
            <span className="text-white">Oakland Park</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Oakland Park, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Oakland Park's diverse neighborhoods deserve roofs built for coastal conditions. HVHZ compliant. Locally trusted.
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
                Schedule Free Inspection in Oakland Park
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
              Your Trusted Roofer in Oakland Park
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Oakland Park and nearby communities. Oakland Park is one of Broward County's most diverse and accessible communities — stretching from Dixie Highway east toward the Intracoastal. It's a city with character, from mid-century homes to newer developments, from quiet residential streets to bustling commercial corridors.
              </p>
              <p>
                Located just minutes from our Deerfield Beach headquarters, Oakland Park has been one of our core service areas for over two decades. We've worked on homes throughout the city — from the tree-lined neighborhoods near Oakland Park Boulevard to the waterfront properties near the Middle River.
              </p>
              <p>
                Many Oakland Park homes were built in the 1950s through 1970s, which means they're now at the age where major roof replacement becomes necessary. We understand the construction methods of that era and know what it takes to bring these homes up to modern HVHZ standards while preserving their character.
              </p>
              <p>
                Oakland Park homeowners value honesty and quality work. Whether you need a <Link to="/tile-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">diagnostic tile roof inspection</Link> to evaluate underlayment condition, a <Link to="/metal-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">professional metal roof inspection</Link> to assess panel integrity, or a <Link to="/flat-roof-inspection-broward-county" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for multi-family or commercial buildings, that's exactly what we deliver.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Oakland Park Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Oakland Park is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
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
              "Oakland Park sits close enough to the coast that hurricane winds hit with full force. HVHZ requirements aren't optional — they're essential. We install every roof to withstand the worst."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Oakland Park
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
                What Oakland Park Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Oakland Park's coastal proximity and housing diversity create unique roofing challenges:
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
              Why Oakland Park Homeowners Choose All Phase Construction
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
                Oakland Park Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Oakland Park zip codes including: 33309, 33310, 33311, 33334, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Oakland Park, we provide roofing services throughout Broward County:
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

          <EmbeddedRoofCalculator
            city="Oakland Park"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Oakland Park Homeowners
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
              Ready for a Free Roof Inspection in Oakland Park?
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
