/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Lauderhill Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, DollarSign, Globe, AlertTriangle } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function LauderhillMoneyPage() {
  const cityName = 'Lauderhill';
  const county = 'Broward County';
  const slug = 'lauderhill';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/lauderhill');
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
      question: 'Will my new roof meet insurance requirements?',
      answer: 'Yes. We use premium materials with proper impact resistance ratings, wind-mitigation features, and installation standards that meet Florida Building Code and HVHZ requirements. After installation, you receive complete documentation including permit approvals, final inspection sign-offs, product certifications, and installation photos — everything your insurer needs to verify compliance. Many homeowners see premium reductions after upgrading to impact-rated roofing materials with proper wind mitigation.'
    },
    {
      question: 'Do you offer financing for roof replacement?',
      answer: 'Absolutely. We help Lauderhill homeowners access multiple financing options including the My Safe Florida Home Program (matching grants up to $10,000 for qualifying wind-mitigation and roof upgrades), PACE financing (no-money-down financing repaid through property taxes), and structured payment plans that fit your budget. Many homeowners with 40–50 year old homes qualify for assistance they didn\'t know existed. Visit our financing page or call (754) 227-5605 for details.'
    },
    {
      question: 'How quickly can you start my roofing project?',
      answer: 'After your free estimate and contract signing, permit processing typically takes 3–10 business days through Lauderhill\'s Building Department. Material ordering adds another 3–7 days depending on availability. The physical labor for most residential roof replacements takes about 3 working days on-site. From contract signing to final inspection sign-off, expect 3–6 weeks total. For emergency roof repair — storm damage, active leaks — we offer same-day response with temporary tarping and mitigation.'
    },
    {
      question: 'Do you provide bilingual service?',
      answer: 'Yes. Our team includes fluent Spanish and Haitian Creole speakers who can explain every aspect of your roofing project, from material options to financing applications to project documentation. We believe clear communication is essential, especially for decisions as important as roof replacement.'
    },
    {
      question: 'What roofing materials work best for Lauderhill homes?',
      answer: 'For Lauderhill\'s 1970s–1980s housing stock, we recommend TAMKO impact-resistant architectural shingles for the best value and insurance compliance, standing seam metal roofing for maximum durability (40–70 year lifespan) and energy efficiency, tile roofs with modern underlayment for classic South Florida aesthetics, and flat roof membranes for proper drainage on low-slope designs. All materials carry HVHZ certification required for Broward County installations.'
    },
    {
      question: 'Which Lauderhill neighborhoods do you serve?',
      answer: 'All of Lauderhill — Inverrary, the neighborhoods near Lauderhill Mall, communities along Commercial Boulevard and Oakland Park Boulevard, and every neighborhood within city limits. We also serve condo and townhome associations with volume pricing for multi-unit projects.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lauderhill Roofing Contractor | Roof Replacement | All Phase</title>
        <meta
          name="description"
          content="Roofing contractor serving Lauderhill, FL. Affordable roof replacement, shingle & tile installs. HVHZ-compliant, licensed & insured. (754) 227-5605."
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
                  Roofing Contractor in Lauderhill, FL
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  Your insurance company just sent a non-renewal notice because your roof is over 15 years old. You're not alone — thousands of Lauderhill homeowners face this exact situation with their 1970s and 1980s-era homes. All Phase Construction USA helps you get a new roof that meets current code requirements, fits your budget, and protects your family for decades.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Most Lauderhill homes were built 40–50 years ago, and those original or second-generation roofs are now well past their expected lifespan in South Florida's climate. All Phase Construction USA specializes in <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> for aging housing stock — from <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">TAMKO shingle</Link> upgrades to <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link>, <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link>, and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> systems. With <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">financing options</Link>, bilingual teams, and volume pricing for condo communities like Inverrary, we make roof upgrades accessible to every Lauderhill homeowner.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Lauderhill
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
                  Why Lauderhill Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Code-Compliant Materials & Installations</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We use high-quality materials with proper wind-mitigation features, impact resistance ratings, and installation standards that meet current Florida Building Code and HVHZ requirements. Proper installations with wind-mitigation certification can potentially reduce your insurance premiums by 25–50%.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Bilingual Service for Our Community</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  With approximately 17% of Lauderhill residents of Haitian ancestry and nearly 23% of Jamaican descent, we employ Spanish and Haitian Creole speaking team members who communicate clearly about your roofing project, financing options, and project documentation. Clear communication means better outcomes.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Financing for Budget-Conscious Homeowners</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Through programs like My Safe Florida Home (grants up to $10,000) and PACE financing, we help you access <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement financing</Link> without massive upfront costs. Many homeowners with 40–50 year old homes qualify for assistance they didn't know existed.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Volume Pricing for Condo Communities</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Major developments like Inverrary and communities near Lauderhill Mall benefit from our volume pricing structure, reducing per-unit costs through scheduling efficiencies and bulk material purchasing. We work with HOA boards and property managers to coordinate multi-unit projects with minimal disruption.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Emergency Storm Damage Response</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  South Florida's hurricane season (June–November) demands rapid response. All Phase Construction USA provides same-day <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof tarping and leak mitigation</Link> to protect your home when storms hit. We document all roof conditions thoroughly with photos and detailed reports for your records.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Dual-Licensed Contractor</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the roof system and any structural repairs underneath — rotted decking, compromised trusses, fascia and soffit damage — all under one contract with one accountable team. No subcontractors, no gaps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Options */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Options for Lauderhill Homes
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              South Florida's intense sun, heavy rains, and hurricane threats mean your roofing system must be both resilient and reliable. All Phase Construction USA offers a range of <Link to="/roofing-services" className="text-red-500 hover:text-red-400 underline transition-colors">roofing services</Link> with materials proven to perform in Lauderhill's demanding climate.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Link to="/shingle-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">TAMKO Shingle Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our featured shingle line — TAMKO impact-resistant architectural shingles deliver excellent wind and hail protection with a beautiful wood grain finish at a cost-effective price point. Available in a wide range of colors and styles to match any Lauderhill home. Engineered for South Florida's climate with HVHZ-rated 130+ mph wind warranties and enhanced 6-nail fastening patterns.
                </p>
              </Link>

              <Link to="/metal-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Metal Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Increasingly popular in Lauderhill for its exceptional durability, energy efficiency, and ability to withstand severe weather. Standing seam metal offers 40–70 year lifespans with superior hurricane resistance — a compelling upgrade for homeowners tired of replacing shingles every 15–20 years. Reflective coatings reduce cooling costs significantly.
                </p>
              </Link>

              <Link to="/tile-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Tile Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Concrete and clay tile with modern underlayment systems for classic South Florida aesthetics. Concrete tile lasts 30–50 years; clay tile can exceed 75 years. Engineered attachment systems meet HVHZ uplift requirements. A timeless option with excellent wind resistance for Lauderhill's hurricane-prone location.
                </p>
              </Link>

              <Link to="/flat-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Flat Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  TPO, PVC, and modified bitumen systems for <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial properties</Link>, condo buildings, and residential flat sections. Specialized membranes and coatings ensure proper drainage and prevent leaks. When installed properly, these systems deliver years of trouble-free performance for Lauderhill properties.
                </p>
              </Link>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              No matter which material you choose, every All Phase installation includes proper wind-mitigation upgrades, HVHZ-compliant fastening schedules, and comprehensive documentation. We offer <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline transition-colors">flexible financing</Link> to make quality materials accessible to every budget.
            </p>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How Our Roofing Process Works
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-12">
              Getting results doesn't require complexity. Our process is straightforward and designed for Lauderhill homeowners.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Free Roof Inspection & Assessment</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our comprehensive <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspection</Link> evaluates your existing roof's condition, age, and code compliance status. We assess wind uplift ratings, fastening patterns, underlayment condition, and roof-to-wall connections. Within 48 hours, you receive a detailed report documenting your roof's condition, remaining lifespan, and specific improvements needed. This documentation is yours to use however you need.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Solution & Financing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Based on your inspection results, we design a roofing solution matched to your home and budget. Whether you need minor <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">repairs</Link>, partial replacement, or a complete <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link>, we walk you through material options, financing programs (My Safe Florida Home grants, PACE, payment plans), and project timeline. No pressure — just clear information.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Installation & Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We handle all permitting through Lauderhill's Building Department. After installation, you receive complete documentation: city permit approval, final inspection sign-off, product specifications, workmanship warranties, wind mitigation certification, and photos. This documentation package verifies your new roof meets every current code requirement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Roofing Service Packages for Lauderhill (2026)
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-10">
              Choose the package that matches your roofing needs and budget. All packages include HVHZ-compliant installation, permits, and warranty documentation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Essential Repair</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">Starting at $500+</p>
                <p className="text-zinc-500 text-sm mb-4">Targeted repairs for immediate issues</p>
                <ul className="space-y-2">
                  {[
                    'Comprehensive roof inspection',
                    'Targeted repair for damaged areas',
                    'Flashing repair and replacement',
                    'Detailed condition documentation',
                    'Routine maintenance recommendations'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#27272a] border border-red-600/30 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Complete Replacement</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">$8,000 – $18,000+</p>
                <p className="text-zinc-500 text-sm mb-4">Full re-roof with code-compliant materials</p>
                <ul className="space-y-2">
                  {[
                    'Full tear-off and disposal',
                    'TAMKO or premium material installation',
                    'Wind-mitigation upgrades included',
                    'All city permits and final inspection',
                    'Manufacturer + workmanship warranties',
                    'Complete documentation package'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-xs mt-4">
                  Financing available: My Safe Florida Home grants (up to $10,000) and PACE programs.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Multi-Unit / Commercial</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">Volume Pricing</p>
                <p className="text-zinc-500 text-sm mb-4">Condo associations & property managers</p>
                <ul className="space-y-2">
                  {[
                    'Bulk material purchasing savings',
                    'Coordinated scheduling',
                    'HOA communication & approval support',
                    'Standardized documentation per unit',
                    'Priority emergency storm response'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-zinc-400 text-center max-w-3xl mx-auto">
              Get a precise quote for your Lauderhill property. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-medium underline">free roof cost calculator</Link> or call <a href="tel:+17542275605" className="text-red-500 hover:text-red-400 font-medium">(754) 227-5605</a> for a personalized estimate.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes All Phase Construction USA Different in Lauderhill
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Most roofing companies offer generic solutions. We provide Lauderhill-specific expertise.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Specialization in Aging Housing Stock</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We've worked extensively with 1970s–1980s construction common throughout Lauderhill. We understand the specific challenges these homes present — from original roofing systems needing complete replacement to second-generation roofs approaching the end of their lifespan. Our experience means accurate assessments and appropriate solutions, not upsells.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Culturally Aware Service</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our team includes bilingual crew members who speak Spanish and Haitian Creole fluently. This isn't just about translation — it's about understanding the concerns of Lauderhill's Caribbean community and ensuring every homeowner fully understands their options, financing, and warranty coverage before making decisions.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Thorough Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every project includes comprehensive documentation — detailed condition reports, installation photos, permit approvals, product certifications, wind mitigation reports, and warranty paperwork. This documentation is yours to provide to your insurer, your lender, or anyone else who needs to verify your roof meets current standards.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">TAMKO Shingle Specialists</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We feature TAMKO's full line of impact-resistant architectural shingles — proven performers in South Florida's climate with excellent wind ratings, hail resistance, and aesthetic options. TAMKO shingles deliver premium protection at a price point that works for Lauderhill homeowners, backed by strong manufacturer warranties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Who Our Lauderhill Roofing Services Are For
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Homeowners with Aging Roofs</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  If your roof is 15+ years old and your insurer is pressuring you about its age or condition, we provide a clear path forward: thorough assessment, honest recommendations, financing assistance, and a code-compliant installation that meets every current requirement.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Condo & Townhome Communities</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Associations in Inverrary, near Lauderhill Mall, and throughout the city benefit from volume pricing on large-scale roof replacement projects. We work with HOA boards and property managers to coordinate scheduling and minimize disruption to residents.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Budget-Conscious Families</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  If a full roof replacement seems financially impossible, we connect you with grant programs like My Safe Florida Home and PACE financing that make necessary upgrades accessible. Many Lauderhill homeowners qualify for assistance they didn't know existed.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Property Managers & Investors</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Whether you manage rental properties or commercial developments, we provide consistent quality and complete documentation across all units. Strategic material choices that balance cost and longevity to maximize your ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              What Lauderhill Homeowners Say
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "After getting a non-renewal notice on my 20-year-old roof, I was panicking. All Phase Construction USA handled the city permit and finished installing a new roof in about a month. Everything was documented thoroughly, and my insurer was satisfied immediately. My premium actually dropped."
                </p>
                <p className="text-zinc-500 font-semibold">— Maria T., Inverrary Resident</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "We needed roof repair on our townhome, and All Phase Construction USA did a wonderful job at a very reasonable cost. The bilingual service made everything so much easier for my parents to understand. They even helped us look into the My Safe Florida Home grant. Highly recommend!"
                </p>
                <p className="text-zinc-500 font-semibold">— Jean-Pierre H., Lauderhill</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "Our condo association hired All Phase Construction USA for volume roof replacements across 24 units. Outstanding job from start to finish — no more leaks, premium materials throughout, and the per-unit pricing saved our association thousands compared to other quotes."
                </p>
                <p className="text-zinc-500 font-semibold">— Inverrary Townhome Association Board</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Lauderhill & Surrounding Areas */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Lauderhill & Surrounding Areas
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Based in <Link to="/locations/deerfield-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link>, All Phase Construction USA provides roofing services throughout {county} and Palm Beach County. We serve all Lauderhill neighborhoods — Inverrary, the communities near Lauderhill Mall, along Commercial Boulevard and Oakland Park Boulevard, and every neighborhood within city limits.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale' },
                { name: 'Sunrise', path: '/locations/sunrise' },
                { name: 'Plantation', path: '/locations/plantation' },
                { name: 'Tamarac', path: '/locations/tamarac' },
                { name: 'Coral Springs', path: '/locations/coral-springs' },
                { name: 'Margate', path: '/locations/margate' }
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
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Lauderhill Roofing Questions & Answers
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
                Get Your Free Lauderhill Roof Inspection Today
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                If you're ready to stop worrying about your aging roof and start protecting your home with a system that meets every current requirement, the next step is simple. We'll evaluate your roof, document its condition, and provide clear recommendations — no obligation, no pressure.
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
                  <span>Financing Available</span>
                </div>
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Bilingual Service</span>
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
