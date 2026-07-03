/**
 * Sea Ranch Lakes Custom Location Page (PR-119) — hand-built, unique local content.
 */
import { Helmet } from 'react-helmet-async';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import CityProjectGallery from '../../components/CityProjectGallery';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function SeaRanchLakesMoneyPage() {
  const coordinates = getCityCoordinates('Sea Ranch Lakes');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Sea Ranch Lakes', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Sea Ranch Lakes?', a: "Estate roof replacements in Sea Ranch Lakes typically start around $30,000 and rise well beyond, depending on size and material. Premium tile, standing-seam metal, and custom low-slope systems are the norm on the village's high-value homes." },
    { q: 'How do you protect a Sea Ranch Lakes oceanfront roof from salt air?', a: "On the Beach Area's oceanfront estates we use marine-grade stainless fasteners, corrosion-resistant flashing, and a fully sealed self-adhered underlayment. Directly on the Atlantic, the metal components corrode long before the tile or panel wears out, so upgrading them is the key to a coastal roof lasting." },
    { q: 'Can you work inside the gated village of Sea Ranch Lakes?', a: 'Yes. Sea Ranch Lakes is a private, guard-gated village with its own police force. We coordinate access and scheduling with village security and the Beach Club, and keep the job site clean and discreet from start to finish.' },
    { q: 'Is Sea Ranch Lakes in the High-Velocity Hurricane Zone?', a: 'Yes. Sea Ranch Lakes is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — and on a direct-oceanfront estate, that standard matters more than almost anywhere.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Sea Ranch Lakes, FL | All Phase USA</title>
        <meta name="description" content="Sea Ranch Lakes, FL roofer for gated oceanfront & lakeside estates — premium tile, standing-seam metal & flat roofs, coastal-grade, HVHZ code. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/sea-ranch-lakes" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Sea Ranch Lakes, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Sea Ranch Lakes Florida gated oceanfront and lakeside luxury estates?" /></div>
              <AtomicAnswer>Sea Ranch Lakes, FL is a 0.2-square-mile guard-gated village on the Broward coast between Fort Lauderdale and Lauderdale-by-the-Sea — one of the county’s most exclusive enclaves, where oceanfront estates run well past $10 million and every home holds a stake in the private beach club. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs premium tile, standing-seam metal, and modern flat roofs to Miami-Dade HVHZ code — legally required here in Broward — with the discretion a gated luxury community expects. Estate roof replacements typically start around $30,000 and rise well beyond.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="sea-ranch-lakes" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Village’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Private Village Where the Government Owns Nothing</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Sea Ranch Lakes is one of the most unusual municipalities in Florida. Incorporated in 1959 to avoid being annexed by Pompano Beach or Fort Lauderdale, the tiny village technically owns no property at all — its roads, parks, and two man-made freshwater lakes (Lake Cayuga and Lake Seneca) are all privately owned and maintained by the Sea Ranch Lakes Beach Club, in which every single home holds a 1% stake. The whole village is walled and guard-gated, with its own dedicated police force and near-zero through traffic.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">It’s also one of Broward’s most elite corners, with median home prices between $3 and $5 million and oceanfront estates stretching past $10 million. Homes like these treat the roof as part of the architecture — which means premium materials, precise workmanship, and a contractor who can work discreetly inside a private, guarded community.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lakeside Estates and Oceanfront Homes</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Sea Ranch Lakes has two distinct sides. The Main Village, west of A1A, wraps around the freshwater lakes with spacious, tree-lined single-family estates, many with lake views. The Beach Area, east of A1A directly on the Atlantic, is high-end contemporary estates and exclusive condominiums with direct ocean exposure.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That range calls for the full premium toolkit: barrel and flat tile, standing-seam metal, and modern low-slope systems for contemporary estates. On the oceanfront homes especially, we install marine-grade stainless fasteners, corrosion-resistant flashing, and a fully sealed underlayment, because directly on the Atlantic it’s the metal components that corrode first. And as a dual-licensed general contractor, we handle any structural or decking work a high-end re-roof uncovers.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Estate-Grade, Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Sea Ranch Lakes is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. On multimillion-dollar oceanfront estates taking direct Atlantic wind, that engineering isn’t optional; it’s what protects both the home and the investment.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">We build to HVHZ code with reinforced ridge attachment on every job, coordinate access and scheduling with the village’s private security and Beach Club, and keep the site clean and low-impact throughout — the standard a community like this expects.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sea Ranch Lakes Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Main Village', 'Beach Area', 'Lake Cayuga', 'Lake Seneca', 'North Ocean Drive', 'Sea Ranch Beach Club'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Sea Ranch Lakes Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Sea Ranch Lakes Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Sea Ranch Lakes and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Sea Ranch Lakes &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
