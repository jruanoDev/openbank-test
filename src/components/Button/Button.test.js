import { shallow } from "enzyme";
import React from "react";

import { ReactComponent as LoadingSpinner } from "../../assets/img/spinner.svg";
import Button from "./Button";

describe("Button", () => {
  const func = jest.fn();
  it("renders Button without crashing", () => {
    shallow(<Button onClick={func} />);
  });

  it("renders a Button with filled class", () => {
    const component = shallow(<Button onClick={func} type="filled" />);
    expect(component.hasClass("Button-filled")).toBeTruthy();
  });

  it("renders a Button with end addornment", () => {
    const component = shallow(
      <Button
        onClick={func}
        endAddornment={<div className="addornment" />}
      ></Button>
    );

    expect(component.find(".Button-endAddornment").length).toBe(1);
    expect(component.find(".addornment").length).toBe(1);
  });

  it("renders a Button with loading state", () => {
    const component = shallow(<Button onClick={func} loading={true}></Button>);

    expect(component.find(LoadingSpinner).length).toBe(1);
  });

  it("renders a Button with disabled state", () => {
    const component = shallow(<Button onClick={func} disabled={true}></Button>);

    expect(component.find("button").prop("disabled")).toBeTruthy();
  });

  it("renders a Button with color prop", () => {
    const component = shallow(
      <Button onClick={func} color="secondary"></Button>
    );

    expect(component.find("button").hasClass("color-secondary")).toBeTruthy();
  });
});
