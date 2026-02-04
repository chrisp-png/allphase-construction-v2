# FAQ Question Update: Repair vs Replace Decision-Making

**Date:** 2026-01-30  
**Status:** ✅ COMPLETED

## Objective

Replace the FAQ/PAA question "Is a roof repair cheaper than replacement?" with "Is it better to repair a roof or replace it?" on both the Roof Repair hub page and the Roof Cost Calculator page, emphasizing repair-first decision-making, localized failure evaluation, and Florida's 5-year roof certification pathway.

## Pages Modified

### 1. Roof Cost Calculator Page
**File:** `/src/pages/CalculatorPage.tsx`

**Changes:**
- Updated FAQ schema (JSON-LD) question and answer
- Updated visible FAQ accordion question and answer
- Enhanced answer format with structured sections
- Added highlighted callout box for Florida 5-year certification

### 2. Roof Repair Hub Page
**File:** `/src/pages/RoofRepairHubPage.tsx`

**Changes:**
- Replaced first FAQ question with new repair vs. replace question
- Updated FAQ schema (JSON-LD) to match
- Updated faqItems array for visible accordion

## New Question & Answer

### Question
**"Is it better to repair a roof or replace it?"**

### Schema Answer (Plain Text)
"Start with a diagnostic roof inspection to evaluate localized failure versus widespread deterioration. Repair is often the better first option when damage is confined to specific slopes, penetrations, or flashings—addressing the failure pattern without replacing sound areas. Replacement becomes necessary when deterioration is roof-wide, repeat failures are likely, or the system can no longer perform reliably. In Florida, repairs may also position a roof for the 5-year certification pathway under Florida Statute § 627.7011(5)(a), allowing insurers to renew based on roof condition rather than age alone when a qualified professional certifies 5+ years of useful life. This approach can defer replacement costs, support insurance renewals, and provide time for planned capital budgeting. Outcomes depend on inspection findings, repair scope, and individual roof condition."

### Enhanced Visual Answer (Calculator Page)
The Calculator page includes a more structured visual presentation with:

1. **Opening paragraph** - Emphasizes diagnostic inspection and localized failure evaluation
2. **Decision criteria** - When replacement becomes necessary
3. **Highlighted callout box** - Florida's 5-year roof certification pathway
   - Left border accent (red)
   - Distinct background color
   - Bold headings for key terms
   - Explains Florida Statute § 627.7011(5)(a)
   - Cost-saving and insurance renewal benefits

## Key Messaging Points

### 1. Repair-First Decision-Making
- Emphasizes starting with diagnostic inspection
- Evaluates localized failure vs widespread deterioration
- Positions repair as "better first option" when appropriate
- Focuses on addressing failure patterns, not just symptoms

### 2. Localized vs. Widespread Damage
- Repair appropriate: damage confined to specific slopes, penetrations, or flashings
- Replacement necessary: roof-wide deterioration, repeat failures likely, system can't perform reliably
- Clear decision framework based on inspection findings

### 3. Florida 5-Year Roof Certification Pathway

**Legal Reference:**
- Florida Statute § 627.7011(5)(a)

**Key Benefits:**
- Allows insurance renewal based on **roof condition** rather than **age alone**
- Qualified professional certifies 5+ years of useful life
- Defers replacement costs
- Supports insurance renewals
- Provides time for planned capital budgeting

**Qualification Requirements:**
- Professional roof inspection required
- Repairs may address deficiencies to qualify
- Certification must show 5+ years remaining useful life
- Outcomes vary based on inspection findings and individual roof condition

### 4. Cost-Saving & Insurance Strategy
- Positions repairs as strategic investment, not just emergency response
- Insurance renewal support through condition certification
- Capital planning flexibility (defer major expenditure)
- Time value benefit (planned vs. emergency spending)

## Design & Formatting

### Calculator Page - Enhanced Presentation
```
├── Main paragraph (localized failure evaluation)
├── Secondary paragraph (when replacement necessary)
└── Callout box (Florida certification)
    ├── Background: bg-zinc-800
    ├── Border: border-l-4 border-red-600
    ├── Bold heading with red emphasis
    ├── Structured paragraphs
    └── Internal links preserved
```

### Roof Repair Hub Page - Standard Format
- Single paragraph format (matches existing FAQ style)
- Complete information in flowing text
- Consistent with other FAQ items on page

### Styling Consistency
✅ Font sizes maintained  
✅ Color scheme preserved (zinc backgrounds, red accents)  
✅ Spacing consistent (p-4, p-6 padding)  
✅ Internal link styling unchanged  
✅ Icon usage consistent (Plus/Minus toggles)  
✅ Hover states preserved

## SEO & Content Strategy

### Snippet Optimization
- **Question format:** Natural language, common search query
- **Answer structure:** Direct response first, then details
- **Key terms front-loaded:** "diagnostic inspection," "localized failure"
- **Actionable guidance:** Clear decision framework

### Featured Snippet Targeting
**Primary query targets:**
- "is it better to repair or replace a roof"
- "should I repair or replace my roof"
- "roof repair vs replacement decision"
- "when to repair roof vs replace"

**Long-tail targets:**
- "florida 5 year roof certification"
- "roof condition certification florida insurance"
- "florida statute 627.7011 roof certification"
- "repair roof for insurance renewal florida"

### Internal Link Preservation
Both pages maintain internal links to:
- `/roof-inspection` (diagnostic inspections)
- `/roofing-services/roof-repair` (repair services)

### Schema Markup Benefits
- FAQPage schema updated on both pages
- Structured data matches visible content exactly
- Rich snippet eligibility maintained
- Voice search optimization for decision-based queries

## Technical Implementation

### Schema Synchronization
- JSON-LD script in document head
- Question and answer text matches exactly between schema and visible content
- Clean up on component unmount (return function in useEffect)

### State Management
- Accordion state unchanged (openFaqIndex)
- Toggle function preserved
- FAQ index numbers maintained (Calculator: index 2, Repair Hub: index 0)

### Content Architecture
**Calculator Page:**
- Nested div structure with space-y-4 spacing
- Callout box as child element
- Strong tags for emphasis on key terms

**Roof Repair Hub Page:**
- Single text block (matches existing pattern)
- Consistent with other FAQ items
- Maintains page flow and readability

## Verification Checklist

✅ Build completed successfully (1728 modules transformed)  
✅ No TypeScript errors  
✅ FAQ schema (JSON-LD) updated on both pages  
✅ Visible FAQ accordion updated on both pages  
✅ Question text matches exactly between schema and accordion  
✅ Answer content synchronized  
✅ Internal links preserved and functional  
✅ Design consistency maintained  
✅ Spacing and typography unchanged  
✅ Mobile responsive design intact  
✅ Accordion toggle functionality preserved

## Before & After Comparison

### Previous Question
**"Is a roof repair cheaper than replacement?"**

**Focus:** Cost comparison only

**Tone:** Reactive (responding to existing damage)

**Content:** Basic cost ranges, Florida Building Code 25% rule

### New Question
**"Is it better to repair a roof or replace it?"**

**Focus:** Decision-making framework with strategic benefits

**Tone:** Proactive (evaluation-first approach)

**Content:** 
- Localized vs. widespread damage evaluation
- Repair-first philosophy
- Florida 5-year certification pathway
- Insurance renewal strategy
- Capital planning benefits
- Cost deferral options

## Business Benefits

### For Homeowners
1. **Better decision framework** - Clear evaluation criteria
2. **Insurance renewal option** - 5-year certification pathway explained
3. **Cost planning** - Strategic timing vs. emergency spending
4. **Professional guidance** - Emphasizes diagnostic inspection first

### For All Phase Construction
1. **Education-first positioning** - Builds trust through information
2. **Service differentiation** - Repair-first philosophy vs. "always replace"
3. **Insurance expertise** - Demonstrates knowledge of Florida statute
4. **Higher-value conversations** - Strategic vs. transactional

### SEO & Lead Generation
1. **Featured snippet opportunities** - Decision-based queries
2. **Insurance-related traffic** - "5-year certification" searches
3. **Local authority signals** - Florida statute references
4. **Educational content value** - Reduces bounce rate, increases engagement

## Related Pages & Cross-References

This FAQ appears on pages that already contain:
- Comprehensive roof repair information
- Florida Building Code compliance details
- HVHZ requirements
- Diagnostic inspection processes
- 5-year certification section (Roof Repair hub page)

The updated FAQ reinforces existing page content and provides a concise decision framework that leads users to deeper exploration of repair options.

## Post-Deployment Monitoring

### Search Console Queries to Track
- "is it better to repair or replace roof"
- "florida 5 year roof certification"
- "roof condition certification florida"
- "repair roof for insurance renewal"
- Variations with "broward county" / "palm beach county"

### User Engagement Metrics
- FAQ accordion open rate (Calculator page index 2)
- Time spent in FAQ section
- Click-through to /roof-inspection and /roofing-services/roof-repair
- Bounce rate on Calculator page (expect decrease)

### Featured Snippet Monitoring
- Track SERP position for target queries
- Monitor rich snippet appearance in Google
- Check voice search result inclusion
- Review Google Search Console "Search Appearance" data

## Notes

- Answer emphasizes evaluation before decision (inspection-first)
- Florida statute reference adds authority and trust
- 5-year certification positions repairs as strategic, not stopgap
- Callout box on Calculator page creates visual emphasis
- Content remains factual and avoids overpromising
- Outcomes correctly noted as dependent on individual circumstances
- Professional qualification requirements preserved (licensed, qualified professionals)
- Insurance renewal disclaimer implicit (outcomes vary by insurer)

## Files Modified Summary

**2 files changed:**
1. `/src/pages/CalculatorPage.tsx` - FAQ question/answer updated (schema + accordion)
2. `/src/pages/RoofRepairHubPage.tsx` - FAQ question/answer updated (schema + accordion + faqItems array)

**0 files added**  
**0 files removed**

Build status: ✅ SUCCESS (36.70s)
