import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Droplets, Wind, Home, ClipboardCheck, Camera, FileText, CheckCircle2, Star, MapPin } from 'lucide-react';
import { interceptLeadSubmit } from '../utils/leadConversion';

/**
 * PPC landing page for the Roofing Core campaign (PR-213).
 * Deliberately noindexed (Helmet + prerender NOINDEX_PATHS) and excluded
 * from the sitemap — paid traffic only, zero organic cannibalization.
 * Slim chrome: the global Header/Footer/StickyMobileCTA are suppressed
 * for /lp/ routes in App.tsx. Message-matched to the campaign's actual
 * search terms: "roofer near me", "roof leak repair", "why is my roof
 * leaking".
 */
export default function LpRoofRepairPage() {
  useEffect(() => {
    document.title = 'Roofer Near You | Leak Repair & Free Inspections | All Phase';
  }, []);

  return (
    <>
      <Helmet>
        <title>Roofer Near You | Leak Repair &amp; Free Inspections | All Phase</title>
        <meta name="description" content="Local roofer for Broward & Palm Beach — roof leak repair and free inspections from a dual-licensed contractor. Real person answers 24/7. (754) 227-5605." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://allphaseconstructionfl.com/lp/roof-repair" />
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Slim header: logo text + phone, nothing else */}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">Need a Roofer Near You? We&apos;re Already in Your Neighborhood.</h1>
              <p className="text-xl text-zinc-300 leading-relaxed mb-5">
                Roof leak repairs and free inspections across Broward &amp; Palm Beach County — from a dual-licensed contractor (CCC-1331464 &amp; CGC-1526236), dispatched daily from our Deerfield Beach headquarters. A real person answers our phone 24/7.
              </p>
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-black/40 border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold mb-6">
                <span className="text-yellow-400 inline-flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400" /> 4.9 Google</span>
                <span className="text-red-400">·</span><span>160+ Reviews</span>
                <span className="text-red-400">·</span><span>Since 2006</span>
              </div>
              <div className="space-y-3 text-lg text-zinc-300">
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Free inspection with photo documentation — see what we see</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Honest repair-or-replace answer — most leaks are repairs, not new roofs</p>
                <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> Licensed &amp; insured, permits handled, work built to Florida code</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-1">Get Your Free Roof Inspection</h2>
              <p className="text-zinc-400 mb-5">Tell us where the roof is. We&apos;ll call you back fast.</p>
              <form
                method="POST"
                onSubmit={(e) => interceptLeadSubmit(e, 'lp-roof-repair', '/roof-calculator-thank-you.html', 'https://formspree.io/f/mojakkld')}
                className="space-y-4"
              >
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
                <input type="hidden" name="_subject" value="PPC Landing Page Lead — Roof Repair (/lp/roof-repair)" />
                <input type="text" name="full_name" required placeholder="Your name" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                <input type="tel" name="phone" required placeholder="Phone number" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                <input type="email" name="email" placeholder="Email (optional)" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                <input type="text" name="city" required placeholder="City (e.g., Boca Raton)" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                <textarea name="message" rows={2} placeholder="What's the roof doing? (leak, missing tiles, just checking...)" className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none" />
                <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                  Request My Free Inspection
                </button>
                <p className="text-xs text-zinc-500 text-center">No spam, no obligation. Prefer to talk? <a href="tel:754-227-5605" className="text-red-400 underline">(754) 227-5605</a></p>
              </form>
            </div>
          </div>
        </section>

        {/* Why is my roof leaking — answers the actual queries */}
        <section className="py-14 px-4 bg-[#27272a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Why Is My Roof Leaking?</h2>
            <p className="text-lg text-zinc-400 mb-8">In South Florida, four culprits cause most of the leaks we repair. All four are fixable — usually without replacing the roof.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2"><Droplets className="w-6 h-6 text-red-500" /><h3 className="text-xl font-bold">Leak around a vent pipe or penetration</h3></div>
                <p className="text-zinc-300">The rubber boot around vent pipes dries out and cracks in Florida sun years before the roof itself fails. Water tracks down the pipe and shows up as a ceiling stain. A boot-and-flashing repair fixes it.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2"><Wind className="w-6 h-6 text-red-500" /><h3 className="text-xl font-bold">Wind-lifted shingles or slipped tiles</h3></div>
                <p className="text-zinc-300">One storm can lift shingles or shift tiles just enough to let wind-driven rain underneath. Often invisible from the ground — our inspection photos find what you can&apos;t see.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2"><Home className="w-6 h-6 text-red-500" /><h3 className="text-xl font-bold">Failed flashing at walls and valleys</h3></div>
                <p className="text-zinc-300">Where the roof meets a wall, chimney, or another roof plane, metal flashing does the sealing. When it corrodes or pulls loose, leaks appear far from the actual entry point.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2"><Droplets className="w-6 h-6 text-red-500" /><h3 className="text-xl font-bold">Ponding water on flat roofs</h3></div>
                <p className="text-zinc-300">Flat and low-slope sections that hold water after rain eventually find a way in. We repair membranes and correct drainage — and tell you honestly when a section is beyond patching.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 px-4 bg-[#09090b]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Happens When You Call</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg text-zinc-300">
              <div className="flex items-start gap-4"><Camera className="w-8 h-8 text-red-500 shrink-0" /><p><span className="text-white font-semibold">Free inspection, with photos.</span> A licensed pro walks the roof and documents the real condition — you see everything we see.</p></div>
              <div className="flex items-start gap-4"><FileText className="w-8 h-8 text-red-500 shrink-0" /><p><span className="text-white font-semibold">A written, line-item price.</span> Repair scope, materials, and labor itemized. No vague one-number quotes, no surprise change orders.</p></div>
              <div className="flex items-start gap-4"><ClipboardCheck className="w-8 h-8 text-red-500 shrink-0" /><p><span className="text-white font-semibold">Fixed right, to code.</span> Permits handled, work inspected, jobsite spotless when we leave.</p></div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-14 px-4 bg-[#27272a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">South Florida Homeowners Rate Us 4.9 out of 5</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-300">
                <p className="mb-3">&ldquo;Honest pricing and a real warranty. The crew protected our landscaping and left the driveway cleaner than they found it.&rdquo;</p>
                <footer className="text-zinc-500 font-semibold">— Jennifer P.</footer>
              </blockquote>
              <blockquote className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-300">
                <p className="mb-3">&ldquo;The foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar.&rdquo;</p>
                <footer className="text-zinc-500 font-semibold">— Mike R.</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Service area + CTA */}
        <section className="py-14 px-4 bg-gradient-to-b from-[#27272a] to-[#09090b]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-lg text-zinc-300 mb-4"><MapPin className="w-5 h-5 text-red-500" /> Serving Deerfield Beach, Boca Raton, Pompano Beach, Fort Lauderdale, Coral Springs, Delray Beach &amp; 50+ South Florida cities</p>
            <h2 className="text-3xl font-bold mb-6">A Leak Never Gets Cheaper by Waiting</h2>
            <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-all">
              <Phone className="w-6 h-6" /> (754) 227-5605
            </a>
            <p className="text-zinc-500 mt-3 text-sm">A real person answers 24/7. After-hours calls get a call back within the first hour of the next business day.</p>
          </div>
        </section>

        {/* Slim footer: trust essentials only */}
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
