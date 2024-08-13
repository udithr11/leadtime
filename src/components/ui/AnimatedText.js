import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import '../../css/test.css';

const AnimatedText = ({ text }) => {
  const firstTextRefs = useRef([]);
  const secondTextRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      firstTextRefs.current.forEach((el, index) => {
        gsap.to(el, { y: -20, opacity: 0, duration: 0.3, delay: index * 0.1, onComplete: () => {
          el.style.display = 'none';
        }});
      });

      secondTextRefs.current.forEach((el, index) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 0.3, delay: index * 0.1 + 0.4, onStart: () => {
          el.style.display = 'inline-block';
        }});
      });
    } else {
      firstTextRefs.current.forEach((el, index) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 0.3, delay: index * 0.1 + 0.4, onStart: () => {
          el.style.display = 'inline-block';
        }});
      });

      secondTextRefs.current.forEach((el, index) => {
        gsap.to(el, { y: 20, opacity: 0, duration: 0.3, delay: index * 0.1, onComplete: () => {
          el.style.display = 'none';
        }});
      });
    }
  }, [isHovered]);

  return (
    <div className="text-container">
      <div className="text first-text" onMouseEnter={() => setIsHovered(true)}>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            ref={el => firstTextRefs.current[index] = el}
            className="letter"
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="text second-text" onMouseLeave={() => setIsHovered(false)}>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            ref={el => secondTextRefs.current[index] = el}
            className="letter"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
