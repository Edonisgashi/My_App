import React, { useState, useEffect, useRef } from "react";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "./Header";
import BackTop from "./BackTop";
import API from "../API_URL/API";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [updateRequest, setUpdateRequest] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [bookToUpdate, setBookToUpdate] = useState([]);
  const [dataToDelete, setDataToDelete] = useState();
  const formRef = useRef(null);

  const fetchData = async () => {
    await fetch(`${API}/books.json`)
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

  const handleEditBtn = (e, id) => {
    e.preventDefault();

    setUpdateRequest(true);
    setDataToUpdate(Object.values(data).find((book) => book.id === id));
    console.log(dataToUpdate);
    setBookToUpdate(
      Object.entries(data).find((book) => book[1].id === dataToUpdate.id)
    );
    console.log(bookToUpdate);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();

    if (bookToUpdate) {
      fetch(`${API}/books/${bookToUpdate[0]}.json`, {
        method: "PUT",
        body: JSON.stringify(bookToUpdate[1]),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => console.log(error));
    }
  };
  const handleDeleteBtn = (e, id) => {
    e.preventDefault();
    setDataToDelete(
      data ? Object.entries(data).find((book) => book[1].id == id) : null
    );

    if (dataToDelete) {
      fetch(`${API}/books/${dataToDelete[0]}.json`, {
        method: "DELETE",
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };
  console.log(data);

  return (
    <div className="w-100" style={{ fontFamily: "'Rubik', sans-serif" }}>
      <Header />
      <BackTop />
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
              {data
                ? Object.values(data).map((el, i) => {
                    return (
                      <tr key={i}>
                        <td className="p-3">{el.title}</td>
                        <td className="p-3">{el.author.authorName}</td>
                        <td className="p-3">{el.price}</td>
                        <td className="p-3 justify-content-center btns">
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
                  })
                : null}
            </tbody>
            {Object.values(data).length > 0 ? (
              <tfoot>
                <tr>
                  <td>Total Stock in Dollars</td>
                  <td>
                    ${" "}
                    {Object.values(data)
                      .map((el) => el.price * el.qty)
                      .reduce((acc, el) => acc + el)
                      .toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            ) : null}
          </table>
        ) : (
          <h2>Sorry , there was a problem with loading data</h2>
        )}
      </section>
      {updateRequest && dataToUpdate && bookToUpdate.length > 0 ? (
        <>
          <div className="w-75 my-1 mx-auto shadow-lg p-3">
            <h2 className="bg-danger bg-opacity-25 py-3 text-center">
              Update Book
            </h2>
            <form
              onSubmit={(e) => handleUpdateForm(e)}
              ref={formRef}
              className="update__form"
            >
              <div className="form-group p-3 my-1">
                <label htmlFor="bookTitle">Book Title</label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookTitle"
                  defaultValue={bookToUpdate[1].title}
                  aria-describedby="emailHelp"
                  placeholder="Enter Book Title"
                  required
                  onChange={(e) => {
                    bookToUpdate[1].title = e.target.value;
                    console.log(e.target.value);
                  }}
                />
              </div>

              <div className="form-group p-3 my-1">
                <label htmlFor="bookAuthor">Author </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookAuthor"
                  defaultValue={bookToUpdate[1].author.authorName}
                  placeholder="Enter Author/s name"
                  required
                  onChange={(e) =>
                    (bookToUpdate[1].author.authorName = e.target.value)
                  }
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
                  defaultValue={bookToUpdate[1].price}
                  placeholder="Enter Price"
                  required
                  onChange={(e) => {
                    bookToUpdate[1].price = Number(e.target.value);
                  }}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookYear">Year </label>
                <input
                  type="number"
                  defaultValue={bookToUpdate[1].year}
                  min="100"
                  step="1"
                  className="form-control my-1"
                  id="bookYear"
                  placeholder="Enter Year"
                  required
                  onChange={(e) => {
                    bookToUpdate[1].year = Number(e.target.value);
                  }}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPhoto">Photo </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookPhoto"
                  defaultValue={bookToUpdate[1].src}
                  placeholder="Enter URL"
                  required
                  onChange={(e) => {
                    bookToUpdate[1].src = e.target.value;
                  }}
                />
              </div>
              <div className="form- p-3 my-1">
                <label htmlFor="bookQty">Quantity </label>
                <input
                  type="number"
                  defaultValue={bookToUpdate[1].qty}
                  min="0"
                  step="1"
                  className="form-control my-1"
                  id="bookQty"
                  placeholder="Enter Qty"
                  required
                  onChange={(e) => {
                    bookToUpdate[1].qty = Number(e.target.value);
                  }}
                />
              </div>
              <div className="form- p-3 my-1">
                <label htmlFor="bookDescription">Book Description </label>
                <input
                  type="text"
                  defaultValue={bookToUpdate[1].description}
                  className="form-control my-1"
                  id="bookDescription"
                  placeholder="Description of book"
                  onChange={(e) => {
                    bookToUpdate[1].description = e.target.value;
                  }}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPublisher">Publisher </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookPublisher"
                  defaultValue={bookToUpdate[1].publisher}
                  placeholder="Enter Publisher"
                  onChange={(e) => {
                    bookToUpdate[1].publisher = e.target.value;
                  }}
                />
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookPublisher">Dimensions </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookPublisher"
                  defaultValue={bookToUpdate[1].dimensions}
                  placeholder="E.g 129 x 196 x 33"
                  onChange={(e) => {
                    bookToUpdate[1].dimensions = e.target.value;
                  }}
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
                    defaultValue="EN"
                    onChange={() => {
                      bookToUpdate[1].language = "EN";
                    }}
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
                    defaultValue="AL"
                    onChange={() => {
                      bookToUpdate[1].language = "AL";
                    }}
                  />
                  <label className="form-check-label" htmlFor="AL">
                    Albanian
                  </label>
                </div>
              </div>
              <div className="form-group p-3 my-1">
                <label htmlFor="bookAuthorDescription">Some words Author</label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="bookAuthorDescription"
                  defaultValue={bookToUpdate[1].aboutAuthor}
                  placeholder="Enter a quick description about author"
                  onChange={(e) => {
                    bookToUpdate[1].author.authorName = e.target.value;
                  }}
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
