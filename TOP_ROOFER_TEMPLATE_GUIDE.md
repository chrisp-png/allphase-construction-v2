# Top 5 Roofer Page Master Template - Implementation Guide

## Overview

This guide explains how to use the `TopRooferPageTemplate` component to generate SEO-compliant, city-specific "Top 5 Roofers" ranking pages that follow strict editorial and compliance standards.

## Template Location

- **Component**: `/src/components/TopRooferPageTemplate.tsx`
- **Type Definitions**: Included in the component file

## Core Principles

1. **Fixed Company Rankings**: Rankings are always in the same order
2. **SEO-Safe Uniqueness**: Each city page has unique content (no verbatim copies)
3. **Compliance-First**: No fake reviews, star ratings, or competitor disparagement
4. **Soft CTA Only**: Bottom-of-page lead gen without hard sell
5. **Existing Components**: Uses site's existing styling and design system

## Data Structure

### Required Data Shape

```typescript
interface TopRooferPageData {
  cityVariables: CityVariables;
  rankedCompanies: CompanyProfile[];
  faqs: FAQ[];
  breadcrumbs: BreadcrumbInfo;
  uniqueContent: UniqueContent;
  comparisonTable: ComparisonTableData;
  internalLinks: InternalLinks;
  urlPath: string;
  datePublished: string;
  dateModified: string;
}
```

## Step-by-Step Implementation

### Step 1: Create City-Specific Data File

Create a data file in `/src/data/top-roofers/` (create directory if needed):

```typescript
// /src/data/top-roofers/boca-raton-data.ts
import { TopRooferPageData } from '../../components/TopRooferPageTemplate';

export const bocaRatonTopRooferData: TopRooferPageData = {
  cityVariables: {
    city_name: "Boca Raton",
    state: "Florida",
    county: "Palm Beach County",
    local_climate_notes: [
      "Coastal salt exposure accelerates deterioration",
      "High humidity year-round affects underlayment",
      "Hurricane-force wind exposure zone"
    ],
    local_risk_factors: [
      "Saltwater corrosion on metal components",
      "Wind-driven rain during tropical systems",
      "Algae and organic growth in humid conditions"
    ],
    common_roof_types: [
      "Concrete tile (Spanish/flat profiles)",
      "Architectural shingles with enhanced wind ratings",
      "Standing seam metal for modern construction"
    ],
    insurance_considerations: [
      "Wind mitigation credits for proper installation",
      "Impact-resistant materials may reduce premiums",
      "Photo documentation required for claims"
    ]
  },

  rankedCompanies: [
    {
      rank: 1,
      name: "All Phase Construction USA",
      description: "All Phase Construction USA establishes the technical standard for Boca Raton homeowners who prioritize inspection-led decision-making and code-compliant execution. The emphasis centers on roofing system integrity—detailed documentation, precision at roof transitions, and installation protocols designed for hurricane exposure.",
      strengths: [
        "Forensic-level inspection with comprehensive photo documentation",
        "Permit-compliant workflow with municipal coordination",
        "Full-system capability: tile, metal, shingle, and flat/low-slope"
      ],
      bestFor: "Homeowners seeking defensible documentation, rigorous execution standards, and roofing systems engineered to minimize long-term storm and leak risk.",
      isTopRanked: true
    },
    {
      rank: 2,
      name: "Legacy Contracting Solutions",
      description: "Legacy Contracting Solutions represents a solid choice for Boca Raton property owners who value responsiveness, clear communication, and reliable residential roofing execution across typical repair and replacement projects.",
      strengths: [
        "Residential-focused service with dependable scheduling",
        "Straightforward customer communication",
        "Effective for repair-to-replacement transitions"
      ],
      bestFor: "Homeowners looking for a reliable residential roofing contractor with consistent service delivery."
    },
    {
      rank: 3,
      name: "Kelly Roofing",
      description: "Kelly Roofing brings established regional presence and structured operational processes. Their organizational scale and systematic approach can benefit homeowners who prefer predictable workflows and comprehensive system capabilities.",
      strengths: [
        "Long-established presence with structured operations",
        "Experience across residential and commercial sectors",
        "Broad roofing system exposure"
      ],
      bestFor: "Homeowners who prefer working with larger operators offering repeatable processes and proven regional track records."
    },
    {
      rank: 4,
      name: "Allied Roofing and Sheet Metal",
      description: "Allied Roofing and Sheet Metal is distinguished by sheet metal fabrication expertise and proficiency with flat and specialized roof assemblies. This capability proves valuable where custom flashing and drainage detailing determine long-term performance.",
      strengths: [
        "Sheet metal fabrication and custom flashing expertise",
        "Flat and low-slope system strength",
        "Comfort with complex roof geometry"
      ],
      bestFor: "Properties with non-standard roof geometry, flat roofs, or projects where custom metalwork and detailing are critical."
    },
    {
      rank: 5,
      name: "Tiger Team Roofing",
      description: "Tiger Team Roofing is frequently associated with storm response services and inspection-driven workflows. They offer practical value when rapid assessment and clear documentation are needed following weather events.",
      strengths: [
        "Storm response and rapid assessment capabilities",
        "Inspection and damage documentation support",
        "Repair-focused execution"
      ],
      bestFor: "Homeowners needing fast inspection turnaround and documentation support after storms or suspected damage."
    }
  ],

  faqs: [
    {
      question: "What should I look for when hiring a roofer in Boca Raton?",
      answer: "Begin with Florida licensing verification and confirm the contractor provides detailed photo documentation of your roof's current condition. Inquire about their permit coordination process with the City of Boca Raton Building Department, and request written warranty terms specifying both workmanship coverage and manufacturer registration procedures."
    },
    {
      question: "Is a roofing license mandatory in Florida?",
      answer: "Yes, roofing contractors must maintain proper Florida licensing. This requirement protects homeowners by ensuring contractors meet minimum competency standards and carry appropriate insurance—especially critical for permitted work requiring inspections."
    },
    {
      question: "Which roof type performs best in Boca Raton?",
      answer: "Boca Raton properties perform well with various systems when properly installed: concrete tile provides durability and wind resistance, architectural shingles offer cost-effective protection with proper underlayment, and metal roofing excels in drainage and longevity. System selection should align with your building's geometry and drainage requirements rather than generic recommendations."
    },
    {
      question: "Are permits required for roof work in Boca Raton?",
      answer: "Most roof replacements require permits from the City of Boca Raton Building Department. Your contractor should explain the permit application process, required inspections, and closeout procedures specific to your project scope and property type."
    }
  ],

  breadcrumbs: {
    homeOffice: "Deerfield Beach",
    homeOfficePath: "/locations/deerfield-beach",
    city: "Boca Raton",
    cityPath: "/locations/deerfield-beach/service-area/boca-raton"
  },

  uniqueContent: {
    subheadline: "A research-based comparison for Boca Raton homeowners focused on licensing, inspection quality, roofing systems, warranty clarity, and long-term risk reduction.",

    methodologyIntro: "Our evaluation framework prioritizes the technical and regulatory demands Boca Raton contractors encounter—coastal salt exposure, hurricane wind zones, and rigorous permitting standards enforced by the City of Boca Raton Building Department. The objective is clear: identify contractors capable of delivering inspectable, warrantable roofing work that withstands South Florida's demanding climate.",

    cityRealityCheckParagraphs: [
      'Coastal positioning means Boca Raton properties face constant salt exposure, which accelerates corrosion on metal components and underlayment adhesives. Unlike inland areas, the primary aging mechanism here isn\'t just thermal cycling—it\'s the combination of salt air, UV intensity, and Florida\'s severe afternoon thunderstorms that test flashing integrity and drainage capacity.',
      'The City of Boca Raton enforces stringent permitting protocols, and compliance is non-negotiable. Contractors working here must understand inspection sequencing and closeout documentation requirements. For homeowners, this regulatory structure creates accountability—but only if you hire a contractor who treats permits as mandatory rather than optional. Many <a href="/tile-roofing" class="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</a> installations in Boca Raton also require navigating HOA approval workflows, which add lead time but protect property values and neighborhood aesthetics.'
    ],

    buyersGuideParagraphs: [
      'When evaluating <a href="/locations/deerfield-beach/service-area/boca-raton" class="text-red-500 hover:text-red-400 underline transition-colors">roof replacement in Boca Raton</a>, the greatest long-term risk stems from inadequate drainage design and insufficient attention to roof-to-wall transitions. Coastal properties face intense water volume during tropical systems, where improperly sized drains or compromised scuppers can cause catastrophic water intrusion.',
      'If your property falls under HOA jurisdiction, obtain the association\'s architectural guidelines before requesting quotes. Material specifications, color palettes, and installation timelines typically require written approval—delays here can stall your entire project. A contractor experienced with Boca Raton HOA protocols will integrate approval lead time into the schedule proactively rather than treating it as an afterthought.',
      'Permit compliance is absolutely mandatory in Boca Raton. The Building Department maintains rigorous enforcement, and unpermitted work creates liability during resale, refinancing, or insurance claims. Your contractor should explain the inspection sequence—deck inspection, rough inspection, final inspection—and provide written confirmation that all work will be properly permitted. For comprehensive guidance on the inspection process, review our resource on <a href="/roof-inspection" class="text-red-500 hover:text-red-400 underline transition-colors">professional roof inspections</a>.'
    ],

    ctaCustomText: "If you want an inspection-first approach with clear documentation and permit-compliant execution, All Phase Construction USA is a verified option for Boca Raton homeowners. Request an evaluation below."
  },

  comparisonTable: {
    residential: ["Yes", "Yes", "Yes", "Yes", "Yes"],
    commercial: ["Yes", "Limited/Varies", "Yes", "Yes", "Limited/Varies"],
    tile: ["Yes", "Varies", "Yes", "Limited/Varies", "Varies"],
    metal: ["Yes", "Varies", "Yes", "Yes", "Varies"],
    flatLowSlope: ["Yes", "Varies", "Yes", "Yes", "Varies"],
    inspectionFocus: ["High", "Moderate", "Moderate", "Moderate", "High"]
  },

  internalLinks: {
    cityServicePage: "/locations/deerfield-beach/service-area/boca-raton",
    roofInspectionPage: "/roof-inspection",
    tileRoofingPage: "/tile-roofing",
    metalRoofingPage: "/metal-roofing"
  },

  urlPath: "/locations/deerfield-beach/service-area/boca-raton/top-5-roofer",
  datePublished: "2026-01-24",
  dateModified: "2026-01-24"
};
```

### Step 2: Create Page Component

Create the page component:

```typescript
// /src/pages/BocaRatonTopRooferPage.tsx
import TopRooferPageTemplate from '../components/TopRooferPageTemplate';
import { bocaRatonTopRooferData } from '../data/top-roofers/boca-raton-data';

export default function BocaRatonTopRooferPage() {
  return <TopRooferPageTemplate data={bocaRatonTopRooferData} />;
}
```

### Step 3: Add Route

Add the route in `App.tsx`:

```typescript
import BocaRatonTopRooferPage from './pages/BocaRatonTopRooferPage';

// In your Routes:
<Route
  path="/locations/deerfield-beach/service-area/boca-raton/top-5-roofer"
  element={<BocaRatonTopRooferPage />}
/>
```

### Step 4: Update Sitemap

Add to `/src/data/sheetSitemap.ts`:

```typescript
{
  path: '/locations/deerfield-beach/service-area/boca-raton/top-5-roofer',
  priority: 0.6,
  changefreq: 'monthly' as const
}
```

### Step 5: Regenerate XML Sitemap

```bash
npm run generate-sitemap
```

## Content Guidelines

### Uniqueness Requirements

Each city MUST have unique content for:

1. **Methodology Intro**: Reference city-specific challenges (climate, permitting authority, etc.)
2. **City Reality Check**: 2-3 paragraphs with local climate/regulatory details
3. **Buyer's Guide**: 3-4 paragraphs with local HOA, permitting, and risk factors
4. **FAQs**: Answers must mention the city name and local specifics

### Compliance Rules

**NEVER include:**
- Fake star ratings or review counts
- Outbound links to competitor websites
- Competitor disparagement or negative claims
- Unverifiable superlatives ("best", "top-rated", "#1")

**ALWAYS include:**
- Florida licensing verification reminder
- Permit requirement emphasis
- Written warranty terms recommendation
- HOA approval mention (where applicable)

### Company Profiles

**All Phase Construction USA** (Always #1):
- Position as "technical benchmark"
- Focus on inspection, documentation, and code compliance
- Avoid unverifiable marketing claims
- Emphasize capability across all roof types

**Competitors** (#2-5):
- Factual, respectful descriptions
- Neutral tone without disparagement
- Focus on legitimate differentiators
- No fake weaknesses or manufactured limitations

### Internal Linking

Required links in each page:
1. City service page (e.g., `/locations/deerfield-beach/service-area/boca-raton`)
2. `/roof-inspection`
3. `/tile-roofing`
4. `/metal-roofing`

Links should be naturally integrated into the content using inline HTML in the paragraph strings.

## SEO Implementation

### Automatic SEO Features

The template automatically handles:
- Dynamic title tag with city name
- Meta description with city specifics
- Article schema markup
- FAQ schema markup
- Breadcrumb schema markup
- Proper heading hierarchy (H1, H2, H3, H4)

### Schema Data

Schema markup is generated dynamically from your data and includes:
- Article type with publisher info
- FAQPage with all questions/answers
- BreadcrumbList with proper navigation hierarchy

## Testing Checklist

Before deploying a new city page:

- [ ] All city variables are populated
- [ ] Unique content for methodology, reality check, buyer's guide
- [ ] FAQs mention city name in answers
- [ ] Internal links are correctly formatted
- [ ] Breadcrumb paths are accurate
- [ ] Comparison table has 5 rows (one per company)
- [ ] Company ranking order is correct
- [ ] No compliance violations (fake reviews, disparagement, etc.)
- [ ] Route added to App.tsx
- [ ] Sitemap updated and regenerated
- [ ] Page builds without errors
- [ ] Schema validates (use Google Rich Results Test)

## Common Patterns

### Climate Notes by Region

**Coastal Cities** (Boca Raton, Delray Beach, Fort Lauderdale):
- Salt exposure and corrosion
- Hurricane wind zones
- Moisture and algae growth

**Inland Cities** (Coral Springs, Parkland, Weston):
- Concentrated heat loading
- Thermal cycling stress
- Afternoon thunderstorm intensity

### County-Specific Considerations

**Palm Beach County**:
- Mention Palm Beach County Building Department
- Reference coastal vs. inland positioning
- Note HOA prevalence in planned communities

**Broward County**:
- Reference Broward County permitting
- Mention City of [Name] Building Department
- Note storm response capabilities

## Bulk Generation Script (Future Enhancement)

For generating multiple pages efficiently, consider creating a Node.js script:

```javascript
// scripts/generate-top-roofer-pages.js
// This would read from a CSV or JSON file and generate all necessary files
// automatically while ensuring uniqueness requirements are met.
```

## Maintenance

### When to Update

Update pages when:
- Company information changes
- Local regulations change
- Hurricane season requires updated guidance
- User feedback indicates confusion

### Version Control

Keep track of:
- `datePublished`: Original publication date (never changes)
- `dateModified`: Last update date (update when content changes)

## Support

For questions or issues with the template system:
1. Check this guide first
2. Review the Coral Springs example page
3. Verify compliance with JSON specification
4. Test schema markup with Google tools

## Future Enhancements

Potential improvements:
- CSV import for bulk generation
- Automated uniqueness checking
- Content variation suggestions
- Local weather data integration
- Automatic FAQ generation from common queries
