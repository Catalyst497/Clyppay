import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import clyp from "@/assets/icons/logo_icon.svg"
import checkboxes from "@/assets/images/Checkboxes.svg"
import { Button } from "@/components/shared/shadcn/button"
import { useNavigate } from "react-router-dom"

const ResetSuccess = ({ next, updateFields, formData }) => {
    const navigate = useNavigate()
 


    return (
        <FormCard>
            <CardHeader className="flex flex-col items-center">
                <div className="pb-5">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div>
                <img src={checkboxes} alt="success" width="80px" />

                <CardTitle className = "text-center">Password Change Successful</CardTitle>
                <CardDescription className="text-center">
                Your Password has been changed successfully
                </CardDescription>
            </CardHeader>

            <Button
                type="submit"
                size="full"
                className="mt-4"
                onClick={navigate("/login")}
            >
                Proceed to Login
            </Button>
        </FormCard>
    )
}

export default ResetSuccess
