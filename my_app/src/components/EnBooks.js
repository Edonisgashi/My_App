import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import BackTop from "./BackTop";
import { DataContext } from "../Context/DataProvider";
const EnBooks = ({ addToCartBtn, cartLength }) => {
  const [enBook, setEnBook] = useState([]);
  const [loader, setLoader] = useState(false);

  const { data } = useContext(DataContext);
  useEffect(() => {
    setEnBook(Object.values(data));
  }, [data]);

  const enBooks = enBook.filter((el) => el.language === "EN");

  return (
    <>
      <Header cartLength={cartLength} />
      <BackTop />
      <div className="cardContainer  my-5 mx-auto">
        {enBooks.length > 0
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
