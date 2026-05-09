const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images', 'raw_upscaled');
const outputDir = path.join(__dirname, 'public', 'images');

// Ensure input directory exists
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir, { recursive: true });
  console.log('Created directory: public/images/raw_upscaled. Please drop your Topaz/Magnific upscaled images here.');
}

async function processBanner(filename) {
  const inputPath = path.join(inputDir, filename);
  const nameWithoutExt = path.parse(filename).name;
  const outputPath = path.join(outputDir, `${nameWithoutExt}_optimized.webp`);

  try {
    // Crop to 16:9 cinematic ratio (e.g., 3840x2160) and convert to WebP
    // Focus on the center (or you can adjust gravity to 'top' / 'bottom')
    await sharp(inputPath)
      .resize({
        width: 3840,
        height: 2160,
        fit: 'cover',
        position: 'attention', // AI focus on the most interesting part of the image
      })
      .webp({ 
        quality: 90, // Keep it high for Macbook Retina
        effort: 6,   // Max CPU effort for best compression vs quality ratio
      })
      .toFile(outputPath);

    console.log(`✅ Processed: ${filename} -> ${nameWithoutExt}_optimized.webp`);
  } catch (err) {
    console.error(`❌ Error processing ${filename}:`, err);
  }
}

async function main() {
  if (!fs.existsSync(inputDir)) return;
  
  const files = fs.readdirSync(inputDir).filter(f => !f.startsWith('.'));
  
  if (files.length === 0) {
    console.log('No images found in public/images/raw_upscaled. Waiting for you to add them!');
    return;
  }

  for (const file of files) {
    await processBanner(file);
  }
}

main();
