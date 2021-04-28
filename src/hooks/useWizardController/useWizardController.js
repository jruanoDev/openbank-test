import { useReducer } from "react";

import { wizardReducer } from "../../reducers/WizardReducer";

const useWizardController = (initialState) => {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  const goForward = () => dispatch({ type: "increment" });
  const goBackwards = () => dispatch({ type: "decrement" });
  const restart = () => dispatch({ type: "restart" });

  return [state.index, goForward, goBackwards, restart];
};

export default useWizardController;
