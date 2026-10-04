import { Link, Navigate } from "react-router-dom";
import Inputs from "../components/forms/inputs/Inputs";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const {
    loading,
    error,
    accessToken,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-orange-600/10">
      <div className="flex justify-center flex-col items-center px-4 py-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-4 flex flex-col gap-4 sm:px-8 py-6 mt-4 rounded-2xl w-full max-w-md"
          action=""
        >
          {/* email */}
          <Inputs
            type="string"
            name="email"
            register={register}
            error={errors.email?.message}
            label="البريد الالكتروني"
          />
          {/* password */}
          <Inputs
            error={errors.password?.message}
            type="string"
            idintfer="password"
            name="password"
            register={register}
            label=" كلمه المرور"
          />
          <button
            disabled={loading === "pending" || isSubmitting}
            type="submit"
            className="bg-orange-500 text-white cursor-pointer w-full my-3 flex justify-center items-center gap-2 py-2 rounded-lg disabled:opacity-50"
          >
            {loading === "pending" ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                <span>جاري تسجيل الدخول...</span>
              </>
            ) : (
              <span> تسجيل الدخول</span>
            )}
          </button>{" "}
          <p className=" text-red-600 text-center">{error}</p>
        </form>

        <div className="flex items-center gap-3">
          <p>لدي حساب بالفعل</p>
          <Link to="/Regester" className="text-orange-500">
            تسجيل دخول
          </Link>
        </div>
      </div>
    </div>
  );
}
