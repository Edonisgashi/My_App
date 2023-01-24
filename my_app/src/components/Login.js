import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

const Login = () => {
  const [accounts, setAccounts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  const { users } = useContext(DataContext);
  useEffect(() => {
    setAccounts(Object.values(users));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(accounts.find((acc) => acc.username === username));
  };
  if (currentUser) {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(currentUser));
    navigate("/");
  }
  return (
    <>
      <Header />
      <LoginForm
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </>
  );
};

export default Login;
