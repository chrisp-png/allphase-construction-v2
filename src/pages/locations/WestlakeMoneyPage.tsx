/**
 * Westlake Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function WestlakeMoneyPage() {
  const coordinates = getCityCoordinates('Westlake');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Westlake', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does roofing cost in Westlake?', a: 'Roof repairs in Westlake are modest, while a full tile replacement typically runs $12,000 to $40,000 in 2026 depending on size. Because Westlake homes are newer, most needs are repairs, storm damage, and inspections rather than full replacements.' },
    { q: 'My Westlake home is new — why would I need a roofer?', a: "Even new homes need roofers: storm and wind damage, tiles cracked during construction or a solar or satellite install, and workmanship or flashing issues a builder-grade roof can hide. We repair and inspect, and we're here for the eventual full replacement." },
    { q: 'Do you serve the areas around Westlake?', a: 'Yes. We roof throughout western Palm Beach County, including the established homes in The Acreage, Loxahatchee, and Loxahatchee Groves near Westlake, not just the new subdivisions.' },
    { q: 'Is Westlake in the High-Velocity Hurricane Zone?', a: "Palm Beach County is not legally HVHZ, but Westlake's open western-county lots see real hurricane wind, so we voluntarily build and repair every roof to Miami-Dade HVHZ spec for maximum protection and insurance credits." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Westlake, FL | All Phase USA</title>
        <meta name="description" content="Westlake, FL roofer for Palm Beach County's newest city — new-construction repairs, storm damage & tile, HVHZ-spec, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/westlake" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Westlake, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Westlake Florida for new-construction homes and storm damage?" /></div>
              <AtomicAnswer>Westlake, FL is the newest city in Palm Beach County — incorporated in 2016 and master-planned by Minto Communities on former Callery-Judge citrus-grove land in the western part of the county. It’s a fast-growing community of brand-new homes. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that handles new-construction repairs, storm damage, and tile and metal roofing, voluntarily built to Miami-Dade HVHZ spec. Roof projects run $12,000 to $40,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="westlake" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Palm Beach County’s Newest City</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Westlake is the youngest municipality in Palm Beach County — incorporated in 2016 and built from scratch by Minto Communities on the former Callery-Judge citrus grove, out in the county’s western growth corridor near The Acreage and Loxahatchee. It’s grown fast, with new subdivisions, a town center, and resort amenities going up year after year.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Because the homes are new, most carry newer tile roofs, so the roofing needs here are a little different: storm damage, repairs, warranty and workmanship issues, and eventually the re-roofing every home needs down the road.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">New-Construction Repairs, Storm Damage, and Tile</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">In Westlake we handle the roofing a new community actually needs: storm and wind damage after a Florida summer, repairs to tile that was cracked during construction or a satellite or solar install, and inspections for homeowners who want to know their roof was done right. We also serve the established homes throughout the surrounding western communities.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed roofing and general contractor, we can address structural and flashing issues a builder-grade roof sometimes hides, and when the time comes for a full replacement, we build it to last.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are, but Westlake’s open, western-county lots take real hurricane wind, so we voluntarily build and repair every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec is also what qualifies your home for wind-mitigation insurance credits, which we document for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Westlake Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Minto Westlake', 'Seminole Pratt corridor', 'Adventure Park area', 'Town Center', 'The Meadows', 'Persimmon'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Westlake Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Westlake Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Westlake and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Westlake &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
