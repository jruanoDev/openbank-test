import { mount, shallow } from "enzyme";
import React from "react";

import FormPage from "../../views/FormPage/FormPage";
import ProductInformation from "../../views/ProductInformation/ProductInformation";
import Stepper from "../Stepper/Stepper";
import Wizard from "./Wizard";

describe("Wizard", () => {
  const func = jest.fn();
  const component = (
    <Wizard>
      <ProductInformation />
      <FormPage onFormSuccess={func} goForward={func} goBackwards={func} />
    </Wizard>
  );

  it("renders Wizard without crashing", () => {
    mount(component);
  });

  it("renders a Wizard with Stepper", () => {
    const container = shallow(component);

    expect(container.find(Stepper).length).toBe(1);
  });
});
