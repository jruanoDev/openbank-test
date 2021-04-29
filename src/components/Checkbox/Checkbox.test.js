import { shallow } from "enzyme";
import React from "react";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  const func = jest.fn();

  it("renders Checkbox without crashing", () => {
    shallow(<Checkbox onChange={func} checked={false} />);
  });

  it("renders a Checkbox with checked prop to true", () => {
    const component = shallow(<Checkbox onChange={func} checked={true} />);
    expect(
      component.find('input[type="checkbox"]').prop("checked")
    ).toBeTruthy();
  });

  it("renders a Checkbox with label", () => {
    const component = shallow(
      <Checkbox onChange={func} checked={true} label="Ejemplo" />
    );
    expect(component.find("label").children().text()).toBe("Ejemplo");
  });
});
