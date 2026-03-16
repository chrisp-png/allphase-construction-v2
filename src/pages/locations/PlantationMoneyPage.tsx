/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Plantation Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, TreePine, Droplets, ClipboardCheck, Zap } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function PlantationMoneyPage() {
  const cityName = 'Plantation';
  const county = 'Broward County';
  const slug = 'plantation';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = `Plantation FL Roofer | Shingle & Tile Roofing | All Phase`;
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
      question: 'How long does a typical roof replacement take in Plantation?',
      answer: 'The physical labor for most residential roof replacements in Plantation takes about 3 working days once the crew is on-site. However, the full project timeline is longer: Broward County permits can take up to 30 days, HOA architectural review approvals in communities like Hawk\'s Landing and Jacaranda Country Club can add additional weeks, and required inspections are scheduled between phases. From contract signing to final inspection sign-off, expect 4–8 weeks total depending on permitting speed and HOA requirements.'
    },
    {
      question: 'What roofing materials work best for Plantation homes?',
      answer: 'The best material depends on your home\'s style, location, and budget. Impact-resistant asphalt shingles are cost-effective and rated for 130+ mph winds. Metal roofing offers 40–70 year lifespans with superior hurricane performance and energy efficiency. Concrete and clay tile suit Plantation\'s Mediterranean-style homes with 50–75+ year durability. Properties near the western Everglades border need materials specifically rated for elevated humidity conditions. All materials must carry HVHZ certification for Broward County.'
    },
    {
      question: 'Do you handle HOA approvals for Plantation golf communities?',
      answer: 'Yes — we coordinate with HOA architectural review boards for Hawk\'s Landing, Jacaranda Country Club, Jacaranda Cay, and all Plantation gated communities. We prepare all documentation including product specifications, material samples, and color swatches, and ensure material selections meet community guidelines before work begins.'
    },
    {
      question: 'Does Plantation\'s proximity to the Everglades affect roofing?',
      answer: 'Significantly. Properties near Plantation\'s western edge face elevated ambient moisture levels that accelerate underlayment degradation and promote mold growth beneath roofing materials. All Phase Construction USA specifies materials and ventilation systems designed for Plantation\'s unique microclimate — including proper ridge vent and soffit ventilation — not just standard South Florida conditions.'
    },
    {
      question: 'Do you provide storm damage documentation?',
      answer: 'Yes. We provide thorough storm damage documentation including detailed photo reports, moisture mapping, and condition assessments. This documentation is yours to use however you need — whether for your own records, your insurer, or any other purpose. Our focus is on assessing the damage accurately and getting your roof repaired or replaced properly.'
    },
    {
      question: 'How often should Plantation roofs be inspected?',
      answer: 'We recommend annual inspections plus after any severe weather event. Plantation\'s "Tree City USA" designation means significant tree canopy — debris impact from branches and organic matter accumulation can cause hidden damage. Regular checks catch minor issues before they become costly problems, preventing water damage and extending your roof\'s lifespan.'
    },
    {
      question: 'What HVHZ requirements apply in Plantation?',
      answer: 'Every roofing installation in Plantation must meet Broward County\'s High Velocity Hurricane Zone standards — 175+ mph wind resistance, HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections. All Phase Construction USA handles all permitting and HVHZ compliance documentation as part of every project.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plantation FL Roofer | Shingle &amp; Tile Roofing | All Phase</title>
        <meta
          name="description"
          content="Experienced roofer in Plantation, FL. Shingle tear-offs, tile re-roofs & flat roof systems. HVHZ-compliant, dual-licensed contractor. (754) 227-5605."
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
                  Expert Roofer in Plantation, FL
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  Your Plantation home faces relentless South Florida weather — from intense summer thunderstorms to hurricane-season threats that test every roof in the region. All Phase Construction USA has served Plantation homeowners since 2006, learning exactly how the local climate affects roofing systems in this community. From <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle</Link> tear-offs to <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link> re-roofs, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal roofing</Link>, and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roof</Link> systems, we deliver dependable roofing solutions built for Plantation's unique challenges.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Plantation is a planned community designated "Tree City USA" — its signature oak-lined streets and mature tree canopy create debris impact conditions that make roof quality non-negotiable. As a dual-licensed contractor (CCC-1331464 roofing + CGC-1526236 general), All Phase Construction USA handles both the roof system and any structural repairs underneath. When a <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> reveals rotted decking, compromised trusses, or root-driven moisture intrusion, we fix everything under one contract.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Plantation
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
                  Why Plantation Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Dual-License Advantage</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Most Plantation roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems, they must stop and hire a separate general contractor. Our CGC license (CGC-1526236) authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Tree City USA Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Plantation's designation as "Tree City USA" means its signature oak-lined streets and mature tree canopy create debris impact conditions unique to this community. In Plantation Acres and estate communities where large mature trees border rooflines, we regularly find structural issues caused by debris impact and root-driven moisture intrusion during tear-off.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane-Resistant Installations</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Plantation is located in Broward County's High Velocity Hurricane Zone. Every roof we install is engineered for 175+ mph wind resistance with HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections. Our dual licensure enables us to engineer the complete roofing system — surface and structure — for full HVHZ compliance.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">HOA Coordination Experts</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We coordinate with HOA architectural review boards for Hawk's Landing, Jacaranda Country Club, Jacaranda Cay, and all Plantation gated communities. We prepare all documentation and ensure material selections meet community guidelines before work begins — eliminating approval delays.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Everglades Microclimate Knowledge</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Plantation's western boundary borders the Everglades — one of the most humidity-intensive environments in North America. Properties along the western edge face elevated ambient moisture that accelerates underlayment degradation and promotes mold growth. We specify materials and ventilation systems designed for this unique microclimate, not just standard South Florida conditions.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">24/7 Emergency Services</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Roofing emergencies don't wait for business hours. Our team responds to urgent needs day or night — securing your property with emergency tarping, performing comprehensive assessments, and coordinating permanent <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repairs</Link>. Free <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspections</Link> within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How Our Roofing Process Works
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-12">
              We've streamlined our process to make your Plantation roofing project straightforward and stress-free.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center border border-red-600/30">
                    <span className="text-xl font-bold text-red-500">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Free Comprehensive Roof Inspection</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Scheduled within 24–48 hours. We photograph every detail, document potential issues — sagging sections, damaged flashing, deteriorated underlayment, hidden water damage — and provide you with a complete picture of your roof's condition. No charge, no obligation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center border border-red-600/30">
                    <span className="text-xl font-bold text-red-500">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Detailed Written Estimate</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Clear breakdown of material options (<Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">asphalt shingles</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile</Link>), project timeline, and pricing. Detailed photo documentation for your records. Material selection guidance for Plantation's unique humidity and HOA requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center border border-red-600/30">
                    <span className="text-xl font-bold text-red-500">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      All Phase Construction USA handles all Broward County permitting, HVHZ compliance documentation, and HOA approvals. Complete tear-off, deck inspection, and your approval before any additional repairs proceed. Daily cleanup keeps your property tidy, and clear communication means you always know what's happening.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center border border-red-600/30">
                    <span className="text-xl font-bold text-red-500">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Final Inspection & Warranty</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      We walk through the completed job with you, deliver all warranty paperwork — both manufacturer and workmanship warranties — and provide wind mitigation certification that can save up to 40% on homeowners insurance premiums with a qualified system. Your complete satisfaction is guaranteed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Materials for Plantation, FL Homes
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Choosing the right roofing materials is essential for protecting your Plantation home. The local climate demands durable options engineered for high winds, intense UV, elevated humidity near the Everglades, and heavy debris from Plantation's mature tree canopy. All Phase Construction USA offers quality <Link to="/roofing-services" className="text-red-500 hover:text-red-400 underline transition-colors">roofing services</Link> with materials matched to your home's specific needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Link to="/shingle-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Asphalt Shingles</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Affordable, versatile, and easy to install. Impact-resistant architectural shingles rated for 130+ mph winds provide an 18–22 year lifespan — a significant upgrade from three-tab shingles on many older Plantation homes. Multiple style and color options to satisfy HOA requirements.
                </p>
              </Link>

              <Link to="/metal-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Metal Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Standing seam metal offers 40–70 year lifespans, exceptional wind resistance, and energy efficiency with reflective coatings that help keep homes cooler during South Florida's hottest months. An excellent long-term investment with potential insurance premium discounts for Plantation homeowners.
                </p>
              </Link>

              <Link to="/tile-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Tile Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Timeless beauty and exceptional resistance to high winds — an important consideration in our hurricane-prone region. Concrete tile lasts 30–50 years; clay tile can exceed 75 years. Popular in Plantation's luxury communities like Hawk's Landing and Jacaranda Country Club.
                </p>
              </Link>

              <Link to="/flat-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Flat Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  TPO, PVC, and modified bitumen systems for <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial properties</Link> along University Drive and Broward Boulevard, and modern residential designs. Precise installation with proper drainage engineering for South Florida's heavy rainfall.
                </p>
              </Link>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Energy efficient roofing materials are available for homeowners looking to reduce cooling costs in the South Florida heat. We offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline transition-colors">financing options</Link> that make quality work accessible — major roofing projects shouldn't strain your finances.
            </p>
          </div>
        </section>

        {/* Roofing Services */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Plantation Roofing Services & Options
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-10">
              Whether you need emergency repairs or a complete <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link>, we deliver dependable roofing solutions tailored to your situation.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Residential Roof Replacement</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Complete roof replacements using premium roofing materials — asphalt shingles, metal roofing, tile, and flat roofs. We match solutions to your home's architecture, roof pitch, HOA requirements, and budget.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Emergency Roof Repair</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  24-hour response for roofing emergencies. When storm damage or sudden leaks threaten your Plantation property, our team protects your home fast with emergency tarping and permanent <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repairs</Link>.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Commercial Roofing</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Serving Plantation businesses with professional <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> — flat, TPO, modified bitumen, and standing seam metal for retail centers, office buildings, and Westfield Broward area properties.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Roof Inspections</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Free comprehensive <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspections</Link> for your records, pre-purchase evaluations, routine maintenance, and post-storm documentation. Detailed photo reports with honest recommendations.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Storm Damage & Documentation</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Storm damage requires thorough documentation. We provide detailed photo reports, moisture mapping, and condition assessments that are yours to use however you need. Our focus is on accurate assessment and getting your roof properly repaired or replaced.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardCheck className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Permitting & HVHZ Compliance</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Full permit application, HVHZ documentation, Broward County code compliance verification, HOA coordination, and final approval — all handled by our team so you don't have to navigate the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving All Plantation Communities */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving All Plantation Communities
            </h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed mb-10">
              <p>
                All Phase Construction USA serves every Plantation neighborhood. <strong className="text-white">Hawk's Landing</strong> is a gated estate community where luxury tile roofing and HOA approval requirements are standard on every project. <strong className="text-white">Plantation Acres</strong> is Plantation's equestrian community — one-acre-plus lots, mature tree canopy, and aging housing stock entering replacement cycles.
              </p>
              <p>
                <strong className="text-white">Plantation Isles</strong> offers waterfront homes with direct humidity exposure. <strong className="text-white">Jacaranda Country Club</strong> and <strong className="text-white">Jacaranda Cay</strong> represent the golf community tier where HOA architectural guidelines govern material selection. <strong className="text-white">Plantation Park</strong> and <strong className="text-white">Midtown Plantation</strong> offer more accessible residential neighborhoods with 1970s–80s construction — homes where delaying replacement allows water intrusion to spread, rotting decking and compromising trusses.
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Plantation Zip Codes We Serve</h3>
              <p className="text-zinc-400 mb-6">
                33317, 33322, 33323, 33324, 33325, 33388
              </p>
              <h3 className="text-xl font-bold mb-4">Also Serving Nearby Communities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale' },
                  { name: 'Sunrise', path: '/locations/sunrise' },
                  { name: 'Davie', path: '/locations/davie' },
                  { name: 'Cooper City', path: '/locations/cooper-city' },
                  { name: 'Deerfield Beach', path: '/locations/deerfield-beach' },
                  { name: 'Weston', path: '/locations/weston' }
                ].map((city) => (
                  <Link
                    key={city.name}
                    to={city.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-red-500 text-center text-sm"
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
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              What Plantation Homeowners Are Saying
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "After the hurricane, we had water stains spreading across our ceiling. All Phase Construction USA came out the same day, handled the permits, and our complete roof replacement was done in three days. Outstanding work!"
                </p>
                <p className="text-zinc-500 font-semibold">— The Rodriguez Family, Plantation</p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "We got quotes from several roofers in the area. All Phase Construction USA's estimate was competitive, but their communication and professionalism put them in a different league. Our new roof looks incredible."
                </p>
                <p className="text-zinc-500 font-semibold">— Mark T., Plantation Homeowner</p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "From the free estimate to the final cleanup, everything was handled professionally. They even noticed minor repairs needed on our gutters and fixed them on the spot. That's the kind of reliable service you can't find everywhere."
                </p>
                <p className="text-zinc-500 font-semibold">— Sarah K., Plantation</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Frequently Asked Questions About Plantation Roofing
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden"
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
                    <div className="px-6 py-4 border-t border-zinc-700 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get Your Free Plantation Roof Inspection Today
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Don't wait for water stains or visible damage. Whether you're concerned about an aging roof or need emergency services after a storm, we're here to help. No pressure, no obligation — just honest answers about your roofing needs.
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
                  <span>Dual Licensed</span>
                </div>
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>HVHZ Certified</span>
                </div>
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Since 2006</span>
                </div>
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* License Footer */}
        <section className="py-8 bg-[#27272a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
              <div>
                <span className="text-white font-semibold">FL CCC License:</span> CCC-1331464
              </div>
              <div>
                <span className="text-white font-semibold">FL CGC License:</span> CGC-1526236
              </div>
              <div>
                <span className="text-white font-semibold">Headquarters:</span> 590 Goolsby Blvd, Deerfield Beach, FL 33442
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
