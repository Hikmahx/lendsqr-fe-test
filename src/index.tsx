import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "../src/styles/style.css";
import App from "./App";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
