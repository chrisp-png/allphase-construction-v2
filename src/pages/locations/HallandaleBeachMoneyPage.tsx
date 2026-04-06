/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Hallandale Beach Custom Location Page — Surfer SEO Optimized Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, FileCheck, Wrench, Star, Home, Wind, Users, Building2, Layers, Anchor, Waves } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function HallandaleBeachMoneyPage() {
  const cityName = 'Hallandale Beach';
  const county = 'Broward County';
  const slug = 'hallandale-beach';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/hallandale-beach');
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
      question: 'How long does a typical Hallandale Beach condo roof replacement take?',
      answer: 'Most mid-rise condo projects (50–150 units) complete in 4–8 weeks of active construction, depending on building size, roof complexity, and weather conditions. The full process from initial assessment through board approval typically adds 4–6 weeks before construction begins. We provide detailed timelines during your free consultation.'
    },
    {
      question: 'What\'s the process for getting condo board approval for roofing projects?',
      answer: 'We prepare comprehensive board presentation materials including multiple budget scenarios, phased replacement options if applicable, and clear cost breakdowns suitable for special assessment planning. Our team can attend board meetings directly to answer technical questions and help facilitate approval. Most boards approve within one meeting cycle when properly prepared.'
    },
    {
      question: 'How do you handle 40-year building recertification requirements?',
      answer: 'We coordinate directly with licensed Professional Engineers and Registered Architects conducting structural inspections. Our roof installation documentation meets all Broward County 40-year recertification requirements, and we prepare inspection-ready files that demonstrate code compliance. Properties typically have 90 days from notice to complete inspections — we work within those timelines.'
    },
    {
      question: 'What makes flat roofing different in coastal Hallandale Beach vs. inland areas?',
      answer: 'Salt air exposure accelerates corrosion 5–10 times faster than inland environments. Standard fasteners and flashing that last 20+ years inland may fail within 5–7 years on oceanfront buildings. We specify marine-grade materials (316 stainless steel, copper or marine-rated aluminum) and installation techniques specifically designed for HVHZ wind uplift requirements that exceed -90 psf in some roof areas.'
    },
    {
      question: 'Do you provide emergency services for hurricane damage?',
      answer: 'Yes. We maintain emergency response capability for existing customers and provide priority service for buildings we\'ve previously worked on. For storm damage requiring immediate roof repairs or temporary protection, contact our emergency line for same-day assessment in most cases.'
    },
    {
      question: 'How do you coordinate with seasonal residents and property management companies?',
      answer: 'We establish communication protocols with property managers before construction begins, including resident notification schedules, access requirements, and progress reporting. For buildings with high seasonal resident populations, we can schedule major work during lower-occupancy periods and coordinate individual unit access through property management channels.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roof Replacement Hallandale Beach, FL | Condo & Flat | All Phase</title>
        <meta
          name="description"
          content="Expert condo & high-rise roofing contractor in Hallandale Beach, FL. Flat roof specialists — TPO, modified bitumen, built-up systems. 40-year recertification, HVHZ compliant. (754) 227-5605."
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
                  Expert Hallandale Beach Roofing Contractor for Condos &amp; Coastal Properties
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  All Phase Construction USA is the Hallandale Beach FL roofing contractor built for condo associations, high-rise buildings, and coastal commercial properties. While most roofing companies treat your 200-unit building like a single-family home, we specialize in multi-unit <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roof</Link> systems, 40-year recertification compliance, and the marine-grade materials required to survive direct Atlantic Ocean exposure along the A1A corridor.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  With dual licensing as both a roofing contractor (CCC-1331464) and general contractor (CGC-1526236), All Phase Construction USA handles your entire project — from condo board presentations and special assessment budget planning to <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors">complete roof replacement</Link> with HVHZ-compliant installation. No subcontractors, no extra contracts, no delays.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Condo Roof Assessment
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
                  Why Hallandale Beach Condo Associations Trust All Phase Construction USA
                </h2>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed mb-10 max-w-4xl">
              Most roofing companies focus on residential roof replacement and single-family homes. We focus on multi-unit outcomes. Instead of forcing you to educate your roofing contractor about coastal construction requirements, we bring 15+ years of Hallandale Beach roofing expertise to protect your property from day one.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Condo Association Expertise</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Direct experience managing board communications, presenting special assessment budget options, and coordinating multi-unit project timelines that work for residents and property managers alike. 85% of our projects are multi-unit buildings, compared to typical residential contractors who occasionally take a condo job.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Flat Roof Specialization</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Master-level installation of <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">TPO, modified bitumen, and built-up roofing systems</Link> designed specifically for low-slope coastal high-rises. We don't treat your commercial flat roof like a residential pitched roof project.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Anchor className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Marine-Grade Materials</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We combat accelerated fastener and flashing degradation from salt air by specifying 316-grade stainless steel fasteners and marine-rated flashing that won't corrode in the first 300 feet from breaking waves. Standard materials that last 20+ years inland can fail within 5–7 years in Hallandale Beach's direct ocean exposure.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Hurricane Wind Code Compliance</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Meet and exceed the highest wind resistance standards (170–180 mph design speeds) required for direct Atlantic Ocean exposure in the High-Velocity Hurricane Zone. Every installation includes full NOA product approvals and wind load calculations for your specific building height and location.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Building Department Navigation</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Streamlined Hallandale Beach permitting and 40-year recertification documentation that prevents the delays generic contractors face with HVHZ compliance requirements. Established connections with Hallandale Beach permitting officials expedite approval timelines.
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">Gulfstream Park Corridor Experience</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Proven track record with The Village at Gulfstream Park area and Hallandale Beach Boulevard corridor properties, including buildings with complex ownership structures, absentee owner coordination, and seasonal resident scheduling requirements.
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
                  How Our Hallandale Beach Roofing Process Works
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Getting results on a multi-unit building doesn't require chaos. Our process is structured specifically for condo associations and commercial properties.
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-12">
              {/* Step 1 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
                  <h3 className="text-2xl font-bold">Comprehensive Coastal Assessment</h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Your project begins with a free multi-unit building <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspection</Link> focused on identifying salt air damage, wind code compliance gaps, and current roof system condition. We evaluate everything from fastener corrosion to membrane integrity across your entire roofing system, checking for signs of leaks, water stains, and damaged components that indicate aging or storm damage.
                  </p>
                  <p>
                    We then prepare a detailed presentation for your condo board that includes special assessment budget planning options, phased replacement strategies if needed, and clear timelines that account for seasonal resident coordination. Our team evaluates your building against current Florida Building Code requirements, ensuring any 40-year recertification concerns are addressed proactively.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
                  <h3 className="text-2xl font-bold">Streamlined Project Management</h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Once approved, we handle Hallandale Beach building department permit coordination, including all HVHZ documentation, NOA product approvals, and wind load calculations required for your specific building height and location.
                  </p>
                  <p>
                    Resident communication plans are established for minimal disruption — particularly important for seasonal residents who may be absent during construction. We coordinate directly with property management companies to maintain clear project scheduling. Marine-grade material procurement and staging happens during this phase, ensuring 316 stainless steel fasteners, corrosion-resistant flashing, and premium membrane systems are ready before installation begins.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
                  <h3 className="text-2xl font-bold">Professional Installation & Compliance</h3>
                </div>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Expert installation proceeds with skilled roofers trained specifically in <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roof</Link> and low-slope coastal applications. Every component meets or exceeds the highest wind resistance standards required for structures facing direct ocean exposure. When it's time to replace outdated or damaged roofing, our team ensures the process is efficient — most residential roof replacements take 1–3 days, while multi-unit projects follow phased schedules to minimize resident disruption.
                  </p>
                  <p>
                    We prepare complete 40-year recertification documentation throughout the project, ensuring your building passes structural roof inspection requirements without scrambling for paperwork afterward. Final inspection coordination with Hallandale Beach building officials, comprehensive warranty documentation, and maintenance scheduling complete your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials for Coastal Durability */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Layers className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Roofing Materials &amp; Systems for Hallandale Beach Coastal Durability
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Selecting the right roofing materials and installation techniques is essential for long-term protection against Hallandale Beach's harshest elements — salt air, heavy rains, tropical storms, and relentless humidity.
                </p>
              </div>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Roofing System</th>
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Best For</th>
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Lifespan</th>
                    <th className="text-left p-4 border border-zinc-700 font-bold text-red-500">Key Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-zinc-900/30">
                    <td className="p-4 border border-zinc-700 font-semibold">TPO Single-Ply Membrane</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Condo flat roofs, commercial</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">20–30 years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Energy-efficient, heat-reflective, excellent chemical resistance</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="p-4 border border-zinc-700 font-semibold">Modified Bitumen</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Mid-rise condos, low-slope roofs</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">20–25 years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Multi-layer waterproofing, excellent wind uplift resistance</td>
                  </tr>
                  <tr className="bg-zinc-900/30">
                    <td className="p-4 border border-zinc-700 font-semibold">Built-Up Roofing (BUR)</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Large commercial, parking decks</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">25–30 years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Proven multi-ply redundancy, handles foot traffic well</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="p-4 border border-zinc-700 font-semibold">Standing Seam Metal</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Pitched-roof condos, townhomes</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">40–60+ years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Superior wind resistance, longest lifespan, low maintenance</td>
                  </tr>
                  <tr className="bg-zinc-900/30">
                    <td className="p-4 border border-zinc-700 font-semibold">TAMKO Architectural Shingles</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Low-rise residential, townhomes</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">25–30 years</td>
                    <td className="p-4 border border-zinc-700 text-zinc-300">Cost-effective, wide style range, strong wind warranties</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-zinc-400 mt-6 text-sm">
              All materials are selected based on your building type, exposure level, and budget. Choosing the right roofing material for Hallandale Beach's coastal environment — whether <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof systems</Link> like TPO and modified bitumen, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">standing seam metal</Link>, or <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">TAMKO architectural shingles</Link> — is essential for long-term performance and compliance.
            </p>
          </div>
        </section>

        {/* Proof Section - Results & Testimonials */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Star className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Proven Results for Hallandale Beach Properties
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "After three contractors gave us wildly different estimates and couldn't explain 40-year recertification requirements, this team presented a clear plan our board approved in one meeting. The special assessment came in 20% under their initial estimate."
                </p>
                <p className="text-zinc-500 text-sm">— Board President, 180-Unit A1A Corridor Condominium</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4 italic">
                  "Our 1970s building had failed two roof inspections with previous patch repairs. They completed full roof replacement, handled all building department documentation, and we passed recertification on the first try. Hurricane season came two months later — no issues."
                </p>
                <p className="text-zinc-500 text-sm">— Property Manager, Hallandale Beach Boulevard Mid-Rise</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">98%</div>
                <p className="text-zinc-400 text-sm">First-time pass rate on 40-year recertification roof inspections</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">6 Wk</div>
                <p className="text-zinc-400 text-sm">Average reduction in permit approval timeline vs. industry standard</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">0</div>
                <p className="text-zinc-400 text-sm">Wind damage claims on roofs installed since 2019 through multiple hurricane seasons</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">23%</div>
                <p className="text-zinc-400 text-sm">Average savings on special assessment budgets through accurate initial scoping</p>
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
                  Hallandale Beach Roofing Service Packages &amp; Investment
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Choose the package that matches your building's needs and budget requirements.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-500 mb-2">Essential Condo Package</h3>
                <p className="text-zinc-400 text-sm mb-4">For smaller condo associations (under 50 units) and low-rise buildings</p>
                <div className="text-3xl font-bold mb-6">$8–12<span className="text-lg text-zinc-400 font-normal">/sq ft</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Complete flat roof system (TPO or modified bitumen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Standard marine-grade fasteners and flashing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Hallandale Beach permit coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Basic 40-year recertification documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">10-year workmanship warranty</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 border-2 border-red-600 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-red-500 mb-2">Premium Coastal Protection</h3>
                <p className="text-zinc-400 text-sm mb-4">For mid-rise buildings (50–150 units) with direct ocean exposure</p>
                <div className="text-3xl font-bold mb-6">$12–18<span className="text-lg text-zinc-400 font-normal">/sq ft</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Everything in Essential plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Premium 316 stainless steel fasteners throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Enhanced wind resistance exceeding minimum code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Complete board presentation & special assessment consulting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Comprehensive 40-year recertification package</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">15-year workmanship warranty with annual inspection option</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-500 mb-2">Elite High-Rise Solutions</h3>
                <p className="text-zinc-400 text-sm mb-4">For luxury towers, 10+ stories, and complex roof geometries</p>
                <div className="text-3xl font-bold mb-6">Custom<span className="text-lg text-zinc-400 font-normal"> quote</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Dedicated project manager throughout construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Priority scheduling with guaranteed completion timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Premium material specifications & extended warranties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Full coordination with property management & seasonal residents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Emergency response priority for future storm damage</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-zinc-400 text-center mt-8">
              Not sure which package fits your property? Start with a{' '}
              <Link to="/contact/" className="text-red-500 hover:text-red-400 underline transition-colors">free estimate and assessment</Link>.
              We'll recommend the solution that matches your building's actual needs — not the most expensive option available.
            </p>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Home className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Who Our Hallandale Beach Roofing Services Are For
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Condo Associations</h3>
                  <p className="text-zinc-400">Planning roof replacement or major repairs — need a contractor experienced with board approval processes and special assessment budget management.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">A1A Corridor High-Rises</h3>
                  <p className="text-zinc-400">Requiring flat roof expertise with TPO, modified bitumen, or built-up roofing systems engineered for direct Atlantic Ocean exposure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">40-Year Recertification Properties</h3>
                  <p className="text-zinc-400">Requiring compliant roofing systems meeting current Florida Building Code HVHZ standards before inspection deadlines.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Coastal Deterioration Buildings</h3>
                  <p className="text-zinc-400">Experiencing accelerated deterioration from heavy rains, tropical storms, and salt air that has compromised existing fasteners and flashing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Seasonal & Diplomatic Communities</h3>
                  <p className="text-zinc-400">Needing coordinated project management that respects absence schedules while maintaining construction momentum.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Residential Homeowners</h3>
                  <p className="text-zinc-400">Hallandale Beach homeowners needing <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">TAMKO shingle</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal</Link>, or <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</Link> replacement with HVHZ-compliant installation for single-family or townhome properties.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Licensed, Insured &amp; Trusted in Hallandale Beach
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Our team is fully licensed and insured for commercial and multi-unit construction in Hallandale Beach FL. We maintain relationships with the city building department and understand exactly what's required for compliant installation in the High-Velocity Hurricane Zone.
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
                <h3 className="font-bold mb-2">HVHZ Certified</h3>
                <p className="text-zinc-400 text-sm">High-Velocity Hurricane Zone Compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Frequently Asked Questions — Hallandale Beach Roofing
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
              Get Your Hallandale Beach Roofing Project Started
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Request your free condo association consultation and roof inspection. We'll assess your building's current condition, identify any 40-year recertification concerns, and prepare board presentation materials — all before you commit to anything. No pressure, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
              >
                <FileCheck className="w-6 h-6" />
                Request Free Consultation
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
              Serving all of Hallandale Beach including Golden Isles, Gulfstream Park, Three Islands, A1A corridor, and Hallandale Beach Boulevard. Available 24/7 for emergency <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repairs</Link>.
            </p>
          </div>
        </section>

        {/* Serving Nearby Communities */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Serving Hallandale Beach & Surrounding Communities</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              All Phase Construction USA serves all of Broward and Palm Beach County from our Deerfield Beach headquarters. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">roof cost calculator</Link> for a free instant estimate, or schedule a <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">roof inspection</Link> today.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-zinc-300">
              <Link to="/locations/hollywood" className="hover:text-red-500 transition-colors">Hollywood</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-pines" className="hover:text-red-500 transition-colors">Pembroke Pines</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/miramar" className="hover:text-red-500 transition-colors">Miramar</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/deerfield-beach" className="hover:text-red-500 transition-colors">Deerfield Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boca-raton" className="hover:text-red-500 transition-colors">Boca Raton</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-500 transition-colors">Pompano Beach</Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-[#09090b]">
          <Contact />
        </section>
      </div>
    </>
  );
}
