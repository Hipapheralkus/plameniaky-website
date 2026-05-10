(() => {
  // If the user opened this page directly via file:// (double-clicked the
  // HTML), the export API and output-path detection cannot work — fetch()
  // calls fail with CORS. Show a clear banner and stop.
  if (location.protocol === 'file:') {
    document.getElementById('fileProtocolWarning')?.classList.remove('hidden');
    return;
  }

  const $ = (id) => document.getElementById(id);
  const dropzone = $('dropzone');
  const grid = $('grid');
  const filePicker = $('filePicker');
  const pickBtn = $('pickBtn');
  const batchInput = $('batchName');
  const exportBtn = $('exportBtn');
  const clearBtn = $('clearBtn');
  const counterEl = $('counter');
  const outputPathEl = $('outputPath');
  const busy = $('busy');
  const busyLabel = $('busyLabel');

  const cropModal = $('cropModal');
  const cropperHost = $('cropperHost');
  const cropSave = $('cropSave');
  const cropCancel = $('cropCancel');

  const resultModal = $('resultModal');
  const resultBody = $('resultBody');
  const resultClose = $('resultClose');
  const resultTitle = $('resultTitle');

  const confirmModal = $('confirmModal');
  const confirmBody = $('confirmBody');
  const confirmCancel = $('confirmCancel');
  const confirmOverwrite = $('confirmOverwrite');

  /** @type {Array<{id:number, file:File, originalName:string, thumbBlob:Blob|null, thumbDataUrl:string|null}>} */
  const items = [];
  let nextId = 1;
  let cropTargetId = null;
  let cropImageUrl = null;

  // Fetch resolved output path
  fetch('/api/output-path').then(r => r.json()).then(({ path, source }) => {
    outputPathEl.textContent = `${path}  [${source}]`;
    outputPathEl.title = source === 'G-drive'
      ? 'Writing directly to G: drive (production location).'
      : 'G: drive not available — writing to this repo checkout.';
  }).catch(() => {
    outputPathEl.textContent = '(could not detect output path)';
  });

  // ---- Drag-drop / file picker ----
  pickBtn.addEventListener('click', () => filePicker.click());
  filePicker.addEventListener('change', (e) => {
    addFiles(Array.from(e.target.files || []));
    filePicker.value = '';
  });

  // Visual highlight when dragging over the dropzone — handled separately
  // from the drop itself (the drop event fires on `document` below so the
  // user can drop anywhere on the page, not only on the dropzone).
  ['dragenter', 'dragover'].forEach(ev =>
    dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add('drag'); })
  );
  ['dragleave', 'drop'].forEach(ev =>
    dropzone.addEventListener(ev, () => dropzone.classList.remove('drag'))
  );
  // Single drop handler at the document level. Previously there was also
  // a dropzone-level handler, which made addFiles run twice when dropping
  // onto the dropzone (event bubbles to document).
  document.addEventListener('dragover', (e) => e.preventDefault());
  document.addEventListener('drop', (e) => {
    if (e.target.closest('.modal')) return;
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []).filter(f => f.type.startsWith('image/'));
    if (files.length) addFiles(files);
  });

  function addFiles(files) {
    // Sort by file name to give a sensible default ordering when many files dropped at once.
    files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const newItems = [];
    for (const f of files) {
      const it = {
        id: nextId++,
        file: f,
        originalName: f.name,
        thumbBlob: null,
        thumbDataUrl: null,
      };
      items.push(it);
      newItems.push(it);
    }
    render();
    // Auto-generate a default center-square crop for each new image so the
    // user can export immediately without clicking Crop, unless they want
    // a different area. Runs in the background; cards re-render as each
    // one finishes.
    newItems.forEach(autoCrop);
  }

  /** Build a 1024×1024 center-square PNG blob from the original image. */
  async function autoCrop(it) {
    try {
      const url = URL.createObjectURL(it.file);
      const img = await loadImage(url);
      URL.revokeObjectURL(url);
      const side = Math.min(img.naturalWidth, img.naturalHeight);
      const sx = (img.naturalWidth - side) / 2;
      const sy = (img.naturalHeight - side) / 2;
      const target = 1024;
      const canvas = document.createElement('canvas');
      canvas.width = target;
      canvas.height = target;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, sx, sy, side, side, 0, 0, target, target);
      it.thumbBlob = await new Promise(res => canvas.toBlob(res, 'image/png'));
      it.thumbDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      render();
    } catch (err) {
      console.warn('auto-crop failed for', it.originalName, err);
    }
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  // ---- Render ----
  function render() {
    grid.innerHTML = '';
    const padWidth = items.length > 99 ? 3 : 2;
    const batch = batchInput.value.trim() || '<batch>';

    items.forEach((it, idx) => {
      const num = String(idx + 1).padStart(padWidth, '0');
      const finalName = `${batch}_${num}.webp`;

      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.id = it.id;

      const badge = document.createElement('div');
      badge.className = 'index-badge';
      badge.textContent = num;
      card.appendChild(badge);

      const remove = document.createElement('button');
      remove.className = 'remove-btn';
      remove.type = 'button';
      remove.textContent = '×';
      remove.title = 'Remove';
      remove.addEventListener('click', (e) => {
        e.stopPropagation();
        const i = items.findIndex(x => x.id === it.id);
        if (i >= 0) items.splice(i, 1);
        render();
      });
      card.appendChild(remove);

      const preview = document.createElement('div');
      preview.className = 'preview';
      if (it.thumbDataUrl) {
        preview.style.backgroundImage = `url("${it.thumbDataUrl}")`;
      } else {
        preview.classList.add('no-crop');
        // Show original blurred behind the call-to-crop overlay
        const url = URL.createObjectURL(it.file);
        preview.style.backgroundImage = `url("${url}")`;
      }
      card.appendChild(preview);

      const meta = document.createElement('div');
      meta.className = 'meta';
      const filename = document.createElement('span');
      filename.className = 'filename';
      filename.textContent = finalName;
      filename.title = `Original: ${it.originalName}`;
      meta.appendChild(filename);

      const cropBtn = document.createElement('button');
      cropBtn.className = 'crop-btn';
      cropBtn.type = 'button';
      cropBtn.textContent = it.thumbDataUrl ? '✓ Crop' : 'Crop';
      if (it.thumbDataUrl) cropBtn.classList.add('cropped');
      cropBtn.addEventListener('click', () => openCropper(it.id));
      meta.appendChild(cropBtn);

      card.appendChild(meta);
      grid.appendChild(card);
    });

    counterEl.textContent = `${items.length} image${items.length === 1 ? '' : 's'}`;
    clearBtn.disabled = items.length === 0;
    updateExportEnabled();
  }

  function updateExportEnabled() {
    const allCropped = items.length > 0 && items.every(it => it.thumbBlob !== null);
    const validBatch = /^[a-z0-9_-]+$/.test(batchInput.value.trim());
    exportBtn.disabled = !(allCropped && validBatch);
    if (!validBatch) exportBtn.title = 'Enter a valid batch name';
    else if (!allCropped) exportBtn.title = 'Crop every image first';
    else exportBtn.title = `Export ${items.length} images`;
  }

  batchInput.addEventListener('input', () => render());
  clearBtn.addEventListener('click', () => {
    if (items.length && !confirm(`Clear all ${items.length} images?`)) return;
    items.length = 0;
    render();
  });

  // ---- Sortable ----
  Sortable.create(grid, {
    animation: 150,
    handle: '.preview',
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: (evt) => {
      if (evt.oldIndex === evt.newIndex) return;
      const [moved] = items.splice(evt.oldIndex, 1);
      items.splice(evt.newIndex, 0, moved);
      render();
    },
  });

  // ---- Cropper (Cropper.js v2 — web components) ----
  // We rebuild the <cropper-canvas> tree on every open. That avoids stale
  // selection state from a previous image and is cheap.
  function openCropper(id) {
    const it = items.find(x => x.id === id);
    if (!it) return;
    cropTargetId = id;

    if (cropImageUrl) { try { URL.revokeObjectURL(cropImageUrl); } catch (_) {} }
    cropImageUrl = URL.createObjectURL(it.file);

    // Show the modal first and clear any stale cropper. We mount the cropper
    // components only after the modal has been laid out — Cropper.js v2 reads
    // the parent canvas size when initializing, and that size is 0 if the
    // modal is still hidden.
    cropperHost.innerHTML = '';
    cropModal.classList.remove('hidden');

    requestAnimationFrame(() => {
      cropperHost.innerHTML = `
        <cropper-canvas background>
          <cropper-image id="cropImg" src="${cropImageUrl}" rotatable scalable translatable></cropper-image>
          <cropper-shade hidden></cropper-shade>
          <cropper-handle action="select" plain></cropper-handle>
          <cropper-selection id="cropSel" initial-coverage="0.8" aspect-ratio="1" movable resizable outlined>
            <cropper-grid role="grid" covered></cropper-grid>
            <cropper-crosshair centered></cropper-crosshair>
            <cropper-handle action="move" theme-color="rgba(255,255,255,0.35)"></cropper-handle>
            <cropper-handle action="n-resize"></cropper-handle>
            <cropper-handle action="e-resize"></cropper-handle>
            <cropper-handle action="s-resize"></cropper-handle>
            <cropper-handle action="w-resize"></cropper-handle>
            <cropper-handle action="ne-resize"></cropper-handle>
            <cropper-handle action="nw-resize"></cropper-handle>
            <cropper-handle action="se-resize"></cropper-handle>
            <cropper-handle action="sw-resize"></cropper-handle>
          </cropper-selection>
        </cropper-canvas>
      `;

      const cropImg = document.getElementById('cropImg');
      const sel = document.getElementById('cropSel');
      if (!cropImg) return;
      const fit = () => {
        try {
          if (typeof cropImg.$center === 'function') cropImg.$center('contain');
          if (sel && typeof sel.$reset === 'function') sel.$reset();
        } catch (err) {
          console.warn('cropper fit failed', err);
        }
      };
      const runFit = () => {
        fit();
        // Belt & suspenders: re-fit after layout settles in case the first
        // fit ran before the canvas measured itself correctly.
        setTimeout(fit, 50);
        setTimeout(fit, 200);
      };
      if (typeof cropImg.$ready === 'function') {
        cropImg.$ready(runFit);
      } else {
        let tries = 0;
        const t = setInterval(() => {
          tries++;
          if (typeof cropImg.$center === 'function' || tries > 30) {
            clearInterval(t);
            runFit();
          }
        }, 50);
      }
    });
  }

  function closeCropper() {
    cropModal.classList.add('hidden');
    cropperHost.innerHTML = '';
    if (cropImageUrl) { try { URL.revokeObjectURL(cropImageUrl); } catch (_) {} cropImageUrl = null; }
    cropTargetId = null;
  }

  cropCancel.addEventListener('click', closeCropper);

  cropSave.addEventListener('click', async () => {
    if (cropTargetId == null) return;
    const sel = document.getElementById('cropSel');
    if (!sel || typeof sel.$toCanvas !== 'function') {
      alert('Cropper not ready yet — try again in a moment.');
      return;
    }
    // 1024x1024 PNG: server will downscale to 500 and convert to WebP.
    let canvas;
    try {
      canvas = await sel.$toCanvas({ width: 1024, height: 1024 });
    } catch (err) {
      alert('Could not capture crop: ' + err.message);
      return;
    }
    const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
    const dataUrl = canvas.toDataURL('image/jpeg', 0.7); // for in-browser preview only
    const it = items.find(x => x.id === cropTargetId);
    if (it) {
      it.thumbBlob = blob;
      it.thumbDataUrl = dataUrl;
    }
    closeCropper();
    render();
  });

  // ---- Export ----
  exportBtn.addEventListener('click', async () => {
    const batch = batchInput.value.trim();
    const padWidth = items.length > 99 ? 3 : 2;

    showBusy('Checking for collisions…');
    let collisions = [];
    try {
      const r = await fetch('/api/check-collisions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batchName: batch, count: items.length, padWidth }),
      });
      const data = await r.json();
      collisions = data.existing || [];
    } catch (err) {
      hideBusy();
      alert('Could not reach server: ' + err.message);
      return;
    }
    hideBusy();

    let allowOverwrite = false;
    if (collisions.length > 0) {
      const ok = await askOverwrite(collisions);
      if (!ok) return;
      allowOverwrite = true;
    }

    showBusy(`Exporting ${items.length} images…`);
    const fd = new FormData();
    fd.append('batchName', batch);
    fd.append('padWidth', String(padWidth));
    fd.append('allowOverwrite', String(allowOverwrite));

    items.forEach((it, idx) => {
      const idxStr = String(idx).padStart(4, '0');
      fd.append('fulls', it.file, `${idxStr}__${it.file.name}`);
      fd.append('thumbs', it.thumbBlob, `${idxStr}__thumb.png`);
    });

    try {
      const r = await fetch('/api/export', { method: 'POST', body: fd });
      const data = await r.json();
      hideBusy();
      showResult(data);
    } catch (err) {
      hideBusy();
      alert('Export failed: ' + err.message);
    }
  });

  function askOverwrite(collisions) {
    return new Promise((resolve) => {
      confirmBody.innerHTML = `<p>The following file${collisions.length === 1 ? '' : 's'} already exist in the output folder:</p><ul>${collisions.map(n => `<li>${escape(n)}</li>`).join('')}</ul><p>Overwrite them, or pick a different batch name?</p>`;
      confirmModal.classList.remove('hidden');
      const cleanup = () => {
        confirmModal.classList.add('hidden');
        confirmCancel.removeEventListener('click', onCancel);
        confirmOverwrite.removeEventListener('click', onOk);
      };
      const onCancel = () => { cleanup(); resolve(false); };
      const onOk = () => { cleanup(); resolve(true); };
      confirmCancel.addEventListener('click', onCancel);
      confirmOverwrite.addEventListener('click', onOk);
    });
  }

  function showResult({ written = [], failed = [], outputPath = '' }) {
    const lines = [];
    if (written.length) {
      lines.push(`<p class="ok">Wrote ${written.length} image${written.length === 1 ? '' : 's'} to:</p><p><code>${escape(outputPath)}</code></p><ul class="ok">${written.map(n => `<li>${escape(n)}</li>`).join('')}</ul>`);
    }
    if (failed.length) {
      lines.push(`<p class="err">${failed.length} failed:</p><ul class="err">${failed.map(f => `<li>${escape(f.name)} — ${escape(f.reason)}</li>`).join('')}</ul>`);
    }
    if (!written.length && !failed.length) lines.push('<p>Nothing happened.</p>');
    resultBody.innerHTML = lines.join('');
    resultTitle.textContent = failed.length ? 'Export finished with errors' : 'Export complete';
    resultModal.classList.remove('hidden');
  }
  resultClose.addEventListener('click', () => resultModal.classList.add('hidden'));

  function escape(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]);
  }
  function showBusy(msg) { busyLabel.textContent = msg; busy.classList.remove('hidden'); }
  function hideBusy() { busy.classList.add('hidden'); }

  // Warn on accidental tab close with unsaved work
  window.addEventListener('beforeunload', (e) => {
    if (items.length > 0) { e.preventDefault(); e.returnValue = ''; }
  });
})();
