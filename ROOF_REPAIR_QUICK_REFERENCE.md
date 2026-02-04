# ROOF REPAIR PAGES - QUICK REFERENCE GUIDE

**Creating a new Roof Repair location page? Start here.**

---

## 📚 DOCUMENTATION INDEX

### Primary Resources
1. **[ROOF_REPAIR_GUARDRAILS.md](./ROOF_REPAIR_GUARDRAILS.md)** - Complete guardrails (NON-NEGOTIABLE)
2. **[ROOF_REPAIR_VALIDATION_CHECKLIST.md](./ROOF_REPAIR_VALIDATION_CHECKLIST.md)** - Step-by-step validation checklist

### Supporting Documentation
- **[STRUCTURE_LOCK_SUMMARY.md](./STRUCTURE_LOCK_SUMMARY.md)** - Overall site structure rules
- **[CANONICAL_ALIGNMENT.md](./CANONICAL_ALIGNMENT.md)** - Canonical URL strategy
- **[SEO_ALIGNMENT_SUMMARY.md](./SEO_ALIGNMENT_SUMMARY.md)** - SEO requirements

---

## ⚡ QUICK START (5 STEPS)

### 1. Verify Request
```bash
✅ Is this a Roof Repair location page?
✅ URL matches: /roofing-services/roof-repair/{slug}
```

### 2. Check for Duplicates
```bash
grep -r "Location Name" src/pages/ -i
grep "location-slug" src/App.tsx
grep "Location Name" src/data/sheetSitemap.ts
```

### 3. Duplicate Template
```bash
# Copy from working example:
src/pages/DeerfieldBeachRoofRepairPage.tsx
# OR
src/pages/BoyntonBeachRoofRepairPage.tsx
```

### 4. Localize Content
- Update component name
- Update H1, title, meta tags, canonical
- Create location-specific table (min 6 rows)
- Create location-specific FAQs (exactly 5)
- Update all location references

### 5. Register & Validate
- Add import in `/src/App.tsx`
- Add route in `/src/App.tsx`
- Add entry in `/src/data/sheetSitemap.ts`
- Run: `npm run build`
- Verify checklist: [ROOF_REPAIR_VALIDATION_CHECKLIST.md](./ROOF_REPAIR_VALIDATION_CHECKLIST.md)

---

## 🎯 CRITICAL REQUIREMENTS

### Route Pattern (LOCKED)
```
/roofing-services/roof-repair/{location-slug}
```

### Slug Examples
- `Deerfield-Beach` (Title-Case)
- `Boynton-Beach` (Title-Case)
- `coral-springs` (lowercase)
- `palm-beach-county-unincorporated` (lowercase)

**Check existing pages to match casing pattern!**

### Required Sections (IN ORDER)
1. Hero (H1: Roof Repair in {Location}, FL)
2. Common Roof Repair Issues in {Location}
3. Diagnostic Roof Repair Process
4. Roof Systems Repaired in {Location}
5. HOA and Insurance Coordination
6. **Roof Repair Planning Tools (TABLE REQUIRED)**
7. Why {Location} Property Owners Choose All Phase
8. **Roof Repair FAQs – {Location}, FL (EXACTLY 5 FAQs)**
9. CTA: Schedule a Roof Repair Inspection
10. FAQ JSON-LD Schema

### Table Requirements
- **Minimum 6 rows** (location-specific)
- Headers:
  1. What You're Seeing
  2. Common {Location} Cause
  3. Why It Matters
  4. Typical Repair Approach

### FAQ Requirements
- **Exactly 5 FAQs** (not 4, not 6)
- Topics:
  1. Repair vs Replacement
  2. Code / HVHZ
  3. Tile Repair Viability
  4. HOA Coordination
  5. Insurance Implications
- JSON-LD must match visible FAQs EXACTLY

### NAP (Use ONLY This)
```
Business Name: All Phase Construction USA
Address: 590 Goolsby Blvd, Deerfield Beach, FL 33442
Phone: (754) 227-5605
Email: leads@allphaseusa.com
Website: https://allphaseconstructionfl.com
```

### Required Internal Links
- `/service-areas/{location-slug}`
- `/service-areas/{location-slug}/roof-cost-estimate`
- `/financing`
- `/roofing-services/roof-inspection` (as "diagnostic roof inspection")

---

## 🔍 FILE LOCATIONS

### Template Files (Use as Reference)
```
/src/pages/DeerfieldBeachRoofRepairPage.tsx
/src/pages/BoyntonBeachRoofRepairPage.tsx
/src/pages/BocaRatonRoofRepairPage.tsx
/src/pages/CoralSpringsRoofRepairPage.tsx
```

### System Files (Must Update)
```
/src/App.tsx - Add route
/src/data/sheetSitemap.ts - Add sitemap entry
```

### Your New File
```
/src/pages/{Location}RoofRepairPage.tsx
```

---

## ✅ PRE-PUBLICATION CHECKLIST

Quick verification before publishing:

- [ ] Page file created in `/src/pages/`
- [ ] Route added to `/src/App.tsx`
- [ ] Sitemap entry added to `/src/data/sheetSitemap.ts`
- [ ] Table has minimum 6 rows
- [ ] Exactly 5 FAQs
- [ ] FAQ JSON-LD matches visible FAQs
- [ ] All 4 internal links present
- [ ] NAP is correct (no extra contacts)
- [ ] Build succeeds: `npm run build`
- [ ] Page renders in preview
- [ ] No duplicates exist

**If ANY item fails, do NOT publish. Fix and re-check.**

---

## 🚀 COMMANDS

### Development
```bash
npm run dev
```

### Build & Validate
```bash
npm run build
```

### Generate Sitemap
```bash
npm run generate-sitemap
```

### Type Check
```bash
npm run typecheck
```

### Search Commands
```bash
# Find existing pages
grep -r "Location Name" src/pages/ -i

# Check routes
grep "roofing-services/roof-repair" src/App.tsx

# Check sitemap
grep "Roof Repair" src/data/sheetSitemap.ts

# Find similar slugs
find src/pages -name "*RoofRepairPage.tsx"
```

---

## 🛠️ TROUBLESHOOTING

### Issue: Build fails
**Solution:** Check TypeScript errors, verify imports

### Issue: Page shows 404
**Solution:** Verify route in App.tsx matches slug in URL

### Issue: Page not in HTML sitemap
**Solution:** Check entry in sheetSitemap.ts, rebuild, check section name

### Issue: FAQ JSON-LD mismatch
**Solution:** Copy FAQ text exactly from visible FAQs to JSON-LD schema

### Issue: Table has 5 rows (needs 6+)
**Solution:** Add more location-specific issues

### Issue: 6 FAQs (needs exactly 5)
**Solution:** Remove one FAQ, update JSON-LD

### Issue: Duplicate page exists
**Solution:** Do NOT create new page, assess existing page routing

---

## 📊 WORKING EXAMPLES

### Deerfield Beach (Reference Standard)
- **File:** `/src/pages/DeerfieldBeachRoofRepairPage.tsx`
- **Route:** `/roofing-services/roof-repair/Deerfield-Beach`
- **Slug Pattern:** Title-Case

### Boynton Beach (Reference Standard)
- **File:** `/src/pages/BoyntonBeachRoofRepairPage.tsx`
- **Route:** `/roofing-services/roof-repair/Boynton-Beach`
- **Slug Pattern:** Title-Case

### Coral Springs (Alternative Pattern)
- **File:** `/src/pages/CoralSpringsRoofRepairPage.tsx`
- **Route:** `/roofing-services/roof-repair/coral-springs`
- **Slug Pattern:** lowercase

**Always check existing pages to match current slug pattern!**

---

## ⚠️ COMMON MISTAKES TO AVOID

1. ❌ Creating page on wrong route (e.g., `/roof-repair/{slug}`)
2. ❌ Creating new page instead of duplicating template
3. ❌ Forgetting to add sitemap entry
4. ❌ Table with less than 6 rows
5. ❌ Not exactly 5 FAQs (having 4 or 6)
6. ❌ FAQ JSON-LD not matching visible FAQs
7. ❌ Using generic table content across cities
8. ❌ Wrong NAP information
9. ❌ Missing internal links
10. ❌ Not running build before publishing

---

## 📞 CONTACT & SUPPORT

For questions about these guardrails:
1. Review [ROOF_REPAIR_GUARDRAILS.md](./ROOF_REPAIR_GUARDRAILS.md)
2. Check working examples in `/src/pages/`
3. Consult [ROOF_REPAIR_VALIDATION_CHECKLIST.md](./ROOF_REPAIR_VALIDATION_CHECKLIST.md)

---

## 🔐 GUARDRAILS STATUS

**Status:** ✅ ACTIVE AND ENFORCED
**Version:** 1.0.0
**Last Updated:** 2026-01-25

---

**Remember: These guardrails are NON-NEGOTIABLE. Any violation must be corrected before publication.**

**When in doubt, duplicate a working page and modify minimally.**
