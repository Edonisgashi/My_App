import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AddABook = () => {
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
  const [loader, setLoader] = useState(false);
  const randomId = Math.floor(Math.random() * 10000000000000).toFixed(0);
  const API = "  http://localhost:3000/books";
  const handleForm = (e) => {
    setLoader(true);
  };

  const addBook = async () => {
    const data = {
      title: title,
      price: Number(price),
      src: src,
      qty: Number(qty),
      publisher: publisher,
      year: year,
      dimensions: dimensions,
      id: Number(randomId),
      orderQty: 1,
      description: description,
      language: language,
      author: {
        authorName: author,
        aboutAuthor: aboutAuthor,
      },
    };
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (loader) {
      addBook();
    }
  });

  return (
    <>
      <Link to="/dashboard" className="btn btn-primary m-2 p-3">
        <AiOutlineArrowLeft />
      </Link>
      <div className="w-50  my-1 mx-auto shadow-lg p-3">
        <h2 className="bg-danger bg-opacity-25 py-3 text-center">Add Book</h2>
        <form onSubmit={(e) => handleForm(e)}>
          <div className="form-group p-3 my-1">
            <label htmlFor="bookTitle">Book Title</label>
            <input
              type="text"
              className="form-control my-1"
              id="bookTitle"
              value={title}
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
              value={author}
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
              value={price}
              placeholder="Enter Price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group p-3 my-1">
            <label htmlFor="bookYear">Year </label>
            <input
              type="number"
              value={year}
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
              value={src}
              placeholder="Enter URL"
              required
              onChange={(e) => setSrc(e.target.value)}
            />
          </div>
          <div className="form- p-3 my-1">
            <label htmlFor="bookQty">Quantity </label>
            <input
              type="number"
              value={qty}
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
              value={description}
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
              value={publisher}
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
              value={dimensions}
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
              value={aboutAuthor}
              placeholder="Enter a quick description about author"
              onChange={(e) => setAboutAuthor(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary px-5 my-1">
            Add book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddABook;
