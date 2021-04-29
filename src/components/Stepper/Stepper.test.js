import { shallow } from "enzyme";
import React from "react";

import Step from "./Step/Step";
import Stepper from "./Stepper";

describe("Stepper", () => {
  it("renders Stepper without crashing", () => {
    shallow(<Stepper totalSteps={2} activeStep={0} />);
  });

  it("renders a Stepper with three steps", () => {
    const component = shallow(<Stepper totalSteps={3} activeStep={0} />);
    expect(component.find(Step).length).toBe(3);
  });
});
