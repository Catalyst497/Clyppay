import Modal from "@/components/ui/Modal"
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import InputField from "@/components/ui/InputField"
import { formSchema } from "../signup/Schema"
import { Button } from "@/components/shadcn/Button"
import useFormLogic from "../signup/useFormLogic"
import { Checkbox } from "@/components/shadcn/FormElements"
import SocialLoginSection from "@/components/ui/SocialLogin"

export default function SignupModal() {
    const {
        register,
        handleSubmit,
        errors,

        handlePasswordChange,
    } = useFormLogic(formSchema)

    return (
        <Modal>
   
                <CardHeader>
                    <CardTitle>Login your account</CardTitle>
                    <CardDescription>
                        To log in your account with Clyppay, please put in your
                        email address and password in the field below{" "}
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

                <div className="align-center flex justify-center gap-6 text-sm">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember Me
                        </label>
                    </div>
                    <a href="" className="text-red-600">Forgot Password?</a>
                </div>

                <Button size="full" className={`mt-4`} onClick={handleSubmit}>
                    Log in
                </Button>

                <SocialLoginSection />
          
        </Modal>
    )
}
