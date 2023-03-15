import { useState } from "react";

import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export const AddUser = (props) => {
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
    <div>
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
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userInput.enteredAge}
            onChange={ageInputHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
