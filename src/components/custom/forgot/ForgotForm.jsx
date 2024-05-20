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
                    <CardTitle>Forgot Password ?</CardTitle>
                    <CardDescription>
                    Don’t worry! It happens. Please enter the email or phone number associated with your account.
                    </CardDescription>
                </CardHeader>

               

                <InputField
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    register={register}
                    errors={errors}
                />

                

                <Button
                    size="full"
                    className="mt-4"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {submitting ? "Sending code..." : "Send code"}
                </Button>

                <div className="text-center text-sm md:text-sm">
                    <span className="">Remember Password?</span>
                    <button className="text-primary mr-1" onClick={handleResendEmail}>Login</button>
                </div>

                <SocialLoginSection />
            </>
        </Modal>
    );
}