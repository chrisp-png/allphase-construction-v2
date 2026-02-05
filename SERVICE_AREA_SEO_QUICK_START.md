# Service Area SEO System - Quick Start Guide

## Adding City-Specific SEO (3 Easy Steps)

### Step 1: Edit the Config File

Open **`src/config/cityServiceAreaSEO.ts`**

### Step 2: Add Your City Override

```typescript
export const CITY_SERVICE_AREA_SEO_OVERRIDES: Record<string, CityServiceAreaSEO> = {
  'boca-raton': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.'
  },
  // ADD YOUR CITY HERE:
  'your-city-slug': {
    title: 'Your Title Here (50-60 chars)',
    description: 'Your description here (150-160 chars)'
  },
};
```

### Step 3: Build and Test

```bash
npm run build
```

---

## City Slug Reference

| City Name | City Slug |
|-----------|-----------|
| Boca Raton | `boca-raton` |
| Boynton Beach | `boynton-beach` |
| Coconut Creek | `coconut-creek` |
| Coral Springs | `coral-springs` |
| Deerfield Beach | `deerfield-beach` |
| Delray Beach | `delray-beach` |
| Fort Lauderdale | `fort-lauderdale` |
| Hollywood | `hollywood` |
| Pompano Beach | `pompano-beach` |
| Sunrise | `sunrise` |
| Wellington | `wellington` |
| West Palm Beach | `west-palm-beach` |

---

## Verifying SEO Tags

### Method 1: Browser DevTools (Recommended)

1. Open city page: `https://yoursite.com/locations/deerfield-beach/service-area/boca-raton`
2. Press **F12** (open DevTools)
3. Go to **Elements** tab (Chrome) or **Inspector** tab (Firefox)
4. Expand `<head>` section
5. Find:
   - `<title>Roof Inspection in Boca Raton...</title>`
   - `<meta name="description" content="Get a professional...">`
   - `<meta property="og:title" content="Roof Inspection...">`
   - `<meta property="og:description" content="Get a professional...">`

### Method 2: React DevTools Extension

1. Install React DevTools for Chrome/Firefox
2. Open city page
3. Go to **Components** tab
4. Find `<Helmet>` component
5. See all meta tags applied

### Method 3: SEO Browser Extensions

Install any of these:
- **META SEO inspector** (Chrome)
- **SEO Meta in 1 Click** (Firefox)
- **SEOquake**

Open city page and view meta tags in popup.

---

## Example: Adding SEO for Fort Lauderdale

**Before (uses template):**
```
Title: Roof Inspection in Fort Lauderdale for Repairs & Replacement | All Phase
Description: Get a professional roof inspection in Fort Lauderdale to determine repair needs, replacement options, and insurance documentation before you decide.
```

**After (custom override):**

```typescript
'fort-lauderdale': {
  title: 'Fort Lauderdale Roofer | Hurricane-Ready Roofs | All Phase',
  description: 'Expert roofing contractor in Fort Lauderdale. HVHZ certified, storm-resistant installations, free inspections. Serving Fort Lauderdale since 2009.'
}
```

**Result:**
```
Title: Fort Lauderdale Roofer | Hurricane-Ready Roofs | All Phase
Description: Expert roofing contractor in Fort Lauderdale. HVHZ certified, storm-resistant installations, free inspections. Serving Fort Lauderdale since 2009.
```

---

## Common Mistakes to Avoid

❌ **Wrong city slug format:**
```typescript
'Boca Raton': { ... }  // Wrong - should be lowercase with hyphens
'boca_raton': { ... }  // Wrong - should use hyphens not underscores
```

✅ **Correct format:**
```typescript
'boca-raton': { ... }  // Correct!
```

---

❌ **Title too long:**
```typescript
title: 'The Best and Most Affordable Roofing Contractor in Boca Raton, Florida for Residential and Commercial Properties'  // 117 chars - TOO LONG
```

✅ **Optimal length:**
```typescript
title: 'Boca Raton Roofer | Expert Repairs & Replacement'  // 50 chars - Perfect!
```

---

❌ **Description too short:**
```typescript
description: 'Roofing in Boca Raton. Call us.'  // 35 chars - TOO SHORT
```

✅ **Optimal length:**
```typescript
description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.'  // 154 chars - Perfect!
```

---

## Testing Checklist

Before deploying:

- [ ] City slug is lowercase with hyphens
- [ ] Title is 50-60 characters
- [ ] Description is 150-160 characters
- [ ] No typos or grammar errors
- [ ] Build succeeds (`npm run build`)
- [ ] DevTools shows correct tags
- [ ] Page loads without errors

---

## Need Help?

- **Full Documentation:** See `SERVICE_AREA_SEO_SYSTEM.md`
- **Code Reference:** See `src/config/cityServiceAreaSEO.ts`
- **Page Template:** See `src/pages/locations/ServiceAreaPage.tsx`

---

## Pro Tips

1. **Use city name early in title** - Better for local SEO
2. **Include call-to-action in description** - "Call today", "Get free estimate"
3. **Mention licenses/certifications** - "HVHZ certified", "Licensed & insured"
4. **Test on mobile** - Titles/descriptions display differently on mobile search
5. **Check competitors** - See what titles/descriptions rank well in your city

---

## What Changed?

**Before (Hardcoded):**
- Only Boca Raton had custom SEO
- Adding new cities required code edits in ServiceAreaPage.tsx
- No template system
- Hard to maintain

**After (Scalable):**
- Every city gets unique SEO automatically via templates
- Add overrides in one config file
- No code changes to page components
- Easy to maintain and update

✅ **System is production-ready!**
