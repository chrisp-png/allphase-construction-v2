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
    title: 'About All Phase Construction USA | South Florida Roofer Since 2005',
    description: 'Family-owned South Florida roofer with 2,500+ roofs since 2005. Dual-licensed CCC/CGC, HVHZ-certified, A+ BBB rated. Meet the team behind Broward & Palm Beach County\'s trusted roofing company.',
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
    title: 'Do Solar Panels Raise Property Taxes in Florida? (2026 Answer: No)',
    description: 'Florida solar panels are 100% exempt from property tax increases — permanently. How the exemption works, what qualifies & the real financial impact on your home value.',
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
    title: 'Wind Mitigation Roof Upgrades | Cut Insurance 20-50% (2026 Guide)',
    description: 'Roof wind mitigation can save Florida homeowners 20-50% on insurance. What qualifies, what to upgrade & how to get your inspection in Broward & Palm Beach County.',
    canonical: 'https://allphaseconstructionfl.com/blog/wind-mitigation-roof-south-florida'
  },
  '/blog/roof-replacement-cost-broward-county-2026': {
    title: 'Roof Replacement Cost Broward County 2026 | All Phase',
    description: '2026 Broward County roof replacement costs: shingle, tile & metal pricing, Florida Building Code requirements & how to maximize insurance discounts.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-replacement-cost-broward-county-2026'
  },
  '/blog/roof-replacement-cost-palm-beach-county-2026': {
    title: 'Roof Replacement Cost Palm Beach County 2026 | $9K–$38K+ Guide',
    description: 'Palm Beach County roof replacement costs $9,000–$38,000+ in 2026. Exact pricing by shingle, tile & metal, plus wind-code requirements. Free estimates from a contractor with 2,500+ roofs.',
    canonical: 'https://allphaseconstructionfl.com/blog/roof-replacement-cost-palm-beach-county-2026'
  },
  '/blog/certified-vs-licensed-roofer-florida': {
    title: 'Certified vs. Licensed Roofer in Florida | All Phase',
    description: 'Certified vs. licensed roofer in Florida: what each credential means, how to verify on DBPR & why both matter when hiring a roofing contractor.',
    canonical: 'https://allphaseconstructionfl.com/blog/certified-vs-licensed-roofer-florida'
  },
  '/blog/complete-roof-replacement-process-10-steps': {
    title: '10-Step Roof Replacement Process — What Your Contractor Should Do (2026)',
    description: 'Most roofers skip steps 3 and 7. A licensed South Florida contractor walks through the complete 10-step roof replacement process — what to watch for at every stage.',
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
    title: 'Residential Roofing South Florida | Tile, Metal & Shingle | All Phase',
    description: 'Expert residential roofing in Broward & Palm Beach County. Tile, shingle, metal & flat roofing. HVHZ-certified, dual-licensed, 2,500+ homes completed. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/residential-roofing'
  },
  '/commercial-roofing': {
    title: 'Commercial Roofing South Florida | TPO, PVC & Metal | All Phase',
    description: 'Commercial roofing for South Florida businesses — TPO, PVC, modified bitumen & standing seam metal. Dual-licensed CCC/CGC contractor. Free commercial roof assessment — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/commercial-roofing'
  },
  '/roof-inspection': {
    title: 'Free 21-Point Roof Inspection | South Florida | Same-Day Available',
    description: 'Get a free 21-point roof inspection from a dual-licensed South Florida contractor. Storm damage documentation, insurance reports & pre-purchase evaluations. Same-day scheduling — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-inspection'
  },
  '/roof-replacement-process': {
    title: 'What to Expect During a Roof Replacement | 10-Step Process (2026)',
    description: 'See exactly what happens during a South Florida roof replacement — from permit pulling to final inspection. Our documented 10-step process keeps you informed. 2,500+ roofs completed.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement-process'
  },
  '/roof-replacement': {
    title: 'Roof Replacement South Florida | 2,500+ Roofs | Free Estimate',
    description: 'Full roof replacement in Broward & Palm Beach County. Tile, metal, shingle & flat — HVHZ-compliant, dual-licensed CCC/CGC. Documented 10-step process. Free estimate — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-replacement'
  },
  '/roof-maintenance-programs': {
    title: 'Roof Maintenance Programs | All Phase USA',
    description: 'Extend your roof\'s life with a proactive maintenance plan. Prevent leaks, maintain warranties, stay code-compliant in South Florida.',
    canonical: 'https://allphaseconstructionfl.com/roof-maintenance-programs'
  },
  '/tile-roofing': {
    title: 'Tile Roofing South Florida | Concrete & Clay | Install, Repair & Reroof',
    description: 'Concrete & clay tile roofing by a dual-licensed South Florida contractor. HVHZ-compliant installation, repairs & full re-roofs. 2,500+ projects completed. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/tile-roofing'
  },
  '/metal-roofing': {
    title: 'Metal Roofing South Florida | Standing Seam & Hurricane-Rated',
    description: 'Hurricane-rated standing seam & exposed fastener metal roofing in Broward & Palm Beach County. HOA-approved options, 40+ year lifespan. Dual-licensed — free estimate (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/metal-roofing'
  },
  '/shingle-roofing': {
    title: 'Shingle Roofing South Florida | HVHZ-Certified | All Phase',
    description: 'South Florida shingle roofing: architectural, 3-tab & impact-rated. HVHZ-certified, free estimate. Broward & Palm Beach County. Call (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/shingle-roofing'
  },
  '/flat-roofing': {
    title: 'Flat Roofing South Florida | TPO, PVC & Modified Bitumen',
    description: 'Flat roof installation, repair & re-roofing in South Florida. TPO, PVC, EPDM & modified bitumen systems. Residential & commercial. Dual-licensed CCC/CGC — free assessment (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/flat-roofing'
  },
  '/single-ply-roofing': {
    title: 'Single-Ply Roofing Systems | TPO, PVC, EPDM | All Phase',
    description: 'Commercial single-ply roofing in South Florida. TPO, PVC & EPDM membrane systems. Certified installers for IB Roof, Fibertite & more.',
    canonical: 'https://allphaseconstructionfl.com/single-ply-roofing'
  },
    '/roof-repair': {
    title: 'Roof Repair South Florida | Same-Day Emergency Service | All Phase',
    description: 'Emergency roof repair across Broward & Palm Beach County. Leaks, storm damage, wind uplift, flashing failures — same-day response. Dual-licensed contractor. Call now: (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair'
  },
    '/licensed-roofing-contractor': {
    title: 'Licensed Roofing Contractor FL | Dual-Licensed CCC + CGC | All Phase',
    description: 'Why dual licensing matters: All Phase holds both CCC-1331464 (roofing) and CGC-1526236 (general contractor) in Florida. HVHZ-certified, A+ BBB. Serving South Florida since 2005.',
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
    title: '5 Best Roofers in West Palm Beach, FL (2026 Reviewed)',
    description: 'We compared the 5 best-rated roofers in West Palm Beach by licenses, insurance coverage, reviews & pricing. Updated for 2026 — see which Palm Beach County contractors made the cut.',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach/best-roofers-west-palm-beach'
  },
  '/locations/boca-raton/best-roofers-boca-raton': {
    title: '5 Best Roofers in Boca Raton, FL (2026 Reviewed)',
    description: 'We compared the 5 best-rated roofers in Boca Raton by licenses, HVHZ compliance, reviews & pricing. Updated for 2026 — see which Palm Beach County contractors made the cut.',
    canonical: 'https://allphaseconstructionfl.com/locations/boca-raton/best-roofers-boca-raton'
  },
  '/locations/coral-springs/best-roofers-coral-springs': {
    title: '5 Best Roofers in Coral Springs, FL (2026 Reviewed)',
    description: 'We compared the 5 best-rated roofers in Coral Springs by licenses, HVHZ compliance, reviews & pricing. Updated for 2026 — see which Broward County contractors made the cut.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs/best-roofers-coral-springs'
  },
  '/locations/fort-lauderdale': {
    title: 'Fort Lauderdale Roofer | HVHZ-Certified | Free Same-Day Inspection',
    description: 'Licensed roofing contractor in Fort Lauderdale, FL. Tile, metal & shingle roof replacement, hurricane damage repair. Dual-licensed CCC/CGC, 2,500+ Broward County roofs completed — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/fort-lauderdale'
  },
  '/locations/west-palm-beach': {
    title: 'West Palm Beach Roofer | Licensed Contractor | Free Inspection',
    description: 'Licensed roofing contractor in West Palm Beach, FL. Tile, metal & shingle re-roofs, historic district expertise. 2,500+ Palm Beach County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/west-palm-beach'
  },
  '/locations/pompano-beach': {
    title: 'Pompano Beach Roofer | HVHZ-Certified | Free Same-Day Inspection',
    description: 'Licensed roofing contractor in Pompano Beach, FL. Tile, metal & shingle roof replacement, storm damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/pompano-beach'
  },
  '/locations/coral-springs': {
    title: 'Coral Springs Roofer | Licensed & HVHZ-Certified | All Phase',
    description: 'Licensed roofing contractor in Coral Springs, FL. Tile, metal & shingle roof replacement, hurricane damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/coral-springs'
  },
  '/locations/gulf-stream': {
    title: 'Gulf Stream Roofing Contractor | All Phase',
    description: 'Roof replacement in Gulf Stream, FL. Tile, metal & shingle re-roofs for luxury coastal homes. Palm Beach County licensed. Free estimate. (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/gulf-stream',
  },
  '/locations/jupiter': {
    title: 'Jupiter FL Roofer | Coastal Roof Experts | Free Inspection',
    description: 'Licensed roofing contractor in Jupiter, FL. Tile, metal & shingle roof replacement for coastal homes. Salt-air resistant materials, 2,500+ Palm Beach County roofs. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/jupiter',
  },
  '/locations/lake-worth-beach': {
    title: 'Lake Worth Beach Roofer | Licensed & HVHZ-Certified | All Phase',
    description: 'Trusted roofing contractor in Lake Worth Beach, FL. Tile, shingle & metal re-roofs, storm damage repair. 2,500+ Palm Beach County roofs completed. Free same-day inspection — (754) 227-5605.',
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
    title: 'Fort Lauderdale Roof Repair | Same-Day Emergency Service',
    description: 'Emergency roof repair in Fort Lauderdale, FL. Leaks, storm & wind damage, flashing failures — same-day response from an HVHZ-certified Broward County contractor. Call now: (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/fort-lauderdale'
  },
    '/roof-repair/deerfield-beach': {
    title: 'Deerfield Beach Roof Repair | Same-Day From Our Local HQ',
    description: 'Emergency roof repair in Deerfield Beach, FL — our hometown since 2005. Leaks, storm damage, flashing failures. Same-day response from our local HQ. Call now: (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/deerfield-beach'
  },
    '/roof-repair/pompano-beach': {
    title: 'Pompano Beach Roof Repair | Same-Day Emergency Service',
    description: 'Emergency roof repair in Pompano Beach, FL. Leaks, storm damage, missing shingles, flashing failures — same-day response from an HVHZ-certified contractor. Call now: (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/pompano-beach'
  },
  '/roof-repair/west-palm-beach': {
    title: 'West Palm Beach Roof Repair | Same-Day Emergency Service',
    description: 'Emergency roof repair in West Palm Beach, FL. Leaks, storm damage, missing shingles, flashing failures — same-day response from a licensed Palm Beach County contractor. Call now: (754) 227-5605.',
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
  '/locations/wellington': {
    title: 'Wellington FL Roofer | Tile & Shingle Experts | Free Inspection',
    description: 'Licensed roofing contractor serving Wellington, FL. Tile re-roofs, shingle replacements & storm damage repair in Palm Beach County. HVHZ-certified, 2,500+ projects. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/wellington'
  },
  '/locations/boynton-beach': {
    title: 'Boynton Beach Roofer | Licensed Contractor | Free Inspection',
    description: 'Licensed roofing contractor in Boynton Beach, FL. Tile, metal & shingle roof replacement, storm damage repair. 2,500+ Palm Beach County roofs completed. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/boynton-beach'
  },
  '/locations/boca-raton': {
    title: 'Boca Raton Roofer | Licensed & HVHZ-Certified | Free Inspection',
    description: 'Licensed roofing contractor serving Boca Raton, FL. Tile, metal & shingle roof replacement, hurricane damage repair. Dual-licensed CCC/CGC, 2,500+ projects. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/boca-raton'
  },
  '/locations/delray-beach': {
    title: 'Delray Beach Roofer | Licensed Contractor | Free Inspection',
    description: 'Licensed roofing contractor in Delray Beach, FL. Tile, metal & shingle roof replacement, storm damage repair. 2,500+ Palm Beach County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/delray-beach'
  },
  '/locations/sunrise': {
    title: 'Sunrise FL Roofer | HVHZ-Certified | Free Same-Day Inspection',
    description: 'Licensed roofing contractor in Sunrise, FL. Tile, metal & shingle roof replacement, storm damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/sunrise'
  },
  '/locations/parkland': {
    title: 'Parkland FL Roofer | Licensed & HVHZ-Certified | All Phase',
    description: 'Licensed roofing contractor serving Parkland, FL. Tile, metal & shingle roof replacement for upscale homes. HVHZ-certified, 2,500+ Broward County roofs. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/parkland'
  },
  '/locations/coconut-creek': {
    title: 'Coconut Creek Roofer | HVHZ-Certified | Free Inspection',
    description: 'Licensed roofing contractor in Coconut Creek, FL. Tile, metal & shingle roof replacement, storm damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/coconut-creek'
  },
  '/locations/lauderhill': {
    title: 'Lauderhill FL Roofer | HVHZ-Certified | Free Same-Day Inspection',
    description: 'Licensed roofing contractor in Lauderhill, FL. Tile, metal & shingle roof replacement, storm damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/lauderhill'
  },
  '/locations/tamarac': {
    title: 'Tamarac FL Roofer | HVHZ-Certified | Free Inspection',
    description: 'Licensed roofing contractor in Tamarac, FL. Tile, metal & shingle roof replacement, storm damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/tamarac'
  },
  '/locations/miramar': {
    title: 'Miramar FL Roofer | HVHZ-Certified | Free Same-Day Inspection',
    description: 'Licensed roofing contractor in Miramar, FL. Tile, metal & shingle roof replacement, storm damage repair. HVHZ-certified, 2,500+ Broward County roofs. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/miramar'
  },
  '/locations/hallandale-beach': {
    title: 'Hallandale Beach Roofer | Licensed & HVHZ-Certified | All Phase',
    description: 'Licensed roofing contractor in Hallandale Beach, FL. Tile, metal & shingle roof replacement, coastal storm damage repair. HVHZ-certified, dual-licensed. Free inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/hallandale-beach'
  },
  '/locations/palm-beach-county': {
    title: 'Palm Beach County Roofer | Licensed Contractor | Free Estimate',
    description: 'Licensed roofing contractor serving all of Palm Beach County. Tile, metal & shingle roof replacement, storm damage repair. 2,500+ roofs completed. Free same-day inspection — (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/locations/palm-beach-county'
  },
  '/roof-repair/wellington': {
    title: 'Wellington FL Roof Repair | Same-Day Emergency Service',
    description: 'Emergency roof repair in Wellington, FL. Leaks, storm damage, missing tiles, flashing failures — same-day response from a licensed Palm Beach County contractor. Call now: (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/wellington'
  },
  '/roof-repair/jupiter': {
    title: 'Jupiter FL Roof Repair | Same-Day Emergency Service',
    description: 'Emergency roof repair in Jupiter, FL. Leaks, storm & wind damage, flashing failures — same-day response from a licensed Palm Beach County contractor. Call now: (754) 227-5605.',
    canonical: 'https://allphaseconstructionfl.com/roof-repair/jupiter'
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
