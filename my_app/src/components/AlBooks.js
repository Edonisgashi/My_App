import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import BackTop from "./BackTop";
import { DataContext } from "../Context/DataProvider";
const AlBooks = ({ addToCartBtn, cartLength }) => {
  const [alBook, setAlBook] = useState([]);
  const { data } = useContext(DataContext);
  useEffect(() => {
    setAlBook(Object.values(data));
  }, [data]);
  const alBooks = alBook.filter((el) => el.language === "AL");

  return (
    <>
      <Header cartLength={cartLength} />
      <BackTop />
      <div className="cardContainer  my-5 mx-auto">
        {alBooks.length > 0
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
