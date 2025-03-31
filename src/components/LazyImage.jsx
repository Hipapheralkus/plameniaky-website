import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './../styles/loading.css'; // Ensure CSS is imported

const LazyImage = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementId = `lazy-${src.replace(/[^a-zA-Z0-9-_]/g, '')}`;

  useEffect(() => {
    let observer;
    const currentElement = document.getElementById(elementId);

    if (currentElement && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(currentElement);
            }
          });
        },
        { rootMargin: '200px' }
      );
      observer.observe(currentElement);
    } else {
      setIsInView(true);
    }

    return () => {
      if (observer && currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [src, elementId]);

  return (
    <div
      id={elementId}
      className={`lazy-image-container ${className || ''} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        width: width || undefined,
        height: height || undefined,
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'visible' : 'hidden'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
      {/* Corrected Structure: Render placeholder div containing the spinner when not loaded */}
      {!isLoaded && (
        <div className="loading-placeholder">
            <span className="loading-spinner"></span> {/* Spinner is now INSIDE placeholder */}
        </div>
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default LazyImage;