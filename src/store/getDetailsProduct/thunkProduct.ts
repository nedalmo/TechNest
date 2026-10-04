import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler";

const thunkDetails = createAsyncThunk("thunkDetails",async(id:string|undefined,thunkAPI)=>{
    const {  rejectWithValue} = thunkAPI;
    try {
        const resp = await axios.get(`/products/${id}`);
        return  resp.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
});
export default thunkDetails