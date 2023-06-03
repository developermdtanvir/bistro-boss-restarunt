import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';


// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={slide1} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide2} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide3} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide4} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide5} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide1} alt="" /> </SwiperSlide>
            </Swiper>
        </>
    );
}
