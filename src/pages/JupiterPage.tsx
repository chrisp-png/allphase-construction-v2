import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, Star } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';
import { EXTERNAL_LINKS } from '../config/links';

export default function JupiterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Jupiter Roofing Contractor | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jupiter FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Jupiter FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Jupiter, roofer Jupiter FL, roof replacement Jupiter, Jupiter roofing company, best roofer in Jupiter');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Jupiter, roofer Jupiter FL, roof replacement Jupiter, Jupiter roofing company, best roofer in Jupiter';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Jupiter');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Jupiter',
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
      { name: 'Jupiter', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/jupiter' }
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
      description: "Jupiter's most popular choice. Premium concrete and clay tile installations built for Florida's climate and architectural styles.",
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Metal Roofing',
      description: "Growing in popularity across Jupiter for energy efficiency, durability, and modern aesthetics. 50+ year lifespan.",
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Shingle Roofing',
      description: "Quality architectural shingles for Jupiter's diverse neighborhoods — from starter homes to family estates.",
      path: '/shingle-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "Modern flat roofing systems for Jupiter's commercial buildings and contemporary residential designs.",
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Roof Repair & Restoration',
      description: "Extending the life of Jupiter roofs with expert repairs and required 5-year certification letters.",
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Commercial Roofing',
      description: "Retail centers, office buildings, and commercial properties throughout Jupiter and Abacoa.",
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Coastal Salt Air',
      description: "Jupiter's proximity to the Atlantic Ocean and Intracoastal Waterway means salt air corrosion on roofing materials, fasteners, and metal components. We use corrosion-resistant materials and proper installation techniques for coastal properties."
    },
    {
      title: 'Hurricane Exposure',
      description: "Northern Palm Beach County faces direct hurricane threats from June through November. We install roofing systems engineered for high winds and flying debris — because code minimums aren't good enough when the storm hits."
    },
    {
      title: 'Intense UV & Heat',
      description: "Florida's year-round sun degrades roofing materials faster than any other state. We install UV-resistant products rated for extreme exposure to maximize your roof's lifespan and protect your investment."
    },
    {
      title: 'HOA & Town Standards',
      description: "Many Jupiter communities have HOA requirements for roofing materials, colors, and appearance. We're familiar with local requirements and can help navigate approval processes."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we discover structural damage or rotted decking, we fix it properly — no waiting for another contractor."
    },
    {
      title: 'Northern Palm Beach Experience',
      description: "We've completed hundreds of projects throughout Jupiter and northern Palm Beach County. We understand local building codes, weather patterns, and what roofing systems perform best in this area."
    },
    {
      title: 'Complete Documentation',
      description: "Every job includes detailed photo documentation, permit compliance, wind mitigation forms, and manufacturer certifications. Your insurance company gets what they need. Your HOA gets what they require."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida insurance law to maintain coverage and avoid policy non-renewal issues."
    }
  ];

  const nearbyCities = [
    { name: 'Palm Beach Gardens', path: '/locations/palm-beach-gardens' },
    { name: 'Juno Beach', path: '/locations/juno-beach' },
    { name: 'Tequesta', path: '/locations/tequesta' },
    { name: 'North Palm Beach', path: '/locations/north-palm-beach' },
    { name: 'West Palm Beach', path: '/locations/west-palm-beach' },
    { name: 'Jupiter Inlet Colony', path: '/locations/jupiter-inlet-colony' }
  ];

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Jupiter?',
      answer: 'Roof replacement costs in Jupiter typically range from $12,000 to $55,000+ depending on size, material, and complexity. Tile roofs cost more upfront but last 50+ years. Shingle roofs are more budget-friendly with 20-30 year lifespans. We provide free inspections and detailed written estimates.'
    },
    {
      question: 'What roofing material is best for Jupiter homes?',
      answer: 'Tile roofing is the most popular choice in Jupiter — it handles Florida\'s climate well, looks great with Jupiter\'s architectural styles, and lasts 50+ years. For coastal properties, we recommend corrosion-resistant fasteners. Metal roofing is growing in popularity for energy efficiency. Architectural shingles work well for budget-conscious homeowners. We\'ll recommend the best option during your free inspection.'
    },
    {
      question: 'Do you pull permits for roofing work in Jupiter?',
      answer: 'Yes, always. Jupiter requires permits for roof replacements, and we handle all permit applications, inspection scheduling, and compliance documentation. You\'ll receive complete records for your files.'
    },
    {
      question: 'How long does a roof replacement take in Jupiter?',
      answer: 'Most Jupiter residential roof replacements take 2-5 days depending on size and material. Tile roofs take longer than shingle roofs. Larger homes or complex designs may require additional time. We provide a detailed timeline before starting work and keep you informed throughout the project.'
    },
    {
      question: 'Do you work with insurance companies for storm damage?',
      answer: 'We provide complete documentation for insurance claims including pre-repair photos, detailed damage assessments, scope of work, and post-repair documentation. This gives you everything needed to file your claim successfully.'
    },
    {
      question: 'Can you help with HOA approval in Jupiter communities?',
      answer: 'Yes. We can provide material specifications, color samples, manufacturer documentation, and installation details for your HOA submission. Many Jupiter HOAs have approved materials lists — we\'re familiar with requirements in most communities.'
    }
  ];

  const testimonials = [
    {
      name: 'Betty Fronizer',
      location: 'Jupiter, FL',
      rating: 5,
      text: 'Recently I had a roof put on my house by All Phase USA. I cannot say enough good about this company. Matt and Dillon brought in all the materials and showed me by computer how it was going to be installed. I got a call every week from Carissa letting me know where we were in the process. The crew covered all my plants and cleaned everything up at the end of the day. If you need a new roof call All Phase USA.'
    },
    {
      name: 'Anthony Colarusso',
      location: 'Palm Beach County, FL',
      rating: 5,
      text: 'Just had my roof completed by All Phase. From start to finish they did everything they said they would. Once I signed with them they were way more communicative than I expected. Matt in production kept me in the loop from start to finish and Charly was there to walk me through the tear off and answered all the questions I had. Highly recommend.'
    },
    {
      name: 'Douglas Dolphy',
      location: 'Jupiter, FL',
      rating: 5,
      text: 'Awesome team work. Discussion held with us as to expectations from start to finish. Very professional and addressed promptly any concerns we had. Great attention paid to safety of our property and their own workers. Thanks Dylan and Graham, team leader Israel, for keeping things together. Great assets to All Phase Construction Company.'
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
            <span className="text-white">Jupiter</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Jupiter, Florida
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Professional roofing services for Jupiter homes — from beachfront properties to Abacoa to inland neighborhoods.
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
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection in Jupiter
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
              Your Trusted Roofer in Jupiter
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Jupiter and nearby communities. For over 20 years, All Phase Construction has been serving Jupiter homeowners and businesses with professional roofing services. Jupiter is one of northern Palm Beach County's largest communities — home to approximately 65,000 residents, beautiful beaches, the iconic Jupiter Lighthouse, and diverse neighborhoods ranging from beachfront estates to family-friendly communities like Abacoa.
              </p>
              <p>
                Jupiter presents unique roofing challenges. Coastal properties face salt air corrosion and direct ocean exposure. Inland neighborhoods deal with intense UV exposure and hurricane-force wind threats. Whether you own a home near Jupiter Beach, in Abacoa's master-planned community, or in western Jupiter's growing neighborhoods, your roof faces conditions that demand expertise and proper installation.
              </p>
              <p>
                Before making major roofing decisions, schedule a <Link to="/tile-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">professional tile roof inspection</Link> to assess condition and remaining life, a <Link to="/metal-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">metal roof inspection services</Link> to evaluate energy-efficient systems, or a <Link to="/flat-roof-inspection-palm-beach-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection</Link> for commercial buildings to detect membrane deterioration early.
              </p>
              <p className="text-gray-300 mb-4">
                We serve Jupiter's most prestigious communities — from the waterfront estates of Admiral's Cove and The Bear's Club to the custom homes of Ranch Colony, Jonathan's Landing, Loxahatchee Club, Ritz Carlton Residences, Jupiter Inlet Colony, and Seminole Landing. Whether your property sits on the Intracoastal or on a multi-acre lot in Jupiter Farms, we bring the same precision and professionalism to every project.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Florida Code Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Code Requirements in Jupiter
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                Jupiter is located in Palm Beach County, which has strict building codes designed for hurricane resistance (though not as stringent as Broward's HVHZ). Your roof must meet Florida Building Code requirements including:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Wind Load Engineering</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Roofing systems must be engineered for local wind speeds based on your property's specific location and roof geometry. We calculate and install accordingly.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Code-Compliant Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Nail patterns, underlayment requirements, flashing details, and fastener specifications all must meet Florida code. We never cut corners on installation.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Permits & Inspections</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Jupiter requires permits and inspections for roof replacements. We handle all applications and ensure your project passes inspection the first time.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Palm Beach County codes are strict for good reason. Jupiter needs roofers who understand Florida's unique requirements and install roofs that can handle hurricane season."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Jupiter
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Complete residential and commercial roofing — from repairs to full replacements.
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
                What Jupiter Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                South Florida roofing challenges require specialized knowledge:
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
              Why Jupiter Homeowners Choose All Phase Construction
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
                Jupiter Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Jupiter zip codes including: 33458, 33468, 33469, 33477, 33478, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Jupiter, we provide roofing services throughout Palm Beach and Broward Counties:
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
            city="Jupiter"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Jupiter Homeowners
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

          {/* What Our Customers Say (Real Google Reviews) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm mb-3">{testimonial.location}</p>
                  <a
                    href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 text-sm hover:text-red-300 transition-colors"
                  >
                    See this review on Google
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a
                href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                See All Our Google Reviews &rarr;
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for a Free Roof Inspection in Jupiter?
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
              <div className="mt-8 text-center text-sm text-gray-400">
                <p className="font-semibold text-white">All Phase Construction USA</p>
                <p>590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
                <p>📞 <a href="tel:7542275605" className="text-red-400 hover:text-red-300">754-227-5605</a></p>
                <p>✉️ <a href="mailto:leads@allphaseusa.com" className="text-red-400 hover:text-red-300">leads@allphaseusa.com</a></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
