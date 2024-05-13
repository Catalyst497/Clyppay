import { useState } from "react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/library/Card"
import DotNavigation from "@/components/ui/DotNavigation"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Cards({ slides }) {
    const [activeIndex, setActiveIndex] = useState(2)
    const numSlides = slides.length

    const handleDotClick = (index) => {
        setActiveIndex(index)
    }

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % numSlides)
    }

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides)
    }

    return (
        <Card className="h-full w-[580px] overflow-hidden">
            <div
                id="image-container"
                className="flex h-2/3 w-full justify-center overflow-hidden bg-gradient"
            >
                <div className="grid w-1/2 place-content-center">
                    <img
                        src={slides[activeIndex].image}
                        alt={slides[activeIndex].title}
                        className="object-contain"
                    />
                </div>
            </div>

            <div id = "content" className="">
            <div id = "body" className="flex w-full flex-col items-center text-center ">
                <CardHeader>
                    <CardTitle>{slides[activeIndex].title}</CardTitle>
                    <div className="max-w-[70%] self-center md:max-w-[60%]">
                        {" "}
                        <CardDescription className="text-center">
                            {slides[activeIndex].body}
                        </CardDescription>
                    </div>
                </CardHeader>

                <div>
                    {" "}
                    <DotNavigation
                        activeIndex={activeIndex}
                        numSlides={numSlides}
                    />
                </div>
            </div>

            <div id = "footer" className="grid grid-cols-2 self-end px-2">
                <div className="flex justify-between ">
                    <span className="grid place-content-center rounded-full bg-primary px-1.5 py-2.5 hover:cursor-pointer">
                        <button
                            className="hover:bg-primary-dark mr-2 text-primary-foreground hover:cursor-pointer"
                            onClick={goToPrevSlide}
                            disabled={numSlides <= 1}
                        >
                            <FaChevronLeft size={24} />
                        </button>
                    </span>

                    <span className="grid place-content-center rounded-full bg-primary px-1.5 py-2.5 hover:cursor-pointer">
                        <button
                            className="hover:bg-primary-dark ml-2 text-primary-foreground  hover:cursor-pointer"
                            onClick={goToNextSlide}
                            disabled={numSlides <= 1}
                        >
                            <FaChevronRight size={24} />
                        </button>{" "}
                    </span>
                </div>
                <div className=" hover:cursor-pointeralign-self-end grid">
                    <button>Skip</button>
                </div>
            </div>
            </div>

            

           
        </Card>
    )
}
