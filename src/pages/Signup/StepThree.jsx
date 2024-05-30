import React from 'react';
import useForm from '@/hooks/useForm';
import {
  FormCard,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/shared/shadcn/card';
import { Button } from '@/components/shared/shadcn/button';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import * as Yup from 'yup';

// Validation schema for the form
const validationSchema = {
  nationality: Yup.string().required('Required'),
  verificationMethod: Yup.string().required('Required'),
};

// Initial values for the form
const initialValues = {
  nationality: '',
  verificationMethod: '',
};

// Options for the verification methods
const verificationMethods = [
  { value: 'passport', label: 'Passport' },
  { value: 'nationalId', label: 'National ID' },
  { value: 'driverLicense', label: "Driver's License "},
];

const VerifyID = ({ next, prev, updateFields, formData }) => {
  // Submit handler for the form
  const onSubmit = (values) => {
    updateFields(values); // Update the form data with the current values
    next(); // Proceed to the next step
  };

  // Custom hook to handle form state and validation
  const { formik, isSubmitting } = useForm(initialValues, validationSchema, onSubmit);

  // Get country options
  const options = countryList().getData();

  return (
    <FormCard>
      <CardHeader className="flex flex-col items-center">
        <CardTitle>ID Verification</CardTitle>
        <CardDescription className="text-center">
          Please select your nationality and choose a verification method
        </CardDescription>
      </CardHeader>

      <form onSubmit={formik.handleSubmit}>
        {/* Nationality selection dropdown */}
        <div className="mb-4">
          <Select
            name="nationality"
            options={options}
            value={options.find(option => option.value === formik.values.nationality)}
            onChange={option => formik.setFieldValue('nationality', option.value)}
            onBlur={formik.handleBlur}
          />
          {formik.errors.nationality && formik.touched.nationality && (
            <div className="text-red-500 text-sm">{formik.errors.nationality}</div>
          )}
        </div>

        {/* Verification method radio buttons */}
        <div className="mb-4">
          {verificationMethods.map(method => (
            <div key={method.value} className="flex items-center mb-2">
              <input
                type="radio"
                name="verificationMethod"
                value={method.value}
                checked={formik.values.verificationMethod === method.value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="ml-2">{method.label}</label>
            </div>
          ))}
          {formik.errors.verificationMethod && formik.touched.verificationMethod && (
            <div className="text-red-500 text-sm">{formik.errors.verificationMethod}</div>
          )}
        </div>

        <Button type="submit" size="full" className="mt-4" disabled={isSubmitting}>
          {isSubmitting ? "Verifying..." : "Submit"}
        </Button>
      </form>

      <Button size="full" className="mt-2" onClick={prev}>
        Back
      </Button>
    </FormCard>
  );
};

export default VerifyID;
