import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import App from "./App";
import Button from "./components/Button/Button";
import Wizard from "./components/Wizard/Wizard";
import Feedback from "./views/Feedback/Feedback";
import FormPage from "./views/FormPage/FormPage";
import ProductInformation from "./views/ProductInformation/ProductInformation";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("snapshot renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Wizard component", () => {
    const component = shallow(<App />);
    expect(component.find(Wizard).length).toEqual(1);
  });

  it("renders Wizard component with 3 steps", () => {
    const component = shallow(<App />);
    const wizard = component.find(Wizard);
    expect(wizard.find(ProductInformation).length).toEqual(1);
    expect(wizard.find(FormPage).length).toEqual(1);
    expect(wizard.find(Feedback).length).toEqual(1);
  });
});
