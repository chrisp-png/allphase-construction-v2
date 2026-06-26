/**
 * CityProjectGallery (PR-73, smart-heading update PR-91)
 *
 * Renders 1-2 REAL project photos for a given city, pulled from the
 * manifest in src/data/cityProjectPhotos.ts. Each photo is a real
 * job from public/projects/, filename-tagged with the city slug.
 *
 * AUTO-DETECTED HEADING (PR-91):
 * The component examines the photo filenames and renders a heading +
 * description that matches the actual content:
 *
 *   - All filenames contain 'inspection' or 'broken' → "Recent
 *     {City} Roof Inspections" / "Real inspection photos from
 *     {City} homes our dual-licensed crew has evaluated."
 *
 *   - All filenames contain 'completed' / 'replacement' / 'install'
 *     and NOT 'inspection' → "Recent {City} Roofing Projects" /
 *     original copy about HVHZ-spec installs.
 *
 *   - Mixed or ambiguous → "Recent {City} Roofing Work" / neutral
 *     copy that covers both completed and in-progress jobs.
 *
 *  Caller can still override via the `heading` and `description`
 *  props if a specific page needs custom copy.
 *
 * Falls through silently if the slug has no manifest entry.
 */
import { CITY_PROJECT_PHOTOS } from '../data/cityProjectPhotos';

interface Props {
  slug: string;
  /** Section heading. Defaults to auto-detected per content. */
  heading?: string;
  /** Section subhead/description. Defaults to auto-detected per content. */
  description?: string;
}

function citySlugToName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

type PhotoKind = 'inspection' | 'completed' | 'mixed';

function detectKind(filenames: string[]): PhotoKind {
  const lowered = filenames.map((f) => f.toLowerCase());

  const isInspection = (f: string) =>
    f.includes('inspection') ||
    f.includes('broken') ||
    f.includes('repair') ||
    f.includes('damage') ||
    f.includes('leak') ||
    f.includes('found') ||
    f.includes('bad-decking');

  const isCompleted = (f: string) =>
    f.includes('completed') ||
    f.includes('replacement') ||
    f.includes('replaced') ||
    f.includes('new-roof') ||
    f.includes('finished') ||
    f.includes('in-progress') ||
    f.includes('installation') ||
    f.includes('installed') ||
    f.includes('installing') ||
    f.includes('install') ||
    f.includes('crew') ||
    f.includes('roof-trim') ||
    f.includes('underlayment') ||
    f.includes('hip-and-ridge') ||
    f.includes('barrier');

  const allInspection = lowered.every(isInspection);
  const allCompleted = lowered.every(isCompleted);

  if (allInspection && !allCompleted) return 'inspection';
  if (allCompleted && !allInspection) return 'completed';
  return 'mixed';
}

export default function CityProjectGallery({ slug, heading, description }: Props) {
  const photos = CITY_PROJECT_PHOTOS[slug];
  if (!photos || photos.length === 0) return null;

  const cityName = citySlugToName(slug);
  const kind = detectKind(photos.map((p) => p.file));

  const defaultHeading =
    kind === 'inspection'
      ? `Recent ${cityName} Roof Inspections`
      : kind === 'completed'
      ? `Recent ${cityName} Roofing Projects`
      : `Recent ${cityName} Roofing Work`;

  const defaultDescription =
    kind === 'inspection'
      ? `Real inspection photos from ${cityName}, FL homes evaluated by our dual-licensed crew (CCC-1331464 / CGC-1526236) — typically the first step before a roof replacement or repair quote.`
      : kind === 'completed'
      ? `Real photos from completed projects in ${cityName}, FL — every roof installed to HVHZ / Florida Building Code spec by our dual-licensed crew (CCC-1331464 / CGC-1526236).`
      : `Real in-progress and completed project photos from ${cityName}, FL — every roof installed to HVHZ / Florida Building Code spec by our dual-licensed crew (CCC-1331464 / CGC-1526236).`;

  const resolvedHeading = heading ?? defaultHeading;
  const resolvedDescription = description ?? defaultDescription;

  return (
    <section className="py-12 bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {resolvedHeading}
        </h2>
        <p className="text-zinc-400 text-sm mb-8">{resolvedDescription}</p>
        <div
          className={`grid gap-6 ${
            photos.length === 1
              ? 'grid-cols-1 max-w-2xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2'
          }`}
        >
          {photos.map((p) => (
            <figure
              key={p.file}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg"
            >
              <img
                src={`/projects/${p.file}`}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
              <figcaption className="px-4 py-3 text-xs text-zinc-400 italic">
                {p.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
