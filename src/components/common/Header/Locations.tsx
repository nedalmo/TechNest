import { GrDeliver } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import useLoactions from "../../../hooks/useLoactions";
import { useTranslation } from "react-i18next";

export default function Locations() {
  const { t } = useTranslation();
  const {
    step,
    areas,

    confirmLocation,

    locations,

    handelChoseGover,
    handelMainContent,
    toCity,
    handelSelectGovernorate,
    handleFinsh,

    openLocation,
    handelCloseModel,
    handleOpenModel,
    lang,
    selectedData,
    dataLocations,
  } = useLoactions();

  const governorate = selectedData.governorate || locations.governorate;

  const area = selectedData.area || locations.area || "";

  return (
    <div className="flex items-center gap-2 lg:order-0 order-1">
      <div
        onClick={handleOpenModel}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span className="text-2xl lg:flex hidden">
          <GrDeliver />
        </span>

        <h2> {t("Delivering to")}:</h2>

        {/* Governorate */}

        <p className="flex items-center gap-1">
          {t(locations.governorate)}

          <span className={`${lang === "ar" ? "" : " rotate-180"} "`}>
            <IoMdArrowBack className=" " />
          </span>
        </p>

        {/* Area */}

        {locations.area && (
          <>
            <p className="hidden lg:block">
              {locations.area
                ? t(locations.area).length > 3
                  ? `${t(locations.area).slice(0, 3)}...`
                  : t(locations.area)
                : ""}
            </p>
            <p className="block lg:hidden">{t(locations.area)}</p>
          </>
        )}
      </div>

      <div
        className={`
          fixed
          top-0
          z-9999
          w-full
          md:w-137.5
          h-full
          bg-white
          overflow-auto
          px-4
          md:px-7

          transition-all
          duration-500

          ${openLocation ? "left-0" : "-left-full md:-left-150"}
        `}
      >
        {step === "main" && (
          <div className="text-black">
            {/* Header */}

            <div className="flex my-5 justify-between items-center">
              <h2 className="font-bold text-3xl">
                {t("Choose Your Location")}{" "}
              </h2>

              <button
                type="button"
                onClick={handelCloseModel}
                className="
                  cursor-pointer
                  bg-orange-600
                  text-white
                  flex
                  justify-center
                  items-center
                  w-9
                  h-9
                  text-2xl
                  rounded-full

                  hover:rotate-180
                  transition-all
                  duration-300
                "
              >
                <IoClose />
              </button>
            </div>

            <div className="mt-20 flex flex-col gap-5">
              <button
                type="button"
                onClick={handelChoseGover}
                className="
                  cursor-pointer
                  text-black
                  flex
                  justify-between
                  bg-[#F5F2F0]
                  w-full
                  py-5
                  rounded-2xl
                  px-3
                "
              >
                <div className="text-right">
                  <h2 className="mb-3">{t("Choose Governorate")} </h2>

                  <p className=" text-start text-lg">{t(governorate)}</p>
                </div>

                <div className="flex items-center gap-2 text-orange-500">
                  <p>{t("Choose")}</p>

                  <span className={`${lang === "ar" ? "" : " rotate-180"}`}>
                    <MdOutlineArrowBackIosNew />
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={toCity}
                disabled={!governorate}
                className="
                  cursor-pointer
                  disabled:cursor-not-allowed
                  text-black
                  flex
                  justify-between
                  items-center
                  bg-[#F5F2F0]
                  w-full
                  py-5
                  rounded-2xl
                  px-3
                "
              >
                <div className="text-right">
                  <h2 className="mb-3"> {t("Choose Area")}</h2>

                  <p className="text-lg">{t(area) || t("Not Selected")}</p>
                </div>

                <div className="flex items-center gap-2 text-orange-500">
                  <p>{t("Choose")}</p>

                  <span className={`${lang === "ar" ? "" : " rotate-180"}`}>
                    <MdOutlineArrowBackIosNew />
                  </span>
                </div>
              </button>
            </div>

            <button
              type="button"
              disabled={!selectedData.governorate || !selectedData.area}
              onClick={confirmLocation}
              className="
                font-bold
                text-xl
                mt-10
                bg-orange-500
                w-full
                py-4
                rounded-4xl
                cursor-pointer
                block
                disabled:bg-zinc-600/50
                disabled:cursor-not-allowed
              "
            >
              {t("Confirm Location")}
            </button>
          </div>
        )}

        {step === "governorates" && (
          <div className="text-black">
            {/* Header */}

            <div className="py-5 flex items-center gap-8">
              <button
                type="button"
                onClick={handelMainContent}
                className="
                  w-10
                  h-10
                  flex
                  cursor-pointer
                  justify-center
                  items-center
                  bg-[#F5F2F0]
                  font-bold
                  text-2xl
                  rounded-full
                "
              >
                <MdOutlineKeyboardArrowRight />
              </button>

              <h2 className="text-3xl font-bold"> {t("Choose Governorate")}</h2>
            </div>

            {/* Search */}

            <div className="relative my-5">
              <FaSearch
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />
              <input
                type="search"
                placeholder={t("Search for a governorate") + " ..."}
                className="
                  w-full
                  rounded-3xl
                  bg-gray-100
                  py-5
                  pr-11
                  pl-4
                  outline-none
                "
              />
            </div>

            <div>
              {dataLocations.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => handelSelectGovernorate(city)}
                  className="
                    my-3
                    cursor-pointer
                    flex
                    justify-between
                    w-full
                    bg-[#F5F2F0]
                    py-5
                    rounded-2xl
                    items-center
                    px-3
                  "
                >
                  <p className="font-bold text-lg">{t(city.title)}</p>

                  <MdKeyboardArrowLeft
                    className={`${lang === "ar" ? "" : " rotate-180"} font-bold text-2xl`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "areas" && (
          <div className="text-black">
            {/* Header */}

            <div className="py-5 flex items-center gap-8">
              <button
                type="button"
                onClick={handelMainContent}
                className="
                  cursor-pointer
                  w-10
                  h-10
                  flex
                  justify-center
                  items-center
                  bg-[#F5F2F0]
                  font-bold
                  text-2xl
                  rounded-full
                "
              >
                <MdOutlineKeyboardArrowRight />
              </button>

              <h2 className="text-3xl font-bold">{t("Choose Area")}</h2>
            </div>

            {/* Search */}

            <div className="relative my-5">
              <FaSearch
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="search"
                placeholder={t("Search for an area") + " ..."}
                className="
                  w-full
                  rounded-3xl
                  bg-gray-100
                  py-5
                  pr-11
                  pl-4
                  outline-none
                "
              />
            </div>

            {/* Areas */}

            <div>
              {areas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => handleFinsh(area)}
                  className="
                    my-3
                    cursor-pointer
                    flex
                    justify-between
                    w-full
                    bg-[#F5F2F0]
                    py-5
                    rounded-2xl
                    items-center
                    px-3
                  "
                >
                  <p className="font-bold text-lg">{t(area.title)}</p>

                  <MdKeyboardArrowLeft
                    className={`${lang === "ar" ? "" : " rotate-180"} font-bold text-2xl`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        onClick={handelCloseModel}
        className={`
          fixed
          top-0
          left-0
          right-0
          h-screen
           z-9998
          bg-zinc-800/50

          transition-all
          duration-500

          ${
            openLocation
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />
    </div>
  );
}
