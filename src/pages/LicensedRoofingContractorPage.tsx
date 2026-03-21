import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { Phone, CheckCircle2, Shield, AlertTriangle, FileText, Scale, Award, Building2 } from 'lucide-react';

const faqData = [
  {
    question: 'What is the difference between a licensed and unlicensed roofer in Florida?',
    answer: 'A licensed roofer holds a state-issued Certified Roofing Contractor (CCC) license from the Florida DBPR, meaning they passed the state exam, carry required insurance, and are accountable to the Construction Industry Licensing Board. Unlicensed roofers — sometimes called "handymen" or "storm chasers" — operate illegally for any job over $1,000 in Florida. Using an unlicensed roofer means no permit, no inspection, no warranty enforcement, and potential personal liability for worksite injuries.'
  },
  {
    question: 'How do I verify a Florida roofing contractor\'s license?',
    answer: 'Visit the Florida DBPR website at myfloridalicense.com/wl11.asp and search by name or license number. Look for an "Active" status, verify their insurance is current, and check for any disciplinary actions. For All Phase Construction USA, our Certified Roofing Contractor license is CCC-1331464 and our Certified General Contractor license is CGC-1526236 — both verifiable on the DBPR database.'
  },
  {
    question: 'What is a CCC license vs a CGC license in Florida?',
    answer: 'A CCC (Certified Roofing Contractor) license authorizes a contractor to perform roofing work — installation, repair, and replacement of roof systems. A CGC (Certified General Contractor) license authorizes structural work including framing, trusses, decking, and load-bearing components. Most roofers only hold a CCC. All Phase Construction USA holds both, which means we can address structural issues found during a roof replacement without subcontracting to a separate general contractor.'
  },
  {
    question: 'Does Florida require roofing contractors to pull permits?',
    answer: 'Yes. Florida law requires permits for all roofing work. The permit ensures the project is inspected at key stages and meets Florida Building Code requirements, including HVHZ standards in Broward and Miami-Dade Counties. A contractor who suggests skipping the permit is either unlicensed or cutting corners — both are red flags. All Phase handles all permitting and scheduling of municipal inspections on every project.'
  },
  {
    question: 'What insurance should a licensed roofer carry in Florida?',
    answer: 'At minimum, a licensed Florida roofing contractor should carry general liability insurance (typically $1 million+) and workers\' compensation insurance. Without workers\' comp, the homeowner can be held liable for injuries sustained by workers on their property. All Phase Construction USA maintains full general liability and workers\' compensation coverage, which we provide documentation for upon request.'
  },
  {
    question: 'Why do licensed roofers cost more than unlicensed ones?',
    answer: 'Licensed roofers carry higher overhead because they maintain insurance, pull permits, use code-compliant materials, pay for inspections, and stand behind manufacturer warranty requirements. Unlicensed contractors skip all of these, which is why their prices look lower upfront. But the hidden costs — failed inspections, voided insurance claims, no warranty, potential structural damage, and legal liability — typically far exceed the "savings." In South Florida\'s HVHZ, an improperly installed roof can also become a life-safety hazard during hurricanes.'
  }
];

export default function LicensedRoofingContractorPage() {
  return (
    <>
      <SEO
        title="Licensed Roofing Contractor FL | CCC & CGC | All Phase"
        description="Florida dual-licensed roofing and general contractor. CCC-1331464 + CGC-1526236. HVHZ-certified, serving Broward & Palm Beach since 2005."
        canonicalUrl="https://allphaseconstructionfl.com/licensed-roofing-contractor"
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
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How to Verify a Licensed Roofing Contractor in South Florida
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Florida law requires roofing contractors to hold a state license for any job over $1,000. In Broward and Palm Beach Counties — where HVHZ codes demand the highest installation standards in the country — hiring an unlicensed roofer puts your home, your warranty, and your insurance coverage at risk. Here's what to check before you sign a contract.
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

        {/* License Types */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Florida Roofing License Types: CCC vs CGC
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Florida issues two types of contractor licenses relevant to roofing work. Understanding the difference helps you evaluate what a contractor can and cannot legally do on your property.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-white">CCC License</h3>
                </div>
                <p className="text-red-400 text-sm font-semibold mb-3">Certified Roofing Contractor</p>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Authorizes installation, repair, and replacement of roof systems — the membrane, underlayment, flashing, and surface materials. This is the standard license most roofing companies hold. A CCC-licensed contractor cannot perform structural work on trusses, decking, or load-bearing components without subcontracting to a general contractor.
                </p>
                <p className="text-zinc-500 text-sm">All Phase CCC: <span className="text-white font-mono">CCC-1331464</span></p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-white">CGC License</h3>
                </div>
                <p className="text-red-400 text-sm font-semibold mb-3">Certified General Contractor</p>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Authorizes structural work including framing, trusses, decking, roof-to-wall connections, and load-bearing modifications. A CGC-licensed contractor can evaluate and repair the complete building structure. When combined with a CCC license, the contractor handles both the roof system and any structural issues found during replacement — no delays, no additional contracts, one warranty.
                </p>
                <p className="text-zinc-500 text-sm">All Phase CGC: <span className="text-white font-mono">CGC-1526236</span></p>
              </div>
            </div>
            <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-6">
              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">Why this matters:</strong> During a South Florida roof replacement, it's common to discover damaged trusses, rotted decking, or inadequate roof-to-wall connections once the old roof is removed. A CCC-only contractor must stop work, hire a GC, and wait — adding days or weeks and creating warranty gaps. All Phase Construction USA holds both licenses, so we handle the complete system under one contract and one warranty.
              </p>
            </div>
          </div>
        </section>

        {/* How to Verify */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How to Verify a Roofer's License in Florida
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              The Florida Department of Business and Professional Regulation (DBPR) maintains a public database of all licensed contractors. Before signing any roofing contract, take five minutes to verify:
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit myfloridalicense.com</h3>
                  <p className="text-zinc-400 leading-relaxed">Go to the <a href="https://www.myfloridalicense.com/wl11.asp?SID&mode=0" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline transition-colors">DBPR license verification page</a>. You can search by contractor name, company name, or license number. This is the only authoritative source — do not rely on a contractor's word or printed materials alone.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Check license status is "Active"</h3>
                  <p className="text-zinc-400 leading-relaxed">An active license means the contractor has met all continuing education requirements, maintained insurance, and has no unresolved disciplinary actions. A "Current/Active" status is what you want to see. Any other status — expired, suspended, revoked — means they cannot legally perform roofing work.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Verify insurance coverage</h3>
                  <p className="text-zinc-400 leading-relaxed">Ask for a Certificate of Insurance (COI) showing general liability and workers' compensation coverage. Call the insurance company directly to confirm the policy is active. Without workers' comp, you could be held liable for injuries on your property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Check for complaints or disciplinary actions</h3>
                  <p className="text-zinc-400 leading-relaxed">The DBPR database shows any formal complaints, disciplinary history, or license restrictions. You can also check the Better Business Bureau and local consumer affairs offices. A clean record over many years is a strong indicator of reliability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Confirm local code knowledge</h3>
                  <p className="text-zinc-400 leading-relaxed">In Broward and Palm Beach Counties, ask specifically about HVHZ experience. A contractor licensed in another part of Florida may not understand the fastener schedules, material requirements, or inspection procedures unique to the High-Velocity Hurricane Zone. Ask how many HVHZ projects they've completed and whether they pass first-attempt inspections.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Red Flags: Signs of an Unlicensed or Unqualified Roofer
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-white">Door-to-door solicitation after storms</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">Storm chasers travel to disaster areas and offer "deals" that disappear along with the contractor. Legitimate local companies don't need to knock on doors for work.</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-white">Suggests skipping the permit</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">Permits are required by Florida law. Skipping them means no inspection, potential code violations, voided insurance claims, and problems when selling your home.</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-white">Demands large upfront payment</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">Florida law limits contractor deposits. A request for 50% or more upfront — especially in cash — is a major warning sign. Reputable contractors structure payments around project milestones.</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-white">No written contract or vague scope</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">A licensed contractor provides a detailed written contract specifying materials, timeline, warranty terms, permit responsibilities, and payment schedule before work begins.</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-white">Can't provide license number</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">A legitimate contractor gives you their license number without hesitation. If they deflect, make excuses, or claim they're "working under someone else's license," walk away.</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-white">Price is dramatically lower than competitors</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">If a quote is 30-50% below other bids, the contractor is likely cutting corners — cheaper materials, no permits, uninsured labor, or skipping code requirements that protect your home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why License Matters in HVHZ */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Licensing Matters More in South Florida's Hurricane Zone
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
              <p>
                Broward County and parts of Palm Beach County fall within Florida's High-Velocity Hurricane Zone (HVHZ), where roofing installations must meet 146 mph wind load requirements — the most demanding residential building standards in the United States. This isn't just about material selection. HVHZ compliance requires specific fastener patterns, enhanced underlayment systems, tested assembly methods, and products with either a Miami-Dade County NOA (Notice of Acceptance) or Florida Product Approval.
              </p>
              <p>
                An unlicensed or out-of-area contractor who doesn't understand HVHZ requirements may install a roof that looks fine but fails inspection — or worse, fails during a hurricane. The consequences include: denied insurance claims (your insurer can refuse to cover damage from unpermitted work), inability to sell your home (unpermitted roof work is flagged during title searches), and the cost of tearing off and redoing the entire project to meet code.
              </p>
              <p>
                All Phase Construction USA has completed over 2,500 roofing projects in the HVHZ since 2005. Our team passes Broward County and Palm Beach County inspections on the first attempt because we understand every detail of the local code requirements — from the six-inch nail spacing on shingle roofs to the foam adhesive specifications on tile installations.
              </p>
            </div>
          </div>
        </section>

        {/* All Phase Credentials */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              All Phase Construction USA: Our Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Certified Roofing Contractor — CCC-1331464</p>
                  <p className="text-zinc-400 text-sm">State of Florida, DBPR verified</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Certified General Contractor — CGC-1526236</p>
                  <p className="text-zinc-400 text-sm">Structural authority for complete building systems</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">HVHZ Certified — 20+ Years</p>
                  <p className="text-zinc-400 text-sm">2,500+ completed projects in Broward & Palm Beach Counties</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Manufacturer Certified</p>
                  <p className="text-zinc-400 text-sm">Owens Corning Platinum, CertainTeed Master, Tamko Pro Platinum</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Full Insurance Coverage</p>
                  <p className="text-zinc-400 text-sm">General liability + workers' compensation, documentation on request</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">FRSA Member</p>
                  <p className="text-zinc-400 text-sm">Florida Roofing & Sheet Metal Contractors Association — the largest state roofing association in the U.S.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Family Owned & Operated</p>
                  <p className="text-zinc-400 text-sm">Based in Deerfield Beach, serving all of South Florida</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions About Licensed Roofers
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/how-to-hire-roofing-contractor" className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">How to Hire a Roofing Contractor</h3>
                <p className="text-zinc-400 text-sm">Step-by-step guide to evaluating and selecting the right roofer for your project.</p>
              </Link>
              <Link to="/roof-inspection" className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Free Roof Inspection</h3>
                <p className="text-zinc-400 text-sm">Our 21-point inspection process — what we check and why it matters.</p>
              </Link>
              <Link to="/roof-cost-calculator" className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Roof Cost Calculator</h3>
                <p className="text-zinc-400 text-sm">Get an instant estimate for your roof replacement based on type, material, and size.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work With a Licensed, Dual-Certified South Florida Roofer
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule your free roof inspection with a contractor you can verify. No pressure, no obligation — just honest assessment from a family-owned team with 20+ years in South Florida.
            </p>
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
