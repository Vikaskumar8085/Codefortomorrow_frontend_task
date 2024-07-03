import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
  name: "LoaderSlice",
  initialState: {
    loading: false,
  },
  reducers: {
    SetLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { SetLoader } = LoaderSlice.actions;
export default LoaderSlice.reducer;
