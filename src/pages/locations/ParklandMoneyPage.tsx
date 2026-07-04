/**
 * Parkland Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function ParklandMoneyPage() {
  const coordinates = getCityCoordinates('Parkland');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Parkland', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Parkland?', a: 'A roof replacement in Parkland typically runs $14,000 to $60,000 or more in 2026. Family homes in shingle sit at the lower end; Mediterranean tile estates in Parkland Golf & Country Club and Watercrest run to the higher end, and ranch properties with barns are priced per structure.' },
    { q: "Do you handle HOA approval in Parkland's gated communities?", a: 'Yes. For gated communities like Parkland Golf & Country Club, Heron Bay, Watercrest, and Parkland Isles, we manage the full architectural-review process — matching the required roof profile and color and submitting the documentation your HOA needs to approve the project.' },
    { q: 'Do you roof equestrian ranches and barns in Parkland?', a: 'Yes. Pine Tree Estates and the BBB Ranches are no-HOA equestrian neighborhoods with one-acre-plus lots, barns, and stables. We roof the whole property, and metal roofing is a natural fit for the agricultural structures.' },
    { q: 'Is Parkland in the High-Velocity Hurricane Zone?', a: 'Yes. Parkland is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Parkland, FL | All Phase USA</title>
        <meta name="description" content="Parkland, FL roofer for golf estates, gated communities & equestrian ranches — premium tile, metal & shingle, HOA review handled, HVHZ-code. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/parkland" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Parkland, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Parkland Florida for luxury golf estates, gated communities, and equestrian ranches?" /></div>
              <AtomicAnswer>Parkland, FL is Broward County’s upscale, equestrian family suburb — founded in 1963 as a rural sanctuary that famously had no traffic lights or stores until the 1990s, where horses once outnumbered people. Its housing runs from Greg Norman golf estates to no-HOA horse ranches. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs premium tile, standing-seam metal, and shingle to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $14,000 to $60,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="parkland" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Suburb That Kept the Horses and Skipped the Traffic Lights</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Parkland was founded in 1963 with a deliberate philosophy: stay rural. For decades it had no traffic lights and no stores — none arrived until the 1990s — and horses genuinely outnumbered people. The city still protects that character with strict low-density zoning, its own residents-only public library, the largest farmers’ market in Broward County (held at the Equestrian Center), and quirks like the 20-foot Statue of Liberty replica in Liberty Park.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That heritage is the roofing story. Parkland is two worlds at once: master-planned luxury communities on one side, and genuine multi-acre horse ranches on the other — and we roof both.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Golf Estates, Gated Communities, and Horse Ranches</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">On the luxury side, Parkland Golf & Country Club, Watercrest, Heron Bay, and Parkland Isles are gated, master-planned communities of Mediterranean estates, contemporary lake homes, and family houses — where tile and standing-seam metal are the norm and HOA architectural review is part of every job. We manage that approval end to end, matching the required profile and color.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On the rural side, Pine Tree Estates and the BBB Ranches are non-gated, no-HOA neighborhoods of one-acre-plus equestrian properties — homes plus barns and stables, where metal roofing shines. As a dual-licensed general contractor, we roof the whole property and handle any structural work older ranch buildings need on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Parkland is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here — estate, ranch, or family home — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. On Parkland’s large, open lots with room between homes, wind exposure is real, and that engineered attachment is what keeps premium tile and metal in place.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home wind-mitigation insurance credits — which matter on high-value Parkland estates. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Parkland Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Heron Bay', 'Watercrest', 'Parkland Golf & Country Club', 'Pine Tree Estates', 'Parkland Isles', 'BBB Ranches'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Parkland Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Parkland Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Parkland and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Parkland &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Parkland</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Parkland across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/coral-springs" className="hover:text-red-500 transition-colors font-semibold">Coral Springs</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coconut-creek" className="hover:text-red-500 transition-colors font-semibold">Coconut Creek</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/margate" className="hover:text-red-500 transition-colors font-semibold">Margate</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/tamarac" className="hover:text-red-500 transition-colors font-semibold">Tamarac</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/deerfield-beach" className="hover:text-red-500 transition-colors font-semibold">Deerfield Beach</Link>
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
