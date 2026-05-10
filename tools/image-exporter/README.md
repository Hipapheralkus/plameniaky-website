# Event Image Exporter

Localhost-only tool for exporting event photo batches into the website's image folder.

## What it does

1. Drag-drop multiple images (30+ supported).
2. Drag cards to reorder.
3. Click **Crop** on each card to set the 1:1 thumbnail crop using Cropper.js.
4. Type a batch name (e.g. `tabor_25`).
5. Click **Export** — writes `tabor_25_01.webp`, `tabor_25_02.webp`, ... full-size files plus matching `_thumb.webp` files.

## Output

- **Full-size:** longer side capped at 2048px, original aspect ratio preserved, WebP q=85.
- **Thumbnail:** square crop the user drew, downscaled to 500×500, WebP q=80, written to `thumbs/`.

The output folder is auto-detected:
- `G:\Plameniaky\Web\plameniaky-website\public\images\eventy\` if the G: drive path exists.
- Otherwise the local repo's `public/images/eventy/`.

## Run

From the repo root:

```
npm run image-exporter
```

…or from this folder:

```
npm install
npm start
```

Then open <http://127.0.0.1:5174/>.

The server binds to `127.0.0.1` only, so it's not reachable from the network.

## After exporting

Add the new image paths to the `gallery` array of the relevant event in [src/pages/CoMameZaSebou.jsx](../../src/pages/CoMameZaSebou.jsx). Paths look like `/images/eventy/tabor_25_01.webp`.
