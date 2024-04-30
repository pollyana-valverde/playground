import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import print1 from '../imagens/printSite1.png';
import print2 from '../imagens/printSite2.png';
import print3 from '../imagens/printSite3.png';
import print4 from '../imagens/printSite4.png';
import print5 from '../imagens/printSite5.png';
import print6 from '../imagens/printSite6.png';
import print7 from '../imagens/printSite7.png';
import print8 from '../imagens/printSite2.png';
import print9 from '../imagens/printSite1.png';
import print10 from '../imagens/printSite10.png';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../css/layout/carousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={print5} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print6} className="logo" alt='' />
        </SwiperSlide >
        <SwiperSlide slot="container-start">
          <img src={print7} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print4} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print1} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print2} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print3} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print8} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print9} className="logo" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={print10} className="logo" alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
