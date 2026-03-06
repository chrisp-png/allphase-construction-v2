// Bolt-GitHub-Netlify Connection Test - 2026-02-13
import { Helmet } from 'react-helmet-async';
import { Search, Wrench, Home, Building2, Shield, MapPin, Phone, Star, Clock, Award } from 'lucide-react';
import SEO from '../components/SEO';
import HeroRoofing from '../components/HeroRoofing';
import HowItWorks from '../components/HowItWorks';
import TrustBadges from '../components/TrustBadges';
import HappyCustomers from '../components/HappyCustomers';
import CaseStudy from '../components/CaseStudy';
import ServiceAreas from '../components/ServiceAreas';
import CommonServiceAreasTable from '../components/CommonServiceAreasTable';
import ServiceAreasCTA from '../components/ServiceAreasCTA';
import HomeownerResources from '../components/HomeownerResources';
import MicroFAQ from '../components/MicroFAQ';
import FAQ from '../components/FAQ';
import ChamberBadge from '../components/ChamberBadge';
import ChamberBadges from '../components/ChamberBadges';
import LocationMap from '../components/LocationMap';
import { EXTERNAL_LINKS } from '../config/links';

export default function HomePage() {
  // Static SEO metadata controlled by NuclearMetadata component
  // Schema.org markup handled by NuclearMetadata and Footer components


  return (
    <>
      <SEO
        title="Roofing Contractor | Broward & Palm Beach County | All Phase Construction USA"
        description="HVHZ-certified roofing contractor in Broward & Palm Beach. Tile, metal, shingle, flat & commercial roofing. Call (754) 227-5605."
        canonicalPath="/"
      />
      <HeroRoofing />

      {/* Service Navigation Pills */}
      <section className="py-12 bg-gradient-to-b from-[#0a0a0a] to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Roofing Industry Overview */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Industry Overview in South Florida
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Dynamic & Demanding Environment</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The roofing industry in South Florida is one of the most dynamic and demanding in the country, shaped by the region's unique weather conditions and strict building codes. With frequent heavy rains, intense sun, and the ever-present threat of hurricanes, homeowners and businesses alike require roofing systems that deliver maximum durability and energy efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <Award className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Skilled Professionals Required</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      This means that roofing professionals must be highly skilled and up-to-date on the latest materials and installation techniques to ensure every roof can withstand the elements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <Building2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Material Innovation & Quality</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Asphalt shingles remain a popular choice for their cost-effectiveness and resilience, while advanced materials and innovative designs are increasingly being adopted to boost both performance and energy savings. The cost of roof replacement is a significant investment, so it's essential for homeowners to hire a reputable roofer who understands local building codes and can ensure the job is done right the first time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <Home className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Energy-Efficient Solutions</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      In recent years, there's been a noticeable shift toward eco-friendly and energy-efficient roofing solutions, as more homeowners look to reduce their energy bills and environmental impact. Whether you're considering a new roof or maintaining an existing one, working with experienced roofing professionals is the best way to ensure your roof remains durable, compliant, and ready to protect your home for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Pill-Style Service Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
            <a
              href="https://allphaseconstructionfl.com/roof-inspection"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">ROOF INSPECTIONS</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/roof-repair"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Wrench className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">ROOF REPAIR</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/residential-roofing"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">ROOF REPLACEMENT</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/commercial-roofing"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Building2 className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">COMMERCIAL ROOFING</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/roof-maintenance-programs"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">MAINTENANCE PROGRAMS</span>
            </a>
          </div>

          {/* Why Choose Us Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Why South Florida Homeowners Choose All Phase Construction USA for Roofing
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                Choosing a roofing company in South Florida is a decision that directly affects your home's safety, insurance standing, and long-term value. We built our business on doing it rightânot doing it fast.
              </p>

              <p>
                Every project we take on is backed by dual state licensing (Certified Roofing Contractor + Certified General Contractor), elite manufacturer certifications, and a commitment to HVHZ code compliance that most roofers simply can't match. As a skilled trade, roofing contractors must be licensed by the appropriate local authorities to operate legally. Reputable contractors should also manage the permitting process and ensure compliance with local building codes. Contractors certified by GAF are trusted to offer the strongest guarantees and warranties, and only the world's best contractors are authorized to install Duro-Last roofing systems. Contractors should provide comprehensive warranties on both workmanship and materials. Standard payment terms typically involve a deposit of 10â30% and the balance due after project completion; always review contract terms carefully to understand your obligations.
              </p>

              <p>
                We're members of the Broward County, Coral Springs, and Boca Raton Chambers of Commerce. Our roots run deep hereâand so does our accountability.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                {/* Table Headers */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 border-b border-gray-700">
                  <h3 className="text-xl font-bold text-white text-center">What We Do</h3>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700 md:border-l border-l-gray-700">
                  <h3 className="text-xl font-bold text-white text-center">Why It Matters</h3>
                </div>

                {/* Row 1 */}
                <div className="p-6 border-b border-gray-700">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Dual-Licensed:</span> <span className="text-red-400">Roofing + General Contractor</span>
                  </p>
                </div>
                <div className="p-6 border-b border-gray-700 md:border-l border-l-gray-700 bg-gray-900/30">
                  <p className="text-gray-300 leading-relaxed">
                    No scope gaps, no permit confusionâone company handles everything legally
                  </p>
                </div>

                {/* Row 2 */}
                <div className="p-6 border-b border-gray-700 bg-gray-900/30">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">160 MPH</span> Wind Warranty for shingles<br />
                    <span className="font-semibold text-white">200 MPH</span> Wind Warranty for Metal
                  </p>
                </div>
                <div className="p-6 border-b border-gray-700 md:border-l border-l-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    One of the <span className="text-red-400 font-semibold">strongest wind-protection warranties</span> available in the South Florida market
                  </p>
                </div>

                {/* Row 3 */}
                <div className="p-6 border-b border-gray-700">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Elite Manufacturer Certifications</span> (Carlisle, GAF Gold, CertainTeed, TAMKO, IB Roof Systems, and more)
                  </p>
                </div>
                <div className="p-6 border-b border-gray-700 md:border-l border-l-gray-700 bg-gray-900/30">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-red-400 font-semibold">Manufacturer-backed warranties</span> and verified installation standards on every project
                  </p>
                </div>

                {/* Row 4 */}
                <div className="p-6 border-b border-gray-700 bg-gray-900/30">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Directorii $25,000 Workmanship Guarantee</span>
                  </p>
                </div>
                <div className="p-6 border-b border-gray-700 md:border-l border-l-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-red-400 font-semibold">Third-party-backed financial protection</span> that proves we stand behind our work
                  </p>
                </div>

                {/* Row 5 */}
                <div className="p-6">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Certified MySafeFloridaHome Contractor</span>
                  </p>
                </div>
                <div className="p-6 md:border-l border-l-gray-700 bg-gray-900/30">
                  <p className="text-gray-300 leading-relaxed">
                    Qualified to help homeowners access <span className="text-red-400 font-semibold">wind mitigation discounts and state programs</span>
                  </p>
                </div>
              </div>
            </div>

            <ChamberBadges />
          </div>

          {/* Our Roofing Services Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Our Roofing Services in South Florida
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
              <p>
                From full roof replacements to emergency leak repairs, our team handles every phase of your roofing projectâresidential and commercial. You can find a list of our roofing services and products, including custom-fabricated accessories that enhance installation, waterproofing, and aesthetics. We pay close attention to details, ensuring precise fitting and tailored solutions for every client.
              </p>

              <p>
                Our service workflow includes helping you order the right materials and submit any required documentation or permits. We have recently received a significant increase in inquiries about metal roof installations, reflecting current trends in the industry. Our ongoing research keeps us up-to-date with industry best practices and safety standards. Visit our website to learn more about our offerings and how we can help with your roofing needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Roof Replacement */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                  <a href="/roof-replacement" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">Roof Replacement</a>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether your roof is aging out or storm-damaged beyond repair, we manage complete tear-off and replacement to current Florida Building Code standards. In the proper order of the roof replacement process, contractors should perform a complete tear-off of the old roof to inspect for rotting decking before installing new materials. It is also essential to ask your roofing contractor for a detailed written estimate that includes itemized costs for labor, materials, permits, and disposal.
                </p>
              </div>

              {/* Roof Repair */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                  <a href="/roof-repair" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">Roof Repair</a>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Leaks, missing shingles, cracked tiles, damaged flashingâwe diagnose the issue and fix it right the first time so small problems don't become big ones.
                </p>
              </div>

              {/* Storm Damage Restoration */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Storm Damage Restoration
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  After a hurricane or severe weather event, we provide full damage assessments, insurance documentation, and restorationâfrom tarping to final inspection.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  It is important to note that failure to pull permits and skipping inspections are common legal issues faced by a roofing contractor. In such cases, contractors can face civil penalties and be required to pay restitution for failing to meet contractual obligations. For example, in the case of a well known roofing company, they faced significant legal consequences for non-compliance with permitting and inspection requirements.
                </p>
              </div>

              {/* Roof Inspections & Maintenance */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                  <a href="/roof-inspection" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">Roof Inspections & Maintenance</a>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Routine inspections catch problems early. To ensure you choose the right roofing contractor for inspections and maintenance, find and review at least three detailed, written bids to compare services and pricing. Requesting references from past clients can also help verify the contractor's professionalism and quality of work. Our preventative maintenance programs extend your roof's lifespan and protect your warranty.
                </p>
              </div>

              {/* Shingle Roofing */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Shingle Roofing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We install premium shingle systems from Owens Corning, GAF, TAMKO, and CertainTeedâengineered for wind resistance and long-term durability.
                </p>
              </div>

              {/* Tile Roofing */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Tile Roofing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Concrete and clay tile installations certified by Eagle, Westlake, and Brava. Tile roofing delivers superior wind and impact performance for South Florida homes.
                </p>
              </div>

              {/* Metal Roofing */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Metal Roofing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Certified by Englert and backed by Metal Alliance, our metal roof systems offer exceptional longevity, energy efficiency, and wind resistance. We have recently received a significant increase in inquiries from homeowners interested in metal roof installations, reflecting the growing demand for this durable and efficient roofing option.
                </p>
              </div>

              {/* Flat Roofing Systems */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Flat Roofing Systems
                </h3>
                <p className="text-gray-400 text-sm mb-2">(TPO, EPDM, PVC, Modified Cap Sheet)</p>
                <p className="text-gray-300 leading-relaxed">
                  Certified installers for IB Roof Systems, Soprema, Fibertite, Mule-Hide, and Conklin. Ideal for commercial properties and modern residential designs.
                </p>
              </div>

              {/* Additional Services */}
              <div className="md:col-span-2 bg-gradient-to-br from-red-900/20 to-gray-900/80 border border-red-700/30 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Additional Services
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We also provide solar-ready roofing integration, waterproofing, gutter systems, wind mitigation documentation, and full permit coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Services at a Glance Table */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Services at a Glance
            </h2>

            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-red-600/20 border-b border-gray-700">
                      <th className="px-6 py-4 text-left text-white font-bold text-lg">Service</th>
                      <th className="px-6 py-4 text-left text-white font-bold text-lg">Best For</th>
                      <th className="px-6 py-4 text-left text-white font-bold text-lg">Why South Florida Homeowners Need It</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Roof Replacement */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <a href="/roof-replacement-process/" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">
                          Roof Replacement
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Aging or storm-damaged roofs
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        HVHZ-compliant systems that meet current Florida wind codes
                      </td>
                    </tr>

                    {/* Roof Repair */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <a href="/roof-repair/" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">
                          Roof Repair
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Leaks, missing shingles, flashing damage
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Prevents water intrusion and protects interior during rainy season
                      </td>
                    </tr>

                    {/* Storm Damage Restoration */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <span className="text-red-400 font-semibold">
                          Storm Damage Restoration
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Post-hurricane and severe weather
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Insurance coordination and full restoration under one contractor
                      </td>
                    </tr>

                    {/* Tile Roofing */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <a href="/tile-roofing/" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">
                          Tile Roofing
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        High-wind zones, HOA-regulated communities
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Superior impact resistance and Florida-approved aesthetics
                      </td>
                    </tr>

                    {/* Metal Roofing */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <a href="/metal-roofing/" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">
                          Metal Roofing
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Energy-conscious homeowners
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Reflects heat, resists wind, and lasts 40â70 years
                      </td>
                    </tr>

                    {/* Flat Roofing */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <a href="/flat-roofing/" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">
                          Flat Roofing
                        </a>
                        <span className="text-gray-400 text-sm block mt-1">(TPO/PVC/EPDM)</span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Commercial and modern residential
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Waterproof membrane systems designed for low-slope applications
                      </td>
                    </tr>

                    {/* Inspections & Maintenance */}
                    <tr className="hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <a href="/roof-inspection/" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">
                          Inspections & Maintenance
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        All roof types and ages
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        Catches problems early, protects warranties, extends roof life
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Commercial Roofing Solutions Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Commercial Roofing Solutions for South Florida Businesses
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                For South <span className="text-blue-400 font-medium">Florida businesses</span>, a dependable <span className="text-blue-400 font-medium">roofing system</span> is more than just a necessityâit's a <span className="text-orange-400 font-medium">critical investment</span> in the <span className="text-orange-400 font-medium">safety and success</span> of your operations. Our company understands that every <span className="text-blue-400 font-medium">commercial building</span> has <span className="text-blue-400 font-medium">unique requirements</span>, from the <span className="text-blue-400 font-medium">type of materials</span> used to the level of <span className="text-orange-400 font-medium">energy efficiency</span> needed to keep costs down and performance high. That's why we offer a full suite of <a href="/commercial-roofing" className="text-red-400 hover:text-red-300 font-semibold hover:underline transition-colors">commercial roofing</a> solutions, <span className="text-blue-400 font-medium">including</span> expert installation, timely repairs, and <span className="text-blue-400 font-medium">complete roof replacements</span>, all <span className="text-orange-400 font-medium">tailored</span> to meet the <span className="text-blue-400 font-medium">specific needs</span> of your business.
              </p>

              <p>
                Our team of <span className="text-blue-400 font-medium">experienced contractors</span> works closely with <span className="text-blue-400 font-medium">business owners</span> to design and install <span className="text-orange-400 font-medium">roofing systems</span> that <span className="text-blue-400 font-medium">not only protect</span> your building but also <span className="text-orange-400 font-medium">support</span> your long-term goals. We use only <span className="text-orange-400 font-medium">premium, durable materials</span> to <span className="text-blue-400 font-medium">ensure</span> your new roof stands up to <span className="text-blue-400 font-medium">South Florida's challenging conditions</span>, and we're <span className="text-blue-400 font-medium">committed</span> to delivering results that <span className="text-blue-400 font-medium">meet or exceed</span> all relevant <span className="text-blue-400 font-medium">building codes</span>. Whether you need a <span className="text-blue-400 font-medium">minor repair</span> or a <span className="text-orange-400 font-medium">full-scale installation</span>, you can count on us for <span className="text-orange-400 font-medium">reliable support</span>, clear communication, and a <span className="text-blue-400 font-medium">commitment to quality</span> that keeps your business coveredâtoday and for decades to come.
              </p>
            </div>
          </div>

          {/* Customer Testimonials Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              What South Florida Homeowners Are Saying About All Phase Construction USA
            </h2>

            <div className="text-center mb-6">
              <p className="text-xl text-yellow-400 font-semibold mb-2">
                â­ 4.8+ out of 5 â Based on 100+ verified Google reviews
              </p>
              <p className="text-gray-300 text-lg">
                Our customers consistently highlight the same things: clear communication, professional crews, clean job sites, and a process that takes the stress out of roofing.
              </p>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-4 italic">
                  "All Phase Construction replaced our entire roof after Hurricane Irma. From the initial inspection through the final walkthrough, every step was communicated clearly. The crew was professional, the job site was spotless every evening, and they handled our insurance paperwork seamlessly. I would recommend them to anyone in Broward County."
                </p>
                <p className="text-white font-semibold">â Robert M.</p>
                <p className="text-gray-400 text-sm">Deerfield Beach</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-4 italic">
                  "We had three other roofing companies come out for estimates, and All Phase was the only one that took the time to explain the code requirements for our area. They didn't just sell us a roofâthey educated us on what we actually needed. The 160 MPH wind warranty sealed the deal."
                </p>
                <p className="text-white font-semibold">â Jennifer K.</p>
                <p className="text-gray-400 text-sm">Coral Springs</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-4 italic">
                  "Professional from start to finish. They pulled all permits, coordinated the inspection, and cleaned up like they were never there. Our new tile roof looks incredible and we have complete peace of mind going into hurricane season."
                </p>
                <p className="text-white font-semibold">â Carlos D.</p>
                <p className="text-gray-400 text-sm">Boca Raton</p>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-4 italic">
                  "I've used All Phase for two properties nowâone residential and one commercial flat roof. Both projects were completed on time and on budget. Their certification stack is real, and it shows in the quality of the installation."
                </p>
                <p className="text-white font-semibold">â David L.</p>
                <p className="text-gray-400 text-sm">Pompano Beach</p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg font-medium">
                The pattern is clear: homeowners trust All Phase Construction USA because we deliver on our promisesâevery permit pulled, every code met, every warranty backed.
              </p>
            </div>

            {/* Review Platform Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <a
                href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-base sm:text-lg"
              >
                <span className="text-2xl">ðµ</span>
                <span>Read more reviews on Google â</span>
              </a>

              <a
                href={EXTERNAL_LINKS.BBB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium text-base sm:text-lg"
              >
                <span className="text-2xl">ð¡</span>
                <span>See our BBB A+ profile â</span>
              </a>

              <a
                href="https://directorii.com/us/fl/deerfield-beach/all-phase-construction-usa-llc-reviews-279/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium text-base sm:text-lg"
              >
                <span className="text-2xl">ð´</span>
                <span>Check us out on Directorii â</span>
              </a>
            </div>
          </div>

          {/* Storm Chasers vs. Established Roofers Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Storm Chasers vs. Established Roofers â How to Tell the Difference in South Florida
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                After every major storm, South Florida sees an influx of out-of-state roofing companies. They knock on doors, offer fast repairs, and pressure homeowners to sign over insurance claims. They're called <span className="text-red-400 font-medium">storm chasers</span>âand they're a serious problem.
              </p>

              <p>
                These companies often lack proper Florida licensing, use substandard materials, skip permits, and disappear before warranty issues surface. When something goes wrong, there's no one to call.
              </p>

              <p>
                <span className="text-orange-400 font-semibold">All Phase Construction USA</span> has been rooted in Deerfield Beach since 2005. We're <span className="text-blue-400 font-medium">dual-licensed in Florida</span>, backed by <span className="text-blue-400 font-medium">manufacturer certifications</span>, and accountable to our community. We don't chase stormsâ<span className="text-orange-400 font-medium">we protect homes from them</span>.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="mt-8 overflow-x-auto">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-900/30 to-red-800/20">
                      <th className="text-left p-4 sm:p-5 font-bold text-white border-b-2 border-red-600/50 text-base sm:text-lg">Factor</th>
                      <th className="text-left p-4 sm:p-5 font-bold text-white border-b-2 border-red-600/50 text-base sm:text-lg">Storm Chaser</th>
                      <th className="text-left p-4 sm:p-5 font-bold text-white border-b-2 border-red-600/50 text-base sm:text-lg">All Phase Construction USA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Warranty Row */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-200">Warranty</td>
                      <td className="p-4 sm:p-5 text-gray-300">
                        <span className="text-red-400 font-medium">Little to noneâgone before you need it</span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-200">
                        <span className="text-blue-400 font-semibold">160 MPH wind warranty for shingles</span><br />
                        <span className="text-blue-400 font-semibold">200 MPH wind warranty for metal</span> + manufacturer-backed coverage
                      </td>
                    </tr>

                    {/* Licensing Row */}
                    <tr className="border-b border-gray-700/50 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-200">Licensing</td>
                      <td className="p-4 sm:p-5 text-gray-300">
                        <span className="text-red-400 font-medium">Often out-of-state or unlicensed in FL</span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-200">
                        <span className="text-blue-400 font-semibold">Dual FL State Certified: Roofing + General Contractor</span>
                      </td>
                    </tr>

                    {/* Local Presence Row */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-200">Local Presence</td>
                      <td className="p-4 sm:p-5 text-gray-300">
                        <span className="text-red-400 font-medium">No office, no roots, no accountability</span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-200">
                        <span className="text-blue-400 font-semibold">Deerfield Beach HQ, 20+ years local, chamber member</span>
                      </td>
                    </tr>

                    {/* Insurance Handling Row */}
                    <tr className="border-b border-gray-700/50 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-200">Insurance Handling</td>
                      <td className="p-4 sm:p-5 text-gray-300">
                        <span className="text-red-400 font-medium">Pressures you to sign over your claim</span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-200">
                        <span className="text-blue-400 font-semibold">Guides you transparently through the process</span>
                      </td>
                    </tr>

                    {/* Materials Row */}
                    <tr className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-200">Materials</td>
                      <td className="p-4 sm:p-5 text-gray-300">
                        <span className="text-red-400 font-medium">Whatever is cheapest and available</span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-200">
                        <span className="text-blue-400 font-semibold">Manufacturer-spec, premium systems (Tamko, GAF, etc.)</span>
                      </td>
                    </tr>

                    {/* After the Job Row */}
                    <tr className="bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-200">After the Job</td>
                      <td className="p-4 sm:p-5 text-gray-300">
                        <span className="text-red-400 font-medium">Goneânumber disconnected</span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-200">
                        <span className="text-blue-400 font-semibold">Ongoing support, follow-up, and Directorii $25K guarantee</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* HQ Location Card + Map - 2 Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - HQ Location Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">Deerfield Beach</h3>
                  <p className="text-red-500 text-sm font-semibold">Headquarters</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6 pb-6 border-b border-gray-700">
                <p className="text-gray-200 text-base leading-relaxed">
                  590 Goolsby Boulevard<br />
                  Deerfield Beach, FL 33442
                </p>
                <p className="text-gray-300 text-sm mt-3">
                  Serving Palm Beach + Broward County
                </p>
              </div>

              {/* Trust Row */}
              <div className="mb-6 pb-6 border-b border-gray-700">
                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white font-semibold">4.8</span>
                    <span className="text-gray-300 sm:text-gray-400">Google Reviews</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-200">
                    <Shield className="w-4 h-4 text-red-500" />
                    <span className="text-white font-semibold">Dual-Licensed</span>
                    <span className="text-gray-300 sm:text-gray-400 text-xs">(CCC/CGC)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-200">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-white font-semibold">Open 24/7</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://www.google.com/maps/place/All+Phase+Construction+USA,+LLC/@26.310786,-80.127335,15z/data=!4m6!3m5!1s0x88d91d982b569be1:0xc298661959b65cbf!8m2!3d26.3107856!4d-80.1273349!16s%2Fg%2F11qpj3rkr8?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="tel:+17542275605"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column - Styled Google Map */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-2 shadow-2xl">
              <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '75%', minHeight: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.3071856042744!2d-80.12733492403144!3d26.310785577038298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d982b569be1%3A0xc298661959b65cbf!2sAll%20Phase%20Construction%20USA%2C%20LLC!5e0!3m2!1sen!2sus!4v1738436000000!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All Phase Construction USA, LLC - 590 Goolsby Blvd, Deerfield Beach, FL 33442"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <TrustBadges />
      <HappyCustomers />
      <CaseStudy />
      <ServiceAreas />
      <CommonServiceAreasTable />
      <ServiceAreasCTA />
      <HomeownerResources />
      <MicroFAQ />
      <FAQ />
      <ChamberBadge />
      <LocationMap />
    </>
  );
}
