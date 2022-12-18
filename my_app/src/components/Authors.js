import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
      <section className="authors__container w-75 row d-flex align-items-center justify-content-center">
        {uniqueAuthor.map((el, i) => {
          return (
            <Link className="my-5 text-muted px-auto py-4 text-center d-flex justify-content-start align-items-center col-3 text-decoration-none ">
              {" "}
              <CgProfile
                style={{ transform: "scale(2.5)" }}
                className="mx-4 my-auto"
              />{" "}
              <h2 className="authorname"> {el.authorName}</h2>
            </Link>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default Authors;
