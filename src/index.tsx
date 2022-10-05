import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { App } from "./app";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
