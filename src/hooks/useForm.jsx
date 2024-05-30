import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useForm = (initialValues, validationSchema, onSubmit) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Formik for form state and validation management
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        await onSubmit(values); // Call the provided onSubmit function
        resetForm(); // Reset the form after successful submission
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return { formik, isSubmitting };
};

export default useForm;
