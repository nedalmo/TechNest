import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler";


const thunkLocations =createAsyncThunk("locations",async(_,thunkAPI)=>{
    const { rejectWithValue} = thunkAPI;


    try {

        const response = await axios.get(`http://${window.location.hostname}:5006/locations`);
        return response.data
        
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }

});

export default thunkLocations;


type TLocationData = {
  governorate: string | "القاهرة";
  area: string | null;
};

const thunkStorageLocations =createAsyncThunk("storageLocations",async(locationsData:TLocationData,thunkAPI)=>{
    const { rejectWithValue} = thunkAPI;


    try {
        return locationsData
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }

});

export  {thunkStorageLocations};