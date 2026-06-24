/**
 * CityProjectGallery (PR-73)
 *
 * Renders 1-2 REAL project photos for a given city, pulled from the
 * manifest in src/data/cityProjectPhotos.ts. Each photo is a real
 * completed project from public/projects/, filename-tagged with the
 * city slug.
 *
 * Why this exists:
 *   - Authentic, city-specific project photos are a stronger trust
 *     signal on home services sites than stock or AI imagery.
 *   - Improves perceived locality of each city page (visitors see
 *     "they actually do work in MY city").
 *   - Same photos cross-feed GBP, Yelp, and the site, reinforcing
 *     consistent local presence signals.
 *
 * Usage:
 *   <CityProjectGallery slug="boca-raton" />
 *
 * Falls through silently if the slug has no manifest entry, so it's
 * safe to drop in everywhere — gap cities just render nothing.
 */
import { CITY_PROJECT_PHOTOS } from '../data/cityProjectPhotos';

interface Props {
  slug: string;
  /** Section heading. Defaults to `Recent ${city} Projects`. */
  heading?: string;
}

function citySlugToName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function CityProjectGallery({ slug, heading }: Props) {
  const photos = CITY_PROJECT_PHOTOS[slug];
  if (!photos || photos.length === 0) return null;

  const cityName = citySlugToName(slug);
  const resolvedHeading = heading ?? `Recent ${cityName} Roofing Projects`;

  return (
    <section className="py-12 bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {resolvedHeading}
        </h2>
        <p className="text-zinc-400 text-sm mb-8">
          Real photos from completed projects in {cityName}, FL — every roof
          installed to HVHZ / Florida Building Code spec by our dual-licensed
          crew (CCC-1331464 / CGC-1526236).
        </p>
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
