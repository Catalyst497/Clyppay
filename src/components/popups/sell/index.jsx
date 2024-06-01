import React, { useState } from "react";
import useMultistepForm from "@/hooks/useMultistepForm";
import StepOne from "@/pages/Signup/InitialForm";

// Define the steps of the multi-step form
const steps = [
  (props) => <StepOne {...props} />,
  
];

function SignupPage() {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  } = useMultistepForm(steps);
  

 

  return ( 
    <div>
      {currentStep({
        next: goToNextStep, // Pass function to go to the next step
        prev: goToPreviousStep, // Pass function to go to the previous step
   
      
      })}
    </div>
  );
}

export default SignupPage;
