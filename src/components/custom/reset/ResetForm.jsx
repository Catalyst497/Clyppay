// LoginForm.js
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import InputField from "@/components/reusables/InputField"
import { Button } from "@/components/shadcn/Button"
import Modal from "@/components/reusables/Modal"
import useFormLogic from "./useFormLogic"
import { useState } from "react"

export default function ResetForm() {
    const [isSuccessful, setIsSuccessful] = useState()
    const { register, handleSubmit, errors, submitting, submitError } =
        useFormLogic(async (data) => {
            // Callback function after successful form submission
            console.log("Form submitted successfully")
            console.log("Data from server:", data) // Data received from the API

            setIsSuccessful(true)
        })

    return (
        <Modal name="Reset">
            
                <CardHeader>
                    <CardTitle>Reset Password</CardTitle>
                    <CardDescription>
                        Don’t worry! It happens. Please enter the email or phone
                        number associated with your account.
                    </CardDescription>
                </CardHeader>

                {!isSuccessful && (
                    <>
                        {" "}
                        <InputField
                            name="newPassword"
                            label="Password"
                            type="password"
                            placeholder="Enter New Password"
                            register={register}
                            errors={errors}
                        />
                        <InputField
                            name="confirmNewPassword"
                            type="password"
                            label="Confirm new password"
                            register={register}
                            // defaultValue={formData.confirmPassword || ""} // Prefill with existing form data
                            placeholder="Confirm New Password"
                            onChange={null}
                            errors={errors}
                        />
                    </>
                )}

                <Button
                    size="full"
                    className="mt-4"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {isSuccessful ? "Back To Login" : "Reset Password"}{" "}
                </Button>
            
        </Modal>
    )
}
