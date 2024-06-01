import React, { useState } from "react";
import useMultistepForm from "@/hooks/useMultistepForm";
import StepOne from "./SendForm";
import StepTwo from "@/components/shared/custom/EnterPin";
// Define the steps of the multi-step form
const steps = [
  (props) => <StepOne {...props} />,
  (props) => <StepOne title = "Create Transaction Pin" subtext = "Create transaction pin to complete transaction." buttonText = "Create Pin" {...props} />,
  
];

function SignupPage() {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  } = useMultistepForm(steps);
  

 

  return ( 
    <div className="w-full">
      {currentStep({
        next: goToNextStep, // Pass function to go to the next step
        prev: goToPreviousStep, // Pass function to go to the previous step
   
      
      })}
    </div>
  );
}

export default SignupPage;
