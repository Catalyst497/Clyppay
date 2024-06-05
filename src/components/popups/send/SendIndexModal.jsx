import React, { useState } from "react";
import useMultistepForm from "@/hooks/useMultistepForm";
import StepOne from "./SendForm";
import StepTwo from "@/components/shared/custom/EnterPin";

// Define the steps of the multi-step form
const steps = [
    (props) => <StepOne {...props} />,
    (props) => (
        <StepTwo
            title="Create Transaction Pin"
            subtext="Create transaction pin to complete transaction."
            buttonText="Create Pin"
            {...props}
        />
    ),
];

function SendIndexModal() {
    const [formData, setFormData] = useState({});

    const updateFields = (fields) => {
        setFormData((prev) => ({ ...prev, ...fields }));
    };

    const { currentStep, goToNextStep, goToPreviousStep } = useMultistepForm(steps);

    return (
        <div className="w-full h-full">
          
            {currentStep({
                updateFields,
                formData,
                next: goToNextStep,
                prev: goToPreviousStep,
            })}
        </div>
    );
}

export default SendIndexModal;
