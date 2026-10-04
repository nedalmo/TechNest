const imges = [
  {
    id: 1,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/14fd95f8-aff6-4ed7-ba38-e97b5c89b407.png?width=2400",
  },
  {
    id: 2,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/6fea5687-0321-4566-ad01-a6be92807afe.png?width=2400",
  },
  {
    id: 3,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/de96d8a8-1b1a-4c91-bfef-c253e546b68b.png?width=2400",
  },
  {
    id: 4,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/1c11368a-0ee8-4e0b-8f5c-87f8affb1bc1.png?width=2400",
  },
  {
    id: 5,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/bf809203-d96b-483c-aac1-4b3213b06b91.png?width=2400",
  },
  {
    id: 6,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/2caa7241-2717-4b5b-bbbe-df73ac5743e8.png?width=2400",
  },
  {
    id: 7,
    img: "https://a.nooncdn.com/mpcms/EN0003/assets/b1f8584f-dc12-4f7b-b147-ae1c91eecf7b.png?width=2400",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function SlideMarca() {
  const { t } = useTranslation();

  return (
    <div className=" px-5 mt-15">
      <div className=" my-4">
        <h2 className=" font-extrabold text-4xl">{t("Top Brands")} </h2>
      </div>
      <Swiper
        slidesPerView={5}
        // spaceBetween={4}
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="brandSlied"
      >
        {imges.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <img className=" w-70 h-35" src={el.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
