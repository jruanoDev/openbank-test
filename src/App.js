import "./App.scss";

import React from "react";

import WizardContainer from "./containers/WizardContainer/WizardContainer";
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
        </WizardContainer>
      </main>
    </div>
  );
};

export default App;
