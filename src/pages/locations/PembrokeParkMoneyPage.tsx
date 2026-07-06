/**
 * Pembroke Park Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function PembrokeParkMoneyPage() {
  const coordinates = getCityCoordinates('Pembroke Park');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Pembroke Park', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Pembroke Park?', a: 'A roof replacement on a site-built Pembroke Park home typically runs $10,000 to $28,000 in 2026, depending on size and material. Commercial and warehouse flat roofs are priced by the building and square footage.' },
    { q: 'Do you do commercial and warehouse roofing in Pembroke Park?', a: "Yes. Pembroke Park has one of Broward's densest concentrations of warehouses and distribution centers, and commercial flat roofing — TPO, PVC, and modified bitumen — is a core service. We handle re-roofs and full replacements on industrial and commercial buildings." },
    { q: 'Is Pembroke Park in the High-Velocity Hurricane Zone?', a: 'Yes. Pembroke Park is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof — residential or commercial — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job.' },
    { q: 'My Pembroke Park home is older — should I replace the roof?', a: "Many Pembroke Park site-built homes date to the town's mid-century origins. If yours is still on an original or second roof, it is very likely past service life — and roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Pembroke Park, FL | All Phase USA</title>
        <meta name="description" content="Pembroke Park, FL roofer for site-built homes, townhomes & commercial/warehouse flat roofs — HVHZ-code, dual-licensed roofing + GC since 2006. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/pembroke-park" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Pembroke Park, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Pembroke Park Florida for homes, townhomes, and commercial warehouse flat roofs?" /></div>
              <AtomicAnswer>Pembroke Park, FL is a tiny 1.6-square-mile Broward County town wedged between Miami and Fort Lauderdale — famous as a mobile-home and snowbird community, but also ’The Small Town That Means Big Business,’ packed with warehouses and Fortune 500 distribution facilities. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that roofs the town’s site-built homes, townhomes, and commercial buildings to Miami-Dade HVHZ code — legally required here in Broward. Home roof replacements run $10,000 to $28,000, with commercial flat roofs priced by the building.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="pembroke-park" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From ’Holly Hill’ Quarries to Big Business</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Pembroke Park started life as ’Holly Hill’ — a patch of nurseries, quarries, and mobile-home parks in southwestern Broward — and was incorporated in December 1957 before merging with the Hollywood Ridge Farms subdivision in 1959 to take its current name. Those old rock quarries are now its lakes: about 0.6 of the town’s 1.6 square miles is water.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Today it wears two hats. It’s the ’King of Mobile Home Communities’ — nearly half its residents live across 17 mobile-home parks, and its 6,000 year-round population practically doubles each winter with Canadian and northern snowbirds. And it’s ’The Small Town That Means Big Business,’ home to 700-plus businesses, Fortune 500 distribution centers, and broadcast towers for PBS and CBS — even doubling as a film set for movies like There’s Something About Mary.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Site-Built Homes, Townhomes, and Commercial Flat Roofs</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">While Pembroke Park is known for its mobile-home parks, it’s also full of the work we do best. Trinity and Holiday Village are established neighborhoods of affordable, site-built starter homes; the Western Edge is newer townhomes and villas; and the town’s industrial core is one of Broward’s densest concentrations of warehouse and distribution buildings.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That mix means we handle single-family shingle and tile replacements, townhome and villa roofs with HOA coordination, and — a specialty here — large commercial and warehouse flat roofs in TPO, PVC, and modified bitumen. As a dual-licensed roofing and general contractor, we’re built for both the house and the distribution center.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Pembroke Park is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here — home or commercial — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job, with the engineered attachment and documentation that keeps your property protected and insurable.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On the town’s older site-built homes, a tear-off sometimes reveals decking or structural work that a shingle-only crew can’t legally touch. Our dual license lets us handle it on the same permit instead of stopping the job.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pembroke Park Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['The Western Edge', 'Trinity', 'Holiday Village', 'Lake Park', 'Hollywood Ridge', 'Industrial District'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Pembroke Park Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Pembroke Park Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Pembroke Park and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Pembroke Park &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Pembroke Park</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Pembroke Park across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/hollywood" className="hover:text-red-500 transition-colors font-semibold">Hollywood</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/hallandale-beach" className="hover:text-red-500 transition-colors font-semibold">Hallandale Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-pines" className="hover:text-red-500 transition-colors font-semibold">Pembroke Pines</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/miramar" className="hover:text-red-500 transition-colors font-semibold">Miramar</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/dania-beach" className="hover:text-red-500 transition-colors font-semibold">Dania Beach</Link>
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
