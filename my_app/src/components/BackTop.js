import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(true);
    } else if (scrolled <= 0) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          position: "fixed",
          width: "100%",
          left: "48%",
          bottom: "40px",
          height: "40px",
          zIndex: 1,
          cursor: "pointer",
          color: "#E97777",
        }}
      />
    </>
  );
};

export default BackTop;
