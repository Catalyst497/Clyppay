import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useForm = (initialValues, validationSchema, onSubmit) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (values, formikHelpers) => {
      try {
        setIsSubmitting(true);
        const submissionResult = await onSubmit(values, formikHelpers);
        if (submissionResult.success) {
          formikHelpers.resetForm();
        } else {
          formikHelpers.setErrors({ apiError: submissionResult.message });
        }
      } catch (error) {
        console.error('Form submission error:', error);
        formikHelpers.setErrors({ apiError: error.message || 'Network error' });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return { formik, isSubmitting };
};

export default useForm;
