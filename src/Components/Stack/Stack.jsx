import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import radioImgs from './Images/Imgarray';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Stack.css';

import { FreeMode, Navigation, Thumbs } from 'swiper';

const Stack = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div id='Stack'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {radioImgs.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <video id='background-video' autoPlay loop muted>
                <source
                  src='https://video.wixstatic.com/video/11062b_c18db2b1461b46f2ad31bae61009fee1/1080p/mp4/file.mp4'
                  type='video/mp4'
                />
              </video>
              <div className='linktestimonialslide'>
                {/* <div className='linktestimonial'>
                  <img src={img.pic} alt=''></img>
                </div> */}
                <div className='linktestimonialText'>
                  <h2>{img.name}</h2>
                  <h3>{img.desclink}</h3>
                </div>
              </div>

              {/* <img src={img} alt=""></img> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {radioImgs.map((img, i) => {
          return (
            <SwiperSlide key={i}>
                <video id='background-video' autoPlay loop muted>
                  <source
                    src='https://video.wixstatic.com/video/11062b_c18db2b1461b46f2ad31bae61009fee1/1080p/mp4/file.mp4'
                    type='video/mp4'
                  />
                </video>
                <img src={img.pic} style={{borderRadius: '50%', zIndex: '30'}} alt=''></img>

                {/* <img src={img} alt=""></img> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Stack;
