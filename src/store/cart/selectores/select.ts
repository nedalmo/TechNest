import { createSelector } from "@reduxjs/toolkit";
import type { Rootstate } from "../..";

const getCartTotalQuntity = createSelector(
    (state:Rootstate)=>state.cartSlice.items,
    (iatems)=>{
        const totalQuntity = Object.values(iatems).reduce((acc,current)=>{
            return acc +current
        },0);
        return totalQuntity;
    }
);

export {getCartTotalQuntity}