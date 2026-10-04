import Subtotal from "../components/ecommerce/cart/Subtotal";
import CartItemList from "../components/ecommerce/cart/CartItemList";
import Loading from "../components/feedback/loading/Loading";
import EmptyCart from "../components/ecommerce/cart/EmptyCart";
import useCart from "../hooks/useCart";
import { useTranslation } from "react-i18next";
import { useAppSelecor } from "../store/Hooks";

export default function CartPage() {
  const lng = useAppSelecor((state) => state.sliceLanguage.language);

  const { t } = useTranslation();

  const { allInfoProduct, error, loading, acssesToken } = useCart();
  return (
    <div dir={lng == "ar" ? "rtl" : "ltr"}>
      <Loading error={error} loading={loading} types="cart">
        <h2 className=" text-2xl font-bold px-4  py-5 mt-5">
          {" "}
          {t("Shopping Cart")}
        </h2>
        <>
          {allInfoProduct.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex flex-col lg:flex-row bg-[#F2F3F7] gap-7 px-3">
              <div className="w-full lg:w-[70%]">
                <CartItemList allInfoProduct={allInfoProduct} />
              </div>

              <div className="w-full lg:w-[30%]">
                <Subtotal
                  acssesToken={acssesToken}
                  allInfoProduct={allInfoProduct}
                />
              </div>
            </div>
          )}
        </>
      </Loading>
    </div>
  );
}
