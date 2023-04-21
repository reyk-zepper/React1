import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import User from "./User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <User name="simba" kind="🐶" />
    <User name="reyk" kind="🦄" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
