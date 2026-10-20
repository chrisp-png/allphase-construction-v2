import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

/**
 * PR-244: Job Story 1 (content program, Deliverable 1).
 * First-hand job detail, written from the field notes behind the GBP post.
 * No customer name, no street address, no community name — city only.
 */
const photos = [
  {
    src: '/images/west-palm-clay-tile-repair-all-phase-usa.webp',
    alt: 'Cracked and slipped clay roof tiles found during a roof inspection in West Palm Beach, FL',
    caption: 'What the inspection found: cracked and slipped tiles scattered across the field — and a leak that did not line up with any of them.',
  },
  {
    src: '/images/replace-rotted-plywood-on-this-clay-tile-roof-all-phase-usa.webp',
    alt: 'Rotted plywood decking cut out and removed at a gooseneck vent on a clay tile roof in West Palm Beach',
    caption: 'The answer was under the tile: the deck opened at the gooseneck, the rotted plywood cutout beside it — damage that never showed from the attic.',
  },
  {
    src: '/images/west-palm-beach-clay-tile-repair-in-progress-all-phase-usa.webp',
    alt: 'Clay tile valley opened for repair in West Palm Beach with tiles stacked aside and aged underlayment exposed',
    caption: 'The valley opened up: tiles stacked aside for re-use, aged underlayment exposed down the full run.',
  },
  {
    src: '/images/valley-repair-in-progress-all-phase-usa.webp',
    alt: 'Polyglass Polystick TU Max self-adhered tile underlayment installed in a clay tile roof valley in West Palm Beach',
    caption: 'The rebuilt valley mid-install: Polyglass Polystick TU Max self-adhered underlayment bonded down the channel before the tile goes back.',
  },
];

export default function ProjectClayTileValleyRepairWestPalmBeachPage() {
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Projects', item: 'https://allphaseconstructionfl.com/projects' },
    { '@type': 'ListItem', position: 3, name: 'Clay Tile Valley Repair in West Palm Beach', item: 'https://allphaseconstructionfl.com/projects/clay-tile-valley-repair-west-palm-beach' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: "Clay Tile Valley Repair in West Palm Beach — Finding a Leak We Couldn't See From the Attic",
    description: 'A clay tile repair in West Palm Beach: a hidden gooseneck leak found by opening the roof, rotted decking replaced, and a valley rebuilt with Polyglass Polystick TU Max.',
    image: photos.map(p => `https://allphaseconstructionfl.com${p.src}`),
    author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' },
    publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' },
    datePublished: '2026-10-20' };

  return (
    <>
      <SEO
        title="Clay Tile Valley Repair in West Palm Beach | Job Story"
        description="How we found a West Palm Beach tile roof leak that was invisible from the attic: opened the roof at the gooseneck, replaced rotted decking, rebuilt the valley with Polyglass Polystick TU Max."
        canonicalPath="/projects/clay-tile-valley-repair-west-palm-beach"
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
              <span className="text-white">Clay Tile Valley Repair, West Palm Beach</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Clay Tile Valley Repair in West Palm Beach — <span className="text-yellow-400">Finding a Leak We Couldn't See From the Attic</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A West Palm Beach clay tile roof with a leak that could not be traced from inside the attic. The job became a textbook example of why a tile roof leak is almost never where the drip is — and why sometimes the only honest move is to open the roof.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Found</h2>
            <p className="text-lg text-zinc-300 mb-4">
              From the attic, nothing conclusive — the leak could not be seen from below. On top of the roof, the inspection told two stories: a scatter of cracked and slipped clay tiles across the field, and a long valley whose underlayment was well past its service life. The nearest suspect to the interior damage was a gooseneck vent, but there was no way to confirm that without opening the roof. So we said exactly that, and opened the roof at the gooseneck rather than sealing a guess and hoping.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Fixed It</h2>
            <p className="text-lg text-zinc-300 mb-4">
              Opening the tile at the gooseneck settled it: the plywood decking at the penetration was rotted — the kind of slow damage that never shows its face in the attic. We cut the rotted section out, replaced it with new decking, and resealed the penetration. The tile repair itself covered roughly one square — about a hundred square feet.
            </p>
            <p className="text-lg text-zinc-300">
              The valley got the full treatment rather than a patch: tiles lifted and stacked, the old underlayment stripped down a run of up to 25 feet, and the channel rebuilt with Polyglass Polystick TU Max, a self-adhered wind-and-water tile underlayment carrying Miami-Dade County approval. The membrane bonds directly to the deck, so there are no fastener penetrations through the waterproofing in the one place on the roof that handles the most water. The tiles were then relaid over the new membrane.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why This Matters on a South Florida Roof</h2>
            <p className="text-lg text-zinc-300 mb-4">
              On a tile roof, the tile is the rain screen — the underlayment underneath is the actual waterproofing, and it ages out first. That is why a tile roof can look fine from the driveway and still leak, and why the honest diagnosis sometimes requires lifting tile instead of smearing sealant where the stain is. Valleys deserve special respect: a valley is where two slopes dump into one channel, which makes it the hardest-working spot on the roof and the first place an aging underlayment gives up.
            </p>
            <p className="text-lg text-zinc-300">
              The other lesson is about chasing leaks. Water travels along decking and framing before it shows up on a ceiling, so the drip and the entry point are rarely in the same place. Sealing the nearest visible target treats the symptom. Opening the roof at the actual suspect takes more honesty up front — and it is the difference between ending a leak and postponing it.
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
              More on our <Link to="/tile-roofing" className="text-yellow-400 underline">tile roofing work</Link>, <Link to="/roof-repair/west-palm-beach" className="text-yellow-400 underline">roof repair in West Palm Beach</Link>, and <Link to="/locations/west-palm-beach" className="text-yellow-400 underline">roof replacement in West Palm Beach</Link> — or browse <Link to="/projects" className="text-yellow-400 underline">all our projects</Link>.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">A Leak That Keeps Coming Back?</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">We diagnose before we repair — with photo documentation of what we find. A live person answers every call, and we guarantee scheduling within 24 hours.</p>
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
