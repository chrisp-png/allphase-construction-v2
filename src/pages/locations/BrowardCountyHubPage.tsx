/**
 * Broward County Hub Page (PR-136) — rich county overview + internal-linking hub to every city page.
 */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function BrowardCountyHubPage() {
  const coordinates = getCityCoordinates('Fort Lauderdale');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Broward County', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'Do you serve all of Broward County?', a: 'Yes. From our office and warehouse in Deerfield Beach, we roof every municipality in Broward County — all 28 cities and towns, from Fort Lauderdale to Weston — with the same standards, supervision, and code-compliant workmanship. Each city has its own dedicated roofing page linked above.' },
    { q: 'Is all of Broward County in the High-Velocity Hurricane Zone?', a: 'Yes. Broward County, along with Miami-Dade, is legally within the High-Velocity Hurricane Zone, so every roof in the county must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every Broward job.' },
    { q: 'How much does a roof replacement cost in Broward County?', a: 'A roof replacement in Broward County typically runs $11,000 to $45,000 or more in 2026, depending on the city, home size, and material. Architectural shingle sits at the lower end; tile, metal, and coastal or estate roofs run higher.' },
    { q: 'What makes All Phase different in Broward?', a: "We're a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) based in Broward, which means we build every roof to HVHZ code and can handle structural and decking work on the same permit, instead of sending you to a separate contractor." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const cities = [{name:'Coconut Creek',slug:'coconut-creek'},{name:'Cooper City',slug:'cooper-city'},{name:'Coral Springs',slug:'coral-springs'},{name:'Dania Beach',slug:'dania-beach'},{name:'Davie',slug:'davie'},{name:'Fort Lauderdale',slug:'fort-lauderdale'},{name:'Hallandale Beach',slug:'hallandale-beach'},{name:'Hillsboro Beach',slug:'hillsboro-beach'},{name:'Hollywood',slug:'hollywood'},{name:'Lauderdale-by-the-Sea',slug:'lauderdale-by-the-sea'},{name:'Lauderdale Lakes',slug:'lauderdale-lakes'},{name:'Lauderhill',slug:'lauderhill'},{name:'Lighthouse Point',slug:'lighthouse-point'},{name:'Margate',slug:'margate'},{name:'Miramar',slug:'miramar'},{name:'North Lauderdale',slug:'north-lauderdale'},{name:'Oakland Park',slug:'oakland-park'},{name:'Parkland',slug:'parkland'},{name:'Pembroke Park',slug:'pembroke-park'},{name:'Pembroke Pines',slug:'pembroke-pines'},{name:'Plantation',slug:'plantation'},{name:'Pompano Beach',slug:'pompano-beach'},{name:'Sea Ranch Lakes',slug:'sea-ranch-lakes'},{name:'Southwest Ranches',slug:'southwest-ranches'},{name:'Sunrise',slug:'sunrise'},{name:'Tamarac',slug:'tamarac'},{name:'Weston',slug:'weston'},{name:'Wilton Manors',slug:'wilton-manors'}];
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Broward County, FL | All Phase USA</title>
        <meta name="description" content="Broward County, FL roofer serving all 28 cities from our Deerfield Beach office \u2014 HVHZ-code tile, shingle, metal \u0026 flat roofs, dual-licensed since 2005. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/broward-county" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Broward County, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best dual-licensed roofing contractor serving all of Broward County Florida?" /></div>
              <AtomicAnswer>Broward County, FL is a 1.9-million-resident melting pot — home to the largest Jamaican-American community in the country and, legally, to the strictest roofing code in the nation. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) headquartered in Deerfield Beach, serving all 28 Broward municipalities. Because the entire county sits inside the High-Velocity Hurricane Zone, every roof we build here meets Miami-Dade HVHZ code. Roof replacements run $11,000 to $45,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The County</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">More Than Beaches: A South Florida Melting Pot</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Broward County is home to more than 1.9 million people and one of the most diverse populations in the country — including the largest Jamaican-American community in the United States. It’s named after Napoleon Bonaparte Broward, a steamboat captain who ran guns to Cuban revolutionaries before becoming Florida’s 19th governor.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">It’s a county full of quirks: Fort Lauderdale is the closest major U.S. city to the Bahamas, the Henry E. Kinney Tunnel under the New River is the only public tunnel in all of Florida, and an infamous 1970s attempt to build an artificial reef out of two million tires still litters the seabed offshore. From our Deerfield Beach office, we roof every corner of it.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">HVHZ by Law</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Broward Roofs Are Held to the Highest Standard</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Here’s what sets Broward apart for roofing: along with neighboring Miami-Dade, it is one of only two counties in Florida that sit legally inside the High-Velocity Hurricane Zone. That means every roof in Broward must meet Miami-Dade HVHZ code — the strictest wind standard in the country — with approved product assemblies, a code-current secondary water barrier, and reinforced roof-to-wall and ridge attachment.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a Broward-based, dual-licensed roofing and general contractor, we build to that standard on every job, and our general contractor license means we can fix any decking or structural issue a tear-off reveals on the same permit. Meeting HVHZ code is also what qualifies your home for wind-mitigation insurance credits.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Cities We Serve Across Broward County</h2>
            <p className="text-zinc-400 text-center mb-10">Every Broward County community has its own dedicated roofing page. Find yours below.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cities.map(c => (
                <Link key={c.slug} to={`/locations/${c.slug}`} className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 font-semibold hover:border-red-600 hover:text-white transition-all">
                  <span>{c.name}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Broward County Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roofing Anywhere in Broward County</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance, from our Deerfield Beach office to your door.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving all of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
