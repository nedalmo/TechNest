import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function EmptyWishlist() {
  return (
    <div>
      <div className=" relative mt-20">
        <div className=" flex flex-col justify-center items-center  ">
          <span className=" flex justify-center text-8xl   sm:text-[140px]  text-orange-500 mb-5">
            <FaHeart />
          </span>
          <h2 className=" lg:text-3xl md:text-2xl  mb-3 font-bold">
            أضف المنتجات إلى قائمتك المفضلة
          </h2>
          <p className=" px-4 text-center">
            ابدأ بإضافة منتجاتك المفضلة واستمتع بتجربة تسوق سلسة.
          </p>
          <Link
            className=" mt-5  w-1/2 sm:w-1/5  text-center block bg-orange-600 text-white text-2xl py-3 rounded-3xl"
            to=""
          >
            تسوق الآن
          </Link>
        </div>
      </div>
    </div>
  );
}
