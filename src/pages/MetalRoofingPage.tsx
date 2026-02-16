import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  Shield,
  Home,
  ChevronRight,
  Award,
  FileText,
  AlertTriangle,
  Wrench,
  Camera,
  Building2,
  ClipboardCheck,
  ThermometerSun,
  Wind,
  Droplets,
  HardHat,
  MapPin,
  Clock,
  BadgeCheck,
  Zap,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';

export default function MetalRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Metal Roofing Services",
    "serviceType": "Metal Roofing",
    "description": "Metal roofing installation services in South Florida. Standing seam and mechanically seamed systems. HVHZ compliant installations with proper clip spacing for residential and commercial properties.",
    "url": "https://allphaseconstructionfl.com/metal-roofing",
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

  return (
    <>
      <SEO
        title="Metal Roofing Broward & Palm Beach | Free Inspection | All Phase"
        description="Standing seam metal roofing in South Florida. 24-gauge, HVHZ compliant. Free consultation. Call (754) 227-5605."
        canonical="https://allphaseconstructionfl.com/metal-roofing"
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
            <span className="text-white">Metal Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Metal Roofing That's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Actually Engineered
            </span>
            {' '}for South Florida Hurricanes
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            Not all metal roofs are created equal. The difference between a roof that survives a Category 5 and one that peels off in a tropical storm comes down to details most contractors skip: gauge thickness, clip spacing, seam type, and how thermal expansion is managed. We build metal roofs that perform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Metal Roof Consultation
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

      {/* When Metal Roofing Requires Professional Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Metal Roofing Requires Professional Inspection
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Metal roofing systems require inspection-based evaluation due to thermal movement, concealed fastening methods, and system-wide load behavior. Visual surface conditions alone may not reveal attachment failure, panel stress, or wind resistance deficiencies.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Suspected fastener back-out, clip failure, or attachment fatigue</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Panel separation, oil canning, or thermal expansion stress</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Wind uplift exposure in High Velocity Hurricane Zone (HVHZ) conditions</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Sealant or flashing degradation at seams, penetrations, or transitions</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Aging metal roof systems where remaining service life is uncertain</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Metal roofing systems often require professional inspection to evaluate attachment performance, thermal movement accommodation, and wind resistance characteristics before repair or replacement decisions are made. Our <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspection services</Link> provide system-wide evaluation of concealed fastener integrity, clip performance, panel condition, and code compliance throughout Broward County and Palm Beach County—including specialized assessment protocols for properties in HVHZ jurisdictions.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            In these scenarios, a{' '}
            <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">
              diagnostic roof inspection
            </Link>
            {' '}is required to determine whether metal roof repair, retrofit, or full system replacement is technically appropriate.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">20+ Years Metal Roofing Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Dual Licensed (GC + CCC)</span>
          </div>
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Mechanically Seamed Systems</span>
          </div>
          <div className="flex items-center gap-3">
            <Wind className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">HVHZ Code Compliant</span>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            What Most Roofers Won't Explain
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Hidden Differences Between a 100 MPH Roof and a 200+ MPH Roof
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Metal roofing has earned a reputation as the ultimate hurricane-proof material. And it can be — when installed correctly. The problem is, most metal roofs in South Florida are installed with cost-cutting decisions that dramatically reduce their wind resistance.
            </p>

            <p className="text-xl font-semibold text-white">
              The same metal roof can be rated for 100 mph or 200+ mph winds. The difference isn't the metal — it's how it's installed.
            </p>

            <p>Here's what most contractors won't explain:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Layers className="w-6 h-6 text-red-500" />
                1. Gauge (Thickness)
              </h3>
              <p className="text-zinc-400 text-sm">
                Metal roofing comes in different gauges — and thinner metal is cheaper. 29-gauge is the thinnest and weakest. 24-gauge is thicker, stronger, and more resistant to denting, oil canning, and wind damage. Many contractors install 29-gauge to save money. We use 24-gauge for standing seam installations because hurricanes don't care about your contractor's profit margin.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-500" />
                2. Seam Type
              </h3>
              <p className="text-zinc-400 text-sm">
                There are three main types of metal roof seams: exposed fastener (like 5V crimp), snap-lock, and mechanically seamed. Each has dramatically different wind resistance. More on this below.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <ClipboardCheck className="w-6 h-6 text-red-500" />
                3. Clip Spacing
              </h3>
              <p className="text-zinc-400 text-sm">
                Standing seam roofs are attached with clips. An engineer might specify clips at 18" on-center for maximum wind resistance — but many installers space them at 36" to save time and materials. That shortcut can cut your roof's wind rating in half.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <ThermometerSun className="w-6 h-6 text-red-500" />
                4. Thermal Expansion
              </h3>
              <p className="text-zinc-400 text-sm">
                Metal expands significantly in South Florida's heat — and contracts at night. A roof that doesn't accommodate this movement will develop leaks, loose fasteners, and panel damage over time.
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 mb-8">
            <p className="text-xl font-semibold text-white">
              Bottom Line: A cheap metal roof installation can fail in a moderate storm. A properly engineered metal roof can survive a direct hit from a major hurricane.
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-lg transition-colors"
          >
            Get a consultation to learn what your metal roof options really are
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Seam Type Section - Highlighted */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-y-2 border-red-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            Critical Decision
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why We Recommend Mechanically Seamed Standing Seam — And Avoid Snap-Lock
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            There are three main ways to attach metal roofing panels. The method you choose determines how long your roof lasts and how well it performs in a hurricane.
          </p>

          {/* Exposed Fastener */}
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-orange-500" />
              Exposed Fastener Roofs (5V Crimp, R-Panel, Corrugated)
            </h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                Exposed fastener roofs — including the popular 5V crimp profile — attach panels directly to the roof deck with screws. Each screw has a rubber or butyl washer designed to seal the hole.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-white">The Problem:</h4>
                <p className="text-zinc-300 mb-3">
                  In South Florida's intense sun, those washers bake. They dry out, crack, and fail — turning every screw into a potential leak point. A typical 5V crimp roof has hundreds of exposed fasteners. That's hundreds of potential failure points.
                </p>
                <p className="text-zinc-300">
                  And because metal expands and contracts with temperature changes, the constant movement works those fasteners loose over time. The screws back out. The holes elongate. Water gets in.
                </p>
              </div>

              <p className="text-zinc-400 text-sm">
                Exposed fastener roofs can work for agricultural buildings and utility structures. For your home? They're a maintenance liability.
              </p>

              <p className="text-red-400 font-semibold">
                Our Position: We install exposed fastener systems only when specifically requested and appropriate for the application. For residential and commercial buildings in the HVHZ, we recommend standing seam.
              </p>
            </div>
          </div>

          {/* Snap-Lock */}
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-yellow-500" />
              Snap-Lock Standing Seam
            </h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                Snap-lock panels have male and female legs that snap together. No mechanical seaming required. Faster to install. Lower labor costs.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4 text-white">The Problems:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white mb-1">1. Wind Uplift Vulnerability:</p>
                    <p className="text-zinc-300">
                      When negative pressure builds during a hurricane, snap-lock panels can literally unsnap. The extreme uplift pressures pry the panels apart — and once one panel lifts, the rest follow.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">2. Requires Double Caulking:</p>
                    <p className="text-zinc-300">
                      To make snap-lock systems truly watertight, contractors must apply double caulking in the seams. Most contractors skip this step. And even when done properly, caulk degrades in Florida's UV exposure — requiring maintenance.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">3. Price Isn't Much Lower:</p>
                    <p className="text-zinc-300">
                      By the time you add proper caulking, quality underlayment, and additional weatherproofing, snap-lock costs nearly the same as mechanically seamed. But it performs worse.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-red-400 font-semibold">
                Our Position: We don't recommend snap-lock for South Florida hurricane zones. If you're going to invest in standing seam, do it right.
              </p>
            </div>
          </div>

          {/* Mechanically Seamed */}
          <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-red-500" />
              Mechanically Seamed Standing Seam (What We Install)
            </h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                Mechanically seamed panels are crimped together using a power seaming tool — either single-lock (one fold) or double-lock (two folds). The seams are physically folded together, creating an interlocking connection that cannot be pulled apart by wind.
              </p>

              <div className="bg-black/40 border border-zinc-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4 text-white">Why It's Superior:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Maximum Wind Resistance:</span> Mechanically seamed roofs consistently outperform snap-lock and exposed fastener systems in wind uplift testing. Many systems are rated for 180+ mph winds.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">No Exposed Fasteners:</span> All fasteners are hidden under the seam or attached via clips. No penetrations in the roof surface. No washers to fail.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Accommodates Thermal Movement:</span> The clip system allows panels to expand and contract freely. No stress on fasteners. No enlarged holes. No leaks from thermal cycling.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Watertight at Any Pitch:</span> Double-lock mechanically seamed roofs can be installed on low-slope applications where snap-lock would fail.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clip Spacing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Engineering Matters
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Clip Spacing: How Contractors Cut Corners — And How We Don't
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Here's something most homeowners never think about: the clips that attach your standing seam panels to the roof deck are what actually hold your roof on during a hurricane.
            </p>

            <p className="text-xl font-semibold text-white">
              The spacing of those clips directly determines your roof's wind rating.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">The Math Is Simple:</h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300">Clips at 36" on-center = Lower wind resistance</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-zinc-300">Clips at 18" on-center = Significantly higher wind resistance</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500">•</span>
                <span className="text-white font-semibold">Clips at 12" on-center = Maximum wind resistance</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Why does this happen?</h3>
            <div className="space-y-4 text-zinc-300">
              <p>
                An engineer designing for South Florida's HVHZ might specify clips at 18" or even 12" on-center. But many installers — especially those focused on speed and cost — space clips at 36" or more.
              </p>
              <p>
                Clips cost money. Installing more of them takes more time. And once the roof is installed, you can't see the clip spacing. The homeowner has no idea.
              </p>
              <p className="text-xl font-semibold text-white">Until a hurricane hits.</p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
              <FileText className="w-6 h-6 text-red-500" />
              FEMA's Post-Hurricane Analysis:
            </h3>
            <p className="text-zinc-300">
              After Hurricane Ike, FEMA documented widespread metal roof failures caused by improper clip spacing. Their report specifically cited contractors installing clips too far apart, placing the first clip too far from the eave, and using incorrect fastener sizes.
            </p>
            <p className="text-zinc-300 mt-4">
              These weren't manufacturing defects. They were installation shortcuts.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Our Approach:</h3>
            <p className="text-zinc-300">
              We follow the engineering specifications for every job — and we document our clip installation. When your roof is complete, you'll know exactly how it was built. If a storm comes, your roof will perform as designed.
            </p>
          </div>

          <div className="bg-red-950/20 border-l-4 border-red-600 rounded-xl p-8">
            <p className="text-xl text-zinc-300 italic leading-relaxed">
              "Storms keep getting stronger. So why would you install a roof to minimum code when you can exceed it for a modest additional investment? Closer clip spacing costs a little more in materials and labor — but it can be the difference between keeping your roof and losing it."
            </p>
          </div>
        </div>
      </section>

      {/* Thermal Expansion Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Florida-Specific Engineering
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Metal Expands. Metal Contracts. Your Roof Must Be Designed for Both.
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Here's something most people don't realize about metal roofing: it moves. A lot.
            </p>

            <p>
              On a hot South Florida day, your metal roof can reach 150°F or higher. At night, it cools dramatically. This daily cycle causes the metal to expand and contract — and over the course of a year, that movement adds up.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">What Happens When Thermal Movement Isn't Accommodated:</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Exposed fastener systems:</span> Screws back out. Holes elongate. Washers fail. Leaks develop.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Improperly designed standing seam:</span> Panels buckle, warp, or develop "oil canning" (visible waviness). Clips can disengage.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Sealants and caulk:</span> Dry out and crack as they're stretched and compressed repeatedly.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">The Solution: Floating Clip Systems</h3>
            <p className="text-zinc-300 mb-4">
              Properly designed standing seam roofs use a combination of fixed and floating clips. The fixed clips anchor the panels at specific points (usually near the eave), while floating clips allow the rest of the panel to move freely as it expands and contracts.
            </p>
            <p className="text-zinc-300">
              This is why mechanically seamed standing seam outperforms other systems — the clip-and-seam design accommodates thermal movement by design.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 text-white">Why Aluminum Matters Near the Coast:</h3>
            <p className="text-zinc-300">
              If your property is within a few miles of salt water, aluminum standing seam is worth considering. Aluminum doesn't rust like steel — but it also expands and contracts more than steel. Proper clip design is even more critical.
            </p>
          </div>
        </div>
      </section>

      {/* Gauge Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Metal Roofing Gauge & Thickness: Why It Matters
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Steel roofing is measured in "gauge" (lower numbers = thicker metal). Aluminum roofing is measured in decimal thickness. Both affect performance significantly.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-6 text-white">Steel Gauge Comparison:</h3>
            <p className="text-sm text-zinc-400 mb-4">Note: Steel is measured in gauge. Aluminum is measured in decimal thickness (see below).</p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 pb-3 border-b border-zinc-800">
                <span className="text-red-500 font-bold text-lg w-24">22 gauge</span>
                <span className="text-zinc-300">Thickest, strongest (commercial/industrial)</span>
              </div>
              <div className="flex items-center gap-4 pb-3 border-b border-zinc-800">
                <span className="text-red-500 font-bold text-lg w-24">24 gauge</span>
                <span className="text-white font-semibold">Industry standard for quality residential/commercial ← Our Standard</span>
              </div>
              <div className="flex items-center gap-4 pb-3 border-b border-zinc-800">
                <span className="text-yellow-500 font-bold text-lg w-24">26 gauge</span>
                <span className="text-zinc-400">Thinner, used for exposed fastener systems</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 font-bold text-lg w-24">29 gauge</span>
                <span className="text-zinc-500">Thinnest, weakest, cheapest</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-6 text-white">Aluminum Thickness:</h3>
            <p className="text-sm text-zinc-400 mb-4">Aluminum roofing is measured in decimal thickness, not gauge.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 pb-3 border-b border-zinc-800">
                <span className="text-red-500 font-bold text-lg w-24">.040"</span>
                <span className="text-zinc-300">Commercial applications and high-wind zones</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-red-500 font-bold text-lg w-24">.032"</span>
                <span className="text-white font-semibold">Standard residential ← Our Standard</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Why Thickness Matters:</h3>
            <p className="text-zinc-300 mb-4">Thicker metal (24-gauge steel or .032" aluminum) is:</p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>More resistant to denting from hail and debris</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Less prone to "oil canning" (visible waviness)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Stronger under wind uplift pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Required for most engineering certifications</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 text-white">Our Standard:</h3>
            <p className="text-zinc-300">
              For mechanically seamed standing seam installations, we use 24-gauge steel or .032" aluminum (.040" for commercial applications). For applications where 26-gauge steel is appropriate, we specify it — but we never use 29-gauge for primary roofing applications.
            </p>
          </div>
        </div>
      </section>

      {/* Metal Roofing Types */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Metal Roofing Systems We Install
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
            From standing seam to metal tile, we offer the right system for your property and budget.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-950/40 to-zinc-950 border-2 border-red-900/50 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mechanically Seamed Standing Seam (Recommended)</h3>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• The gold standard for hurricane-prone areas</li>
                <li>• Concealed fasteners eliminate leak points</li>
                <li>• 24-gauge steel or .032" aluminum (.040" for commercial)</li>
                <li>• Tight clip spacing for maximum wind resistance</li>
                <li>• 40-70 year lifespan with minimal maintenance</li>
                <li>• Available in a wide range of colors and finishes</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Metal Tile / Stone-Coated Steel</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Mimics the look of clay or concrete tile</li>
                <li>• Lighter weight than traditional tile</li>
                <li>• Interlocking panels with concealed fasteners</li>
                <li>• Impact resistant (Class 4 hail rating available)</li>
                <li>• Good option for tile aesthetics with metal durability</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">5V Crimp / Exposed Fastener (Limited Applications)</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Classic "Key West" coastal aesthetic</li>
                <li>• Lower cost than standing seam</li>
                <li>• Best for agricultural, utility, or covered structures</li>
                <li>• Requires more maintenance due to exposed fasteners</li>
                <li>• Not our first recommendation for HVHZ</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Aluminum Standing Seam (Coastal Properties)</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Corrosion resistant for saltwater environments</li>
                <li>• Lightweight — good for weight limitations</li>
                <li>• Same mechanically seamed performance as steel</li>
                <li>• Recommended within 3 miles of ocean</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 text-center">
            <p className="text-lg text-zinc-300">
              Whatever system you choose, proper installation determines performance. A cheap standing seam installation can fail; a quality exposed fastener roof can perform adequately. We focus on doing it right.
            </p>
          </div>
        </div>
      </section>

      {/* Dual License Advantage */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Advantage
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why a General Contractor License Matters for Metal Roofing
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>Metal roof installations often require work that goes beyond roofing:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-red-500" />
                Structural modifications
              </h3>
              <p className="text-zinc-400 text-sm">
                Reinforcing rafters or adding support for heavier gauge metal
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-red-500" />
                Fascia and soffit work
              </h3>
              <p className="text-zinc-400 text-sm">
                Replacing rotted wood before installing drip edge
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Home className="w-6 h-6 text-red-500" />
                Stucco repairs
              </h3>
              <p className="text-zinc-400 text-sm">
                Addressing wall-to-roof transitions
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-red-500" />
                Gutter integration
              </h3>
              <p className="text-zinc-400 text-sm">
                Ensuring proper drainage
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <p className="text-zinc-300 mb-6">
              Many roofing contractors only hold a CCC (roofing) license. When they encounter structural or exterior finish work, they either subcontract it (adding cost and coordination issues) or skip it entirely.
            </p>
            <p className="text-zinc-300 mb-6">We hold both:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-red-500" />
                <div>
                  <div className="font-bold text-white">CGC-1526236</div>
                  <div className="text-sm text-zinc-400">General Contractor</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-red-500" />
                <div>
                  <div className="font-bold text-white">CCC-1331464</div>
                  <div className="text-sm text-zinc-400">Roofing Contractor</div>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold text-white">
              One company handles everything. No subcontractor delays. No finger-pointing between trades. Your metal roof installation is complete and correct.
            </p>
          </div>
        </div>
      </section>

      {/* HVHZ Compliance */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Metal Roofing in the High Velocity Hurricane Zone
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Broward County is one of only two counties in Florida designated as a High Velocity Hurricane Zone. Every roofing installation must meet stricter requirements than the rest of the state.
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Wind className="w-7 h-7 text-red-500" />
              HVHZ Metal Roofing Requirements:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-2">Product Approval</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  All metal panels must have valid Florida Product Approval or Miami-Dade NOA
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Wind Uplift Testing</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Systems must be tested and rated for the specific wind pressures in your zone
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Clip and Fastener Specifications</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Clip spacing, fastener type, and attachment patterns must meet engineering requirements
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Underlayment Standards</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  High-temp self-adhered underlayment required in most applications
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Flashing Details</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  All flashings must meet HVHZ Chapter 15 requirements
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-white">Our Expertise:</h3>
            <p className="text-zinc-300">
              We work in the HVHZ daily. We understand the engineering requirements, the inspection process, and the documentation needed. When we install your metal roof, it's designed to meet code and exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Metal Roof Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Our Metal Roofing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metal Roof Installation</h3>
              <p className="text-zinc-400 text-sm">
                Complete installation with proper engineering, clip spacing, and HVHZ compliance. We use mechanically seamed standing seam as our standard for residential and commercial applications.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metal Roof Repair</h3>
              <p className="text-zinc-400 text-sm">
                Leak diagnosis, fastener replacement, panel repair, and sealant maintenance. We service all metal roof types, even systems we didn't install.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metal Roof Inspection</h3>
              <p className="text-zinc-400 text-sm">
                Comprehensive evaluation of panels, seams, fasteners, flashing, and underlayment condition. We'll identify problems before they become emergencies.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <HardHat className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exposed Fastener Maintenance</h3>
              <p className="text-zinc-400 text-sm">
                If you have a 5V crimp or other exposed fastener roof, regular maintenance can extend its life. We can replace failed washers, re-seal fasteners, and address problem areas.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metal-Over-Metal Retrofit</h3>
              <p className="text-zinc-400 text-sm">
                In some cases, a new metal roof can be installed over an existing metal roof. We'll assess your situation and recommend the best approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Common Metal Roof Problems in South Florida
          </h2>

          <div className="space-y-4">
            {[
              {
                problem: "Leaks at fasteners",
                cause: "Rubber washers degraded from UV and heat exposure",
                fix: "Replace failed fasteners with proper sealing screws; consider upgrade to standing seam"
              },
              {
                problem: "Panels blowing off in storms",
                cause: "Inadequate clip spacing or snap-lock system failure",
                fix: "Assess damage, reinforce with additional clips, repair or replace panels"
              },
              {
                problem: "Oil canning (wavy appearance)",
                cause: "Thin gauge metal, improper installation, or thermal stress",
                fix: "Address underlying causes; consider heavier gauge replacement panels"
              },
              {
                problem: "Noise during rain",
                cause: "Missing or inadequate underlayment and insulation",
                fix: "Add proper underlayment and insulation during re-roofing"
              },
              {
                problem: "Rust and corrosion",
                cause: "Damaged coating, salt exposure, or incompatible metal contact",
                fix: "Treat affected areas, apply protective coating, replace severely damaged panels"
              },
              {
                problem: "Leaks at transitions and flashings",
                cause: "Improper flashing installation or sealant failure",
                fix: "Install proper flashings with stucco integration where needed (GC license advantage)"
              }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Problem: {item.problem}</h3>
                <p className="text-zinc-400 text-sm mb-2">
                  <span className="text-red-500 font-semibold">Cause:</span> {item.cause}
                </p>
                <p className="text-zinc-300 text-sm">
                  <span className="text-red-500 font-semibold">Our Fix:</span> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose All Phase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Homeowners Trust All Phase for Metal Roofing
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mechanically Seamed Systems</h3>
              <p className="text-zinc-400 text-sm">
                We install standing seam roofs that are crimped — not snapped. Maximum wind resistance with no exposed fasteners.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proper Clip Spacing</h3>
              <p className="text-zinc-400 text-sm">
                We follow engineering specifications for clip placement, not minimum-effort shortcuts. Your roof's wind rating is real.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">24-Gauge Standard</h3>
              <p className="text-zinc-400 text-sm">
                We use thicker, stronger metal for standing seam installations. No 29-gauge compromises.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ThermometerSun className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Thermal Movement Expertise</h3>
              <p className="text-zinc-400 text-sm">
                We design for South Florida's heat. Floating clip systems allow your roof to expand and contract without damage.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dual Licensed (GC + CCC)</h3>
              <p className="text-zinc-400 text-sm">
                Structural work, fascia, stucco — we handle it all. One contractor, complete installation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">20+ Years, 2,500+ Projects</h3>
              <p className="text-zinc-400 text-sm">
                We've installed metal roofs across South Florida through multiple hurricane seasons. We know what performs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Metal Roofing Services in Broward & Palm Beach Counties
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <p className="text-xl text-zinc-400">
              Boca Raton • Deerfield Beach • Pompano Beach • Fort Lauderdale • Coral Springs • Parkland •
              Delray Beach • Boynton Beach • West Palm Beach • Lighthouse Point • Hillsboro Beach • Coconut Creek & surrounding areas
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Schedule Your Free Metal Roof Consultation
          </Link>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Metal Roofing FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the difference between standing seam and exposed fastener metal roofing?",
                a: "Standing seam has raised seams where panels interlock, with all fasteners hidden underneath. Exposed fastener roofs (like 5V crimp) have screws driven directly through the panel surface. Standing seam is more weather-tight and requires less maintenance, but costs more. Exposed fastener systems are cheaper but the rubber washers eventually fail, creating potential leak points."
              },
              {
                q: "Is mechanically seamed better than snap-lock for hurricanes?",
                a: "Yes. Mechanically seamed panels are physically crimped together — they can't be pulled apart by wind. Snap-lock panels can unsnap under extreme uplift pressure. For South Florida's HVHZ, we strongly recommend mechanically seamed standing seam."
              },
              {
                q: "What does \"clip spacing\" mean and why does it matter?",
                a: "Clips are what attach standing seam panels to your roof deck. Closer spacing (like 18\" or 12\" on-center) means more attachment points and higher wind resistance. Wider spacing (36\") reduces wind resistance significantly. Many contractors space clips too far apart to save time and materials — which can lead to roof failure in a storm."
              },
              {
                q: "What gauge or thickness metal should I choose?",
                a: "For steel standing seam, 24-gauge is the industry standard for quality residential and commercial applications. For aluminum, .032\" thickness is standard residential, with .040\" used for commercial applications. Steel gauge and aluminum thickness both affect strength — thicker is better. Avoid 29-gauge steel for primary roofing applications — it's too thin for Florida's conditions."
              },
              {
                q: "How does metal expand and contract in South Florida's heat?",
                a: "Metal roofs can reach 150°F or higher on hot days, then cool significantly at night. This causes the metal to expand and contract daily. A properly designed standing seam roof with floating clips accommodates this movement. Exposed fastener roofs often develop leaks as screws work loose from repeated thermal cycling."
              },
              {
                q: "Are metal roofs noisy during rain?",
                a: "Not when properly installed. With adequate underlayment and insulation — which we always include — metal roofs are no noisier than other roofing types. The \"rain on a tin roof\" noise comes from bare metal over open structures, not from properly installed residential systems."
              },
              {
                q: "How long does a metal roof last?",
                a: "A quality standing seam metal roof can last 40-70 years with minimal maintenance. Exposed fastener roofs typically last 20-30 years before significant maintenance is needed. Lifespan depends heavily on material quality, gauge, and installation quality."
              },
              {
                q: "Should I choose steel or aluminum for my metal roof?",
                a: "For most applications, steel (typically Galvalume-coated) is the standard choice. If your property is within 3 miles of salt water, aluminum is worth considering for its superior corrosion resistance. Aluminum expands more than steel, so clip design becomes even more critical."
              },
              {
                q: "Can a metal roof be installed over my existing roof?",
                a: "Sometimes. Metal-over-metal retrofits are possible in certain situations. Metal over shingles or tile requires careful assessment. We'll evaluate your existing roof structure, ventilation, and condition to determine the best approach."
              },
              {
                q: "Are metal roofs hurricane-proof?",
                a: "No roof is truly \"hurricane-proof,\" but properly engineered metal roofs are among the most wind-resistant options available. Mechanically seamed standing seam with proper clip spacing can be rated for 180 mph winds or higher. The key is engineering and installation quality — not just the material."
              },
              {
                q: "Do metal roofs attract lightning?",
                a: "No. Metal roofs don't attract lightning any more than other roofing materials. Metal is conductive, so if lightning does strike, it disperses the energy safely. Metal roofs are also non-combustible, which is actually a safety advantage."
              },
              {
                q: "How much does a metal roof cost in South Florida?",
                a: "Quality mechanically seamed standing seam roofs typically range from $15-$25+ per square foot installed, depending on gauge, profile, and complexity. Snap-lock and exposed fastener systems cost less but perform differently. We provide detailed estimates so you understand exactly what you're getting. Use our free Roof Cost Calculator for a preliminary estimate."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Metal Roof That's Actually Built for Hurricanes?
          </h2>

          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation. We'll explain the difference between a cheap metal roof and one engineered to protect your home — and help you make an informed decision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Consultation
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
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Honest Recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>No High-Pressure Sales</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
