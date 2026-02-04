# ROOF REPAIR LOCATION PAGE - VALIDATION CHECKLIST

**Use this checklist to verify compliance with ROOF_REPAIR_GUARDRAILS.md**

---

## 📋 PRE-CREATION VALIDATION

### Request Validation
- [ ] Request is for a Roof Repair location page (city/county/unincorporated)
- [ ] URL matches pattern: `/roofing-services/roof-repair/{location-slug}`
- [ ] Location name is clear and unambiguous

### Duplicate Check
- [ ] Searched for existing page with same location name
- [ ] Checked: `grep -r "{Location}" src/pages/ -i`
- [ ] Checked routes: `grep "{location-slug}" src/App.tsx`
- [ ] Checked sitemap: `grep "{Location}" src/data/sheetSitemap.ts`
- [ ] **RESULT:** No duplicates found ✅ / Duplicates found ⚠️

---

## 📄 FILE STRUCTURE VALIDATION

### Component File
- [ ] File created: `/src/pages/{Location}RoofRepairPage.tsx`
- [ ] Component name matches filename: `export default function {Location}RoofRepairPage()`
- [ ] File duplicated from working example (DeerfieldBeach or BoyntonBeach)
- [ ] All imports preserved from template
- [ ] Component structure matches template

### File Naming Convention
- [ ] PascalCase component name: `{Location}RoofRepairPage`
- [ ] Location uses proper casing (check existing pages for pattern)
- [ ] "RoofRepairPage" suffix included

---

## 🔗 ROUTING VALIDATION

### App.tsx Route Registration
- [ ] Import added: `import {Location}RoofRepairPage from './pages/{Location}RoofRepairPage';`
- [ ] Route added: `<Route path="/roofing-services/roof-repair/{slug}" element={<{Location}RoofRepairPage />} />`
- [ ] Slug matches pattern (check existing pages for casing)
- [ ] Route is alphabetically sorted with other Roof Repair routes

### Slug Validation
- [ ] Slug uses hyphens between words
- [ ] Slug casing matches existing pattern:
  - Title-Case: `Deerfield-Beach`, `Boynton-Beach` ✅
  - OR lowercase: `coral-springs` ✅
- [ ] No trailing slashes
- [ ] No special characters except hyphens

---

## 🗺️ SITEMAP VALIDATION

### sheetSitemap.ts Entry
- [ ] Entry added to `/src/data/sheetSitemap.ts`
- [ ] Entry placed in "Roof Repair" section (after comment `// Roof Repair`)
- [ ] Entry follows this exact structure:
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

### Sitemap Field Validation
- [ ] `section` = `'Roof Repair'` (exact match)
- [ ] `label` includes location name
- [ ] `path` matches route in App.tsx
- [ ] `parent` = `'/roof-repair'`
- [ ] `indexable` = `true`
- [ ] `priority` = `0.8`
- [ ] `changefreq` = `'monthly'`

---

## 🏷️ META TAGS VALIDATION

### Document Title
- [ ] Format: `Roof Repair in {Location}, FL | All Phase Construction USA`
- [ ] Set in useEffect: `document.title = '...'`
- [ ] Location name is accurate

### Meta Description
- [ ] Exists and is set in useEffect
- [ ] Mentions: roof repair, location, key services
- [ ] Between 150-160 characters
- [ ] Includes: "Professional roof repair", location name, service types

### Meta Robots
- [ ] Set to: `'index, follow'`
- [ ] Applied in useEffect

### Canonical URL
- [ ] Format: `https://allphaseconstructionfl.com/roofing-services/roof-repair/{slug}`
- [ ] Matches route exactly
- [ ] Set in useEffect as `<link rel="canonical">`
- [ ] No trailing slash

---

## 📝 CONTENT STRUCTURE VALIDATION

### Section 1: Hero
- [ ] H1 exists: `Roof Repair in {Location}, FL`
- [ ] Intro paragraph mentions "diagnostic roof inspection"
- [ ] Link to `/roofing-services/roof-inspection` included
- [ ] Location name is prominent

### Section 2: Common Roof Repair Issues in {Location}
- [ ] Section exists with location-specific heading
- [ ] Lists 4-6 common issues
- [ ] Location-specific considerations included
- [ ] Uses icons or cards layout

### Section 3: Diagnostic Roof Repair Process
- [ ] Section exists
- [ ] Step-by-step process outlined
- [ ] Numbered list or timeline format
- [ ] Mentions code compliance

### Section 4: Roof Systems Repaired in {Location}
- [ ] Section exists
- [ ] Covers: Tile, Shingle, Flat, Metal
- [ ] System-specific details included
- [ ] Location considerations mentioned

### Section 5: HOA and Insurance Coordination
- [ ] Section exists
- [ ] Documentation support mentioned
- [ ] No legal advice given
- [ ] No insurance advice given

### Section 6: Roof Repair Planning Tools (TABLE REQUIRED)
- [ ] **Section exists**
- [ ] **Table is present** (see Table Validation below)

### Section 7: Why {Location} Property Owners Choose All Phase
- [ ] Section exists with location in heading
- [ ] Trust factors listed
- [ ] Local expertise emphasized
- [ ] Bullet or card format

### Section 8: Roof Repair FAQs – {Location}, FL
- [ ] Section exists with location in heading
- [ ] **Exactly 5 FAQs** (see FAQ Validation below)
- [ ] Accordion/collapsible format

### Section 9: CTA - Schedule a Roof Repair Inspection
- [ ] CTA section exists
- [ ] Contact component included
- [ ] Phone number visible: (754) 227-5605

### Section 10: FAQ JSON-LD Schema
- [ ] Schema exists
- [ ] Matches visible FAQs exactly (see FAQ Validation)

---

## 📊 TABLE VALIDATION (MANDATORY)

### Table Structure
- [ ] Semantic HTML: `<table>`, `<thead>`, `<tbody>`
- [ ] Located in "Roof Repair Planning Tools" section
- [ ] Mobile-friendly (responsive design)

### Table Headers (EXACT)
- [ ] Column 1: "What You're Seeing"
- [ ] Column 2: "Common {Location} Cause"
- [ ] Column 3: "Why It Matters"
- [ ] Column 4: "Typical Repair Approach"
- [ ] Location name in Column 2 header

### Table Content
- [ ] **Minimum 6 rows** (not including header)
- [ ] Each row has 4 cells
- [ ] Content is location-specific (NOT generic)
- [ ] No duplicate content from other city pages
- [ ] Covers variety of issues (leaks, damage, wear, etc.)

### Table Example Row Check
Verify at least one row follows this quality:
- [ ] "What You're Seeing" = Observable symptom
- [ ] "Common {Location} Cause" = Location-specific root cause
- [ ] "Why It Matters" = Risk or consequence
- [ ] "Typical Repair Approach" = Professional solution

---

## ❓ FAQ VALIDATION (EXACTLY 5)

### FAQ Count
- [ ] **Exactly 5 FAQs** (not 4, not 6)

### Required FAQ Topics Coverage
- [ ] FAQ 1: Repair vs Replacement determination
- [ ] FAQ 2: Code / HVHZ requirements
- [ ] FAQ 3: Tile roof repair viability
- [ ] FAQ 4: HOA coordination
- [ ] FAQ 5: Insurance implications

### FAQ Content Quality
- [ ] Questions mention location name
- [ ] Answers are concise (2-3 sentences)
- [ ] No outcome guarantees
- [ ] No legal advice
- [ ] No insurance advice
- [ ] Answers are actionable/informative

### FAQ Technical Implementation
- [ ] FAQs in JavaScript array: `const faqItems = [...]`
- [ ] Each FAQ has `question` and `answer` properties
- [ ] Accordion uses `useState` for open/close
- [ ] Plus/Minus icons toggle

### FAQ JSON-LD Schema
- [ ] Schema exists with `@type: "FAQPage"`
- [ ] Schema has `mainEntity` array
- [ ] Schema has exactly 5 Question entities
- [ ] Each Question has `name` and `acceptedAnswer`
- [ ] Schema `name` = FAQ `question` (EXACT MATCH)
- [ ] Schema `text` = FAQ `answer` (EXACT MATCH)

---

## 🔗 INTERNAL LINKS VALIDATION

### Required Links Present
- [ ] Link to: `/service-areas/{location-slug}`
- [ ] Link to: `/service-areas/{location-slug}/roof-cost-estimate`
- [ ] Link to: `/financing`
- [ ] Link to: `/roofing-services/roof-inspection` (in hero, as "diagnostic roof inspection")

### Link Quality
- [ ] All links use correct slug for location
- [ ] Links use React Router `<Link>` component
- [ ] No broken links
- [ ] Links open in same window (not new tab)

---

## 📍 NAP VALIDATION

### Contact Information
- [ ] Business Name: "All Phase Construction USA" (exact)
- [ ] Address: "590 Goolsby Blvd, Deerfield Beach, FL 33442" (exact)
- [ ] Phone: "(754) 227-5605" (exact format with parentheses and hyphen)
- [ ] Email: "leads@allphaseusa.com" (exact)
- [ ] Website: "https://allphaseconstructionfl.com" (exact)

### NAP Compliance
- [ ] NO other addresses listed
- [ ] NO other phone numbers listed
- [ ] NO other email addresses listed
- [ ] NO satellite office information

---

## 🎨 STYLING & LAYOUT VALIDATION

### Component Usage
- [ ] Uses Header component: `import Header from '../components/Header'`
- [ ] Uses Contact component: `import Contact from '../components/Contact'`
- [ ] Header included at top: `<Header />`
- [ ] Contact included near bottom: `<Contact />`
- [ ] NO Footer component (handled by layout)

### Icon Usage
- [ ] Icons imported from 'lucide-react'
- [ ] Icons used consistently with other pages
- [ ] Example imports present: `CheckCircle2`, `AlertTriangle`, `Plus`, `Minus`

### Styling Consistency
- [ ] Uses Tailwind CSS classes
- [ ] Matches styling of template page
- [ ] No custom CSS added
- [ ] No inline styles
- [ ] Responsive design maintained

---

## 🏗️ BUILD VALIDATION

### Pre-Build Checks
- [ ] All TypeScript files have no errors
- [ ] All imports are correct
- [ ] No console errors in development

### Build Execution
```bash
npm run build
```

- [ ] Build command completes successfully
- [ ] No TypeScript errors
- [ ] No build errors
- [ ] Exit code = 0

### Post-Build Checks
- [ ] Page renders in browser preview
- [ ] Route works: `/roofing-services/roof-repair/{slug}`
- [ ] No 404 errors
- [ ] No console errors in browser
- [ ] All images load
- [ ] All links work

---

## 🌐 SITEMAP GENERATION VALIDATION

### XML Sitemap
```bash
npm run generate-sitemap
```

- [ ] Command completes successfully
- [ ] `/public/sitemap.xml` updated
- [ ] New page URL present in XML
- [ ] Priority = 0.8
- [ ] Changefreq = monthly

### HTML Sitemap
- [ ] Navigate to `/sitemap`
- [ ] New page listed under "Roof Repair" section
- [ ] Link is clickable
- [ ] Link goes to correct URL

---

## 🔍 DUPLICATE PREVENTION VALIDATION

### Final Duplicate Check
- [ ] No other page with same location name
- [ ] No other page with similar slug
- [ ] Only ONE page per location
- [ ] Legacy route does NOT have matching page (or is flagged for redirect)

### Route Uniqueness
- [ ] Route is unique in App.tsx
- [ ] No conflicting routes
- [ ] No route overlap

---

## ✅ FINAL APPROVAL CHECKLIST

Before marking the page as complete:

- [ ] ALL sections above marked as complete
- [ ] Build is successful
- [ ] Page renders correctly in preview
- [ ] Sitemap entry is correct
- [ ] No duplicates exist
- [ ] NAP information is correct
- [ ] Table has minimum 6 rows
- [ ] Exactly 5 FAQs
- [ ] FAQ JSON-LD matches visible FAQs
- [ ] All internal links are correct
- [ ] Meta tags are properly set
- [ ] Canonical URL is correct

---

## 🚨 ISSUE TRACKING

If any validation fails, document here:

### Issues Found:
1.
2.
3.

### Issues Resolved:
1.
2.
3.

---

## 📅 VALIDATION RECORD

**Page Created:** `/src/pages/{Location}RoofRepairPage.tsx`

**Route:** `/roofing-services/roof-repair/{slug}`

**Validated By:** [Name/Date]

**Status:** ☐ In Progress | ☐ Issues Found | ☑ Approved

**Notes:**

---

**END OF CHECKLIST**

Use this checklist for every new Roof Repair location page to ensure 100% compliance with guardrails.
