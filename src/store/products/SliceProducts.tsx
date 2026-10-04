import { createSlice } from "@reduxjs/toolkit";
import thunkProduct from "./Thunk/ThunkGetProduct";
import type { ProductType } from "../../types/product";
import type { loading } from "../../types/loadingType";
interface initType {
  recods: ProductType[];
  error: null | string;
  loading: loading;
}

const initialState: initType = {
  recods: [],
  error: null,
  loading: "idl",
};

export const sliceProduct = createSlice({
  initialState,
  name: "products",
  reducers: {
    cleanUpPrduct: (state) => {
      state.recods = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(thunkProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.recods = action.payload;
    });

    builder.addCase(thunkProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export const { cleanUpPrduct } = sliceProduct.actions;

export { thunkProduct };

export default sliceProduct.reducer;
