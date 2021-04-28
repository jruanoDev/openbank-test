import "./App.scss";

import React, { useState } from "react";

import Wizard from "./components/Wizard/Wizard";
import Feedback from "./views/Feedback/Feedback";
import FormPage from "./views/FormPage/FormPage";
import ProductInformation from "./views/ProductInformation/ProductInformation";

const App = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className="App">
      <div className="App-header" />
      <main className="App-content">
        <Wizard>
          <ProductInformation />
          <FormPage onFormSuccess={(o) => setSuccess(o)} />
          <Feedback success={success} />
        </Wizard>
      </main>
    </div>
  );
};

export default App;
