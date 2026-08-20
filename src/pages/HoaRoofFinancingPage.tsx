import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Building2, Landmark, ClipboardList, CheckCircle2, Shield, Scale } from 'lucide-react';
import { interceptLeadSubmit } from '../utils/leadConversion';

export default function HoaRoofFinancingPage() {
  useEffect(() => {
    document.title = 'Condo & HOA Roof Financing in South Florida | All Phase USA';
  }, []);

  const canonicalUrl = 'https://allphaseconstructionfl.com/hoa-condo-roof-financing';

  const faqs = [
    { q: 'Can our condo association finance a roof replacement instead of a special assessment?', a: 'Yes. Through our financing partner, Florida condo and homeowner associations can fund a full roof replacement with a fixed-rate association loan and repay it monthly — converting a large lump-sum special assessment into a manageable per-unit monthly payment. All Phase Construction USA performs the roofing work; our licensed lending partner provides and underwrites the financing.' },
    { q: 'Who repays the loan — are board members or unit owners personally liable?', a: 'The association is the borrower. Board members are not personally liable, no liens are placed on individual units, and the loan does not affect individual unit owners’ credit scores. Owners contribute through regular monthly payments instead of a one-time assessment.' },
    { q: 'How much does association roof financing cost per unit?', a: 'As an illustrative example from the lender: a $2.5M project financed over 25 years at a fixed rate of 8.99% for a 100-unit association works out to roughly $210 per unit per month, versus a $25,000 lump-sum special assessment per unit. Actual rates and payments depend on project size, term, unit count, and underwriting.' },
    { q: 'Does association financing cover SIRS-mandated reserves?', a: 'Yes. Our financing partner funds required reserves, including SIRS-mandated funding, alongside the capital improvement itself — so an association facing both a roof replacement and a reserve shortfall can address both in one transaction.' },
    { q: 'What size projects qualify for association roof financing?', a: 'Associations with 15 or more units qualify, with project financing from roughly $500K to $15M+. Roofing and waterproofing are among the primary qualifying project types, along with concrete restoration, impact windows and doors, and other common-area capital improvements.' },
    { q: 'Does financing slow the roof project down?', a: 'No. Our financing partner targets a decision in weeks, not the months a bank approval can take, and funding is disbursed to match the payment milestones in our roofing agreement — so crews are paid on schedule and the work never stalls waiting on money.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <Helmet>
        <title>Condo &amp; HOA Roof Financing in South Florida | All Phase USA</title>
        <meta name="description" content="Condo & HOA roof financing in Broward & Palm Beach — replace your association's roof with monthly payments, not a lump-sum special assessment. (754) 227-5605." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white">
        <section className="pt-44 pb-16 px-4 bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Condo &amp; HOA Roof Financing in South Florida</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              Your association needs a new roof. Nobody wants a five-figure special assessment. We solve both: All Phase Construction USA replaces the roof — dual-licensed (CCC-1331464 &amp; CGC-1526236), with association projects completed up to $5M — and our financing partner funds it with a fixed-rate association loan your owners repay monthly.
            </p>
            <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-black/40 border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold mb-8">
              <span className="text-yellow-400">★ 4.9 Google</span><span className="text-red-400">·</span>
              <span>160+ Reviews</span><span className="text-red-400">·</span>
              <span>Dual-Licensed Since 2006</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                <Phone className="w-6 h-6" /> (754) 227-5605
              </a>
              <a href="#association-assessment" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700">
                <ClipboardList className="w-6 h-6" /> Request an Association Roof Assessment
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Math Every Board Should See</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 border border-red-900/50 rounded-xl p-6">
                <p className="text-sm uppercase tracking-wide text-red-400 font-semibold mb-2">Without financing</p>
                <p className="text-4xl font-bold mb-2">$10,000<span className="text-lg font-semibold text-zinc-400"> per unit</span></p>
                <p className="text-zinc-300">Due up front as a lump-sum special assessment on a $1M roof for a 100-unit association. Owner pushback, recall threats, delayed work.</p>
              </div>
              <div className="bg-zinc-900 border border-green-800/50 rounded-xl p-6">
                <p className="text-sm uppercase tracking-wide text-green-400 font-semibold mb-2">With association financing</p>
                <p className="text-4xl font-bold mb-2">≈$92<span className="text-lg font-semibold text-zinc-400"> per unit / month</span></p>
                <p className="text-zinc-300">The same $1M roof spread over 25 years at a fixed rate. The board funds the project; owners get a payment they can actually manage.</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm">Illustrative example from the lender (25-year term, 8.99% fixed, 100 units, closing fees and debt-service coverage financed). Actual rates, terms, and payments are set by the lender's underwriting and will vary.</p>
          </div>
        </section>

        <section id="association-assessment" className="py-16 px-4 bg-[#09090b]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-2">Request Your Free Association Roof Assessment</h2>
              <p className="text-zinc-400 mb-8">Researching this after the board meeting, at 10 PM? Perfect — tell us about the project and a licensed estimator will call you back the next business day. No obligation, and nothing goes to your owners until you decide it should.</p>
              <form
                action="https://formspree.io/f/mojakkld"
                method="POST"
                onSubmit={(e) => interceptLeadSubmit(e, 'hoa-financing-page', '/association-thank-you.html')}
                className="grid md:grid-cols-2 gap-5"
              >
                <input type="hidden" name="_subject" value="ASSOCIATION FINANCING LEAD — HOA/Condo Roof Financing page" />
                <div>
                  <label htmlFor="hoa-name" className="block text-sm font-semibold text-zinc-300 mb-1">Your name *</label>
                  <input id="hoa-name" type="text" name="full_name" required className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="hoa-role" className="block text-sm font-semibold text-zinc-300 mb-1">Your role</label>
                  <select id="hoa-role" name="role" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                    <option>Board President</option>
                    <option>Board Member</option>
                    <option>Property Manager / CAM</option>
                    <option>Unit Owner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hoa-phone" className="block text-sm font-semibold text-zinc-300 mb-1">Phone *</label>
                  <input id="hoa-phone" type="tel" name="phone" required className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="hoa-email" className="block text-sm font-semibold text-zinc-300 mb-1">Email *</label>
                  <input id="hoa-email" type="email" name="email" required className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="hoa-community" className="block text-sm font-semibold text-zinc-300 mb-1">Association / community name *</label>
                  <input id="hoa-community" type="text" name="association_name" required className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="hoa-city" className="block text-sm font-semibold text-zinc-300 mb-1">City *</label>
                  <input id="hoa-city" type="text" name="city" required placeholder="e.g., Boca Raton" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="hoa-units" className="block text-sm font-semibold text-zinc-300 mb-1">Number of units</label>
                  <input id="hoa-units" type="text" name="number_of_units" inputMode="numeric" placeholder="e.g., 120" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="hoa-rooftype" className="block text-sm font-semibold text-zinc-300 mb-1">Roof type</label>
                  <select id="hoa-rooftype" name="roof_type" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                    <option>Tile</option>
                    <option>Flat / low-slope (TPO, PVC, BUR)</option>
                    <option>Shingle</option>
                    <option>Metal</option>
                    <option>Mixed / multiple buildings</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hoa-timing" className="block text-sm font-semibold text-zinc-300 mb-1">Timing</label>
                  <select id="hoa-timing" name="timing" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                    <option>Urgent — active leaks or insurance deadline</option>
                    <option>Next 3 months</option>
                    <option>3–6 months</option>
                    <option>6–12 months</option>
                    <option>Planning / budgeting stage</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hoa-sirs" className="block text-sm font-semibold text-zinc-300 mb-1">SIRS or engineering report?</label>
                  <select id="hoa-sirs" name="sirs_report" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                    <option>Yes — completed</option>
                    <option>In progress</option>
                    <option>Not yet</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hoa-financing" className="block text-sm font-semibold text-zinc-300 mb-1">Interested in financing?</label>
                  <select id="hoa-financing" name="financing_interest" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                    <option>Yes</option>
                    <option>Possibly — want to see the numbers</option>
                    <option>No — association has funds</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hoa-budget" className="block text-sm font-semibold text-zinc-300 mb-1">Estimated project size</label>
                  <select id="hoa-budget" name="estimated_project_size" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                    <option>Not sure yet</option>
                    <option>Under $500K</option>
                    <option>$500K – $1M</option>
                    <option>$1M – $1.5M</option>
                    <option>$1.5M – $2M</option>
                    <option>$2M – $2.5M</option>
                    <option>$2.5M – $3M</option>
                    <option>$3M – $5M</option>
                    <option>$5M+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="hoa-message" className="block text-sm font-semibold text-zinc-300 mb-1">Anything else we should know?</label>
                  <textarea id="hoa-message" name="message" rows={3} placeholder="Milestone inspection deadline, insurance situation, prior bids, number of buildings..." className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                    Request My Free Assessment — We&apos;ll Call You Back Next Business Day
                  </button>
                  <p className="text-xs text-zinc-500 text-center mt-3">No spam, no obligation, and nothing shared with your owners. Prefer to talk now? <a href="tel:754-227-5605" className="text-red-400 underline">(754) 227-5605</a> — a real person answers 24/7.</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#09090b]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="space-y-6 text-lg text-zinc-300">
              <div className="flex items-start gap-4"><ClipboardList className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">1. Free association roof assessment.</span> We inspect, document, and deliver a written, line-item scope and price your board can take to owners — the same discipline behind our $1M+ association projects.</p></div>
              <div className="flex items-start gap-4"><Landmark className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">2. We introduce your board to our financing partner.</span> One introduction from us and their Florida association-financing team takes over the money conversation. You never juggle lenders.</p></div>
              <div className="flex items-start gap-4"><Scale className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">3. The lender underwrites the association, not a checklist.</span> Decisions in weeks, loans from $500K to $15M+, terms to 25 years — including associations banks have declined, and SIRS-mandated reserve funding alongside the roof.</p></div>
              <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">4. Funding matches our contract milestones.</span> Disbursements follow the payment schedule in our roofing agreement — crews are paid on time and the project never stalls waiting on money.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Boards Choose All Phase for Association Roofs</h2>
            <div className="space-y-5 text-lg text-zinc-300">
              <div className="flex items-start gap-4"><Shield className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">Dual-licensed, which matters more on association work.</span> We hold both the roofing license (CCC-1331464) and a general contractor license (CGC-1526236) — so structural conditions uncovered during tear-off, from decking to trusses, are handled in-house under one agreement instead of stopping the job.</p></div>
              <div className="flex items-start gap-4"><Building2 className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">Association-scale track record.</span> Completed community roof replacements up to $5M, plus commercial work for institutional clients — with HOA boards, property managers, and engineering-report requirements as part of the normal workflow, not a surprise.</p></div>
              <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">Built for Florida&apos;s new reality.</span> Milestone inspections and SIRS reserve requirements are forcing roof decisions boards didn&apos;t budget for. We document everything for your engineer, your insurer, and your owners&apos; meeting.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#09090b]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Straight Talk: What Financing Really Costs</h2>
            <p className="text-lg text-zinc-300 mb-4">
              Financing is not free money, and boards deserve the honest version. Closing fees (about 5%) and a debt-service coverage reserve are financed into the loan, rates are fixed but real (illustrative examples use 8.99%), and a special assessment still exists legally — it is converted into manageable monthly payments rather than eliminated. What financing buys is the ability to do mandatory work now, at today&apos;s construction prices, without a five-figure demand on every owner.
            </p>
            <p className="text-zinc-400 text-sm">
              All Phase Construction USA is a roofing and general contractor, not a lender. Financing is provided by a licensed third-party lending partner; all loan terms, approvals, rates, and payments are determined solely by the lender's underwriting.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Association Roof Financing FAQs</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">{f.q}</h3>
                  <p className="text-zinc-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-b from-[#27272a] to-[#09090b]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bring Your Board a Roof and a Way to Pay for It</h2>
            <p className="text-xl text-zinc-300 mb-8">Free association roof assessment, a written scope your owners can understand, and a financing introduction that turns $10,000 up front into a monthly payment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                <Phone className="w-6 h-6" /> (754) 227-5605
              </a>
              <a href="#association-assessment" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700">
                <ClipboardList className="w-6 h-6" /> Request Your Free Assessment
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
