import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import "../css/chooseUs.css";

const ChooseUs = () => {
  const features = [
    { icon: icon1, title: "Innovative Designs", boxClass: "box_1 rounded-tl-xl rounded-bl-xl" },
    { icon: icon2, title: "Cutting-edge Strategies", boxClass: "box_2" },
    { icon: icon3, title: "Expert Team", boxClass: "box_3" },
    { icon: icon4, title: "Client-Focused Approach", boxClass: "box_4 rounded-tr-xl rounded-br-xl" },
  ];

  const renderFeature = ({ icon, title, boxClass }, index) => (
    <div key={index} className={`p-6 border border-solid border-[#FFFFFF33] ${boxClass}`}>
      <div className="w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center bg-[#2D2D2B] my-4">
        <img src={icon} alt={`Icon ${index + 1}`} className="w-[1.75rem]" />
      </div>
      <h3 className="text-xl md:text-2xl font-medium pb-4 text-white">
        {title}
      </h3>
      <p className="text-[#FFFFFFCC] text-base md:text-[1.125rem] tracking-[0.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[26px] pb-4">
        At Lead Time, we are dedicated to revolutionizing the advertising
        landscape through cutting-edge BTL strategies and eye-catching
        displays.
      </p>
    </div>
  );

  return (
    <section className="bg-[#222220]">
      <div className="px-4 md:px-[6rem] lg:px-[9rem] py-16 md:py-24 lg:py-24 choose_main">
        <p className="text-center text-white font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]">
          ABOUT US
        </p>
        <h2 className="text-center text-white font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16">
          Why Choose Us
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map(renderFeature)}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;