import { createSlice } from "@reduxjs/toolkit";
import type { loading } from "../../../types/loadingType";
import authThunk from "./thunkAuth";
import thunkLogin from "../thunkLogin/thunkLogin";


interface IAuthData {
    loading:loading,
    error:null | string
    accessToken:string|null
      user:{
        id:number,
        firstName:string,
        lastName:string,
        email:string,
      
    } | null
}

const initialState :IAuthData  = {
    loading:"idl",
    error:null,
    accessToken:null,
    user:null
}

const authSlice = createSlice({
    name:"rejester",
    initialState,
    reducers:{
        resstUI:(state)=>{
            state.error = null,
            state.loading = "idl"
        },
        Logout:(state)=>{
            state.accessToken = null,
            state.user = null;
        }

    },
    extraReducers:(builder) =>{
        builder.addCase(authThunk.pending,(state)=>{
            state.loading = "pending"
        });
        builder.addCase(authThunk.fulfilled,(state)=>{
            state.loading = "succeeded"

        });
        builder.addCase(authThunk.rejected,(state,action)=>{
            state.loading = "failed",
            state.error = action.payload as string
        });

        // login slice
          builder.addCase(thunkLogin.pending,(state)=>{
            state.loading = "pending"
        });
        builder.addCase(thunkLogin.fulfilled,(state,action)=>{
            state.loading = "succeeded"
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user
        
            
        });
        builder.addCase(thunkLogin.rejected,(state,action)=>{
            state.loading = "failed",
            state.error = action.payload as string
        });
        
    },
})

export const {resstUI,Logout}  = authSlice.actions

export default authSlice.reducer


