/**
 * Lauderdale-by-the-Sea Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function LauderdaleByTheSeaMoneyPage() {
  const coordinates = getCityCoordinates('Lauderdale-by-the-Sea');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Lauderdale-by-the-Sea', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Lauderdale-by-the-Sea?', a: "A roof replacement in Lauderdale-by-the-Sea typically runs $14,000 to $45,000 or more in 2026. Coastal tile and standing-seam metal, standard on the town's barrier-island homes, sit at the higher end, and Terra Mar canal estates run higher still." },
    { q: 'How do you protect a Lauderdale-by-the-Sea roof from salt air?', a: 'On this barrier island we use marine-grade stainless fasteners, corrosion-resistant flashing, and a fully sealed self-adhered underlayment. In this environment the metal components corrode long before the tile or panel wears out, so upgrading them is the key to a coastal roof lasting.' },
    { q: 'What roofing works best in Lauderdale-by-the-Sea?', a: "Tile and standing-seam metal are the go-to choices for the town's constant salt-and-wind exposure. We install both to HVHZ spec with reinforced ridge attachment engineered for direct Atlantic wind." },
    { q: 'Is Lauderdale-by-the-Sea in the High-Velocity Hurricane Zone?', a: 'Yes. Lauderdale-by-the-Sea is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — and on an exposed barrier island, that standard matters more than almost anywhere.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Lauderdale-by-the-Sea, FL | All Phase USA</title>
        <meta name="description" content="Lauderdale-by-the-Sea, FL barrier-island roofer — coastal-grade tile & standing-seam metal built for salt air and Atlantic wind, HVHZ code, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/lauderdale-by-the-sea" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Lauderdale-by-the-Sea, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Lauderdale-by-the-Sea Florida barrier-island homes exposed to salt air and Atlantic wind?" /></div>
              <AtomicAnswer>Lauderdale-by-the-Sea, FL is a barrier-island town of just over one square mile in Broward County — the self-styled ’Beach Diving Capital,’ with a living coral reef 100 yards offshore and a strict four-story height limit that keeps it low-rise and salt-swept. That direct Atlantic exposure is punishing on roofs. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) installing coastal-grade tile and standing-seam metal to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $14,000 to $45,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="lauderdale-by-the-sea" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Beach Diving Capital, Kept Low and Salt-Swept</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderdale-by-the-Sea is unlike anywhere else on the Broward coast. It’s the ’Beach Diving Capital,’ with a living coral reef just 100 yards off Anglin’s Fishing Pier and the wreck of the SS Copenhagen — a 1900 British steamship — protected offshore as an Underwater Archaeological Preserve. In its early years locals lassoed alligators for sport; today the ’Bocce Boys’ play by the ocean and the whole town fits in just over a square mile.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Crucially for a roof, the town enforces a strict four-story building height limit — no high-rises, no shadows on the beach. That keeps LBTS a town of single-family homes and low-rise condos sitting directly in the salt air and Atlantic wind, which is the single toughest environment a roof can face in South Florida.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">The Housing Stock</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Barrier-Island Homes, Canal Estates, and Village Condos</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">LBTS neighborhoods each roof a little differently. Terra Mar Island Estates is an exclusive boating community of single-family homes on deep-water canals with direct Intracoastal access — high-value properties where tile and metal are the norm. Silver Shores sits on the mainland edge of the village, and the Central Business District, or Village Center, is walkable low-rise condos and apartments right by the beach.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On a barrier island, it isn’t the tile or the panel that fails first — it’s the metal. We install marine-grade stainless fasteners, corrosion-resistant flashing, and a fully sealed self-adhered underlayment on every LBTS roof, because that’s what survives the constant salt. And as a dual-licensed general contractor, we can address the decking and structural work older coastal homes often need on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Coastal-Grade, Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderdale-by-the-Sea is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. On an exposed barrier island taking direct Atlantic wind, that isn’t a formality; it’s what keeps tile and metal panels in place when a storm comes ashore.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">We build to HVHZ code with reinforced ridge attachment on every job, and we document the wind-mitigation features your insurer uses to calculate discounts — which matter even more on high-value coastal homes.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Lauderdale-by-the-Sea Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Terra Mar Island Estates', 'Silver Shores', 'Village Center', 'Bel Air', 'El Mar Drive', 'Anglin’s Pier'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Lauderdale-by-the-Sea Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Lauderdale-by-the-Sea Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Lauderdale-by-the-Sea and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Lauderdale-by-the-Sea &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Lauderdale-by-the-Sea</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Lauderdale-by-the-Sea across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/oakland-park" className="hover:text-red-500 transition-colors font-semibold">Oakland Park</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-500 transition-colors font-semibold">Pompano Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/sea-ranch-lakes" className="hover:text-red-500 transition-colors font-semibold">Sea Ranch Lakes</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/wilton-manors" className="hover:text-red-500 transition-colors font-semibold">Wilton Manors</Link>
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
