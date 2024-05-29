import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useFormValidation = (initialValues, validationSchema, onSubmit) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        await onSubmit(values);
        resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });
console.log(formik)
  return { formik, isSubmitting };
};

export default useFormValidation;
