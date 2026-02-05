import { Link } from 'react-router-dom';
import { DollarSign, Shield, Wind, Thermometer, Users, Calculator, ClipboardCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InspectionCTA from '../components/InspectionCTA';

export default function PricingGuidePage() {
  return (
    <>
      <SEO
        title="Roof Replacement Pricing Guide for South Florida (HVHZ) | All Phase Construction USA"
        description="Complete pricing guide for roof replacement in South Florida's High Velocity Hurricane Zone. Learn about material costs, code requirements, ventilation, wind mitigation, and insurance savings."
        canonical="https://allphaseconstructionfl.com/pricing-guide"
        keywords="roof replacement cost South Florida, HVHZ roofing prices, Florida roof pricing guide, wind mitigation savings, roof insurance discounts"
      />
      <Header />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roof Replacement Pricing Guide for South Florida (HVHZ)
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Understanding the true cost of a quality roof replacement in South Florida's High Velocity Hurricane Zone
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Replacing a roof in South Florida is a significant investment that goes far beyond simply installing new shingles or tiles.
                This comprehensive pricing guide is designed to help homeowners understand the full scope of roof replacement costs in our unique
                High Velocity Hurricane Zone (HVHZ).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you're planning ahead for a future roof replacement or responding to storm damage, this guide will help you understand:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
                <li>Material differences and their long-term value</li>
                <li>How South Florida's strict building codes affect pricing</li>
                <li>The critical role of proper ventilation and attic airflow</li>
                <li>Wind mitigation upgrades and their insurance savings</li>
                <li>Installation quality and specialized crew requirements</li>
                <li>Financing options versus paying cash</li>
                <li>When you need a professional roof inspection</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-gray-800 font-medium">
                  <strong>Important:</strong> The prices and information in this guide are specific to South Florida's unique requirements.
                  HVHZ building codes, insurance requirements, and weather conditions make our roofing projects more complex than other regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Navigation Cards */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What's Covered in This Guide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Why Costs Are Higher</h3>
                </div>
                <p className="text-gray-600">
                  Understanding the unique factors that make South Florida roof replacement costs different from other regions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Calculator className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Average Costs by Material</h3>
                </div>
                <p className="text-gray-600">
                  Detailed pricing breakdowns for tile, metal, shingle, and flat roofing systems in South Florida.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Thermometer className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Ventilation & Airflow</h3>
                </div>
                <p className="text-gray-600">
                  Why proper attic ventilation is critical in South Florida and how it affects your roof's lifespan.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Wind className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Wind Mitigation</h3>
                </div>
                <p className="text-gray-600">
                  How wind mitigation upgrades can save thousands on insurance premiums while protecting your home.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Installation Quality</h3>
                </div>
                <p className="text-gray-600">
                  Why crew specialization and installation quality matter more than the lowest price.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Financing Options</h3>
                </div>
                <p className="text-gray-600">
                  Compare financing versus paying cash and understand your payment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections - Placeholder Structure */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            {/* Section 1 */}
            <article id="why-costs-higher">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Why Roof Costs Are Higher in South Florida
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic">
                  Content coming soon: This section will explain the unique factors driving roof replacement costs in South Florida,
                  including HVHZ building code requirements, specialized materials, hurricane-rated fasteners, and labor specialization.
                </p>
              </div>
            </article>

            {/* Section 2 */}
            <article id="average-costs">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Average Roof Costs by Material
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic">
                  Content coming soon: This section will provide detailed pricing breakdowns for tile roofing, metal roofing,
                  shingle roofing, and flat roofing systems, including material costs, labor, permits, and disposal.
                </p>
              </div>
            </article>

            {/* Section 3 */}
            <article id="ventilation">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Thermometer className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Ventilation & Attic Airflow Considerations
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic">
                  Content coming soon: This section will explain why proper attic ventilation is critical in South Florida's climate,
                  how it extends roof life, reduces cooling costs, and prevents moisture damage.
                </p>
              </div>
            </article>

            {/* Section 4 */}
            <article id="wind-mitigation">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Wind className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Wind Mitigation & Insurance Savings
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic">
                  Content coming soon: This section will detail wind mitigation upgrades, their costs, and how they can
                  reduce insurance premiums by 20-45%, often paying for themselves within 3-5 years.
                </p>
              </div>
            </article>

            {/* Section 5 */}
            <article id="installation-quality">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Installation Quality & Crew Specialization
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic">
                  Content coming soon: This section will explain why experienced, specialized crews are essential for
                  HVHZ installations and why the lowest bid isn't always the best value.
                </p>
              </div>
            </article>

            {/* Section 6 */}
            <article id="financing">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Financing vs Paying Cash
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic mb-4">
                  Content coming soon: This section will compare financing options, payment plans, and the pros and cons
                  of paying cash versus financing your roof replacement.
                </p>
                <div className="mt-6">
                  <Link
                    to="/easy-payments"
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    Learn about our financing options →
                  </Link>
                </div>
              </div>
            </article>

            {/* Section 7 */}
            <article id="roof-inspection">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <ClipboardCheck className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  When You Need a Roof Inspection
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <p className="text-gray-600 italic mb-4">
                  Content coming soon: This section will explain when homeowners should get a professional roof inspection,
                  what inspectors look for, and how inspections help with insurance claims and planning.
                </p>
                <div className="mt-6">
                  <Link
                    to="/roof-inspection"
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    Learn about our inspection services →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="py-12 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-4">
              Get an Instant Roof Cost Estimate
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Use our free roof cost calculator to get an estimated price range for your specific home and material preferences.
            </p>
            <Link
              to="/roof-cost-calculator"
              className="inline-block px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Calculate Your Roof Cost
            </Link>
          </div>
        </section>

        <InspectionCTA />
      </main>
      <Footer />
    </>
  );
}
