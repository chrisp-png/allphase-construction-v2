import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Star, CheckCircle2, Shield, ClipboardCheck, Home } from 'lucide-react';
import { appendClickIds } from '../utils/clickId';
import { trackLeadConversion, extractLeadUserData } from '../utils/leadConversion';

/**
 * PPC landing page for the general roof-replacement ad group (PR-233).
 * Message-matched to the head terms the campaign buys — "roof replacement",
 * "roof replacement companies", "roof replacement contractor" — with the
 * geography handled by campaign location targeting, not the keyword.
 *
 * Same discipline as /lp/roof-repair and /lp/roof-cost-calculator:
 * - noindex,follow (Helmet + prerender NOINDEX_PATHS), self-canonical,
 *   off the sitemap, zero internal links from the public site
 * - Slim /lp/ chrome (global Header/Footer suppressed via isLpRoute)
 * - Above-the-fold form posting to the "Roof Replacement Leads" Formspree
 *   form (mzdpvrre — email action to leads@ verified Enabled 2026-08-31);
 *   endpoint JS-only, _gotcha honeypot, AW-10809361088 conversion fired
 *   once on confirmed 2xx, full first-touch attribution via appendClickIds
 * - NOT in the PR-228 static-fallback set: shows the landline, which is
 *   the CallRail swap hook, exactly like /lp/roof-repair
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdpvrre';
const FORM_ID = 'lp-roof-replacement';

export default function LpRoofReplacementPage() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Roof Replacement — Broward & Palm Beach | All Phase USA';
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: appendClickIds(new FormData(form)),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('submit failed');
      trackLeadConversion(FORM_ID, extractLeadUserData(form));
      window.location.assign('/roof-calculator-thank-you.html');
    } catch {
      setSubmitting(false);
      alert('Something went wrong. Please try again — or call (754) 227-5605.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Roof Replacement — Broward &amp; Palm Beach | All Phase USA</title>
        <meta name="description" content="Full roof replacement by a dual-licensed Broward & Palm Beach contractor — tile, metal, shingle & flat, built to HVHZ code. Free inspection and written line-item estimate. (754) 227-5605." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://allphaseconstructionfl.com/lp/roof-replacement" />
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Slim header: name + phone, nothing else */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-lg leading-tight">All Phase Construction USA</p>
              <p className="text-xs text-red-500 font-semibold">Dual-Licensed Roofing Contractor</p>
            </div>
            <a href="tel:754-227-5605" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 sm:px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-all">
              <Phone className="w-5 h-5" /><span className="hidden sm:inline">(754) 227-5605</span><span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </header>

        {/* Hero + form */}
        <section className="pt-28 pb-14 px-4 bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a]">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">Roof Replacement, Done Right the First Time.</h1>
              <p className="text-xl text-zinc-300 leading-relaxed mb-5">
                Complete tear-off and replacement — tile, metal, shingle and flat — built to South Florida&apos;s hurricane wind code by a dual-licensed contractor (CCC-1331464 &amp; CGC-1526236). Over 2,500 roofs across Broward &amp; Palm Beach County since 2006.
              </p>
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-black/40 border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold mb-6">
                <span className="text-yellow-400 inline-flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400" /> 4.9 Google</span>
                <span className="text-red-400">·</span><span>160+ Reviews</span>
                <span className="text-red-400">·</span><span>A+ BBB</span>
              </div>
              <div className="space-y-3 text-lg text-zinc-300">
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Free inspection with photo documentation and a written, line-item estimate</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Honest answer first — if a repair will do the job, we&apos;ll tell you</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Permits handled, decking and structural work in-house under one license</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Financing available with approved credit</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
              <p className="text-white font-bold text-xl mb-1">Get Your Free Replacement Estimate</p>
              <p className="text-zinc-400 text-sm mb-4">30 seconds. A real person answers every call, 24/7 &mdash; your inspection is scheduled within 24 hours.</p>
              <form onSubmit={handleSubmit} method="POST" className="space-y-3">
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
                <input type="hidden" name="_subject" value="REPLACEMENT LEAD — /lp/roof-replacement" />
                <input type="hidden" name="source" value="lp-roof-replacement" />
                <input type="hidden" name="state" value="FL" />
                <input type="hidden" name="service" value="Roof Replacement" />
                <input type="text" name="full_name" required placeholder="Full name *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                <input type="tel" name="phone" required placeholder="Phone *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="email" name="email" placeholder="Email (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                  <input type="text" name="city" placeholder="City (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                </div>
                <select name="roof_type" defaultValue="" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none">
                  <option value="" disabled>Current roof type (optional)</option>
                  <option>Shingle</option>
                  <option>Tile</option>
                  <option>Metal</option>
                  <option>Flat / low-slope</option>
                  <option>Not sure</option>
                </select>
                <button type="submit" disabled={submitting} className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all disabled:opacity-60">
                  {submitting ? 'Sending…' : 'Get My Free Estimate'}
                </button>
                <p className="text-zinc-500 text-xs text-center">No spam, no pressure. A written scope either way.</p>
              </form>
            </div>
          </div>
        </section>

        {/* What replacement includes */}
        <section className="py-14 px-4 bg-[#27272a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What a Real Roof Replacement Includes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <Home className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Full Tear-Off, Not a Cover-Up</h3>
                <p className="text-zinc-300 leading-relaxed">Old roof off, decking inspected board by board. Rotted wood gets replaced — and because we hold a general contractor license too, structural repairs happen under the same contract, not a second one.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <Shield className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Built to Hurricane Code</h3>
                <p className="text-zinc-300 leading-relaxed">Approved products, sealed roof deck, enhanced fastening, secondary water barrier — the wind-mitigation features Florida insurers give premium credits for, documented so you actually get them.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <ClipboardCheck className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">A Written Line-Item Scope</h3>
                <p className="text-zinc-300 leading-relaxed">Material, tier, and price in writing before work starts — the document your insurer, your HOA, and your own planning can all read from. No surprises at the final invoice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PR-234: insurance section — message-matches the 'Insurance Requiring
            New Roof?' and 'New Roof, Lower Insurance' ads pointing here */}
        <section className="py-14 px-4 bg-[#09090b]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Is Your Insurance Company Forcing the Issue?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-red-400">Insurance requiring a new roof?</h3>
                <p className="text-zinc-300 leading-relaxed">Florida carriers increasingly decline or non-renew homes with roofs past the 15-year mark. If you&apos;ve received that letter, the clock is real &mdash; but the first step is free: our inspection documents your roof&apos;s actual condition with photos and a written report. Sometimes that report satisfies the carrier. When it doesn&apos;t, you&apos;ll have a line-item replacement scope the same week, and we build to the deadline your policy gives you.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">A new roof can lower what you pay</h3>
                <p className="text-zinc-300 leading-relaxed">Every roof we install is built to hurricane wind code with the features Florida insurers grant premium credits for &mdash; sealed roof deck, enhanced attachment, secondary water barrier &mdash; and we document them. After installation, a wind mitigation inspection (the OIR-B1-1802 form) is what turns those features into discounts on your renewal, and many homeowners recover a meaningful slice of the project cost year after year over the 25 to 30 years a roof we install is built to last.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Honest price ranges */}
        <section className="py-14 px-4 bg-[#09090b]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Straight Numbers, Before You Call</h2>
            <p className="text-zinc-300 text-lg text-center mb-8">Typical installed ranges for a South Florida single-family home, full HVHZ-spec:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-lg">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"><span className="font-semibold">Asphalt shingle</span><span className="text-zinc-300">$14,000 – $22,000</span></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"><span className="font-semibold">Concrete tile</span><span className="text-zinc-300">$28,000 – $45,000</span></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"><span className="font-semibold">Metal</span><span className="text-zinc-300">$16,000 – $50,000</span></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"><span className="font-semibold">Flat / low-slope</span><span className="text-zinc-300">$9 – $14 / sq ft</span></div>
            </div>
            <p className="text-zinc-500 text-sm text-center mt-4">Ranges for a typical 2,000 sq ft home; your written estimate reflects your actual roof, pitch, and deck condition.</p>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-14 px-4 bg-[#27272a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Homeowners Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-zinc-300 leading-relaxed mb-3">&ldquo;Honest pricing and a real warranty. The crew protected our landscaping and left the driveway cleaner than they found it.&rdquo;</p>
                <footer className="text-zinc-500 font-semibold">&mdash; Jennifer P.</footer>
              </blockquote>
              <blockquote className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-zinc-300 leading-relaxed mb-3">&ldquo;The foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar.&rdquo;</p>
                <footer className="text-zinc-500 font-semibold">&mdash; Mike R.</footer>
              </blockquote>
            </div>
            <p className="text-center text-zinc-400 mt-6">4.9 stars across 160+ Google reviews · A real person answers 24/7</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 px-4 bg-gradient-to-b from-[#27272a] to-[#09090b] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start With the Free Inspection</h2>
            <p className="text-zinc-300 text-lg mb-8">Photos of what we find, a straight repair-or-replace answer, and a written line-item estimate. No pressure at any step.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                <Phone className="w-6 h-6" /> (754) 227-5605
              </a>
              <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700">
                Get My Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Slim footer */}
        <footer className="py-8 px-4 bg-black border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p className="mb-1 font-semibold text-zinc-400">All Phase Construction USA, LLC</p>
          <p className="mb-1">Licensed &amp; Insured — CCC-1331464 (Roofing) · CGC-1526236 (General Contractor)</p>
          <p className="mb-1">590 Goolsby Blvd, Deerfield Beach, FL 33442 · <a href="https://www.bbb.org/us/fl/deerfield-bch/profile/roofing-contractors/all-phase-construction-usa-llc-0633-90537640" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">BBB A+ Accredited</a></p>
          <p>© {new Date().getFullYear()} All Phase Construction USA. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
