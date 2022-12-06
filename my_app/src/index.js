import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
const Index = () => {
  return (
    <>
      <Header />
      <App />
      <Footer />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
