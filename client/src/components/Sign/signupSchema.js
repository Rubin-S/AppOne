import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "At least 8 characters")
        .regex(/[A-Z]/, "One uppercase letter")
        .regex(/[a-z]/, "One lowercase letter")
        .regex(/\d/, "One number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "One special character"),
    confirmPassword: z.string(),
    agreeToTerms: z.literal(true, {
        errorMap: () => ({ message: "You must agree to terms" }),
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});