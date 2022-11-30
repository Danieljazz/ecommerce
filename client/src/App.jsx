import React from "react";
import Cart from "./pages/Cart";
import CategoryProductList from "./pages/CategoryProductList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<CategoryProductList />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};
export default App;
