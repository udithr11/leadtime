import React from "react";
import "../../css/TextAnimation.css";

const TextAnimation = ({ firstText, secondText }) => {
  const wrapTextInSpans = (text) => {
    return text.split("").map((char, index) => <span key={index}>{char}</span>);
  };

  return (
    <div className="text-wrapper">
      <div className="text first">{wrapTextInSpans(firstText)}</div>
      <div className="text second">{wrapTextInSpans(secondText)}</div>
    </div>
  );
};

export default TextAnimation;
