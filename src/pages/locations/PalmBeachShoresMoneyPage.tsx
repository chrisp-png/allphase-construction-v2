/**
 * Palm Beach Shores Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function PalmBeachShoresMoneyPage() {
  const coordinates = getCityCoordinates('Palm Beach Shores');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Palm Beach Shores', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Palm Beach Shores?', a: 'A roof replacement in Palm Beach Shores typically runs $12,000 to $40,000 in 2026 for homes, with coastal tile and metal at the higher end. Condo-association roofs are priced by the building.' },
    { q: 'How do you protect a Palm Beach Shores roof from salt air?', a: 'With water on three sides of the island, we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the salt corrodes the metal components long before the roofing surface wears out.' },
    { q: 'Do you do condo roofing in Palm Beach Shores?', a: "Yes. We handle low-slope association roofs in TPO, PVC, and modified bitumen on Palm Beach Shores' condos, with marine-grade detailing for the salt, and coordinate board approvals and seasonal-owner schedules." },
    { q: 'Is Palm Beach Shores in the High-Velocity Hurricane Zone?', a: 'Palm Beach County is not legally HVHZ, but on the tip of a barrier island we voluntarily build every roof to Miami-Dade HVHZ spec, the strictest wind standard in the country, for maximum protection and insurance eligibility.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Palm Beach Shores, FL | All Phase USA</title>
        <meta name="description" content="Palm Beach Shores, FL roofer on Singer Island — beach homes, condos & marina waterfront, coastal-grade tile, metal & flat, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/palm-beach-shores" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Palm Beach Shores, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Palm Beach Shores Florida beach homes and condos on Singer Island?" /></div>
              <AtomicAnswer>Palm Beach Shores, FL is a small beach town on the south tip of Singer Island — incorporated in 1951, the only municipality entirely on the island’s southern end, with the Atlantic, the Lake Worth Inlet, and the Sailfish Marina all at its doorstep. It’s a mix of single-family beach homes and condos in constant salt air. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs coastal-grade tile, metal, and flat roofs, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $12,000 to $40,000, with condo roofs priced by the building.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="palm-beach-shores" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Beach Town on the Tip of Singer Island</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach Shores occupies the southern tip of Singer Island, just across the Lake Worth Inlet from Peanut Island and its famous JFK bunker. Incorporated in 1951, it’s the only town entirely on that end of the island — a walkable beach community wrapped by the Atlantic, the inlet, and the Intracoastal, and home to the Sailfish Marina.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Surrounded by water on three sides, Palm Beach Shores is about as salt-exposed as a town can get, which makes coastal roofing the whole game here.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Beach Homes, Condos, and Marina Waterfront</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach Shores mixes single-family beach homes with low- and mid-rise condos. The homes call for tile, metal, and flat roofs built for salt; the condos need code-compliant low-slope association roofs in TPO, PVC, or modified bitumen. On all of them we use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed general contractor, we coordinate with condo associations and seasonal owners and handle any decking or structural work an older island home uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are, but a town on the tip of a barrier island takes direct ocean and inlet wind, so we voluntarily build every Palm Beach Shores roof to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec is also what qualifies your home for wind-mitigation insurance credits, which we document for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Palm Beach Shores Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Inlet Way', 'Cascade Lane', 'Bamboo Road', 'Sailfish Marina', 'Ocean Point', 'Singer Island south'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Palm Beach Shores Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Palm Beach Shores Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Palm Beach Shores and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Palm Beach Shores &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
