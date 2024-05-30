import React, { useState } from "react";
import useForm from "@/hooks/useForm";
import { FormCard, CardTitle, CardDescription, CardHeader } from "@/components/shared/shadcn/card";
import { Button } from "@/components/shared/shadcn/button";
import * as Yup from "yup";
import { FourDigitPassword } from "@/components/shared/shadcn/inputOtp";
import EnterOtp from "@/components/shared/custom/EnterOtp";

// Validation schema for the OTP form
const validationSchema = {
  otp: Yup.string().length(4, "OTP must be 4 digits").required("Required"),
};

// Initial values for the OTP form
const initialValues = {
  otp: "",
};

const ConfirmEmail = ({ next, prev, updateFields, formData }) => {
  // State to track OTP verification status
  const [isVerified, setIsVerified] = useState(false);

  // Submit handler for the OTP form (when user submits each step)
  const onSubmit = (values) => {
    updateFields(values); // Update the form data with the OTP
    setIsVerified(true); // Set OTP verification status to true
    // Proceed to the next step
    next();
  };

  // Custom hook to handle form state and validation
  const { formik, isSubmitting } = useForm(initialValues, validationSchema, onSubmit);

  return (
    <FormCard>
      <CardHeader className="flex flex-col items-center">
        <CardTitle>Email Confirmation</CardTitle>
        <CardDescription className="text-center">
          Please enter the OTP sent to your email address <b>{formData?.email}</b>
        </CardDescription>
      </CardHeader>

      {/* Render OTP input form if not verified */}
      {!isVerified && (
        <form>
          <FourDigitPassword
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.otp}
            onComplete={formik.handleSubmit}
          />


        </form>
      )}

      {/* Render success message if OTP verified */}
      {isVerified && <p>OTP Verified Successfully!</p>}

      <Button size="full" className="mt-2" onClick={next}>
        Continue
      </Button>
    </FormCard>
  );
};

export default ConfirmEmail;
