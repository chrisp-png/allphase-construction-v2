# ROOF REPAIR LOCATION PAGE GUARDRAILS

**CRITICAL: These guardrails are NON-NEGOTIABLE when creating or modifying Roof Repair location pages.**

## 🎯 PURPOSE

This document defines the ONLY approved method for creating and maintaining Roof Repair location pages on the All Phase Construction USA website. Any deviation from these guardrails will result in:
- Broken canonical tags
- Duplicate content issues
- Lost search engine rankings
- Sitemap/route mismatches

---

## 1️⃣ ALLOWED PAGE TYPE

### ✅ YOU MAY ONLY CREATE:
- Roof Repair location pages (city, county, unincorporated areas)

### ❌ DO NOT CREATE:
- Other service pages
- Blog posts
- Hub pages
- Generic content pages

**If the request is not for a Roof Repair location page, STOP and decline.**

---

## 2️⃣ CANONICAL ROUTE (LOCKED)

### ✅ REQUIRED ROUTE PATTERN:
```
/roofing-services/roof-repair/{location-slug}
```

### ❌ FORBIDDEN ROUTES:
- `/roof-repair/{slug}` (legacy pattern)
- `/service-areas/{slug}`
- `/locations/{slug}`
- `/roofing-services/{anything-else}`
- Any route with trailing slash variants beyond standard site behavior

### VALIDATION STEP:
Before creating any page, verify the requested URL matches:
```
/roofing-services/roof-repair/
```

**If it does NOT match, STOP and instruct the user to provide the correct URL format.**

---

## 3️⃣ COLLECTION + TEMPLATE BINDING (REQUIRED)

### NEVER USE "CREATE NEW PAGE"

Instead, follow this exact process:

1. **Locate a working Roof Repair location page:**
   - Examples: `DeerfieldBeachRoofRepairPage.tsx` or `BoyntonBeachRoofRepairPage.tsx`
   - Route: `/roofing-services/roof-repair/Deerfield-Beach`

2. **Duplicate the entire file:**
   - Preserve all imports
   - Preserve component structure
   - Preserve meta tag handling
   - Preserve canonical URL pattern

3. **Update ONLY:**
   - Component name
   - Location name in content
   - Location-specific details

### ❌ NEVER:
- Create a static page
- Place in a generic Pages collection
- Use a different template structure
- Skip the duplication step

---

## 4️⃣ SLUG NORMALIZATION RULE

### SLUG PATTERN:
```
{Location-Name-With-Hyphens}
```

### EXAMPLES:
- Deerfield Beach → `Deerfield-Beach`
- Boynton Beach → `Boynton-Beach`
- Palm Beach County Unincorporated → `palm-beach-county-unincorporated`
- Coral Springs → `coral-springs`

### RULES:
1. Use hyphens between words
2. Match existing page slug casing patterns (inspect existing pages first)
3. Some slugs use Title-Case (e.g., `Deerfield-Beach`)
4. Some slugs use lowercase (e.g., `coral-springs`)
5. **When in doubt, use the casing pattern of the most recent working page**

### VALIDATION:
Check existing pages in `/src/pages/*RoofRepairPage.tsx` to determine the current slug pattern.

---

## 5️⃣ SITEMAP / NAV INCLUSION CHECK (MANDATORY)

A Roof Repair location page is **NOT VALID** until ALL of these are true:

### ✅ PRE-PUBLICATION CHECKLIST:

- [ ] Page renders in browser preview at correct route
- [ ] Uses same React component structure as working pages
- [ ] Added to `/src/App.tsx` with proper route
- [ ] Added to `/src/data/sheetSitemap.ts` under "Roof Repair" section
- [ ] Entry in sitemap includes:
  - `section: 'Roof Repair'`
  - `label: 'Roof Repair in {Location}'`
  - `path: '/roofing-services/roof-repair/{slug}'`
  - `parent: '/roof-repair'`
  - `indexable: true`
  - `priority: 0.8`
  - `changefreq: 'monthly'`
- [ ] Page appears in HTML sitemap under "Roof Repair"
- [ ] No duplicate location pages exist
- [ ] Build completes successfully (`npm run build`)

**If ANY check fails, DO NOT publish. Fix binding/fields until all pass.**

---

## 6️⃣ DUPLICATE PREVENTION (MANDATORY)

### BEFORE CREATING ANY NEW PAGE:

Search for existing pages matching:
- Same city/county name
- Similar slug variants (case differences, hyphenation)
- Both route patterns (legacy and canonical)

### SEARCH COMMANDS:
```bash
# Search for existing page files
grep -r "Palm Beach County" src/pages/ -i

# Search for existing routes
grep "roofing-services/roof-repair" src/App.tsx

# Search sitemap entries
grep "Roof Repair" src/data/sheetSitemap.ts
```

### IF LEGACY PAGE EXISTS:
- Legacy route: `/roof-repair/{slug}`
- Canonical route: `/roofing-services/roof-repair/{slug}`

**Actions:**
1. ✅ Proceed with canonical creation
2. ❌ Do NOT create a new legacy page
3. ❌ Do NOT delete the legacy page during creation
4. 📝 Flag for future 301 redirect planning (separate task)

---

## 7️⃣ CONTENT RULES

### STYLING & LAYOUT:
- ✅ Keep existing styling, layout, typography, spacing
- ✅ Use existing components
- ❌ Do NOT redesign anything
- ❌ Do NOT add a footer component (handled by global layout)

### TONE & LANGUAGE:
- Inspection-first approach
- Code-aware (Florida Building Code)
- HVHZ references (conditional on location)
- HOA/insurance coordination language
- ❌ Do NOT give legal advice
- ❌ Do NOT give insurance advice

### REQUIRED INTERNAL LINKS:

Every Roof Repair location page MUST include these exact links:

1. **Service Area Hub:**
   ```
   /service-areas/{location-slug}
   ```

2. **Cost Calculator:**
   ```
   /service-areas/{location-slug}/roof-cost-estimate
   ```

3. **Financing:**
   ```
   /financing
   ```

4. **Diagnostic Roof Inspection:**
   ```
   /roofing-services/roof-inspection
   ```
   *Linked once in hero paragraph as "diagnostic roof inspection"*

---

## 8️⃣ SECTION ORDER (LOCKED)

Every Roof Repair location page MUST follow this exact structure:

### REQUIRED SECTIONS (IN ORDER):

1. **Hero Section**
   - H1: `Roof Repair in {Location}, FL`
   - Brief intro paragraph with diagnostic inspection link

2. **Common Roof Repair Issues in {Location}**
   - Location-specific challenges
   - Use icons/cards layout

3. **Diagnostic Roof Repair Process**
   - Step-by-step approach
   - Numbered list or timeline

4. **Roof Systems Repaired in {Location}**
   - Tile, Shingle, Flat, Metal
   - System-specific details

5. **HOA and Insurance Coordination**
   - Documentation support
   - Communication handling

6. **Roof Repair Planning Tools**
   - **REQUIRED TABLE** (see Section 9)

7. **Why {Location} Property Owners Choose All Phase Construction USA**
   - Trust factors
   - Local expertise
   - Bullet list format

8. **Roof Repair FAQs – {Location}, FL**
   - **EXACTLY 5 FAQs** (see Section 10)
   - Accordion/collapsible format

9. **CTA: Schedule a Roof Repair Inspection**
   - Contact component
   - Phone number prominent

10. **FAQ JSON-LD Schema**
    - Must match visible FAQs exactly
    - Structured data for SEO

### ❌ DO NOT:
- Reorder sections
- Skip sections
- Add extra sections
- Rename section headings

---

## 9️⃣ TABLE REQUIREMENT (MANDATORY)

### LOCATION: "Roof Repair Planning Tools" Section

### REQUIRED TABLE STRUCTURE:

```html
<table>
  <thead>
    <tr>
      <th>What You're Seeing</th>
      <th>Common {Location} Cause</th>
      <th>Why It Matters</th>
      <th>Typical Repair Approach</th>
    </tr>
  </thead>
  <tbody>
    <!-- Minimum 6 rows -->
  </tbody>
</table>
```

### REQUIREMENTS:
- ✅ Semantic HTML table (`<table>`, `<thead>`, `<tbody>`)
- ✅ Mobile-friendly (horizontal scroll if needed)
- ✅ Exact column headers as shown above
- ✅ Minimum 6 localized rows
- ❌ Do NOT use generic duplicates across cities
- ✅ Location-specific causes and considerations

### EXAMPLE ROW:
| What You're Seeing | Common {Location} Cause | Why It Matters | Typical Repair Approach |
|--------------------|-------------------------|----------------|-------------------------|
| Water stains on ceiling | Wind-driven rain through damaged underlayment | Can indicate structural deck damage | Inspection → underlayment patch → interior restoration |

---

## 🔟 FAQ RULES (EXACTLY 5)

### REQUIRED FAQ TOPICS:

1. **Repair vs Replacement Determination**
   - How to decide between repair and replacement
   - Inspection-first approach

2. **Code / HVHZ Requirements**
   - Florida Building Code compliance
   - HVHZ standards (if applicable to location)

3. **Tile Roof Repair Viability**
   - Can tile roofs be repaired?
   - Conditions for repair vs replacement

4. **HOA Coordination**
   - How HOA requirements are handled
   - Approval process support

5. **Insurance Implications**
   - Documentation support
   - Claim assistance

### FAQ FORMAT:
```javascript
const faqItems = [
  {
    question: "How do I know if my {Location} roof needs repair or replacement?",
    answer: "A diagnostic inspection evaluates damage extent, system age, and code thresholds to determine whether repairs are viable."
  },
  // ... 4 more FAQs
];
```

### RULES:
- ✅ Exactly 5 FAQs per page
- ✅ Location-specific question text
- ✅ Concise answers (2-3 sentences max)
- ❌ Do NOT guarantee outcomes
- ❌ Do NOT give legal advice
- ❌ Do NOT give insurance advice

### JSON-LD REQUIREMENT:
FAQ structured data MUST match visible FAQs exactly:

```javascript
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my {Location} roof needs repair or replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A diagnostic inspection evaluates damage extent, system age, and code thresholds to determine whether repairs are viable."
      }
    },
    // ... must match all 5 FAQs
  ]
};
```

---

## 1️⃣1️⃣ NAP (NAME, ADDRESS, PHONE)

### ONLY USE THIS INFORMATION:

```
Business Name: All Phase Construction USA
Address: 590 Goolsby Blvd, Deerfield Beach, FL 33442
Phone: (754) 227-5605
Email: leads@allphaseusa.com
Website: https://allphaseconstructionfl.com
```

### ❌ DO NOT:
- Add any other addresses
- Add any other phone numbers
- Add any other email addresses
- Use satellite office information
- Use personal contact information

---

## 📋 OPERATIONAL WORKFLOW

### WHEN ASKED TO CREATE A NEW ROOF REPAIR LOCATION PAGE:

#### STEP 1: VALIDATE REQUEST
- [ ] Is this a Roof Repair location page? (city/county/unincorporated)
- [ ] Does the URL match `/roofing-services/roof-repair/{slug}`?
- [ ] If NO to either: STOP and request correct information

#### STEP 2: CHECK FOR DUPLICATES
- [ ] Search for existing page with same location name
- [ ] Check both route patterns (legacy and canonical)
- [ ] If duplicate exists: STOP and report findings

#### STEP 3: DUPLICATE WORKING PAGE
- [ ] Find: `DeerfieldBeachRoofRepairPage.tsx` or `BoyntonBeachRoofRepairPage.tsx`
- [ ] Duplicate entire file
- [ ] Rename file: `{Location}RoofRepairPage.tsx`
- [ ] Update component name

#### STEP 4: LOCALIZE CONTENT
- [ ] Update H1: `Roof Repair in {Location}, FL`
- [ ] Update document.title
- [ ] Update meta description
- [ ] Update canonical URL
- [ ] Update all location references in content
- [ ] Create location-specific table rows (minimum 6)
- [ ] Create location-specific FAQs (exactly 5)
- [ ] Update FAQ JSON-LD to match

#### STEP 5: ADD ROUTING
- [ ] Import component in `/src/App.tsx`
- [ ] Add route: `<Route path="/roofing-services/roof-repair/{slug}" element={<{Location}RoofRepairPage />} />`

#### STEP 6: ADD TO SITEMAP
- [ ] Open `/src/data/sheetSitemap.ts`
- [ ] Add entry under "Roof Repair" section:
  ```javascript
  {
    section: 'Roof Repair',
    label: 'Roof Repair in {Location}',
    path: '/roofing-services/roof-repair/{slug}',
    parent: '/roof-repair',
    indexable: true,
    priority: 0.8,
    changefreq: 'monthly',
  },
  ```

#### STEP 7: RUN PRE-PUBLICATION CHECKLIST
- [ ] Run `npm run build`
- [ ] Verify build succeeds
- [ ] Check browser preview at correct route
- [ ] Verify page appears in HTML sitemap
- [ ] Verify no duplicate pages exist
- [ ] Verify all internal links are correct

#### STEP 8: PUBLISH
- [ ] If ALL checks pass: PUBLISH
- [ ] If ANY check fails: FIX ISSUES and repeat Step 7

---

## 🚨 VIOLATION HANDLING

### IF YOU ARE ASKED TO:

- **Create a Roof Repair page on a different route** → STOP and explain correct route
- **Skip the duplication step** → STOP and explain template requirements
- **Add a 6th FAQ** → STOP and explain exactly 5 FAQs required
- **Remove the table** → STOP and explain table is mandatory
- **Use different NAP information** → STOP and provide correct NAP
- **Redesign the layout** → STOP and explain layout is locked
- **Create a different service page** → STOP and explain scope limitation

### RESPONSE TEMPLATE:
```
I cannot proceed with this request because it violates the Roof Repair Guardrails:

[Specific violation]

The correct approach is:

[Correct method according to guardrails]

Please confirm you'd like to proceed with the correct approach, or clarify your request.
```

---

## 📚 REFERENCE FILES

### WORKING EXAMPLES:
- `/src/pages/DeerfieldBeachRoofRepairPage.tsx`
- `/src/pages/BoyntonBeachRoofRepairPage.tsx`
- `/src/pages/BocaRatonRoofRepairPage.tsx`

### KEY SYSTEM FILES:
- `/src/App.tsx` - Route definitions
- `/src/data/sheetSitemap.ts` - Sitemap entries (SINGLE SOURCE OF TRUTH)
- `/src/utils/routes.ts` - Route utilities

### DOCUMENTATION:
- `ROOF_REPAIR_GUARDRAILS.md` - This document
- `STRUCTURE_LOCK_SUMMARY.md` - Overall site structure
- `CANONICAL_ALIGNMENT.md` - Canonical URL strategy

---

## ✅ COMPLIANCE VERIFICATION

Before considering any Roof Repair location page complete:

```bash
# 1. Check file exists
ls src/pages/*{Location}*RoofRepairPage.tsx

# 2. Check route is registered
grep "{slug}" src/App.tsx

# 3. Check sitemap entry
grep "{Location}" src/data/sheetSitemap.ts

# 4. Run build
npm run build

# 5. Verify no errors
echo $?  # Should return 0
```

---

## 🔒 GUARDRAILS VERSION

**Version:** 1.0.0
**Last Updated:** 2026-01-25
**Status:** ACTIVE AND ENFORCED

---

**END OF GUARDRAILS**

Any questions about these guardrails should be resolved by referencing the working examples listed above and the site structure documentation.
