import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#043873] text-white w-full max-w-[1920px] py-16 px-2 xl:py-[140px] xl:px-[220px]'>
      <ul className='flex px-24  sm:justify-between gap-8 xl:gap-[100px]'>
        {/* Logo & Description */}
        <li className='flex flex-col xl:gap-4 w-full xl:w-[295px]'>
          <Image src="/images/logo.png" alt="logo" width={191} height={34} />
          <p className='font-normal text-sm md:text-lg'>
            whitespace was created for <br /> the new ways we live and <br /> work. 
            We make a better <br /> workspace around the world
          </p>
        </li>

        {/* Product Section */}
        <li className='flex flex-col gap-2 xl:gap-4 w-full xl:w-[295px]'>
          <h3 className='font-bold text-base md:text-lg'>Product</h3>
          <p className='font-normal text-sm md:text-base'>Overview</p>
          <p className='font-normal text-sm md:text-base'>Pricing</p>
          <p className='font-normal text-sm md:text-base'>Customer stories</p>
        </li>

        {/* Resources Section */}
        <li className='flex flex-col gap-2 xl:gap-4 w-full xl:w-[295px]'>
          <h3 className='font-bold text-base md:text-lg'>Resources</h3>
          <p className='font-normal text-sm md:text-base'>Blogs</p>
          <p className='font-normal text-sm md:text-base'>Guides and tutorials</p>
          <p className='font-normal text-sm md:text-base'>Help center</p>
        </li>

        {/* Company Section */}
        <li className='flex flex-col gap-2 xl:gap-4 w-full xl:w-[295px]'>
          <h3 className='font-bold text-base md:text-lg'>Company</h3>
          <p className='font-normal text-sm md:text-base'>About us</p>
          <p className='font-normal text-sm md:text-base'>Careers</p>
          <p className='font-normal text-sm md:text-base'>Media kit</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
