import Modal from "@/components/ui/Modal"
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import InputField from "@/components/ui/InputField"
import { formSchema } from "./Schema"
import { Button } from "@/components/shadcn/Button"
import useFormLogic from "./useFormLogic"
import ProgressBar from "@/components/ui/ProgressBar"
import SocialLoginSection from "@/components/ui/SocialLogin"

export default function SignupModal() {
    const {
        register,
        handleSubmit,
        errors,
        passwordStrength,
        criteria,
        handlePasswordChange,
    } = useFormLogic(formSchema)

    return (
        <Modal>
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        To create an account with Clyppay, please put in your
                        email address in the field below
                    </CardDescription>
                </CardHeader>

                <InputField
                    name="email"
                    type="email"
                    register={register}
                    placeholder="example@gmail.com"
                    onChange={null}
                    errors={errors}
                />

                <InputField
                    name="password"
                    type="password"
                    register={register}
                    placeholder="Enter Your Password"
                    onChange={handlePasswordChange}
                    errors={errors}
                />

                <InputField
                    name="confirmPassword"
                    type="password"
                    register={register}
                    placeholder="Confirm Your Password"
                    onChange={null}
                    errors={errors}
                />

                {/* password strength section */}
                <div className="flex flex-col ">
                    <div className="flex items-center justify-between py-3">
                        <span className="text-base">Password Strength</span>
                        <div className="w-1/3">
                            <ProgressBar {...passwordStrength} />
                        </div>
                        <span style={{ color: passwordStrength.color }}>
                            {passwordStrength.strength}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                    <p className="font-bold">Must contain at least</p>
                    <p
                        style={{
                            textDecoration: criteria.length
                                ? "line-through"
                                : "none",
                        }}
                    >
                        8 characters
                    </p>
                    <p
                        style={{
                            textDecoration: criteria.upperCase
                                ? "line-through"
                                : "none",
                        }}
                    >
                        1 upper case character
                    </p>
                    <p
                        style={{
                            textDecoration: criteria.special
                                ? "line-through"
                                : "none",
                        }}
                    >
                        1 special character
                    </p>
                </div>
                </div>

            

                <Button size="full" className={`mt-4`} onClick={handleSubmit}>
                    Log in
                </Button>

                <SocialLoginSection />
        </Modal>
    )
}
