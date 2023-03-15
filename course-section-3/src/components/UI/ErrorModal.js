import { Fragment } from "react";
import ReactDOM from "react-dom";

import { Card } from "./Card";
import { Button } from "./Button";

import classes from "./ErrorModal.module.css";
import React from "react";

export const ErrorModal = (props) => {
  const clickHandler = () => {
    props.onConfirm();
  };

  const BackDrop = () => {
    return <div className={classes.backdrop} />;
  };

  const ModalOverlay = (props) => {
    return (
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
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
};
