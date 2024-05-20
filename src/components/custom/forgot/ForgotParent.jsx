import useMultistepForm from "@/hooks/useMultistepForm";
import { useState } from "react";
import Modal from "@/components/reusables/Modal";
import ForgotForm from "./ForgotForm";
import EnterOtp from "@/components/reusables/EnterOtp";

export default function Parent() {
    const steps = [
        (props) => <ForgotForm {...props} />,
        (props) => <EnterOtp {...props} />
    ];

    const [isOpen, setIsOpen] = useState(false);

    const {
        currentStepIndex,
        setCurrentStepIndex,
        currentStep,
        goToNextStep,
        goToPreviousStep,
    } = useMultistepForm(steps);

    const resetSteps = () => {
        setCurrentStepIndex(0);
        setIsOpen(false);
    };

    return (
        <Modal name="Forgot password" handleOpen={() => setIsOpen(true)} isOpen={isOpen} closeModal={resetSteps}>
            {currentStep({
                next: goToNextStep,
                prev: goToPreviousStep,
                closeModal: resetSteps,
            })}
        </Modal>
    );
}
