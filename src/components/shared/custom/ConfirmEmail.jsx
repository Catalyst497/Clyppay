import React, { useState } from "react";
import useForm from "@/hooks/useForm";
import {
  FormCard,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/shared/shadcn/card";
import { Button } from "@/components/shared/shadcn/button";
import * as Yup from "yup";
import { FourDigitPassword } from "@/components/shared/shadcn/inputOtp";
import clyp from "@/assets/icons/logo_icon.svg";
import { api, updateAuthToken } from "@/lib/axiosProvider";
import { useAuth } from "@/context/AuthContext";
import {
  sendPasswordResetEmail,
  activateUser,
  resetUser,
} from "@/lib/apiRequests";

// Validation schema for the OTP form
const validationSchema = {
  otp: Yup.string().length(4, "OTP must be 4 digits").required("Required"),
};

// Initial values for the OTP form
const initialValues = {
  otp: "",
  isResending: false,
  resendMessage: "",
};

const ConfirmEmail = ({ next, prev, formData, type }) => {
  // State to track OTP verification status
  const { setUser } = useAuth();
  const [isVerified, setIsVerified] = useState(false);

  // Submit handler for the OTP form (when user submits each step)

  const onSubmit = async (values, formik) => {
    try {
      console.log("submitting..");

      let response;
      if (type === "activate") {
        response = await activateUser(formData.email, values.otp);
      }
      if (type === "reset") {
        response = await resetUser(formData.email, values.otp);
      }

      const data = response?.data;
      console.log(response);
      if (data?.message === "success") {
        setIsVerified(true);
        setUser(data.user_data);
        formik.setStatus("success");
        updateAuthToken(data.token);
        next();
        return { success: true };
      } else {
        console.log(data);
        formik.setStatus("failed");
        formik.setErrors({ apiError: data?.details });
        return {
          success: false,
        };
      }
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data || "error");
      formik.setStatus("failed");
      formik.setErrors({
        apiError:
          error?.response?.data ||
          error?.message ||
          "An unexpected error occurred. Please try again.",
      });
      return { success: false };
    }
  };

  // Resend OTP code
  const handleResend = async (event, formik) => {
    event.preventDefault();
    formik.setFieldValue("isResending", true);
    formik.setFieldValue("resendMessage", "");
    const response = await sendPasswordResetEmail(formData);
    formik.setFieldValue("isResending", false);

    if (response.success) {
      formik.setFieldValue("resendMessage", "Code sent successfully!");
    } else {
      formik.setFieldValue(
        "resendMessage",
        response.error || "Failed to send code."
      );
    }
  };

  // Custom hook to handle form state and validation
  const { formik, isSubmitting } = useForm(
    initialValues,
    validationSchema,
    onSubmit
  );

  return (
    <FormCard>
      <CardHeader className="flex flex-col items-center">
        <div className="pb-5">
          <img src={clyp} alt="Clyp" width="40px" />
        </div>
        <CardTitle className="text-center">
          Confirm your email address
        </CardTitle>
        <CardDescription className="text-center">
          Please enter the OTP sent to your email address{" "}
          <b>{formData.email}</b>
        </CardDescription>
      </CardHeader>

      {/* Render OTP input form if not verified */}
      <FourDigitPassword
        name={"otp"}
        value={formik.values.otp}
        onChange={(fieldName, fieldValue) =>
          formik.setFieldValue(fieldName, fieldValue)
        }
        onBlur={formik.handleBlur}
        error={formik.errors.otp}
        onComplete={(value) => {
          formik.handleSubmit();
        }}
        touched={formik.touched.otp}
        previouslyFocused={() => formik.setTouched({ otp: true })}
        apiError={formik.errors.apiError?.error || formik.errors.apiError}
        status={formik.status}
      />

      <p className="text-center text-sm">
        Didn't receive the code{" "}
        <button
          className="capitalize text-primary"
          onClick={(event) => handleResend(event, formik)}
          disabled={formik.values.isResending}
        >
          {formik.values.isResending ? "Resending..." : "resend code"}
        </button>
      </p>

      {/* Display status message */}
      {formik.values.resendMessage && (
        <p className="text-center text-sm mt-2">
          {formik.values.resendMessage}
        </p>
      )}

      {/* Render success message if OTP verified */}
      <Button
        size="full"
        className="mt-2"
        disabled={!isVerified}
        onClick={next}
      >
        {isSubmitting ? "verifying" : "Continue"}
      </Button>
    </FormCard>
  );
};

export default ConfirmEmail;
