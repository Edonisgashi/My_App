import React, { useState, useEffect } from "react";

const Search = ({ searchByName }) => {
  const [searchedBook, setSearchedBook] = useState("");
  const [time, setTime] = useState();

  const showTime = () =>
    setInterval(() => {
      const newDate = new Date().toLocaleString();
      setTime(newDate);
      console.log(time);
    }, 1000);
  showTime();
  return (
    <>
      <h2 className="text-muted mx-5"> {time}</h2>
      <form className=" form-inline my-2 my-lg-0 col-10 col-md-6 col-lg-4 d-flex py-5 mx-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          defaultValue={searchedBook}
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchedBook(e.target.value)}
        />
        <button
          className="btn btn-outline-danger my-2 my-sm-0"
          type="submit"
          onClick={(e) => searchByName(e, searchedBook)}
        >
          Search
        </button>
      </form>
    </>
  );
};
export default Search;
