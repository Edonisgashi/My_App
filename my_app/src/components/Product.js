import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const API = " http://localhost:3000/books";
  const getData = async () => {
    await fetch(`${API}/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoaded(true);
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [props.id]);

  console.log(product);
};

export default Product;
