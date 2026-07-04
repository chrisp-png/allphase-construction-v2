/**
 * Pompano Beach Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function PompanoBeachMoneyPage() {
  const coordinates = getCityCoordinates('Pompano Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Pompano Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '153' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Pompano Beach?', a: 'A roof replacement in Pompano Beach typically runs $11,000 to $40,000 or more in 2026. Family ranch homes in shingle sit at the lower end; waterfront tile and standing-seam metal run higher, and condo-association roofs are priced by the building.' },
    { q: 'How do you protect a Pompano Beach waterfront roof from salt air?', a: 'For waterfront homes in Hillsboro Shores and Harbor Village, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt corrodes the metal components long before the tile or panel wears out.' },
    { q: 'Do you do condo and golf-community roofing in Pompano Beach?', a: 'Yes. Palm Aire and other Pompano communities include condo and golf-course associations. We handle large low-slope association roofs in TPO, PVC, and modified bitumen, and coordinate the board approvals.' },
    { q: 'Is Pompano Beach in the High-Velocity Hurricane Zone?', a: 'Yes. Pompano Beach is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Pompano Beach, FL | All Phase USA</title>
        <meta name="description" content="Pompano Beach, FL roofer from Harbor Village dock estates to Palm Aire condos — HVHZ-code tile, metal, shingle & flat roofs, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/pompano-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Pompano Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Pompano Beach Florida for waterfront, family, and condo homes?" /></div>
              <AtomicAnswer>Pompano Beach, FL is a big, diverse Broward County beach city — ’the Wreck Capital of Florida,’ with 18 sunken ships offshore and a fishing pier shaped like a fish. It runs from Intracoastal dock estates in Harbor Village to family ranch neighborhoods and west-side golf communities. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that roofs coastal, family, and condo homes to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $11,000 to $40,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="pompano-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Wreck Capital, From the Beach to Palm Aire</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Pompano Beach earned its nickname the ’Wreck Capital of Florida’ honestly — divers explore 18 sunken vessels just offshore, including a sunken casino, and the Fisher Family Pier juts 865 feet into the Atlantic with a tip shaped, from above, like a fish. It’s a quirky, boating-first city: 26 decorated public-art fish scattered around town, free electric golf-cart rides, and some of Broward’s best-value waterfront — dock homes here average around $1.2 million, roughly half of Fort Lauderdale’s median.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">It’s also a big, varied city, and that variety is the whole roofing story. Pompano runs from beachfront Hillsboro Shores and the Intracoastal docks of Harbor Village, through family ranch neighborhoods like Cresthaven and Highlands, out to the golf-course condos and Spanish-style homes of Palm Aire on the west side.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Waterfront, Family, and Golf-Community Roofs</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">On the water — Hillsboro Shores and Harbor Village — you’ve got Spanish Revival homes, bungalows, and dock estates that live in salt air, so we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, and lean toward tile and standing-seam metal. Cresthaven and Highlands are classic ranch-home neighborhoods where a clean architectural-shingle replacement is usually the right call.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">West in Palm Aire, it’s a mix of golf-course condos and Spanish-tile homes — meaning both condo-association low-slope roofs (TPO, PVC, modified bitumen) and single-family tile. As a dual-licensed general contractor, we cover all of it, and handle any decking or structural work a tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Pompano Beach is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here must meet Miami-Dade HVHZ code — the strictest wind standard in the country. On the barrier-island and Intracoastal homes especially, that engineering is what keeps tile and metal in place when a storm comes off the Atlantic.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings — which add up on Pompano’s waterfront homes.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pompano Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Hillsboro Shores', 'Harbor Village', 'Cresthaven', 'Highlands', 'Palm Aire', 'Old Pompano'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Pompano Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Pompano Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Pompano Beach and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Pompano Beach &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Pompano Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Pompano Beach across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/lighthouse-point" className="hover:text-red-500 transition-colors font-semibold">Lighthouse Point</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/deerfield-beach" className="hover:text-red-500 transition-colors font-semibold">Deerfield Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/oakland-park" className="hover:text-red-500 transition-colors font-semibold">Oakland Park</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/margate" className="hover:text-red-500 transition-colors font-semibold">Margate</Link>
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
