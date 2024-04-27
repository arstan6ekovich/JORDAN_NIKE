import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  catygory: [],
  sale: [],
};

export const ProductSlice = createSlice({
  name: "ADD_TO_PRODUCT",
  initialState,
  reducers: {
    AddToProduct(state, action) {
      state.product = [...state.product, action.payload];
    },
    AddProductCaty(state, action) {
      state.catygory = state.product.filter((el) => el.catygory === "MAN");
    },

    AddProductSort(state, action) {
      if ("expenses" === action.payload) {
        state.product = state.product.sort((a, b) => b.price - a.price);
      } else if ("expen" === action.payload) {
        state.product = state.product.sort((a, b) => a.price - b.price);
      }
    },
    AddProductSale(state, action) {
      let filterSlice = state.product.filter((el) => el.price > 300);
      state.sale = filterSlice.map((el) => {
        return {
          ...el,
          oldPrice: el.price,
          price: el.price - (el.price / 100) * 30,
        };
      });
    },
  },
});

export const {
  AddToProduct,
  AddProductSort,
  AddProductCaty,
  AddProductWoman,
  AddProductSale,
} = ProductSlice.actions;
export default ProductSlice.reducer;
