import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import clyp from "@/assets/icons/logo_icon.svg"
import { Button } from "@/components/shared/shadcn/button"
import * as Yup from "yup"
import { api, handleApiError, updateAuthToken } from "@/lib/axiosProvider"
import { useAuth } from "@/context/AuthContext"



const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/

const validationSchema = {
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
        )
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
}

const initialValues = {

    password: "",
    confirmPassword:"",
}

const ResetPassword = ({ next }) => {
    const { user } = useAuth()

 console.log(user)
        const onSubmit = async (values) => {
            try {

                const response = await api.post(
                    "/user-gateway/change-password",
                    values,
                )
                // Check if the API call was successful
                if (response.status === 200) {
                    // Proceed to the next step
                    // next();
                    await updateAuthToken(response?.data?.token)
                } else {
                    // Handle API error
                    console.error("Error creating user:", response.data.error)
                    console.log(updatedFormData)
                    // Display error message to the user
                    // You can also handle errors by setting formik errors
                }
            } catch (error) {
                // Handle network error
                console.error("Network error:", error)
                // Display error message to the user
                // You can also handle errors by setting formik errors
            }
        }
    
    

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

                <CardTitle>Reset password</CardTitle>
                <CardDescription className="text-center">
                Please type something you’ll remember.
                </CardDescription>
            </CardHeader>

            <form onSubmit={formik.handleSubmit}>
               

               

                <FloatingLabelInput
                    name="password"
                    type="password"
                    label="Enter new password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
          touched={formik.touched.password}

                />
                <FloatingLabelInput
                    name="confirmPassword"
                    type="password"
                    label="Confirm new password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}

                />

                <Button
                    type="submit"
                    size="full"
                    className="mt-4"
                    disabled={isSubmitting}
                    onClick={() => {
                        formik.handleSubmit()
                    }}
                >
                    {isSubmitting ? "Resetting Password..." : "Continue"}
                </Button>
            </form>

           
        </FormCard>
    )
}

export default ResetPassword
