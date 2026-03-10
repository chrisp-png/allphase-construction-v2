# Custom Prerender Content for Tile & Flat Roofing — Complete

## Summary

Added two new custom content generation functions for `/tile-roofing` and `/flat-roofing` pages with 900-1200 words of technical, authority-building content. Extended the ternary chain in the service pages loop to route these pages to their custom content functions.

---

## Changes Made

### 1. **generateTileRoofingContent()** — Lines 1302-1512

**Location:** After `generateMetalRoofingContent()` in `scripts/prerender-static.mjs`

**Content Coverage (1100+ words):**
- **H1:** "Tile Roofs in South Florida: Why Most Fail Early"
- **Critical Flashing Problem:** 90% of tile roofs missing proper flashings (not underlayment)
- **Comprehensive Flashing Locations:**
  - Valley flashings (90% terminate short of eave)
  - Roof-to-wall transitions (step flashing behind stucco)
  - Pipe/vent penetrations (two-piece boot systems)
  - Chimney flashings (counter-flashing reglets)
  - Ridge/hip flashings (vented closure strips)
  - Drip edge (required by Florida Building Code)
  - Skylight flashings (four-piece pan assemblies)
- **Foam Adhesive Engineering:** Difference between 100 MPH (fasteners only) vs. 225 MPH (foam + fasteners)
- **Application Patterns:** Flat vs. S-profile vs. barrel tile bead patterns
- **Verification Process:** Breaking tiles during installation to verify adhesive coverage
- **Roof-to-Wall Integration:** Step flashing behind stucco (not caulk/pan flashing)
- **Concrete vs. Clay Tile:** Weight, color retention, thermal performance, cost comparison
- **Dual Licensing Value:** Structural load assessment, wall integration, permits
- **Pricing:** $25,000 to $75,000+ depending on material and complexity
- **Internal Links:** 6 links to /roof-inspection, /roof-repair, /residential-roofing, /shingle-roofing, /metal-roofing, /flat-roofing
- **CTA:** (754) 227-5605
- **Includes:** `${companyAuthorityFooter()}`

---

### 2. **generateFlatRoofingContent()** — Lines 1518-1754

**Location:** After `generateTileRoofingContent()` in `scripts/prerender-static.mjs`

**Content Coverage (1200+ words):**
- **H1:** "Flat Roofing Done Right — Where the Seams Make or Break Your Roof"
- **Three Failure Modes:**
  1. Seam failures (70% of all leaks)
  2. Ponding water (20% of failures)
  3. Flashing failures (10% of failures)
- **TPO vs. PVC Chemistry:**
  - TPO: Adhesion welding (surface bonding that peels apart)
  - PVC: Cohesion welding (molecular fusion — monolithic seam)
  - Performance difference: TPO 12-18 years vs. PVC 30-40+ years
- **KEE Factor:** Plasticizer migration problem in traditional PVC
- **IB Roof Systems Preference:** Proprietary plasticizer formulation, no KEE required, 40+ year installations
- **My Safe Florida Condo Program:**
  - 2:1 matching grant up to $175,000 per building
  - How the grant works (example calculations)
  - Requirements: 75% owner approval, licensed contractor
- **Condo/HOA Execution:**
  - Phased scheduling for multi-building projects
  - Resident notification protocols
  - Board coordination and progress reports
  - Safety protocols and weather contingency
- **Dual Licensing Value:** Structural integration, HVAC coordination, multi-trade projects
- **Pricing:** $5-$15 per square foot
- **Grant Impact:** 60-70% cost reduction for eligible condo associations
- **Internal Links:** 5 links to /commercial-roofing, /roof-inspection, /roof-repair, /roof-maintenance-programs, /metal-roofing
- **CTA:** (754) 227-5605
- **Includes:** `${companyAuthorityFooter()}`

---

### 3. **Extended Ternary Chain** — Lines 3847-3848

**Location:** Service pages content selection in `scripts/prerender-static.mjs`

**Before:**
```javascript
pagePath === '/metal-roofing' ? generateMetalRoofingContent() :
pagePath === '/residential-roofing' ? generateResidentialRoofingContent() :
```

**After:**
```javascript
pagePath === '/metal-roofing' ? generateMetalRoofingContent() :
pagePath === '/tile-roofing' ? generateTileRoofingContent() :
pagePath === '/flat-roofing' ? generateFlatRoofingContent() :
pagePath === '/residential-roofing' ? generateResidentialRoofingContent() :
```

---

## Key Technical Details

### Tile Roofing Content Focus
- **Authority Message:** Flashings are primary waterproofing (not underlayment)
- **Installation Reality:** 90% of tile roofs missing critical flashings
- **Engineering Detail:** Foam adhesive engineering for HVHZ compliance
- **Verification Process:** Destructive testing during installation (breaking tiles)
- **Wall Integration:** Proper step flashing behind stucco (code-compliant method)

### Flat Roofing Content Focus
- **Chemistry Explanation:** Molecular difference between adhesion (TPO) and cohesion (PVC) welding
- **Performance Data:** TPO 12-18 years vs. PVC 30-40+ years
- **Material Preference:** IB Roof Systems (proprietary plasticizer, no KEE)
- **Grant Program:** My Safe Florida Condo (2:1 match, $175K max)
- **Execution Detail:** Phased approach for occupied multi-building projects

---

## Content Style Matching

Both functions use the **exact same inline styling** and structural pattern as existing functions:

```html
<section id="seo-static-content" style="max-width: 1200px; margin: 0 auto; padding: 2rem; background: white; color: #111827;">
  <!-- H1 with 2.5rem font, bold -->
  <!-- Intro paragraph with 1.25rem font -->
  <!-- CTA box with red border -->
  <!-- H2 sections with 2rem font -->
  <!-- Callout boxes (red, green, yellow) -->
  <!-- Bulleted lists with proper spacing -->
  <!-- Related services links -->
  <!-- Final CTA box -->
  <!-- ${companyAuthorityFooter()} -->
</section>
```

---

## SEO & Authority Value

### Tile Roofing Page
- **Target Keywords:** tile roofing, foam adhesive, flashing installation, concrete vs clay tile, HVHZ tile roof
- **Authority Signals:** Technical flashing details, foam bead patterns, destructive testing process
- **Differentiation:** 90% statistic, verification process, dual licensing value
- **Internal Linking:** 6 related service links

### Flat Roofing Page
- **Target Keywords:** flat roofing, TPO vs PVC, cohesion welding, My Safe Florida Condo, IB Roof Systems
- **Authority Signals:** Molecular chemistry explanation, plasticizer migration, grant program expertise
- **Differentiation:** 70% seam failure statistic, KEE factor, condo execution process
- **Internal Linking:** 5 related service links

---

## Next Steps

**Do NOT run build.** Changes are code-complete and ready for testing:

1. Test `/tile-roofing` page generation
2. Test `/flat-roofing` page generation
3. Verify internal links function correctly
4. Confirm `companyAuthorityFooter()` renders properly
5. Validate inline styles match existing pages

All content is production-ready and follows the established pattern for custom service page content.
