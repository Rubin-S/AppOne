// src/components/steps/StepFour.jsx
import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-6 mb-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const PreviewItem = ({ label, value }) => (
  <div className="flex">
    <span className="w-48 font-medium text-gray-700">{label}:</span>
    <span className="flex-1 text-gray-900">{value}</span>
  </div>
);

const PreviewList = ({ label, items }) => (
  <div className="flex">
    <span className="w-48 font-medium text-gray-700">{label}:</span>
    <ul className="flex-1 list-disc list-inside space-y-1 text-gray-900">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const PreviewImage = ({ label, src }) => (
  <div>
    <span className="font-medium text-gray-700">{label}:</span>
    <img
      src={src}
      alt={label}
      className="mt-2 h-32 rounded-lg object-cover border"
    />
  </div>
);

const PreviewFile = ({ label, file, url }) => (
  <div>
    <span className="font-medium text-gray-700">{label}:</span>
    <a
      href={url}
      download={file?.name}
      className="mt-1 inline-block text-lime-600 hover:underline"
    >
      {file?.name || "Download file"}
    </a>
  </div>
);

const StepFour = ({ formData, onBack, onSaveDraft, onPost }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Step Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Preview Your Service
      </h2>

      {/* Section: Personal & Professional */}
      <Section title="Personal & Professional">
        <PreviewItem
          label="Name"
          value={`${formData.firstName} ${formData.lastName}`}
        />
        <PreviewItem label="Profession" value={formData.profession} />
        {formData.company && (
          <PreviewItem label="Company" value={formData.company} />
        )}
        <PreviewItem label="Experience" value={formData.experience} />
        <PreviewList
          label="Services"
          items={formData.services.split(",").map((s) => s.trim())}
        />
        <PreviewItem label="Description" value={formData.description} />
        {formData.image && (
          <PreviewImage label="Profile Image" src={formData.image} />
        )}
      </Section>

      {/* Section: Location & Contact */}
      <Section title="Location & Contact">
        <PreviewItem label="Address" value={formData.address} />
        <PreviewItem label="City" value={formData.city} />
        <PreviewItem label="State" value={formData.state} />
        <PreviewList label="Mobile Numbers" items={formData.mobileNumbers} />
        <PreviewList
          label="WhatsApp Numbers"
          items={formData.whatsappNumbers}
        />
        <PreviewItem label="Email" value={formData.email} />
        <PreviewItem
          label="Available Weekends"
          value={formData.availableWeekends ? "Yes" : "No"}
        />
        {formData.aadhaar && (
          <PreviewImage label="Aadhaar Card" src={formData.aadhaar} />
        )}
      </Section>

      {/* Section: Pricing & Certifications */}
      <Section title="Quotation & Certifications">
        {formData.quotationFile && (
          <PreviewFile
            label="Quotation"
            file={formData.quotationFile}
            url={formData.quotationUrl}
          />
        )}
        {formData.certifications && formData.certifications.length > 0 && (
          <div className="space-y-4">
            <span className="font-medium text-gray-700">Certifications:</span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {formData.certificationUrls.map((url, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  {url.endsWith(".pdf") ? (
                    <span className="block p-4 text-sm">
                      {formData.certifications[idx].name}
                    </span>
                  ) : (
                    <img
                      src={url}
                      alt={`Cert ${idx + 1}`}
                      className="h-24 w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={onSaveDraft}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Save as Draft
        </button>
        <div className="space-x-4">
          <button
            onClick={onBack}
            className="px-6 py-2 bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onPost}
            className="px-6 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700"
          >
            Post Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
