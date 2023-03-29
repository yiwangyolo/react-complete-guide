import { useState, useRef } from "react";

import { Input } from "../../UI/Input";

import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const inputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +inputRef.current.value;

    if (enteredAmount > 99 || enteredAmount < 1) {
      setFormIsValid(false);

      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "99",
          stop: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!formIsValid && <p>Please enter a valid amount (1-99).</p>}
    </form>
  );
};
