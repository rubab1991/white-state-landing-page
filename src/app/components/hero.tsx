import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-[#043873] flex flex-wrap md:flex-nowrap justify-between items-center text-white w-full px-6 md:px-56 py-10 md:py-[140px]'>
        <div className='w-full md:w-1/2 space-y-6'>
          <h2 className='font-bold text-4xl md:text-6xl leading-tight'>
            Get More Done with <br /> Whitepace
          </h2>
          <p className='font-normal text-base md:text-lg'>
            Project management software that enables your teams to collaborate, plan, <br className='hidden md:block' /> 
            analyze, and manage everyday tasks.
          </p>
          <button 
            className='bg-[#4F9CF9] font-medium text-base md:text-lg rounded-lg w-[180px] md:w-[219px] h-12 md:h-16 flex items-center justify-center space-x-2 hover:bg-[#3e8ae4] focus:ring-2 focus:ring-white'>
            <span>Try Whitepace free</span> 
            <ArrowRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <Image 
            src="/images/Image-container.png" 
            alt="Project management illustration" 
            width={824} 
            height={549} 
            className='max-w-full h-auto'
          />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className='py-10 xl:py-[140px] px-3 xl:px-[220px] text-center'>
        <h1 className='font-bold text-3xl lg:text-4xl xl:text-7xl'>Our Sponsors</h1>
        <div className='mt-8 flex flex-wrap justify-center gap-6 xl:gap-10'>
          <Image src="/images/Apple.png" alt="Apple logo" width={40} height={40} className='xl:w-[55] xl:h-[68]' />
          <Image src="/images/Microsoft.png" alt="Microsoft logo" width={140} height={31} className='xl:w-[287] xl:h-[62]' />
          <Image src="/images/Slack.png" alt="Slack logo" width={140} height={31} className='xl:w-[280] xl:h-[71]' />
          <Image src="/images/Google.png" alt="Google logo" width={105} height={35} className='xl:w-[211] xl:h-[70]' />
        </div>
      </div>
    </>
  );
};

export default Hero;
