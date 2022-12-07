import React from "react";
import { GiBeachBag } from "react-icons/gi";
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
      <h1 className="h1">
        <span></span>
      </h1>
      <footer>
        <h2>Your online store for Books</h2>
        <div className="icon--group">
          <AiFillPhone /> <AiOutlineMail /> <AiFillInstagram />
          <AiOutlineFacebook />
          <AiFillTwitterCircle />
        </div>
      </footer>
    </>
  );
};

export default Footer;
