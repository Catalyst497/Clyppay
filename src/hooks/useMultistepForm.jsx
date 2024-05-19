import { useState } from "react";

const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);


  const currentStep = steps[currentStepIndex];

  const goToNextStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex < steps.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };
  const goTo = (index) => {
    setCurrentStepIndex(index) 
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
