import React, { useState, useEffect } from 'react';

// LazyImage component for performance optimization
const LazyImage = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Check if the browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Start loading when image is 200px from viewport
      );
      
      const currentElement = document.getElementById(`lazy-${src.replace(/[^\w]+/g, '-')}`);
      if (currentElement) {
        observer.observe(currentElement);
      }
      
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsInView(true);
    }
  }, [src]);
  
  return (
    <div 
      id={`lazy-${src.replace(/[^\w]+/g, '-')}`}
      className={`lazy-image-container ${className || ''} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto', 
        background: '#f0f0f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'visible' : 'hidden'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          style={{
            transition: 'opacity 0.3s ease',
            opacity: isLoaded ? 1 : 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
      {!isLoaded && (
        <div className="loading-placeholder" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ccc'
        }}>
          <span className="loading-spinner" style={{
            width: '30px',
            height: '30px',
            border: '3px solid #e96b38',
            borderRadius: '50%',
            borderTopColor: 'transparent',
            animation: 'spin 1s linear infinite'
          }}></span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;