import { configureStore } from "@reduxjs/toolkit";
import ProductSlice, { AddToProduct, addToProduct } from "./ProductSlice";
import BasketSlice from "./BasketSlice";

export const store = configureStore({
  reducer: {
    main: ProductSlice,
    basket: BasketSlice
  },
});
