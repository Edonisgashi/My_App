import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Cards from "./components/Cards";
import Search from "./components/Search";
import "./App.css";
import { DataContext } from "./Context/DataProvider";
const App = ({ addToCartBtn, cartLength }) => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  const { data } = useContext(DataContext);

  const searchByName = (e, name) => {
    e.preventDefault();
    const searchedArr = book.filter((book) => book.title.match(name));
    if (name !== "") {
      setBook(searchedArr);
    } else {
      setBook(book);
    }
  };
  const showDetails = (e, id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    setBook(Object.values(data));
  }, [data]);

  return (
    <>
      <Header cartLength={cartLength} />
      <Slider />
      <Search searchByName={searchByName} />

      <BackTop />
      <div className="cardContainer  my-5 mx-auto">
        {book.length > 0
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
