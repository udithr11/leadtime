import React from 'react'
import AccordionComponent from '../components/AccordionComponent'


const Faq = () => {
  return (

<div className='px-8 md:px-[7rem] lg:px-[10.5rem] xl:px-[12rem] pt-16 md:pt-24 lg:pt-24 pb-16 md:pb-20 lg:pb-24'>
<p className='text-center text-black font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5px] md:tracking-[1px]'>
          FAQ
        </p>
        <h1 className='text-center text-black font-medium text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[0.5px] md:tracking-[1px] pb-8 md:pb-12 lg:pb-16'>
          Frequently Asked Questions
        </h1>

    <AccordionComponent 
  defaultExpanded 
  sx={{
    '&.Mui-expanded': {
      backgroundColor: '#1e1e1e',
      color: 'white',
    }
  }}
>
 
</AccordionComponent>
</div>
  )
}

export default Faq