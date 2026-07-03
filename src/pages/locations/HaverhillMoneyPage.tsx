/**
 * Haverhill Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function HaverhillMoneyPage() {
  const coordinates = getCityCoordinates('Haverhill');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Haverhill', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Haverhill?', a: 'A roof replacement in Haverhill typically runs $10,000 to $26,000 in 2026 for most single-family homes, depending on roof size and material. Shingle sits at the lower end, tile at the higher end.' },
    { q: 'My Haverhill home is older — should I replace the roof?', a: "Much of Haverhill's housing is decades old, so many homes are on aging roofs. If yours is past 15 to 20 years, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand." },
    { q: 'Do I need permits to re-roof in Haverhill?', a: 'Yes. Every roof replacement in Haverhill requires a permit with sealed product approvals. We handle the entire permitting process and pass inspection the first time.' },
    { q: 'Is Haverhill in the High-Velocity Hurricane Zone?', a: 'Palm Beach County is not legally HVHZ, but Haverhill still sees real hurricane wind, so we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance credits.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Haverhill, FL | All Phase USA</title>
        <meta name="description" content="Haverhill, FL roofer for this small central Palm Beach County town — aging single-family homes, shingle & tile, HVHZ-spec, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/haverhill" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Haverhill, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Haverhill Florida for older single-family homes?" /></div>
              <AtomicAnswer>Haverhill, FL is a small, quiet residential town in central Palm Beach County near West Palm Beach — incorporated in 1950 and named after Haverhill, Massachusetts. It’s almost entirely modest single-family homes, many now on aging roofs. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, and metal, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $10,000 to $26,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="haverhill" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Small Town With a New England Name</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Haverhill is one of Palm Beach County’s smaller municipalities — a quiet residential town of roughly 2,000 people just west of West Palm Beach, incorporated in 1950 and named, oddly enough, after Haverhill, Massachusetts. There’s no commercial strip or tourist draw here; it’s simply a tight, tree-lined community of single-family homes.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That means the roofing here is straightforward but overdue for a lot of homes: much of Haverhill’s housing dates back decades, and a large share of its roofs are past their service life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Single-Family Homes, Done Right</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Haverhill is almost all single-family homes, so most jobs here are clean architectural-shingle or tile replacements. Being inland, there’s no salt-air problem, but the homes are older, and a tear-off often reveals decking or fascia that needs attention.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed roofing and general contractor, we handle that structural work on the same permit instead of leaving you to hire it out separately, and we pull every Haverhill permit properly and pass inspection the first time.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are, but Haverhill still takes real hurricane wind, so we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That upgrade is also what qualifies your home for wind-mitigation insurance credits. On Haverhill’s older homes especially, replacing a tired roof with a code-current one can meaningfully lower your premium, and we document every feature your insurer needs.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Haverhill Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Haverhill Road corridor', 'Lash Drive area', 'Charleston Court', 'Golfview', 'Bshara Woods', 'Old Haverhill'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Haverhill Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Haverhill Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Haverhill and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Haverhill &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Haverhill</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Haverhill across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors font-semibold">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/greenacres" className="hover:text-red-500 transition-colors font-semibold">Greenacres</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/royal-palm-beach" className="hover:text-red-500 transition-colors font-semibold">Royal Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lake-worth-beach" className="hover:text-red-500 transition-colors font-semibold">Lake Worth Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/wellington" className="hover:text-red-500 transition-colors font-semibold">Wellington</Link>
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
