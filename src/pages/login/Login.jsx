import React from "react"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import SocialLoginSection from "@/components/shared/custom/SocialLogin"
import clyp from "@/assets/icons/logo_icon.svg"
import { Button } from "@/components/shared/shadcn/button"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import { Link, useNavigate } from "react-router-dom"
import { Checkbox } from "@/components/shared/shadcn/formElements"
import { api, updateAuthToken } from "@/lib/axiosProvider"
import { useAuth } from "@/context/AuthContext"
import { headerHeight } from "@/lib/Constants"
import useForm from "@/hooks/useForm"
import * as Yup from "yup"

const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
const loginSchema = {
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

const Login = () => {
    const { setUser } = useAuth()

    const navigate = useNavigate()

    const onSubmit = async (values) => {
        try {
            const { email, ...rest } = values
            const modifiedData = {
                identifier: email,
                ...rest,
            }
            const response = await api.post("/user-gateway/login", modifiedData)
            const data = response?.data
            console.log(response)
            if (data.message === "success"){

                setUser(data?.user || data?.user_data)
                return {success: true}
                 }
            // updateAuthToken(data.token)

            // updateAuthToken(data.token)
            // Assuming the returned data contains user information
            // navigate("/dashboard")
        } catch (error) {
            console.error("Login error:", error)
            // Handle API errors
        }
    }

    const { formik, isSubmitting } = useForm(
        initialValues,
        loginSchema,
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
                    <CardTitle className="">Welcome back!</CardTitle>
                    <CardDescription className="text-center">
                        To log in to your account with Clyppay, please enter
                        your email address and password.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={formik.handleSubmit}>
                    <FloatingLabelInput
                        name="email"
                        type="email"
                        value={formik.values.email}
                        label="Email Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                    />
                    <FloatingLabelInput
                        name="password"
                        type="password"
                        label="Enter Your Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.password}
                        touched={formik.touched.password}
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
                        type="submit"
                        size="full"
                        className="mt-4"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Continue"}
                    </Button>
                </form>
                <SocialLoginSection
                    tagline="Don’t have an account?"
                    linkText="Register here"
                    to={"/signup"}
                />
            </FormCard>
        </div>
    )
}

export default Login
