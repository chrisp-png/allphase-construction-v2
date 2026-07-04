/**
 * Lantana Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function LantanaMoneyPage() {
  const coordinates = getCityCoordinates('Lantana');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Lantana', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Lantana?', a: 'A roof replacement in Lantana typically runs $11,000 to $35,000 in 2026. Modest mainland homes in neighborhoods like Southwinds are often straightforward shingle at the lower end; waterfront tile and metal on Hypoluxo Island sit higher.' },
    { q: 'My Lantana home is old — is it time to replace the roof?', a: 'Lantana was incorporated in 1921 and is one of the older communities on the Palm Beach coast, so many homes are on very old roofs. If yours is past 15 to 20 years, it is likely due — and roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' },
    { q: 'How do you protect a Lantana waterfront roof from salt air?', a: 'For waterfront homes on Hypoluxo Island and along the Intracoastal, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt corrodes the metal components long before the tile or panel wears out.' },
    { q: 'Is Lantana in the High-Velocity Hurricane Zone?', a: "Palm Beach County is not legally HVHZ, but Lantana's coastal and Intracoastal exposure sees real wind, so we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance eligibility." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Lantana, FL | All Phase USA</title>
        <meta name="description" content="Lantana, FL roofer for this historic fishing village — aging mainland homes to Hypoluxo Island waterfront, shingle, tile & metal, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/lantana" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Lantana, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Lantana Florida for older fishing-village homes and Hypoluxo Island waterfront estates?" /></div>
              <AtomicAnswer>Lantana, FL is a historic fishing village in Palm Beach County — incorporated in 1921, once home to the National Enquirer’s world headquarters, and still anchored by Florida’s oldest and largest waterfront tiki bar. Its housing runs from century-old cottages to waterfront estates on Hypoluxo Island. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, and coastal-grade metal, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $11,000 to $35,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="lantana" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Fishing Village With a Very Strange Resume</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lantana has one of the quirkiest histories on the Palm Beach coast. It was incorporated in 1921 with just 22 voters and — remarkably for the era — its first two mayors were both women, Ellen Anderson and Mary Paddock. In the late 1800s its sands were a stop for the legendary ’Barefoot Mailmen’ on their 183-mile coastal round trip. Then in 1971 the National Enquirer moved its world headquarters here, and for two decades this quiet fishing village was the epicenter of celebrity gossip — its owner even erecting a 100-foot Christmas tree billed as the world’s largest.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">It’s still a waterfront town at heart, home to the Old Key Lime House — Florida’s oldest and largest waterfront tiki bar — on the Intracoastal. And because Lantana is one of the older communities on this stretch of coast, a lot of its homes sit on very old roofs, well past their service life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cottages, Family Neighborhoods, and Island Waterfront</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lantana’s housing is a real mix. Southwinds, Lantana Heights, and Ocean Walk are established family neighborhoods of modest single-family homes — often straightforward shingle replacements. Lantana Point has larger, expansive single-family homes, and Hypoluxo Island, just east of the mainland, is a quiet, tree-lined island of waterfront estates where tile and metal are the norm.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On the island and along the Intracoastal, salt air is the enemy, so we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment on the waterfront homes. And on Lantana’s older mainland cottages, our dual license means we can fix the decking or framing a decades-old tear-off reveals on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are — but Lantana’s coastal and Intracoastal exposure means real wind, so we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That upgrade is also what qualifies your home for wind-mitigation insurance credits. On Lantana’s older homes especially, replacing a tired roof with a code-current one can meaningfully lower your premium — and we document every feature your insurer needs to apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Lantana Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Southwinds', 'Ocean Walk', 'Lantana Heights', 'Lantana Point', 'Hypoluxo Island', 'Lantana Pines'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Lantana Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Lantana Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Lantana and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Lantana &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Lantana</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Lantana across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/lake-worth-beach" className="hover:text-red-500 transition-colors font-semibold">Lake Worth Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/hypoluxo" className="hover:text-red-500 transition-colors font-semibold">Hypoluxo</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/greenacres" className="hover:text-red-500 transition-colors font-semibold">Greenacres</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boynton-beach" className="hover:text-red-500 transition-colors font-semibold">Boynton Beach</Link>
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
