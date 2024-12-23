import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import mbBanner from "./../../assets/images/mobile-banner-1.png";
const MobileBanner = () => {
    return (
      <div className="mobile-banners">
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
            <div className="row">
              <div className="col-xl-8 px-0">
                <div className="banner-container">
                  <div className="row">
                    <div className="col-8">
                      <h2 className="banner-title">
                        Sign Up today and claim your FREE box
                      </h2>
                      <p className="para">
                        Unlock YOUR Free Box Today! Each box is a treasure trove
                        of excitement waiting to be discovered. Don't miss out –
                        dive into the unknown with us!
                      </p>
                      <button className="gradient-btn mt-3 ">Claim now</button>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default MobileBanner;
