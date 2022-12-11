import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <div
        className="alert alert-success w-50 d-flex flex-column align-items-center m-auto my-5 text-muted p-5 shadow-lg"
        role="alert"
      >
        <h4 className="alert-heading">Welcome new User</h4>
        <p>We've sent you an email with informations about your account.</p>
        <hr />
        <Link to="/" className="btn btn-outline-success">
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
