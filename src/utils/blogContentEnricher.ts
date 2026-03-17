/**
 * Blog Content Enricher
 *
 * Automatically injects contextual internal links into blog post HTML content.
 * Scans for keyword phrases and wraps the FIRST occurrence of each in a link
 * to the corresponding service or location page.
 *
 * Rules:
 * - Only links the first occurrence of each keyword phrase per post
 * - Never injects links inside existing <a> tags, headings, or other links
 * - Maximum of 8 injected links per post to avoid over-optimization
 * - Case-insensitive matching, preserves original case in display
 * - Skips phrases that are already linked (checks for existing href)
 */

interface LinkRule {
  /** Keyword phrases to match (case-insensitive). First match wins. */
  patterns: string[];
  /** Target URL path */
  href: string;
  /** Maximum times this rule can match per post (default: 1) */
  maxMatches?: number;
}

/**
 * Internal linking rules ordered by priority.
 * Higher-priority (earlier) rules get linked first.
 * Service pages first, then location pages.
 */
const LINK_RULES: LinkRule[] = [
  // ── Service Pages (highest priority) ──
  {
    patterns: ['roof cost calculator', 'roofing cost calculator', 'roof replacement cost calculator', 'calculate your roof cost', 'estimate your roof cost'],
    href: '/roof-cost-calculator',
  },
  {
    patterns: ['roof inspection', 'roof inspections', 'professional roof inspection', 'free roof inspection'],
    href: '/roof-inspection',
  },
  {
    patterns: ['roof repair', 'roof repairs', 'emergency roof repair', 'storm damage repair', 'hurricane roof damage repair'],
    href: '/roof-repair',
  },
  {
    patterns: ['roof replacement', 'roof replacements', 'full roof replacement', 'complete roof replacement', 're-roof'],
    href: '/roof-replacement',
  },
  {
    patterns: ['tile roofing', 'tile roof', 'tile roofs', 'concrete tile roof', 'clay tile roof', 'barrel tile'],
    href: '/tile-roofing',
  },
  {
    patterns: ['metal roofing', 'metal roof', 'metal roofs', 'standing seam metal', 'standing seam roof'],
    href: '/metal-roofing',
  },
  {
    patterns: ['shingle roofing', 'shingle roof', 'asphalt shingles', 'architectural shingles', '3-tab shingles', 'three-tab shingles'],
    href: '/shingle-roofing',
  },
  {
    patterns: ['flat roofing', 'flat roof', 'flat roofs', 'low-slope roof'],
    href: '/flat-roofing',
  },
  {
    patterns: ['commercial roofing', 'commercial roof', 'commercial roofs'],
    href: '/commercial-roofing',
  },
  {
    patterns: ['single-ply roofing', 'single ply roofing', 'tpo roofing', 'pvc roofing', 'tpo membrane'],
    href: '/single-ply-roofing',
  },
  {
    patterns: ['wind mitigation', 'wind mitigation inspection'],
    href: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home',
  },
  {
    patterns: ['roof maintenance program', 'roof maintenance plan', 'preventive maintenance', 'preventative maintenance'],
    href: '/roof-maintenance-programs',
  },
  {
    patterns: ['roofing projects', 'project portfolio', 'our projects', 'completed projects', 'case studies'],
    href: '/projects',
  },

  // ── Location Pages (lower priority, city-specific) ──
  {
    patterns: ['fort lauderdale'],
    href: '/locations/fort-lauderdale',
  },
  {
    patterns: ['boca raton'],
    href: '/locations/boca-raton',
  },
  {
    patterns: ['coral springs'],
    href: '/locations/coral-springs',
  },
  {
    patterns: ['pompano beach'],
    href: '/locations/pompano-beach',
  },
  {
    patterns: ['west palm beach'],
    href: '/locations/west-palm-beach',
  },
  {
    patterns: ['deerfield beach'],
    href: '/locations/deerfield-beach',
  },
  {
    patterns: ['hollywood, fl', 'hollywood fl'],
    href: '/locations/hollywood',
  },
  {
    patterns: ['delray beach'],
    href: '/locations/delray-beach',
  },
  {
    patterns: ['boynton beach'],
    href: '/locations/boynton-beach',
  },
  {
    patterns: ['wellington, fl', 'wellington fl'],
    href: '/locations/wellington',
  },
  {
    patterns: ['jupiter, fl', 'jupiter fl'],
    href: '/locations/jupiter',
  },
  {
    patterns: ['palm beach gardens'],
    href: '/locations/palm-beach-gardens',
  },
];

/** Maximum total links to inject per blog post */
const MAX_LINKS_PER_POST = 8;

/**
 * Check if a match position is inside an existing HTML tag or anchor.
 * We don't want to inject links inside <a>, <h1>-<h6>, <button>, etc.
 */
function isInsideProtectedTag(html: string, matchIndex: number): boolean {
  // Find the last opening tag before the match position
  const beforeMatch = html.substring(0, matchIndex);

  // Check if we're inside an <a> tag
  const lastAnchorOpen = beforeMatch.lastIndexOf('<a ');
  const lastAnchorOpenSimple = beforeMatch.lastIndexOf('<a>');
  const lastAnchorClose = beforeMatch.lastIndexOf('</a>');
  const lastAnchorStart = Math.max(lastAnchorOpen, lastAnchorOpenSimple);
  if (lastAnchorStart > lastAnchorClose) return true;

  // Check if we're inside heading tags
  for (let level = 1; level <= 6; level++) {
    const lastHeadingOpen = beforeMatch.lastIndexOf(`<h${level}`);
    const lastHeadingClose = beforeMatch.lastIndexOf(`</h${level}>`);
    if (lastHeadingOpen > lastHeadingClose) return true;
  }

  // Check if we're inside an HTML tag attribute (between < and >)
  const lastOpenBracket = beforeMatch.lastIndexOf('<');
  const lastCloseBracket = beforeMatch.lastIndexOf('>');
  if (lastOpenBracket > lastCloseBracket) return true;

  // Check if we're inside <strong>, <em>, <b>, <i> that's inside an <a>
  // This handles: <a href="..."><strong>roof repair</strong></a>
  // Look for the pattern more broadly
  const lastHrefOpen = beforeMatch.lastIndexOf('href=');
  if (lastHrefOpen > -1) {
    const closingTagAfterHref = beforeMatch.indexOf('</a>', lastHrefOpen);
    if (closingTagAfterHref === -1) return true; // Still inside the anchor
  }

  return false;
}

/**
 * Check if the target URL is already linked somewhere in the content.
 * Prevents duplicate links to the same page.
 */
function isAlreadyLinked(html: string, href: string): boolean {
  // Check for both <a href="/path"> and <a href="https://allphaseconstructionfl.com/path">
  const patterns = [
    `href="${href}"`,
    `href="${href}/"`,
    `href="https://allphaseconstructionfl.com${href}"`,
    `href="https://allphaseconstructionfl.com${href}/"`,
  ];
  return patterns.some(pattern => html.includes(pattern));
}

/**
 * Enriches blog post HTML content with contextual internal links.
 *
 * @param htmlContent - The raw HTML content of the blog post
 * @param currentSlug - The current blog post's slug (to avoid self-linking)
 * @returns Enriched HTML with internal links injected
 */
export function enrichBlogContent(htmlContent: string, currentSlug?: string): string {
  if (!htmlContent) return htmlContent;

  let enriched = htmlContent;
  let totalLinksInjected = 0;

  for (const rule of LINK_RULES) {
    if (totalLinksInjected >= MAX_LINKS_PER_POST) break;

    // Skip if this rule's target is already linked in the content
    if (isAlreadyLinked(enriched, rule.href)) continue;

    // Skip if the target URL contains the current blog post's slug (self-link)
    if (currentSlug && rule.href.includes(currentSlug)) continue;

    const maxMatches = rule.maxMatches || 1;
    let matchesForRule = 0;

    for (const pattern of rule.patterns) {
      if (matchesForRule >= maxMatches) break;
      if (totalLinksInjected >= MAX_LINKS_PER_POST) break;

      // Create a case-insensitive regex that matches whole words
      // Use word boundary but be flexible for hyphens
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b(${escapedPattern})\\b`, 'gi');

      let match: RegExpExecArray | null;
      while ((match = regex.exec(enriched)) !== null) {
        if (matchesForRule >= maxMatches) break;
        if (totalLinksInjected >= MAX_LINKS_PER_POST) break;

        const matchIndex = match.index;
        const matchedText = match[1];

        // Skip if inside a protected tag
        if (isInsideProtectedTag(enriched, matchIndex)) continue;

        // Build the replacement link
        const link = `<a href="${rule.href}" class="text-red-600 hover:text-red-500 underline transition-colors">${matchedText}</a>`;

        // Replace this specific occurrence
        enriched = enriched.substring(0, matchIndex) + link + enriched.substring(matchIndex + matchedText.length);

        totalLinksInjected++;
        matchesForRule++;

        // Break after first match for this pattern (we only want the first occurrence)
        break;
      }

      // If we matched this pattern, don't try other patterns for this rule
      if (matchesForRule > 0) break;
    }
  }

  return enriched;
}
