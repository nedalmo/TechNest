import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

type TData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const authThunk = createAsyncThunk(
  "/register",
  async (dataForm: TData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.post("/register", dataForm);


      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default authThunk;