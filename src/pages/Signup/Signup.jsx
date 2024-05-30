import React, { useState } from "react";
import useMultistepForm from "@/hooks/useMultistepForm";
import StepOne from "@/pages/Signup/StepOne";

import { headerHeight } from "@/lib/Constants";

const steps = [
  (props) => <StepOne {...props} />,
  // (props) => <ConfirmEmail {...props} />,
  // (props) => <EnterOtp {...props} />,
  // (props) => <IdCardForm {...props} />,
  // (props) => <SubmitDocuments {...props} />,
  // (props) => <KYC {...props} />,
];

function SignupPage() {
  const {
    currentStepIndex,
    setCurrentStepIndex,
    currentStep,
    goToNextStep,
    goToPreviousStep,
    l,
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
    <div style={{ minHeight: `calc(100vh - ${headerHeight})` }}>
      {currentStep({
        next: goToNextStep,
        prev: goToPreviousStep,
        updateFields,
        formData,
      })}
    </div>
  );
}

export default SignupPage;



