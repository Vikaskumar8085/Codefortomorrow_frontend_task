import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import LoaderSlice from "./slice/LoaderSlice";

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
    product: productSlice,
  },
});

export default store;
