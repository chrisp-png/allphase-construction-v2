import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, AlertTriangle, Phone, Calendar, FileCheck, Award, MapPin } from 'lucide-react';

export default function BestRoofersFortLauderdalePage() {
  return (
    <>
      <Helmet>
        <title>Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase</title>
        <meta
          name="description"
          content="Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list."
        />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale" />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I verify a roofing contractor's license in Fort Lauderdale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
                }
              },
              {
                "@type": "Question",
                "name": "Does my roof replacement in Fort Lauderdale need a permit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Any roof replacement or significant repair in Fort Lauderdale requires a permit from the City of Fort Lauderdale Building Services Department. The permit triggers a final inspection by a city building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
                }
              },
              {
                "@type": "Question",
                "name": "What is HVHZ and why does it matter in Fort Lauderdale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HVHZ stands for High Velocity Hurricane Zone. Fort Lauderdale and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code. Any roofing contractor working in Fort Lauderdale must be familiar with and comply with HVHZ requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use my homeowner's insurance to pay for a new roof in Fort Lauderdale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your roof sustained damage from a storm or other covered event, your homeowner's insurance policy may cover replacement costs. Contact your insurance company first, before signing any contractor documentation. Have an independent inspection done before agreeing to any Assignment of Benefits. Understand whether your policy pays actual cash value or replacement cost value — the difference can be substantial on an older roof."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing materials are best for Fort Lauderdale's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Concrete tile is the most common residential roofing material in Fort Lauderdale and performs well in South Florida's climate — it's impact-resistant, has a long service life, and has established HVHZ approvals. Metal roofing (standing seam or metal tile) provides excellent wind resistance and performs well in coastal salt-air environments. Asphalt shingles are less expensive but have shorter lifespans in South Florida's heat and UV environment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a roof last in Fort Lauderdale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Concrete tile roofs in Fort Lauderdale typically last 25–40 years with proper maintenance, though underlayment replacement is often needed in the 15–20 year range. Asphalt shingles last 15–20 years under South Florida conditions. Metal roofing has a 40–50 year service life. Flat roofing systems (modified bitumen, TPO) typically require maintenance every 10–15 years and full replacement after 20–25 years."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do immediately after a storm damages my roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Document the damage with photographs before any temporary repairs are made. Contact your insurance company to report the claim. Cover exposed areas with tarps to prevent interior water damage — this is typically covered under your policy's emergency repair provision. Do not sign any Assignment of Benefits or contract with a contractor before your insurance company has sent an adjuster or you have obtained an independent assessment."
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
                "name": "Fort Lauderdale",
                "item": "https://allphaseconstructionfl.com/locations/fort-lauderdale"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Best Roofers Fort Lauderdale",
                "item": "https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale"
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
              <Link to="/locations/fort-lauderdale" className="hover:text-white transition-colors">Fort Lauderdale</Link>
              <span>/</span>
              <span className="text-white">Best Roofers</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Top 5 Best Rated Roofers in Fort Lauderdale, FL (2026)
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">
              Finding a Roofer in Fort Lauderdale You Can Actually Trust
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
              Fort Lauderdale has no shortage of roofing contractors. Drive down Federal Highway after a storm and you'll see door hangers from out-of-state crews who materialized overnight. Search Google and you'll get a mix of national lead aggregators, unlicensed outfits running Facebook ads, and a handful of legitimate local contractors buried somewhere in the results.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The problem isn't finding a roofer — it's knowing which ones are worth trusting with a $12,000 to $35,000 investment on a home that sits in one of the most demanding climate zones in North America.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Fort Lauderdale falls entirely within Broward County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience. HVHZ compliance isn't optional — it's code, and it's enforced by the City of Fort Lauderdale Building Services Department, which runs its own permitting and inspection process separate from unincorporated Broward County.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We've put together this list to give Fort Lauderdale homeowners a starting point: five contractors we consider worth evaluating, ranked based on licensing, track record, and demonstrated capability in the specific demands of this market.
            </p>
          </div>

          {/* Top 5 List */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your List of the Top 5 Best Roofers in Fort Lauderdale, FL</h2>
            <ol className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <span className="font-semibold text-slate-900">All Phase Construction USA</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <span className="text-slate-700">Allied Roofing & Sheet Metal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <span className="text-slate-700">Tiger Team Roofing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <span className="text-slate-700">Nast Roofing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <span className="text-slate-700">Paul Bange Roofing</span>
              </li>
            </ol>
          </div>

          {/* How We Chose Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Chose the Roofing Companies in Fort Lauderdale</h2>
            <div className="space-y-6 text-lg text-slate-700">
              <p>
                Every contractor on this list was evaluated against a consistent set of criteria specific to Fort Lauderdale and Broward County's requirements:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Florida state licensing</h3>
                    <p>We verified active CCC (roofing) or CGC (general contractor) licensure through the Florida Department of Business and Professional Regulation (DBPR). An unlicensed contractor cannot legally pull a permit in Fort Lauderdale, and unpermitted work can create serious problems during insurance claims and property transfers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">HVHZ compliance capability</h3>
                    <p>Fort Lauderdale's High Velocity Hurricane Zone designation requires specific product approvals, fastening schedules, and installation methods. Not every roofer who advertises in Fort Lauderdale is fully conversant with HVHZ requirements. We looked for contractors with demonstrated experience pulling permits in the City of Fort Lauderdale and working with its building department.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileCheck className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Permit history</h3>
                    <p>Contractors who routinely pull permits on projects they perform in Fort Lauderdale demonstrate accountability. Permit history is publicly verifiable through the City of Fort Lauderdale's online permit portal.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Scope of services</h3>
                    <p>Fort Lauderdale's housing stock ranges from 1940s CBS (concrete block structure) homes in Sailboat Bend and Progresso to newer townhomes in Victoria Park and waterfront properties in Las Olas Isles and Harbor Beach. We prioritized contractors who can work across multiple roof system types — tile, shingle, metal, and flat/modified bitumen.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comparing the Top Rated Roofing Companies in Fort Lauderdale, FL</h2>
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
                    <td className="p-4">Allied Roofing & Sheet Metal</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Metal, Shingle</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Tiger Team Roofing</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Shingle, Flat</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Nast Roofing</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">Tile, Shingle, Repair</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Paul Bange Roofing</td>
                    <td className="p-4">CCC</td>
                    <td className="p-4"><CheckCircle2 className="h-5 w-5 text-green-600" /></td>
                    <td className="p-4">All systems</td>
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
                <h2 className="text-3xl font-bold text-slate-900">All Phase Construction USA — Fort Lauderdale, FL</h2>
              </div>
            </div>

            <div className="space-y-4 text-lg text-slate-700">
              <p>
                All Phase Construction USA is a dual-licensed roofing contractor holding both a Florida roofing contractor license (CCC-1331464) and a certified general contractor license (CGC-1526236). The company serves all of Broward and Palm Beach County, with significant project history in Fort Lauderdale across multiple neighborhoods and roof system types.
              </p>
              <p>
                The dual-license structure matters in Fort Lauderdale specifically. Roofing projects on older homes in areas like Riverside Park, Tarpon River, or Flagler Village often involve structural repairs — rotted decking, damaged rafters, deteriorated fascia — that require a general contractor license to address legally. Many roofing-only contractors encounter these issues mid-project and either perform work outside their license scope or ask the homeowner to hire a second contractor. All Phase handles both under one license.
              </p>
              <p>
                Fort Lauderdale's building department requires HVHZ-compliant materials and installation methods. All Phase installs roofing systems with Florida Product Approval numbers applicable to Broward County's wind speed requirements, and routinely works with the City of Fort Lauderdale's inspection scheduling process.
              </p>
              <p>
                The company also has specific experience in the waterfront neighborhoods that make Fort Lauderdale's roofing environment uniquely challenging. Properties in Las Olas Isles, Lauderdale Harbors, and Harbor Beach face accelerated salt-air corrosion on metal components — flashing, drip edge, fasteners — that requires attention to material specification that goes beyond what standard inland installation requires.
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
                    <p>Fort Lauderdale and all of Broward and Palm Beach County</p>
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
                <h2 className="text-2xl font-bold text-slate-900">Allied Roofing & Sheet Metal — Fort Lauderdale, FL</h2>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>
                  Allied Roofing & Sheet Metal is a family-owned roofing contractor based in Fort Lauderdale with over 25 years of operation in Broward, Miami-Dade, and Palm Beach counties. Their longevity in the Fort Lauderdale market — through multiple hurricane seasons, code cycles, and insurance market disruptions — is itself a signal of operational stability that newer entrants can't offer.
                </p>
                <p>
                  What distinguishes Allied in the Fort Lauderdale context is their explicit specialization in HVHZ systems. Their team is built around the technical requirements of High Velocity Hurricane Zone installation, covering tile, metal, and shingle systems with the fastening schedules, product approvals, and underlayment specifications that Broward County requires.
                </p>
                <p className="text-sm">Website: alliedroofingfl.com</p>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold text-slate-900">Tiger Team Roofing — Fort Lauderdale, FL</h2>
              </div>
              <p className="text-slate-700">
                Tiger Team Roofing is a Broward and Palm Beach County contractor with a consistent presence in Fort Lauderdale. The company has received Angie's List Super Service Award recognition multiple years running, which reflects sustained positive customer feedback rather than a one-time review spike.
              </p>
              <p className="text-sm mt-3 text-slate-700">Website: tigerteamroofing.com</p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h2 className="text-2xl font-bold text-slate-900">Nast Roofing — Fort Lauderdale, FL</h2>
              </div>
              <p className="text-slate-700">
                Nast Roofing has been operating in Fort Lauderdale for over 30 years, making them one of the longer-tenured residential roofing contractors with a specifically local focus. Thirty-plus years in Fort Lauderdale means Nast has worked through multiple roofing code cycles, the transition to HVHZ requirements, and several major storm seasons.
              </p>
              <p className="text-sm mt-3 text-slate-700">Website: nastroofing.com</p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h2 className="text-2xl font-bold text-slate-900">Paul Bange Roofing — Fort Lauderdale, FL</h2>
              </div>
              <p className="text-slate-700">
                Paul Bange Roofing is a South Florida institution with multiple decades in the market and locations across Broward and Palm Beach County. They are one of the higher-volume residential roofing contractors in the region and have established relationships with most major manufacturers.
              </p>
              <p className="text-sm mt-3 text-slate-700">Website: paulbangeroofing.com</p>
            </div>
          </section>

          {/* Red Flags Section */}
          <section className="mb-16 bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <h2 className="text-3xl font-bold text-slate-900">Common Red Flags When Choosing a Roofer in Fort Lauderdale, FL</h2>
            </div>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Requests for full payment upfront.</strong> A standard payment schedule involves a deposit at contract signing (typically 10-30%), progress payments at defined milestones, and final payment after inspection approval.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>No permit.</strong> If a contractor suggests skipping the permit to save time or money, decline the project. In Fort Lauderdale, unpermitted roofing work can result in a stop-work order, fines, required demolition of the unpermitted work, and insurance claim complications.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Verbal quotes only.</strong> Every roofing project should have a written contract specifying materials, scope, payment schedule, and warranty terms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Inability to verify license.</strong> Any Florida contractor should be able to provide their license number for verification at myfloridalicense.com.</span>
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Frequently Asked Questions About Roofing in Fort Lauderdale</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I verify a roofing contractor's license in Fort Lauderdale?",
                  a: "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
                },
                {
                  q: "Does my roof replacement in Fort Lauderdale need a permit?",
                  a: "Yes. Any roof replacement or significant repair in Fort Lauderdale requires a permit from the City of Fort Lauderdale Building Services Department. The permit triggers a final inspection by a city building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
                },
                {
                  q: "What is HVHZ and why does it matter in Fort Lauderdale?",
                  a: "HVHZ stands for High Velocity Hurricane Zone. Fort Lauderdale and all of Broward County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code."
                },
                {
                  q: "Can I use my homeowner's insurance to pay for a new roof in Fort Lauderdale?",
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
            <h2 className="text-3xl font-bold mb-4">Why Fort Lauderdale Homeowners Choose All Phase Construction USA</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Dual-licensed roofing and general contractor serving Fort Lauderdale with comprehensive HVHZ-compliant installations, full permitting, and wind mitigation documentation.
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
