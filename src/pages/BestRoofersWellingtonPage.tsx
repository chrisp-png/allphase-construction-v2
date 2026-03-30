import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

export default function BestRoofersWellingtonPage() {
  return (
    <>
      <Helmet>
        <title>Top 5 Best Rated Roofers in Wellington, FL (2026) | All Phase Construction</title>
        <meta name="description" content="Find trusted licensed roofing contractors in Wellington, FL. Compare top-rated companies, verify credentials, and get expert guidance on choosing the right roofer for your home." />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I verify a roofing contractor's license in Wellington?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to myfloridalicense.com and use the 'Verify a Licensee' tool. Search by the contractor's name or license number. Confirm the license is active, in the correct category (CCC for roofing or CGC for general contractor), and that it is not suspended or under disciplinary action."
                }
              },
              {
                "@type": "Question",
                "name": "Does my roof replacement in Wellington need a permit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Any roof replacement or significant repair in Wellington requires a permit from Palm Beach County Building Division. The permit triggers a final inspection by a county building inspector. Work performed without a permit is a code violation and can create complications with insurance claims and property sales."
                }
              },
              {
                "@type": "Question",
                "name": "What is HVHZ and why does it matter in Wellington?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HVHZ stands for High Velocity Hurricane Zone. Wellington and all of Palm Beach County fall within this designation under the Florida Building Code. HVHZ requirements specify more stringent fastening schedules, approved product lists, and installation methods than the standard Florida Building Code."
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
                "name": "Wellington",
                "item": "https://allphaseconstructionfl.com/locations/wellington"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Best Roofers Wellington",
                "item": "https://allphaseconstructionfl.com/locations/wellington/best-roofers-wellington"
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
              <Link to="/locations/wellington" className="hover:text-white transition-colors">Wellington</Link>
              <span>/</span>
              <span className="text-white">Best Roofers</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Top 5 Best Rated Roofers in Wellington, FL (2026)
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">
              Finding a Roofer in Wellington You Can Actually Trust
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
              Wellington has no shortage of roofing contractors. Drive through the equestrian areas or residential neighborhoods after a storm and you'll see door hangers from crews who appeared overnight. Search Google and you'll get a mix of national lead aggregators, unlicensed outfits, and a handful of legitimate local contractors.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The problem isn't finding a roofer — it's knowing which ones are worth trusting with a $15,000 to $40,000 investment on a home in one of the most demanding climate zones in North America.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Wellington falls entirely within Palm Beach County's High Velocity Hurricane Zone. Every roofing contractor working here must be licensed under Florida's roofing contractor license category (CCC) or as a certified general contractor (CGC) with roofing experience. HVHZ compliance isn't optional — it's code, enforced by Palm Beach County Building Division.
            </p>
          </div>

          {/* Top 5 List */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your List of the Top 5 Best Roofers in Wellington, FL</h2>
            <ol className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <span className="font-semibold text-slate-900">All Phase Construction USA</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <span className="text-slate-700">Istueta Roofing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <span className="text-slate-700">Roof Top Services</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <span className="text-slate-700">Kelly Roofing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <span className="text-slate-700">Crowther Roofing</span>
              </li>
            </ol>
          </div>

          {/* All Phase Construction Section */}
          <section className="mb-16 bg-red-50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</span>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">All Phase Construction USA</h2>
                <p className="text-slate-600">Deerfield Beach, FL | Serving Wellington Since 2005</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-slate-700">
              <p>
                All Phase Construction holds both a general contractor license (CGC-1526236) and a roofing contractor license (CCC-1331464). This dual licensing means they meet Florida's requirements to perform roofing work under two separate credential categories.
              </p>
              <p>
                Based in Deerfield Beach since 2005, All Phase has been installing roofs in Wellington and throughout Palm Beach County for nearly two decades. They understand HVHZ requirements, work with Palm Beach County Building Division regularly, and have an established track record with local insurance adjusters.
              </p>

              <div className="bg-white rounded-lg p-6 border border-red-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What Sets All Phase Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span><strong>Dual Licensing:</strong> CGC & CCC credentials demonstrate comprehensive construction expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span><strong>HVHZ Certified:</strong> Specialized training in High Velocity Hurricane Zone requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span><strong>Local Presence:</strong> Permanent Deerfield Beach headquarters, not seasonal storm chasers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span><strong>Insurance Experience:</strong> Works with all major carriers, understands claim documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 text-white rounded-lg p-6">
                <p className="text-xl font-bold mb-4">Schedule Your Free Roof Inspection</p>
                <p className="mb-4">Get a no-obligation assessment from a licensed, HVHZ-certified contractor</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:7542275605"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (754) 227-5605
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Request Inspection
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* How to Choose Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Choose a Roofer in Wellington</h2>
            <div className="space-y-6 text-lg text-slate-700">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Verify Their License</h3>
                <p>
                  Florida requires roofing contractors to hold either a CCC (roofing contractor) license or CGC (general contractor) license to legally perform roofing work. Visit myfloridalicense.com to verify the contractor's credentials are active and in good standing.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Confirm HVHZ Experience</h3>
                <p>
                  Wellington is in the High Velocity Hurricane Zone. Ask contractors about their experience with HVHZ installations, Miami-Dade NOA approvals, and Palm Beach County permitting requirements.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Check Their Local Presence</h3>
                <p>
                  Avoid contractors who only show up after storms. Look for companies with permanent addresses, established relationships with local suppliers, and a track record of serving Palm Beach County.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Understand Insurance Claims</h3>
                <p>
                  If filing an insurance claim, work with contractors experienced in claim documentation and communication with adjusters. Be cautious of anyone pushing Assignment of Benefits agreements before your insurer has inspected the damage.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-slate-700 mb-6">
              All Phase Construction USA offers free roof inspections throughout Wellington and Palm Beach County. Our licensed contractors will assess your roof, explain your options, and provide transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7542275605"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (754) 227-5605
              </a>
              <Link
                to="/locations/wellington"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Wellington Services
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
