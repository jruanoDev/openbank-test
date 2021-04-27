import "./App.scss";

import React from "react";

import WizardContainer from "./containers/WizardContainer/WizardContainer";
import Feedback from "./views/Feedback/Feedback";
import Form from "./views/Form/Form";
import ProductInformation from "./views/ProductInformation/ProductInformation";

const App = () => {
  return (
    <div className="App">
      <div className="App-header" />
      <main className="App-content">
        <WizardContainer>
          <ProductInformation />
          <Form />
          <Feedback />
        </WizardContainer>
      </main>
    </div>
  );
};

export default App;
