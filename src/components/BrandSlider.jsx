import React from "react";
import "../css/brandSlider.css";
import brands from "../constants/brands";

const BrandSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...brands, ...brands].map((brand, index) => (
          <div className="slide" key={`${brand.id}-${index}`}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;