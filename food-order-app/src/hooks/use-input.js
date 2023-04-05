import { useReducer } from "react";

const INITIAL_STATE = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
    default:
      return INITIAL_STATE;
  }
};

export const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, INITIAL_STATE);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputHandler = (event) => {
    dispatch({ type: "INPUT", value: event.current.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    inputHandler,
    inputBlurHandler,
    reset,
  };
};
