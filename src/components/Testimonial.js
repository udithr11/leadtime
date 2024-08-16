import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { Box, Typography, Avatar } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Annette Black",
    company: "Louis Vuitton",
    avatar: "../assets/test-1.svg"
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Savannah Nguyen",
    company: "Louis Vuitton",
    avatar: "../assets/test-2.svg"
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Brooklyn Simmons",
    company: "Louis Vuitton",
    avatar: "../assets/test-3.svg"
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Annette Black",
    company: "Louis Vuitton",
    avatar: "../assets/test-1.svg"
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Savannah Nguyen",
    company: "Louis Vuitton",
    avatar: "../assets/test-2.svg"
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Brooklyn Simmons",
    company: "Louis Vuitton",
    avatar: "../assets/test-3.svg"
  },
];

const TestimonialCarousel = () => {
    const swiperRef = useRef(null);
  
    useEffect(() => {
      const handleWheel = (e) => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const swiper = swiperRef.current.swiper;
          const { isBeginning, isEnd } = swiper;
  
          if (e.deltaY > 0 && isEnd) {
            
            return;
          } else if (e.deltaY < 0 && isBeginning) {
            
            return;
          }
  
          
          e.preventDefault();
          if (e.deltaY > 0) {
            swiper.slideNext();
          } else {
            swiper.slidePrev();
          }
        }
      };
  
      const swiperElement = swiperRef.current;
      if (swiperElement) {
        swiperElement.addEventListener('wheel', handleWheel, { passive: false });
      }
  
      return () => {
        if (swiperElement) {
          swiperElement.removeEventListener('wheel', handleWheel);
        }
      };
    }, []);
  return (
    <Swiper
    ref={swiperRef}
    slidesPerView={3}
    spaceBetween={30}
    navigation={true}
    mousewheel={{
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    }}
    modules={[Navigation, Mousewheel]}
    className="mySwiper"
  >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
              "{testimonial.quote}"
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={testimonial.avatar} sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle2">{testimonial.name}</Typography>
                <Typography variant="caption">{testimonial.company}</Typography>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;