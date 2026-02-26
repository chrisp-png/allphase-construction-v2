/**
 * SINGLE SOURCE OF TRUTH FOR ALL LOCATION PAGES
 *
 * This dataset powers both:
 * 1. Live route rendering (/locations/:slug)
 * 2. Build-time prerendering (scripts/prerender-static.mjs)
 *
 * To add a new location: Simply add a new entry to this array.
 * The location will automatically get:
 * - A live route at /locations/{slug}
 * - Prerendered static HTML
 * - SEO metadata from templates or overrides
 */

export interface Location {
  slug: string;
  city: string;
  state: string;

  // Optional SEO overrides (if not provided, templates are used)
  titleOverride?: string;
  descriptionOverride?: string;
  ogTitleOverride?: string;
  ogDescriptionOverride?: string;
  canonicalOverride?: string;
  robotsOverride?: string;
  schemaOverride?: object;
}

export const locations: Location[] = [
  // HEADQUARTERS - Deerfield Beach (uses template-based SEO with HVHZ compliance)
  {
    slug: "deerfield-beach",
    city: "Deerfield Beach",
    state: "FL",
    descriptionOverride: "Licensed roofing contractor in Deerfield Beach, FL. HVHZ-compliant. Tile, metal, shingle & flat roofing. Dual-licensed (CCC & CGC). Free inspections."
  },

  // ALL OTHER CITIES (use template-based SEO)
  {
    slug: "boca-raton",
    city: "Boca Raton",
    state: "FL",
    descriptionOverride: "Licensed roofing contractor in Boca Raton, FL. Palm Beach County wind-compliant. Tile, metal, shingle & flat roofing. Free inspections."
  },
  { slug: "boynton-beach", city: "Boynton Beach", state: "FL" },
  { slug: "coconut-creek", city: "Coconut Creek", state: "FL" },
  { slug: "cooper-city", city: "Cooper City", state: "FL" },
  { slug: "coral-springs", city: "Coral Springs", state: "FL" },
  { slug: "dania-beach", city: "Dania Beach", state: "FL" },
  { slug: "davie", city: "Davie", state: "FL" },
  {
    slug: "delray-beach",
    city: "Delray Beach",
    state: "FL",
    titleOverride: "Delray Beach Roofer | Palm Beach County Wind-Compliant | All Phase Construction USA"
  },
  {
    slug: "fort-lauderdale",
    city: "Fort Lauderdale",
    state: "FL",
    descriptionOverride: "Licensed roofing contractor in Fort Lauderdale, FL. HVHZ-compliant. Tile, metal, shingle & flat roofing. Dual-licensed (CCC & CGC). Free inspections."
  },
  { slug: "greenacres", city: "Greenacres", state: "FL" },
  { slug: "gulf-stream", city: "Gulf Stream", state: "FL" },
  { slug: "hallandale-beach", city: "Hallandale Beach", state: "FL" },
  { slug: "haverhill", city: "Haverhill", state: "FL" },
  { slug: "highland-beach", city: "Highland Beach", state: "FL" },
  { slug: "hillsboro-beach", city: "Hillsboro Beach", state: "FL" },
  { slug: "hollywood", city: "Hollywood", state: "FL" },
  { slug: "hypoluxo", city: "Hypoluxo", state: "FL" },
  { slug: "jupiter-inlet-colony", city: "Jupiter Inlet Colony", state: "FL" },
  { slug: "lake-park", city: "Lake Park", state: "FL" },
    { slug: "lake-worth-beach", city: "Lake Worth Beach", state: "FL" },
  { slug: "lantana", city: "Lantana", state: "FL" },
  { slug: "lauderdale-by-the-sea", city: "Lauderdale-By-The-Sea", state: "FL" },
  { slug: "lauderhill", city: "Lauderhill", state: "FL" },
  { slug: "lighthouse-point", city: "Lighthouse Point", state: "FL" },
  { slug: "margate", city: "Margate", state: "FL" },
  { slug: "miramar", city: "Miramar", state: "FL" },
  { slug: "north-lauderdale", city: "North Lauderdale", state: "FL" },
  { slug: "north-palm-beach", city: "North Palm Beach", state: "FL" },
  { slug: "oakland-park", city: "Oakland Park", state: "FL" },
  { slug: "ocean-ridge", city: "Ocean Ridge", state: "FL" },
  { slug: "palm-beach", city: "Palm Beach", state: "FL" },
  { slug: "palm-beach-gardens", city: "Palm Beach Gardens", state: "FL" },
  { slug: "parkland", city: "Parkland", state: "FL" },
  { slug: "pembroke-pines", city: "Pembroke Pines", state: "FL" },
  { slug: "plantation", city: "Plantation", state: "FL" },
  { slug: "pompano-beach", city: "Pompano Beach", state: "FL" },
  { slug: "royal-palm-beach", city: "Royal Palm Beach", state: "FL" },
  { slug: "sunrise", city: "Sunrise", state: "FL" },
  { slug: "tamarac", city: "Tamarac", state: "FL" },
  { slug: "wellington", city: "Wellington", state: "FL" },
  {
    slug: "west-palm-beach",
    city: "West Palm Beach",
    state: "FL",
    descriptionOverride: "Licensed roofing contractor in West Palm Beach, FL. Palm Beach County wind-compliant. Tile, metal, shingle & flat roofing. Free inspections."
  },
  { slug: "westlake", city: "Westlake", state: "FL" },
  { slug: "weston", city: "Weston", state: "FL" },
  { slug: "wilton-manors", city: "Wilton Manors", state: "FL" }
];

/**
 * Get a location by its slug
 */
export function getLocationBySlug(slug: string): Location | null {
  return locations.find(loc => loc.slug === slug) || null;
}

/**
 * Get all location slugs (useful for route generation)
 */
export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug);
}
