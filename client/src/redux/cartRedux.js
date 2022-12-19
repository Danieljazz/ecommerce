import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.total -= action.payload.price;
      state.quantity -= 1;
      state.products.splice(
        state.products.findIndex((el) => el === action.payload._id),
        1,
      );
    },
    addExistingProduct: (state, action) => {
      state.total += action.payload.price;
      state.quantity += 1;
      state.products.push(
        state.products.find(
          (el) =>
            el._id === action.payload._id &&
            el.chosenSize === action.payload.chosenSize &&
            el.chosenColor === action.payload.chosenColor,
        ),
      );
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart, addExistingProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
