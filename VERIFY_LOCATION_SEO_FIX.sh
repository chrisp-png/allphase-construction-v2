#!/bin/bash

# Verification script for location SEO fix
# Tests that location pages serve correct city-specific metadata

echo "========================================"
echo "Location SEO Fix Verification"
echo "========================================"
echo ""

# Test 1: Check build output
echo "✓ Test 1: Checking dist folder for location pages..."
LOCATION_COUNT=$(find dist/locations -name "index.html" 2>/dev/null | wc -l)
if [ "$LOCATION_COUNT" -eq 49 ]; then
    echo "  ✅ PASS: Found $LOCATION_COUNT location pages in dist/"
else
    echo "  ❌ FAIL: Expected 49 location pages, found $LOCATION_COUNT"
    exit 1
fi
echo ""

# Test 2: Check Deerfield Beach metadata
echo "✓ Test 2: Verifying Deerfield Beach metadata..."
TITLE=$(grep '<title>' dist/locations/deerfield-beach/index.html)
CANONICAL=$(grep 'rel="canonical"' dist/locations/deerfield-beach/index.html)

if [[ "$TITLE" == *"Deerfield Beach Roofing Contractor"* ]]; then
    echo "  ✅ PASS: Correct title"
    echo "    $TITLE"
else
    echo "  ❌ FAIL: Wrong title"
    echo "    Expected: Deerfield Beach Roofing Contractor"
    echo "    Got: $TITLE"
    exit 1
fi

if [[ "$CANONICAL" == *"/locations/deerfield-beach"* ]]; then
    echo "  ✅ PASS: Correct canonical"
    echo "    $CANONICAL"
else
    echo "  ❌ FAIL: Wrong canonical"
    echo "    Expected: /locations/deerfield-beach"
    echo "    Got: $CANONICAL"
    exit 1
fi
echo ""

# Test 3: Check Fort Lauderdale metadata
echo "✓ Test 3: Verifying Fort Lauderdale metadata..."
TITLE=$(grep '<title>' dist/locations/fort-lauderdale/index.html)
if [[ "$TITLE" == *"Fort Lauderdale Roofing Contractor"* ]]; then
    echo "  ✅ PASS: Correct title"
    echo "    $TITLE"
else
    echo "  ❌ FAIL: Wrong title"
    exit 1
fi
echo ""

# Test 4: Verify homepage unchanged
echo "✓ Test 4: Verifying homepage unchanged..."
TITLE=$(grep '<title>' dist/index.html)
CANONICAL=$(grep 'rel="canonical"' dist/index.html)

if [[ "$TITLE" == *"Roofing Contractor — All Phase Construction USA | Broward & Palm Beach"* ]]; then
    echo "  ✅ PASS: Homepage title correct"
else
    echo "  ❌ FAIL: Homepage title changed"
    exit 1
fi

if [[ "$CANONICAL" == *'href="https://allphaseconstructionfl.com/"'* ]]; then
    echo "  ✅ PASS: Homepage canonical correct"
else
    echo "  ❌ FAIL: Homepage canonical changed"
    exit 1
fi
echo ""

# Test 5: Check multiple cities have unique titles
echo "✓ Test 5: Verifying multiple cities have unique metadata..."
CITIES=("boca-raton" "wellington" "coral-springs" "boynton-beach")
for city in "${CITIES[@]}"; do
    TITLE=$(grep '<title>' dist/locations/$city/index.html)
    CANONICAL=$(grep 'rel="canonical"' dist/locations/$city/index.html)

    # Check title contains city name (convert slug to title case)
    CITY_NAME=$(echo $city | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++)sub(/./,toupper(substr($i,1,1)),$i)}1')

    if [[ "$TITLE" == *"$CITY_NAME"* ]] && [[ "$CANONICAL" == *"/locations/$city"* ]]; then
        echo "  ✅ $city: Unique metadata confirmed"
    else
        echo "  ❌ $city: Metadata issue"
        exit 1
    fi
done
echo ""

# Test 6: Verify _redirects is in dist
echo "✓ Test 6: Checking _redirects file..."
if [ -f "dist/_redirects" ]; then
    echo "  ✅ PASS: _redirects file exists in dist/"
    cat dist/_redirects
else
    echo "  ❌ FAIL: _redirects file missing from dist/"
    exit 1
fi
echo ""

echo "========================================"
echo "✅ ALL TESTS PASSED"
echo "========================================"
echo ""
echo "Location pages are ready for deployment!"
echo ""
echo "Post-Deployment Test:"
echo "  curl -s https://allphaseconstructionfl.com/locations/deerfield-beach | grep -E '<title>|canonical'"
echo ""
echo "Expected output:"
echo "  <title>Deerfield Beach Roofing Contractor | All Phase Construction USA</title>"
echo "  <link rel=\"canonical\" href=\"https://allphaseconstructionfl.com/locations/deerfield-beach\">"
