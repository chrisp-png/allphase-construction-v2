/**
 * Wilton Manors Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function WiltonManorsMoneyPage() {
  const coordinates = getCityCoordinates('Wilton Manors');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Wilton Manors', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Wilton Manors?', a: 'A roof replacement in Wilton Manors typically runs $11,000 to $32,000 in 2026. Mid-century flat roofs and shingle sit at the lower-to-middle range; canal-front tile and metal run higher, and condo-association roofs are priced by the building.' },
    { q: 'Do you do flat roofs on Wilton Manors mid-century homes?', a: "Yes. Wilton Manors' mid-century homes often have flat or low-slope roofs, and flat roofing is a core service. We install TPO, PVC, and modified bitumen to HVHZ spec, with proper attachment and a fully adhered membrane." },
    { q: 'How do you protect a Wilton Manors canal-front roof from salt air?', a: 'For canal-front homes in East Wilton Manors and Jenada Isles, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt and brackish water corrode the metal components long before the roofing surface wears out.' },
    { q: 'Is Wilton Manors in the High-Velocity Hurricane Zone?', a: 'Yes. Wilton Manors is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof — flat, tile, or shingle — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Wilton Manors, FL | All Phase USA</title>
        <meta name="description" content="Wilton Manors, FL roofer for mid-century flat roofs & canal-front homes — TPO/PVC flat, shingle, tile & metal, HVHZ-code, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/wilton-manors" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Wilton Manors, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Wilton Manors Florida for mid-century flat roofs and canal-front homes?" /></div>
              <AtomicAnswer>Wilton Manors, FL is Broward County’s ’Island City’ — literally wrapped by the Middle River and its canals, just north of downtown Fort Lauderdale, and one of the most vibrant, inclusive communities in South Florida. It’s a city of mid-century homes and waterfront canal properties, which makes flat and low-slope roofing a big part of the picture. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, metal, and flat roofs to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $11,000 to $32,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="wilton-manors" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Island City on the Middle River</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Wilton Manors earns its ’Island City’ nickname literally — it’s all but surrounded by the winding Middle River and an intricate canal system, just north of downtown Fort Lauderdale. It’s a compact, walkable, famously inclusive city, home to the buzzing Wilton Drive corridor and, a few blocks away, the mangrove boardwalk of Colohatchee Park. In 2018 it made national history as one of the first U.S. cities to elect an all-LGBT commission.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">For a roofer, the defining fact is the housing. Wilton Manors is full of classic mid-century homes, many with the low-slope and flat roofs that came with that architecture, plus waterfront canal properties on the east side. That mix is exactly our wheelhouse.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mid-Century Flat Roofs and Canal-Front Homes</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Central Wilton Manors and the Wilton Drive corridor are full of mid-century single-family homes, modern townhomes, and condos — and mid-century design means a lot of flat and low-slope roofs. We install and replace flat roofs in TPO, PVC, and modified bitumen, alongside architectural shingle and tile for the pitched homes.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">East Wilton Manors and gated pockets like Jenada Isles sit right on the Middle River and its canals, where salt and brackish water go to work on a roof’s metal first. On those waterfront homes we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment. And as a dual-licensed general contractor, we handle any decking or structural work a mid-century tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Wilton Manors is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here — flat, tile, or shingle — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. Flat and low-slope roofs have their own HVHZ attachment and membrane requirements, and we build to every one of them.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wilton Manors Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Central Wilton Manors', 'Wilton Drive Corridor', 'East Wilton Manors', 'West Wilton Manors', 'Jenada Isles', 'Middle River'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Wilton Manors Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Wilton Manors Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Wilton Manors and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Wilton Manors &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Wilton Manors</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Wilton Manors across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/oakland-park" className="hover:text-red-500 transition-colors font-semibold">Oakland Park</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderdale-by-the-sea" className="hover:text-red-500 transition-colors font-semibold">Lauderdale-by-the-Sea</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderhill" className="hover:text-red-500 transition-colors font-semibold">Lauderhill</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-500 transition-colors font-semibold">Pompano Beach</Link>
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
