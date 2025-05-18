// src/components/ProgressSteps.jsx
import React from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

const ProgressSteps = ({ currentStep = 1 }) => {
  return (
    <>
      <div className="flex relative h-50 w-250 px-10 items-center justify-center bg-white rounded-lg">
        <div className="absolute w-full h-1 bg-black rounded-full" />
        <div
          className="absolute left-0 h-1 bg-lime-400 transition-all duration-300"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />
        <div className="flex justify-between h-fit w-full absolute  ">
          {steps.map((label, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center transform translate-y-2.5 h-fit"
            >
              <div className="w-5 h-5 bg-white border-2 border-black rounded-full p-0.5 flex items-center justify-center" >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300
                    ${
                      index === currentStep
                        ? "bg-lime-400 border-lime-500"
                        : index < currentStep
                        ? "bg-lime-400 border-lime-500"
                        : "bg-white border-gray-400"
                    }`}
                />
              </div>
                <span
                    className={`text-sm font-medium ml-2 ${
                    index === currentStep
                        ? "text-lime-500"
                        : index < currentStep
                        ? "text-lime-500"
                        : "text-gray-400"
                    }`}
                    >{label}</span>
            </div>
          ))}
        </div>
      </div>
  </>
  );
};

export default ProgressSteps;
