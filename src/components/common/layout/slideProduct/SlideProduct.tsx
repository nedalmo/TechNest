import Product from "../../../ecommerce/product/Product";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import "../../../../styles/slideProduct.css";
import type { ProductType } from "../../../../types/product";
import useDataInfoProduct from "../../../../hooks/useDataInfoProduct";
import { useAppSelecor } from "../../../../store/Hooks";
import Loading from "../../../feedback/loading/Loading";
export default function SlideProduct({
  dataShowMap,
  title,
}: {
  dataShowMap: ProductType[];
  title: string;
}) {
  const { loading, error } = useAppSelecor(
    (state) => state.sliceGetCategoryProduct,
  );

  const { t } = useTranslation();
  const products = useDataInfoProduct({ products: dataShowMap });
  return (
    <Loading loading={loading} error={error} types="sliderProductSkeleton">
      <div className=" px-3 md:px-5 mt-15 w-full  ">
        <div className=" my-7">
          <h2 className=" font-bold md:font-extrabold text-2xl  md:text-4xl">
            {title}{" "}
          </h2>
          <p>{t("Discover Your Favorite Products")}</p>
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          // spaceBetween={4}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="slideProductHomeItems"
        >
          {products?.map((el: ProductType) => {
            return <SwiperSlide> {<Product {...el} />}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </Loading>
  );
}
