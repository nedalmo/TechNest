import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelecor } from "../../../store/Hooks";
import { thunk } from "../../../store/categorys/Slicecategorys";
import { useTranslation } from "react-i18next";
export default function LinksAndImges() {
  const { t } = useTranslation();

  const { recods } = useAppSelecor((state) => state.sliceCategorys);
  const dispatch = useAppDispatch();
  const { namecategotye } = useParams();
  useEffect(() => {
    dispatch(thunk());
  }, [namecategotye, dispatch]);

  const categoryFind = recods.find((item) => item.prefix === namecategotye);
  const language = useAppSelecor((state) => state.sliceLanguage.language);

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className=" flex items-center gap-1 my-10 ">
        <Link className=" text-zinc-600" to="/">
          {t("Home")}
        </Link>
        <div>/</div>
        <div className=" font-bold">{t(`${categoryFind?.title}`)}</div>
      </div>
      <div className="  block ">
        <img
          className=" w-full h-50 md:h-100  rounded-sm lg:rounded-3xl"
          src={categoryFind?.cover}
          alt=""
        />
      </div>
    </div>
  );
}
