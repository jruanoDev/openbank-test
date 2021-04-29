import "./App.scss";

import React, { useState } from "react";

import Wizard from "./components/Wizard/Wizard";
import Feedback from "./views/Feedback/Feedback";
import FormPage from "./views/FormPage/FormPage";
import ProductInformation from "./views/ProductInformation/ProductInformation";

const App = () => {
  const [success, setSuccess] = useState(false);

  return (
    <main className="App">
      <header className="App-header" />
      <section className="App-content">
        <Wizard>
          <ProductInformation />
          <FormPage onFormSuccess={(o) => setSuccess(o)} />
          <Feedback success={success} />
        </Wizard>
      </section>
    </main>
  );
};

export default App;
