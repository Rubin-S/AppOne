import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  profession: z.string().min(1, "Profession is required"),
  company: z.string().optional(),
  experience: z.string().min(1, "Experience is required"),
  services: z.string().min(1, "At least one service is required"),
  description: z.string().min(1, "Job description is required"),
  image: z
    .any()
    .refine((file) => file?.size <= 2 * 1024 * 1024, "Image must be under 2MB"),
});

const StepOne = ({ formData, setFormData, onNext }) => {
  const [previewUrl, setPreviewUrl] = useState(formData.image || "");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      profession: formData.profession || "",
      company: formData.company || "",
      experience: formData.experience || "",
      services: formData.services || "",
      description: formData.description || "",
      image: null,
    },
  });

  const onSubmit = (data) => {
    const imageUrl = previewUrl || formData.image;
    setFormData({ ...formData, ...data, image: imageUrl });
    onNext();
    // You can move to the next step here if needed
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      setValue("image", file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            className="input input-bordered w-full"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            className="input input-bordered w-full"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Profession */}
      <div>
        <input
          type="text"
          placeholder="Profession"
          {...register("profession")}
          className="input input-bordered w-full"
        />
        {errors.profession && (
          <p className="text-red-500 text-sm mt-1">
            {errors.profession.message}
          </p>
        )}
      </div>

      {/* Company (Optional) */}
      <input
        type="text"
        placeholder="Enterprise / Company Name (Optional)"
        {...register("company")}
        className="input input-bordered w-full"
      />

      {/* Experience */}
      <div>
        <input
          type="text"
          placeholder="Experience (e.g., 3 years)"
          {...register("experience")}
          className="input input-bordered w-full"
        />
        {errors.experience && (
          <p className="text-red-500 text-sm mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* Services */}
      <div>
        <input
          type="text"
          placeholder="Services you provide (comma separated)"
          {...register("services")}
          className="input input-bordered w-full"
        />
        {errors.services && (
          <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <textarea
          placeholder="Job Description"
          {...register("description")}
          className="textarea textarea-bordered w-full"
          rows={4}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className="mt-3 h-32 rounded-lg object-cover"
          />
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn bg-lime-500 text-white px-6">
        Save & Continue
      </button>
    </form>
  );
};

export default StepOne;
