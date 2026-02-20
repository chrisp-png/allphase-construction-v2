# HVHZ-Compliant Meta Description Fixes - Complete

## Issue
Wellington and other Palm Beach County location pages incorrectly stated "HVHZ-compliant" in their meta descriptions. Palm Beach County is NOT in the HVHZ zone - only Broward County is.

## Solution
Replaced all instances of "HVHZ-compliant" with "Palm Beach County wind-compliant" across the entire codebase for the 5 Palm Beach County priority cities:
- Wellington
- Boynton Beach  
- Delray Beach
- West Palm Beach
- Boca Raton

## Files Modified

### Primary SEO Configuration Files
1. **src/config/cityServiceAreaSEO.ts** (Lines 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123, 129, 135, 154)
   - Updated ALL city override descriptions
   - Updated default template function

2. **src/config/seoTitles.ts** (Line 219)
   - Updated fallback description template for location pages

3. **src/lib/locationSeo.ts** (Line 34)
   - Updated default description template

4. **src/data/locations.ts** (Line 37)
   - Updated Deerfield Beach override description

### Page-Specific Files
5. **src/pages/WellingtonPage.tsx** (Line 40)
   - Direct seoDescription variable

6. **src/pages/locations/BoyntonBeachMoneyPage.tsx** (Lines 48, 117, 204, 242)
   - Meta description tag
   - Page content references

7. **src/pages/locations/DelrayBeachMoneyPage.tsx** (Lines 15, 19)
   - Dynamic meta description setting

8. **src/pages/locations/WestPalmBeachMoneyPage.tsx** (Line 48)
   - Meta description tag

## Result
All 5 Palm Beach County location pages now correctly state:
"All Phase Construction USA is a dual-licensed roofing contractor serving [City], FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair."

## Verification
Build completed successfully with all 234 prerendered pages generated.

All Wellington, Boynton Beach, Delray Beach, West Palm Beach, and Boca Raton pages now have accurate meta descriptions reflecting Palm Beach County wind requirements (NOT HVHZ).
