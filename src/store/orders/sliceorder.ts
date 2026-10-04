import { createSlice } from "@reduxjs/toolkit";
import type { loading } from "../../types/loadingType";
import type { TOrder } from "../../types/orders";



type TStateOrders= {
 
  
    orders:TOrder[],
    loading:loading,
    error:null|string
}

const initialState:TStateOrders = {
    orders:[],
    loading:"idl",
    error:null
   
}

const sliceOrder = createSlice({
    name:"orders",
    initialState,
    reducers:{},
 
});

export default sliceOrder.reducer