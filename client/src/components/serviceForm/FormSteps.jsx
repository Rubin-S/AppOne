// src/components/FormSteps.jsx
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const FormSteps = ({ formData, setFormData, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < 3){
         setCurrentStep(currentStep + 1);
         console.log("Current Step: ", currentStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSaveDraft = () => {
    // Implement your draft saving logic here, e.g. localStorage or API call
    alert("Draft saved!");
  };

  const handlePostService = () => {
    // Implement your final form submission logic here
    alert("Service posted successfully!");
  };

  // Notify parent wrapper of step changes for progress bar update
  React.useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  switch (currentStep) {
    case 0:
      return (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
        />
      );
    case 1:
      return (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={prevStep}
        />
      );
    case 2:
      return (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          onBack={prevStep}
          onPreview={nextStep}
        />
      );
    case 3:
      return (
        <StepFour
          formData={formData}
          onBack={prevStep}
          onSaveDraft={handleSaveDraft}
          onPost={handlePostService}
        />
      );
    default:
      return null;
  }
};

export default FormSteps;
