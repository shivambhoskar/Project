import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items = action.payload.items;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    addQuantity(state, action) {
      const quantity = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
