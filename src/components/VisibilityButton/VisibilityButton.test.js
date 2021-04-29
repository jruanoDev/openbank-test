import { shallow } from "enzyme";
import React from "react";

import VisibilityButton from "./VisibilityButton";

describe("VisibilityButton", () => {
  const func = jest.fn();

  it("renders VisibilityButton without crashing", () => {
    shallow(<VisibilityButton onClick={func} type="password" />);
  });
});
