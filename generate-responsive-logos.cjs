const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateResponsiveLogos() {
  const inputPath = path.join(__dirname, 'public', 'logo-optimized.webp');
  const publicDir = path.join(__dirname, 'public');

  // Check if input exists
  if (!fs.existsSync(inputPath)) {
    console.error('❌ Error: logo-optimized.webp not found');
    process.exit(1);
  }

  console.log('🎨 Generating responsive logo variants...\n');

  // Define sizes (width in pixels)
  const sizes = [
    { width: 240, name: 'ui-logo-240.webp' },
    { width: 320, name: 'ui-logo-320.webp' },
    { width: 480, name: 'ui-logo-480.webp' }
  ];

  // Generate each size
  for (const size of sizes) {
    const outputPath = path.join(publicDir, size.name);

    try {
      await sharp(inputPath)
        .resize(size.width, null, {
          fit: 'inside',
          withoutEnlargement: false
        })
        .webp({
          quality: 92,
          effort: 6
        })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);

      console.log(`✅ Created ${size.name} (${sizeKB} KB)`);
    } catch (error) {
      console.error(`❌ Error creating ${size.name}:`, error.message);
    }
  }

  console.log('\n✨ All responsive logo variants generated successfully!');
}

generateResponsiveLogos().catch(console.error);
