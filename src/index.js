import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "../src/styles/partials/_layout.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
