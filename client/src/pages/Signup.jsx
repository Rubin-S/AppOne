import React, { useState }  from 'react'

import SignUpDetailsForm from "../components/Sign/SignUpDetailsForm";
import ProfileSetup from "../components/Sign/WelcomeProfile";
import SignUpPage from "../components/Sign/SignUp_OTP";
import { images } from '../assets/assets';
import { useAppContext } from '../context/AppContext';


const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);


  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <SignUpPage setCurrentStep={setCurrentStep} />;
      case 1:
        return <SignUpDetailsForm setCurrentStep={setCurrentStep} />;
      case 2:
        return <ProfileSetup setCurrentStep={setCurrentStep} />;
      default:
        return <SignUpPage setCurrentStep={setCurrentStep} />;
    }
  };

  return (
    <div className="w-full h-screen flex items-center overflow-hidden">
      <img
        src={images.signupbg}
        alt="signup"
        className="w-2/7 f-full hidden md:block"
      />
      {renderStep()}
    </div>
  )
}

export default Signup