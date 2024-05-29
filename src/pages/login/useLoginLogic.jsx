import useFormValidation from '@/hooks/useFormValidation';
import * as Yup from 'yup';

const loginSchema = {
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol'
    ),
};

const initialValues = {
  email: '',
  password: '',
};

async function onSubmit(values) {
  // Submit logic
  console.log('Form submitted with values:', values);
  // Example: send form data to backend
  // const response = await fetch('/api/submitForm', {
  //   method: 'POST',
  //   body: JSON.stringify(values),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // if (response.ok) {
  //   console.log('Form submitted successfully');
  // } else {
  //   throw new Error('Form submission failed');
  // }
}

export default function useLoginLogic() {
  const { formik, isSubmitting } = useFormValidation(initialValues, loginSchema, onSubmit);

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return {
    formik,
    isSubmitting,
    handleSubmit,
  };
}
