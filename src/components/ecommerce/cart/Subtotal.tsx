import { Link, Navigate, useNavigate } from "react-router-dom";
import type { ProductType } from "../../../types/product";
import Swal from "sweetalert2";
import useCalcSubtotal from "../../../hooks/useCalcSubtotal";

type Tsubtotal = { allInfoProduct: ProductType[]; acssesToken: string | null };

export default function Subtotal({ allInfoProduct, acssesToken }: Tsubtotal) {
  const navitage = useNavigate();
  const { subtotal, allDiscount } = useCalcSubtotal({ allInfoProduct });

  return (
    <div className=" mt-5   flex flex-1  h-fit bg-[#FFFFFF] rounded-lg">
      <div className="w-full px-3 py-4">
        {/* header  */}
        <div className=" flex gap-10 justify-between mb-5">
          <h2>ملخص الطلب </h2>
          <h4 className="bg-zinc-300/30 px-3  rounded-lg">
            {" "}
            {allInfoProduct.length} منتجات
          </h4>
        </div>
        {/* total */}
        <div className=" flex  flex-col gap-5">
          <div className=" flex justify-between">
            <p>المجموع الفرعي</p>
            <div>
              <span>{subtotal}</span>
              <span>ج.م</span>
            </div>
          </div>
          <div className=" flex justify-between">
            <p>الخصم </p>
            <div>
              <span>{allDiscount}</span>
              <span>ج.م</span>
            </div>
          </div>
          <div className=" pb-2 flex justify-between">
            <p>رسوم الشحن</p>
            <div className=" flex items-center">
              <h2 className={`${subtotal > 4000 ? "line-through" : ""}`}>30</h2>
              <span className=" text-green-500">مجانا</span>
            </div>
          </div>
          <div className=" py-3 border-t border-t-zinc-400 flex justify-between">
            <p className=" text-2xl font-bold">المجموع</p>
            <div className=" flex text-2xl  font-bold">
              <h2>{subtotal > 4000 ? subtotal : subtotal + 30}</h2>
              <span>ج.م</span>
            </div>
          </div>
        </div>
        {/* cash  */}
        <div className="mt-3">
          <button
            onClick={() => {
              if (acssesToken) {
                navitage("/checkout");
              } else {
                return Swal.fire({
                  // icon: "warning",
                  title: "سجّل دخولك لإتمام الطلب",
                  text: "يجب تسجيل الدخول أو إنشاء حساب أولاً للمتابعة إلى الدفع وإتمام طلبك.",
                  showCancelButton: true,
                  confirmButtonText: " الدخول",
                  cancelButtonText: "إنشاء حساب",
                  reverseButtons: true,

                  confirmButtonColor: "#f97316",
                  cancelButtonColor: "#52525b",
                }).then((resl) => {
                  if (resl.isConfirmed) {
                    navitage("/lgoin");
                    <Navigate to="/" />;
                  }
                  if (resl.dismiss === Swal.DismissReason.cancel) {
                    navitage("/Regester");
                  }
                });
              }
            }}
            className=" mt-5 bg-blue-500 w-full py-3 rounded-xl"
          >
            صفحه الدفع{" "}
          </button>
          <Link
            to="/"
            className=" block text-center mt-5 bg-blue-500 w-full py-3 rounded-xl"
          >
            مواصله التسوق{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
