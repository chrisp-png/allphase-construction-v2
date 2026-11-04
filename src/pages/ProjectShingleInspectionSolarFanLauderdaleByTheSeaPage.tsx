import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

/**
 * PR-245: Job Story 3 (content program, Deliverable 1).
 * Written from the GBP post copy + field annotations. City only; no
 * customer-identifying details. Second photo is the fan unit on another
 * All Phase install and is captioned as such — never implied to be this job.
 */
const photos = [
  {
    src: '/images/lauderdale-by-the-sea-shingle-roof-repair-all-phase-usa.webp',
    alt: 'Shingle roof inspection in Lauderdale-by-the-Sea, FL with the flashing reseal location and the gooseneck vent chosen for a solar attic fan both marked',
    caption: 'The inspection findings, marked on the job photo: the flashing run due for resealing, and the existing gooseneck vent whose opening the new fan would reuse.',
  },
  {
    src: '/images/climasense-rm-2400-solar-attic-fan-all-phase-usa.webp',
    alt: 'ClimaSense RM 2400 solar attic fan installed by All Phase Construction USA, shown on another completed South Florida roof',
    caption: 'The unit itself: a ClimaSense RM 2400 solar attic fan — shown here on another completed All Phase installation.',
  },
];

export default function ProjectShingleInspectionSolarFanLauderdaleByTheSeaPage() {
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Projects', item: 'https://allphaseconstructionfl.com/projects' },
    { '@type': 'ListItem', position: 3, name: 'Shingle Roof Inspection in Lauderdale-by-the-Sea', item: 'https://allphaseconstructionfl.com/projects/shingle-inspection-solar-fan-lauderdale-by-the-sea' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Shingle Roof Inspection in Lauderdale-by-the-Sea — Two Findings, No New Holes',
    description: 'What a shingle roof inspection a block from the ocean actually turned up: flashing due for resealing, and a ClimaSense RM 2400 solar attic fan installed at an existing gooseneck so no new hole was cut.',
    image: photos.map(p => `https://allphaseconstructionfl.com${p.src}`),
    author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' },
    publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' },
    datePublished: '2026-10-20' };

  return (
    <>
      <SEO
        title="Shingle Roof Inspection, Lauderdale-by-the-Sea | Job Story"
        description="A shingle roof inspection a block from the ocean: salt-aged flashing resealed, and a ClimaSense RM 2400 solar attic fan installed at an existing gooseneck — no new holes in the roof."
        canonicalPath="/projects/shingle-inspection-solar-fan-lauderdale-by-the-sea"
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
              <span className="text-white">Shingle Inspection, Lauderdale-by-the-Sea</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Shingle Roof Inspection in Lauderdale-by-the-Sea — <span className="text-yellow-400">Two Findings, No New Holes</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A shingle roof inspection in Lauderdale-by-the-Sea, a block from the ocean. The inspection produced exactly what an inspection should: a short list of what was actually wrong and what it takes to fix it — not a push toward a roof the homeowner does not need yet.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Found</h2>
            <p className="text-lg text-zinc-300">
              Two items. The flashing needed resealing, and the attic needed real exhaust ventilation. The flashing is the part that matters most here. A block from the ocean, salt air works on metal and sealant far harder than it does five miles inland. Flashing is where the roof meets everything that interrupts it — walls, chimneys, vents — and the sealant at those joints is a wear item, not a permanent part of the roof. On a coastal home it comes due sooner. Resealing it is a small job. Finding out the hard way is not.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Fixed It</h2>
            <p className="text-lg text-zinc-300">
              The flashing was resealed where the inspection flagged it. For the ventilation, we installed a ClimaSense RM 2400 solar attic fan — and the detail worth explaining is where it went. The fan was installed at the location of an existing gooseneck vent, which means we used an opening that was already in the roof instead of cutting a new one. Every new penetration is a new place for water to eventually find its way in, so when a roof already has a hole in the right spot, the right move is to use it. The attic gets real exhaust; the roof gets no extra holes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why This Matters on a South Florida Roof</h2>
            <p className="text-lg text-zinc-300 mb-4">
              Coastal exposure changes maintenance math. Salt air accelerates corrosion on every metal component and dries out sealant joints years ahead of schedule, so a roof a block from the Atlantic is on a shorter inspection cycle than the same roof inland — not because the shingles fail faster, but because the small wear items at the edges and joints do.
            </p>
            <p className="text-lg text-zinc-300">
              And the no-new-holes principle travels to every roof type: penetrations are where leaks start, so a contractor who reuses a sound existing opening — instead of cutting another because it is faster — is protecting the roof's future, not just finishing the day's install.
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
              More on our <Link to="/shingle-roofing" className="text-yellow-400 underline">shingle roofing work</Link>, <Link to="/roof-inspection" className="text-yellow-400 underline">roof inspections</Link>, and <Link to="/locations/lauderdale-by-the-sea" className="text-yellow-400 underline">roofing in Lauderdale-by-the-Sea</Link> — or browse <Link to="/projects" className="text-yellow-400 underline">all our projects</Link>.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Want an Inspection That Produces a Short, Honest List?</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Free inspection with photo documentation. A live person answers every call, and we guarantee scheduling within 24 hours.</p>
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
