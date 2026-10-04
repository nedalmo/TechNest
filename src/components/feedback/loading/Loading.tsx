import type { ReactNode } from "react";
import type { loading } from "../../../types/loadingType";
import { RiErrorWarningFill } from "react-icons/ri";

import ProductSkeleton from "../skeleton/ProductSkeleton";
import CartSkeleton from "../skeleton/CartSkeleton";
import CategorySkeleton from "../skeleton/CategorySkeleton";
// import ProductSkeletonSlider from "../skeleton/ProductSkeletonSlider";
const skeletonAll = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  sliderProductSkeleton: ProductSkeleton,
};

type TLoading = {
  error: null | string;
  loading: loading;
  children: ReactNode;
  types?: keyof typeof skeletonAll;
};

export default function Loading({
  error,
  loading,
  children,
  types = "category",
}: TLoading) {
  const Component = skeletonAll[types];

  if (loading === "pending") {
    return <Component />;
  }
  if (loading === "failed") {
    return (
      <div className=" flex flex-col mt-30 justify-center items-center ">
        <span className=" text-9xl text-error">
          <RiErrorWarningFill />
        </span>
        <p className=" font-bold text-xl text-red-400">{error}</p>
      </div>
    );
  }
  return <>{children}</>;
}
