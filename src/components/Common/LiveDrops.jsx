import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
// import bgone from "./../../assets/images/green-frame.png";
import greenFrame from './../../assets/images/green-frame.png';
import pinkFrame from './../../assets/images/pink-frame.png';
import blueFrame from './../../assets/images/blue-frame.png';
import greyFrame from './../../assets/images/grey-frame.png';
import xbox from './../../assets/images/xbox.png';
import gogles from './../../assets/images/gogles.png';
import pot from './../../assets/images/pot.png';
import UC from './../../assets/images/hd-uc.png';
import shoes from './../../assets/images/shoes.png';
import toys from "./../../assets/images/toys.png";
import greed from "./../../assets/images/greed.png";
import './CommonComponentCSS/common.css'
const LiveDrops = () => {
    const sliderContent = [
      {
        bgImg: greenFrame,
        productImg: xbox,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: pinkFrame,
        productImg: UC,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: blueFrame,
        productImg: pot,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: greyFrame,
        productImg: gogles,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: pinkFrame,
        productImg: shoes,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: blueFrame,
        productImg: toys,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: greyFrame,
        productImg: UC,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: greyFrame,
        productImg: UC,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      },
      {
        bgImg: greyFrame,
        productImg: UC,
        price: "$10.",
        price_0: "00",
        greedy: greed,
        ms: "MsGreedy",
      }
    ];
    // console.log(liveDrops)
    return (
      <div className="live-drops">
        {/* <img src={sliderContent.bgone} alt="" /> */}
        <div className="d-flex align-items-center live-gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.2" cx="8" cy="8" r="8" fill="#B1FF62" />
            <circle cx="8" cy="8" r="3" fill="#B1FF62" />
          </svg>
          <p className="my-0">Live drops</p>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={8.4}
          className="cat-slide"
          breakpoints={{
            // When the viewport width is >= 320px (small screens like mobile)
            320: {
              slidesPerView: 2, // 2 slides per view
              spaceBetween: 5, // 5px space between slides
            },
            // When the viewport width is >= 480px (mobile devices)
            480: {
              slidesPerView: 3, // 3 slides per view
              spaceBetween: 10, // 10px space between slides
            },
            // When the viewport width is >= 768px (tablets)
            768: {
              slidesPerView: 4, // 4 slides per view
              spaceBetween: 15, // 15px space between slides
            },
            // When the viewport width is >= 1024px (laptops/desktops)
            1024: {
              slidesPerView: 6, // 6 slides per view
              spaceBetween: 20, // 20px space between slides
            },
            // When the viewport width is >= 1440px (large screens)
            1440: {
              slidesPerView: 8.4, // 8.4 slides per view (your original config)
              spaceBetween: 30, // 30px space between slides
            },
          }}
        >
          {sliderContent.length > 0 ? (
            sliderContent.map((item, i) => (
              <SwiperSlide
                className="category-slides"
                key={i}
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `100% 100%`,
                }}
              >
                <div className="sliderCards d-flex align-items-center jusitify-content-center gap-6">
                  <img src={item.productImg} alt="" />
                  <div>
                    <h3 className="price-heading">
                      <span className="price">{item.price}</span>
                      <span className="price-point">{item.price_0}</span>
                    </h3>
                    <div className="d-flex align-items-center greed-container">
                      <img src={item.greedy} alt="" />
                      <p className="my-0">{item.ms}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="not-found">Items Not Found</p>
          )}
        </Swiper>
      </div>
    );
}

export default LiveDrops;
