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
import { BEST_ROOFERS_DATA } from '../data/bestRoofersData';

/**
 * Returns correct wind-zone compliance language for a given city slug.
 * Reads county from src/data/locations.ts (single source of truth).
 * Falls back to WBDR language if the slug is unknown.
 */
function getComplianceLabel(slug: string): string {
  const location = getLocationBySlug(slug);
  return location?.county === 'Broward' ? 'HVHZ-certified' : 'Florida wind-code compliant';
}

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
    title: 'All Phase Construction USA | South Florida Roofer Since 2005',
    description: 'Free roof inspection in 24 hours. Dual-licensed South Florida roofer since 2005. 2,500+ roofs, A+ BBB, HVHZ-certified. Call (754) 227-5605.',
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
    title: 'South Florida Roof Cost Calculator | Free Florida Roof Replacement Estimate 2026',
    description: 'Free South Florida roof cost calculator and roof replacement estimate for Broward & Palm Beach County, Florida. 2026 HVHZ pricing for shingle, tile, metal & flat roofs — no signup.',
    canonical: 'https://allphaseconstructionfl.com/roof-cost-calculator'
  },
  '/pricing-guide': {
        title: 'South Florida Roof Pricing Guide 2026 | All Phase USA',
    description: 'South Florida roof replacement costs broken down by material, size, and scope. Know what to expect before you call a contractor.',
    canonical: 'https://allphaseconstructionfl.com/pricing-guide'
  },
  '/blog': {
    title: 'Roofing Blog | Expert Tips from All Phase Construction USA',
    description: 'Roofing tips, cost guides, and hurricane prep for South Florida homeowners. Written by a dual-licensed contractor with 20+ years experience.',
    canonical: 'https://allphaseconstructionfl.com/blog'
  },
  '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home': {
    title: 'Wind Mitigation Guide | Save 20-60% on Insurance',
    description: 'How wind mitigation inspections save South Florida homeowners thousands on insurance. What inspectors check and which upgrades have the biggest ROI.',
    canonical: 'https://allphaseconstructionfl.com/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home'
  },
  '/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes': {
    title: 'Flat Roofs in Florida: Pros & Cons for Homeowners',
    description: 'Are flat roofs good for Florida homes? Pros and cons from a licensed roofer covering drainage, hurricane performance, costs, and materials.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes'
  },
  '/reviews': {
    title: 'Roofing Reviews | 4.8 Stars, 138+ Verified | All Phase',
    description: '4.8 stars from 138 verified South Florida homeowners. See why Broward & Palm Beach County residents choose All Phase Construction USA.',
    canonical: 'https://allphaseconstructionfl.com/reviews'
  },
  '/projects': {
    title: 'Roofing Projects | South Florida Portfolio | All Phase USA',
    description: 'Completed roofing projects across South Florida - tile, metal, shingle & flat. See our work before you call. Licensed & HVHZ-certified.',
    canonical: 'https://allphaseconstructionfl.com/projects'
  },
  '/residential-roofing': {
    title: 'Residential Roofing South Florida | All Phase Construction',
    description: 'Expert residential roofing in Broward & Palm Beach Counties. Tile, shingle, metal, and flat roofing for homes. Licensed, insured, HVHZ certified.',
    canonical: 'https://allphaseconstructionfl.com/residential-roofing'
  },
  '/commercial-roofing': {
    title: 'Commercial Roofing South Florida | All Phase USA',
    description: 'TPO, PVC, modified bitumen & metal roofing for South Florida businesses. Dual-licensed CCC/CGC. Free commercial roof assessment.',
    canonical: 'https://allphaseconstructionfl.com/commercial-roofing'
  },
  '/roof-inspection': {
    title: 'Free Roof Inspection South Florida | All Phase Construction',
    description: 'Free 21-point roof inspections in South Florida. Storm damage, insurance docs & pre-purchase reports. Dual-licensed, HVHZ-certified. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection'
  },
  '/roof-replacement-process': {
    title: 'Roof Replacement Process | 10-Step Guide | All Phase',
    description: 'See our 10-step roof replacement process - from inspection to final warranty. No surprises. South Florida dual-licensed roofing contractor.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-process'
  },
  '/roof-replacement': {
    title: 'Roof Replacement South Florida | Free Estimate | All Phase',
    description: 'South Florida dual-licensed, HVHZ-certified roof replacement. Free inspection + easy financing. Tile, metal, shingle & flat. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement'
  },
  '/roof-maintenance-programs': {
    title: 'Roof Maintenance Programs South Florida | All Phase USA',
    description: 'Extend your roof\'s life with a proactive maintenance plan. Prevent leaks, maintain warranties, stay code-compliant in South Florida.',
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
    title: 'Shingle Roofing South Florida | HVHZ-Certified | All Phase',
    description: 'South Florida shingle roofing: architectural, 3-tab & impact-rated. HVHZ-certified, free estimate. Broward & Palm Beach County. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/shingle-roofing'
  },
  '/flat-roofing': {
    title: 'Flat Roofing South Florida | TPO, PVC & EPDM | All Phase',
    description: 'TPO, PVC, EPDM & modified bitumen flat roofing in South Florida. Residential & commercial. Dual-licensed CCC/CGC. Free assessment.',
    canonical: 'https://allphaseconstructionfl.com/flat-roofing'
  },
    '/roof-repair': {
    title: 'Roof Repair South Florida | Storm & Leak Experts',
        description: 'Roof repair in Broward & Palm Beach County. Storm damage, leaks, tile & shingle repairs. HVHZ-certified, dual-licensed. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair'
  },
    '/licensed-roofing-contractor': {
    title: 'Licensed Roofing Contractor South Florida | All Phase',
    description: 'How to verify a licensed roofing contractor in Florida. CCC vs CGC licenses, DBPR lookup, insurance requirements, and why licensing matters in South Florida\'s hurricane zone.',
    canonical: 'https://allphaseconstructionfl.com/licensed-roofing-contractor'
  },
    '/roofing-services': {
    title: 'Roofing Services South Florida | All Phase USA',
    description: 'Complete roofing in Broward & Palm Beach County. Tile, metal, shingle, flat roofs. HVHZ-certified, dual-licensed. 2,500+ projects.',
    canonical: 'https://allphaseconstructionfl.com/roofing-services'
  },
  '/locations/deerfield-beach/how-to-hire-a-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor | All Phase USA',
    description: 'Hiring a roofer in South Florida? Know what licenses to check, questions to ask, and scams to avoid. Free advice from a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/how-to-hire-a-roofing-contractor'
  },
  '/locations/deerfield-beach/best-roofers-deerfield-beach': {
    title: '5 Best Roofers in Deerfield Beach, FL (2026 Reviewed)',
    description: 'We compared the 5 best-rated roofers in Deerfield Beach by licenses, HVHZ compliance, reviews & pricing. Updated for 2026 - see which Broward County contractors made the cut.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach'
  },
  '/locations/fort-lauderdale/best-roofers-fort-lauderdale': {
    title: 'Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase',
    description: 'Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale'
  },
  '/locations/west-palm-beach/best-roofers-west-palm-beach': {
    title: 'Top 5 Roofers in West Palm Beach FL (2026) | All Phase',
    description: 'Looking for the best roofers in West Palm Beach? Top 5 licensed roofing contractors in Palm Beach County reviewed. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach'
  },
  '/locations/boca-raton/best-roofers-boca-raton': {
    title: 'Top 5 Roofers in Boca Raton FL (2026) | All Phase',
    description: 'Looking for the best roofers in Boca Raton? Top 5 licensed roofing contractors in Palm Beach County reviewed. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton'
  },
  '/locations/coral-springs/best-roofers-coral-springs': {
    title: 'Top 5 Roofers in Coral Springs FL (2026) | All Phase',
    description: 'Looking for the best roofers in Coral Springs? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs'
  },
  '/locations/wellington/best-roofers-wellington': {
    title: '5 Best Roofers in Wellington, FL (2026) | All Phase',
    description: 'Top 5 roofing contractors in Wellington, FL for 2026. Verified licenses, real reviews, and proven track records across 33414 and 33449.',
    canonical: 'https://allphaseconstructionfl.com/locations/wellington/best-roofers-wellington',
    ogTitle: '5 Best Roofers in Wellington, FL (2026) | All Phase',
    ogDescription: 'Top 5 roofing contractors in Wellington, FL for 2026. Verified licenses, real reviews, and proven track records.'
  },
  '/roof-repair/fort-lauderdale': {
    title: 'Fort Lauderdale Roof Repair | Fast Response | All Phase USA',
    description: 'Roof repair in Fort Lauderdale, FL. Storm damage, leaks, tile & shingle repairs. HVHZ-certified, dual-licensed. Free inspection. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/fort-lauderdale'
  },
    '/roof-repair/deerfield-beach': {
    title: 'Deerfield Beach Roof Repair | All Phase USA',
    description: 'Emergency roof repair in Deerfield Beach. HVHZ-compliant, inspection-first diagnostics, insurance coordination. Licensed contractor. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/deerfield-beach'
  },
    '/roof-repair/pompano-beach': {
    title: 'Pompano Beach Roof Repair | All Phase USA',
    description: 'Emergency roof repair in Pompano Beach. HVHZ-compliant, inspection-first diagnostics, insurance coordination. Licensed contractor. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/pompano-beach'
  },
  '/roof-repair/west-palm-beach': {
    title: 'West Palm Beach Roof Repair | Fast Response | All Phase USA',
    description: 'Expert roof repair in West Palm Beach, FL. Tile, shingle, metal & flat repairs. Storm damage specialists. Licensed & insured, free inspection. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/west-palm-beach'
  },
  '/roof-repair/boca-raton': {
    title: 'Boca Raton Roof Repair | Licensed Contractor | All Phase USA',
    description: 'Professional roof repair in Boca Raton. Tile, shingle & flat roof leaks, storm damage, flashing failures. Licensed & insured. Free inspection. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/boca-raton'
  },
  '/roof-repair/coral-springs': {
    title: 'Coral Springs Roof Repair | HVHZ-Certified | All Phase USA',
    description: 'Roof repair in Coral Springs, FL. Leaks, storm damage, tile & shingle repairs by a dual-licensed HVHZ contractor. Free inspection. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/coral-springs'
  },
    '/frequently-asked-questions': {
    title: 'Roofing FAQ South Florida | All Phase USA',
    description: 'South Florida roofing FAQs - repair vs replacement, HVHZ, insurance, materials & costs. Licensed contractor answers. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/frequently-asked-questions'
  },
    '/easy-payments': {
    title: 'Easy Payments & Financing Options | All Phase USA',
    description: 'Financing available for your South Florida roofing project. Major credit cards accepted and payment plans to fit any budget.',
    canonical: 'https://allphaseconstructionfl.com/easy-payments'
  },
  '/our-location': {
    title: 'Our Deerfield Beach Location | All Phase USA',
    description: 'All Phase Construction USA - 590 Goolsby Blvd, Deerfield Beach, FL 33442. Serving all of Broward & Palm Beach County. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/our-location'
  },
  '/learning-center': {
    title: 'Learning Center | Roofing Guides & Resources | All Phase USA',
    description: 'Roofing guides, cost breakdowns, and homeowner tips for South Florida. Hurricane prep, materials, inspections - all in one place. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/learning-center'
  },
  '/locations/deerfield-beach/service-area': {
    title: 'Service Areas | All Phase Construction USA',
    description: 'All Phase Construction USA serves 50+ cities in Broward & Palm Beach County. HVHZ-certified, dual-licensed roofing from our Deerfield Beach HQ.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area'
  },
        '/locations/deerfield-beach': {
    title: 'Deerfield Beach Roofer | Local HQ Since 2005 | All Phase USA',
    description: 'Deerfield Beach\'s #1 rated roofing contractor - headquartered here since 2005. We\'ve completed 2,500+ roofs in Broward County. HVHZ-certified, dual-licensed. Free same-day inspections - (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach'
  },
  '/how-to-hire-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor in Florida | Expert Guide',
    description: 'How to hire a roofing contractor in Florida - licenses to verify, questions to ask, red flags to avoid. Free guide from a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/how-to-hire-roofing-contractor'
  },
  '/privacy': {
    title: 'Privacy Policy | All Phase Construction USA',
    description: 'Privacy policy for All Phase Construction USA. Learn how we collect, use, and protect your personal information.',
    canonical: 'https://allphaseconstructionfl.com/privacy'
  },
  '/terms': {
    title: 'Terms of Service | All Phase Construction USA',
    description: 'Terms of service for All Phase Construction USA website and services.',
    canonical: 'https://allphaseconstructionfl.com/terms'
  },
  '/accessibility': {
    title: 'Accessibility | All Phase Construction USA',
    description: 'Information about accessibility features on our website. We are committed to making our content accessible to all users.',
    canonical: 'https://allphaseconstructionfl.com/accessibility'
  },
  '/south-florida-roofing-reviews': {
    title: 'Best Roofing Companies in South Florida (2026)',
    description: 'Comparison of top-rated roofing companies in South Florida for 2026. Licensed contractor reviews with cost data and HVHZ certification info.',
    canonical: 'https://allphaseconstructionfl.com/south-florida-roofing-reviews'
  },
  '/broward-county-roof-replacement-guide': {
    title: 'Broward County Roof Replacement Guide (2026)',
    description: 'Complete Broward County roof replacement guide for 2026. HVHZ requirements, 25% rule, costs by material, insurance claims help. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/broward-county-roof-replacement-guide'
  },
  '/roof-replacement-cost-florida': {
    title: 'Roof Replacement Cost in Florida (2026) | Prices',
    description: 'What does a roof replacement cost in Florida in 2026? Complete pricing by material, county, and HVHZ zone. Get accurate estimates for your area.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-cost-florida'
  },
  '/florida-roof-insurance-claims-guide': {
    title: 'Florida Roof Insurance Claims Guide (2026)',
    description: 'Navigate Florida roof insurance claims with confidence. Step-by-step guide covering documentation, public adjusters, 25% rule, and contractor coordination.',
    canonical: 'https://allphaseconstructionfl.com/florida-roof-insurance-claims-guide'
  },
  '/boca-raton-roof-replacement-guide': {
    title: 'Boca Raton Roof Replacement Guide (2026) | Costs',
    description: 'Everything you need to know about roof replacement in Boca Raton. HVHZ requirements, HOA guidelines, costs by material, and top contractor recommendations.',
    canonical: 'https://allphaseconstructionfl.com/boca-raton-roof-replacement-guide'
  },
  '/palm-beach-county-roof-replacement-guide': {
    title: 'Palm Beach County Roof Replacement Guide (2026)',
    description: 'Complete Palm Beach County roof replacement guide. City-by-city costs, HVHZ zones, permit requirements, and top-rated contractor recommendations for 2026.',
    canonical: 'https://allphaseconstructionfl.com/palm-beach-county-roof-replacement-guide'
  },
  '/roof-replacement-cost-deerfield-beach': {
    title: 'Roof Replacement Cost in Deerfield Beach (2026)',
    description: '2026 Deerfield Beach roof replacement pricing by material — shingle, tile, and metal — including HVHZ code costs, permits, and insurance options. Free 24-hour quotes.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-cost-deerfield-beach'
  },
  '/boca-raton-roof-replacement-timeline': {
    title: 'Boca Raton Roof Replacement Timeline: Day-by-Day (2026)',
    description: 'How long does a roof replacement take in Boca Raton? A phase-by-phase day-by-day timeline from inspection to final inspection, with permit and weather contingencies.',
    canonical: 'https://allphaseconstructionfl.com/boca-raton-roof-replacement-timeline'
  },
  '/coral-springs-roof-permit-guide': {
    title: 'Coral Springs Roof Permit Guide (2026) | Fees & Timeline',
    description: 'When you need a roofing permit in Coral Springs, what the city requires, how long it takes, fees, required inspections, and HVHZ code requirements.',
    canonical: 'https://allphaseconstructionfl.com/coral-springs-roof-permit-guide'
  },
  '/pompano-beach-roof-inspection': {
    title: 'Pompano Beach Roof Inspection: 9 Signs You Need a New Roof (2026)',
    description: 'The nine clearest signs that your Pompano Beach roof has reached end-of-life — from curling shingles to insurance non-renewal — plus what to do next.',
    canonical: 'https://allphaseconstructionfl.com/pompano-beach-roof-inspection'
  },
  '/delray-beach-roof-overlay-vs-tear-off': {
    title: "Why You Can't Overlay a Roof in Delray Beach (HVHZ Code)",
    description: "A Delray Beach contractor pitched a roof-over to save money? Florida HVHZ code makes that almost impossible. Here is the exact code section and what to do instead.",
    canonical: 'https://allphaseconstructionfl.com/delray-beach-roof-overlay-vs-tear-off'
  },
  '/metal-roofing-cost-fort-lauderdale': {
    title: 'Metal Roofing Cost in Fort Lauderdale (2026)',
    description: 'Real 2026 metal roof prices in Fort Lauderdale, FL by panel type. HVHZ code, coastal aluminum upgrades, insurance credits, and 50-year warranty options explained.',
    canonical: 'https://allphaseconstructionfl.com/metal-roofing-cost-fort-lauderdale'
  },
  '/tile-roof-replacement-wellington': {
    title: 'Tile Roof Replacement in Wellington (2026) | HOA + Weight Load',
    description: '2026 Wellington tile roof pricing for concrete and clay, with HOA architectural approval, engineered weight load review, and HVHZ attachment requirements explained.',
    canonical: 'https://allphaseconstructionfl.com/tile-roof-replacement-wellington'
  },
  '/standing-seam-metal-roof-jupiter': {
    title: 'Standing Seam Metal Roof in Jupiter (2026 Coastal Guide)',
    description: 'Why aluminum standing seam is the right metal roof for coastal Jupiter, FL — with 2026 pricing, HVHZ code, hurricane resilience, and Palm Beach County insurance credits.',
    canonical: 'https://allphaseconstructionfl.com/standing-seam-metal-roof-jupiter'
  },
  '/flat-roof-tpo-vs-pvc-west-palm-beach': {
    title: 'Flat Roof TPO vs PVC in West Palm Beach (2026)',
    description: 'TPO or PVC for your West Palm Beach flat roof? 2026 pricing, 25-year lifespan, chemical and ponding resistance, and the HVHZ code that decides which one fits.',
    canonical: 'https://allphaseconstructionfl.com/flat-roof-tpo-vs-pvc-west-palm-beach'
  },
  '/switch-from-shingles-to-metal-plantation': {
    title: 'Switch From Shingles to Metal in Plantation? (2026 Guide)',
    description: 'Should you replace your Plantation shingle roof with metal in 2026? Side-by-side cost, lifespan, insurance, HOA, and 40-year total-cost-of-ownership math.',
    canonical: 'https://allphaseconstructionfl.com/switch-from-shingles-to-metal-plantation'
  },
  '/hurricane-roof-damage-inspection-hollywood': {
    title: 'Hurricane Roof Damage Inspection in Hollywood, FL (2026)',
    description: 'What to do after a hurricane damages your Hollywood, FL roof — the 10-point inspection checklist, insurance documentation, and the 24-hour window that protects your claim.',
    canonical: 'https://allphaseconstructionfl.com/hurricane-roof-damage-inspection-hollywood'
  },
  '/wind-damage-insurance-claim-boynton-beach': {
    title: 'Wind Damage Insurance Claim in Boynton Beach (Step-by-Step Guide)',
    description: 'The 9-step Boynton Beach wind damage roof insurance claim process — filing windows, hurricane deductibles, law-and-ordinance coverage, and how to avoid common underpayments.',
    canonical: 'https://allphaseconstructionfl.com/wind-damage-insurance-claim-boynton-beach'
  },
  '/emergency-roof-tarp-lighthouse-point': {
    title: 'Emergency Roof Tarp in Lighthouse Point (24-Hour Service)',
    description: 'Emergency roof tarp service in Lighthouse Point, FL — five minutes from our Deerfield Beach HQ. When to call, what it costs, and how insurance reimbursement works.',
    canonical: 'https://allphaseconstructionfl.com/emergency-roof-tarp-lighthouse-point'
  },
  '/tree-damage-roof-repair-parkland': {
    title: 'Tree Damage Roof Repair in Parkland, FL (2026)',
    description: 'How to handle tree-limb roof damage in Parkland, FL — the 7 damage patterns, insurance coverage, repair vs replace, and the 24-hour documentation window that protects your claim.',
    canonical: 'https://allphaseconstructionfl.com/tree-damage-roof-repair-parkland'
  },
  '/storm-damage-repair-or-replace-davie': {
    title: 'Storm Damage: Repair or Replace in Davie? (2026 Decision Matrix)',
    description: 'Repair or replace a storm-damaged Davie, FL roof? Decision matrix, Florida matching statute, law-and-ordinance coverage, and the insurance angle that decides the call.',
    canonical: 'https://allphaseconstructionfl.com/storm-damage-repair-or-replace-davie'
  },
  '/annual-roof-inspection-sunrise': {
    title: 'Annual Roof Inspection in Sunrise, FL (10-Point Checklist)',
    description: '10-point annual roof inspection checklist for Sunrise, FL homeowners. What real inspections cover, what they cost, and how they save thousands in interior damage.',
    canonical: 'https://allphaseconstructionfl.com/annual-roof-inspection-sunrise'
  },
  '/wind-mitigation-inspection-palm-beach-gardens': {
    title: 'Wind Mitigation Inspection in Palm Beach Gardens (2026 Savings Guide)',
    description: 'How a Florida wind mitigation inspection saves Palm Beach Gardens homeowners $400 to $2,000 per year on insurance — every credit category on the OIR-B1-1802 form explained.',
    canonical: 'https://allphaseconstructionfl.com/wind-mitigation-inspection-palm-beach-gardens'
  },
  '/roof-maintenance-tips-miramar': {
    title: '10 Roof Maintenance Tips for Miramar Homeowners (2026)',
    description: '10 practical Miramar roof maintenance habits that extend roof life, prevent leaks, and protect insurance renewability. The full pre-hurricane checklist.',
    canonical: 'https://allphaseconstructionfl.com/roof-maintenance-tips-miramar'
  },
  '/four-point-inspection-roof-lake-worth-beach': {
    title: '4-Point Inspection Roof Section in Lake Worth Beach (2026)',
    description: 'How the Florida 4-point inspection roof section works for Lake Worth Beach homeowners, what carriers require, and how to avoid a non-renewal letter.',
    canonical: 'https://allphaseconstructionfl.com/four-point-inspection-roof-lake-worth-beach'
  },
  '/roof-leak-detection-weston': {
    title: 'Roof Leak Detection in Weston, FL (2026 Guide)',
    description: 'How to find the source of a roof leak in a Weston home, the 8 most common Florida leak sources, and when to repair vs file an insurance claim.',
    canonical: 'https://allphaseconstructionfl.com/roof-leak-detection-weston'
  },
  '/pre-listing-roof-certification-coconut-creek': {
    title: 'Pre-Listing Roof Certification in Coconut Creek (2026)',
    description: 'Why Coconut Creek listings need a pre-listing roof certification before going to market in 2026, what it includes, and how it prevents deals from collapsing at inspection.',
    canonical: 'https://allphaseconstructionfl.com/pre-listing-roof-certification-coconut-creek'
  },
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

    // Handle /locations/:citySlug/best-roofers-:citySlug pages
    const bestRoofersMatch = slug.match(/^([^/]+)\/best-roofers-(.+)$/);
    if (bestRoofersMatch) {
      const citySlug = bestRoofersMatch[1];
      const rooferData = BEST_ROOFERS_DATA[citySlug];
      if (rooferData) {
        return {
          title: rooferData.pageTitle,
          description: rooferData.metaDescription,
          canonical: `https://allphaseconstructionfl.com/locations/${citySlug}/best-roofers-${citySlug}`,
          ogTitle: rooferData.pageTitle,
          ogDescription: rooferData.metaDescription
        };
      }
    }

    // Fallback if location not found in locations.ts
    return {
      title: `${CITY_NAMES[slug] || slug} Roofing Contractor | All Phase Construction USA`,
      description: `Licensed roofing in ${CITY_NAMES[slug] || slug}, FL. ${getComplianceLabel(slug)}, dual-licensed CCC/CGC. Tile, metal, shingle & flat. Free inspection. (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/locations/${slug}`
    };
  }

    // Dynamic /roof-repair/:slug handler
  if (normalizedPath.startsWith('/roof-repair/')) {
    const slug = normalizedPath.replace('/roof-repair/', '').replace(/\/$/, '');
    const cityName = CITY_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `Roof Repair ${cityName} FL | Licensed & ${getComplianceLabel(slug)} | All Phase`,
            description: `Fast, licensed roof repair in ${cityName}. Storm damage, leaks, tile, shingle & flat repairs. ${getComplianceLabel(slug)} dual-licensed contractor. Free inspection. (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/roof-repair/${slug}`,
      ogTitle: `Roof Repair ${cityName} FL | Licensed & ${getComplianceLabel(slug)} | All Phase`,
            ogDescription: `Emergency roof repair in ${cityName}, FL. Leaks, storm damage & flashing failures. ${getComplianceLabel(slug)}, dual-licensed CCC/CGC contractor. Call (754) 227-5605.`,
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
    description: 'Licensed roofing contractor in South Florida. HVHZ-certified, dual-licensed CCC/CGC. Tile, metal, shingle & flat roofing. Free inspection. (754) 227-5605.',
    canonical: `https://allphaseconstructionfl.com${cleanPath}`
  };
}
