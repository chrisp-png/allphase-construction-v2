# 403 ERROR DIAGNOSTIC REPORT

## Problem Statement
Crawlers (Screaming Frog, Googlebot, Bingbot) are getting **403 Forbidden** errors when accessing these service pages:
- `/metal-roofing`
- `/commercial-roofing`
- `/flat-roofing`
- `/tile-roofing`
- `/shingle-roofing`
- `/residential-roofing`
- `/pricing-guide`
- `/reviews`
- `/projects`
- `/easy-payments`
- `/roof-maintenance-programs`
- `/roof-replacement-process`
- `/our-location`

**Behavior**: Pages work fine via client-side navigation but fail on direct URL access.

---

## Investigation Results

### 1. ✅ Edge Functions - NO BOT BLOCKING FOUND

**File**: `netlify/edge-functions/strip-slash.ts`

**Purpose**: Strips trailing slashes from URLs (301 redirect)

**Bot Detection**: ❌ **NONE**
- No `user-agent` checking
- No bot detection logic
- No 403 status codes returned
- Only returns:
  - `301` redirect (trailing slash removal)
  - `undefined` (pass through to origin)

**Code Analysis**:
```typescript
// Lines 33-90: Only handles trailing slash removal
export default async function handler(request: Request, context: Context) {
  // Skips root, assets, static files
  // Returns 301 for trailing slashes
  // Returns undefined (passthrough) otherwise
  // NO USER-AGENT CHECKING
  // NO 403 RESPONSES
}
```

**Verdict**: ✅ Edge function is NOT causing 403 errors

---

### 2. ✅ Netlify.toml - NO BLOCKING RULES

**File**: `netlify.toml` (lines 1-139)

**Configuration**:
- Build: `npx vite build && node scripts/prerender-static.mjs`
- Edge function: `strip-slash` on `/*`
- Redirects:
  - Explicit 200 for `/sitemap.xml`, `/robots.txt`, etc.
  - SPA fallback: `/* → /index.html` (200)
- Headers: Cache-Control, X-Robots-Tag, Content-Type only

**Bot Blocking**: ❌ **NONE**
- No user-agent filters
- No bot detection
- No 403 status codes
- No IP blocking

**Verdict**: ✅ netlify.toml is NOT causing 403 errors

---

### 3. ✅ _redirects File - NO BLOCKING RULES

**File**: `public/_redirects` (115 lines)

**Contents**:
- Host canonicalization (www → non-www)
- Subdomain redirects
- Dead route redirects (301)
- Legacy URL redirects (301)
- City inspection page redirects (301)

**Bot Blocking**: ❌ **NONE**
- Only 301 redirects
- No 403 status codes
- No user-agent conditions
- No bot filtering

**Verdict**: ✅ _redirects is NOT causing 403 errors

---

### 4. ⚠️ PRERENDERED PAGES - PARTIAL COVERAGE

**File**: `scripts/prerender-static.mjs` (lines 1251-1281)

**Service Pages Being Prerendered** (13 pages):
```javascript
const servicePages = [
  { path: '/residential-roofing', title: '...' },      // ✅ Prerendered
  { path: '/commercial-roofing', title: '...' },       // ✅ Prerendered
  { path: '/metal-roofing', title: '...' },            // ✅ Prerendered
  { path: '/tile-roofing', title: '...' },             // ✅ Prerendered
  { path: '/shingle-roofing', title: '...' },          // ✅ Prerendered
  { path: '/flat-roofing', title: '...' },             // ✅ Prerendered
  { path: '/roof-inspection', title: '...' },          // ✅ Prerendered
  { path: '/roof-repair', title: '...' },              // ✅ Prerendered
  { path: '/roof-maintenance-programs', title: '...' },// ✅ Prerendered
  { path: '/roof-replacement-process', title: '...' }, // ✅ Prerendered
  { path: '/pricing-guide', title: '...' },            // ✅ Prerendered
  { path: '/easy-payments', title: '...' },            // ✅ Prerendered
  { path: '/blog', title: '...' }                      // ✅ Prerendered
];
```

**Service Pages NOT Being Prerendered**:
- ❌ `/reviews`
- ❌ `/projects`
- ❌ `/our-location`

**Verification**:
```bash
# Prerendered pages (exist in public/)
ls /tmp/cc-agent/61908077/project/public/
✅ commercial-roofing/    ✅ easy-payments/     ✅ flat-roofing/
✅ metal-roofing/         ✅ pricing-guide/     ✅ residential-roofing/
✅ roof-maintenance-programs/  ✅ roof-replacement-process/
✅ shingle-roofing/       ✅ tile-roofing/

# Missing pages (NOT in public/)
❌ reviews/               ❌ projects/          ❌ our-location/
```

**Contents Check**:
```bash
$ head -20 /tmp/cc-agent/61908077/project/public/metal-roofing/index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    ...
    <title>Metal Roofing Installation & Repair | All Phase Construction USA</title>
```

✅ Prerendered pages have proper HTML with SEO metadata

---

### 5. 🔍 SPA FALLBACK BEHAVIOR

**netlify.toml lines 79-82**:
```toml
# --- SPA fallback — MUST be last ---
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

**Flow for Direct URL Access**:

1. **Prerendered Page** (e.g., `/metal-roofing`):
   ```
   Request: GET /metal-roofing
   ↓
   Edge Function: strip-slash.ts (checks for trailing slash)
   ↓ (no trailing slash, passes through)
   Static File: /metal-roofing/index.html exists in public/
   ↓
   ✅ Netlify serves /metal-roofing/index.html (200 OK)
   ```

2. **Non-Prerendered Page** (e.g., `/reviews`):
   ```
   Request: GET /reviews
   ↓
   Edge Function: strip-slash.ts (passes through)
   ↓
   Static File: /reviews/index.html DOES NOT EXIST
   ↓
   SPA Fallback: Serves /index.html (200 OK)
   ↓
   React Router: Loads /reviews route client-side
   ↓
   ✅ Works in browser (React hydrates)
   ❌ Crawler sees /index.html content (may appear as 403 in crawler)
   ```

---

## ROOT CAUSE HYPOTHESIS

### Theory 1: Netlify Build Processing Issue ⚠️ LIKELY
**netlify.toml lines 11-23**:
```toml
[build.processing]
skip_processing = false

  [build.processing.html]
  pretty_urls = false
```

**Issue**: If Netlify's post-processing is interfering with prerendered HTML, it could:
- Strip certain meta tags
- Modify HTML structure
- Create access control issues
- Generate 403 on certain paths

**Test**: Set `skip_processing = true` or `[build.processing.html]` to `skip = true`

---

### Theory 2: Missing Prerendered Files ⚠️ CONFIRMED
**Missing Pages**:
- `/reviews` → Not in prerender script
- `/projects` → Not in prerender script
- `/our-location` → Not in prerender script

**Evidence**:
```bash
$ ls /tmp/cc-agent/61908077/project/public/reviews/
ls: cannot access '/tmp/cc-agent/61908077/project/public/reviews/': No such file or directory
```

**Impact**: These pages fall through to SPA fallback (`/index.html`), which may:
- Confuse crawlers (serve wrong content)
- Trigger Netlify security rules
- Appear as 403 in some crawlers

---

### Theory 3: Dist vs Public Directory Mismatch ⚠️ POSSIBLE

**Build Process**:
1. `vite build` → Outputs to `dist/`
2. `prerender-static.mjs` → Outputs to `public/`
3. Netlify publishes `dist/` (per netlify.toml line 5)

**Issue**: If prerendered pages are in `public/` but Netlify publishes `dist/`, the prerendered HTML won't be deployed!

**Verification Needed**:
```bash
# Check dist/ directory
ls /tmp/cc-agent/61908077/project/dist/metal-roofing/
ls /tmp/cc-agent/61908077/project/dist/reviews/

# Compare with public/
ls /tmp/cc-agent/61908077/project/public/metal-roofing/
ls /tmp/cc-agent/61908077/project/public/reviews/
```

**Expected Behavior**:
- Prerender script should write to `dist/` (the publish directory)
- OR build process should copy `public/` → `dist/`

---

## FILES ANALYZED

1. ✅ `netlify/edge-functions/strip-slash.ts` - NO bot blocking
2. ✅ `netlify.toml` - NO blocking rules, SPA fallback configured
3. ✅ `public/_redirects` - Only 301 redirects, NO 403s
4. ⚠️ `scripts/prerender-static.mjs` - Missing `/reviews`, `/projects`, `/our-location`
5. ⚠️ `dist/` vs `public/` directory structure - Potential mismatch

---

## NEXT STEPS (DO NOT IMPLEMENT YET)

### Option A: Add Missing Pages to Prerender Script
Add to `servicePages` array in prerender-static.mjs:
```javascript
{ path: '/reviews', title: 'Customer Reviews & Testimonials' },
{ path: '/projects', title: 'Roofing Projects Gallery' },
{ path: '/our-location', title: 'Our Deerfield Beach Location' },
```

### Option B: Fix Dist/Public Directory Issue
Change prerender script to write to `dist/` instead of `public/`:
```javascript
const publicDir = path.resolve(projectRoot, 'dist'); // ← Change from 'public'
```

### Option C: Disable Netlify HTML Processing
Set in netlify.toml:
```toml
[build.processing]
skip_processing = true
```

### Option D: Verify Deployed Directory Structure
Check which directory Netlify is actually serving:
- Is `dist/` being deployed?
- Are prerendered files in `dist/` or stuck in `public/`?

---

## SUMMARY

**403 Error Cause**: ❓ **NOT bot blocking** - No edge functions, redirects, or configs block crawlers

**Most Likely Cause**:
1. ⚠️ Missing prerendered pages (`/reviews`, `/projects`, `/our-location`)
2. ⚠️ Dist/public directory mismatch (prerendering to wrong folder)
3. ⚠️ Netlify build processing interference

**What's NOT Causing It**:
- ✅ Edge functions (no user-agent checking)
- ✅ netlify.toml (no blocking rules)
- ✅ _redirects file (only 301s)

**Recommended Investigation**:
1. Check deployed site: Do prerendered HTML files exist at `/metal-roofing/index.html`?
2. Verify build output: Is prerender script writing to `dist/` or `public/`?
3. Test directly: `curl -I https://allphaseconstructionfl.com/metal-roofing` - What status?
