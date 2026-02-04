import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * CanonicalManager
 *
 * Manages canonical URLs for all pages, ensuring:
 * - Homepage canonical is always https://allphaseconstructionfl.com/ (clean URL)
 * - All UTM parameters and query strings are stripped from canonical URLs
 * - Consistent self-referencing canonical across all pages
 *
 * This consolidates all URL variants (with UTM params, query strings, etc.)
 * into a single clean canonical URL for SEO purposes.
 */
export default function CanonicalManager() {
  const location = useLocation();

  useEffect(() => {
    const origin = "https://allphaseconstructionfl.com";

    // Use pathname only - this automatically excludes query strings (?utm_*, etc.)
    // location.pathname never includes search params, ensuring clean URLs
    const pathname = location.pathname || "/";

    // Homepage always uses clean root URL: https://allphaseconstructionfl.com/
    // This consolidates all variants including:
    // - ?utm_campaign=gmb&utm_medium=organic&utm_source=gmb
    // - ?utm_source=google&utm_medium=cpc
    // - any other query string combinations
    const canonicalUrl =
      pathname === "/" ? `${origin}/` : `${origin}${pathname}`;

    // Set canonical link tag
    let canonicalLink = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Keep OG URL aligned with canonical (also without query strings)
    let ogUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]'
    );
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonicalUrl);
  }, [location.pathname]); // Only depends on pathname, not search params

  return null;
}
