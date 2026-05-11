const fs = require('fs');
const path = require('path');

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

updateCodeReferences(path.join(__dirname, 'lib'));
