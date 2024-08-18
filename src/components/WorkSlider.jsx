import React from "react";
import "../css/workSlider.css";
import brand1 from "../assets/work1.png";
import brand2 from "../assets/work2.png";
import brand3 from "../assets/work3.png";
import brand4 from "../assets/work4.png";

const WorkSlider = () => {
  const brandImages = [brand1, brand2, brand3, brand4];

  const renderImageSet = () => {
    return brandImages.map((src, index) => (
      <div key={index} className="work">
        <img src={src} alt={`Brand ${index + 1}`} />
      </div>
    ));
  };

  return (
    <div className="worker">
      <div className="work-track">
        {/* repeat twice */}
        {renderImageSet()}
        {renderImageSet()}
      </div>
    </div>
  );
};

export default WorkSlider;