/**
 * Davie Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function DavieMoneyPage() {
  const coordinates = getCityCoordinates('Davie');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Davie', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Davie?', a: 'A roof replacement in Davie typically runs $12,000 to $50,000 or more in 2026. Family homes in shingle sit at the lower end; gated tile estates like Long Lake Ranches and equestrian properties with barns run to the higher end.' },
    { q: 'Do you roof equestrian ranches and barns in Davie?', a: "Yes. Davie's equestrian properties have barns and stables on large lots, and we roof the whole property. Metal roofing is a natural fit for the agricultural structures, alongside tile or shingle on the home." },
    { q: "Do you handle HOA approval in Davie's gated communities?", a: 'Yes. For gated communities like Long Lake Ranches, we manage the full architectural-review process — matching the required roof profile and color and submitting the documentation your HOA needs to approve the project.' },
    { q: 'Is Davie in the High-Velocity Hurricane Zone?', a: 'Yes. Davie is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Davie, FL | All Phase USA</title>
        <meta name="description" content="Davie, FL roofer for equestrian ranches, gated estates & family suburbs — tile, metal, shingle, HOA review handled, HVHZ-code, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/davie" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Davie, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Davie Florida for equestrian ranches, gated estates, and family suburbs?" /></div>
              <AtomicAnswer>Davie, FL is Broward County’s ’Cowboy Town’ — the largest town in Florida, where equestrian trails and the Bergeron Rodeo Grounds sit right alongside a major university research hub. Its housing runs from horse ranches with barns to gated luxury estates and family suburbs. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, and metal to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $12,000 to $50,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="davie" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From ’Zona’ to Cowboy Town</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Davie started out as ’Zona,’ settled in the early 1900s by workers from the Panama Canal Zone who came to farm the newly drained Everglades; it was later renamed for land developer R.P. Davie. It grew into Florida’s largest town and its ’Cowboy Town’ — Florida’s first thoroughbreds were bred here in the 1930s, and today it still keeps 165-plus miles of equestrian trails and 1,800 acres of open space, with horses that ride right through the neighborhoods (you can still tie yours up at the Flashback Diner’s corral).</p>
            <p className="text-zinc-300 leading-relaxed mb-4">But Davie is also a serious education hub — the South Florida Educational Center packs Nova Southeastern, FAU, and UF campuses inside the town limits. That split personality shows up on the rooftops: genuine horse ranches on one side, gated estates and family suburbs on the other.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Horse Ranches, Gated Estates, and Family Suburbs</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">On Davie’s equestrian properties — large lots with barns and stables — metal roofing is a natural fit for the ag structures, and we roof the whole property, house included. Gated luxury communities like Long Lake Ranches are custom estates where tile and standing-seam metal rule and HOA architectural review is part of the job, which we manage for you.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Then there are the family suburbs — Forest Ridge, Pine Island Ridge, Shenandoah — pool homes and townhomes where a clean architectural-shingle or tile replacement is the norm. As a dual-licensed general contractor, we cover all of it and handle any decking or structural work a tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Davie is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here — ranch, estate, or family home — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. On Davie’s big, open equestrian lots especially, wind exposure is real, and that engineered attachment is what keeps a roof on.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Davie Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Forest Ridge', 'Long Lake Ranches', 'Pine Island Ridge', 'Shenandoah', 'Rolling Hills', 'Orange Drive'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Davie Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Davie Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Davie and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Davie &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
