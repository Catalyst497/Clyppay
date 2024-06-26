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
        const response = await onSubmit(values, formikHelpers);
        console.log(response)
        if (response?.success) {
         return formikHelpers.resetForm();
        }
       
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
