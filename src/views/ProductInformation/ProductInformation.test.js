import { shallow } from "enzyme";
import React from "react";

import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import Checkbox from "../../components/Checkbox/Checkbox";
import ProductInformation from "./ProductInformation";

describe("ProductInformation", () => {
  const func = jest.fn();

  it("renders without crashing", () => {
    shallow(<ProductInformation goForward={func} />);
  });

  it("renders ProductInformation with two Features", () => {
    const container = shallow(<ProductInformation goForward={func} />);

    expect(container.find(".Features-column").length).toBe(2);
  });

  it("renders ProductInformation with a Checkbox", () => {
    const container = shallow(<ProductInformation goForward={func} />);

    expect(container.find(Checkbox).length).toBe(1);
  });

  it("renders ProductInformation with a ButtonContainer", () => {
    const container = shallow(<ProductInformation goForward={func} />);

    expect(container.find(ButtonContainer).length).toBe(1);
  });
});
