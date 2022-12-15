import React, { useState, useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [updateRequest, setUpdateRequest] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [bookID, setBookID] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState();
  const [src, setSrc] = useState("");
  const [qty, setQty] = useState();
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState();
  const [dimensions, setDimensions] = useState("");
  const [language, setLanguage] = useState("");
  const [aboutAuthor, setAboutAuthor] = useState("");
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

  fetchData();

  const handleEditBtn = (e, id) => {
    e.preventDefault();
    setBookID(id);
    setUpdateRequest(true);
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
        setDataToUpdate(resp);
      });
  };
  // console.log(dataToUpdate.title);
  const handleUpdateForm = (e) => {
    const data = {
      title: title,
      price: Number(price),
      src: src,
      qty: Number(qty),
      publisher: publisher,
      year: year,
      dimensions: dimensions,
      description: description,
      language: language,
      author: {
        authorName: author,
        aboutAuthor: aboutAuthor,
      },
    };
    fetch(`${API}/${bookID}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
  };
  const handleDeleteBtn = (e, id) => {
    e.preventDefault();
    console.log(id);
    fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  };
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
                    <td className="p-3">{el.title}</td>
                    <td className="p-3">{el.author.authorName}</td>
                    <td className="p-3">{el.price}</td>
                    <td className="p-3 justify-content-center">
                      <button
                        className="mx-3 btn btn-info px-4"
                        onClick={(e) => handleEditBtn(e, el.id)}
                      >
                        <GrEdit />
                      </button>

                      <button
                        className="btn btn-danger px-4"
                        onClick={(e) => handleDeleteBtn(e, el.id)}
                      >
                        <MdOutlineDelete />
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
      {updateRequest && dataToUpdate ? (
        <>
          <div className="w-50  my-1 mx-auto shadow-lg p-3">
            <h2 className="bg-danger bg-opacity-25 py-3 text-center">
              Update Book
            </h2>
            <form onClick={(e) => handleUpdateForm(e)}>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookTitle">Book Title</label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookTitle"
                  value={dataToUpdate.title}
                  aria-describedby="emailHelp"
                  placeholder="Enter Book Title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group p-3 my-1">
                <label htmlFor="bookAuthor">Author </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookAuthor"
                  value={dataToUpdate.author.authorName}
                  placeholder="Enter Author/s name"
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPrice">Book Price </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="form-control my-1"
                  id="bookPrice"
                  value={dataToUpdate.price}
                  placeholder="Enter Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookYear">Year </label>
                <input
                  type="number"
                  value={dataToUpdate.year}
                  min="100"
                  step="1"
                  className="form-control my-1"
                  id="bookYear"
                  placeholder="Enter Year"
                  required
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPhoto">Photo </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookPhoto"
                  value={dataToUpdate.src}
                  placeholder="Enter URL"
                  required
                  onChange={(e) => setSrc(e.target.value)}
                />
              </div>
              <div className="form- p-3 my-1">
                <label htmlFor="bookQty">Quantity </label>
                <input
                  type="number"
                  value={dataToUpdate.qty}
                  min="1"
                  step="1"
                  className="form-control my-1"
                  id="bookQty"
                  placeholder="Enter Qty"
                  required
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>
              <div className="form- p-3 my-1">
                <label htmlFor="bookDescription">Book Description </label>
                <input
                  type="text"
                  value={dataToUpdate.description}
                  className="form-control my-1"
                  id="bookDescription"
                  placeholder="Description of book"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPublisher">Publisher </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookPublisher"
                  value={dataToUpdate.publisher}
                  placeholder="Enter Publisher"
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPublisher">Dimensions </label>
                <input
                  type="text"
                  className="form-control my-1"
                  onChange={(e) => setDimensions(e.target.value)}
                  id="bookPublisher"
                  value={dataToUpdate.dimensions}
                  placeholder="E.g 129 x 196 x 33"
                />
              </div>
              <div className="radios p-3">
                <p> Choose Book Language :</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="EN"
                    id="EN"
                    value="EN"
                    onChange={() => setLanguage("EN")}
                  />
                  <label className="form-check-label" htmlFor="EN">
                    English
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AL"
                    id="AL"
                    value="AL"
                    onChange={() => setLanguage("AL")}
                  />
                  <label className="form-check-label" htmlFor="AL">
                    Albanian
                  </label>
                </div>
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookAuthorDescription">
                  Some words htmlFor author{" "}
                </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookAuthorDescription"
                  value={dataToUpdate.author.aboutAuthor}
                  placeholder="Enter a quick description about author"
                  onChange={(e) => setAboutAuthor(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary px-5 my-1">
                Update Book
              </button>
            </form>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
