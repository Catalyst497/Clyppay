import Modal from "@/components/ui/Modal"
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"

import { Button } from "@/components/shadcn/Button"
import React, {useState} from "react"
import slides from "./data"
export default function SubmitDocuments() {
 
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1));
    };

    return (
        <Modal>
            <CardHeader>
                <CardTitle>Submit documents</CardTitle>
                <CardDescription>
                    We are required by law to verify your identity by collecting
                    your ID and selfie
                </CardDescription>
            </CardHeader>

            <div className="flex flex-col items-center gap-3 text-center my-4">
                <div className="grid w-1/2 place-content-center">
                    <img
                        src={slides[activeIndex].image}
                        alt={slides[activeIndex].title}
                        className="object-contain"
                    />
                </div>
                <CardTitle>{slides[activeIndex].imageTitle}</CardTitle>
                <CardDescription className="text-center">
                            {slides[activeIndex].imageBody}
                        </CardDescription>
            </div>

            <Button size="full" className={`my-4`} onClick={goToNextSlide}>
               Capture
            </Button>
        </Modal>
    )
}
