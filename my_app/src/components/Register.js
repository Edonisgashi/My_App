import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "./Header";
import Footer from "./Footer";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checked, setChecked] = useState(false);
  const [incomingData, setIncomingData] = useState(false);
  const API = "http://localhost:3008/users";
  const randomId = Math.floor(Math.random() * 1000000).toFixed(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncomingData(true);
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };

  const sendData = async () => {
    const data = {
      id: Number(randomId).toFixed(0),
      firstName: firstName,
      lastName: lastName,
      role: "user",
      email: email,
      username: username,
      password: password,
    };
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (incomingData) {
      sendData();
    }
  });
  return (
    <>
      <Header />
      <div className="register__container d-flex justify-content-around m-5">
        <Form
          onSubmit={(e) => handleSubmit(e)}
          className="m-5 w-25"
          style={{ fontFamily: "Titillium Web" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              className="form__input"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Last Name"
              className="form__input"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Username"
              className="form__input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form__input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="form__input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              variant="success"
              required
              label="i have read and agree to the terms and conditions"
              onChange={(e) => setChecked(e.target.checked)}
            />
          </Form.Group>

          <Link to="/welcome" className="text-decoration-none">
            <Button
              variant="outline-success"
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              Create an Account
            </Button>
          </Link>
        </Form>
        <div
          className="countUp__content d-flex flex-column my-auto align-items-center justify-content-around "
          style={{ fontFamily: "'Zen Dots', cursive" }}
        >
          <CountUp
            className="text-primary h2 font-weight-bold"
            start={0}
            end={1605555}
            duration={6.75}
            separator="."
          ></CountUp>
          <h2 className="text-primary">Happy Clients Worldwide</h2>
          <CountUp
            className="text-success h2 font-weight-bold"
            start={0}
            end={95}
            duration={2.75}
          ></CountUp>
          <h2 className="text-success">States Shiping on</h2>
          <img
            src="https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            className="img-fluid w-50 my-5 shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
