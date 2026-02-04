# Google Search Console Redirect Validation Fix

## Problem Identified
**108 pages failing redirect validation** in Google Search Console (Started: 1/29/26, Failed: 1/31/26)

## Root Causes

### 1. Missing HTTPS WWW Redirect (CRITICAL)
**Before:**
- ✅ `http://www.allphaseconstructionfl.com/*` → `https://allphaseconstructionfl.com/*`
- ❌ `https://www.allphaseconstructionfl.com/*` → NO REDIRECT RULE

**After:**
- ✅ All three redirect variations now work:
  - `https://www.allphaseconstructionfl.com/*` → `https://allphaseconstructionfl.com/*` (NEW!)
  - `http://www.allphaseconstructionfl.com/*` → `https://allphaseconstructionfl.com/*`
  - `http://allphaseconstructionfl.com/*` → `https://allphaseconstructionfl.com/*`

### 2. Old URLs Without Redirect Rules
Google was testing old URLs that returned 404:
- `/media` → Now redirects to `/projects`
- `/government-contracting` → Now redirects to `/commercial-roofing`

### 3. Mixed Case URLs
Edge function handles `/Blog` → `/blog` (already working, no changes needed)

---

## What Was Changed

### File: `netlify.toml`

#### Added HTTPS WWW Redirect (Lines 13-17)
```toml
# HTTPS www → HTTPS non-www (CRITICAL - was missing!)
[[redirects]]
from = "https://www.allphaseconstructionfl.com/*"
to = "https://allphaseconstructionfl.com/:splat"
status = 301
force = true
```

#### Added Old URL Redirects (Lines 213-231)
```toml
# Old pages that no longer exist (Google Search Console validation)
[[redirects]]
from = "/media"
to = "/projects"
status = 301

[[redirects]]
from = "/government-contracting"
to = "/commercial-roofing"
status = 301
```

---

## Testing Before Deploy

### Test Locally
```bash
# Build the project
npm run build

# Test with Netlify CLI
netlify dev
```

### Test These URLs After Deploy
```bash
# Should all redirect to https://allphaseconstructionfl.com/
curl -I https://www.allphaseconstructionfl.com/
curl -I http://www.allphaseconstructionfl.com/
curl -I http://allphaseconstructionfl.com/

# Should redirect to /projects
curl -I https://allphaseconstructionfl.com/media

# Should redirect to /commercial-roofing
curl -I https://allphaseconstructionfl.com/government-contracting
```

---

## Deployment Steps

1. **Deploy the fix**
   ```bash
   git add netlify.toml
   git commit -m "Fix GSC redirect validation - add HTTPS www redirect"
   git push origin main
   ```

2. **Wait 2-3 minutes** for Netlify to deploy

3. **Verify redirects work**
   - Test the URLs above
   - Check Netlify deploy log for any errors

4. **Request validation in Google Search Console**
   - Go to: Indexing → Pages → "Page with redirect"
   - Click "VALIDATE FIX"
   - Google will re-crawl all 108 pages (takes 2-4 weeks)

5. **Monitor validation progress**
   - Check GSC daily for validation status
   - Look for "Validation passed" message

---

## Why This Happened

### Timeline
- **Before Jan 2026**: WWW DNS not properly configured
- **Jan 15-27, 2026**: Google crawled www URLs, found inconsistent redirects
- **Jan 29, 2026**: Google started validation test
- **Jan 31, 2026**: Validation FAILED due to missing HTTPS www redirect

### Technical Explanation
Netlify redirects need EXPLICIT rules for each domain variation:
- HTTP → HTTPS (protocol upgrade)
- WWW → non-WWW (subdomain canonicalization)
- **HTTPS WWW → HTTPS non-WWW** (this was missing!)

Without the HTTPS www redirect, users/bots visiting `https://www.allphaseconstructionfl.com` would see the site but not be redirected to the canonical `https://allphaseconstructionfl.com`, causing duplicate content and validation failures.

---

## Expected Results

### Immediate (After Deploy)
- ✅ All domain variations redirect to `https://allphaseconstructionfl.com`
- ✅ Old URLs like `/media` redirect to appropriate pages
- ✅ No more 404 errors from GSC validation tests

### Within 2-4 Weeks (After GSC Re-validation)
- ✅ "Validation passed" message in GSC
- ✅ 108 pages removed from "Page with redirect" errors
- ✅ Clean indexing report

### Long-term SEO Benefits
- ✅ Consolidated link equity to canonical domain
- ✅ No duplicate content issues
- ✅ Cleaner crawl efficiency
- ✅ Better rankings (no dilution from www variant)

---

## Prevention

### Add to Pre-Deploy Checklist
1. **Always test all domain variations:**
   - http://domain.com
   - https://domain.com
   - http://www.domain.com
   - https://www.domain.com

2. **Use redirect validation script:**
   ```bash
   npm run validate-redirects
   ```

3. **Monitor GSC weekly** for new redirect issues

### DNS Configuration
Ensure these DNS records exist:
```
@ A 75.2.60.5 (Netlify load balancer)
www CNAME allphaseconstructionfl.com.
```

---

## Related Files
- `netlify.toml` - Main redirect configuration
- `netlify/edge-functions/normalize-case.ts` - Handles uppercase URL redirects
- `scripts/validate-redirects.mjs` - Automated redirect testing script

---

## Questions?
If validation still fails after 4 weeks:
1. Check Netlify deploy logs for redirect errors
2. Use curl to test redirects manually
3. Check GSC URL Inspection tool for specific failing URLs
4. Verify DNS is pointed correctly to Netlify
