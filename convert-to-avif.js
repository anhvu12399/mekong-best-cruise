const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicImagesDir = path.join(__dirname, 'public', 'images');
const appDir = path.join(__dirname, 'app');
const componentsDir = path.join(__dirname, 'components');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const avifPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.avif';
        try {
          console.log(`Converting: ${fullPath} -> ${avifPath}`);
          await sharp(fullPath).avif({ quality: 80, effort: 4 }).toFile(avifPath);
          fs.unlinkSync(fullPath); // delete old file
        } catch (err) {
          console.error(`Failed to convert ${fullPath}:`, err);
        }
      }
    }
  }
}

function updateCodeReferences(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateCodeReferences(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Replace all image references from /images/something.png|jpg|webp to .avif
      content = content.replace(/(\/images\/[a-zA-Z0-9_/-]+)\.(png|jpg|jpeg|webp)/g, '$1.avif');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated references in: ${fullPath}`);
      }
    }
  }
}

async function main() {
  console.log('--- Converting images to AVIF ---');
  await processDirectory(publicImagesDir);
  
  console.log('--- Updating code references ---');
  updateCodeReferences(appDir);
  updateCodeReferences(componentsDir);
  
  console.log('Done!');
}

main();
