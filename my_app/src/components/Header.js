import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = ({ cartLength }) => {
  const [shownMenu, setShownMenu] = useState(false);

  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn);
  const currentUser = JSON.parse(loggedIn);
  console.log(currentUser);
  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
  };

  const showMenu = (e) => {
    const links = document.querySelector(".links");
    links.classList.toggle("hide__menu");
    links.classList.toggle("open__menu");
    if (links.classList.contains("open__menu")) {
      setShownMenu(true);
    } else {
      setShownMenu(false);
    }
  };
  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <Navbar
      bg="light"
      variant="light"
      className="bg-opacity-75 sticky-top shadow-lg p-3 header"
    >
      <Container>
        <Link to="/" className="navbar-brand text-danger">
          <h3>
            <BsBook /> E-Books
          </h3>
        </Link>
        <button
          className="d-block btn btn-none d-lg-none "
          onClick={(e) => showMenu(e)}
        >
          {shownMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        <div className="links  hide__menu d-lg-flex justify-content-around  w-75 align-items-center ">
          <Link to="/enbooks" className="text-decoration-none  text-danger">
            Books in English
          </Link>
          <Link className="text-decoration-none  text-danger" to="/albooks">
            Books in Albanian
          </Link>
          <Link className="text-decoration-none  text-danger" to="/author">
            Authors
          </Link>
          {currentUser ? (
            <>
              {currentUser.role === "admin" ? (
                <Link
                  className="text-decoration-none  text-danger"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              ) : null}
              <Link
                className="text-decoration-none  text-danger"
                to="/"
                onClick={signOut}
              >
                Log out
              </Link>
              <Link className="greet__user text-danger d.none text-decoration-none">
                <CgProfile /> {currentUser.username}
              </Link>
            </>
          ) : (
            <>
              <Link
                className="text-decoration-none  text-danger link__login"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="text-decoration-none  text-danger link__register"
                to="/register"
              >
                Register
              </Link>
            </>
          )}
          <Link to="/cart" className="text-decoration-none  text-danger  h2">
            <AiOutlineShoppingCart />{" "}
            <sup className="text-superscript">
              {cartLength ? cartLength : null}
            </sup>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
