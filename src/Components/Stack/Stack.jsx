import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import radioImgs from "./Images/Imgarray";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Stack.css";

import { FreeMode, Navigation, Thumbs } from "swiper";

const Stack = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >{radioImgs.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={img} alt=""></img>
          </SwiperSlide>
        )
      })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {radioImgs.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={img} alt=""></img>
          </SwiperSlide>
        )
      })}
      </Swiper>
    </>
  );
}

export default Stack;
