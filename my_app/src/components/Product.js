import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackTop from "./BackTop";
import { useParams } from "react-router-dom";
import API from "../API_URL/API";
const Product = ({ addToCartBtn }) => {
  const [book, setBook] = useState();
  const [loader, setLoader] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`${API}/books.json`)
      .then((response) => response.json())
      .then((data) => {
        setBook(Object.values(data));
        setLoader(true);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [id]);
  console.log(book);
  const selectedBook = book ? book.find((account) => account.id == id) : null;
  console.log(selectedBook);
  if (book === undefined || !book) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <Header />
      <BackTop />
      {loader && selectedBook !== null ? (
        <div className="row m-5  p-5 w-75">
          <img
            className="col-8 col-lg-3 mx-5"
            src={selectedBook.src}
            alt={selectedBook.title}
          />
          <div className="text-muted d-flex flex-column align-items-start justify-content-evenly mx-5">
            <h2 className="my-3">{selectedBook.title}</h2>
            <h3 className="my-3">{selectedBook.author.authorName}</h3>
            <h3 className="mb-3 text-danger">
              ${selectedBook.price.toFixed(2)}
            </h3>

            <button
              className="btn btn-danger my-4 w-50 shadow-lg"
              onClick={(e) => addToCartBtn(e, selectedBook)}
            >
              Add to Cart
            </button>
            <span className="my-1">
              <b>Publisher</b> : {selectedBook.publisher}
            </span>
            <span className="my-1">
              <b>Year</b> : {selectedBook.year}
            </span>
            {selectedBook.dimensions && selectedBook.dimensions !== "N/A" ? (
              <span className="my-1">
                <b>Dimensions</b> : {selectedBook.dimensions}
              </span>
            ) : null}
            <span className="my-1">
              <b>QTY</b> : {selectedBook.qty}
            </span>
          </div>
        </div>
      ) : null}
      {selectedBook.description ? (
        <div className="footer w-75 bg-light p-5 shadow-lg m-5">
          <h4>Description:</h4>
          <p>{selectedBook.description}</p>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default Product;
