const fs = require('fs');
const path = require('path');

const dirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components'), path.join(__dirname, 'lib')];

function updateReferences(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateReferences(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      content = content.replace(/hero_1\.avif/g, 'enhanced_hero_1_sharp_optimized.avif');
      content = content.replace(/hero_2\.avif/g, 'enhanced_hero_2_sharp_optimized.avif');
      content = content.replace(/hero_3\.avif/g, 'enhanced_hero_3_sharp_optimized.avif');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed references in: ${fullPath}`);
      }
    }
  }
}

for (const dir of dirs) {
  if (fs.existsSync(dir)) {
    updateReferences(dir);
  }
}
