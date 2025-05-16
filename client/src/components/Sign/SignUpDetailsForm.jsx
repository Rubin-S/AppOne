import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./signupSchema";
import { useAppContext } from "../../context/AppContext";

const SignUpDetailsForm = ({ setCurrentStep }) => {
  const { signupData, setSignupData } = useAppContext();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: signupData,
    mode: "onBlur",
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit = (data) => {
    setSignupData(data);
    console.log("Form submitted:", data);
    setCurrentStep(2);
  };

  return (
    <div className="max-w-md w-full ml-20 p-4 sm:p-6 relative">
      <button
        type="button"
        onClick={() => setCurrentStep((prev) => prev - 1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">
          Sign up to Ask IT
        </h1>

        <div className="space-y-1 text-center">
          <p className="text-sm sm:text-base">
            Your Google account Joseph will be connected to your new Ask IT
            account
          </p>
          <p className="text-sm sm:text-base">
            <a href="#" className="text-blue-600 hover:underline">
              Wrong identity? Start over
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Name*
            </label>
            <input
              id="name"
              {...register("name")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="username" className="block text-sm mb-1">
              Username*
            </label>
            <input
              id="username"
              {...register("username")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.username ? "border-red-500" : ""
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email*
          </label>
          <input
            id="email"
            {...register("email")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            Password*
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword.password ? "text" : "password"}
              {...register("password")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              aria-label="Toggle password visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword.password ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm mb-1">
            Confirm password*
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              aria-label="Toggle confirm password visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword.confirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            {...register("agreeToTerms")}
            className="mt-1"
          />
          <label htmlFor="agreeToTerms" className="text-sm">
            I agree with Ask IT{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              default Notification Settings
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-xs">{errors.agreeToTerms.message}</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
        >
          Create an account
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="#" className="text-black underline">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpDetailsForm;
