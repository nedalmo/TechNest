import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler";


const thunkLikeProduct = createAsyncThunk("thunkLikeProduct",async (id:string |undefined,ThunkAPI)=>{
    const {rejectWithValue}  = ThunkAPI

    try {
        const dataID =  await axios(`/products/${id}`);
        const dataRelated = await axios.get(`/products?cat_prefix=${dataID.data.cat_prefix}`)
        return dataRelated.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }


});

export default thunkLikeProduct