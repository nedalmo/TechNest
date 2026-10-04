import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelecor } from "../store/Hooks";
import { useEffect } from "react";
import {
  thunkProduct,
  cleanUpPrduct,
} from "../store/products/SliceProducts";
import useDataInfoProduct from "./useDataInfoProduct";

export default function useProducts() {
  const dispatch = useAppDispatch();

  const { namecategotye } = useParams();

  const { loading, error, recods } = useAppSelecor(
    (state) => state.sliceProduct
  );

  const ProductFullInfo = useDataInfoProduct({
    products: recods,
  });

  useEffect(() => {
    const promise = dispatch(
      thunkProduct(namecategotye as string)
    );

    return () => {
      dispatch(cleanUpPrduct());
      promise.abort();
    };
  }, [namecategotye, dispatch]);

  return {
    ProductFullInfo,
    loading,
    error,
  };
}