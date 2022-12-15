import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { BsBook } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";

const Header = (props) => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
  };

  // console.log(loggedIn);

  return (
    <Navbar
      bg="danger"
      variant="danger"
      className="bg-opacity-75 sticky-top shadow-lg p-3"
    >
      <Container>
        <Link to="/" className="navbar-brand text-light">
          <h3>
            {" "}
            <BsBook /> E-Books
          </h3>
        </Link>
        <Link to="/enbooks" className="text-decoration-none  text-light">
          Books in English
        </Link>
        <Link className="text-decoration-none  text-light" to="/albooks">
          Books in Albanian
        </Link>
        <Link className="text-decoration-none  text-light" to="/author">
          Authors
        </Link>
        {loggedIn ? (
          <>
            {loggedIn === "edonisgashi" ? (
              <Link
                className="text-decoration-none  text-light"
                to="/dashboard"
              >
                Dashboard
              </Link>
            ) : null}
            <Link
              className="text-decoration-none  text-light"
              to="/"
              onClick={signOut}
            >
              Log out
            </Link>
            <Link className="greet__user text-light d.none text-decoration-none">
              <CgProfile /> {loggedIn}
            </Link>
          </>
        ) : (
          <>
            <Link
              className="text-decoration-none  text-light link__login"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-decoration-none  text-light link__register"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
        <Link to="/cart" className="text-decoration-none  text-light  h2">
          <AiOutlineShoppingCart />
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
