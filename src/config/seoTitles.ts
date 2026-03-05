/**
 * SEO TITLES CONFIGURATION
 *
 * Hard-coded SEO titles for all pages.
 * Used by both:
 * 1. Build-time prerendering (scripts/prerender-static.mjs)
 * 2. Runtime metadata updates (components/NuclearMetadata.tsx)
 *
 * Single source of truth for all page titles.
 *
 * NOTE: /locations/:slug pages use src/data/locations.ts and src/lib/locationSeo.ts
 */

import { getLocationBySlug } from '../data/locations';
import { buildLocationSeo } from '../lib/locationSeo';

export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

/**
 * Static page titles - exact path matches
 */
export const SEO_TITLES: Record<string, SEOMetadata> = {
  '/': {
    title: 'Roofing Contractor | Broward & Palm Beach | All Phase USA',
    description: 'HVHZ-certified, dual-licensed roofer in Broward & Palm Beach. Tile, metal, shingle, flat & commercial roofing. Free inspections. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/'
  },
  '/contact': {
    title: 'Contact Our Roofing Team | All Phase USA',
    description: 'Call (754) 227-5605 or request a free estimate online. All Phase Construction USA serves all of Broward & Palm Beach County.',
    canonical: 'https://allphaseconstructionfl.com/contact'
  },
  '/about-us': {
    title: 'About All Phase Construction | Expert Roofing Specialist',
    description: 'Dual-licensed roofer (CCC & CGC) serving South Florida since 2005. 2,500+ roofs installed. HVHZ certified. 4.8 stars across 138 reviews.',
    canonical: 'https://allphaseconstructionfl.com/about-us'
  },
  '/roof-cost-calculator': {
    title: 'Roof Cost Calculator | South Florida | All Phase',
    description: 'Estimate roof replacement costs in Broward & Palm Beach County. Instant estimates by roof size, material, and pitch. Free, no obligation. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-cost-calculator'
  },
  '/pricing-guide': {
        title: 'Roof Pricing Guide | All Phase USA',
    description: 'South Florida roof replacement costs broken down by material, size, and scope. Know what to expect before you call a contractor.',
    canonical: 'https://allphaseconstructionfl.com/pricing-guide'
  },
  '/blog': {
    title: 'Roofing Blog | Expert Tips from All Phase Construction USA',
    description: 'Roofing tips, cost guides, and hurricane prep for South Florida homeowners. Written by a dual-licensed contractor with 20+ years experience.',
    canonical: 'https://allphaseconstructionfl.com/blog'
  },
  '/reviews': {
    title: 'Customer Reviews | All Phase USA',
    description: '4.8 stars from 138 verified South Florida homeowners. See why Broward & Palm Beach County residents choose All Phase Construction USA.',
    canonical: 'https://allphaseconstructionfl.com/reviews'
  },
  '/projects': {
    title: 'Our Projects | All Phase USA',
    description: 'Completed roofing projects across South Florida â tile, metal, shingle, and flat. See the quality before you call. Licensed & insured.',
    canonical: 'https://allphaseconstructionfl.com/projects'
  },
  '/residential-roofing': {
    title: 'Residential Roofing South Florida | All Phase Construction',
    description: 'Expert residential roofing in Broward & Palm Beach Counties. Tile, shingle, metal, and flat roofing for homes. Licensed, insured, HVHZ certified.',
    canonical: 'https://allphaseconstructionfl.com/residential-roofing'
  },
  '/commercial-roofing': {
    title: 'Commercial Roofing Services | All Phase USA',
    description: 'TPO, PVC, modified bitumen & metal roofing for South Florida businesses. Dual-licensed CCC/CGC. Free commercial roof assessment.',
    canonical: 'https://allphaseconstructionfl.com/commercial-roofing'
  },
  '/roof-inspection': {
    title: 'Professional Roof Inspection Services | All Phase USA',
    description: '21-point roof inspections in South Florida. Insurance docs, storm damage, pre-purchase. Dual-licensed contractor. Free. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection'
  },
  '/roof-replacement-process': {
    title: 'Roof Replacement Process | All Phase USA',
    description: 'See our 10-step roof replacement process - from inspection to final warranty. No surprises. South Florida dual-licensed roofing contractor.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-process'
  },
  '/roof-replacement': {
    title: 'Roof Replacement South Florida | Free Estimate | All Phase',
    description: 'South Florida\'s dual-licensed, HVHZ-certified roof replacement contractor. Free inspection + easy financing. Tile, metal, shingle & flat. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement'
  },
  '/roof-maintenance-programs': {
    title: 'Roof Maintenance Programs | All Phase USA',
    description: 'Extend your roof life with a proactive maintenance plan. Prevent leaks, maintain warranties, stay code-compliant in South Florida.',
    canonical: 'https://allphaseconstructionfl.com/roof-maintenance-programs'
  },
  '/tile-roofing': {
    title: 'Tile Roofing Installation & Repair | All Phase USA',
    description: 'Concrete & clay tile roofing in South Florida. HVHZ-compliant installation, repair & maintenance. Dual-licensed contractor. Free inspection.',
    canonical: 'https://allphaseconstructionfl.com/tile-roofing'
  },
  '/metal-roofing': {
    title: 'Metal Roofing Deerfield Beach & South Florida | All Phase',
    description: 'Hurricane-rated metal roof installation in Broward & Palm Beach County. Standing seam & exposed fastener. HOA-approved. HVHZ-certified. Free estimate.',
    canonical: 'https://allphaseconstructionfl.com/metal-roofing'
  },
  '/shingle-roofing': {
    title: 'Shingle Roofing Deerfield Beach & South Florida | All Phase',
    description: 'Licensed shingle roof installation & replacement in Broward & Palm Beach County. Architectural, 3-tab & impact-resistant. HVHZ-compliant. Free estimate.',
    canonical: 'https://allphaseconstructionfl.com/shingle-roofing'
  },
  '/flat-roofing': {
    title: 'Flat Roofing Services | All Phase USA',
    description: 'TPO, PVC, EPDM & modified bitumen flat roofing in South Florida. Residential & commercial. Dual-licensed CCC/CGC. Free assessment.',
    canonical: 'https://allphaseconstructionfl.com/flat-roofing'
  },
    '/roof-repair': {
    title: 'Roof Repair Deerfield Beach & South Florida | All Phase',
        description: 'Roof repair in Deerfield Beach & South Florida by a dual-licensed contractor. Storm damage, leaks, tile, shingle & flat roof repairs. Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair'
  },
    '/roofing-services': {
    title: 'Roofing Services | All Phase Construction USA',
    description: 'Tile, metal, shingle, flat & commercial roofing in Broward & Palm Beach County. HVHZ-certified, dual-licensed. Free inspections. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roofing-services'
  },
    '/services': {
    title: 'Roofing Services | All Phase Construction USA',
    description: 'Complete roofing services in Broward & Palm Beach County. Tile, metal, shingle, flat & commercial roofing. Repair, replacement & inspections. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/services'
  },
  '/locations/deerfield-beach/how-to-hire-a-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor | All Phase USA',
    description: 'Expert guide on hiring a roofing contractor in South Florida. Learn what to look for, questions to ask, and how to avoid scams.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/how-to-hire-a-roofing-contractor'
  },
  '/locations/deerfield-beach/best-roofers-deerfield-beach': {
    title: '5 Best Rated Roofers in Deerfield Beach FL (2025) | All Phase Construction USA',
    description: 'Looking for the best roofers in Deerfield Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach'
  },
  '/locations/fort-lauderdale/best-roofers-fort-lauderdale': {
    title: 'Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase',
    description: 'Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale'
  },
  '/locations/fort-lauderdale': {
    title: 'Fort Lauderdale Roofing Contractor | All Phase USA',
    description: 'Licensed roofing contractor in Fort Lauderdale, FL. HVHZ-certified, dual-licensed. Tile, metal, shingle & flat roofing. Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale'
  },
  '/locations/west-palm-beach': {
    title: 'West Palm Beach Roofing Contractor | All Phase USA',
    description: 'Dual-licensed West Palm Beach roofing contractor (CCC-1331464 & CGC-1526236). HVHZ certified. Historic district expertise. 20+ years. (754) 227-5605',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach'
  },
  '/locations/pompano-beach': {
    title: 'Pompano Beach Roofing Contractor | All Phase USA',
    description: 'Licensed roofing contractor in Pompano Beach, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/locations/pompano-beach'
  },
  '/locations/coral-springs': {
    title: 'Coral Springs Roofing Contractor | All Phase USA',
    description: 'Licensed roofing contractor in Coral Springs, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs'
  },
  '/locations/gulf-stream': {
    title: 'Gulf Stream Roofing Contractor | All Phase Construction USA',
    description: 'Licensed roofing contractor serving Gulf Stream, FL. Roof repair, replacement, and inspection services from All Phase Construction USA. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/gulf-stream',
  },
  '/locations/jupiter': {
    title: 'Jupiter Roofing Contractor | All Phase Construction USA',
    description: 'Licensed roofing contractor serving Jupiter, FL. Roof repair, replacement, and inspection services from All Phase Construction USA. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/jupiter',
  },
  '/locations/lake-worth-beach': {
    title: 'Lake Worth Beach Roofing Contractor | All Phase Construction USA',
    description: 'Licensed roofing contractor serving Lake Worth Beach, FL. Roof repair, replacement, and inspection services from All Phase Construction USA. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/lake-worth-beach',
  },
  '/locations/loxahatchee-groves': {
    title: 'Loxahatchee Groves Roofing Contractor | All Phase Construction USA',
    description: 'Licensed roofing contractor serving Loxahatchee Groves, FL. Roof repair, replacement, and inspection services from All Phase Construction USA. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/loxahatchee-groves',
  },
  '/locations/pembroke-park': {
    title: 'Pembroke Park Roofing Contractor | All Phase Construction USA',
    description: 'Licensed roofing contractor serving Pembroke Park, FL. Roof repair, replacement, and inspection services from All Phase Construction USA. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/pembroke-park',
  },
  '/roof-repair/fort-lauderdale': {
    title: 'Fort Lauderdale Roof Repair | All Phase USA',
    description: 'Expert roof repair in Fort Lauderdale, FL. HVHZ-certified, fast response, licensed & insured. Tile, shingle, metal & flat roof repairs. Free inspection.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/fort-lauderdale'
  },
    '/roof-repair/deerfield-beach': {
    title: 'Deerfield Beach Roof Repair | All Phase USA',
    description: 'Licensed roof repair in Deerfield Beach, FL. Inspection-first diagnostics, HVHZ-compliant repairs, HOA documentation, and insurance coordination. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/deerfield-beach'
  },
    '/roof-repair/pompano-beach': {
    title: 'Pompano Beach Roof Repair | All Phase USA',
    description: 'Licensed roof repair in Pompano Beach, FL. Inspection-first diagnostics, HVHZ-compliant repairs, HOA documentation, and insurance coordination. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/pompano-beach'
  },
    '/frequently-asked-questions': {
    title: 'Roofing FAQ South Florida | All Phase USA',
    description: 'South Florida roofing FAQs â repair vs replacement, HVHZ, insurance, materials & costs. Licensed contractor answers. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/frequently-asked-questions'
  },
    '/easy-payments': {
    title: 'Easy Payments & Financing Options | All Phase USA',
    description: 'Financing available for your South Florida roofing project. Major credit cards accepted and payment plans to fit any budget.',
    canonical: 'https://allphaseconstructionfl.com/easy-payments'
  },
  '/our-location': {
    title: 'Our Deerfield Beach Location | All Phase USA',
    description: 'All Phase Construction USA â 590 Goolsby Blvd, Deerfield Beach, FL 33442. Serving all of Broward & Palm Beach County. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/our-location'
  },
  '/learning-center': {
    title: 'Learning Center | Roofing Guides & Resources | All Phase USA',
    description: 'Roofing guides, cost breakdowns, and homeowner tips for South Florida. Hurricane prep, materials, inspections â all in one place.',
    canonical: 'https://allphaseconstructionfl.com/learning-center'
  },
  '/locations/deerfield-beach/service-area': {
    title: 'Service Areas | All Phase USA',
    description: 'All Phase Construction USA serves over 50 cities throughout Broward County and Palm Beach County from our Deerfield Beach headquarters.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area'
  },
        '/locations/deerfield-beach': {
    title: 'Roofing Contractor Deerfield Beach FL | All Phase',
    description: 'Licensed roofing contractor in Deerfield Beach, FL since 2005. HVHZ-certified, dual-licensed (CGC-1526236 & CCC-1331464). Tile, metal, shingle & flat roofing. Free inspections. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach'
  },
  '/how-to-hire-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor in Florida | Expert Guide',
    description: 'How to hire a roofing contractor in Florida â licenses to verify, questions to ask, red flags to avoid. Free guide from a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/how-to-hire-roofing-contractor'
  },
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // ROOF INSPECTION CITY PAGES â /roof-inspection/:city
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  '/roof-inspection/boca-raton': {
    title: 'Boca Raton Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Boca Raton, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/boca-raton'
  },
  '/roof-inspection/deerfield-beach': {
    title: 'Deerfield Beach Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Deerfield Beach, FL. Licensed Broward County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/deerfield-beach'
  },
  '/roof-inspection/fort-lauderdale': {
    title: 'Fort Lauderdale Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Fort Lauderdale, FL. Licensed Broward County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/fort-lauderdale'
  },
  '/roof-inspection/west-palm-beach': {
    title: 'West Palm Beach Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in West Palm Beach, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/west-palm-beach'
  },
  '/roof-inspection/delray-beach': {
    title: 'Delray Beach Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Delray Beach, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/delray-beach'
  },
  '/roof-inspection/boynton-beach': {
    title: 'Boynton Beach Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Boynton Beach, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/boynton-beach'
  },
  '/roof-inspection/palm-beach': {
    title: 'Palm Beach Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Palm Beach, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/palm-beach'
  },
  '/roof-inspection/coconut-creek': {
    title: 'Coconut Creek Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Coconut Creek, FL. Licensed Broward County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/coconut-creek'
  },
  '/roof-inspection/coral-springs': {
    title: 'Coral Springs Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Coral Springs, FL. Licensed Broward County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/coral-springs'
  },
  '/roof-inspection/wellington': {
    title: 'Wellington Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Wellington, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/wellington'
  },
  '/roof-inspection/pompano-beach': {
    title: 'Pompano Beach Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Pompano Beach, FL. Licensed Broward County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/pompano-beach'
  },
  '/roof-inspection/lake-worth': {
    title: 'Lake Worth Roof Inspection | Licensed & Insured | All Phase Construction USA',
    description: 'Professional roof inspection in Lake Worth, FL. Licensed Palm Beach County contractor. 21-point assessment, insurance documentation, storm damage reports. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection/lake-worth'
  }
};

/**
 * City names mapping - slug to proper name
 */
export const CITY_NAMES: Record<string, string> = {
  'boca-raton': 'Boca Raton',
  'boynton-beach': 'Boynton Beach',
  'broward-county': 'Broward County',
  'coconut-creek': 'Coconut Creek',
  'cooper-city': 'Cooper City',
  'coral-springs': 'Coral Springs',
  'dania-beach': 'Dania Beach',
  'davie': 'Davie',
  'deerfield-beach': 'Deerfield Beach',
  'delray-beach': 'Delray Beach',
  'fort-lauderdale': 'Fort Lauderdale',
  'greenacres': 'Greenacres',
  'gulf-stream': 'Gulf Stream',
  'hallandale-beach': 'Hallandale Beach',
  'haverhill': 'Haverhill',
  'highland-beach': 'Highland Beach',
  'hillsboro-beach': 'Hillsboro Beach',
  'hollywood': 'Hollywood',
  'hypoluxo': 'Hypoluxo',
  'jupiter': 'Jupiter',
  'jupiter-inlet-colony': 'Jupiter Inlet Colony',
  'lake-park': 'Lake Park',
  'lake-worth': 'Lake Worth',
  'lake-worth-beach': 'Lake Worth Beach',
  'lantana': 'Lantana',
  'lauderdale-by-the-sea': 'Lauderdale-by-the-Sea',
  'lauderdale-lakes': 'Lauderdale Lakes',
  'lauderdale-ranches': 'Lauderdale Ranches',
  'lauderhill': 'Lauderhill',
  'lazy-lake': 'Lazy Lake',
  'light-house-point': 'Lighthouse Point',
  'lighthouse-point': 'Lighthouse Point',
  'loxahatchee-groves': 'Loxahatchee Groves',
  'manalapan': 'Manalapan',
  'margate': 'Margate',
  'miramar': 'Miramar',
  'north-lauderdale': 'North Lauderdale',
  'north-palm-beach': 'North Palm Beach',
  'oakland-park': 'Oakland Park',
  'ocean-ridge': 'Ocean Ridge',
  'palm-beach': 'Palm Beach',
  'palm-beach-county': 'Palm Beach County',
  'palm-beach-gardens': 'Palm Beach Gardens',
  'palm-beach-shores': 'Palm Beach Shores',
  'parkland': 'Parkland',
  'pembroke-park': 'Pembroke Park',
  'pembroke-pines': 'Pembroke Pines',
  'plantation': 'Plantation',
  'pompano-beach': 'Pompano Beach',
  'royal-palm-beach': 'Royal Palm Beach',
  'sea-ranch-lakes': 'Sea Ranch Lakes',
  'south-palm-beach': 'South Palm Beach',
  'sunrise': 'Sunrise',
  'surfside': 'Surfside',
  'tamarac': 'Tamarac',
  'wellington': 'Wellington',
  'west-palm-beach': 'West Palm Beach',
  'westlake': 'Westlake',
  'weston': 'Weston',
  'wilton-manors': 'Wilton Manors'
};

/**
 * Generate SEO metadata for a given path
 * Handles dynamic routes like city pages and top-5-roofer pages
 */
export function generateSEOMetadata(path: string): SEOMetadata {
  const normalizedPath = path.toLowerCase();

  // Check static titles first
  if (SEO_TITLES[normalizedPath]) {
    return SEO_TITLES[normalizedPath];
  }

  // Handle /locations/:slug pages - Use the single source of truth
  if (normalizedPath.startsWith('/locations/') && normalizedPath !== '/locations') {
    const slug = normalizedPath.replace('/locations/', '').replace(/\/$/, '');

    // Use the location SEO builder (single source of truth)
    const location = getLocationBySlug(slug);
    if (location) {
      const seo = buildLocationSeo(location);
      return {
        title: seo.title,
        description: seo.description,
        canonical: seo.canonical,
        ogTitle: seo.ogTitle,
        ogDescription: seo.ogDescription
      };
    }

    // Fallback if location not found in locations.ts
    return {
      title: `${CITY_NAMES[slug] || slug} Roofing Contractor | All Phase Construction USA`,
      description: `All Phase Construction USA is a licensed roofing contractor serving ${CITY_NAMES[slug] || slug}, FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair.`,
      canonical: `https://allphaseconstructionfl.com/locations/${slug}`
    };
  }

    // Dynamic /roof-repair/:slug handler
  if (normalizedPath.startsWith('/roof-repair/')) {
    const slug = normalizedPath.replace('/roof-repair/', '').replace(/\/$/, '');
    const cityName = CITY_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${cityName} Roof Repair | All Phase USA`,
            description: `Emergency roof repair in ${cityName}, FL. Leaks, storm damage & flashing failures. HVHZ-compliant, dual-licensed CCC/CGC contractor. Call (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/roof-repair/${slug}`,
      ogTitle: `${cityName} Roof Repair | All Phase USA`,
            ogDescription: `Emergency roof repair in ${cityName}, FL. Leaks, storm damage & flashing failures. HVHZ-compliant, dual-licensed CCC/CGC contractor. Call (754) 227-5605.`,
      ogUrl: `https://allphaseconstructionfl.com/roof-repair/${slug}`,
    };
  }

  // Dynamic /roof-inspection/:slug handler
  if (normalizedPath.startsWith('/roof-inspection/')) {
    const slug = normalizedPath.replace('/roof-inspection/', '').replace(/\/$/, '');
    const cityName = CITY_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${cityName} Roof Inspection | All Phase USA`,
            description: `Free 21-point roof inspection in ${cityName}, FL. Insurance docs, storm damage & pre-purchase reports. Licensed contractor. Call (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/roof-inspection/${slug}`,
      ogTitle: `${cityName} Roof Inspection | All Phase USA`,
            ogDescription: `Free 21-point roof inspection in ${cityName}, FL. Insurance docs, storm damage & pre-purchase reports. Licensed contractor. Call (754) 227-5605.`,
      ogUrl: `https://allphaseconstructionfl.com/roof-inspection/${slug}`,
    };
  }

  // Handle blog posts
  if (normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog') {
    const slug = normalizedPath.replace('/blog/', '');
    const blogTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${blogTitle} | All Phase USA Blog`,
      description: `Read about ${blogTitle.toLowerCase()} from South Florida's dual-licensed roofing experts at All Phase Construction USA.`,
      canonical: `https://allphaseconstructionfl.com/blog/${slug}`
    };
  }

  // Fallback - ONLY for unmatched routes (not location pages)
  // Ensure canonical uses normalizedPath and strips trailing slash (except root)
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/+$/, '');
  return {
    title: 'Roofing Contractor | Broward & Palm Beach | All Phase USA',
    description: 'All Phase Construction USA provides hurricane-compliant roofing in Broward and Palm Beach County. Dual-licensed contractor specializing in HVHZ wind-code installation and manufacturer-spec roofing systems.',
    canonical: `https://allphaseconstructionfl.com${cleanPath}`
  };
}
