# Safety tooling

This directory documents the verification scripts that run before and after
every production deploy. The goal is to make "did this PR regress anything?"
answerable in under 60 seconds.

## Scripts

### `scripts/dist-manifest.mjs`

Walks `dist/` after a build and emits a JSON manifest of every HTML file:
path → `{ size, sha, title, description }`. Only HTML is tracked because
hashed asset filenames (`assets/*.js`, `assets/*.css`) change on every build.

```sh
npm run build
npm run manifest:save              # writes manifests/head.json
```

### `scripts/dist-diff.mjs`

Compares two manifests and exits non-zero on any difference. Use it as a
pre-merge gate to confirm a change only altered the files you meant to alter.

```sh
# on main
npm run build && node scripts/dist-manifest.mjs --out manifests/main.json

# on feature branch
npm run build && node scripts/dist-manifest.mjs --out manifests/head.json
npm run manifest:diff
```

The diff surfaces three categories:

- **Added** — paths new to the build
- **Removed** — paths the build no longer emits
- **Changed** — paths present in both but with a different sha

For a PR that claims to touch one component, a 200-page diff is a red flag.

### `scripts/smoke-test.mjs`

Hits every URL in a sitemap against a base URL. Flags the signatures we know
hurt SEO:

- HTTP status other than 200
- Unexpected redirects during the smoke test
- HTML responses at 18,504 bytes — the exact size of the bare SPA shell.
  If a prerendered page returns this, Netlify is serving `index.html`
  instead of the prerendered output (the exact regression caught on 4/18).
- Empty `<title>` or the default placeholder
  "Roofing Contractor | Broward & Palm Beach | All Phase USA"
- Empty `<meta name="description">`

```sh
# Deploy preview (before merging)
node scripts/smoke-test.mjs --base https://deploy-preview-58--allphase.netlify.app

# Production (after deploy)
npm run smoke:prod
```

The script rewrites every sitemap URL from production to the supplied base,
so the same sitemap file drives preview and production tests.

## Standard workflow for a risky PR

1. On `main`, run `npm run build && node scripts/dist-manifest.mjs --out manifests/main.json`.
2. Check out your feature branch, run `npm run build && npm run manifest:save`.
3. Run `npm run manifest:diff`. The diff should match the PR's stated intent.
4. Push, wait for Netlify deploy preview.
5. Run `node scripts/smoke-test.mjs --base <preview-url>`. Zero failures required.
6. Merge.
7. After the production deploy completes, run `npm run smoke:prod`. Zero failures required.
8. Check Google Search Console Coverage 24 hours later.
