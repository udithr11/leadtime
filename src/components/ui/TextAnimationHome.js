import React from 'react';
import '../../css/TextAnimationHome.css';

const TextAnimationHome = ({ firstText, secondText }) => {
  const wrapTextInSpans = (text) => {
    return text.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  return (
    <div className="home-wrapper">
      <div className="home first">
        {wrapTextInSpans(firstText)}
      </div>
      <div className="home second">
        {wrapTextInSpans(secondText)}
      </div>
    </div>
  );
};

export default TextAnimationHome;