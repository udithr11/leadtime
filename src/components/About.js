import React from "react";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[#F7F7F7]">
      <div className="px-4 lg:px-[8rem] pt-16 lg:pt-32 pb-12 lg:pb-20">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
          <div className="w-full lg:w-[50%] p-4">
            <img src={aboutImage} alt="About" className="max-w-[96%] h-auto" />
          </div>
          <div className="w-full lg:w-[50%] p-4 flex flex-col justify-center text-[#333333]">
            <h1 className="text-2xl md:text-3xl lg:text-[3rem] font-medium tracking-wide md:tracking-[1px] pb-4 lg:pb-[0.5rem] mb-0 leading-tight md:leading-[2.5rem] lg:leading-[3.5rem] pr-0 md:pr-4 lg:pr-[2rem]">
              Offering Industry Leading Advertising
            </h1>
            <p className="text-base md:text-[1.125rem] lg:text-[1.125rem] mb-0 py-2 md:py-3 lg:py-[0.75rem] pb-4 md:pb-6 lg:pb-[1.5rem] tracking-wide md:tracking-[0.5px] lg:tracking-[0.7px] leading-relaxed md:leading-[1.5rem] lg:leading-[1.625rem] pr-0 md:pr-2 lg:pr-[0.4rem]">
              Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success.
            </p>
            <p className="text-base md:text-[1.125rem] lg:text-[1.125rem] mb-0 py-2 md:py-3 lg:py-[0.75rem] pb-4 md:pb-6 lg:pb-[1.5rem] tracking-wide md:tracking-[0.5px] lg:tracking-[0.7px] leading-relaxed md:leading-[1.5rem] lg:leading-[1.625rem] pr-0 md:pr-2 lg:pr-[0.4rem]">
              Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting.
            </p>
            <div className="text-base md:text-[1.125rem] lg:text-[1.125rem] bg-[#333333] text-white border border-white rounded-full py-2 md:py-3 lg:py-[0.9rem] px-4 md:px-6 lg:px-[2.6rem] leading-relaxed md:leading-[1.5rem] lg:leading-[1.625rem] tracking-wide md:tracking-[0.5px] lg:tracking-[1px] w-fit">
              About Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
