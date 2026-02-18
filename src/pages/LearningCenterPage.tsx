import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calculator, DollarSign, CreditCard, BookOpen, Shield, Home, Wrench, ClipboardCheck, Building2, Sun } from 'lucide-react';

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
  }
];

const costAndBudgeting = [
  { title: 'Roof Replacement Cost in Broward County (2026 Guide)', href: '/blog/roof-replacement-cost-broward-county-2026' },
  { title: 'Roof Pricing & Financing Guide', href: '/blog/roof-pricing-financing-guide' },
  { title: 'How to Budget for a New Roof Without Surprises', href: '/blog/how-to-budget-for-a-new-roof-without-surprises' },
  { title: 'The Cost of Waiting: Why Delaying Roof Replacement Hurts Your Wallet', href: '/blog/the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet' }
];

const hurricanePreparedness = [
  { title: 'What Makes a Roof Hurricane Resistant?', href: '/blog/what-makes-a-roof-hurricane-resistant' },
  { title: 'Wind Mitigation for South Florida Roofs: Save on Insurance', href: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home' },
  { title: 'The Ultimate Guide to Hurricane-Proofing Your Roof', href: '/blog/the-ultimate-guide-to-hurricane-proofing-your-roof-in-south-florida-expert-tips-from-all-phase-construction-usa' },
  { title: 'Do I Need a Roof Inspection After a Storm?', href: '/blog/do-i-need-a-roof-inspection-after-a-storm' },
  { title: 'How to File a Roof Insurance Claim After Storm Damage', href: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage' }
];

const roofingMaterials = [
  { title: 'Metal Roof vs Shingles in Florida (2026)', href: '/blog/metal-roof-vs-shingles-florida-2026' },
  { title: 'Metal Roof vs Tile Roof: South Florida Hurricanes', href: '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes' },
  { title: 'Comparing Asphalt vs Metal Roofs: Which Is Right for You?', href: '/blog/comparing-asphalt-vs-metal-roofs-which-is-right-for-you' },
  { title: 'The Pros and Cons of Flat Roofs for Florida Homes', href: '/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes' },
  { title: 'Architectural Shingles vs Three-Tab Shingles', href: '/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles' },
  { title: 'What Is Roof Underlayment and Why Does It Matter?', href: '/blog/what-is-roof-underlayment-and-why-does-it-matter' },
  { title: 'What Is a Cool Roof and Can It Save You Money?', href: '/blog/what-is-a-cool-roof-and-can-it-save-you-money' },
  { title: 'How to Choose Roofing Materials for Large-Scale Projects', href: '/blog/how-to-choose-roofing-materials-for-large-scale-projects' }
];

const roofReplacementRepair = [
  { title: 'Complete Roof Replacement Process: 10 Steps', href: '/blog/complete-roof-replacement-process-10-steps' },
  { title: 'Choosing Between Roof Repair and Full Replacement', href: '/blog/choosing-between-roof-repair-and-full-replacement' },
  { title: 'Don\'t Replace Your Roof — Restore It Instead', href: '/blog/dont-replace-your-roof-restore-it-instead' }
];

const maintenanceInspections = [
  { title: 'Professional Roof Inspection in South Florida', href: '/blog/professional-roof-inspection-south-florida' },
  { title: 'Seasonal Roof Maintenance Checklist for Florida Homes', href: '/blog/seasonal-roof-maintenance-checklist-for-florida-homes' },
  { title: 'Top Roof Maintenance Tips for South Florida Homes', href: '/blog/top-roof-maintenance-tips-for-south-florida-homes' },
  { title: 'How to Spot Early Signs of Roof Damage Before It Gets Expensive', href: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive' },
  { title: 'What to Do When Your Roof Leaks', href: '/blog/what-to-do-when-your-roof-leaks' },
  { title: 'How Often Should I Replace My Roof in South Florida?', href: '/blog/how-often-should-i-replace-my-roof-in-south-florida' },
  { title: 'The Importance of Proper Flashing Installation', href: '/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks' },
  { title: 'How to Protect Roof Decking from Moisture Damage', href: '/blog/how-to-protect-roof-decking-from-moisture-damage-during-construction' },
  { title: 'Why Proper Roof Ventilation Is Critical in Hot Climates', href: '/blog/why-proper-roof-ventilation-is-critical-in-hot-climates' },
  { title: 'The Role of Roof Pitch in Water Drainage and Design', href: '/blog/the-role-of-roof-pitch-in-water-drainage-and-design' }
];

const homeownerGuides = [
  { title: 'What Questions to Ask Your Roofing Contractor Before Hiring', href: '/blog/what-questions-to-ask-your-roofing-contractor-before-hiring' },
  { title: 'Why Permitting Matters in Roofing and Construction Projects', href: '/blog/why-permitting-matters-in-roofing-and-construction-projects' },
  { title: 'Why Homeowners Should Avoid Pulling Their Own Roofing Permit', href: '/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida' },
  { title: 'Understanding Your Roofing Warranty: What\'s Covered?', href: '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not' },
  { title: 'Common Roofing Myths Homeowners Still Believe', href: '/blog/common-roofing-myths-that-homeowners-still-believe' },
  { title: 'Top 5 Roofing Mistakes South Florida Homeowners Make', href: '/blog/top-5-roofing-mistakes-south-florida-homeowners-make-and-how-to-avoid-them' },
  { title: 'Why Choosing an Owens Corning Certified Contractor Matters', href: '/blog/why-choosing-an-owens-corning-certified-contractor-like-all-phase-construction-usa-matters-for-your-roofing-project' },
  { title: 'How to Prepare Your Roof for the Real Estate Market', href: '/blog/how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home' },
  { title: 'Visualize Your New Roof with AI-Powered Tools', href: '/blog/visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview' },
  { title: 'Why Palm Beach and Broward County Building Codes Differ', href: '/blog/why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa' }
];

const commercialHOA = [
  { title: 'Roofing Solutions for Multi-Family and HOA Communities', href: '/blog/roofing-solutions-for-multi-family-and-hoa-communities' },
  { title: 'Commercial Roof Coatings: Are They Worth the Investment?', href: '/blog/commercial-roof-coatings-are-they-worth-the-investment' },
  { title: 'How to Plan Long-Term Roofing Budgets for Your Condo Association', href: '/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association' },
  { title: 'Soffit Repair in South Florida', href: '/blog/soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa' },
  { title: 'My Safe Florida Condo Program: Prepare for the 2025 Reopening', href: '/blog/my-safe-florida-condo-program-prepare-for-the-2025-reopening-with-all-phase-construction-usa' }
];

const solarEnergy = [
  { title: 'The ROI of Installing Solar Panels in Florida', href: '/blog/the-roi-of-installing-solar-panels-in-florida' },
  { title: 'How Solar Impacts Property Taxes in Florida', href: '/blog/how-solar-impacts-property-taxes-in-florida' },
  { title: 'How to Combine Solar and a New Roof for Maximum Efficiency', href: '/blog/how-to-combine-solar-and-a-new-roof-for-maximum-efficiency' },
  { title: 'What\'s the Lifespan of a Solar-Ready Roof?', href: '/blog/whats-the-lifespan-of-a-solar-ready-roof' },
  { title: 'Can Solar Panels Void My Roof Warranty?', href: '/blog/can-solar-panels-void-my-roof-warranty' },
  { title: 'How Climate Change Is Impacting Roofing Choices in Coastal Areas', href: '/blog/how-climate-change-is-impacting-roofing-choices-in-coastal-areas' }
];

const aboutAllPhase = [
  { title: 'Top Roofers in Broward and Palm Beach Counties', href: '/blog/top-roofers-in-broward-and-palm-beach-counties' },
  { title: 'All Phase Construction USA — Roofing Experts in Deerfield Beach', href: '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl-6' },
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

export function LearningCenterPage() {
  return (
    <>
      <SEO
        title="Learning Center | Roofing Guides & Resources | All Phase Construction USA"
        description="Expert roofing guides, cost calculators, and homeowner education from All Phase Construction USA. Everything you need to know about roofing in South Florida."
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

        {/* Tools & Resources - Featured Cards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tools & Resources</h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Start with our interactive tools to estimate costs and explore financing options.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {toolsAndResources.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6 group-hover:bg-red-600/20 transition-colors">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {tool.description}
                    </p>
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
