/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Miramar Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Hammer, Building2, Layers } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function MiramarMoneyPage() {
  const cityName = 'Miramar';
  const county = 'Broward County';
  const slug = 'miramar';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/miramar');
    document.title = seoMeta.title;
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
      question: 'How much does a roof replacement cost in Miramar, FL?',
      answer: 'Roof replacement costs in Miramar typically range from $15,000 to $45,000+ for residential properties, depending on size, material, and roof complexity. Asphalt shingles run $12,000–$18,000, concrete or clay tile $22,000–$38,000, and standing seam metal $25,000–$45,000 for a standard 2,000 sq ft home. Many 1990s-era homes in Miramar have tile roofs that are now reaching end-of-life and may need full replacement including underlayment and deck repairs.'
    },
    {
      question: 'What roofing materials work best for Miramar homes?',
      answer: 'Tile roofing remains the most popular choice in Miramar due to the prevalence of Mediterranean and Spanish-style architecture throughout communities like Silver Shores and Monarch Lakes. However, many homeowners are transitioning from tile to metal roofing for improved hurricane performance, lower maintenance, and energy savings. All materials must meet HVHZ requirements — All Phase Construction USA helps you choose the right system for your property and budget.'
    },
    {
      question: 'How long does the Miramar permitting process take?',
      answer: 'The City of Miramar typically processes roofing permits within 30 days. All Phase Construction USA handles the entire permit application, engineering documentation, and inspection scheduling on your behalf. We maintain strong working relationships with the Miramar building department to ensure smooth processing.'
    },
    {
      question: 'Do you handle tile-to-metal roof conversions in Miramar?',
      answer: 'Yes, tile-to-metal conversions are one of our specialties. Many 1990s-era tile roofs in Miramar are aging out and homeowners are choosing to upgrade to standing seam metal for its superior wind resistance, energy efficiency, and 40–60+ year lifespan. We handle the full structural evaluation, engineering, permitting, and installation — our dual licensing (CGC-1526236 general contractor + CCC-1331464 roofing) means we can address any structural modifications needed for the conversion.'
    },
    {
      question: 'Does All Phase Construction USA serve all of Miramar?',
      answer: 'Yes. We serve all Miramar neighborhoods and zip codes including 33023, 33025, 33027, and 33029. From Silver Shores and Monarch Lakes to Sunset Lakes and Riviera Isles, our crews are familiar with the specific HOA requirements and architectural styles throughout the city. We also serve all surrounding Broward County communities.'
    },
    {
      question: 'Do you provide storm damage documentation?',
      answer: 'Yes. We provide thorough storm damage documentation including detailed photo reports, moisture mapping, and condition assessments. This documentation is yours to use however you need — whether for your own records, your insurer, or any other purpose. Our focus is on assessing the damage accurately and getting your roof repaired or replaced properly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Miramar Roofing Services | Tile, Metal &amp; Shingle | All Phase</title>
        <meta
          name="description"
          content="Licensed roofing services in Miramar, FL. Tile, metal & shingle roof replacement. Dual-licensed contractor, HVHZ-certified, 2,500+ projects. (754) 227-5605."
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
                  Roofing Contractor in Miramar, FL
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  All Phase Construction USA is Miramar's trusted roofing contractor, serving over 134,000 residents across one of Broward County's fastest-growing cities. From <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link> and <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link> to <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle</Link> and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> systems, we deliver HVHZ-compliant installations built for South Florida's toughest weather.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  With dual licensing as both a roofing contractor (CCC-1331464) and general contractor (CGC-1526236), All Phase Construction USA handles your entire project under one contract. When a <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> uncovers structural damage, rotted decking, or compromised trusses — we fix everything. No subcontractors, no extra contracts, no delays.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Miramar
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
                  Why Miramar Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Dual-Licensed Contractor</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) sets us apart from standard roofers. We handle both the roof system and any structural repairs underneath — fascia, soffit, trusses, and decking — all under one contract with one accountable team.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Tile-to-Metal Conversion Experts</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Many 1990s-era Miramar homes are ready for roof upgrades. We specialize in tile-to-metal transitions, handling the full structural evaluation, engineering, and installation. Metal roofing offers 40–60+ year lifespans, superior hurricane resistance, and significant energy savings over traditional tile.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">HVHZ-Certified Installations</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Miramar falls within Florida's High Velocity Hurricane Zone. Every roof we install meets or exceeds HVHZ requirements including 170+ mph wind uplift ratings, enhanced fastener patterns, secondary water barriers, and proper ridge vent and soffit ventilation systems designed to maintain performance under hurricane conditions.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">2,500+ Projects Completed</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  With over 2,500 roofing projects completed across South Florida, our team brings proven experience to every Miramar job. We know Miramar's neighborhoods, HOA requirements, and building department processes inside and out. Direct communication with licensed professionals from <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">inspection</Link> through final sign-off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How We Work — 3 Simple Steps
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-12">
              From first call to final inspection, our process is designed to be transparent and stress-free for Miramar homeowners.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Free Roof Inspection</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We perform a thorough <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspection</Link> of your Miramar property — checking the roof surface, underlayment condition, flashing, ventilation, soffits, and structural integrity. You receive a detailed report with photos and honest recommendations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Proposal & Permitting</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We provide a detailed written proposal with material options, pricing, and timeline. Once approved, we handle all City of Miramar permitting and engineering documentation. Typical permit processing takes approximately 30 days — we manage the entire process so you don't have to.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our in-house crews complete the work efficiently while maintaining quality. We coordinate with your HOA if needed, manage material delivery and debris removal, and schedule the City of Miramar final inspection. Your job isn't done until it passes inspection and you're 100% satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Materials for Miramar, FL Homes & Businesses
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Miramar's 1990s construction boom produced thousands of homes now reaching the 25–30 year mark where roof replacement becomes necessary. All Phase Construction USA offers the full range of <Link to="/roofing-services" className="text-red-500 hover:text-red-400 underline transition-colors">roofing services</Link> with materials suited to Miramar's architecture, climate, and HOA requirements.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Link to="/tile-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Tile Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  The dominant roofing material across Miramar communities like Silver Shores and Monarch Lakes. Concrete tile lasts 30–50 years and clay tile can exceed 75 years. We use engineered attachment systems that meet HVHZ uplift requirements and maintain proper ventilation through ridge vent integration.
                </p>
              </Link>

              <Link to="/metal-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Metal Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Increasingly popular among Miramar homeowners upgrading from aging tile. Standing seam metal offers 40–60+ year lifespans, exceptional wind resistance (160+ mph), energy efficiency with reflective coatings, and virtually zero maintenance. An excellent long-term investment for Miramar properties.
                </p>
              </Link>

              <Link to="/shingle-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Shingle Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  A cost-effective solution for Miramar homes. Class H architectural shingles rated for 130+ mph winds with enhanced 6-nail fastening patterns required in the HVHZ. Multiple style and color options available to complement any architectural style and satisfy HOA requirements.
                </p>
              </Link>

              <Link to="/flat-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Flat Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  TPO, PVC, and modified bitumen systems for <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial properties</Link> and modern residential designs along Miramar Parkway. Proper drainage design is critical for flat roofs in South Florida's heavy rainfall — we engineer slope and drainage into every installation.
                </p>
              </Link>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Not sure which material is right for your Miramar home? We offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline transition-colors">financing options</Link> and will walk you through the pros, cons, and costs of each system during your free consultation.
            </p>
          </div>
        </section>

        {/* Service Options / Cost Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Roofing Service Options in Miramar, FL (2026)
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-10">
              Whether you need a targeted repair or a complete roof replacement, we offer service tiers to match your needs and budget.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Essential Repair</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">$1,500 – $7,500</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Targeted <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repairs</Link> for leaks, damaged tiles, missing shingles, flashing failures, and storm damage. Includes thorough inspection, photo documentation, and warranty on all repair work.
                </p>
              </div>

              <div className="bg-[#27272a] border border-red-600/30 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Complete Replacement</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">$15,000 – $45,000+</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Full <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link> including tear-off, deck inspection and repair, new underlayment, HVHZ-compliant installation, all permits, and engineering. Manufacturer and workmanship warranties included.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">New Construction</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">Custom Quote</p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Commercial</Link> and residential new construction roofing. We work with builders and developers throughout Miramar, providing engineered roofing systems from design through final inspection.
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-center max-w-3xl mx-auto">
              Get a precise quote for your Miramar property. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-medium underline">free roof cost calculator</Link> or call <a href="tel:+17542275605" className="text-red-500 hover:text-red-400 font-medium">(754) 227-5605</a> for a personalized estimate.
            </p>
          </div>
        </section>

        {/* Miramar-Specific Challenges */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Miramar Roofing Unique
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Miramar's rapid growth in the 1990s and 2000s created a city with distinct roofing challenges that require local expertise:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">1990s Construction Boom Homes</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Thousands of Miramar homes were built during the 1990s construction boom and are now 25–30+ years old. These roofs — particularly concrete tile — are reaching end-of-life. Many need not just re-roofing but also updated underlayment, improved ventilation, and code upgrades to meet current HVHZ standards that didn't exist when they were originally built.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Diverse Community, Diverse Needs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Miramar is one of South Florida's most diverse communities with over 134,000 residents. All Phase Construction USA serves all neighborhoods with bilingual capability and culturally sensitive service. Whether you're in a gated community with strict HOA requirements or a single-family neighborhood, we adapt our approach to your specific needs.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Ventilation & Soffit Systems</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Proper roof ventilation is critical in Miramar's subtropical climate. Many older homes have inadequate soffit and ridge vent systems that trap heat and moisture, accelerating roof deterioration from the inside. Every All Phase roof replacement includes a ventilation assessment and upgrade recommendations to extend your new roof's lifespan and improve energy efficiency.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">HOA Navigation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Many Miramar communities — Silver Shores, Monarch Lakes, Sunset Lakes, and others — have strict HOA architectural review processes for roof replacements. We handle the HOA approval process, material selection within approved palettes, and all documentation required by your association. Our experience with Miramar HOAs means faster approvals and fewer delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              What Miramar Homeowners Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "All Phase Construction USA replaced our tile roof in Silver Shores and handled everything from the HOA approval to the final inspection. The crew was professional, the communication was excellent, and our new roof looks incredible. Highly recommend for anyone in Miramar."
                </p>
                <p className="text-zinc-500 font-semibold">— Maria S., Miramar, FL</p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "We converted our old tile roof to standing seam metal. All Phase Construction USA walked us through every option, managed the permit process, and finished on time. The new metal roof looks amazing and our energy bills dropped noticeably. Outstanding experience from start to finish."
                </p>
                <p className="text-zinc-500 font-semibold">— David & Carmen R., Miramar, FL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Miramar & Surrounding Areas */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Miramar & Surrounding Areas
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Based in <Link to="/locations/deerfield-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link>, All Phase Construction USA provides roofing services throughout {county} and Palm Beach County. Our local presence means fast response times and deep familiarity with Miramar's building codes, permitting processes, and neighborhood-specific requirements.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Miramar Zip Codes We Serve</h3>
              <p className="text-zinc-400">
                33023, 33025, 33027, 33029
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'Pembroke Pines', path: '/locations/pembroke-pines' },
                { name: 'Hollywood', path: '/locations/hollywood' },
                { name: 'Davie', path: '/locations/davie' },
                { name: 'Hallandale Beach', path: '/locations/hallandale-beach' },
                { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale' },
                { name: 'Coral Springs', path: '/locations/coral-springs' }
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
              Miramar Roofing Questions & Answers
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
                Ready for a Free Roof Inspection in Miramar?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Schedule your free inspection today. We'll assess your roof's condition, identify any issues, and give you honest recommendations — no pressure, no obligation.
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
