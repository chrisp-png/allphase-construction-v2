/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Hollywood Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Camera, Building2, Hammer, FileText, Star, Home, Wind, Users } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function HollywoodMoneyPage() {
  const cityName = 'Hollywood';
  const county = 'Broward County';
  const slug = 'hollywood';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = `Hollywood FL Roofing Contractor | Storm & Wind Damage | All Phase`;
  }, []);

  const coordinates = getCityCoordinates(cityName);

  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : `https://allphaseconstructionfl.com/locations/${slug}`;

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName,
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '150'
    }
  });

  const faqs = [
    {
      question: 'How much does a new roof cost in Hollywood, FL?',
      answer: 'Roof replacement costs in Hollywood typically range from $12,000 to $42,000+ for residential properties, depending on size, material, and location. Asphalt shingles run $12,000–$18,000, tile $22,000–$38,000, and standing seam metal $25,000–$42,000 for a 2,000 sq ft home. Beachfront properties near Hollywood Beach or the Intracoastal often require upgraded salt-air-resistant specifications that add to the cost.'
    },
    {
      question: 'Do beachfront homes in Hollywood need special roofing materials?',
      answer: 'Yes. Properties east of US-1 and especially along Hollywood Beach, the Broadwalk, and the Intracoastal require marine-grade fasteners, enhanced corrosion protection, and materials specifically rated for salt air exposure. Standard inland fasteners will corrode within a few years in coastal conditions. All Phase Construction USA selects the appropriate materials based on your distance from the ocean and exposure category.'
    },
    {
      question: 'Can you work on historic homes in downtown Hollywood?',
      answer: 'Yes. We regularly work in Hollywood\'s Historic District and the neighborhoods around Hollywood Boulevard. We understand the architectural review guidelines and can upgrade roofs to modern HVHZ standards while respecting the historic character of these properties. We handle all required approvals, permits, and documentation with the City of Hollywood building department.'
    },
    {
      question: 'What type of roof is best for Hollywood homes?',
      answer: 'It depends on your home\'s style, location, and budget. Tile roofs suit the Mediterranean and Spanish Revival architecture common throughout Hollywood. Architectural shingles work well for mid-century ranch homes and modern builds. Metal roofing is increasingly popular for its durability, energy efficiency, and hurricane performance. All materials must meet HVHZ requirements — we help you choose the right system for your property.'
    },
    {
      question: 'How long does a roof replacement take in Hollywood?',
      answer: 'Most residential roof replacements in Hollywood take 1–3 working days once the crew begins. The full process from contract to final inspection typically spans 2–4 weeks due to City of Hollywood permitting and engineering review. Dense neighborhoods near downtown or Hollywood Beach may require additional logistical planning for material staging and access.'
    },
    {
      question: 'Does All Phase handle commercial roofing in Hollywood?',
      answer: 'Yes. Our dual licensing (CGC-1526236 general contractor + CCC-1331464 roofing contractor) allows us to handle commercial buildings of any size. We work on retail properties along Hollywood Boulevard, office buildings near Young Circle, commercial properties along State Road 7, and industrial buildings throughout western Hollywood.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hollywood FL Roofing Contractor | Storm &amp; Wind Damage | All Phase</title>
        <meta
          name="description"
          content="Top-rated roofing contractor in Hollywood, FL. Hurricane-rated re-roofs, storm damage repair & coastal roofing. HVHZ-certified, 2,500+ jobs. (754) 227-5605."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <StickyConversionBar />

      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a] pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/locations/service-areas" className="hover:text-red-600 transition-colors">Service Areas</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{cityName}</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium mb-4 border border-zinc-700">
                <Clock className="w-4 h-4" />
                OPEN 24/7 / 365 DAYS
              </div>

              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600 flex-shrink-0" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Roofing Contractor in Hollywood, FL
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  All Phase Construction USA serves Hollywood with comprehensive residential and <Link to="/commercial-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">commercial roofing services</Link>. Licensed in both Broward and Palm Beach counties, we specialize in <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link>, <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle</Link>, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link>, and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> systems designed for South Florida's climate challenges.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  As a trusted roofing company in Hollywood, FL, All Phase Construction USA has built a strong local reputation across neighborhoods from Hollywood Beach to Emerald Hills. Our dual licensing gives us structural authority that standard roofing contractors cannot match — when a <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> reveals underlying structural damage, we fix everything under one contract.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Hollywood
                </Link>
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"
                >
                  <Phone className="w-6 h-6" />
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose All Phase */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose All Phase Construction USA in Hollywood
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Dual-County Licensing</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Licensed and insured in both Broward and Palm Beach counties (CCC-1331464, CGC-1526236), ensuring compliance with all local building codes and regulations. Our dual licensing means we handle both roofing and structural work — no subcontractors, no gaps in accountability.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane-Rated Installations</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  All roofing systems meet Florida's High Velocity Hurricane Zone requirements with proper wind uplift ratings and installation standards. Hollywood falls within the HVHZ, requiring 170+ mph wind-rated systems with enhanced fastener patterns and secondary water barriers.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Comprehensive Warranties</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We provide both manufacturer warranties on materials and workmanship warranties on our installation, giving you complete peace of mind. For qualifying roofs, we also provide 5-year certification letters under Florida Statute 627.7011 to protect your insurance coverage.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Direct Communication</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Work directly with licensed professionals throughout your project. No subcontractors, no middlemen. From your initial <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">free roof inspection</Link> through final inspection sign-off, you deal with our team directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Materials for Hollywood, FL Homes & Businesses
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              At All Phase Construction USA, we know that the foundation of every successful roofing project starts with the right roofing materials. Our experienced team of roofers provides top-quality <Link to="/roofing-services" className="text-red-500 hover:text-red-400 underline transition-colors">roofing services</Link> to homeowners and businesses throughout Hollywood, FL, {county}, and surrounding neighborhoods like Emerald Hills and Hollywood Beach.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              We offer a wide selection of roofing materials to meet the diverse needs and budgets of our clients:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Link to="/metal-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Metal Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  A popular choice in South Florida for their exceptional durability, energy efficiency, and ability to withstand high winds and heavy rain. Corrosion-resistant options are essential for Hollywood's coastal properties. 40–60+ year lifespan with proper maintenance.
                </p>
              </Link>

              <Link to="/tile-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Tile Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Timeless beauty and long-lasting protection, ideal for Hollywood's Mediterranean and Spanish Revival architecture. Concrete tile lasts 30–50 years; clay tile can exceed 75 years. Engineered attachment systems meet HVHZ uplift requirements.
                </p>
              </Link>

              <Link to="/shingle-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Shingle Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  A versatile and cost-effective solution offering a range of colors and styles to complement any house. Class H architectural shingles rated for 130+ mph winds with enhanced 6-nail fastening patterns required in the HVHZ.
                </p>
              </Link>

              <Link to="/flat-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Flat Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  For <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> and modern residential designs, TPO, PVC, and modified bitumen systems provide reliable performance. Common on Hollywood's commercial buildings along State Road 7 and Hollywood Boulevard.
                </p>
              </Link>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Our fully licensed and insured roofing contractor team ensures that every installation, repair, or <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link> is completed with top quality workmanship and attention to detail. We source our roofing materials from trusted suppliers, guaranteeing long-lasting results and protection for your property.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Understanding that roofing needs can arise unexpectedly, we offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline transition-colors">financing options</Link> to help make your roofing project affordable and stress-free. From annual inspections to final inspection sign-off, our commitment to reliable service means you can feel confident your roof is in expert hands.
            </p>
          </div>
        </section>

        {/* Roof Replacement Cost Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Roof Replacement Cost in Hollywood, FL (2026)
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-10">
              Estimates for a typical 2,000 sq ft Hollywood home. HVHZ-compliant materials, permits, and engineering included.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
              {[
                { material: 'Asphalt Shingles', range: '$12,000 – $18,000', note: 'Class H rated for 130+ mph winds' },
                { material: 'Concrete/Clay Tile', range: '$22,000 – $38,000', note: 'Engineered HVHZ attachment systems' },
                { material: 'Standing Seam Metal', range: '$25,000 – $42,000', note: 'Salt-air-resistant coatings available' },
                { material: 'Flat Roof (TPO/Mod Bit)', range: '$16,000 – $30,000', note: 'Commercial & low-slope residential' }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5">
                  <h3 className="font-bold text-white mb-1">{item.material}</h3>
                  <p className="text-red-500 font-semibold text-lg">{item.range}</p>
                  <p className="text-zinc-500 text-sm mt-1">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-zinc-400 text-center max-w-3xl mx-auto">
              Beachfront and Intracoastal properties may require upgraded specifications. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-medium underline">free roof cost calculator</Link> or call <a href="tel:+17542275605" className="text-red-500 hover:text-red-400 font-medium">(754) 227-5605</a> for a personalized estimate.
            </p>
          </div>
        </section>

        {/* Hollywood-Specific Challenges */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Hollywood Roofs Face
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Hollywood stretches from the Atlantic Ocean west past I-95, creating diverse roofing challenges across the city:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Coastal to Inland Variations</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Beachfront homes along the Broadwalk need marine-grade materials and salt-air-resistant fasteners, while inland properties in neighborhoods like Emerald Hills deal primarily with heat, UV exposure, and storm wind damage. We adjust our approach based on your property's location and exposure.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Historic District Requirements</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Downtown Hollywood and the Historic District around Hollywood Boulevard have architectural guidelines that must be respected during roof replacement. We work within these requirements while upgrading roofs to modern HVHZ standards and current Florida Building Code.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Diverse Building Ages</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Hollywood has everything from 1920s Mediterranean Revival homes to brand new developments. Many homes built before 2002 don't meet current HVHZ uplift requirements — even if the roof isn't leaking, it may need replacement to satisfy insurance requirements and protect against hurricanes.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Storm & Wind Damage</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Hollywood's coastal position makes it particularly vulnerable to hurricane and tropical storm damage. We provide emergency <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repair</Link> response, insurance claim documentation, and full storm damage restoration for Hollywood properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Hollywood & Surrounding Areas */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Hollywood & Surrounding Areas
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Based in <Link to="/locations/deerfield-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link>, we provide roofing services throughout South Florida. Our local presence means faster response times and familiarity with Hollywood's building department, permitting processes, and neighborhood-specific requirements.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Hollywood Zip Codes We Serve</h3>
              <p className="text-zinc-400">
                33019, 33020, 33021, 33023, 33024, 33025, 33026, 33027, 33028, 33029, 33083
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'Hallandale Beach', path: '/locations/hallandale-beach' },
                { name: 'Pembroke Pines', path: '/locations/pembroke-pines' },
                { name: 'Davie', path: '/locations/davie' },
                { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale' },
                { name: 'Miramar', path: '/locations/miramar' },
                { name: 'Dania Beach', path: '/locations/dania-beach' }
              ].map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-red-500 text-center text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/locations/service-areas"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Roofing Questions from Hollywood Property Owners
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
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
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready for a Free Roof Inspection in Hollywood?
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
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>No Obligation</span>
                </div>
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Same-Week Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />
      </div>
    </>
  );
}
