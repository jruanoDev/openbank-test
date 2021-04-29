import { shallow } from "enzyme";
import React from "react";

import { ReactComponent as CompletedIcon } from "../../../assets/img/checked.svg";
import Step from "./Step";

describe("Step", () => {
  it("renders Step without crashing", () => {
    shallow(<Step index={1} />);
  });

  it("renders a Step with active prop", () => {
    const component = shallow(<Step active={true} index={1} />);
    expect(component.find(".Step").hasClass("Step-active")).toBeTruthy();
  });

  it("renders a Step with completed prop", () => {
    const component = shallow(<Step completed={true} index={1} />);
    expect(component.find(".Step").hasClass("Step-completed")).toBeTruthy();
    expect(component.find(CompletedIcon).length).toBe(1);
  });

  it("renders a Step with isLast prop to false", () => {
    const component = shallow(<Step index={1} isLast={false} />);
    expect(component.find(".Step-bar").length).toBe(1);
  });
});
