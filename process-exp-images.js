const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = '/Users/mac/.gemini/antigravity/brain/28491a32-4a45-4374-a716-b99eefb58657';
const outputDir = path.join(__dirname, 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(brainDir);
  
  const categories = ['cambodia', 'laos', 'thailand', 'myanmar', 'china'];
  
  for (const cat of categories) {
    for (let i = 1; i <= 3; i++) {
      const prefix = `${cat}_exp_${i}_`;
      const file = files.find(f => f.startsWith(prefix) && f.endsWith('.png'));
      if (file) {
        const inputPath = path.join(brainDir, file);
        const outputPath = path.join(outputDir, `${cat}_exp_${i}.avif`);
        
        console.log(`Processing ${inputPath} -> ${outputPath}`);
        await sharp(inputPath)
          .resize({ width: 1000, height: 1250, fit: 'cover' }) // aspect-[4/5]
          .avif({ quality: 80, effort: 4 })
          .toFile(outputPath);
          
        // Delete original to save space
        fs.unlinkSync(inputPath);
      } else {
        console.log(`Missing image for ${cat} ${i}`);
      }
    }
  }
}

processImages().catch(console.error);
