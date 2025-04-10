// imageOptimizer.cjs
// A CommonJS script to convert and optimize images for your website
// Requires: npm install sharp

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  sourceDir: './public/images/eventy',          // Original images location
  thumbsDir: './public/images/eventy/thumbs',    // Where to save thumbnails
  fullSizeMaxWidth: 1920,                       // Max width for full-size images (landscape)
  fullSizePortraitMaxWidth: 1200,               // Max width for portrait images
  thumbMaxWidth: 500,                           // Max width for thumbnails
  quality: 85,                                  // Quality for full-size WebP (0-100)
  thumbQuality: 80,                             // Quality for thumbnails (0-100)
  convertToWebP: true,                          // Whether to convert images to WebP
};

// Ensure directory exists
async function ensureDir(dirPath) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}

// Check if file is an image
function isImage(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
}

// Process an image
async function processImage(filePath, fileName) {
  try {
    console.log(`Processing: ${fileName}`);
    
    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    const isPortrait = metadata.height > metadata.width;
    
    // Determine target width based on orientation
    const targetWidth = isPortrait ? config.fullSizePortraitMaxWidth : config.fullSizeMaxWidth;
    
    // Full-size image processing
    let fullSizeImage = sharp(filePath)
      .resize({ 
        width: targetWidth,
        withoutEnlargement: true,
        fit: 'inside'
      });
    
    // Thumbnail processing
    let thumbnail = sharp(filePath)
      .resize({ 
        width: config.thumbMaxWidth,
        withoutEnlargement: true,
        fit: 'inside'
      });
    
    if (config.convertToWebP) {
      // Get the base name without extension
      const baseName = path.basename(fileName, path.extname(fileName));
      
      // Save full-size WebP
      await fullSizeImage
        .webp({ 
          quality: config.quality,
          effort: 6
        })
        .toFile(path.join(config.sourceDir, `${baseName}.webp`));
      
      // Save thumbnail WebP
      await thumbnail
        .webp({ 
          quality: config.thumbQuality,
          effort: 4
        })
        .toFile(path.join(config.thumbsDir, `${baseName}_thumb.webp`));
      
      console.log(`✅ Converted ${fileName} to WebP`);
    } else {
      // Save full-size in original format with optimization
      const outputPath = path.join(config.sourceDir, `optimized_${fileName}`);
      await fullSizeImage.toFile(outputPath);
      
      // Save thumbnail in original format
      const thumbName = `${path.basename(fileName, path.extname(fileName))}_thumb${path.extname(fileName)}`;
      await thumbnail.toFile(path.join(config.thumbsDir, thumbName));
      
      console.log(`✅ Optimized ${fileName}`);
    }
    
  } catch (err) {
    console.error(`❌ Error processing ${fileName}:`, err);
  }
}

// Main function to process all images
async function processAllImages() {
  try {
    // Ensure destination directory exists
    await ensureDir(config.thumbsDir);
    
    // Get all files in the source directory
    const files = await fs.promises.readdir(config.sourceDir);
    
    // Filter for image files
    const imageFiles = files.filter(file => {
      try {
        // Skip if it's a directory
        const stats = fs.statSync(path.join(config.sourceDir, file));
        if (stats.isDirectory()) return false;
        
        // Check if it's an image file
        return isImage(file);
      } catch (err) {
        console.error(`Error checking file ${file}:`, err);
        return false;
      }
    });
    
    console.log(`Found ${imageFiles.length} images to process`);
    
    // Process each image
    for (const file of imageFiles) {
      const filePath = path.join(config.sourceDir, file);
      await processImage(filePath, file);
    }
    
    console.log('✨ All images processed successfully!');
    
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

// Run the script
processAllImages();