import { useState } from "react";
import { carouselInfo } from "../utils/data";
import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = swiper => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <Wrapper>
      <div className='my-20'>
        <Swiper
          parallax={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          effect='fade'
          modules={[Autoplay, Pagination]}
          onSlideChange={swiper => handleSlideChange(swiper)}
        >
          {carouselInfo.map((details, index) => (
            <SwiperSlide key={details.id}>
              <div
                className={` flex cursor-pointer items-center ${
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse "
                }`}
              >
                <img
                  src={details.img}
                  alt={details.title}
                  className='mx-auto w-[70%]  rounded-lg lg:w-[50%]'
                />
                <div className={`space-y-5 text-center ${index % 2 === 0 ? "pt-6" : "pb-6"} `}>
                  <h4 className='text-3xl font-semibold'>{details.title}</h4>
                  <p className='mx-auto w-[70%] text-zinc-700 lg:w-[50%]'>{details.body}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Carousel;
