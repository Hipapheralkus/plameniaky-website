const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PORT = 5174;
const HOST = '127.0.0.1';

const G_DRIVE = 'G:\\Plameniaky\\Web\\plameniaky-website\\public\\images\\eventy';
const LOCAL = path.resolve(__dirname, '..', '..', 'public', 'images', 'eventy');

function resolveOutputPath() {
  try {
    if (fs.existsSync(G_DRIVE) && fs.statSync(G_DRIVE).isDirectory()) {
      return { path: G_DRIVE, source: 'G-drive' };
    }
  } catch (_) { /* ignore */ }
  return { path: LOCAL, source: 'local-repo' };
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB per file
});

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/output-path', (req, res) => {
  const out = resolveOutputPath();
  res.json({ ...out, thumbsPath: path.join(out.path, 'thumbs') });
});

app.post('/api/check-collisions', express.json(), (req, res) => {
  const { batchName, count, padWidth } = req.body || {};
  if (!isValidBatch(batchName)) return res.status(400).json({ error: 'invalid batch name' });
  const out = resolveOutputPath();
  const existing = [];
  for (let i = 1; i <= count; i++) {
    const name = `${batchName}_${String(i).padStart(padWidth, '0')}.webp`;
    if (fs.existsSync(path.join(out.path, name))) existing.push(name);
  }
  res.json({ existing, outputPath: out.path });
});

app.post(
  '/api/export',
  upload.fields([
    { name: 'fulls', maxCount: 500 },
    { name: 'thumbs', maxCount: 500 },
  ]),
  async (req, res) => {
    try {
      const { batchName, padWidth: padRaw, allowOverwrite } = req.body;
      const padWidth = parseInt(padRaw, 10) || 2;
      if (!isValidBatch(batchName)) {
        return res.status(400).json({ error: 'Invalid batch name. Use lowercase letters, digits, _ or - only.' });
      }
      const fulls = (req.files && req.files.fulls) || [];
      const thumbs = (req.files && req.files.thumbs) || [];
      if (fulls.length === 0) return res.status(400).json({ error: 'no images uploaded' });
      if (fulls.length !== thumbs.length) {
        return res.status(400).json({ error: `mismatch: ${fulls.length} fulls vs ${thumbs.length} thumbs` });
      }

      const out = resolveOutputPath();
      const thumbsDir = path.join(out.path, 'thumbs');
      await fs.promises.mkdir(out.path, { recursive: true });
      await fs.promises.mkdir(thumbsDir, { recursive: true });

      // The client uploads files in sorted order. multer preserves the upload order
      // for each field. We pair them by index.
      const sortedFulls = fulls.slice().sort(byOrderField);
      const sortedThumbs = thumbs.slice().sort(byOrderField);

      const written = [];
      const failed = [];

      for (let i = 0; i < sortedFulls.length; i++) {
        const num = String(i + 1).padStart(padWidth, '0');
        const fullName = `${batchName}_${num}.webp`;
        const thumbName = `${batchName}_${num}_thumb.webp`;
        const fullPath = path.join(out.path, fullName);
        const thumbPath = path.join(thumbsDir, thumbName);

        if (!allowOverwrite || allowOverwrite === 'false') {
          if (fs.existsSync(fullPath) || fs.existsSync(thumbPath)) {
            failed.push({ name: fullName, reason: 'exists' });
            continue;
          }
        }

        try {
          await sharp(sortedFulls[i].buffer)
            .rotate() // honor EXIF orientation
            .resize({ width: 2048, height: 2048, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85, effort: 6 })
            .toFile(fullPath);

          await sharp(sortedThumbs[i].buffer)
            .resize({ width: 500, height: 500, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 80, effort: 4 })
            .toFile(thumbPath);

          written.push(fullName);
        } catch (err) {
          failed.push({ name: fullName, reason: err.message });
        }
      }

      res.json({ written, failed, outputPath: out.path });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
);

function isValidBatch(name) {
  return typeof name === 'string' && /^[a-z0-9_-]+$/.test(name) && name.length <= 60;
}

// Files arrive with originalname like "0001__filename" — we sort by that prefix
// so the order matches the client's sortedIndex regardless of network reordering.
function byOrderField(a, b) {
  return a.originalname.localeCompare(b.originalname);
}

app.listen(PORT, HOST, () => {
  const out = resolveOutputPath();
  console.log(`\nImage Exporter running at http://${HOST}:${PORT}/`);
  console.log(`Output folder: ${out.path}  (${out.source})\n`);
});
