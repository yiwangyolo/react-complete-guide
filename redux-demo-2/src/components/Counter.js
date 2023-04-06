import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const increseHandler = () => {
    // dispatch({ type: "INCRESE", value: 5 }); // using an input to make this value dynamic
    dispatch(counterActions.increase(10)); // ({ type: "SOME ACTION TYPE", payload: value })
  };

  const toggleHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
