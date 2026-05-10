import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './../styles/loading.css'; // Ensure CSS is imported

const LazyImage = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  // Lazy initializer: in browsers without IntersectionObserver (~0.05%),
  // start in-view immediately. Avoids calling setState inside the effect.
  const [isInView, setIsInView] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window)
  );
  const elementId = `lazy-${src.replace(/[^a-zA-Z0-9-_]/g, '')}`;

  useEffect(() => {
    let observer;
    const currentElement = document.getElementById(elementId);
    if (currentElement && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(currentElement);
            }
          });
        },
        // Native loading="lazy" already handles below-the-fold images; we
        // just need a small head-start on the spinner→image swap.
        { rootMargin: '50px' }
      );
      observer.observe(currentElement);
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
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'visible' : 'hidden'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="lazy"
          decoding="async"
        />
      )}
      {/* Spinner placeholder while we wait. If the image 404s (or otherwise
          errors), drop the spinner so the card doesn't loop forever — alt
          text remains as accessible fallback. */}
      {!isLoaded && !hasError && (
        <div className="loading-placeholder">
            <span className="loading-spinner"></span>
        </div>
      )}
      {hasError && (
        <div className="lazy-image-error" role="img" aria-label={alt}></div>
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