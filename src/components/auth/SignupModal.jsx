import Modal from "@/components/ui/Modal";
import { CardTitle, CardDescription, CardHeader } from "@/components/ui/library/Card";
import { Input, Label } from "@/components/ui/library/Field";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/library/Button";
import AppleIcon from "@/assets/Vector1.svg";
import Google from "@/assets/google.svg";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";
import { evaluatePasswordStrength } from "@/lib/passwordStrengthChecker";

// Verification schema for zod
const formSchema = z.object({
    email: z.string().email("Invalid email address").trim(),
    password: z.string().min(8, "Password must be at least 8 characters long").max(20, "Password must be less than 20 characters").trim(),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export default function SignupModal() {
    // Using the react hook form
    // Functions: to connect zod and fields (register), to watch for changes in a field and submit
    // State: form state
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({ resolver: zodResolver(formSchema) });

    // State to store password strength
    const [strength, setStrength] = useState({ text: "Weak", color: "red" });

    // Watches password and checks strength
    const password = watch("password");
    useEffect(() => {
        const result = evaluatePasswordStrength(password);
        setStrength(result);
    }, [password]);

    // Submitting if passed (checks internally handled)
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Modal>
            <div className="mx-auto max-w-[90%] md:max-w-[70%] ">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        To create an account with Clyppay, please put in your email address in the field below
                    </CardDescription>
                </CardHeader>

                <fieldset className="mb-4">
                    <Label htmlFor="email"> Email </Label>
                    <Input
                        {...register("email")}
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </fieldset>

                <fieldset className="mb-4">
                    <Label htmlFor="password"> Password </Label>
                    <Input
                        {...register("password")}
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">
                            {errors.password.message}
                        </span>
                    )}
                </fieldset>

                <fieldset className="mb-4">
                    <Label htmlFor="confirmPassword"> Confirm Password </Label>
                    <Input
                        {...register("confirmPassword")}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Your Password"
                    />
                    {errors.confirmPassword && (
                        <span className="text-red-500 text-sm">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </fieldset>

                <div className="align-center flex w-full justify-between">
                    <span>Password Strength</span>
                    <span></span>
                    <span style={{ color: strength.color }}>{strength.text}</span>
                </div>
                <div>
                    <p>Must contain at least</p>
                    <p> 8 characters</p>
                    <p>1 lower case character</p>
                    <p>1 special character</p>
                </div>

                <Button
                    className="mt-4"
                    size="full"
                    onClick={handleSubmit(onSubmit)}
                >
                    Sign Up
                </Button>
                <div className="align-center flex w-full  flex-col justify-center gap-5 text-center">
                    <div className="mt-4 flex items-center">
                        <div className="flex-grow border-t border-card-foreground"></div>
                        <div className="mx-4 text-card-foreground">
                            or continue with
                        </div>
                        <div className="flex-grow border-t border-card-foreground"></div>
                    </div>
                    <div className="align-center flex justify-center gap-6">
                        <span className="hover:cursor-pointer">
                            <div className="rounded-full bg-[#3b5998] p-2.5">
                                <FaFacebookF color="white" size={14} />
                            </div>{" "}
                        </span>
                        <span className="translate-y-1 hover:cursor-pointer">
                            <img src={Google} alt="Google" />
                        </span>
                        <span className="hover:cursor-pointer">
                            <img src={AppleIcon} alt="Apple" />
                        </span>
                    </div>
                    <div>
                        Don't have an account?{" "}
                        <span className="font-light text-primary">Sign up</span>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
