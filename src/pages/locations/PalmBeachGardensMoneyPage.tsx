/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Palm Beach Gardens Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, Crown, Landmark } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function PalmBeachGardensMoneyPage() {
  const cityName = 'Palm Beach Gardens';
  const county = 'Palm Beach County';
  const slug = 'palm-beach-gardens';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = `Palm Beach Gardens Roofing Contractor | Luxury Tile & Estate Roofing | All Phase`;
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
      question: 'How long do Palm Beach Gardens roof projects typically take?',
      answer: 'For a typical luxury home (3,500–5,500 square feet), expect 6–12 weeks from initial assessment through full roof replacement with ARC approval and permitting. Timeline depends significantly on your community\'s ARC meeting schedule — missing a deadline can add 3–4 weeks. Smaller repair work or underlayment replacements typically complete in 1–5 days depending on scope. We provide realistic timeline estimates during your free assessment based on your specific community\'s approval process.'
    },
    {
      question: 'Do you handle HOA and architectural review board approvals?',
      answer: 'Yes — this is a core part of our service. We prepare complete ARC submission packages including roof profile specifications, material details, color documentation, manufacturer approvals, and engineering documents when required. We\'ve worked with PGA POA, BallenIsles Master Association, Frenchman\'s Reserve, Mirasol, The Isles, Artistry, Alton, and other Palm Beach Gardens communities. Our first-submission approval rate exceeds 90% because we understand what each community requires before we submit.'
    },
    {
      question: 'What roofing materials work best for Palm Beach Gardens\' climate?',
      answer: 'Premium tile roofing — concrete or clay — is the standard in Palm Beach Gardens luxury communities and provides the best combination of hurricane resistance, longevity, and aesthetic value. Concrete tile typically lasts 50+ years; clay can reach 80–100 years with proper maintenance. Both handle South Florida\'s weather conditions: intense heat, heavy rain, high humidity, and hurricane season threats. Stone-coated steel is approved in some communities. We match material recommendations to your specific community\'s requirements and your home\'s structural capacity, since tile systems weigh 900–1,100 pounds per square.'
    },
    {
      question: 'How do you ensure compliance with Palm Beach County building codes?',
      answer: 'We engineer every installation to meet Palm Beach County\'s specific wind load requirements for your parcel. Using county GIS tools, we determine your exact basic wind speed requirement (often 130–140 mph in eastern PBG). We select tiles, fasteners, and attachment methods that meet or exceed these requirements under Florida Building Code and FRSA-TRI guidelines. All materials carry required Florida Product Approval. We schedule and pass all required county inspections, and we provide documentation to verify code compliance.'
    },
    {
      question: 'What\'s the difference between roof repair and full replacement?',
      answer: 'Minor repairs — fixing isolated tiles, flashing, or small damaged areas — typically cost $500–$2,500 and make sense when underlying systems are sound. Underlayment replacement (removing tiles, replacing deteriorated underlayment, resetting tiles) runs $12,000–$28,000 and is appropriate when tiles are intact but underlayment has failed. Full roof replacement (complete tear-off, new underlayment, new tiles) is necessary when tiles are damaged, deck requires repair, or you want to upgrade materials. During your roof inspection, we\'ll recommend the appropriate scope based on actual conditions — not upselling unnecessary work.'
    },
    {
      question: 'Does All Phase Construction USA serve all Palm Beach Gardens communities?',
      answer: 'Yes. We serve all Palm Beach Gardens communities including PGA National, BallenIsles, Frenchman\'s Reserve, Mirasol, The Isles, Artistry, Alton, and surrounding Palm Beach County areas. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we can handle both your roof system and any structural repairs discovered underneath.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roof Replacement Palm Beach Gardens, FL | Tile Estate | All Phase</title>
        <meta
          name="description"
          content="Premium roofing contractor in Palm Beach Gardens, FL. Luxury tile roof replacement for PGA National, BallenIsles, Frenchman's Reserve & more. HOA/ARC experts. (754) 227-5605."
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
                  Professional Palm Beach Gardens Roofing Contractor for Luxury Communities
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
                  All Phase Construction USA is the Palm Beach Gardens FL roofing contractor built for high-end communities like PGA National, BallenIsles, Frenchman's Reserve, and Mirasol. While most roofing companies treat every job the same, we specialize in premium <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile roofing</Link> systems for homes ranging from 3,000 to 6,000+ square feet, strict Palm Beach County building codes requiring 130–140 mph wind resistance, and the meticulous HOA compliance that country club communities demand.
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
                  Schedule Free Luxury Home Assessment
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
                  Why Palm Beach Gardens Homeowners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed mb-10 max-w-4xl">
              Instead of forcing you to educate your contractor about what your community requires, we bring specialized knowledge that eliminates guesswork and prevents costly damage to your timeline and budget. Our roofing services were built specifically for Palm Beach Gardens FL homeowners who need more than a general contractor with a ladder.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Country Club Community Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We've completed roofing projects in BallenIsles, PGA National, Frenchman's Reserve, The Isles, Artistry, and Alton. We know each community's ARC Design Review Guidelines and CC&Rs before we ever submit paperwork — achieving over 90% first-submission approval.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Tile Installation Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Barrel tile, flat tile, slate-profile concrete, and clay tile are the standard in PBG luxury homes. Our entire team specializes in these premium materials and the structural considerations they require — including proper weight distribution for tile systems weighing 900–1,100 lbs per square.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Large Home Experience</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Most residential <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacements</Link> we complete involve homes between 3,000 and 6,000+ square feet with complex geometries, multiple ridges, and demanding architectural features. We understand the structural weight requirements and proper fastening systems these projects demand.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane Resistance Built In</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Palm Beach County requires basic wind speeds of 130–140 mph in eastern communities. We engineer every roof replacement to exceed these requirements, selecting corrosion-resistant fasteners, proper underlayments, and attachment methods rated for hurricane-force winds.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Palm Beach County Code Mastery</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Using county GIS tools, we determine your exact wind speed requirement for your parcel. All materials carry required Florida Product Approval for your specific wind zone. We follow FRSA-TRI guidelines for fastening methods based on your home's wind speed zone, roof slope, height, and exposure.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Split Market Understanding</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Whether you own an established 1990s home in Frenchman's Reserve needing its first full roof replacement or a new construction estate in Artistry requiring a premium upgrade, we tailor our approach to your specific situation rather than offering one-size-fits-all solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Wrench className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How Our Palm Beach Gardens Roofing Process Works
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Getting a new roof on your Palm Beach Gardens home doesn't require complexity. Our process is designed for homeowners who value quality workmanship and exceptional service.
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-12">
              {/* Step 1 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
                  <h3 className="text-2xl font-bold">Comprehensive Property Assessment</h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    We begin with a free assessment that goes far beyond a quick visual <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspection</Link>. Our roofing experts evaluate your existing tile systems, underlayment condition, deck integrity, flashing, valleys, and structural capacity. For homes built in the 1980s–90s — many now facing their first replacement cycle — we specifically assess whether your original roof deck was engineered for modern tile weight and current wind uplift requirements.
                  </p>
                  <p>
                    This inspection identifies hidden issues like underlayment deterioration (common after 20–25 years of Florida's high humidity, heavy rain, and UV exposure), deck rot, or fastener corrosion from coastal salt air. You'll understand exactly what your roof needs before any work begins.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
                  <h3 className="text-2xl font-bold">HOA-Compliant Design &amp; Permitting</h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Navigating architectural review boards is where most roofing projects stall. All Phase Construction USA handles the entire ARC submission process, including roof profile documentation, material specifications, color matching, manufacturer approval verification, and engineering documents when required.
                  </p>
                  <p>
                    Our goal is first-submission approval — achieved on over 90% of our projects. We understand that HOA meetings often happen monthly; missing a deadline delays your project by weeks. Simultaneously, we manage Palm Beach County permits ($300–$800 for most single-family homes) and ensure every material carries required Florida Product Approval for your specific wind zone.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
                  <h3 className="text-2xl font-bold">Premium Installation &amp; Final Approval</h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Our licensed team installs your roofing system using expert craftsmanship that meets both community aesthetic standards and hurricane season demands. We follow Tile Roofing Industry Alliance (FRSA-TRI) guidelines for proper fastening methods based on your home's wind speed zone, roof slope, height, and exposure.
                  </p>
                  <p>
                    Quality control includes verification of underlayment installation, fastener spacing, hip and ridge detailing, and proper flashing at all penetrations. We complete final inspections with both the Palm Beach County building department and your community's ARC to ensure full compliance — protecting your investment and your coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storm-Ready Roofing */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Wind className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Storm-Ready Roofing for Palm Beach Gardens Homes
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Living in Palm Beach Gardens means facing some of the most demanding weather conditions in South Florida. All Phase Construction USA specializes in storm-ready roofing systems engineered to protect your home against everything the Florida climate can deliver — from intense heat and high humidity to heavy rain and hurricane-force winds.
                </p>
              </div>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Roofing Material</th>
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Lifespan</th>
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Weight (per square)</th>
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-zinc-900/30">
                    <td className="p-4 border border-zinc-700 font-semibold">Concrete Barrel Tile</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">50+ years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">900–1,100 lbs</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Country club communities, Mediterranean-style estates</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="p-4 border border-zinc-700 font-semibold">Clay Tile</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">80–100 years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">900–1,200 lbs</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Signature estates, waterfront properties, custom homes</td>
                  </tr>
                  <tr className="bg-zinc-900/30">
                    <td className="p-4 border border-zinc-700 font-semibold">Flat Concrete Tile</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">50+ years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">850–1,000 lbs</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Modern/contemporary architecture, clean-line aesthetics</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="p-4 border border-zinc-700 font-semibold">Standing Seam Metal</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">40–60+ years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">100–150 lbs</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Accent roofs, modern estates, coastal exposure</td>
                  </tr>
                  <tr className="bg-zinc-900/30">
                    <td className="p-4 border border-zinc-700 font-semibold">Stone-Coated Steel</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">40–50 years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">150–200 lbs</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Approved in select communities, lightweight alternative</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-zinc-400 mt-6 text-sm">
              All materials are selected based on your community's approved material list, structural capacity, and aesthetic requirements. We use only premium materials proven to withstand South Florida's harshest weather, ensuring every detail — from underlayment to final tile placement — delivers decades of hurricane-season protection.
            </p>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Star className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Proven Results for Palm Beach Gardens Luxury Homes
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic text-sm">
                  "After two contractors gave us quotes that would never pass our BallenIsles ARC, this team understood exactly what was required. They handled everything with the architectural review board, and our new barrel tile roof was approved on the first submission."
                </p>
                <p className="text-zinc-500 text-sm">— Michael R., BallenIsles Homeowner</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic text-sm">
                  "Our PGA National home needed a complete roof replacement after 28 years. The entire team made the process seamless — from the initial roof inspection through final county inspection. They knew the PGA POA requirements better than we did."
                </p>
                <p className="text-zinc-500 text-sm">— Sandra T., PGA National</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic text-sm">
                  "They completed our Frenchman's Reserve project in the timeline they promised. Professional from start to finish — handled the permitting, ARC approval, and the installation itself without us having to manage anything."
                </p>
                <p className="text-zinc-500 text-sm">— David & Karen L., Frenchman's Reserve</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">90%+</div>
                <p className="text-zinc-400 text-sm">ARC first-submission approval rate</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">0</div>
                <p className="text-zinc-400 text-sm">Code violations on Palm Beach County inspections</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">6–8 Wk</div>
                <p className="text-zinc-400 text-sm">Average project completion from assessment to final approval</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">140 mph</div>
                <p className="text-zinc-400 text-sm">Wind resistance warranty aligned with county code</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Palm Beach Gardens Roofing Investment Levels
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Choose the investment level that matches your home and goals. All levels include permit fees, ARC submission, removal of existing roofing, and post-installation inspections.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-500 mb-2">Essential Roof Replacement</h3>
                <p className="text-zinc-400 text-sm mb-4">For established 1980s–90s country club homes needing first-cycle replacement</p>
                <div className="text-3xl font-bold mb-6">$25k–$40k</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Standard concrete tile (profiles & colors matching community requirements)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Premium synthetic or rubberized underlayment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Full deck inspection with minor repairs as needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Complete permit & ARC submission management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Wind-rated fastening systems for your specific zone</span>
                  </li>
                </ul>
                <p className="text-zinc-500 text-sm">Ideal for PGA National, BallenIsles, and similar communities</p>
              </div>

              <div className="bg-zinc-900/50 border-2 border-red-600 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-red-500 mb-2">Premium Roof Systems</h3>
                <p className="text-zinc-400 text-sm mb-4">For luxury homes requiring high-end materials and features</p>
                <div className="text-3xl font-bold mb-6">$45k–$80k+</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Everything in Essential plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Premium tile options (clay, high-profile concrete, specialty profiles)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Full structural assessment & reinforcement if needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Complex architectural features (multiple ridges, hips, valleys)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Coastal exposure-rated corrosion-resistant materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Extended warranty coverage</span>
                  </li>
                </ul>
                <p className="text-zinc-500 text-sm">Ideal for 4,000+ sq ft homes in Mirasol, Frenchman's Reserve, eastern PBG</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-500 mb-2">Custom Estate Roofing</h3>
                <p className="text-zinc-400 text-sm mb-4">For signature properties, waterfront estates, and exceptional homes</p>
                <div className="text-3xl font-bold mb-6">$80k–$150k+</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Everything in Premium plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Custom or imported tile selections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Copper flashings & specialty edge treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Complex geometries (towers, chimneys, custom profiles)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Dedicated project management & architectural coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Materials rated for 80–100+ year lifespan</span>
                  </li>
                </ul>
                <p className="text-zinc-500 text-sm">Ideal for The Isles, waterfront estates, distinctive architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Home className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Who Our Palm Beach Gardens Roofing Services Are For
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Established Country Club Homeowners</h3>
                  <p className="text-zinc-400">If your 1980s–90s home in PGA National, BallenIsles, or similar communities is approaching its first replacement cycle, you need a contractor who understands both the technical requirements and community compliance demands of a major roof replacement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Luxury New Construction Buyers</h3>
                  <p className="text-zinc-400">If you've purchased in newer developments like Alton or Artistry and want premium roofing upgrades — clay tiles, copper flashings, specialized architectural features — we specialize in custom installations that match your investment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Property Managers &amp; HOAs</h3>
                  <p className="text-zinc-400">If you manage multiple properties or community-wide roofing campaigns, we provide consistency, compliance, and speed that reduces legal and code risk across your portfolio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Homeowners Needing Roof Documentation</h3>
                  <p className="text-zinc-400">If your roof condition has been flagged, we deliver certified replacements with complete documentation that satisfies all requirements. Our thorough project records protect your property's compliance status and give you peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Warranty */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Licensed, Insured &amp; Warranty-Backed
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Every roofing project we complete in Palm Beach Gardens comes with a comprehensive workmanship warranty. We stand behind the quality of our installations, repairs, and replacements, ensuring every detail meets the highest standards of durability and performance. We are fully licensed and carry comprehensive liability insurance to protect our clients throughout every project.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">FL State Certified Roofing Contractor</h3>
                <p className="text-zinc-400 text-sm">License CCC-1331464</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">FL State Certified General Contractor</h3>
                <p className="text-zinc-400 text-sm">License CGC-1526236</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <Wind className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Palm Beach County Code Compliant</h3>
                <p className="text-zinc-400 text-sm">130–140 mph wind resistance engineered</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Frequently Asked Questions — Palm Beach Gardens Roofing
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-bold text-lg pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-[#27272a] to-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Palm Beach Gardens Roofing Project Started
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Request your free assessment today. We'll evaluate your roof's current condition, assess your community's specific ARC requirements, and provide a detailed proposal with realistic timelines and investment expectations. No pressure. No obligation. Just honest expertise from a team that specializes in protecting South Florida's finest homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
              >
                <FileCheck className="w-6 h-6" />
                Request Free Assessment
              </Link>
              <a
                href="tel:754-227-5605"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"
              >
                <Phone className="w-6 h-6" />
                (754) 227-5605
              </a>
            </div>
            <p className="text-zinc-500 text-sm">
              Serving all Palm Beach Gardens communities including PGA National, BallenIsles, Frenchman's Reserve, Mirasol, The Isles, Artistry, Alton, and surrounding {county} areas. Most initial assessments scheduled within 48 hours.
            </p>
          </div>
        </section>

        {/* Serving Nearby Communities */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Serving Palm Beach Gardens & Surrounding Communities</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              All Phase Construction USA serves all of Palm Beach and Broward County from our Deerfield Beach headquarters. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">roof cost calculator</Link> for a free instant estimate, or schedule a <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">roof inspection</Link> today.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-zinc-300">
              <Link to="/locations/jupiter" className="hover:text-red-500 transition-colors">Jupiter</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/wellington" className="hover:text-red-500 transition-colors">Wellington</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boca-raton" className="hover:text-red-500 transition-colors">Boca Raton</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/delray-beach" className="hover:text-red-500 transition-colors">Delray Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coral-springs" className="hover:text-red-500 transition-colors">Coral Springs</Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-[#09090b]">
          <MoneyPageEnhancements cityName="Palm Beach Gardens" county="Palm Beach" hvhz={false} />
        <Contact />
        </section>
      </div>
    </>
  );
}
