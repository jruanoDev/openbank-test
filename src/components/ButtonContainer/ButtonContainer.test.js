import { shallow } from "enzyme";
import React from "react";

import Button from "../Button/Button";
import ButtonContainer from "./ButtonContainer";

describe("ButtonContainer", () => {
  const func = jest.fn();

  it("renders ButtonContainer without crashing", () => {
    shallow(<ButtonContainer />);
  });

  it("renders a ButtonContainer with submitButton", () => {
    const container = shallow(
      <ButtonContainer
        submitButton={<Button onClick={func}>Siguiente</Button>}
      />
    );

    expect(container.find(Button).children().text()).toBe("Siguiente");
  });

  it("renders a ButtonContainer with cancelButton", () => {
    const container = shallow(
      <ButtonContainer
        cancelButton={<Button onClick={func}>Cancelar</Button>}
      />
    );

    expect(container.find(Button).children().text()).toBe("Cancelar");
  });
});
