import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, FileCheck, Camera, ClipboardList, Shield, CheckCircle2 } from 'lucide-react';

export default function FreeRoofEstimatePage() {
  useEffect(() => {
    document.title = 'Free Roof Estimate | Broward & Palm Beach | All Phase USA';
  }, []);

  const canonicalUrl = 'https://allphaseconstructionfl.com/free-roof-estimate';

  const faqs = [
    { q: 'Is a roof estimate really free?', a: 'Yes. All Phase Construction USA provides free, no-obligation roof estimates throughout Broward and Palm Beach County. There is no charge for the inspection, the measurement, or the written quote, and no obligation to move forward.' },
    { q: 'How long does it take to get a roof estimate?', a: 'After you call or text (754) 227-5605, a licensed estimator typically visits your home within a few business days, and you receive a written, line-item estimate shortly after.' },
    { q: 'Do you give written roof estimates?', a: 'Yes. Every estimate is written and itemized — materials, labor, tear-off, permits, and code components broken out — so you can see exactly what drives the price.' },
    { q: 'Can I get an estimate for a roof repair, not just a replacement?', a: 'Yes. We provide both roof repair estimates and roof replacement estimates, and we give an honest repair-or-replace recommendation rather than pushing a full replacement.' },
    { q: 'What areas do you provide free roof estimates in?', a: 'Across Broward and Palm Beach County from our Deerfield Beach headquarters — including Boca Raton, Fort Lauderdale, Pompano Beach, Coral Springs, Boynton Beach, Delray Beach, West Palm Beach, and Wellington.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <Helmet>
        <title>Free Roof Estimate | Broward & Palm Beach | All Phase USA</title>
        <meta name="description" content="Get a free, no-obligation roof estimate in Broward & Palm Beach County — a written, line-item quote from a dual-licensed roofer. Same week. (754) 227-5605." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white">
        <section className="pt-44 pb-16 px-4 bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Free Roof Estimate in Broward &amp; Palm Beach County</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              A licensed estimator comes to your home, inspects and measures the roof, and gives you a written, line-item quote — for a roof replacement or a roof repair. No charge, no obligation. Dual-licensed (CCC-1331464 &amp; CGC-1526236), serving South Florida since 2006.
            </p>
            <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-black/40 border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold mb-8">
              <span className="text-yellow-400">★ 4.9 Google</span><span className="text-red-400">·</span>
              <span>160+ Reviews</span><span className="text-red-400">·</span>
              <span>Dual-Licensed Since 2006</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
                <Phone className="w-6 h-6" /> (754) 227-5605
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700">
                <FileCheck className="w-6 h-6" /> Request Estimate Online
              </Link>
            </div>
            <figure className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="/projects/boca-raton-metal-crew-finishing-all-phase-usa.webp"
                alt="All Phase Construction USA crew finishing a standing-seam metal roof in Boca Raton during a roof estimate project"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
              <figcaption className="bg-zinc-900/80 px-4 py-2 text-sm text-zinc-400">
                Our crew on a standing-seam metal roof in Boca Raton — the same licensed team that performs your estimate.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Your Free Roof Estimate Includes</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 text-lg text-zinc-300">
              <div className="flex items-start gap-4"><Camera className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">A full on-roof inspection.</span> Covering, flashing, valleys, penetrations, decking, and roof-to-wall connections.</p></div>
              <div className="flex items-start gap-4"><Camera className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">A photo report.</span> You see the real condition of your roof, documented.</p></div>
              <div className="flex items-start gap-4"><ClipboardList className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">A written, line-item quote.</span> Materials, labor, tear-off, permits, and code components broken out — not a vague one-number price.</p></div>
              <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">A straight repair-or-replace answer.</span> If a repair will solve the problem, we tell you so.</p></div>
              <div className="flex items-start gap-4"><Shield className="w-6 h-6 text-red-500 shrink-0 mt-1" /><p><span className="text-white font-semibold">Financing options.</span> Spread the cost into manageable monthly payments if you want to.</p></div>
            </div>
            <figure className="rounded-xl overflow-hidden border border-zinc-800">
              <img
                src="/projects/attic-inspection-in-davie-fl-found-leaks-not-detected-from-the-roof-all-phase-usa.webp"
                alt="Attic inspection in Davie FL revealing water-stained roof decking and leaks not visible from the roof surface"
                width={1440}
                height={1080}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <figcaption className="bg-zinc-900/80 px-4 py-2 text-sm text-zinc-400">
                From a real photo report: attic inspection in Davie that found leaks invisible from the roof surface. This is why we look everywhere.
              </figcaption>
            </figure>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-10 text-lg text-zinc-300 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Roof Repair Estimate vs. Roof Replacement Estimate</h2>
              <p>Not every roof needs replacing. For a <strong className="text-white">roof repair estimate</strong>, we scope the specific leak or damage and price the fix. For a <strong className="text-white">roof replacement estimate</strong>, we quote a full tear-off and re-roof built to South Florida's High-Velocity Hurricane Zone (HVHZ) code. Either way the estimate is free, and the recommendation is honest.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Why Our Estimate Is Different</h2>
              <p>Because we hold both the roofing (CCC-1331464) and general contractor (CGC-1526236) licenses, our estimate accounts for the whole system — including structural issues like rotted decking or failed connections that a roofing-only contractor would hand off to a second company mid-project. That means fewer change-order surprises, and one contract, one crew, and one warranty for the entire scope.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Want a Ballpark First?</h2>
              <p>Prefer a rough number before scheduling an in-person estimate? Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">free roof cost calculator</Link> for an instant range, or read our <Link to="/roof-replacement-cost-florida" className="text-red-500 hover:text-red-400 underline">Florida roof replacement cost guide</Link>. Need a repair scoped instead? See our <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline">roof repair services</Link>.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#27272a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Free Roof Estimate FAQ</h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-zinc-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <figure className="rounded-xl overflow-hidden border border-zinc-800 mb-10 text-left">
              <img
                src="/projects/boca-raton-shingle-roof-inspection-by-all-phase-usa.webp"
                alt="All Phase Construction USA branded van arriving at a South Florida home for a free roof inspection and estimate"
                width={1440}
                height={810}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <figcaption className="bg-zinc-900/80 px-4 py-2 text-sm text-zinc-400">
                This is who shows up: a marked All Phase truck and a licensed estimator — never a subcontracted salesman.
              </figcaption>
            </figure>
            <h2 className="text-3xl font-bold mb-4">Request Your Free Roof Estimate</h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">Serving Deerfield Beach, Boca Raton, Fort Lauderdale, and every community across Broward &amp; Palm Beach County. No charge, no obligation.</p>
            <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">
              <Phone className="w-6 h-6" /> Call or Text (754) 227-5605
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
