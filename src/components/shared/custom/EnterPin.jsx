import React, { useState } from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import { Button } from "@/components/shared/shadcn/button"
import * as Yup from "yup"
import { FourDigitPassword } from "@/components/shared/shadcn/inputOtp"
import clyp from "@/assets/icons/logo_icon.svg"
import { api, updateAuthToken } from "@/lib/axiosProvider"
import { useAuth } from "@/context/AuthContext"
import { activateUser, resetUser } from "@/lib/apiRequests"

// Validation schema for the OTP form
const validationSchema = {
    pin: Yup.string().length(4, "Pin must be 4 digits").required("Required"),
}

// Initial values for the OTP form
const initialValues = {
    pin: "",

}

const ConfirmEmail = ({ next, prev, formData, type }) => {
    // State to track pin verification status
    const { setUser } = useAuth()
    

    // Submit handler for the OTP form (when user submits each step)

    const onSubmit = async (values, formik) => {
        try {
            console.log("submitting..")
            next();

            // const data = response?.data
            // console.log(response)
            // if (data?.message === "success") {
            //     //sets token, verified status, success status and sets user in state
            //     setIsVerified(true)
            //     setUser(data?.user_data)
            //     formik.setStatus("success")
            //     updateAuthToken(data?.token)
            //     next()
            //     return { success: true }
            // } else {
            //     console.log(data)
            //     formik.setStatus("failed")
            //     formik.setErrors({ apiError: data?.details })
            //     return {
            //         success: false,
            //     }
            // }
        } catch (error) {
            console.log(error)
            console.log(error?.response?.data?.error)
            formik.setStatus("failed")
            formik.setErrors({
                apiError:
                    error?.response?.data?.details ||
                    error?.response?.data?.error ||
                    error?.message ||
                    "Network Error",
            })
            return { success: false }
        }
    }

    // Custom hook to handle form state and validation
    const { formik, isSubmitting } = useForm(
        initialValues,
        validationSchema,
        onSubmit,
    )

    return (
        <div className="flex flex-col justify-between h-full">
            
                <CardHeader className="mt-5 flex flex-col items-center">
                    <CardTitle className="text-center">
                    Transaction Pin
                    </CardTitle>
                    <CardDescription className="text-center">
                    Input transaction pin to complete transaction.
                    </CardDescription>
                </CardHeader>

                {/* Render OTP input form if not verified */}
                <FourDigitPassword
                    name={"pin"}
                    value={formik.values.pin}
                    onChange={(fieldName, fieldValue) =>
                        formik.setFieldValue(fieldName, fieldValue)
                    }
                    onBlur={formik.handleBlur}
                    error={formik.errors.pin}
                    onComplete={(value) => {
                        formik.handleSubmit()
                    }}
                    touched={formik.touched.pin}
                    previouslyFocused={() => formik.setTouched({ pin: true })}
                    apiError={formik.errors.apiError}
                    status={formik.status}
                />
           

            {/* Render success message if OTP verified */}
            <Button
                size="full"
                className="mb-2"
                // disabled={!isVerified}
                onClick={formik.handleSubmit}
            >
                Create Pin
            </Button>
        </div>
    )
}

export default ConfirmEmail
