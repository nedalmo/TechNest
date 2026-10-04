import { createSlice } from "@reduxjs/toolkit";
import type { loading } from "../../types/loadingType";
import type { ProductType } from "../../types/product";
import thunkLikeProduct from "./thunkLikeyou";

type TLkeProduct = {
    loading:loading,
    error:null|string,
    dataLiked:ProductType[]
}

const initialState:TLkeProduct = {
    loading:"idl",
    error:null,
    dataLiked:[]
}

const sliceLikeProduct = createSlice({
    name:"likeProduct",
    initialState,
    reducers:{
        unMontData:(state)=>{
            state.dataLiked = []
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(thunkLikeProduct.pending,(state)=>{
            state.error = null,
            state.loading = "pending"
        }),
        builder.addCase(thunkLikeProduct.fulfilled,(state,action)=>{
            state.dataLiked = action.payload
            state.loading = "succeeded"
        }),
        builder.addCase(thunkLikeProduct.rejected,(state,action)=>{
            state.error = action.payload as string;
            state.loading = "failed"
        })
    }
})

export default sliceLikeProduct.reducer