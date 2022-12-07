import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux.js";
import userReducer from "./userRedux.js";

const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
});

export default store;
