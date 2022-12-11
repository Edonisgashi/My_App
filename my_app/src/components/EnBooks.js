import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { Link, useRoutes } from "react-router-dom";
import Footer from "./Footer";
import { BiArrowFromLeft } from "react-icons/bi";
const EnBooks = () => {
  const [enBook, setEnBook] = useState([]);
  const [loader, setLoader] = useState(false);
  const API = "http://localhost:3000/books";

  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setEnBook(retrDt);
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
      <Header />

      <div className="cardContainer  my-5 mx-auto">
        {loader
          ? enBooks.map((el, i) => {
              return (
                <div className="card text-center shadow border-0 " key={i}>
                  <div className="inner">
                    <img
                      className="card-img-top img-fluid "
                      src={el.src}
                      alt="Card image cap"
                    ></img>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title h4" style={{ fontWeight: 600 }}>
                      {el.title}
                    </h2>
                    <h2 className="text-muted h5" style={{ fontWeight: 500 }}>
                      {el.author.authorName}
                    </h2>
                    <h4 className="text-info">${el.price.toFixed(2)}</h4>

                    <Button variant="danger" className="mx-2">
                      Add to cart
                    </Button>

                    <Link to="/product/1">
                      <Button variant="light" className="mx-2">
                        Details <BiArrowFromLeft />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <Footer />
    </>
  );
};

export default EnBooks;
