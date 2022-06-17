
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
        console.log("FROM ADD PRODUCT")
        
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += parseInt(action.payload.price) * parseInt(action.payload.quantity);
    },
    resetProduct : (state,action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    }
  }
});

export const { addProduct, resetProduct } = cartSlice.actions;
export default cartSlice.reducer;

