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
    title: 'South Florida Roofing Contractor | 2,500+ Roofs | All Phase USA',
    description: 'Dual-licensed roofing contractor serving Broward & Palm Beach County since 2005. HVHZ-certified. Tile, metal, shingle & flat. Free inspection. (754) 227-5605.',
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
    title: 'Roof Cost Calculator | Free Instant Estimate | South Florida 2026',
    description: 'Calculate your roof replacement cost instantly. Free online tool with 2026 South Florida pricing for shingle, tile, metal & flat roofs in Broward & Palm Beach County.',
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
    title: 'Wind Mitigation Inspection Guide | Save 20-60% on Insurance | South Florida',
    description: 'How wind mitigation inspections save South Florida homeowners thousands on insurance. What inspectors check, how to qualify, and the best upgrades for ROI.',
    canonical: 'https://allphaseconstructionfl.com/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home'
  },
  '/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes': {
    title: 'Flat Roofs in Florida: Pros, Cons & What Homeowners Should Know (2026)',
    description: 'Flat roof pros and cons for Florida homes: drainage, hurricane performance, costs, and the best materials. Honest advice from a licensed South Florida roofer.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-pros-and-cons-of-flat-roofs-for-florida-homes'
  },
  '/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association': {
    title: 'HOA Roofing Budget Planning | Condo Associations | All Phase',
    description: 'How to plan long-term roofing budgets for your condo or HOA. Avoid special assessments, meet Florida reserve requirements, and protect property values.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association'
  },
  '/blog/soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa': {
    title: 'Soffit Repair South Florida | Broward & Palm Beach | All Phase',
    description: 'Soffit repair guide for Broward and Palm Beach County homeowners. Signs of damage, ventilation risks, pest prevention, and when to call a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/soffit-repair-in-south-florida-your-guide-for-palm-beach-broward-counties-with-all-phase-construction-usa'
  },
  '/blog/common-roofing-myths-that-homeowners-still-believe': {
    title: 'Common Roofing Myths Debunked | All Phase',
    description: 'South Florida roofing myths debunked by a licensed contractor. New roofs still need inspections, DIY repairs void warranties, and more costly mistakes to avoid.',
    canonical: 'https://allphaseconstructionfl.com/blog/common-roofing-myths-that-homeowners-still-believe'
  },
  '/blog/visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview': {
    title: 'AI Roof Visualization Tools | Preview Your New Roof | All Phase',
    description: 'See your new roof before installation with AI-powered visualization tools. Compare colors, materials, and styles on your actual home. Ask your contractor today.',
    canonical: 'https://allphaseconstructionfl.com/blog/visualize-your-new-roof-with-ai-powered-tools-why-you-should-ask-your-contractor-for-a-preview'
  },
  '/blog/the-role-of-roof-pitch-in-water-drainage-and-design': {
    title: 'Roof Pitch and Water Drainage | Why Slope Matters | All Phase',
    description: 'How roof pitch affects water drainage, material selection, and hurricane performance in Florida. Learn what pitch your home needs and why slope matters.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-role-of-roof-pitch-in-water-drainage-and-design'
  },
  '/blog/the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet': {
    title: 'Cost of Delaying Roof Replacement | South Florida | All Phase',
    description: 'Delaying roof replacement costs more than you think. Water damage, mold, higher insurance premiums, and code violations add up fast in South Florida.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-cost-of-waiting-why-delaying-roof-replacement-in-south-florida-hurts-your-wallet'
  },
  '/blog/how-solar-impacts-property-taxes-in-florida': {
    title: 'Solar Panels and Property Taxes in Florida | All Phase',
    description: 'Florida solar panels are 100% exempt from property tax increases. Learn how the exemption works, what qualifies, and the financial impact on your home.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-solar-impacts-property-taxes-in-florida'
  },
  '/blog/the-roi-of-installing-solar-panels-in-florida': {
    title: 'Solar Panel ROI in Florida | Investment Guide | All Phase',
    description: 'Florida solar panel ROI explained: tax credits, net metering, and payback timelines. See why South Florida is one of the best states for solar investment.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-roi-of-installing-solar-panels-in-florida'
  },
  '/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles': {
    title: 'Architectural vs. 3-Tab Shingles | Comparison | All Phase',
    description: 'Architectural vs. 3-tab shingles: cost, durability, wind rating, and curb appeal compared. Which shingle type is right for your South Florida home?',
    canonical: 'https://allphaseconstructionfl.com/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles'
  },
  '/blog/whats-the-lifespan-of-a-solar-ready-roof': {
    title: 'Solar-Ready Roof Lifespan | How Long It Lasts | All Phase',
    description: 'How long does a solar-ready roof last? Lifespan by material, when to replace before panels, and how to maximize your roof and solar investment together.',
    canonical: 'https://allphaseconstructionfl.com/blog/whats-the-lifespan-of-a-solar-ready-roof'
  },
  '/blog/can-a-screen-room-add-to-my-property-value': {
    title: 'Do Screen Rooms Add Property Value? | Florida | All Phase',
    description: 'Do screen rooms add property value in Florida? Typical ROI, permit requirements, and how screened patios compare to other home improvement investments.',
    canonical: 'https://allphaseconstructionfl.com/blog/can-a-screen-room-add-to-my-property-value'
  },
  '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive': {
    title: 'Early Signs of Roof Damage | What to Watch For | All Phase',
    description: 'Spot roof damage early before costly repairs. Warning signs homeowners miss: ceiling stains, granule loss, sagging decking, and flashing failures explained.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive'
  },
  '/blog/how-to-combine-solar-and-a-new-roof-for-maximum-efficiency': {
    title: 'Combine Solar Panels and a New Roof | Tips | All Phase',
    description: 'Planning solar panels? Install them with a new roof to save thousands. Timing, material compatibility, and financing tips from a licensed FL contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-combine-solar-and-a-new-roof-for-maximum-efficiency'
  },
  '/blog/choosing-between-roof-repair-and-full-replacement': {
    title: 'Roof Repair vs. Replacement | How to Decide | All Phase',
    description: 'Roof repair vs. full replacement: how to decide. Age, damage extent, cost comparison, and insurance factors that South Florida homeowners need to consider.',
    canonical: 'https://allphaseconstructionfl.com/blog/choosing-between-roof-repair-and-full-replacement'
  },
  '/blog/how-to-protect-roof-decking-from-moisture-damage-during-construction': {
    title: 'Protect Roof Decking From Moisture | Construction Tips | All Phase',
    description: 'Protect your roof decking from moisture during construction. Florida afternoon storms can damage exposed wood in hours. Prevention methods and contractor tips.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-protect-roof-decking-from-moisture-damage-during-construction'
  },
  '/blog/do-i-need-a-roof-inspection-after-a-storm': {
    title: 'Roof Inspection After a Storm | Do You Need One? | All Phase',
    description: 'Get a roof inspection after any South Florida storm. Hidden damage from hurricanes and thunderstorms worsens fast. What inspectors check and why it matters.',
    canonical: 'https://allphaseconstructionfl.com/blog/do-i-need-a-roof-inspection-after-a-storm'
  },
  '/blog/what-is-roof-underlayment-and-why-does-it-matter': {
    title: 'Roof Underlayment Explained | Why It Matters | All Phase',
    description: 'Roof underlayment is your second defense against water. Types, Florida code requirements, and why this hidden layer matters more than most homeowners think.',
    canonical: 'https://allphaseconstructionfl.com/blog/what-is-roof-underlayment-and-why-does-it-matter'
  },
  '/blog/how-to-choose-roofing-materials-for-large-scale-projects': {
    title: 'Commercial Roofing Materials Guide | All Phase',
    description: 'Choosing roofing materials for large commercial projects: TPO, PVC, metal, and modified bitumen compared. Cost and code factors for South Florida buildings.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-choose-roofing-materials-for-large-scale-projects'
  },
  '/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks': {
    title: 'Roof Flashing Installation | Prevent Leaks | All Phase',
    description: 'Improper flashing causes most roof leaks. Where flashing fails, how to spot problems, and why correct installation matters in South Florida hurricane zones.',
    canonical: 'https://allphaseconstructionfl.com/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks'
  },
  '/blog/how-climate-change-is-impacting-roofing-choices-in-coastal-areas': {
    title: 'Climate Change and Roofing | Coastal Florida Guide | All Phase',
    description: 'Climate change is reshaping roofing in coastal Florida. Stronger hurricanes, rising insurance costs, and new materials driving smarter roofing choices.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-climate-change-is-impacting-roofing-choices-in-coastal-areas'
  },
  '/blog/how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home': {
    title: 'Prepare Your Roof Before Selling | Home Sale Tips | All Phase',
    description: 'Selling your home? Roof condition directly impacts sale price and buyer confidence. Pre-sale inspection tips and repair strategies for South Florida sellers.',
    canonical: 'https://allphaseconstructionfl.com/blog/how-to-prepare-your-roof-for-the-real-estate-market-when-selling-your-home'
  },
  '/blog/top-roofers-in-broward-and-palm-beach-counties': {
    title: 'Top Roofers in Broward & Palm Beach County | All Phase',
    description: 'Finding the best roofing contractors in Broward and Palm Beach County. What licenses to verify, questions to ask, and red flags to watch for before you hire.',
    canonical: 'https://allphaseconstructionfl.com/blog/top-roofers-in-broward-and-palm-beach-counties'
  },
  '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes': {
    title: 'Metal vs. Tile Roof in South Florida | Hurricane Comparison',
    description: 'Metal vs. tile roof in South Florida: hurricane performance, cost, insurance savings, and HOA rules compared. Which roofing material is best for your home?',
    canonical: 'https://allphaseconstructionfl.com/blog/metal-roof-vs-tile-roof-south-florida-hurricanes'
  },
  '/blog/wind-mitigation-roof-south-florida': {
    title: 'Wind Mitigation for Your Roof | Save on Insurance | All Phase',
    description: 'Roof wind mitigation can cut your Florida insurance by up to 50%. Learn what qualifies, what to upgrade, and how to get certified in Broward and Palm Beach.',
    canonical: 'https://allphaseconstructionfl.com/blog/wind-mitigation-roof-south-florida'
  },
  '/blog/roof-replacement-cost-broward-county-2026': {
    title: 'Roof Replacement Cost Broward County 2026 | All Phase',
    description: '2026 Broward County roof replacement costs: shingle, tile, and metal pricing, Florida Building Code requirements, and how to maximize insurance discounts.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-replacement-cost-broward-county-2026'
  },
  '/blog/certified-vs-licensed-roofer-florida': {
    title: 'Certified vs. Licensed Roofer in Florida | All Phase',
    description: 'Certified vs. licensed roofer in Florida: what each credential means, how to verify on DBPR, and why both matter when hiring a roofing contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/certified-vs-licensed-roofer-florida'
  },
  '/blog/complete-roof-replacement-process-10-steps': {
    title: '10-Step Roof Replacement Process | All Phase',
    description: 'The complete 10-step roof replacement process from inspection to final warranty. See exactly what to expect during your South Florida roof replacement.',
    canonical: 'https://allphaseconstructionfl.com/blog/complete-roof-replacement-process-10-steps'
  },
  '/blog/what-south-florida-homeowners-get-wrong-about-roof-replacement': {
    title: 'Roof Replacement Mistakes to Avoid | South Florida | All Phase',
    description: 'Costly roof replacement mistakes South Florida homeowners make: wrong contractor, skipped ventilation, missed insurance savings, and flat roof issues.',
    canonical: 'https://allphaseconstructionfl.com/blog/what-south-florida-homeowners-get-wrong-about-roof-replacement'
  },
  '/blog/roof-pricing-financing-guide': {
    title: 'Roof Pricing & Financing Guide 2026 | All Phase',
    description: 'Roof pricing in 2026: how tariffs and material costs changed estimates. Use our calculator for current pricing and explore 0% financing options available now.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-pricing-financing-guide'
  },
  '/blog/professional-roof-inspection-south-florida': {
    title: 'Professional Roof Inspection | South Florida | All Phase',
    description: 'What a professional roof inspection covers in South Florida: surface evaluation, code compliance, and documentation for insurance. Schedule a free inspection.',
    canonical: 'https://allphaseconstructionfl.com/blog/professional-roof-inspection-south-florida'
  },
  '/blog/dont-replace-your-roof-restore-it-instead': {
    title: 'Roof Restoration vs. Replacement | Save $25K+ | All Phase',
    description: 'Florida Statute 627.7011 protects you from unnecessary roof replacements. Learn how a 5-year certification can save $25,000+ and keep your insurance.',
    canonical: 'https://allphaseconstructionfl.com/blog/dont-replace-your-roof-restore-it-instead'
  },
  '/blog/can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida': {
    title: 'Fascia Replacement Without Roof Damage | South Florida | All Phase',
    description: 'Can you replace fascia without a new roof? A South Florida licensed contractor explains what is involved, costs, and when your roof also needs attention.',
    canonical: 'https://allphaseconstructionfl.com/blog/can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida'
  },
  '/reviews': {
    title: 'Customer Reviews | All Phase USA',
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
    description: 'South Florida dual-licensed, HVHZ-certified roof replacement. Free inspection + easy financing. Tile, metal, shingle & flat. Call (754) 227-5605.',
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
    '/roof-repair': {
    title: 'Roof Repair South Florida | Leaks & Storm Damage | All Phase',
        description: 'Roof leak and storm damage repair in Broward & Palm Beach County. Emergency patching, flashing failures, wind uplift & missing shingles. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair'
  },
    '/licensed-roofing-contractor': {
    title: 'Licensed Roofing Contractor FL | Verify Before You Hire',
    description: 'How to verify a licensed roofing contractor in Florida. CCC vs CGC licenses, DBPR lookup, insurance requirements, and why licensing matters in South Florida\'s hurricane zone.',
    canonical: 'https://allphaseconstructionfl.com/licensed-roofing-contractor'
  },
    '/roofing-services': {
    title: 'Roofing Services South Florida | Tile, Metal, Shingle & Flat | All Phase',
    description: 'Complete residential & commercial roofing in Broward & Palm Beach County. Tile, metal, shingle, flat roofs — HVHZ-certified, dual-licensed. Free inspections. 2,500+ projects.',
    canonical: 'https://allphaseconstructionfl.com/roofing-services'
  },
  '/locations/deerfield-beach/how-to-hire-a-roofing-contractor': {
    title: 'How to Hire a Roofing Contractor | All Phase USA',
    description: 'Hiring a roofer in South Florida? Know what licenses to check, questions to ask, and scams to avoid. Free advice from a licensed contractor.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/how-to-hire-a-roofing-contractor'
  },
  '/locations/deerfield-beach/best-roofers-deerfield-beach': {
    title: 'Top 5 Roofers in Deerfield Beach FL (2026) | All Phase',
    description: 'Looking for the best roofers in Deerfield Beach? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
    canonical: 'https://allphaseconstructionfl.com/locations/deerfield-beach/best-roofers-deerfield-beach'
  },
  '/locations/fort-lauderdale/best-roofers-fort-lauderdale': {
    title: 'Top 5 Roofers in Fort Lauderdale FL (2026) | All Phase',
    description: 'Looking for the best roofers in Fort Lauderdale? We reviewed the top 5 rated HVHZ-compliant roofing contractors in Broward County. See who made the list.',
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
    title: 'Fort Lauderdale Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement experts in Fort Lauderdale, FL. Tile, metal, shingle & flat re-roofs. Dual-licensed, HVHZ-certified. 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale'
  },
  '/locations/west-palm-beach': {
    title: 'West Palm Beach Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement in West Palm Beach, FL. Historic district expertise, tile, metal & shingle re-roofs. Dual-licensed, HVHZ-certified. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach'
  },
  '/locations/pompano-beach': {
    title: 'Pompano Beach Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement contractor in Pompano Beach, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/pompano-beach'
  },
  '/locations/coral-springs': {
    title: 'Coral Springs Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement contractor in Coral Springs, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs'
  },
  '/locations/gulf-stream': {
    title: 'Gulf Stream Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement in Gulf Stream, FL. Tile, metal & shingle re-roofs for luxury coastal homes. Licensed Palm Beach County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/gulf-stream',
  },
  '/locations/jupiter': {
    title: 'Jupiter Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement contractor serving Jupiter, FL. Tile, metal & shingle re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/jupiter',
  },
  '/locations/lake-worth-beach': {
    title: 'Lake Worth Beach Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement in Lake Worth Beach, FL. Tile, metal & shingle re-roofs. Licensed Palm Beach County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/lake-worth-beach',
  },
  '/locations/loxahatchee-groves': {
    title: 'Loxahatchee Groves Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement in Loxahatchee Groves, FL. Tile, metal & shingle re-roofs. Licensed Palm Beach County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/loxahatchee-groves',
  },
  '/locations/pembroke-park': {
    title: 'Pembroke Park Roofing Contractor | Roof Replacement | All Phase',
    description: 'Roof replacement in Pembroke Park, FL. Tile, metal & shingle re-roofs. Licensed Broward County contractor. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/pembroke-park',
  },
  '/roof-repair/fort-lauderdale': {
    title: 'Fort Lauderdale Roof Repair | Leaks & Storm Damage | All Phase',
    description: 'Roof leak and storm damage repair in Fort Lauderdale, FL. Emergency patching, wind damage, flashing failures & missing shingles. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/fort-lauderdale'
  },
    '/roof-repair/deerfield-beach': {
    title: 'Deerfield Beach Roof Repair | Leaks & Storm Damage | All Phase',
    description: 'Roof leak and storm damage repair in Deerfield Beach, FL. Emergency patching, flashing failures & wind damage. Insurance coordination. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/deerfield-beach'
  },
    '/roof-repair/pompano-beach': {
    title: 'Pompano Beach Roof Repair | Leaks & Storm Damage | All Phase',
    description: 'Roof leak and storm damage repair in Pompano Beach, FL. Emergency patching, flashing failures & missing shingles. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/pompano-beach'
  },
  '/roof-repair/west-palm-beach': {
    title: 'West Palm Beach Roof Repair | Leaks & Storm Damage | All Phase',
    description: 'Roof leak and storm damage repair in West Palm Beach, FL. Emergency patching, flashing failures & wind damage. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/west-palm-beach'
  },
  '/roof-repair/boca-raton': {
    title: 'Boca Raton Roof Repair | Leaks & Storm Damage | All Phase',
    description: 'Roof leak and storm damage repair in Boca Raton, FL. Emergency patching, tile cracks, flashing failures & wind uplift. Same-day response. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/boca-raton'
  },
  '/roof-repair/coral-springs': {
    title: 'Coral Springs Roof Repair | Leaks & Storm Damage | All Phase',
    description: 'Roof leak and storm damage repair in Coral Springs, FL. Emergency patching, flashing failures & wind damage. HVHZ-certified. Same-day response. (754) 227-5605.',
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
    title: 'Roofing Contractor Deerfield Beach FL | Roof Replacement | All Phase',
    description: 'Roof replacement HQ in Deerfield Beach, FL. Dual-licensed (CCC-1331464 & CGC-1526236), HVHZ-certified. Tile, metal, shingle & flat. Free estimate. (754) 227-5605.',
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
      title: `${CITY_NAMES[slug] || slug} Roofing Contractor | Roof Replacement | All Phase`,
      description: `Roof replacement contractor in ${CITY_NAMES[slug] || slug}, FL. Tile, metal, shingle & flat re-roofs. HVHZ-certified, 2,500+ projects. Free estimate. (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/locations/${slug}`
    };
  }

    // Dynamic /roof-repair/:slug handler
  if (normalizedPath.startsWith('/roof-repair/')) {
    const slug = normalizedPath.replace('/roof-repair/', '').replace(/\/$/, '');
    const cityName = CITY_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `Roof Repair ${cityName} FL | Leaks & Storm Damage | All Phase`,
            description: `Roof leak and storm damage repair in ${cityName}, FL. Emergency patching, flashing failures, missing shingles & wind damage. Same-day response. (754) 227-5605.`,
      canonical: `https://allphaseconstructionfl.com/roof-repair/${slug}`,
      ogTitle: `Roof Repair ${cityName} FL | Leaks & Storm Damage | All Phase`,
            ogDescription: `Roof leak and storm damage repair in ${cityName}, FL. Emergency patching, flashing failures & wind damage. Same-day response. (754) 227-5605.`,
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
