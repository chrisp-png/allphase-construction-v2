/**
 * Hypoluxo Custom Location Page (PR-119) — hand-built, unique local content.
 */
import { Helmet } from 'react-helmet-async';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import CityProjectGallery from '../../components/CityProjectGallery';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function HypoluxoMoneyPage() {
  const coordinates = getCityCoordinates('Hypoluxo');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Hypoluxo', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Hypoluxo?', a: 'A roof replacement in Hypoluxo typically runs $10,000 to $32,000 in 2026. Mainland homes in shingle sit at the lower end; waterfront tile and metal run higher.' },
    { q: 'How do you protect a Hypoluxo waterfront roof from salt air?', a: 'For homes near the Intracoastal, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt and brackish water corrode the metal components long before the roofing surface wears out.' },
    { q: 'My Hypoluxo home is older — should I replace the roof?', a: 'Many Hypoluxo homes are decades old. If yours is past 15 to 20 years, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' },
    { q: 'Is Hypoluxo in the High-Velocity Hurricane Zone?', a: "Palm Beach County is not legally HVHZ, but Hypoluxo's Intracoastal exposure sees real wind, so we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance credits." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Hypoluxo, FL | All Phase USA</title>
        <meta name="description" content="Hypoluxo, FL roofer for this small Intracoastal town — modest homes to island waterfront, shingle, tile & metal, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/hypoluxo" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Hypoluxo, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Hypoluxo Florida for homes near the Intracoastal?" /></div>
              <AtomicAnswer>Hypoluxo, FL is a small Palm Beach County town on the Intracoastal near Lantana and Lake Worth Beach, incorporated in 1955. Its name comes from a Seminole phrase meaning ’water all around, no way out,’ and its housing runs from modest mainland homes to waterfront properties near Hypoluxo Island. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, and coastal-grade metal, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $10,000 to $32,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="hypoluxo" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">’Water All Around’ on the Intracoastal</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hypoluxo takes its name from a Seminole phrase meaning ’water all around, no way out’ — a nod to its setting on the Lake Worth Lagoon and Intracoastal. It’s a small town, incorporated in 1955, tucked between Lantana and Lake Worth Beach, part mainland residential and part waterfront near Hypoluxo Island.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That water is the roofing story: homes near the Intracoastal take salt and brackish exposure, while the mainland homes are older and often due for replacement.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mainland Homes and Waterfront Properties</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">On Hypoluxo’s mainland streets, most jobs are architectural-shingle or tile replacements on established single-family homes. Near the water, we shift to coastal-grade detailing — marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment — because on the Intracoastal it’s the metal components that corrode first.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed roofing and general contractor, we handle whatever a tear-off uncovers on an older Hypoluxo home, decking and framing included, on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are, but Hypoluxo’s Intracoastal exposure means real wind, so we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That upgrade is also what qualifies your home for wind-mitigation insurance credits, which we document for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hypoluxo Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Hypoluxo Island edge', 'Overlook', 'Ocean Breeze area', 'Intracoastal shore', 'Seaview', 'Old Hypoluxo'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Hypoluxo Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Hypoluxo Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Hypoluxo and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Hypoluxo &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
