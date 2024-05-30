import { useState } from 'react';

const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const currentStep = steps[currentStepIndex];

  // Function to go to the next step
  const goToNextStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex < steps.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Function to go to the previous step
  const goToPreviousStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Function to go to a specific step
  const goTo = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };

  return {
    currentStepIndex,
    currentStep,
    isLastStep: currentStepIndex === steps.length - 1,
    isFirstStep: currentStepIndex === 0,
    goToNextStep,
    goToPreviousStep,
    goTo,
  };
};

export default useMultistepForm;
