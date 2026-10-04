import { useEffect } from "react";
import SlideProduct from "../components/common/layout/slideProduct/SlideProduct";
import SlideHome from "../components/ecommerce/home/SlideHome";
import TechCarButtom from "../components/ecommerce/tech-care/TechCarButtom";
import thunkGetCategoryeProduct from "../store/categoryeProduct/thunkGetCategoryProduct";
import Categoris from "./Categoris";
import { useAppDispatch, useAppSelecor } from "../store/Hooks";
import SlideMarca from "../components/common/layout/slideMarca/SlideMarca";
import { unMountData } from "../store/categoryeProduct/sliceGetCategoryProduct";
import { useTranslation } from "react-i18next";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkGetCategoryeProduct("latest"));
    dispatch(thunkGetCategoryeProduct("bestSelling"));
    dispatch(thunkGetCategoryeProduct("offerYouLike"));
    return () => {
      dispatch(unMountData());
    };
  }, [dispatch]);
  const { t } = useTranslation();

  const { bestSelling, latest, offerYouLike } = useAppSelecor(
    (state) => state.sliceGetCategoryProduct,
  );

  return (
    <div>
      <div>
        <div>
          <SlideHome />
        </div>
        <div>
          <SlideProduct
            dataShowMap={offerYouLike}
            title={t("offers You Love")}
          />
        </div>

        <div>
          <TechCarButtom />
        </div>

        <Categoris />
      </div>
      <div>
        <SlideProduct dataShowMap={bestSelling} title={t("Best Selling")} />
      </div>
      <div>
        <SlideMarca />
      </div>
      <div>
        <SlideProduct dataShowMap={latest} title={t("Latest Products")} />
      </div>
    </div>
  );
}
