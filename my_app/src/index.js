import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Product from "./components/Product";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  useParams,
  BrowserRouter,
} from "react-router-dom";
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

const Index = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCartBtn = (e, item) => {
    console.log(item);
    cart.push(item);
    console.log(cart);
  };
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App
                addToCartBtn={addToCartBtn}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route path="/enbooks" element={<EnBooks />} />
          <Route path="/albooks" element={<AlBooks />} />
          <Route path="/author" element={<Authors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newbook" element={<AddABook />} />
          <Route
            path="/product/:id"
            element={<Product selectedProduct={selectedProduct} />}
          />
          <Route path="/ordermessage" element={<OrderMessage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </HashRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
