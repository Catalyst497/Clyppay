import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/library/Card";
import DotNavigation from "@/components/ui/DotNavigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Cards({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const numSlides = slides.length;

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % numSlides);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides);
    };

    return (
        <Card className="h-full w-[300px] md:w-[580px] overflow-hidden flex flex-col justify-between">
            <div className="flex h-1/2 md:h-3/5 w-full justify-center overflow-hidden bg-gradient">
                <div className="grid w-1/2 place-content-center">
                    <img
                        src={slides[activeIndex].image}
                        alt={slides[activeIndex].title}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex w-full flex-col items-center text-center">
                <CardHeader>
                    <CardTitle>{slides[activeIndex].title}</CardTitle>
                    <div className="max-w-[70%] self-center md:max-w-[60%]">
                        <CardDescription className="text-center">
                            {slides[activeIndex].body}
                        </CardDescription>
                    </div>
                </CardHeader>

                <div>
                    <DotNavigation
                        activeIndex={activeIndex}
                        numSlides={numSlides}
                    />
                </div>
            </div>

            <div className="flex justify-between px-6 py-4 text-primary">
                <div className="flex justify-between w-[75%] md:w-[50%]">
                    <span className="flex items-center hover:cursor-pointer gap-4">
                        <button
                            className="grid place-content-center rounded-full px-2 py-2 bg-primary hover:bg-primary-dark text-primary-foreground"
                            onClick={goToPrevSlide}
                            disabled={numSlides <= 1}
                        > 
                            <FaChevronLeft size={20} />
                        </button>
                        Back
                    </span>

                    <span className="flex items-center gap-4 hover:cursor-pointer">
                        Next
                        <button
                            className="grid place-content-center rounded-full px-2 py-2 bg-primary hover:bg-primary-dark text-primary-foreground"
                            onClick={goToNextSlide}
                            disabled={numSlides <= 1}
                        >
                            <FaChevronRight size={20} />
                        </button>{" "}
                    </span>
                </div>
                <div className="hover:cursor-pointer justify-end flex">
                    <button>Skip</button>
                </div>
            </div>
        </Card>
    );
}
