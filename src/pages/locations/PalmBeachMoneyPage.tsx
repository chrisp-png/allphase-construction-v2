/**
 * Palm Beach Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function PalmBeachMoneyPage() {
  const coordinates = getCityCoordinates('Palm Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Palm Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Palm Beach?', a: 'Estate roof projects in Palm Beach start well into five figures and rise from there, depending on size, tile type, and complexity. Historic clay-tile and landmarked-home work sits at the higher end, and every project is priced to the specific home.' },
    { q: 'Do you work on historic and landmarked Palm Beach homes?', a: "Yes. Many Palm Beach homes are historic or landmarked Mediterranean estates. We match the exact barrel-tile profile and color and manage the Town of Palm Beach's strict architectural and landmarks review process end to end." },
    { q: 'How do you protect a Palm Beach oceanfront roof from salt air?', a: 'Palm Beach is a barrier island between the Atlantic and the Intracoastal, so we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because on the water the metal components corrode long before the tile wears out.' },
    { q: 'Is Palm Beach in the High-Velocity Hurricane Zone?', a: "Palm Beach County isn't legally HVHZ, but a barrier-island estate takes the Atlantic head-on, so we voluntarily build every roof to Miami-Dade HVHZ spec — the strictest wind standard in the country — for maximum protection and insurance eligibility." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Palm Beach, FL | All Phase USA</title>
        <meta name="description" content="Palm Beach, FL roofer for historic Mediterranean tile estates on the island — clay/concrete tile & metal, coastal-grade, architectural review handled, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/palm-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Palm Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for the Town of Palm Beach Florida historic Mediterranean tile estates and landmarked homes?" /></div>
              <AtomicAnswer>Palm Beach, FL is the barrier-island Town of Palm Beach — one of the wealthiest addresses in America, where Worth Avenue, Gilded Age landmarks like Flagler’s Whitehall, and Addison Mizner’s Mediterranean estates line a strip of sand between the Atlantic and the Intracoastal. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs premium clay and concrete tile, standing-seam metal, and flat roofs — coastal-grade and voluntarily built to Miami-Dade HVHZ spec — with the discretion and architectural-review expertise this town demands. Estate roof projects here start well into five figures and rise from there.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="palm-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Worth Avenue, Whitehall, and Mizner’s Mediterranean</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">The Town of Palm Beach is a barrier island unlike any other address in Florida — home to Worth Avenue, a healthy share of the county’s 57 billionaires, and Henry Flagler’s 1902 ’Whitehall,’ a 75-room, 100,000-square-foot Gilded Age palace the press called grander than anything in Europe. Much of the island’s look was shaped by architect Addison Mizner, whose Spanish and Mediterranean Revival estates gave Palm Beach its signature barrel-tile rooflines.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Those rooflines are exactly why roofing here is a specialty, not a commodity. The estates of the North End, the Mid-Town Estate Section, and the South End are high-value, often landmarked homes on a barrier island — which means historic tile, brutal salt exposure, and one of the strictest architectural-review processes in the country.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Historic Tile Estates on the Barrier Island</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach roofing is dominated by clay and concrete barrel tile — the Mediterranean profile that defines the island — along with standing-seam metal and the flat and low-slope sections common on Mizner-era architecture. On landmarked and historic homes, matching the exact tile profile, color, and detailing matters as much as the waterproofing beneath it, and we handle both.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">The Town of Palm Beach also runs a famously rigorous architectural and landmarks review. We manage that approval process end to end, and, being on a barrier island between the ocean and the Intracoastal, we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment so the salt doesn’t undo a beautiful roof. As a dual-licensed general contractor, we handle any structural or decking work an older estate uncovers, discreetly.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are — but there’s no place the wind matters more than a barrier-island estate taking the Atlantic head-on, so we voluntarily build every Palm Beach roof to Miami-Dade HVHZ spec, the strictest wind standard in the country. On an irreplaceable historic home, that engineering isn’t optional.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec is also what qualifies your home for wind-mitigation insurance credits, meaningful on estates at this value. We document every qualifying feature for your insurer, and coordinate the whole project around your schedule and privacy.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Palm Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['North End', 'Estate Section', 'South End', 'Everglades Island', 'In-Town', 'Worth Avenue'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Palm Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Palm Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Palm Beach and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Palm Beach &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Palm Beach</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Palm Beach across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors font-semibold">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-shores" className="hover:text-red-500 transition-colors font-semibold">Palm Beach Shores</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/north-palm-beach" className="hover:text-red-500 transition-colors font-semibold">North Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lake-worth-beach" className="hover:text-red-500 transition-colors font-semibold">Lake Worth Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-gardens" className="hover:text-red-500 transition-colors font-semibold">Palm Beach Gardens</Link>
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
