import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import BackTop from "./BackTop";
import API from "../API_URL/API";
const EnBooks = ({ addToCartBtn, cartLength }) => {
  const [enBook, setEnBook] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    const retrievedData = await fetch(`${API}/books.json`)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setEnBook(Object.values(retrDt));
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const enBooks = enBook.filter((el) => el.language === "EN");

  return (
    <>
      <Header cartLength={cartLength} />
      <BackTop />
      <div className="cardContainer  my-5 mx-auto">
        {loader
          ? enBooks.map((el, i) => {
              return <Cards key={i} addToCartBtn={addToCartBtn} book={el} />;
            })
          : null}
      </div>

      <Footer />
    </>
  );
};

export default EnBooks;
