#!/bin/bash

# Script to update SEO for all roof repair city pages
# This updates title tags, meta descriptions, and H1 tags for consistent SEO

declare -A cities
cities=(
  ["BoyntonBeach"]="Boynton Beach"
  ["CoconutCreek"]="Coconut Creek"
  ["CooperCity"]="Cooper City"
  ["CoralSprings"]="Coral Springs"
  ["DaniaBeach"]="Dania Beach"
  ["Davie"]="Davie"
  ["DeerfieldBeach"]="Deerfield Beach"
  ["DelrayBeach"]="Delray Beach"
  ["Greenacres"]="Greenacres"
  ["HallandaleBeach"]="Hallandale Beach"
  ["Haverhill"]="Haverhill"
  ["HighlandBeach"]="Highland Beach"
  ["Hollywood"]="Hollywood"
  ["Hypoluxo"]="Hypoluxo"
  ["LakePark"]="Lake Park"
  ["LakeWorthBeach"]="Lake Worth Beach"
  ["Lantana"]="Lantana"
  ["LighthousePoint"]="Lighthouse Point"
  ["PalmBeach"]="Palm Beach"
  ["Parkland"]="Parkland"
  ["PompanoBeach"]="Pompano Beach"
  ["Sunrise"]="Sunrise"
  ["Wellington"]="Wellington"
  ["WestPalmBeach"]="West Palm Beach"
  ["WiltonManors"]="Wilton Manors"
)

# County pages
declare -A counties
counties=(
  ["BrowardCounty"]="Broward County"
  ["PalmBeachCounty"]="Palm Beach County"
  ["PalmBeachCountyUnincorporated"]="Palm Beach County Unincorporated"
)

cd "$(dirname "$0")/src/pages"

# Update city pages
for key in "${!cities[@]}"; do
  city="${cities[$key]}"
  file="${key}RoofRepairPage.tsx"

  if [ -f "$file" ]; then
    echo "Updating $file..."

    # Update title
    sed -i.bak "s/document.title = '[^']*';/document.title = '${city} Roof Repair | Licensed Roofer in ${city} FL';/" "$file"

    # Update meta description content (both setAttribute and direct assignment)
    sed -i.bak "s/metaDescription.setAttribute('content', '[^']*');/metaDescription.setAttribute('content', 'Expert roof repair in ${city}, Florida. Tile, shingle, metal \& flat roof repairs. Licensed Broward\/Palm Beach contractor. Free inspection: (754) 227-5605.');/" "$file"

    sed -i.bak "s/meta.content = '[^']*roof repair[^']*';/meta.content = 'Expert roof repair in ${city}, Florida. Tile, shingle, metal \& flat roof repairs. Licensed Broward\/Palm Beach contractor. Free inspection: (754) 227-5605.';/" "$file"

    # Update H1 (remove gradient styling, keep it simple)
    sed -i.bak "s/<span className=\"bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent\">${city}, FL<\/span>/${city}, Florida/" "$file"
    sed -i.bak "s/<span className=\"bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent\">${city}<\/span>/${city}, Florida/" "$file"

    # Clean up backup files
    rm -f "${file}.bak"

    echo "✓ Updated $file"
  fi
done

# Update county pages
for key in "${!counties[@]}"; do
  county="${counties[$key]}"
  file="${key}RoofRepairPage.tsx"

  if [ -f "$file" ]; then
    echo "Updating $file..."

    # Update title
    sed -i.bak "s/document.title = '[^']*';/document.title = '${county} Roof Repair | All Phase Construction';/" "$file"

    # Update meta description
    sed -i.bak "s/metaDescription.setAttribute('content', '[^']*');/metaDescription.setAttribute('content', 'Professional roof repair throughout ${county}, FL. Licensed contractor serving 30+ cities. Free estimates: (754) 227-5605.');/" "$file"

    sed -i.bak "s/meta.content = '[^']*roof repair[^']*';/meta.content = 'Professional roof repair throughout ${county}, FL. Licensed contractor serving 30+ cities. Free estimates: (754) 227-5605.';/" "$file"

    # Update H1
    sed -i.bak "s/<span className=\"bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent\">${county}<\/span>/${county}, Florida/" "$file"

    # Clean up backup files
    rm -f "${file}.bak"

    echo "✓ Updated $file"
  fi
done

echo ""
echo "✅ All roof repair pages updated!"
echo "Run 'npm run build' to verify changes"
