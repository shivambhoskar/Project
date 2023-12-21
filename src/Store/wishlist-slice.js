import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlistItem",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist(state, action) {
      state.items = action.payload.items;
    },
    removeItemFromWishlist(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
