import React, { useState } from "react";

function Slideshow({ numSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % numSlides);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides);
  };

  return (
    <div className="slideshow-container">
      {/* Render slides */}
      {Array.from({ length: numSlides }).map((_, index) => (
        <div
          key={index}
          className={`slide ${activeIndex === index ? "active" : ""}`}
        >
          Slide {index + 1}
        </div>
      ))}

      {/* Render dots */}
      <div className="dots-container">
        {Array.from({ length: numSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Next and Previous buttons */}
      <button onClick={goToPrevSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
}

export default Slideshow;
