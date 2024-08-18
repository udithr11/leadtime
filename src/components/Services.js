import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, FreeMode } from 'swiper/modules';


import brandCampaignImage from '../assets/s1.png';
import inStoreBrandingImage from '../assets/s2.png';
import awardsImage from '../assets/s3.png';
import arrow from '../assets/up_arrow.svg';

const Services = () => {
  const services = [
    {
      title: 'Brand Campaigns',
      image: brandCampaignImage,
      description: 'At Lead Time, we are a y was founded with the vision of revolutionizing the advertising catching displays.'
    },
    {
      title: 'In-Store Branding',
      image: inStoreBrandingImage,
      description: 'At Lead Time, we are a y was founded with the vision of revolutionizing the advertising catching displays.'
    },
    {
      title: 'Awards and Trophies',
      image: awardsImage,
      description: 'At Lead Time, we are a y was founded with the vision of revolutionizing the advertising catching displays.'
    },
    {
        title: 'Brand Campaigns',
        image: brandCampaignImage,
        description: 'At Lead Time, we are a y was founded with the vision of revolutionizing the advertising catching displays.'
      },
      {
        title: 'In-Store Branding',
        image: inStoreBrandingImage,
        description: 'At Lead Time, we are a y was founded with the vision of revolutionizing the advertising catching displays.'
      },
      {
        title: 'Awards and Trophies',
        image: awardsImage,
        description: 'At Lead Time, we are a y was founded with the vision of revolutionizing the advertising catching displays.'
      },  
  ];

  

  return (
<div className='pl-4 md:pl-[6rem] lg:pl-[9rem] pt-16 md:pt-24 lg:pt-24 pb-16 md:pb-20 lg:pb-24 '>
<p className='text-center text-[#333333] font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]'>
        SERVICES
      </p>
      <h1 className='text-center text-[#333333] font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16'>
        Top Quality Solutions
      </h1>
      
      <Swiper
  modules={[Mousewheel, FreeMode]}
  spaceBetween={25}
        mousewheel={{
            releaseOnEdges: true,
          }}
          freeMode={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full  object-cover" />
              <div className="p-6 bg-[#222220] text-white ">
                <h3 className="text-[1.5rem] leading-[32px] tracking-[1px] font-[500] mb-2">{service.title}</h3>
                <p className="text-[#FFFFFFCC] text-[1.125rem] leading-[26px] tracking-[1px] mb-4">{service.description}</p>
                <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <img src={arrow} alt="" className='max-w-full'/>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;