// src/components/LightboxGallery.jsx
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createThumbPath } from '../utils/imagePaths';
import './LightboxGallery.css';

/**
 * Wrapper that gates rendering on `isOpen`. The body of the lightbox lives in
 * LightboxContent, which is mounted/unmounted by this gate. That naturally
 * resets internal state (currentIndex, isLoading) on each open without using
 * a setState-in-effect pattern.
 */
const LightboxGallery = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  if (!isOpen || images.length === 0) return null;
  return (
    <LightboxContent
      images={images}
      onClose={onClose}
      initialIndex={initialIndex}
    />
  );
};

const LightboxContent = ({ images, onClose, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll while the lightbox is mounted.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const prevImage = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
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
  }, [prevImage, nextImage, onClose]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

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
          <button
            className="lightbox-close"
            onClick={onClose}
            aria-label="Zavrieť"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>

          {images.length > 1 && (
            <>
              <button
                className="lightbox-nav prev-btn"
                onClick={prevImage}
                aria-label="Predchádzajúci"
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button
                className="lightbox-nav next-btn"
                onClick={nextImage}
                aria-label="Nasledujúci"
              >
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
            </>
          )}

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

          {images.length > 1 && (
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}

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
                    src={createThumbPath(img)}
                    alt={`Náhľad ${idx + 1}`}
                    className="thumbnail-img"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(lightboxContent, document.body);
};

LightboxContent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  initialIndex: PropTypes.number.isRequired,
};

LightboxGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialIndex: PropTypes.number
};

export default LightboxGallery;
