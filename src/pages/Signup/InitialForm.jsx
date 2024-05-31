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
import { api, handleApiError , updateAuthToken} from "@/lib/axiosProvider"




const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
const validationSchema = {
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().required('Required'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(regex,
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol'
  )
  .required('Required'),};

const initialValues = {
  email: '',
  phone: '',
  password: '',
};

const StepOne = ({ next, updateFields, formData }) => {
  const onSubmit = (values) => {
    updateFields(values);
    const onSubmit = async (values) => {
      try {
        // Merge the form values with the existing formData
        const updatedFormData = { ...formData, ...values }
        
        // Perform API call to create the user
        console.log(updatedFormData)
        const response = await api.post("/register", updatedFormData)

          
          // Check if the API call was successful
          if (response.status === 200) {
              // Proceed to the next step
              // next();
              await updateAuthToken(response?.data?.token)

            } else {
              // Handle API error
              console.error("Error creating user:", response.data.error)
              console.log(updatedFormData)
              // Display error message to the user
              // You can also handle errors by setting formik errors
          }
      } catch (error) {
          // Handle network error
          console.error("Network error:", error)
          // Display error message to the user
          // You can also handle errors by setting formik errors
      }
  }
  };

  const { formik, isSubmitting } = useForm(initialValues, validationSchema, onSubmit);

  return (
    <FormCard>
      <CardHeader className="flex flex-col items-center">
        <div className="pb-5">
          <img src={clyp} alt="Clyp" width="40px" />
        </div>

        <CardTitle>Welcome to Clyp!</CardTitle>
        <CardDescription className="text-center">
          To create an account with Clyppay, please put in your email address in the field below
        </CardDescription>
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

        <FloatingLabelInput
          name="phone"
          type="text"
          label="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone}
        />

        <FloatingLabelInput
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
        />

        <Button type="submit" size="full" className="mt-4" disabled={isSubmitting} onClick={() => {
          formik.handleSubmit()
        }}>
          {isSubmitting ? "Creating account..." : "Continue"}
        </Button>
      </form>

      <SocialLoginSection
        tagline="Already have an account?"
        linkText="Log in"
        to="/login"
      />
    </FormCard>
  );
};

export default StepOne;
