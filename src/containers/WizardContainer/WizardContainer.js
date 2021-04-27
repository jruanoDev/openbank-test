import "./WizardContainer.scss";

import React, { useReducer } from "react";

import { animated, useTransition } from "@react-spring/web";

import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import { wizardReducer } from "../../reducers/WizardReducer";

const WizardContainer = ({ children }) => {
  const totalSteps = children.length;
  const [state, dispatch] = useReducer(wizardReducer, { index: 0, totalSteps });

  const transition = useTransition(state.index, {
    keys: null,
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: {
      transform: "translate3d(-100%,0,0)",
    },
  });

  const goForward = () => dispatch({ type: "increment" });
  const goBackwards = () => dispatch({ type: "decrement" });
  console.log(state);

  return (
    <div className="Wizard">
      <div className="Wizard-header">{/* Stepper */}</div>
      <div className="Wizard-content" style={{ minHeight: 500 }}>
        {transition((styles, i) => (
          <animated.div style={styles}>{children[i]}</animated.div>
        ))}
      </div>
      <ButtonContainer onSubmit={goForward} onCancel={goBackwards} />
    </div>
  );
};

export default WizardContainer;
