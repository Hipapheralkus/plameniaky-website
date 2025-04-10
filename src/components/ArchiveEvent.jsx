// src/components/ArchiveEvent.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';
import LightboxGallery from './LightboxGallery';
import './ArchiveEvent.css';

const ArchiveEvent = ({ event, onTagClick }) => {
  const { title, date, description, gallery, tags } = event;
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const handleTagClick = (tag) => {
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  // Handle image click to open lightbox
  const handleImageClick = (index) => {
    setInitialImageIndex(index);
    setLightboxOpen(true);
  };

  // Convert gallery paths to use thumbnails for the grid
  const createThumbPath = (imgPath) => {
    // Handle webp files
    if (imgPath.endsWith('.webp')) {
      return imgPath.replace('/eventy/', '/eventy/thumbs/').replace('.webp', '_thumb.webp');
    }
    // Handle jpg files
    else if (imgPath.endsWith('.jpg')) {
      return imgPath.replace('/eventy/', '/eventy/thumbs/').replace('.jpg', '_thumb.webp');
    }
    // Handle other image formats
    else {
      const basePath = imgPath.substring(0, imgPath.lastIndexOf('.'));
      return `${basePath.replace('/eventy/', '/eventy/thumbs/')}_thumb.webp`;
    }
  };

  return (
    <div className="event-card">
      <div className="event-card-header">
        <h3>{title}</h3>
        <span className="event-date">{date}</span>
      </div>
      
      <div className="event-card-content">
        <p>{description}</p>
        
        {gallery && gallery.length > 0 && (
          <div className="event-card-gallery">
            {gallery.map((imgSrc, index) => (
              <div 
                key={index} 
                className="gallery-image"
                onClick={() => handleImageClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`Zobraziť fotografiu ${index + 1} v plnej veľkosti`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleImageClick(index);
                  }
                }}
              >
                <LazyImage 
                  src={createThumbPath(imgSrc)} 
                  alt={`${title} photo ${index + 1}`} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      {tags && tags.length > 0 && (
        <div className="event-card-tags">
          {tags.map(tag => {
            const tagName = tag.startsWith('#') ? tag.substring(1) : tag;
            return (
              <button 
                key={tagName} 
                className="event-tag"
                onClick={() => handleTagClick(tag)}
              >
                #{tagName}
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Gallery Component - use original full-size images */}
      {gallery && gallery.length > 0 && (
        <LightboxGallery
          images={gallery} // Original full-size images
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          initialIndex={initialImageIndex}
        />
      )}
    </div>
  );
};

ArchiveEvent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onTagClick: PropTypes.func
};

export default ArchiveEvent;