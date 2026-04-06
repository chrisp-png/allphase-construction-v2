# Claude Session Notes — allphaseconstructionfl.com

> **Read this file at the start of every session.** It contains architecture details, known quirks, and deployment pipeline info that will save significant time.

Last updated: 2026-04-06

---

## Project Overview

- **Site**: allphaseconstructionfl.com — roofing contractor website for All Phase Construction USA
- **Stack**: React + Vite SPA, deployed via GitHub → Netlify
- **Repo**: `chrisp-png/allphase-construction-v2` (GitHub)
- **Owner**: Chris Porosky (chris.p@allphasesfl.com / cporosky@gmail.com)
- **Git config**: user.email = "chris.p@allphasesfl.com", user.name = "Chris Porosky"

---

## Deployment Pipeline

1. Push to `main` on GitHub
2. Netlify auto-deploys from GitHub
3. **Build command** (from `netlify.toml`, overrides `package.json`):
   ```
   npx vite build && node scripts/prerender-static.mjs && node scripts/submit-indexnow.mjs
   ```
4. **Publish directory**: `dist`
5. Deploy typically takes 2-3 minutes after push

### Build Steps Explained

- `npx vite build` — Standard Vite build, outputs to `dist/`
- `node scripts/prerender-static.mjs` — Generates static HTML pages in `dist/` for SEO (locations, service pages, blog posts from sitemap)
- `node scripts/submit-indexnow.mjs` — Submits URLs to IndexNow for fast search engine discovery

---

## Standing Content Directives (DO NOT VIOLATE)

These are owner directives from Chris that apply to ALL future content edits anywhere on the site:

1. **NO insurance language in new copy.** All Phase is in South Florida on the east coast — no hail, no recent hurricanes. Never write that we "work directly with your insurance carrier" or similar. Avoid: insurance, claim, carrier, deductible, hail, hurricane damage. *Existing* copy that already contains insurance language (e.g. Boca Raton + Delray Beach meta descriptions) is grandfathered — leave it alone unless explicitly told to remove it. The directive is "no NEW insurance language," not "scrub everything."
2. **Location pages are REPLACEMENT pages, not generic roofing pages.** Title/H1/meta should signal roof replacement, reroofing, new roof — not "roofing services." The /roof-repair/* and /roof-inspection/* silos handle the other intents.
3. **HVHZ jurisdictional accuracy.** Only Broward + Miami-Dade are *legally* in HVHZ. Palm Beach cities are "voluntarily built to HVHZ spec." Don't claim Palm Beach properties are HVHZ-required.
4. **Don't introduce new problems.** The site was working fine before; verify before pushing.

---

## Locations Architecture (Single Source of Truth Chain)

This is the most-edited part of the site. Understand it before touching anything in `/locations/*`.

### The SOT Chain

```
src/data/locations.ts        ← single source of truth (44 cities, structured fields)
       │
       ├──► src/lib/locationSeo.ts          buildLocationSeo() — title/desc/canonical/schemaJsonLd
       │       │
       │       ├──► src/config/seoTitles.ts generateSEOMetadata() — runtime React meta tags
       │       └──► scripts/prerender-static.mjs LOCATIONS.forEach loop — prerendered HTML
       │
       └──► src/data/cities.json (separate but parallel — used by GenericLocationTemplate at runtime)
```

### Two Render Paths

The runtime React layer for `/locations/:slug` is dispatched by `src/pages/DynamicCityRouter.tsx`:

1. **24 hardcoded MoneyPage components** in `src/pages/locations/*MoneyPage.tsx` — used for high-revenue "money" cities (boca-raton, fort-lauderdale, west-palm-beach, etc.). Each is a custom React page.
2. **`src/pages/templates/GenericLocationTemplate.tsx` fallback** for everything else (the ~20 Wave-C thin cities). Uses `cities.json` not `locations.ts`. As of 2026-04-06 it now mounts `<StickyConversionBar />`.

**WARNING — `src/pages/locations/CityMoneyPage.tsx` is an orphan.** It is NOT imported anywhere. Don't waste time editing it thinking it controls /locations rendering. The real templates are the 24 hardcoded MoneyPages + GenericLocationTemplate.

### What the Prerender Script Actually Does

`scripts/prerender-static.mjs` is the bigger lever than the React components — it generates the static HTML that Google indexes BEFORE hydration. As of 2026-04-06 the `LOCATIONS.forEach` loop (lines ~2680–2820) injects, on every /locations/[city] page:

- A 5-pill **trust strip** immediately after `</h1>` (CCC + CGC, HVHZ-Certified, A+ BBB, Since 2005, 2,500+ Roofs)
- An **`<time datetime="2026-04">Updated April 2026</time>` stamp** under the trust strip
- A **6-question FAQPage** (replacement-focused, insurance-free, dynamically templated per city) — both as visible `<details>` HTML and as JSON-LD schema
- An **embedded Google Maps iframe** (keyless `maps.google.com/maps?q=City+FL&output=embed`)
- **2 city-specific testimonials** signed with first-name + neighborhood + city, deterministically rotated from a 4-quote pool

The injection helpers (`buildLocationFaqs`, `buildFaqSchema`, `buildFaqHtml`, `buildMapHtml`, `buildTestimonialsHtml`) are defined locally inside the LOCATIONS.forEach scope. If a city already has its own hand-tuned FAQPage in `CITY_PAGE_SCHEMAS` (e.g. Palm Beach, Lauderdale-By-The-Sea), the FAQPage append is skipped to avoid duplication.

### CITY_PAGE_SCHEMAS

`scripts/prerender-static.mjs` ~line 2248 has a `CITY_PAGE_SCHEMAS` object keyed by `/locations/${slug}`, each entry holding a `directSchema` array (RoofingContractor + optional FAQPage + optional BreadcrumbList). To add hand-crafted FAQs for a specific city, add an entry here — the LOCATIONS.forEach loop picks it up automatically.

### Wilton Manors + Westlake

Both used to be 301-redirected away. As of 2026-04-06 they are proper /locations/ pages served by GenericLocationTemplate. Don't reintroduce those redirects in `public/_redirects`.

---

## Critical Foot-Guns

### 🔴 prerender-static.mjs reads locations.ts as TEXT, not as a TS import

Lines 25–40 of `scripts/prerender-static.mjs`:

```js
const locationsRaw = fs.readFileSync(locationsDataPath, 'utf-8');
const locationsMatch = locationsRaw.match(/export const locations: Location\[\] = \[([\s\S]*?)\];/);
const locationsArrayText = '[' + locationsMatch[1] + ']';
const locationsJson = locationsArrayText
  .replace(/\/\/[^\n]*/g, '')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/(\w+):/g, '"$1":')   // ← THIS IS THE FOOT-GUN
  .replace(/,(\s*[}\]])/g, '$1');
const LOCATIONS = JSON.parse(locationsJson);
```

The `(\w+):` regex is meant to quote object keys, but it has no string-awareness. **Any `word:` pattern (a word character immediately followed by a colon) inside a STRING VALUE in `locations.ts` will be mangled and break `JSON.parse`, killing the Netlify build with `SyntaxError: Expected ',' or '}'`.**

This already happened once on 2026-04-06 with the meta description string `"Free inspection: (754) 227-5605"` — the regex turned `inspection:` into `"inspection":` and corrupted the JSON.

**Things to NEVER write inside string values in `src/data/locations.ts`:**

- `Free inspection: ...` (broke the build) — use `Free inspection (754)...` or hyphen instead
- `Note: ...`, `Tip: ...`, `URL: ...`, `Hours: ...`
- Time strings like `9:00 AM`
- `https://` is fine (the `://` doesn't match `\w+:` because `https` is followed by `:/` not `:` alone — wait, actually it DOES match. Test before adding URLs to string values.)
- Anything where a word character touches a colon

**Future cleanup**: Replace the text-regex hack with a proper TS import (e.g., dynamic `import()` or convert `locations.ts` to a JSON file). Until then, this is the rule.

### 🟡 Netlify is NOT reporting build status to GitHub

`api.github.com/repos/.../commits/{sha}/check-runs` returns `total_count: 0` and `/status` returns `state: pending` with empty `statuses` for every commit. Netlify's GitHub webhook is connected enough to trigger builds but is NOT posting checks/statuses back. To verify a deploy you must:

1. Open Netlify → Deploys (or use a Netlify PAT against the API), OR
2. Hit the live URL via Claude in Chrome and check whether the new content is present

---

## Critical Architecture Quirks

### 1. `publicDir: false` in vite.config.ts

Vite's automatic public directory copying is **disabled**. Instead, a custom `manualPublicCopyPlugin` selectively copies files from `public/` to `dist/`.

- **Images**: Copies recursively from `public/images/`, `public/blog-images/`, `public/location-images/`, etc.
- **SEO files**: Explicitly listed in an array:
  ```ts
  const seoFiles = ['robots.txt', 'sitemap.xml', 'sitemap.html', '_headers', '_redirects', 'llms.txt', 'llms-full.txt', 'blog-content.json'];
  ```
- **HTML files**: `copyHtmlRecursive()` copies `.html` files from public subdirectories
- **If you add a new static file to `public/`**, you must add it to the `seoFiles` array or it won't be deployed.

### 2. Prerendered Blog Pages Create a Directory Issue

`scripts/prerender-static.mjs` reads blog slugs from `sitemap.xml` and creates `dist/blog/{slug}/index.html` for each one. This creates a `dist/blog/` directory structure that causes Netlify to enter "directory mode" for `/blog/*` paths.

**Consequence**: Any `/blog/*` URL that does NOT have a prerendered HTML file gets a raw Netlify 404 — the SPA fallback (`/* /index.html 200`) does NOT catch it.

**Solution**: The `blog-redirects` edge function (`netlify/edge-functions/blog-redirects.ts`) handles this:
- Dead blog URLs → 301 redirect or 410 Gone
- Unknown blog slugs → calls `context.next()`, checks for 404, rewrites to `/index.html` so the SPA handles it

### 3. Netlify Redirect Priority

Redirect processing order:
1. **Edge functions** — Run FIRST, before any static file resolution or redirect rules
2. **`_redirects` file** — Processed before `netlify.toml` redirects
3. **`netlify.toml` redirects** — Processed after `_redirects`
4. **Static files** — Served if a matching file exists in `dist/`

**Important**: `_redirects` and `netlify.toml` redirects do NOT fire for paths inside directories that exist in `dist/` (like `dist/blog/`). Use edge functions for redirects in those paths.

- `force = true` (`301!` in `_redirects`) overrides static files but NOT directory resolution
- The `/* /index.html 200` SPA fallback in `netlify.toml` has `force = false`

### 4. Edge Functions

Located in `netlify/edge-functions/`:

- **`strip-slash.ts`** — Strips trailing slashes, handles dead routes, returns 410 for WordPress artifacts
  - Runs on: `/*/` (trailing slash paths), `/wp-content/*`, `/wp-admin/*`, `/wp-includes/*`, `/wp-json/*`, `/feed`
  - Has a `DEAD_ROUTES` map for single-hop redirects (trailing slash → final target)

- **`blog-redirects.ts`** — Handles all blog URL redirects and SPA fallback for missing blog pages
  - Runs on: `/blog/*`
  - Contains `BLOG_REDIRECTS` map for dead/legacy blog URLs (301s and 410s)
  - Falls through to `context.next()` for valid blog URLs; rewrites to `/index.html` if Netlify returns 404

---

## Blog Content System

### Supabase (Primary)

- **URL**: `https://vsjebxljdhomgmqbqgdi.supabase.co`
- **Anon key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzamVieGxqZGhvbWdtcWJxZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODkxMzcsImV4cCI6MjA4MjU2NTEzN30._gjIILl6LtMKnoERihdaRrQ-OQQ1rKoB_FXnoxRCW2Y`
- **RLS**: Read-only for anon key (SELECT only). Cannot INSERT/UPDATE/DELETE via API.
- **Dashboard access**: The Supabase project was created via Bolt under a different account. The GitHub account `chrisp-png` does NOT have Supabase dashboard access.
- Blog posts table: `blog_posts` with columns: id, slug, title, content, excerpt, published, published_date, author, categories, tags, featured_image, meta_title, meta_description, faqs, related_post_ids, view_count, etc.

### Static Fallback System

When Supabase content is missing or placeholder:

1. **`BlogPostPage.tsx`** (around line 195-290) fetches from Supabase first
2. If Supabase returns data but content is placeholder (`"See blog/xxx.md"` or < 500 chars), it fetches `/blog-content.json` and replaces the content
3. If Supabase returns NO data (null), it checks `/blog-content.json` for the slug and creates a synthetic post object using hardcoded metadata from `staticPostMeta` map
4. The `staticPostMeta` map currently covers 3 posts: `our-roofing-company-is-proud-to-be-a-family-owned-business`, `how-to-hire-a-roofer-in-south-florida`, `how-much-does-a-screen-enclosure-cost`

### blog-content.json

- Generated by `scripts/build-blog-content.mjs` from markdown files in `/blog/` directory
- Contains ~16 entries mapping slug → HTML content
- Committed to repo as `public/blog-content.json`
- Copied to `dist/` via the `manualPublicCopyPlugin` (listed in `seoFiles` array)
- The Netlify build does NOT run `build-blog-content` — the committed JSON file is used directly

### Blog Markdown Files

- Located in `/blog/` at repo root
- One special slug mapping: `how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid.md` → slug `how-to-hire-a-roofer-in-south-florida`

---

## Sandbox Limitations

- The Claude sandbox proxy blocks direct API calls to `supabase.co` (403 from allowlist)
- The sandbox proxy ALSO blocks `allphaseconstructionfl.com` and `api.netlify.com` — you cannot curl/fetch the live site from the Bash sandbox or via WebFetch. Use **Claude in Chrome** for live verification (it runs on the user's machine and bypasses the egress proxy entirely).
- `api.github.com` and `raw.githubusercontent.com` ARE allowlisted — you can read repo state and commit metadata from there.
- Cannot run `npm install` or `vite build` locally in the sandbox (missing dependencies, proxy blocks npm registry). However `node --check scripts/prerender-static.mjs` works for syntax validation and is recommended before every push that touches the prerender script.
- All builds happen on Netlify's servers — test by pushing to GitHub and verifying live via Chrome.
- Can use `git push` via GitHub PAT (credential helper "store" is seeded)

---

## Google Search Console

- Property: `sc-domain:allphaseconstructionfl.com`
- Logged in via Chris's Google account (cporosky@gmail.com)
- Access via: `https://search.google.com/search-console?resource_id=sc-domain%3Aallphaseconstructionfl.com`

### Known Issues (as of 2026-03-30)

- **Soft 404**: 20 URLs — validation restarted 3/30/26 after deploying redirect fixes
- **Page with redirect**: 236 URLs — many are intentional legacy redirects
- **Server error (5xx)**: 48 URLs — validation started
- **Not found (404)**: 14 URLs
- **Redirect error**: 10 URLs

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `netlify.toml` | Build config, edge function registration, redirect rules |
| `public/_redirects` | Additional redirect rules (lower priority than netlify.toml) |
| `vite.config.ts` | Vite config with `publicDir: false` and custom copy plugin |
| `src/pages/BlogPostPage.tsx` | Blog rendering with Supabase + static fallback |
| `src/lib/supabase.ts` | Supabase client config |
| `scripts/prerender-static.mjs` | Generates static HTML for SEO (runs on Netlify). Reads `locations.ts` as text — see foot-gun above |
| `src/data/locations.ts` | SOT for /locations/[city] — 44 cities with title/desc/neighborhoods/zips/landmarks/hvhz |
| `src/data/cities.json` | Parallel SOT used by GenericLocationTemplate runtime React only |
| `src/lib/locationSeo.ts` | `buildLocationSeo()` — builds title/desc/canonical/schemaJsonLd from locations.ts |
| `src/config/seoTitles.ts` | `generateSEOMetadata()` — runtime React meta tag generator |
| `src/pages/DynamicCityRouter.tsx` | Dispatches /locations/:slug to one of 24 hardcoded MoneyPages or GenericLocationTemplate |
| `src/pages/templates/GenericLocationTemplate.tsx` | Fallback template for ~20 thin Wave-C cities; mounts StickyConversionBar |
| `src/pages/locations/CityMoneyPage.tsx` | ⚠️ ORPHAN — not imported anywhere, do not edit |
| `src/components/StickyConversionBar.tsx` | Desktop top bar + mobile bottom CTA bar; wired into all MoneyPages + GenericLocationTemplate |
| `scripts/build-blog-content.mjs` | Generates blog-content.json from markdown |
| `scripts/submit-indexnow.mjs` | IndexNow submission after deploy |
| `netlify/edge-functions/strip-slash.ts` | Trailing slash removal + dead routes + 410s |
| `netlify/edge-functions/blog-redirects.ts` | Blog URL redirects + SPA fallback for missing pages |
| `public/blog-content.json` | Static blog HTML content (generated, committed) |
| `blog/*.md` | Blog post markdown source files |

---

## Bolt Integration

Chris also uses Bolt (bolt.new) to make changes to this repo. Bolt pushes directly to the same `main` branch. This can cause merge conflicts when both Claude and Bolt are making changes. Always `git pull origin main --rebase` before pushing if the push is rejected.

---

## Tips for Future Sessions

1. **Always read this file first** before making changes
2. **Don't try to npm install or build locally** — it won't work in the sandbox
3. **Test changes by pushing to GitHub** and waiting 2-3 minutes for Netlify deploy
4. **Blog redirects must go in the edge function** (`blog-redirects.ts`), not `_redirects` or `netlify.toml`
5. **New static files in `public/`** need to be added to the `seoFiles` array in `vite.config.ts`
6. **Supabase is read-only** via the anon key — use the static fallback system for content that can't be written to Supabase
7. **Git pull before push** to avoid conflicts with Bolt
