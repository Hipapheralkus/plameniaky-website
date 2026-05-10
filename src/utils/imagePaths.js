// Shared helpers for the event-photo URL convention used throughout the site.
//
// Originals live at /images/eventy/<name>.{webp,jpg,...}
// Thumbnails live at /images/eventy/thumbs/<name>_thumb.webp
//
// The same rewrite logic was duplicated across ArchiveEvent and the lightbox;
// extracted here so a single helper covers all callers.

export function createThumbPath(imgPath) {
  if (!imgPath) return imgPath;
  if (imgPath.endsWith('.webp')) {
    return imgPath.replace('/eventy/', '/eventy/thumbs/').replace('.webp', '_thumb.webp');
  }
  if (imgPath.endsWith('.jpg') || imgPath.endsWith('.jpeg')) {
    return imgPath
      .replace('/eventy/', '/eventy/thumbs/')
      .replace(/\.(jpe?g)$/i, '_thumb.webp');
  }
  const base = imgPath.substring(0, imgPath.lastIndexOf('.'));
  return `${base.replace('/eventy/', '/eventy/thumbs/')}_thumb.webp`;
}
