import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./product-slice";
import wishlistSlice from "./wishlist-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    wishlist: wishlistSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
