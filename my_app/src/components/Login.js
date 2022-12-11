import React, { useState, useEffect } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";

import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
const Login = () => {
  const [accounts, setAccounts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [loader, setLoader] = useState(false);

  const API = " http://localhost:3001/users";
  const users = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((resp) => {
        setAccounts(resp);
        setLoader(true);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    users();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(accounts.find((acc) => acc.username === username));
    console.log(currentUser);
    if (currentUser.password === password) {
      console.log("Passwords match");
      console.log(currentUser.role);

      document.querySelector(".link__login").classList.add("d-none");
      document.querySelector(".link__register").classList.add("d-none");
      window.localStorage.setItem("isLoggedIn", username);
      if (currentUser.role === "admin") {
        document.querySelector(".link__dashboard").classList.remove("d-none");
      } else {
        document.querySelector(".link__dashboard").classList.add("d-none");
        document.querySelector(".greet__user").classList.remove("d-none");
        document.querySelector(
          ".greet__user"
        ).textContent = `Hello , ${username}`;
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <>
      <Header />
      <form>
        <div className="form-row align-items-center  w-25 my-5 mx-auto border p-5 bg-dark bg-opacity-25 shadow-lg p-3 mb-5  rounded">
          <div className="col-auto">
            <label className="sr-only my-2" htmlFor="inlineFormInput">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <label className="sr-only my-2" htmlFor="inlineFormInputGroup">
              Password
            </label>
            <div className="input-group mb-2">
              <input
                type="password"
                className="form-control"
                id="inlineFormInputGroup"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary w-50 my-2 mx-auto"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </div>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
          <br />
          <Link>
            <span>Forgot password ?</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
