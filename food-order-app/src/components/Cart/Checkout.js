import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim().length !== 0;
const isNotPostal = (value) => value.trim().length === 6;

export const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    address: true,
    postal: true,
    city: true,
  });

  const enteredNameRef = useRef();
  const enteredAddressRef = useRef();
  const enteredPostalRef = useRef();
  const enteredCityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = enteredNameRef.current.value;
    const enteredAddress = enteredAddressRef.current.value;
    const enteredPostal = enteredPostalRef.current.value;
    const enteredCity = enteredCityRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredAddressIsValid = isNotEmpty(enteredAddress);
    const enteredPostalIsValid = isNotPostal(enteredPostal);
    const enteredCityIsValid = isNotEmpty(enteredCity);

    setFormIsValid({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formValidity =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formValidity) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formIsValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={enteredNameRef} />
        {!formIsValid.name && <p>Please enter a valid name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formIsValid.address ? "" : classes.invalid
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={enteredAddressRef} />
        {!formIsValid.address && <p>Please enter a valid address.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formIsValid.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={enteredPostalRef} />
        {!formIsValid.postal && <p>Please enter a valid postal.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formIsValid.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={enteredCityRef} />
        {!formIsValid.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
