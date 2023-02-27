import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("action", action);
      const { payload } = action;
      const { id } = payload;
      let copyCurrentCartItems = [...state.cartItems];
      const idx = copyCurrentCartItems.findIndex((item) => item.id === id);

      if (idx === -1) {
        copyCurrentCartItems.push({
          ...payload,
          quantity: 1,
        });
      } else {
        copyCurrentCartItems[idx] = {
          ...copyCurrentCartItems[idx],
          quantity: copyCurrentCartItems[idx].quantity + 1,
        };
      }

      state.cartItems = copyCurrentCartItems;
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      let updateCurrentCartItems = [...state.cartItems];
      const indexOfRemovedItem = updateCurrentCartItems.findIndex(
        (item) => item.id === payload.id
      );

      const { quantity } = updateCurrentCartItems[indexOfRemovedItem];
      if (quantity <= 1) {
        updateCurrentCartItems = updateCurrentCartItems.filter(
          (item) => item.id !== payload.id
        );
      } else {
        updateCurrentCartItems[indexOfRemovedItem] = {
          ...updateCurrentCartItems[indexOfRemovedItem],
          quantity: updateCurrentCartItems[indexOfRemovedItem].quantity - 1,
        };
      }


      state.cartItems = updateCurrentCartItems
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
