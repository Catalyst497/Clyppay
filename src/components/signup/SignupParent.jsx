import useMultistepForm from "@/hooks/useMultistepForm";
import { useState } from "react";
import Modal from "@/components/shared/custom/Modal";
import SignupForm from "./SignupForm";
import ConfirmEmail from "./ConfirmEmail";
import EnterOtp from "@/components/shared/custom/EnterOtp";
import KYC from "./KYC";
import IdCardForm from "./IdCardForm";
import SubmitDocuments from "./SubmitDocuments";

export default function Parent() {
    const steps = [
        (props) => <SignupForm {...props} />,
        (props) => <ConfirmEmail {...props} />,
        (props) => <EnterOtp {...props} />,
        (props) => <IdCardForm {...props} />,
        (props) => <SubmitDocuments {...props} />,
        (props) => <KYC {...props} />,
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
        <Modal name="Sign up" handleOpen = {() => setIsOpen(true)} isOpen={isOpen} closeModal={resetSteps}>
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
