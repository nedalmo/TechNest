import { useEffect } from "react";
import { useAppSelecor, useAppDispatch } from "../store/Hooks";
import thunkCart from "../store/cart/thunk/thunkCart";
import { cleanUp } from "../store/cart/sliceCart";
import useDataInfoProduct from "./useDataInfoProduct";

export default function useCart() {
      const dispatch = useAppDispatch();
    
      const {  loading, error, productFullInfo } = useAppSelecor(
        (state) => state.cartSlice,
      );
      const acssesToken = useAppSelecor((state)=>state.authSlice.accessToken)
    

        const allInfoProduct = useDataInfoProduct({
          products: productFullInfo,
        });

       
    
      useEffect(() => {
         const promise =  dispatch(thunkCart());
        return () => {
          promise.abort()
          dispatch(cleanUp());
        };
      }, [dispatch]);
  return {loading, error ,allInfoProduct ,acssesToken}
}
