import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { matchRoutes } from "react-router-dom";
const Authors = () => {
  const [author, setAuthor] = useState([]);
  const [loader, setLoader] = useState(false);
  const API = "http://localhost:3000/books";

  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        // console.log(retrDt);
        setAuthor(retrDt);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(author);
  const uniqueAuthor = [
    ...author
      .reduce(
        (map, obj) => map.set(obj.author.authorName, obj.author),
        new Map()
      )
      .values(),
  ];
  console.log(uniqueAuthor);
  return (
    <>
      <Header />
      {uniqueAuthor.map((el, i) => {
        return (
          <section key={i} className="author--container">
            <h2>{el.authorName}</h2>
            <p>{el.aboutAuthor}</p>
          </section>
        );
      })}
      <Footer />
    </>
  );
};

export default Authors;
