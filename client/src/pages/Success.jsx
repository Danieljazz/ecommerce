import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //TODO: const data = location.state.stripeData;
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/orders", {
          //TODO: userId: currentUser._id,
          products: cart.products.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
            size: product.size,
            color: product.size,
          })),
        });
      } catch {}
    };
    const interval = setInterval(() => {
      navigate("/");
    }, 3000);
    createOrder();
    return () => clearInterval(interval);
  }, [cart]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Payment success</h1>
    </div>
  );
};

export default Success;
