import { useState } from "react";

const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);


  const currentStep = steps[currentStepIndex];
  // console.log(currentStep)

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



  return {
    currentStepIndex,
    setCurrentStepIndex,
    currentStep,
    isLastStep: currentStepIndex === steps - 1,
    isFirstStep: currentStepIndex === 0,
    goToNextStep,
    goToPreviousStep,
    goTo,
  };
};

export default useMultistepForm;
