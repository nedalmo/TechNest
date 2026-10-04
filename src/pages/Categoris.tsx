import Categorye from "../components/ecommerce/category/Categorye";
import GridList from "../components/common/GridList/GridList";
import useCategorys from "../hooks/useCategorys";
import Loading from "../components/feedback/loading/Loading";
import { useTranslation } from "react-i18next";
export default function Categoris() {
  const { t } = useTranslation();

  const { recods, loading, error, language } = useCategorys();
  return (
    <div>
      <div
        dir={`${language === "ar" ? "rtl" : "ltr"}`}
        className="px-3 md:px-6"
      >
        <div className=" my-8 text-2xl  md:text-3xl font-extrabold">
          <h2> {t("Browse Categories")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
          <Loading loading={loading} error={error} types="category">
            <GridList
              recods={recods}
              gridItemList={(item) => <Categorye {...item} />}
            />
          </Loading>
        </div>
      </div>
    </div>
  );
}
