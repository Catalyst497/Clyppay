import image from "../../assets/image.png";
import { ChevronRight } from "react-feather";
import { useState } from "react";

export default function Card({ title, body, numSlides }) {
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
    <div
      id="card-container"
      className="bg-card text-card-foreground w-[580px] rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
    >
      <div
        id="image-container"
        className="bg-gradient overflow-hidden max-h-[450px]"
      >
        <img src={image} alt="ya" className="object-contain w-full" />
      </div>

      <div className="w-full flex flex-col items-center ">
        <h2 className="text-foreground-bold font-semibold text-xl">{title}</h2>
        <div className="max-w-[50%]">
          {" "}
          <p className="text-base font-normal text-center">{body}</p>
        </div>
        <div>{/* pagination here*/}</div>
      </div>

      <div className="grid grid-cols-2 px-2">
        <div className="flex justify-between">
          <button onClick={goToPrevSlide}>
            <ChevronRight />
            Back{" "}
          </button>
          <div>Next</div>
        </div>
        <div className="grid align-self-end">
          <button>Skip</button>
        </div>
      </div>
    </div>
  );
}
