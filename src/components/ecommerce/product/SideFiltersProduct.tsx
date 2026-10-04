import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import "rc-slider/assets/index.css";
const colors = [
  {
    id: 1,
    title: "احمر",
    color: "red-600",
  },
  {
    id: 2,
    title: "اخضر",
    color: "green-600",
  },
  {
    id: 3,
    title: "اسود",
    color: "black",
  },
  {
    id: 4,
    title: "ازرق",
    color: "blue-600",
  },
  {
    id: 5,
    title: "ابيض",
    color: "white",
  },
  {
    id: 6,
    title: "اصفر",
    color: "yellow-600",
  },
  {
    id: 7,
    title: "برتقالي",
    color: "orange-600",
  },
];
type TOpen = "one" | "two" | "three" | "four" | "five" | "null";

export default function SideFiltersProduct() {
  const [changeColor, setChangeColor] = useState("transparent");
  const MIN_PRICE = 2000;
  const MAX_PRICE = 50000;
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const [open, setOpen] = useState<TOpen>("one");
  return (
    <div className="  bg-  bg-[#F5F2F0] rounded-xl max-w-400 w-350 lg:block px-3 py-2 hidden">
      <div className=" flex justify-between mb-7   ">
        <button className=" font-bold text-lg">كل التصنيفات</button>
        <button> مسح الكل</button>
      </div>
      <div>
        <div className=" overflow-hidden grid h-full border-b-amber-200 border-b">
          <div
            onClick={() =>
              setOpen((prev) => (prev === "null" ? "one" : "null"))
            }
            className=" py-3 flex cursor-pointer justify-between items-center"
          >
            <h2 className=" font-bold"> العلامة التجارية</h2>
            <h3 className=" font-bold text-xl">
              <BsPlus />
            </h3>
          </div>
          <ul
            className={`  grid ${open === "one" ? " grid-rows-[1fr]" : "grid-rows-[0fr]"}  py-4   overflow-hidden transition-all duration-300 `}
          >
            <div className=" flex flex-col justify-end w-full items-start  gap-3 overflow-hidden">
              <div className=" relative flex items-center my-4 w-full px-1 ">
                <input
                  className="  w-full px-10 outline-none py-2 border-zinc-900 top-1/2  -translate-0.5 border rounded-2xl"
                  type="text"
                  placeholder="ابحث عن كل الماركات"
                />
                <span className=" absolute px-3 text-zinc-600  right-0 -translate-y-1/2 top-1/2">
                  <IoSearch />
                </span>
              </div>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
            </div>
          </ul>
        </div>
        <div className=" overflow-hidden grid h-[\100\%] border-b-amber-200 border-b">
          <div
            onClick={() =>
              setOpen((prev) => (prev === "null" ? "two" : "null"))
            }
            className=" py-3 flex cursor-pointer justify-between items-center"
          >
            <h2 className=" font-bold"> السعر</h2>
            <h3 className=" font-bold text-xl">
              <BsPlus />
            </h3>
          </div>
          <ul
            className={`  grid ${open === "two" ? " grid-rows-[1fr]" : "grid-rows-[0fr]"}  py-4   overflow-hidden transition-all duration-300 `}
          >
            <div className="flex flex-col justify-end w-full items-start gap-3 overflow-hidden">
              {/* أقل سعر */}
              <div className="w-full">
                <h2 className="mb-2">أقل سعر</h2>

                <input
                  type="range"
                  min={MIN_PRICE}
                  max={maxPrice}
                  value={minPrice}
                  onChange={(e) => {
                    const value = Number(e.target.value);

                    if (value <= maxPrice) {
                      setMinPrice(value);
                    }
                  }}
                  className="w-full"
                  name="minPrice"
                />
              </div>

              {/* أكبر سعر */}
              <div className="w-full">
                <h2 className="mb-2">أكبر سعر</h2>

                <input
                  type="range"
                  min={minPrice}
                  max={MAX_PRICE}
                  value={maxPrice}
                  onChange={(e) => {
                    const value = Number(e.target.value);

                    if (value >= minPrice) {
                      setMaxPrice(value);
                    }
                  }}
                  className="w-full"
                  name="maxPrice"
                />
              </div>

              {/* عرض الأسعار */}
              <div className="flex justify-between items-center w-full px-3 mt-5">
                <div className="text-center flex gap-3 flex-col">
                  <h1 className="font-bold">أقل سعر</h1>
                  <p className="font-bold">{minPrice}</p>
                </div>

                <div className="text-center flex gap-3 flex-col">
                  <h1 className="font-bold">أكبر سعر</h1>
                  <p className="font-bold">{maxPrice}</p>
                </div>
              </div>

              <button
                type="button"
                className="flex mx-auto px-15 cursor-pointer mt-4 text-center bg-orange-600 text-white py-1 rounded-3xl"
              >
                طبق السعر
              </button>
            </div>
          </ul>
        </div>
        <div className=" overflow-hidden grid h-[\100\%] border-b-amber-200 border-b">
          <div
            onClick={() =>
              setOpen((prev) => (prev === "null" ? "three" : "null"))
            }
            className=" py-3 flex cursor-pointer justify-between items-center"
          >
            <h2 className=" font-bold"> الالون</h2>
            <h3 className=" font-bold text-xl">
              <BsPlus />
            </h3>
          </div>
          <ul
            className={`  grid ${open === "three" ? " grid-rows-[1fr]" : "grid-rows-[0fr]"}  py-4   overflow-hidden transition-all duration-300 `}
          >
            <div className=" flex flex-col justify-end w-full items-start  gap-3 overflow-hidden">
              {colors.map((el) => {
                return (
                  <div
                    key={el.id}
                    className="flex cursor-pointer gap-2 items-center "
                    onClick={() => setChangeColor(el.color)}
                  >
                    <h2
                      className={`bg-${changeColor === el.color ? changeColor : ""} w-4 h-4 rounded-full border border-black`}
                    ></h2>
                    <p>{el.title}</p>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
        <div className=" overflow-hidden grid h-[\100\%] border-b-amber-200 border-b">
          <div
            onClick={() =>
              setOpen((prev) => (prev === "null" ? "four" : "null"))
            }
            className=" py-3 flex cursor-pointer justify-between items-center"
          >
            <h2 className=" font-bold"> العلامة التجارية</h2>
            <h3 className=" font-bold text-xl">
              <BsPlus />
            </h3>
          </div>
          <ul
            className={`  grid ${open === "four" ? " grid-rows-[1fr]" : "grid-rows-[0fr]"}  py-4   overflow-hidden transition-all duration-300 `}
          >
            <div className=" flex flex-col justify-end w-full items-start  gap-3 overflow-hidden">
              <div className=" relative flex items-center my-4 ">
                <input
                  className=" px-10 outline-none py-2 border-zinc-900 top-1/2  -translate-0.5 border rounded-2xl"
                  type="text"
                  placeholder="ابحث عن كل الماركات"
                />
                <span className=" absolute px-3 text-zinc-600  right-0 -translate-y-1/2 top-1/2">
                  <IoSearch />
                </span>
              </div>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor="checkone"
              >
                <input
                  id="checkone"
                  className="  cursor-pointer"
                  name="checkbox"
                  type="checkbox"
                />
                gsdfgsdf
              </label>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
