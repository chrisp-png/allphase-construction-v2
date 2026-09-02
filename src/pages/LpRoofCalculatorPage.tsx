import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Star, CheckCircle2, Lock, ArrowLeft, ClipboardCheck } from 'lucide-react';
import { appendClickIds } from '../utils/clickId';
import { trackLeadConversion, extractLeadUserData } from '../utils/leadConversion';
import { roofSizes, roofTypes, pricingData } from '../components/RoofCalculator';
import type { RoofSize, RoofType } from '../components/RoofCalculator';

/**
 * PPC landing page for the "Search - Roof Cost Calculator - Caged" campaign
 * (PR-225). Gated variant of the public calculator: visitors pick size and
 * material, see a real broad range, then trade name + phone for the exact
 * estimate and line-item tier breakdown.
 *
 * - Deliberately noindexed (Helmet + prerender NOINDEX_PATHS), excluded from
 *   the sitemap, zero internal links from the public site. The organic
 *   /roof-cost-calculator is untouched and keeps ranking.
 * - Canonical is SELF-referencing on purpose — do not point it at
 *   /roof-cost-calculator or Google may fold the pages together.
 * - The precise figures are rendered ONLY after Formspree returns 2xx;
 *   they never exist in the DOM (or view-source) before a successful submit.
 * - Conversion fires once via trackLeadConversion's per-form guard, on the
 *   2xx path only, and the payload carries apc_click_ids via appendClickIds.
 * - Ships coupled with the ad rewrite that drops the "no signup" promise.
 */

// Endpoint lives only in JS (PR-221/224 pattern) — never in scrapeable markup.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdbydvv';
const FORM_ID = 'lp-roof-cost-calculator-gated';

const fmt = (n: number): string => `$${n.toLocaleString()}`;
const round1k = (n: number): number => Math.round(n / 1000) * 1000;

export default function LpRoofCalculatorPage() {
  useEffect(() => {
    document.title = 'South Florida Roof Cost Estimate | Free in 60 Seconds';
  }, []);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [size, setSize] = useState<RoofSize | null>(null);
  const [material, setMaterial] = useState<RoofType | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const tiers = material ? pricingData[material.name] : [];
  // Broad, honest teaser range: cheapest Good-tier to priciest Best-tier.
  const rangeLo = size && tiers.length ? round1k(tiers[0].minPrice * size.sqft) : 0;
  const rangeHi = size && tiers.length ? round1k(tiers[tiers.length - 1].maxPrice * size.sqft) : 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || unlocked) return;
    setError('');
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: appendClickIds(new FormData(form)),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        setError('Something went wrong. Please try again — or call (754) 258-6135 for your estimate.');
        setSubmitting(false);
        return;
      }
      // 2xx confirmed: fire the existing conversion action exactly once
      // (trackLeadConversion has a per-form-id double-fire guard).
      trackLeadConversion(FORM_ID, extractLeadUserData(form));
      setUnlocked(true);
    } catch {
      setError('An unexpected error occurred. Please try again — or call (754) 258-6135.');
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>South Florida Roof Cost Estimate | Free in 60 Seconds</title>
        <meta name="description" content="Get real 2026 South Florida roof pricing for shingle, tile, metal & flat systems — free estimate from a dual-licensed Broward & Palm Beach contractor." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://allphaseconstructionfl.com/lp/roof-cost-calculator" />
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Slim header: name + phone, nothing else */}
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

        <section className="pt-28 pb-14 px-4 bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">See Real South Florida Roof Pricing</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-4">
              Two quick questions. Real 2026 Broward &amp; Palm Beach pricing from actual All Phase jobs — built to High-Velocity Hurricane Zone code, not national averages.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold">
              <span className="text-yellow-400 inline-flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400" /> 4.9 Google</span>
              <span className="text-red-400">·</span><span>160+ Reviews</span>
              <span className="text-red-400">·</span><span>Since 2006</span>
            </div>
          </div>
        </section>

        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10">
            {/* Step 1: size */}
            {step === 1 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Step 1 of 3</p>
                <h2 className="text-2xl font-bold mb-6">How big is your home?</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {roofSizes.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => { setSize(s); setStep(2); }}
                      className={`text-left border-2 rounded-xl p-4 transition-all hover:border-red-600 ${size?.label === s.label ? 'border-red-600 bg-red-600/10' : 'border-zinc-700'}`}
                    >
                      <p className="font-bold text-lg">{s.label}</p>
                      <p className="text-zinc-400 text-sm">{s.desc} of roof area</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: material */}
            {step === 2 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Step 2 of 3</p>
                <h2 className="text-2xl font-bold mb-6">What roof system are you considering?</h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {roofTypes.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => { setMaterial(t); setStep(3); }}
                      className={`text-left border-2 rounded-xl p-4 transition-all hover:border-red-600 ${material?.name === t.name ? 'border-red-600 bg-red-600/10' : 'border-zinc-700'}`}
                    >
                      <p className="font-bold text-lg">{t.name}</p>
                      <p className="text-zinc-400 text-sm">{t.tagline}</p>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-semibold text-sm">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </div>
            )}

            {/* Step 3: real partial result + gate */}
            {step === 3 && size && material && (
              <div>
                {!unlocked && (
                  <>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Step 3 of 3</p>
                    <h2 className="text-2xl font-bold mb-4">Here&apos;s your range.</h2>
                    <div className="bg-black/50 border border-zinc-700 rounded-xl p-6 text-center mb-6">
                      <p className="text-zinc-400 mb-1">A {size.desc} {material.name.toLowerCase()} roof in Broward / Palm Beach typically falls between</p>
                      <p className="text-4xl sm:text-5xl font-bold text-white my-2">{fmt(rangeLo)} – {fmt(rangeHi)}</p>
                      <p className="text-zinc-500 text-sm">2026 installed pricing, HVHZ-spec. Your exact number depends on tier, pitch, tear-off, and deck condition.</p>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-5 h-5 text-amber-400 shrink-0" />
                      <p className="text-zinc-300 font-semibold">Enter your details to see your exact estimate and a Good / Better / Best line-item breakdown.</p>
                    </div>
                    <form onSubmit={handleSubmit} method="POST" className="space-y-3">
                      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
                      <input type="hidden" name="_subject" value="PPC Gated Calculator Lead — /lp/roof-cost-calculator" />
                      <input type="hidden" name="form_source" value="lp-roof-cost-calculator-gated" />
                      <input type="hidden" name="state" value="FL" />
                      <input type="hidden" name="roof_size" value={size.desc} />
                      <input type="hidden" name="roof_material" value={material.name} />
                      <input type="hidden" name="estimated_range" value={`${fmt(rangeLo)} - ${fmt(rangeHi)}`} />
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input type="text" name="full_name" required placeholder="Full name *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                        <input type="tel" name="phone" required placeholder="Phone *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input type="email" name="email" placeholder="Email (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                        <input type="text" name="zip_code" placeholder="ZIP (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
                      </div>
                      <button type="submit" disabled={submitting} className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all disabled:opacity-60">
                        {submitting ? 'Unlocking…' : 'Show My Exact Estimate'}
                      </button>
                      {error && <p className="text-amber-400 text-sm font-semibold">{error}</p>}
                      <p className="text-zinc-500 text-xs text-center">No spam, no pressure. A licensed team member confirms your number against your actual roof.</p>
                    </form>
                    <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-semibold text-sm mt-4">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  </>
                )}

                {/* Precise figures render ONLY after a confirmed 2xx — never in the DOM before. */}
                {unlocked && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-7 h-7 text-green-500 shrink-0" />
                      <h2 className="text-2xl font-bold">Your exact estimate</h2>
                    </div>
                    <div className="space-y-3 mb-6">
                      {tiers.map((t) => {
                        const lo = round1k(t.minPrice * size.sqft);
                        const hi = round1k(t.maxPrice * size.sqft);
                        const mid = round1k(((t.minPrice + t.maxPrice) / 2) * size.sqft);
                        return (
                          <div key={t.tier} className="bg-black/50 border border-zinc-700 rounded-xl p-5 sm:flex items-center justify-between gap-4">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-red-400">{t.tier}</p>
                              <p className="font-bold text-lg">{t.product}</p>
                              <p className="text-zinc-400 text-sm">{t.warranty}</p>
                            </div>
                            <div className="text-left sm:text-right mt-2 sm:mt-0">
                              <p className="text-2xl font-bold whitespace-nowrap">{fmt(mid)}</p>
                              <p className="text-zinc-500 text-sm whitespace-nowrap">{fmt(lo)} – {fmt(hi)} installed</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="bg-zinc-800/60 border border-zinc-700 rounded-xl p-5 mb-6">
                      <p className="text-zinc-300 leading-relaxed"><ClipboardCheck className="w-5 h-5 text-red-500 inline mr-2" />A team member from our Deerfield Beach office will call you the next business day to confirm your estimate and schedule a <strong className="text-white">free roof inspection</strong> — the written, line-item number based on your actual roof.</p>
                    </div>
                    <a href="tel:754-258-6135" className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                      <Phone className="w-5 h-5" /> Want it sooner? Call (754) 258-6135
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Trust strip */}
          <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-3 gap-4 text-center text-sm text-zinc-400">
            <p><CheckCircle2 className="w-5 h-5 text-red-500 inline mr-1" /> Dual-licensed: CCC-1331464 &amp; CGC-1526236</p>
            <p><CheckCircle2 className="w-5 h-5 text-red-500 inline mr-1" /> 2,500+ South Florida roofs since 2006</p>
            <p><CheckCircle2 className="w-5 h-5 text-red-500 inline mr-1" /> A real person answers 24/7</p>
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
