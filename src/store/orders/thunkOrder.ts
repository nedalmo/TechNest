import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "../../utils/axiosErrorHandler";
import type { Rootstate } from "..";
import axios from "axios";




const thunkOrders = createAsyncThunk("ordersItems",async(subtotal:number,thunkAPI)=>{
    const {  rejectWithValue,getState} = thunkAPI ;
    
    const { cartSlice,authSlice} = getState() as Rootstate;


    const dataInfo = cartSlice.productFullInfo.map((e)=>{
        return {
            title:e.title,
            img:e.img[0],
            price:e.price,
            quntity:cartSlice.items[e.id]
        }
    })

    try {

        const postData = await axios.post("/orders",{
                ordersItems:dataInfo,
                userId :authSlice.user?.id,
                subTotal:subtotal
        });
        return postData.data
        
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }



});

export default thunkOrders