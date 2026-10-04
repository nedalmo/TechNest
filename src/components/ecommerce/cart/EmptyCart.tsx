import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useTranslation } from "react-i18next";

export default function EmptyCart() {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" relative mt-10">
        <div className=" flex flex-col justify-center items-center  ">
          <span className=" flex justify-center text-8xl   sm:text-[140px]  text-orange-500 mb-5">
            <GiShoppingCart />
          </span>
          <h2 className=" lg:text-3xl md:text-2xl  mb-3 font-bold">
            {t("Add your products here and start shopping")}{" "}
          </h2>
          <p className=" px-4 text-center">
            {t(
              "Add products to your shopping cart, and they will appear here.",
            )}{" "}
          </p>
          <Link
            className=" mt-5  w-1/2 sm:w-1/5  text-center block bg-orange-600 text-white text-2xl py-3 rounded-3xl"
            to=""
          >
            {t("Shop Now")}
          </Link>
        </div>
      </div>
    </div>
  );
}
