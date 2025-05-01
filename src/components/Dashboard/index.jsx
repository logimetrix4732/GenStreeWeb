import React from "react";
import slide01 from "../../assets/images/slide01.jpg";
import slide02 from "../../assets/images/slide02.jpg";
import video01 from "../../assets/videos/video01.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Dashboard = () => {
  return (
    <header className="slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper-container gallery-top"
        onSlideChange={(swiper) => {
          // Update preview titles
          const nextSlideIndex =
            swiper.realIndex === 2 ? 0 : swiper.realIndex + 1;
          const prevSlideIndex =
            swiper.realIndex === 0 ? 2 : swiper.realIndex - 1;

          const titles = ["DISCOVER", "EXCLUSION", "EDITORIAL"];

          document.querySelector(".slide-preview-next").textContent =
            titles[nextSlideIndex];
          document.querySelector(".slide-preview-prev").textContent =
            titles[prevSlideIndex];
        }}
      >
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url(${slide01})`,
            }}
          >
            <div className="slide-content">
              <span className="title">DISCOVER</span>
              <h2 className="subtitle">DISCOVER CASE</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <video src={video01} muted autoPlay loop />
            <div className="slide-content">
              <span className="title">EXCLUSION</span>
              <h2 className="subtitle">DISCOVER CASE</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${slide02})` }}
          >
            <div className="slide-content">
              <span className="title">EDITORIAL</span>
              <h2 className="subtitle">DISCOVER CASE</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Preview elements for next/prev slide titles */}
      <div className="slide-preview-prev">EDITORIAL</div>
      <div className="slide-preview-next">EXCLUSION</div>

      <div className="slide-progress">
        <span>01</span>
        <div className="swiper-pagination" />
        <span>03</span>
      </div>
      <div className="swiper-button-prev">PREV</div>
      <div className="swiper-button-next">NEXT</div>
    </header>
  );
};

export default Dashboard;
