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
    title: 'All Phase Construction USA | South Florida Roofer Since 2005',
    description: 'Locally owned South Florida roofing contractor with 2,500+ roofs since 2005. Dual-licensed, HVHZ-certified, A+ BBB rated. Get a free same-day roof inspection — call (754) 227-5605.',
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
    title: 'Free Roof Cost Calculator — South Florida 2026 Pricing',
    description: 'Estimate your roof replacement cost in 60 seconds. Our free calculator uses 2026 South Florida pricing for shingle ($350–$500/sq), tile ($600–$1,000/sq), metal & flat roofs. Based on 2,500+ real jobs.',
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
  // ── Blog post meta description overrides (120-160 chars each) ──
  '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home': {
    title: 'Wind Mitigation Guide | Save 20-60% on Insurance',
    description: 'How wind mitigation inspections save South Florida homeowners thousands on insurance. What inspectors check, how to qualify & the best upgrades.',
    canonical: 'https://allphaseconstructionfl.com/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home'
  },
  '/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes': {
    title: 'Flat Roofs in Florida: Pros, Cons & What to Know',
    description: 'Flat roof pros & cons for Florida homes: drainage, hurricane performance, costs & best materials. Advice from a licensed South Florida roofer.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes'
  },
  '/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association': {
    title: 'HOA Roofing Budget Planning | Condo Associations | All Phase',
    description: 'How to plan long-term roofing budgets for your condo or HOA. Avoid special assessments, meet Florida reserve requirements & protect values.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association'
  },
  '/blog/soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa': {
    title: 'Soffit Repair South Florida | All Phase',
    description: 'Soffit repair guide for Broward & Palm Beach County. Signs of damage, ventilation risks, pest prevention & when to call a contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa'
  },
  '/blog/common-roofing-myths-that-homeowners-still-believe': {
    title: 'Common Roofing Myths Debunked | All Phase',
    description: 'South Florida roofing myths debunked. New roofs still need inspections, DIY repairs void warranties, and more costly mistakes to avoid.',
    canonical: 'https://allphaseconstructionfl.com/blog/common-roofing-myths-that-homeowners-still-believe'
  },
  '/blog/visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview': {
    title: 'AI Roof Visualization | Preview Your New Roof',
    description: 'See your new roof before installation with AI visualization. Compare colors, materials & styles on your actual home. Ask your contractor today.',
    canonical: 'https://allphaseconstructionfl.com/blog/visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview'
  },
  '/blog/the-role-of-roof-pitch-in-water-drainage-and-design': {
    title: 'Roof Pitch & Water Drainage | Why Slope Matters',
    description: 'How roof pitch affects water drainage, material selection & hurricane performance in Florida. What pitch your home needs & why slope matters.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-role-of-roof-pitch-in-water-drainage-and-design'
  },
  '/blog/the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet': {
    title: 'Cost of Delaying Roof Replacement | All Phase',
    description: 'Delaying roof replacement costs more than you think. Water damage, mold, higher insurance & code violations add up fast in South Florida.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet'
  },
  '/blog/how-solar-impacts-property-taxes-in-florida': {
    title: 'Solar Panels and Property Taxes in Florida | All Phase',
    description: 'Florida solar panels are 100% exempt from property tax increases. How the exemption works, what qualifies & the financial impact on your home.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-solar-impacts-property-taxes-in-florida'
  },
  '/blog/the-roi-of-installing-solar-panels-in-florida': {
    title: 'Solar Panel ROI in Florida | Investment Guide | All Phase',
    description: 'Florida solar panel ROI explained: tax credits, net metering & payback timelines. Why South Florida is one of the best states for solar.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-roi-of-installing-solar-panels-in-florida'
  },
  '/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles': {
    title: 'Architectural vs. 3-Tab Shingles | Comparison | All Phase',
    description: 'Architectural vs. 3-tab shingles: cost, durability, wind rating & curb appeal compared. Which shingle type fits your South Florida home?',
    canonical: 'https://allphaseconstructionfl.com/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles'
  },
  '/blog/whats-the-lifespan-of-a-solar-ready-roof': {
    title: 'Solar-Ready Roof Lifespan | How Long It Lasts | All Phase',
    description: 'How long does a solar-ready roof last? Lifespan by material, when to replace before panels & how to maximize your roof-solar investment.',
    canonical: 'https://allphaseconstructionfl.com/blog/whats-the-lifespan-of-a-solar-ready-roof'
  },
  '/blog/can-a-screen-room-add-to-my-property-value': {
    title: 'Do Screen Rooms Add Property Value? | Florida | All Phase',
    description: 'Do screen rooms add property value in Florida? Typical ROI, permit requirements & how screened patios compare to other home improvements.',
    canonical: 'https://allphaseconstructionfl.com/blog/can-a-screen-room-add-to-my-property-value'
  },
  '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive': {
    title: 'Early Signs of Roof Damage | What to Watch For | All Phase',
    description: 'Spot roof damage early before costly repairs. Warning signs homeowners miss: ceiling stains, granule loss, sagging decking & flashing issues.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive'
  },
  '/blog/how-to-combine-solar-and-a-new-roof-for-maximum-efficiency': {
    title: 'Combine Solar Panels and a New Roof | Tips | All Phase',
    description: 'Planning solar panels? Install them with a new roof to save thousands. Timing, material compatibility & financing tips from a licensed FL contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-combine-solar-and-a-new-roof-for-maximum-efficiency'
  },
  '/blog/choosing-between-roof-repair-and-full-replacement': {
    title: 'Roof Repair vs. Replacement | How to Decide | All Phase',
    description: 'Roof repair vs. full replacement: how to decide. Age, damage extent, cost comparison & insurance factors South Florida homeowners should weigh.',
    canonical: 'https://allphaseconstructionfl.com/blog/choosing-between-roof-repair-and-full-replacement'
  },
  '/blog/how-to-protect-roof-decking-from-moisture-damage-during-construction': {
    title: 'Protect Roof Decking From Moisture | All Phase',
    description: 'Protect roof decking from moisture during construction. Florida storms damage exposed wood in hours. Prevention methods & contractor tips.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-protect-roof-decking-from-moisture-damage-during-construction'
  },
  '/blog/do-i-need-a-roof-inspection-after-a-storm': {
    title: 'Roof Inspection After a Storm | Do You Need One? | All Phase',
    description: 'Get a roof inspection after any South Florida storm. Hidden hurricane & thunderstorm damage worsens fast. What inspectors check & why it matters.',
    canonical: 'https://allphaseconstructionfl.com/blog/do-i-need-a-roof-inspection-after-a-storm'
  },
  '/blog/what-is-roof-underlayment-and-why-does-it-matter': {
    title: 'Roof Underlayment Explained | Why It Matters | All Phase',
    description: 'Roof underlayment is your second defense against water. Types, Florida code requirements & why this hidden layer matters more than you think.',
    canonical: 'https://allphaseconstructionfl.com/blog/what-is-roof-underlayment-and-why-does-it-matter'
  },
  '/blog/how-to-choose-roofing-materials-for-large-scale-projects': {
    title: 'Commercial Roofing Materials Guide | All Phase',
    description: 'Choosing roofing materials for commercial projects: TPO, PVC, metal & modified bitumen compared. Cost & code factors for South Florida.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-choose-roofing-materials-for-large-scale-projects'
  },
  '/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks': {
    title: 'Roof Flashing Installation | Prevent Leaks | All Phase',
    description: 'Improper flashing causes most roof leaks. Where flashing fails, how to spot problems & why correct installation matters in South FL.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks'
  },
  '/blog/how-climate-change-is-impacting-roofing-choices-in-coastal-areas': {
    title: 'Climate Change & Roofing | Coastal Florida Guide',
    description: 'Climate change is reshaping roofing in coastal Florida. Stronger hurricanes, rising insurance & new materials driving smarter roofing choices.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-climate-change-is-impacting-roofing-choices-in-coastal-areas'
  },
  '/blog/how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home': {
    title: 'Prepare Your Roof Before Selling | All Phase',
    description: 'Selling your home? Roof condition impacts sale price & buyer confidence. Pre-sale inspection tips and repair strategies for South Florida sellers.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home'
  },
  '/blog/top-roofers-in-broward-and-palm-beach-counties': {
    title: 'Top Roofers in Broward & Palm Beach County | All Phase',
    description: 'Best roofing contractors in Broward & Palm Beach County. Licenses to verify, questions to ask & red flags to watch for before you hire.',
    canonical: 'https://allphaseconstructionfl.com/blog/top-roofers-in-broward-and-palm-beach-counties'
  },
  '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes': {
    title: 'Metal vs. Tile Roof in South Florida | Hurricane Comparison',
    description: 'Metal vs. tile roof in South Florida: hurricane performance, cost, insurance savings & HOA rules compared. Which material fits your home?',
    canonical: 'https://allphaseconstructionfl.com/blog/metal-roof-vs-tile-roof-south-florida-hurricanes'
  },
  '/blog/wind-mitigation-roof-south-florida': {
    title: 'Wind Mitigation for Your Roof | All Phase',
    description: 'Roof wind mitigation can cut Florida insurance by up to 50%. What qualifies, what to upgrade & how to get certified in Broward & Palm Beach.',
    canonical: 'https://allphaseconstructionfl.com/blog/wind-mitigation-roof-south-florida'
  },
  '/blog/roof-replacement-cost-broward-county-2026': {
    title: 'Roof Replacement Cost Broward County 2026 | All Phase',
    description: '2026 Broward County roof replacement costs: shingle, tile & metal pricing, Florida Building Code requirements & how to maximize insurance discounts.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-replacement-cost-broward-county-2026'
  },
  '/blog/roof-replacement-cost-palm-beach-county-2026': {
    title: 'Roof Replacement Cost Palm Beach County 2026 | All Phase',
    description: '2026 Palm Beach County roof replacement costs: shingle, tile & metal pricing, wind-code requirements & how to maximize insurance discounts.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-replacement-cost-palm-beach-county-2026'
  },
  '/blog/certified-vs-licensed-roofer-florida': {
    title: 'Certified vs. Licensed Roofer in Florida | All Phase',
    description: 'Certified vs. licensed roofer in Florida: what each credential means, how to verify on DBPR & why both matter when hiring a roofing contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/certified-vs-licensed-roofer-florida'
  },
  '/blog/complete-roof-replacement-process-10-steps': {
    title: '10-Step Roof Replacement Process | All Phase',
    description: 'The complete 10-step roof replacement process from inspection to final warranty. What to expect during your South Florida roof replacement.',
    canonical: 'https://allphaseconstructionfl.com/blog/complete-roof-replacement-process-10-steps'
  },
  '/blog/what-south-florida-homeowners-get-wrong-about-roof-replacement': {
    title: 'Roof Replacement Mistakes to Avoid | All Phase',
    description: 'Costly roof replacement mistakes South Florida homeowners make: wrong contractor, skipped ventilation, missed insurance savings & flat roof issues.',
    canonical: 'https://allphaseconstructionfl.com/blog/what-south-florida-homeowners-get-wrong-about-roof-replacement'
  },
  '/blog/roof-pricing-financing-guide': {
    title: 'Roof Pricing & Financing Guide 2026 | All Phase',
    description: 'Roof pricing in 2026: how tariffs & material costs changed estimates. Use our calculator for current pricing & explore 0% financing options.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-pricing-financing-guide'
  },
  '/blog/professional-roof-inspection-south-florida': {
    title: 'Professional Roof Inspection | South Florida | All Phase',
    description: 'What a professional roof inspection covers in South Florida: surface evaluation, code compliance & insurance documentation. Free inspection.',
    canonical: 'https://allphaseconstructionfl.com/blog/professional-roof-inspection-south-florida'
  },
  '/blog/dont-replace-your-roof-restore-it-instead': {
    title: 'Roof Restoration vs. Replacement | Save $25K+ | All Phase',
    description: 'Florida Statute 627.7011 protects you from unnecessary roof replacements. Learn how a 5-year certification can save $25,000+ and keep your insurance.',
    canonical: 'https://allphaseconstructionfl.com/blog/dont-replace-your-roof-restore-it-instead'
  },
  '/blog/can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida': {
    title: 'Can I Replace Fascia Without Replacing My Roof? (2026 Answer)',
    description: 'Yes — but only if done right. A South Florida roofer explains when you can replace fascia boards without a full reroof, what code requires, and the #1 mistake that voids warranties.',
    canonical: 'https://allphaseconstructionfl.com/blog/can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida'
  },
  '/reviews': {
    title: 'Customer Reviews | All Phase USA',
    description: '4.8 stars from 138 verified South Florida homeowners. See why Broward & Palm Beach County residents choose All Phase Construction USA.',
    canonical: 'https://allphaseconstructionfl.com/reviews'
  },
  '/projects': {
    title: 'Roofing Projects | South Florida Portfolio | All Phase',
    description: 'Completed roofing projects across Broward & Palm Beach Counties. Tile, shingle, metal & flat roof installations with before-and-after photos.',
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
    title: 'Free Roof Inspection South Florida | All Phase Construction',
    description: 'Free 21-point roof inspections in South Florida. Storm damage, insurance docs & pre-purchase reports. Dual-licensed, HVHZ-certified. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection'
  },
  '/roof-replacement-process': {
    title: 'Roof Replacement Process | All Phase USA',
    description: 'See our 10-step roof replacement process - from inspection to final warranty. No surprises. South Florida dual-licensed roofing contractor.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-process'
  },
  '/roof-replacement': {
    title: 'Roof Replacement South Florida | Free Estimate | All Phase',
    description: 'Licensed roof replacement contractor in South Florida. Tile, metal, shingle & flat. HVHZ-compliant. Free estimates. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement'
  },
  '/roof-maintenance-programs': {
    title: 'Roof Maintenance Programs | All Phase USA',
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
    title: 'Flat Roofing Services | All Phase USA',
    description: 'TPO, PVC, EPDM & modified bitumen flat roofing in South Florida. Residential & commercial. Dual-licensed CCC/CGC. Free assessment.',
    canonical: 'https://allphaseconstructionfl.com/flat-roofing'
  },
  '/single-ply-roofing': {
    title: 'Single-Ply Roofing Systems | TPO, PVC, EPDM | All Phase',
    description: 'Commercial single-ply roofing in South Florida. TPO, PVC & EPDM membrane systems. Certified installers for IB Roof, Fibertite & more.',
    canonical: 'https://allphaseconstructionfl.com/single-ply-roofing'
  },
    '/roof-repair': {
    title: 'Roof Repair South Florida | Leaks & Storm Damage | All Phase',
        description: 'Expert roof repair in South Florida — leak diagnosis, emergency tarping, flashing & wind damage. Dual-licensed. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair'
  },
    '/licensed-roofing-contractor': {
    title: 'Licensed Roofing Contractor FL | CCC & CGC | All Phase',
    description: 'Florida dual-licensed roofing and general contractor. CCC-1331464 + CGC-1526236. HVHZ-certified, serving Broward & Palm Beach since 2005.',
    canonical: 'https://allphaseconstructionfl.com/licensed-roofing-contractor'
  },
    '/roofing-services': {
    title: 'Roofing Services South Florida | All Phase',
    description: 'Residential & commercial roofing in Broward & Palm Beach County. Tile, metal, shingle & flat — HVHZ-certified, dual-licensed. Free inspections.',
    canonical: 'https://allphaseconstructionfl.com/roofing-services'
  },
  '/locations/deerfield-beach/how-to-hire-a-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor | All Phase USA',
    description: 'Hiring a roofer in South Florida? Know what licenses to check, questions to ask, and scams to avoid. Free advice from a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/how-to-hire-a-roofing-contractor'
  },
  '/locations/deerfield-beach/best-roofers-deerfield-beach': {
    title: '5 Best Roofers in Deerfield Beach, FL (2026 Reviewed)',
    description: 'We compared the 5 best-rated roofers in Deerfield Beach by licenses, HVHZ compliance, reviews & pricing. Updated for 2026 — see which Broward County contractors made the cut.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach'
  },
  '/locations/fort-lauderdale/best-roofers-fort-lauderdale': {
    title: '5 Best Roofers in Fort Lauderdale, FL (2026 Reviewed)',
    description: 'We compared the 5 best-rated roofers in Fort Lauderdale by licenses, HVHZ compliance, reviews & pricing. Updated for 2026 — see which Broward County contractors made the cut.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale/best-roofers-fort-lauderdale'
  },
  '/locations/west-palm-beach/best-roofers-west-palm-beach': {
    title: 'Top 5 Roofers in West Palm Beach FL (2026) | All Phase',
    description: 'Looking for the best roofers in West Palm Beach? Top 5 HVHZ-compliant roofing contractors in Palm Beach County reviewed. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach'
  },
  '/locations/boca-raton/best-roofers-boca-raton': {
    title: 'Top 5 Roofers in Boca Raton FL (2026) | All Phase',
    description: 'Looking for the best roofers in Boca Raton? Top 5 HVHZ-compliant roofing contractors in Palm Beach County reviewed. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton'
  },
  '/locations/coral-springs/best-roofers-coral-springs': {
    title: 'Top 5 Roofers in Coral Springs FL (2026) | All Phase',
    description: 'Looking for the best roofers in Coral Springs? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs'
  },
  '/locations/fort-lauderdale': {
    title: 'Fort Lauderdale Roofing | Inspection & Replacement',
    description: 'Roofing contractor in Fort Lauderdale, FL. Free inspection, hurricane damage repair, tile, metal & shingle replacement. HVHZ-certified. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale'
  },
  '/locations/west-palm-beach': {
    title: 'West Palm Beach Roofing Contractor | All Phase',
    description: 'Roof replacement in West Palm Beach, FL. Historic district expertise, tile, metal & shingle re-roofs. HVHZ-certified. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach'
  },
  '/locations/pompano-beach': {
    title: 'Pompano Beach Roofing Contractor | All Phase',
    description: 'Roof replacement contractor in Pompano Beach, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/pompano-beach'
  },
  '/locations/coral-springs': {
    title: 'Coral Springs Roofing Contractor | All Phase',
    description: 'Roof replacement contractor in Coral Springs, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs'
  },
  '/locations/gulf-stream': {
    title: 'Gulf Stream Roofing Contractor | All Phase',
    description: 'Roof replacement in Gulf Stream, FL. Tile, metal & shingle re-roofs for luxury coastal homes. Palm Beach County licensed. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/gulf-stream',
  },
  '/locations/jupiter': {
    title: 'Jupiter Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement contractor serving Jupiter, FL. Tile, metal & shingle re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/jupiter',
  },
  '/locations/lake-worth-beach': {
    title: 'Lake Worth Beach Roofing Contractor | All Phase',
    description: 'Roof replacement in Lake Worth Beach, FL. Tile, metal & shingle re-roofs. Licensed Palm Beach County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/lake-worth-beach',
  },
  '/locations/loxahatchee-groves': {
    title: 'Loxahatchee Groves Roofing Contractor | All Phase',
    description: 'Roof replacement in Loxahatchee Groves, FL. Tile, metal & shingle re-roofs. Licensed Palm Beach County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/loxahatchee-groves',
  },
  '/locations/pembroke-park': {
    title: 'Pembroke Park Roofing Contractor | All Phase',
    description: 'Roof replacement in Pembroke Park, FL. Tile, metal & shingle re-roofs. Licensed Broward County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/pembroke-park',
  },
  '/roof-repair/fort-lauderdale': {
    title: 'Fort Lauderdale Roof Repair | All Phase',
    description: 'Roof leak & storm damage repair in Fort Lauderdale, FL. Emergency patching, wind & flashing damage. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/fort-lauderdale'
  },
    '/roof-repair/deerfield-beach': {
    title: 'Deerfield Beach Roof Repair | All Phase',
    description: 'Roof leak & storm damage repair in Deerfield Beach, FL. Emergency patching, flashing & wind damage. Insurance coordination. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/deerfield-beach'
  },
    '/roof-repair/pompano-beach': {
    title: 'Pompano Beach Roof Repair | All Phase',
    description: 'Roof leak & storm damage repair in Pompano Beach, FL. Emergency patching, flashing & missing shingles. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/pompano-beach'
  },
  '/roof-repair/west-palm-beach': {
    title: 'West Palm Beach Roof Repair | All Phase',
    description: 'Roof leak & storm damage repair in West Palm Beach, FL. Emergency patching, flashing & wind damage. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/west-palm-beach'
  },
  '/roof-repair/boca-raton': {
    title: 'Boca Raton Roof Repair | All Phase',
    description: 'Roof leak & storm damage repair in Boca Raton, FL. Emergency patching, tile cracks, flashing & wind uplift. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/boca-raton'
  },
  '/roof-repair/coral-springs': {
    title: 'Coral Springs Roof Repair | All Phase',
    description: 'Roof leak & storm damage repair in Coral Springs, FL. Emergency patching, flashing & wind damage. Same-day response. (754) 227-5605.',
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
    description: 'Deerfield Beach\'s #1 rated roofing contractor — headquartered here since 2005. We\'ve completed 2,500+ roofs in Broward County. HVHZ-certified, dual-licensed. Free same-day inspections — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach'
  },
  '/how-to-hire-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor in Florida | Expert Guide',
    description: 'How to hire a roofing contractor in Florida - licenses to verify, questions to ask, red flags to avoid. Free guide from a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/how-to-hire-roofing-contractor'
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
      title: `${CITY_NAMES[slug] || slug} Roofing Contractor | All Phase`,
      description: `Roof replacement contractor in ${CITY_NAMES[slug] || slug}, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/locations/${slug}`
    };
  }

    // Dynamic /roof-repair/:slug handler
  if (normalizedPath.startsWith('/roof-repair/')) {
    const slug = normalizedPath.replace('/roof-repair/', '').replace(/\/$/, '');
    const cityName = CITY_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `Roof Repair ${cityName} FL | All Phase`,
            description: `Roof leak & storm damage repair in ${cityName}, FL. Emergency patching, flashing & wind damage. Same-day response. (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/roof-repair/${slug}`,
      ogTitle: `Roof Repair ${cityName} FL | All Phase`,
            ogDescription: `Roof leak & storm damage repair in ${cityName}, FL. Emergency patching, flashing & wind damage. Same-day response. (754) 227-5605.`,
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
    title: 'South Florida Roofing Contractor | All Phase USA',
    description: 'Licensed roofing contractor in South Florida. HVHZ-certified, dual-licensed CCC/CGC. Tile, metal, shingle & flat roofing. Free inspection. (754) 227-5605.',
    canonical: `https://allphaseconstructionfl.com${cleanPath}`
  };
}
