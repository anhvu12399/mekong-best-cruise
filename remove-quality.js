const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We want to remove quality={60}, quality={65}, quality={70}
      const before = content;
      content = content.replace(/quality=\{6[0-9]\}/g, '');
      content = content.replace(/quality=\{70\}/g, '');
      
      if (before !== content) {
        fs.writeFileSync(fullPath, content);
        console.log(`Removed aggressive quality compression in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
