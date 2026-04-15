# CLAUDE.md — All Phase Construction USA Site

Repository-wide instructions for future Claude sessions. Read this first before making changes.

## What this repo is

Production site for All Phase Construction USA — a dual-licensed roofing contractor (CCC-1331464 / CGC-1526236) operating out of Deerfield Beach, FL, serving Broward County and Palm Beach County. Live at https://allphaseconstructionfl.com.

This is the ONLY canonical codebase. There was an abandoned Bolt.new duplicate ("All Phase Construction Website (duplicated)") that never successfully deployed. Ignore it.

## Stack

- Vite 5 + React 18 + TypeScript (strict)
- Tailwind 3 (JIT) + `@tailwindcss/typography`
- React Router 7 (client-side routing)
- `react-helmet-async` for client-side meta management
- Supabase client for blog content (read-only in the live site)
- Deployed on Netlify

## Build pipeline (the important part)

The Netlify build command is:

```
npx vite build && node scripts/prerender-static.mjs && node scripts/submit-indexnow.mjs
```

Local `npm run build` runs a longer chain (`build-blog-content`, `optimize-images`, `generate-sitemap`, `generate-html-sitemap`, `vite build`, `prerender`). Netlify only runs Vite build + prerender + IndexNow submission — so any step that must gate a deploy has to live in prerender or be a Netlify plugin.

**Publish dir:** `dist/`. Prerendered HTML is written to both `public/` and `dist/` during the prerender step.

## How prerendering works

`scripts/prerender-static.mjs` (≈5,400 lines, the core of the SEO system) runs after `vite build`. For each route in the site's route table, it:

1. Loads the Vite-built `dist/index.html` as a template (`loadProductionTemplate()`).
2. Substitutes route-specific `<title>`, meta description, canonical URL, Open Graph tags.
3. Injects JSON-LD schema immediately before `</head>`.
4. Injects SEO-only static content into a hidden `#seo-static` block inside `<body>` so Google sees content without executing React.
5. Writes the resulting HTML to `dist/<route>/index.html` AND `public/<route>/index.html`.

Client-side React still hydrates and takes over after first paint. The prerendered HTML exists purely so Google and Bing see rendered content.

## Where JSON-LD schema lives

**All JSON-LD is generated in `scripts/prerender-static.mjs`.** Do not add JSON-LD via `react-helmet-async` or `useEffect` — those only run client-side, so Google sees empty.

Three schema layers inside the prerender script:

1. **`baseOrgSchema`** (line ~1753) — RoofingContractor schema injected on every non-RoofingContractor page. Carries `aggregateRating` (this is what earns the star rich snippet). Does NOT carry an inline `review` array (intentionally removed 2026-04-06 to fix GSC "multiple aggregate ratings" errors on `best-roofers-*` pages).
2. **Page-specific schema** (varies by route) — if a page's schema is itself a RoofingContractor, it REPLACES `baseOrgSchema` entirely (see `schemaToInject` logic around line 1810). This means page-specific RoofingContractor schemas must carry their own `aggregateRating` or the page won't get a star rating.
3. **Wave-C backfill** (line ~2804) — scans the location-page schema array for `FAQPage`; if missing, appends one built from `buildLocationFaqs(city, location)`.

Key generator functions:

- `generateDeerfieldBeachSchema()` — HQ-specific RoofingContractor (line ~1599)
- `buildFaqSchema(faqs)` — FAQPage schema builder
- `buildLocationFaqs(city, location)` — generates FAQ array per city
- `buildMapHtml(city)`, `buildTestimonialsHtml(...)`, `buildFaqHtml(...)` — HTML injections that parallel the schema

For `/locations/:slug` pages the flow is: `buildLocationSeo(location)` → special-case content/schema (Deerfield, Boca Raton) → `CITY_PAGE_SCHEMAS` check → Wave-C FAQ backfill → `createHTMLTemplate(...)`.

For county hub pages (`/locations/broward-county`, `/locations/palm-beach-county`) the schema includes RoofingContractor + BreadcrumbList. See the `COUNTY_HUBS.forEach` block.

For landmark pages (`/locations/:city/:landmark`) the schema includes FAQPage + BreadcrumbList. See the `LANDMARKS.forEach` block.

## Where meta tags live

`buildLocationSeo(location)` in `src/lib/locationSeo.ts` produces `{title, description, canonical, robots, ogTitle, ogDescription, ogUrl, schemaJsonLd, schemaObject}`. A DUPLICATE of `buildLocationSeo` lives in `scripts/prerender-static.mjs` because the prerender runs in Node and can't import TS directly. If you change one, change both — they must stay in sync.

Overrides live on individual `Location` records in `src/data/locations.ts`. Add a `titleOverride`, `descriptionOverride`, etc. there to customize per-city without touching the builder.

## Data sources (single source of truth)

- `src/data/locations.ts` — every `/locations/:slug` city, plus its county and overrides
- `src/data/landmarks.ts` — landmark cluster pages (PR #2 work)
- `src/data/cities.json`, `cityCoordinates.ts` — city metadata (coordinates, etc.)
- `src/data/bestRoofersData.ts` — content for `best-roofers-*` listicle pages

The prerender script reads these same files (as JSON or via regex-parser for .ts) so Node-side and browser-side stay consistent.

## Testing schema locally before deploy

```
npm run build
npx serve dist
```

Then open the page you changed, View Source, and confirm the `<script type="application/ld+json">` block looks right. Paste the page URL into https://search.google.com/test/rich-results to validate.

For a quick local check without running the full build:

```
node scripts/prerender-static.mjs
grep -A 50 'application/ld+json' public/locations/deerfield-beach/index.html
```

(Prerender requires `dist/index.html` to exist, so run `vite build` first.)

## Common pitfalls

- **Schema injection from React components does not survive prerender.** Client-side `useEffect` that appends `<script type="application/ld+json">` to `document.head` only runs after hydration, which Google's initial crawl doesn't see. Always add schema in `prerender-static.mjs`.
- **RoofingContractor schemas replace the base.** If your page-specific schema is type `RoofingContractor`, it entirely REPLACES `baseOrgSchema`, which means you lose `aggregateRating` unless you include it explicitly.
- **Do not re-add inline `review` arrays.** They re-trigger the GSC "multiple aggregate ratings" error. Only `aggregateRating` belongs inside a RoofingContractor.
- **Single source of truth for county.** `location.county` on the Location record is canonical. Do NOT reintroduce a hardcoded `BROWARD_CITIES` array — it caused 3-way drift before April 2026.
- **Prerender parser is regex-based.** When editing `src/data/landmarks.ts` or `src/data/locations.ts`, use double-quoted strings only. Single quotes won't parse.
- **`pretty_urls = false` in netlify.toml.** Enabling pretty URLs caused redirect loops on the entire site (commits c51bbb9d, b7a937c0). Don't flip this without extreme caution.

## Netlify deploy checklist

Before merging a schema-affecting PR:

1. Build locally: `npm run build` and confirm no errors.
2. Serve `dist/` and paste the changed page into Rich Results Test.
3. Confirm `@type` entries you expect are detected.
4. After Netlify deploys, paste the LIVE production URL into Rich Results Test to confirm the deploy actually shipped the change.
5. In Google Search Console, hit "Request Indexing" on the changed URL so Google picks it up fast.
6. After 24 hours, check GSC Enhancements reports (FAQ, Breadcrumbs, Review snippets) for regressions.

## Memory dump of SEO history that matters

- April 2026 pivot: flipped all `/locations/*` titles from "Roofing Services in X" to "Roof Replacement in X" (commit 55a949de).
- April 6, 2026: removed inline `review` arrays from all schemas to fix GSC "multiple aggregate ratings" errors.
- April 13, 2026 (PR #2): added Boca Raton landmark pages (Mizner Park, Town Center, FAU) for geo-relevance toward `palm-beach-county-roofing-contractor`.
- April 13, 2026 (PR #3): added county-hub backlink block to every prerendered city page.
- April 2026 LeadSnap baseline for `palm beach county roofing contractor`: avg rank 6.26, Top 3% 45.56%, market share 57.04% (2nd place). Target by end of April: avg rank ≤ 3.0, Top 3% ≥ 60%.

## Hidden-off-screen navigation

There's a `position: absolute; left: -10000px;` nav somewhere in the site. This is a known concern (cloaking risk) but has been intentionally left in place for now. Do not touch it in unrelated PRs.

## Getting help

When in doubt, stop and ask. The prerender script is long and has a lot of historical crust; the wrong change there can silently break every page at once.
