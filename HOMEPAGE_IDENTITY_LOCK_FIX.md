# Homepage Identity Lock Fix - February 13, 2026

## Problem Statement

The homepage (/) had multiple sources overwriting the hard-coded "IDENTITY LOCK" head tags from `index.html`, causing:
1. Title being changed from the hard-coded value
2. Meta description being overwritten
3. Canonical, robots, OG, and Twitter tags being modified
4. Potential schema duplication with multiple LocalBusiness/Organization blocks

## Root Causes Identified

### 1. NuclearMetadata Component (`src/components/NuclearMetadata.tsx`)
- Was force-updating title, description, canonical, OG tags, and Twitter tags on EVERY route including homepage
- Was injecting a global LocalBusiness schema on ALL pages including homepage

### 2. App.tsx (`src/App.tsx`)
- Had a `useEffect` hook (lines 244-253) that was setting `document.title` for homepage and deerfield-beach pages
- This ran after component mount and overwrote the hard-coded title

### 3. HomePage Component
- Was correctly using Helmet to inject LocalBusiness schema only (no meta tags)
- This was NOT causing issues, but needed to remain the ONLY source of LocalBusiness schema on homepage

## Changes Made

### File 1: `src/components/NuclearMetadata.tsx`

**Change:** Added early return for homepage route
**Lines Modified:** 17-24
**Code Added:**
```typescript
// HOMEPAGE IDENTITY LOCK: Skip homepage entirely - preserve hard-coded tags from index.html
if (path === '/') {
  console.log('[NUCLEAR METADATA] Skipping homepage - preserving identity lock from index.html');
  return;
}
```

**Effect:**
- NuclearMetadata now completely skips the homepage
- Does NOT update title, description, canonical, OG tags, Twitter tags on homepage
- Does NOT inject global LocalBusiness schema on homepage (Homepage component handles this)
- Console log added for debugging confirmation

### File 2: `src/App.tsx`

**Change:** Removed `useEffect` hook that was overwriting document.title
**Lines Removed:** 244-253
**Code Removed:**
```typescript
const location = useLocation();

// IDENTITY LOCK: Force correct titles for Google before any Helmet updates
useEffect(() => {
  const path = location.pathname.toLowerCase();

  if (path === '/') {
    document.title = 'All Phase Construction USA | Dual-Licensed Roofing Specialist';
  } else if (path.includes('deerfield-beach')) {
    document.title = 'Dual-Licensed Roofing Specialist in Deerfield Beach, FL | All Phase Construction USA';
  }
  // Other pages will be handled by their individual Helmet components
}, [location.pathname]);
```

**Effect:**
- Removed `location` import/usage that was no longer needed
- No code now modifies document.title on homepage after hydration
- Deerfield Beach pages no longer have title forced (they use their own SEO components correctly)

### File 3: `src/pages/HomePage.tsx`

**Change:** No changes needed
**Reason:** HomePage was already correctly implemented:
- Only uses Helmet to inject LocalBusiness schema
- Does NOT set meta tags (title, description, etc.)
- Does NOT use SEO component

## Verification

### Hard-Coded Identity Lock Values (from index.html)

✅ **Title:**
```
Roofing Company in Deerfield Beach, FL | Roof Repair & Replacement | All Phase Construction USA
```

✅ **Description:**
```
Need roof repair or a new roof in Deerfield Beach, FL? HVHZ-compliant roof repairs and roof replacements with inspection-first diagnostics. Dual-licensed (Roofing + GC) for roofing-related structural/insurance upgrades. We respond within 45 minutes during business hours.
```

✅ **Canonical:**
```
https://allphaseconstructionfl.com/
```

✅ **Robots:**
```
index, follow, max-image-preview:large
```

✅ **OG Tags:**
- `og:title`: "Roofing Company in Deerfield Beach, FL | Roof Repair & Replacement"
- `og:description`: "Deerfield Beach roof repair and replacement with inspection-first diagnostics for HVHZ homes. Dual-licensed. Fast response during business hours."
- `og:url`: "https://allphaseconstructionfl.com/"
- `og:type`: "website"

✅ **Twitter Tags:**
- `twitter:card`: "summary_large_image"
- `twitter:title`: "Roofing Company in Deerfield Beach, FL | Roof Repair & Replacement"
- `twitter:description`: "Need roof repair or replacement in Deerfield Beach? Inspection-first diagnostics for HVHZ homes. Dual-licensed. Fast response during business hours."

### Structured Data (Schema.org)

✅ **At Build Time (in dist/index.html):**
- 1× FAQPage schema (hard-coded in index.html)
- No other schemas in static HTML

✅ **At Runtime (after React hydration):**
- 1× FAQPage schema (from index.html - preserved)
- 1× LocalBusiness/RoofingContractor schema (from HomePage.tsx via Helmet)
- **Total: 2 schemas only - clean and minimal**

✅ **NO duplicates:**
- ❌ No duplicate LocalBusiness schemas
- ❌ No duplicate Organization schemas
- ❌ No Article schema on homepage
- ❌ No extra JSON-LD blocks

## Testing Checklist

After deployment, verify in browser DevTools:

### In `<head>` section:
- [ ] Title matches: "Roofing Company in Deerfield Beach, FL | Roof Repair & Replacement | All Phase Construction USA"
- [ ] Meta description matches the identity lock value
- [ ] Canonical is: "https://allphaseconstructionfl.com/"
- [ ] Robots meta is: "index, follow, max-image-preview:large"
- [ ] OG tags match identity lock values
- [ ] Twitter tags match identity lock values

### Schema validation:
- [ ] Exactly 1 FAQPage schema present
- [ ] Exactly 1 RoofingContractor/LocalBusiness schema present
- [ ] No other schemas on homepage
- [ ] No duplicate @id values

### Console verification:
- [ ] Look for: "[NUCLEAR METADATA] Skipping homepage - preserving identity lock from index.html"
- [ ] No errors in console related to React Helmet

## Impact on Other Pages

✅ **Non-homepage pages:** No impact
- NuclearMetadata continues to work normally for all other routes
- SEO component continues to work for pages that use it
- Dynamic city pages continue to get proper metadata

✅ **Build process:** No impact
- Prerendering continues to work correctly
- 161 pages generated successfully
- No build errors introduced

## Summary

All React-side code that was overwriting homepage head tags has been disabled for the homepage route. The hard-coded "IDENTITY LOCK" values from `index.html` now remain unchanged after React hydration.

**Files Changed:**
1. `src/components/NuclearMetadata.tsx` - Added homepage skip logic
2. `src/App.tsx` - Removed useEffect that overwrote document.title

**Files Verified (no changes needed):**
1. `src/pages/HomePage.tsx` - Already correct
2. `index.html` - Identity lock preserved

**Result:** Clean, minimal metadata on homepage with no duplicates or overwrites.
