import { createSlice } from "@reduxjs/toolkit";
import thunkLocations, {
  thunkStorageLocations,
} from "./thunklocations";
import type { loading } from "../../types/loadingType";

type TLocation = {
  governorate: string;
  area: string | null;
};

type TLocations = {
  loading: loading;
  dataLocations: {
    id: string;
    title: string;
    areas: {
      id: string;
      title: string;
    }[];
  }[];
  error: string | null;

  locations: TLocation;
  openLocation: boolean;
};

const initialState: TLocations = {
  dataLocations: [],
  loading: "idl",
  error: null,

  locations: {
    governorate: "القاهرة",
    area: null,
  },

  openLocation: false,
};

const sliceLocations = createSlice({
  name: "locations",

  initialState,

  reducers: {
    openModel: (state, action: { payload: boolean }) => {
      state.openLocation = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(thunkLocations.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })

      .addCase(thunkLocations.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.dataLocations = action.payload;
      })

      .addCase(thunkLocations.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      })

      .addCase(thunkStorageLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      });
  },
});

export default sliceLocations.reducer;

export const { openModel } = sliceLocations.actions;