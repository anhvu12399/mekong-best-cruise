const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          if (file.includes('node_modules') || file.includes('.next') || file.includes('.git')) {
            next();
          } else {
            walk(file, (err, res) => {
              results = results.concat(res);
              next();
            });
          }
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};

walk(__dirname, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Replace image extensions inside /images/ path
      content = content.replace(/\/images\/([^"']+)\.(png|jpg|jpeg)/g, '/images/$1.avif');
      
      if (content !== originalContent) {
        console.log(`Updating ${file}`);
        fs.writeFileSync(file, content, 'utf8');
      }
    }
  });
});
