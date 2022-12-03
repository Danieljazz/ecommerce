import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux.js";

const store = configureStore({ reducer: { cart: cartReducer } });

export default store;
