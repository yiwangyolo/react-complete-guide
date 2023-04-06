import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

import "./index.css";
// import { rootReducer } from "./store";
import { store } from "./store";
import App from "./App";

// const store = createStore(rootReducer);
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
