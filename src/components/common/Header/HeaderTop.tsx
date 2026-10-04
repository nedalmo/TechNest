import { HiMiniBars3 } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";

import { IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import HeaderBut from "./HeaderBut";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useAppDispatch, useAppSelecor } from "../../../store/Hooks";
import thunkGetProductWishlist from "../../../store/wishlist/thunkGetproductWishlist";
import SidCategorys from "./SidCategorys";
import Locations from "./Locations";
import { useTranslation } from "react-i18next";
import { changeLanguages } from "../../../store/language/sliceLanguage";
import { useLocation } from "react-router-dom";
export default function HeaderTop() {
  const Locationsd = useLocation();

  useEffect(() => {
    setOpenSideCategotys(false);
  }, [Locationsd.pathname]);
  const dispatch = useAppDispatch();
  const language = useAppSelecor((state) => state.sliceLanguage.language);
  const [openSideCategotys, setOpenSideCategotys] = useState(false);
  const [open, setOpen] = useState<boolean>(true);
  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const { user, accessToken } = useAppSelecor((state) => {
    return state.authSlice;
  });

  useEffect(() => {
    if (accessToken) {
      dispatch(thunkGetProductWishlist("productId"));
    }
  }, [accessToken, dispatch]);
  const fsasd = useAppSelecor((state) => state.sliceWishlist.itemsId);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  function handleChangeLanguage() {
    dispatch(changeLanguages());
  }

  return (
    <header
      dir={language == "ar" ? "rtl" : "ltr"}
      className="bg-black text-white fixed left-0  right-0 z-20 "
    >
      <div>
        <SidCategorys
          openSideCategotys={openSideCategotys}
          setOpenSideCategotys={setOpenSideCategotys}
        />
      </div>
      <div className="flex  gap-3   relative justify-between px-4 items-center  lg:py-0 py-3 z-20  flex-wrap  ">
        {/* logo */}
        <div className="flex items-center gap-3 lg:gap-5 ">
          <button
            onClick={() => setOpenSideCategotys(!openSideCategotys)}
            className="lg:hidden cursor-pointer block"
          >
            <span className="text-2xl">
              <HiMiniBars3 className=" inline" />
            </span>
          </button>

          <Link to="/" className="flex items-center cursor-pointer">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {" "}
              <span className=" text-orange-700">T</span>
              ech<span className=" text-orange-700">N</span>est
            </h2>
          </Link>
        </div>
        {/* searsh and  delver to */}
        <div
          className={` flex  lg:relative absolute lg:top-0  ${open ? "top-13 " : "-top-30"} transition-[top] duration-700 py-4   left-0 bg-black   px-4   justify-evenly lg:flex-row flex-col  order-1 lg:order-0   gap-2 lg:w-auto w-full   `}
        >
          {/* delver to  */}
          <Locations />
          {/* searsh  */}
          <div className="flex   lg:w-110   rounded-sm items-center shrink relative   bg-white ">
            <span className=" top-1/2 -translate-y-1/2  font-extrabold text-zinc-500 absolute right-2">
              <FaSearch />
            </span>

            <input
              className=" px-8  w-full     outline-none   text-zinc-700 py-3 md:py-4 rounded-sm bg-white  "
              name="searsh"
              type="text"
              placeholder={t("What are you looking for?")}
            />
            <span className="   absolute left-2 text-zinc-600 ">
              <IoClose />
            </span>
          </div>
        </div>
        {/* lang and accout cart fivorite */}
        <div className="flex items-center gap-3   lg:gap-10 ">
          {/* icon searsh  */}
          <div
            onClick={() => {
              setOpen(true);
            }}
            className={` cursor-pointer  lg:hidden  ${open ? "hidden" : "flex"}`}
          >
            <span className=" text-3xl">
              <IoSearchSharp />
            </span>
          </div>

          {/* <language  */}
          <button
            onClick={handleChangeLanguage}
            className="flex  cursor-pointer   flex-col items-center gap-1"
          >
            <span className=" text-3xl">
              <MdLanguage />
            </span>
            <h3 className="text-xs lg:block hidden">
              {" "}
              {language === "ar" ? "English" : "عربي"}
            </h3>
          </button>

          {/* fivourts */}
          <Link
            to="Wishlist"
            className="flex    flex-col items-center gap-1 relative z-0 "
          >
            <span className=" text-3xl">
              <FaRegHeart />
            </span>
            <h3 className="text-xs lg:block hidden"> {t("Wishlist")}</h3>
            <div
              className={` ${fsasd.length > 0 ? "block" : " hidden"} absolute
                 bg-orange-600 text-white
                  h-5 w-5 rounded-full lg:left-3
                   lg:-top-1.5 
                   z-0
                  
              -top-1 -left-1
               flex justify-center items-center`}
            >
              {fsasd.length}
            </div>
          </Link>
          {/* account  */}
          <Link
            to={user && accessToken ? "/account" : "/Regester"}
            className="flex   flex-col items-center gap-1"
          >
            <span className=" text-3xl">
              <MdOutlineAccountCircle />
            </span>
            <h3 className="text-xs lg:block hidden">{t("Account")}</h3>
          </Link>
          {/* cart */}
          <Cart />
        </div>
      </div>

      <HeaderBut
        openSideCategotys={openSideCategotys}
        setOpenSideCategotys={setOpenSideCategotys}
      />

      <div></div>
    </header>
  );
}
