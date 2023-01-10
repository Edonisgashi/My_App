import React, { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Header from "./Header";
import { Link } from "react-router-dom";
const Cart = ({ cart }) => {
  const [arr, setArr] = useState([]);

  const transportFee = arr.map((el) => el.price * 0.1 * el.orderQty);
  console.log(transportFee);

  const totalPrice = arr.map((el) => el.price * el.orderQty);
  useEffect(() => {
    setArr([...new Set(cart)]);
  }, [cart]);
  console.log(arr);

  const deleteProduct = (e, i) => {
    console.log(i);
    const newArr = arr.filter((element, index) => index !== i);
    console.log(newArr);
    setArr(newArr);
  };
  const handleIncrement = (id) => {
    setArr((arr) =>
      arr.map((item) =>
        id === item.id ? { ...item, orderQty: item.orderQty + 1 } : item
      )
    );
  };
  const handleDecrement = (e, id) => {
    setArr((arr) =>
      arr.map((item) => {
        if (id === item.id && item.orderQty > 1) {
          return { ...item, orderQty: item.orderQty - 1 };
        }

        return item;
      })
    );
  };

  return (
    <>
      <Header />
      <div className="cart w-75  shadow-lg mx-auto my-5">
        <div className="head d-flex align-items-center justify-content-evenly">
          <h2 className="text-muted ">Shopping Cart</h2>

          <span>{arr.length} items</span>
        </div>

        {arr.length > 0
          ? arr.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="cart--item d-flex w-75 my-3 border border-dark p-1 "
                >
                  <img src={item.src} alt="" className="img-fluid w-25" />
                  <div className="m-5 qty h-25 d-flex align-items-center">
                    <button
                      id={index}
                      className="btn btn-info btn-sm mx-2 decrease"
                      onClick={(e) => handleDecrement(e, item.id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="text-muted mx-2">{item.orderQty}</span>
                    <button
                      id={index}
                      className="btn btn-info btn-sm mx-2"
                      onClick={() => handleIncrement(item.id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <h2 className="m-5">
                    Price : ${(item.price * item.orderQty).toFixed(2)}
                  </h2>
                  <button
                    id={index}
                    className="btn btn-outline-danger btn-sm h-25 mt-5 px-5"
                    onClick={(e) => deleteProduct(e, index)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              );
            })
          : null}
        {arr.length === 0 && (
          <h2 className="text-muted d-flex  justify-content-center">
            There are no Books on the cart
          </h2>
        )}
        {arr.length > 0 ? (
          <div className="footer d-flex flex-column align-items-end p-5">
            <h4 className="text-muted">
              Total Price :
              <span>
                {" "}
                $ {totalPrice.reduce((acc, el) => acc + el).toFixed(2)}
              </span>
            </h4>
            <h4 className="text-muted">
              Transport Fee :
              <span>
                {" "}
                $ {transportFee.reduce((acc, el) => acc + el).toFixed(2)}{" "}
              </span>
            </h4>

            <h4 className="text-muted">
              Total to Pay :
              <span className="text-danger p-2">
                {" "}
                ${" "}
                {[...totalPrice, ...transportFee]
                  .reduce((acc, el) => acc + el)
                  .toFixed(2)}{" "}
              </span>
            </h4>
            <em>Note the Fee of Transport is 0.1% of the bill </em>
            <Link to="/ordermessage" className="btn btn-outline-danger my-3">
              Continue with payment
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Cart;
