import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import BackTop from "./BackTop";
import API from "../API_URL/API";
const AlBooks = ({ addToCartBtn, cartLength }) => {
  const [alBook, setAlBook] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    const retrievedData = await fetch(`${API}/books.json`)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setAlBook(Object.values(retrDt));
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
      <BackTop />
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
