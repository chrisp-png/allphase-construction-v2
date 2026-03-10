import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MidPageCTA from '../components/MidPageCTA';
import {
  Phone,
  CheckCircle2,
  Shield,
  Home,
  ChevronRight,
  Award,
  FileText,
  Users,
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
  BadgeCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';
import RelatedBlogResources from '../components/RelatedBlogResources';
import { generateFAQSchema, generateBreadcrumbSchema } from '../utils/enhancedSchema';
import { generateLocalBusinessSchema, generateServiceSchema } from '../utils/seoSchemas';

export default function TileRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageUrl = 'https://allphaseconstructionfl.com/tile-roofing';
  const pageDescription = 'Tile roof installation & repair in South Florida. Clay & concrete tile with proper flashings. Free inspection. Call (754) 227-5605.';

  // Local Business Schema with AggregateRating
  const localBusinessSchema = generateLocalBusinessSchema(pageUrl);

  // Service Schema
  const serviceSchema = generateServiceSchema(
    'Tile Roofing Installation',
    pageDescription,
    pageUrl
  );

  // FAQ Schema for rich snippets
  const faqSchema = generateFAQSchema([
    { question: "How long does a tile roof last in Florida?", answer: "Tile itself can last 50-100 years (clay) or 30-50 years (concrete). However, the underlayment typically needs replacement every 20-25 years — and roofs installed without proper flashings often fail much earlier. With proper flashings, correct foam application, and quality installation, your tile roof should last 50+ years before needing major work." },
    { question: "Why do so many tile roofs in Florida leak within 10-15 years?", answer: "The vast majority of tile roofs in Florida are installed without adequate flashings. Roofers rely on underlayment alone to keep water out, but that was never its intended purpose. Without flashings directing water away from vulnerable areas, the underlayment breaks down prematurely." },
    { question: "What is foam adhesive and why does it matter?", answer: "Foam adhesive (polyurethane foam) is used to attach tiles to the roof. The size of each foam patty and the application pattern directly determine your roof's wind rating. The same tile can be rated for 100 mph or 225 mph depending on how much foam is used." },
    { question: "What's the difference between concrete and clay tile?", answer: "Clay tiles are more expensive but last longer (50-100 years vs. 30-50), retain color better, and absorb less water. Concrete tiles are more affordable and come in more profile options. Both require the same attention to flashings, foam adhesive, and installation quality." },
    { question: "How much does a tile roof cost in South Florida?", answer: "Tile roofs typically range from $15,000 to $50,000+ depending on size, tile type, complexity, and detail work required. Roofs with proper flashings and documented foam application cost more initially but last significantly longer and perform better in storms." }
  ]);

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
    { name: 'Tile Roofing', url: 'https://allphaseconstructionfl.com/tile-roofing' }
  ]);

  // Combined schemas
  const combinedSchema = [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title="Tile Roofing Broward & Palm Beach | Free Inspection | All Phase"
        description="Tile roof installation & repair in South Florida. Clay & concrete tile with proper flashings. Free inspection. Call (754) 227-5605."
        canonical="https://allphaseconstructionfl.com/tile-roofing"
        schema={combinedSchema}
      />
      <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Tile Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tile Roofs in South Florida:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Why Most Fail Early
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            Your tile can last 50+ years. But without proper flashings, correct foam adhesive application,
            and verified installation, your roof will fail in half that time. We're the dual-licensed contractor
            that documents everything — and physically verifies foam adhesive quality on every job.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Tile Roof Inspection
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

      {/* When Tile Roofing Requires Professional Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Tile Roofing Requires Professional Inspection
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Tile roofing systems require inspection-based evaluation due to their layered construction and concealed attachment methods. Surface conditions alone are often insufficient to determine underlying failure, water intrusion pathways, or structural risk.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Cracked, displaced, or debonded tiles with no visible leak source</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Suspected underlayment deterioration beneath intact tile surfaces</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Fastener corrosion or attachment failure not visible without inspection</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Tile roof systems affected by storm impact or wind uplift</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Aging tile roofs where remaining service life is uncertain</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed">
            In these situations, a{' '}
            <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">
              diagnostic roof inspection
            </Link>
            {' '}is necessary to determine whether tile roof repair, partial remediation, or full replacement is technically appropriate. Tile roofing systems throughout South Florida require professional diagnostic evaluation to assess underlayment condition, attachment integrity, and concealed failure mechanisms before repair or replacement decisions are made. Our <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspection services</Link> provide material-specific technical assessment of tile condition, underlayment performance, and structural attachment throughout Broward County and Palm Beach County.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">20+ Years Tile Roof Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Dual Licensed (GC + CCC)</span>
          </div>
          <div className="flex items-center gap-3">
            <Camera className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Full Photo Documentation</span>
          </div>
          <div className="flex items-center gap-3">
            <ClipboardCheck className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Project Manager Verified Installation</span>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            What Most Roofers Won't Tell You
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            90% of Florida Tile Roofs Are Missing Something Critical
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Here's what most homeowners don't realize: your tile isn't the waterproof layer. The tiles are
              a "watershed" — they shed most of the water, but not all of it. Water gets under the tiles at
              every penetration, valley, and wall transition.
            </p>

            <p>
              That's why proper flashings are essential. Flashings are the metal components that direct water
              away from vulnerable areas — around pipes, at walls, in valleys, along edges.
            </p>

            <p className="text-xl font-semibold text-white">
              The problem? Over 90% of tile roofs in Florida are installed without adequate flashings.
            </p>

            <p>
              Roofers rely on the underlayment alone to keep water out — but underlayment was never designed
              to be the primary waterproofing layer. It's your backup, not your first line of defense.
            </p>

            <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 my-8">
              <h3 className="text-2xl font-bold mb-4 text-white">The Result:</h3>
              <p className="text-zinc-300">
                Water flowing under the tiles breaks down the underlayment years before it should. Roofs that
                could last 50+ years start leaking at 5-7 years and need full replacement by 20-25 years.
              </p>
            </div>
          </div>

          {/* Signs Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-500" />
              Signs Your Tile Roof Has a Flashing Problem
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Leaks appearing years after installation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Water stains near walls, chimneys, or skylights</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Cement or caulk patches instead of metal flashings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Visible gaps at roof-to-wall transitions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Underlayment visible (cracked or exposed) between tiles</span>
              </li>
            </ul>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-lg transition-colors"
          >
            Get a free inspection to see if your roof has proper flashings
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Foam Adhesive Section - Highlighted */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-y-2 border-red-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            Industry Secret
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Foam Adhesive: The Difference Between a 100 MPH Roof and a 225 MPH Roof
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Here's something most roofing contractors will never explain to you: the foam adhesive used to
              attach your tiles is one of the most important factors determining whether your roof survives
              a major hurricane.
            </p>

            <p className="text-xl font-semibold text-white">
              The same tile, on the same house, can be rated for 100 mph winds — or 225 mph winds. The difference?
              How much foam adhesive is used, the size of each foam patty, and whether it's applied correctly.
            </p>
          </div>

          <div className="bg-black/40 border border-red-900/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">The Problem: Crews Cut Corners</h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                Tile installation crews are often paid by the job, not by the quality — so there's incentive to use
                as little foam as possible. Less foam means faster work and lower material costs. But it means a
                weaker roof for you.
              </p>

              <p>
                Your permit specifies exactly what size foam patties are required and how they must be applied.
                But here's the uncomfortable truth: when the city inspector shows up, they're typically on-site
                for about five minutes. They watch the crew install a few tiles, check a few boxes, and leave.
              </p>

              <p className="text-lg font-semibold text-red-400">
                Once the inspector is gone, nothing stops the crew from switching back to smaller foam patties
                or fewer application points. Then the tiles are set, the roof is finished, and the evidence is
                covered up forever.
              </p>

              <p className="text-xl font-bold text-white">
                You'd never know — unless your roof fails in the next hurricane.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <ClipboardCheck className="w-7 h-7 text-red-500" />
              Our Approach: Verification You Can Trust
            </h3>

            <p className="text-zinc-300 mb-6">
              We don't just document our tile installations — we physically verify them.
            </p>

            <p className="text-xl font-semibold text-white mb-6">
              Our project managers break brand-new installed tiles to check foam adhesive curing and patty size.
              Not random spot checks at the end. Active verification throughout the job.
            </p>

            <p className="text-zinc-300 mb-6">
              Why would we break perfectly good tiles we just installed? Because that's the only way to know for certain.
              Photos show application — breaking a tile proves performance.
            </p>

            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold mb-4 text-white">Our Quality Control Process:</h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Photo documentation</strong> of foam application throughout installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Physical verification</strong> — project managers break cured tiles to confirm patty size and adhesion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Permit compliance photos</strong> — showing specs are being met</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Progress documentation</strong> — not just "before and after" shots</span>
                </li>
              </ul>
            </div>

            <p className="text-zinc-300">
              When your roof is finished, you'll have a complete record proving it was installed to spec.
              If you ever need to file an insurance claim or sell your home, you'll have documentation most
              homeowners don't.
            </p>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Even If You Don't Hire Us:</h3>
            <p className="text-zinc-300 mb-4">
              We believe in raising the standards of our industry. So here's our advice: whoever you hire,
              request photos of foam adhesive application, ask to see the physical permit with the foam
              specifications, and hold your roofer accountable.
            </p>
            <p className="text-lg font-semibold text-red-400">
              If they won't show you — ask yourself why.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Approach
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Proper Flashings at Every Detail — Not Just Where It's Easy
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            At All Phase, we install flashings everywhere water concentrates or transitions:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-red-500" />
                Valley Flashings
              </h3>
              <p className="text-zinc-400">
                Where two roof slopes meet, water volume is highest. We install proper valley metal — not just underlayment.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-500" />
                Pipe & Vent Flashings
              </h3>
              <p className="text-zinc-400">
                Every penetration gets both a base flashing at the underlayment AND a top flashing at the tile level.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-red-500" />
                Wall Transitions
              </h3>
              <p className="text-zinc-400">
                The most neglected area on Florida roofs. We install step or pan flashings that extend behind your stucco — not on top of it.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Home className="w-6 h-6 text-red-500" />
                Chimney Flashings
              </h3>
              <p className="text-zinc-400">
                Full step flashing, counter flashing, and cricket installation where needed.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-500" />
                Ridge & Hip Flashings
              </h3>
              <p className="text-zinc-400">
                Mechanically fastened, not just mortar-set.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-red-500" />
                Drip Edge & Rake Flashings
              </h3>
              <p className="text-zinc-400">
                Protecting fascia and directing water into gutters.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <ThermometerSun className="w-6 h-6 text-red-500" />
                Skylight Flashings
              </h3>
              <p className="text-zinc-400">
                Proper integration with both underlayment and tile.
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border-l-4 border-red-600 rounded-xl p-8">
            <p className="text-xl text-zinc-300 italic leading-relaxed">
              "Installing proper flashings and using the correct foam adhesive adds to the initial cost — but it
              can double your roof's lifespan and dramatically increase your wind rating. A roof that would fail
              at 25 years can last 50+ years. A roof rated for 100 mph can be rated for 225 mph. The difference
              is in the details."
            </p>
          </div>
        </div>
      </section>

      {/* Dual License Advantage */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Advantage
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Roof-to-Wall Transitions Fail — And Why We Can Fix Them
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Here's where most tile roof installations go wrong: the roof-to-wall transition.
            </p>

            <p>
              In South Florida, nearly every home has stucco exterior walls. When your roof meets those walls,
              proper flashing requires the metal to extend BEHIND the stucco — not just butt up against it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-950 border border-red-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                The Problem
              </h3>
              <p className="text-zinc-300 mb-4">
                Most roofing contractors install flashings that terminate at or under the stucco surface. Over time:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• The sealant fails</li>
                <li>• Water wicks behind the stucco</li>
                <li>• The wall structure rots from the inside</li>
                <li>• Leaks appear far from the actual entry point</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Why Other Roofers Can't Fix It</h3>
              <p className="text-zinc-300">
                Properly addressing a roof-to-wall transition often requires cutting into and repairing the stucco.
                That's not roofing work — that's general contracting work. And most roofers only hold a roofing
                license (CCC).
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <BadgeCheck className="w-7 h-7 text-red-500" />
              Our Solution
            </h3>
            <p className="text-zinc-300 mb-6">
              We hold both a General Contractor license (CGC-1526236) AND a Roofing Contractor license (CCC-1331464).
              When we install or repair a tile roof, we can:
            </p>
            <ul className="space-y-3 text-zinc-300 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Cut back stucco to install proper through-wall flashing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Integrate flashing with the building's moisture barrier</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Repair and refinish stucco to match</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Ensure water is directed OUT, not trapped behind your walls</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-white">
              One contractor. Complete solution. No shortcuts at the most critical detail.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <div className="max-w-6xl mx-auto px-4">
        <MidPageCTA headline="Get a Free Tile Roof Estimate" subtext="Concrete or clay — find out what a tile roof replacement costs for your home." />
      </div>

      {/* Tile Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tile Roofing Options for South Florida Homes
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
            We install and service all major tile types — and help you choose the right material for your home,
            budget, and aesthetic.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Concrete Tile</h3>
              <ul className="space-y-3 text-zinc-400">
                <li>• Most popular choice in South Florida</li>
                <li>• Versatile profiles: flat, low-profile, high-profile (barrel)</li>
                <li>• 30-50 year lifespan with proper installation</li>
                <li>• Cost-effective compared to clay</li>
                <li>• Available in hundreds of colors and blends</li>
              </ul>
              <p className="text-sm text-zinc-500 italic mt-4">
                Note: Higher water absorption — proper flashings are critical
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clay Tile</h3>
              <ul className="space-y-3 text-zinc-400">
                <li>• Premium option with 50-100 year potential lifespan</li>
                <li>• Superior color retention (won't fade)</li>
                <li>• Lower water absorption than concrete</li>
                <li>• Classic Spanish/Mediterranean aesthetic</li>
                <li>• Lighter weight than concrete (less structural load)</li>
              </ul>
              <p className="text-sm text-red-500 italic mt-4">
                Best choice for long-term value
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Composite (Synthetic) Tile</h3>
              <ul className="space-y-3 text-zinc-400">
                <li>• Engineered for Florida's demands</li>
                <li>• Class 4 impact rating (hail resistant)</li>
                <li>• Lightweight — no structural reinforcement needed</li>
                <li>• 50-year warranties available</li>
                <li>• Mimics the look of clay, slate, or shake</li>
                <li>• Miami-Dade NOA approved for HVHZ</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 text-center">
            <p className="text-lg text-zinc-300">
              All tile types require the same attention to flashings, foam adhesive application, underlayment,
              and installation detail. The tile material matters — but how it's installed matters more.
            </p>
          </div>
        </div>
      </section>

      {/* Underlayment & Ventilation Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The Hidden Layers
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Your Underlayment Is the Real Waterproofing — We Protect It
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              The tiles on your roof aren't watertight. They're designed to shed most water, but moisture still
              gets underneath — especially during Florida's wind-driven rains.
            </p>

            <p>
              Your underlayment is what actually keeps water out of your home. That's why protecting it is critical.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">What Destroys Underlayment:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Droplets className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Water Exposure</h4>
                  <p className="text-zinc-400 text-sm">
                    Without proper flashings, water flows directly onto underlayment instead of staying on top of tiles
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ThermometerSun className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Thermal Shock</h4>
                  <p className="text-zinc-400 text-sm">
                    Your tile surface can hit 160°F. Without proper ventilation, your attic traps that heat, cooking the underlayment from both sides
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">UV Exposure</h4>
                  <p className="text-zinc-400 text-sm">
                    Gaps in tile coverage expose underlayment to direct sun, accelerating breakdown
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Age</h4>
                  <p className="text-zinc-400 text-sm">
                    Even with perfect installation, underlayment needs replacement every 20-25 years (tiles can often be reset on new underlayment)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Approach:</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Premium self-adhered underlayment systems (not just felt paper)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Proper attic ventilation to reduce thermal shock</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Complete flashing coverage to minimize water contact</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Installation methods that protect underlayment during and after tile setting</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-300">
              <span className="font-semibold text-white">Connection to Building Envelope Philosophy:</span> Chris Porosky,
              our owner and certified Residential Energy Rater, designed our installation approach based on how heat and
              moisture actually move through a roof system. It's not just about putting tiles on — it's about engineering
              a system that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* HVHZ Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Tile Roofing in the High Velocity Hurricane Zone
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Broward County is one of only two counties in Florida designated as a High Velocity Hurricane Zone.
            This means stricter requirements for every aspect of your tile roof:
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Wind className="w-7 h-7 text-red-500" />
              HVHZ Tile Requirements We Address:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-2">Product Approval</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  All tiles must have valid Florida Product Approval or Miami-Dade NOA
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Attachment Methods</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  HVHZ requires specific mechanical fastening or adhesive systems (mortar-set alone is not sufficient)
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Foam Adhesive Specifications</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Your permit specifies exact foam patty size and application pattern. We verify compliance through physical testing.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Wind Uplift Calculations</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  We calculate required attachment based on your roof's zones per RAS 127
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Underlayment Standards</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Minimum 40-mil self-adhered underlayment for single-ply systems
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Flashing Requirements</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  All flashings must meet Chapter 15 (HVHZ) of Florida Building Code
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Re-nailing</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Existing roof decks must be re-nailed to current HVHZ standards during replacement
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Why This Matters:</h3>
            <p className="text-zinc-300">
              A tile roof installed to "standard" Florida code may not pass inspection in Broward County. And a roof
              that passes a 5-minute inspection may not survive a major storm if the crew cut corners after the
              inspector left. We work in the HVHZ daily, verify our work through physical testing, and build roofs that actually perform.
            </p>
          </div>
        </div>
      </section>

      {/* Tile Roof Services */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Our Tile Roofing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tile Roof Replacement</h3>
              <p className="text-zinc-400 text-sm">
                Complete tear-off and reinstallation with proper flashings, verified foam adhesive application,
                premium underlayment, and HVHZ-compliant attachment. Full photo documentation included.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tile Roof Repair</h3>
              <p className="text-zinc-400 text-sm">
                Cracked tiles, loose ridge caps, failed flashings, leak diagnosis. We fix the problem — not just the symptom.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Underlayment Replacement (Tile Reset)</h3>
              <p className="text-zinc-400 text-sm">
                When your tiles are still good but your underlayment has failed, we remove tiles, install new
                underlayment and flashings, and reset your existing tiles.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <HardHat className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flashing Upgrades</h3>
              <p className="text-zinc-400 text-sm">
                If your roof was installed without proper flashings, we can add them — extending your roof's life
                without full replacement.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Roof-to-Wall Transition Repair</h3>
              <p className="text-zinc-400 text-sm">
                Our specialty. We cut back stucco, install proper through-wall flashing, and repair the wall finish.
                Most roofers can't do this.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tile Roof Inspection</h3>
              <p className="text-zinc-400 text-sm">
                Comprehensive evaluation of tiles, flashings, underlayment condition, and ventilation. We'll tell you
                exactly what your roof needs — and what to look for if you get other bids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Common Tile Roof Problems in South Florida
          </h2>

          <div className="space-y-4">
            {[
              {
                problem: "Leaks at walls and chimneys",
                cause: "Missing or improperly installed step/pan flashings",
                fix: "Install proper through-wall flashings with stucco integration"
              },
              {
                problem: "Valley leaks",
                cause: "Relying on underlayment alone, no valley metal installed",
                fix: "Install valley flashing that extends under tiles on both sides"
              },
              {
                problem: "Tiles blowing off in storms",
                cause: "Inadequate foam adhesive — wrong patty size or too few application points",
                fix: "Proper foam application per permit specs, physically verified by project managers"
              },
              {
                problem: "Cracked and broken tiles",
                cause: "Foot traffic, thermal expansion, improper fastening, storm damage",
                fix: "Replace damaged tiles with matching profiles; assess if pattern indicates deeper issues"
              },
              {
                problem: "Ridge/hip cap failure",
                cause: "Mortar-only installation, inadequate fastening",
                fix: "Mechanically fasten with proper ridge flashing; mortar for weather seal only"
              },
              {
                problem: "Early underlayment failure",
                cause: "Water exposure from missing flashings, thermal shock from poor ventilation",
                fix: "Address root cause (flashings, ventilation), then reset tiles on new underlayment"
              },
              {
                problem: "Efflorescence (white residue on concrete tiles)",
                cause: "Natural calcium deposits from concrete curing",
                fix: "Usually cosmetic and fades over time; can be cleaned if persistent"
              }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
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
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Homeowners Trust All Phase for Tile Roofing
          </h2>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 my-6">
              <img src="/tri-alliance-logo.jpg" alt="TRI Alliance Florida High Wind Certified" width="80" height="80" loading="lazy" decoding="async" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">TRI Alliance Florida High Wind Certified</h3>
                <p className="text-gray-400 text-sm">All Phase Construction USA holds the TRI Alliance Florida High Wind Certification — the tile roofing industry's highest credential for hurricane-zone installation. Certified through February 2028, our team installs concrete and clay tile to the code-approved standards of the Tile Roofing Industry Alliance, founded in 1971.</p>
              </div>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proper Flashings — Always</h3>
              <p className="text-zinc-400 text-sm">
                We install flashings at every penetration, valley, wall, and edge. No shortcuts. No cement patches where metal belongs.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Foam Adhesive Installation</h3>
              <p className="text-zinc-400 text-sm">
                Our project managers physically break cured tiles to verify foam patty size and adhesion. Photos show application — we prove performance.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Full Photo Documentation</h3>
              <p className="text-zinc-400 text-sm">
                We photograph foam application, flashings, underlayment — everything that gets covered up. You'll have proof of what's on your roof.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dual Licensed (GC + CCC)</h3>
              <p className="text-zinc-400 text-sm">
                We can address roof-to-wall transitions completely — including cutting and repairing stucco. Most roofers legally can't.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">HVHZ Experts</h3>
              <p className="text-zinc-400 text-sm">
                We work in Broward County's High Velocity Hurricane Zone daily. Code compliance isn't a challenge — it's our standard.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">20+ Years, 2,500+ Projects</h3>
              <p className="text-zinc-400 text-sm">
                We've installed, repaired, and replaced tile roofs across South Florida for two decades. We've seen every problem and solved it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tile Roofing Services in Broward & Palm Beach Counties
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <p className="text-xl text-zinc-400">
              Boca Raton • Deerfield Beach • Pompano Beach • Fort Lauderdale • Coral Springs • Parkland •
              Delray Beach • Boynton Beach • West Palm Beach • Lighthouse Point • Hillsboro Beach & surrounding areas
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Schedule Your Free Tile Roof Inspection
          </Link>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Tile Roofing FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does a tile roof last in Florida?",
                a: "Tile itself can last 50-100 years (clay) or 30-50 years (concrete). However, the underlayment typically needs replacement every 20-25 years — and roofs installed without proper flashings often fail much earlier. With proper flashings, correct foam application, and quality installation, your tile roof should last 50+ years before needing major work."
              },
              {
                q: "Why do so many tile roofs in Florida leak within 10-15 years?",
                a: "The vast majority of tile roofs in Florida are installed without adequate flashings. Roofers rely on underlayment alone to keep water out, but that was never its intended purpose. Without flashings directing water away from vulnerable areas, the underlayment breaks down prematurely."
              },
              {
                q: "What is foam adhesive and why does it matter?",
                a: "Foam adhesive (polyurethane foam) is used to attach tiles to the roof. The size of each foam patty and the application pattern directly determine your roof's wind rating. The same tile can be rated for 100 mph or 225 mph depending on how much foam is used. Many contractors — especially those using subcontractors — cut corners on foam to save money."
              },
              {
                q: "How do I know if my roofer used the correct foam adhesive?",
                a: "Ask for photos of the foam application during installation, and request to see the physical permit which specifies the required foam patty size. If your roofer won't provide documentation, that's a red flag. City inspectors are typically on-site for only about five minutes — they can't catch everything. We go further: our project managers physically break installed tiles to verify foam patty size and curing."
              },
              {
                q: "What's the difference between concrete and clay tile?",
                a: "Clay tiles are more expensive but last longer (50-100 years vs. 30-50), retain color better, and absorb less water. Concrete tiles are more affordable and come in more profile options. Both require the same attention to flashings, foam adhesive, and installation quality."
              },
              {
                q: "Can you add flashings to an existing tile roof?",
                a: "Often, yes. If your roof was installed without proper flashings but the underlayment is still in decent condition, we can add flashings to extend the roof's life. This is significantly less expensive than full replacement."
              },
              {
                q: "What is a \"tile reset\" or underlayment replacement?",
                a: "When your tiles are still in good condition but your underlayment has failed, we can remove the tiles, install new underlayment and flashings, and reset your existing tiles. This costs less than a full replacement with new tiles."
              },
              {
                q: "Why do you need a general contractor license for tile roofing?",
                a: "Properly flashing a tile roof often requires work on the stucco walls — cutting back stucco, installing through-wall flashing, and repairing the finish. That's not roofing work; it's general contracting. Our dual license means we can do it all without subcontractors."
              },
              {
                q: "What's different about tile roofing in the HVHZ (High Velocity Hurricane Zone)?",
                a: "Broward and Miami-Dade counties have the strictest roofing codes in America. Tile attachment methods, foam specifications, product approvals, underlayment standards, and inspection requirements are all more demanding than the rest of Florida. A roof that passes inspection elsewhere may fail here."
              },
              {
                q: "How do I know if my tile roof has proper flashings?",
                a: "Look at the detail areas: where roof meets walls, around pipes and vents, in valleys, around chimneys. If you see cement, caulk, or gaps instead of metal flashings, your roof likely has a problem. We offer free inspections to assess your roof's flashing situation."
              },
              {
                q: "Is it worth paying more for proper flashings and foam adhesive?",
                a: "Absolutely. Proper installation can double your roof's lifespan — from 25 years to 50+ — and dramatically increase your wind rating. The additional upfront cost is a fraction of what you'd spend on early replacement, water damage repairs, or storm damage claims."
              },
              {
                q: "How much does a tile roof cost in South Florida?",
                a: "Tile roofs typically range from $15,000 to $50,000+ depending on size, tile type, complexity, and detail work required. Roofs with proper flashings and documented foam application cost more initially but last significantly longer and perform better in storms. Use our free Roof Cost Calculator for an estimate, or schedule an inspection for accurate pricing."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Explore Other Roofing Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/shingle-roofing/" className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-2">Shingle Roofing</h3>
              <p className="text-sm text-zinc-400">Architectural asphalt shingles rated for HVHZ wind speeds.</p>
            </Link>
            <Link to="/metal-roofing/" className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-2">Metal Roofing</h3>
              <p className="text-sm text-zinc-400">Standing seam metal for superior hurricane performance.</p>
            </Link>
            <Link to="/flat-roofing/" className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-2">Flat Roofing</h3>
              <p className="text-sm text-zinc-400">TPO, PVC & modified bitumen for low-slope applications.</p>
            </Link>
            <Link to="/roof-replacement-process/" className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-2">Replacement Process</h3>
              <p className="text-sm text-zinc-400">Step-by-step guide to your South Florida roof replacement.</p>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link to="/pricing-guide/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Pricing Guide</h3>
              <p className="text-sm text-zinc-400">Detailed cost breakdowns by material and roof size.</p>
            </Link>
            <Link to="/roof-repair/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Roof Repair</h3>
              <p className="text-sm text-zinc-400">Expert tile roof repair and maintenance services.</p>
            </Link>
            <Link to="/residential-roofing/" className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-1">Residential Roofing</h3>
              <p className="text-sm text-zinc-400">Complete home roofing services overview.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See What Your Tile Roof Is Really Missing?
          </h2>

          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Schedule a free inspection. We'll show you exactly where your roof has proper flashings — and where
            it doesn't. Whether you hire us or not, you'll leave knowing what to look for and how to hold any
            roofer accountable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Tile Roof Inspection
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
              <span>Free Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Flashing Assessment Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      <RelatedBlogResources
        sectionTitle="Tile Roofing Resources"
        sectionIntro="Learn more about tile roof costs, maintenance, and how tile performs in South Florida's hurricane zone."
        blogPosts={[
          {
            title: "Metal Roof vs Tile Roof: South Florida Hurricanes",
            url: "/blog/metal-roof-vs-tile-roof-south-florida-hurricanes",
            excerpt: "Compare how metal and tile roofing systems perform against hurricanes, salt air, and extreme heat in South Florida's demanding climate."
          },
          {
            title: "Roof Replacement Cost in Broward County (2026 Guide)",
            url: "/blog/roof-replacement-cost-broward-county-2026",
            excerpt: "Understand current pricing for tile roof replacement, including material costs, labor, and permit requirements specific to Broward County."
          },
          {
            title: "How Often Should I Replace My Roof in South Florida?",
            url: "/blog/how-often-should-i-replace-my-roof-in-south-florida",
            excerpt: "Learn about tile roof lifespan in South Florida's climate and what factors affect when you'll need a replacement."
          },
          {
            title: "What Makes a Roof Hurricane Resistant?",
            url: "/blog/what-makes-a-roof-hurricane-resistant",
            excerpt: "Discover the key features that make tile roofs one of the most hurricane-resistant options, including proper installation techniques and HVHZ compliance."
          }
        ]}
      />
    </div>
    </>
  );
}
