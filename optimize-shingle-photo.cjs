const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public/social-proof');
const sourcePath = path.join(sourceDir, 'new-shingle-install-boca-raton-fl-all-phase-construction-usa.JPG');

async function optimizeImage() {
  console.log('🖼️  Optimizing shingle roofing photo...\n');

  // Check original file size
  const originalStats = fs.statSync(sourcePath);
  const originalSize = (originalStats.size / 1024).toFixed(2);
  console.log(`Original image: ${originalSize} KB`);

  // Generate 1200px wide version (desktop)
  const webp1200Path = path.join(sourceDir, 'new-shingle-install-boca-raton-1200w.webp');
  await sharp(sourcePath)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(webp1200Path);

  const desktop1200Stats = fs.statSync(webp1200Path);
  const desktop1200Size = (desktop1200Stats.size / 1024).toFixed(2);
  console.log(`Desktop WebP (1200w): ${desktop1200Size} KB`);

  // Generate 600px wide version (mobile)
  const webp600Path = path.join(sourceDir, 'new-shingle-install-boca-raton-600w.webp');
  await sharp(sourcePath)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(webp600Path);

  const mobile600Stats = fs.statSync(webp600Path);
  const mobile600Size = (mobile600Stats.size / 1024).toFixed(2);
  console.log(`Mobile WebP (600w): ${mobile600Size} KB`);

  const reduction = ((1 - (desktop1200Stats.size / originalStats.size)) * 100).toFixed(1);
  console.log(`\n✅ Size reduction: ${reduction}%`);
  console.log('✅ Optimization complete!');
}

optimizeImage().catch(console.error);
