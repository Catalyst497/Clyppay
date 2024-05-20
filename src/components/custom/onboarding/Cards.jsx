import { useState } from "react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/Card"
import DotNavigation from "@/components/reusables/DotNavigation"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Cards({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const numSlides = slides.length

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex !== numSlides - 1
                ? prevIndex + (1 % numSlides)
                : prevIndex,
        )
    }

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex !== 0
                ? prevIndex - 1 + (numSlides % numSlides)
                : prevIndex,
        )
    }

    return (
        <Card className="flex h-full w-[300px] flex-col justify-between overflow-hidden md:w-[580px]">
            <div className="flex h-1/2 w-full justify-center overflow-hidden bg-gradient md:h-3/5">
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
                <div className="flex w-[75%] justify-between md:w-[50%]">
                    <span className="flex items-center gap-4 hover:cursor-pointer">
                        <button
                            className={`grid place-content-center rounded-full px-2 py-2 ${activeIndex !== 0 ? "bg-primary" : "bg-muted"} hover:bg-primary-dark text-primary-foreground`}
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
                            className={`grid place-content-center rounded-full px-2 py-2 ${activeIndex !== numSlides - 1 ? "bg-primary" : "bg-muted"} hover:bg-primary-dark text-primary-foreground`}
                            onClick={goToNextSlide}
                            disabled={numSlides <= 1}
                        >
                            <FaChevronRight size={20} />
                        </button>{" "}
                    </span>
                </div>
                <div className="flex justify-end hover:cursor-pointer">
                    <Link to={"/dashboard"}> Skip</Link>
                </div>
            </div>
        </Card>
    )
}
