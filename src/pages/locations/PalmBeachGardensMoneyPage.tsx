/**
 * Palm Beach Gardens Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function PalmBeachGardensMoneyPage() {
  const coordinates = getCityCoordinates('Palm Beach Gardens');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Palm Beach Gardens', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Palm Beach Gardens?', a: 'A roof replacement in Palm Beach Gardens typically runs $13,000 to $55,000 or more in 2026. Master-planned homes sit at the lower-to-middle range; luxury country-club tile estates in PGA National and Mirasol, and larger custom acreage homes, run to the higher end.' },
    { q: 'Do you handle HOA approval in Palm Beach Gardens country clubs?', a: "Yes. For country-club communities like PGA National, Mirasol, and Frenchman's Reserve, we manage the full architectural-review process — matching the required roof profile and color and submitting the documentation your HOA needs to approve the project." },
    { q: 'Is Palm Beach Gardens in the High-Velocity Hurricane Zone?', a: 'Palm Beach County is not legally HVHZ, but Palm Beach Gardens still sees real hurricane wind, so we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance credits.' },
    { q: 'My Palm Beach Gardens home is older — should I replace the roof?', a: "Both new master-planned communities and Palm Beach Gardens' older 1960s and 70s neighborhoods need roofing. If your home is past 15 to 20 years, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Palm Beach Gardens, FL | All Phase USA</title>
        <meta name="description" content="Palm Beach Gardens, FL roofer for country-club estates, master-planned homes & acreage — tile, metal & shingle, HOA review handled, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/palm-beach-gardens" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Palm Beach Gardens, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Palm Beach Gardens Florida for country-club estates and master-planned communities?" /></div>
              <AtomicAnswer>Palm Beach Gardens, FL is an affluent, master-planned Palm Beach County city — founded in 1959 by billionaire John D. MacArthur (and once nearly the site of Disney World), home to the PGA of America and a dozen championship golf courses. Its housing runs from luxury country-club estates to new master-planned communities and no-HOA acreage. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs tile, standing-seam metal, and shingle, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $13,000 to $55,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="palm-beach-gardens" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The City That Almost Got Disney World</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach Gardens has an origin story most suburbs can’t match: in the 1960s, billionaire founder John D. MacArthur shook hands on a deal to build Disney World here on 320 acres along PGA Boulevard — until Roy Disney pushed for more land and the deal fell through, and Orlando got the call instead. MacArthur founded the city in 1959; a year later it had exactly one resident, and today its entrance is still marked by an 80-year-old banyan tree that cost $30,000 to move here in 1961.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">MacArthur’s ’garden’ vision stuck: the city legally reserves half its land as green space, and it grew into a golf capital — headquarters of the PGA of America, home to PGA National and the Cognizant Classic. For roofing, that means a city of high-value country-club homes, master-planned communities, and custom estates.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Country-Club Estates, Master-Planned Homes, and Acreage</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">The luxury golf communities — PGA National, Mirasol, and Frenchman’s Reserve — are estate homes where tile and standing-seam metal are the standard and HOA architectural review is part of every job, which we manage end to end. Newer master-planned communities like Avenir and Alton, plus condo-and-townhome enclaves like San Matera and Evergrene, add a steady mix of tile and association roofs.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Out west of I-95, Palm Beach Country Estates is a no-HOA neighborhood of one-acre-plus custom homes with a semi-rural feel — larger properties where metal roofing often makes sense. As a dual-licensed general contractor, we cover all of it and handle any decking or structural work a tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are — but Palm Beach Gardens still takes real hurricane wind, so we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country. On high-value country-club estates, that engineering protects both the home and the investment.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec is also what qualifies your home for wind-mitigation insurance credits, which add up quickly on larger Palm Beach Gardens homes. We document every qualifying feature for your insurer.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Palm Beach Gardens Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['PGA National', 'Mirasol', 'Frenchman’s Reserve', 'Avenir', 'Alton', 'Palm Beach Country Estates'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Palm Beach Gardens Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Palm Beach Gardens Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Palm Beach Gardens and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Palm Beach Gardens &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
