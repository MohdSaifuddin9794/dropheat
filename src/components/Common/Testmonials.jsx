import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import player1 from "./../../assets/images/pl-1.png";
import ps from "./../../assets/images/ps-5.png"
import Star from '../../assets/icons/Star';
const Testmonials = () => {
    return (
      <div className="testmonials">
        <Swiper
          spaceBetween={10}
          slidesPerView={8.4}
          className="testmonials-swiper"
          breakpoints={{
            // When the viewport width is >= 320px (small screens like mobile)
            320: {
              slidesPerView: 1, // 2 slides per view
              spaceBetween: 2, // 5px space between slides
            },
            // When the viewport width is >= 480px (mobile devices)
            480: {
              slidesPerView: 2, // 3 slides per view
              spaceBetween: 10, // 10px space between slides
            },
            // When the viewport width is >= 768px (tablets)
            768: {
              slidesPerView: 3, // 4 slides per view
              spaceBetween: 15, // 15px space between slides
            },
            // When the viewport width is >= 1024px (laptops/desktops)
            1024: {
              slidesPerView: 3, // 6 slides per view
              spaceBetween: 20, // 20px space between slides
            },
            // When the viewport width is >= 1440px (large screens)
            1440: {
              slidesPerView: 4, // 8.4 slides per view (your original config)
              spaceBetween: 20, // 30px space between slides
            },
          }}
        >
          <SwiperSlide className="testmonial-slides">
            <div className="slide-card">
              <div className="upper-part d-flex aling-items-center">
                <div className="thumbnail">
                  <img src={player1} alt="" />
                </div>
                <div className="w-100">
                  <h3 className="d-flex aling-items-center justify-content-between mb-1">
                    <span className="name">Andr Grown </span>
                    <span className="time">3 hours ago</span>
                  </h3>
                  <p className="email">@users9384</p>
                </div>
              </div>
              <div className="mid-part">
                <h3 className="subject">Best serivce I ever used</h3>
                <p className="para">
                  It finally arrived. TY @HypeDrop Lemme know which case I
                  should open to honor this moment
                </p>
              </div>
              <div className="gallery d-flex align-items-center mb-3">
                <img src={ps} alt="" />
                <img src={ps} alt="" />
                <img src={ps} alt="" />
              </div>
              <div className="star-contanter d-flex align-items-center justify-content-center">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testmonial-slides">
            <div className="slide-card">
              <div className="upper-part d-flex aling-items-center">
                <div className="thumbnail">
                  <img src={player1} alt="" />
                </div>
                <div className="w-100">
                  <h3 className="d-flex aling-items-center justify-content-between mb-1">
                    <span className="name">Andr Grown </span>
                    <span className="time">3 hours ago</span>
                  </h3>
                  <p className="email">@users9384</p>
                </div>
              </div>
              <div className="mid-part">
                <h3 className="subject">Best serivce I ever used</h3>
                <p className="para">
                  It finally arrived. TY @HypeDrop Lemme know which case I
                  should open to honor this moment
                </p>
              </div>
              <div className="gallery d-flex align-items-center mb-3">
                <img src={ps} alt="" />
                <img src={ps} alt="" />
                <img src={ps} alt="" />
              </div>
              <div className="star-contanter d-flex align-items-center justify-content-center">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testmonial-slides">
            <div className="slide-card">
              <div className="upper-part d-flex aling-items-center">
                <div className="thumbnail">
                  <img src={player1} alt="" />
                </div>
                <div className="w-100">
                  <h3 className="d-flex aling-items-center justify-content-between mb-1">
                    <span className="name">Andr Grown </span>
                    <span className="time">3 hours ago</span>
                  </h3>
                  <p className="email">@users9384</p>
                </div>
              </div>
              <div className="mid-part">
                <h3 className="subject">Best serivce I ever used</h3>
                <p className="para">
                  It finally arrived. TY @HypeDrop Lemme know which case I
                  should open to honor this moment
                </p>
              </div>
              <div className="gallery d-flex align-items-center mb-3">
                <img src={ps} alt="" />
                <img src={ps} alt="" />
                <img src={ps} alt="" />
              </div>
              <div className="star-contanter d-flex align-items-center justify-content-center">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testmonial-slides">
            <div className="slide-card">
              <div className="upper-part d-flex aling-items-center">
                <div className="thumbnail">
                  <img src={player1} alt="" />
                </div>
                <div className="w-100">
                  <h3 className="d-flex aling-items-center justify-content-between mb-1">
                    <span className="name">Andr Grown </span>
                    <span className="time">3 hours ago</span>
                  </h3>
                  <p className="email">@users9384</p>
                </div>
              </div>
              <div className="mid-part">
                <h3 className="subject">Best serivce I ever used</h3>
                <p className="para">
                  It finally arrived. TY @HypeDrop Lemme know which case I
                  should open to honor this moment
                </p>
              </div>
              <div className="gallery d-flex align-items-center mb-3">
                <img src={ps} alt="" />
                <img src={ps} alt="" />
                <img src={ps} alt="" />
              </div>
              <div className="star-contanter d-flex align-items-center justify-content-center">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testmonial-slides">
            <div className="slide-card">
              <div className="upper-part d-flex aling-items-center">
                <div className="thumbnail">
                  <img src={player1} alt="" />
                </div>
                <div className="w-100">
                  <h3 className="d-flex aling-items-center justify-content-between mb-1">
                    <span className="name">Andr Grown </span>
                    <span className="time">3 hours ago</span>
                  </h3>
                  <p className="email">@users9384</p>
                </div>
              </div>
              <div className="mid-part">
                <h3 className="subject">Best serivce I ever used</h3>
                <p className="para">
                  It finally arrived. TY @HypeDrop Lemme know which case I
                  should open to honor this moment
                </p>
              </div>
              <div className="gallery d-flex align-items-center mb-3">
                <img src={ps} alt="" />
                <img src={ps} alt="" />
                <img src={ps} alt="" />
              </div>
              <div className="star-contanter d-flex align-items-center justify-content-center">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default Testmonials;
