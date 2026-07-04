/**
 * Loxahatchee Groves Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function LoxahatcheeGrovesMoneyPage() {
  const coordinates = getCityCoordinates('Loxahatchee Groves');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Loxahatchee Groves', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Loxahatchee Groves?', a: 'A roof replacement in Loxahatchee Groves typically runs $12,000 to $35,000 in 2026, depending on size and material. Ranch homes in shingle sit at the lower end; standing-seam metal runs higher, and barns or outbuildings are priced separately or bundled with the house.' },
    { q: 'Do you roof barns and agricultural buildings in Loxahatchee Groves?', a: 'Yes. Most Loxahatchee Groves properties are homesteads with barns, stables, or workshops, and we roof the whole property. Metal roofing — standing-seam and ag panel — is a specialty here and a natural fit for rural and agricultural structures.' },
    { q: 'Is metal roofing a good choice in Loxahatchee Groves?', a: 'Metal roofing is popular in Loxahatchee Groves for its durability, long lifespan, and rural aesthetic. We install standing-seam and ag-panel metal to HVHZ spec, along with architectural shingle and tile for homeowners who prefer them.' },
    { q: 'Is Loxahatchee Groves in the High-Velocity Hurricane Zone?', a: "Palm Beach County isn't legally HVHZ, but the wind out on Loxahatchee Groves' open acreage is very real — the 1928 hurricane knocked houses off their foundations here, 32 miles inland. So we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance credits." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Loxahatchee Groves, FL | All Phase USA</title>
        <meta name="description" content="Loxahatchee Groves, FL roofer for rural homesteads, ranches, barns & ag structures on acreage — metal, shingle & tile, HVHZ-spec, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/loxahatchee-groves" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Loxahatchee Groves, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Loxahatchee Groves Florida for rural homesteads, barns, and metal roofs on acreage?" /></div>
              <AtomicAnswer>Loxahatchee Groves, FL — ’Florida’s Last Frontier’ — is a rural town 17 miles west of West Palm Beach and the oldest of the county’s western communities. Incorporated in 2006 to protect a way of life built on multi-acre ranches, livestock, no HOAs, well water, and no paved-road mandates, it’s a place of homesteads, barns, and equestrian estates. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that roofs rural homes and agricultural structures in shingle, tile, and metal, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $12,000 to $35,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="loxahatchee-groves" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">’Love It and Leave It Alone’ — Florida’s Last Frontier</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Loxahatchee Groves is the oldest of Palm Beach County’s western communities. Its land was part of a two-million-acre tract that Southern States Land and Timber Company bought in 1902 for 25 cents an acre; once the canals were finished in 1917, it was platted as a farming community, and the Loxahatchee Groves Water Control District still maintains roughly 30 miles of those parallel canals and roads today.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Residents fought to keep it rural. Their longtime motto — ’Love it and leave it alone’ — discouraged streetlights, sewers, and paved roads, and in 2006 the town incorporated to lock that character in as the county’s 38th municipality. Most properties still run on well water and private septic, with no HOA dictating what you build — which is why you’ll find custom workshops, heavy equipment, horses, and even the occasional exotic animal out here (Lion Country Safari is a neighbor). There’s even a 96-acre sod farm owned by Dolphins owner Stephen Ross that grows the turf for Hard Rock Stadium.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ranch Homes, Barns, and Ag Structures on Acreage</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Homes here sit on 1- to 5-plus-acre lots in The Groves and the adjacent Acreage — Fox Trail, Deer Run, White Fences — ranch-style residences surrounded by barns, stables, and workshops. Metal roofing is right at home in Loxahatchee Groves: durable, long-lasting, and a natural fit for the rural look, whether it’s standing-seam on the main house or ag panel on a barn. We also install architectural shingle and tile for homeowners who want them.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Because most properties are whole homesteads, we roof all of it — the house, the barn, the workshop — and coordinate the job around the livestock and equipment on your land. As a dual-licensed general contractor, we also handle the structural and decking work older rural buildings often need on the same permit instead of stopping the job.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Don’t let ’inland’ fool you: when the 1928 hurricane came through, it knocked nearly every house in Loxahatchee Groves off its foundation — 32 miles from the coast. The wind out here on open, unbroken acreage is very real, and Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are. So we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On open rural lots with no windbreak, that engineered wind resistance is exactly what keeps a roof on in a storm — and it’s also what qualifies your home for wind-mitigation insurance credits, which we document for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Loxahatchee Groves Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['The Groves', 'A Road', 'D Road', 'Collecting Canal Road', 'North Road', 'Okeechobee Corridor'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Loxahatchee Groves Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Loxahatchee Groves Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Loxahatchee Groves and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Loxahatchee Groves &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Loxahatchee Groves</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Loxahatchee Groves across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/royal-palm-beach" className="hover:text-red-500 transition-colors font-semibold">Royal Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/wellington" className="hover:text-red-500 transition-colors font-semibold">Wellington</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/westlake" className="hover:text-red-500 transition-colors font-semibold">Westlake</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/greenacres" className="hover:text-red-500 transition-colors font-semibold">Greenacres</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors font-semibold">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-county" className="text-[#C5A572] hover:text-white transition-colors font-semibold">All Palm Beach County</Link>
            </div>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
