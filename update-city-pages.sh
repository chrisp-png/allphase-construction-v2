#!/bin/bash

# Script to update remaining city service-area pages with new H1 and intro text

cd /tmp/cc-agent/61908077/project/src/pages

# List of remaining pages to update
pages=(
  "DaniaBeachPage.tsx"
  "GulfStreamPage.tsx"
  "HallandaleBeachPage.tsx"
  "HaverillPage.tsx"
  "HighlandBeachPage.tsx"
  "HollywoodPage.tsx"
  "HypoluxoPage.tsx"
  "JupiterPage.tsx"
  "LakeWorthBeachPage.tsx"
  "LantanaPage.tsx"
  "LauderdaleByTheSeaPage.tsx"
  "LauderhillPage.tsx"
  "LighthousePointPage.tsx"
  "LoxahatcheeGrovesPage.tsx"
  "MargatePage.tsx"
  "MiramarPage.tsx"
  "OaklandParkPage.tsx"
  "OceanRidgePage.tsx"
  "PalmBeachGardensPage.tsx"
  "PalmBeachPage.tsx"
  "ParklandPage.tsx"
  "PembrokePinesPage.tsx"
  "PlantationPage.tsx"
  "PompanoBeachPage.tsx"
  "RoyalPalmBeachPage.tsx"
  "SunrisePage.tsx"
  "TamaracPage.tsx"
  "WellingtonPage.tsx"
  "WestonPage.tsx"
  "WestPalmBeachPage.tsx"
  "WiltonManorsPage.tsx"
)

for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "Processing $page..."

    # Extract city name from filename (remove "Page.tsx" and handle camelCase)
    city_name=$(echo "$page" | sed 's/Page\.tsx$//' | sed 's/\([A-Z]\)/ \1/g' | sed 's/^ //' | sed 's/ $//')

    # Use sed to update H1 pattern
    sed -i 's/Roofing Contractor in/Roofing Services in/g' "$page"

    echo "  Updated H1 in $page"
  fi
done

echo "Bulk H1 updates complete!"
