import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const BasketSlice = createSlice({
  name: "ADD_TO_BASKET",
  initialState,
  reducers: {
    AddToBasket(state, action) {
      let results = state.basket.find((el) => el.id === action.payload.id);
      if (results) {
        console.log("Bar");
      } else {
        state.basket = [...state.basket, action.payload];
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket, action.payload]))
    },
    AddBasketDel(state, action) {
    let res = state.basket = state.basket.filter((el) => el.id !== action.payload);
    localStorage.setItem("basket", JSON.stringify(res))
    },
  },
});

export const { AddToBasket, AddBasketDel } = BasketSlice.actions;
export default BasketSlice.reducer;
