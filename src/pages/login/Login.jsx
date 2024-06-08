import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import SocialLoginSection from "@/components/shared/custom/SocialLogin"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import clyp from "@/assets/icons/logo_icon.svg"
import { Button } from "@/components/shared/shadcn/button"
import * as Yup from "yup"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { api, returnApiError } from "@/api/axiosProvider"
import { useAuth } from "@/context/AuthContext"
import { Checkbox } from "@/components/shared/shadcn/formElements"
import { headerHeight } from "@/lib/Constants"

const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
const validationSchema = {
    email: Yup.string().email("Invalid email address").required("Required"),
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
    password: "",
}

const LoginForm = ({ updateFields }) => {
    const { setUser } = useAuth()

    const navigate = useNavigate()
    const { state } = useLocation()
    const from = state?.from?.pathname || "/dashboard"

    const onSubmit = async (values, {setErrors}) => {
        console.log("loading.")
    
        try {
            const { email, ...rest } = values
            const modifiedData = {
                identifier: email,
                ...rest,
            }
            const response = await api.default.post("/user-gateway/login", modifiedData)
            const data = response?.data
            console.log(response)
            if (data?.message === "success") {
                // Update the necessary states or perform navigation here
                console.log("Login successful")
                navigate("/dashboard")
                return { success: false }
            } else {
       
               setErrors({ apiError:returnApiError (data) });
                return { success: false }
            }
        } catch (error) {
            setErrors({
                apiError: returnApiError(error),
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
        <div
            style={{ minHeight: `calc(100vh - ${headerHeight})` }}
            className="flex h-full w-full items-center justify-center"
        >
            <FormCard>
                <CardHeader className="flex flex-col items-center">
                    <div className="pb-5">
                        <img src={clyp} alt="Clyp" width="40px" />
                    </div>

                    <CardTitle>Welcome back!</CardTitle>
                    <CardDescription className="text-center">
                        To log in your account with Clyppay, please put in your
                        email address and password in the field below
                    </CardDescription>
                </CardHeader>

                <form>
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
                        name="password"
                        type="password"
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        apiError={formik.errors.apiError}
                    />

                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <Checkbox />
                            <span> Remember me </span>
                        </div>
                        <Link to="/forgot" className="text-primary">
                            Forgot Password?
                        </Link>
                    </div>

                    <Button
                        type="button"
                        size="full"
                        className="mt-4"
                        disabled={isSubmitting}
                        onClick={() => formik.handleSubmit()}
                    >
                        {isSubmitting ? "Logging in...." : "Continue"}
                    </Button>
                </form>

                <SocialLoginSection
                    tagline="Don't have an account?"
                    linkText="Sign up"
                    to="/signup"
                />
            </FormCard>
        </div>
    )
}

export default LoginForm
