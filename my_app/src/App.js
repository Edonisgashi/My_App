import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";

import "./App.css";

const App = ({ addToCartBtn, selectedProduct, setSelectedProduct }) => {
  const [book, setBook] = useState([]);
  const [loaded, setLoader] = useState(false);
  const [loadedBook, setLoadedBook] = useState([]);
  const [bookID, setBookID] = useState();
  const API = "http://localhost:3000/books";
  const navigate = useNavigate();
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

    fetch(`${API}/${id}`)
      .then((resolved) => resolved.json())
      .then((data) => {
        console.log(data);
        setLoadedBook(data);
      })
      .catch((err) => console.log(err));

    console.log(loadedBook);
    navigate(`/product/${id}`);
  };
  const objectAsString = JSON.stringify(loadedBook);
  window.localStorage.setItem("book", objectAsString);

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
                  <div className="card-body d-flex flex-column align-items-center justify-content-between">
                    <h2 className="card-title h4" style={{ fontWeight: 600 }}>
                      {el.title}
                    </h2>
                    <h2 className="text-muted h5" style={{ fontWeight: 500 }}>
                      {el.author.authorName}
                    </h2>
                    <h4 className="text-info">${el.price.toFixed(2)}</h4>

                    <div className="btns d-flex flex-row">
                      <Button
                        variant="danger"
                        className="mx-2 align-self-end"
                        onClick={(e) => addToCartBtn(e, el)}
                      >
                        Add to cart
                      </Button>

                      <NavLink to={`/product/${el.id}`}>
                        <button
                          className="mx-2 align-self-end btn btn-light"
                          onClick={(e) => showDetails(e, el.id)}
                        >
                          Details
                        </button>
                      </NavLink>
                    </div>
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
