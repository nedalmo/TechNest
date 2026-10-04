import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/product";
import type { loading } from "../../types/loadingType";
import thunkGetCategoryeProduct from "./thunkGetCategoryProduct";


type TCategoryeProduct = {
    bestSelling:ProductType[],
    offerYouLike:ProductType[],
    latest:ProductType[],
    loading:loading,
    error:null|string
};


const initialState:TCategoryeProduct = {

    bestSelling:[],
    offerYouLike:[],
    latest:[],
    loading:"idl",
    error:null
}

const sliceGetCategoryProduct = createSlice({
    name:"getCategorySlice",
    initialState,
    reducers:{
        unMountData:(state)=>{
            state.bestSelling = [],
            state.latest = [],
            state.offerYouLike = []
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(thunkGetCategoryeProduct.pending,(state)=>{
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(thunkGetCategoryeProduct.fulfilled,(state,action)=>{
            state.loading = "succeeded"
            const  { data,category} = action.payload
            switch(category){
                case"bestSelling":
                    state.bestSelling = data
                     break;
                    case"latest":
                        state.latest = data
                        break;
                case"offerYouLike":
                    state.offerYouLike = data
                        break;
                default:{
                state.bestSelling = [];
                state.latest = [];
                state.offerYouLike = []
                }
            }
        });
        builder.addCase(thunkGetCategoryeProduct.rejected,(state,action)=>{
            state.loading = "failed"
            state.error = action.payload as string
        });
    }
});

export default sliceGetCategoryProduct.reducer
export  const {unMountData}  = sliceGetCategoryProduct.actions