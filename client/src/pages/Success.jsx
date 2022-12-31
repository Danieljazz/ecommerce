import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { clearCart } from "../redux/cartRedux";
const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const stripeData = location.state.stripeData;
  const cart = location.state.cart;
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/orders",
          {
            userId: user._id,
            products: cart.products.map((product) => ({
              productId: product._id,
              quantity: product.productQuantity,
              size: product.chosenSize,
              color: product.chosenColor,
            })),
            amount: cart.total,
            address: stripeData.billing_details.address,
          },
          { headers: { token: `Bearer ${user.accessToken}` } },
        );
        dispatch(clearCart());
      } catch (err) {
        console.log(err);
      }
    };
    createOrder();

    const interval = setInterval(() => {
      navigate("/");
    }, 3000);

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
