import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

type TInputData = {
    password:string,
    email:string
}


type TRsponse = {
    accessToken:string,
    user:{
        id:number,
        firstName:string,
        lastName:string,
        email:string,
      
    }
}


const thunkLogin =  createAsyncThunk("thunkLogin",async (dataForm:TInputData,thunkAPI)=>{

    const {rejectWithValue} = thunkAPI;

    try {

        const res = await axios.post<TRsponse>("/Login",dataForm);
        return res.data
        
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }

});

export default thunkLogin