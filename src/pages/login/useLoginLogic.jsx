import useForm from '@/hooks/useForm';
import * as Yup from 'yup';

// Validation schema for the login form
const loginSchema = {
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol'
    ),
};

// Initial values for the login form
const initialValues = {
  email: '',
  password: '',
};

// Function to handle form submission
async function onSubmit(values) {
  // Example logic for form submission
  console.log('Form submitted with values:', values);
  // Send form data to backend (this is just an example)
  // const response = await fetch('/api/login', {
  //   method: 'POST',
  //   body: JSON.stringify(values),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // if (response.ok) {
  //   console.log('Login successful');
  // } else {
  //   throw new Error('Login failed');
  // }
}

// Custom hook to manage form validation logic
export default function useLoginLogic() {
  const { formik, isSubmitting } = useForm(initialValues, loginSchema, onSubmit);

  // Function to trigger form submission
  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return {
    formik,
    isSubmitting,
    handleSubmit,
  };
}
