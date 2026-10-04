import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Rootstate } from "../..";
import axios from "axios";
import type { ProductType } from "../../../types/product";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";


const thunkCart = createAsyncThunk("cart",async (_,thunkAPI)=>{
    const {rejectWithValue,getState,fulfillWithValue,signal} = thunkAPI;

    const { cartSlice}= getState() as Rootstate;
    
    const concatedId = Object.keys(cartSlice.items);

    if(!concatedId.length){
        return fulfillWithValue([])
    }
    
    
    try {
        const convertId = concatedId.map(id=>`id=${id}`).join("&");
        const responsData = await axios.get<ProductType[]>(`/products?${convertId}`,{signal});
        return responsData.data
        
    } catch (error) {
      return rejectWithValue( axiosErrorHandler(error))
    }
    
})


export default thunkCart