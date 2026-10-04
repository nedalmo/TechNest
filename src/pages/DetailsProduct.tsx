import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelecor } from "../store/Hooks";
import thunkDetails from "../store/getDetailsProduct/thunkProduct";
import useDataInfoProduct from "../hooks/useDataInfoProduct";
import { BsArrowsAngleExpand, BsHeart, BsPlus } from "react-icons/bs";
import { IoIosArrowDown, IoIosHeart } from "react-icons/io";
import thunkWishlist from "../store/wishlist/thunkWishlist";
import {
  addCart,
  decrement,
  increment,
  removeItem,
} from "../store/cart/sliceCart";
import { GoDash } from "react-icons/go";
import thunkLikeProduct from "../store/likeProduct/thunkLikeyou";
import SlideProduct from "../components/common/layout/slideProduct/SlideProduct";
import Loading from "../components/feedback/loading/Loading";

export default function DetailsProduct() {
  const [openText, setOpenText] = useState(true);
  const [openTop, setOpenTop] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { dataLiked } = useAppSelecor((state) => state.sliceLikeProduct);
  useEffect(() => {
    dispatch(thunkLikeProduct(id));
  }, [id]);

  window.onscroll = () => {
    if (window.scrollY >= 150) {
      setOpenTop(true);
      return;
    } else {
      setOpenTop(false);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(thunkDetails(id));
    }
  }, [dispatch, id]);

  const dataProductDetails = useAppSelecor(
    (state) => state.sliceDetailsProduct.details,
  );

  const ProductFullInfo = useDataInfoProduct({
    products: dataProductDetails,
  })[0];

  const [imageLink, setImageLink] = useState<string | undefined>(
    ProductFullInfo?.img?.[0],
  );

  useEffect(() => {
    setImageLink(ProductFullInfo?.img?.[0]);
  }, [ProductFullInfo?.id]);

  return (
    <Loading error={null} loading={"idl"}>
      <div>
        <div className=" px-3 flex items-center mt-6 md:mt-9 lg:mt-0 justify-center gap-4 w-full bg-orange-600  py-3 text-center">
          <div className="  text-white">
            خصم 17٪ على منتجات مختارة عند الدفع كاش
          </div>
          <button className=" cursor-pointer bg-white rounded-2xl py-1 px-4">
            نسخ
          </button>
        </div>
        <div
          className={` px-20 shadow-lg shadow-orange-200/90  hidden  lg:flex justify-between items-center duration-300  transition-all fixed w-full h-40  bg-white left-0 ${openTop ? "top-0" : "-top-60"}  z-20 right-0`}
        >
          <div className=" flex items-center gap-4 ">
            <img className=" w-30" src={ProductFullInfo?.img[0]} alt="" />
            <div className=" flex gap-4 flex-col">
              <h2 className=" w-90 line-clamp-2 ">{ProductFullInfo?.title}</h2>
              <h2 className=" font-bold text-2xl">
                {ProductFullInfo?.price} جنيه
              </h2>
            </div>
          </div>
          <div className=" flex items-center gap-6 ">
            <button
              onClick={() => {
                dispatch(addCart(ProductFullInfo?.id));
              }}
              className={`cursor-pointer bg-orange-600 text-white  border border-orange-600"} w-full md:w-50  py-4 px-2 rounded-4xl  `}
            >
              {!ProductFullInfo?.quntity ? (
                <span className="">اضف الي السله</span>
              ) : (
                <div className=" flex justify-between items-center">
                  <span
                    onClick={() => dispatch(increment(ProductFullInfo?.id))}
                    className=" bg-white flex justify-center items-center text-black rounded-full w-5 h-5 text-2xl"
                  >
                    <BsPlus />
                  </span>
                  <span>{ProductFullInfo?.quntity}</span>
                  <span
                    onClick={() => {
                      if (ProductFullInfo?.quntity === 1) {
                        dispatch(removeItem(ProductFullInfo?.id));
                      } else {
                        dispatch(decrement(ProductFullInfo?.id));
                      }
                    }}
                    className=" bg-white flex justify-center items-center text-black rounded-full w-5 h-5 text-2xl"
                  >
                    <GoDash />
                  </span>
                </div>
              )}
            </button>
            <button
              onClick={() => {
                dispatch(thunkWishlist(ProductFullInfo?.id));
              }}
              className={`  cursor-pointer bg-zinc-200
                text-lg  rounded-full w-12 flex items-center justify-center h-12`}
            >
              {ProductFullInfo?.isliked ? (
                <IoIosHeart className=" text-orange-600" />
              ) : (
                <BsHeart />
              )}
            </button>
          </div>
        </div>
        <div className="mt-15 px-5 mb-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* ================= Images ================= */}
            <div className="md:sticky md:top-40 self-start">
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4">
                {/* Small Images */}
                <div className="flex md:flex-col flex-row gap-3 order-1 md:order-0 overflow-x-auto md:overflow-visible">
                  {ProductFullInfo?.img?.map((image, index) => (
                    <img
                      key={index}
                      onClick={() => setImageLink(image)}
                      src={image}
                      alt={ProductFullInfo.title}
                      className={`
                    rounded-2xl
                    border
                    w-20
                    h-20
                    object-cover
                    cursor-pointer
                    shrink-0
                    ${imageLink === image ? "border-black" : "border-gray-300"}
                  `}
                    />
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative border rounded-2xl overflow-hidden aspect-square">
                  {/* Heart */}
                  <span
                    onClick={() => {
                      dispatch(thunkWishlist(ProductFullInfo?.id));
                    }}
                    className="absolute z-10 left-5 top-5 bg-white cursor-pointer w-10 h-10 text-2xl rounded-full flex justify-center items-center shadow"
                  >
                    {ProductFullInfo?.isliked ? (
                      <IoIosHeart className=" text-orange-600" />
                    ) : (
                      <BsHeart />
                    )}{" "}
                  </span>
                  <span className="absolute z-10 left-5   bottom-10 bg-white cursor-pointer w-10 h-10 text-2xl rounded-full flex justify-center items-center shadow">
                    <BsArrowsAngleExpand />
                  </span>

                  <img
                    className="w-full h-full object-contain"
                    src={imageLink}
                    alt={ProductFullInfo?.title || ""}
                  />
                </div>
              </div>
            </div>

            {/* ================= Product Information ================= */}
            <div className="md:sticky md:top-20 self-start">
              {/* Product Title */}
              <div className="flex gap-2 mb-3">
                <h2 className="font-bold text-xl shrink-0">اسم المنتج :</h2>

                <p
                  className={` ${openText ? "line-clamp-1" : "line-clamp-none"} `}
                >
                  {ProductFullInfo?.title}
                </p>
                <span
                  onClick={() => setOpenText((prev) => !prev)}
                  className={`  duration-200 bg-orange-600 w-4 h-4 flex justify-center items-center rounded-b-full text-white cursor-pointer`}
                >
                  <IoIosArrowDown
                    className={`${openText ? " rotate-180" : " rotate-0"} duration-150`}
                  />
                </span>
              </div>
              {/* Price */}
              <div className="flex gap-2 items-center">
                <h2 className="font-bold  text-xl ">سعر المنتج :</h2>

                <div className=" flex gap-1 md:gap-2 items-center">
                  <p className=" font-bold">{ProductFullInfo?.price}</p>
                  <h2 className=" font-bold">جنيه</h2>
                </div>
                <div>
                  {ProductFullInfo?.discount !== 0 && (
                    <p className=" text-sm md:text-base">
                      خصم{" "}
                      <span className=" text-green-600 ">
                        {ProductFullInfo?.discount}%
                      </span>{" "}
                      علي هذا المنتح
                    </p>
                  )}
                </div>
              </div>
              {ProductFullInfo?.max !== 0 && (
                <div className=" mt-5 flex gap-2 items-center">
                  <h2 className=" font-bold text-xl">عدد القطع في المخذن:</h2>
                  <p>{ProductFullInfo?.max} قطع</p>
                </div>
              )}
              {/* Description */}
              {/* Product Information */}
              {ProductFullInfo?.productInformation && (
                <div className="py-10">
                  <h2 className="font-bold mb-10 text-3xl leading-tight">
                    المواصفات
                  </h2>

                  <div className="border rounded-2xl overflow-hidden">
                    {ProductFullInfo?.productInformation?.map((el, index) => (
                      <div
                        key={index}
                        className="p-5 border-b last:border-b-0 flex justify-between items-center gap-5"
                      >
                        <h2>{el.title}</h2>

                        <p className="text-gray-600 text-left">{el.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Specifications */}
              {ProductFullInfo?.specifications && (
                <div className="py-10">
                  <h2 className="font-bold mb-10 text-3xl leading-tight">
                    المواصفات التفصيلية
                  </h2>

                  <div className="border rounded-2xl overflow-hidden">
                    {ProductFullInfo?.specifications?.map((el, index) => (
                      <div
                        key={index}
                        className="p-5 border-b last:border-b-0 flex justify-between items-center gap-5"
                      >
                        <h2>{el.title}</h2>

                        <p className="text-gray-600 text-left">{el.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className=" flex justify-center items-center gap-6 ">
                <button
                  onClick={() => {
                    dispatch(addCart(ProductFullInfo?.id));
                  }}
                  className={`cursor-pointer ${ProductFullInfo?.inCart ? "bg-orange-600 text-white" : " bg-white text-black border border-orange-600"} w-full md:w-1/2  py-1 px-14 rounded-4xl  `}
                >
                  {!ProductFullInfo?.quntity ? (
                    " اضف الي السله"
                  ) : (
                    <div className=" flex justify-between items-center">
                      <span
                        onClick={() => dispatch(increment(ProductFullInfo?.id))}
                        className=" bg-white flex justify-center items-center text-black rounded-full w-10 h-10 text-2xl"
                      >
                        <BsPlus />
                      </span>
                      <span>{ProductFullInfo?.quntity}</span>
                      <span
                        onClick={() => dispatch(decrement(ProductFullInfo?.id))}
                        className=" bg-white flex justify-center items-center text-black rounded-full w-10 h-10 text-2xl"
                      >
                        <GoDash />
                      </span>
                    </div>
                  )}
                </button>
                <button
                  onClick={() => {
                    dispatch(thunkWishlist(ProductFullInfo?.id));
                  }}
                  className={`  cursor-pointer bg-zinc-200
                text-lg  rounded-full w-12 flex items-center justify-center h-12`}
                >
                  {ProductFullInfo?.isliked ? (
                    <IoIosHeart className=" text-orange-600" />
                  ) : (
                    <BsHeart />
                  )}
                </button>
              </div>{" "}
            </div>
          </div>
        </div>

        <SlideProduct dataShowMap={dataLiked} title={" قد يعجبك أيضاً"} />
      </div>
    </Loading>
  );
}
