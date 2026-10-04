import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler";
import type { Rootstate } from "..";




const thunkWishlist = createAsyncThunk("wishlistItems",async(id:number,thunkAPI)=>{
    const  { rejectWithValue,signal ,getState} = thunkAPI;
    const { authSlice } = getState() as Rootstate;
    try {
      
        const isExists =await axios.get(`/wishlist?productId=${id}&userId=${authSlice.user?.id}`,{signal});
       if(isExists.data.length>0){
        await axios.delete(`/wishlist/${isExists.data[0].id}`,{signal});

        return {type:"remove",id}
        
    }else{
        await axios.post("/wishlist",{userId:authSlice.user?.id,productId:id})
        return {type:"add",id}
    }
        
    } catch (error) {
             return rejectWithValue( axiosErrorHandler(error))
    }

});


export default thunkWishlist