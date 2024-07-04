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
    delItem: (state, action) => {
      state.values = state.values.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, delItem } = productSlice.actions;
export default productSlice.reducer;
