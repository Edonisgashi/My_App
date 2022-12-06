import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  //   const [grades, setGrades] = useState([]);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [book, setBook] = useState([]);
  const [loaded, setLoader] = useState(false);
  const API = "http://localhost:3000/books";

  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setBook(retrDt);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cardContainer">
      {book.map((el, i) => {
        return (
          <div className="card text-center " key={i}>
            <div className="inner">
              <img
                className="card-img-top img-fluid "
                src={el.src}
                alt="Card image cap"
              ></img>
            </div>
            <div className="card-body">
              <h2 className="card-title h4">{el.title}</h2>
              <h2 className="text-muted h5">{el.author}</h2>
              <h4 className="text-info">{el.price.toFixed(2)}€</h4>

              <button className="btn btn-outline-danger btn-large">
                Add to Cart
              </button>
              <button className="btn btn-outline-info btn-small ">
                Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
