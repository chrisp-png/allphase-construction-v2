import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateSEOMetadata } from '../config/seoTitles';

/**
 * NUCLEAR METADATA SYSTEM
 *
 * This component FORCE-INJECTS metadata on every single route change.
 * Uses the centralized SEO titles configuration for consistency with
 * build-time prerendering.
 *
 * This runs BEFORE any other component can interfere with the title.
 */
export default function NuclearMetadata() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // HOMEPAGE IDENTITY LOCK: Skip homepage entirely - preserve hard-coded tags from index.html
    if (path === '/') {
      console.log('[NUCLEAR METADATA] Skipping homepage - preserving identity lock from index.html');
      return;
    }

    // Get SEO metadata from centralized configuration
    const metadata = generateSEOMetadata(path);
    const { title, description, canonical } = metadata;

    // FORCE UPDATE DOCUMENT TITLE - NO DELAYS
    if (title) {
      document.title = title;
    }

    // FORCE UPDATE META DESCRIPTION
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // FORCE UPDATE CANONICAL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // FORCE UPDATE OG TAGS
    updateOrCreateMetaTag('property', 'og:title', title);
    updateOrCreateMetaTag('property', 'og:description', description);
    updateOrCreateMetaTag('property', 'og:url', canonical);
    updateOrCreateMetaTag('property', 'og:type', 'website');

    // FORCE UPDATE TWITTER TAGS
    updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('name', 'twitter:title', title);
    updateOrCreateMetaTag('name', 'twitter:description', description);

    // INJECT GLOBAL LOCALBUSINESS SCHEMA (Authority Layer) - Not needed on homepage
    // Homepage has its own LocalBusiness schema from HomePage component
    let schemaScript = document.querySelector('script[data-schema="global-business"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'global-business');
      document.head.appendChild(schemaScript);
    }

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "@id": "https://allphaseconstructionfl.com/#organization",
      "name": "All Phase Construction USA",
      "alternateName": "All Phase Roofing",
      "url": "https://allphaseconstructionfl.com",
      "telephone": "+17542275605",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "590 Goolsby Blvd",
        "addressLocality": "Deerfield Beach",
        "addressRegion": "FL",
        "postalCode": "33442",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.3184,
        "longitude": -80.0998
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "State License",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Florida Department of Business and Professional Regulation"
          },
          "name": "Florida Certified Roofing Contractor",
          "identifier": "CCC1331464"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "State License",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Florida Department of Business and Professional Regulation"
          },
          "name": "Florida Certified General Contractor",
          "identifier": "CGC1526236"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Boca Raton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Fort Lauderdale", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "West Palm Beach", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Delray Beach", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Boynton Beach", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Lake Worth", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Coconut Creek", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Coral Springs", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Davie", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Lauderhill", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "North Lauderdale", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Margate", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Plantation", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Hollywood", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Pompano Beach", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Deerfield Beach", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } },
        { "@type": "City", "name": "Wellington", "containedInPlace": { "@type": "AdministrativeArea", "name": "Florida", "containedInPlace": { "@type": "Country", "name": "US" } } }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "15:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/allphaseconstructionusa",
        "https://www.google.com/maps/place/All+Phase+Construction+USA"
      ],
      "knowsAbout": [
        "Roof Repair",
        "Roof Replacement",
        "Hurricane-Resistant Roofing",
        "HVHZ Compliance",
        "Shingle Roofing",
        "Tile Roofing",
        "Metal Roofing",
        "Flat Roofing",
        "Commercial Roofing",
        "Residential Roofing"
      ],
      "description": "All Phase Construction USA is a dual-licensed roofing specialist (CCC1331464 & CGC1526236) serving South Florida with HVHZ-compliant roofing solutions. Headquartered in Deerfield Beach at 590 Goolsby Blvd."
    };

    schemaScript.textContent = JSON.stringify(businessSchema);

    console.log('[NUCLEAR METADATA] Applied:', { path, title });
  }, [location.pathname]);

  return null;
}

// Helper function to update or create meta tags
function updateOrCreateMetaTag(attr: string, value: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${value}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
