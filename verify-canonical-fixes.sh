#!/bin/bash

# Verification script for the 15 canonical fixes
# Run this after deployment to verify all pages work correctly

echo "=================================================="
echo "Canonical Fix Verification Script"
echo "=================================================="
echo ""

BASE_URL="https://allphaseconstructionfl.com"

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

check_canonical() {
    local url=$1
    local expected=$2
    
    canonical=$(curl -s "$url" | grep -o '<link rel="canonical" href="[^"]*"' | sed 's/<link rel="canonical" href="//;s/"//')
    
    if [ "$canonical" == "$expected" ]; then
        echo -e "${GREEN}✅ $url${NC}"
        echo "   → $canonical"
    else
        echo -e "${RED}❌ $url${NC}"
        echo "   Expected: $expected"
        echo "   Got: $canonical"
    fi
    echo ""
}

check_redirect() {
    local from=$1
    local to=$2
    
    location=$(curl -sI "$BASE_URL$from" | grep -i "^location:" | tr -d '\r' | awk '{print $2}')
    
    if [ "$location" == "$to" ]; then
        echo -e "${GREEN}✅ $from → $to${NC}"
    else
        echo -e "${RED}❌ $from${NC}"
        echo "   Expected: $to"
        echo "   Got: $location"
    fi
    echo ""
}

echo "=================================================="
echo "Part 1: Additional Location Pages (5 pages)"
echo "=================================================="
echo ""

check_canonical "$BASE_URL/locations/gulf-stream" "$BASE_URL/locations/gulf-stream"
check_canonical "$BASE_URL/locations/jupiter" "$BASE_URL/locations/jupiter"
check_canonical "$BASE_URL/locations/lake-worth-beach" "$BASE_URL/locations/lake-worth-beach"
check_canonical "$BASE_URL/locations/loxahatchee-groves" "$BASE_URL/locations/loxahatchee-groves"
check_canonical "$BASE_URL/locations/pembroke-park" "$BASE_URL/locations/pembroke-park"

echo "=================================================="
echo "Part 2: Top-5-Roofer Service Area Pages (7 pages)"
echo "=================================================="
echo ""

check_canonical "$BASE_URL/locations/deerfield-beach/service-area/boca-raton/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/boca-raton/top-5-roofer"
check_canonical "$BASE_URL/locations/deerfield-beach/service-area/boynton-beach/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/boynton-beach/top-5-roofer"
check_canonical "$BASE_URL/locations/deerfield-beach/service-area/broward-county/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/broward-county/top-5-roofer"
check_canonical "$BASE_URL/locations/deerfield-beach/service-area/coconut-creek/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/coconut-creek/top-5-roofer"
check_canonical "$BASE_URL/locations/deerfield-beach/service-area/fort-lauderdale/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/fort-lauderdale/top-5-roofer"
check_canonical "$BASE_URL/locations/deerfield-beach/service-area/palm-beach-county/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/palm-beach-county/top-5-roofer"
check_canonical "$BASE_URL/locations/deerfield-beach/service-area/west-palm-beach/top-5-roofer" "$BASE_URL/locations/deerfield-beach/service-area/west-palm-beach/top-5-roofer"

echo "=================================================="
echo "Part 3: URL Redirects (3 redirects)"
echo "=================================================="
echo ""

check_redirect "/calculator" "$BASE_URL/roof-cost-calculator"
check_redirect "/locations/deerfield-beach/service-area" "$BASE_URL/locations/deerfield-beach"
check_redirect "/locations/deerfield-beach/how-to-hire-a-roofing-contractor" "$BASE_URL/how-to-hire-roofing-contractor"

echo "=================================================="
echo "Verification Complete!"
echo "=================================================="
