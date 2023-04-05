import { useInput } from "../../hooks/use-input";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim().length !== 0;
const isNotPostal = (value) => value.trim().length === 6;

export const Checkout = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    inputHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredAddress,
    valueIsValid: enteredAddressIsValid,
    hasError: enteredAddressHasError,
    inputHandler: addressInputHandler,
    inputBlurHandler: addressInputBlurHandler,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostal,
    valueIsValid: enteredPostalIsValid,
    hasError: enteredPostalHasError,
    inputHandler: postalInputHandler,
    inputBlurHandler: postalInputBlurHandler,
    reset: resetPostalInput,
  } = useInput(isNotPostal);

  const {
    value: enteredCity,
    valueIsValid: enteredCityIsValid,
    hasError: enteredCityHasError,
    inputHandler: cityInputHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredAddressIsValid &&
    enteredPostalIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const nameInputClassName = !enteredNameHasError
    ? "form-control"
    : "form-control invalid";

  const addressInputClassName = !enteredAddressHasError
    ? "form-control"
    : "form-control invalid";

  const postalInputClassName = !enteredPostalHasError
    ? "form-control"
    : "form-control invalid";

  const cityInputClassName = !enteredCityHasError
    ? "form-control"
    : "form-control invalid";

  const checkoutHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid
    ) {
      return;
    }

    resetNameInput();
    resetAddressInput();
    resetPostalInput();
    resetCityInput();
  };

  return (
    <form className={classes.form} onSubmit={checkoutHandler}>
      <div className={nameInputClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
        />
        {enteredNameHasError && <p>Please enter a valid name.</p>}
      </div>
      <div className={addressInputClassName}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={enteredAddress}
          onChange={addressInputHandler}
          onBlur={addressInputBlurHandler}
        />
        {enteredAddressHasError && <p>Please enter a valid address.</p>}
      </div>
      <div className={postalInputClassName}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={postalInputHandler}
          onBlur={postalInputBlurHandler}
        />
        {enteredPostalHasError && <p>Please enter a valid postal code.</p>}
      </div>
      <div className={cityInputClassName}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityInputHandler}
          onBlur={cityInputBlurHandler}
        />
        {enteredCityHasError && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};
