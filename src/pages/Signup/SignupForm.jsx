import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import SocialLoginSection from "@/components/shared/custom/SocialLogin"
import clyp from "@/assets/icons/logo_icon.svg"
import { Button } from "@/components/shared/shadcn/button"
import * as Yup from "yup"
import { api } from "@/lib/axiosProvider"
import { useAuth } from "@/context/AuthContext"

const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
const validationSchema = {
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .required("Required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            regex,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
        )
        .required("Required"),
}

const initialValues = {
    email: "",
    phone: "",
    password: "",
}

const SignupForm = ({ next , updateFields}) => {


    const onSubmit = async (values, { setErrors }) => {
        try {
        
            const response = await api.post("/user-gateway/register", values)
            
            updateFields({...values,id: response?.data?.user.id})
            next();
            console.log(response.data)

            return { success: true }
        } catch (error) {
            console.log(
                error?.response?.data?.details || error?.message, // status and reason
            ) // return { success: false, message: error?.message || "Network error" }

            setErrors({
                apiError:
                    error?.response?.data?.details ||
                    error?.message ||
                    "An unexpected error occurred. Please try again.",
            })
            return { success: false }
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

                <CardTitle>Welcome to Clyp!</CardTitle>
                <CardDescription className="text-center">
                    To create an account with Clyppay, please put in your email
                    address in the field below
                </CardDescription>
            </CardHeader>

            <form onSubmit={formik.handleSubmit}>
                <FloatingLabelInput
                    name="email"
                    type="email"
                    label="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.email}
                />

                <FloatingLabelInput
                    name="phone"
                    type="text"
                    label="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phone}
                    touched={formik.touched.phone}
                />

                <FloatingLabelInput
                    name="password"
                    type="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />

                {formik.errors.apiError && (
                    <div className="mt-3 text-center text-red-500">
                        {formik.errors.apiError}
                    </div>
                )}

                <Button
                    type="submit"
                    size="full"
                    className="mt-4"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating account..." : "Continue"}
                </Button>
            </form>

            <SocialLoginSection
                tagline="Already have an account?"
                linkText="Log in"
                to="/login"
            />
        </FormCard>
    )
}

export default SignupForm