import { useState } from "react";
import { Link } from "react-router-dom";
import Inputs from "../components/forms/inputs/Inputs";

import { Navigate } from "react-router-dom";
import useRegester from "../hooks/useRegester";
export default function Regester() {
  const [passw] = useState("password");
  const [passwConf] = useState("password");

  const {
    errors,
    isSending,
    accessToken,
    onBulerHandelerEmail,
    onSubmit,
    register,
    handleSubmit,
    emailAvailableSttus,
    isSubmitting,
    loading,
    error,
  } = useRegester();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-orange-600/10 py-10">
      <div className="flex justify-center flex-col items-center px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-4 sm:px-8 py-6 mt-4 rounded-2xl w-full max-w-md"
          action=""
        >
          {/* name  */}
          <div className="flex items-center mb-3 gap-3 flex-col sm:flex-row">
            {/* first name */}
            <Inputs
              name="firstName"
              type="string"
              register={register}
              idintfer="text"
              label="الاسم الاول"
              error={errors.firstName?.message}
            />
            {/* last name */}
            <Inputs
              idintfer="text"
              name="lastName"
              type="string"
              register={register}
              label="الاسم الثاني"
              error={errors.lastName?.message}
            />
            {}
          </div>

          {/* email */}
          <Inputs
            idintfer="text"
            name="email"
            type="string"
            register={register}
            label="البريد  الالكتروني"
            onBluer={onBulerHandelerEmail}
            error={
              errors.email?.message
                ? errors.email?.message
                : emailAvailableSttus === "notAvaliable"
                  ? "هذا البريد الإلكتروني مستخدم بالفعل."
                  : emailAvailableSttus === "failed"
                    ? "حدث خطأ في الخادم، يرجى المحاولة مرة أخرى."
                    : ""
            }
            formText={
              emailAvailableSttus === "cheking"
                ? "جاري التحقق من البريد الإلكتروني."
                : ""
            }
            succses={
              emailAvailableSttus === "available"
                ? "هذا البريد الإلكتروني متاح للاستخدام."
                : ""
            }
            disabled={emailAvailableSttus === "cheking" ? true : false}
          />

          {/* password */}
          <div className="flex  gap-4 flex-col mb-3">
            <Inputs
              idintfer="password"
              name="password"
              type={passw}
              register={register}
              label="كلمه  المرور "
              error={errors.password?.message}
            />
            {/*  confirm password */}
            <Inputs
              idintfer="password"
              name="confirmPassword"
              type={passwConf}
              register={register}
              label="تاكيد   كلمه  المرور"
              error={errors.password?.message}
            />
          </div>

          <button
            type="submit"
            disabled={
              emailAvailableSttus === "cheking" ||
              loading === "pending" ||
              isSubmitting ||
              isSending
            }
            className="bg-orange-500 text-white cursor-pointer w-full my-3 flex justify-center items-center gap-2 py-2 rounded-lg disabled:opacity-50"
          >
            {loading === "pending" || isSending ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                <span>جاري إنشاء الحساب...</span>
              </>
            ) : (
              <span>إنشاء حساب</span>
            )}
          </button>
          <p className=" text-red-600">{error}</p>
        </form>

        <div className="flex items-center gap-3">
          <p>لدي حساب بالفعل</p>
          <Link to="/lgoin" className="text-orange-500">
            تسجيل دخول
          </Link>
        </div>
      </div>
    </div>
  );
}
