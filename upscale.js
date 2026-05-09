const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetWidth = 3840; // 4K width

async function upscaleImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original: ${inputPath} -> ${metadata.width}x${metadata.height}`);

    // We want to scale width to 3840, and maintain aspect ratio or crop
    await sharp(inputPath)
      .resize({
        width: targetWidth,
        withoutEnlargement: false,
        kernel: sharp.kernel.lanczos3, // High quality upscaling algorithm
        fit: 'cover',
      })
      .withMetadata({ density: 300 }) // Set DPI to 300
      .png({ quality: 100 })
      .toFile(outputPath);

    const newMetadata = await sharp(outputPath).metadata();
    console.log(`Upscaled: ${outputPath} -> ${newMetadata.width}x${newMetadata.height} at 300 DPI`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err);
  }
}

async function main() {
  const publicDir = path.join(__dirname, 'public', 'images');
  const files = ['hero_1_sharp.png', 'hero_2_sharp.png', 'hero_3_sharp.png'];

  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, `upscaled_${file}`);
    
    if (fs.existsSync(inputPath)) {
      await upscaleImage(inputPath, outputPath);
      // Replace original with upscaled
      fs.renameSync(outputPath, inputPath);
    }
  }
}

main();
