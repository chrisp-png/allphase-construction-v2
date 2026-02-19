const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public/social-proof');
const images = [
  'adding-enhanced-fastening-for-maximum-uplift-resistance.jpg',
  'enhanced-fastening-in-perimeter-of-roof-all-phase-construction-usa.jpg',
  'pvc-roof-boca-raton-all-phase-construction-usa.jpg',
  'tpatch-weld-membrane-commercial-roof-boca-raton-all-phase-usa.jpg',
  'PVC-membrane-boca-raton-all-phase-construction-usa.jpg'
];

async function optimizeImages() {
  console.log('🖼️  Optimizing commercial roofing photos...\n');

  for (const imageName of images) {
    const sourcePath = path.join(sourceDir, imageName);
    const baseName = imageName.replace(/\.(jpg|jpeg)$/i, '');

    console.log(`Processing: ${imageName}`);

    try {
      // Generate 1200px wide version (desktop)
      const webp1200Path = path.join(sourceDir, `${baseName}-1200w.webp`);
      await sharp(sourcePath)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webp1200Path);

      const stats1200 = fs.statSync(webp1200Path);
      console.log(`  ✅ Created 1200w WebP: ${Math.round(stats1200.size / 1024)}KB`);

      // Generate 600px wide version (mobile)
      const webp600Path = path.join(sourceDir, `${baseName}-600w.webp`);
      await sharp(sourcePath)
        .resize(600, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webp600Path);

      const stats600 = fs.statSync(webp600Path);
      console.log(`  ✅ Created 600w WebP: ${Math.round(stats600.size / 1024)}KB`);

      // Get original size for comparison
      const statsOriginal = fs.statSync(sourcePath);
      const savings = Math.round((1 - stats1200.size / statsOriginal.size) * 100);
      console.log(`  💾 Size reduction: ${savings}% (${Math.round(statsOriginal.size / 1024)}KB → ${Math.round(stats1200.size / 1024)}KB)`);
      console.log('');

    } catch (error) {
      console.error(`  ❌ Error processing ${imageName}:`, error.message);
    }
  }

  console.log('✅ Image optimization complete!\n');

  // Summary
  const webpFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.webp'));
  console.log(`📊 Generated ${webpFiles.length} WebP images`);

  const totalWebpSize = webpFiles.reduce((sum, file) => {
    return sum + fs.statSync(path.join(sourceDir, file)).size;
  }, 0);

  console.log(`📦 Total WebP size: ${Math.round(totalWebpSize / 1024)}KB`);
}

optimizeImages().catch(console.error);
