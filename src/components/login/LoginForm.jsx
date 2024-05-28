// LoginForm.js
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card";
import InputField from "@/components/shared/custom/InputField";
import { Button } from "@/components/shared/shadcn/button";
import { useState } from "react";
import useFormLogic from "./useFormLogic"; 
import SocialLoginSection from "@/components/shared/custom/SocialLogin";

export default function LoginForm() {
    const { register, handleSubmit, errors, submitting, submitError } = useFormLogic(
        async (data) => {
            // Callback function after successful form submission
            console.log("Form submitted successfully");
            console.log("Data from server:", data); // Data received from the API
        }
    );

    return (
        
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

                <SocialLoginSection 
                
                tagline="Don’t have an account ?"
                linkText="Register here"
                to = {"signup"}/>
            </>
        
    );
}