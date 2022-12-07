import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel style={{ width: "70%", margin: "50px auto" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s2982.pcdn.co/wp-content/uploads/2021/09/open-book-pages-fanned-out.jpg.optimal.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_587536358_2000133320009280405_395605.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.teenvogue.com/photos/618db60d30cb67f813a54c64/16:9/w_2560%2Cc_limit/GettyImages-1124778031.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
