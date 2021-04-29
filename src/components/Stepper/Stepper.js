import "./Stepper.scss";

import PropTypes from "prop-types";
import React from "react";

import Step from "./Step/Step";

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

Stepper.defaultProps = {
  activeStep: 0,
};

Stepper.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default Stepper;
