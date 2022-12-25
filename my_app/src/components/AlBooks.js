import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";

const AlBooks = ({ addToCartBtn, cartLength }) => {
  const [alBook, setAlBook] = useState([]);
  const [loader, setLoader] = useState(false);
  const API = "http://localhost:3000/books";

  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setAlBook(retrDt);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const alBooks = alBook.filter((el) => el.language === "AL");

  return (
    <>
      <Header cartLength={cartLength} />

      <div className="cardContainer  my-5 mx-auto">
        {loader
          ? alBooks.map((el, i) => {
              return <Cards key={i} book={el} addToCartBtn={addToCartBtn} />;
            })
          : null}
      </div>

      <Footer />
    </>
  );
};

export default AlBooks;
