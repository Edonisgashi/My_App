import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Cards from "./components/Cards";
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
                <Cards
                  book={el}
                  addToCartBtn={addToCartBtn}
                  showDetails={showDetails}
                  key={el.id}
                />
              );
            })
          : null}
      </div>

      <Footer />
    </>
  );
};

export default App;
