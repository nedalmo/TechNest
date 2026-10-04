import { createSlice } from "@reduxjs/toolkit";
import type { loading } from "../../types/loadingType";
import type { ProductType } from "../../types/product";
import thunkDetails from "./thunkProduct";

type TDetailsProduct = {
    loading:loading,
    error:null|string,
    details:ProductType[]
}

const initialState:TDetailsProduct = {
    loading:"idl",
    error:null,
    details:[]
}


const sliceDetailsProduct = createSlice({
    name:"detailsProduct",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(thunkDetails.pending,(state)=>{
            state.loading = "pending";
            state.error = null
        });
        builder.addCase(thunkDetails.fulfilled,(state,action)=>{
            state.loading = "succeeded";
            state.details =[action.payload]
        });
        builder.addCase(thunkDetails.rejected,(state,action)=>{
            state.loading = "failed";
            state.error = action.error as string
        });
    }
})


export default sliceDetailsProduct.reducer