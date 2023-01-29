import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { HashRouter, Route, Routes } from "react-router-dom";
import EnBooks from "./components/EnBooks";
import AlBooks from "./components/AlBooks";
import Authors from "./components/Authors";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import "./index.css";
import AddABook from "./components/AddABook";
import Dashboard from "./components/Dashboard";
import OrderMessage from "./components/OrderMessage";
import BookByAuthor from "./components/BookByAuthor";
import DataProvider from "./Context/DataProvider";
import ProtectedRoute from "./components/ProtectedRoute";
const Index = () => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState();
  const addToCartBtn = (e, item) => {
    e.stopPropagation();
    cart.push(item);
    setCartLength(cart.length);
  };

  return (
    <>
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <App addToCartBtn={addToCartBtn} cartLength={cartLength} />
              }
            />
            <Route
              path="/enbooks"
              element={
                <EnBooks addToCartBtn={addToCartBtn} cartLength={cartLength} />
              }
            />
            <Route
              path="/albooks"
              element={
                <AlBooks addToCartBtn={addToCartBtn} cartLength={cartLength} />
              }
            />
            <Route path="/author" element={<Authors />} />
            <Route path="/register" element={<Register />} />
            <Route path="/newbook" element={<AddABook />} />
            <Route
              path="/product/:id"
              element={<Product addToCartBtn={addToCartBtn} />}
            />
            <Route path="/ordermessage" element={<OrderMessage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/authorbooks/:name"
              element={<BookByAuthor addToCartBtn={addToCartBtn} />}
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute component={Dashboard} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
