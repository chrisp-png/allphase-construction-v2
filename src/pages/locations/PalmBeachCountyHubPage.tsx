/**
 * Palm Beach County Hub Page (PR-136) — rich county overview + internal-linking hub to every city page.
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

export default function PalmBeachCountyHubPage() {
  const coordinates = getCityCoordinates('West Palm Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Palm Beach County', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'Do you serve all of Palm Beach County?', a: 'Yes. We roof every municipality in Palm Beach County — all 21 cities, towns, and villages, from Boca Raton to Jupiter and out to Loxahatchee Groves — with consistent standards and supervision. Each community has its own dedicated roofing page linked above.' },
    { q: 'Is Palm Beach County in the High-Velocity Hurricane Zone?', a: 'No — unlike Broward and Miami-Dade, Palm Beach County is not legally within the HVHZ. But because the county still takes real hurricane wind, we voluntarily build every roof to Miami-Dade HVHZ spec, the strictest wind standard in the country.' },
    { q: 'How much does a roof replacement cost in Palm Beach County?', a: 'A roof replacement in Palm Beach County typically runs $11,000 to $55,000 or more in 2026, depending on the city, home size, and material. Inland shingle roofs sit at the lower end; oceanfront estates, tile, and metal run higher.' },
    { q: 'What makes All Phase different in Palm Beach County?', a: "We're a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that voluntarily builds every Palm Beach County roof to Miami-Dade HVHZ spec, and can handle structural and decking work on the same permit instead of sending you to a separate contractor." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const cities = [{name:'Boca Raton',slug:'boca-raton'},{name:'Boynton Beach',slug:'boynton-beach'},{name:'Delray Beach',slug:'delray-beach'},{name:'Greenacres',slug:'greenacres'},{name:'Haverhill',slug:'haverhill'},{name:'Highland Beach',slug:'highland-beach'},{name:'Hypoluxo',slug:'hypoluxo'},{name:'Jupiter',slug:'jupiter'},{name:'Jupiter Inlet Colony',slug:'jupiter-inlet-colony'},{name:'Lake Worth Beach',slug:'lake-worth-beach'},{name:'Lantana',slug:'lantana'},{name:'Loxahatchee Groves',slug:'loxahatchee-groves'},{name:'North Palm Beach',slug:'north-palm-beach'},{name:'Ocean Ridge',slug:'ocean-ridge'},{name:'Palm Beach',slug:'palm-beach'},{name:'Palm Beach Gardens',slug:'palm-beach-gardens'},{name:'Palm Beach Shores',slug:'palm-beach-shores'},{name:'Royal Palm Beach',slug:'royal-palm-beach'},{name:'Wellington',slug:'wellington'},{name:'West Palm Beach',slug:'west-palm-beach'},{name:'Westlake',slug:'westlake'}];
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Palm Beach County, FL | All Phase USA</title>
        <meta name="description" content="Palm Beach County, FL roofer serving all 21 cities \u2014 voluntarily HVHZ-spec tile, shingle, metal \u0026 flat roofs, coastal to inland, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/palm-beach-county" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Palm Beach County, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best dual-licensed roofing contractor serving all of Palm Beach County Florida?" /></div>
              <AtomicAnswer>Palm Beach County, FL is the second-largest county in Florida by land area — bigger than Rhode Island and Delaware combined — spanning inland ranchland to 47 miles of Atlantic coastline, and home to more than 50 billionaires. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) serving all 21 Palm Beach County municipalities. Palm Beach County isn’t legally in the High-Velocity Hurricane Zone, but we voluntarily build every roof to Miami-Dade HVHZ spec. Roof replacements run $11,000 to $55,000 and up.</AtomicAnswer>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bigger Than Two States, and Full of Surprises</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is enormous — 1,971 square miles, the second-largest county in Florida by land area, and bigger than Rhode Island and Delaware combined. It runs from equestrian ranchland and sugarcane fields in the west to 47 miles of Atlantic coastline in the east, and it’s home to more than 50 billionaires, from Tiger Woods to Bill Gates.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Its history is surprising, too: the modern IBM personal computer was secretly developed in Boca Raton in the early 1980s under the code name ’Project Acorn,’ and the county very nearly landed Disney World before the deal for Palm Beach Gardens fell through. Its coastline is part of the Florida Reef Tract, the only living barrier coral reef in the continental U.S. We roof all of it, coast to ranch.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">Voluntarily HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Miami-Dade Spec Across the County</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Unlike Broward and Miami-Dade, Palm Beach County is not legally inside the High-Velocity Hurricane Zone. But that doesn’t mean the wind is any gentler — from oceanfront estates to open western acreage, Palm Beach County homes take real hurricane force.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">So we voluntarily build every roof in the county to Miami-Dade HVHZ spec, the strictest wind standard in the country. It’s the right way to build here, and it’s what qualifies your home for wind-mitigation insurance credits. As a dual-licensed roofing and general contractor, we also handle any structural or decking work a tear-off uncovers on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Cities We Serve Across Palm Beach County</h2>
            <p className="text-zinc-400 text-center mb-10">Every Palm Beach County community has its own dedicated roofing page. Find yours below.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Palm Beach County Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roofing Anywhere in Palm Beach County</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance, from our Deerfield Beach office to your door.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving all of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
