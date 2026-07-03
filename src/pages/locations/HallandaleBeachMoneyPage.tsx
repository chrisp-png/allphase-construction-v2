/**
 * Hallandale Beach Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function HallandaleBeachMoneyPage() {
  const coordinates = getCityCoordinates('Hallandale Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Hallandale Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Hallandale Beach?', a: 'A roof replacement on a Hallandale Beach home typically runs $11,000 to $40,000 in 2026. Older West Hallandale ranch homes in shingle sit at the lower end; Golden Isles tile estates run higher, and condo or high-rise roofs are priced by the building.' },
    { q: 'Do you do oceanfront condo and high-rise roofing in Hallandale Beach?', a: "Yes. Hallandale Beach is one of Broward's most condo-dense cities. We handle large low-slope association roofs in TPO, PVC, and modified bitumen on oceanfront high-rises, with marine-grade detailing for the salt, and coordinate board approvals and seasonal-owner schedules." },
    { q: 'How do you protect a Hallandale Beach canal or beachfront roof from salt air?', a: 'For canal estates in Golden Isles and beachfront homes, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt corrodes the metal components long before the roofing surface wears out.' },
    { q: 'Is Hallandale Beach in the High-Velocity Hurricane Zone?', a: 'Yes. Hallandale Beach is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof — flat, tile, or shingle — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Hallandale Beach, FL | All Phase USA</title>
        <meta name="description" content="Hallandale Beach, FL roofer for oceanfront condos, Golden Isles estates & West Hallandale homes — flat, tile & shingle, HVHZ-code, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/hallandale-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Hallandale Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Hallandale Beach Florida for oceanfront condos, canal estates, and older homes?" /></div>
              <AtomicAnswer>Hallandale Beach, FL is a compact, condo-heavy Broward County beach city — nicknamed ’Canada’s southernmost city’ for its wave of snowbirds, and home to Gulfstream Park’s giant Pegasus statue. It runs from oceanfront high-rise condos to the deep-water estates of Golden Isles and older 1950s ranch homes out west. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs flat, tile, metal, and shingle roofs to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $11,000 to $40,000, with condo and high-rise roofs priced by the building.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="hallandale-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The ’Beach’ That Started Inland</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hallandale Beach has a funny relationship with its own name. When it incorporated in 1927 — a little postal settlement founded by railroad recruiter Luther Halland — it was entirely inland, with no beach at all. It didn’t reach the Atlantic until a 1947 reannexation, and it didn’t add ’Beach’ to its name until 1999, just to make sure everyone knew it finally had a coast. Today it’s ’Canada’s southernmost city’ for its snowbird crowd, home to Gulfstream Park, a 110-foot Pegasus statue, and a giant beach-ball water tower.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">For roofing, it’s a city of two extremes: a dense wall of oceanfront condo towers and canal-front luxury estates on one side, and older, affordable 1950s ranch homes on the other.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Condo Towers, Canal Estates, and 1950s Ranch Homes</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hallandale Beach is one of the most condo-dense cities in Broward — Oceanside, South Ocean Drive, and Three Islands are full of oceanfront high-rises that need large, code-compliant low-slope roofs in TPO, PVC, or modified bitumen, built with marine-grade detailing for the direct salt air. Golden Isles is the luxury opposite: a gated, deep-water-canal community of two-to-five-million-dollar estates where tile and standing-seam metal are the standard.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">West of US-1, West Hallandale is older, non-HOA 1950s ranch homes — many still on aging roofs, where a clean architectural-shingle replacement is the right call. As a dual-licensed general contractor, we roof all three, and coordinate with condo associations and seasonal owners as needed.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hallandale Beach is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here — a condo tower’s flat membrane, a canal estate’s tile, or a ranch home’s shingle — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. On the oceanfront especially, that engineering is what holds up when a storm comes ashore.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home or building wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hallandale Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Golden Isles', 'Three Islands', 'Oceanside', 'South Ocean Drive', 'West Hallandale', 'Gulfstream'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Hallandale Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Hallandale Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Hallandale Beach and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Hallandale Beach &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Hallandale Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Hallandale Beach across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/hollywood" className="hover:text-red-500 transition-colors font-semibold">Hollywood</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/dania-beach" className="hover:text-red-500 transition-colors font-semibold">Dania Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-park" className="hover:text-red-500 transition-colors font-semibold">Pembroke Park</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/miramar" className="hover:text-red-500 transition-colors font-semibold">Miramar</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
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
