/**
 * Margate Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function MargateMoneyPage() {
  const coordinates = getCityCoordinates('Margate');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Margate', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Margate?', a: "A roof replacement in Margate typically runs $11,000 to $30,000 in 2026. The city's many 1950s and 60s homes and 55+ ranch communities are often straightforward shingle replacements at the lower end; tile in gated communities like Coral Bay runs higher." },
    { q: "Do you handle HOA approval in Margate's communities?", a: 'Yes. For gated and 55+ communities like Coral Bay, Paradise Gardens, and Oriole Gardens, we manage the full architectural-review process — matching the required roof profile and color and submitting the documentation your HOA needs to approve the project.' },
    { q: 'Is Margate in the High-Velocity Hurricane Zone?', a: 'Yes. Margate is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every Margate job.' },
    { q: 'My older Margate home still has its original roof — should I replace it?', a: "Many Margate homes date to the 1950s and 60s master-planned era and sit along the city's 30 miles of canals. If yours is still on an original or second roof, it is very likely past service life — and roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Margate, FL | All Phase USA</title>
        <meta name="description" content="Margate, FL roofer for canal homes, gated & 55+ communities — HVHZ-code shingle, tile & metal, HOA review handled, dual-licensed since 2005. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/margate" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Margate, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Margate Florida for canal homes, gated communities, and 55-plus neighborhoods?" /></div>
              <AtomicAnswer>Margate, FL is a nine-square-mile Broward County city laced with 30 miles of canals, and one of South Florida’s most international communities — long home to some of the country’s highest concentrations of Colombian, Jamaican, and Haitian residents. Master-planned in the 1950s for 35,000 people, it now houses nearly 60,000, which means a huge stock of aging original roofs. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that builds every Margate roof to Miami-Dade HVHZ code — legally required here in Broward County. Roof replacements run $11,000 to $30,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="margate" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A ’Gateway’ Named From Its Founder</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Margate’s name has nothing to do with a beach — it’s a portmanteau coined by founder Jack Marqusee, combining the first letters of his last name with ’gate,’ because the town was planned as the gateway to western Broward County. It was incorporated as a town in 1955 and became a city in 1961.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Built on former Everglades wetlands and farmland, Margate was master-planned for just 35,000 residents and threaded with 30 miles of canals. Today nearly 60,000 people live here — the city has earned a Tree City USA designation and an ISO Class 1 fire rating — but that original 1950s and 60s housing stock is exactly why so many Margate roofs are now decades past their service life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">The Housing Stock</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Canal Homes, Gated Communities, and 55+ Neighborhoods</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Margate’s neighborhoods each roof a little differently. Coral Bay is a gated community built around a 70-acre lake with Spanish-style architecture that calls for tile — and an HOA that reviews roof profile and color, which we handle for you. Paradise Gardens and Oriole Gardens are established 55+ communities of single-level ranch homes, where proactive, insurance-driven replacement is the norm.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Then there are the canal-front homes and the quieter streets around Margate Estates near the 250-acre Fern Forest Nature Center. With 30 miles of canals packed into a nine-square-mile city, a large share of Margate homes sit on or near water, where wind exposure and moisture make the roof — and what’s underneath it — work harder.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Margate is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here must meet Miami-Dade HVHZ code — the strictest wind standard in the country. On Margate’s older homes, a tear-off often reveals decking or fascia that needs attention, and our dual license lets us handle it on the same permit instead of stopping the job.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ code is also what earns your home wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Margate Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Coral Bay', 'Paradise Gardens', 'Margate Estates', 'Oriole Gardens', 'Southgate', 'Royal Palm-Rock Island'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Margate Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Margate Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Margate and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Margate &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Margate</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Margate across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/coconut-creek" className="hover:text-red-500 transition-colors font-semibold">Coconut Creek</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coral-springs" className="hover:text-red-500 transition-colors font-semibold">Coral Springs</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/tamarac" className="hover:text-red-500 transition-colors font-semibold">Tamarac</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/north-lauderdale" className="hover:text-red-500 transition-colors font-semibold">North Lauderdale</Link>
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
