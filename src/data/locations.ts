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
        titleOverride: "Roofing Company Deerfield Beach FL | All Phase USA",
    descriptionOverride: "Deerfield Beach's top-rated roofing company since 2005. HVHZ-certified, 2,500+ projects. Free same-day inspection. Call (754) 227-5605."
  },

  // ALL OTHER CITIES (use template-based SEO)
  {
    slug: "boca-raton",
    city: "Boca Raton",
    state: "FL",
    titleOverride: "Roofing Company Boca Raton FL | All Phase USA",
    descriptionOverride: "Boca Raton's trusted roofing company since 2005. Palm Beach County wind-compliant, 2,500+ projects. Free inspection. Call (754) 227-5605."
  },
  { slug: "boynton-beach", city: "Boynton Beach", state: "FL" },
  { slug: "coconut-creek", city: "Coconut Creek", state: "FL" },
  { slug: "cooper-city", city: "Cooper City", state: "FL" },
  { slug: "coral-springs", city: "Coral Springs", state: "FL" },
  { slug: "dania-beach", city: "Dania Beach", state: "FL" },
  {
    slug: "davie",
    city: "Davie",
    state: "FL",
    titleOverride: "Davie Roofing Company | Residential Re-Roofs | All Phase",
    descriptionOverride: "Trusted roofing company in Davie, FL. Shingle, tile & metal re-roofs for ranch-style and estate homes. HVHZ-certified, 2,500+ projects. (754) 227-5605."
  },
  {
    slug: "delray-beach",
    city: "Delray Beach",
    state: "FL",
    titleOverride: "Delray Beach Roofer | Palm Beach County | All Phase"
  },
  {
    slug: "fort-lauderdale",
    city: "Fort Lauderdale",
    state: "FL",
    descriptionOverride: "Licensed roofing contractor in Fort Lauderdale, FL. HVHZ-certified, dual-licensed. Tile, metal, shingle & flat roofing. Free inspections. (754) 227-5605."
  },
  { slug: "greenacres", city: "Greenacres", state: "FL" },
  { slug: "gulf-stream", city: "Gulf Stream", state: "FL" },
  {
    slug: "hallandale-beach",
    city: "Hallandale Beach",
    state: "FL",
    titleOverride: "Hallandale Beach Roofing Contractor | Condo & Coastal Flat Roof Experts | All Phase",
    descriptionOverride: "Expert condo & high-rise roofing contractor in Hallandale Beach, FL. Flat roof specialists — TPO, modified bitumen, built-up systems. 40-year recertification, HVHZ compliant. (754) 227-5605."
  },
  { slug: "haverhill", city: "Haverhill", state: "FL" },
  { slug: "highland-beach", city: "Highland Beach", state: "FL" },
  { slug: "hillsboro-beach", city: "Hillsboro Beach", state: "FL" },
  {
    slug: "hollywood",
    city: "Hollywood",
    state: "FL",
    titleOverride: "Hollywood FL Roofing Contractor | Storm & Wind Damage | All Phase",
    descriptionOverride: "Top-rated roofing contractor in Hollywood, FL. Hurricane-rated re-roofs, storm damage repair & coastal roofing. HVHZ-certified, 2,500+ jobs. (754) 227-5605."
  },
  { slug: "hypoluxo", city: "Hypoluxo", state: "FL" },
  { slug: "jupiter-inlet-colony", city: "Jupiter Inlet Colony", state: "FL" },
  { slug: "lake-park", city: "Lake Park", state: "FL" },
    { slug: "lake-worth-beach", city: "Lake Worth Beach", state: "FL" },
  { slug: "lantana", city: "Lantana", state: "FL" },
  { slug: "lauderdale-by-the-sea", city: "Lauderdale-By-The-Sea", state: "FL" },
  {
    slug: "lauderhill",
    city: "Lauderhill",
    state: "FL",
    titleOverride: "Lauderhill Roofing Contractor | Roof Replacement | All Phase",
    descriptionOverride: "Roofing contractor serving Lauderhill, FL. Affordable roof replacement, shingle & tile installs. HVHZ-compliant, licensed & insured. (754) 227-5605."
  },
  { slug: "lighthouse-point", city: "Lighthouse Point", state: "FL" },
  {
    slug: "margate",
    city: "Margate",
    state: "FL",
    titleOverride: "Margate FL Roofing Company | Re-Roofs & Repairs | All Phase",
    descriptionOverride: "Reliable roofing company in Margate, FL. Full re-roofs, leak repair & hurricane upgrades for residential homes. HVHZ-certified. (754) 227-5605."
  },
  {
    slug: "miramar",
    city: "Miramar",
    state: "FL",
    titleOverride: "Miramar Roofing Services | Tile, Metal & Shingle | All Phase",
    descriptionOverride: "Licensed roofing services in Miramar, FL. Tile, metal & shingle roof replacement. Dual-licensed contractor, HVHZ-certified, 2,500+ projects. (754) 227-5605."
  },
  { slug: "north-lauderdale", city: "North Lauderdale", state: "FL" },
  { slug: "north-palm-beach", city: "North Palm Beach", state: "FL" },
  { slug: "oakland-park", city: "Oakland Park", state: "FL" },
  { slug: "ocean-ridge", city: "Ocean Ridge", state: "FL" },
  { slug: "palm-beach", city: "Palm Beach", state: "FL" },
  {
    slug: "palm-beach-gardens",
    city: "Palm Beach Gardens",
    state: "FL",
    titleOverride: "Palm Beach Gardens Roofing Contractor | Luxury Tile & Estate Roofing | All Phase",
    descriptionOverride: "Premium roofing contractor in Palm Beach Gardens, FL. Luxury tile roof replacement for PGA National, BallenIsles, Frenchman's Reserve & more. HOA/ARC experts. (754) 227-5605."
  },
  {
    slug: "parkland",
    city: "Parkland",
    state: "FL",
    titleOverride: "Parkland Roofing Contractor | Luxury Home Re-Roofs | All Phase",
    descriptionOverride: "Roofing contractor specializing in Parkland, FL luxury homes. Tile, slate & metal roof replacement. HVHZ-certified, HOA-experienced. (754) 227-5605."
  },
  {
    slug: "pembroke-pines",
    city: "Pembroke Pines",
    state: "FL",
    titleOverride: "Pembroke Pines Roofing Company | Full Roof Replacement | All Phase",
    descriptionOverride: "Roofing company in Pembroke Pines, FL. Complete roof replacement for single-family homes & townhomes. HVHZ-certified, 2,500+ projects. (754) 227-5605."
  },
  {
    slug: "plantation",
    city: "Plantation",
    state: "FL",
    titleOverride: "Plantation FL Roofer | Shingle & Tile Roofing | All Phase",
    descriptionOverride: "Experienced roofer in Plantation, FL. Shingle tear-offs, tile re-roofs & flat roof systems. HVHZ-compliant, dual-licensed contractor. (754) 227-5605."
  },
  { slug: "pompano-beach", city: "Pompano Beach", state: "FL" },
  { slug: "royal-palm-beach", city: "Royal Palm Beach", state: "FL" },
  {
    slug: "sunrise",
    city: "Sunrise",
    state: "FL",
    titleOverride: "Sunrise FL Roofing Contractor | Hurricane-Rated Roofs | All Phase",
    descriptionOverride: "Licensed roofing contractor in Sunrise, FL. Hurricane-rated roof replacement & repair. Shingle, tile & metal. HVHZ-certified. Call (754) 227-5605."
  },
  {
    slug: "tamarac",
    city: "Tamarac",
    state: "FL",
    titleOverride: "Tamarac Roofing Company | Affordable Re-Roofs | All Phase",
    descriptionOverride: "Affordable roofing company serving Tamarac, FL. Shingle & tile roof replacement, leak repair, insurance claims. HVHZ-certified. (754) 227-5605."
  },
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
