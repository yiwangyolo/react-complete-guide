import { useState, useRef } from "react";

import { Wrapper } from "../Helpers/Wrapper";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  // useRef can be used to quickly read values that
  // you do not care about state
  // or you are not going to make any changes
  // access component with ref will make it uncontrolled component
  // since ne internal state will be tracked
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const [error, setError] = useState();

  const userNameInputHandler = (event) => {
    const userName = event.target.value;

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: userName,
      };
    });
  };

  const ageInputHandler = (event) => {
    const age = event.target.value;

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAge: age,
      };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);

    const newUserInput = {
      enteredName: userInput.enteredName,
      enteredAge: userInput.enteredAge,
      id: Math.random().toString(),
    };

    if (
      userInput.enteredName.trim().length === 0 ||
      userInput.enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+userInput.enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }

    props.onAddUser(newUserInput);

    setUserInput({
      enteredName: "",
      enteredAge: "",
      key: "",
    });
  };

  const confirmHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userInput.enteredName}
            onChange={userNameInputHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userInput.enteredAge}
            onChange={ageInputHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
