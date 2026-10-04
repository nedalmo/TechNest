import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProductType } from "../../../types/product";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";




const thunkProduct = createAsyncThunk("products/thunk", async(cat_prefix:string,thunkAPI)=>{

    const {rejectWithValue,signal} = thunkAPI;

    try{
        const feachData = await axios.get<ProductType[]>(`products?cat_prefix=${cat_prefix}`,{
            signal
        });

       return feachData.data;
         
    }catch(error){
             return rejectWithValue( axiosErrorHandler(error))


    }

})

export default thunkProduct