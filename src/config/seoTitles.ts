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
    description: 'HVHZ-certified roofing contractor serving Broward & Palm Beach County. Tile, metal, shingle, flat & commercial roofing. Dual-licensed (CCC & CGC). Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/'
  },
  '/contact': {
    title: 'Contact Our Roofing Team | All Phase USA',
    description: 'Contact All Phase Construction USA for roofing services in Broward & Palm Beach Counties. Call (754) 227-5605 or request a free estimate online.',
    canonical: 'https://allphaseconstructionfl.com/contact'
  },
  '/about-us': {
    title: 'About All Phase Construction | Expert Roofing Specialist',
    description: 'Dual-licensed roofing contractor serving South Florida since 2005. State Certified Roofing Contractor (CCC1331464) and General Contractor (CGC1526236).',
    canonical: 'https://allphaseconstructionfl.com/about-us'
  },
  '/roof-cost-calculator': {
    title: 'Roof Cost Calculator | All Phase USA',
    description: 'Calculate roof replacement costs in South Florida. Get instant estimates based on your roof size, material, and pitch. Free quotes available.',
    canonical: 'https://allphaseconstructionfl.com/roof-cost-calculator'
  },
  '/pricing-guide': {
        title: 'Roof Pricing Guide | All Phase USA',
    description: 'Calculate roof replacement costs in South Florida. Get instant estimates based on your roof size, material, and pitch. Free quotes available.',
    canonical: 'https://allphaseconstructionfl.com/roof-cost-calculator'
  },
  '/blog': {
    title: 'Roofing Blog | Expert Tips from All Phase Construction USA',
    description: 'Expert roofing tips, guides, and news for South Florida homeowners. Learn about roof maintenance, materials, costs, and hurricane preparation.',
    canonical: 'https://allphaseconstructionfl.com/blog'
  },
  '/reviews': {
    title: 'Customer Reviews | All Phase USA',
    description: 'Read verified customer reviews and testimonials from homeowners across Broward and Palm Beach Counties who trust All Phase Construction USA.',
    canonical: 'https://allphaseconstructionfl.com/reviews'
  },
  '/projects': {
    title: 'Our Projects | All Phase USA',
    description: 'View completed roofing projects across South Florida. See our quality workmanship on residential and commercial properties.',
    canonical: 'https://allphaseconstructionfl.com/projects'
  },
  '/residential-roofing': {
    title: 'Residential Roofing Services | All Phase USA',
    description: 'Expert residential roofing in Broward & Palm Beach Counties. Tile, shingle, metal, and flat roofing for homes. Licensed, insured, HVHZ certified.',
    canonical: 'https://allphaseconstructionfl.com/residential-roofing'
  },
  '/commercial-roofing': {
    title: 'Commercial Roofing Services | All Phase USA',
    description: 'Professional commercial roofing contractor in South Florida. Flat roofs, TPO, modified bitumen, and metal roofing systems for businesses.',
    canonical: 'https://allphaseconstructionfl.com/commercial-roofing'
  },
  '/roof-inspection': {
    title: 'Professional Roof Inspection Services | All Phase USA',
    description: 'Comprehensive roof inspections in South Florida. Insurance documentation, storm damage assessment, and pre-purchase inspections by licensed professionals.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection'
  },
  '/roof-replacement-process': {
    title: 'Roof Replacement Process | All Phase USA',
    description: 'Learn our proven 10-step roof replacement process. From inspection to final warranty, see how we deliver quality roofing projects in South Florida.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-process'
  },
  '/roof-replacement': {
    title: 'Roof Replacement Deerfield Beach | Licensed Contractor | All Phase Construction USA',
    description: 'Roof replacement in Broward & Palm Beach County. Licensed CCC/CGC contractor. HVHZ-compliant installation. Call (754) 227-5605 for free estimate.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement'
  },
  '/roof-maintenance-programs': {
    title: 'Roof Maintenance Programs | All Phase USA',
    description: 'Proactive roof maintenance programs for South Florida properties. Extend roof life, prevent leaks, and maintain warranty compliance.',
    canonical: 'https://allphaseconstructionfl.com/roof-maintenance-programs'
  },
  '/tile-roofing': {
    title: 'Tile Roofing Installation & Repair | All Phase USA',
    description: 'Expert tile roofing services in South Florida. Concrete and clay tile installation, repair, and maintenance. HVHZ compliant workmanship.',
    canonical: 'https://allphaseconstructionfl.com/tile-roofing'
  },
  '/metal-roofing': {
    title: 'Metal Roofing Installation & Repair | All Phase USA',
    description: 'Standing seam and metal roofing systems in South Florida. Energy-efficient, hurricane-resistant metal roofs with superior longevity.',
    canonical: 'https://allphaseconstructionfl.com/metal-roofing'
  },
  '/shingle-roofing': {
    title: 'Shingle Roofing Broward & Palm Beach | All Phase USA',
    description: 'Asphalt shingle roofing services in Broward & Palm Beach Counties. Architectural shingles, 3-tab shingles, and impact-resistant options.',
    canonical: 'https://allphaseconstructionfl.com/shingle-roofing'
  },
  '/flat-roofing': {
    title: 'Flat Roofing Services | All Phase USA',
    description: 'Commercial and residential flat roofing in South Florida. TPO, EPDM, modified bitumen, and built-up roofing systems.',
    canonical: 'https://allphaseconstructionfl.com/flat-roofing'
  },
    '/roof-repair': {
    title: 'Emergency Roof Repair Services | All Phase USA',
    description: 'Professional roof repair across South Florida. Leak detection, tile repair, shingle replacement. Licensed, same-day service. Call (754) 227-5605 now.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair'
  },
    '/roofing-services': {
    title: 'Roofing Services | Residential & Commercial | All Phase USA',
    description: 'Full-service roofing contractor in Deerfield Beach. Residential and commercial roofing, repair, replacement, and maintenance. Licensed & insured.',
    canonical: 'https://allphaseconstructionfl.com/roofing-services'
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
  '/locations/fort-lauderdale': {
    title: 'Fort Lauderdale Roofing Contractor | HVHZ Certified | All Phase Construction USA',
    description: 'Trusted roofing contractor in Fort Lauderdale, FL. HVHZ certified, dual-licensed (CCC & CGC). Tile, metal, shingle, flat & commercial roofing. 20+ years experience. Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale'
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
    title: 'Fort Lauderdale Roof Repair | HVHZ-Certified | All Phase Construction USA',
    description: 'Expert roof repair in Fort Lauderdale, FL. HVHZ-certified, fast response, licensed & insured. Tile, shingle, metal & flat roof repairs. Free inspection.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/fort-lauderdale'
  },
    '/roof-repair/deerfield-beach': {
    title: 'Deerfield Beach Roof Repair | Licensed Contractor | All Phase Construction USA',
    description: 'Licensed roof repair in Deerfield Beach, FL. Inspection-first diagnostics, HVHZ-compliant repairs, HOA documentation, and insurance coordination. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/deerfield-beach'
  },
    '/roof-repair/pompano-beach': {
    title: 'Pompano Beach Roof Repair | Licensed Contractor | All Phase Construction USA',
    description: 'Licensed roof repair in Pompano Beach, FL. Inspection-first diagnostics, HVHZ-compliant repairs, HOA documentation, and insurance coordination. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/pompano-beach'
  },
    '/frequently-asked-questions': {
    title: 'Roofing FAQ South Florida | All Phase USA',
    description: 'Answers to common roofing questions for South Florida homeowners — repair vs replacement, insurance, HVHZ requirements, materials, and costs. Licensed contractor. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/frequently-asked-questions'
  },
    '/easy-payments': {
    title: 'Easy Payments & Financing Options | All Phase USA',
    description: 'Flexible financing options for roofing projects in South Florida. Easy payment plans available for roof replacement, repair, and maintenance.',
    canonical: 'https://allphaseconstructionfl.com/easy-payments'
  },
  '/our-location': {
    title: 'Our Deerfield Beach Location | All Phase USA',
    description: 'Visit All Phase Construction USA at 590 Goolsby Blvd, Deerfield Beach, FL 33442. Serving Broward and Palm Beach Counties.',
    canonical: 'https://allphaseconstructionfl.com/our-location'
  },
  '/learning-center': {
    title: 'Learning Center | Roofing Guides & Resources | All Phase USA',
    description: 'Roofing guides, resources, and educational content for South Florida homeowners from All Phase Construction USA.',
    canonical: 'https://allphaseconstructionfl.com/learning-center'
  },
  '/locations/deerfield-beach/service-area': {
    title: 'Service Areas | All Phase USA',
    description: 'All Phase Construction USA serves over 50 cities throughout Broward County and Palm Beach County from our Deerfield Beach headquarters.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area'
  },
  '/how-to-hire-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor in Florida | Expert Guide',
    description: 'Expert guide on hiring a roofing contractor in Florida. Learn what to look for, questions to ask, and red flags to avoid.',
    canonical: 'https://allphaseconstructionfl.com/how-to-hire-roofing-contractor'
  },
  // ══════════════════════════════════════════════════════════════
  // ROOF INSPECTION CITY PAGES — /roof-inspection/:city
  // ══════════════════════════════════════════════════════════════
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
      title: `${blogTitle} | All Phase Construction USA Blog`,
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
