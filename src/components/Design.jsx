import React from "react";
import design_img from "../assets/design.png";
import "../css/design.css";

const Design = () => {
  return (
    <div className="px-4 md:px-[6rem] lg:px-[9rem] pt-16 md:pt-24 lg:pt-24 pb-16 md:pb-20 lg:pb-24 text-[#222220] design text-[3.5rem] md:text-[5.5rem] lg:text[10.5rem]  font-[400] leading-[5.5rem] md:leading-[8rem] lg:leading:[11.5rem] tracking-[1]">
      <div>WE DESIGN</div>
      <div className="block items-center md:flex">
        <div>SPACE</div>
        <img
          src={design_img}
          className="h-auto w-auto max-w-full  md:ml-8"
          alt="design_image"
        />
      </div>
      <div>PEOPLE LOVE</div>
    </div>
  );
};

export default Design;
