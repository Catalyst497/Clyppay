import React from 'react';

const DotNavigation = ({ activeIndex, numSlides }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: numSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`h-3 w-3 rounded-full mx-1 ${
            activeIndex === index ? 'bg-primary' : 'bg-muted'
          }`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
