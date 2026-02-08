import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * NUCLEAR METADATA SYSTEM
 *
 * This component FORCE-INJECTS metadata on every single route change.
 * No dynamic logic, no patterns - just hard-coded switch-case statements.
 *
 * This runs BEFORE any other component can interfere with the title.
 */
export default function NuclearMetadata() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    let title = '';
    let description = '';
    let canonical = '';

    // NUCLEAR SWITCH-CASE LOGIC - HARD-CODED TITLES

    // ========== HOMEPAGE ==========
    if (path === '/') {
      title = 'All Phase Construction USA | Dual-Licensed Roofing Specialist';
      description = 'Licensed roofing company in Broward & Palm Beach County. Expert roof replacement, repair & inspection. Tile, metal, shingle, flat. Call (754) 227-5605';
      canonical = 'https://allphaseconstructionfl.com';
    }

    // ========== CORE PAGES ==========
    else if (path === '/contact') {
      title = 'Contact All Phase Construction | Professional Roofing in South Florida';
      description = 'Contact All Phase Construction USA for roofing services in Broward & Palm Beach Counties. Call (754) 227-5605 or request a free estimate online.';
      canonical = 'https://allphaseconstructionfl.com/contact';
    }
    else if (path === '/about-us') {
      title = 'About Us | All Phase Construction USA';
      description = 'Dual-licensed roofing contractor serving South Florida since 2005. State Certified Roofing Contractor (CCC1331464) and General Contractor (CGC1526236).';
      canonical = 'https://allphaseconstructionfl.com/about-us';
    }
    else if (path === '/roof-cost-calculator' || path === '/pricing-guide') {
      title = 'Roof Cost Calculator | All Phase Construction USA';
      description = 'Calculate roof replacement costs in South Florida. Get instant estimates based on your roof size, material, and pitch. Free quotes available.';
      canonical = 'https://allphaseconstructionfl.com/roof-cost-calculator';
    }
    else if (path === '/blog') {
      title = 'Roofing Blog | Expert Tips from All Phase Construction USA';
      description = 'Expert roofing tips, guides, and news for South Florida homeowners. Learn about roof maintenance, materials, costs, and hurricane preparation.';
      canonical = 'https://allphaseconstructionfl.com/blog';
    }
    else if (path === '/reviews') {
      title = 'Customer Reviews | All Phase Construction USA';
      description = 'Read verified customer reviews and testimonials from homeowners across Broward and Palm Beach Counties who trust All Phase Construction USA.';
      canonical = 'https://allphaseconstructionfl.com/reviews';
    }
    else if (path === '/projects') {
      title = 'Our Projects | All Phase Construction USA';
      description = 'View completed roofing projects across South Florida. See our quality workmanship on residential and commercial properties.';
      canonical = 'https://allphaseconstructionfl.com/projects';
    }

    // ========== SERVICE PAGES ==========
    else if (path === '/residential-roofing') {
      title = 'Residential Roofing Services | All Phase Construction USA';
      description = 'Expert residential roofing in Broward & Palm Beach Counties. Tile, shingle, metal, and flat roofing for homes. Licensed, insured, HVHZ certified.';
      canonical = 'https://allphaseconstructionfl.com/residential-roofing';
    }
    else if (path === '/commercial-roofing') {
      title = 'Commercial Roofing Services | All Phase Construction USA';
      description = 'Professional commercial roofing contractor in South Florida. Flat roofs, TPO, modified bitumen, and metal roofing systems for businesses.';
      canonical = 'https://allphaseconstructionfl.com/commercial-roofing';
    }
    else if (path === '/roof-inspection') {
      title = 'Professional Roof Inspection Services | All Phase Construction USA';
      description = 'Comprehensive roof inspections in South Florida. Insurance documentation, storm damage assessment, and pre-purchase inspections by licensed professionals.';
      canonical = 'https://allphaseconstructionfl.com/roof-inspection';
    }
    else if (path === '/roof-replacement-process') {
      title = 'Roof Replacement Process | All Phase Construction USA';
      description = 'Learn our proven 10-step roof replacement process. From inspection to final warranty, see how we deliver quality roofing projects in South Florida.';
      canonical = 'https://allphaseconstructionfl.com/roof-replacement-process';
    }
    else if (path === '/roof-maintenance-programs') {
      title = 'Roof Maintenance Programs | All Phase Construction USA';
      description = 'Proactive roof maintenance programs for South Florida properties. Extend roof life, prevent leaks, and maintain warranty compliance.';
      canonical = 'https://allphaseconstructionfl.com/roof-maintenance-programs';
    }
    else if (path === '/tile-roofing') {
      title = 'Tile Roofing Installation & Repair | All Phase Construction USA';
      description = 'Expert tile roofing services in South Florida. Concrete and clay tile installation, repair, and maintenance. HVHZ compliant workmanship.';
      canonical = 'https://allphaseconstructionfl.com/tile-roofing';
    }
    else if (path === '/metal-roofing') {
      title = 'Metal Roofing Installation & Repair | All Phase Construction USA';
      description = 'Standing seam and metal roofing systems in South Florida. Energy-efficient, hurricane-resistant metal roofs with superior longevity.';
      canonical = 'https://allphaseconstructionfl.com/metal-roofing';
    }
    else if (path === '/shingle-roofing') {
      title = 'Shingle Roofing Installation & Repair | All Phase Construction USA';
      description = 'Asphalt shingle roofing services in Broward & Palm Beach Counties. Architectural shingles, 3-tab shingles, and impact-resistant options.';
      canonical = 'https://allphaseconstructionfl.com/shingle-roofing';
    }
    else if (path === '/flat-roofing') {
      title = 'Flat Roofing Services | All Phase Construction USA';
      description = 'Commercial and residential flat roofing in South Florida. TPO, EPDM, modified bitumen, and built-up roofing systems.';
      canonical = 'https://allphaseconstructionfl.com/flat-roofing';
    }

    // ========== LOCATION PAGES ==========
    else if (path === '/locations/deerfield-beach') {
      title = 'Deerfield Beach Roofing Hub | All Phase Construction USA';
      description = 'Our Deerfield Beach headquarters at 590 Goolsby Blvd serves 51 cities across Broward & Palm Beach Counties. Dual-licensed roofing contractor.';
      canonical = 'https://allphaseconstructionfl.com/locations/deerfield-beach';
    }
    else if (path === '/locations/deerfield-beach/service-area') {
      title = 'Service Areas | All Phase Construction USA';
      description = 'Complete list of service areas in Broward & Palm Beach Counties. All cities served from our Deerfield Beach office with consistent supervision and code-compliant roofing.';
      canonical = 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area';
    }

    // ========== TOP 5 ROOFER PAGES (Hard-coded for each city) ==========
    else if (path.includes('/top-5-roofer') || path.includes('/top-roofer')) {
      const cityMatch = path.match(/\/service-area\/([^\/]+)\//);
      if (cityMatch) {
        const slug = cityMatch[1];
        const cityName = getCityName(slug);
        title = `Top 5 Best Roofers in ${cityName}, FL | All Phase Construction USA`;
        description = `Compare the top 5 roofers in ${cityName}, FL. See why All Phase Construction USA ranks #1 with dual licensing, HVHZ certification, and proven results.`;
        canonical = `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/${slug}/top-5-roofer`;
      }
    }

    // ========== SERVICE AREA CITY PAGES (Hard-coded pattern) ==========
    else if (path.startsWith('/locations/deerfield-beach/service-area/')) {
      const parts = path.split('/');
      const slug = parts[4];
      if (slug && !slug.includes('top-5-roofer') && !slug.includes('calculator')) {
        const cityName = getCityName(slug);
        title = `${cityName} Roofing Services | All Phase Construction USA`;
        description = `Looking for a Dual-Licensed Roofing Specialist in ${cityName}? We provide HVHZ-compliant roof repairs and replacements. Get a free estimate!`;
        canonical = `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/${slug}`;
      }
    }

    // ========== CALCULATOR PAGES ==========
    else if (path.includes('/calculator')) {
      const cityMatch = path.match(/\/service-area\/([^\/]+)\//);
      if (cityMatch) {
        const slug = cityMatch[1];
        const cityName = getCityName(slug);
        title = `${cityName} Roof Replacement Cost Calculator | All Phase Construction USA`;
        description = `Calculate roof replacement costs in ${cityName}, FL. Get instant estimates based on your roof size, material, and pitch. Free quotes available.`;
        canonical = `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/${slug}/calculator`;
      }
    }

    // ========== BLOG POSTS ==========
    else if (path.startsWith('/blog/') && path !== '/blog') {
      const slug = path.replace('/blog/', '');
      const blogTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      title = `${blogTitle} | All Phase Construction USA Blog`;
      description = `Read about ${blogTitle.toLowerCase()} from South Florida's dual-licensed roofing experts at All Phase Construction USA.`;
      canonical = `https://allphaseconstructionfl.com/blog/${slug}`;
    }

    // ========== FALLBACK ==========
    else {
      title = 'All Phase Construction USA | Dual-Licensed Roofing Specialist';
      description = 'Licensed roofing company in Broward & Palm Beach County. Expert roof replacement, repair & inspection. Call (754) 227-5605';
      canonical = `https://allphaseconstructionfl.com${path}`;
    }

    // FORCE UPDATE DOCUMENT TITLE - NO DELAYS
    if (title) {
      document.title = title;
    }

    // FORCE UPDATE META DESCRIPTION
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // FORCE UPDATE CANONICAL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // FORCE UPDATE OG TAGS
    updateOrCreateMetaTag('property', 'og:title', title);
    updateOrCreateMetaTag('property', 'og:description', description);
    updateOrCreateMetaTag('property', 'og:url', canonical);
    updateOrCreateMetaTag('property', 'og:type', 'website');

    // FORCE UPDATE TWITTER TAGS
    updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('name', 'twitter:title', title);
    updateOrCreateMetaTag('name', 'twitter:description', description);

    console.log('[NUCLEAR METADATA] Applied:', { path, title });
  }, [location.pathname]);

  return null;
}

// Helper function to get city name from slug
function getCityName(slug: string): string {
  const cityNames: Record<string, string> = {
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

  return cityNames[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Helper function to update or create meta tags
function updateOrCreateMetaTag(attr: string, value: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${value}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
