import React from "react";
import { Link } from "react-router-dom";
const LoginForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
          <button type="submit" className="btn btn-primary w-50 my-2 mx-auto">
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
  );
};

export default LoginForm;
