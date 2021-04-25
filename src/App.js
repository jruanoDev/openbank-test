import React, {Component} from "react";


import "./App.scss";
import WizardContainer from "./containers/WizardContainer/WizardContainer";

const App = () => {

      return(
          <div className="App">
              <div className="App-header"></div>
              <main className="App-content">
                  <WizardContainer />
              </main>
          </div>
      );

}

export default App;

