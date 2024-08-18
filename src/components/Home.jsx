import React from "react";
import HomeImage from "../assets/Home-bg.png";
import HomeImage1 from "../assets/Home-1.png";
import { Button } from "./ui/MovingBorder";

const Home = () => {
  return (
    <div
      className="bg-no-repeat bg-cover min-h-screen  items-center"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="px-4 md:px-8 lg:px-[8rem] pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
          <div className="w-full lg:w-[47%] p-4 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-[4rem] font-medium text-white tracking-wide md:tracking-[0.5px] lg:tracking-[0.6px] pb-2 md:pb-3 lg:pb-[0.5rem] mb-0 leading-tight md:leading-[3rem] lg:leading-[4.75rem]">
              Industry Leading Advertising and Production
            </h1>
            <p className="text-base md:text-lg lg:text-[1.125rem] mb-0 text-[#FFFFFFCC] py-2 md:py-3 lg:py-[0.75rem] pb-4 md:pb-6 lg:pb-[1.5rem] tracking-wide md:tracking-[0.5px] lg:tracking-[0.7px] leading-relaxed md:leading-[1.5rem] lg:leading-[1.625rem] pr-0 md:pr-2 lg:pr-[4rem]">
              Businesses need qualified business consulting and professional
              advice to win clients from all over the world. Since our
              inception, we have been dedicated to assisting.
            </p>

            <Button
              borderRadius="2.75rem"
              className="text-base md:text-lg lg:text-[1.125rem] text-white border border-white-100 rounded-full py-2 md:py-3 lg:py-[0.9rem] px-4 md:px-6 lg:px-[1.75rem] leading-tight md:leading-[1.5rem] lg:leading-[1.625rem] tracking-wide md:tracking-[0.5px] lg:tracking-[1px] whitespace-nowrap"
            >
              Our Services
            </Button>
          </div>
          <div className="w-full lg:w-[47%] p-4 flex justify-center">
            <img src={HomeImage1} alt="Home" className="max-w-[96%] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
