import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { BiArrowFromLeft } from "react-icons/bi";
import { Link, useRoutes } from "react-router-dom";
import Product from "./components/Product";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import "./App.css";

const App = () => {
  const [book, setBook] = useState([]);
  const [loaded, setLoader] = useState(false);
  const [incomingBook, setIncomingBook] = useState([]);
  const [bookID, setBookID] = useState();
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
  }, [loaded]);
  const showDetails = (e, id) => {
    e.preventDefault();
    setBookID(id);
    console.log(id);

    fetch(`${API}/${id}`)
      .then((resolved) => resolved.json())
      .then((data) => {
        setIncomingBook(data);
        console.log(data);
      });
  };

  return (
    <>
      <Header />
      <Slider />
      <BackTop />
      <div className="cardContainer  my-5 mx-auto">
        {loaded
          ? book.map((el, i) => {
              return (
                <div className="card text-center shadow border-0" key={i}>
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
                    <h4 className="text-info">${el.price.toFixed(2)}</h4>

                    <Button variant="danger" className="mx-2 align-self-end">
                      Add to cart
                    </Button>

                    <Button
                      variant="light"
                      className="mx-2 align-self-end "
                      onClick={(e) => showDetails(e, el.id)}
                    >
                      Details <BiArrowFromLeft />
                    </Button>
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
