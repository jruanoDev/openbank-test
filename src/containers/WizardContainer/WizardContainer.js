import "./WizardContainer.scss";

import React, { useReducer } from "react";

import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import Stepper from "../../components/Stepper/Stepper";
import { wizardReducer } from "../../reducers/WizardReducer";

const WizardContainer = ({ children }) => {
  const totalSteps = children.length;
  const [state, dispatch] = useReducer(wizardReducer, { index: 0, totalSteps });

  const goForward = () => dispatch({ type: "increment" });
  const goBackwards = () => dispatch({ type: "decrement" });

  return (
    <div className="Wizard-container">
      <div className="Wizard">
        <div className="Wizard-header">
          <Stepper totalSteps={3} activeStep={state.index} />
        </div>
        <div className="Wizard-content">{children[state.index]}</div>
        <ButtonContainer onSubmit={goForward} onCancel={goBackwards} />
      </div>
    </div>
  );
};

export default WizardContainer;
