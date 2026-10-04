import {  createSlice} from "@reduxjs/toolkit";
import type { ProductType } from "../../types/product";
import thunkCart from "./thunk/thunkCart";
import type { loading } from "../../types/loadingType";

interface ICart {
    items:{[key:string]:number},
    productFullInfo : ProductType[],
    error:null |string,    
  loading:loading
}

const initialState:ICart = {
    items:{},
    productFullInfo:[],
    error:null,
    loading:"idl"
}


const cartSlice = createSlice({
    name :"cart",
    initialState,
    reducers:{
        addCart : (state,action)=>{
            const id = action.payload;
           
            state.items[id] ? state.items[id]++:state.items[id] = 1;
        },
        increment:(state,action)=>{
          const id = action.payload;
            state.items[id]++;
       },
        decrement:(state,action)=>{
          const id = action.payload;
            state.items[id]--;
       },
        removeItem:(state,action)=>{
    
    const id = action.payload;
    delete state.items[id];
        state.productFullInfo = state.productFullInfo.filter(item=>item.id!==id)
       },
       cleanUp:(state)=>{
        state.productFullInfo = [];
       },
       emtptyCart:(state)=>{
        state.items= {};
        state.productFullInfo = [];
       }
    },
    extraReducers(builder) {
        builder.addCase(thunkCart.pending,(state)=>{
            state.loading = "pending",
            state.error = null
        }),
        builder.addCase(thunkCart.fulfilled,(state,action)=>{
            state.loading = "succeeded",
            state.productFullInfo = action.payload
        }),
        builder.addCase(thunkCart.rejected,(state,action)=>{
            state.loading = "failed",
            state.error = action.payload as string
        })
    },
})









export const  {addCart,increment,decrement,removeItem,cleanUp,emtptyCart} = cartSlice.actions;

export default cartSlice.reducer;