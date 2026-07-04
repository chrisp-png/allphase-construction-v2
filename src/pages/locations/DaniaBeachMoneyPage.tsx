/**
 * Dania Beach Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function DaniaBeachMoneyPage() {
  const coordinates = getCityCoordinates('Dania Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Dania Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '153' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Dania Beach?', a: 'A roof replacement in Dania Beach typically runs $11,000 to $35,000 in 2026. Older inland homes in shingle sit at the lower end; coastal tile and metal run higher, and condo roofs are priced by the building.' },
    { q: 'My Dania Beach home is old — should I replace the roof?', a: "As Broward's oldest city, Dania Beach has a lot of early-century and mid-century homes on aging roofs. If yours is past its service life, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you where you stand." },
    { q: 'How do you protect a Dania Beach coastal roof from salt air?', a: 'For canal and beachfront homes, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt corrodes the metal components long before the tile or panel wears out.' },
    { q: 'Is Dania Beach in the High-Velocity Hurricane Zone?', a: 'Yes. Dania Beach is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Dania Beach, FL | All Phase USA</title>
        <meta name="description" content="Dania Beach, FL roofer for Broward's oldest city — coastal homes, condos & aging bungalows, HVHZ-code tile, shingle & flat, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/dania-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Dania Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Dania Beach Florida for older coastal homes and condos?" /></div>
              <AtomicAnswer>Dania Beach, FL is the oldest city in Broward County — incorporated in 1904, once the ’Tomato Capital of the World,’ and today known for its antique row, fishing pier, and the new Dania Pointe. Its housing runs from century-old bungalows to beachfront condos. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, metal, and flat roofs to Miami-Dade HVHZ code, legally required here in Broward. Roof replacements run $11,000 to $35,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="dania-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Broward’s Oldest City, From Tomatoes to the Pier</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Dania Beach holds the title of Broward County’s oldest city, incorporated back in 1904 when it was farmland — it was once known as the ’Tomato Capital of the World.’ Today it’s better known for its antique row, the Dania Beach Pier, the IGFA Fishing Hall of Fame, and the sprawling new Dania Pointe development, all tucked between Fort Lauderdale, the airport, and Port Everglades.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Being the oldest city means a deep stock of aging homes: early-century bungalows and mid-century houses inland, plus beachfront condos and canal homes near the water — a real range of roofs, many well past their service life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Historic Bungalows, Canal Homes, and Beach Condos</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Inland, Dania Beach is older single-family homes — bungalows and mid-century houses where architectural shingle or tile replacement is usually the right call, often over decking that needs attention after decades. Near the water, canal and beachfront homes face direct salt air, so we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">The city’s condos add low-slope association roofs in TPO, PVC, and modified bitumen. As a dual-licensed general contractor, we cover all of it and handle any structural or decking work an older Dania Beach tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Dania Beach is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here must meet Miami-Dade HVHZ code, the strictest wind standard in the country. On the coastal and canal homes especially, that engineering is what holds up when a storm comes off the Atlantic.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home wind-mitigation insurance credits, which we document for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Dania Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Dania Beach Pier', 'Antique Row', 'Melaleuca Gardens', 'Sea Fair', 'Harbour Isles', 'Oak Ridge'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Dania Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Dania Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Dania Beach and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Dania Beach &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Dania Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Dania Beach across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/hollywood" className="hover:text-red-500 transition-colors font-semibold">Hollywood</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/hallandale-beach" className="hover:text-red-500 transition-colors font-semibold">Hallandale Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/davie" className="hover:text-red-500 transition-colors font-semibold">Davie</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/oakland-park" className="hover:text-red-500 transition-colors font-semibold">Oakland Park</Link>
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
