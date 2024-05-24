import { useState } from "react"

export default function useSlideLogic(slides){
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

    return {goToNextSlide,goToPrevSlide,activeIndex,numSlides}
}