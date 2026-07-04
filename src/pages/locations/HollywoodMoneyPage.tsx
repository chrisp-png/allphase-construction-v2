/**
 * Hollywood Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function HollywoodMoneyPage() {
  const coordinates = getCityCoordinates('Hollywood');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Hollywood', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '153' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Hollywood?', a: 'A roof replacement on a Hollywood home typically runs $11,000 to $45,000 in 2026, depending on size and material. Historic tile and oceanfront work sit at the higher end, and condo or high-rise roofs are priced by the building.' },
    { q: 'Do you replace roofs on historic Hollywood Lakes homes?', a: 'Yes. Hollywood Lakes is full of 1920s Spanish-Mediterranean and Art Deco homes. We replace and restore barrel-tile and flat roofs on historic homes to HVHZ code, keeping the original architectural look.' },
    { q: 'Do you do oceanfront condo and high-rise roofing in Hollywood?', a: 'Yes. Hollywood Beach is dominated by oceanfront condos and high-rises. We handle large low-slope association roofs in TPO, PVC, and modified bitumen with marine-grade detailing for the salt exposure, and coordinate the board approvals.' },
    { q: 'Is Hollywood in the High-Velocity Hurricane Zone?', a: 'Yes. Hollywood is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof — flat, tile, or shingle — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Hollywood, FL | All Phase USA</title>
        <meta name="description" content="Hollywood, FL roofer for beach condos, historic Hollywood Lakes homes & Emerald Hills estates — tile, flat, shingle & metal, HVHZ-code. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/hollywood" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Hollywood, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Hollywood Florida for beach condos, historic homes, and golf estates?" /></div>
              <AtomicAnswer>Hollywood, FL is a big, diverse Broward County beach city — founded in 1920 as a planned ’Dream City’ and famous for its 2.5-mile car-free oceanfront Broadwalk. Its housing runs from oceanfront condo towers to historic 1920s Spanish-Mediterranean and Art Deco homes in Hollywood Lakes and golf estates in Emerald Hills. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs tile, metal, shingle, and flat roofs to Miami-Dade HVHZ code — legally required here in Broward. Roof replacements run $11,000 to $45,000, with condo and high-rise roofs priced by the building.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="hollywood" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The 1920s ’Dream City’ by the Sea</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hollywood was dreamed up in 1920 by developer Joseph W. Young as a planned ’Dream City’ meant to rival its California namesake — and a century later that vision still defines it: the 2.5-mile brick oceanfront Broadwalk, the Young Circle ArtsPark, and a downtown that’s an open-air gallery of 32 building-sized murals. It’s a big city, too, holding about 80% of Port Everglades and 1,500 acres of protected mangroves at the Anne Kolb Nature Center.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">For roofing, what matters is how varied and how old a lot of it is: oceanfront condo towers on the beach, historic 1920s Spanish-Mediterranean and Art Deco homes in Hollywood Lakes, and golf-course estates out in Emerald Hills. Each one calls for a different roof.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Beach Condos, Historic Homes, and Golf Estates</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">On Hollywood Beach, it’s oceanfront condos and high-rises — large low-slope association roofs in TPO, PVC, and modified bitumen, built to stand up to direct salt air, which we handle with marine-grade fasteners and corrosion-resistant detailing. Inland, historic Hollywood Lakes is full of 1920s architecture: Spanish-Mediterranean homes that wear barrel tile and Art Deco homes with flat roofs, both of which we restore and replace to code.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">West of I-95, Emerald Hills brings large single-family homes and mid-century contemporary ranches, meaning tile, shingle, and flat roofs alike. As a dual-licensed general contractor, we cover the whole range — beach tower to bungalow — and handle any decking or structural work an older Hollywood tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Hollywood is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here — flat, tile, or shingle — must meet Miami-Dade HVHZ code, the strictest wind standard in the country. On the beachfront especially, that engineering is what keeps a roof intact when a storm comes off the Atlantic.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home or building wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings — which matter on oceanfront condos and historic homes alike.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hollywood Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Hollywood Beach', 'Hollywood Lakes', 'Emerald Hills', 'Downtown Hollywood', 'Hollywood Hills', 'Beverly Hills'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Hollywood Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Hollywood Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Hollywood and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Hollywood &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Hollywood</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Hollywood across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/dania-beach" className="hover:text-red-500 transition-colors font-semibold">Dania Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/hallandale-beach" className="hover:text-red-500 transition-colors font-semibold">Hallandale Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-pines" className="hover:text-red-500 transition-colors font-semibold">Pembroke Pines</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-park" className="hover:text-red-500 transition-colors font-semibold">Pembroke Park</Link>
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
