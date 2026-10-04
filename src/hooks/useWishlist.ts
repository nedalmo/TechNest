import { useEffect } from "react";
import { useAppDispatch, useAppSelecor } from "../store/Hooks";
import thunkGetProductWishlist from "../store/wishlist/thunkGetproductWishlist";
import { cleanUpWishilst } from "../store/wishlist/SliceWishlist";
export default function useWishlist() {

     const dispatch = useAppDispatch();
  const { productInfo, loading, error } = useAppSelecor((state) => {
    return state.sliceWishlist;
  });
  const dataCart = useAppSelecor((state) => state.cartSlice.items);
  const {user,accessToken} = useAppSelecor(state=>state.authSlice);

  const ProductFullInfo = productInfo.map((el) => {
    return {
      ...el,
      quntity: dataCart[el.id] || 0,
      isliked: true,
    findUser:true

}});





 useEffect(() => {
  if (!user || !accessToken) {
    dispatch(cleanUpWishilst());
    return;
  }

  const promise = dispatch(
    thunkGetProductWishlist("productFullInfo")
  );

  return () => {
    promise.abort();
    dispatch(cleanUpWishilst());
  };
}, [dispatch, user, accessToken]);

  return {ProductFullInfo,loading,error}
}
