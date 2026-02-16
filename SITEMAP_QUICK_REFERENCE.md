# Sitemap Quick Reference

**Status:** ✅ PRODUCTION READY | **Last Updated:** February 16, 2026

---

## 📊 Current Stats

```
Total URLs:        149
Repair Cities:     17 (KEY MONEY LIST)
Inspection Cities: 12 + parent
Location Hubs:     44
Core/Blog:         77
```

---

## 🔑 Key Money City List (17 Cities)

Roof repair pages (`/roof-repair/{city}/`) include ONLY these cities:

```
boca-raton, boynton-beach, coconut-creek, coral-springs,
deerfield-beach, delray-beach, fort-lauderdale, hollywood,
lake-worth, lake-worth-beach, lauderhill, parkland,
plantation, pompano-beach, tamarac, wellington, west-palm-beach
```

**Important Notes:**
- ✅ lake-worth and lake-worth-beach are DISTINCT cities (both included)
- ❌ light-house-point is ALWAYS EXCLUDED (canonical is lighthouse-point)
- ✅ Only these 17 cities have `/roof-repair/{city}/` in sitemap

---

## 🔍 Validation (9 Automatic Checks)

Every build validates:

1. ✅ No duplicate URLs
2. ✅ All URLs have trailing slashes
3. ✅ No legacy `/service-area/` patterns
4. ✅ No excluded slug aliases
5. ✅ No legacy inspection URLs
6. ✅ All URLs use canonical domain
7. ✅ **Repair URLs match KEY MONEY LIST** (fails if not)
8. ✅ **Inspection URLs match allowlist** (fails if not)
9. ✅ **lake-worth and lake-worth-beach distinct**

**Build fails** if any check fails → prevents invalid sitemap deployment

---

## 🎯 URL Structure

### Roof Repair (17 cities)
```
https://allphaseconstructionfl.com/roof-repair/{city}/
```
Cities: KEY MONEY LIST only

### Roof Inspection (12 cities + parent)
```
https://allphaseconstructionfl.com/roof-inspection/
https://allphaseconstructionfl.com/roof-inspection/{city}/
```
Cities: boca-raton, boynton-beach, coconut-creek, coral-springs, deerfield-beach, delray-beach, fort-lauderdale, lake-worth, palm-beach, pompano-beach, wellington, west-palm-beach

### Location Hubs (44 cities)
```
https://allphaseconstructionfl.com/locations/{city}/
```
Cities: All canonical city service hubs

---

## 🔧 How to Update

### Add/Remove Repair City

**File:** `scripts/generate-sitemap.mjs`

**Location:** Lines 38-56 (`SITEMAP_REPAIR_CITIES`)

```javascript
const SITEMAP_REPAIR_CITIES = [
  // ... existing cities ...
  'new-city-slug',  // ← Add here
];
```

**Build:** `npm run generate-sitemap`

**Validation:** Automatic (fails if invalid)

### Add/Remove Inspection City

**File:** `scripts/generate-sitemap.mjs`

**Location:** Lines 58-72 (`SITEMAP_INSPECTION_CITIES`)

### Add Excluded Slug

**File:** `scripts/generate-sitemap.mjs`

**Location:** Lines 20-34 (`EXCLUDED_SLUGS`)

---

## ⚡ Quick Commands

```bash
# Generate sitemap
npm run generate-sitemap

# Count URLs
grep -c "<url>" public/sitemap.xml

# List repair cities
grep '/roof-repair/' public/sitemap.xml | grep -oP '(?<=/roof-repair/)([^/]+)(?=/)'

# Check for excluded slug
grep -c "light-house-point" public/sitemap.xml  # Should be 0

# Verify lake-worth distinction
grep -F "/roof-repair/lake-worth/" public/sitemap.xml
grep -F "/roof-repair/lake-worth-beach/" public/sitemap.xml
```

---

## ❌ Never Do This

- ❌ Don't add cities not in KEY MONEY LIST to repair URLs
- ❌ Don't add "light-house-point" (use "lighthouse-point")
- ❌ Don't confuse lake-worth with lake-worth-beach
- ❌ Don't skip validation (build checks automatically)
- ❌ Don't deploy if validation fails

---

## ✅ Always Do This

- ✅ Use canonical slugs only
- ✅ Run `npm run generate-sitemap` after changes
- ✅ Check validation output
- ✅ Treat lake-worth and lake-worth-beach as distinct
- ✅ Keep trailing slashes on all URLs
- ✅ Let validation catch errors

---

**Where to Edit:** `scripts/generate-sitemap.mjs`

**Source of Truth:** Lines 36-120 (allowlists)

**Validation:** Lines 409-550 (automatic checks)

**Sitemap Output:** `public/sitemap.xml` (149 URLs)

---

**Status:** ✅ All checks passed | Ready for production
