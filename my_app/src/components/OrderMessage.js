import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderMessage = () => {
  return (
    <Alert
      variant="success"
      className="d-flex flex-column align-items-center mx-auto my-5 w-50 shadow-lg"
    >
      <Alert.Heading>Hey, thank you for you purchase</Alert.Heading>
      <p>Your order will be with you within 48hours ...</p>
      <hr />
      <p className="mb-0">If something goes wrong let us know !</p>
      <Link to="/" className="btn btn-lg btn-outline-success my-5 ">
        Continue buying !
      </Link>
    </Alert>
  );
};

export default OrderMessage;
