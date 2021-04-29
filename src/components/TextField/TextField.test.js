import { mount, shallow } from "enzyme";
import React from "react";

import VisibilityButton from "../VisibilityButton/VisibilityButton";
import TextField from "./TextField";

describe("TextField", () => {
  const func = jest.fn();

  it("renders TextField without crashing", () => {
    shallow(<TextField value="" label="Hola" onChange={func} />);
  });

  it("renders a TextField with type password", () => {
    const component = shallow(
      <TextField value="" label="Hola" onChange={func} type="password" />
    );

    expect(component.find("input").prop("type")).toBe("password");
    expect(component.find(VisibilityButton).length).toBe(1);
  });

  it("renders a TextField with maxLength", () => {
    const component = mount(
      <TextField value="" label="Hola" onChange={func} maxLength={3} />
    );

    expect(component.find(".TextField-length-counter").length).toBe(1);
  });

  it("renders a TextField with error", () => {
    const component = mount(
      <TextField value="" label="Hola" onChange={func} error={"Error"} />
    );

    expect(
      component.find("input").hasClass("TextField-input-error")
    ).toBeTruthy();
    expect(component.find(".TextField-error").length).toBe(1);
  });
});
