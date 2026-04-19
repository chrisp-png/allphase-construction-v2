/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Pembroke Pines Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, ClipboardCheck, Zap, AlertTriangle } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function PembrokePinesMoneyPage() {
  const cityName = 'Pembroke Pines';
  const county = 'Broward County';
  const slug = 'pembroke-pines';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = `Pembroke Pines FL Roofing Company | Re-Roofs & Shingle Upgrades | All Phase`;
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
      question: 'How long does a typical roof replacement take in Pembroke Pines?',
      answer: 'The physical labor for most single-family home roof replacements takes about 3 working days once the crew is on-site. Townhomes may take 1–3 working days per unit depending on configuration. However, the full project timeline is longer: Broward County permits can take up to 30 days, HOA architectural review approvals can add additional weeks depending on your community\'s ARC meeting schedule, and required inspections are scheduled between phases. From contract signing to final inspection sign-off, expect 4–8 weeks total.'
    },
    {
      question: 'Do you handle HOA approvals and permits in Pembroke Pines?',
      answer: 'Yes. All Phase Construction USA manages the entire permit and HOA approval process. This includes preparing documentation with product specifications, material samples, and color swatches required by your architectural review committee. We have extensive experience with major Pembroke Pines HOA communities and understand their specific requirements.'
    },
    {
      question: 'What roofing materials work best for Pembroke Pines homes?',
      answer: 'For hurricane resistance and durability, we recommend impact-resistant architectural shingles (18–22 year lifespan, cost-effective upgrade from basic three-tab), metal roofing (40–70 year lifespan, superior wind resistance, excellent energy efficiency), concrete or clay tiles (50–75+ year lifespan, excellent durability), and flat roof membranes like TPO or modified bitumen for commercial or multi-unit properties. All materials carry Florida Product Approval or Miami-Dade NOA certification required for Broward County\'s HVHZ zone.'
    },
    {
      question: 'Do you offer financing for roof upgrades?',
      answer: 'Yes. We offer flexible financing options to qualified homeowners, making premium materials accessible without large upfront payments. Visit our financing page or call (754) 227-5605 for details.'
    },
    {
      question: 'How much does a roof replacement cost in Pembroke Pines?',
      answer: 'For standard single-family homes (1,500–2,200 sq ft), asphalt shingle roof replacement typically ranges from $8,000–$12,000. Premium upgrades to metal roofing, clay tiles, or impact-resistant materials run $16,000–$27,000+ depending on material and home size. HOA community projects receive volume pricing with significant per-unit savings. Contact us for a free estimate specific to your property.'
    },
    {
      question: 'Do you provide storm damage documentation?',
      answer: 'Yes. We provide thorough storm damage documentation including detailed photo reports, moisture mapping, and condition assessments. This documentation is yours to use however you need — whether for your own records, your insurer, or any other purpose. Our focus is on assessing the damage accurately and getting your roof repaired or replaced properly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roof Replacement Pembroke Pines, FL | All Phase USA</title>
        <meta
          name="description"
          content="Top roofing company in Pembroke Pines, FL. Shingle, tile & metal re-roofs for 1980s–2000s homes. HOA experts, HVHZ-certified, volume pricing. (754) 227-5605."
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
                  Roofing Company in Pembroke Pines, FL
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
                  Your roof protects everything you own. In Pembroke Pines, where homes built between 1980 and 2000 dominate the housing stock, thousands of homeowners face the same decision: replace an aging roof before it fails or deal with costly emergency repairs after the next storm. All Phase Construction USA specializes in volume roofing projects across Pembroke Pines developments — from <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle</Link> re-roofs to <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link> and <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link> upgrades.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  With approximately 66,800 housing units — nearly half detached single-family homes and another 14% townhomes — the scale of roofing needs in Pembroke Pines exceeds most Florida cities. The median construction year is 1992, meaning the typical home is now 34 years old. Original asphalt shingle roofs have long exceeded their 15–18 year lifespan. Whether you own a single-family home or manage a townhome association coordinating multiple <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacements</Link>, All Phase Construction USA delivers efficient, transparent <Link to="/roofing-services" className="text-red-600 hover:text-red-500 underline transition-colors">roofing services</Link> designed for this market.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Pembroke Pines
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
                  Why Pembroke Pines Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Volume Experience</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We've completed thousands of re-roofs across Pembroke Pines suburban developments, giving us unmatched familiarity with common roof configurations, HOA specifications, and neighborhood-specific requirements. Our volume experience means faster timelines and competitive pricing.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">HOA Compliance Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Many Pembroke Pines communities require architectural committee approval, specific material choices, and color matching. All Phase Construction USA handles documentation, sample submissions, and approval coordination so you avoid delays and stay compliant with your association's requirements.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Shingle-to-Upgrade Pathways</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Moving from basic asphalt shingles to <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">clay tiles</Link>, or impact-resistant materials doesn't need to be complicated. We provide clear comparisons of durability, energy efficiency, and long-term protection to help you make an informed decision.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Storm-Ready Installation</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Every installation meets Florida Building Code HVHZ (High-Velocity Hurricane Zone) standards, including mandatory testing for wind resistance and water intrusion. Your new roof is built to handle high winds and heavy rainfall. Our emergency response team is available 24/7 during storm season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How Our Roofing Process Works
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-12">
              Getting a reliable roof doesn't require complexity. Our process is designed to minimize disruption while maximizing quality workmanship for Pembroke Pines homeowners.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Property Assessment</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every project begins with a <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">free roof inspection</Link>. We evaluate your existing roof's condition, document storm damage, missing shingles, or hidden damage, and thoroughly assess the structure for underlying issues like rotted decking or mold growth. You receive a detailed report with photos, material recommendations, and transparent pricing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Streamlined Project Execution</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Once you approve the project, we handle HOA permit submissions, city permit applications, and neighbor notification protocols. Pembroke Pines falls under Broward County's strict HVHZ building codes — all materials must carry Florida Product Approval or Miami-Dade NOA certification. Daily cleanup and progress updates throughout installation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/30">
                  <span className="text-2xl font-bold text-red-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance & Warranty</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Before we consider any job complete, we conduct a final professional inspection ensuring all work meets manufacturer requirements and local code standards — including verification of proper fastening schedules, flashing installation, and ventilation. You receive comprehensive warranty documentation and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Roof Inspection Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Free Roof Inspection for Pembroke Pines Homeowners
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  A free <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspection</Link> is one of the smartest steps Pembroke Pines homeowners can take to protect their investment. With South Florida's unpredictable weather and the aging housing stock in the area, minor issues — like missing shingles or worn asphalt — can go unnoticed until they become major problems.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Our experienced team examines every aspect of your roof, from the integrity of roofing materials to the presence of mold growth or hidden leaks. We look for early signs of damage such as cracked or curling shingles, deteriorated flashing, and weak spots in the roof's structure. By catching these issues early, you can address minor repairs before they escalate — saving money and extending the life of your roof.
                </p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">What We Inspect</h3>
                <div className="space-y-4">
                  {[
                    'Roof surface condition with photos',
                    'Underlayment and flashing integrity',
                    'Decking and structural assessment',
                    'Ventilation and soffit systems',
                    'Storm damage documentation',
                    'HOA and permit requirements for your community',
                    'Material recommendations based on your budget'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Services for Every Roof Type in Pembroke Pines
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Every home in Pembroke Pines is unique, and so is its roof. Whether you have asphalt shingles, metal roofing, clay tiles, or a <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof</Link>, All Phase Construction USA provides specialized care for optimal performance and longevity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Link to="/shingle-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Asphalt Shingle Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  The most common roofing material in Pembroke Pines. We offer regular inspections to catch missing shingles, granule loss, and early wear. Impact-resistant architectural shingles provide an 18–22 year lifespan — a significant upgrade from basic three-tab shingles installed in most 1980s–2000s era homes.
                </p>
              </Link>

              <Link to="/metal-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Metal Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Metal roofing lasts 40–70 years versus 15–18 for asphalt — a compelling upgrade for Pembroke Pines homeowners tired of re-roofing every two decades. Superior wind resistance, sleek aesthetics, excellent energy efficiency, and potential insurance premium discounts make metal a smart long-term investment.
                </p>
              </Link>

              <Link to="/tile-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Clay & Concrete Tile</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Concrete and clay tiles can exceed 50–75+ years with proper maintenance. Excellent durability and a timeless look, though heavier and may require structural assessment. All Phase Construction USA provides careful repairs and replacements to preserve their beauty and structural integrity.
                </p>
              </Link>

              <Link to="/flat-roofing" className="bg-[#27272a] border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">Flat Roofs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  TPO, PVC, and modified bitumen systems for <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> and multi-unit properties in Pembroke Pines. Precise installation and ongoing maintenance to prevent pooling water and leaks, including routine drainage checks and timely repairs.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Services Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-2xl p-8 sm:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Emergency Roofing Services — 24/7
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    When severe weather strikes Pembroke Pines, your roof can suffer unexpected damage in minutes. All Phase Construction USA's emergency response team is available 24/7 to secure your home and prevent further damage — from emergency tarping to comprehensive assessments and permanent <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repairs</Link>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+17542275605"
                      className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Emergency Line: (754) 227-5605
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Roofing Service Packages for Pembroke Pines (2026)
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mb-10">
              Choose the package that matches your needs and budget. All packages include HVHZ-compliant installation, permits, and warranty documentation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Essential Replacement</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">$8,000 – $12,000</p>
                <p className="text-zinc-500 text-sm mb-4">1,500–2,200 sq ft homes • ~3 working days on-site</p>
                <ul className="space-y-2">
                  {[
                    'High-quality HVHZ-compliant shingles',
                    'Complete tear-off and disposal',
                    'Manufacturer + workmanship warranty',
                    'HOA compliance documentation',
                    'Final professional inspection'
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
                  <h3 className="text-xl font-bold">Premium Upgrade</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">$16,000 – $27,000+</p>
                <p className="text-zinc-500 text-sm mb-4">Metal, tile, or impact-resistant • 3–5 days</p>
                <ul className="space-y-2">
                  {[
                    'Premium materials (40–75 year lifespan)',
                    'Enhanced wind & impact warranties',
                    'Energy efficiency improvements',
                    'Insurance documentation for discounts',
                    'Financing options available'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">HOA Community</h3>
                </div>
                <p className="text-red-500 font-semibold text-2xl mb-2">Volume Pricing</p>
                <p className="text-zinc-500 text-sm mb-4">Multi-unit projects • Custom timeline</p>
                <ul className="space-y-2">
                  {[
                    'Significant per-unit volume savings',
                    'Coordinated scheduling',
                    'Comprehensive project management',
                    'Uniform material sourcing',
                    'Progress reporting for HOA boards'
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
              Get a precise quote for your Pembroke Pines property. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-medium underline">free roof cost calculator</Link> or call <a href="tel:+17542275605" className="text-red-500 hover:text-red-400 font-medium">(754) 227-5605</a> for a personalized estimate.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes All Phase Construction USA Different in Pembroke Pines
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              We focus on solving problems specific to Pembroke Pines homeowners — not just completing jobs.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Neighborhood Expertise</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Deep knowledge of Pembroke Pines development patterns means we understand which communities have tile requirements, which allow metal roofing, and which have strict color specifications. This expertise eliminates approval delays and prevents costly mistakes.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Volume Efficiency</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our experience with large-scale projects creates economies of scale. We pass these savings to customers through competitive pricing and faster timelines without sacrificing quality. HOA boards benefit from streamlined project management across multiple units.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Upgrade Specialization</h3>
                <p className="text-zinc-400 leading-relaxed">
                  If you're considering moving from asphalt shingles to a longer-lasting roofing system, we provide clear comparisons. Metal roofing lasts 40–70 years versus 15–18 for asphalt. Clay tiles can exceed 50 years. We help you weigh upfront costs against long-term protection and potential insurance savings.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Transparent Communication</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Real-time project updates, itemized pricing, and direct access to your project manager. You'll never wonder what's happening with your roof or your money. No surprise costs, no communication gaps — just professional roofers who know Pembroke Pines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Who We Serve in Pembroke Pines
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Single-Family Homeowners</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  If your original asphalt shingle roof from the 1980s–2000s shows granule loss, curling, or leaks, full replacement is typically more cost-effective than ongoing minor repairs. We specialize in the homes that make up Pembroke Pines' massive suburban housing stock.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Townhome Communities & HOAs</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Coordinated roofing projects with uniform materials, color matching, and volume pricing. We manage ARC approvals, scheduling, and compliance documentation for associations of any size.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Property Investors</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Upgrade rental properties with durable, attractive roofing that minimizes maintenance costs and appeals to quality tenants. We help you maximize ROI through strategic material choices that balance cost and longevity.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Homeowners Preparing for Sale</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  A new roof is a major factor in home value and buyer confidence. All Phase Construction USA helps you maximize return through strategic material choices and clean, documented installation that passes any buyer's inspection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              What Pembroke Pines Homeowners Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "After dealing with two other contractors who couldn't figure out our HOA requirements, All Phase Construction USA had approvals submitted within a week. The roof was done in three days, and it looks better than our neighbors' more expensive installations."
                </p>
                <p className="text-zinc-500 font-semibold">— Pembroke Pines Homeowner, Century Village</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "We coordinated 47 roof replacements across our townhome community. All Phase Construction USA's volume pricing saved our HOA significant money, and the scheduling meant minimal disruption for residents. Outstanding project management."
                </p>
                <p className="text-zinc-500 font-semibold">— HOA Board President, Pembroke Pines Community Association</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Pembroke Pines & Surrounding Areas */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Pembroke Pines & Surrounding Areas
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Based in <Link to="/locations/deerfield-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link>, All Phase Construction USA provides roofing services throughout {county} and Palm Beach County. Our local presence means fast response times and deep familiarity with Pembroke Pines building codes, permitting, and HOA requirements across every major development.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'Miramar', path: '/locations/miramar' },
                { name: 'Hollywood', path: '/locations/hollywood' },
                { name: 'Davie', path: '/locations/davie' },
                { name: 'Cooper City', path: '/locations/cooper-city' },
                { name: 'Weston', path: '/locations/weston' },
                { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale' }
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
              Pembroke Pines Roofing Questions & Answers
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

            {/* Repair vs Replace Decision Helper */}
            <div className="mt-12 bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Roof Repair vs. Replacement: Key Factors</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Age and overall condition of your current roof',
                  'Extent and type of damage present',
                  'Long-term costs versus immediate expenses',
                  'HOA requirements and local building codes',
                  'Potential upgrades for durability and energy efficiency'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get Started with Your Pembroke Pines Roofing Project
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                If your roof is showing its age — granule loss in gutters, water stains on ceilings, missing shingles after storms — waiting only increases repair costs. Schedule your free estimate today with no obligation.
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
                  <span>No Hidden Fees</span>
                </div>
                <span className="text-zinc-600">&bull;</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>No Pressure</span>
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
        <MoneyPageEnhancements cityName="Pembroke Pines" county="Broward" hvhz={true} />
        <Contact />
      </div>
    </>
  );
}
