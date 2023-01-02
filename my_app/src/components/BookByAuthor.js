import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import { TfiArrowLeft } from "react-icons/tfi";

const BookByAuthor = ({ addToCartBtn, showDetails }) => {
  const [bookOfAuthor, setBookOfAuthor] = useState();
  const API = `https://ebookstore-4281b-default-rtdb.firebaseio.com/books.json`;
  const { name } = useParams();
  console.log(name);

  const getData = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setBookOfAuthor(Object.values(data)))
      .catch((error) => console.log(error));
  };
  const bookByAuthor = bookOfAuthor
    ? bookOfAuthor.filter((book) => book.author.authorName === name)
    : null;
  console.log(bookByAuthor);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />
      <Link to="/author" className="btn btn-outline-danger my-2 mx-5">
        <TfiArrowLeft />
      </Link>
      <div className="d-flex my-5 justify-content-center flex-wrap mx-5">
        {bookByAuthor && bookByAuthor !== null ? (
          bookByAuthor.map((el, i) => {
            return (
              <Cards
                book={el}
                addToCartBtn={addToCartBtn}
                showDetails={showDetails}
                key={el.id}
              />
            );
          })
        ) : (
          <div>
            <h1>
              Sorry there was a problem on loading data ...{" "}
              <Link to="/author">Go back</Link>
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookByAuthor;
