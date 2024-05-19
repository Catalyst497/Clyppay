import useMultistepForm from "@/hooks/useMultistepForm";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import SignupForm from "./SignupForm";
import ConfirmEmail from "./ConfirmEmail";

export default function Parent() {
  const steps = [
    (props) => <SignupForm {...props} />,
    (props) => <ConfirmEmail {...props} />,
  ];

  const {
    currentStepIndex,
    currentStep,
    goToNextStep,
    goToPreviousStep,
  } = useMultistepForm(steps);

  const [formData, setFormData] = useState({});

  const updateFields = (fields) => {  
    setFormData((prev) => ({ ...prev, ...fields }));
  };

 


  console.log(currentStep);

  return (
    <Modal name="Sign up"  >

      {currentStep({
        next: goToNextStep,
        prev: goToPreviousStep,
        updateFields,
        formData,
      })}
    </Modal>
  );
}
