import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const carouselPhotos = {
    height: "520px",
    objectFit: "fill",
  };
  return (
    <Carousel className="slider w-100 my-1 mx-auto rounded shadow-lg">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={carouselPhotos}
          src="https://s2982.pcdn.co/wp-content/uploads/2021/09/open-book-pages-fanned-out.jpg.optimal.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={carouselPhotos}
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_587536358_2000133320009280405_395605.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={carouselPhotos}
          src="https://assets.teenvogue.com/photos/618db60d30cb67f813a54c64/16:9/w_2560%2Cc_limit/GettyImages-1124778031.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={carouselPhotos}
          src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
