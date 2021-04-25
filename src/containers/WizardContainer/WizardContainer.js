import "./WizardContainer.scss";

import React from "react";

import Form from "../../views/Form/Form";
import ProductInformation from "../../views/ProductInformation/ProductInformation";

const WizardContainer = () => {
  return (
    <div className="Wizard">
      <div className="Wizard-header">{/* Stepper */}</div>
      <div className="Wizard-content">
        <Form />
      </div>
    </div>
  );
};

export default WizardContainer;
