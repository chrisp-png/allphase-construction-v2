import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  Shield,
  Home,
  ChevronRight,
  Award,
  AlertTriangle,
  Wrench,
  Building2,
  ClipboardCheck,
  ThermometerSun,
  Wind,
  Droplets,
  Zap,
  HardHat,
  MapPin,
  BadgeCheck,
  TrendingUp,
  Target,
  FileText
} from 'lucide-react';

export default function SinglePlyRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'TPO & PVC Roofing South Florida | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Commercial single-ply roofing in South Florida. TPO and PVC membrane systems designed for HVHZ, heat, wind, and long-term durability. Expert installation with welded seams. Free assessment.');
    }

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Single-Ply Roofing Services",
      "serviceType": "Single-Ply Roofing",
      "description": "TPO and PVC single-ply roofing systems for commercial buildings in South Florida. HVHZ compliant installations with heat-welded seams for superior wind resistance and long-term performance.",
      "url": "https://allphaseconstructionfl.com/single-ply-roofing",
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
    });
    document.head.appendChild(serviceScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(serviceScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  const faqs = [
    {
      question: "What is single-ply roofing?",
      answer: "Single-ply roofing is a commercial-grade flat roof system made from one waterproof membrane layer—most commonly TPO or PVC—that's heat-welded to create a sealed, durable roof surface."
    },
    {
      question: "What's the difference between TPO and PVC roofing?",
      answer: "TPO and PVC can look almost identical once installed, but molecularly they're very different products, and that difference impacts long-term performance, seam strength, and chemical resistance."
    },
    {
      question: "Which single-ply roof is best for South Florida?",
      answer: "In South Florida, PVC is typically the best long-term single-ply system because it holds up better over time, performs extremely well in heat, and is ideal for high-wind conditions when properly welded."
    },
    {
      question: "Is PVC roofing worth the extra cost?",
      answer: "Yes—PVC is a premium single-ply roof that usually lasts longer and performs better long-term, which makes it a smart investment for building owners who want durability, energy efficiency, and fewer problems down the road."
    },
    {
      question: "Why is EPDM not popular in South Florida?",
      answer: "EPDM isn't as common here because the seams are glued, and in hot, humid South Florida conditions, adhesives simply don't hold up as reliably over time compared to heat-welded systems."
    },
    {
      question: "Are PVC seams stronger than TPO seams?",
      answer: "Yes—when installed correctly, PVC welds are typically stronger than TPO welds, which is exactly what you want on a roof that has to perform in hurricane conditions."
    },
    {
      question: "What does \"cohesion vs adhesion\" mean for welded seams?",
      answer: "PVC welding is cohesion, meaning the membrane becomes one solid piece, while TPO welding is adhesion, meaning it bonds at the interface—so under extreme stress, adhesion can separate while cohesion usually tears before it comes apart."
    },
    {
      question: "Can single-ply roofs handle hurricane-force winds?",
      answer: "Yes—single-ply roofs perform extremely well in high wind zones when the seams, flashing, and perimeter details are installed correctly, which is why quality workmanship matters as much as the material."
    },
    {
      question: "How long does a PVC roof last compared to TPO?",
      answer: "PVC typically lasts longer than TPO in real-world conditions, especially when the roof is maintained and installed with strong seam welds and proper edge details."
    },
    {
      question: "Does TPO lose reflectivity over time?",
      answer: "Yes—TPO can lose reflectivity as it ages, while PVC tends to hold its reflective performance longer, which helps with heat management and energy efficiency."
    },
    {
      question: "Is PVC roofing resistant to grease from restaurants?",
      answer: "Yes—PVC is naturally more resistant to grease and certain chemicals, which makes it a better choice for buildings that may have future tenants like restaurants or units with grease traps."
    },
    {
      question: "Is PVC roofing fire-rated?",
      answer: "PVC is naturally fire-retardant and is commonly installed in Class A fire-rated assemblies, which is a major advantage for commercial properties and certain building requirements."
    },
    {
      question: "Is TPO roofing fire-rated too?",
      answer: "Yes—TPO can be fire-rated, but it often relies on added fire-retardant and filler materials, and over time those can weather out and make future welding and repairs more difficult."
    },
    {
      question: "Why is PVC easier to repair than TPO years later?",
      answer: "PVC is typically easier to re-weld and repair long-term because it welds cleanly and consistently, while aging TPO can become harder to weld to as surface chemistry changes over time."
    },
    {
      question: "How do I know if my roof needs repair or replacement?",
      answer: "If you're seeing recurring leaks, seam issues, ponding water, or wet insulation, you need a professional inspection to determine whether it's a repairable detail problem or a full system failure."
    },
    {
      question: "Can you install single-ply over an existing roof?",
      answer: "Sometimes yes—if the existing roof is stable and meets code requirements, a recover may be possible, but many roofs need a full tear-off to fix trapped moisture and meet proper attachment standards."
    },
    {
      question: "How long does a single-ply roof installation take?",
      answer: "Most commercial single-ply projects take anywhere from a few days to a couple weeks depending on roof size, weather, tear-off requirements, and how many penetrations and edge details the roof has."
    },
    {
      question: "Do single-ply roofs require maintenance?",
      answer: "Yes—like any roof system, single-ply performs best with routine inspections and maintenance, especially around seams, drains, curbs, and flashing details."
    },
    {
      question: "Can I put a single-ply roofing system on my residential flat roof?",
      answer: "Yes—and in many cases it's a better option because single-ply roofs are more energy efficient and longer-lasting than asphalt-based flat roof systems when installed correctly."
    }
  ];

  return (
    <><div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/commercial-roofing/" className="hover:text-red-500 transition-colors">
              Commercial Roofing
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Single-Ply Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Single-Ply Roofing for Commercial Buildings in{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              South Florida
            </span>
          </h1>

          {/* Direct-Answer Opening for AI Extraction */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-6 leading-relaxed max-w-4xl">
            All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464, CGC-1526236) specializing in single-ply TPO and PVC roofing systems for commercial buildings across Broward County, Palm Beach County, and South Florida. With 20+ years of experience installing heat-welded membrane systems engineered for HVHZ wind code compliance, we deliver long-term durability for flat and low-slope commercial roofs.
          </p>

          <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-4xl">
            Based in Deerfield Beach, our certified installers provide professional TPO and PVC installation with verified quality control — from warehouses and retail centers to condominiums and government facilities. Call (754) 227-5605 for a free single-ply roofing assessment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Request Roof Assessment
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-zinc-400">Years Commercial Experience</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <BadgeCheck className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">HVHZ</div>
              <div className="text-sm text-zinc-400">Code Compliant</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Welded Seams</div>
              <div className="text-sm text-zinc-400">Quality Verified</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <ClipboardCheck className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Dual Licensed</div>
              <div className="text-sm text-zinc-400">CGC + CCC</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Single-Ply Roofing Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            Commercial Flat Roofing
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What Is Single-Ply Roofing?
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              Single-ply membrane roofing systems provide waterproofing in a single flexible sheet, typically installed over commercial flat or low-slope roofs. Unlike built-up roofing or modified bitumen (which use multiple layers), single-ply systems achieve complete weather protection in one membrane layer.
            </p>
            <p>
              The most common single-ply systems are <strong className="text-white">TPO (thermoplastic polyolefin)</strong>, <strong className="text-white">PVC (polyvinyl chloride)</strong>, and <strong className="text-white">EPDM (rubber)</strong>. In South Florida, TPO and PVC dominate the commercial roofing market due to their heat-welded seam technology, reflective surfaces, and proven performance in high wind and high heat environments.
            </p>
            <p>
              Single-ply membranes are mechanically fastened or fully adhered to the roof deck, with seams heat-welded to create continuous waterproof coverage. When properly installed, these systems provide excellent durability, energy efficiency, and hurricane resistance for commercial buildings throughout Broward and Palm Beach Counties.
            </p>
          </div>
        </div>
      </section>

      {/* Single-Ply Systems Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Single-Ply Roofing Systems We Install
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* TPO */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">TPO Roofing</h3>
              <p className="text-zinc-400 mb-6">
                Cost-effective, reflective, and widely used across commercial properties in South Florida.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>White reflective surface reduces cooling costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Heat-welded seams for wind resistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>15-25 year expected lifespan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Lower initial cost than PVC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>HVHZ-approved systems available</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <p className="text-sm text-zinc-400">
                  <strong className="text-white">Best for:</strong> Standard commercial applications, warehouses, office buildings, retail centers
                </p>
              </div>
            </div>

            {/* PVC */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-red-900/50 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/30 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                PREMIUM SYSTEM
              </div>
              <h3 className="text-2xl font-bold mb-4">PVC Roofing</h3>
              <p className="text-zinc-400 mb-6">
                Premium long-term system with superior chemical resistance, fire rating, and cohesive welded seams.
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Naturally fire-retardant (Class A rated)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Resistant to grease, oils, and chemicals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>25-30+ year expected lifespan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Maintains reflectivity longer than TPO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Cohesive welds (materials become one)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Superior long-term performance in HVHZ</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-950/20 border border-red-900/30 rounded-lg">
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Best for:</strong> Buildings with restaurants, long-term ownership, properties prioritizing maximum durability and wind performance
                </p>
              </div>
            </div>

            {/* EPDM */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 opacity-70">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-zinc-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">EPDM (Rubber)</h3>
              <p className="text-zinc-400 mb-6">
                Not commonly used in South Florida due to climate-related performance issues.
              </p>
              <ul className="space-y-3 text-zinc-500">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>Seams are glued, not welded</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>Adhesives degrade in high heat and humidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>Seam failures common in South Florida</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>Black surface absorbs heat</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <p className="text-sm text-zinc-500">
                  <strong className="text-zinc-400">Why we don't recommend EPDM:</strong> Glued seams don't hold up well in Florida's demanding climate. TPO and PVC outperform EPDM in this region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PVC vs TPO Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            System Comparison
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            PVC vs TPO: South Florida & HVHZ Comparison
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            TPO and PVC can look nearly identical once installed—both are white, reflective, and heat-welded. But they are molecularly different products with distinct performance characteristics.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-950">
                  <tr>
                    <th className="text-left p-6 text-lg font-bold text-white border-b border-zinc-800">Feature</th>
                    <th className="text-left p-6 text-lg font-bold text-red-500 border-b border-zinc-800">PVC</th>
                    <th className="text-left p-6 text-lg font-bold text-white border-b border-zinc-800">TPO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="p-6 font-semibold text-white">Seam Strength (HVHZ Critical)</td>
                    <td className="p-6 text-zinc-300">Cohesion: Materials molecularly fuse and become one. Tends to tear before separating.</td>
                    <td className="p-6 text-zinc-400">Adhesion: Materials bond at interface. Can separate under extreme stress.</td>
                  </tr>
                  <tr className="border-b border-zinc-800 bg-zinc-950/50">
                    <td className="p-6 font-semibold text-white">Expected Lifespan</td>
                    <td className="p-6 text-zinc-300">25-30+ years</td>
                    <td className="p-6 text-zinc-400">15-25 years</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="p-6 font-semibold text-white">Chemical/Grease Resistance</td>
                    <td className="p-6 text-zinc-300">Excellent. Ideal for restaurants and commercial kitchens.</td>
                    <td className="p-6 text-zinc-400">Moderate. Can be degraded by sustained grease exposure.</td>
                  </tr>
                  <tr className="border-b border-zinc-800 bg-zinc-950/50">
                    <td className="p-6 font-semibold text-white">Reflectivity Retention</td>
                    <td className="p-6 text-zinc-300">Maintains reflectivity longer with less maintenance</td>
                    <td className="p-6 text-zinc-400">Can experience chalking and reflectivity loss over time</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="p-6 font-semibold text-white">Fire Rating</td>
                    <td className="p-6 text-zinc-300">Naturally fire-retardant. Commonly achieves Class A as part of approved assembly.</td>
                    <td className="p-6 text-zinc-400">Can achieve Class A with proper assembly</td>
                  </tr>
                  <tr className="border-b border-zinc-800 bg-zinc-950/50">
                    <td className="p-6 font-semibold text-white">Initial Cost</td>
                    <td className="p-6 text-zinc-300">10-20% higher than TPO</td>
                    <td className="p-6 text-zinc-400">More affordable upfront</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-white">Best Use Cases</td>
                    <td className="p-6 text-zinc-300">Long-term ownership, buildings with restaurants/grease, maximum wind performance, premium properties</td>
                    <td className="p-6 text-zinc-400">Standard commercial applications, cost-conscious projects, shorter ownership horizons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">The Bottom Line:</h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              TPO is an excellent, proven system for commercial roofing. PVC is the premium choice when maximum longevity, superior wind performance, chemical resistance, and long-term cost efficiency are priorities. Both far outperform EPDM in South Florida's climate.
            </p>
          </div>
        </div>
      </section>

      {/* Welded Seams Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-6">
            Engineering Perspective
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Welded Seams Matter in High Wind Zones
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              In South Florida's High Velocity Hurricane Zone, your roof must withstand sustained winds exceeding 140 mph with gusts well beyond that. Single-ply roofing systems rely on their seams to maintain integrity under extreme uplift forces.
            </p>
            <p>
              Heat-welded seams are not all created equal. The difference between <strong className="text-white">cohesion</strong> and <strong className="text-white">adhesion</strong> becomes critical when wind loads approach design limits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border-2 border-red-900/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <Shield className="w-7 h-7 text-red-500" />
                Cohesion (PVC)
              </h3>
              <p className="text-zinc-300 mb-4">
                The two pieces of membrane molecularly bond during heat welding and become a single piece of material.
              </p>
              <p className="text-zinc-300 mb-4">
                Under stress, the seam is as strong as the membrane itself. If failure occurs, the membrane will tear before the seam separates.
              </p>
              <p className="text-sm text-zinc-400 italic">
                Think of it like welding two pieces of metal together—they become one continuous piece.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <Building2 className="w-7 h-7 text-red-500" />
                Adhesion (TPO)
              </h3>
              <p className="text-zinc-300 mb-4">
                The two pieces of membrane bond at the interface during heat welding, but remain two separate pieces.
              </p>
              <p className="text-zinc-300 mb-4">
                Under extreme stress, the bond can separate at the interface before the membrane itself tears.
              </p>
              <p className="text-sm text-zinc-400 italic">
                Think of it like gluing two pieces of plastic together—the bond is strong, but it's still two pieces.
              </p>
            </div>
          </div>

          <div className="bg-black border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Installation Quality Is Everything</h3>
            <p className="text-zinc-300 mb-6">
              Regardless of membrane chemistry, <strong className="text-white">proper welding technique matters more than the product itself</strong>. A poorly welded PVC seam will fail. A properly welded TPO seam will hold.
            </p>
            <ul className="space-y-3 text-zinc-300 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Correct welding temperature for ambient conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Appropriate weld speed and pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Clean, dry membrane surfaces before welding</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Quality control testing of completed welds</span>
              </li>
            </ul>
            <p className="text-lg text-white font-semibold">
              We verify every seam through destructive pull testing during installation—not just visual inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Common Single-Ply Roof Problems We Fix
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Seam Failure</h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Improperly welded seams separating under wind uplift or thermal cycling. Most common in older TPO installations or when welding wasn't properly verified.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong className="text-white">Fix:</strong> Re-weld failed seams or install cover strips with verified welds
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Droplets className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Flashing Failures</h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Penetrations, parapet walls, and roof edges where membrane transitions are improperly sealed. Common at HVAC curbs and drain locations.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong className="text-white">Fix:</strong> Properly detail flashings with heat-welded terminations and appropriate reinforcement
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Wind className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Drain & Scupper Issues</h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Clogged drains causing ponding water, or improperly flashed drain assemblies allowing water infiltration beneath membrane.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong className="text-white">Fix:</strong> Clean and maintain drains; properly flash drain assemblies with clamping rings
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Punctures & Tears</h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Damage from foot traffic, dropped tools, HVAC work, or storm debris. Single-ply membranes can be punctured if not properly protected.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong className="text-white">Fix:</strong> Patch with heat-welded membrane; install walkway pads in high-traffic areas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Droplets className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Ponding Water</h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Water remaining on roof 48+ hours after rain. Accelerates membrane degradation and can lead to seam failures.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong className="text-white">Fix:</strong> Install tapered insulation system or additional drains to eliminate standing water
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">HVAC Curb Penetrations</h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Equipment installations cutting through membrane without proper curbs and flashing. Major leak source in commercial roofs.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong className="text-white">Fix:</strong> Install proper equipment curbs with heat-welded base flashings and storm collars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Our Single-Ply Roofing Process
          </h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">1. Professional Roof Assessment</h3>
                  <p className="text-zinc-300 mb-4">
                    We inspect your existing roof condition, measure the building, assess drainage, identify structural concerns, and evaluate insulation needs. If replacing an existing roof, we use infrared scanning to detect trapped moisture.
                  </p>
                  <p className="text-sm text-zinc-400">
                    <strong className="text-white">Deliverable:</strong> Detailed inspection report with photos, measurements, and recommendations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">2. Engineered Proposal</h3>
                  <p className="text-zinc-300 mb-4">
                    We provide a detailed proposal specifying membrane type and thickness, attachment method (mechanically fastened, fully adhered, or ballasted), insulation R-value, warranty options, and project timeline. TPO and PVC options are presented with clear performance and cost differences explained.
                  </p>
                  <p className="text-sm text-zinc-400">
                    <strong className="text-white">Deliverable:</strong> Written proposal with system specifications, warranty terms, and total project cost
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HardHat className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">3. Professional Installation</h3>
                  <p className="text-zinc-300 mb-4">
                    Our crews tear off existing roofing (if required), inspect and repair deck structure, install insulation and cover board, mechanically fasten or adhere membrane, heat-weld all seams with continuous quality verification, detail all flashings and penetrations, and conduct final seam testing. Project manager on-site throughout installation.
                  </p>
                  <p className="text-sm text-zinc-400">
                    <strong className="text-white">Deliverable:</strong> Completed roof system with photo documentation of critical details and weld testing results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Single-Ply Roofing Questions — Answered
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PVC vs TPO Comparison */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Building Owner's Guide
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            PVC vs TPO — What Building Owners Should Know
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Both systems work well when installed correctly, but understanding the differences helps you make the right choice for your building's needs and priorities.
          </p>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            If you're deciding between TPO and PVC, the truth is they can look almost identical once installed—but they don't perform the same long-term. In South Florida, the heat, humidity, and wind exposure make seam integrity and repairability matter more than anything. That's why we often recommend PVC as the premium single-ply system when you want the strongest welds, better chemical resistance, and a roof that's easier to service years down the road.
          </p>

          <div className="space-y-6 mb-12">
            {/* Best Use Case */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Best Use Case</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Premium long-term performance for commercial roofs, especially high-wind and tenant-change properties.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Cost-effective commercial roofing option with strong performance when installed correctly.</p>
                </div>
              </div>
            </div>

            {/* Seam Welding Strength */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Seam Welding Strength</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Cohesion weld (membrane becomes one solid piece); tends to tear before separating.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Adhesion weld (bonding at the interface); under extreme stress it can separate.</p>
                </div>
              </div>
            </div>

            {/* HVHZ / Hurricane Performance */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">HVHZ / Hurricane Performance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Excellent for HVHZ when detailed correctly; strong welded seams are a major advantage.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Performs well when installed correctly, but seam performance depends heavily on weld quality.</p>
                </div>
              </div>
            </div>

            {/* Reflectivity Over Time */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Reflectivity Over Time</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Holds reflectivity longer over the life of the roof.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Can lose reflectivity as it ages.</p>
                </div>
              </div>
            </div>

            {/* Grease / Chemical Resistance */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Grease / Chemical Resistance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Strong resistance; better for restaurants and future tenant changes.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">More limited resistance compared to PVC.</p>
                </div>
              </div>
            </div>

            {/* Fire Rating */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Fire Rating</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Naturally fire-retardant and commonly installed in Class A rated assemblies.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Can be fire-rated but often uses added fire-retardants and fillers.</p>
                </div>
              </div>
            </div>

            {/* Repairability Years Later */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Repairability Years Later</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Typically easier to re-weld and repair long-term.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Can become harder to weld to over time as fillers and surface chemistry change.</p>
                </div>
              </div>
            </div>

            {/* Visual Appearance */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Visual Appearance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Looks very similar to TPO once installed.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">Looks very similar to PVC once installed.</p>
                </div>
              </div>
            </div>

            {/* Price Level */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Price Level</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border-l-4 border-red-600 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-500 mb-2">PVC Roofing</div>
                  <p className="text-zinc-300">Premium cost, premium performance.</p>
                </div>
                <div className="bg-zinc-950 border-l-4 border-zinc-700 rounded-lg p-4">
                  <div className="text-sm font-semibold text-zinc-500 mb-2">TPO Roofing</div>
                  <p className="text-zinc-400">More budget-friendly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border-l-4 border-red-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Which System Is Right for Your Building?</h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              The answer depends on your priorities, budget, and long-term plans. If you're planning to own the building long-term, prioritize durability over upfront cost, or expect tenant turnover with potential restaurant use—PVC is typically the better investment. If you need a cost-effective solution with solid performance for a standard commercial application, TPO is an excellent choice when installed by experienced contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving Broward & Palm Beach Counties
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <p className="text-lg text-zinc-400">
              Deerfield Beach • Pompano Beach • Fort Lauderdale • Boca Raton • Delray Beach • Coral Springs • Boynton Beach • West Palm Beach & surrounding areas
            </p>
          </div>
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30"
          >
            Get Your Free Commercial Roof Assessment
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/flat-roofing/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Flat Roofing</h3>
              <p className="text-sm text-zinc-400">All flat roof systems including TPO & modified bitumen.</p>
            </Link>
            <Link to="/metal-roofing/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Metal Roofing</h3>
              <p className="text-sm text-zinc-400">Standing seam metal for commercial applications.</p>
            </Link>
            <Link to="/roof-maintenance-programs/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Maintenance Programs</h3>
              <p className="text-sm text-zinc-400">Preventive maintenance to extend roof life.</p>
            </Link>
            <Link to="/roof-inspection/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Roof Inspection</h3>
              <p className="text-sm text-zinc-400">Professional single-ply membrane assessments.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Commercial Roofing Project?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Whether you're evaluating TPO vs PVC, planning a roof replacement, or addressing leak issues—we'll assess your building and provide clear recommendations based on your priorities and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Request Free Assessment
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Free Roof Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>TPO & PVC Options</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>HVHZ Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
