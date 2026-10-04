import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppSelecor } from "../../../store/Hooks";
import { getCartTotalQuntity } from "../../../store/cart/selectores/select";
import { useEffect, useState } from "react";
import "../../../styles/anmainsion.css";
import { useTranslation } from "react-i18next";
export default function Cart() {
  const { t } = useTranslation();

  const [scala, setScale] = useState(false);
  const quntityNumber = useAppSelecor(getCartTotalQuntity);

  useEffect(() => {
    setScale(true);
    const timerOut = setTimeout(() => {
      setScale(false);
    }, 300);

    return () => {
      clearTimeout(timerOut);
    };
  }, [quntityNumber]);

  return (
    <div>
      <Link to="cart" className="flex   flex-col items-center gap-1 relative  ">
        <span className=" text-3xl">
          <IoCartOutline />
        </span>
        <h3 className="text-xs lg:block hidden">{t("Cart")}</h3>
        <div
          className={`  ${scala ? "pumpCartQuantity" : ""}  ${quntityNumber == 0 ? "hidden" : ""} absolute bg-orange-600 text-white h-5 w-5 rounded-full
         lg:left-3 lg:-top-1.5 -top-1 -left-1 flex justify-center items-center`}
        >
          {quntityNumber}
        </div>
      </Link>
    </div>
  );
}
