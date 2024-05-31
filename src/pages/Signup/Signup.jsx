import React, { useState } from "react";
import useMultistepForm from "@/hooks/useMultistepForm";
import StepOne from "@/pages/Signup/InitialForm";
import StepTwo from "@/components/shared/custom/ConfirmEmail";
import StepThree from "@/pages/Signup/VerifyID"; // Import the new step
import { headerHeight } from "@/lib/Constants";

// Define the steps of the multi-step form
const steps = [
  (props) => <StepOne {...props} />,
  (props) => <StepTwo {...props} />,
  (props) => <StepThree {...props} />,
  // Add other steps as needed
];

function SignupPage() {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  } = useMultistepForm(steps);
  

 

  return ( 
    <div style={{ minHeight: `calc(100vh - ${headerHeight})` }} className="flex h-full w-full items-center justify-center">
      {currentStep({
        next: goToNextStep, // Pass function to go to the next step
        prev: goToPreviousStep, // Pass function to go to the previous step
   
      
      })}
    </div>
  );
}

export default SignupPage;
