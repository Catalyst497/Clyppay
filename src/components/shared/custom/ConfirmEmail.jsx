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
import { api, updateAuthToken, returnApiError } from "@/api/axiosProvider"
import { useAuth } from "@/context/AuthContext"
import { activateUser, resetUser } from "@/api/apiRequests"
import PropTypes from "prop-types"

// Validation schema for the OTP form
const validationSchema = {
    otp: Yup.string().length(4, "OTP must be 4 digits").required("Required"),
}

// Initial values for the OTP form
const initialValues = {
    otp: "",
    isResending: false,
    resendMessage: "",
}

const ConfirmEmail = ({ next, formData, type }) => {
    // State to track OTP verification status
    const { setUser } = useAuth()
    const [isVerified, setIsVerified] = useState(false)

    // Submit handler for the OTP form (when user submits each step)

    const onSubmit = async (values, formik) => {
        try {
            console.log("submitting..")
            let response
            if (type === "activate") {
                response = await activateUser(formData?.id, values.otp)
            }
            if (type === "reset") {
                response = await resetUser(formData.email, values.otp)
            }

            const data = response?.data
            console.log(response)
            if (data?.message === "success") {
                //sets token, verified status, success status and sets user in state
                setIsVerified(true)
                formik.setStatus("success")
                updateAuthToken(data?.token,true)
                next()
                return { success: true }
            } else {
                formik.setErrors({
                    apiError: returnApiError(data),
                })
                formik.setStatus("failed")
                return {
                    success: false,
                }
            }
        } catch (error) {
            formik.setErrors({
                apiError: returnApiError(error),
            })
            formik.setStatus("failed")
            return { success: false }
        }
    }

    // Resend OTP code
    const handleResend = async (event, formik) => {
        event.preventDefault()
        console.log("resending")
        try {
            const modifiedData = {
                user_id: formData.id,
            }
            console.log(modifiedData)
            const response = await api.default.post(
                "/user-gateway/resend-auth-code",
                modifiedData,
            )
            console.log(response)
            const data = response?.data

            //if api request returned successful
            if (data?.message === "success") {
                return { success: true }
            }
            //if api request failed but returned data
            else {
              formik.setErrors({
                apiError: returnApiError(data),
            })
                return {
                    success: false,
                }
            }
        } catch (error) {
            formik.setErrors({
                apiError: returnApiError(error),
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
        <FormCard>
            <CardHeader className="flex flex-col items-center">
                <div className="pb-5">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div>
                <CardTitle className="text-center">
                    Confirm your email address
                </CardTitle>
                <CardDescription className="text-center">
                    Please enter the OTP sent to your email address{" "}
                    <b>{formData.email}</b>
                </CardDescription>
            </CardHeader>

            {/* Render OTP input form if not verified */}
            <FourDigitPassword
                name={"otp"}
                value={formik.values.otp}
                onChange={(fieldName, fieldValue) =>
                    formik.setFieldValue(fieldName, fieldValue)
                }
                onBlur={formik.handleBlur}
                error={formik.errors.otp}
                onComplete={(value) => {
                    formik.handleSubmit()
                }}
                touched={formik.touched.otp}
                previouslyFocused={() => formik.setTouched({ otp: true })}
                apiError={formik.errors.apiError}
                status={formik.status}
            />

            <p className="text-center text-sm">
                Didn't receive the code{" "}
                <button
                    className="capitalize text-primary"
                    onClick={(event) => handleResend(event, formik)}
                >
                    resend code
                    {/* {formik.values.isResending ? "Resending..." : "resend code"} */}
                </button>
            </p>

            {/* Render success message if OTP verified */}
            <Button
                size="full"
                className="mt-2"
                disabled={!isVerified}
                onClick={next}
            >
                {isSubmitting ? "verifying" : "Continue"}
            </Button>
        </FormCard>
    )
}

export default ConfirmEmail

ConfirmEmail.propTypes = {
    next: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["activate", "reset"]).isRequired,
}
