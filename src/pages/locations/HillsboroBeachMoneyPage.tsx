/**
 * Hillsboro Beach Custom Location Page (PR-119) — hand-built, unique local content.
 */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import CityProjectGallery from '../../components/CityProjectGallery';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function HillsboroBeachMoneyPage() {
  const coordinates = getCityCoordinates('Hillsboro Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Hillsboro Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Hillsboro Beach?', a: 'Estate roof replacements in Hillsboro Beach typically start around $30,000 and rise well beyond, depending on size and material. Premium tile and standing-seam metal are the norm on the estates, while condominium-association flat roofs are priced by the building.' },
    { q: 'How do you protect a Hillsboro Beach roof from salt air?', a: 'Many Hillsboro Beach estates sit between the Atlantic and the Intracoastal, facing salt air on two sides. We use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because in this environment the metal components corrode long before the roofing surface wears out.' },
    { q: 'Do you do condominium roofing in Hillsboro Beach?', a: "Yes. The town's northern corridor (Hillsboro Imperial, Sea Club, 1200 Ocean and others) is condominium associations. We handle large low-slope association roofs in TPO, PVC, and modified bitumen, coordinating board approvals and material staging on the town's single narrow road." },
    { q: 'Is Hillsboro Beach in the High-Velocity Hurricane Zone?', a: 'Yes. Hillsboro Beach is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — and on a narrow barrier island between two bodies of water, that standard matters more than almost anywhere.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Hillsboro Beach, FL | All Phase USA</title>
        <meta name="description" content="Hillsboro Beach, FL roofer for Millionaires' Mile estates & oceanfront condos — premium tile, metal & flat roofs, coastal-grade, HVHZ code. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/hillsboro-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Hillsboro Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Hillsboro Beach Florida oceanfront estates and condominium associations?" /></div>
              <AtomicAnswer>Hillsboro Beach, FL is a 3.2-mile barrier-island town on Broward’s north coast — ’Millionaires’ Mile’ — a narrow strip barely 900 feet wide between the Atlantic and the Intracoastal, with no commercial zones, no public beach access, and famously dark streets that protect its sea-turtle nests. Its estates and condos sit in salt air on two sides at once. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) installing premium tile, standing-seam metal, and condo-grade flat roofs to Miami-Dade HVHZ code — legally required here in Broward. Estate and condo roof projects typically start around $30,000 and rise well beyond.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="hillsboro-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Millionaires’ Mile, in the Shadow of the Lighthouse</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hillsboro Beach runs 3.2 miles along a single north-south road on a barrier island so narrow it’s barely 900 feet at its widest — the Atlantic on one side, the Intracoastal on the other. It’s anchored by the 1907 Hillsboro Lighthouse, whose 5.5-million-candlepower beam is one of the most powerful on the East Coast (its parts shipped in from as far as Paris). The town has no stores, no restaurants, and — to protect one of the East Coast’s densest concentrations of sea-turtle nests — no streetlights at all.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">It’s almost entirely residential and almost entirely high-end: roughly 50 single-family estates plus a corridor of oceanfront condominiums, many of the estates running clear from a private Atlantic beach to a deep-water Intracoastal dock. On a home like that, the roof lives in salt air on two sides at once — about the harshest test a roof can face anywhere in South Florida.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ocean-to-Intracoastal Estates and the Condo Corridor</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hillsboro Beach really has two kinds of roofs. Along Millionaires’ Mile, the single-family estates call for premium tile, standing-seam metal, and architectural flat sections — high-value homes where the workmanship shows. The northern condominium corridor — Hillsboro Imperial, Sea Club, 1200 Ocean and their neighbors — is mid- and high-rise associations that need large, code-compliant low-slope systems in TPO, PVC, or modified bitumen.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On a barrier island this exposed, the metal fails before the roof surface does, so we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment on every job. And because the town is one narrow road with tight staging, we plan material delivery, craning, and cleanup carefully — no small thing on a 900-foot-wide island.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Estate- and Condo-Grade, Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hillsboro Beach is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof — estate or condominium — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. Directly between the ocean and the Intracoastal, that engineering is what keeps tile, panels, and flat membranes in place when a storm comes ashore.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">We build to HVHZ code with reinforced attachment on every job, coordinate with estate owners, seasonal residents, and condo associations, and document the wind-mitigation features your insurer uses to calculate discounts — which matter on properties at this value.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hillsboro Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Hillsboro Mile', 'Hillsboro Imperial', 'Sea Club', '1200 Ocean', 'Hillsboro Club', 'North Corridor'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Hillsboro Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Hillsboro Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Hillsboro Beach and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Hillsboro Beach &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Hillsboro Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Hillsboro Beach across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/deerfield-beach" className="hover:text-red-500 transition-colors font-semibold">Deerfield Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lighthouse-point" className="hover:text-red-500 transition-colors font-semibold">Lighthouse Point</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-500 transition-colors font-semibold">Pompano Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boca-raton" className="hover:text-red-500 transition-colors font-semibold">Boca Raton</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/highland-beach" className="hover:text-red-500 transition-colors font-semibold">Highland Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/broward-county" className="text-[#C5A572] hover:text-white transition-colors font-semibold">All Broward County</Link>
            </div>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
