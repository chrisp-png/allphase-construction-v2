import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function CooperCityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Cooper City Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cooper City FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Cooper City FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Cooper City, roofer Cooper City FL, roof replacement Cooper City, Cooper City roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Cooper City, roofer Cooper City FL, roof replacement Cooper City, Cooper City roofing company';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Cooper City');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Cooper City',
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
      { name: 'Cooper City', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/cooper-city' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide roofing services in Cooper City, FL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide residential and commercial roofing services throughout Cooper City, Florida."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing systems do you install in Cooper City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We install shingle roofing, tile roofing, flat roofing systems, and mechanically seamed metal roofing systems."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle roof repairs in Cooper City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We repair leaks, flashing issues, damaged areas, and other common roof problems based on an inspection and a clear scope of work."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a roof cost in Cooper City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof pricing depends on roof size, roof type, and project complexity. For a quick starting point, use the Cooper City financing calculator on this page to estimate monthly payments based on your budget range."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a repair or a full replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A roof inspection is the fastest way to determine the right path. We check the surface system, underlayment indicators, flashing details, penetrations, and leak points to determine whether a targeted repair or replacement is the smarter option."
          }
        }
      ]
    };

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    [localBusinessSchema, breadcrumbSchema, faqSchema].forEach(schema => {
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
      description: "Concrete and clay tile roofs are extremely popular in Cooper City's upscale neighborhoods. We install them to HVHZ standards with proper adhesive and fastening.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Standing seam metal roofs that last 50+ years. Increasingly popular with Cooper City homeowners seeking long-term value.",
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "High-wind rated architectural shingles that meet HVHZ requirements. Common throughout Cooper City's residential areas.",
      path: '/shingle-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "TPO, PVC, and modified bitumen systems for Cooper City's commercial properties and modern homes.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Professional repairs that extend roof life and may qualify for 5-year certification letters under Florida law.",
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Serving Cooper City's commercial properties along Stirling Road and Griffin Road.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Upscale Home Standards',
      description: "Cooper City is known for larger, well-maintained homes. Homeowners expect premium work and professional service. We deliver both."
    },
    {
      title: 'HVHZ Compliance',
      description: "Cooper City is in the High Velocity Hurricane Zone, requiring enhanced installation methods and materials. We're fully trained for HVHZ work."
    },
    {
      title: 'HOA Requirements',
      description: "Many Cooper City communities have architectural review boards. We provide all necessary documentation and work within HOA guidelines."
    },
    {
      title: 'Tile Roof Prevalence',
      description: "Tile roofs are common in Cooper City and require specialized knowledge for proper installation and repair. We're tile roof experts."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed Contractors',
      description: "We hold both General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) licenses. We can handle structural work, not just roofing."
    },
    {
      title: 'Upscale Home Experience',
      description: "We regularly work on high-value homes throughout Cooper City and understand the quality expectations that come with these properties."
    },
    {
      title: 'HVHZ Certified',
      description: "All of Cooper City requires HVHZ installation methods. We've been doing it for over 20 years throughout Broward County."
    },
    {
      title: 'Professional Service',
      description: "Clean work sites, clear communication, and respectful crews. We treat your home with the care it deserves."
    }
  ];

  const nearbyCities = [
    { name: 'Davie', path: '/roofing-contractor-davie-fl' },
    { name: 'Pembroke Pines', path: '/roofing-contractor-pembroke-pines-fl' },
    { name: 'Plantation', path: '/roofing-contractor-plantation-fl' },
    { name: 'Weston', path: '/roofing-contractor-weston-fl' },
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl' },
    { name: 'Hollywood', path: '/roofing-contractor-hollywood-fl' }
  ];

  const faqs = [
    {
      question: 'Do you provide roofing services in Cooper City, FL?',
      answer: "Yes. We provide residential and commercial roofing services throughout Cooper City, Florida."
    },
    {
      question: 'What roofing systems do you install in Cooper City?',
      answer: "We install shingle roofing, tile roofing, flat roofing systems, and mechanically seamed metal roofing systems."
    },
    {
      question: 'Do you handle roof repairs in Cooper City?',
      answer: "Yes. We repair leaks, flashing issues, damaged areas, and other common roof problems based on an inspection and a clear scope of work."
    },
    {
      question: 'How much does a roof cost in Cooper City?',
      answer: "Roof pricing depends on roof size, roof type, and project complexity. For a quick starting point, use the Cooper City financing calculator on this page to estimate monthly payments based on your budget range."
    },
    {
      question: 'How do I know if I need a repair or a full replacement?',
      answer: "A roof inspection is the fastest way to determine the right path. We check the surface system, underlayment indicators, flashing details, penetrations, and leak points to determine whether a targeted repair or replacement is the smarter option."
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
            <span className="text-white">Cooper City</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in Cooper City, FL
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Cooper City and nearby communities. Cooper City homeowners expect durable, code-compliant roofing that holds up to South Florida heat, wind, and seasonal storms. All Phase Construction USA provides professional roofing services in Cooper City with a focus on clean workmanship, clear communication, and systems built for long-term performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Florida-Licensed & Insured</span>
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
                <span>Clear Pricing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Cooper City
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
              Roofing Services Available in Cooper City
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                We provide complete roofing services for Cooper City property owners, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Roof replacement (shingle, tile, flat, and mechanically seamed metal)</li>
                <li>Roof repairs (leaks, damage, flashing, penetrations)</li>
                <li>Roof inspections (maintenance, real estate, and pre-project planning)</li>
                <li>Preventative maintenance to extend roof life and reduce leak risk</li>
              </ul>
              <p className="pt-4">
                Explore our services: <Link to="/roofing-services/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Repair</Link> · <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Tile Roofing</Link> · <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Inspection</Link> · <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Metal Roofing</Link>
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Internal Links for Cooper City Homeowners
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li>
                  Learn what to expect during a replacement: <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Replacement</Link>
                </li>
                <li>
                  Need a fast fix for a leak: <Link to="/roofing-services/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Repair</Link>
                </li>
                <li>
                  Not sure what you need yet: <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Inspection</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Cooper City Requires HVHZ Roofing Standards
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Cooper City is designated a High Velocity Hurricane Zone under the Florida Building Code. All roofing work must meet enhanced standards for wind resistance and durability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Materials</h3>
                <p className="text-zinc-400 leading-relaxed">
                  All materials must have Florida Product Approvals for HVHZ use. We only install approved products that meet these strict standards.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Enhanced fastening patterns, wind uplift calculations, and attachment methods designed for extreme wind events.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Detailed permits, engineering calculations, and inspection records. We handle all HVHZ paperwork requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Cooper City
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Complete residential and commercial roofing services throughout Cooper City.
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
                Roofing Considerations in Cooper City
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                What Cooper City roofs face:
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
              Why Homeowners in Cooper City Choose All Phase Construction USA
            </h2>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Florida-licensed and insured roofing contractor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Experienced with South Florida code requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Clear scope, clean job sites, and dependable scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Options for shingle, tile, flat roofing, and mechanically seamed metal systems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Cooper City Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Cooper City zip codes including: 33024, 33026, 33328, 33330, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Cooper City, we provide roofing services throughout Broward County:
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

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimate in Cooper City, FL
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Use the tool below to get a fast ballpark estimate based on roof size and roof type. Final pricing depends on a site inspection, roof complexity, and material selection.
            </p>
          </div>

          <EmbeddedRoofCalculator
            city="Cooper City"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate for a Cooper City Roof?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              If you're budgeting for a roof replacement, contact us for financing options and monthly payment estimates based on your project range.
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <p className="text-zinc-300 mb-6">
                <span className="font-semibold text-white">Quick link:</span> How much does a roof cost in Cooper City?
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Request Financing Information
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Cooper City Roofing
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
              Ready for a Free Roof Inspection in Cooper City?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition and provide honest recommendations.
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
