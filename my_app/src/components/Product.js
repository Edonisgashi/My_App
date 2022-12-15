import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackTop from "./BackTop";
import { useParams } from "react-router-dom";
const API = "http://localhost:3000/books";

const Product = () => {
  const [book, setBook] = useState(null);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`${API}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
          setLoader(true);
        });
    } else {
      setLoader(false);
    }
  }, []);
  if (!book) {
    return <h2>Loading ...</h2>;
  }

  console.log(book);

  return (
    <>
      <Header />
      <BackTop />
      {loader && book !== null ? (
        <div className="d-flex  m-5  p-5">
          <img className="w-25" src={book.src} alt={book.title} />
          <div className="text-muted d-flex flex-column mx-5">
            <h2 className="my-3">{book.title}</h2>
            <h3 className="my-3">{book.author.authorName}</h3>
            <h3 className="mb-3 text-danger">${book.price.toFixed(2)}</h3>
            <div className="d-flex flex-row align-items-center">
              <button className="btn btn-outline-danger btn-sm px-3">-</button>
              <p className="mx-2 my-auto">0</p>
              <button className="btn btn-outline-success btn-sm px-3">+</button>
            </div>
            <button className="btn btn-danger my-4 w-50 shadow-lg">
              Add to Cart
            </button>
            <span>Publisher :{book.publisher}</span>
            <span>Year : {book.year}</span>
            <span>Dimensions : {book.dimensions}</span>
            <span>QTY : {book.qty}</span>
          </div>
        </div>
      ) : null}
      {book.description ? (
        <div className="footer w-75 bg-light p-5 shadow-lg m-5">
          <h4>Description:</h4>
          <p>{book.description}</p>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default Product;
