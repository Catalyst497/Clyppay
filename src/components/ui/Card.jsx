import { useState } from "react";

export default function Card({ slides }) {
  const [activeIndex, setActiveIndex] = useState(4);

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
    <div
      id="card-container"
      className="bg-card text-card-foreground w-[580px] rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
    >
      <div
        id="image-container"
        className="bg-gradient overflow-hidden max-h-[450px]"
      >
        <img
          src={slides[activeIndex].image}
          alt="ya"
          className="object-contain "
        />
      </div>

      <div className="w-full flex flex-col items-center ">
        <h2 className="text-foreground-bold font-semibold text-xl">
          {slides[activeIndex].title}
        </h2>
        <div className="max-w-[50%]">
          {" "}
          <p className="text-base font-normal text-center">
            {slides[activeIndex].body}
          </p>
        </div>
        <div>{/* pagination here*/}</div>
      </div>

      <div className="grid grid-cols-2 px-2">
        <div className="flex justify-between">
          <button onClick={goToPrevSlide}>Back </button>
          <div>Next</div>
        </div>
        <div className="grid align-self-end">
          <button>Skip</button>
        </div>
      </div>
    </div>
  );
}
