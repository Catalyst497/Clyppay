import React, { useState } from "react"
import useMultistepForm from "@/hooks/useMultistepForm"
import StepOne from "@/pages/Signup/SignupForm"
import StepTwo from "@/components/shared/custom/ConfirmEmail"
import StepThree from "@/pages/Signup/VerifyID"
import { headerHeight } from "@/lib/Constants"

// Define the steps of the multi-step form
const steps = [
    (props) => <StepOne {...props} />,
    (props) => <StepTwo {...props} />,
    (props) => <StepThree {...props} />,
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
