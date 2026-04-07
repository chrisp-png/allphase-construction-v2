import { useEffect } from 'react';
import ServicePageEnhancements from '../components/ServicePageEnhancements';
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
  DollarSign,
  Zap,
  Eye
} from 'lucide-react';
import SEO from '../components/SEO';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';
import RelatedBlogResources from '../components/RelatedBlogResources';
import { generateBreadcrumbSchema } from '../utils/enhancedSchema';
import { generateLocalBusinessSchema, generateServiceSchema } from '../utils/seoSchemas';

export default function ShingleRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageUrl = 'https://allphaseconstructionfl.com/shingle-roofing';
  const pageDescription = 'Asphalt shingle roofing in South Florida. Premium underlayments, Class 4 impact resistance. Free inspection. Call (754) 227-5605.';

  const localBusinessSchema = generateLocalBusinessSchema(pageUrl);
  const serviceSchema = generateServiceSchema(
    'Shingle Roofing Installation',
    pageDescription,
    pageUrl
  );


  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
    { name: 'Shingle Roofing', url: 'https://allphaseconstructionfl.com/shingle-roofing' }
  ]);

  const combinedSchema = [localBusinessSchema, serviceSchema, breadcrumbSchema];

  return (
    <>
            <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Shingle Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Shingle Roofing Done Right — With Documentation That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Saves You Money on Insurance
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            Most shingle roofs in South Florida are installed to minimum code — then forgotten. We upgrade underlayments, address ventilation, and document everything during installation. That documentation translates directly into insurance discounts you won't get from a typical roofer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Free Shingle Roof Consultation
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

      {/* When Shingle Roofing Requires Professional Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Shingle Roofing Requires Professional Inspection
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Shingle roofing systems require inspection-based evaluation due to age-related material degradation and concealed fastening conditions. Surface appearance alone may not accurately reflect remaining service life, wind resistance, or underlying attachment integrity.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Granule loss, curling, blistering, or surface deterioration</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Fastener exposure or attachment degradation beneath intact shingles</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Leak symptoms without obvious shingle displacement or damage</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Wind uplift vulnerability in aging shingle systems</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Shingle roofs approaching or exceeding expected service life</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed">
            In these situations, a{' '}
            <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">
              diagnostic roof inspection
            </Link>
            {' '}is necessary to determine whether targeted shingle repair or full roof replacement is technically appropriate.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">20+ Years Shingle Roofing Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Dual Licensed (GC + CCC)</span>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">Wind Mitigation Documentation Included</span>
          </div>
          <div className="flex items-center gap-3">
            <Wind className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-sm md:text-base text-zinc-300">HVHZ Code Compliant</span>
          </div>
        </div>
      </section>

      {/* Featured Project Photo */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <picture>
            <source media="(max-width: 768px)" srcSet="/social-proof/new-shingle-install-boca-raton-600w.webp" />
            <source srcSet="/social-proof/new-shingle-install-boca-raton-1200w.webp" />
            <img
              src="/social-proof/new-shingle-install-boca-raton-1200w.webp"
              alt="Completed shingle roof installation in Boca Raton FL with All Phase Construction USA branded work truck - new architectural shingle roof replacement"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full max-w-5xl mx-auto rounded-lg border border-zinc-700"
            />
          </picture>
          <p className="text-sm text-zinc-400 text-center mt-2">
            Completed architectural shingle roof replacement in Boca Raton, FL
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The Real Issue
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            It's Not the Shingles — It's How They're Installed
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Shingle roofs in Florida often get dismissed as "cheap" or "not hurricane-rated." And honestly? When installed the way most contractors do it — minimum code, basic underlayment, inadequate ventilation — that criticism is fair.
            </p>

            <p className="text-xl font-semibold text-white">
              But here's what most people don't realize: properly installed shingle roofs can perform exceptionally well in South Florida's climate and storms.
            </p>

            <p>The problem isn't the material. It's the shortcuts:</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">What Most Contractors Skip:</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Upgraded Underlayment</h4>
                  <p className="text-zinc-400">
                    Code requires basic felt or synthetic underlayment. But a premium self-adhered secondary water barrier provides real protection if shingles blow off — and qualifies you for insurance discounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Proper Deck Re-Nailing</h4>
                  <p className="text-zinc-400">
                    The roof deck must be re-nailed to current HVHZ standards during replacement. Many contractors skip this step because you can't see it once the roof is on.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Ventilation Assessment</h4>
                  <p className="text-zinc-400">
                    Asphalt shingles are more susceptible to thermal shock than any other roofing material. Without proper ventilation, Florida's heat cooks shingles from above AND below — dramatically shortening their lifespan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Six-Nail Patterns</h4>
                  <p className="text-zinc-400">
                    In high-wind areas and on steep slopes, shingles require six nails instead of four. Contractors rushing through jobs often stick with four — reducing wind resistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Documentation</h4>
                  <p className="text-zinc-400">
                    When a wind mitigation inspector visits after your roof is installed, they can't see what's underneath. If your contractor didn't document the secondary water barrier, deck attachment, and other features, the inspector marks "unknown" — and you lose insurance discounts you paid for.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 mb-8">
            <p className="text-xl font-semibold text-white">
              The Result: Shingle roofs that fail in moderate storms. Premature aging from heat damage. And homeowners who paid for upgrades but can't prove it to their insurance company.
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-lg transition-colors"
          >
            Learn how we install shingle roofs differently
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Wind Mitigation Section - Highlighted */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-y-2 border-red-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            Insurance Savings
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            As a General Contractor, We Document Your Roof During Installation — Not After
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              Here's something most roofing contractors won't mention: <span className="font-semibold text-white">Florida law requires insurance companies to offer discounts for wind-resistant construction features.</span> These can save you 30-45% on the windstorm portion of your homeowners insurance — every year.
            </p>

            <p className="text-xl font-semibold text-white">
              But there's a catch: you need documentation.
            </p>
          </div>

          <div className="bg-black/40 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-yellow-500" />
              The Wind Mitigation Inspection Problem:
            </h3>

            <div className="space-y-4 text-zinc-300 mb-6">
              <p>
                After your roof is installed, a wind mitigation inspector evaluates your home using form OIR-B1-1802. They check:
              </p>

              <ul className="space-y-2 ml-6">
                <li>• Roof covering (meets Florida Building Code?)</li>
                <li>• Roof deck attachment (how is plywood attached to trusses?)</li>
                <li>• Roof-to-wall attachment (clips, straps, or toe nails?)</li>
                <li>• Secondary water resistance (peel-and-stick underlayment?)</li>
                <li>• Opening protection (hurricane shutters/windows?)</li>
                <li>• Roof shape (hip vs. gable?)</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-red-900/30 rounded-lg p-6">
              <p className="text-white font-semibold mb-3">The Problem:</p>
              <p className="text-zinc-300 mb-3">
                Once your roof is on, the inspector can't see what's underneath. If your roofer didn't provide photos and documentation of the secondary water barrier, deck re-nailing, and underlayment, the inspector is forced to check "unknown."
              </p>
              <p className="text-2xl font-bold text-red-500">
                "Unknown" = No Discount.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <p className="text-zinc-300 mb-6">
              You may have paid extra for a premium secondary water barrier. You may have had the deck re-nailed to HVHZ standards. But if you can't prove it, you don't get the discount.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Camera className="w-7 h-7 text-red-500" />
              Our Approach: Documentation Built Into the Process
            </h3>

            <p className="text-zinc-300 mb-6">
              Because we hold a General Contractor license (CGC-1526236), we can provide complete wind mitigation documentation as we install:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/40 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Photos of deck re-nailing</h4>
                <p className="text-zinc-400 text-sm">Before underlayment is applied</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Photos of secondary water barrier installation</h4>
                <p className="text-zinc-400 text-sm">Showing full coverage</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Product documentation</h4>
                <p className="text-zinc-400 text-sm">Manufacturer specs for underlayment, shingles, fasteners</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Nail pattern documentation</h4>
                <p className="text-zinc-400 text-sm">Showing proper 6-nail installation where required</p>
              </div>
            </div>

            <p className="text-xl font-semibold text-white">
              When your roof is finished, you'll have a documentation package ready for your wind mitigation inspector. No "unknowns." Maximum discounts.
            </p>
          </div>

          <div className="bg-red-950/20 border-l-4 border-red-600 rounded-xl p-8">
            <p className="text-xl text-zinc-300 italic leading-relaxed">
              "Most roofers install the roof and move on. The homeowner pays for a wind mitigation inspection a few months later, and the inspector can't verify what's under the shingles. The homeowner loses hundreds of dollars per year in insurance discounts they should have received."
            </p>
          </div>
        </div>
      </section>

      {/* Thermal Shock Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Florida Heat Reality
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Your Shingle Roof Is Aging Faster Than It Should
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Asphalt shingles are the most common roofing material in America — but they face a unique challenge in South Florida.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">The Science:</h3>
            <div className="space-y-4 text-zinc-300">
              <p>
                On a sunny day, your shingle surface can reach 160°F or higher. The shingles absorb this heat and radiate it downward into your attic.
              </p>
              <p>
                Without proper ventilation, that attic becomes a furnace — often exceeding 140°F.
              </p>
              <p className="text-xl font-semibold text-white">
                Now your shingles are being cooked from both sides.
              </p>
              <p>
                This is called <span className="font-semibold text-white">thermal shock</span>, and it's even worse for asphalt shingles than for tile roofs:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Effects of Thermal Shock:
              </h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• The asphalt dries out and becomes brittle</li>
                <li>• Shingles crack and curl at the edges</li>
                <li>• Granules loosen and wash away (exposing asphalt to UV damage)</li>
                <li>• Adhesive strips that hold shingles together fail</li>
                <li>• Underlayment degrades prematurely</li>
              </ul>
            </div>

            <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 flex items-center">
              <div>
                <p className="text-white font-semibold mb-2">The Result:</p>
                <p className="text-zinc-300">
                  A shingle roof rated for 25-30 years in moderate climates may fail in 12-15 years in South Florida without proper ventilation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Our Approach:</h3>
            <p className="text-zinc-300 mb-6">
              Chris Porosky, our owner and certified Residential Energy Rater, designed our shingle installation process around how heat and moisture actually move through a roof system:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-950 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-red-500" />
                  Ventilation Assessment
                </h4>
                <p className="text-zinc-400 text-sm">
                  We evaluate your current intake (soffit vents) and exhaust (ridge vents) to ensure proper airflow
                </p>
              </div>

              <div className="bg-zinc-950 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-500" />
                  Ventilation Upgrades
                </h4>
                <p className="text-zinc-400 text-sm">
                  If your current system is inadequate, we recommend and install additional ventilation
                </p>
              </div>

              <div className="bg-zinc-950 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  Premium Underlayment
                </h4>
                <p className="text-zinc-400 text-sm">
                  We use high-temp rated underlayment systems designed for Florida's extreme conditions
                </p>
              </div>

              <div className="bg-zinc-950 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <ThermometerSun className="w-5 h-5 text-red-500" />
                  Proper Attic Insulation
                </h4>
                <p className="text-zinc-400 text-sm">
                  We check that heat isn't being trapped against the roof deck
                </p>
              </div>
            </div>

            <p className="text-xl font-semibold text-white mt-6">
              The goal: Keep your attic temperature as close to outside ambient temperature as possible. This dramatically extends shingle lifespan and reduces your cooling costs.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <div className="max-w-6xl mx-auto px-4">
        <MidPageCTA headline="Get a Free Shingle Roof Estimate" subtext="See how much a new architectural shingle roof costs for your home — no obligation." />
      </div>

      {/* Tamko Titan XT Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Recommended Shingle
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why We Install Tamko Titan XT — The Shingle That Was Redesigned for Real Performance
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              We've installed thousands of shingle roofs over 20+ years. We've seen how different products perform through Florida's hurricanes, heat, and humidity. And we've watched the industry evolve.
            </p>

            <p>
              When Tamko released the Titan XT, we paid attention. This isn't a marketing refresh — it's a genuinely redesigned shingle built on contractor feedback.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950/40 to-zinc-950 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">What Makes Titan XT Different:</h3>

            <div className="space-y-6">
              <div className="bg-black/40 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">160 MPH Wind Warranty</h4>
                <p className="text-zinc-300">
                  Most architectural shingles offer 110-130 mph wind warranties — and some require special 6-nail installation to reach those ratings. Titan XT achieves 160 mph wind protection with standard 4-nail installation using Tamko starter strips. That's an industry first.
                </p>
              </div>

              <div className="bg-black/40 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">AnchorLock™ Technology</h4>
                <p className="text-zinc-300">
                  A reinforced poly-fabric layer is applied through the common bond area of the shingle. This creates an anchor for nails to embed in, locking them tightly to the deck — not just the shingle.
                </p>
              </div>

              <div className="bg-black/40 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">Rapid Fire Zone™ — 5x Larger Nailing Zone</h4>
                <p className="text-zinc-300">
                  Traditional architectural shingles have a narrow nailing zone. Miss it by half an inch, and you've compromised wind resistance. Titan XT's nailing zone is up to 500% larger than previous generations. This means faster installation and fewer mistakes.
                </p>
              </div>

              <div className="bg-black/40 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">Advanced Fusion™ Sealant</h4>
                <p className="text-zinc-300">
                  A polymer-modified asphalt sealant bonds shingles together more aggressively than standard products. Combined with AnchorLock, this keeps shingles locked down through thermal cycling and high winds.
                </p>
              </div>

              <div className="bg-black/40 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">Class 3 Impact Rating</h4>
                <p className="text-zinc-300">
                  Titan XT meets UL 2218 Class 3 impact resistance standards — protecting against hail damage without requiring an upgrade to a specialty product.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Real-World Performance:</h3>
            <p className="text-zinc-300">
              After Hurricane Ian, contractors reported Titan XT roofs had "no issues whatsoever, even when neighboring roofs were blown off." That's the kind of performance we want for our customers.
            </p>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
            <p className="text-zinc-300">
              <span className="font-semibold text-white">Note:</span> We install other quality shingle brands when appropriate for budget or specific applications. But for homeowners who want maximum performance, Titan XT is our recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Water Barrier Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Layer That Actually Saves Your Home When Shingles Blow Off
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Here's something most homeowners don't understand: <span className="font-semibold text-white">shingles are designed to shed water, not stop it completely.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Standard Underlayment<br />(What Code Requires)</h3>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Code requires #30 felt or equivalent synthetic underlayment. This provides basic water resistance during installation and minor protection if a few shingles are damaged.
                </p>
                <p>
                  But in a major storm, when shingles are torn off in large sections, standard underlayment won't save your home from water damage.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Secondary Water Barrier<br />(What We Install)</h3>
              <div className="space-y-4 text-zinc-300">
                <p>
                  A secondary water barrier — also called "peel and stick" underlayment — is a self-adhered modified bitumen membrane. It seals around nail penetrations, bonds directly to the roof deck, and provides genuine waterproofing even if the shingles above are completely removed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-red-500" />
              The Insurance Connection:
            </h3>
            <div className="space-y-4 text-zinc-300">
              <p>
                Secondary water resistance is one of the categories on the Florida wind mitigation inspection form. Homes with verified secondary water barriers receive an average 8% discount on the windstorm portion of their insurance premium.
              </p>
              <p className="text-xl font-semibold text-white">
                But remember: if your contractor didn't document the installation, you can't prove you have it. The inspector marks "unknown," and you don't get the discount.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Our Approach:</h3>
            <p className="text-zinc-300">
              We install premium self-adhered underlayment on every shingle roof — and we photograph the installation before the shingles go on. When you need your wind mitigation inspection, you'll have documentation proving your secondary water barrier is in place.
            </p>
          </div>
        </div>
      </section>

      {/* HVHZ Compliance */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Shingle Roofing in the High Velocity Hurricane Zone
          </h2>

          <p className="text-xl text-zinc-300 mb-12 max-w-4xl">
            Broward County is one of only two counties in Florida designated as a High Velocity Hurricane Zone. Shingle roofs installed here must meet stricter requirements than the rest of the state.
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Wind className="w-7 h-7 text-red-500" />
              HVHZ Shingle Requirements:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-2">Wind Rating</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Shingles must be rated for your specific wind zone (typically 150-180 mph ultimate design wind speed in Broward)
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Product Approval</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  All shingles must have valid Florida Product Approval or Miami-Dade NOA
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Nail Pattern</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  4 nails minimum per shingle; 6 nails required on slopes steeper than 21:12 or in high-wind zones
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Fastener Type</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Ring-shank nails required where ultimate design wind speed exceeds 150 mph
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Deck Attachment</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Roof sheathing must be re-nailed to current HVHZ standards during replacement
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Drip Edge</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Required at all eaves and rakes
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
            <p className="text-zinc-300">
              A shingle roof that passes inspection elsewhere in Florida may not meet HVHZ requirements. And a roof that technically passes inspection but was installed to minimum code won't perform as well as one installed with proper materials and techniques.
            </p>
            <p className="text-white font-semibold mt-4">
              We work in the HVHZ daily. We know the code requirements, the inspection process, and what it takes to build a shingle roof that actually performs.
            </p>
          </div>
        </div>
      </section>

      {/* Shingle Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shingle Options for South Florida Homes
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
            We install quality architectural shingles designed for Florida's climate and wind requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-950/40 to-zinc-950 border-2 border-red-900/50 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Architectural Shingles (Recommended)</h3>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• Our recommendation: Tamko Titan XT (160 mph wind warranty)</li>
                <li>• Also available: GAF Timberline HDZ, Owens Corning Duration</li>
                <li>• Multi-layer dimensional appearance</li>
                <li>• Higher wind ratings than 3-tab</li>
                <li>• 30-50 year manufacturer warranties</li>
                <li>• Class 3 or Class 4 impact ratings available</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Standard Architectural Shingles</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Quality laminated construction</li>
                <li>• 110-130 mph wind ratings</li>
                <li>• Good option for budget-conscious homeowners</li>
                <li>• 25-30 year manufacturer warranties</li>
                <li>• Variety of colors and styles</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3-Tab Shingles (Limited Applications)</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Flat, uniform appearance</li>
                <li>• Lower wind ratings (typically 60-70 mph)</li>
                <li>• Shorter lifespan than architectural shingles</li>
                <li>• <span className="font-semibold text-white">Not recommended for primary residences in HVHZ</span></li>
                <li>• May be appropriate for utility structures or covered areas</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Impact-Resistant Shingles</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>• Class 4 impact rating (highest available)</li>
                <li>• Designed to withstand large hail</li>
                <li>• May qualify for additional insurance discounts</li>
                <li>• Options: Tamko StormFighter IR, GAF Timberline AS II</li>
                <li>• Good choice for exposed roof areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 text-center">
            <p className="text-lg text-zinc-300">
              We always recommend architectural shingles rated for at least 130 mph winds for primary residences in South Florida. Premium options like Titan XT provide even better performance and warranty coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Deck Re-Nailing Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Hidden Work That Determines Whether Your Roof Survives
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 mb-12 max-w-4xl">
            <p>
              The plywood or OSB sheathing that forms your roof deck is attached to the trusses or rafters with nails. Over time — and especially in older homes — these nails can work loose, corrode, or simply be inadequate for current code requirements.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Why Deck Re-Nailing Matters:</h3>
            <p className="text-zinc-300">
              In a hurricane, wind doesn't just push on your roof — it creates uplift pressure that tries to pull the roof off from below. If your deck isn't properly attached, the shingles may stay in place while entire sections of plywood tear away.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">HVHZ Requirements:</h3>
            <p className="text-zinc-300 mb-4">
              During a roof replacement in Broward County, the existing roof deck must be re-nailed to current standards:
            </p>
            <ul className="space-y-2 text-zinc-400 ml-6">
              <li>• 8d ring-shank nails</li>
              <li>• Specific spacing patterns based on roof zone</li>
              <li>• Supplemental fasteners in high-stress areas</li>
            </ul>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">The Documentation Problem:</h3>
            <p className="text-zinc-300 mb-4">
              Once your new shingles are installed, no one can see whether the deck was re-nailed properly. The wind mitigation inspector evaluates "roof deck attachment" — but they can only verify it if documentation exists.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Our Approach:</h3>
            <p className="text-zinc-300">
              We photograph the deck re-nailing process before underlayment is applied. This documentation proves your roof deck attachment meets the highest category on the wind mitigation form — potentially qualifying you for up to 35% discount on the windstorm portion of your insurance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/30 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Even If You Don't Hire Us:</h3>
            <p className="text-zinc-300">
              Whoever installs your shingle roof, ask for photos of the deck re-nailing before underlayment is applied. If they won't provide documentation, ask yourself what else they're not willing to prove.
            </p>
          </div>
        </div>
      </section>

      {/* Shingle Roof Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Our Shingle Roofing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shingle Roof Replacement</h3>
              <p className="text-zinc-400 text-sm">
                Complete tear-off and reinstallation with premium underlayment, proper ventilation assessment, HVHZ-compliant deck re-nailing, and full documentation for wind mitigation inspection.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shingle Roof Repair</h3>
              <p className="text-zinc-400 text-sm">
                Wind damage, leaks, missing shingles, flashing failures. We diagnose the actual problem and fix it properly — not just patch over symptoms.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ventilation Assessment & Upgrades</h3>
              <p className="text-zinc-400 text-sm">
                Evaluation of your current soffit/ridge ventilation system with recommendations for improvement. Proper ventilation extends shingle life by 30-50%.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wind Mitigation Documentation</h3>
              <p className="text-zinc-400 text-sm">
                If you need documentation for an existing roof installation, we can help assess what's verifiable and what upgrades might improve your wind mitigation rating.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Storm Damage Inspection</h3>
              <p className="text-zinc-400 text-sm">
                Free inspections after major storms to assess damage and help with insurance claims. We document everything for your claim.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Insurance Claim Assistance</h3>
              <p className="text-zinc-400 text-sm">
                We work with your insurance company to ensure proper coverage for storm damage repairs. Our documentation standards help maximize claim approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Common Shingle Roof Problems in South Florida
          </h2>

          <div className="space-y-4">
            {[
              {
                problem: "Shingles curling and lifting at edges",
                cause: "Thermal shock from inadequate ventilation; heat cooking shingles from above and below",
                fix: "Replace damaged shingles, assess and upgrade ventilation, install high-temp underlayment"
              },
              {
                problem: "Granule loss and bare spots",
                cause: "UV degradation, heat damage, normal aging accelerated by poor ventilation",
                fix: "Assess overall condition; if widespread, replacement is usually more cost-effective than repair"
              },
              {
                problem: "Leaks at walls, chimneys, or pipes",
                cause: "Flashing failure, improper original installation, sealant degradation",
                fix: "Replace flashings with proper integration; cut back stucco if needed (GC license advantage)"
              },
              {
                problem: "Shingles blowing off in moderate winds",
                cause: "Inadequate nailing pattern, failed adhesive strips, poor deck attachment",
                fix: "Repair or replace with proper nail pattern; re-nail deck to HVHZ standards"
              },
              {
                problem: "Dark streaks on roof",
                cause: "Algae growth (Gloeocapsa magma) — cosmetic but can indicate moisture retention",
                fix: "Professional cleaning; recommend algae-resistant shingles for replacement"
              },
              {
                problem: "No insurance discounts despite upgrades",
                cause: "No documentation of secondary water barrier, deck attachment, or other features",
                fix: "Assess what's verifiable; provide documentation for future wind mitigation inspections"
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
            Why Homeowners Trust All Phase for Shingle Roofing
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wind Mitigation Documentation Included</h3>
              <p className="text-zinc-400 text-sm">
                We photograph deck re-nailing, secondary water barrier installation, and nail patterns. You'll have proof for your insurance company — not "unknowns."
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <ThermometerSun className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Thermal Shock Prevention</h3>
              <p className="text-zinc-400 text-sm">
                We assess and upgrade ventilation because we understand how Florida's heat destroys shingle roofs from the inside out.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Underlayments Standard</h3>
              <p className="text-zinc-400 text-sm">
                We install self-adhered secondary water barriers, not just code-minimum felt. Real protection that also qualifies for insurance discounts.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tamko Titan XT Available</h3>
              <p className="text-zinc-400 text-sm">
                160 mph wind warranty, Class 3 impact rating, and the largest nailing zone in the industry. The shingle that performs when it matters.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dual Licensed (GC + CCC)</h3>
              <p className="text-zinc-400 text-sm">
                Structural repairs, stucco work, ventilation upgrades — we handle everything without subcontractors.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">20+ Years, 2,500+ Projects</h3>
              <p className="text-zinc-400 text-sm">
                We've installed shingle roofs across South Florida through multiple hurricane seasons. We know what lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shingle Roofing Services in Broward & Palm Beach Counties
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <p className="text-xl text-zinc-400">
              Boca Raton • Deerfield Beach • Pompano Beach • Fort Lauderdale • Coral Springs • Parkland •
              Delray Beach • Boynton Beach • West Palm Beach • Lighthouse Point • Hillsboro Beach • Coconut Creek • Margate & surrounding areas
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Schedule Your Free Shingle Roof Consultation
          </Link>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Shingle Roofing FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Are shingle roofs a good choice for South Florida hurricanes?",
                a: "Yes — when installed properly. Premium architectural shingles like Tamko Titan XT carry 160 mph wind warranties. The key factors are proper nailing patterns, deck re-nailing, and quality underlayment. Many shingle failures in storms result from installation shortcuts, not material deficiencies."
              },
              {
                q: "How long do shingle roofs last in Florida?",
                a: "With proper ventilation and premium materials, 20-30 years is realistic. Without proper ventilation, thermal shock can reduce that to 12-15 years. The underlayment and deck are often the limiting factors, not the shingles themselves."
              },
              {
                q: "What is a secondary water barrier and why does it matter?",
                a: "A secondary water barrier is a self-adhered (peel and stick) underlayment that provides waterproofing even if shingles blow off. It qualifies for approximately 8% discount on your windstorm insurance — but only if you can document that it was installed. We photograph this installation on every job."
              },
              {
                q: "How do I get insurance discounts for my roof?",
                a: "After installation, a licensed inspector performs a wind mitigation inspection (form OIR-B1-1802). They evaluate roof covering, deck attachment, secondary water resistance, and other factors. The catch: if your contractor didn't document what's under the shingles, the inspector marks \"unknown\" and you don't get the discount. We provide documentation during installation so you can prove what's there."
              },
              {
                q: "What's the difference between 4-nail and 6-nail installation?",
                a: "Standard shingle installation uses 4 nails per shingle. HVHZ code requires 6 nails per shingle on steep slopes (greater than 21:12) and in designated high-wind zones. Six-nail installation provides significantly better wind resistance. We follow code requirements and recommend 6-nail patterns when appropriate."
              },
              {
                q: "Why does ventilation matter for shingle roofs?",
                a: "Shingle surfaces can reach 160°F on sunny days. Without proper ventilation, that heat builds up in the attic and \"cooks\" the shingles from below. This thermal shock dries out the asphalt, causing cracking, curling, and premature failure. Proper ventilation can extend shingle life by 30-50%."
              },
              {
                q: "What is Tamko Titan XT and why do you recommend it?",
                a: "Titan XT is a redesigned architectural shingle with 160 mph wind warranty (using standard 4-nail installation), Class 3 impact rating, and a 500% larger nailing zone than previous generations. It was developed based on contractor feedback and performs exceptionally in Florida's conditions. It's not the only good shingle, but it's our top recommendation for performance."
              },
              {
                q: "What's involved in a roof deck re-nailing?",
                a: "During replacement, we re-nail the plywood sheathing to current HVHZ standards using 8d ring-shank nails at specific spacing patterns. This ensures the deck stays attached to the trusses during wind uplift. We photograph this work before applying underlayment so you have documentation for wind mitigation inspections."
              },
              {
                q: "Should I choose shingles or tile for my home?",
                a: "Both can work well. Tile costs more upfront but can last 50+ years. Shingles cost less but have shorter lifespans (20-30 years). Both require proper underlayment and installation. The right choice depends on your budget, aesthetic preferences, and long-term plans for the home."
              },
              {
                q: "Can you match existing shingles for a repair?",
                a: "Sometimes. Shingles fade over time, and manufacturers change color formulations. For small repairs, we source the closest match available. For large repairs, we may recommend replacing entire roof sections or slopes for consistent appearance."
              },
              {
                q: "Do I need a permit for shingle roof replacement?",
                a: "Yes. All roof replacements in Florida require permits and inspections. We handle all permitting as part of our service. The permit process ensures code compliance and creates a record that helps with insurance verification."
              },
              {
                q: "How much does a shingle roof cost in South Florida?",
                a: "Quality architectural shingle roofs typically range from $8,000 to $20,000+ depending on size, complexity, materials, and upgrades. Premium options like Titan XT with enhanced underlayment and ventilation upgrades cost more but provide better performance and insurance benefits. Use our free Roof Cost Calculator for a preliminary estimate, or schedule a consultation for accurate pricing."
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

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Explore Other Roofing Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/tile-roofing/" className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-colors group">
              <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors mb-2">Tile Roofing</h3>
              <p className="text-sm text-zinc-400">Concrete & clay tile systems for lasting beauty and durability.</p>
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
              <p className="text-sm text-zinc-400">Emergency and scheduled shingle repairs.</p>
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
            Ready for a Shingle Roof That's Actually Built for South Florida?
          </h2>

          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation. We'll explain the upgrades that make a real difference — the ventilation, the underlayment, the documentation that saves you money on insurance. Whether you hire us or not, you'll understand what to look for.
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
              <span>Documentation Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Insurance Discount Expertise</span>
            </div>
          </div>
        </div>
      </section>

      <RelatedBlogResources
        sectionTitle="Shingle Roofing Resources"
        sectionIntro="Understand shingle options, compare costs, and learn what to look for in a quality shingle installation."
        blogPosts={[
          {
            title: "Metal Roof vs Shingles in Florida (2026)",
            url: "/blog/metal-roof-vs-shingles-florida-2026",
            excerpt: "Compare asphalt shingles with metal roofing to understand which material offers the best value for your South Florida home."
          },
          {
            title: "Architectural Shingles vs Three-Tab Shingles",
            url: "/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles",
            excerpt: "Learn the key differences between architectural and three-tab shingles, including cost, durability, and aesthetic appeal."
          },
          {
            title: "Roof Replacement Cost in Broward County (2026 Guide)",
            url: "/blog/roof-replacement-cost-broward-county-2026",
            excerpt: "Get accurate pricing information for shingle roof replacement in Broward County, including material and labor costs."
          },
          {
            title: "What Is Roof Underlayment and Why Does It Matter?",
            url: "/blog/what-is-roof-underlayment-and-why-does-it-matter",
            excerpt: "Understand the critical role underlayment plays in protecting your shingle roof from water damage and extending its lifespan."
          }
        ]}
      />
      <ServicePageEnhancements serviceName="Shingle Roofing" serviceSlug="shingle-roofing" />

    </div>
    </>
  );
}
