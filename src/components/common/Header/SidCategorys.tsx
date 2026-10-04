import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelecor } from "../../../store/Hooks";
import { Link } from "react-router-dom";
import { thunk } from "../../../store/categorys/Slicecategorys";
import { useTranslation } from "react-i18next";

function SidCategorys({
  openSideCategotys,
  setOpenSideCategotys,
}: {
  openSideCategotys: boolean;
  setOpenSideCategotys: Dispatch<SetStateAction<boolean>>;
}) {
  const { recods } = useAppSelecor((state) => state.sliceCategorys);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunk());
  }, [dispatch]);
  const [openAcordy, setOpenAcordy] = useState(-1);
  useEffect(() => {
    if (openSideCategotys) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSideCategotys]);
  const { t } = useTranslation();
  const lang = useAppSelecor((state) => state.sliceLanguage.language);

  return (
    <div dir={`${lang === "ar" ? "rtl" : "ltr"}`}>
      <div
        className={`  overflow-auto px-3   fixed top-0 z-96 w-full md:w-130 h-full  bg-white ${openSideCategotys ? "right-0" : " -right-full md:-right-140"} transition-all duration-500`}
      >
        <div className=" flex my-10   text-black justify-between items-center">
          <h2 className=" font-bold text-2xl md:text-3xl">
            {" "}
            {t("All Categories")}
          </h2>
          <button
            className=" cursor-pointer bg-orange-600 text-white flex justify-center hover:rotate-180 transition-all duration-300 items-center w-9 h-9 text-2xl rounded-full"
            onClick={() => {
              setOpenSideCategotys(false);
            }}
          >
            <IoClose />
          </button>
        </div>
        {/*  */}
        <div className="">
          {recods?.map((item, ind) => {
            return (
              <div
                className="  bg-[#F5F2F0] overflow-hidden grid rounded-xl   mb-3"
                key={item?.id}
              >
                <button
                  onClick={() => {
                    setOpenAcordy(openAcordy === ind ? -1 : ind);
                  }}
                  className=" rounded-xl px-3  items-center  py-1    flex justify-between"
                >
                  <h2 className=" text-black font-bold md:text-lg">
                    {t(item?.title)}
                  </h2>
                  <img className=" w-17" src={item?.img} alt="" />
                </button>

                <div
                  className={` overflow-hidden  ${openAcordy === ind ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"}  duration-200  transition-all`}
                >
                  <ul className="  text-black mr-5 flex flex-col gap-6 mb-3 underline font-bold   overflow-hidden">
                    {item.tags?.map((li) => {
                      return (
                        <li key={li.id}>
                          <Link to={`/categoris/${item.prefix}`}>
                            {li.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        onClick={() => setOpenSideCategotys(false)}
        className={` ${openSideCategotys ? "w-full" : "w-0"}   h-screen z-90 bg-zinc-800/50 cursor-pointer fixed top-0 left-0 right-0`}
      ></div>
    </div>
  );
}

export default SidCategorys;
