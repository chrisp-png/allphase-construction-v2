import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, AlertTriangle, Phone, Calendar, FileCheck, Award, MapPin } from 'lucide-react';

export default function BestRooferCoralSpringsPage() {
  return (
    <>
      <Helmet>
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I verify a roofing contractor's license in Coral Springs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
                }
              },
              {
                "@type": "Question",
                "name": "Does my roof replacement in Coral Springs need a permit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Any roof replacement or significant repair in Coral Springs requires a permit from Broward County Building Division. The permit triggers a final inspection by a county building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
                }
              },
              {
                "@type": "Question",
                "name": "What is HVHZ and why does it matter in Coral Springs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HVHZ stands for High Velocity Hurricane Zone. Coral Springs and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in Coral Springs must be familiar with and comply with HVHZ requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use my homeowner's insurance to pay for a new roof in Coral Springs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value â the difference can be substantial on an older roof."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing materials are best for Coral Springs's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Concrete tile is the most common residential roofing material in Coral Springs and performs well in South Florida's climate â it's impact-resistant, has a long service life, and has established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a roof last in Coral Springs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Concrete tile roofs in Coral Springs typically last 25â40 years with proper maintenance, though underlayment replacement is often needed in the 15â20 year range. Asphalt shingles last 15â20 years under South Florida conditions. Metal roofing has a 40â50 year service life. Flat roofing systems (modified bitumen, TPO) typically require maintenance every 10â15 years and full replacement after 20â25 years."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do immediately after a storm damages my roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Document the damage with photographs before any temporary repairs are made. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage â this is typically covered under your policy's emergency repair provision. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment."
                }
              }
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://allphaseconstructionfl.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Locations",
                "item": "https://allphaseconstructionfl.com/locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Coral Springs",
                "item": "https://allphaseconstructionfl.com/locations/coral-springs"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Best Roofers Coral Springs",
                "item": "https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6 flex items-center gap-2 text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <Link to="/locations/coral-springs" className="hover:text-white transition-colors">Coral Springs</Link>
              <span>/</span>
              <span className="text-white">Best Roofers</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Top 5 Best Rated Roofers in Coral Springs, FL (2026)
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">
              Finding a Roofer in Coral Springs You Can Actually Trust
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7542275605"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                (754) 227-5605
              </a>
              <Link
                to="/roof-inspection"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-slate-700 leading-relaxed">
              Coral Springs has no shortage of roofing contractors. Drive through downtown or any residential neighborhood after a storm and you'll see door hangers from out-of-state crews who materialized overnight. Search Google and you'll get a mix of national lead aggregators, unlicensed outfits running Facebook ads, and a handful of legitimate local contractors buried somewhere in the results.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The problem isn't finding a roofer â it's knowing which ones are worth trusting with a $15,000 to $40,000 investment on a home that sits in one of the most demanding climate zones in North America.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Coral Springs falls entirely within Broward County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience. HVHZ compliance isn't optional â it's code, and it's enforced by Broward County Building Division, which runs a rigorous permitting and inspection process.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We've put together this list to give Coral Springs homeowners a starting point: five contractors we consider worth evaluating, ranked based on licensing, track record, and demonstrated capability in the specific demands of this market.
            </p>
          </div>

          {/* Top 5 List */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your List of the Top 5 Best Roofers in Coral Springs, FL</h2>
            <ol className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <span className="font-semibold text-slate-900">All Phase Construction USA</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <span className="text-slate-700">Rooftec of Florida</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <span className="text-slate-700">Berwald Roofing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <span className="text-slate-700">All American Roofing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <span className="text-slate-700">South Florida Roofing</span>
              </li>
            </ol>
          </div>

          {/* How We Chose Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Chose the Roofing Companies in Coral Springs</h2>
            <div className="space-y-6 text-lg text-slate-700">
              <p>
                Every contractor on this list was evaluated against a consistent set of criteria specific to Coral Springs and Broward County's requirements:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Florida state licensing</h3>
                    <p>We verified active CCC (roofing) or CGC (general contractor) licensure through the Florida Department of Business and Professional Regulation (DBPR). An unlicensed contractor cannot legally pull a permit in Coral Springs, and unpermitted work can create serious problems during insurance claims and property transfers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">HVHZ compliance capability</h3>
                    <p>Coral Springs's High Velocity Hurricane Zone designation requires specific product approvals, fastening schedules, and installation methods. Not every roofer who advertises in Coral Springs is fully conversant with HVHZ requirements. We looked for contractors with demonstrated experience pulling permits in Broward County and working with its building department.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileCheck className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Permit history</h3>
                    <p>Contractors who routinely pull permits on projects they perform in Coral Springs demonstrate accountability. Permit history is publicly verifiable through Broward County's online permit portal.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Scope of services</h3>
                    <p>Coral Springs's housing stock ranges from historic Mediterranean Revival homes in Eagle Trace and Wyndham Lakes to newer developments and waterfront properties along the canals. We prioritized contractors who can work across multiple roof system types â tile, shingle, metal, and flat/modified bitumen.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comparing the Top Rated Roofing Companies in Coral Springs, FL</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Contractor</th>
                    <th className="p-4 text-left">License Type</th>
                    <th className="p-4 text-left">HVHZ Experience</th>
                    <th className="p-4 text-left">Roof Systems</th>
                    <th className="p-4 text-left">Insurance Claims</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-red-50">
                    <td className="p-4 font-semibold">All Phase Construction USA</td>
                    <td className="p-4">CCC + CGC (dual)</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Metal, Shingle, Flat</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Rooftec of Florida</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Metal, Shingle</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Berwald Roofing</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Shingle, Flat</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">All American Roofing</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">All systems</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">South Florida Roofing</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Shingle, Repair</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Reviews - All Phase Construction USA */}
          <section className="mb-12 bg-gradient-to-br from-red-50 to-slate-50 rounded-xl p-8 border-2 border-red-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">All Phase Construction USA â Coral Springs, FL</h2>
              </div>
            </div>

            <div className="space-y-4 text-lg text-slate-700">
              <p>
                All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Palm Beach and Broward County, with significant project history in Coral Springs across multiple neighborhoods and roof system types.
              </p>
              <p>
                The dual-license structure matters in Coral Springs specifically. Roofing projects on older homes in historic districts like Eagle Trace, Wyndham Lakes, or Cypress Glen often involve structural repairs â rotted decking, damaged rafters, deteriorated fascia â that require a general contractor license to address legally. Many roofing-only contractors encounter these issues mid-project and either perform work outside their license scope or ask the homeowner to hire a second contractor. All Phase handles both under one license.
              </p>
              <p>
                Broward County's building department requires HVHZ-compliant materials and installation methods. All Phase installs roofing systems with Florida Product Approval numbers applicable to Broward County's wind speed requirements, and routinely works with the county's inspection scheduling process.
              </p>
              <p>
                The company also has specific experience in the waterfront neighborhoods that make Coral Springs's roofing environment uniquely challenging. Properties along the Intracoastal and near Palm Beach Island face accelerated salt-air corrosion on metal components â flashing, drip edge, fasteners â that requires attention to material specification that goes beyond what standard inland installation requires.
              </p>

              <div className="bg-white rounded-lg p-6 mt-6">
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">License:</p>
                    <p>CCC-1331464 (Roofing)</p>
                    <p>CGC-1526236 (General Contractor)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Service area:</p>
                    <p>Coral Springs and all of Palm Beach and Broward County</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone:</p>
                    <p><a href="tel:7542275605" className="text-red-600 hover:text-red-700">(754) 227-5605</a></p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Website:</p>
                    <p><Link to="/" className="text-red-600 hover:text-red-700">allphaseconstructionfl.com</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Contractors - Abbreviated for length */}
          <section className="space-y-12 mb-16">
            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold text-slate-900">Rooftec of Florida â Coral Springs, FL</h2>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>
                  Rooftec of Florida is a family-owned roofing contractor based in Broward County with over 30 years of operation. Their longevity in the Coral Springs market â through multiple hurricane seasons, code cycles, and insurance market disruptions â is itself a signal of operational stability that newer entrants can't offer.
                </p>
                <p>
                  What distinguishes Istueta in the Coral Springs context is their explicit specialization in tile roofing systems. Their team handles a range of residential roofing in Broward County with a focus on established neighborhoods in Coral Springs and Parkland.
                </p>
                <p className="text-sm">Website: rooftecoffl.com</p>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold text-slate-900">Berwald Roofing â Coral Springs, FL</h2>
              </div>
              <p className="text-slate-700">
                Berwald Roofing is a Broward County contractor with a consistent presence in Coral Springs. The company has built a reputation for reliable service and quality workmanship across residential and commercial properties.
              </p>
              <p className="text-sm mt-3 text-slate-700">Website: berwaldroofing.com</p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h2 className="text-2xl font-bold text-slate-900">All American Roofing â Coral Springs, FL</h2>
              </div>
              <p className="text-slate-700">
                All American Roofing is one of the larger regional roofing contractors operating throughout South Florida. With multiple locations and a substantial crew capacity, they handle high-volume residential and commercial projects across Broward County.
              </p>
              <p className="text-sm mt-3 text-slate-700">Website: allamericanroofingfl.com</p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h2 className="text-2xl font-bold text-slate-900">South Florida Roofing â Coral Springs, FL</h2>
              </div>
              <p className="text-slate-700">
                South Florida Roofing has been operating in Broward County for multiple decades, making them one of the longer-tenured residential roofing contractors with a specifically local focus. Their experience includes work on historic properties and modern installations.
              </p>
              <p className="text-sm mt-3 text-slate-700">Website: southfloridaroofing.com</p>
            </div>
          </section>

          {/* Red Flags Section */}
          <section className="mb-16 bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <h2 className="text-3xl font-bold text-slate-900">Common Red Flags When Choosing a Roofer in Coral Springs, FL</h2>
            </div>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">â¢</span>
                <span><strong>Requests for full payment upfront.</strong> A standard payment schedule involves a deposit at contract signing (typically 10-30%), progress payments at defined milestones, and final payment after inspection approval.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">â¢</span>
                <span><strong>No permit.</strong> If a contractor suggests skipping the permit to save time or money, decline the project. In Coral Springs, unpermitted roofing work can result in a stop-work order, fines, required demolition of the unpermitted work, and insurance claim complications.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">â¢</span>
                <span><strong>Verbal quotes only.</strong> Every roofing project should have a written contract specifying materials, scope, payment schedule, and warranty terms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">â¢</span>
                <span><strong>Inability to verify license.</strong> Any Florida contractor should be able to provide their license number for verification at myfloridalicense.com.</span>
              </li>
            </ul>
          </section>

          {/* Storm Chasers Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Storm Chasers vs. Established Roofers in Coral Springs â Know the Difference</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                After every named storm, Coral Springs gets an influx of out-of-state roofing crews. They typically work door-to-door in affected neighborhoods, offer to perform "free inspections," and push insurance claims. Some are legitimate. Many are not.
              </p>
              <p>
                Warning signs of a storm chaser operation: out-of-state license plates and no Florida address, pressure to sign an Assignment of Benefits (AOB) before you have had your roof independently assessed, inability to provide a Florida roofing contractor license number, no local permit history, and requests for large upfront deposits before any work begins.
              </p>
              <p>
                Florida law allows homeowners to assign their insurance benefits to a contractor, but doing so gives the contractor authority to negotiate with your insurance company directly and removes your control over the claims process. This practice has a well-documented history of abuse in Broward County, and your insurer may treat it as a red flag.
              </p>
              <p>
                If you need to file a storm claim, contact your insurance company first. Have an independent inspection before signing any documentation with a roofing contractor. Use a contractor you can verify through DBPR and Broward County's permit portal.
              </p>
            </div>
          </section>

          {/* Professional Job Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What a Professional Roofing Job Looks Like in Coral Springs From Start to Finish</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                A legitimate roofing replacement or significant repair project in Coral Springs follows a predictable sequence. Understanding this helps you evaluate whether a contractor is running a proper operation.
              </p>
              <p>
                <strong>Inspection and scope definition:</strong> The process starts with a roof inspection â a physical assessment of the existing system to determine condition, identify failure points, and determine whether repair or replacement is appropriate. A contractor who quotes a replacement without getting on the roof has not done an inspection.
              </p>
              <p>
                <strong>Permit application:</strong> The contractor applies for a permit with Broward County Building Division before any work begins. The permit application identifies the contractor, the property, the scope of work, and the materials to be used. If a contractor starts work without a permit, stop the project.
              </p>
              <p>
                <strong>Material delivery and setup:</strong> Materials are delivered to the site, typically the day before or the morning of the installation. The crew sets up tarps and protective coverings over landscaping, HVAC equipment, and pool areas before tear-off begins.
              </p>
              <p>
                <strong>Tear-off and decking inspection:</strong> The existing roof system is removed and the decking is inspected. Damaged or rotted decking sections must be replaced before the new system is installed. Any contractor who refuses to discuss decking replacement until after the job is underway should be approached with caution.
              </p>
              <p>
                <strong>Installation to code:</strong> The new system is installed to HVHZ standards â specific fastening patterns, underlayment requirements, flashing details, and ridge and hip finishing. In Coral Springs, this means the installation must meet the Florida Building Code requirements for Broward County's wind exposure category.
              </p>
              <p>
                <strong>Inspection:</strong> Broward County schedules a building department inspection of the completed work. The inspector verifies that the installation meets code. Final inspection approval closes the permit.
              </p>
              <p>
                <strong>Wind mitigation report:</strong> After inspection approval, the contractor or a licensed inspector produces a wind mitigation report documenting the roof's construction features. This report can be submitted to your homeowner's insurance company for premium review â a properly installed HVHZ-compliant roof can produce meaningful insurance savings.
              </p>
            </div>
          </section>

          {/* Understanding Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Roofing Pricing in Coral Springs â Cheap, Fair, and Overpriced</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                Coral Springs roofing prices fall into roughly three categories, and the lowest bid rarely represents the best value.
              </p>
              <p>
                Cheap bids typically involve unlicensed labor, inferior materials, no permit, or some combination of all three. In Coral Springs, an unpermitted roof creates liability problems when you sell the property, file an insurance claim, or face a code enforcement inquiry. A roof that fails prematurely also costs more over its life than a proper installation at fair market price.
              </p>
              <p>
                Fair market pricing for a complete tile roof replacement on a typical Coral Springs home runs roughly $20,000 to $35,000 depending on size, pitch, and material specification. Shingle replacements run $14,000 to $25,000. Metal roofing runs $25,000 to $50,000 for residential systems. These ranges reflect HVHZ-compliant installation with permits, decking inspection, and manufacturer-warranty-eligible materials.
              </p>
              <p>
                Overpriced bids are common in the post-storm market and in neighborhoods where contractors assume homeowners are running insurance claims and therefore less price-sensitive. Get at least three written bids before committing to any project over $5,000.
              </p>
            </div>
          </section>

          {/* Roofing Costs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Roofing Costs in Coral Springs â What Should You Expect to Pay?</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                Roof repair costs in Coral Springs vary significantly by scope and system type. Minor repairs â sealing a single penetration, replacing a handful of tiles, re-bedding ridge caps â typically run $300 to $1,200. More extensive repairs involving underlayment damage, flashing replacement, or structural issues can run $2,000 to $8,000.
              </p>
              <p>
                Full roof replacement costs depend primarily on roof type, size, and material specification:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Asphalt shingle replacement:</strong> $14,000â$25,000 for a typical 2,000â2,500 SF Coral Springs home</li>
                <li><strong>Concrete tile replacement:</strong> $20,000â$35,000 depending on tile weight, profile, and existing structural condition</li>
                <li><strong>Metal roofing (standing seam or metal tile):</strong> $25,000â$50,000 for residential systems</li>
                <li><strong>Flat roofing (modified bitumen or TPO):</strong> $10,000â$20,000 for typical residential flat sections</li>
              </ul>
              <p>
                These figures reflect licensed, permitted, HVHZ-compliant installation with inspection. They do not include decking replacement, which adds $2â$5 per square foot for damaged sections discovered during tear-off.
              </p>
              <p>
                Insurance-covered replacements typically follow the same cost structure, with the insurance payout covering actual cash value (ACV) or replacement cost value (RCV) depending on your policy. Understanding the difference between ACV and RCV before you file a claim can significantly affect your out-of-pocket costs.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ â Frequently Asked Questions About Roofing in Coral Springs</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I verify a roofing contractor's license in Coral Springs?",
                  a: "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
                },
                {
                  q: "Does my roof replacement in Coral Springs need a permit?",
                  a: "Yes. Any roof replacement or significant repair in Coral Springs requires a permit from Broward County Building Division. The permit triggers a final inspection by a county building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
                },
                {
                  q: "What is HVHZ and why does it matter in Coral Springs?",
                  a: "HVHZ stands for High Velocity Hurricane Zone. Coral Springs and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code."
                },
                {
                  q: "Can I use my homeowner's insurance to pay for a new roof in Coral Springs?",
                  a: "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Coral Springs Homeowners Choose All Phase Construction USA</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Dual-licensed roofing and general contractor serving Coral Springs with comprehensive HVHZ-compliant installations, full permitting, and wind mitigation documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:7542275605"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (754) 227-5605
              </a>
              <Link
                to="/roof-inspection"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Free Inspection
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
