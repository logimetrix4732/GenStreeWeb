import video01 from "../../assets/videos/video01.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dashboard from "../../assets/images/dashboard.png";
import dashboard1 from "../../assets/images/dashboard1.png";
import dashboard2 from "../../assets/images/dashboard2.png";
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
        className="swiper-container"
        onSlideChange={(swiper) => {
          // Update preview titles
          const nextSlideIndex =
            swiper.realIndex === 2 ? 0 : swiper.realIndex + 1;
          const prevSlideIndex =
            swiper.realIndex === 0 ? 2 : swiper.realIndex - 1;

          const titles = ["Thinking", "Building", "Empowering"];

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
              backgroundImage: `url(${dashboard})`,
            }}
          >
            <div className="slide-content">
              <span
                className="title"
                style={{
                  background:
                    "linear-gradient(to left, rgb(209 99 153), rgb(70 152 198))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Thinking
              </span>
              <h2
                className="subtitle"
                style={{
                  background:
                    "linear-gradient(to left, rgb(209 99 153), rgb(70 152 198))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Innovative tech minds drive better scalable solutions
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${dashboard1})` }}
          >
            <div className="slide-content">
              <span
                className="title"
                style={{
                  background: "linear-gradient(to right, #e14848, #f3b340)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Building
              </span>
              <h2
                className="subtitle"
                style={{
                  background: "linear-gradient(to right, #e14848, #f3b340)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Creating impactful systems with vision and purpose
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${dashboard2})` }}
          >
            <div className="slide-content">
              <span
                className="title"
                style={{
                  background:
                    "linear-gradient(to left, rgb(156, 118, 216), rgb(98, 187, 136))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Empowering
              </span>
              <h2
                className="subtitle"
                style={{
                  background:
                    "linear-gradient(to left, rgb(156, 118, 216), rgb(98, 187, 136))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Enabling growth through smart technology
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Preview elements for next/prev slide titles */}
      <div className="slide-preview-prev" style={{ color: "#fff" }}>
        Thinking
      </div>
      <div className="slide-preview-next" style={{ color: "#fff" }}>
        Empowering
      </div>

      <div className="swiper-button-prev">PREV</div>
      <div className="swiper-button-next">NEXT</div>
    </header>
  );
};

export default Dashboard;
