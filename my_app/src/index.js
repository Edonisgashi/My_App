import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Product from "./components/Product";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import EnBooks from "./components/EnBooks";
import AlBooks from "./components/AlBooks";
import Authors from "./components/Authors";
import NoMatch from "./components/NoMatch";
import "./App.css";
import "./index.css";

const Index = () => {
  const userID = useParams();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="enbooks" element={<EnBooks />} />
          <Route path="albooks" element={<AlBooks />} />
          <Route path="author" element={<Authors />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
