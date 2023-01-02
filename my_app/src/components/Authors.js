import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Authors = () => {
  const [author, setAuthor] = useState([]);
  const [loader, setLoader] = useState(false);
  const API = "https://ebookstore-4281b-default-rtdb.firebaseio.com";

  const fetchData = async () => {
    const retrievedData = await fetch(`${API}/books.json`)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        // console.log(retrDt);
        setAuthor(Object.values(retrDt));
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
  const uniqueAuthorArrSorted = uniqueAuthor.sort((a, b) => {
    const nameA = a.authorName.toUpperCase();
    const nameB = b.authorName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log(uniqueAuthor);
  return (
    <>
      <Header />
      <section className="authors__container row d-flex w-100 flex-row flex-wrap-wrap my-5 mx-2">
        {uniqueAuthor.map((el, i) => {
          return (
            <Link
              className="author col-12 col-lg-2 m-2"
              to={`/authorbooks/${el.authorName}`}
            >
              <h2>{el.authorName}</h2>
            </Link>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default Authors;
