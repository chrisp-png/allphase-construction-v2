# Boca Raton SSR Meta Tags Fix - Feb 5, 2026

## Issue

The Boca Raton service area page was showing:
- ✅ **Correct title** in view-source
- ❌ **Wrong meta description** (global default)
- ❌ **Wrong OG tags** (global default)
- ❌ **Wrong Twitter tags** (global default)

## Root Cause

The initial edge function regex patterns were too strict and didn't match the HTML attribute formatting variations in `index.html`.

## Solution Applied

Updated `/netlify/edge-functions/inject-seo.ts` with more robust regex patterns:

### Old Pattern (too strict):
```javascript
html.replace(/<meta name="description" content="[^"]*">/i, ...)
```

### New Pattern (flexible):
```javascript
html.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/gi, ...)
```

### Key Changes:
1. **`\s+`** - Matches any amount of whitespace between attributes
2. **`["']`** - Matches both single and double quotes
3. **`\/?`** - Makes self-closing slash optional
4. **`gi`** flag - Global + case-insensitive matching
5. Applied to all 6 meta tags: title, description, og:title, og:description, twitter:title, twitter:description

## Verification Test

Created `test-seo-injection.cjs` to simulate edge function behavior locally:

```bash
node test-seo-injection.cjs
```

**Results**: ✅ ALL 6 TAGS NOW REPLACE CORRECTLY

```
✅ Title matches
✅ Description matches
✅ OG Title matches
✅ OG Description matches
✅ Twitter Title matches
✅ Twitter Description matches
```

## Expected SSR Output After Deployment

**URL**: `/locations/deerfield-beach/service-area/boca-raton/`

**View-source should show**:

```html
<title>Roof Inspection in Boca Raton for Repairs & Replacement | All Phase</title>
<meta name="description" content="Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide." />
<meta property="og:title" content="Roof Inspection in Boca Raton for Repairs & Replacement | All Phase" />
<meta property="og:description" content="Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide." />
<meta name="twitter:title" content="Roof Inspection in Boca Raton for Repairs & Replacement | All Phase" />
<meta name="twitter:description" content="Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide." />
```

## Post-Deployment Verification

### Test 1: curl view-source
```bash
curl -s "https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/?cb=3" | grep -E '<title>|<meta name="description"|<meta property="og:|<meta name="twitter:'
```

**Expected**: All 6 tags show Boca Raton custom content

### Test 2: Browser view-source
1. Visit: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/`
2. Right-click → "View Page Source"
3. Search for: `<meta name="description"`
4. **Verify**: Contains "Get a professional roof inspection in Boca Raton..."

### Test 3: Googlebot Simulator
1. Use Chrome extension to simulate Googlebot
2. View page source
3. **Verify**: All meta tags show Boca Raton content

### Test 4: Social Media Debuggers
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

Enter URL and verify OG tags show Boca Raton content.

## Files Changed

| File | Action | Purpose |
|------|--------|---------|
| `/netlify/edge-functions/inject-seo.ts` | Modified | Fixed regex patterns for all meta tags |
| `/test-seo-injection.cjs` | Created | Local test to verify edge function logic |
| `/SSR_SEO_OVERRIDE_IMPLEMENTATION.md` | Updated | Added fix documentation |
| `/BOCA_RATON_SSR_META_TAGS_FIX.md` | Created | This quick reference document |

## Build Status

✅ Build successful: 26.88s
✅ Local test passed: All 6 meta tags replaced
✅ Ready to deploy

## Timeline

- **Initial Implementation**: Edge function created with basic patterns
- **Issue Discovered**: Title worked, but meta/OG/Twitter tags didn't
- **Root Cause Identified**: Regex patterns too strict
- **Fix Applied**: Updated all patterns with flexible matching
- **Verification**: Local test confirms 100% success rate
- **Status**: ✅ Ready for deployment

## Success Criteria

After deployment, verify:

- [x] Build completes without errors
- [ ] View-source shows all 6 custom meta tags
- [ ] No global defaults visible in Boca Raton page source
- [ ] Google Search Console "Live Test" shows custom metadata
- [ ] Bing Webmaster Tools shows custom metadata
- [ ] Social media debuggers show custom OG tags

## Rollback Plan

If edge function causes issues:

1. Remove edge function config from `netlify.toml`:
   ```toml
   # Comment out or remove:
   # [[edge_functions]]
   # function = "inject-seo"
   # path = "/locations/deerfield-beach/service-area/*"
   ```

2. Redeploy

3. Site will revert to client-side SEO only (React Helmet)

---

**Status**: ✅ Ready to Deploy
**Testing**: ✅ Verified Locally
**Risk Level**: 🟢 Low (only affects Boca Raton route, easily reversible)
**ETA**: ~2-3 minutes to deploy, instant edge function propagation
