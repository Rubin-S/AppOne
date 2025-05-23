import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneRegex = /^[6-9]\d{9}$/;

const schema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  mobileNumbers: z.array(
    z.string().regex(phoneRegex, "Enter valid mobile number")
  ),
  whatsappNumbers: z.array(
    z.string().regex(phoneRegex, "Enter valid WhatsApp number")
  ),
  email: z.string().email("Invalid email"),
  availableWeekends: z.boolean(),
  aadhaar: z
    .any()
    .refine(
      (file) => file && file.size <= 2 * 1024 * 1024,
      "Aadhaar must be under 2MB"
    ),
});

const StepTwo = ({ formData, setFormData, onBack, onNext }) => {
  const [aadhaarPreview, setAadhaarPreview] = useState(
    formData.aadhaar || null
  );

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      address: formData.address || "",
      city: formData.city || "",
      state: formData.state || "",
      mobileNumbers: formData.mobileNumbers || [""],
      whatsappNumbers: formData.whatsappNumbers || [""],
      email: formData.email || "",
      availableWeekends: formData.availableWeekends || false,
      aadhaar: null,
    },
  });

  const { fields: mobileFields, append: appendMobile } = useFieldArray({
    control,
    name: "mobileNumbers",
  });

  const { fields: whatsappFields, append: appendWhatsapp } = useFieldArray({
    control,
    name: "whatsappNumbers",
  });

  const handleAadhaarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setValue("aadhaar", file);
      setAadhaarPreview(URL.createObjectURL(file));
    }
  };

  const handleSameAsMobile = () => {
    const mobiles = getValues("mobileNumbers");
    setValue("whatsappNumbers", mobiles);
  };

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data, aadhaar: aadhaarPreview });
    onNext(); // Go to next step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Location */}
      <div>
        <input
          placeholder="Address"
          {...register("address")}
          className="input input-bordered w-full"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            placeholder="City"
            {...register("city")}
            className="input input-bordered w-full"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>
        <div>
          <input
            placeholder="State"
            {...register("state")}
            className="input input-bordered w-full"
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>
      </div>

      {/* Mobile Numbers */}
      <div>
        <label className="font-semibold">Mobile Numbers</label>
        {mobileFields.map((field, index) => (
          <input
            key={field.id}
            {...register(`mobileNumbers.${index}`)}
            placeholder={`Mobile ${index + 1}`}
            className="input input-bordered w-full mt-2"
          />
        ))}
        {errors.mobileNumbers && (
          <p className="text-red-500 text-sm">{errors.mobileNumbers.message}</p>
        )}
        <button
          type="button"
          onClick={() => appendMobile("")}
          className="text-sm text-lime-600 mt-1"
        >
          + Add Mobile Number
        </button>
      </div>

      {/* WhatsApp Numbers */}
      <div>
        <label className="font-semibold">WhatsApp Numbers</label>
        {whatsappFields.map((field, index) => (
          <input
            key={field.id}
            {...register(`whatsappNumbers.${index}`)}
            placeholder={`WhatsApp ${index + 1}`}
            className="input input-bordered w-full mt-2"
          />
        ))}
        {errors.whatsappNumbers && (
          <p className="text-red-500 text-sm">
            {errors.whatsappNumbers.message}
          </p>
        )}
        <button
          type="button"
          onClick={() => appendWhatsapp("")}
          className="text-sm text-lime-600 mt-1"
        >
          + Add WhatsApp Number
        </button>
        <div className="mt-2">
          <button
            type="button"
            onClick={handleSameAsMobile}
            className="btn btn-xs btn-outline mt-1"
          >
            Same as Mobile Numbers
          </button>
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
          className="input input-bordered w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Available on Weekends */}
      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register("availableWeekends")} />
        <span>Will you be available on weekends?</span>
      </label>

      {/* Aadhaar Upload */}
      <div>
        <label className="block font-semibold">Aadhaar Card (Max 2MB)</label>
        <input type="file" accept="image/*" onChange={handleAadhaarChange} />
        {errors.aadhaar && (
          <p className="text-red-500 text-sm">{errors.aadhaar.message}</p>
        )}
        {aadhaarPreview && (
          <img
            src={aadhaarPreview}
            alt="Aadhaar Preview"
            className="mt-2 h-32 rounded-lg object-cover"
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-outline">
          Back
        </button>
        <button type="submit" className="btn bg-lime-500 text-white">
          Save & Continue
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
