# Claude Session Notes — allphaseconstructionfl.com

> **Read this file at the start of every session.** It contains architecture details, known quirks, and deployment pipeline info that will save significant time.

Last updated: 2026-03-30

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
- Cannot run `npm install` or `vite build` locally in the sandbox (missing dependencies, proxy blocks npm registry)
- All builds happen on Netlify's servers — test by pushing to GitHub and waiting for deploy
- Can use `git push` via GitHub PAT

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
| `scripts/prerender-static.mjs` | Generates static HTML for SEO (runs on Netlify) |
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
