// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

type Props = {
  imges: string[];
};

export default function SlideImgesProduct({ imges }: Props) {
  const swiperRef = useRef<any>(null);
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();
        }}
        onMouseEnter={() => {
          swiperRef.current.autoplay.start();
        }}
        onMouseLeave={() => {
          swiperRef.current.autoplay.stop();
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="product-shipe"
      >
        {imges.map((img, ind) => {
          return (
            <SwiperSlide key={ind}>
              <img className="h-60 rounded-t-xl    w-full " src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
