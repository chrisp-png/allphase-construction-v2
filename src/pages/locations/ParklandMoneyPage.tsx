/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Parkland Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, DollarSign, Lock, Palette } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function ParklandMoneyPage() {
  const cityName = 'Parkland';
  const county = 'Broward County';
  const slug = 'parkland';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/parkland');
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
      reviewCount: '140'
    }
  });

  const faqs = [
    {
      question: 'How long does HOA architectural review approval typically take in Parkland communities?',
      answer: 'Review timelines vary by community, but most architectural review boards in Heron Bay, Parkland Golf & Country Club, and similar communities meet monthly. With properly prepared documentation — which All Phase Construction USA handles completely — approvals typically take 2–4 weeks. Incomplete or non-conforming submissions often extend timelines by months, which is why we prepare everything before submission.'
    },
    {
      question: 'What roofing materials are most commonly approved in Heron Bay and other gated communities?',
      answer: 'Concrete and clay barrel tile in neutral, earth-tone colors are dominant and almost universally approved. Standing seam metal in muted finishes receives approval in most communities for appropriate architectural styles. TAMKO designer architectural shingles are approved in select neighborhoods for transitional styles. Bright colors, reflective metals, and non-traditional profiles typically require variance requests.'
    },
    {
      question: 'How do you coordinate access through guard gates during installation?',
      answer: 'We schedule all deliveries and crew access with community management before work begins. Material staging, dumpster placement, and daily access are coordinated to comply with community rules. Our team has established relationships with gate staff in most Parkland communities and strictly adheres to noise ordinances and quiet hours.'
    },
    {
      question: 'What permits are required through the City of Parkland building department?',
      answer: 'Roof replacements exceeding $1,500 in materials and labor require permits through the City of Parkland Building Department. All submissions undergo structural, zoning, and potentially fire marshal review. HOA architectural approval does not replace building permits — both are required. All Phase Construction USA handles the complete permitting process so you don\'t have to manage two separate approval tracks.'
    },
    {
      question: 'How do you handle the transition from original builder-grade concrete tile to premium systems?',
      answer: 'Many Parkland homes built in the early 2000s have failing underlayment despite tiles that still look acceptable from the street. We assess your roof\'s condition through inspection, document underlayment deterioration, and recommend either underlayment replacement with tile preservation (if tiles are still sound) or complete tile system replacement depending on condition and your long-term goals. Both approaches bring your roof back to full waterproof integrity.'
    },
    {
      question: 'What\'s the total timeline for a Parkland roof replacement?',
      answer: 'The on-site labor for most Parkland roof replacements takes approximately 3 working days. However, the total project timeline from initial consultation to final inspection is typically 6–10 weeks for Parkland properties. This accounts for HOA architectural review (2–4 weeks), permit processing through the City of Parkland building department, material ordering, the physical installation, and final building inspections. We coordinate HOA and permit submissions in parallel whenever possible to minimize total project time.'
    },
    {
      question: 'Do you provide documentation for insurance purposes?',
      answer: 'Yes. After installation, you receive complete project documentation including permit approvals, final inspection sign-offs, product certifications, manufacturer warranty registrations, and a new Wind Mitigation report. This documentation supports insurance renewal, demonstrates full code compliance, and is yours to use however you need — whether for your insurer, HOA records, or future property transactions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roof Replacement Parkland, FL | Luxury Tile & Slate | All Phase</title>
        <meta
          name="description"
          content="Parkland FL roofing contractor for Heron Bay, Parkland Golf & Country Club, Watercrest. Premium tile, metal & shingle roofing. HOA experts. (754) 227-5605."
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
                  Roofing Contractor in Parkland, FL
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  Replacing a roof in Heron Bay or Parkland Golf & Country Club involves far more than installation — it requires navigating architectural review boards, coordinating guard gate access, and delivering workmanship with materials that meet your community's exacting standards. Most Parkland homes were built between the 1990s and 2010s, and many original builder-grade concrete tile roofs are now approaching their first major replacement cycle. The tiles may look fine from the street, but the underlayment beneath has often failed after 20–25 years of South Florida heat, humidity, and storm exposure.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  All Phase Construction USA specializes in premium <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> for Parkland's gated communities — from <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">concrete and clay barrel tile</Link> to <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">standing seam metal</Link> and <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">designer shingle</Link> systems. We handle HOA submissions, gate coordination, City of Parkland permits, and every inspection — so you get a turnkey experience from consultation through final sign-off.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Parkland
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
                  Why Parkland Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">HOA Architectural Review Navigation</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We prepare and submit all required documentation — color samples, material profiles, specifications, and roof profiles — before any installation begins. Your architectural review board submission is handled, not handed off. Properly prepared documentation means first-review approval instead of months of revisions.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Gated Community Logistics</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Expert scheduling with guard gates, pre-arranged staging approvals, and strict adherence to community noise ordinances and quiet hours. We know how Heron Bay operates differently than Parkland Golf & Country Club — and we coordinate accordingly for every Parkland community.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Material Specialization</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Concrete and clay barrel tile, standing seam metal, and TAMKO designer architectural shingles — we work exclusively with high-quality materials that match Parkland's Mediterranean-inspired architecture and meet HOA aesthetic standards. No builder-grade shortcuts.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Reputation-Driven Service</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  In a tight-knit community where word-of-mouth drives contractor selection, our track record speaks for itself. Referrals within the Marjory Stoneman Douglas High School community and Parkland neighborhood networks remain our primary source of new business.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Underlayment Failure Specialists</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Many Parkland homes built in the early 2000s have builder-grade concrete tile with failing underlayment — the tiles look fine from the street, but waterproof integrity is compromised. We diagnose these hidden failures and transition homes to premium underlayment systems rated for Florida's demanding climate.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Dual-Licensed Contractor</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the roof system and any structural repairs underneath — rotted decking, compromised trusses, fascia and soffit work — all under one contract. One accountable team, no subcontractors, no gaps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our Parkland Roofing Process Works
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Getting a new roof in a gated community shouldn't require project management expertise. All Phase Construction USA handles every complexity — HOA approvals, gate coordination, permits, inspections — so you experience a streamlined path to a premium roof.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">1</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">HOA Compliance Assessment</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We begin by reviewing your community's architectural guidelines and CC&Rs. Our team prepares all required documentation for architectural review board submission — material specifications, color coordination samples, and roof profiles. We coordinate guard gate access schedules with community management and secure staging area approvals before any materials arrive. Every material selection is verified against your community's aesthetic standards.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">2</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Premium Material Installation</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Once approvals are secured, our team installs concrete tile, clay barrel tile, or standing seam metal roofing systems designed for Parkland homes ranging from 2,500 to 4,500+ square feet. We replace deteriorated builder-grade underlayment with premium synthetic or self-adhered (peel-and-stick) systems rated for Florida's climate. All fastening, flashing, and clip systems meet Florida Building Code requirements for hurricane resistance. We work strictly within community noise ordinances throughout installation.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">3</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Final Inspection & Warranty</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We coordinate all inspections through the City of Parkland building department — structural, zoning, and fire marshal review as required. You receive comprehensive manufacturer warranties backed by documented compliance with installation guidelines, plus a Wind Mitigation report for potential insurance premium reductions. Complete project documentation is provided for HOA records and future property transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment in Your Parkland Home
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Choose the roofing system that matches your home's architecture and your long-term protection goals. All pricing reflects typical Parkland homes — your property receives a detailed assessment and free estimate before any commitment.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 border-2 border-red-600 rounded-xl p-8 relative">
                <div className="absolute -top-3 right-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Premium Tile Replacement</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-2">$22,000–$35,000</p>
                <p className="text-sm text-zinc-500 mb-6">Typical 2,500–3,500 sq ft homes</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Concrete and clay barrel tile with premium underlayment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Hurricane-rated clips and flashing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Full tear-off with deck inspection and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>50–75 year tile lifespan, 25–30 year underlayment cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Complete HOA documentation and permit handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Standing Seam Metal</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-2">$28,000–$45,000</p>
                <p className="text-sm text-zinc-500 mb-6">3,000–4,500 sq ft applications</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Designer profiles with architectural appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Exceptional hurricane resistance and wind ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>High solar reflectivity for energy efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>40–70 year lifespan, eliminates underlayment concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Often qualifies for insurance premium discounts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">TAMKO Designer Shingles</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-2">$18,000–$28,000</p>
                <p className="text-sm text-zinc-500 mb-6">Standard Parkland home sizes</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>TAMKO premium impact-resistant architectural shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Multiple color and profile options for HOA compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>30–50 year warranty on premium products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Ideal for transitional architecture styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Best value entry point for complete replacement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes All Phase Different From Other Parkland Roofers
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Most roofing contractors focus on speed and volume. All Phase Construction USA focuses on outcomes for Parkland homeowners — where reputation drives referrals and quality workmanship defines every project.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Gated Community Specialists</h3>
                  <p className="text-zinc-400">Unlike general contractors who learn your community's requirements on your time and budget, we already understand the logistics of working in Parkland's exclusive neighborhoods. Guard gate coordination, staging limitations, HOA submission processes — we've navigated these hundreds of times.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">First-Review HOA Approvals</h3>
                  <p className="text-zinc-400">Architectural review boards in Heron Bay and Parkland Golf & Country Club have specific requirements. We handle material specifications, profile documentation, and color coordination so your submission is approved on first review — not bounced back for revisions that add months to your timeline.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Premium Materials Only</h3>
                  <p className="text-zinc-400">We specialize in roofing materials that belong on Parkland homes: concrete and clay barrel tile lasting 50–75 years, standing seam metal with superior hurricane resistance, and TAMKO designer architectural shingles for transitional styles. No builder-grade shortcuts — ever.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">10-Year Workmanship Guarantee</h3>
                  <p className="text-zinc-400">Separate from material warranties, our workmanship guarantee covers installation quality for a full decade. Proper licensure and insurance are always maintained to protect homeowners from liability and ensure full compliance with Florida standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Parkland Communities We Serve
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Heron Bay</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Concrete tile replacement and premium upgrades from original builder-grade materials. We understand Heron Bay's architectural review process and submit complete, conforming packages for first-review approval.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Parkland Golf & Country Club</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Metal roofing</Link> solutions and complete tile system replacements for homeowners seeking maximum durability with architectural elegance. HOA-compliant materials and colors for every home in the community.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Watercrest & Cypress Head</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  HOA-compliant <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacements</Link> with proper architectural review navigation. We handle every step from initial documentation through final inspection so you never have to manage the approval process yourself.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">The Estates at Parkland</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Designer homes with premium architectural requirements demanding the highest quality materials and expert workmanship. Standing seam metal, barrel tile, and custom roofing solutions for homes that demand excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What Parkland Homeowners Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "All Phase Construction USA handled everything with our Heron Bay HOA — submitted the materials documentation, got approval, coordinated with the gate, and installed a beautiful barrel tile roof. We didn't have to manage anything."
                </p>
                <p className="text-zinc-500 font-medium">— Heron Bay Homeowner</p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "Our original tile looked fine from the street, but they showed us the underlayment was completely deteriorated. The full replacement was handled professionally from permit to final inspection. Highly recommended to anyone in Parkland."
                </p>
                <p className="text-zinc-500 font-medium">— Parkland Golf & Country Club Resident</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-red-500 mb-2">100%</p>
                <p className="text-zinc-400 text-sm">HOA Approval Rate in Heron Bay</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-red-500 mb-2">2,500+</p>
                <p className="text-zinc-400 text-sm">Projects Completed</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-red-500 mb-2">10-Year</p>
                <p className="text-zinc-400 text-sm">Workmanship Guarantee</p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-red-500 mb-2">Dual</p>
                <p className="text-zinc-400 text-sm">Licensed (Roofing + GC)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="py-16 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Serving Parkland and Surrounding Communities
            </h2>
            <p className="text-zinc-400 mb-8">
              All Phase Construction USA proudly serves Parkland and nearby cities across Broward County. We cover Heron Bay, Parkland Golf & Country Club, Watercrest, Cypress Head, The Estates at Parkland, and every community throughout Parkland, FL.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Coral Springs', slug: 'coral-springs' },
                { name: 'Coconut Creek', slug: 'coconut-creek' },
                { name: 'Margate', slug: 'margate' },
                { name: 'Deerfield Beach', slug: 'deerfield-beach' },
                { name: 'Boca Raton', slug: 'boca-raton' },
                { name: 'Tamarac', slug: 'tamarac' },
                { name: 'Pompano Beach', slug: 'pompano-beach' },
                { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-red-600 transition-all text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Frequently Asked Questions — Parkland Roofing
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/80 transition-colors"
                  >
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-[#27272a] to-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Premium Roofing Consultation
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-4">
              Choosing the right roofing contractor for your Parkland home matters. In a community where reputation drives referrals and quality workmanship defines outcomes, selecting a contractor with proven experience in your specific neighborhood eliminates risk.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              We offer comprehensive HOA compliance assessments, material selection consultations, and detailed project planning — all before any commitment. Our free inspection identifies your roof's current condition, underlayment status, and recommended solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-red-700 transition-all"
              >
                <FileCheck className="w-6 h-6" />
                Get Your Free Inspection
              </Link>
              <a
                href="tel:754-227-5605"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-zinc-700 transition-all border border-zinc-700"
              >
                <Phone className="w-6 h-6" />
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />
      </div>
    </>
  );
}
