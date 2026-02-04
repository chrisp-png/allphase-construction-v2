import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, CloudRain, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function GulfStreamPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Gulf Stream Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Gulf Stream FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Gulf Stream FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Gulf Stream, roofer Gulf Stream FL, roof replacement Gulf Stream, oceanfront roofing Gulf Stream, luxury roofing Gulf Stream, Gulf Stream roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Gulf Stream, roofer Gulf Stream FL, roof replacement Gulf Stream, oceanfront roofing Gulf Stream, luxury roofing Gulf Stream, Gulf Stream roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Gulf Stream');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Gulf Stream',
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
      { name: 'Gulf Stream', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/gulf-stream' }
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
      description: "Premium concrete and clay tile systems for Gulf Stream's oceanfront estates. Engineered for salt air resistance and architectural beauty.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "High-end standing seam metal roofing with superior corrosion resistance for Gulf Stream's coastal environment.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Premium architectural shingles with extended warranties for Gulf Stream properties requiring aesthetic versatility.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern flat roofing systems for contemporary Gulf Stream homes. TPO, PVC, and modified bitumen.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Expert restoration and repair services to protect Gulf Stream's valuable real estate investments.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Specialized commercial roofing for Gulf Stream's limited commercial properties and club facilities.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Direct Ocean Exposure',
      description: "Gulf Stream sits directly on the Atlantic Ocean. Salt spray and constant coastal winds accelerate corrosion on metal components and degrade roofing materials faster than inland areas. We use marine-grade materials and specialized installation techniques for oceanfront properties."
    },
    {
      title: 'Hurricane-Force Winds',
      description: "Gulf Stream's exposed oceanfront location makes it vulnerable to direct hurricane impacts. We engineer every roof for extreme wind events — because when the storm comes, your estate needs more than minimum code compliance."
    },
    {
      title: 'Luxury Property Standards',
      description: "Gulf Stream homeowners expect perfection. From material selection to installation details, we deliver the level of craftsmanship that matches the caliber of your property. No shortcuts, no compromises."
    },
    {
      title: 'Limited Access & Privacy',
      description: "Working in Gulf Stream requires discretion, professionalism, and respect for privacy. Our crews are experienced in high-end communities and understand the expectations that come with exclusive neighborhoods."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find structural issues behind luxury finishes, we have the expertise and licensing to address them properly."
    },
    {
      title: 'Luxury Market Experience',
      description: "We've worked extensively in South Florida's most exclusive communities. We understand the expectations, the materials, and the level of service required in markets like Gulf Stream."
    },
    {
      title: 'Complete Documentation',
      description: "Every project includes extensive photo documentation, detailed material specifications, manufacturer certifications, and wind mitigation forms — everything your insurance company and property records require."
    },
    {
      title: 'Discretion & Professionalism',
      description: "Our crews arrive on time, work efficiently, maintain job site cleanliness, and respect your property and privacy. The level of professionalism you'd expect for a Gulf Stream estate."
    }
  ];

  const nearbyCities = [
    { name: 'Delray Beach', path: '/roofing-contractor-delray-beach-fl' },
    { name: 'Highland Beach', path: '/roofing-contractor-highland-beach-fl' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl' },
    { name: 'Ocean Ridge', path: '/roofing-contractor-ocean-ridge-fl' },
    { name: 'Boynton Beach', path: '/roofing-contractor-boynton-beach-fl' },
    { name: 'Briny Breezes', path: '/roofing-contractor-briny-breezes-fl' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost for a Gulf Stream oceanfront estate?',
      answer: 'Luxury roofing projects in Gulf Stream typically range from $75,000 to $250,000+ depending on size, material selection, architectural complexity, and oceanfront requirements. We provide detailed proposals with complete material specifications and project timelines.'
    },
    {
      question: 'What roofing materials work best for Gulf Stream\'s oceanfront location?',
      answer: 'For direct ocean exposure, we recommend either premium concrete tile with corrosion-resistant fasteners, or standing seam metal roofing with marine-grade coatings. Both materials can withstand salt air while maintaining architectural elegance. We\'ll assess your specific property and provide recommendations during your consultation.'
    },
    {
      question: 'How do you handle privacy and security in Gulf Stream?',
      answer: 'We understand the privacy expectations in Gulf Stream. Our crews are background-checked, professionally trained, and experienced in exclusive communities. We coordinate access through security gates, maintain discretion, and ensure your property remains secure throughout the project.'
    },
    {
      question: 'Do you pull permits for work in Gulf Stream?',
      answer: 'Yes, always. Gulf Stream requires permits for roof replacements, and we handle all permit applications and coordinate all inspections. You\'ll have complete documentation for your property records.'
    },
    {
      question: 'How long does a roof replacement take in Gulf Stream?',
      answer: 'Most Gulf Stream estate roofing projects take 1-3 weeks depending on size and complexity. Tile roofs and custom architectural details take longer than standard installations. We provide a detailed timeline before beginning work and keep you informed throughout the process.'
    },
    {
      question: 'Can you provide references from other Gulf Stream properties?',
      answer: 'Yes, we have completed multiple projects in Gulf Stream and throughout Palm Beach County\'s luxury communities. We can provide references upon request, respecting our clients\' privacy while demonstrating our experience in this market.'
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
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Gulf Stream</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Gulf Stream, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Elite roofing services for Gulf Stream's exclusive oceanfront estates — where luxury meets Atlantic Ocean resilience.
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
                Schedule Free Inspection in Gulf Stream
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
              Your Trusted Roofer in Gulf Stream
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Gulf Stream and nearby communities. Gulf Stream is one of Florida's most exclusive oceanfront communities — a small town with fewer than 1,000 residents and some of the most valuable real estate in Palm Beach County. For over 20 years, All Phase Construction has been the trusted roofing contractor for Gulf Stream's oceanfront estates and luxury properties.
              </p>
              <p>
                We understand what Gulf Stream properties require: premium materials that can withstand direct Atlantic Ocean exposure, flawless installation that matches the caliber of your estate, and the professionalism and discretion expected in South Florida's luxury market.
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
                Roofing Code Requirements in Gulf Stream
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                While Gulf Stream is in Palm Beach County (not the High Velocity Hurricane Zone), your oceanfront property still faces extreme conditions. We exceed Florida Building Code minimums and engineer every roof for:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Hurricane Wind Loads</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Gulf Stream's oceanfront exposure demands engineering for extreme wind events. We don't install to code minimums — we install for real-world hurricane conditions.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Salt Air Resistance</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every fastener, flashing detail, and material selection is made with salt air corrosion in mind. Standard materials fail quickly in oceanfront environments.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Permit & Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Complete permit compliance and inspection coordination. Your property deserves documentation that protects its value and satisfies all requirements.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "In Gulf Stream, code compliance is just the starting point. Your oceanfront estate needs a roofing system engineered for the worst hurricane season can deliver."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Gulf Stream
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Premium roofing services for Gulf Stream's luxury estates — from repairs to complete replacements.
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
                What Gulf Stream Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Oceanfront luxury properties face extreme conditions. Here's what we address:
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
              Why Gulf Stream Homeowners Choose All Phase Construction
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
                Gulf Stream Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve Gulf Stream zip code 33483 and all surrounding Palm Beach County oceanfront communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Gulf Stream, we provide roofing services throughout Palm Beach and Broward Counties:
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
            city="Gulf Stream"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Gulf Stream Homeowners
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
              Ready for a Free Roof Inspection in Gulf Stream?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and provide expert recommendations — no pressure, no obligation.
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
