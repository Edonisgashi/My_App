import React, { useState, useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";
import { BsSave2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const API = "http://localhost:3000/books";
  const fetchData = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((resp) => {
        setData(resp);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-100" style={{ fontFamily: "'Rubik', sans-serif" }}>
      <Header />
      <ul>
        <li className="btn btn-outline-info m-5 p-3">
          <Link className="text-decoration-none" to="/newbook">
            Add new book
          </Link>
        </li>
      </ul>
      <section className="container">
        {loaded ? (
          <table className="table table-bordered table-striped table-hover align-items-center">
            <thead>
              <tr>
                <th className="py-3">Book Title</th>
                <th className="py-3">Book Author</th>
                <th className="py-3">Book Price</th>
                <th className="py-3" colSpan={2}>
                  {" "}
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, i) => {
                return (
                  <tr key={i}>
                    <td contentEditable="true" className="p-3">
                      {el.title}
                    </td>
                    <td contentEditable="true" className="p-3">
                      {el.author.authorName}
                    </td>
                    <td contentEditable="true" className="p-3">
                      {el.price}
                    </td>
                    <td
                      contentEditable="true"
                      className="p-3 justify-content-center"
                    >
                      <button className="mx-3 btn btn-info px-4">
                        <GrEdit />
                      </button>

                      <button className="btn btn-danger px-4">
                        <MdOutlineDelete />
                      </button>
                      <button className="mx-3 btn btn-success px-4">
                        <BsSave2 />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2>Sorry , there was a problem with loading data</h2>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
