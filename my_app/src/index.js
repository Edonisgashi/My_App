import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "./index.css";
const Index = () => {
  return (
    <>
      <App />
      <h2>My first react app</h2>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
