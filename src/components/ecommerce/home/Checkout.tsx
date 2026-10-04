import { useEffect, useState } from "react";
import { BsArrowBarLeft, BsCash } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoCard } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { useAppDispatch, useAppSelecor } from "../../../store/Hooks";
import useDataInfoProduct from "../../../hooks/useDataInfoProduct";
import useCalcSubtotal from "../../../hooks/useCalcSubtotal";
import { openModel } from "../../../store/loactions/sliceLocations";
import thunkCart from "../../../store/cart/thunk/thunkCart";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import thunkOrders from "../../../store/orders/thunkOrder";
import { emtptyCart } from "../../../store/cart/sliceCart";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const locationsSchema = z.object({
  Street_name: z
    .string()
    .trim()
    .min(2, "اسم الشارع يجب أن يكون حرفين على الأقل"),
  Building_number: z.string().trim().min(1, "من فضلك أدخل رقم المبنى"),
  Floor_number: z.string().trim().min(1, "من فضلك أدخل رقم الدور"),
  Apartment_number: z.string().trim().min(1, "من فضلك أدخل رقم الشقة"),
});

type FormData = z.infer<typeof locationsSchema>;
export default function Checkout() {
  const { t } = useTranslation();

  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(locationsSchema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      await dispatch(thunkOrders(subtotal)).unwrap();

      dispatch(emtptyCart());

      await Swal.fire({
        title: "تم الطلب بنجاح",
        text: "تم إنشاء طلبك بنجاح",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      Navigate("/");
    } catch (error) {
      Swal.fire({
        title: "حدث خطأ",
        text: "لم نتمكن من إنشاء الطلب",
        icon: "error",
      });
    }
  };

  const [openInputs, setOpenInputs] = useState(false);
  const [openCash, setOpenCash] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkCart());
  }, [dispatch]);

  const { productFullInfo } = useAppSelecor((el) => el.cartSlice);

  const locations = useAppSelecor((state) => state.sliceLocations.locations);
  const user = useAppSelecor((state) => state.authSlice.user);
  const newData = useDataInfoProduct({ products: productFullInfo });
  const { subtotal } = useCalcSubtotal({ allInfoProduct: newData });

  return (
    <div>
      <div className="px-1 md:px-4 mt-10">
        {/* header  */}

        <div className=" py-5">
          <div className=" flex gap-4 items-center">
            <h2 className=" font-bold text-xl">أهلًا</h2>
            <p className=" font-bold text-2xl">{user?.firstName}</p>
          </div>
          <p>{user?.email}</p>
        </div>

        {/* ============ main content =========== */}

        <div className=" grid  grid-cols-[1fr,2]   lg:grid-cols-[60%_39%] items-start gap-5 mt-5">
          {/* =========== details delevers =============== */}
          <div className=" bg-zinc-50 ">
            {/* header  */}
            <div
              onClick={() => setOpenInputs(!openInputs)}
              className=" bg-orange-600 px-4 py-4 text-white cursor-pointer  flex justify-between items-center"
            >
              <h2 className=" font-bold">تفاصيل التوصيل</h2>
              <span
                className={` font-bold text-xl ${openInputs ? " rotate-180" : "rotate-0"}  transition-all duration-300`}
              >
                <IoIosArrowUp />
              </span>
            </div>
            <div
              className={` grid  ${openInputs ? "grid-rows-[0fr]" : "grid-rows-[1fr] "} transition-all duration-300 overflow-hidden`}
            >
              <div className=" px-2   overflow-hidden ">
                <div className=" flex my-5 justify-between items-center">
                  <h2 className=" text-sm">موعد التوصيل</h2>
                  <p className=" text-xs">السبت، ٣ أكتوبر ٢٠٢٦</p>
                </div>

                {/* data locations  */}
                <div>
                  <div
                    onClick={() => dispatch(openModel(true))}
                    className=" flex justify-between items-center mt-5 border border-e-red-600 py-3 px-2"
                  >
                    <div>
                      <h2 className=" text-md  text-amber-700 mb-2">
                        اختر محافظتك
                      </h2>
                      <h3 className="  text-[14px] font-bold">
                        {t(locations.governorate)}
                      </h3>
                    </div>
                    <span className=" text-orange-700">
                      <BsArrowBarLeft />
                    </span>
                  </div>
                  <div
                    onClick={() => dispatch(openModel(true))}
                    className=" flex justify-between items-center mt-5 border border-e-red-600 py-3 px-2"
                  >
                    <div>
                      <h2 className=" text-md  text-amber-700 mb-2">
                        اختر منطقتك
                      </h2>
                      <h3 className="  text-[14px] font-bold">
                        {t(`${locations.area}`)}
                      </h3>
                    </div>
                    <span className=" text-orange-700">
                      <BsArrowBarLeft />
                    </span>
                  </div>
                  {/* inputs  */}
                  <form onSubmit={handleSubmit(onSubmit)} id="myForm">
                    <div className=" flex flex-col  md:flex-row items-center gap-9 my-5">
                      <div className=" flex flex-col gap-1.5 w-full ">
                        <label
                          className=" text-sm font-bold"
                          htmlFor="Building_number"
                        >
                          رقم المبنى
                        </label>
                        <input
                          {...register("Building_number")}
                          className="flex focus:outline-2 focus:outline-orange-500  border text-zinc-800 border-zinc-500 py-4 px-3 "
                          type="text"
                          id="Building_number"
                          placeholder=" رقم المبنى
"
                        />
                        {errors.Building_number && (
                          <p className=" text-sm text-red-600">
                            {errors.Building_number?.message}
                          </p>
                        )}
                      </div>
                      <div className=" flex flex-col gap-1.5  w-full">
                        <label
                          className=" text-sm font-bold"
                          htmlFor="Street_name"
                        >
                          {" "}
                          اسم الشارع
                        </label>
                        <input
                          {...register("Street_name")}
                          className="  flex focus:outline-2 focus:outline-orange-500  border text-zinc-800 border-zinc-500 py-4 px-3"
                          type="text"
                          id="Street_name"
                          placeholder=" اسم الشارع

"
                        />
                        {errors.Street_name && (
                          <p className=" text-sm text-red-600">
                            {errors.Street_name?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className=" flex items-center flex-col  md:flex-row  gap-9 my-5">
                      <div className=" flex flex-col gap-1.5 w-full ">
                        <label
                          className=" text-sm font-bold"
                          htmlFor="Floor_number"
                        >
                          {" "}
                          رقم الدور
                        </label>
                        <input
                          {...register("Floor_number")}
                          className="flex focus:outline-2 focus:outline-orange-500  border text-zinc-800 border-zinc-500 py-4 px-3 "
                          type="text"
                          id="Floor_number"
                          placeholder="  رقم الدور
"
                        />
                        {errors.Floor_number && (
                          <p className=" text-sm text-red-600">
                            {errors.Floor_number?.message}
                          </p>
                        )}
                      </div>
                      <div className=" flex flex-col gap-1.5  w-full">
                        <label
                          className=" text-sm font-bold"
                          htmlFor="Apartment_number"
                        >
                          {" "}
                          رقم الشقة
                        </label>
                        <input
                          {...register("Apartment_number")}
                          className="  flex focus:outline-2 focus:outline-orange-500  border text-zinc-800 border-zinc-500 py-4 px-3"
                          type="text"
                          id="Apartment_number"
                          placeholder=" رقم الشقة

"
                        />
                        {errors.Apartment_number && (
                          <p className=" text-sm text-red-600">
                            {errors.Apartment_number?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className=" mb-3">
                      <input
                        className="flex w-full focus:outline-2 focus:outline-orange-500  border text-zinc-800 border-zinc-500 py-4 px-3 "
                        type="text"
                        id="bildn"
                        placeholder="  تعليمات التوصيل
"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* cash */}
            <div>
              {/* header  */}
              <div
                onClick={() => setOpenCash(!openCash)}
                className=" mt-4 bg-orange-600 px-4 py-4 text-white cursor-pointer  flex justify-between items-center"
              >
                <h2 className=" font-bold"> طرق الدفع</h2>
                <span
                  className={` font-bold text-xl ${openCash ? " rotate-180" : "rotate-0"}  transition-all duration-300`}
                >
                  <IoIosArrowUp />
                </span>
              </div>
              <div
                className={`grid ${openCash ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}  overflow-hidden transition-all duration-300 `}
              >
                <div className=" overflow-hidden">
                  <div className=" flex gap-2  items-center bg-[#FEF4DF] px-2 py-2 my-4">
                    <span>
                      <RiErrorWarningLine className=" text-xl  inline" />
                    </span>
                    <h2 className=" text-sm">
                      خدمة الدفع بالكاش عند الاستلام والكارت عند الاستلام غير
                      متوفرة لهذا الطلب. يمكنك استخدام طريقة دفع أخرى.
                    </h2>
                  </div>

                  <div>
                    <label
                      htmlFor="Cash_doer"
                      className=" flex justify-between items-center border mb-3 border-zinc-400 py-4  cursor-pointer  select-none px-3"
                    >
                      <div className=" flex items-center gap-2">
                        <input type="radio" name="cash" id="Cash_doer" />
                        <h2>الدفع نقدًا عند الاستلام </h2>
                      </div>
                      <span className=" text-3xl">
                        <BsCash />
                      </span>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="Cash_doer2"
                      className=" flex justify-between items-center border mb-3 border-zinc-400 py-4  cursor-pointer  select-none px-3"
                    >
                      <div className=" flex items-center gap-2">
                        <input type="radio" name="cash" id="Cash_doer2" />
                        <h2>الدفع بالبطاقة عند الاستلام</h2>
                      </div>
                      <span className=" text-3xl">
                        <FaRegCreditCard />
                      </span>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="Cash_doer3"
                      className=" flex justify-between items-center border mb-3 border-zinc-400 py-4  cursor-pointer  select-none px-3"
                    >
                      <div className=" flex items-center gap-2">
                        <input type="radio" name="cash" id="Cash_doer3" />
                        <h2>بطاقة خصم مباشر أو ائتمان</h2>
                      </div>
                      <span className=" text-3xl">
                        <IoCard />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============ summary order ====      ================ */}
          <div className="bg-zinc-50 px-1 md:px-4">
            {/* header  */}
            <div className=" py-4 px-2 border-b border-b-amber-500 ">
              ملخص الطلب
            </div>

            {/* orders */}
            <div className="flex mt-3 flex-col gap-4">
              {newData.map((el) => {
                return (
                  <div
                    key={el.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white"
                  >
                    <div className="w-24 h-24 shrink-0">
                      <img
                        className="w-full h-full object-contain"
                        src={el.img[0]}
                        alt={el.title}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm md:text-base font-medium line-clamp-2">
                        {el.title}
                      </p>

                      <p className="mt-2 font-semibold text-gray-800">
                        {el.price} جنيه
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="w-8 h-8 shrink-0 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold">
                      {el.quntity}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* totalPrice  */}
            <div className=" my-5 py-2 bg-white px-4 flex flex-col gap-3 ">
              <div className=" flex justify-between items-center">
                <h2>الإجمالي</h2>
                <p>{subtotal} جنيه</p>
              </div>
              <div className=" flex justify-between items-center">
                <h2>رسوم التوصيل</h2>
                <p>100 جنيه</p>
              </div>
              <div className=" flex justify-between items-center">
                <h2 className=" font-bold text-2xl">الإجمالي</h2>
                <p className=" font-bold text-xl">{subtotal + 100} جنيه</p>
              </div>
            </div>

            <button
              form="myForm"
              disabled={!isValid}
              className=" mt-5 bg-orange-600 py-3 cursor-pointer disabled:cursor-auto disabled:bg-zinc-400 flex justify-center items-center  w-full rounded-4xl text-white"
            >
              تابع عملية الدفع
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
