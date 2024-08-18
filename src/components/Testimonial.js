import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Box, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import photo1 from '../assets/test-1.svg';
import photo2 from '../assets/test-2.svg';
import photo3 from '../assets/test-3.svg';


const testimonials = [
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Annette Black",
    company: "Louis Vuitton",
    avatar: photo1
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Savannah Nguyen",
    company: "Louis Vuitton",
    avatar: photo2
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Brooklyn Simmons",
    company: "Louis Vuitton",
    avatar: photo3
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Annette Black",
    company: "Louis Vuitton",
    avatar: photo1
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Savannah Nguyen",
    company: "Louis Vuitton",
    avatar: photo2
  },
  {
    quote: "Businesses need qualified business consulting and professional advice to win clients from all over the world. Since our inception, we have been dedicated to assisting organizations of all sizes with strategies that contribute to businesses with great performance and success",
    name: "Brooklyn Simmons",
    company: "Louis Vuitton",
    avatar: photo3
  },
];
const TestimonialCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <div className='px-4 md:px-[6rem] lg:px-[9rem] pt-16 md:pt-24 lg:pt-24 pb-16 md:pb-20 lg:pb-24 choose_main'>
      <p className='text-center text-[#333333] font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]'>
        TESTIMONIAL
      </p>
      <h1 className='text-center text-[#333333] font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16'>
        Client Voices of Satisfaction
      </h1>
      <Box sx={{ position: 'relative', paddingBottom: '60px' }}>
        <Swiper
          slidesPerView={isMobile ? 1 : (isTablet ? 2 : 3)}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={isMobile ? { clickable: true } : false}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  padding: '2rem 1.5rem',
                  bgcolor: '#F6F6F6',
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#333333',
                }}
              >
                <Typography variant="body2" sx={{ mb: 2, flexGrow: 1, fontWeight: 400, fontSize: { xs: '16px', md: '18px' }, lineHeight: { xs: '24px', md: '26px' } }}>
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={testimonial.avatar} sx={{ mr: 1, width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: { xs: '14px', md: '16px' } }}>{testimonial.name}</Typography>
                    <Typography variant="caption" sx={{ fontSize: { xs: '12px', md: '14px' } }}>{testimonial.company}</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 2,
    }}
  >
    <Box
      className="swiper-button-next" 
      sx={{
        width: { sm: 28, md: 30 },
        height: { sm: 26, md: 28 },
        borderRadius: '50%',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #222220',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#222220', 
          '& svg': {
            color: 'white', 
          },
        },
        '&::after': { display: 'none' },
      }}
    >
      <KeyboardArrowLeftIcon sx={{ color: '#222220', fontSize: { sm: '16px', md: '18px' } }} />
    </Box>
    <Box
      className="swiper-button-prev" 
      sx={{
        width: { sm: 28, md: 30 },
        height: { sm: 26, md: 28 },
        borderRadius: '50%',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #222220',
        cursor: 'pointer',
        '&::after': { display: 'none' },
        '&:hover': {
          backgroundColor: '#222220', 
          '& svg': {
            color: 'white', 
          },
        },
      }}
    >
      <KeyboardArrowRightIcon sx={{ color: '#222220', fontSize: { sm: '16px', md: '18px' } }} />
    </Box>
  </Box>
)}
        
      </Box>
    </div>
  );
};

export default TestimonialCarousel;