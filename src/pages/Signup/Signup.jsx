import React, { useState } from "react"
import useMultistepForm from "@/hooks/useMultistepForm"
import Form from "@/pages/Signup/SignupForm"
import ConfirmEmailWithOtp from "@/components/shared/custom/ConfirmEmail"
import ChooseVerification from "@/pages/Signup/VerifyID"
import ScanID from "@/pages/Signup/ScanID"
import { headerHeight } from "@/lib/Constants"
import IdDetails from "./IdDetails"
import ScanSlides from "./data"

const front = ScanSlides[0]
const back = ScanSlides[1]
// Define the steps of the multi-step form
const steps = [
    (props) => <Form {...props} />,
    (props) => <ConfirmEmailWithOtp {...props} type="activate" />,
    (props) => <ChooseVerification {...props} />,
    (props) => <IdDetails {...props} />,
    (props) => (
        <ScanID
            {...props}
            title={front.title}
            subtext={front.subtext}
            imageBody={front.imageBody}
            imageTitle={front.imageTitle}
            image={front.image}
        />
    ),
    (props) => <ScanID {...props}        title={front.title}
    subtext={back.subtext}
    imageBody={back.imageBody}
    imageTitle={back.imageTitle}
    image={back.image}/>,
    // Add other steps as needed
]

function SignupPage() {
    const [formData, setFormData] = useState({})

    const updateFields = (fields) => {
        setFormData((prev) => ({ ...prev, ...fields }))
    }

    const { currentStep, goToNextStep, goToPreviousStep } =
        useMultistepForm(steps)

    return (
        <div
            style={{ minHeight: `calc(100vh - ${headerHeight})` }}
            className="flex h-full w-full items-center justify-center"
        >
            {currentStep({
                next: goToNextStep,
                prev: goToPreviousStep,
                updateFields,
                formData,
            })}
        </div>
    )
}

export default SignupPage
