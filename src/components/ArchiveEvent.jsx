// src/components/ArchiveEvent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';
import './ArchiveEvent.css'; // Create this file with the styles I provided

const ArchiveEvent = ({ event, onTagClick }) => {
  const { title, date, description, gallery, tags } = event;

  const handleTagClick = (tag) => {
    if (onTagClick) {
      onTagClick(tag);
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
              <div key={index} className="gallery-image">
                <LazyImage 
                  src={imgSrc} 
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