import React, { useState, useEffect } from "react";
import { TfiSearch } from "react-icons/tfi";
const Search = ({ searchByName }) => {
  const [searchedBook, setSearchedBook] = useState("");

  return (
    <>
      <form
        className=" form-inline my-2 my-lg-0 col-10 col-md-6 col-lg-4 d-flex py-5 mx-auto"
        onSubmit={(e) => searchByName(e, searchedBook)}
      >
        <input
          className="form-control mr-sm-2 py-4"
          type="search"
          defaultValue={searchedBook}
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchedBook(e.target.value)}
        />
        <button className="btn btn-danger my-2 my-sm-0 px-4" type="submit">
          <TfiSearch />
        </button>
      </form>
    </>
  );
};
export default Search;
