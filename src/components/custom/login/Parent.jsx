import useMultistepForm from "@/hooks/useMultistepForm";
import { useState } from "react";
import Modal from "@/components/ui/Modal";


export default function Parent() {
    const steps = [
        (props) => <SignupForm {...props} />,
      
    ];

    const [isOpen, setIsOpen] = useState(true);

    const {
        currentStepIndex,
        setCurrentStepIndex,
        currentStep,
        goToNextStep,
        goToPreviousStep,
    } = useMultistepForm(steps);

    const [formData, setFormData] = useState({});

    const updateFields = (fields) => {
        setFormData((prev) => ({ ...prev, ...fields }));
    };

    const resetSteps = () => {
        setCurrentStepIndex(0);
        setIsOpen(false);
    };

    console.log(currentStep);

    return (
        <Modal name="Log in" handleOpen = {() => setIsOpen(true)} isOpen={isOpen} closeModal={resetSteps}>
            {currentStep({
                next: goToNextStep,
                prev: goToPreviousStep,
                updateFields,
                formData,
                closeModal: resetSteps,
            })}
        </Modal>
    );
}
