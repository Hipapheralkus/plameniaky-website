// One-shot: walk public/images/ and re-encode any .webp whose longer side
// exceeds 2048 px down to a 2048-cap. Skips anything in a thumbs/ folder.
//
// Run from the repo root:
//     node tools/cap-webp-size.cjs
//
// In-place safe: reads the whole source file into memory before writing the
// resized output back to the same path, so there's no renaming dance.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..', 'public', 'images');
const MAX_LONGER_SIDE = 2048;
const QUALITY = 85;

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.promises.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return;
    throw err;
  }
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(p);
    } else {
      yield p;
    }
  }
}

(async () => {
  if (!fs.existsSync(ROOT)) {
    console.error(`Image root not found: ${ROOT}`);
    process.exit(1);
  }

  let scanned = 0;
  let resized = 0;
  let skipped = 0;
  let bytesBefore = 0;
  let bytesAfter = 0;

  for await (const file of walk(ROOT)) {
    if (!file.toLowerCase().endsWith('.webp')) continue;
    const posix = file.replace(/\\/g, '/');
    if (posix.includes('/thumbs/')) continue;

    scanned++;
    const rel = path.relative(ROOT, file);
    try {
      const inputBuf = await fs.promises.readFile(file);
      const meta = await sharp(inputBuf).metadata();
      const longer = Math.max(meta.width || 0, meta.height || 0);
      if (longer <= MAX_LONGER_SIDE) {
        skipped++;
        continue;
      }

      const outputBuf = await sharp(inputBuf)
        .rotate() // honor EXIF orientation
        .resize({
          width: MAX_LONGER_SIDE,
          height: MAX_LONGER_SIDE,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: QUALITY, effort: 6 })
        .toBuffer();

      await fs.promises.writeFile(file, outputBuf);
      const newMeta = await sharp(outputBuf).metadata();
      bytesBefore += inputBuf.length;
      bytesAfter += outputBuf.length;
      console.log(
        `✓ ${rel}: ${meta.width}x${meta.height} (${(inputBuf.length / 1024).toFixed(0)} KB) → ${newMeta.width}x${newMeta.height} (${(outputBuf.length / 1024).toFixed(0)} KB)`
      );
      resized++;
    } catch (err) {
      console.error(`✗ ${rel}: ${err.message}`);
    }
  }

  console.log('');
  console.log(`Scanned ${scanned} .webp files (excluding thumbs/).`);
  console.log(`Resized ${resized}, already-within-cap ${skipped}.`);
  if (resized > 0) {
    const saved = bytesBefore - bytesAfter;
    console.log(
      `Total before: ${(bytesBefore / 1024 / 1024).toFixed(2)} MB → after: ${(bytesAfter / 1024 / 1024).toFixed(2)} MB (saved ${(saved / 1024 / 1024).toFixed(2)} MB).`
    );
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
