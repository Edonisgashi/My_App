import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Cards from "./components/Cards";
import Search from "./components/Search";
import "./App.css";

const App = ({
  addToCartBtn,
  selectedProduct,
  setSelectedProduct,
  cartLength,
}) => {
  const [book, setBook] = useState([]);
  const [loaded, setLoader] = useState(false);
  const [loadedBook, setLoadedBook] = useState([]);
  const [bookID, setBookID] = useState();
  const API = "https://ebookstore-4281b-default-rtdb.firebaseio.com";
  const navigate = useNavigate();
  const fetchData = async () => {
    const retrievedData = await fetch(`${API}/books.json`)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setBook(Object.values(retrDt));
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };
  console.log(book);

  useEffect(() => {
    fetchData();
  }, [loaded]);
  const searchByName = (e, name) => {
    console.log(name);
    const searchedArr = book.filter((book) => book.title.match(name));
    if (name !== "") {
      setBook(searchedArr);
    } else {
      setBook(book);
    }
  };
  const showDetails = (e, id) => {
    e.preventDefault();

    fetch(`${API}/books/${id}.json`)
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
      <Header cartLength={cartLength} />
      <Slider />
      <Search searchByName={searchByName} />

      <BackTop />
      <div className="cardContainer  my-5 mx-auto">
        {loaded && book.length > 0
          ? book.map((el) => {
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
