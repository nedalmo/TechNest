import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler";


type TCategoryeProduct = "bestSelling"|"offerYouLike"|"latest";

const thunkGetCategoryeProduct = createAsyncThunk("getCategoryeProduct",async         (cateogrisProdcut:TCategoryeProduct,thunkAPI)=>{


    const {rejectWithValue} = thunkAPI




    try {
        const reponse = await axios.get(`products?${cateogrisProdcut}=true`);
        return {data:reponse.data,category:cateogrisProdcut}
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
        
    }



})


export default thunkGetCategoryeProduct