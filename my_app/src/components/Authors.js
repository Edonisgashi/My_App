import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CgProfile } from "react-icons/cg";
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
          <section
            key={i}
            className="author--container shadow border-0 rounded my-5 mx-auto p-5"
          >
            <h2 className="my-5 text-muted d-flex justify-content-evenly w-50">
              {" "}
              <CgProfile
                style={{ transform: "scale(4.5)" }}
                className="mx-5 mb-5"
              />{" "}
              {el.authorName}
            </h2>
            <p>{el.aboutAuthor}</p>
          </section>
        );
      })}
      <Footer />
    </>
  );
};

export default Authors;
