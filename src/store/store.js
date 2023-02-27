import { configureStore } from "@reduxjs/toolkit";
import productslice from "../feature/productslice/productslice";
import cartslice from "../feature/cartslice/cartslice";

export const store = configureStore({
  reducer: {
    product: productslice,
    cart: cartslice,
  },
});
