import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  Award,
  Users,
  Star,
  Shield,
  Thermometer,
  Wind,
  Zap,
  TrendingDown,
  Clock,
  Home,
  ChevronRight,
  BadgeCheck
} from 'lucide-react';
import InternalLinksBlock from '../components/InternalLinksBlock';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';
import { generateLocalBusinessSchema, generateServiceSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '../utils/seoSchemas';

export default function ResidentialRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = 'Residential Roofing South Florida | All Phase Construction';
  const pageDescription = 'Dual-licensed residential roofing contractor serving Broward & Palm Beach Counties. Building envelope approach extends roof life, lowers energy bills & can reduce insurance premiums. Free inspection.';
  const canonicalUrl = 'https://allphaseconstructionfl.com/residential-roofing';

  const faqs = [
    {
      question: "How long does a residential roof last in Florida?",
      answer: "It depends on the material and installation quality. Shingle roofs typically last 15-25 years, tile roofs 30-50+ years, and metal roofs 40-70 years. However, Florida's intense sun, humidity, and hurricane exposure can shorten these lifespans significantly — which is why proper ventilation and installation are critical. Our building envelope approach is designed to maximize your roof's lifespan."
    },
    {
      question: "What's the difference between a roofing contractor and what you do?",
      answer: "Most roofing contractors only hold a roofing license (CCC). We hold both a General Contractor license (CGC) and a Roofing Contractor license. This dual licensing allows us to perform structural work that pure roofing contractors cannot — including the upgrades that can reduce your insurance premiums. We also approach every roof as part of your home's complete building envelope, not just a surface to cover."
    },
    {
      question: "Can a new roof really lower my insurance premiums?",
      answer: "Yes, potentially by a significant amount. Florida insurers offer discounts for wind mitigation features like hurricane straps, secondary water barriers, and certain roof-to-wall connections. Because we're licensed as a General Contractor, we can perform these structural upgrades during your roof replacement — something roofing-only contractors cannot legally do. We'll assess your potential savings during your free inspection."
    },
    {
      question: "What does \"proper ventilation\" mean and why does it matter?",
      answer: "Your attic needs to breathe. Without proper intake (at the soffits) and exhaust (at the ridge or with roof vents), heat gets trapped. In Florida, this creates a \"thermal sandwich\" — your roof surface can hit 160°F, your attic holds that heat, and your underlayment gets cooked from both sides. This thermal shock breaks down materials years early. Proper ventilation lets that heat escape, extending your roof's life and lowering your cooling bills."
    },
    {
      question: "How much does a new roof cost in South Florida?",
      answer: "Residential roofs typically range from $15,000 to $50,000+, depending on size, material, pitch, and complexity. Use our free Roof Cost Calculator for a quick estimate, or schedule an inspection for an accurate quote. We'll also identify any potential insurance savings that could offset your investment."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Broward and Palm Beach Counties, including Boca Raton, Deerfield Beach, Pompano Beach, Fort Lauderdale, Delray Beach, Coral Springs, Boynton Beach, West Palm Beach, and surrounding communities. Our office is located in Deerfield Beach."
    }
  ];

  const schemas = [
    generateLocalBusinessSchema(canonicalUrl),
    generateServiceSchema(
      'Residential Roofing Services',
      'Complete residential roof replacement and installation for single-family homes, townhomes, and low-rise residential properties throughout South Florida. All material types available with HVHZ compliance.',
      canonicalUrl
    ),
    generateFAQPageSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Residential Roofing', url: canonicalUrl }
    ])
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
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
            <span className="text-white">Residential Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Roof Is the{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              5th Wall
            </span>
            {' '}of Your Home
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-4xl">
            Most roofers just replace shingles. We engineer complete roofing systems that protect your home, lower your energy bills, and can reduce your insurance premiums.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Schedule Free Inspection
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

      {/* When Roof Replacement Is the Appropriate Solution */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Roof Replacement Is the Appropriate Solution
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Roof replacement is appropriate when a roofing system has reached the end of its functional service life or exhibits widespread deterioration that cannot be reliably corrected through isolated repairs. Replacement is a system-level corrective action intended to restore full structural integrity, code compliance, and long-term performance.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Documented material failure across multiple roof areas</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Structural deck deterioration or compromised attachment systems</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Repeated or escalating leaks despite prior repairs</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Roofing systems that no longer meet current Florida Building Code or HVHZ requirements</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Aging roofs with depleted remaining service life based on material type and installation method</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Insurance, underwriting, or municipal requirements mandating full system replacement</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            In many cases, a{' '}
            <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">
              professional roof inspection
            </Link>
            {' '}is required to confirm whether replacement is necessary versus repair, based on documented conditions and system performance.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Want to know exactly what happens during a roof replacement?{' '}
            <Link to="/roof-replacement-process" className="text-red-600 hover:text-red-500 underline transition-colors font-semibold">
              See our 10-step roof replacement process
            </Link>
            {' '}from initial inspection through final walkthrough.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-zinc-400">Years Experience</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">2,500+</div>
              <div className="text-sm text-zinc-400">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <BadgeCheck className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Dual Licensed</div>
              <div className="text-sm text-zinc-400">CGC & CCC</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">5-Star</div>
              <div className="text-sm text-zinc-400">Rated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Envelope Approach */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            Our Approach
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We're Not Just Roofers. We're Building Envelope Contractors.
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              Think about it: your home has four walls. But there's a fifth wall most people forget — your roof. It's the largest protective surface of your entire home, taking the full force of Florida's sun, storms, and humidity.
            </p>
            <p>
              Most roofing companies show up, tear off the old roof, and nail on a new one. They ignore what's happening under the surface — the trapped heat, the failing ventilation, the thermal stress silently shortening your roof's lifespan.
            </p>
            <p>
              We take a different approach. As a building envelope contractor, we look at how your roof works as part of your home's complete protective system — and we engineer solutions that last.
            </p>
          </div>

          {/* 5 Walls Visual */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">5 Walls of Protection</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500">
                <CheckCircle2 className="w-6 h-6" />
                <span>North Wall</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <CheckCircle2 className="w-6 h-6" />
                <span>South Wall</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <CheckCircle2 className="w-6 h-6" />
                <span>East Wall</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <CheckCircle2 className="w-6 h-6" />
                <span>West Wall</span>
              </div>
              <div className="flex items-center gap-3 text-red-500 font-semibold text-lg pt-2 border-t border-zinc-800">
                <CheckCircle2 className="w-6 h-6" />
                <span>Your Roof — The 5th Wall</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            The Science
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why South Florida Roofs Fail Early
          </h2>

          <p className="text-lg text-zinc-300 mb-12 max-w-4xl leading-relaxed">
            Chris Porosky, our owner and a certified Residential Energy Rater, spent years studying where homes leak — walls, attics, soffits. What he discovered changed how we approach every roof we install.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Thermometer className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold">The Problem: "The Hidden Killer: Thermal Shock"</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Picture this: Your roof surface hits 160°F under the Florida sun. Below it, your attic traps that heat with nowhere to go. Your underlayment — the critical waterproof layer protecting your home — gets sandwiched between two ovens.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                This "hot sandwich" effect causes thermal shock that breaks down your underlayment years before it should. The result? Premature roof failure, leaks, and costly repairs — even on newer roofs.
              </p>
            </div>

            {/* Solution Card */}
            <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold">Our Solution: Engineered Ventilation</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We design roofing systems with proper attic ventilation that eliminates the thermal sandwich. Hot air escapes. Your underlayment stays cooler. Your roof lasts years longer.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300">Extended roof lifespan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300">Lower air conditioning bills</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300">A/C unit lasts longer</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300">More comfortable home year-round</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual License / Insurance Savings */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            Insurance Savings
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Dual Licensed Means{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Lower Insurance Premiums
            </span>
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              Florida's insurance crisis is real. Premiums have skyrocketed, and carriers are dropping homeowners left and right. But here's what most roofers won't tell you: structural upgrades can significantly reduce your premiums.
            </p>
            <p>
              The problem? Most roofing contractors aren't licensed to do structural work. They install your roof and walk away — leaving money on the table.
            </p>
            <p>
              Because we hold both a General Contractor and Roofing Contractor license, we can perform the structural upgrades — hurricane straps, reinforced connections, secondary water barriers — that qualify you for insurance discounts. One contractor. Complete solution. Real savings.
            </p>
          </div>

          {/* License Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-sm text-zinc-400 mb-2">General Contractor</div>
              <div className="text-3xl font-bold text-white mb-1">CGC-1526236</div>
              <div className="text-sm text-zinc-400">Structural upgrades & full construction</div>
            </div>
            <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 rounded-xl p-6">
              <div className="text-sm text-zinc-400 mb-2">Roofing Contractor</div>
              <div className="text-3xl font-bold text-white mb-1">CCC-1331464</div>
              <div className="text-sm text-zinc-400">Complete roofing systems</div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">The Combined Advantage</h3>
            <p className="text-zinc-300 mb-4">
              We're one of the few contractors in South Florida who can perform both your roof replacement AND the structural upgrades that qualify you for insurance discounts — all in one project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              Get your free inspection & insurance savings assessment
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Residential Roofing Services
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
            From repairs to complete replacements, we work with every major roofing material — and engineer each system for South Florida's unique demands.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Tile Roofing - Featured */}
            <Link
              to="/tile-roofing"
              className="bg-gradient-to-br from-red-950/40 to-zinc-900 border-2 border-red-900/50 rounded-xl p-6 hover:border-red-700/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">Tile Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Concrete, clay, and composite tile systems built for Florida's climate.
              </p>
            </Link>

            <Link
              to="/metal-roofing"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                <Shield className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">Metal Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Standing seam and panel systems with superior wind resistance.
              </p>
            </Link>

            <Link
              to="/shingle-roofing"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                <Zap className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">Shingle Roofing</h3>
              <p className="text-zinc-400 text-sm">
                Architectural and designer shingles with premium warranties.
              </p>
            </Link>

            <Link
              to="/flat-roofing"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                <TrendingDown className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">Flat Roofing</h3>
              <p className="text-zinc-400 text-sm">
                TPO, PVC, and modified bitumen for low-slope applications.
              </p>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/roofing-services/roof-repair"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">Roof Repair</h3>
                  <p className="text-zinc-400 text-sm">
                    Leaks, storm damage, wear and tear — we diagnose and fix it right.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/roof-replacement"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700 transition-colors">
                  <Clock className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">Roof Replacement</h3>
                  <p className="text-zinc-400 text-sm">
                    Complete tear-off and installation with our building envelope approach.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Homeowners Choose All Phase
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-4xl">
            We're not the cheapest. We're not the fastest. But we are the most thorough — and that shows in roofs that last and homeowners who refer us to their neighbors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Building Envelope Expertise</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We protect all 5 walls of your home, not just the roof surface. Complete protection, not patchwork.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Dual Licensed (GC + CCC)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We can do structural upgrades that roofing-only contractors cannot — opening doors to insurance savings.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Energy Rater Knowledge</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our owner's certification means we engineer ventilation that extends roof life and cuts energy bills.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Manufacturer Certified</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Platinum and Master certifications from Tamko, Owens Corning, CertainTeed, GAF, and more.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">2,500+ Projects Completed</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                20+ years serving Broward and Palm Beach counties. We've seen it all and solved it all.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">5-Star Reputation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Hundreds of reviews from homeowners who trust us with their biggest investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Bar */}
      <section className="py-16 px-4 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving Broward & Palm Beach Counties
          </h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            Boca Raton • Deerfield Beach • Pompano Beach • Fort Lauderdale • Delray Beach • Coral Springs • Boynton Beach • West Palm Beach & surrounding areas
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30"
          >
            Check If We Service Your Area
          </Link>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* Internal Links Section */}
      <section className="py-12 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <InternalLinksBlock
            title="Related Roofing Services & Areas"
            showCoreServices={true}
            showNearbyCities={true}
            additionalLinks={[
              { label: 'Roof Replacement Process', path: '/roof-replacement-process', description: 'Our proven 10-step roof replacement process' },
              { label: 'Tile Roofing', path: '/tile-roofing', description: 'Durable tile roof installation and repair' },
              { label: 'Metal Roofing', path: '/metal-roofing', description: 'Long-lasting metal roof solutions' },
              { label: 'Shingle Roofing', path: '/shingle-roofing', description: 'Quality shingle roof services' }
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              View All FAQs
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Home's 5th Wall?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Schedule your free roof inspection. We'll assess your roof's condition, identify ventilation issues, and show you how to maximize your insurance savings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Schedule Free Inspection
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
              <span>Free Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Same-Week Scheduling</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
