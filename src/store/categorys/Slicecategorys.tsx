import { createSlice } from "@reduxjs/toolkit";
import thunk from "./Thunk/ThunkGetCategorys";
import type { TCategory } from "../../types/categorys";
import type { loading } from "../../types/loadingType";
interface initType {
  recods: TCategory[];
  error: null | string;
  loading: loading;
}

const initialState: initType = {
  recods: [],
  error: null,
  loading: "idl",
};

const sliceCategorys = createSlice({
  initialState,
  name: "sliceCategorys",
  reducers: {
    cleanUpCategory: (state) => {
      state.recods = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunk.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(thunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.recods = action.payload;
    });

    builder.addCase(thunk.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});
export { thunk };

export const { cleanUpCategory } = sliceCategorys.actions;

export default sliceCategorys.reducer;
