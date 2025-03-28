// src/components/Slideshow.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage'; // Použijeme LazyImage
import './Slideshow.css';

const Slideshow = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
      }, interval);
      
      // Cleanup the timer when the component unmounts or currentIndex changes
      return () => clearTimeout(timer);
    }
  }, [currentIndex, images.length, interval]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
  }

  if (!images || images.length === 0) {
    return <div>Žiadne obrázky na zobrazenie.</div>; // Fallback
  }

  return (
    <div className="slideshow-container">
      {images.length > 1 && (
           <button onClick={goToPrevious} className="slide-arrow prev-arrow" aria-label="Predchádzajúci obrázok">&#10094;</button>
      )}
     
      <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]?.url || ''})` }}>
         {/* Alternatívne môžete použiť LazyImage priamo tu, ak preferujete img tag */}
         {/* <LazyImage src={images[currentIndex]?.url} alt={images[currentIndex]?.alt || `Slide ${currentIndex + 1}`} className="slide-image" /> */}
         {images[currentIndex]?.caption && (
             <div className="slide-caption">{images[currentIndex].caption}</div>
         )}
      </div>

       {images.length > 1 && (
            <button onClick={goToNext} className="slide-arrow next-arrow" aria-label="Nasledujúci obrázok">&#10095;</button>
       )}
       
       {/* Indikátory (bodky) */}
       {images.length > 1 && (
           <div className="dots-container">
               {images.map((_, slideIndex) => (
                   <button 
                       key={slideIndex} 
                       className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
                       onClick={() => goToSlide(slideIndex)}
                       aria-label={`Prejsť na obrázok ${slideIndex + 1}`}
                    ></button>
               ))}
           </div>
       )}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
    caption: PropTypes.string
  })).isRequired,
  interval: PropTypes.number,
};

export default Slideshow;