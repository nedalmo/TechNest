import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import type { ProductType } from "../../../types/product";
import { useAppDispatch } from "../../../store/Hooks";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiGitDiffDuotone } from "react-icons/pi";

import {
  decrement,
  increment,
  removeItem,
} from "../../../store/cart/sliceCart";
import { useState } from "react";
import ToastMessage from "../../feedback/toast/toast";
import thunkWishlist from "../../../store/wishlist/thunkWishlist";
import { CgSpinner } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";
export default function ShipItemInCart({
  title,
  id,
  img,

  discount,
  price,
  isliked,

  quntity,
}: ProductType) {
  const dispatch = useAppDispatch();
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  function handleIncres(type: string) {
    if (type === "increse") {
      dispatch(increment(id));
      return;
    }

    if (type === "decrese") {
      if (quntity === 1) {
        dispatch(removeItem(id));
        return;
      }

      dispatch(decrement(id));
      return;
    }
  }

  return (
    <div className="bg-[#FFFFFF] px-3 sm:px-5 flex flex-1 my-5 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between border-b border-b-amber-800 pb-5 sm:py-7 gap-5 w-full">
        {/* img and quantity */}
        <div className="flex sm:block items-center gap-4 shrink-0">
          <div className="w-24 sm:max-w-30 sm:w-auto">
            <img src={img[0]} alt="" className="w-full" />
          </div>

          <div className="flex items-center gap-2 bg-zinc-300/40 justify-between px-2 w-24 mx-auto py-1 rounded-xl">
            <button
              className="select-none cursor-pointer"
              onClick={() => {
                handleIncres("increse");
              }}
            >
              <BsPlus />
            </button>

            <span className="select-none">{quntity}</span>

            <button
              className="select-none cursor-pointer"
              onClick={() => {
                handleIncres("decrese");
              }}
            >
              {quntity === 1 ? (
                <MdOutlineDeleteOutline className="text-red-500" />
              ) : (
                <FaMinus />
              )}
            </button>
          </div>
        </div>

        {/* name and some details */}
        <div className="flex-1 min-w-0 sm:max-w-95">
          <p className="mb-4">{title}</p>
          <div
            className=" w-fit  mb-3 bg-linear-to-r from-orange-400/20
           from-50% via-orange-200/20  via-100%  flex items-center pl-3 rounded-sm py-1  "
          >
            <h2 className="  font-bold ">احصل عليه :</h2>
            <p>السبت , 10 اكتوبر</p>
          </div>
          <p className=" mb-4  text-zinc-500  tracking-tight  font-bold">
            اطلب في غضون 12 ساعات و10 دقيقة
          </p>
          {/* featurs  */}
          <div className=" flex items-center gap-3">
            <h2 className=" flex items-center gap-1">
              <span>
                <CiDeliveryTruck />
              </span>
              <p className=" text-md text-zinc-400 font-bold  ">
                {" "}
                توصيل مجاني{" "}
              </p>
            </h2>
            <h2 className=" flex items-center gap-1">
              <span>
                <PiGitDiffDuotone />
              </span>
              <p className=" text-md text-zinc-400 font-bold  ">
                ضمان لمدة خمسة أعوام
              </p>
            </h2>
          </div>
        </div>

        {/* price */}
        <div className="shrink-0 md:flex-col gap-5 md:gap-1 flex-row flex">
          <h2 className="text-lg sm:text-xl font-bold">
            {price - Math.ceil((price / 100) * discount)} جنه
          </h2>

          <div className="flex gap-1 flex-wrap items-center">
            <h1 className="text-green-600">{discount}%</h1>
            <div className=" flex items-center">
              <span className="line-through text-zinc-400">{price}</span>
              <span>خصم </span>
            </div>
          </div>
        </div>

        {/* icons */}
        <div className="flex sm:flex-col gap-2 shrink-0">
          <span
            onClick={() => {
              setLoadingWishlist(true);
              dispatch(thunkWishlist(id))
                .unwrap()
                .then(() => setLoadingWishlist(false))
                .catch(() => setLoadingWishlist(false));
              if (isliked) {
                ToastMessage("تمت الإزالة من المفضلة", false);
              } else {
                ToastMessage("تمت الإضافة إلى المفضلة ", true);
              }
            }}
            className="bg-orange-100 cursor-pointer rounded-sm w-8 h-8 flex justify-center items-center p-1"
          >
            {/* ======================== */}

            <span
              className={`${isliked ? "text-white" : " text-black"} text-lg`}
            >
              {loadingWishlist ? (
                <CgSpinner className=" p-3 bg-orange-800  loading-spinner z-10" />
              ) : (
                <FaRegHeart />
              )}
              <span />
              {/* ======================== */}
            </span>
          </span>

          <span
            onClick={() => {
              dispatch(removeItem(id));
            }}
            className="bg-orange-100 cursor-pointer rounded-sm w-8 h-8 flex justify-center items-center p-1"
          >
            <RiDeleteBin6Line />
          </span>
        </div>
      </div>
    </div>
  );
}
