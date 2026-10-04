import {
  IoChevronForward,
  IoHelpOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#111820] text-white" dir="rtl">
      <div className="bg-[#151f2a] border-b border-b-white gap-15 flex-col md:flex-row flex py-5 px-4 justify-between items-center">
        <div>
          <h2 className="font-extrabold text-xl text-center md:text-right md:text-3xl mb-2 ">
            نحن دائماً جاهزون لمساعدتك
          </h2>
          <p className=" text-sm md:text-base">
            تواصل معنا من خلال أي من قنوات الدعم التالية:
          </p>
        </div>
        <div className=" flex-col md:flex-row flex items-center gap-6">
          <div className=" flex items-center gap-2">
            <span className=" bg-white h-6 text-xl w-6 flex justify-center items-center text-black rounded-full">
              <IoHelpOutline />
            </span>
            <div>
              <h2>مركز المساعدة</h2>
              <p>help.TechNest.com</p>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <span className=" bg-white h-6 text-xl w-6 flex justify-center items-center text-black rounded-full">
              <MdOutlineMail />
            </span>
            <div>
              <h2>الدعم عبر البريد الإلكتروني</h2>
              <p>egypt@TechNest.com</p>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <span className=" bg-white h-6 text-sm w-6 flex justify-center items-center text-black rounded-full">
              <FaPhoneAlt />
            </span>
            <div>
              <h2> الدعم عبر الجوال</h2>
              <p>5434</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="text-center lg:text-right">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {" "}
              <span className=" text-orange-700">T</span>
              ech<span className=" text-orange-700">N</span>est
            </h2>

            <p className="mt-3 text-gray-300">كل ما تحتاجه لحياة أفضل</p>

            {/* Social */}
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 transition hover:bg-orange-500"
              >
                <IoLogoFacebook />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 transition hover:bg-orange-500"
              >
                <IoLogoInstagram />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 transition hover:bg-orange-500"
              >
                <IoLogoYoutube />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 transition hover:bg-orange-500"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-5 text-lg font-bold">معلومات عن TechNest</h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                من نحن
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                تواصل معنا
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                الوظائف
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                سياسة الخصوصية
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-5 text-lg font-bold">خدمة العملاء</h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                الأسئلة الشائعة
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                الشحن والتوصيل
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                الاستبدال والاسترجاع
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-orange-500"
              >
                <IoChevronForward className="text-sm" />
                خدمة ما بعد البيع
              </a>
            </div>
          </div>

          {/* App */}
          <div>
            <h3 className="mb-5 text-lg font-bold">حمّل تطبيق TechNest</h3>

            <p className="mb-5 text-gray-300">تسوق بسهولة من موبايلك</p>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-gray-600 px-4 py-3 transition hover:border-orange-500"
              >
                <span className="text-2xl">▶</span>

                <div>
                  <p className="text-[10px] text-gray-400">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-gray-600 px-4 py-3 transition hover:border-orange-500"
              >
                <span className="text-2xl">●</span>

                <div>
                  <p className="text-[10px] text-gray-400">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-gray-700 pt-6 ">
          <p className="text-sm text-gray-400">
            © 2026 TechNest جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
