import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";
import "./assets/css/fonts.css";

import App from "./App";
import { Toaster } from "react-hot-toast";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
