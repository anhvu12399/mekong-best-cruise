const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(imagesDir, file);
      const outputName = path.basename(file, ext) + '.avif';
      const outputPath = path.join(imagesDir, outputName);
      
      // Skip if AVIF already exists and is newer than source
      if (fs.existsSync(outputPath)) {
        const inputStat = fs.statSync(inputPath);
        const outputStat = fs.statSync(outputPath);
        if (outputStat.mtime > inputStat.mtime) {
          console.log(`Skipping ${file}, AVIF already up to date.`);
          continue;
        }
      }
      
      try {
        console.log(`Converting ${file} to AVIF...`);
        await sharp(inputPath)
          .avif({ quality: 80, effort: 4 })
          .toFile(outputPath);
        console.log(`Successfully converted ${file} to ${outputName}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

optimizeImages().then(() => console.log('Image optimization complete.'));
