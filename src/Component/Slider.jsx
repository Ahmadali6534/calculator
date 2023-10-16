import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img from 'file:///C:/Users/ahmad/OneDrive/Desktop/React/first/public/images/Capture.JPG'
import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img id='image' src={img}/></SwiperSlide>
        <SwiperSlide><img id='image' src={img}/></SwiperSlide>
        <SwiperSlide><img id='image' src={img}/></SwiperSlide>
        <SwiperSlide><img id='image' src={img}/></SwiperSlide>
      </Swiper>
    </>
  );
}
