import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  Award,
  Shield,
  Home,
  ChevronRight,
  BadgeCheck,
  AlertTriangle,
  Droplets,
  Layers,
  FileText,
  ClipboardCheck,
  Building2,
  Users,
  TrendingUp,
  Flame,
  Thermometer,
  Wind,
  Target,
  MapPin,
  Clock,
  Star,
  DollarSign,
  Atom
} from 'lucide-react';
import SEO from '../components/SEO';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';

export default function FlatRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flat Roofing Services",
    "serviceType": "Flat Roofing",
    "description": "Flat roofing installation and repair services in South Florida. TPO, PVC, modified bitumen, and EPDM systems for residential and commercial properties. HVHZ compliant installations.",
    "url": "https://allphaseconstructionfl.com/flat-roofing",
    "provider": {
      "@id": "https://allphaseconstructionfl.com/#business"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Broward County, Florida"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County, Florida"
      }
    ]
  };

  const faqs = [
    {
      q: "How long does a flat roof last in Florida?",
      a: "With proper installation and materials, TPO and PVC systems last 20-30 years, and modified bitumen 15-20 years. However, poor installation or drainage problems can cut that lifespan in half. The key factors are seam quality, drainage design, and proper HVHZ-compliant installation."
    },
    {
      q: "What causes flat roof leaks?",
      a: "The most common causes are seam failures (from improper heat welding), flashing failures around penetrations (HVAC units, vents, pipes), and ponding water that breaks down the membrane over time. In Florida, UV exposure and thermal cycling also accelerate wear if the system isn't designed for our climate."
    },
    {
      q: "What's the real difference between TPO and PVC?",
      a: "The difference is in how the seams bond — and it matters more than most contractors will tell you.\n\nWhen TPO is heat-welded, the seam bonds through adhesion. It's a good bond, but with enough force, it can be separated. TPO in the U.S. market also isn't naturally fire retardant — manufacturers add chalk fillers to meet fire ratings. Over time, those fillers bleed to the surface, making the membrane harder to weld. This means repairs 10-15 years from now may not hold as well.\n\nWhen PVC is heat-welded, the material molecularly fuses through cohesion — becoming one continuous piece. The seam becomes the strongest part of the entire roof. You can't pull it apart; you'd have to tear the membrane itself. PVC is also naturally Class A fire rated with no fillers, so repairs decades later weld just as cleanly as day one.\n\nLabor costs are identical for both. PVC material costs slightly more upfront. But for long-term repairability and seam integrity, PVC often delivers better lifetime value — especially for properties you plan to own for decades."
    },
    {
      q: "What is KEE and why does it matter in PVC roofing?",
      a: "KEE (Ketone Ethylene Ester) is a plasticizer added to most PVC roofing membranes to keep them flexible. Here's why it matters:\n\nMost manufacturers heat-extrude their PVC sheets from a billet. This process makes the material rigid, so they add KEE to restore flexibility. The problem is that plasticizers can migrate out over time — eventually leaving the membrane dry, brittle, and prone to cracking.\n\nWe prefer IB Roof Systems because they use a different manufacturing process called calendering. Instead of heat extrusion, virgin PVC runs through rollers across a massive production line. Because it was never heat-extruded, no KEE is needed — and the membrane stays naturally flexible for its entire lifespan.\n\nIt costs more upfront, but you're not gambling on plasticizers holding up 20 years from now. The flexibility is built into the material itself."
    },
    {
      q: "Can you install a flat roof over my existing roof?",
      a: "Sometimes, but not always. Florida Building Code allows roof recovering if the existing system is in acceptable condition and adding another layer won't exceed structural limits. We'll assess your existing roof and let you know if a recover is possible or if a full tear-off is required."
    },
    {
      q: "How do you prevent ponding water on flat roofs?",
      a: "We design drainage into every system — tapered insulation to create slope toward drains, properly sized primary drains, and secondary overflow scuppers as code requires. Florida Building Code defines positive drainage as water clearing within 48 hours. We engineer for complete drainage, not \"good enough.\""
    },
    {
      q: "What is the High Velocity Hurricane Zone (HVHZ)?",
      a: "The HVHZ is a special wind zone covering Miami-Dade and Broward Counties where stricter building codes apply. All roofing materials must have Florida Product Approval for HVHZ use, and installation must meet specific wind load requirements. We ensure complete HVHZ compliance on every project."
    },
    {
      q: "Do flat roofs work with solar panels?",
      a: "Yes, and flat roofs are often ideal for solar because panels can be tilted to optimal angles. However, the roof must be in good condition first — we recommend a roof assessment before any solar installation to avoid having to remove panels for repairs later."
    },
    {
      q: "How much does a commercial flat roof cost?",
      a: "Commercial flat roofing typically ranges from $5-15 per square foot depending on system type, roof condition, accessibility, and project complexity. A 10,000 SF roof might range from $50,000-$150,000. Schedule a free assessment for an accurate quote based on your specific property."
    },
    {
      q: "Can you help with insurance claims for flat roof damage?",
      a: "Absolutely. We document existing conditions, provide detailed damage assessments, and work with adjusters to ensure you receive fair claim settlements. For condos and HOAs, we provide the complete documentation package your insurance company requires."
    },
    {
      q: "What is the My Safe Florida Condo program?",
      a: "It's a state-funded grant program that helps condo associations within 15 miles of the coastline pay for hurricane mitigation improvements, including roof upgrades. The program offers a 2-to-1 match (state pays $2 for every $1 you spend) up to $175,000 per association. We can help you navigate the application process."
    },
    {
      q: "How do you handle roofing for occupied condos and HOAs?",
      a: "We specialize in multi-family projects. That means pre-scheduled resident notices, phased work to minimize disruption, coordination with property managers, and professional site management. We've completed projects from 4 units to 400+ units."
    },
    {
      q: "Why does seam welding matter so much on flat roofs?",
      a: "Because the seams are the weak point. A properly heat-welded seam is actually stronger than the membrane itself. But if the welder runs too hot, it destroys the stabilizers in the material. Too cold, and the bond fails over time. Our crews calibrate daily, test welds, and document everything — because this is where most flat roofs fail."
    }
  ];

  return (
    <>
      <SEO
        title="Flat Roofing Broward & Palm Beach | TPO & PVC | All Phase"
        description="TPO & PVC flat roofing in South Florida. Commercial & residential. HVHZ compliant. Free assessment. Call (754) 227-5605."
        canonical="https://allphaseconstructionfl.com/flat-roofing"
        schema={serviceSchema}
      />
      <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Flat Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Flat Roofing Done Right —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Where the Seams Make or Break Your Roof
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-4xl leading-relaxed">
            Most flat roof problems aren't material failures — they're installation failures. We install TPO, PVC, and modified bitumen systems with the precision that South Florida's hurricane zone demands.
          </p>

          <p className="text-lg text-zinc-400 mb-8 max-w-4xl">
            Serving homeowners, condos, HOAs, and commercial properties across Broward & Palm Beach Counties.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Roof Assessment
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>
        </div>
      </section>

      {/* When Single-Ply Roofing Requires Professional Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Single-Ply Roofing Requires Professional Inspection
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Single-ply roofing systems require inspection-based evaluation due to seam-dependent performance, concealed moisture conditions, and drainage sensitivity. Surface membrane appearance alone may not reveal seam failure, substrate saturation, or insulation degradation.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Suspected seam separation, weld failure, or adhesive breakdown</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Ponding water, improper slope, or drainage performance issues</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Trapped moisture beneath the membrane or within insulation layers</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Membrane shrinkage, cracking, or surface fatigue</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Aging single-ply systems with uncertain remaining service life</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            In these conditions, a{' '}
            <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">
              diagnostic roof inspection
            </Link>
            {' '}is required to determine whether membrane repair, section replacement, or full system replacement is technically appropriate.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            We provide material-specific diagnostic inspection services for single-ply and built-up roofing systems, including infrared thermography for concealed moisture detection, systematic seam evaluation, and drainage assessment. Our <Link to="/flat-roof-inspection-broward-county" className="text-red-600 hover:text-red-500 underline transition-colors">Flat & Single-Ply Roof Inspection Services in Broward County</Link> and <Link to="/flat-roof-inspection-palm-beach-county" className="text-red-600 hover:text-red-500 underline transition-colors">Flat & Single-Ply Roof Inspection Services in Palm Beach County</Link> establish factual membrane condition and substrate integrity before repair or replacement decisions.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Dual Licensed (CGC & CCC)</span>
          </div>
          <div className="flex items-center gap-3">
            <Wind className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">HVHZ Compliant Systems</span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Condo & HOA Specialists</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">5-Star Rated</span>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 px-4" id="who-we-serve">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flat Roofing Solutions for Every Property Type
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Whether you're a homeowner with a flat garage roof or an HOA board managing 200 units, we engineer flat roofing systems for South Florida's unique challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a href="#residential" className="bg-zinc-900 border border-zinc-800 hover:border-red-900/50 rounded-xl p-8 transition-all group">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">Residential Flat Roofing</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• Florida-style homes with flat sections</li>
                <li>• Garage roofs and carports</li>
                <li>• Additions and lanais</li>
                <li>• Pool equipment areas</li>
              </ul>
            </a>

            <a href="#commercial" className="bg-zinc-900 border border-zinc-800 hover:border-red-900/50 rounded-xl p-8 transition-all group">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">Commercial & Multi-Family</h3>
              <ul className="space-y-2 text-zinc-400 mb-4">
                <li>• Condominium associations</li>
                <li>• HOA communities</li>
                <li>• Retail and office buildings</li>
                <li>• Warehouses and industrial</li>
              </ul>
              <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
                <p className="text-sm text-red-400 font-semibold">Ask us about the My Safe Florida Condo grant program</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The Hidden Problem
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Flat Roofs Fail in South Florida
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl leading-relaxed">
            Here's what most contractors won't tell you: the membrane material is rarely the problem. The failures happen at the seams, the flashings, and the drainage — the installation details that separate a 10-year roof from a 25-year roof.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seam Failures</h3>
              <p className="text-zinc-400 text-sm">
                TPO and PVC roofs are only as strong as their heat-welded seams. If the welder runs too hot, you burn the stabilizers. Too cold, and the seam looks fine but fails within years. Most contractors don't calibrate their equipment for Florida's conditions.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ponding Water</h3>
              <p className="text-zinc-400 text-sm">
                Florida Building Code requires positive drainage — water must clear within 48 hours. But we see flat roofs installed without proper slope, without adequate drains, with clogged scuppers. During rainy season, these roofs stay underwater for weeks.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flashing Failures</h3>
              <p className="text-zinc-400 text-sm">
                Every penetration — HVAC units, vents, pipes, drains — is a potential leak point. In the High Velocity Hurricane Zone, flashings must meet specific wind load requirements. Most contractors skip the engineering and just "make it look right."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Approach
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            How We Build Flat Roofs That Last
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            We approach every flat roof as an engineered system — not just a surface to cover. Here's what that means in practice:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision Heat Welding</h3>
              <p className="text-zinc-400">
                Our crews calibrate welding equipment daily, test seam integrity, and follow manufacturer specifications exactly. Every seam is probed. Every detail is documented. The result: seams stronger than the membrane itself.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Engineered Drainage</h3>
              <p className="text-zinc-400">
                We design drainage systems that eliminate ponding — tapered insulation for proper slope, properly sized drains, secondary overflow scuppers per code. Your roof drains completely, every time.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">HVHZ-Compliant Flashings</h3>
              <p className="text-zinc-400">
                Every flashing detail is designed to meet High Velocity Hurricane Zone wind load requirements. Product approvals, RAS 111 compliance, wind calculations — we handle it all.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Documentation</h3>
              <p className="text-zinc-400">
                Photo documentation throughout installation. Product approvals on file. Wind mitigation forms completed. When the inspector arrives or the insurance company asks, you have proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roofing Systems Section */}
      <section className="py-20 px-4 bg-zinc-900" id="systems">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flat Roofing Systems We Install
          </h2>

          <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
            We work with all major flat roofing systems and help you choose the right one for your property, budget, and performance requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-950/40 to-zinc-950 border-2 border-red-900/50 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">TPO (Thermoplastic Polyolefin)</h3>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• Most popular commercial membrane</li>
                <li>• Energy-efficient white surface reflects heat</li>
                <li>• Heat-welded seams for superior waterproofing</li>
                <li>• 20-30 year lifespan when properly installed</li>
                <li>• Best for: Condos, retail, industrial, large residential flat sections</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">PVC (Polyvinyl Chloride)</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Premium single-ply membrane</li>
                <li>• Superior chemical and grease resistance</li>
                <li>• Ideal for restaurants, hospitals, commercial kitchens</li>
                <li>• Fire resistant, highly reflective</li>
                <li>• 25-30 year lifespan</li>
                <li>• Best for: Commercial kitchens, medical facilities, properties near industrial exhaust</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Thermometer className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modified Bitumen</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Multi-layer asphalt-based system</li>
                <li>• Excellent puncture resistance</li>
                <li>• Self-healing properties in Florida heat</li>
                <li>• Proven 50+ year track record</li>
                <li>• 15-20 year lifespan</li>
                <li>• Best for: Residential flat sections, buildings with rooftop traffic, budget-conscious projects</li>
              </ul>
            </div>
          </div>

          {/* TPO vs PVC Seams Comparison */}
          <div className="mt-12 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Atom className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">The Difference No One Explains: TPO vs. PVC Seams</h3>
            </div>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Most contractors treat TPO and PVC as interchangeable. They're not. The difference is in the chemistry — and it affects how long your roof lasts.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black/40 border border-zinc-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-white">TPO Seams: Adhesion</h4>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  When TPO is heat-welded, the seam bonds through adhesion. With enough force, the seam can be separated. It's a good bond, but not a permanent fusion.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Here's the bigger issue: TPO sold in the U.S. is not naturally fire retardant. Manufacturers add chalk fillers to achieve fire ratings. Over time, those fillers bleed to the surface — making the membrane increasingly difficult to weld. This means repairs 10-15 years down the road may not hold as well as the original installation.
                </p>
              </div>

              <div className="bg-black/40 border border-zinc-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-white">PVC Seams: Molecular Cohesion</h4>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  When PVC is heat-welded, something different happens. The material molecularly fuses — becoming one continuous piece. The seam becomes the strongest part of the entire roof system. You can't pull it apart; you'd have to tear the membrane itself.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  PVC is also naturally Class A fire rated with no fillers required. That means repairs 15 or 20 years from now weld just as cleanly as day one.
                </p>
              </div>
            </div>

            <div className="bg-red-950/30 border border-red-900/40 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-white">The Bottom Line</h4>
              <p className="text-zinc-300 leading-relaxed">
                Labor costs are identical for both systems. PVC material costs slightly more. But when you factor in long-term repairability and seam integrity, PVC often delivers better lifetime value — especially for buildings you plan to own for decades.
              </p>
            </div>

            {/* KEE Factor Section */}
            <div className="mt-8 bg-black/40 border border-zinc-800 rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-4 text-white">Not All PVC Is Created Equal: The KEE Factor</h4>

              <p className="text-zinc-300 mb-4 leading-relaxed">
                Here's something most contractors don't know — or won't explain:
              </p>

              <p className="text-zinc-300 mb-4 leading-relaxed">
                Most PVC manufacturers use heat extrusion to create their membrane sheets. This process requires adding plasticizers called KEE (Ketone Ethylene Ester) to keep the material flexible. Without KEE, the PVC becomes dry, brittle, and cracks over time.
              </p>

              <p className="text-zinc-300 mb-4 leading-relaxed">
                The problem? Plasticizers can migrate out of the membrane over the years, eventually leaving you with the brittleness they were meant to prevent.
              </p>

              <p className="text-zinc-300 mb-4 leading-relaxed">
                There's one manufacturer that does it differently: <span className="font-semibold text-white">IB Roof Systems</span>. Instead of heat extrusion, they use a calendering process — running virgin PVC through massive rollers (the production line spans two football fields). Because the material was never heat-extruded in the first place, they don't need to add KEE. The membrane stays naturally flexible for the life of the product.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                This is why we prefer IB Roof Systems for PVC installations. It's not the cheapest option — but it's engineered to stay flexible decades from now, not just pass inspection today.
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 text-center mt-8">
            <p className="text-lg text-zinc-300">
              Not sure which system is right for your property? We'll assess your needs and provide honest recommendations during your free roof assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Condo & HOA Section */}
      <section className="py-20 px-4" id="commercial">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Condo & HOA Specialists
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Flat Roofing for Condos, HOAs & Property Managers
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl leading-relaxed">
            We understand the unique challenges of multi-family roofing projects. Board approvals. Phased budgeting. Resident communication. Insurance documentation. We've handled it all — and we make it easier.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">What We Offer:</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Board presentations and detailed proposals</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Phased project scheduling to match budgets (6-18 month timelines available)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Pre-scheduled resident notices and minimal disruption</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Complete insurance claim documentation and support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Reserve study coordination</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Post-project wind mitigation inspections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Safe Florida Condo Grant Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-y-2 border-red-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            Grant Funding Available
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            My Safe Florida Condominium Pilot Program — Up to $175,000 in Grant Funding
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl leading-relaxed">
            If your condo association is within 15 miles of the Florida coastline, you may qualify for the My Safe Florida Condominium Pilot Program — a state-funded grant that helps offset hurricane mitigation improvements, including roof upgrades.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black/40 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">The Program Covers:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Roof-to-wall connection reinforcement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Roof deck attachment improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Secondary water resistance barriers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Opening protection (windows and doors)</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Grant Details:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>2-to-1 state match: For every $1 your association spends, the state contributes $2</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Roof projects: Up to $11 per square foot, max $1,000 per unit</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Maximum grant: $175,000 per association</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Free initial inspection included</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-white">How We Help:</h3>
            <p className="text-xl text-zinc-300 leading-relaxed">
              We've already helped condo associations navigate the My Safe Florida Condo program. We understand the inspection requirements, the mitigation improvements that qualify, and the documentation needed. Let us guide you through the process.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Check If Your Association Qualifies
            </Link>
            <p className="text-sm text-zinc-500 mt-4">Program availability subject to state funding. Contact us for current status.</p>
          </div>
        </div>
      </section>

      {/* Dual License Advantage */}
      <section className="py-20 px-4" id="residential">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Structural Advantage
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Our Dual License Matters for Flat Roofs
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Flat roofing projects often uncover issues that go beyond the roof surface — deteriorated decking, structural concerns, parapet wall problems, stucco damage at roof-to-wall transitions.
            </p>

            <p>
              Most roofing contractors hit these issues and have to stop. They call in a GC, wait for another permit, and your project drags on.
            </p>

            <p className="text-xl font-semibold text-white">
              Because we hold both a General Contractor license (CGC-1526236) and a Roofing Contractor license (CCC-1331464), we handle it all in one scope. One permit. One timeline. One contractor accountable for the complete job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-bold text-white text-xl">CGC-1526236</div>
                <div className="text-sm text-zinc-400">General Contractor</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-bold text-white text-xl">CCC-1331464</div>
                <div className="text-sm text-zinc-400">Roofing Contractor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flat Roofing Services Across South Florida
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <p className="text-xl text-zinc-400">
              Boca Raton • Deerfield Beach • Pompano Beach • Fort Lauderdale • Delray Beach • Coral Springs • Boynton Beach • West Palm Beach • Hollywood • Plantation • Sunrise • Margate • Coconut Creek • Lighthouse Point • Hillsboro Beach & surrounding communities in Broward & Palm Beach Counties
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Check If We Service Your Area
          </Link>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Flat Roofing Questions — Answered
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                <div className="text-zinc-400 space-y-4">
                  {faq.a.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Solve Your Flat Roof Problems — For Good?
          </h2>

          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Schedule your free flat roof assessment. We'll evaluate your roof's condition, drainage, and seam integrity — and give you honest recommendations, whether you're a homeowner or managing 100 units.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Roof Assessment
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Free Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Serving Broward & Palm Beach Counties</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
