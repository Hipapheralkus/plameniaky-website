import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './../styles/loading.css'; // Import the CSS file

// LazyImage component for performance optimization
const LazyImage = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  // Create a unique ID based on the src, removing potentially invalid characters
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
              observer.unobserve(currentElement); // Disconnect after becoming visible
            }
          });
        },
        { rootMargin: '200px' } // Start loading when image is 200px from viewport
      );
      observer.observe(currentElement);
    } else {
      // Fallback for browsers that don't support IntersectionObserver or if element not found immediately
      setIsInView(true);
    }

    // Cleanup function
    return () => {
      // Check if observer and currentElement exist before trying to unobserve
      if (observer && currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [src, elementId]); // Add elementId dependency

  return (
    <div
      id={elementId} // Use the generated unique ID
      className={`lazy-image-container ${className || ''} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        // background: isLoaded ? 'transparent' : '#f0f0f0', // Background handled by CSS
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Conditionally render image only when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'visible' : 'hidden'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy" // Native lazy loading attribute
          style={{
            // Styles managed by loading.css
            // opacity handled by visible/hidden classes
             width: '100%',
             height: '100%',
             objectFit: 'cover' // Ensure image covers the container
          }}
        />
      )}
      {/* Show loading placeholder only if image isn't loaded yet */}
      {!isLoaded && (
        <div className="loading-placeholder"> {/* Placeholder styling from loading.css */}
          <span
             className="loading-spinner" // Spinner styling from loading.css
             style={{
               // --- Removed hardcoded border and borderTopColor ---
               // Let CSS handle the colors based on variables
               display: 'inline-block', // Keep necessary inline styles for basic structure
               width: '30px',
               height: '30px',
               borderRadius: '50%',
               animation: 'spin 1s linear infinite' // Keep animation inline or move to CSS
             }}>
           </span>
        </div>
      )}
    </div>
  );
};

// Add PropTypes validation
LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};


export default LazyImage;