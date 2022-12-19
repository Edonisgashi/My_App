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
  const currentUser = JSON.parse(loggedIn);
  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <Navbar
      bg="danger"
      variant="danger"
      className="bg-opacity-75 sticky-top shadow-lg p-3 header "
    >
      <Container>
        <Link to="/" className="navbar-brand text-light">
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
          <Link to="/enbooks" className="text-decoration-none  text-light">
            Books in English
          </Link>
          <Link className="text-decoration-none  text-light" to="/albooks">
            Books in Albanian
          </Link>
          <Link className="text-decoration-none  text-light" to="/author">
            Authors
          </Link>
          {currentUser ? (
            <>
              {currentUser.role === "admin" ? (
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
                <CgProfile /> {currentUser.username}
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
