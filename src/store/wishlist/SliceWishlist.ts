import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/product";
import thunkWishlist from "./thunkWishlist";
import thunkGetProductWishlist from "./thunkGetproductWishlist";
import type { loading } from "../../types/loadingType";
import { Logout } from "../auth/thunkAuth/authSlice";


type Twislist = {
    itemsId:number[],
    productInfo:ProductType[],
    error:null|string,
  loading:loading
}

const initialState : Twislist = {
    itemsId:[],
    productInfo:[],
    error:null,
    loading:"idl"
}

const sliceWishlist = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        cleanUpWishilst:(state)=>{
            state.productInfo  =[];
        }
    },
    extraReducers:(bulider)=>{
        bulider.addCase(thunkWishlist.pending,(state)=>{
            state.error  = null
        }),
        bulider.addCase(thunkWishlist.fulfilled,(state,action)=>{
            if(action.payload.type === "add"){
                state.itemsId.push(action.payload.id)
            }else{
                state.itemsId  =state.itemsId.filter(el=> el !== action.payload.id);
                state.productInfo = state.productInfo.filter(el=>el.id !== action.payload.id)
            }
        }),
        bulider.addCase(thunkWishlist.rejected,(state,action)=>{
            state.error = action.payload as string
        }),

        // get product details 


            bulider.addCase(thunkGetProductWishlist.pending,(state)=>{
            state.loading = "pending",
            state.error  = null
        }),
        bulider.addCase(thunkGetProductWishlist.fulfilled,(state,action)=>{
                state.loading = "succeeded"
            if(action.payload.dataType === "productFullInfo"){
                state.productInfo = action.payload.data as ProductType[];

            }else if(action.payload.dataType === "productId"){
                state.itemsId =  action.payload.data as number[]

            }

         
        }),
        bulider.addCase(thunkGetProductWishlist.rejected,(state,action)=>{
            state.error = action.payload as string,
            state.loading = "failed"
        }),
        bulider.addCase(Logout,(state)=>{
            state.itemsId = [],
            state.productInfo = []
        })
    }
})

export const {cleanUpWishilst} = sliceWishlist.actions

export default sliceWishlist.reducer;