/**
 * Greenacres Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function GreenacresMoneyPage() {
  const coordinates = getCityCoordinates('Greenacres');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Greenacres', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Greenacres?', a: 'A roof replacement in Greenacres typically runs $11,000 to $30,000 in 2026 for most single-family homes, depending on roof size and material. Architectural shingle sits at the lower end; tile at the higher end.' },
    { q: 'Do I need permits to re-roof in Greenacres?', a: "Yes — Greenacres takes permitting seriously (it's a Tree City USA that even permits tree removal). Every roof replacement requires a permit with sealed product approvals. We handle the entire permitting process and pass inspection the first time." },
    { q: 'My Greenacres home has its original roof — is it time to replace it?', a: 'If your Greenacres home still has its original roof, it is very likely past service life. Beyond leaks, roof age is now the leading reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' },
    { q: 'Can a new roof lower my insurance in Greenacres?', a: 'Yes. We build every Greenacres roof to HVHZ wind spec and document the wind-mitigation features your insurer uses to calculate discounts, which often meaningfully offset the replacement cost.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Greenacres, FL | All Phase USA</title>
        <meta name="description" content="Greenacres, FL roofer. Re-roofing the aging homes across this planned Palm Beach County city, dual-licensed and built to HVHZ spec for insurance savings. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/greenacres" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Greenacres, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best dual-licensed roofing contractor in Greenacres Florida and when should older homes be re-roofed?" /></div>
              <AtomicAnswer>Greenacres, FL is a six-square-mile planned community in central Palm Beach County, incorporated in 1926 and home to roughly 44,000 residents across more than 17,000 single-family homes, villas, townhomes, and condos, a large share of which are now reaching original-roof end-of-life. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that builds every Greenacres roof to Miami-Dade HVHZ wind spec for insurance-discount eligibility. Roof replacements run $11,000 to $30,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="greenacres" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Planned Community With Real Roots</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Greenacres was founded by Lawrence Carter Swain as a ’Good Place to Live’ and incorporated back in 1926, its name famously drawn from a hat when his office staff voted on a list of options. The young city was even briefly abolished by the state legislature in 1945 before residents fought to re-incorporate it in 1947.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Today it’s a Palm Beach County ’Tree City USA’ — a place that requires a permit before you can even remove a tree from your own yard. That permitting culture runs deep here, and we respect it: we pull every Greenacres roofing permit properly, submit the sealed product approvals, and pass inspection the first time.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">The Housing Stock</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">17,000-Plus Homes, and a Lot of Aging Roofs</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">With more than 17,000 dwelling units — single-family homes, villas, townhomes, and condos — spread across neighborhoods like River Bridge, Pinewood Manor, Maplewood, Eagle Pointe, and Sherwood Forest near John Prince Park and the 1,700-acre Okeeheelee Park, Greenacres has one of the deepest concentrations of aging residential roofs in central Palm Beach County.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Many of these homes are still on their original roof, well past service life. Greenacres is inland, so it doesn’t face coastal salt air — but it’s fully exposed to Palm Beach County hurricane winds, which is why we voluntarily install every Greenacres roof to Miami-Dade HVHZ spec, the strictest wind standard in Florida.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">Insurance</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Turning a Roof Replacement Into an Insurance Win</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">In Greenacres, most replacements are driven by insurance — carriers have gotten strict about roof age, and older roofs increasingly trigger non-renewal notices or steep premium hikes. Replacing proactively keeps you insurable.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">We build every job to maximize your wind-mitigation credits, with proper secondary water barriers, code-current roof-to-wall connections, and full documentation your insurer can use. And our dual license means that when a tear-off reveals worn decking or framing, we fix it on the same permit instead of stopping the job.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Greenacres Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['River Bridge', 'Pinewood Manor', 'Maplewood', 'Eagle Pointe', 'Sherwood Forest', 'Okeeheelee Park area'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Greenacres Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Greenacres Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Greenacres and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Greenacres &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Greenacres</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Greenacres across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/lake-worth-beach" className="hover:text-red-500 transition-colors font-semibold">Lake Worth Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/wellington" className="hover:text-red-500 transition-colors font-semibold">Wellington</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/royal-palm-beach" className="hover:text-red-500 transition-colors font-semibold">Royal Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lantana" className="hover:text-red-500 transition-colors font-semibold">Lantana</Link>
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
