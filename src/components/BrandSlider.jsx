import React from "react";
import "../css/brandSlider.css";
import brand1 from "../assets/brand-1.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";
import brand6 from "../assets/brand-6.png";
import brand7 from "../assets/brand-7.png";
import brand8 from "../assets/brand-8.png";

const BrandSlider = () => {
  return (
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src={brand1} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand2} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand3} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand4} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand5} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand6} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand7} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand8} alt="Brands" />
        </div>

        <div class="slide">
          <img src={brand1} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand2} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand3} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand4} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand5} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand6} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand7} alt="Brands" />
        </div>
        <div class="slide">
          <img src={brand8} alt="Brands" />
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
