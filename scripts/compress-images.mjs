/**
 * Batch image recompression script using sharp.
 * Targets the heaviest AVIF files to reduce them below 200KB.
 * Run: node scripts/compress-images.mjs
 */
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const IMAGES_DIR = 'public/images';
const AVIF_QUALITY = 55; // Lower = smaller file, 55 is visually near-lossless
const PNG_QUALITY = 50;

const files = readdirSync(IMAGES_DIR);

const TARGET_AVIFS = [
  'hero_1.avif', 'hero_2.avif', 'hero_3.avif',
  'aqua_mekong.avif', 'dest_china.avif', 'dest_vietnam.avif',
  'dest_laos.avif', 'heritage_start.avif', 'heritage_longway.avif',
  'heritage_epic.avif', 'heritage_philanthropy.avif',
  'coconut-forest-boat.avif', 'victoria_mekong.avif',
  'mekong_navigator.avif', 'mekong_jewel.avif', 'jayavarman.avif',
  'highlights_journey.avif', 'dest_cambodia.avif', 'dest_myanmar.avif',
  'dest_thailand.avif', 'banner_1.avif', 'banner_2.avif', 'banner_3.avif',
  'banner_4.avif', 'exp_astrology.avif', 'pulse_delta.avif',
  'floating-markets-new.avif',
];

console.log('🖼️  Starting image compression...\n');

let totalSaved = 0;

for (const filename of TARGET_AVIFS) {
  const inputPath = join(IMAGES_DIR, filename);
  try {
    const beforeSize = statSync(inputPath).size;
    const buffer = await sharp(inputPath)
      .avif({ quality: AVIF_QUALITY, effort: 6 })
      .toBuffer();
    
    const afterSize = buffer.length;
    const saved = beforeSize - afterSize;
    totalSaved += saved;
    
    // Write back only if it actually made the file smaller
    if (afterSize < beforeSize) {
      const { writeFileSync } = await import('fs');
      writeFileSync(inputPath, buffer);
      console.log(`✅ ${filename}: ${(beforeSize/1024).toFixed(0)}KB → ${(afterSize/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
    } else {
      console.log(`⏭️  ${filename}: already optimized (${(beforeSize/1024).toFixed(0)}KB)`);
    }
  } catch (e) {
    console.log(`⚠️  Skipped ${filename}: ${e.message}`);
  }
}

// Compress logo.png → logo.avif
try {
  const logoBefore = statSync('public/logo.png').size;
  const logoBuffer = await sharp('public/logo.png')
    .avif({ quality: 65, effort: 6 })
    .toBuffer();
  const { writeFileSync } = await import('fs');
  writeFileSync('public/logo.avif', logoBuffer);
  console.log(`\n✅ logo.png → logo.avif: ${(logoBefore/1024).toFixed(0)}KB → ${(logoBuffer.length/1024).toFixed(0)}KB`);
} catch(e) {
  console.log('⚠️  Skipped logo conversion:', e.message);
}

console.log(`\n🎉 Total saved: ${(totalSaved/1024).toFixed(0)}KB`);
