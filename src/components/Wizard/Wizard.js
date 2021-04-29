import "./Wizard.scss";

import React from "react";

import Stepper from "../../components/Stepper/Stepper";
import useWizardController from "../../hooks/useWizardController/useWizardController";

const Wizard = ({ children }) => {
  const totalSteps = children.length;

  const [index, goForward, goBackwards, restart] = useWizardController({
    index: 0,
    totalSteps,
  });

  const props = { goForward, goBackwards, restart };

  return (
    <div className="Wizard">
      <div className="Wizard-header">
        <Stepper totalSteps={totalSteps} activeStep={index} />
      </div>
      <div className="Wizard-content">
        {React.cloneElement(children[index], props)}
      </div>
    </div>
  );
};

export default Wizard;
