import React, { useState, useEffect } from "react";

const Search = ({ searchByName }) => {
  const [searchedBook, setSearchedBook] = useState("");
  return (
    <>
      <form className="form-inline my-2 my-lg-0 w-25 d-flex py-5 mx-auto">
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
          onClick={(e) => searchByName(searchedBook)}
        >
          Search
        </button>
      </form>
    </>
  );
};
export default Search;
