/**
 * Lauderhill Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function LauderhillMoneyPage() {
  const coordinates = getCityCoordinates('Lauderhill');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Lauderhill', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Lauderhill?', a: "A roof replacement in Lauderhill typically runs $11,000 to $30,000 in 2026. The city's many 1960s ranch homes are often straightforward shingle replacements at the lower end; tile in gated communities like Boulevard Forest runs higher, and condo or multi-unit roofs in Inverrary are priced by the building." },
    { q: 'Do you handle HOA and condo approval in Lauderhill?', a: "Yes. For Inverrary's condo associations and gated communities like Boulevard Forest, we coordinate the full association and architectural-review process — matching the required roof profile and color and submitting the documentation needed to approve the project." },
    { q: 'Is Lauderhill in the High-Velocity Hurricane Zone?', a: 'Yes. Lauderhill is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every Lauderhill job.' },
    { q: 'My older Lauderhill home still has its original roof — should I replace it?', a: "Many Lauderhill homes date to the 1960s dairy-farm-era buildout, including its prefab 'Leisurama' pockets. If yours is still on an original or second roof, it is very likely past service life — and roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Lauderhill, FL | All Phase USA</title>
        <meta name="description" content="Lauderhill, FL roofer for 1960s homes, Inverrary condos & gated communities — HVHZ-code shingle, tile & metal, HOA review handled, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/lauderhill" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Lauderhill, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Lauderhill Florida for older homes, Inverrary condos, and gated communities?" /></div>
              <AtomicAnswer>Lauderhill, FL is a Broward County city of nearly 75,000 known as the ’Cricket Capital of the United States’ — home to the nation’s only ICC-certified cricket stadium and one of the largest Jamaican-American communities in the country. Built on former dairy-farm land and full of 1960s-era housing, it has one of Broward’s deeper concentrations of aging roofs. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that builds every Lauderhill roof to Miami-Dade HVHZ code — legally required here in Broward County. Roof replacements run $11,000 to $30,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="lauderhill" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Dairy Farm to Cricket Capital</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Long before it was a city of nearly 75,000, Lauderhill was mostly the McArthur Dairy Farm, where cows outnumbered the early settlers. It grew fast: the Lauderhill Mall opened in 1966 as the first enclosed, air-conditioned shopping center in the southeastern United States, and one pocket of the city was built with ’Leisurama’ homes — fully-furnished, ready-to-live-in prefab houses marketed to New Yorkers as the futuristic American dream.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Today Lauderhill is the ’Cricket Capital of the United States,’ home to the only ICC-certified cricket stadium in the nation — a T20 World Cup host — and one of the country’s largest Jamaican-American communities. It’s a vibrant, affordable, Caribbean-flavored city, and a lot of its 1960s-era homes are now well past their original roof’s service life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">The Housing Stock</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Golf-Course Condos, Gated Estates, and Ranch Homes</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderhill’s housing is genuinely mixed. Inverrary — the city’s historical crown jewel that once hosted the Jackie Gleason Inverrary Golf Classic — ranges from golf-course condos to large single-family homes, which means both HOA-governed condo roofs and individual replacements. Boulevard Forest is a gated Mediterranean-style community where tile and architectural review are the rule, which we handle for you.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Boulevard Woods North and Cascades of Lauderhill add ranch and two-story homes with lake and canal views, while East Lauderhill leans older and denser. We roof all of it — from a single 1960s ranch to a full condo-building tear-off — and coordinate the association approvals when they’re required.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderhill is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here must meet Miami-Dade HVHZ code — the strictest wind standard in the country. On Lauderhill’s older homes, a tear-off often reveals decking or fascia that needs attention, and our dual license lets us handle it on the same permit.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ code is also what earns your home wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Lauderhill Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Inverrary', 'Boulevard Forest', 'Boulevard Woods North', 'Cascades of Lauderhill', 'East Lauderhill', 'Environ'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Lauderhill Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Lauderhill Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Lauderhill and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Lauderhill &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Lauderhill</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Lauderhill across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/lauderdale-lakes" className="hover:text-red-500 transition-colors font-semibold">Lauderdale Lakes</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/plantation" className="hover:text-red-500 transition-colors font-semibold">Plantation</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/sunrise" className="hover:text-red-500 transition-colors font-semibold">Sunrise</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/tamarac" className="hover:text-red-500 transition-colors font-semibold">Tamarac</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
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
