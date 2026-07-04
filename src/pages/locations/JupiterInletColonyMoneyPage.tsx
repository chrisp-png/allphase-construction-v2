/**
 * Jupiter Inlet Colony Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function JupiterInletColonyMoneyPage() {
  const coordinates = getCityCoordinates('Jupiter Inlet Colony');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Jupiter Inlet Colony', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '153' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Jupiter Inlet Colony?', a: 'Roof projects in Jupiter Inlet Colony typically start around $20,000 and rise from there, depending on size and material. Coastal-grade tile and standing-seam metal, standard here, sit at the higher end.' },
    { q: 'How do you protect a Jupiter Inlet Colony roof from salt air?', a: 'With water on nearly every side of the town, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the metal components corrode long before the tile or panel wears out.' },
    { q: 'Can you work discreetly in Jupiter Inlet Colony?', a: 'Yes. Jupiter Inlet Colony is a small private town with its own police force. We coordinate access and scheduling with the town and keep the job site clean and low-impact from start to finish.' },
    { q: 'Is Jupiter Inlet Colony in the High-Velocity Hurricane Zone?', a: 'Palm Beach County is not legally HVHZ, but a home at the Jupiter Inlet takes direct ocean wind, so we voluntarily build every roof to Miami-Dade HVHZ spec, the strictest wind standard in the country.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Jupiter Inlet Colony, FL | All Phase USA</title>
        <meta name="description" content="Jupiter Inlet Colony, FL roofer for this gated oceanfront island town — coastal-grade tile & standing-seam metal, HVHZ-spec, discreet. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/jupiter-inlet-colony" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Jupiter Inlet Colony, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Jupiter Inlet Colony Florida oceanfront island homes?" /></div>
              <AtomicAnswer>Jupiter Inlet Colony, FL is a tiny, exclusive town of about 230 homes on the southern tip of Jupiter Island, wrapped by the Atlantic, the Jupiter Inlet, and the Intracoastal, and served by its own police force. Incorporated in 1959, it’s all single-family, all waterfront-adjacent, and all salt air. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs coastal-grade tile and standing-seam metal, voluntarily built to Miami-Dade HVHZ spec, with the discretion a private town expects. Estate roof projects typically start around $20,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="jupiter-inlet-colony" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Private Island Town at the Inlet</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Jupiter Inlet Colony is one of Florida’s smallest and most private towns — about 230 single-family homes on the southern tip of Jupiter Island, surrounded on nearly every side by water: the Atlantic, the Jupiter Inlet, and the Intracoastal. Incorporated in 1959, it maintains its own police department and a quiet, exclusive character with private beach access.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Every home here is a waterfront or near-waterfront property taking salt air from multiple directions, which makes roofing a specialty rather than a routine job.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Coastal Estates on Every Side of the Water</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Jupiter Inlet Colony homes call for premium tile and standing-seam metal built for relentless salt exposure. Because the town sits at the inlet with water on nearly every side, we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment on every roof, since it’s the metal components that corrode first here.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed general contractor, we handle any structural or decking work an older coastal home uncovers, and we coordinate access and scheduling discreetly with the town and its residents.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are, but a home at the mouth of the Jupiter Inlet takes direct ocean wind, so we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec with reinforced ridge attachment is what keeps tile and metal in place in a storm, and it’s what qualifies your home for wind-mitigation insurance credits, which we document for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Jupiter Inlet Colony Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Beach Road', 'Colony Road', 'Inlet Way', 'Riverside', 'Ocean side', 'Intracoastal side'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Jupiter Inlet Colony Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Jupiter Inlet Colony Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Jupiter Inlet Colony and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Jupiter Inlet Colony &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Jupiter Inlet Colony</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Jupiter Inlet Colony across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/jupiter" className="hover:text-red-500 transition-colors font-semibold">Jupiter</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-gardens" className="hover:text-red-500 transition-colors font-semibold">Palm Beach Gardens</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/north-palm-beach" className="hover:text-red-500 transition-colors font-semibold">North Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-shores" className="hover:text-red-500 transition-colors font-semibold">Palm Beach Shores</Link>
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
