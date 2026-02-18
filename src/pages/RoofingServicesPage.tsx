import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Building2, Wrench, Shield, ClipboardCheck, FileText, Calculator, DollarSign, CreditCard, CheckCircle2, Phone } from 'lucide-react';

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

export default function RoofingServicesPage() {
  return (
    <>
      <SEO
        title="Roofing Services | Residential & Commercial | All Phase Construction USA"
        description="Complete roofing services for South Florida — tile, metal, shingle, flat, commercial, and residential. Dual-licensed contractor serving Broward and Palm Beach Counties. Free inspections."
        canonicalUrl="https://allphaseconstructionfl.com/roofing-services"
      />

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Services — Residential & Commercial Solutions for South Florida
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Dual-licensed roofing and general contractor serving Broward and Palm Beach Counties. From tile and metal to flat roofs and full replacements — every project is built to HVHZ wind codes with manufacturer-spec installation.
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
                Roofing solutions for commercial buildings, multi-family properties, HOA communities, and condo associations throughout Broward and Palm Beach Counties.
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
                Licensed and insured across Broward and Palm Beach Counties. We serve residential and commercial properties in these communities:
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
                View all service areas →
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
