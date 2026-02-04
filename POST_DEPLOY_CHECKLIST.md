# 🚀 Post-Deploy Checklist

**Deploy Date:** Ready for deployment
**Build Status:** ✅ Clean build completed
**Sitemap Status:** ✅ 64 URLs generated

---

## ✅ Pre-Deploy Verification (COMPLETED)

### Sitemap Audit Results
- ✅ No duplicate paths detected
- ✅ All paths start with `/`
- ✅ No invalid trailing slashes (except root `/`)
- ✅ No orphaned entries
- ✅ 64 indexable entries generated
- ✅ All URLs use `https://allphaseconstructionfl.com` (no www)

### Files Verified
- ✅ `/dist/sitemap.xml` - 64 URLs, correctly formatted
- ✅ `/dist/robots.txt` - Points to correct sitemap
- ✅ `/dist/index.html` - Built successfully
- ✅ `/dist/_redirects` - SPA routing configured
- ✅ `/dist/_headers` - Security headers configured

### Technical Validation
- ✅ Canonical tags use `https://allphaseconstructionfl.com`
- ✅ No www/non-www conflicts
- ✅ XML sitemap only includes indexable pages
- ✅ Build completed without errors
- ✅ QA audit page available at `/qa/sitemap-audit` (noindex)

---

## 🔧 Post-Deploy Tasks (TO DO IMMEDIATELY AFTER DEPLOY)

### 1. Google Search Console Submission

**Action:** Submit sitemap to Google Search Console

**Steps:**
1. Go to: https://search.google.com/search-console
2. Select property: `allphaseconstructionfl.com`
3. Navigate to: **Sitemaps** (left sidebar)
4. Enter sitemap URL: `https://allphaseconstructionfl.com/sitemap.xml`
5. Click **Submit**
6. Verify status shows "Success"

**Expected Result:** Google should discover and process 64 URLs

---

### 2. Verify Live URLs

**Action:** Spot-check that critical pages load correctly

**URLs to Test:**
- [ ] https://allphaseconstructionfl.com/
- [ ] https://allphaseconstructionfl.com/sitemap
- [ ] https://allphaseconstructionfl.com/sitemap.xml
- [ ] https://allphaseconstructionfl.com/robots.txt
- [ ] https://allphaseconstructionfl.com/locations

**Expected Result:** All pages load without 404 errors

---

### 3. URL Inspection Tool - Indexing Signals

**Action:** Use Google Search Console's URL Inspection Tool

**Priority URLs to Inspect:**

#### A. Dynamic Hub Page
- [ ] Inspect: `https://allphaseconstructionfl.com/locations`
- Check for:
  - ✓ Canonical URL matches inspected URL
  - ✓ Page is indexable (not blocked by robots.txt)
  - ✓ No noindex tag detected
  - ✓ Sitemap includes this URL

#### B. Sample Hub URL (any county)
Example: `https://allphaseconstructionfl.com/roofing-contractor-broward-county-fl`
- [ ] Inspect hub URL
- Check for:
  - ✓ Canonical URL is correct
  - ✓ Page is indexable
  - ✓ No duplicate content warnings
  - ✓ Mobile-friendly

#### C. Sample City URL (any location)
Example: `https://allphaseconstructionfl.com/roofing-contractor-boca-raton-fl`
- [ ] Inspect city URL
- Check for:
  - ✓ Canonical URL is correct
  - ✓ Page is indexable
  - ✓ Structured data detected
  - ✓ No AMP issues

**How to Use URL Inspection:**
1. In Google Search Console, click "URL Inspection" (top search bar)
2. Enter the full URL
3. Click "Test Live URL"
4. Review the results
5. Click "Request Indexing" if page is new/updated

---

### 4. Canonical Tag Verification

**Action:** Verify canonical tags match sitemap URLs

**Method 1: Browser DevTools**
1. Open any page on the live site
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to Elements/Inspector tab
4. Search for: `<link rel="canonical"`
5. Verify href matches: `https://allphaseconstructionfl.com/[path]`

**Method 2: View Page Source**
1. Right-click → "View Page Source"
2. Search for: `canonical`
3. Confirm format: `<link rel="canonical" href="https://allphaseconstructionfl.com/[path]" />`

**Check These Pages:**
- [ ] Home: `/`
- [ ] Services: `/tile-roofing`
- [ ] Location: `/roofing-contractor-fort-lauderdale-fl`
- [ ] Blog: `/blog`
- [ ] Calculator: `/roof-cost-calculator`

**Expected Result:** All canonicals use `https://allphaseconstructionfl.com` (no www)

---

### 5. Robots.txt Verification

**Action:** Confirm robots.txt is accessible and correct

**Test:**
1. Visit: https://allphaseconstructionfl.com/robots.txt
2. Verify content includes:
   ```
   User-agent: *
   Allow: /
   
   Disallow: /admin
   
   Sitemap: https://allphaseconstructionfl.com/sitemap.xml
   ```

**Expected Result:** robots.txt loads and points to correct sitemap

---

### 6. Monitor Indexing Status

**Action:** Check Google Search Console daily for 7 days

**What to Monitor:**
- Coverage report (look for errors)
- Page indexing status
- Sitemap processing status
- Any crawl errors

**Timeline:**
- Day 1: Sitemap submitted
- Day 2-3: Google starts crawling
- Day 4-7: Pages begin appearing in index
- Week 2+: Most pages should be indexed

---

## 🎯 Success Criteria

After completing all post-deploy tasks, verify:

- [x] Clean build deployed (no errors)
- [ ] Sitemap submitted to Google Search Console
- [ ] All spot-checked URLs load correctly
- [ ] Canonical tags match sitemap paths
- [ ] robots.txt accessible and correct
- [ ] No www/non-www conflicts detected
- [ ] QA audit shows zero errors

---

## 📊 Analytics Tracking

**Recommended:** Set up tracking for:
- Sitemap submission confirmation email
- GSC coverage increases
- Organic traffic from new location pages
- Core Web Vitals scores

---

## 🔍 Internal QA Tools

### Audit Page
**URL:** https://allphaseconstructionfl.com/qa/sitemap-audit

**Purpose:** Internal verification tool to audit sitemap consistency

**Features:**
- Lists all 64 sitemap entries
- Checks for duplicates, invalid paths, orphans
- Shows indexable vs non-indexable counts
- Quick links to /sitemap, /sitemap.xml, /robots.txt, /locations

**Note:** This page has noindex meta tag and is excluded from search engines

---

## 🚨 Common Issues & Solutions

### Issue: Sitemap not appearing in GSC
**Solution:** Wait 24-48 hours, then resubmit if needed

### Issue: Pages showing as "Discovered - currently not indexed"
**Solution:** Normal for new pages, request indexing via URL Inspection

### Issue: Canonical conflicts
**Solution:** Clear browser cache and verify CanonicalManager.tsx is deployed

### Issue: 404 errors on dynamic routes
**Solution:** Verify _redirects file is in dist and includes SPA routing rule

---

## 📝 Notes

- This deployment includes the new `/qa/sitemap-audit` internal tool
- All 64 pages are configured for optimal SEO
- Canonical URLs are standardized to https://allphaseconstructionfl.com (no www)
- Blog posts are dynamically handled and will appear in future sitemaps
- Location hub pages use proper parent/child relationships

---

## ✅ Sign-Off

- [ ] Pre-deploy checks completed
- [ ] Build deployed successfully
- [ ] Sitemap submitted to GSC
- [ ] Spot checks completed
- [ ] Canonical verification done
- [ ] No critical issues found

**Deployment Approved By:** _________________
**Date:** _________________

---

**End of Checklist**
