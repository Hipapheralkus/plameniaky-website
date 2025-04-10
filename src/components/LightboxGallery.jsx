// src/components/LightboxGallery.jsx
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './LightboxGallery.css';

/**
 * A lightbox gallery component that displays images in a full-screen modal using portal
 * This ensures the lightbox is rendered at the document root level
 * 
 * @param {Object} props
 * @param {Array} props.images - Array of image URLs
 * @param {boolean} props.isOpen - Whether the lightbox is open
 * @param {function} props.onClose - Function to call when closing the lightbox
 * @param {number} props.initialIndex - Initial image index to show
 */
const LightboxGallery = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [isPortalMounted, setIsPortalMounted] = useState(false);

  // Setup the portal container when the component mounts
  useEffect(() => {
    setIsPortalMounted(true);
    
    // Cleanup function
    return () => {
      setIsPortalMounted(false);
      document.body.style.overflow = ''; // Ensure scrolling is restored
    };
  }, []);

  // Handle opening/closing and prevent scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when open
      setCurrentIndex(initialIndex);
      setIsLoading(true);
    } else {
      document.body.style.overflow = ''; // Restore scrolling when closed
    }
  }, [isOpen, initialIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Navigation functions
  const prevImage = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Handle image loading
  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // If not open or no images, don't render anything
  if (!isOpen || images.length === 0 || !isPortalMounted) {
    return null;
  }

  // Create the lightbox content
  const lightboxContent = (
    <div className="lightbox-root">
      <div 
        className="lightbox-overlay" 
        onClick={onClose}
      >
        <div 
          className="lightbox-container" 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            className="lightbox-close" 
            onClick={onClose} 
            aria-label="Zavrieť"
          >
            <i className="fas fa-times"></i>
          </button>
          
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button 
                className="lightbox-nav prev-btn" 
                onClick={prevImage} 
                aria-label="Predchádzajúci"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                className="lightbox-nav next-btn" 
                onClick={nextImage} 
                aria-label="Nasledujúci"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          
          {/* Main image */}
          <div className="lightbox-content">
            {isLoading && (
              <div className="lightbox-loader">
                <div className="lightbox-spinner"></div>
              </div>
            )}
            <img
              src={images[currentIndex]}
              alt={`Obrázok ${currentIndex + 1} z ${images.length}`}
              className={`lightbox-image ${isLoading ? 'loading' : 'loaded'}`}
              onLoad={handleImageLoad}
            />
          </div>
          
          {/* Image count indicator */}
          {images.length > 1 && (
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
          
          {/* Thumbnails */}
          {images.length > 4 && (
            <div className="lightbox-thumbnails">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumbnail-btn ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setIsLoading(true);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Pozrieť obrázok ${idx + 1}`}
                >
                  <img 
                    src={img} 
                    alt={`Náhľad ${idx + 1}`} 
                    className="thumbnail-img"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Use ReactDOM.createPortal to render the lightbox at the document root
  return ReactDOM.createPortal(
    lightboxContent,
    document.body
  );
};

LightboxGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialIndex: PropTypes.number
};

export default LightboxGallery;