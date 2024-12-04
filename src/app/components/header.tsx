import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-[#043873] w-full max-w-[1920px] h-[92px] flex items-center justify-between py-2 px-2 xl:px-[220px]'>
      {/* Logo Section */}
      <div>
        <Image 
          src="/images/logo.png" 
          alt="logo" 
          width={120} 
          height={28} 
          className="xl:w-[191px] xl:h-[34px]"
        />
      </div>

      {/* Navigation & Button */}
      <div className='flex items-center justify-between w-full md:w-auto gap-4 md:gap-[220px]'>
        <nav>
          <ul className='flex flex-wrap justify-between gap-4 xl:gap-[32px] text-white lg:text-lg xl:text-2xl font-medium'>
            <li className="hover:text-yellow-300">Products</li>
            <li className="hover:text-yellow-300">Solutions</li>
            <li className="hover:text-yellow-300">Resources</li>
            <li className="hover:text-yellow-300">Pricing</li>
          </ul>
        </nav>
        <button 
          className='bg-[#FFE492] px-6 py-2 xl:px-10 xl:py-4 rounded-lg text-[#043873] lg:text-lg xl:text-2xl font-medium hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-400'>
          Login
        </button>
      </div>
    </header>
  )
}

export default Header
