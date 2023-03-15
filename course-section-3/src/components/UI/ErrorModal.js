import { Card } from "./Card";
import { Button } from "./Button";

import classes from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  const clickHandler = () => {
    props.onConfirm();
  };

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};
