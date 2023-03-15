import classes from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
