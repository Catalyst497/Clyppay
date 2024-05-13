import { useState } from "react"
import { Card, CardDescription, CardTitle } from "@/components/ui/library/Card"


export default function Cards({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0)

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
        <Card
            className="w-[580px] h-full overflow-hidden"
        >
            <div
                id="image-container"
                className="h-2/3 w-full overflow-hidden flex justify-center bg-gradient"
            >
                <div className="w-1/2 grid place-content-center">

                <img
           
                    src={slides[activeIndex].image}
                    alt= {slides[activeIndex].title}
                    className="object-contain"
                />
                </div>
            </div>

            <div className="flex w-full flex-col items-center py-2 ">
                <CardTitle>
                    {slides[activeIndex].title}
                </CardTitle>
                <div className="max-w-[50%]">
                    {" "}
                    <CardDescription className = "text-center">
                        {slides[activeIndex].body}
                    </CardDescription>
                </div>
                <div>{/* pagination here*/}</div>
            </div>

            <div className="grid grid-cols-2 px-2">
                <div className="flex justify-between">
                    <button onClick={goToPrevSlide}>Back </button>
                    <div>Next</div>
                </div>
                <div className="align-self-end grid">
                    <button>Skip</button>
                </div>
            </div>
        </Card>
    )
}
