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
                This pricing guide is designed to help South Florida homeowners understand how roof replacement and repair costs are determined in High Velocity Hurricane Zone (HVHZ) areas. Unlike other regions, pricing in South Florida is significantly influenced by specialized factors that national averages fail to capture.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Online cost estimates and national averages are often misleading because they don't account for the stringent requirements specific to our region. In South Florida, roof pricing is determined by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
                <li>Strict HVHZ building codes requiring enhanced structural fastening and installation methods</li>
                <li>Wind mitigation requirements designed to protect homes from hurricane-force winds</li>
                <li>Material selection suited for high winds, salt air, and intense UV exposure</li>
                <li>Proper ventilation systems critical for Florida's heat and humidity</li>
                <li>Specialized installation techniques required for HVHZ compliance</li>
                <li>Insurance considerations including wind mitigation credits and coverage requirements</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This guide provides detailed explanations and comparisons to help you understand the factors behind pricing decisions. For homeowners seeking a fast ballpark estimate based on their specific home, our <Link to="/roof-cost-calculator" className="text-red-600 hover:text-red-700 font-semibold underline">Roof Cost Calculator</Link> provides instant price ranges tailored to South Florida requirements.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-gray-800 font-medium">
                  <strong>Understanding Regional Differences:</strong> The prices and requirements discussed in this guide are specific to South Florida's HVHZ designation. Building codes, material specifications, and installation standards in this region differ substantially from those in other parts of Florida and the United States.
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

        {/* Why Quotes Vary Section */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Roof Quotes Vary So Much — Even With the Same Materials
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Price differences between roofing contractors in South Florida are often driven by factors that extend far beyond material selection. Even when contractors quote the same roofing material, variations in licensing, insurance practices, crew management, and quality control can result in significantly different prices — and different levels of protection for homeowners.
              </p>

              <div className="space-y-8">
                {/* Contractor Licensing */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contractor Licensing and Scope of Work</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Not all roofing contractors are licensed to handle structural or decking issues. Some roofing contractors are also licensed general contractors, which allows them to directly address problems with roof decking, trusses, or structural components as they are discovered during the project. Contractors who hold only a roofing license must subcontract this work to a separate general contractor or carpenter, which can affect project cost, coordination timelines, and liability. Understanding a contractor's licensing scope helps homeowners anticipate how unexpected structural issues will be handled.
                  </p>
                </div>

                {/* Subcontracting */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Subcontracting and Insurance Verification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Many roofing contractors subcontract installation labor rather than employing crews directly. While subcontracting is common industry practice, homeowners should verify that subcontractors carry their own liability insurance and workers' compensation coverage. Most homeowners are unaware they have the right to request certificates of insurance from any subcontractor working on their property. This verification protects homeowners from liability if an uninsured worker is injured on-site.
                  </p>
                </div>

                {/* Workers Comp */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Workers' Compensation and Liability Coverage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Workers' compensation insurance is one of the largest operating costs for roofing contractors. This coverage protects both workers and homeowners by ensuring that injuries sustained on the job are covered by the contractor's insurance rather than the homeowner's. Contractors who do not maintain adequate workers' compensation coverage can offer significantly lower prices, but this shifts financial and legal risk to the property owner. If an uninsured or underinsured worker is injured during the project, the homeowner's insurance may become the primary source of compensation, potentially resulting in claims against the homeowner's policy.
                  </p>
                </div>

                {/* Crew Experience */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Crew Experience and Employee Retention</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While a contractor's years in business matter, the tenure of their installation crews is equally important. Contractors who retain the same crews over multiple years tend to deliver more consistent quality and better adherence to company standards. Long-tenured crews are familiar with the contractor's quality expectations, installation techniques, and project management systems. High crew turnover, conversely, can result in inconsistent workmanship and gaps in quality control. When evaluating contractors, consider asking how long their lead installers and crew members have been with the company.
                  </p>
                </div>

                {/* Documentation */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Jobsite Safety and Documentation Practices</h3>
                  <p className="text-gray-700 leading-relaxed">
                    City inspections are brief and limited in scope, typically verifying permit compliance and basic code requirements rather than inspecting every aspect of installation quality. Quality-focused contractors document their work through progress photos, installation videos, and detailed project records. This documentation serves multiple purposes: it provides accountability, creates a record for future warranty claims, and allows contractors to verify that work was completed to specification. Contractors who invest in thorough documentation practices typically have higher operating costs but provide homeowners with greater transparency and recourse if issues arise.
                  </p>
                </div>

                {/* Transparency */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency and Access During Installation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Some contractors provide homeowners with access to project documentation and progress updates throughout the installation process. This may include photo sharing, project management portals, or regular communication about each phase of work. Transparency practices allow homeowners to monitor progress even when they cannot be present on-site, and they create accountability for quality and timeline adherence. Contractors who offer this level of transparency typically build these systems into their operating costs, which can contribute to higher quotes compared to contractors who provide minimal communication or documentation.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8">
                <p className="text-gray-800 font-medium">
                  <strong>Key Takeaway:</strong> The lowest quote is not always the best value. Price differences often reflect differences in insurance coverage, crew experience, documentation practices, and the level of protection provided to homeowners. When comparing quotes, consider what is included beyond materials and basic installation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roof Ventilation Section */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Roof Ventilation in South Florida: Why Proper Attic Airflow Matters
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Attic ventilation is a critical but frequently overlooked component of roof system performance in South Florida. Proper ventilation directly affects roof longevity, energy efficiency, indoor comfort, and compliance with building codes and manufacturer warranties. In South Florida's climate, where extreme heat and humidity are constant factors, ventilation design must be approached as a calculated engineering decision rather than an afterthought.
              </p>

              <div className="space-y-8">
                {/* Basic Ventilation Methods */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Gooseneck Vents: Common but Limited</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Standard gooseneck vents (also called static roof vents or box vents) are the most commonly installed ventilation solution in South Florida residential construction. These vents rely on passive airflow and convection to exhaust hot air from the attic. While they meet minimum code requirements in many jurisdictions, they provide limited airflow capacity, particularly in larger attic spaces or homes with complex roof geometries. In still air conditions common during summer months, gooseneck vents often fail to move sufficient air volume to prevent heat buildup, even when spaced according to manufacturer recommendations.
                  </p>
                </div>

                {/* Turbine Vents */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Turbine Vents: Widespread Use, Declining Performance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Turbine vents, commonly known as "whirly birds," are highly visible throughout South Florida neighborhoods. These wind-driven vents use rotating turbine blades to draw air from the attic when exterior wind causes the turbine to spin. While turbines can be effective in ideal conditions, their long-term performance in South Florida's coastal environment is often poor. Salt air, high humidity, and extreme heat cause turbines to rust, seize, or lose lubrication. Many turbines stop rotating within a few years of installation, at which point they function only as passive vents with limited airflow. Turbines also require ongoing maintenance and eventual replacement, adding to long-term ownership costs.
                  </p>
                </div>

                {/* Solar Attic Fans */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Attic Fans: Effective When Properly Specified</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Solar-powered attic fans can provide significant ventilation performance when properly selected, installed, and matched to the home's attic volume. Unlike passive vents or turbines, solar attic fans actively exhaust hot air using electric motors powered by integrated solar panels. This active ventilation creates consistent airflow regardless of wind conditions, which is particularly valuable in South Florida's humid climate where passive ventilation is often insufficient. However, not all solar attic fans are appropriate for South Florida installation, and improper selection can result in code violations, warranty issues, or equipment failure.
                  </p>
                </div>

                {/* HVHZ Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">High Velocity Hurricane Zone (HVHZ) Code Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In Miami-Dade and Broward counties, all roof-mounted equipment including solar attic fans must meet High Velocity Hurricane Zone (HVHZ) requirements. HVHZ-rated products are tested for wind resistance, uplift pressure, and structural attachment under extreme wind conditions. Many solar attic fans sold through retail channels or online marketplaces are not HVHZ-rated and cannot be legally installed in these jurisdictions. Installing non-compliant equipment can result in permit failures, inspection rejections, insurance policy complications, and liability exposure if the equipment fails during a storm. Contractors and homeowners must verify that solar attic fans carry Miami-Dade Notice of Acceptance (NOA) or Florida Product Approval before installation.
                  </p>
                </div>

                {/* Sizing and CFM */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Airflow Capacity and Proper Sizing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Solar attic fans are available with varying motor sizes and airflow capacities, measured in cubic feet per minute (CFM). Proper ventilation design requires calculating the attic's total cubic footage and determining the appropriate CFM rating needed to achieve adequate air exchanges per hour. A common industry guideline calls for 10 air changes per hour in attic spaces, though this can vary based on roof color, insulation levels, and home orientation. Undersized fans will not move sufficient air to reduce attic temperatures meaningfully, while oversized fans may create negative pressure that pulls conditioned air from living spaces. Solar attic fan selection should be based on measured attic dimensions and calculated ventilation requirements, not on assumptions or one-size-fits-all recommendations.
                  </p>
                </div>

                {/* Consequences of Poor Ventilation */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Consequences of Inadequate or Incorrect Ventilation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Inadequate attic ventilation or improperly designed ventilation systems create multiple long-term problems for South Florida homeowners. Trapped heat in the attic can raise interior temperatures, increasing air conditioning runtime and energy costs. Moisture buildup from inadequate airflow accelerates roof deck deterioration, promotes mold growth, and shortens shingle lifespan. Many roofing material manufacturers require documented ventilation compliance as a condition of warranty coverage, meaning inadequate ventilation can void material warranties. Additionally, insurance carriers may scrutinize ventilation systems during underwriting or claims processes, particularly for moisture-related or premature failure claims. Proper ventilation design and installation should be treated as a non-negotiable component of roof system performance rather than an optional upgrade.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
                <p className="text-gray-800 font-medium">
                  <strong>Industry Standard:</strong> Effective attic ventilation requires engineered calculation based on attic volume, climate conditions, and roof characteristics. When discussing roof replacement, request specific ventilation recommendations with supporting calculations and verify that all equipment meets local code requirements including HVHZ standards where applicable.
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
