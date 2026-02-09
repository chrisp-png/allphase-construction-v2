#!/bin/bash

echo "🔍 VERIFYING HYBRID PRERENDERED PAGES..."
echo ""

SAMPLE_PAGE="dist/locations/boca-raton/index.html"

if [ ! -f "$SAMPLE_PAGE" ]; then
  echo "❌ Sample page not found: $SAMPLE_PAGE"
  echo "   Run 'npm run build' first."
  exit 1
fi

echo "📄 Checking: $SAMPLE_PAGE"
echo ""

# Check for React script (MUST be present)
echo "1. Checking for React script..."
if grep -q 'script type="module".*assets/index-.*\.js' "$SAMPLE_PAGE"; then
  SCRIPT=$(grep -o 'src="[^"]*assets/index-[^"]*\.js"' "$SAMPLE_PAGE")
  echo "   ✅ PASS: React script found: $SCRIPT"
else
  echo "   ❌ FAIL: React script NOT found"
  exit 1
fi
echo ""

# Check for CSS link (MUST be present)
echo "2. Checking for CSS link..."
if grep -q 'rel="stylesheet".*assets/index-.*\.css' "$SAMPLE_PAGE"; then
  CSS=$(grep -o 'href="[^"]*assets/index-[^"]*\.css"' "$SAMPLE_PAGE")
  echo "   ✅ PASS: CSS link found: $CSS"
else
  echo "   ❌ FAIL: CSS link NOT found"
  exit 1
fi
echo ""

# Check for #seo-static div (MUST be present)
echo "3. Checking for #seo-static div..."
if grep -q '<div id="seo-static"' "$SAMPLE_PAGE"; then
  echo "   ✅ PASS: SEO static container found"
else
  echo "   ❌ FAIL: SEO static container NOT found"
  exit 1
fi
echo ""

# Check for hiding CSS logic (MUST be present)
echo "4. Checking for CSS hiding logic..."
if grep -q 'html.js-ready #seo-static' "$SAMPLE_PAGE"; then
  echo "   ✅ PASS: CSS hiding logic found"
else
  echo "   ❌ FAIL: CSS hiding logic NOT found"
  exit 1
fi
echo ""

# Check for root div (MUST be present)
echo "5. Checking for React mount point..."
if grep -q '<div id="root"></div>' "$SAMPLE_PAGE"; then
  echo "   ✅ PASS: React mount point found"
else
  echo "   ❌ FAIL: React mount point NOT found"
  exit 1
fi
echo ""

# Check for SEO content in #seo-static
echo "6. Checking for SEO content..."
if grep -q '<h1>Boca Raton Roofing Services' "$SAMPLE_PAGE"; then
  echo "   ✅ PASS: H1 content found"
else
  echo "   ❌ FAIL: H1 content NOT found"
  exit 1
fi
echo ""

# Check for license numbers
echo "7. Checking for license numbers..."
CCC_COUNT=$(grep -c "CCC-1331464" "$SAMPLE_PAGE")
CGC_COUNT=$(grep -c "CGC-1526236" "$SAMPLE_PAGE")

if [ $CCC_COUNT -gt 0 ] && [ $CGC_COUNT -gt 0 ]; then
  echo "   ✅ PASS: License numbers found (CCC: $CCC_COUNT, CGC: $CGC_COUNT)"
else
  echo "   ❌ FAIL: License numbers missing"
  exit 1
fi
echo ""

# Count total pages
echo "8. Counting generated pages..."
TOTAL=$(find dist/locations dist/roof-repair dist/roof-inspection -name "index.html" -type f 2>/dev/null | wc -l)
echo "   Total pages: $TOTAL"

if [ $TOTAL -eq 147 ]; then
  echo "   ✅ PASS: All 147 pages generated"
else
  echo "   ⚠️  WARNING: Expected 147 pages, found $TOTAL"
fi
echo ""

echo "═══════════════════════════════════════"
echo "✅ HYBRID PRERENDERING VERIFIED"
echo "═══════════════════════════════════════"
echo ""
echo "What this means:"
echo "  • Crawlers will see full HTML content in #seo-static"
echo "  • Users will see full React app with header/nav/footer"
echo "  • No 'business card' look — full branded experience"
echo "  • SEO content hidden via CSS when React loads"
echo ""
echo "Next steps:"
echo "  1. Deploy to production"
echo "  2. Test in incognito: /locations/boca-raton/"
echo "  3. Verify full site loads (not business card)"
echo "  4. Check View Source shows SEO content"
echo ""
