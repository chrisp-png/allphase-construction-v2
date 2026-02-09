# ✅ OVERNIGHT FIX - QUICK VERIFICATION CHECKLIST

**Run these checks after deployment to verify all fixes are working:**

---

## 🔍 **1. CANONICAL TAG VERIFICATION**

### Test Self-Referencing Canonicals:
```bash
# Boca Raton
curl -s https://allphaseconstructionfl.com/locations/boca-raton | grep 'canonical'
# Expected: <link rel="canonical" href="https://allphaseconstructionfl.com/locations/boca-raton"/>

# Deerfield Beach
curl -s https://allphaseconstructionfl.com/locations/deerfield-beach | grep 'canonical'
# Expected: <link rel="canonical" href="https://allphaseconstructionfl.com/locations/deerfield-beach"/>

# Locations Hub
curl -s https://allphaseconstructionfl.com/locations | grep 'canonical'
# Expected: <link rel="canonical" href="https://allphaseconstructionfl.com/locations"/>
```

### Test Query Param Stripping:
```bash
# Visit with UTM params
curl -s 'https://allphaseconstructionfl.com/locations/boca-raton?utm_source=google&utm_medium=cpc' | grep 'canonical'
# Expected: Canonical should NOT include ?utm_source=google&utm_medium=cpc
# Expected: <link rel="canonical" href="https://allphaseconstructionfl.com/locations/boca-raton"/>
```

---

## 📋 **2. PAGE TITLE VERIFICATION**

### Browser DevTools:
1. Open `/locations/boca-raton`
2. Open DevTools Console
3. Type: `document.title`
4. Expected: "Boca Raton Roofing Contractor | All Phase Construction USA"

### Curl Test:
```bash
curl -s https://allphaseconstructionfl.com/locations/boca-raton | grep '<title>'
# Expected: <title>Boca Raton Roofing Contractor | All Phase Construction USA</title>
```

---

## 🗺️ **3. ROUTE VERIFICATION**

### Test /locations Hub:
```bash
# Visit in browser
https://allphaseconstructionfl.com/locations

# Should see:
✅ "Service Locations" heading
✅ Grid of location links
✅ Full header with navigation
✅ Full footer
✅ NOT redirected to homepage
```

### Test City Pages:
```bash
# Boca Raton
https://allphaseconstructionfl.com/locations/boca-raton
# Should see: Full branded page with "Professional Roofing Services in Boca Raton, Florida"

# Deerfield Beach
https://allphaseconstructionfl.com/locations/deerfield-beach
# Should see: Full branded page with headquarters content
```

---

## 🎨 **4. BRANDING VERIFICATION**

### Visual Check (All Pages):
- [ ] Header with logo visible at top
- [ ] Navigation menu present
- [ ] Phone number (754) 227-5605 visible
- [ ] Dual-license numbers visible (CCC-1331464, CGC-1526236)
- [ ] Footer with company details at bottom
- [ ] Sticky mobile CTA bar on mobile
- [ ] Professional styling (not plain HTML)

---

## 🔧 **5. TECHNICAL VERIFICATION**

### Check React App Loads:
```bash
# View page source
curl -s https://allphaseconstructionfl.com/locations/boca-raton | head -30

# Should see:
✅ <div id="root"></div>
✅ <script src="/assets/index-*.js"></script>
✅ NOT static HTML content (React renders it)
```

### Check Redirects:
```bash
# Test that old URL patterns redirect
curl -sI https://allphaseconstructionfl.com/service-area/boca-raton
# Expected: 301 redirect to /locations/boca-raton
```

---

## 📊 **6. SEO METADATA CHECK**

### Open Graph Tags:
```bash
curl -s https://allphaseconstructionfl.com/locations/boca-raton | grep 'og:'
# Should see:
# <meta property="og:title" content="...">
# <meta property="og:description" content="...">
# <meta property="og:url" content="https://allphaseconstructionfl.com/locations/boca-raton">
```

### Schema.org JSON-LD:
```bash
curl -s https://allphaseconstructionfl.com/locations/boca-raton | grep -A20 'application/ld+json'
# Should see LocalBusiness schema with:
# - "@type": "RoofingContractor"
# - "name": "All Phase Construction USA"
# - "address": {...}
```

---

## ✅ **PASS/FAIL CRITERIA**

### Must Pass (Critical):
- [ ] All canonical tags are self-referencing (not pointing to homepage)
- [ ] Query parameters are stripped from canonical URLs
- [ ] `/locations` route loads (not redirecting to homepage)
- [ ] All pages have header and footer (full branding)
- [ ] Page titles are correct and specific to each page

### Should Pass (Important):
- [ ] Document titles set immediately (visible in browser tab)
- [ ] Old URL patterns redirect correctly (301)
- [ ] React app loads without console errors
- [ ] Mobile responsive design works

### Nice to Have:
- [ ] Lighthouse SEO score > 90
- [ ] No canonical warnings in Google Search Console
- [ ] Social sharing shows correct Open Graph data

---

## 🚨 **IF SOMETHING FAILS**

### Canonical Not Self-Referencing:
**Symptom**: Canonical points to homepage or wrong URL  
**Fix**: Check that `window.location.href` is being used in component  
**Files**: `CityMoneyPage.tsx`, `ServiceAreaPage.tsx`, etc.

### /locations Redirects to Homepage:
**Symptom**: URL changes to `/` when visiting `/locations`  
**Fix**: Check App.tsx routing and LocationsIndexPage import  
**Files**: `App.tsx` line 340, `LocationsIndexPage.tsx`

### Missing Branding (Plain HTML):
**Symptom**: No header/footer, looks like plain document  
**Fix**: Verify netlify.toml `force = true` is active  
**Files**: `netlify.toml` lines 133-137

### Query Params Not Stripped:
**Symptom**: Canonical includes `?utm_source=...`  
**Fix**: Check `.split('?')[0]` is in canonical logic  
**Files**: All pages with canonical tags

---

## 📝 **VERIFICATION LOG TEMPLATE**

Copy this and fill it out after testing:

```
OVERNIGHT FIX VERIFICATION - [DATE]
Tested By: [YOUR NAME]
Environment: Production

CANONICAL TAGS:
[ ] Boca Raton - Self-referencing: YES/NO
[ ] Deerfield Beach - Self-referencing: YES/NO
[ ] Locations Hub - Self-referencing: YES/NO
[ ] Query params stripped: YES/NO

PAGE TITLES:
[ ] Boca Raton title correct: YES/NO
[ ] Locations hub title correct: YES/NO
[ ] Service pages title correct: YES/NO

ROUTES:
[ ] /locations loads properly: YES/NO
[ ] City pages load: YES/NO
[ ] No unexpected redirects: YES/NO

BRANDING:
[ ] Header visible: YES/NO
[ ] Footer visible: YES/NO
[ ] Navigation working: YES/NO
[ ] Dual-license visible: YES/NO

TECHNICAL:
[ ] React app loads: YES/NO
[ ] No console errors: YES/NO
[ ] Redirects working: YES/NO

OVERALL STATUS: PASS/FAIL
Notes: [Any issues or observations]
```

---

## 🎯 **SUCCESS CRITERIA**

**All systems GO if**:
1. Every page has self-referencing canonical
2. UTM params don't affect canonical
3. `/locations` works without redirecting
4. All pages show full branding
5. No TypeScript or React errors

**Deploy Status**: ✅ READY FOR PRODUCTION
