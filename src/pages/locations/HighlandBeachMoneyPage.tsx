/**
 * Highland Beach Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function HighlandBeachMoneyPage() {
  const coordinates = getCityCoordinates('Highland Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Highland Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '153' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Highland Beach?', a: 'A roof replacement in Highland Beach typically runs $16,000 to $50,000 in 2026 for homes, with premium tile and metal at the higher end. Oceanfront condo-association roofs are priced by the building.' },
    { q: 'How do you protect a Highland Beach roof from salt air?', a: 'Highland Beach sits between the ocean and the Intracoastal, so we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt corrodes the metal components long before the tile or panel wears out.' },
    { q: 'Do you do oceanfront condo roofing in Highland Beach?', a: "Yes. We handle large low-slope association roofs in TPO, PVC, and modified bitumen on Highland Beach's condo communities, with marine-grade detailing for the salt exposure, and coordinate board approvals." },
    { q: 'Is Highland Beach in the High-Velocity Hurricane Zone?', a: 'Palm Beach County is not legally HVHZ, but on an exposed barrier island we voluntarily build every roof to Miami-Dade HVHZ spec, the strictest wind standard in the country, for maximum protection and insurance eligibility.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Highland Beach, FL | All Phase USA</title>
        <meta name="description" content="Highland Beach, FL roofer for oceanfront condos & barrier-island estates — coastal-grade tile, metal & flat roofs, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/highland-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Highland Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Highland Beach Florida oceanfront condos and barrier-island estates?" /></div>
              <AtomicAnswer>Highland Beach, FL is an exclusive barrier-island town between Delray Beach and Boca Raton — a narrow strip of oceanfront condos and luxury estates between the Atlantic and the Intracoastal, incorporated in 1949. Its homes take salt air on two sides. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs coastal-grade tile, standing-seam metal, and flat roofs, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $16,000 to $50,000, with condo roofs priced by the building.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="highland-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Narrow Barrier Island of Luxury</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Highland Beach is a tiny, exclusive town — barely three miles of barrier island wedged between Delray Beach and Boca Raton, with the Atlantic on one side and the Intracoastal on the other. Incorporated in 1949, it’s almost entirely residential and consistently ranked one of the safest, most desirable coastal towns in Palm Beach County.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">For roofing, its geography is the whole story: oceanfront condo towers and Intracoastal estates that live in constant salt air, where a roof works harder than almost anywhere inland.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Oceanfront Condos and Intracoastal Estates</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Highland Beach is a mix of luxury single-family estates on the Intracoastal — think Bel Lido Isle and the A1A oceanfront homes — and condominium communities like Toscana and Boca Highland. The estates call for premium tile and standing-seam metal; the condos need large, code-compliant low-slope roofs in TPO, PVC, or modified bitumen.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On a barrier island, the metal fails before the roof surface does, so we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment on every job, and coordinate with condo associations and seasonal owners as needed.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are, but nowhere does wind matter more than a barrier-island home taking the Atlantic head-on, so we voluntarily build every Highland Beach roof to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec is also what qualifies your home for wind-mitigation insurance credits, meaningful on high-value coastal properties. We document every feature your insurer needs.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Highland Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Boca Highland', 'Bel Lido Isle', 'Byrd Beach', 'Toscana', 'Braemar Isle', 'A1A oceanfront'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Highland Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Highland Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Highland Beach and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Highland Beach &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Highland Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Highland Beach across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/boca-raton" className="hover:text-red-500 transition-colors font-semibold">Boca Raton</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/delray-beach" className="hover:text-red-500 transition-colors font-semibold">Delray Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/hillsboro-beach" className="hover:text-red-500 transition-colors font-semibold">Hillsboro Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/ocean-ridge" className="hover:text-red-500 transition-colors font-semibold">Ocean Ridge</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/deerfield-beach" className="hover:text-red-500 transition-colors font-semibold">Deerfield Beach</Link>
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
