import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { ContainedButton } from "./components/Buttons";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-white w-[600px] h-[200px] p-8 m-8 rounded-xl shadow-2xl flex justify-between items-center">
      <ContainedButton name="Default" type="default" />
      <ContainedButton name="primary" type="primary" />
      <ContainedButton name="secondary" type="secondary" />
      <ContainedButton name="disabled" type="disabled" />
      <ContainedButton name="link" type="link" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
