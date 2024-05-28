// LoginForm.js
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card";
import InputField from "@/components/shared/custom/InputField";
import { Button } from "@/components/shared/shadcn/button";
import { useState } from "react";
import Modal from "@/components/shared/custom/Modal";
import useFormLogic from "./useFormLogic"; 
import SocialLoginSection from "@/components/shared/custom/SocialLogin";

export default function ForgotForm({next}) {
    async function onSubmit(data) {
        // Your API call logic here
        // updateFields(data)
        console.log(data)
        next();
    }
   const [submitting,setSubmitting] = useState()
    const {
        register,
        handleSubmit,
        errors,
    } = useFormLogic(onSubmit)
    function handleLoginRedirect(){
        return("redirecting..")
    }

    return (

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

                <div className="text-center text-sm md:text-sm py-5">
                    <span className="">Remember Password?</span>
                    <button className="text-primary mr-1" onClick={handleLoginRedirect}>Login</button>
                </div>

           
            </>
        
    );
}