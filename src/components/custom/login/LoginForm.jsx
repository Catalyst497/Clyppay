// LoginForm.js
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card";
import InputField from "@/components/reusables/InputField";
import { Button } from "@/components/shadcn/Button";
import { useState } from "react";
import Modal from "@/components/reusables/Modal";
import useFormLogic from "./useFormLogic"; 
import SocialLoginSection from "@/components/reusables/SocialLogin";

export default function LoginForm() {
    const { register, handleSubmit, errors, submitting, submitError } = useFormLogic(
        async (data) => {
            // Callback function after successful form submission
            console.log("Form submitted successfully");
            console.log("Data from server:", data); // Data received from the API
        }
    );

    return (
        <Modal name="Login">
            <>
                <CardHeader>
                    <CardTitle>Login your account</CardTitle>
                    <CardDescription>
                        To log in your account with Clyppay, please put in your email address and password in the field below to pay, please put in your email
                        address in the field below
                    </CardDescription>
                </CardHeader>

                {submitError && (
                    <p className="text-red-500">{submitError}</p>
                )}

                <InputField
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    register={register}
                    errors={errors}
                />

                <InputField
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    register={register}
                    errors={errors}
                />

                <Button
                    size="full"
                    className="mt-4"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {submitting ? "Logging in..." : "Log in"}
                </Button>

                <SocialLoginSection />
            </>
        </Modal>
    );
}