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
    <Navbar bg="dark" variant="dark" className="bg-opacity-75">
      <Container>
        <Link to="/" className="navbar-brand">
          <h3>
            {" "}
            <BsBook /> E-Books
          </h3>
        </Link>
        <Link style={linkstyle} to="/enbooks">
          Books in English
        </Link>
        <Link style={linkstyle} to="/albooks">
          Books in Albanian
        </Link>
        <Link style={linkstyle} to="/author">
          Authors
        </Link>
        <Link style={linkstyle} to="/register">
          Register
        </Link>
        <Link style={linkstyle} to="/dashboard">
          Dashboard
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
