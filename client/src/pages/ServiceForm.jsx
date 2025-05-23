// src/pages/MultiStepFormPage.jsx
import React, { useState } from "react";
import CarpenterCard from "../components/common/ProfileCard";
import ProgressSteps from "../components/common/ProgressBar";
import FormSteps from "../components/serviceForm/FormSteps";

const MultiStepFormPage = () => {
  const [formData, setFormData] = useState({
    // initialize all form fields needed for all steps here
    firstName: "",
    lastName: "",
    profession: "",
    company: "",
    experience: "",
    services: "",
    description: "",
    image: null,

    address: "",
    city: "",
    state: "",
    mobileNumbers: [],
    whatsappNumbers: [],
    sameWhatsApp: false,
    email: "",
    availableWeekends: false,
    aadhaar: null,

    quotationFile: null,
    quotationUrl: "",
    certifications: [],
    certificationUrls: [],
  });

  const [currentStep, setCurrentStep] = useState(0);

  // Update progress bar current step
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="min-h-screen  flex flex-col  max-w-7xl mx-auto p-6 gap-6">
      <ProgressSteps currentStep={currentStep} />
      <div className="flex justify-between items-start gap-6">
      {/* Left Side: Profile Card */}
        <div className="md:w-1/3">
            <CarpenterCard {...formData} />
        </div>

        {/* Right Side: Form and Progress */}
        <div className="w-1/2 bg-white rounded-3xl shadow-lg p-8 flex flex-col">
            <div className="mt-6 flex-grow overflow-auto">
            <FormSteps
                formData={formData}
                setFormData={setFormData}
                onStepChange={handleStepChange}
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepFormPage;
