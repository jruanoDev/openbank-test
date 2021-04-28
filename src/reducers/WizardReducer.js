const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESTART = "restart";

export const wizardReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        index:
          state.index + 1 >= state.totalSteps
            ? state.totalSteps
            : state.index + 1,
      };

    case DECREMENT:
      return {
        ...state,
        index: state.index - 1 <= 0 ? 0 : state.index - 1,
      };

    case RESTART:
      return {
        ...state,
        index: 0,
      };

    default:
      throw new Error("You must provide an action type");
  }
};
