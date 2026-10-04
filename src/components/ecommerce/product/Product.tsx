import SlideImgesProduct from "./SlideImgesProduct";
import { FaMinus, FaStar } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import "../../../styles/productShip.css";
import React, { useEffect, useState } from "react";
import type { ProductType } from "../../../types/product";
import { useAppDispatch } from "../../../store/Hooks";
import { addCart, decrement, removeItem } from "../../../store/cart/sliceCart";

import thunkWishlist from "../../../store/wishlist/thunkWishlist";
import { CgSpinner } from "react-icons/cg";
import ToastMessage from "../../feedback/toast/toast";
import { memo } from "react";
import Sweit from "../../feedback/sweat/Sweit";
import { Link } from "react-router-dom";
function Product({
  id,
  title,
  img,
  price,
  max,
  findUser,
  quntity,
  isliked,
  inCart,
  discount,
}: ProductType) {
  const [loadingAddCart, setLoadingAddCart] = useState(false);
  const [disableded, setDisabled] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useAppDispatch();

  const [loadingWishlist, setLoadingWishlist] = useState(false);
  useEffect(() => {
    quntity === max ? setDisabled(true) : setDisabled(false);
  }, [quntity]);

  function handelDecrement(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (loadingAddCart) return;

    setLoadingAddCart(true);

    setTimeout(() => {
      const currentQuantity = quntity as number;

      if (currentQuantity > 1) {
        dispatch(decrement(id));
      } else {
        dispatch(removeItem(id));
        setOpenCart(false);
      }

      setLoadingAddCart(false);
    }, 500);
  }

  function handelIncrement(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (loadingAddCart) return;

    setLoadingAddCart(true);

    setTimeout(() => {
      dispatch(addCart(id));
      setOpenCart(true);
      setLoadingAddCart(false);
    }, 500);
  }

  return (
    <Link
      to={`/DetatailsProduct/${id}`}
      className="block w-full border     border-primary rounded-xl relative z-0 overflow-hidden"
    >
      {showMessage ? (
        <Sweit showMessage={showMessage} setShowMessage={setShowMessage} />
      ) : (
        ""
      )}
      <div className="w-full  overflow-hidden bg-zinc-500/10 text-center relative">
        {" "}
        <div className="flex  justify-center">
          <SlideImgesProduct imges={img} />
        </div>
        <div className="px-1.5 ">
          <div>
            <h2 className=" line-clamp-2 text-right leading-tight mt-2 mb-3">
              {title}
            </h2>
          </div>
          <div className="flex items-center mb-2 gap-1">
            <span className=" text-yellow-500">
              <FaStar />
            </span>
            <span className=" text-yellow-500">
              <FaStar />
            </span>
            <span className=" text-yellow-500">
              <FaStar />
            </span>
          </div>
          {/* price */}
          <div className="flex items-center mb-2 gap-1 ">
            <h3 className="  flex  gap-1 items-center text-sm md:text-md font-bold">
              {" "}
              <span className="text-xs">جنيه</span>{" "}
              {price - Math.ceil((price / 100) * discount)}{" "}
            </h3>
            <h4 className=" text-xs text-zinc-500 line-through">{price}</h4>
            <h5 className=" text-green-600 text-xs md:text-sm">
              {discount}% خصم
            </h5>
          </div>
          {/* fuetures */}

          <div>
            {disableded ? (
              <div className="  text-right pb-2 text-red-500">
                المنتج غير متوفر الان
              </div>
            ) : (
              <div className="feature">
                <h2 className=" flex items-center gap-1">
                  <span>
                    <CiDeliveryTruck />
                  </span>
                  <p className=" text-sm"> توصيل مجاني </p>
                </h2>
                <h2 className=" flex items-center gap-1">
                  <span className=" text-sm">
                    <FaArrowAltCircleDown />
                  </span>
                  <p className=" text-sm">اقل سعر خلال 30 يوم</p>
                </h2>
                <h2 className=" flex items-center gap-1">
                  <span className=" text-sm">
                    <CiBookmarkCheck />
                  </span>
                  <p className=" text-sm"> متوفر {max} قطعه في المخزن</p>
                </h2>
              </div>
            )}
          </div>
          {/* cart */}
          <div
            className={`absolute top-54 left-3 z-10 flex -translate-y-1/2 items-center overflow-hidden rounded-full ${inCart ? "bg-black" : "bg-orange-500"}`}
          >
            <div
              className={`flex items-center gap-2 overflow-hidden text-white transition-all duration-300 ${
                openCart && (quntity as number) > 0 ? "w-15" : "w-0"
              }`}
            >
              <button
                disabled={loadingAddCart}
                onClick={handelDecrement}
                className="flex items-center cursor-pointer justify-center p-2 text-lg disabled:cursor-not-allowed"
              >
                {(quntity as number) > 1 ? <FaMinus /> : <MdDeleteOutline />}
              </button>

              <div className="flex items-center justify-center pl-2 text-lg">
                {loadingAddCart ? <div className="loadingCart"></div> : quntity}
              </div>
            </div>

            <button
              disabled={loadingAddCart}
              onClick={handelIncrement}
              className="flex h-9 w-9 cursor-pointer  items-center justify-center rounded-full text-xl text-white disabled:cursor-not-allowed"
            >
              <LuPlus />
            </button>
          </div>
          {/* heart  */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();

              if (findUser) {
                if (!loadingWishlist) {
                  setLoadingWishlist(true);

                  dispatch(thunkWishlist(id))
                    .unwrap()
                    .then(() => {
                      if (isliked) {
                        ToastMessage("تمت الإزالة من المفضلة", false);
                      } else {
                        ToastMessage("تمت الإضافة إلى المفضلة", true);
                      }
                    })
                    .catch((error) => {
                      throw new Error("Wishlist error:", error);
                    })
                    .finally(() => {
                      setLoadingWishlist(false);
                    });
                }
              } else {
                setShowMessage(true);
              }
            }}
            className={`cursor-pointer absolute top-3 left-3 h-7 w-7 rounded-full flex items-center justify-center text-2xl ${
              isliked ? "bg-orange-600" : "bg-zinc-100"
            } z-1`}
          >
            <span
              className={`${isliked ? "text-white" : "text-black"} text-lg`}
            >
              {loadingWishlist ? (
                <CgSpinner className="w-5 h-5 text-black animate-spin" />
              ) : (
                <FaRegHeart />
              )}
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default memo(Product);
