import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { BsBook } from "react-icons/bs";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
{
}
const Header = () => {
  const linkstyle = {
    textDecoration: "none",
    color: "#F2E5E5",
  };
  const linkStyleHover = {
    textDecoration: "underline",
    transition: "all 0.5s ease",
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <h3>
            {" "}
            <BsBook /> E-store for Books
          </h3>
        </Link>
        <Link style={linkstyle} to="/enbooks">
          Books in English
        </Link>
        <Link style={linkstyle} to="albooks">
          Books in Albanian
        </Link>
        <Link style={linkstyle} to="author">
          Authors
        </Link>
        <Link style={linkstyle} to="register">
          Register
        </Link>
        <Link style={linkstyle} to="account">
          Your Account
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
