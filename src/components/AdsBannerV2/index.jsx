import React from 'react'
import { Link } from 'react-router-dom'


const AdsBannerV2 = () => {
  return (
    <div className="bannerBoxV2 flex flex-col sm:flex-row lg:flex-col gap-5 items-center overflow-hidden">
        <div className='group overflow-hidden rounded-md relative w-full'>
      <img
        src="/adsBannerV2.jpg"
        className="w-full transition group-hover:scale-105"
      />
      <div className='info absolute p-5 top-0 left-0 w-[50%] h-[100%] z-50 flex flex-col justify-center gap-2'>
        <h2 className='text-[20px] font-semibold'>Women White Shirt</h2>
        <span className='text-[20px] text-[#ff5252] font-semibold w-full'>$19.00</span>
        <Link to="/" className='underline w-full text-[16px] font-semibold link'>SHOP NOW</Link>
      </div>
      </div>
      <div className='group  overflow-hidden relative rounded-md relative w-full'>
      <img
        src="/adsBannerV22.webp"
        className="w-full transition group-hover:scale-105"
      />
      <div className='info absolute p-5 top-0 left-0 w-[50%] h-[100%] z-50 flex flex-col justify-center gap-2'>
        <h2 className='text-[20px] font-semibold'>Xiaomi Mi Notebook</h2>
        <span className='text-[20px] text-[#ff5252] font-semibold w-full'>$290.00</span>
        <Link to="/" className='underline w-full text-[16px] font-semibold link'>SHOP NOW</Link>
      </div>
      </div>
    </div>
  )
}


export default AdsBannerV2
