import { shallow } from "enzyme";
import React from "react";

import { ReactComponent as DoneIcon } from "../../assets/img/done.svg";
import { ReactComponent as WarningIcon } from "../../assets/img/warning.svg";
import Feedback from "./Feedback";

describe("Feedback", () => {
  it("renders Feedback without crashing", () => {
    shallow(<Feedback success={true} />);
  });

  it("renders Feedback with sucess state to true", () => {
    const component = shallow(<Feedback success={true} />);
    expect(component.find(DoneIcon).length).toBe(1);
  });

  it("renders Feedback with sucess state to false", () => {
    const component = shallow(<Feedback success={true} />);
    expect(component.find(WarningIcon).length).toBe(0);
  });
});
