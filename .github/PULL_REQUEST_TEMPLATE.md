<!--
Allphase PR template. Keep this short, but fill in every section.

The safety tooling is there so every change gets a 1:1 audit before merge.
If you skip the checklist you are the "chain reaction" we built the checklist
to prevent.
-->

## Summary

<!-- 1–2 sentences: what this PR changes and why. -->

## Risk assessment

- **Blast radius:** <!-- files/components/URLs that could be affected -->
- **Rollback:** `git revert <commit-sha>` then `netlify deploy --prod` (or merge-via-UI revert)
- **Pages potentially affected:** <!-- list route patterns, or "none" if tooling-only -->

## Pre-merge checklist

Local build & manifest diff:

- [ ] `npm run build` completes without errors locally
- [ ] `node scripts/dist-manifest.mjs --out manifests/head.json` generated
- [ ] `git checkout main && npm run build && node scripts/dist-manifest.mjs --out manifests/main.json` regenerated
- [ ] `node scripts/dist-diff.mjs manifests/main.json manifests/head.json` reviewed — diff matches the PR's intent (no unexpected adds/removes/changes)

Deploy preview verification:

- [ ] Deploy preview URL: `<paste netlify deploy-preview URL>`
- [ ] `node scripts/smoke-test.mjs --base <preview-url>` → **0 failures**
- [ ] Canary URLs opened in preview and title/description/H1 verified:
  - [ ] `/`
  - [ ] `/locations/deerfield-beach`
  - [ ] `/locations/boca-raton`
  - [ ] `/boca-raton-commercial-roofing` (prerendered landing page)
  - [ ] `/locations/parkland/best-roofers-parkland` (best-roofers)
  - [ ] `/roof-repair`
  - [ ] `/blog/metal-roof-vs-tile-roof-south-florida-hurricanes` (blog)
  - [ ] `/privacy-policy` (SPA-only legal)

## Post-merge

- [ ] Run `node scripts/smoke-test.mjs --base https://allphaseconstructionfl.com` within ~5 min of production deploy → 0 failures
- [ ] Check GSC Coverage + Core Web Vitals 24h after deploy; note any new errors
