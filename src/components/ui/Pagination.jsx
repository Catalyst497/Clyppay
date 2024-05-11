import React, { useState } from 'react';

function Slideshow({ numSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slideshow-container">
      {/* Render slides */}
      {Array.from({ length: numSlides }).map((_, index) => (
        <div key={index} className={`slide ${activeIndex === index ? 'active' : ''}`}>
          Slide {index + 1}
        </div>
      ))}
      
      {/* Render dots */}
      <div className="dots-container">
        {Array.from({ length: numSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
