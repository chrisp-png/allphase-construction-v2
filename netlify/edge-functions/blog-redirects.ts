import type { Context } from 'https://edge.netlify.com';

/**
 * Edge function to handle blog URL redirects.
 *
 * Netlify's redirect rules (netlify.toml / _redirects) don't fire for
 * paths inside directories that exist in dist/ (e.g., dist/blog/).
 * The prerender-static script creates dist/blog/{slug}/index.html for
 * blog posts in the sitemap, which means Netlify enters "directory mode"
 * for all /blog/* paths. Unknown slugs get a raw 404 instead of hitting
 * redirect rules or the SPA fallback.
 *
 * This edge function runs BEFORE static file resolution, so it can
 * intercept dead blog URLs and issue proper 301/410 responses.
 */

// Map of dead blog URLs to their redirect targets
// 301 = permanent redirect to new location
// 410 = permanently removed (no redirect target)
const BLOG_REDIRECTS: Record<string, { to: string; status: number }> = {
  // GSC Soft 404 fixes — 2026-03-30
  '/blog/happy-thanksgiving-from-all-of-us-at-all-phase-construction-usa-llc': { to: '', status: 410 },
  '/blog/how-long-will-it-take-to-replace-your-roof-in-south-florida': { to: '/blog/what-to-expect-during-a-roof-replacement-project', status: 301 },
  '/blog/what-does-a-tapered-insulation-system-mean-on-a-roof-and-how-does-it-affect-the-air-conditioning-stands': { to: '/blog', status: 301 },
  '/blog/clay-roof-tiles-an-important-chapter-in-the-history-of-roofing-and-a-popular-choice-for-residential-roofs-today': { to: '/blog/why-choose-tile-roofing-in-south-florida', status: 301 },
  '/blog/is-tar-still-used-in-2024-to-seal-a-roof': { to: '/blog', status: 301 },
  '/blog/services-that-all-phase-construction-provides': { to: '/blog', status: 301 },
  '/blog/common-roofing-myths-that-homeowners-still-believe': { to: '/blog', status: 301 },
  '/blog/helping-your-association-plan-for-roofing-budgets-with-confidence': { to: '/blog', status: 301 },

  // Legacy WordPress blog redirects
  '/blog/stone-coated-steel-roofs-benefits-and-pitfalls': { to: '/blog/metal-roof-vs-shingles-florida-2026', status: 301 },
  '/blog/whats-the-best-roof-for-your-south-florida-home-in-2025': { to: '/blog/roof-replacement-cost-broward-county-2026', status: 301 },
  '/blog/the-ultimate-guide-to-hurricane-proofing-your-roof-in-south-florida-expert-tips-from-all-phase-construction-usa': { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', status: 301 },
  '/blog/why-proper-roof-ventilation-is-critical-in-hot-climates': { to: '/blog/the-importance-of-proper-flashing-installation-to-prevent-roof-leaks', status: 301 },
  '/blog/top-roof-maintenance-tips-for-south-florida-homes': { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', status: 301 },
  '/blog/seasonal-roof-maintenance-checklist-for-florida-homes': { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', status: 301 },
  '/blog/what-to-do-when-your-roof-leaks': { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', status: 301 },
  '/blog/top-5-roofing-mistakes-south-florida-homeowners-make-and-how-to-avoid-them': { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', status: 301 },
  '/blog/comparing-asphalt-vs-metal-roofs-which-is-right-for-you': { to: '/blog/metal-roof-vs-shingles-florida-2026', status: 301 },
  '/blog/how-to-budget-for-a-new-roof-without-surprises': { to: '/blog/roof-pricing-financing-guide', status: 301 },
  '/blog/how-to-choose-the-right-roofing-material-for-your-south-florida-home-with-all-phase-construction-usa': { to: '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes', status: 301 },
  '/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida': { to: '/blog', status: 301 },
  '/blog/roles-responsibilities-of-a-roofing-contractor-why-it-matters-to-you': { to: '/blog', status: 301 },
  '/blog/my-safe-florida-condo-program-prepare-for-the-2025-reopening-with-all-phase-construction-usa': { to: '/blog', status: 301 },
  '/blog/my-safe-florida-condominium-pilot-program': { to: '/blog', status: 301 },
  '/blog/roofing-contractors-what-do-they-do-on-and-off-the-job-site': { to: '/blog', status: 301 },
  '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl': { to: '/blog', status: 301 },
  '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl-6': { to: '/blog', status: 301 },
  '/blog/green-roofs-the-eco-friendly-roofing-solution-for-south-florida-homes': { to: '/blog', status: 301 },
  '/blog/roofing-solutions-for-multi-family-and-hoa-communities': { to: '/blog', status: 301 },
  '/blog/can-solar-panels-void-my-roof-warranty': { to: '/blog', status: 301 },
  '/blog/why-choosing-an-owens-corning-certified-contractor-like-all-phase-construction-usa-matters-for-your-roofing-project': { to: '/blog', status: 301 },
  '/blog/what-questions-to-ask-your-roofing-contractor-before-hiring': { to: '/blog', status: 301 },
  '/blog/what-is-a-cool-roof-and-can-it-save-you-money': { to: '/blog', status: 301 },
  '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not': { to: '/blog', status: 301 },
  '/blog/commercial-roof-coatings-are-they-worth-the-investment': { to: '/blog', status: 301 },
  '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage': { to: '/blog', status: 301 },
  '/blog/sunnova-sunsafe-benefits': { to: '/blog', status: 301 },
  '/blog/why-permitting-matters-in-roofing-and-construction-projects': { to: '/blog', status: 301 },
  '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home': { to: '/blog/wind-mitigation-roof-south-florida', status: 301 },
  '/blog/top-roofers-in-broward-and-palm-beach-counties': { to: '/blog', status: 301 },

  // GSC Redirect error fixes — 2026-04-13
  '/blog/march-13th-weekly-newsletter': { to: '/blog', status: 301 },
  '/blog/how-long-does-it-take-to-get-a-roof-permit-in-south-florida': { to: '/blog', status: 301 },
  '/blog/how-often-should-i-replace-my-roof-in-south-florida': { to: '/blog', status: 301 },
  '/blog/bug-free-summers-the-best-screens-for-insect-protection': { to: '/blog', status: 301 },
  '/blog/what-to-expect-during-a-roof-replacement-project': { to: '/blog', status: 301 },
  '/blog/how-roof-color-affects-energy-efficiency-in-hot-climates': { to: '/blog', status: 301 },
  '/blog/why-homeowners-are-choosing-metal-roofs-in-2025-see-the-all-phase-difference': { to: '/blog', status: 301 },
  '/blog/how-long-will-my-new-roof-last-a-breakdown-by-material': { to: '/blog', status: 301 },
  '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl-2': { to: '/blog', status: 301 },
  '/blog/how-to-choose-the-best-roofing-contractor-for-your-next-building-project': { to: '/blog', status: 301 },
  '/blog/what-is-spline': { to: '/blog', status: 301 },
  '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl-5': { to: '/blog', status: 301 },
  '/blog/exposed-ceilings-can-have-challenges-when-getting-a-new-roof': { to: '/blog', status: 301 },
  '/blog/our-roofing-company-is-proud-to-be-a-family-owned-business': { to: '/blog', status: 301 },
  '/blog/can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners': { to: '/blog', status: 301 },
  '/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid': { to: '/blog', status: 301 },
  '/blog/how-much-does-a-screen-enclosure-cost': { to: '/blog', status: 301 },
  '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl-4': { to: '/blog', status: 301 },
  '/blog/author/douglas-silva': { to: '/about-us', status: 301 },

  // GSC 404 + Crawled-not-indexed dead blog posts — 2026-04-13
  '/blog/how-to-spot-and-fix-roof-leaks-in-south-florida-a-homeowners-guide-to-protecting-our-home': { to: '/blog', status: 301 },
  '/blog/looking-for-a-roofing-contractor-near-deerfield-beach': { to: '/blog', status: 301 },
  '/blog/how-much-does-a-new-shingle-roof-cost': { to: '/blog/roof-replacement-cost-broward-county-2026', status: 301 },
  '/blog/what-type-of-screen-should-i-install': { to: '/blog', status: 301 },
  '/blog/tips-for-preparing-for-the-construction-of-your-new-roof': { to: '/blog', status: 301 },
  '/blog/top-5-benefits-of-installing-a-screen-room-in-florida': { to: '/blog', status: 301 },
  '/blog/all-phase-construction-unique-benefits': { to: '/blog', status: 301 },
  '/blog/one-contractor-or-multiple-why-a-full-service-contractor-is-best-for-your-south-florida-roof': { to: '/blog', status: 301 },
  '/blog/choosing-the-best-roofing-materials-for-your-boca-raton-home-with-all-phase-construction-usa': { to: '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes', status: 301 },
  '/blog/all-phase-construction-usa-roofing-experts-in-deerfield-beach-fl-3': { to: '/blog', status: 301 },
  '/blog/the-roi-of-installing-solar-panels-in-florida': { to: '/blog', status: 301 },

  // Blog consolidation -- 2026-04-20
  // Redirect the live Supabase-backed /blog/best-roofing-companies-south-florida
  // to the stronger, native /south-florida-roofing-reviews page (consolidates
  // duplicate intent and concentrates link equity on the canonical URL).
  '/blog/best-roofing-companies-south-florida': { to: '/south-florida-roofing-reviews', status: 301 },

  // NOTE: The following blog posts are LIVE (Supabase CMS) and served by the SPA.
  // They should NOT be in this redirect map:
  //   /blog/are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida
  //   /blog/impact-of-tariffs-on-metal-roofing-prices
  //   /blog/why-choose-tile-roofing-in-south-florida
  //   /blog/what-is-roof-underlayment-and-why-does-it-matter
  //   /blog/residential-flat-roofs-types-options-and-florida-considerations
};

// Blog tag and feed wildcards
const BLOG_REDIRECT_PREFIXES = [
  { prefix: '/blog/tag/', to: '/blog', status: 301 },
];

export default async function handler(
  request: Request,
  context: Context
) {
  const url = new URL(request.url);
  let { pathname } = url;

  // Strip trailing slash for consistent matching (except root)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.replace(/\/+$/, '');
  }

  // 1. Check exact match redirects
  const redirect = BLOG_REDIRECTS[pathname];
  if (redirect) {
    if (redirect.status === 410) {
      return new Response(
        '<html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This blog post has been permanently removed.</p></body></html>',
        {
          status: 410,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        }
      );
    }
    return new Response(null, {
      status: redirect.status,
      headers: { Location: `${url.origin}${redirect.to}` },
    });
  }

  // 2. Check prefix-based redirects (tags, feeds)
  for (const rule of BLOG_REDIRECT_PREFIXES) {
    if (pathname.startsWith(rule.prefix)) {
      return new Response(null, {
        status: rule.status,
        headers: { Location: `${url.origin}${rule.to}` },
      });
    }
  }

  // 3. Check for /blog/*/feed patterns
  if (pathname.match(/^\/blog\/[^/]+\/feed$/)) {
    return new Response(null, {
      status: 301,
      headers: { Location: `${url.origin}/blog` },
    });
  }

  // 4. For blog paths without prerendered HTML, serve the SPA
  //    Netlify would 404 these since dist/blog/ directory exists but
  //    the specific slug directory doesn't. Rewrite to index.html
  //    so the React app handles rendering via Supabase + static fallback.
  //    context.next() would let Netlify serve the prerendered HTML if it exists,
  //    but returns 404 if it doesn't. Instead, we try next() and check the response.
  const response = await context.next();
  if (response.status === 404) {
    // No prerendered HTML found — serve the SPA instead
    const spaUrl = new URL('/index.html', url.origin);
    return context.rewrite(spaUrl);
  }
  return response;
}
