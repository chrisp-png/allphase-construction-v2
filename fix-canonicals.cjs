#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with incorrect canonical tags
const files = [
  '/tmp/cc-agent/61908077/project/src/pages/BocaRatonCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/BocaRatonPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/BocaRatonRoofRepairPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/BocaRatonTopRooferPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/BoyntonBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/BoyntonBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/BoyntonBeachRoofRepairPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CoconutCreekCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CoconutCreekPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CooperCityCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CooperCityPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CoralSpringsCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CoralSpringsPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/CoralSpringsRoofRepairPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DaniaBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DaniaBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DavieCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DaviePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DeerfieldBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DeerfieldBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DelrayBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/DelrayBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/FortLauderdaleCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/FortLauderdalePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/GreenacresPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/GulfStreamPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HallandaleBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HallandaleBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HaverillCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HaverillPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HighlandBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HighlandBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HillsboroBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HillsboroBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HollywoodCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HollywoodPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HypoluxoCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/HypoluxoPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/JupiterInletColonyCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/JupiterInletColonyPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/JupiterPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LakeWorthBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LakeWorthBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LantanaCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LantanaPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderdaleByTheSeaCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderdaleByTheSeaPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderdaleLakesCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderdaleLakesPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderdaleRanchesCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderdaleRanchesPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderhillCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LauderhillPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LighthousePointPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LoxahatcheeGrovesCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/LoxahatcheeGrovesPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/MargatePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/MiramarCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/MiramarPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/NorthLauderdaleCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/NorthLauderdalePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/NorthPalmBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/NorthPalmBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/OaklandParkPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/OceanRidgeCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/OceanRidgePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PalmBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PalmBeachGardensCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PalmBeachGardensPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PalmBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PalmBeachShoresCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PalmBeachShoresPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/ParklandCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/ParklandPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PembrokeParkCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PembrokeParkPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PembrokePinesCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PembrokePinesPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PlantationCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PlantationPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PompanoBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/PompanoBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/RoyalPalmBeachCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/RoyalPalmBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SeaRanchLakesCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SeaRanchLakesPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SitemapPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SouthwestRanchesCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SouthwestRanchesPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SunriseCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/SunrisePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/TamaracCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/TamaracPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WellingtonCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WellingtonPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WestPalmBeachPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WestlakeCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WestlakePage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WestonCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WestonPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WiltonManorsCalculatorPage.tsx',
  '/tmp/cc-agent/61908077/project/src/pages/WiltonManorsPage.tsx'
];

let fixed = 0;
let skipped = 0;

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  Skipped (not found): ${path.basename(file)}`);
    skipped++;
    return;
  }

  let content = fs.readFileSync(file, 'utf8');

  // Pattern 1: Remove <Helmet> blocks containing only canonical links
  const helmetCanonicalPattern = /\s*<Helmet>\s*<link rel="canonical"[^>]+\/>\s*<\/Helmet>\s*/g;

  if (content.match(helmetCanonicalPattern)) {
    content = content.replace(helmetCanonicalPattern, '');

    // Remove Helmet import if no longer used
    if (!content.includes('<Helmet>') && !content.includes('Helmet') ||
        (content.match(/<Helmet>/g) || []).length === 0) {
      content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];\s*/g, '');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Fixed: ${path.basename(file)}`);
    fixed++;
  } else {
    console.log(`⚠️  No Helmet canonical found: ${path.basename(file)}`);
    skipped++;
  }
});

console.log(`\n✅ Fixed ${fixed} files`);
console.log(`⚠️  Skipped ${skipped} files`);
