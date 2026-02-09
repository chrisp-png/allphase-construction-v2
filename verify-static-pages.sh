#!/bin/bash

echo "🔍 VERIFYING STATIC CITY PAGES..."
echo ""

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "❌ dist/ directory not found. Run 'npm run build' first."
  exit 1
fi

# Count static pages
echo "📊 COUNTING STATIC PAGES..."
LOCATIONS_COUNT=$(find dist/locations -name "index.html" -type f | wc -l)
REPAIR_COUNT=$(find dist/roof-repair -name "index.html" -type f | wc -l)
INSPECTION_COUNT=$(find dist/roof-inspection -name "index.html" -type f | wc -l)
TOTAL=$((LOCATIONS_COUNT + REPAIR_COUNT + INSPECTION_COUNT))

echo "   Locations: $LOCATIONS_COUNT pages"
echo "   Roof Repair: $REPAIR_COUNT pages"
echo "   Roof Inspection: $INSPECTION_COUNT pages"
echo "   ─────────────────────"
echo "   Total: $TOTAL pages"
echo ""

if [ $TOTAL -eq 147 ]; then
  echo "✅ PASS: All 147 static pages generated"
else
  echo "❌ FAIL: Expected 147 pages, found $TOTAL"
fi
echo ""

# Check a sample page for React dependencies
echo "🔎 CHECKING FOR REACT DEPENDENCIES..."
SAMPLE_PAGE="dist/locations/boca-raton/index.html"

if [ ! -f "$SAMPLE_PAGE" ]; then
  echo "❌ Sample page not found: $SAMPLE_PAGE"
  exit 1
fi

# Check for React scripts (should NOT be present)
if grep -q "script.*react\|script.*main\.tsx\|div id=\"root\"" "$SAMPLE_PAGE"; then
  echo "❌ FAIL: Found React dependencies in $SAMPLE_PAGE"
  grep -n "script.*react\|script.*main\.tsx\|div id=\"root\"" "$SAMPLE_PAGE"
else
  echo "✅ PASS: No React dependencies found"
fi
echo ""

# Check for content
echo "📝 CHECKING PAGE CONTENT..."
if grep -q "<h1.*>Boca Raton Roofing Services" "$SAMPLE_PAGE"; then
  echo "✅ PASS: H1 content present"
else
  echo "❌ FAIL: H1 content missing"
fi
echo ""

# Check for license numbers
echo "🔖 CHECKING LICENSE NUMBERS..."
CCC_COUNT=$(grep -c "CCC-1331464" "$SAMPLE_PAGE")
CGC_COUNT=$(grep -c "CGC-1526236" "$SAMPLE_PAGE")

echo "   CCC-1331464: $CCC_COUNT occurrences"
echo "   CGC-1526236: $CGC_COUNT occurrences"

if [ $CCC_COUNT -gt 0 ] && [ $CGC_COUNT -gt 0 ]; then
  echo "✅ PASS: License numbers present"
else
  echo "❌ FAIL: License numbers missing"
fi
echo ""

# Check for canonical URL
echo "🔗 CHECKING CANONICAL URL..."
if grep -q 'rel="canonical" href="https://allphaseconstructionfl.com/locations/boca-raton/"' "$SAMPLE_PAGE"; then
  echo "✅ PASS: Canonical URL correct (with trailing slash)"
else
  echo "❌ FAIL: Canonical URL incorrect or missing trailing slash"
  grep "rel=\"canonical\"" "$SAMPLE_PAGE"
fi
echo ""

# Check for CSS
echo "🎨 CHECKING CSS LINK..."
if grep -q 'rel="stylesheet" href="/assets/index-.*\.css"' "$SAMPLE_PAGE"; then
  echo "✅ PASS: CSS link present"
else
  echo "❌ FAIL: CSS link missing or incorrect"
fi
echo ""

# Check for structured data
echo "📊 CHECKING STRUCTURED DATA..."
if grep -q '"@type": "LocalBusiness"' "$SAMPLE_PAGE"; then
  echo "✅ PASS: LocalBusiness structured data present"
else
  echo "❌ FAIL: Structured data missing"
fi
echo ""

echo "═══════════════════════════════════════"
echo "✅ VERIFICATION COMPLETE"
echo "═══════════════════════════════════════"
echo ""
echo "Next steps:"
echo "1. Test in browser: open dist/locations/boca-raton/index.html"
echo "2. Run Lighthouse audit on deployed site"
echo "3. Verify navigation between pages works"
echo "4. Check mobile responsiveness"
echo ""
