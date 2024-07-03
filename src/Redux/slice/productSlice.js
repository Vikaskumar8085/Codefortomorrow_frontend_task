import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productslice",
  initialState: {
    values: [],
  },
  reducers: {
    addProduct: (state, action) => {
        
      state.values = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
