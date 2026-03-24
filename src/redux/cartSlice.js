import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: savedCart
  },

  reducers: {

    // Add to cart (with quantity logic)
    addToCart: (state, action) => {

      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // Remove item completely
    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // Increase quantity
    increaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // Decrease quantity
    decreaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    }

  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;