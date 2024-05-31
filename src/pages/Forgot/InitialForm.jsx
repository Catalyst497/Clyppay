import React from "react";
import useForm from "@/hooks/useForm";
import {
  FormCard,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/shared/shadcn/card";
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput";
import SocialLoginSection from "@/components/shared/custom/SocialLogin";
import clyp from "@/assets/icons/logo_icon.svg";
import { Button } from "@/components/shared/shadcn/button";
import * as Yup from "yup"

const validationSchema = {
  email: Yup.string().email('Invalid email address').required('Required'),
}

const initialValues = {
  email: '',

};

const InitialForm = ({ next, updateFields, formData }) => {
  const onSubmit = (values) => {
      console.log("first")
    updateFields(values);
    next();
  };

  const { formik, isSubmitting } = useForm(initialValues, validationSchema, onSubmit);

  return (
    <FormCard>
      <CardHeader className="flex flex-col items-center">
        <div className="pb-5">
          <img src={clyp} alt="Clyp" width="40px" />
        </div>

        <CardTitle>Forgot Password</CardTitle>
        <CardDescription className="text-center">
        Don’t worry! It happens. Please enter the email or phone number associated with your account.        </CardDescription>
      </CardHeader>

      <form onSubmit={formik.handleSubmit}>
        <FloatingLabelInput
          name="email"
          type="email"
          label="Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
        />


        <Button type="submit" size="full" className="mt-4" disabled={isSubmitting || formik.values.email === ""}>
          {isSubmitting ? "Sending Code..." : "Send Code"}
        </Button>
      </form>

      <SocialLoginSection
        tagline="Remember Password?"
        linkText="Log in"
        to="/login"
        showOptions = {false}
      />
    </FormCard>
  );
};

export default InitialForm;
