import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

/**
 * PR-246: Job Story 2 (content program, Deliverable 1).
 * Written from the GBP post copy + job photos. City only; no
 * customer-identifying details.
 */
const photos = [
  {
    src: '/images/boca-raton-tile-roof-repair-in-progress-all-phase-usa.webp',
    alt: 'Flat concrete tile lifted and stacked around a pipe penetration during a roof repair in Boca Raton, FL',
    caption: 'Tile lifted and stacked at one of the repair areas — the penetration beneath is why this spot was opened.',
  },
  {
    src: '/images/tile-roof-repair-boca-raton-all-phase-usa.webp',
    alt: 'Opened section of a flat tile roof in Boca Raton showing the underlayment exposed with tiles stacked for re-use',
    caption: 'The area underneath opened and reworked; the same tiles, stacked beside the opening, go back down when the work is done.',
  },
  {
    src: '/images/boca-raton-roof-tile-repair-all-phase-usa.webp',
    alt: 'All Phase Construction USA crew and trucks at a flat tile roof repair in Boca Raton, FL',
    caption: 'On site in Boca Raton — targeted repairs, not a tear-off.',
  },
];

export default function ProjectFlatTileRepairBocaRatonPage() {
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Projects', item: 'https://allphaseconstructionfl.com/projects' },
    { '@type': 'ListItem', position: 3, name: 'Flat Tile Roof Repair in Boca Raton', item: 'https://allphaseconstructionfl.com/projects/flat-tile-roof-repair-boca-raton' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Flat Tile Roof Repair in Boca Raton — Why Knowing Where to Step Is Half the Job',
    description: 'A set of targeted flat tile repairs in Boca Raton: tile lifted at the penetrations, the areas underneath opened and reworked, and the same tile set back down.',
    image: photos.map(p => `https://allphaseconstructionfl.com${p.src}`),
    author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' },
    publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' },
    datePublished: '2026-10-20' };

  return (
    <>
      <SEO
        title="Flat Tile Roof Repair in Boca Raton | Job Story"
        description="Targeted flat tile repairs in Boca Raton: tile lifted at the penetrations, the waterproofing underneath reworked, the same tile reset — and why careless foot traffic is this roof type's enemy."
        canonicalPath="/projects/flat-tile-roof-repair-boca-raton"
      />
      <InlineSchema schemas={[breadcrumbSchema, articleSchema]} />

      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-yellow-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-white transition-colors">Our Projects</Link>
              <span>/</span>
              <span className="text-white">Flat Tile Repair, Boca Raton</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Flat Tile Roof Repair in Boca Raton — <span className="text-yellow-400">Why Knowing Where to Step Is Half the Job</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A flat concrete tile roof in Boca Raton with leaks starting at its penetrations. This one was a set of targeted repairs rather than anything dramatic — tile lifted in a few spots, the areas underneath opened up and reworked, and the same tile set back down when we were finished.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Found</h2>
            <p className="text-lg text-zinc-300">
              Penetrations are usually where these start, and this roof was no exception. Every vent stack, pipe, and flashing on a tile roof is a hole in the waterproofing that someone sealed — and sealant is the shortest-lived thing up there. That does not mean the roof failed. It means a maintenance item came due, and catching it at that stage is the difference between a repair and a ceiling.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Fixed It</h2>
            <p className="text-lg text-zinc-300">
              At each repair area the tile was lifted and stacked, the waterproofing underneath was opened up and reworked at the penetration, and the same tile went back down when the work was finished. No drama, no upsell — the roof had years left in it; it needed its weak points serviced. We stack what we pull, we reuse what we can, and we leave the roof the way we found it apart from the part that needed fixing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why This Matters on a South Florida Roof</h2>
            <p className="text-lg text-zinc-300 mb-4">
              The other thing worth saying about flat concrete tile is that it breaks. A roof like this punishes anyone who walks it carelessly, and plenty of homeowners have had someone come fix one leak and leave a dozen cracked tiles behind. Knowing where to step — on the tile's supported edges, never mid-span — is not a small part of this job.
            </p>
            <p className="text-lg text-zinc-300">
              It is also why "just send someone up to look" is not free on a tile roof. The wrong someone costs tiles. A tile-experienced crew treats the roof surface as part of what they were hired to protect, not just the path to the leak.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">The Job in Photos</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {photos.map(p => (
                <figure key={p.src} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-64 object-cover" />
                  <figcaption className="p-4 text-sm text-zinc-400 leading-relaxed">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Related</h2>
            <p className="text-lg text-zinc-300">
              More on our <Link to="/tile-roofing" className="text-yellow-400 underline">tile roofing work</Link>, <Link to="/roof-repair/boca-raton" className="text-yellow-400 underline">roof repair in Boca Raton</Link>, and <Link to="/locations/boca-raton" className="text-yellow-400 underline">roof replacement in Boca Raton</Link> — or browse <Link to="/projects" className="text-yellow-400 underline">all our projects</Link>.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">A Tile Roof That Needs Attention?</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">We repair before we ever try to sell you a new roof. A live person answers every call, and we guarantee scheduling within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Broward &amp; Palm Beach Counties from Deerfield Beach | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </section>
        </div>
      </div>
    </>
  );
}
