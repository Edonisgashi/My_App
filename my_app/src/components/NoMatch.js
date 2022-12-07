import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Alert variant="danger">
      Sorry page was not found <Link to="/">Go back to Homepage</Link>
    </Alert>
  );
};

export default NoMatch;
