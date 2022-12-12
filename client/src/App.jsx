import React from "react";
import Cart from "./pages/Cart";
import CategoryProductList from "./pages/CategoryProductList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Success from "./pages/Success";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
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
        <Route path="/success" element={<Success />} />
        <Route path="/registersuccess" element={<RegisterSuccess />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
