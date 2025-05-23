// src/components/steps/StepThree.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const schema = z.object({
  quotation: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Quotation must be under 10 MB"
    ),
  certifications: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) => file.size <= MAX_FILE_SIZE,
          "Each file must be under 10 MB"
        )
    )
    .optional(),
});

const StepThree = ({ formData, setFormData, onBack, onPreview }) => {
  const [quotationPreview, setQuotationPreview] = useState(
    formData.quotationUrl || ""
  );
  const [certPreviews, setCertPreviews] = useState(
    formData.certificationUrls || []
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      quotation: null,
      certifications: [],
    },
  });

  // Watch for file inputs
  const watchedQuotation = watch("quotation");
  const watchedCerts = watch("certifications");

  // Generate previews when files change
  useEffect(() => {
    if (watchedQuotation && watchedQuotation instanceof File) {
      setQuotationPreview(URL.createObjectURL(watchedQuotation));
    }
  }, [watchedQuotation]);

  useEffect(() => {
    if (Array.isArray(watchedCerts) && watchedCerts.length) {
      setCertPreviews(watchedCerts.map((f) => URL.createObjectURL(f)));
    }
  }, [watchedCerts]);

  const onSubmit = (data) => {
    // store URLs for live preview
    setFormData({
      ...formData,
      quotationFile: data.quotation,
      quotationUrl: quotationPreview,
      certifications: data.certifications,
      certificationUrls: certPreviews,
    });
    onPreview();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Quotation Upload */}
      <div>
        <label className="block font-semibold mb-1">
          Upload Quotation (Max 10 MB)
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setValue("quotation", file, { shouldValidate: true });
          }}
        />
        {errors.quotation && (
          <p className="text-red-500 text-sm">{errors.quotation.message}</p>
        )}
        {quotationPreview && (
          <p className="mt-2 text-sm">Selected: {watchedQuotation.name}</p>
        )}
      </div>

      {/* Certifications Upload */}
      <div>
        <label className="block font-semibold mb-1">
          Upload Certifications / Recognitions (Max 10 MB each)
        </label>
        <input
          type="file"
          accept="image/*,.pdf"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            setValue("certifications", files, { shouldValidate: true });
          }}
        />
        {errors.certifications && (
          <p className="text-red-500 text-sm">
            {errors.certifications.message}
          </p>
        )}
        {certPreviews.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {certPreviews.map((url, idx) => (
              <div key={idx} className="border p-2">
                {url.endsWith(".pdf") ? (
                  <span className="text-sm">PDF #{idx + 1}</span>
                ) : (
                  <img
                    src={url}
                    alt={`Cert ${idx + 1}`}
                    className="h-20 object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Preview
        </button>
      </div>
    </form>
  );
};

export default StepThree;
