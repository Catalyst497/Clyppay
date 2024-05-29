import React from "react";
import {
  FormCard,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/shared/shadcn/card";
import InputField from "@/components/shared/custom/InputField";
import SocialLoginSection from "@/components/shared/custom/SocialLogin";
import useLoginLogic from "./useSignupLogic";
import clyp from "@/assets/icons/logo_icon.svg";
import { Button } from "@/components/shared/shadcn/button";
import { headerHeight } from "@/lib/Constants";
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/shared/shadcn/formElements";

function Signup() {
  const { formik, isSubmitting, handleSubmit } = useLoginLogic();

  return (
    <div
      style={{ minHeight: `calc(100vh - ${headerHeight})` }}
      className="flex h-full w-full items-center justify-center"
    >
      <FormCard>
        <CardHeader className="flex flex-col items-center">
          <div className="pb-5">
            <img src={clyp} alt="Clyp" width="40px" />
          </div>

          <CardTitle className="">Welcome to Clyp!</CardTitle>
          <CardDescription className="text-center">
            To create an account with Clyppay, please put in your email address
            in the field below
          </CardDescription>
        </CardHeader>

        <FloatingLabelInput
          name="email"
          type="email"
          value={formik.values?.email}
          label="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
        />

        <FloatingLabelInput
          name="phone"
          type="number"
          label="Phone Number"
          value={formik.values?.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
        />

        <FloatingLabelInput
          name="password"
          type="password"
          label="Password"
          value={formik.values?.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
        />

        <Button
          size="full"
          className="mt-4"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Continue"}
        </Button>

        <SocialLoginSection
          tagline="Already have an account ?"
          linkText="Log in"
          to={"/login"}
        />
      </FormCard>
    </div>
  );
}

export default Signup;
