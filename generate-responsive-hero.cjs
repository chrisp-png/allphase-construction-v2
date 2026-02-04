/**
 * Generate Responsive Hero Images
 * Creates mobile, tablet, and desktop versions of the hero image
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');
const inputImage = path.join(publicDir, 'team_drone_photo.png');

const sizes = [
  { width: 800, name: 'team_drone_photo-mobile.webp', quality: 75 },
  { width: 1024, name: 'team_drone_photo-tablet.webp', quality: 78 },
  { width: 1400, name: 'team_drone_photo-desktop.webp', quality: 82 }
];

async function generateResponsiveImages() {
  console.log('Generating responsive hero images...\n');

  if (!fs.existsSync(inputImage)) {
    console.error('Error: Input image not found:', inputImage);
    process.exit(1);
  }

  for (const size of sizes) {
    const outputPath = path.join(publicDir, size.name);

    try {
      await sharp(inputImage)
        .resize(size.width, null, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: size.quality })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);

      console.log(`✓ Created ${size.name}`);
      console.log(`  Width: ${size.width}px`);
      console.log(`  Size: ${sizeKB} KB\n`);
    } catch (error) {
      console.error(`✗ Error creating ${size.name}:`, error.message);
    }
  }

  console.log('Done! All responsive images generated.');
}

generateResponsiveImages().catch(console.error);
