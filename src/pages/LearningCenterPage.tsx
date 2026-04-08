import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calculator, DollarSign, CreditCard, BookOpen, Shield, Home, Wrench, ClipboardCheck, Building2, Sun, FileText, MapPin, FileCheck } from 'lucide-react';

const toolsAndResources = [
  {
    title: 'Roof Cost Calculator',
    href: '/roof-cost-calculator',
    icon: Calculator,
    description: 'Get an instant ballpark estimate for your roof replacement based on roof type, material, and square footage.'
  },
  {
    title: 'Pricing Guide',
    href: '/pricing-guide',
    icon: DollarSign,
    description: 'Understand what goes into the cost of a roof in South Florida — materials, labor, permits, and code compliance.'
  },
  {
    title: 'Financing Options',
    href: '/easy-payments',
    icon: CreditCard,
    description: 'Explore flexible payment plans through our FHA Title I lending partner. Make your roof affordable.'
  },
  {
    title: "Insider's Guide to Hiring a Roofer",
    href: '/downloads/Insiders-Guide-Hiring-Roofer-South-Florida.pdf',
    icon: FileText,
    description: 'Free PDF with our 15-point contractor checklist, red flags to watch for, insurance savings strategies, and buying guides for every roof type.',
    external: true
  }
];

const costAndBudgeting = [
  { title: 'Roof Replacement Cost in Deerfield Beach (2026)', href: '/roof-replacement-cost-deerfield-beach' },
  { title: 'Roof Replacement Cost in Broward County (2026 Guide)', href: '/blog/roof-replacement-cost-broward-county-2026' },
  { title: 'Roof Pricing & Financing Guide', href: '/blog/roof-pricing-financing-guide' },
  { title: 'The Cost of Waiting: Why Delaying Roof Replacement Hurts Your Wallet', href: '/blog/the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet' }
];

const hurricanePreparedness = [
  { title: 'What Makes a Roof Hurricane Resistant?', href: '/blog/what-makes-a-roof-hurricane-resistant' },
  { title: 'Wind Mitigation for South Florida Roofs', href: '/blog/wind-mitigation-roof-south-florida' },
  { title: 'Do I Need a Roof Inspection After a Storm?', href: '/blog/do-i-need-a-roof-inspection-after-a-storm' }
];

const roofingMaterials = [
  { title: 'Metal Roof vs Shingles in Florida (2026)', href: '/blog/metal-roof-vs-shingles-florida-2026' },
  { title: 'Metal Roof vs Tile Roof: South Florida Hurricanes', href: '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes' },
  { title: 'The Pros and Cons of Flat Roofs for Florida Homes', href: '/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes' },
  { title: 'Architectural Shingles vs Three-Tab Shingles', href: '/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles' },
  { title: 'What Is Roof Underlayment and Why Does It Matter?', href: '/blog/what-is-roof-underlayment-and-why-does-it-matter' },
  { title: 'How to Choose Roofing Materials for Large-Scale Projects', href: '/blog/how-to-choose-roofing-materials-for-large-scale-projects' }
];

const roofReplacementRepair = [
  { title: 'Boca Raton Roof Replacement Timeline: Day-by-Day Guide', href: '/boca-raton-roof-replacement-timeline' },
  { title: 'Delray Beach: Roof Overlay vs Full Tear-Off', href: '/delray-beach-roof-overlay-vs-tear-off' },
  { title: 'Complete Roof Replacement Process: 10 Steps', href: '/blog/complete-roof-replacement-process-10-steps' },
  { title: 'Choosing Between Roof Repair and Full Replacement', href: '/blog/choosing-between-roof-repair-and-full-replacement' },
  { title: 'Don\'t Replace Your Roof — Restore It Instead', href: '/blog/dont-replace-your-roof-restore-it-instead' }
];

const maintenanceInspections = [
  { title: 'Pompano Beach Roof Inspection: 9 Signs You Need a New Roof', href: '/pompano-beach-roof-inspection' },
  { title: 'Professional Roof Inspection in South Florida', href: '/blog/professional-roof-inspection-south-florida' },
  { title: 'How to Spot Early Signs of Roof Damage Before It Gets Expensive', href: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive' },
  { title: 'The Importance of Proper Flashing Installation', href: '/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks' },
  { title: 'How to Protect Roof Decking from Moisture Damage', href: '/blog/how-to-protect-roof-decking-from-moisture-damage-during-construction' },
  { title: 'The Role of Roof Pitch in Water Drainage and Design', href: '/blog/the-role-of-roof-pitch-in-water-drainage-and-design' }
];

const homeownerGuides = [
  { title: 'Coral Springs Roof Permit Guide: Fees, Timelines, and HVHZ Code', href: '/coral-springs-roof-permit-guide' },
  { title: 'How to Verify a Licensed Roofing Contractor in Florida', href: '/licensed-roofing-contractor' },
  { title: 'Common Roofing Myths Homeowners Still Believe', href: '/blog/common-roofing-myths-that-homeowners-still-believe' },
  { title: 'How to Prepare Your Roof for the Real Estate Market', href: '/blog/how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home' },
  { title: 'Visualize Your New Roof with AI-Powered Tools', href: '/blog/visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview' },
  { title: 'Why Palm Beach and Broward County Building Codes Differ', href: '/blog/why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa' }
];

const commercialHOA = [
  { title: 'How to Plan Long-Term Roofing Budgets for Your Condo Association', href: '/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association' },
  { title: 'Soffit Repair in South Florida', href: '/blog/soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa' }
];

const solarEnergy = [
  { title: 'The ROI of Installing Solar Panels in Florida', href: '/blog/the-roi-of-installing-solar-panels-in-florida' },
  { title: 'How Solar Impacts Property Taxes in Florida', href: '/blog/how-solar-impacts-property-taxes-in-florida' },
  { title: 'How to Combine Solar and a New Roof for Maximum Efficiency', href: '/blog/how-to-combine-solar-and-a-new-roof-for-maximum-efficiency' },
  { title: 'What\'s the Lifespan of a Solar-Ready Roof?', href: '/blog/whats-the-lifespan-of-a-solar-ready-roof' },
  { title: 'How Climate Change Is Impacting Roofing Choices in Coastal Areas', href: '/blog/how-climate-change-is-impacting-roofing-choices-in-coastal-areas' }
];

const cityCountyGuides = [
  { title: 'Broward County Roof Replacement Guide', href: '/broward-county-roof-replacement-guide' },
  { title: 'Palm Beach County Roof Replacement Guide', href: '/palm-beach-county-roof-replacement-guide' },
  { title: 'Boca Raton Roof Replacement Guide', href: '/boca-raton-roof-replacement-guide' },
  { title: 'Roof Replacement Cost in Deerfield Beach (2026)', href: '/roof-replacement-cost-deerfield-beach' },
  { title: 'Boca Raton Roof Replacement Timeline: Day-by-Day', href: '/boca-raton-roof-replacement-timeline' },
  { title: 'Coral Springs Roof Permit Guide', href: '/coral-springs-roof-permit-guide' },
  { title: 'Pompano Beach Roof Inspection: 9 Signs You Need a New Roof', href: '/pompano-beach-roof-inspection' },
  { title: 'Delray Beach: Roof Overlay vs Tear-Off', href: '/delray-beach-roof-overlay-vs-tear-off' }
];

const materialsAndSystems = [
  { title: 'Metal Roofing Cost in Fort Lauderdale (2026)', href: '/metal-roofing-cost-fort-lauderdale' },
  { title: 'Tile Roof Replacement in Wellington (HOA + Weight Load)', href: '/tile-roof-replacement-wellington' },
  { title: 'Standing Seam Metal Roof in Jupiter (Coastal Guide)', href: '/standing-seam-metal-roof-jupiter' },
  { title: 'Flat Roof: TPO vs PVC in West Palm Beach', href: '/flat-roof-tpo-vs-pvc-west-palm-beach' },
  { title: 'Is It Time to Switch From Shingles to Metal in Plantation?', href: '/switch-from-shingles-to-metal-plantation' }
];

const stormAndHurricaneDamage = [
  { title: 'Hurricane Roof Damage Inspection in Hollywood', href: '/hurricane-roof-damage-inspection-hollywood' },
  { title: 'Wind Damage Insurance Claim in Boynton Beach (Step-by-Step)', href: '/wind-damage-insurance-claim-boynton-beach' },
  { title: 'Emergency Roof Tarp in Pembroke Pines (24-Hour Service)', href: '/emergency-roof-tarp-pembroke-pines' },
  { title: 'Hail Damage Roof Assessment in Parkland', href: '/hail-damage-roof-parkland' },
  { title: 'Storm Damage: Repair or Replace in Davie? (Decision Matrix)', href: '/storm-damage-repair-or-replace-davie' }
];

const insuranceAndContractor = [
  { title: 'Florida Roof Insurance Claims Guide', href: '/florida-roof-insurance-claims-guide' },
  { title: 'Roof Replacement Cost in Florida', href: '/roof-replacement-cost-florida' },
  { title: 'Best Roofing Companies in South Florida', href: '/blog/best-roofing-companies-south-florida' },
  { title: 'How to Hire a Roofing Contractor in Florida', href: '/how-to-hire-roofing-contractor' },
  { title: 'How to Verify a Licensed Roofing Contractor', href: '/licensed-roofing-contractor' }
];

const aboutAllPhase = [
  { title: 'Can a Screen Room Add to My Property Value?', href: '/blog/can-a-screen-room-add-to-my-property-value' }
];

interface ArticleCardProps {
  title: string;
  href: string;
}

function ArticleCard({ title, href }: ArticleCardProps) {
  return (
    <Link
      to={href}
      className="block bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-red-600 hover:bg-zinc-900 transition-all duration-200 group"
    >
      <h3 className="text-white font-semibold text-lg group-hover:text-red-500 transition-colors">
        {title}
      </h3>
    </Link>
  );
}

export default function LearningCenterPage() {
  return (
    <>
      <SEO
        title="Learning Center | Roofing Guides & Resources | All Phase Construction USA"
        description="Your complete South Florida roofing resource hub. Get accurate 2025–2026 cost estimates, financing options, contractor hiring guides, and step-by-step replacement process info for Broward & Palm Beach County homeowners."
      />

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learning Center — Your Complete Roofing Resource
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Expert guides, cost breakdowns, and homeowner education from South Florida's dual-licensed roofing contractor. Everything you need to make confident roofing decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Get a Free Roof Assessment
              </Link>
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Try Our Roof Cost Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Project Photo */}
        <section className="w-full">
          <img
            src="/projects/featured-tile-roof-drone-optimized.webp"
            alt="Luxury tile roof installation in South Florida by All Phase Construction USA"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '380px' }}
            width="1440"
            height="1079"
            loading="eager"
            fetchpriority="high"
          />
        </section>

        {/* Tools & Resources - Featured Cards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tools & Resources</h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Start with our interactive tools to estimate costs and explore financing options.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {toolsAndResources.map((tool) => {
                const Icon = tool.icon;
                const cardClasses = "bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group";
                const cardContent = (
                  <>
                    <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6 group-hover:bg-red-600/20 transition-colors">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </>
                );
                return 'external' in tool && tool.external ? (
                  <a
                    key={tool.href}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className={cardClasses}
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost & Budgeting */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Cost & Budgeting</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Understanding what a roof costs in South Florida — and how to pay for it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {costAndBudgeting.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Hurricane & Storm Preparedness */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Hurricane & Storm Preparedness</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                How to protect your home and save on insurance in South Florida's High-Velocity Hurricane Zone.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hurricanePreparedness.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Roofing Materials & Comparisons */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Roofing Materials & Comparisons</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Compare roofing materials to find the right fit for your home, climate, and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roofingMaterials.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Roof Replacement & Repair */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Roof Replacement & Repair</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Step-by-step guides for understanding the roof replacement and repair process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roofReplacementRepair.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance & Inspections */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Maintenance & Inspections</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Preventive maintenance and inspection tips to extend the life of your roof.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceInspections.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Homeowner Guides */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Homeowner Guides — Hiring, Permits & Warranties</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                What every homeowner needs to know before starting a roofing project in South Florida.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeownerGuides.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Commercial & HOA Roofing */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Commercial & HOA Roofing</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Specialized guidance for property managers, condo associations, and commercial building owners.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialHOA.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Solar & Energy Efficiency */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Solar & Energy Efficiency</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                How solar panels, cool roofs, and energy-efficient upgrades work with your roofing project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solarEnergy.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* City & County Roof Replacement Guides */}
        <section id="city-county-guides" className="py-16 px-4 bg-zinc-900/30 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">City & County Roof Replacement Guides</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                In-depth roof replacement guides for the Broward and Palm Beach County cities we serve — costs, timelines, permits, and code requirements specific to your city.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityCountyGuides.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Roofing Materials & Systems */}
        <section id="materials-systems" className="py-16 px-4 bg-zinc-900/30 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Roofing Materials & Systems</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                City-specific guides to the materials we install across Broward and Palm Beach County — metal, tile, shingle, and flat — with HVHZ code, HOA, insurance, and lifespan numbers that actually matter.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsAndSystems.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Storm & Hurricane Damage */}
        <section id="storm-hurricane-damage" className="py-16 px-4 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Storm & Hurricane Damage</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Post-storm inspection, emergency tarp, and insurance claim guides for hurricane, wind, and hail damage across Broward and Palm Beach County.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stormAndHurricaneDamage.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Insurance & Choosing a Contractor */}
        <section id="insurance-claims" className="py-16 px-4 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Insurance & Choosing a Contractor</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Everything South Florida homeowners need to navigate roof insurance claims and pick the right licensed contractor.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceAndContractor.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* About All Phase Construction */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About All Phase Construction</h2>
              <p className="text-xl text-zinc-400 max-w-3xl">
                Learn more about who we are, what sets us apart, and why South Florida trusts us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutAllPhase.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-red-950/20 via-zinc-900 to-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Request your free roof assessment today.
            </p>

            {/* Customer Photo */}
            <div className="mb-8">
              <img
                src="/social-proof/graham-with-happy-customer-all-phase-usa.jpg"
                alt="All Phase Construction USA team with satisfied roofing customer South Florida"
                className="mx-auto rounded-lg"
                style={{ maxWidth: '600px' }}
                width="960"
                height="1280"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Request Free Assessment
              </Link>
              <a
                href="tel:7542275605"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
