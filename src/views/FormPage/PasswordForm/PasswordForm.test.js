import { shallow } from "enzyme";
import React from "react";

import TextField from "../../../components/TextField/TextField";
import PasswordForm from "./PasswordForm";

describe("PasswordForm", () => {
  const func = jest.fn();
  const component = (
    <PasswordForm
      errors={{}}
      onChange={func}
      values={{ password: "", repeatPassword: "", hint: "" }}
    />
  );

  it("renders PasswordForm without crashing", () => {
    shallow(component);
  });

  it("renders a PasswordForm with 3 TextFields", () => {
    const container = shallow(component);

    expect(container.find(TextField).length).toBe(3);
  });
});
