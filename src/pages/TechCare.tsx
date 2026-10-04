import { FaPhoneAlt } from "react-icons/fa";
import { IoHelpOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function TechCare() {
  return (
    <div className="w-full bg-white">
      {/* ==================== Hero ==================== */}
      <section className="bg-[#F5F2F0]">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-10 sm:px-6 md:flex-row md:justify-between md:gap-12 md:py-16 lg:px-8">
          <div className="w-full text-center md:w-1/2 md:text-right">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              TechCare
            </h2>

            <h3 className="mb-4 text-2xl font-bold leading-relaxed sm:text-3xl lg:text-4xl">
              حافظ على أجهزتك مع خدمات تك كير
            </h3>

            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              كل احتياجات أجهزتك في مكان واحد: من التركيب والتشغيل، للصيانة
              والضمان.
            </p>
          </div>

          <div className="flex w-full justify-center md:w-1/2">
            <img
              className="h-auto max-h-72 w-full max-w-md object-contain"
              src="/src/assets/imgs/image.png"
              alt="TechCare"
            />
          </div>
        </div>
      </section>

      {/* ==================== التجميع والتركيب ==================== */}
      <section className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          التجميع والتركيب
        </h2>

        <div className="overflow-hidden rounded-xl bg-[#F5F2F0]">
          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-6">
            <img
              className="h-16 w-16 object-contain"
              src="https://btech.com/_next/static/media/tv-icon.0ibugauuerecq.webp"
              alt="تركيب وتثبيت التلفزيون"
            />

            <div>
              <h3 className="text-lg font-bold sm:text-xl">
                تركيب وتثبيت التلفزيون
              </h3>

              <p className="mt-1 text-gray-700">
                ركّب تلفزيونك الجديد بكل سهولة.
              </p>
            </div>
          </div>

          <ul className="flex list-disc flex-col gap-3 px-8 pb-6 leading-8 sm:px-12">
            <li>مفيش داعي تشيل الجهاز أو تفك التغليف أو تركبه.</li>

            <li>
              فريقنا مسؤول عن كل التفاصيل عشان تستمتع بتلفزيونك الجديد في نفس
              اليوم.
            </li>

            <li>
              احجز الخدمة مع تلفزيونك الجديد وابدأ المشاهدة في زيارة واحدة.
            </li>

            <li>الخدمة متاحة فقط لأجهزة التلفزيون المباعة من فروعنا.</li>
          </ul>
        </div>
      </section>

      {/* ==================== الصيانة والضمانات ==================== */}
      <section className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          الصيانة والضمانات
        </h2>

        {/* صيانة التكييف */}
        <div className="mb-8 overflow-hidden rounded-xl bg-[#F5F2F0]">
          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-6">
            <img
              className="h-16 w-16 object-contain"
              src="https://btech.com/_next/static/media/tv-icon.0ibugauuerecq.webp"
              alt="صيانة وتنظيف التكييف"
            />

            <div>
              <h3 className="text-lg font-bold sm:text-xl">
                صيانة وتنظيف التكييف
              </h3>

              <p className="mt-1 text-gray-700">
                حافظ على أداء تكييفك طول السنة.
              </p>
            </div>
          </div>

          <div className="space-y-4 px-4 pb-6 text-sm leading-8 text-gray-700 sm:px-6 sm:text-base">
            <p>
              مع تراكم الأتربة، بيحتاج التكييف يبذل مجهود أكبر عشان يبرد المكان،
              وده ممكن يقلل كفاءته ويزود استهلاك الكهرباء. علشان كده الصيانة
              الدورية بتحافظ على أداء التكييف وتقلل احتمالية الأعطال.
            </p>

            <p>
              فريقنا بيقدم خدمات تنظيف عميق، وفحص الأداء، وتعقيم الوحدة، والتأكد
              من مستوى الفريون، لضمان أفضل كفاءة لتكييفك.
            </p>

            <p>
              الخدمة متاحة لجميع أنواع التكييفات، سواء من فروعنا أو من مكان آخر.
            </p>
          </div>
        </div>

        {/* ==================== الضمانات ==================== */}
        <div className="mb-8 overflow-hidden rounded-xl bg-[#F5F2F0]">
          <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 md:flex-row md:items-center">
            <img
              className="mx-auto h-32 w-32 object-contain md:mx-0"
              src="https://btech.com/_next/static/media/warranties.0g0o-l4.bpv.4.webp"
              alt="الضمانات"
            />

            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold sm:text-3xl">الضمانات</h3>

              <p className="mt-2 text-base leading-8 text-gray-700 sm:text-lg">
                زود فترة الضمان لحماية أطول وراحة بال.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
            {/* BOXI */}
            <div className="mb-8">
              <div className="mb-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <span className="font-bold">مدعوم بواسطة</span>

                <a
                  href="https://green-be-assets.btech.com/static/BOXI's+terms+and+conditions.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-10 w-auto object-contain"
                    src="https://btech.com/_next/static/media/boxi-logo.03bge6_t8.jhw.png"
                    alt="BOXI"
                  />
                </a>
              </div>

              <p className="text-center leading-8 text-gray-700">
                حماية إضافية للأجهزة مع خطط ضمان BOXI المتوفرة من TechNest.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">الضمان الأساسي</h4>

                <p className="leading-8 text-gray-700">
                  أحيانًا بيكون العطل بسبب عيب في التصنيع، وليس بسبب الاستخدام.
                  استفيد من ضمان يغطي عيوب التصنيع للمنتجات المشمولة بالضمانات
                  الدولية.
                </p>
              </div>

              {/* الضمان الممتد */}
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">الضمان الممتد</h4>

                <p className="leading-8 text-gray-700">
                  لما ينتهي الضمان الأساسي، راحة بالك مش هنتهي معاه. احصل على
                  حماية إضافية تصل إلى 4 سنوات، وخليك مطمن على جهازك لفترة أطول.
                </p>
              </div>

              {/* الحماية ضد الحوادث */}
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">الحماية ضد الحوادث</h4>

                <p className="leading-8 text-gray-700">
                  الحوادث واردة، سواء كانت سقوط مفاجئ أو أي موقف غير متوقع. احصل
                  على حماية ضد الأضرار الداخلية والخارجية الناتجة عن الحوادث
                  وحافظ على أجهزتك بأمان.
                </p>
              </div>

              {/* حماية كسر الشاشة */}
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">حماية كسر الشاشة</h4>

                <p className="leading-8 text-gray-700">
                  كسر الشاشة من أكثر الأعطال المتكررة. احمي جهازك مع ضمان يغطي
                  تصليح أو استبدال الشاشة للأجهزة المؤهلة، وخليك دايمًا مطمن على
                  أجهزتك.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-white p-5 text-center">
              <p className="mb-4 text-sm leading-7 text-gray-600 sm:text-base">
                اطلع على شروط وأحكام الحماية من Boxi لمزيد من التفاصيل، والتغطية
                المحددة، والاستثناءات.
              </p>

              <a
                href="https://green-be-assets.btech.com/static/BOXI's+terms+and+conditions.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg bg-black px-6 py-3 font-bold text-white transition hover:bg-gray-800"
              >
                اطلع على الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== خدمة التخزين ==================== */}
      <section className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">خدمة التخزين</h2>

        <div className="overflow-hidden rounded-xl bg-[#F5F2F0]">
          <div className="flex items-center   gap-3 px-4 py-6 sm:px-6">
            <img
              className="h-30 w-30 object-contain"
              src="https://btech.com/_next/static/media/secure-storage-icon.0l_exy-8-lll9.webp"
              alt="خدمة التخزين"
            />

            <div className="">
              <h3 className="text-2xl font-bold">خدمة التخزين</h3>

              <p className="mt-2 text-lg text-gray-700">
                لقيت العرض المناسب، لكن مش مستعد للاستلام؟
              </p>
            </div>
          </div>

          <div className="space-y-4 px-4 pb-7 text-sm leading-8 text-gray-700 sm:px-6 sm:text-base">
            <p>
              اشتري دلوقتي، وإحنا هنحتفظ بأجهزتك بأمان لحد ما تكون مستعد
              للاستلام.
            </p>

            <p>
              خزن أجهزتك في مخازننا لمدة تصل إلى 4 شهور، وحدد ميعاد التوصيل في
              الوقت المناسب لك.
            </p>

            <p>
              لو احتجت فترة أطول، تقدر تمد مدة التخزين حتى الحد الأقصى المسموح
              به للخدمة.
            </p>

            <p>خدمة التوصيل متاحة مقابل رسوم إضافية مع الحجز المسبق.</p>
          </div>
        </div>
      </section>

      {/* ==================== Contact ==================== */}
      <section className="bg-black px-4 py-10 mx-6 rounded-2xl text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            {" "}
            احصل على خدمة تك كير في أي وقت ومن أي مكان.
          </h2>

          <div>
            {/* box  */}
            <div className=" flex-col md:flex-row justify-between mt-10 flex items-center gap-6">
              <div className=" flex-col flex items-center gap-2">
                <span className=" bg-white h-6 text-xl w-6 flex justify-center items-center text-black rounded-full">
                  <IoHelpOutline />
                </span>
                <div>
                  <h2>مركز المساعدة</h2>
                  <p>help.TechNest.com</p>
                </div>
              </div>
              <div className=" flex-col flex items-center gap-3">
                <span className=" bg-white h-6 text-xl w-6 flex justify-center items-center text-black rounded-full">
                  <MdOutlineMail />
                </span>
                <div>
                  <h2>الدعم عبر البريد الإلكتروني</h2>
                  <p>egypt@TechNest.com</p>
                </div>
              </div>
              <div className=" flex-col flex items-center gap-3">
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
        </div>
      </section>
    </div>
  );
}
