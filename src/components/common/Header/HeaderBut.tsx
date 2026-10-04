import { type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
export default function HeaderBut({
  openSideCategotys,
  setOpenSideCategotys,
}: {
  openSideCategotys: boolean;
  setOpenSideCategotys: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-3 hidden lg:block">
      <ul className="flex gap-8 items-center ">
        <button
          onClick={() => {
            setOpenSideCategotys(!openSideCategotys);
          }}
          className="flex  cursor-pointer items-center gap-1 hover:text-orange-500 duration-300"
        >
          <span>
            {" "}
            <HiMiniBars3 className="text-xl" />{" "}
          </span>
          <h2>{t("All categories")} </h2>
        </button>

        <li>
          <NavLink
            to="/categoris/electronics"
            className="text-lg  hover:text-orange-500 duration-300"
          >
            {t("Electronics")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoris/large-home-appliances"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {t("Large Home Appliances")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoris/mobile-tablets"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {t("Mobiles & Tablets")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="categoris/small-home-appliances"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {t("Small Home Appliances")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoris/laptop-pc"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {t("Laptops & PCs")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoris/tvs-projectors"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {t("TVs")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoris/personal-care-appliances"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {" "}
            {t("Personal Care")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoris/PlayStation"
            className="text-lg hover:text-orange-500 duration-300"
          >
            {" "}
            {t("playstation")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
