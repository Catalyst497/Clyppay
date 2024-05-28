// useFormLogic.js
import { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios"; // Import Axios

const useFormLogic = (onSubmit) => {
    const {
        register,
        handleSubmit: handleSubmitForm,
        formState: { errors },
    } = useForm();

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleSubmit = async (data) => {
        setSubmitting(true);
        onSubmit(); // You can pass any data received from the API
        // try {
        //     // Make Axios POST request to your API
        //     const response = await axios.post("YOUR_API_ENDPOINT", data);
        //     // Call onSubmit function after successful request
        // } catch (error) {
        //     setSubmitError(error.message);
        // } finally {
        //     setSubmitting(false);
        // }
    };

    return {
        register,
        handleSubmit: handleSubmitForm(handleSubmit),
        errors,
        submitting,
        submitError,
    };
};

export default useFormLogic;
