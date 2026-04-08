/**
 * LANDMARK PAGES DATA
 *
 * Single source of truth for /locations/:city/:landmark geo-relevance pages.
 *
 * Why this file exists:
 * LeadSnap shows palm-beach-county-roofing-contractor at avg rank 6.26
 * (2nd-place market share in the heatmap). Adding landmark-level pages
 * beneath Boca Raton creates additional geographic entity anchors that
 * reinforce the county-level term without cannibalizing the existing
 * city pages (which are positioned as roof replacement hubs post-April-6
 * pivot).
 *
 * Topical positioning: these are ROOF REPLACEMENT pages (not repair, not
 * inspection) to match the locations.ts pivot. Do NOT introduce "roofing
 * contractor" language in titles or H1s here — that would reintroduce the
 * leak we fixed in PR #1.
 *
 * Scaling plan: start with Boca (3 landmarks). If LeadSnap shows lift in
 * the target term within 21 days, extend to Delray, Boynton, WPB, Jupiter.
 */

export interface LandmarkFaq {
  question: string;
  answer: string;
}

export interface Landmark {
  /** Slug segment used in the URL: /locations/:citySlug/:slug */
  slug: string;
  /** Parent city slug (must match a slug in locations.ts) */
  citySlug: string;
  /** Display name of the landmark */
  name: string;
  /** Short one-sentence descriptor used in H1 and meta description */
  shortDescriptor: string;
  /** 2–3 sentence local context paragraph rendered in the page body */
  localContext: string;
  /** Roofing angle specific to this landmark (HOA, architecture, materials, etc.) */
  roofingAngle: string;
  /** Approximate distance from the landmark in miles; used for "within X miles" copy */
  approxServiceRadiusMiles: number;
  /** Nearby neighborhoods/sub-areas for internal copy */
  nearbyAreas: string[];
  /** Unique landmark-specific FAQs (in addition to the shared city FAQs) */
  faqs: LandmarkFaq[];
  /** Optional explicit meta title override (rarely needed — default template is usually right) */
  titleOverride?: string;
  /** Optional explicit meta description override */
  descriptionOverride?: string;
}

export const landmarks: Landmark[] = [
  // ─── BOCA RATON ──────────────────────────────────────────────────────────
  {
    slug: 'mizner-park',
    citySlug: 'boca-raton',
    name: 'Mizner Park',
    shortDescriptor:
      'the heart of downtown Boca Raton, where mixed-use residential above ground-floor retail creates one of Palm Beach County\'s most architecturally distinctive roofing environments.',
    localContext:
      'Mizner Park sits at the center of downtown Boca Raton along Federal Highway between Palmetto Park Road and Glades Road. The complex blends condominium towers, upscale retail, the Mizner Park Amphitheater, and the Boca Raton Museum of Art. Surrounding single-family neighborhoods — Old Floresta, Spanish Village, and Royal Palm Yacht & Country Club — contain some of the oldest and most prestigious tile roofs in Palm Beach County, many dating to the original Addison Mizner Mediterranean Revival period.',
    roofingAngle:
      'Properties around Mizner Park face two distinct roofing demands. Condominium towers require commercial-scale flat-roof systems — typically TPO or modified bitumen — with strict HOA coordination and specialized crane-lift logistics for downtown access. Single-family homes in Old Floresta and the Spanish Village historic district typically carry clay or concrete barrel tile systems that need authentic Mediterranean-profile matching, meticulous flashing work, and careful handling of original 1920s-era roof decking. Our dual CCC/CGC licensing lets us assess structural deck condition on century-old homes before any tear-off begins.',
    approxServiceRadiusMiles: 2,
    nearbyAreas: ['Old Floresta', 'Spanish Village', 'Royal Palm Yacht & Country Club', 'Downtown Boca Raton'],
    faqs: [
      {
        question: 'Do you replace tile roofs on historic Mediterranean Revival homes near Mizner Park?',
        answer:
          'Yes. Old Floresta and Spanish Village contain some of the original Addison Mizner homes, and authentic barrel tile profile matching is critical on these properties. We source tile from manufacturers that still produce historically accurate profiles, coordinate with the Boca Raton Historic Preservation Board when required, and use our CGC license to assess 1920s-era roof decking and framing before the new system goes down.',
      },
      {
        question: 'Can you handle condominium reroofs in the downtown Mizner Park area?',
        answer:
          'Yes. Condominium projects near Mizner Park require commercial-scale flat-roof systems (TPO, PVC, or modified bitumen), coordinated HOA approvals, and staged material delivery for downtown access constraints. We\'ve completed multi-building condominium reroofs throughout downtown Boca and handle the HOA submittal package, engineering letters, and permit coordination as part of every proposal.',
      },
      {
        question: 'How fast can you respond to a roof leak near Mizner Park?',
        answer:
          'Our Deerfield Beach headquarters is roughly 11 miles south of Mizner Park on I-95. For active leaks we typically reach downtown Boca within 45 minutes of a call during business hours, and we carry emergency tarping and moisture detection equipment on every service vehicle.',
      },
    ],
  },

  {
    slug: 'town-center-at-boca-raton',
    citySlug: 'boca-raton',
    name: 'Town Center at Boca Raton',
    shortDescriptor:
      'the retail and residential anchor of west Boca Raton, where 1970s–1990s single-family communities share the neighborhood with one of Palm Beach County\'s largest shopping destinations.',
    localContext:
      'Town Center at Boca Raton sits at the Glades Road / Military Trail interchange, anchoring a residential corridor that stretches from Yamato Road south to Palmetto Park Road. The communities surrounding Town Center — Boca Del Mar, Boca Pointe, Boca West, Del Mar Village, and the gated sections north of Yamato — were built largely between 1975 and 1995 and contain thousands of concrete tile and architectural shingle roofs now reaching or past their 25-year service interval.',
    roofingAngle:
      'This part of Boca Raton is dominated by concrete tile systems from the original build-out era, many of which are now at or beyond their expected lifespan. Common issues we address here: cracked tile replacement, underlayment failure (even when the tile itself looks fine), ridge and hip cap reattachment, and full tile-to-metal or tile-to-shingle conversions when homeowners want a lighter long-term system. Most of the gated communities in this area enforce HOA architectural review for roof color and profile — we handle the HOA submittal package, manufacturer data sheets, and color samples as standard.',
    approxServiceRadiusMiles: 3,
    nearbyAreas: ['Boca Del Mar', 'Boca Pointe', 'Boca West', 'Del Mar Village', 'Yamato Road corridor'],
    faqs: [
      {
        question: 'Do you work with HOAs in the Boca West and Boca Pointe communities?',
        answer:
          'Yes. Nearly every gated community around Town Center enforces architectural review for roof replacements — color, profile, material, and in some cases specific manufacturer SKUs. We handle the full HOA submittal package as part of the proposal: manufacturer data sheets, color samples, installation method statement, and liability insurance certificates. On larger projects we attend the ARC meeting with the homeowner.',
      },
      {
        question: 'My concrete tile roof is 28 years old near Town Center — do I need a full replacement or can it be repaired?',
        answer:
          'In the Boca Del Mar / Boca Pointe era (1980s–early 1990s), the underlayment typically fails well before the concrete tile itself. We pull a section of tile to inspect the underlayment condition, and in most homes we inspect from this vintage the underlayment is past serviceable life even when the tile looks perfect. Tile can often be saved and reinstalled over new underlayment, which cuts material cost substantially. We walk that decision with you before the proposal.',
      },
      {
        question: 'Can I convert from tile to a lighter roof system on a Boca Del Mar home?',
        answer:
          'Yes — tile-to-metal and tile-to-shingle conversions are common west of Town Center, usually driven by insurance cost, structural concerns, or HOA allowance. Our CGC license lets us assess whether the existing roof structure needs reinforcement or whether the lighter system will actually reduce structural load without changes. We give you both options with numbers before you commit.',
      },
    ],
  },

  {
    slug: 'florida-atlantic-university',
    citySlug: 'boca-raton',
    name: 'Florida Atlantic University',
    shortDescriptor:
      'the 850-acre main campus in central Boca Raton, anchoring a residential corridor of 1960s–1980s single-family homes, graduate housing, and rental properties with distinct roofing challenges.',
    localContext:
      'Florida Atlantic University\'s main campus occupies a large footprint north of Glades Road between NW 10th Avenue and Military Trail. The surrounding residential neighborhoods — University Park, Boca Square, Palms at Boca Pointe, and the corridor along NW 2nd Avenue — include a mix of owner-occupied single-family homes, faculty housing, and investor-owned rental properties. Many of these homes were built during FAU\'s 1960s–1980s expansion and have original or single-generation-replaced roofing systems.',
    roofingAngle:
      'The FAU corridor presents a different roofing mix than west or east Boca Raton. Homes here are typically smaller footprint, lower-slope, and built with architectural shingle or early-generation concrete tile. Rental and investor-owned properties near campus often have deferred maintenance — we handle insurance-claim replacements, storm-damage documentation for absentee owners, and turnkey reroofs coordinated with property managers. Our dual licensing is particularly valuable on 1960s-era homes where original roof decking and truss systems may need inspection or reinforcement before a modern HVHZ-compliant system is installed.',
    approxServiceRadiusMiles: 2,
    nearbyAreas: ['University Park', 'Boca Square', 'Palms at Boca Pointe', 'NW 2nd Avenue corridor'],
    faqs: [
      {
        question: 'Do you work with absentee landlords on rental properties near FAU?',
        answer:
          'Yes. Investor-owned rental properties near FAU make up a meaningful share of our Boca Raton workload. We coordinate directly with property managers, document every phase with photos, handle insurance-claim paperwork, and can complete full reroofs without the owner on site. Payment terms can be structured for investor-owned portfolios with multiple simultaneous replacements.',
      },
      {
        question: 'Many homes near FAU are from the 1960s — can the original roof structure handle modern HVHZ-compliant systems?',
        answer:
          'Usually yes, but not always without remediation. 1960s-era roof decking is often 1/2" plywood or even plank decking, which may need an overlay or full replacement to meet modern uplift requirements. Original truss systems are typically fine but benefit from hurricane strap upgrades during reroofing. Our CGC license lets us assess and address all of this as part of the roofing project rather than bringing in a separate contractor.',
      },
      {
        question: 'How does Boca Raton\'s HVHZ requirement affect homes near FAU?',
        answer:
          'Boca Raton sits inside Palm Beach County, which is not technically in the HVHZ (HVHZ covers Miami-Dade and Broward), but Boca\'s building department enforces HVHZ-equivalent standards on most new roofing work. Practically that means the same 175+ mph wind-rated installation methods, enhanced fastening schedules, and inspection requirements as a Broward project. We build every Boca Raton replacement to the HVHZ standard regardless — it\'s the right thing for the property and it\'s what insurance carriers increasingly expect.',
      },
    ],
  },
];

/**
 * Lookup helpers
 */
export function getLandmarksByCity(citySlug: string): Landmark[] {
  return landmarks.filter((l) => l.citySlug === citySlug);
}

export function getLandmark(citySlug: string, landmarkSlug: string): Landmark | undefined {
  return landmarks.find((l) => l.citySlug === citySlug && l.slug === landmarkSlug);
}

/** All landmark slug pairs, used by prerender generation */
export function allLandmarkSlugPairs(): Array<{ citySlug: string; landmarkSlug: string }> {
  return landmarks.map((l) => ({ citySlug: l.citySlug, landmarkSlug: l.slug }));
}
