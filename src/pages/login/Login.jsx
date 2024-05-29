import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import InputField from "@/components/shared/custom/InputField"
import SocialLoginSection from "@/components/shared/custom/SocialLogin"
import useLoginLogic from "./useLoginLogic"
import clyp from "@/assets/icons/logo_icon.svg"
import { Button } from "@/components/shared/shadcn/button"
import { headerHeight } from "@/lib/Constants"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
function Login() {
    const { formik, isSubmitting, handleSubmit } = useLoginLogic()

    return (
        <div
            style={{ minHeight: `calc(100vh - ${headerHeight})` }}
            className="flex h-full w-full items-center justify-center "
        >
            <FormCard>
                <CardHeader className="flex flex-col  items-center">
                    <div className="pb-5">
                        <img src={clyp} alt="Clyp" width="40px" />
                    </div>

                    <CardTitle className="">Welcome back!</CardTitle>
                    <CardDescription className="text-center">
                        To log in your account with Clyppay, please put in your
                        email address in the field below
                    </CardDescription>
                </CardHeader>
                {/* 
            <InputField
                name="email"
                type="email"
                value={formik.values?.email}
                placeholder="example@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error = {formik.touched.email && formik.errors.email}
            /> */}

                <FloatingLabelInput
                    name="email"
                    type="email"
                    value={formik.values?.email}
                    placeholder="example@gmail.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                />

                <InputField
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    value={formik.values?.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && formik.errors.password}
                />

                <Button
                    size="full"
                    className="mt-4"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Logging in..." : "Continue"}
                </Button>

                <SocialLoginSection
                    tagline="Don’t have an account ?"
                    linkText="Register here"
                    to={"signup"}
                />
            </FormCard>
        </div>
    )
}

export default Login
