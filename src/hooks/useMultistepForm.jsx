import { useState } from "react";

const useMultistepForm = (initialSteps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formValues, setFormValues] = useState(initialSteps);

  const currentStep = formValues[currentStepIndex];

  const goToNextStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex < formValues.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const updateFormValues = (updatedStepValues) => {
    setFormValues((prevValues) =>
      prevValues.map((step, index) =>
        index === currentStepIndex ? { ...step, ...updatedStepValues } : step
      )
    );
  };

  return {
    currentStepIndex,
    currentStep,
    isLastStep: currentStepIndex === formValues.length - 1,
    isFirstStep: currentStepIndex === 0,
    goToNextStep,
    goToPreviousStep,
    updateFormValues,
  };
};

export default useMultistepForm;
