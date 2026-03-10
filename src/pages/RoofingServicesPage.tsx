import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { Home, Building2, Wrench, Shield, ClipboardCheck, FileText, Calculator, DollarSign, CreditCard, CheckCircle2, Phone, AlertTriangle, Thermometer, Droplets } from 'lucide-react';

const residentialServices = [
  {
    title: 'Residential Roofing',
    href: '/residential-roofing',
    description: 'Full-service residential roofing for South Florida homes — replacements, repairs, and inspections built to Broward and Palm Beach County codes.'
  },
  {
    title: 'Tile Roofing',
    href: '/tile-roofing',
    description: 'Concrete and clay tile installation and repair. Proper foam adhesive application, verified flashing, and HVHZ wind-code compliance.'
  },
  {
    title: 'Metal Roofing',
    href: '/metal-roofing',
    description: 'Standing seam and corrugated metal roof systems. Wind-resistant, energy-efficient, and rated for 150+ mph winds in South Florida.'
  },
  {
    title: 'Shingle Roofing',
    href: '/shingle-roofing',
    description: 'Architectural and impact-resistant shingle installation. Owens Corning Platinum and CertainTeed Master certified contractor.'
  },
  {
    title: 'Flat Roofing',
    href: '/flat-roofing',
    description: 'Built-up roofing (BUR), TPO, modified bitumen, and single-ply systems for flat and low-slope residential roofs.'
  }
];

const commercialServices = [
  {
    title: 'Commercial Roofing',
    href: '/commercial-roofing',
    description: 'Full commercial roofing services for offices, warehouses, retail, and multi-family buildings. Flat roof specialists with TPO, EPDM, and built-up systems.'
  },
  {
    title: 'Roof Maintenance Programs',
    href: '/roof-maintenance-programs',
    description: 'Preventive maintenance plans for commercial properties and HOA communities. Extend your roof\'s life and catch problems before they become emergencies.'
  }
];

const servicesAndProcess = [
  {
    title: 'Roof Inspection',
    href: '/roof-inspection',
    icon: ClipboardCheck,
    description: 'Comprehensive roof inspections for insurance claims, real estate transactions, storm damage assessment, and preventive maintenance.'
  },
  {
    title: 'Roof Repair',
    href: '/roof-repair',
    icon: Wrench,
    description: 'Emergency and scheduled roof repairs across Broward and Palm Beach Counties. Leak detection, flashing repair, tile replacement, and storm damage restoration.'
  },
  {
    title: 'Roof Replacement Process',
    href: '/roof-replacement-process',
    icon: FileText,
    description: 'Our 10-step roof replacement process from initial assessment through final inspection and permit closure. Know exactly what to expect.'
  }
];

const costAndFinancing = [
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
    description: 'Flexible payment plans through our FHA Title I lending partner, Service Finance Company. Make your roof affordable.'
  }
];

const serviceAreaCities = [
  { name: 'Boca Raton', href: '/roof-repair/boca-raton' },
  { name: 'Coral Springs', href: '/roof-repair/coral-springs' },
  { name: 'Deerfield Beach', href: '/roof-repair/deerfield-beach' },
  { name: 'Fort Lauderdale', href: '/roof-repair/fort-lauderdale' },
  { name: 'Pompano Beach', href: '/roof-repair/pompano-beach' },
  { name: 'Delray Beach', href: '/roof-repair/delray-beach' },
  { name: 'Boynton Beach', href: '/roof-repair/boynton-beach' },
  { name: 'West Palm Beach', href: '/roof-repair/west-palm-beach' },
  { name: 'Wellington', href: '/roof-repair/wellington' },
  { name: 'Lake Worth', href: '/roof-repair/lake-worth' },
  { name: 'Coconut Creek', href: '/roof-repair/coconut-creek' },
  { name: 'Parkland', href: '/roof-repair/parkland' },
  { name: 'Hollywood', href: '/roof-repair/hollywood' },
  { name: 'Plantation', href: '/roof-repair/plantation' },
  { name: 'Tamarac', href: '/roof-repair/tamarac' },
  { name: 'Lauderhill', href: '/roof-repair/lauderhill' }
];

const whyChooseUs = [
  {
    title: 'Dual Licensed',
    description: 'Both General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464). We handle structural and roofing work under one roof.'
  },
  {
    title: 'HVHZ Certified',
    description: 'Built for South Florida\'s High-Velocity Hurricane Zone. Every installation meets 146 mph wind load requirements.'
  },
  {
    title: 'Manufacturer Certified',
    description: 'Owens Corning Platinum, CertainTeed Master, Tamko Pro Platinum certified contractor.'
  },
  {
    title: '20+ Years Experience',
    description: 'Protecting South Florida properties since 2005. Over 2,500 projects completed.'
  },
  {
    title: 'Full Permitting',
    description: 'We pull all permits, schedule all inspections, and ensure code compliance. No shortcuts.'
  },
  {
    title: 'Financing Available',
    description: 'Flexible payment plans through FHA Title I lender Service Finance Company, LLC.'
  }
];

const faqData = [
  {
    question: 'What roofing services does All Phase Construction offer in South Florida?',
    answer: 'All Phase Construction USA provides full-service residential and commercial roofing across Broward and Palm Beach Counties. Our services include roof replacement, roof repair, emergency leak repair, roof inspections (insurance, real estate, and preventive), and ongoing maintenance programs. We work with all major roofing materials — concrete tile, clay tile, metal standing seam, architectural shingles, TPO, PVC, modified bitumen, and built-up roofing (BUR) systems.'
  },
  {
    question: 'How much does a new roof cost in South Florida in 2026?',
    answer: 'Roof replacement costs in South Florida depend on material, roof size, and code requirements. Typical ranges per square foot: asphalt shingles $5-$8, concrete tile $10-$18, metal standing seam $12-$20, and flat roof systems $8-$15. A standard 2,000 sq ft home usually falls between $12,000 and $35,000 depending on the material chosen. Use our free online roof cost calculator for a quick estimate, or call (754) 227-5605 for a no-obligation assessment.'
  },
  {
    question: 'Is All Phase Construction licensed for hurricane zone roofing?',
    answer: 'Yes. All Phase Construction USA holds both a Certified Roofing Contractor license (CCC-1331464) and a Certified General Contractor license (CGC-1526236) from the State of Florida. We are fully certified for High-Velocity Hurricane Zone (HVHZ) work in Broward County and Miami-Dade County, meaning every installation meets the stringent 146 mph wind load requirements mandated by the Florida Building Code.'
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer: 'Yes. We partner with Service Finance Company, LLC, an FHA Title I lender, to offer flexible payment plans for roof replacement projects. Homeowners can finance their new roof with competitive rates and manageable monthly payments. We handle the application process during your free roof assessment — most approvals come back the same day.'
  },
  {
    question: 'How long does a roof replacement take in Broward or Palm Beach County?',
    answer: 'Most residential roof replacements in Broward and Palm Beach County take 2 to 5 days of active work, depending on the size and material. The full project timeline — from initial inspection through final permit closure — typically runs 3 to 6 weeks. This includes permit processing (which Broward County can take 2-3 weeks), material ordering, installation, and the required municipal inspections. We handle all permitting and scheduling.'
  }
];

export default function RoofingServicesPage() {
  return (
    <>
      <SEO
        title="Roofing Services | Residential & Commercial | All Phase Construction USA"
        description="Complete roofing services for South Florida — tile, metal, shingle, flat, commercial, and residential. Dual-licensed contractor serving Broward and Palm Beach Counties. Free inspections."
        canonicalUrl="https://allphaseconstructionfl.com/roofing-services"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services — Residential & Commercial Solutions for South Florida
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              All Phase Construction USA is a dual-licensed roofing and general contractor serving Broward and Palm Beach Counties since 2005. With over 2,500 completed projects and certifications from Owens Corning, CertainTeed, and Tamko, we specialize in HVHZ-compliant roofing built to South Florida's 146 mph wind load requirements. From single-family homes to commercial properties and HOA communities — every project is permitted, inspected, and backed by manufacturer warranty documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Request Free Roof Assessment
              </Link>
              <a
                href="tel:7542275605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </section>

        {/* Residential Roofing Services - Featured */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Home className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Residential Roofing</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Complete roof replacement, repair, and inspection services for South Florida homeowners. Every residential project includes HVHZ-compliant installation, proper permitting, and manufacturer warranty documentation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialServices.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Roofing Services */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Commercial Roofing</h2>
              </div>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                All Phase Construction USA holds dual licenses — General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) — allowing us to handle structural and roofing work under one contract. We serve commercial buildings, multi-family properties, HOA communities, and condo associations throughout Broward and Palm Beach Counties. Our team works directly with property managers and HOA boards to minimize disruption and keep projects on schedule.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {commercialServices.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Roof Services & Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inspections, Repairs & Process
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                From initial inspection through final permit sign-off — understand what goes into a professional roofing project.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {servicesAndProcess.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6 group-hover:bg-red-600/20 transition-colors">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost & Financing */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing, Estimates & Financing
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Transparent pricing, free estimates, and flexible financing to make your roofing project affordable.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {costAndFinancing.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6 group-hover:bg-red-600/20 transition-colors">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Areas We Serve
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Licensed and insured across Broward and Palm Beach Counties, FL. We serve residential and commercial properties in every municipality we work in — pulling all permits, meeting local wind codes, and ensuring full code compliance on every project. Want to see how All Phase stacks up? Read our independent review of the <Link to="/locations/deerfield-beach/best-roofers-deerfield-beach/" className="text-red-400 hover:text-red-300 underline">top-rated roofers in Deerfield Beach</Link>.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {serviceAreaCities.map((city) => (
                <Link
                  key={city.href}
                  to={city.href}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center hover:border-red-600 hover:bg-zinc-900 transition-all duration-200 group"
                >
                  <span className="text-white font-semibold group-hover:text-red-500 transition-colors">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/locations/service-areas"
                className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors"
              >
                View all service areas
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why South Florida Trusts All Phase Construction
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* South Florida Roofing Challenges */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Roofing in South Florida Is Different
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                South Florida's climate demands more from your roof than almost anywhere else in the country. Understanding these challenges helps you make better decisions about materials, contractors, and maintenance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hurricane & Wind Damage</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Broward County falls within Florida's High-Velocity Hurricane Zone, requiring all roofing installations to meet 146 mph wind load standards. This means specific fastener patterns, enhanced underlayment, and tested assembly systems — not just any contractor can legally perform this work. Every project requires NOA (Notice of Acceptance) or FL Product Approval documentation for materials and installation methods.
                </p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6">
                  <Thermometer className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">UV & Heat Exposure</h3>
                <p className="text-zinc-400 leading-relaxed">
                  South Florida roofs endure over 230 sunny days per year with surface temperatures reaching 160°F or higher. This accelerates material degradation — asphalt shingles lose granules faster, sealants dry out and crack, and flat roof membranes can blister. Choosing materials rated for extended UV exposure and scheduling regular maintenance are essential to getting full lifespan from any roof system in our climate.
                </p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-lg mb-6">
                  <Droplets className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rain & Moisture</h3>
                <p className="text-zinc-400 leading-relaxed">
                  With an average of 62 inches of rainfall per year and frequent afternoon storms, South Florida puts extreme demands on roof drainage and waterproofing systems. Poor flashing, inadequate slope, or blocked drip edges can lead to water intrusion that damages decking, insulation, and interior finishes. We design every roof system with proper drainage pathways, redundant waterproofing layers, and sealed penetrations.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-4xl mx-auto">
              <p className="text-zinc-300 leading-relaxed text-lg">
                These environmental factors are why choosing a properly licensed, locally experienced roofing contractor matters so much in Broward and Palm Beach Counties. A roof that performs well in the Midwest or Pacific Northwest may fail within a few years under South Florida conditions. All Phase Construction USA has been navigating these exact challenges since 2005, with over 2,500 completed projects across the region. Our team understands the local building codes, permit processes, and material performance data specific to our area — because we live and work here.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions About Our Roofing Services
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-zinc-400 mb-4">Have more questions? Visit our comprehensive FAQ page or get in touch directly.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/frequently-asked-questions" className="text-red-500 font-semibold hover:text-red-400 transition-colors">
                  View All FAQs
                </Link>
                <Link to="/contact" className="text-red-500 font-semibold hover:text-red-400 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started? Request your free roof assessment today.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Request Free Assessment
              </Link>
              <a
                href="tel:7542275605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-red-800 border-2 border-white rounded-lg hover:bg-red-900 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
