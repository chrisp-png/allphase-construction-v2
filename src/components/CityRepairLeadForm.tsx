import { Phone, CheckCircle2 } from 'lucide-react';
import { interceptLeadSubmit } from '../utils/leadConversion';

/**
 * Above-the-fold lead capture for the /roof-repair/:city pages (PR-227).
 * Paid traffic does not hunt for a form at the bottom of 3,000 words —
 * this compact strip sits directly under each city hero.
 *
 * - Posts to the "Roof Repair Leads" Formspree form via interceptLeadSubmit;
 *   the endpoint lives only in JS (PR-221/224 hardening), _gotcha honeypot
 *   included, conversion fires once on confirmed 2xx and the payload carries
 *   click IDs + first-touch attribution automatically (clickId.ts).
 * - Fields stay short per the ad-readiness spec: name, phone, email, message.
 *   City rides along as a hidden field so Clarissa sees where it came from.
 * - "Last updated" is rendered here so every wired city page shows a
 *   freshness date in the same place. Update LAST_UPDATED with each
 *   quarterly content refresh.
 */

export const LAST_UPDATED = 'August 28, 2026';

export default function CityRepairLeadForm({ city, citySlug }: { city: string; citySlug: string }) {
  return (
    <section id="city-lead-form" className="bg-zinc-950 border-y border-zinc-800 py-8 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get a Free Roof Inspection in {city}
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Same-day response on active leaks. We repair before we ever try to sell you a new
            roof — most {city} leaks are repairs, not replacements. Free inspection with photo
            documentation, and an honest repair-or-replace answer.
          </p>
          <div className="space-y-2 text-zinc-300">
            <p className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> Licensed &amp; insured — CCC-1331464 &amp; CGC-1526236</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> 4.9 stars across 160+ Google reviews</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> A real person answers 24/7</p>
          </div>
          <a href="tel:+17542275605" className="mt-5 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all">
            <Phone className="w-5 h-5" /> (754) 227-5605
          </a>
          <p className="text-zinc-500 text-xs mt-4">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <p className="text-white font-bold text-lg mb-1">Prefer we call you?</p>
          <p className="text-zinc-400 text-sm mb-4">30 seconds — we respond the same business day.</p>
          <form
            onSubmit={(e) => interceptLeadSubmit(e, `roof-repair-${citySlug}`, '/roof-calculator-thank-you.html', 'https://formspree.io/f/mojakkld')}
            method="POST"
            className="space-y-3"
          >
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
            <input type="hidden" name="_subject" value={`New Lead — Roof Repair (${city})`} />
            <input type="hidden" name="source" value={`city-page-roof-repair-${citySlug}`} />
            <input type="hidden" name="city" value={city} />
            <input type="hidden" name="state" value="FL" />
            <input type="hidden" name="service" value="Roof Repair" />
            <div className="grid sm:grid-cols-2 gap-3">
              <input type="text" name="first_name" required placeholder="Name *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
              <input type="tel" name="phone" required placeholder="Phone *" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
            </div>
            <input type="email" name="email" placeholder="Email (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
            <textarea name="message" rows={2} placeholder="What's going on with the roof? (optional)" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none" />
            <button type="submit" className="w-full bg-red-600 text-white py-3.5 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
              Request My Free Inspection
            </button>
            <p className="text-zinc-500 text-xs text-center">No spam, no pressure. Straight answers about your roof.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
