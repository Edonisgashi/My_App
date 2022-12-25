import React from "react";
import { BsBook } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillPhone,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
<<<<<<< HEAD
        className=" d-md-flex bg-light shadow-lg bg-opacity-50  border-0 flex-row p-5 justify-content-around text-danger"
=======
        className=" d-md-flex bg-danger bg-opacity-50  border-0 flex-row p-5 justify-content-around text-light"
>>>>>>> origin/main
      >
        <div className="logo__copyright d-flex flex-column">
          <h2 className="h2">
            <span>
              {" "}
              <BsBook />
            </span>{" "}
            E-Books
          </h2>
          <p className="h6">Copyright &copy; 2022</p>
        </div>

        <div className="icon--group">
          <AiFillPhone className="icon" />
          <AiOutlineMail className="icon" />
          <AiFillInstagram className="icon" />
          <AiOutlineFacebook className="icon" />
          <AiFillTwitterCircle className="icon" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
