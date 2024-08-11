import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import image1 from "../assets/s1.png";
import arrow from "../assets/s-icon.svg";

// Import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const Services = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[9rem] pt-16 md:pt-24 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      <p className="text-center text-[#333333] font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]">
        SERVICES
      </p>
      <h1 className="text-center text-[#333333] font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16">
        Top Quality Solutions
      </h1>

      <Swiper
        spaceBetween={10} // Gap between slides
        slidesPerView={3} // Number of slides visible at once
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-gray-100 rounded-[1rem] overflow-hidden">
            <img src={image1} alt="Brand Campaigns" className="max-w-full" />
            <div className="p-8 bg-[#222220]">
              <h3 className="text-white text-xl leading-[2rem] tracking-[1px] pb-4">
                Brand Campaigns
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] text-[1.125rem] leading-[1.625rem] tracking-[0.4px]">
                At Lead Time, we are a y was founded with the vision of
                revolutionizing the advertising catching displays.
              </p>
              <div className="w-[2.5rem] h-[2.5rem] flex justify-center bg-[rgba(255,255,255,0.05)] mt-4 rounded-full">
                <img src={arrow} alt="up-arrow" className="max-w-full w-6" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components for additional slides */}
      </Swiper>
    </div>
  );
};

export default Services;
