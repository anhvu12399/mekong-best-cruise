const fs = require('fs');
const files = [
  'app/itineraries/vietnam-cambodia/page-client.tsx',
  'app/itineraries/mekong-delta/page-client.tsx',
  'app/itineraries/1-day/page-client.tsx',
  'app/itineraries/2-days/page-client.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace `sticky top-0` with `sticky top-16 lg:top-20`
  content = content.replace(/sticky top-0/g, 'sticky top-16 lg:top-20');

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
