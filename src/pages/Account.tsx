import { useAppDispatch, useAppSelecor } from "../store/Hooks";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { Logout } from "../store/auth/thunkAuth/authSlice";
export default function Account() {
  const dispatch = useAppDispatch();
  const nacigate = useNavigate();
  const { user } = useAppSelecor((state) => state.authSlice);
  return (
    <div>
      {/* header  */}
      <div className=" bg-orange-400 flex flex-col gap-5 md:flex-row mt-8  lg:mt-2     md:items-center py-3 mx-1   rounded-2xl px-3 md:px-10 justify-between">
        <div className=" flex items-center">
          <span className=" hidden md:block text-3xl md:text-7xl text-white">
            <RiAccountPinCircleFill />
          </span>
          <div className=" flex md:block  md:gap-0 gap-25 text-white">
            <p className=" text-xl">
              {" "}
              مرحبا {user?.firstName} {user?.lastName}
            </p>
            {/* <p className=" text-black"> ملفك الشخصي</p> */}
            <button
              onClick={() => {
                dispatch(Logout());
                nacigate("/");
              }}
              className=" bg-red-600  px-2 text-sm md:text-base md:px-3 py-1 rounded-2xl mt-2 cursor-pointer"
            >
              {" "}
              تسجيل الخروج{" "}
            </button>
          </div>
        </div>
        {/* email  */}

        <div className=" bg-amber-400 px-3 py-2 rounded-2xl gap-20 flex items-center justify-between">
          <div>
            <p>البريد الالكتروني</p>
            <p className=" text-white mt-1">{user?.email}</p>
          </div>
          <span className=" text-2xl ">
            <MdEmail />
          </span>
        </div>
      </div>

      {/* body   */}

      <div className="flex justify-center w-full px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
          {/* box */}
          <Link
            to=""
            className="flex items-center gap-4 p-5 bg-white rounded-2xl
                 border border-gray-100 shadow-sm
                 hover:shadow-md hover:border-orange-200
                 hover:-translate-y-1 transition-all duration-300"
          >
            <span
              className="flex items-center justify-center
                   w-14 h-14 rounded-xl
                   bg-orange-100 text-orange-500 text-2xl shrink-0"
            >
              <TfiShoppingCartFull />
            </span>

            <div className="text-right">
              <h2 className="text-lg font-bold text-gray-800">طلباتي</h2>

              <p className="text-sm text-gray-500 mt-1">شوف طلباتك من هنا</p>
            </div>
          </Link>

          <Link
            to=""
            className="flex items-center gap-4 p-5 bg-white rounded-2xl
                 border border-gray-100 shadow-sm
                 hover:shadow-md hover:border-orange-200
                 hover:-translate-y-1 transition-all duration-300"
          >
            <span
              className="flex items-center justify-center
                   w-14 h-14 rounded-xl
                   bg-orange-100 text-orange-500 text-2xl shrink-0"
            >
              <FaHeart />
            </span>

            <div className="text-right">
              <h2 className="text-lg font-bold text-gray-800">
                القائمة المفضلة
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                المنتجات المحفوظه في المفضله{" "}
              </p>
            </div>
          </Link>

          <Link
            to=""
            className="flex items-center gap-4 p-5 bg-white rounded-2xl
                 border border-gray-100 shadow-sm
                 hover:shadow-md hover:border-orange-200
                 hover:-translate-y-1 transition-all duration-300"
          >
            <span
              className="flex items-center justify-center
                   w-14 h-14 rounded-xl
                   bg-orange-100 text-orange-500 text-2xl shrink-0"
            >
              <MdManageAccounts />
            </span>

            <div className="text-right">
              <h2 className="text-lg font-bold text-gray-800">بيناتي </h2>

              <p className="text-sm text-gray-500 mt-1">
                عدل بيناتك الشخصيه من هنا{" "}
              </p>
            </div>
          </Link>

          <Link
            to=""
            className="flex items-center gap-4 p-5 bg-white rounded-2xl
                 border border-gray-100 shadow-sm
                 hover:shadow-md hover:border-orange-200
                 hover:-translate-y-1 transition-all duration-300"
          >
            <span
              className="flex items-center justify-center
                   w-14 h-14 rounded-xl
                   bg-orange-100 text-orange-500 text-2xl shrink-0"
            >
              <IoDocumentAttachSharp />
            </span>

            <div className="text-right">
              <h2 className="text-lg font-bold text-gray-800">
                الشروط والأحكام
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                سياسات البيع و الشراء داخل الموقع{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
