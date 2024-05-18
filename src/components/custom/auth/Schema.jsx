import { z } from "zod";


// Verification schema for zod
const formSchema = z.object({
    email: z.string().email("Invalid email address").trim(),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password must be less than 20 characters")
        .regex(/[A-Z]/, "Password must contain an uppercase letter")
        .regex( /[!@#$%^&*]/, "Password must contain at least 1 special character")
       ,

    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});


export {formSchema}