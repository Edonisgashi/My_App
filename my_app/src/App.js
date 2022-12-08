import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BiArrowFromLeft } from "react-icons/bi";
import { Link, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [book, setBook] = useState([]);
  const [loaded, setLoader] = useState(false);
  const API = "http://localhost:3000/books";

  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setBook(retrDt);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Slider />

      <div className="cardContainer">
        {loaded
          ? book.map((el, i) => {
              return (
                <div className="card text-center " key={i}>
                  <div className="inner">
                    <img
                      className="card-img-top img-fluid "
                      src={el.src}
                      alt="Card image cap"
                    ></img>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title h4" style={{ fontWeight: 600 }}>
                      {el.title}
                    </h2>
                    <h2 className="text-muted h5" style={{ fontWeight: 500 }}>
                      {el.author.authorName}
                    </h2>
                    <h4 className="text-info">{el.price.toFixed(2)}€</h4>

                    <Button variant="outline-danger">Add to cart</Button>
                    <Link to="/product">
                      {" "}
                      <Button variant="outline-success">
                        Details <BiArrowFromLeft />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <Footer />
    </>
  );
};

export default App;
