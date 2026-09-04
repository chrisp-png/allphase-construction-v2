import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Star, CheckCircle2, Shield, MapPin, Clock } from 'lucide-react';
import { interceptLeadSubmit } from '../utils/leadConversion';

/**
 * PPC landing page for the "Roofer Near Me" ad group (PR-236) — keywords
 * like "roofing companies near me" / "roofer near me". This searcher is
 * shopping for a CONTRACTOR, not pricing a specific job, so the page sells
 * the company: dual licenses, GAF Gold certification, reviews, service
 * area, response commitment, real project photos.
 *
 * Same /lp/ discipline as its siblings: noindex,follow + self-canonical,
 * off the sitemap, zero internal links, slim chrome (isLpRoute), form
 * above the fold with the PR-221/224 hardening, conversion fired once on
 * 2xx via interceptLeadSubmit, full first-touch attribution inherited.
 * Phone shows the CallRail static fallback (754) 258-6135 per the standing
 * rule (PR-235); CallRail swaps it to a pool number on load.
 */
export default function LpRoofingCompanyPage() {
  useEffect(() => {
    document.title = 'Top-Rated Roofing Company — Broward & Palm Beach | All Phase';
  }, []);

  return (
    <>
      <Helmet>
        <title>Top-Rated Roofing Company — Broward &amp; Palm Beach | All Phase</title>
        <meta name="description" content="Dual-licensed, GAF Gold Certified roofing company in Deerfield Beach — 4.9 stars, 160+ reviews, 2,500+ roofs across Broward & Palm Beach since 2006. A real person answers 24/7." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://allphaseconstructionfl.com/lp/roofing-company" />
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Slim header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-lg leading-tight">All Phase Construction USA</p>
              <p className="text-xs text-red-500 font-semibold">Dual-Licensed Roofing Contractor</p>
            </div>
            <a href="tel:754-258-6135" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 sm:px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-all">
              <Phone className="w-5 h-5" /><span className="hidden sm:inline">(754) 258-6135</span><span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </header>

        {/* Hero + form */}
        <section className="pt-28 pb-14 px-4 bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a]">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">The Roofing Company Your Neighbors Already Use.</h1>
              <p className="text-xl text-zinc-300 leading-relaxed mb-5">
                All Phase Construction USA has installed and repaired more than 2,500 roofs across Broward &amp; Palm Beach County from our Deerfield Beach headquarters since 2006 — every one under both a state roofing license and a general contractor license.
              </p>
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-black/40 border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold mb-6">
                <span className="text-yellow-400 inline-flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400" /> 4.9 Google</span>
                <span className="text-red-400">·</span><span>160+ Reviews</span>
                <span className="text-red-400">·</span><span>A+ BBB</span>
                <span className="text-red-400">·</span><span>GAF Gold Certified</span>
              </div>
              <div className="space-y-3 text-lg text-zinc-300">
                <p className="flex items-start gap-3"><Shield className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Dual state licenses — CCC-1331464 (roofing) &amp; CGC-1526236 (general contractor)</p>
                <p className="flex items-start gap-3"><Clock className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> A live person answers every call, 24/7 — scheduling guaranteed within 24 hours</p>
                <p className="flex items-start gap-3"><MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Local headquarters: 590 Goolsby Blvd, Deerfield Beach — not a storm-chaser P.O. box</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Repairs, replacements, and inspections — tile, metal, shingle &amp; flat</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
              <p className="text-white font-bold text-xl mb-1">Talk to a Roofer Today</p>
              <p className="text-zinc-400 text-sm mb-4">30 seconds. A real person answers every call, 24/7 &mdash; your inspection is scheduled within 24 hours.</p>
              <form
                onSubmit={(e) => interceptLeadSubmit(e, 'lp-roofing-company', '/roof-calculator-thank-you.html', 'https://formspree.io/f/mvzodbwp')}
                method="POST"
                className="space-y-3"
              >
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
                <input type="hidden" name="_subject" value="COMPANY SEARCH LEAD — /lp/roofing-company" />
                <input type="hidden" name="source" value="lp-roofing-company" />
                <input type="hidden" name="state" value="FL" />
                <input type="text" name="full_name" required placeholder="Full name *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                <input type="tel" name="phone" required placeholder="Phone *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="email" name="email" placeholder="Email (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                  <input type="text" name="city" placeholder="City (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                </div>
                <textarea name="message" rows={2} placeholder="What does your roof need? (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                  Request My Free Inspection
                </button>
                <p className="text-zinc-500 text-xs text-center">No spam, no pressure. Straight answers about your roof.</p>
              </form>
            </div>
          </div>
        </section>

        {/* Why us — the company case */}
        <section className="py-14 px-4 bg-[#27272a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Separates a Roofing Company From a Guy With a Ladder</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Two Licenses, One Contract</h3>
                <p className="text-zinc-300 leading-relaxed">Most roofers hold one license. We hold the state roofing license and a general contractor license — so when tear-off reveals rotted decking or structural damage, we fix it in-house under the same agreement instead of stopping your job to find a second contractor.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">GAF Gold Certified</h3>
                <p className="text-zinc-300 leading-relaxed">Factory certification from North America&apos;s largest shingle manufacturer — covering residential systems as well as flat and low-slope — which qualifies our installations for enhanced manufacturer warranties most companies can&apos;t offer.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Everything in Writing</h3>
                <p className="text-zinc-300 leading-relaxed">Free inspection with photo documentation, then a written line-item scope and price. Your insurer, your HOA, and your own planning all read from the same document — and the final invoice matches it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real work */}
        <section className="py-14 px-4 bg-[#09090b]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Work, Not Stock Photos</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <figure className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <img src="/projects/deerfield-beach-hvhz-standing-seam-metal-roof-all-phase-usa.webp" alt="HVHZ standing-seam metal roof installed by All Phase Construction USA in Deerfield Beach" className="w-full h-64 object-cover" loading="lazy" />
                <figcaption className="p-4 text-zinc-400 text-sm">HVHZ standing-seam metal roof — Deerfield Beach</figcaption>
              </figure>
              <figure className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <img src="/projects/boca-raton-metal-crew-finishing-all-phase-usa.webp" alt="All Phase Construction USA crew finishing a metal roof in Boca Raton" className="w-full h-64 object-cover" loading="lazy" />
                <figcaption className="p-4 text-zinc-400 text-sm">Our crew finishing a metal roof — Boca Raton</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Service area + reviews */}
        <section className="py-14 px-4 bg-[#27272a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Serving Broward &amp; Palm Beach County</h2>
            <p className="text-zinc-300 text-lg text-center max-w-3xl mx-auto mb-8">
              Deerfield Beach, Boca Raton, Pompano Beach, Fort Lauderdale, Coral Springs, Parkland, Coconut Creek, Delray Beach, Boynton Beach, Wellington, West Palm Beach — and 40+ more cities, dispatched daily from our Deerfield Beach headquarters.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-300">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="mb-3">&ldquo;Honest pricing and a real warranty. The crew protected our landscaping and left the driveway cleaner than they found it.&rdquo;</p>
                <footer className="text-zinc-500 font-semibold">&mdash; Jennifer P.</footer>
              </blockquote>
              <blockquote className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-300">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="mb-3">&ldquo;The foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar.&rdquo;</p>
                <footer className="text-zinc-500 font-semibold">&mdash; Mike R.</footer>
              </blockquote>
            </div>
            <p className="text-center text-zinc-400 mt-6">4.9 stars across 160+ Google reviews</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 px-4 bg-gradient-to-b from-[#27272a] to-[#09090b] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get a Straight Answer About Your Roof</h2>
            <p className="text-zinc-300 text-lg mb-8">Free inspection, photo documentation, and a written scope — whether it needs a $600 repair or a full replacement, you&apos;ll know exactly where you stand.</p>
            <a href="tel:754-258-6135" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
              <Phone className="w-6 h-6" /> (754) 258-6135
            </a>
            <p className="text-zinc-500 mt-4 text-sm">A live person answers every call &mdash; scheduling guaranteed within 24 hours.</p>
          </div>
        </section>

        {/* Slim footer */}
        <footer className="py-8 px-4 bg-black border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p className="mb-1 font-semibold text-zinc-400">All Phase Construction USA, LLC</p>
          <p className="mb-1">Licensed &amp; Insured — CCC-1331464 (Roofing) · CGC-1526236 (General Contractor) · GAF Gold Certified</p>
          <p className="mb-1">590 Goolsby Blvd, Deerfield Beach, FL 33442 · <a href="https://www.bbb.org/us/fl/deerfield-bch/profile/roofing-contractors/all-phase-construction-usa-llc-0633-90537640" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">BBB A+ Accredited</a></p>
          <p>© {new Date().getFullYear()} All Phase Construction USA. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
