import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cards = ({ book, addToCartBtn, showDetails }) => {
  return (
    <div
      className="card text-center shadow border-0"
      onClick={(e) => showDetails(e, book.id)}
    >
      <div className="inner">
        <img
          className="card-img-top img-fluid "
          src={book.src}
          alt="Card image cap"
        ></img>
      </div>
      <span className="text-muted">{book.language}</span>
      <div className="card-body d-flex flex-column align-items-center justify-content-between">
        <h2 className="card-title h4" style={{ fontWeight: 600 }}>
          {book.title}
        </h2>
        <h2 className="text-muted h5" style={{ fontWeight: 500 }}>
          {book.author.authorName}
        </h2>
        <h4 className="text-info">${book.price.toFixed(2)}</h4>

        <div className=" d-flex flex-row">
          <Button
            variant="outline-danger"
            className="mx-2 align-self-end border-0"
            onClick={(e) => addToCartBtn(e, book)}
          >
            Add to cart
          </Button>

          <Link to={`/product/${book.id}`}>
            <Button
              variant="outline-danger"
              className="mx-2 align-self-end border-0"
              onClick={(e) => showDetails(e, book.id)}
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
