import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TCategory } from "../../../types/categorys";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";



const thunk   = createAsyncThunk("sliceCategorys/ThunkCategory",async (_,thunkAPI)=>{
    const { rejectWithValue} = thunkAPI;
    try {
            const datafeach = await axios.get<TCategory[]>("categories");
            return datafeach.data;
    }catch(error){
      return rejectWithValue( axiosErrorHandler(error))

    }
})


export default thunk;