import { mount, shallow } from "enzyme";
import React from "react";

import FormPage from "./FormPage";
import PasswordForm from "./PasswordForm/PasswordForm";

describe("FormPage", () => {
  const func = jest.fn();

  it("renders FormPage without crashing", () => {
    shallow(
      <FormPage onFormSuccess={func} goForward={func} goBackwards={func} />
    );
  });

  it("renders a FormPage with PasswordForm", () => {
    const container = mount(
      <FormPage onFormSuccess={func} goForward={func} goBackwards={func} />
    );

    expect(container.find(PasswordForm).length).toBe(1);
    expect(container.find(PasswordForm).prop("values")).toStrictEqual({
      password: "",
      repeatPassword: "",
      hint: "",
    });
    expect(container.find(PasswordForm).prop("onChange")).toBeInstanceOf(
      Function
    );
    expect(container.find(PasswordForm).prop("errors")).toStrictEqual({});
  });
});
