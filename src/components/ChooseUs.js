import React from 'react';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

const ChooseUs = () => {
  return (
    <div className='bg-[#222220]'>
      <div className='px-4 md:px-[6rem] lg:px-[9rem] pt-16 md:pt-24 lg:pt-24 pb-16 md:pb-20 lg:pb-24'>
        <p className='text-center text-white font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]'>
          ABOUT US
        </p>
        <h1 className='text-center text-white font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16'>
          Why Choose Us
        </h1>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <div className="p-6 border border-solid border-[#FFFFFF33] rounded-tl-xl rounded-bl-xl">
            <div className='w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center bg-[#2D2D2B] my-4'>
              <img src={icon1} alt="Icon 1" className='w-[1.75rem]' />
            </div>
            <h3 className='text-xl md:text-2xl font-medium pb-4 text-white'>
              Innovative Designs
            </h3>
            <p className='text-[#FFFFFFCC] text-base md:text-[1.125rem] tracking-[0.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[26px]    pb-4'>
              At Lead Time, we are dedicated to revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
            </p>
          </div>

          <div className="p-6 border border-solid border-[#FFFFFF33]">
            <div className='w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center bg-[#2D2D2B] my-4'>
              <img src={icon2} alt="Icon 2" className='w-[1.75rem]' />
            </div>
            <h3 className='text-xl md:text-2xl font-medium pb-4 text-white'>
              Innovative Designs
            </h3>
            <p className='text-[#FFFFFFCC] text-base md:text-[1.125rem] tracking-[0.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[26px] pb-4'>
              At Lead Time, we are dedicated to revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
            </p>
          </div>

          <div className="p-6 border border-solid border-[#FFFFFF33]">
            <div className='w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center bg-[#2D2D2B] my-4'>
              <img src={icon3} alt="Icon 3" className='w-[1.75rem]' />
            </div>
            <h3 className='text-xl md:text-2xl font-medium pb-4 text-white'>
              Innovative Designs
            </h3>
            <p className='text-[#FFFFFFCC] text-base md:text-[1.125rem] tracking-[0.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[26px] pb-4'>
              At Lead Time, we are dedicated to revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
            </p>
          </div>

          <div className="p-6 border border-solid border-[#FFFFFF33] rounded-tr-xl rounded-br-xl">
            <div className='w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center bg-[#2D2D2B] my-4'>
              <img src={icon4} alt="Icon 4" className='w-[1.75rem]' />
            </div>
            <h3 className='text-xl md:text-2xl font-medium pb-4 text-white'>
              Innovative Designs
            </h3>
            <p className='text-[#FFFFFFCC] text-base md:text-[1.125rem] tracking-[0.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[26px] pb-4'>
              At Lead Time, we are dedicated to revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
