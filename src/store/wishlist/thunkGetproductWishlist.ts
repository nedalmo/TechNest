import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Rootstate } from "..";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler";
import type { ProductType } from "../../types/product";

type TData = "productFullInfo" | "productId";

const thunkGetProductWishlist = createAsyncThunk(
    "wishlistThunkGetproduct",
    async (dataType: TData, thunkAPI) => {

        const {
            rejectWithValue,
            getState,
            signal
        } = thunkAPI;

        const { authSlice } = getState() as Rootstate;


        
        
        try {
            
            const sliceWishlist = await axios.get<{ productId: number }[]>(
                `wishlist?userId=${authSlice.user?.id}`);

            if (!sliceWishlist.data.length) {
                
                return {
                    data: [],
                    dataType:"empty"
                };
            }
            
            if (dataType === "productId") {
                
                const concatId = sliceWishlist.data.map(
                    (item) => item.productId
                );

                return {
                    data: concatId,
                    dataType: "productId"
                };
            }
     


                const concatId = sliceWishlist.data
                    .map((item) => `id=${item.productId}`)
                    .join("&");
    
                const request = await axios.get<ProductType[]>(
                    `/products?${concatId}`,
                    { signal }
                );
    
                return {
                    data: request.data,
                    dataType: "productFullInfo"
                };
            
        

        } catch (error) {

            return rejectWithValue(
                axiosErrorHandler(error)
            );
        }
    }
);

export default thunkGetProductWishlist;