import React from 'react';
import WorkSlider from './WorkSlider';

const Works = () => {
  return (
    <div>
        <p className='text-center text-black font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]'>
          OUR WORKS
        </p>
        <h1 className='text-center text-black font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16'>
        Favourites From Our Portfolio
        </h1>

        <WorkSlider/>

        <div className='flex justify-center'>
            <div className="bg-[#222220] w-fit px-8 mt-16 py-3 rounded-full text-white  cursor-pointer text-[1.125rem] leading-[26px]">View All</div>
        </div>

    </div>
  )
}

export default Works;