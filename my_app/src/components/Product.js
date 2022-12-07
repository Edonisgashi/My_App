import React, { useState, useEffect } from "react";

const Product = () => {
  const [book, setBook] = useState();
  const [load, setLoad] = useState(false);

  const API = "http://localhost:3000/books";
  const getID = (e, id) => {
    e.preventDefault();
    console.log(id);
    const getData = async () => {
      await fetch(`${API}/${id}`, {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setBook(data);
          setLoad(true);
        })
        .then((data) => console.log(data));
    };

    getData();
    console.log(book);
  };
  return (
    <div>
      <h1> Hello </h1>
    </div>
  );
};

export default Product;
