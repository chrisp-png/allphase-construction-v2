/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Davie Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, TreePine, AlertTriangle, Droplets } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function DavieMoneyPage() {
  const cityName = 'Davie';
  const county = 'Broward County';
  const slug = 'davie';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = `Davie Roof Replacement | Equestrian Country | All Phase USA`;
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
      reviewCount: '175'
    }
  });

  const faqs = [
    {
      question: 'How quickly can you respond to storm damage in Davie?',
      answer: 'All Phase Construction USA provides 24-hour emergency response for storm damage assessments. Our team understands that heavy rains and wind events common in South Florida require immediate attention to prevent further damage to your property. We offer same-day tarping and leak mitigation to protect your home while we plan the full repair or replacement.'
    },
    {
      question: 'Do you work with the Town of Davie building department for permits?',
      answer: 'Yes. We handle all permitting through Davie\'s Building Division, including their online OAS system. Our team submits complete roofing packages with HVHZ forms, Product Approvals, and all required checklists. We coordinate inspections and ensure your project meets local code requirements. Average permit approval time is 3–5 business days through the Town of Davie.'
    },
    {
      question: 'What roofing materials work best for Davie\'s humid climate?',
      answer: 'Metal roof options (standing seam or rib panels) perform exceptionally well in Davie\'s Everglades-adjacent humidity, lasting 40–70 years with proper installation. Concrete and clay tiles offer excellent durability and heat resistance at 40–50+ years. For shingles, we feature TAMKO impact-resistant architectural shingles with algae-resistant treatment — the best value option at 15–20 years, though humidity and UV exposure mean replacement comes sooner than in drier climates. All materials carry HVHZ certification required for Broward County installations.'
    },
    {
      question: 'Can you handle roofing for large equestrian properties?',
      answer: 'Absolutely. All Phase Construction USA specializes in large-scale roofing projects including horse barns, riding arenas, shelters, and estate homes with multiple structures. Our experience with western Davie\'s equestrian properties means we understand the unique challenges of sprawling roof spans, varied structure types, and coordinating work across multiple buildings on a single property.'
    },
    {
      question: 'How do you deal with tree debris damage common in Davie?',
      answer: 'Tree debris creates both visible and hidden roof damage. We conduct thorough inspections to identify impact zones, clogged drainage areas, and moisture retention points where organic material holds water against your roof surface. Our service includes debris removal, repair of damaged sections, and recommendations for preventing future damage through proper tree maintenance and gutter protection.'
    },
    {
      question: 'What\'s the timeline for a complete roof replacement on a Davie home?',
      answer: 'The on-site labor for most residential roof replacements takes approximately 3 working days. However, the total project timeline from contract signing to final inspection is typically 4–8 weeks. This includes permit processing through the Town of Davie (3–10 business days), material ordering, the physical installation, and scheduling final building inspections. Older ranch-style homes requiring deck repairs or truss reinforcement may take additional time on-site. Equestrian properties with multiple structures are scheduled in phases for efficiency.'
    },
    {
      question: 'Do you provide storm damage documentation?',
      answer: 'Yes. After any storm event or during our inspection process, we provide detailed photographic documentation, condition reports, and damage assessments. This documentation is yours to use however you need — whether for your own records, insurance communication, or future reference. After roof replacement, you also receive a new Wind Mitigation report to submit to your insurer for potential premium reductions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roof Replacement Davie, FL | Ranch & Estate Reroofs | All Phase</title>
        <meta
          name="description"
          content="Davie FL roofing contractor specializing in equestrian properties, ranch homes & large lots. TAMKO shingles, metal, tile. HVHZ-compliant. (754) 227-5605."
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
                  Roofing Contractor in Davie, FL
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
                  Davie isn't like the rest of Broward County. Everglades-adjacent humidity that accelerates material degradation, heavy tree canopy on large lots holding moisture against roof surfaces, equestrian properties with sprawling footprints, and ranch-style homes from the 1970s–80s built before stringent HVHZ codes — your property faces challenges that generic roofing contractors aren't equipped to handle.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  All Phase Construction USA specializes in <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> built for Western Broward's unique conditions. From single-family homes in Forest Ridge to equestrian estates in western Davie, we deliver <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">TAMKO shingle</Link>, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link>, <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link>, and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> solutions that stand up to Davie's demanding environment. We handle all Town of Davie permits, coordinate inspections, and provide complete documentation — so you get a quality roof without the contractor headaches.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection in Davie
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
                  Why Davie Property Owners Choose All Phase Construction USA
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane-Resistant Installations</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Every roof we install meets High Velocity Hurricane Zone requirements with proper Product Approvals (NOAs), certified fastening systems, and wind uplift testing for tile installations. South Florida demands superior craftsmanship, and every All Phase installation is built to withstand what hurricane season throws at it.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Large Lot & Equestrian Property Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We handle sprawling equestrian facilities, horse barns, riding arenas, and properties with extensive square footage that overwhelm typical residential roofers. Multi-structure projects are coordinated efficiently with phased scheduling to minimize disruption to your property and animals.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Tree Debris Damage Specialists</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Davie's heavy tree canopy causes hidden damage that leads to costly repairs — overhanging limbs, accumulated debris holding moisture against roof surfaces, and clogged drainage promoting mold and algae growth. Our inspections identify these Davie-specific damage patterns that generic contractors miss entirely.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Town of Davie Permitting Mastery</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  The Town of Davie building department operates independently from Broward County with its own OAS system and requirements. All Phase Construction USA navigates Davie's permitting process efficiently — submitting complete roofing packages with HVHZ forms, Product Approvals, and all required documentation on the first attempt.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Older Home Storm Retrofitting</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Ranch-style Davie homes from the 1970s–80s have low-sloped roofs built before stringent HVHZ codes. They need truss reinforcement, upgraded underlayment, and improved ventilation. Our dual licensing (CCC-1331464 roofing + CGC-1526236 general contractor) means we handle both the roof system and structural repairs under one contract.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Everglades-Adjacent Climate Knowledge</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Western Broward's proximity to the Everglades means accelerated material degradation — wood decks swell, asphalt shingles blister, and metal fasteners corrode faster than typical Florida locations. All Phase Construction USA selects materials and installation methods specifically engineered for Davie's extreme humidity environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our Roofing Process Works
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Getting a new roof doesn't require complexity. All Phase Construction USA has streamlined our process for busy Davie homeowners and property managers.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">1</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Comprehensive Property Assessment</h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Our team conducts a detailed inspection covering Davie-specific concerns that generic contractors miss:
                  </p>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Moisture intrusion at flashing, vents, plumbing stacks, and skylights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Tree debris impact zones and limb damage patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Equestrian property structures — barns, shelters, arenas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Humidity-related degradation: mold, algae, wood rot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Structural integrity of decking and truss connections on older homes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">2</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Customized Solution & Material Selection</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Your roofing project gets a plan built specifically for Davie's conditions. We match your property's architectural style — whether a classic ranch home or modern development — with roofing systems that deliver long-term value. Material selection includes TAMKO architectural shingles for budget-conscious replacement, concrete or clay tile for heat resistance and longevity, standing seam metal for maximum durability on large properties, or flat roofing systems for commercial buildings. We discuss every trade-off so you make an informed decision.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl font-black text-red-600/20">3</div>
                <div className="relative bg-[#27272a] border border-zinc-800 rounded-xl p-6 pt-10">
                  <h3 className="text-xl font-bold mb-4">Professional Installation & Quality Assurance</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our crew follows Town of Davie building codes meticulously. Every installation includes proper hurricane strap and clip installation, correct HVHZ-spec underlayment, Product Approval documentation for all materials, and coordinated inspections with Davie's Building Division. You get a final walkthrough, complete warranty documentation, and a new Wind Mitigation report for potential insurance premium reductions. No guesswork, no shortcuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Table */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Materials for Davie's Climate
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Western Broward's Everglades-adjacent humidity, heavy rainfall, and hurricane exposure demand materials specifically proven for this environment. All Phase Construction USA uses only HVHZ-certified materials.
            </p>

            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-6 py-4 text-sm font-bold text-zinc-300 uppercase tracking-wider">Material</th>
                    <th className="px-6 py-4 text-sm font-bold text-zinc-300 uppercase tracking-wider">Best For</th>
                    <th className="px-6 py-4 text-sm font-bold text-zinc-300 uppercase tracking-wider">Lifespan in Davie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700/50">
                  <tr className="bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 font-semibold underline transition-colors">TAMKO Architectural Shingles</Link>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">Budget-conscious replacement, versatile styles, algae-resistant</td>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">15–20 years</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 font-semibold underline transition-colors">Standing Seam Metal</Link>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">Large properties, barns, maximum durability & energy efficiency</td>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">40–70 years</td>
                  </tr>
                  <tr className="bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 font-semibold underline transition-colors">Concrete / Clay Tile</Link>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">Heat resistance, aesthetic appeal, weight for wind uplift</td>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">40–50+ years</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 font-semibold underline transition-colors">Flat Roofing (TPO / Modified Bitumen)</Link>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">Commercial buildings, low-slope residential sections</td>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">15–25 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Davie Roofing Service Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Emergency Repair</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-4">$500+</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency response for Davie properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Storm damage assessment and thorough documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Tree debris removal from roof surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Emergency tarping to prevent further damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#27272a] border-2 border-red-600 rounded-xl p-8 relative">
                <div className="absolute -top-3 right-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Complete Roof Replacement</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-4">$8,000–$25,000+</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Full replacement for ranch homes and modern properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>TAMKO shingle, metal, and tile options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Truss reinforcement and deck upgrades for older homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>All Town of Davie permits and inspections included</span>
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
                  <h3 className="text-xl font-bold">Commercial & Equestrian</h3>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-4">Custom Quote</p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Barns, riding arenas, shelters, and estate structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Flat roof, TPO, modified bitumen, and metal systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Multi-structure coordination with phased scheduling</span>
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
              What Makes All Phase Different From Other Davie Roofers
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Most roofing contractors focus on quick jobs. All Phase Construction USA focuses on long-term relationships with Davie property owners.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Town of Davie Code Expertise</h3>
                  <p className="text-zinc-400">While other contractors struggle with Davie's unique permitting requirements, we submit complete roofing packages including HVHZ forms, NOA documentation, and all required checklists on the first attempt. Average permit approval: 3–5 business days.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Equestrian Property Experience</h3>
                  <p className="text-zinc-400">Other roofing companies hesitate at large lots with barns, shelters, and horse facilities. All Phase Construction USA has completed roofing work on properties throughout western Davie's equestrian corridors — coordinating multi-structure projects efficiently.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">24-Hour Storm Response</h3>
                  <p className="text-zinc-400">Storm damage can't wait. Our team responds within 24 hours for emergency assessments, while typical contractors take days or weeks. We provide same-day tarping, leak mitigation, and complete photographic documentation for your records.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Transparent Communication</h3>
                  <p className="text-zinc-400">We answer questions before you have to ask them, providing updates throughout your project so you're never wondering what's happening with your roof. If other roofers offer excuses, All Phase Construction USA offers accountability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties We Serve */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Davie Properties We Serve
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TreePine className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Equestrian Properties</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Horse facilities, barns, riding arenas, and estate homes with multiple structures requiring coordinated roofing solutions. Our phased scheduling approach minimizes disruption while ensuring every structure gets the attention it deserves.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Ranch-Style Davie Homes</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  1970s–80s construction requiring storm retrofits, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingle replacement</Link>, or complete re-roofing with modern materials. Our dual license means we handle structural upgrades — truss reinforcement, deck replacement, ventilation improvements — under one contract.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Modern Developments</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Newer homes near Nova Southeastern University and eastern Davie needing maintenance, repair, or hurricane-resistant upgrades. Whether your home is 5 years old or 50, All Phase Construction USA delivers the right solution for your property's age and condition.
                </p>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold">Commercial Properties</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Commercial roofing</Link> for offices, retail, service businesses, and warehouses throughout Davie. Flat roof installations, metal applications, and ongoing maintenance contracts with priority emergency service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What Davie Property Owners Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "After heavy rains caused significant leak damage to our ranch home, All Phase Construction USA addressed all my concerns within 48 hours. The crew was extremely knowledgeable about the older construction on our 1980s house, and the final inspection passed without issues. Top notch service from start to finish."
                </p>
                <p className="text-zinc-500 font-medium">— Jennifer M., Forest Ridge</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "We needed roof replacements on both our main house and horse barn — over 8,000 square feet total. Other companies either couldn't handle the scope or quoted outrageous prices. All Phase delivered expert craftsmanship at a fair price, completed on schedule, and coordinated all permits with the Town of Davie building department."
                </p>
                <p className="text-zinc-500 font-medium">— David R., Equestrian Property Owner</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">
                  "The roof damage from tree debris was worse than we thought — hidden leaks had caused further damage to our decking. The team identified the problem areas, explained the repair process clearly, and delivered quality work. Hard workers who take pride in their craft."
                </p>
                <p className="text-zinc-500 font-medium">— Maria L., Davie Homeowner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="py-16 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Serving Davie and Surrounding Communities
            </h2>
            <p className="text-zinc-400 mb-8">
              All Phase Construction USA proudly serves Davie and nearby cities across Broward County. We cover Forest Ridge, western Davie's equestrian corridors, the Nova Southeastern University area, and all neighborhoods throughout Davie, FL — including zip codes 33312, 33314, 33317, 33324, 33325, 33326, 33328, 33330, 33331, and 33332.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Pembroke Pines', slug: 'pembroke-pines' },
                { name: 'Plantation', slug: 'plantation' },
                { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
                { name: 'Hollywood', slug: 'hollywood' },
                { name: 'Sunrise', slug: 'sunrise' },
                { name: 'Miramar', slug: 'miramar' },
                { name: 'Coral Springs', slug: 'coral-springs' },
                { name: 'Tamarac', slug: 'tamarac' },
                { name: 'Lauderhill', slug: 'lauderhill' },
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
              Frequently Asked Questions — Davie Roofing
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
              Get Started with Your Davie Roofing Project Today
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-4">
              If you're ready to stop worrying about your roof and start enjoying complete protection for your Davie property, the next step is simple. Schedule your free roof inspection — our professional team will assess your needs, provide a detailed estimate, and answer every question about materials, timeline, and options.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              No pressure. No hidden fees. Just honest recommendations from a roofing contractor who understands what Davie homes and properties require.
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
        <MoneyPageEnhancements cityName="Davie" county="Broward" hvhz={true} />
        <Contact />
      </div>
    </>
  );
}
