/**
 * Miramar Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function MiramarMoneyPage() {
  const coordinates = getCityCoordinates('Miramar');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Miramar', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Miramar?', a: "A roof replacement in Miramar typically runs $11,000 to $32,000 in 2026, depending on roof size and material. Shingle sits at the lower end; the concrete and clay tile common in Miramar's master-planned lake communities sits higher." },
    { q: "Do you handle HOA approval in Miramar's lake communities?", a: "Yes. For SilverLakes, Sunset Lakes, Riviera Isles, and Miramar's other master-planned communities, we manage the full architectural-review process — matching the required tile profile and color and submitting the documentation your HOA needs to approve the project." },
    { q: 'Is Miramar in the High-Velocity Hurricane Zone?', a: 'Yes. Miramar is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every Miramar job.' },
    { q: 'My older Miramar home still has its original roof — should I replace it?', a: 'If your home in east or Historic Miramar is still on its original roof, it is very likely past service life. Beyond leaks, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Miramar, FL | All Phase USA</title>
        <meta name="description" content="Miramar, FL roofer for the City of Lakes — master-planned lake communities & older Broward homes, HVHZ-code tile, shingle & metal, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/miramar" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Miramar, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Miramar Florida for master-planned lake communities and older homes?" /></div>
              <AtomicAnswer>Miramar, FL is a 31-square-mile Broward County city known as the ’City of Lakes’ — named, ironically, after a sea-view suburb of Havana despite being entirely landlocked. Founded in 1953 as a commuter bedroom community, it now spans older east-side homes and newer master-planned lake communities. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that builds every Miramar roof to Miami-Dade HVHZ code — legally required here in Broward County. Roof replacements run $11,000 to $32,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="miramar" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Havana Namesake to the City of Lakes</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Miramar carries one of South Florida’s more ironic names: it was named after Miramar, an exclusive sea-view suburb of Havana, Cuba — even though this Broward city is entirely landlocked. It was founded in 1953 as a simple bedroom community for Miami and Fort Lauderdale commuters, and has grown into a real economic hub, home to the Spirit Airlines headquarters and a string of Fortune 500 regional offices. (Local note: a young Johnny Depp grew up here and attended Miramar High.)</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Today Miramar is the ’City of Lakes,’ dotted with dozens of master-planned scenic lakes and more than 35 city parks across its 31 square miles. That mix — older east-side homes near Historic Miramar and sprawling newer lake communities out west — means we roof everything from 1960s originals to two-story tile-roofed estates.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">The Housing Stock</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Master-Planned Lake Communities and HOA Roofs</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Miramar’s western master-planned communities — SilverLakes, Sunset Lakes, Riviera Isles, Monarch Lakes, and Vizcaya — are built around water, with HOAs that dictate roof profile, tile color, and material. We manage that architectural-review process end to end so your replacement gets approved without delays.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">The older homes in east and Historic Miramar are a different job: many are on their original or second roof, well past service life, and often need decking or structural attention a shingle-only crew can’t legally handle. Our dual license means we address it on the same permit instead of stopping the job.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Unlike Palm Beach County to the north, Miramar sits inside the legally-defined High-Velocity Hurricane Zone, so every roof here is required by code to meet Miami-Dade HVHZ standards — the strictest wind code in the country. We build to it on every job, with reinforced attachment and code-current secondary water barriers.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code isn’t only about surviving a storm; it’s what qualifies your home for wind-mitigation insurance credits. We document every feature your insurer uses to calculate those savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Miramar Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['SilverLakes', 'Sunset Lakes', 'Riviera Isles', 'Monarch Lakes', 'Vizcaya', 'Historic Miramar'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Miramar Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Miramar Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Miramar and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Miramar &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
