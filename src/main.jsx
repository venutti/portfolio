import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const setHeightVar = () => {
  document
    .querySelector(":root")
    .style.setProperty("--vh", window.innerHeight / 100 + "px");
};

setHeightVar();

window.addEventListener("resize", setHeightVar);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
