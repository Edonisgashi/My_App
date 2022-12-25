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
  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
  };

  const showMenu = (e) => {
    const links = document.querySelector(".links");
    links.classList.toggle("hide__menu");
    links.classList.toggle("open__menu");
    if (links.classList.contains("open__menu")) {
      document.querySelector(".card").classList.add("card__bottom");
      setShownMenu(true);
    } else {
      document.querySelector(".card").classList.remove("card__bottom");
      setShownMenu(false);
    }
  };
  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <Navbar
<<<<<<< HEAD
      bg="light"
      variant="light"
      className="bg-opacity-75 sticky-top shadow-lg p-3 header"
    >
      <Container>
        <Link to="/" className="navbar-brand text-danger">
=======
      bg="danger"
      variant="danger"
      className="bg-opacity-75 sticky-top shadow-lg p-3 header "
    >
      <Container>
        <Link to="/" className="navbar-brand text-light">
>>>>>>> origin/main
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
<<<<<<< HEAD
          <Link to="/enbooks" className="text-decoration-none  text-danger">
            Books in English
          </Link>
          <Link className="text-decoration-none  text-danger" to="/albooks">
            Books in Albanian
          </Link>
          <Link className="text-decoration-none  text-danger" to="/author">
=======
          <Link to="/enbooks" className="text-decoration-none  text-light">
            Books in English
          </Link>
          <Link className="text-decoration-none  text-light" to="/albooks">
            Books in Albanian
          </Link>
          <Link className="text-decoration-none  text-light" to="/author">
>>>>>>> origin/main
            Authors
          </Link>
          {currentUser ? (
            <>
              {currentUser.role === "admin" ? (
                <Link
<<<<<<< HEAD
                  className="text-decoration-none  text-danger"
=======
                  className="text-decoration-none  text-light"
>>>>>>> origin/main
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              ) : null}
              <Link
<<<<<<< HEAD
                className="text-decoration-none  text-danger"
=======
                className="text-decoration-none  text-light"
>>>>>>> origin/main
                to="/"
                onClick={signOut}
              >
                Log out
              </Link>
<<<<<<< HEAD
              <Link className="greet__user text-danger d.none text-decoration-none">
=======
              <Link className="greet__user text-light d.none text-decoration-none">
>>>>>>> origin/main
                <CgProfile /> {currentUser.username}
              </Link>
            </>
          ) : (
            <>
              <Link
<<<<<<< HEAD
                className="text-decoration-none  text-danger link__login"
=======
                className="text-decoration-none  text-light link__login"
>>>>>>> origin/main
                to="/login"
              >
                Login
              </Link>
              <Link
<<<<<<< HEAD
                className="text-decoration-none  text-danger link__register"
=======
                className="text-decoration-none  text-light link__register"
>>>>>>> origin/main
                to="/register"
              >
                Register
              </Link>
            </>
          )}
<<<<<<< HEAD
          <Link to="/cart" className="text-decoration-none  text-danger  h2">
=======
          <Link to="/cart" className="text-decoration-none  text-light  h2">
>>>>>>> origin/main
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
