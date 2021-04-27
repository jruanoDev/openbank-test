import "./Stepper.scss";

import React from "react";

import Step from "./Step";

const Stepper = ({ totalSteps, activeStep }) => {
  const renderSteps = () => {
    const stepsArray = [];
    for (let i = 0; i < totalSteps; i++) {
      stepsArray.push(
        <Step
          index={i + 1}
          key={i}
          isLast={i === totalSteps - 1}
          active={activeStep === i}
          completed={activeStep > i}
        >
          {i + 1}
        </Step>
      );
    }
    return stepsArray;
  };

  return <div className="Stepper">{renderSteps()}</div>;
};

export default Stepper;
