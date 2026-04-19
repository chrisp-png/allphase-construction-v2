/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Margate Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, DollarSign, AlertTriangle, Hammer, HardHat } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function MargateMoneyPage() {
  const cityName = 'Margate';
  const county = 'Broward County';
  const slug = 'margate';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = `Margate Roofing Contractor | Roof Replacement for 1970s Homes | All Phase`;
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
      reviewCount: '160'
    }
  });

  const faqs = [
    {
      question: 'How long does roof replacement take for a typical Margate ranch home?',
      answer: 'The on-site labor for most Margate ranch home roof replacements takes approximately 3 working days. However, the total project timeline from contract signing to final inspection is typically 4–8 weeks. This includes permit processing through the City of Margate (up to 30 days), material ordering (3–7 days depending on availability), the physical installation, and scheduling final building department inspections. Tile and metal roof systems may take slightly longer on-site than shingle installations due to material weight and installation complexity. We communicate proactively about timeline adjustments due to weather or scheduling.'
    },
    {
      question: 'Do you handle City of Margate permits and inspections?',
      answer: 'Absolutely. All Phase Construction USA manages the entire permit process including application submission, product approval documentation, structural calculations when required, and coordination of all building department inspections. Permit fees start at $225 for shingle roofs and $300 for tile installations under 3,000 square feet. We handle Notice of Commencement filings and ensure every detail meets code compliance. Regular inspections throughout the project catch any issues before they become problems.'
    },
    {
      question: 'Do you provide storm damage documentation for insurance purposes?',
      answer: 'Yes. We provide detailed inspection reports, photographic documentation, and remaining useful life certifications that document the condition of your roof. Under Florida law, roofs demonstrating at least 5 years of remaining useful life cannot be non-renewed solely due to age. After replacement, you receive complete documentation — permit approvals, final inspection sign-offs, product certifications, and a new Wind Mitigation report to submit to your insurance company for potential premium reductions. All documentation is yours to use however you need.'
    },
    {
      question: 'What roofing materials work best for Margate\'s 1970s homes?',
      answer: 'The best choice depends on your budget, aesthetic preferences, and long-term goals. TAMKO impact-resistant architectural shingles offer excellent value with 15–20 year lifespans and superior wind and hail protection — our most popular choice for Margate homeowners. Concrete tile roof systems last 40–50 years and match the original look of many Margate homes. Clay tile provides premium durability at 50–75 years. Metal roof installations deliver 40–70 years of protection with excellent wind resistance and energy efficiency. We discuss pros, cons, and costs for each material during your free inspection.'
    },
    {
      question: 'Do you serve areas outside Margate?',
      answer: 'Yes. While we specialize in Margate roofing, All Phase Construction USA serves Coral Springs, Coconut Creek, Pompano Beach, and communities throughout Broward and Palm Beach counties. Our expertise covers both residential and commercial properties requiring licensed roofers familiar with South Florida\'s climate demands and local building code requirements.'
    },
    {
      question: 'What financing options are available for Margate homeowners?',
      answer: 'We help Margate homeowners access multiple financing paths including the My Safe Florida Home Program (matching grants up to $10,000 for qualifying wind-mitigation and roof upgrades), PACE financing (no-money-down financing repaid through property taxes), and structured payment plans. Many homeowners with 45–50 year old homes qualify for assistance they didn\'t know existed. Visit our financing page or call (754) 227-5605 for details.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roof Replacement Margate, FL | All Phase USA</title>
        <meta
          name="description"
          content="Margate roofing contractor specializing in 1970s home roof replacement. TAMKO shingles, tile, metal roofing. Licensed & insured. Free inspections. (754) 227-5605."
        />
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
                  Roofing Contractor in Margate, FL
                </h1>
                <div data-marker="above-fold-proof" className="mt-4 mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold text-white">
                  <span className="text-yellow-400">★ 4.8 Google</span>
                  <span className="text-red-400">·</span>
                  <span>2,500+ Roofs</span>
                  <span className="text-red-400">·</span>
                  <span>Dual-Licensed Since 2005</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  Nearly 45% of Margate's housing stock was built between 1970 and 1979 — over 11,200 homes now hitting the 45–50 year mark simultaneously. Those single-family ranch homes in Coral Hills, Margate Estates, and along Margate Boulevard are entering their first or second major roof replacement cycle. Insurance companies are tightening coverage requirements, and your aging roof may be the only thing standing between you and a non-renewal notice.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  All Phase Construction USA was built for exactly this moment. We specialize in <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> for Margate's 1970s planned community — from <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">TAMKO shingle</Link> upgrades to <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link>, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link>, and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> systems. We handle City of Margate permits, coordinate inspections, and provide complete documentation — so you can focus on protecting your home, not chasing paperwork.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Margate
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
                  Why Margate Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">1970s Ranch Home Specialization</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Our team knows Margate's original construction inside and out — the typical framing, roof slopes, and structural considerations when upgrading from aging asphalt shingles to heavier tile or metal roof systems. We've worked extensively in Coral Hills and Margate Estates, understanding the specific challenges these ranch homes present.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">City of Margate Permit Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We handle all permit applications, product approvals, structural calculations, and Notice of Commencement filings with the City of Margate building department. Permit fees start at $225 for shingle roofs and $300 for tile installations under 3,000 sq ft — and we manage every detail so you don't have to.
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
                  South Florida demands superior craftsmanship. All Phase Construction USA uses NOA-approved roofing materials, proper fasteners, secondary water barriers, and wind straps that meet current Florida Building Code requirements. Every installation is built to withstand what hurricane season throws at it.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Complete Documentation Package</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  After installation, you receive everything you need: permit approvals, final inspection sign-offs, product certifications, installation photos, and a new Wind Mitigation report. This documentation supports insurance renewal, demonstrates code compliance, and protects your investment for future home sales.
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
                  Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the roof system and any structural repairs underneath — rotted decking, compromised trusses, fascia and soffit damage — all under one contract with one accountable team. Homes built in the 1970s weren't constructed to current standards, and we bring everything fully up to code.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Commercial Roofing for Sawgrass Corridor</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  The Sawgrass Expressway corridor brings commercial roofing demand to our service area. All Phase Construction USA serves both residential and commercial properties with flat roof, TPO, built-up, and metal roofing systems — with the same attention to detail and code compliance that our residential customers expect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our Roof Replacement Process Works
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Getting your new roof doesn't require navigating a maze of bureaucracy. All Phase Construction USA has refined our process to deliver results without the typical stress.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">1</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Free Comprehensive Inspection</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our team conducts a thorough inspection of your 45–50 year old roofing system, documenting everything from underlayment condition to tile integrity to structural issues. For tile roofs, we specifically assess whether underlayment failure has occurred — a common problem after 15–20 years even when tiles appear intact. You receive detailed photographic documentation, condition reports, and remaining useful life assessments.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">2</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Permit Handling & Material Selection</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We submit all permit applications to the City of Margate, including product approvals, energy calculations, and structural engineering documentation when needed. Material selection focuses on your needs: TAMKO architectural shingles for value, concrete or clay tile for longevity, or metal roofing for maximum durability. We discuss trade-offs in cost, energy efficiency, and curb appeal so you make an informed decision.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">3</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Professional Installation & Final Inspection</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our licensed professionals install your new roof according to current code requirements, including proper ventilation, hurricane straps, and secondary water resistance layers. We coordinate final building department inspections and provide complete warranty documentation. You also receive a new Wind Mitigation report to submit to your insurance company for potential premium reductions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Materials for Margate's 1970s Homes
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              The best material depends on your budget, long-term goals, and aesthetic preferences. All Phase Construction USA uses only high-quality, HVHZ-certified materials proven to perform in South Florida's demanding climate.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Link to="/shingle-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">TAMKO Shingle Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our featured shingle line — TAMKO impact-resistant architectural shingles deliver excellent wind and hail protection with beautiful aesthetics at a cost-effective price point. With 15–20 year lifespans, HVHZ-rated 130+ mph wind warranties, and enhanced 6-nail fastening patterns, TAMKO shingles are the most popular choice for Margate homeowners upgrading aging roofing systems.
                </p>
              </Link>

              <Link to="/tile-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Concrete & Clay Tile Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Concrete tile systems last 40–50 years and match the original look of many Margate homes. Clay tile provides premium durability at 50–75 years. For homes with original tile where underlayment has failed, we replace the underlayment and reinstall sound tiles — saving you the cost of all-new materials when the tiles themselves are still viable.
                </p>
              </Link>

              <Link to="/metal-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Metal Roofing Systems</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Standing seam metal delivers 40–70 years of protection with the best wind resistance ratings available. Metal roofing also provides excellent energy efficiency — reflecting solar heat to lower cooling costs in South Florida's intense sun. A smart long-term investment for homeowners planning to stay in their Margate home for decades.
                </p>
              </Link>

              <Link to="/flat-roofing" className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Flat Roof Solutions</h3>
                <p className="text-zinc-400 leading-relaxed">
                  For Margate's commercial properties along the Sawgrass Expressway corridor and residential homes with flat or low-slope sections, we install TPO, modified bitumen, and built-up roofing systems designed for proper drainage and long-term waterproofing. Commercial-grade materials meet all code requirements for both residential and commercial applications.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Margate Roofing Service Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Emergency Roof Repair</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-4">$500+</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>24-hour emergency response for hurricane and storm damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Emergency tarping and temporary protection to prevent further damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Complete photographic documentation for your records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Coordination with building inspectors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#27272a] border-2 border-red-600 rounded-xl p-8 relative">
                <div className="absolute -top-3 right-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Complete Roof Replacement</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-4">$8,000–$18,000+</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Full replacement of 45–50 year old roofing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>All City of Margate permits, inspections, and code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Material options: TAMKO shingle, tile, or metal roof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>10–25 year warranty depending on material selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Wind Mitigation report for insurance premium reductions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Commercial Roofing</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-4">Custom Quote</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Flat roof, TPO, built-up, and metal roofing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Custom project management for minimal business disruption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Commercial-grade materials meeting all code requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Ongoing maintenance contracts and priority emergency service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes All Phase Different From Other Margate Roofers
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Most roofing contractors offer generic services across dozens of communities. All Phase Construction USA focuses on outcomes specific to Margate's 1970s planned community.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Neighborhood-Specific Knowledge</h3>
                  <p className="text-zinc-400">We've worked extensively in Coral Hills, Margate Estates, and neighborhoods along Margate Boulevard. We know the typical roof configurations, HOA aesthetic requirements, and specific challenges these ranch homes present — translating to faster project completion and fewer surprises.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Documentation Excellence</h3>
                  <p className="text-zinc-400">Other contractors hand you a receipt and wish you luck. All Phase Construction USA provides 4-Point inspection reports, wind mitigation documentation, and useful life certifications. Our thorough documentation has helped countless Margate homeowners maintain their coverage.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">TAMKO Shingle Specialists</h3>
                  <p className="text-zinc-400">We feature TAMKO's premium impact-resistant architectural shingle line for Margate homeowners seeking the best value in roof replacement. TAMKO shingles provide superior wind and hail protection with enhanced fastening patterns engineered specifically for South Florida's high-velocity hurricane zone.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Code Compliance Guarantee</h3>
                  <p className="text-zinc-400">Homes built in the 1970s weren't constructed to current standards. When we replace your roof, we bring it fully up to code — proper ventilation, secondary water barriers, hurricane straps — ensuring your investment meets all requirements for long-term protection and insurance acceptance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who Our Margate Roofing Services Are For
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Homeowners Facing Insurance Non-Renewals</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  If your insurer is requiring roof inspection or threatening non-renewal due to age, All Phase Construction USA provides the documentation and replacement services that resolve the situation. A new code-compliant roof resets the clock on your coverage.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Ranch Home Owners with Aging Roofs</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Whether you have original tile with failing underlayment or second-generation asphalt shingles past their useful life, we handle complete <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link> from inspection through final approval — including all structural repairs under our general contractor license.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Commercial Property Owners</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Businesses along the Sawgrass Expressway corridor trust All Phase Construction USA for <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> — flat roof systems, metal roofing, and ongoing maintenance with minimal business disruption.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Property Managers & HOA Boards</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Managing roofing needs across multiple properties requires a reliable contractor who understands local permitting, code requirements, and efficient scheduling. All Phase Construction USA provides consolidated project management and volume pricing for portfolio owners and community associations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What Margate Homeowners Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "Our 1975 ranch home in Coral Hills had been denied renewal by two insurance companies. All Phase Construction USA handled everything with the City of Margate permits and installed a new tile roof that passed inspection the first time. We're now fully insured again. Outstanding job from start to finish."
                </p>
                <p className="text-zinc-500 font-medium">— Margate homeowner, Coral Hills</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "After hurricane season damaged our second-generation shingles, we needed a complete roof replacement fast. Clear communication throughout, expert craftsmanship on the installation, and complete satisfaction with the final result. They did an amazing job coordinating the permits and inspections."
                </p>
                <p className="text-zinc-500 font-medium">— Margate homeowner, Margate Estates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="py-16 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Serving Margate and Surrounding Communities
            </h2>
            <p className="text-zinc-400 mb-8">
              All Phase Construction USA proudly serves Margate and nearby cities across Broward County. Service areas include Coral Hills, Margate Estates, neighborhoods along Margate Boulevard, and all of Margate, FL.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Coral Springs', slug: 'coral-springs' },
                { name: 'Coconut Creek', slug: 'coconut-creek' },
                { name: 'Pompano Beach', slug: 'pompano-beach' },
                { name: 'Tamarac', slug: 'tamarac' },
                { name: 'Lauderhill', slug: 'lauderhill' },
                { name: 'Sunrise', slug: 'sunrise' },
                { name: 'Deerfield Beach', slug: 'deerfield-beach' },
                { name: 'Plantation', slug: 'plantation' },
                { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="px-4 py-2 bg-[#27272a] border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-red-600 transition-all text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Frequently Asked Questions — Margate Roofing
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden"
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
        <section className="py-20 bg-gradient-to-b from-[#09090b] to-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Margate Roof Inspection Today
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-4">
              If you're facing insurance non-renewal or know your 1970s roof is approaching the end of its useful life, waiting only increases risk. Storm damage to a compromised roof leads to structural issues that dramatically increase costs.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              Our free inspections provide exactly what you need: honest assessment of your roof's condition, thorough documentation, and a clear path forward — whether that means targeted repairs or complete replacement. No pressure. No obligation.
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
        <MoneyPageEnhancements cityName="Margate" county="Broward" hvhz={true} />
        <Contact />
      </div>
    </>
  );
}
