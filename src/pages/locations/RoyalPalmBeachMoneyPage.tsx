/**
 * Royal Palm Beach Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function RoyalPalmBeachMoneyPage() {
  const coordinates = getCityCoordinates('Royal Palm Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Royal Palm Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Royal Palm Beach?', a: 'A roof replacement in Royal Palm Beach typically runs $11,000 to $32,000 in 2026. Older 1960s and 70s homes and no-HOA neighborhoods are often straightforward shingle at the lower end; tile in gated and golf communities like Madison Green runs higher.' },
    { q: 'Do I need HOA approval to re-roof in Royal Palm Beach?', a: 'It depends on the neighborhood. Gated communities like Madison Green, Portosol, and Bella Terra require HOA architectural review, which we handle for you; no-HOA neighborhoods like Counterpoint Estates give you full freedom over material and color.' },
    { q: 'Is Royal Palm Beach in the High-Velocity Hurricane Zone?', a: "Royal Palm Beach is inland, so no salt air, but it's fully exposed to Palm Beach County hurricane winds. The county isn't legally HVHZ, so we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance credits." },
    { q: 'My Royal Palm Beach home is older — should I replace the roof?', a: 'Royal Palm Beach dates to 1959, so its older neighborhoods have homes on aging roofs. If yours is past 15 to 20 years, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Royal Palm Beach, FL | All Phase USA</title>
        <meta name="description" content="Royal Palm Beach, FL roofer for gated, golf-course & no-HOA neighborhoods — tile, shingle & metal, HOA review handled, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/royal-palm-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Royal Palm Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Royal Palm Beach Florida for gated golf communities and no-HOA neighborhoods?" /></div>
              <AtomicAnswer>Royal Palm Beach, FL is an inland Palm Beach County village — 10 to 15 miles from the Atlantic despite the ’Beach’ in its name — incorporated in 1959 as a planned bedroom community on former Seminole hunting grounds. Today it’s a prosperous, park-filled suburb of master-planned and gated neighborhoods. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs tile, shingle, and metal, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $11,000 to $32,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="royal-palm-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Village’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The ’Beach’ With No Beach</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Royal Palm Beach is the only municipality in Palm Beach County with a coastal name and zero shoreline — it sits 10 to 15 miles inland, and developers simply added ’Beach’ to conjure a tropical, waterside image. Before it was incorporated in 1959 as a planned bedroom community, the area was mostly swamp and a Seminole hunting ground.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">What it lacks in coastline it makes up for in green space: the village has the highest per-capita parkland ratio in the county — more than 10 acres per 1,000 residents — anchored by Commons Park, which even hosts ’Shakespeare in the Palms.’ It’s a prosperous, diverse family suburb, and its housing spans everything from 1960s and 70s originals to brand-new gated communities.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Golf-Course, Gated, and No-HOA Neighborhoods</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Royal Palm Beach roofs cover a wide range. Master-planned and gated communities like Madison Green (built around a golf club), Portosol, and Bella Terra favor tile and come with HOA architectural review — which we manage end to end, matching the required profile and color. Victoria Groves adds manicured, tree-lined single-family streets.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Then there’s Counterpoint Estates, an established no-HOA neighborhood where owners have full freedom over their roof — no board approval to wait on, so we can move straight to the material you want. As a dual-licensed general contractor, we also handle any decking or structural work an older Royal Palm Beach tear-off uncovers, on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Royal Palm Beach is inland, so it doesn’t face coastal salt air — but it’s fully exposed to Palm Beach County’s hurricane winds, and the county is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are. So we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That upgrade is also what earns your home wind-mitigation insurance credits. We build with reinforced attachment and a code-current secondary water barrier, and document every qualifying feature your insurer uses to calculate the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Royal Palm Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Madison Green', 'Portosol', 'Counterpoint Estates', 'Bella Terra', 'Victoria Groves', 'La Mancha'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Royal Palm Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Royal Palm Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Royal Palm Beach and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Royal Palm Beach &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Royal Palm Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Royal Palm Beach across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/wellington" className="hover:text-red-500 transition-colors font-semibold">Wellington</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/loxahatchee-groves" className="hover:text-red-500 transition-colors font-semibold">Loxahatchee Groves</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/greenacres" className="hover:text-red-500 transition-colors font-semibold">Greenacres</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors font-semibold">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/westlake" className="hover:text-red-500 transition-colors font-semibold">Westlake</Link>
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
