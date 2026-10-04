// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles/home.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function SlideHome() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="home"
      >
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/3a72866d-a67b-4ccb-99a9-96eebf54d80b/web_adMedia_ar_9b68aa51-7102-4b17-bb58-484dd65f2cbe"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/2f3992e7-39b4-431e-8e2a-2120b3bf9b94/web_adMedia_ar_2c440630-6b60-4ea9-a729-1d2bab4eb014"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/6ece521b-c9a8-4d83-abfa-ef9db10bc295/web_adMedia_ar_f5cde2f7-c73a-49a3-a8c3-bc20b563d190"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/f88a7bca-9ec0-4983-8bb1-f9c1c6e9da28/web_adMedia_ar_e4012386-dde6-415b-8cd3-e67b22eb2cb9"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/c54f79d8-7808-4637-8a89-22ce573e8e42/web_adMedia_ar_f442c758-34ac-4b20-92a9-72a86ff507b2"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/54ab8097-27f8-46f6-804d-869081150027/web_adMedia_ar_619f3639-c668-4afa-bec8-da6a732d4a97"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              className=" h-62.5 md:h-auto"
              src="https://ads-fusion-prod.s3.eu-west-1.amazonaws.com/campaign-manager/f0e81640-d6df-4b0a-ab7a-fccfdc07eb0d/web_adMedia_ar_f142505c-02f6-4849-9edb-a30040e1ee2b"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
