import { useInput } from "../hooks/use-input";

const isNotEmpty = (value) => value.trim().length !== 0;
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueInputHandler: firstnameChangeHandler,
    valueInputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueInputHandler: lastnameChangeHandler,
    valueInputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueInputHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const firstNameClassName = !firstNameInputHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameClassName = !lastNameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailClassName = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredEmailIsValid
    ) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClassName}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstName}
            onChange={firstnameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">The name must not be empty.</p>
          )}
        </div>
        <div className={lastNameClassName}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastnameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">The name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && (
          <p className="error-text">The email must contain @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
